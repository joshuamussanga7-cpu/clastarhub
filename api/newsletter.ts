import {body,respond,supabase,safeText} from './_lib'
export default async function handler(req:Request){
 if(req.method==='OPTIONS')return respond(req,{ok:true})
 if(req.method!=='POST')return respond(req,{error:'Method not allowed'},405)
 const b=await body(req),email=safeText(b?.email,254).toLowerCase()
 if(!/^\S+@\S+\.\S+$/.test(email)||b?.consent!==true)return respond(req,{error:'A valid email and explicit consent are required.'},400)
 try{await supabase('newsletter_subscribers',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({email,source:safeText(b?.source,80)||'website'})});return respond(req,{ok:true,message:'Subscription request recorded. Confirmation workflow must be enabled before sending newsletters.'},201)}
 catch(e){return respond(req,{error:e instanceof Error?e.message:'Unable to save subscription'},503)}
}
