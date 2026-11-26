-- ClastarHub platform foundation. Run in the Supabase SQL editor or via Supabase CLI.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role text not null default 'client' check (role in ('client','author','editor','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.clients (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references auth.users(id) on delete cascade,
  organisation text,
  created_at timestamptz not null default now()
);
create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.clients(id) on delete set null,
  title text not null,
  slug text unique,
  summary text,
  status text not null default 'discovery' check (status in ('discovery','planning','in_progress','review','completed','on_hold')),
  visibility text not null default 'private' check (visibility in ('private','public')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.project_members (
  project_id uuid references public.projects(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  member_role text not null default 'client' check (member_role in ('client','manager')),
  primary key(project_id,user_id)
);
create table if not exists public.milestones (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  description text,
  due_at timestamptz,
  status text not null default 'pending' check (status in ('pending','in_progress','complete')),
  sort_order int not null default 0,
  created_at timestamptz not null default now()
);
create table if not exists public.project_messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  body text not null check (char_length(body) between 1 and 10000),
  created_at timestamptz not null default now()
);
create table if not exists public.project_files (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  uploaded_by uuid not null references auth.users(id),
  object_path text not null,
  file_name text not null,
  content_type text,
  created_at timestamptz not null default now()
);
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  service text,
  budget text,
  message text not null,
  source text default 'website',
  status text not null default 'new' check (status in ('new','contacted','qualified','in_progress','won','closed')),
  created_at timestamptz not null default now()
);
create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  consented_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  source text default 'website'
);
create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  body_md text not null default '',
  category text,
  tags text[] not null default '{}',
  status text not null default 'draft' check (status in ('draft','review','published','archived')),
  author_id uuid references auth.users(id),
  published_at timestamptz,
  seo_title text,
  seo_description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.labs_experiments (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text,
  body_md text,
  status text not null default 'concept' check (status in ('concept','prototype','experimental','beta','released','archived')),
  demo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.ai_conversations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  session_hash text,
  created_at timestamptz not null default now()
);
create table if not exists public.ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.ai_conversations(id) on delete cascade,
  role text not null check (role in ('user','assistant')),
  content text not null,
  created_at timestamptz not null default now()
);
create table if not exists public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid references auth.users(id) on delete set null,
  action text not null,
  resource_type text not null,
  resource_id text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index if not exists projects_client_idx on public.projects(client_id);
create index if not exists milestones_project_idx on public.milestones(project_id,sort_order);
create index if not exists messages_project_idx on public.project_messages(project_id,created_at);
create index if not exists leads_created_idx on public.leads(created_at desc);
create index if not exists articles_status_published_idx on public.articles(status,published_at desc);
create index if not exists labs_status_idx on public.labs_experiments(status);

create or replace function public.is_staff()
returns boolean language sql stable security definer set search_path=public as $$
 select exists(select 1 from public.profiles p where p.id=auth.uid() and p.role in ('admin','editor','author'));
$$;
create or replace function public.can_access_project(pid uuid)
returns boolean language sql stable security definer set search_path=public as $$
 select public.is_staff() or exists(
  select 1 from public.project_members pm where pm.project_id=pid and pm.user_id=auth.uid()
 ) or exists(
  select 1 from public.projects pr join public.clients c on c.id=pr.client_id
  where pr.id=pid and c.owner_user_id=auth.uid()
 );
$$;

alter table public.profiles enable row level security;
alter table public.clients enable row level security;
alter table public.projects enable row level security;
alter table public.project_members enable row level security;
alter table public.milestones enable row level security;
alter table public.project_messages enable row level security;
alter table public.project_files enable row level security;
alter table public.leads enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.articles enable row level security;
alter table public.labs_experiments enable row level security;
alter table public.ai_conversations enable row level security;
alter table public.ai_messages enable row level security;
alter table public.audit_events enable row level security;

create policy "profiles read self or staff" on public.profiles for select using(id=auth.uid() or public.is_staff());
create policy "profiles update self" on public.profiles for update using(id=auth.uid()) with check(id=auth.uid());
create policy "clients own or staff" on public.clients for select using(owner_user_id=auth.uid() or public.is_staff());
create policy "staff manage clients" on public.clients for all using(public.is_staff()) with check(public.is_staff());
create policy "projects access" on public.projects for select using(public.can_access_project(id) or (visibility='public' and status='completed'));
create policy "staff manage projects" on public.projects for all using(public.is_staff()) with check(public.is_staff());
create policy "members access" on public.project_members for select using(user_id=auth.uid() or public.is_staff());
create policy "staff manage members" on public.project_members for all using(public.is_staff()) with check(public.is_staff());
create policy "milestones project access" on public.milestones for select using(public.can_access_project(project_id));
create policy "staff manage milestones" on public.milestones for all using(public.is_staff()) with check(public.is_staff());
create policy "messages project access" on public.project_messages for select using(public.can_access_project(project_id));
create policy "members send project messages" on public.project_messages for insert with check(sender_id=auth.uid() and public.can_access_project(project_id));
create policy "files project access" on public.project_files for select using(public.can_access_project(project_id));
create policy "staff manage files" on public.project_files for all using(public.is_staff()) with check(public.is_staff());
create policy "staff manage leads" on public.leads for all using(public.is_staff()) with check(public.is_staff());
create policy "staff manage newsletter" on public.newsletter_subscribers for all using(public.is_staff()) with check(public.is_staff());
create policy "published articles public" on public.articles for select using(status='published' or public.is_staff());
create policy "staff manage articles" on public.articles for all using(public.is_staff()) with check(public.is_staff());
create policy "published labs public" on public.labs_experiments for select using(status in ('beta','released') or public.is_staff());
create policy "staff manage labs" on public.labs_experiments for all using(public.is_staff()) with check(public.is_staff());
create policy "own AI conversations" on public.ai_conversations for select using(user_id=auth.uid() or public.is_staff());
create policy "own AI messages" on public.ai_messages for select using(exists(select 1 from public.ai_conversations c where c.id=conversation_id and (c.user_id=auth.uid() or public.is_staff())));
create policy "staff audit access" on public.audit_events for select using(public.is_staff());

-- Create private storage bucket for client deliverables. Keep objects private; use signed URLs.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('client-files','client-files',false,52428800,array['application/pdf','image/jpeg','image/png','image/webp','application/zip','text/plain'])
on conflict(id) do nothing;
create policy "project members read client files" on storage.objects for select using(bucket_id='client-files' and public.can_access_project((storage.foldername(name))[1]::uuid));
create policy "staff upload client files" on storage.objects for insert with check(bucket_id='client-files' and public.is_staff());
create policy "staff update client files" on storage.objects for update using(bucket_id='client-files' and public.is_staff());
create policy "staff delete client files" on storage.objects for delete using(bucket_id='client-files' and public.is_staff());
