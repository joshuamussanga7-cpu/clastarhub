import {body,respond,supabase,requireStaff,safeText} from './_lib'
const tables:Record<string,string>={articles:'articles',labs:'labs_experiments',leads:'leads',projects:'projects'}
export default async function handler(req:Request){
 if(req.method==='OPTIONS')return respond(req,{ok:true})
 const staff=await requireStaff(req);if(!staff)return respond(req,{error:'Authentication and staff permissions required.'},401)
 const u=new URL(req.url),kind=u.searchParams.get('resource')||'',table=tables[kind]
 if(!table)return respond(req,{error:'Unknown resource.'},404)
 try{
  if(req.method==='GET'){const rows=await supabase(table+'?select=*&order=created_at.desc&limit=100');return respond(req,{ok:true,items:rows})}
  if(req.method==='POST'||req.method==='PATCH'){
   const b=await body(req);const allowed=kind==='articles'?['slug','title','excerpt','body_md','category','tags','status','published_at','seo_title','seo_description']:kind==='labs'?['slug','title','summary','body_md','status','demo_url']:kind==='leads'?['status']:['title','summary','status','visibility','client_id']
   const record:Record<string,unknown>={};for(const k of allowed)if(b&&Object.hasOwn(b,k))record[k]=b[k]
   if(kind==='articles'||kind==='labs'){if(!safeText(record.title,180)||!safeText(record.slug,180))return respond(req,{error:'Title and slug are required.'},400)}
   if(req.method==='POST'){if(kind==='articles')record.author_id=staff.id;const out=await supabase(table,{method:'POST',headers:{Prefer:'return=representation'},body:JSON.stringify(record)});return respond(req,{ok:true,item:out?.[0]},201)}
   const id=u.searchParams.get('id');if(!id)return respond(req,{error:'Record id required.'},400)
   const out=await supabase(table+'?id=eq.'+encodeURIComponent(id),{method:'PATCH',headers:{Prefer:'return=representation'},body:JSON.stringify(record)});return respond(req,{ok:true,item:out?.[0]})
  }
  if(req.method==='DELETE'){const id=u.searchParams.get('id');if(!id)return respond(req,{error:'Record id required.'},400);await supabase(table+'?id=eq.'+encodeURIComponent(id),{method:'DELETE'});return respond(req,{ok:true})}
  return respond(req,{error:'Method not allowed'},405)
 }catch(e){return respond(req,{error:e instanceof Error?e.message:'Request failed'},503)}
}
