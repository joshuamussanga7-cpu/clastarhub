import {respond,supabase,authenticate} from './_lib'
export default async function handler(req:Request){
 if(req.method==='OPTIONS')return respond(req,{ok:true})
 if(req.method!=='GET')return respond(req,{error:'Method not allowed'},405)
 const user=await authenticate(req);if(!user?.id)return respond(req,{error:'Sign in required.'},401)
 try{
  const projects=await supabase('projects?select=id,title,summary,status,updated_at,project_members!inner(user_id)&project_members.user_id=eq.'+encodeURIComponent(user.id),{headers:{Prefer:''}},false)
  const ids=projects.map((p:any)=>p.id)
  const milestones=ids.length?await supabase('milestones?select=*&project_id=in.('+ids.join(',')+')&order=sort_order.asc',{},false):[]
  return respond(req,{ok:true,projects,milestones})
 }catch(e){return respond(req,{error:e instanceof Error?e.message:'Unable to load workspace'},503)}
}
