import {body,respond,supabase,safeText} from './_lib'
export default async function handler(req:Request){
 if(req.method==='OPTIONS')return respond(req,{ok:true})
 if(req.method!=='POST')return respond(req,{error:'Method not allowed'},405)
 const b=await body(req); const name=safeText(b?.name,120),email=safeText(b?.email,254).toLowerCase(),message=safeText(b?.message,5000)
 if(!name||!/^\S+@\S+\.\S+$/.test(email)||message.length<10)return respond(req,{error:'Please provide a name, valid email and message (at least 10 characters).'},400)
 try{await supabase('leads',{method:'POST',headers:{Prefer:'return=minimal'},body:JSON.stringify({name,email,message,company:safeText(b?.company,160),service:safeText(b?.service,120),budget:safeText(b?.budget,80),source:safeText(b?.source,80)||'website'})});return respond(req,{ok:true,message:'Your enquiry has been received.'},201)}
 catch(e){return respond(req,{error:e instanceof Error?e.message:'Unable to save enquiry'},503)}
}
