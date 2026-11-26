const url = process.env.SUPABASE_URL || ''
const anon = process.env.SUPABASE_ANON_KEY || ''
const service = process.env.SUPABASE_SERVICE_ROLE_KEY || ''
export const json = (data: unknown, status=200) => new Response(JSON.stringify(data), {status,headers:{'content-type':'application/json','cache-control':'no-store'}})
export const cors = (req: Request) => ({'access-control-allow-origin':process.env.APP_ORIGIN || '*','access-control-allow-methods':'GET,POST,PATCH,DELETE,OPTIONS','access-control-allow-headers':'content-type,authorization','vary':'origin'})
export const respond = (req:Request,data:unknown,status=200) => new Response(JSON.stringify(data),{status,headers:{...cors(req),'content-type':'application/json','cache-control':'no-store'}})
export const body = async (req:Request) => { try{return await req.json()}catch{return null} }
export async function supabase(path:string,init:RequestInit={},admin=true){
 if(!url || !(admin?service:anon)) throw new Error('Supabase environment is not configured')
 const key=admin?service:anon
 const res=await fetch(url.replace(/\/$/,'')+'/rest/v1/'+path,{...init,headers:{apikey:key,authorization:'Bearer '+key,'content-type':'application/json',...(init.headers||{})}})
 const data=await res.json().catch(()=>null)
 if(!res.ok) throw new Error(data?.message||data?.hint||'Database request failed')
 return data
}
export async function authenticate(req:Request){
 const token=(req.headers.get('authorization')||'').replace(/^Bearer\s+/i,'')
 if(!token || !url || !anon) return null
 const res=await fetch(url.replace(/\/$/,'')+'/auth/v1/user',{headers:{apikey:anon,authorization:'Bearer '+token}})
 if(!res.ok)return null
 return await res.json()
}
export async function requireStaff(req:Request){
 const user=await authenticate(req); if(!user?.id)return null
 const profiles=await supabase('profiles?select=role&id=eq.'+encodeURIComponent(user.id),{},true)
 return profiles?.[0] && ['admin','editor','author'].includes(profiles[0].role) ? user : null
}
export const safeText=(v:unknown,max=5000)=>typeof v==='string'?v.trim().slice(0,max):''
