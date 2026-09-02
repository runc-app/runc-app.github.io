const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AdminPage-m7gfsgiA.js","assets/vendor-query-d2gl9dP3.js","assets/vendor-react-bqFgLNeP.js","assets/browser-image-compression-DILJcqf6.js","assets/vendor-ui-B5if6ePH.js","assets/PolicySettings-3RgKZz1o.js","assets/CrewMemberList-BSENoGaW.js","assets/vendor-supabase-CFO1_xME.js","assets/vendor-motion-BOHvuaNn.js","assets/LoginPage-BzEJrSCs.js","assets/RuncLogo-Cst8Lh3v.js","assets/CrewSelectPage-DV1Ltt7R.js","assets/CrewJoinModal-BCCcoYw5.js","assets/PageHeader-DCh9cdv7.js","assets/CrewInfoModal-CROgKQc1.js","assets/useMyCrews-BYiygmb8.js","assets/DashboardPage-B3Cwoj2H.js","assets/FineReceiptModal-B-m5KsoM.js","assets/useCrewFines-CqUpeGBK.js","assets/useWeeklyStats-IhtPgm4u.js","assets/shareCaptionBar-C2zcQAGe.js","assets/GroupSelectPage-Cg8Sctyd.js","assets/InvitePage-BI41CIz7.js","assets/CrewMemberPage-B3qVeW5b.js","assets/UserProfile-JEH675sY.js","assets/ProfilePage-CI5GbIAf.js","assets/RankPage-pX5WoMt2.js","assets/RecordPage-BDu1720G.js","assets/SquadPage-BLTI7T7q.js","assets/ShareRunPage-C-ZXI1Ol.js","assets/ShareGoalPage-8Al5BN-X.js"])))=>i.map(i=>d[i]);
import{j as d,u as _i,a as Sr,b as Ci,Q as Ei,c as ji}from"./vendor-query-d2gl9dP3.js";import{c as Ii,a as j,u as it,g as _r,d as at,e as zi,f as ye,h as Ni,O as Pi,H as Ti}from"./vendor-react-bqFgLNeP.js";import{t as ee,W as Cr,S as St,X as _n,R as Ai,T as Er,L as Ri,C as Di,a as Nn,P as _t,b as Li,c as kn,d as Oi,e as Mi,f as Pn,A as Ct,H as Fi,g as Ui,h as $i,i as qi,j as Bi,U as Vi,k as Hi}from"./vendor-ui-B5if6ePH.js";import{c as Wi}from"./vendor-supabase-CFO1_xME.js";import{A as Xi,m as Ki}from"./vendor-motion-BOHvuaNn.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();var mn={},Et;function Gi(){if(Et)return mn;Et=1;var e=Ii();return mn.createRoot=e.createRoot,mn.hydrateRoot=e.hydrateRoot,mn}var Yi=Gi();const Qi="modulepreload",Ji=function(e){return"/"+e},jt={},xe=function(n,t,r){let i=Promise.resolve();if(t&&t.length>0){let c=function(s){return Promise.all(s.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),o=l?.nonce||l?.getAttribute("nonce");i=c(t.map(s=>{if(s=Ji(s),s in jt)return;jt[s]=!0;const u=s.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Qi,u||(h.as="script"),h.crossOrigin="",h.href=s,o&&h.setAttribute("nonce",o),document.head.appendChild(h),u)return new Promise((p,x)=>{h.addEventListener("load",p),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(l){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=l,window.dispatchEvent(o),!o.defaultPrevented)throw l}return i.then(l=>{for(const o of l||[])o.status==="rejected"&&a(o.reason);return n().catch(a)})};var Zi=Object.defineProperty,ea=Object.defineProperties,na=Object.getOwnPropertyDescriptors,It=Object.getOwnPropertySymbols,ta=Object.prototype.hasOwnProperty,ra=Object.prototype.propertyIsEnumerable,zt=(e,n,t)=>n in e?Zi(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,Nt=(e,n)=>{for(var t in n||(n={}))ta.call(n,t)&&zt(e,t,n[t]);if(It)for(var t of It(n))ra.call(n,t)&&zt(e,t,n[t]);return e},Pt=(e,n)=>ea(e,na(n)),un=e=>{const n=(t,r)=>({name:t,parser:e,kind:"required",options:r});return n.optional=(t,r)=>({name:t,parser:e,kind:"optional",options:r}),n},G=un({parse:e=>e,serialize:e=>e});un({parse:e=>{const n=parseInt(e,10);if(Number.isNaN(n))throw new Error(`parameter value is invalid: "${e}"`);return n},serialize:e=>e.toString()});un({parse:e=>{const n=Date.parse(e);if(Number.isNaN(n))throw new Error(`parameter value is invalid: "${e}"`);return new Date(n)},serialize:e=>e.toISOString()});un({parse:e=>{const n=Date.parse(e);if(Number.isNaN(n))throw new Error(`parameter value is invalid: "${e}"`);return new Date(n)},serialize:e=>e.toISOString().slice(0,10)});un({parse:e=>e==="true",serialize:e=>e.toString()});var ia=(e,n)=>{const t=r=>new Proxy({"~context":r,"~routes":e},{get:(i,a,l)=>typeof a=="string"&&a[0]!=="~"?t(aa(a,r)):Reflect.get(i,a,l)});return t({isRelative:!1,path:[],children:e,nodes:[],relativeNodes:[],baseUrl:void 0})},aa=(e,n)=>{var t;if(e==="_")return Pt(Nt({},n),{path:n.path.concat(e),nodes:n.nodes.concat(n.nodes),relativeNodes:[],isRelative:!0});const r=(t=n.children)==null?void 0:t[e];if(!r)throw Error(`unknown segment ${e} in ${n.path.concat(e)}`);return Pt(Nt({},n),{path:n.path.concat(e),nodes:n.nodes.concat(r),relativeNodes:n.relativeNodes.concat(r),children:r.children})},be=({"~context":{isRelative:e,relativeNodes:n}})=>{const t=e?"":"/",r=n.flatMap(i=>{var a,l;return(l=(a=i.template)!=null?a:i.path)!=null?l:[]}).map(i=>{var a,l;return typeof i=="string"?i:(l=(a=i.options)==null?void 0:a.template)!=null?l:`:${i.name}${i.kind==="optional"?"?":""}`}).join("/");return t+r},se=({"~context":{relativeNodes:e,isRelative:n,baseUrl:t}},r)=>{const i=e.flatMap(l=>{var o;return(o=l.path)!=null?o:[]}).flatMap(l=>typeof l=="string"?l:r[l.name]!==void 0?l.parser.serialize(r[l.name]):[]).join("/");return(n?"":`${t??""}/`)+i};const jr=j.createContext(null),Tt="runc_dev_mode";function la({children:e}){const[n,t]=j.useState(()=>{try{return localStorage.getItem(Tt)==="true"}catch{return!1}}),[r,i]=j.useState(!1),[a,l]=j.useState(0),o=j.useRef(null),c=j.useRef(null),s=j.useRef(!1),u=j.useCallback(y=>{t(y);try{localStorage.setItem(Tt,String(y))}catch{}y?ee.success("🛠️ 개발자 모드가 활성화되었습니다."):(ee.info("개발자 모드가 비활성화되었습니다."),i(!1))},[]),f=j.useCallback(()=>{u(!n)},[n,u]),h=j.useCallback(y=>{if(s.current){s.current=!1;return}o.current&&(clearTimeout(o.current),o.current=null),l(_=>{const w=_+1;return w>=5?(u(!n),0):(w>=3&&ee.info(`개발자 모드 활성화까지 ${5-w}회 남았습니다.`,{duration:800}),w===1&&y&&(o.current=setTimeout(()=>{y(),l(0)},350)),w)})},[n,u]),p=j.useCallback(()=>{s.current=!1,c.current=setTimeout(()=>{s.current=!0,u(!n)},1500)},[n,u]),x=j.useCallback(()=>{c.current&&(clearTimeout(c.current),c.current=null)},[]);return j.useEffect(()=>{if(a>0){const y=setTimeout(()=>l(0),1500);return()=>clearTimeout(y)}},[a]),d.jsx(jr.Provider,{value:{isDevMode:n,setIsDevMode:u,toggleDevMode:f,devModalOpen:r,setDevModalOpen:i,handleVersionClick:h,handleVersionTouchStart:p,handleVersionTouchEnd:x},children:e})}function lt(){const e=j.useContext(jr);return e||{isDevMode:!1,setIsDevMode:()=>{},toggleDevMode:()=>{},devModalOpen:!1,setDevModalOpen:()=>{},handleVersionClick:()=>{},handleVersionTouchStart:()=>{},handleVersionTouchEnd:()=>{}}}function oa(){const{isDevMode:e,setDevModalOpen:n}=lt();return e?d.jsxs("button",{type:"button",onClick:()=>n(!0),title:"개발자 도구 (Dev Tools)",className:"fixed bottom-20 right-4 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-yellow text-black font-sporty-heading font-black text-xs shadow-[0_4px_20px_rgba(204,255,0,0.4)] border-2 border-black hover:scale-105 active:scale-95 transition-all cursor-pointer select-none",children:[d.jsx(Cr,{size:13,strokeWidth:2.5}),d.jsx("span",{children:"DEV"})]}):null}const sa="https://hokoyfagclwsinknttzi.supabase.co",ua="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhva295ZmFnY2x3c2lua250dHppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5NjUyMDAsImV4cCI6MjA5MjU0MTIwMH0.zyUPfmqQ6quNWyWIaj_KbxbZR_-JYLxGDWTXIZWW7Fc",I=Wi(sa,ua);async function ca(e){return I.auth.signInWithOAuth({provider:"kakao",options:{redirectTo:e||window.location.origin,scopes:"profile_nickname profile_image"}})}async function da(){return I.auth.signOut()}function fa(e){const n=e?.name||e?.full_name||e?.preferred_username||e?.user_name||e?.nick_name||"",t=e?.avatar_url||e?.picture||e?.profile_image||null;return{nickname:n,avatarUrl:t}}async function pa(e){return I.from("profiles").select("*").eq("id",e).single()}async function Oc(e){return I.from("profiles").select("id, nickname, avatar_url").in("id",e)}async function Ir(e,n){return I.from("profiles").update(n).eq("id",e)}async function Mc(e,n){return I.from("profiles").update({crew_id:n}).eq("id",e)}async function zr(e,n){return I.from("crew_profiles").select("*").eq("user_id",e).eq("crew_id",n).single()}async function Fc(e){return I.from("crew_profiles").select("*").eq("crew_id",e)}async function Uc(e){return I.from("crew_profiles").select("user_id, crew_id, nickname").in("crew_id",e)}async function ha(e,n,t){return I.from("crew_profiles").update(t).eq("user_id",e).eq("crew_id",n)}async function $c(e){return I.from("crew_profiles").upsert(e,{onConflict:"user_id,crew_id"})}async function qc(e){return I.from("crew_profiles").upsert(e,{onConflict:"user_id,crew_id"})}async function Bc(e,n){const{error:t}=await I.storage.from("avatars").upload(e,n,{upsert:!0});if(t)throw t;const{data:{publicUrl:r}}=I.storage.from("avatars").getPublicUrl(e);return r}async function ma(e){return I.from("profiles").upsert(e).select().single()}async function Wn(e){return I.from("crews").select("*").eq("id",e).single()}async function Vc(e){return I.from("crew_members").select("role, crews(*)").eq("user_id",e)}async function Hc(e){return I.from("crews").select("*").eq("invite_code",e).single()}async function Wc(e){return I.from("crews").insert(e).select().single()}async function Tn(e,n){return I.from("crews").update(n).eq("id",e).select().single()}async function ga(e,n){return I.rpc("transfer_crew_leader",{p_crew_id:e,p_new_leader_id:n})}async function xa(e){return I.from("crews").delete().eq("id",e)}async function Xc(e){return I.from("crew_members").select("*").eq("crew_id",e)}async function Kc(e){return I.from("crew_members").select("*").in("crew_id",e)}async function ya(e,n){let t=I.from("crew_members").delete().eq("crew_id",e);return n&&(t=t.eq("user_id",n)),t}async function Gc(e,n){return I.from("crew_members").select("role").eq("crew_id",e).eq("user_id",n).single()}async function Yc(e){return I.from("crew_members").select("*",{count:"exact",head:!0}).eq("crew_id",e)}async function ba(e){return I.from("crew_members").insert(e)}async function Qc(e,n,t="member"){return ba({crew_id:e,user_id:n,role:t})}async function Jc(e){return I.rpc("join_crew_by_invite_code",{p_invite_code:e})}async function Zc(e){const n=e.trim(),t=n.toUpperCase();return Promise.all([I.from("crews").select("*").eq("invite_code",t),I.from("crews").select("*").ilike("name",`%${n}%`)])}async function ed(e){return I.from("crew_settings").insert(e)}async function wa(e){return I.from("run_records").insert(e)}async function ka(e){const{data:n,error:t}=await I.rpc("delete_run_record",{p_record_id:e});return{data:n?[{id:e}]:[],error:t}}async function nd(e){if(!e.id)return{error:new Error("기록 ID가 올바르지 않습니다.")};const{data:n,error:t}=await I.rpc("set_primary_run_record",{p_record_id:e.id});return t?{error:t}:{data:n,error:null}}async function va(e){let n=I.from("run_records").select("*");return e.userId&&(n=n.eq("user_id",e.userId)),e.crewId!=null&&(n=n.eq("crew_id",e.crewId)),e.startDate&&(n=n.gte("created_at",e.startDate)),e.endDate&&(n=n.lt("created_at",e.endDate)),e.isExtra!==void 0&&(n=n.eq("is_extra",e.isExtra)),n=n.order("created_at",{ascending:!1}),n}async function td(e,n,t,r){let i=I.from("run_records").select("*").eq("user_id",e).gte("created_at",n).lte("created_at",t).order("created_at",{ascending:!1});return r&&(i=i.eq("crew_id",r)),i}function Sa(e){const n=e instanceof Error&&typeof e.originalError<"u"?e.originalError:e;return n instanceof Error&&/Failed to fetch|NetworkError|Load failed/i.test(n.message)}function _a(e=8e3){return typeof navigator>"u"||navigator.onLine?Promise.resolve():new Promise(n=>{const t=setTimeout(()=>{window.removeEventListener("online",r),n()},e);function r(){clearTimeout(t),n()}window.addEventListener("online",r,{once:!0})})}async function rd(e,n,t){try{const{data:u}=await I.auth.getSession(),f=u?.session,h=f?.expires_at?f.expires_at*1e3<Date.now()+6e4:!1;(!f||h)&&await I.auth.refreshSession()}catch(u){console.warn("[uploadRunImage] Auth session check failed, continuing:",u)}const r=(t.split(".").pop()||"jpg").toLowerCase(),i=["jpg","jpeg","png","webp","gif"].includes(r)?r:"jpg",a=()=>`${e}/${Date.now()}_${Math.random().toString(36).slice(2,7)}.${i}`,l=n.type&&n.type.startsWith("image/")?n.type:i==="png"?"image/png":"image/jpeg",o=n instanceof File?n:new File([n],`${Date.now()}.${i}`,{type:l}),c=5;let s=null;for(let u=1;u<=c;u++){await _a();const f=a();try{const{error:h}=await I.storage.from("run_images").upload(f,o,{contentType:l,upsert:!1});if(!h){const{data:{publicUrl:p}}=I.storage.from("run_images").getPublicUrl(f);return p}s=h,console.warn(`[uploadRunImage] attempt ${u}/${c} failed:`,h.name,h.message,h.originalError),(h.message?.includes("JWT")||h.message?.includes("security policy")||h.message?.includes("Unauthorized")||h.message?.includes("401")||h.message?.includes("403"))&&await I.auth.refreshSession().catch(()=>{})}catch(h){s=h instanceof Error?h:new Error(String(h)),console.warn(`[uploadRunImage] attempt ${u}/${c} threw:`,s)}u<c&&await new Promise(h=>setTimeout(h,u*700))}throw s&&Sa(s)?new Error("네트워크 연결이 불안정합니다. Wi-Fi/데이터 연결을 확인하고 다시 시도해주세요.",{cause:s}):s||new Error("사진 업로드 중 네트워크 오류가 발생했습니다.")}async function id(e){return I.functions.invoke("analyze-run-image",{body:e})}async function ad(e,n){let t=I.from("squad_posts").select("*, profiles(nickname, avatar_url)").eq("crew_id",e);return n&&n!=="all"&&(t=t.eq("type",n)),t.order("is_pinned",{ascending:!1}).order("created_at",{ascending:!1})}async function ld(e){return I.from("squad_posts").insert(e)}async function od(e,n){return I.rpc("set_squad_post_pinned",{p_post_id:e,p_pinned:n})}async function sd(e,n="pending"){return I.from("crew_join_requests").select("id, user_id, group_type, created_at").eq("crew_id",e).eq("status",n).order("created_at",{ascending:!0})}async function ud(e){return I.from("crew_join_requests").insert(e)}async function cd(e,n){return I.from("crew_join_requests").update({status:n}).eq("id",e)}async function dd(e,n){return I.rpc("approve_crew_join_request",{p_request_id:e,p_group_type:n})}async function fd(e,n,t){return I.from("crew_profiles").update({penalty_deferred_weeks:t}).eq("user_id",e).eq("crew_id",n)}async function Nr(e){return I.from("crew_settings").select("*").eq("crew_id",e).single()}async function Ca(e,n){return I.from("crew_settings").update(n).eq("crew_id",e)}async function pd(e){return I.from("crew_group_settings_history").select("*").eq("crew_id",e)}async function hd(e,n,t,r){return I.from("crew_group_settings_history").insert({crew_id:e,group_targets:n,effective_from:t,...r&&{penalty_mode:r.penalty_mode,fine_count:r.fine_count,fine_distance:r.fine_distance,fine_integrated:r.fine_integrated}})}function Pr(e,n){return e.filter(t=>t.effective_from<=n).sort((t,r)=>t.effective_from!==r.effective_from?t.effective_from<r.effective_from?1:-1:(r.created_at??"").localeCompare(t.created_at??""))[0]}function md(e,n,t){const r=Pr(e,n);return Tr(r?r.group_targets:t)}function gd(e,n,t){const r=Pr(e.filter(i=>i.fine_integrated!==null),n);return r?{penalty_mode:r.penalty_mode??t.penalty_mode,fine_count:r.fine_count??t.fine_count,fine_distance:r.fine_distance??t.fine_distance,fine_integrated:r.fine_integrated??t.fine_integrated}:t}function qe(e,n){return typeof e=="number"&&Number.isFinite(e)?e:n}function Ea(e){if(!Array.isArray(e))return null;const n=e.filter(t=>!!t&&typeof t=="object"&&typeof t.min_pace=="string"&&typeof t.max_pace=="string"&&typeof t.penalty=="number"&&Number.isFinite(t.penalty));return n.length>0?n:null}function ja(e){if(typeof e=="number")return{target:e,minValid:5,minRuns:2};const n=e&&typeof e=="object"?e:{};return{target:qe(n.target,0),minValid:qe(n.minValid,5),minRuns:qe(n.minRuns,2),maxTime:qe(n.maxTime,null),penaltyExtra:qe(n.penaltyExtra,null),fee:qe(n.fee,null),pacePenaltyRanges:Ea(n.pacePenaltyRanges)}}function Tr(e){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>n!=="_weekly_events").map(([n,t])=>[n,ja(t)]))}function Ia(e){return!e||typeof e!="object"?{}:e._weekly_events||{}}const xd={A:30,B:25,C:20,D:16,E:12,F:10,G:8,H:8,I:8,J:8};async function yd(e,n){return I.from("crew_fines").select("*").eq("crew_id",e).order("week_key",{ascending:!1})}async function bd(e){return I.from("crew_fines").upsert({...e,updated_at:new Date().toISOString()},{onConflict:"crew_id,user_id,week_key"}).select().single()}async function wd(e,n){return I.from("crew_fines").update({is_paid:n,paid_at:n?new Date().toISOString():null,updated_at:new Date().toISOString()}).eq("id",e).select().single()}async function kd(e){return I.from("crew_donations").select("*").eq("crew_id",e).order("donated_at",{ascending:!1}).order("created_at",{ascending:!1})}async function vd(e){return I.from("crew_donations").insert(e).select().single()}async function Sd(e){return I.from("crew_donations").delete().eq("id",e)}async function _d(e){return I.from("crew_fine_reminders").select("*").eq("crew_id",e).order("created_at",{ascending:!1})}async function Cd(e){return I.from("crew_fine_reminders").insert(e).select().single()}const za=["A","B","C","D","E","F","G","H","I","J"],Ed={penalty_mode:"integrated",fine_count:0,fine_distance:0,fine_integrated:0},jd={penalty_mode:"integrated",fine_count:5e3,fine_distance:5e3,fine_integrated:1e4},Se={enabled:!1,target:10,minValid:5,minRuns:2,maxTime:null,penaltyExtra:null,fee:null,pacePenaltyRanges:null},At={A:{...Se},B:{...Se},C:{...Se},D:{...Se},E:{...Se},F:{...Se},G:{...Se},H:{...Se},I:{...Se},J:{...Se}};function Na(e){return _i({queryKey:["crew-settings",e],queryFn:async()=>{if(!e)return null;const{data:t,error:r}=await Nr(e);if(r&&r.code!=="PGRST116")throw r;if(!t)return null;const i={penalty_mode:t.penalty_mode,fine_count:t.fine_count??0,fine_distance:t.fine_distance??0,fine_integrated:t.fine_integrated??0},a={...At};if(t.group_targets){const c=Tr(t.group_targets);for(const s of za){const u=c[s];u?a[s]={enabled:!0,target:u.target,minValid:u.minValid,minRuns:u.minRuns??2,maxTime:u.maxTime??null,penaltyExtra:u.penaltyExtra??null,fee:u.fee??null,pacePenaltyRanges:u.pacePenaltyRanges??null}:a[s]={...At[s],enabled:!1}}}const l=Ia(t.group_targets),o={settlement_bank:t.settlement_bank??null,settlement_account:t.settlement_account??null,settlement_holder:t.settlement_holder??null,settlement_kakao_link:t.settlement_kakao_link??null};return{id:t.id,penalty:i,groups:a,weeklyEvents:l,settlement:o}},enabled:!!e})}function Pa({isOpen:e,onClose:n,crewId:t,weekKey:r,weekLabel:i,defaultTarget:a,currentTarget:l}){const o=Sr(),{isLoading:c}=Na(t),[s,u]=j.useState(l!==null),[f,h]=j.useState(String(l!==null?l:Math.round(a*1.2||150)));j.useEffect(()=>{if(e){const y=l!==null;u(y),h(String(y?l:Math.round(a>0?a*1.2:150)))}},[e,l,a]);const p=Ci({mutationFn:async()=>{const{data:y,error:_}=await Nr(t);if(_)throw _;const w=y?.group_targets||{},T={...w._weekly_events||{}};if(s){const A=parseFloat(f);if(isNaN(A)||A<=0)throw new Error("올바른 목표 거리를 입력해주세요.");T[r]=Math.round(A*10)/10}else delete T[r];const S={...w,_weekly_events:T},{error:$}=await Ca(t,{group_targets:S});if($)throw $},onSuccess:()=>{s?ee.success(`이번 주 특별 이벤트 목표 (${f}km)가 설정되었습니다.`):ee.success("기본 합산 목표 거리로 변경되었습니다."),o.invalidateQueries({queryKey:["crew-settings",t]}),o.invalidateQueries({queryKey:["ranking"]}),n()},onError:y=>{const _=y instanceof Error?y.message:"목표 설정에 실패했습니다.";ee.error(_)}});if(!e)return null;const x=[10,20,30,50];return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150",children:d.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-6 max-h-[90vh] flex flex-col shadow-2xl relative",children:[d.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-zinc-800",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx("div",{className:"w-9 h-9 rounded-full bg-neon-yellow/15 border border-neon-yellow/30 flex items-center justify-center text-neon-yellow",children:d.jsx(St,{size:18})}),d.jsxs("div",{children:[d.jsx("h2",{className:"font-sporty-heading text-lg text-white",children:"주간 특별 이벤트 목표 설정"}),d.jsx("p",{className:"text-xs text-zinc-400 font-mono",children:i})]})]}),d.jsx("button",{onClick:n,disabled:p.isPending,className:"text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-800 transition-colors",children:d.jsx(_n,{size:18})})]}),d.jsxs("div",{className:"py-4 space-y-4 overflow-y-auto flex-1",children:[d.jsxs("div",{className:"p-3.5 rounded-xl bg-zinc-800/40 border border-zinc-800 flex items-center justify-between",children:[d.jsxs("div",{className:"space-y-0.5",children:[d.jsx("span",{className:"text-[11px] font-bold text-zinc-400",children:"크루원 기본 목표 합산"}),d.jsx("p",{className:"text-[10px] text-zinc-500",children:"크루원 개인/그룹 목표치의 총합"})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("span",{className:"font-sporty-heading text-xl font-black italic text-zinc-300",children:a.toFixed(1)}),d.jsx("span",{className:"text-zinc-500 text-xs font-bold ml-1",children:"KM"})]})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("label",{className:"text-xs font-bold text-zinc-300",children:"이번 주 팀 챌린지 목표 방식"}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("button",{type:"button",onClick:()=>u(!1),className:`py-3 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${s?"bg-zinc-900/60 text-zinc-500 border-zinc-800 hover:text-zinc-300":"bg-zinc-800 text-white border-zinc-600 ring-1 ring-white/20"}`,children:[d.jsx(Ai,{size:15}),d.jsx("span",{children:"기본 합산 목표 사용"}),d.jsxs("span",{className:"text-[10px] text-zinc-400 font-mono",children:[a.toFixed(1),"km"]})]}),d.jsxs("button",{type:"button",onClick:()=>u(!0),className:`py-3 px-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${s?"bg-neon-yellow/15 text-neon-yellow border-neon-yellow/50 ring-1 ring-neon-yellow/30":"bg-zinc-900/60 text-zinc-500 border-zinc-800 hover:text-zinc-300"}`,children:[d.jsx(St,{size:15}),d.jsx("span",{children:"특별 이벤트 목표"}),d.jsx("span",{className:"text-[10px] text-neon-yellow/80 font-mono",children:"자유 거리 지정"})]})]})]}),s&&d.jsxs("div",{className:"p-4 rounded-xl bg-zinc-800/60 border border-neon-yellow/30 space-y-3 animate-in fade-in duration-200",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("span",{className:"text-xs font-bold text-neon-yellow flex items-center gap-1",children:[d.jsx(Er,{size:13})," 이번 주 이벤트 목표 거리"]}),d.jsxs("span",{className:"text-[10px] text-zinc-400",children:["기본 대비"," ",parseFloat(f)>a?`+${(parseFloat(f)-a).toFixed(1)}km`:""]})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("input",{type:"number",min:"1",step:"1",placeholder:"예: 150",value:f,onChange:y=>h(y.target.value),className:"w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-right font-sporty-heading font-black text-white text-2xl focus:border-neon-yellow focus:outline-none [color-scheme:dark]"}),d.jsx("span",{className:"text-sm font-bold text-zinc-400",children:"KM"})]}),d.jsxs("div",{className:"flex items-center gap-1.5 pt-1 flex-wrap",children:[d.jsx("span",{className:"text-[10px] font-bold text-zinc-500 mr-1",children:"빠른 추가:"}),x.map(y=>d.jsxs("button",{type:"button",onClick:()=>{const _=parseFloat(f)||a||0;h(String(Math.round(_+y)))},className:"text-[11px] font-bold font-sporty-heading px-2.5 py-1 rounded-lg bg-zinc-700/60 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-600/40 transition-colors",children:["+",y,"km"]},y))]})]}),d.jsxs("div",{className:"p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80 text-[11px] text-zinc-400 leading-relaxed space-y-1",children:[d.jsx("p",{className:"text-zinc-300 font-bold flex items-center gap-1",children:"💡 적용 안내"}),d.jsxs("p",{children:["특별 이벤트 목표는"," ",d.jsx("strong",{children:"해당 주의 크루보드 팀 챌린지 목표"}),"에만 반영됩니다. 크루원 개인의 그룹 목표와 출석/패널티 기준은 기존대로 유지됩니다."]})]})]}),d.jsxs("div",{className:"pt-4 border-t border-zinc-800 flex gap-2",children:[d.jsx("button",{type:"button",onClick:n,disabled:p.isPending,className:"flex-1 py-3 px-4 rounded-xl border border-zinc-700 text-zinc-300 font-bold text-sm hover:bg-zinc-800 transition-colors",children:"취소"}),d.jsx("button",{type:"button",onClick:()=>p.mutate(),disabled:p.isPending||c,className:"flex-1 py-3 px-4 rounded-xl bg-neon-yellow text-black font-bold text-sm hover:bg-neon-yellow/90 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(204,255,0,0.3)] disabled:opacity-50",children:p.isPending?d.jsxs(d.Fragment,{children:[d.jsx(Ri,{size:16,className:"animate-spin"}),"저장 중..."]}):d.jsxs(d.Fragment,{children:[d.jsx(Di,{size:16,strokeWidth:2.5}),s?"이벤트 목표 적용":"기본 목표로 저장"]})})]})]})})}const Ar=j.createContext(null);function Ta({children:e}){const[n,t]=j.useState(null),[r,i]=j.useState(null),[a,l]=j.useState(null),o=j.useRef(null),[c,s]=j.useState(""),[u,f]=j.useState(null),[h,p]=j.useState(!0),x=j.useCallback(async(A,k)=>{const{data:O}=await zr(A,k);return O??null},[]),y=j.useCallback(async(A,k)=>{const{nickname:O,avatarUrl:F}=fa(k);let{data:D}=await pa(A);if(D)!D.nickname&&O&&(await Ir(A,{nickname:O,avatar_url:D.avatar_url||F}),D={...D,nickname:O,avatar_url:D.avatar_url||F});else{const{data:E}=await ma({id:A,nickname:O||"런크러너",avatar_url:F,group_type:null});D=E}const q=D?.nickname||O||"런크러너",N=D?.avatar_url||F;s(q),f(N);const P=o.current?.id||D?.crew_id;if(!P){i(null),l(null),o.current=null;return}const{data:V}=await Wn(P);if(!V){l(null),o.current=null,i(null);return}o.current=V,l(V);let z=await x(A,V.id);!z&&D?z={id:"",user_id:A,crew_id:V.id,nickname:q,avatar_url:N,group_type:D.group_type||null,weekly_goal:null,weekly_min_runs:null,monthly_goal:null,penalty_deferred_weeks:null,created_at:null}:z&&!z.nickname&&q&&(await ha(A,V.id,{nickname:q,avatar_url:z.avatar_url||N}),z={...z,nickname:q,avatar_url:z.avatar_url||N}),i(z)},[x]),_=j.useCallback(async()=>{n?.user&&await y(n.user.id,n.user.user_metadata)},[n,y]),w=j.useCallback((A,k)=>{o.current=A,l(A),i(k)},[]),T=j.useCallback(async A=>{const k=A||o.current?.id;if(!n?.user||!k)return;const O=n.user.id,[{data:F},D]=await Promise.all([Wn(k),x(O,k)]);F&&(o.current=F,l(F)),D!==void 0&&i(D)},[n,x]);j.useEffect(()=>{let A=!1;const{data:{subscription:k}}=I.auth.onAuthStateChange((O,F)=>{A||(t(F),F||(i(null),l(null),s(""),f(null),p(!1)))});return()=>{A=!0,k.unsubscribe()}},[]),j.useEffect(()=>{if(!n?.user)return;let A=!1;return y(n.user.id,n.user.user_metadata).catch(()=>{}).finally(()=>{A||p(!1)}),()=>{A=!0}},[n,y]);async function S(){(window.location.hash.startsWith("#/invite/")||window.location.hash.startsWith("#/share/"))&&localStorage.setItem("pendingInviteHash",window.location.hash);const A=window.location.origin+window.location.pathname;await ca(A)}async function $(){await da(),i(null),l(null),s(""),f(null)}return d.jsx(Ar.Provider,{value:{session:n,profile:r,currentCrew:a,userNickname:c,userAvatarUrl:u,loading:h,signInWithKakao:S,signOut:$,refreshProfile:_,refreshCrew:T,setCurrentCrew:w},children:e})}function cn(){const e=j.useContext(Ar);if(!e)throw new Error("useAuth must be used inside AuthProvider");return e}function Id(){const e=cn(),{profile:n,currentCrew:t,...r}=e;if(!t)throw new Error("currentCrew is empty: useCrewAuth must be used after crew selected");if(!n)throw new Error("profile is empty: useCrewAuth must be used after crew selected");return{currentCrew:t,profile:n,...r}}function Rt(e){const[n,t,r]=e.split("-").map(Number);return new Date(n,t-1,r)}function He(e){const n=new Date(e);n.setHours(0,0,0,0);const t=n.getDay();return n.setDate(n.getDate()+(t===0?-6:1-t)),n}function zd(e=new Date){const n=He(e),t=new Date(n);return t.setDate(n.getDate()+6),t.setHours(23,59,59,999),{monday:n,sunday:t}}function Rr(e,n){if(!e)return{status:"no_date"};const t=Rt(e),r=new Date;if(r.setHours(0,0,0,0),r<t)return{status:"before_start"};const i=He(t);if(n){const o=Rt(n);if(o.setHours(23,59,59,999),r>o){const c=He(o);return{status:"completed",totalWeeks:Math.max(1,Math.round((c.getTime()-i.getTime())/(7*864e5))+1)}}}const a=He(r),l=Math.round((a.getTime()-i.getTime())/(7*864e5))+1;return{status:"active",week:Math.max(1,l)}}function Dt(e){return`${e.getMonth()+1}/${e.getDate()}`}function Aa(e){const n=He(e),t=n.getFullYear(),r=String(n.getMonth()+1).padStart(2,"0"),i=String(n.getDate()).padStart(2,"0");return`${t}-${r}-${i}`}function Lt(e=new Date){const n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return`${n}-${t}-${r}`}function Nd(e){const n=Date.now()-new Date(e).getTime(),t=Math.floor(n/6e4);if(t<1)return"방금 전";if(t<60)return`${t}분 전`;const r=Math.floor(t/60);if(r<24)return`${r}시간 전`;const i=Math.floor(r/24);return i<30?`${i}일 전`:`${Math.floor(i/30)}개월 전`}const Y=ia({root:{path:[""]},crewAdmin:{path:["crews",G("crewId"),"admin"]},groupSelect:{path:["group-select"]},invite:{path:["invite",G("code")]},shareRun:{path:["share","run"],query:[G.optional("crewId"),G.optional("crewName"),G.optional("runnerName"),G.optional("label"),G.optional("distance"),G.optional("duration"),G.optional("pace"),G.optional("imageUrl")]},shareGoal:{path:["share","goal"],query:[G.optional("crewId"),G.optional("crewName"),G.optional("runnerName"),G.optional("weekLabel"),G.optional("totalDistance"),G.optional("targetDistance"),G.optional("validRunCount"),G.optional("progress"),G.optional("averagePace"),G.optional("posterImageUrl")]},crewDashboard:{path:["crews",G("crewId"),"dashboard"]},crewRank:{path:["crews",G("crewId"),"rank"],query:[G.optional("period")]},crewRecord:{path:["crews",G("crewId"),"record"]},crewSquad:{path:["crews",G("crewId"),"squad"],query:[G.optional("filter")]},crewProfile:{path:["crews",G("crewId"),"profile"]},crewMember:{path:["crews",G("crewId"),"members",G("crewMemberId")]}});function Ra(){const{isDevMode:e,setIsDevMode:n,devModalOpen:t,setDevModalOpen:r}=lt(),{session:i,profile:a,currentCrew:l,refreshProfile:o,setCurrentCrew:c}=cn(),s=Sr(),u=it(),[f,h]=j.useState("admin"),[p,x]=j.useState("5.00"),[y,_]=j.useState("27:30"),[w,T]=j.useState("outdoor"),[S,$]=j.useState(!1),[A,k]=j.useState(0),[O,F]=j.useState(!1),[D,q]=j.useState(!1),[N,P]=j.useState(!1),[V,z]=j.useState(!1),[E,W]=j.useState(!1);if(!e||!t)return null;const B=i?.user?.id,ae=!!l&&!!B&&l.created_by===B,le=Rr(l?.start_date??null,l?.end_date??null),m=He(new Date),de=Aa(m),ke=async()=>{if(!(!l||!B||N)){P(!0);try{const{error:R}=await Tn(l.id,{created_by:B});if(R){const{error:K}=await ga(l.id,B);if(K)throw K}await I.from("crew_members").update({role:"admin"}).eq("crew_id",l.id).eq("user_id",B),ee.success("👑 현재 크루의 크루장 권한이 부여되었습니다."),await o(),s.invalidateQueries()}catch(R){ee.error(R instanceof Error?R.message:"크루장 권한 부여에 실패했습니다.")}finally{P(!1)}}},g=async()=>{if(!(!l||E)){W(!0);try{B&&l.created_by!==B&&await Tn(l.id,{created_by:B}),await ya(l.id);const{error:R}=await xa(l.id);if(R)throw R;B&&await Ir(B,{crew_id:null}),ee.success(`크루 [${l.name}]이(가) 삭제되었습니다.`),r(!1),await o(),s.invalidateQueries(),u(se(Y.root,{}))}catch(R){ee.error(R instanceof Error?R.message:"크루 강제 삭제에 실패했습니다.")}finally{W(!1),z(!1)}}},fe=async()=>{if(!l||!B||O)return;const R=parseFloat(p);if(isNaN(R)||R<=0){ee.error("유효한 거리를 입력해주세요.");return}F(!0);try{const K=new Date;K.setDate(K.getDate()-A);const re=y.trim().split(":"),Ne=re.length===2?parseInt(re[0])*60+parseInt(re[1]):re.length===3?parseInt(re[0])*3600+parseInt(re[1])*60+parseInt(re[2]):0,Re=R>0&&Ne>0?Math.round(Ne/R):0,Ue=Math.floor(Re/60),De=Re%60,hn=`${Ue}'${De.toString().padStart(2,"0")}"`,{error:Ye}=await wa({user_id:B,crew_id:l.id,distance:R,duration:y.trim(),run_type:w,is_extra:S,pace:hn,created_at:K.toISOString()});if(Ye)throw Ye;ee.success(`🏃 ${R}km 더미 러닝 기록이 등록되었습니다.`),s.invalidateQueries()}catch(K){ee.error(K instanceof Error?K.message:"더미 기록 등록에 실패했습니다.")}finally{F(!1)}},je=async()=>{if(!(!l||!B))try{const{data:R}=await va({userId:B,crewId:l.id});if(!R||R.length===0){ee.info("삭제할 최근 러닝 기록이 없습니다.");return}const{error:K}=await ka(R[0].id);if(K)throw K;ee.success("최근 러닝 기록 1건이 삭제되었습니다."),s.invalidateQueries()}catch{ee.error("기록 삭제에 실패했습니다.")}},te=()=>{s.clear(),s.invalidateQueries(),ee.success("⚡ React Query 캐시가 초기화되고 새로고침되었습니다.")},Ae=()=>{const R=localStorage.getItem("runc_dev_mode");localStorage.clear(),R&&localStorage.setItem("runc_dev_mode",R),ee.success("💾 LocalStorage가 초기화되었습니다.")},pe=async R=>{if(l)try{const K=new Date;K.setDate(K.getDate()-R);const re=Lt(K),Ne=new Date(K);Ne.setDate(Ne.getDate()+28);const Re=Lt(Ne),{data:Ue,error:De}=await Tn(l.id,{start_date:re,end_date:Re});if(De)throw De;Ue&&c(Ue,a),ee.success(`크루 기간이 [${re} ~ ${Re}]로 변경되었습니다.`),await o(),s.invalidateQueries()}catch{ee.error("크루 기간 변경에 실패했습니다.")}};return d.jsxs("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-150",children:[d.jsxs("div",{className:"bg-zinc-900 border border-zinc-700 rounded-3xl w-full max-w-lg p-6 max-h-[90vh] flex flex-col shadow-2xl relative text-white",children:[d.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-zinc-800 flex-shrink-0",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx("div",{className:"w-8 h-8 rounded-xl bg-neon-yellow flex items-center justify-center text-black shadow-[0_0_12px_rgba(204,255,0,0.4)]",children:d.jsx(Cr,{size:16,strokeWidth:2.5})}),d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"font-sporty-heading text-lg leading-tight",children:"DEVELOPER TOOLS"}),d.jsx("span",{className:"text-[10px] font-bold px-1.5 py-0.2 rounded bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30 font-mono",children:"DEV MODE"})]}),d.jsx("p",{className:"text-[11px] text-zinc-400",children:"개발 및 테스트를 위한 슈퍼바이저 도구"})]})]}),d.jsx("button",{onClick:()=>r(!1),className:"text-zinc-500 hover:text-white p-1.5 rounded-xl hover:bg-zinc-800 transition-colors",children:d.jsx(_n,{size:18})})]}),d.jsx("div",{className:"flex gap-1 p-1 bg-zinc-950/80 rounded-xl border border-zinc-800 my-3 flex-shrink-0",children:[{key:"admin",label:"👑 크루장",icon:Nn},{key:"mock",label:"🏃 더미런",icon:_t},{key:"time",label:"⏳ 주차/시간",icon:Li},{key:"cache",label:"🧹 캐시/설정",icon:kn}].map(({key:R,label:K,icon:re})=>d.jsxs("button",{onClick:()=>h(R),className:`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-bold transition-all ${f===R?"bg-neon-yellow text-black shadow-sm font-sporty-heading":"text-zinc-400 hover:text-zinc-200"}`,children:[d.jsx(re,{size:12,strokeWidth:2.5}),d.jsx("span",{children:K})]},R))}),d.jsxs("div",{className:"overflow-y-auto flex-1 pr-1 space-y-4 text-xs",children:[f==="admin"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"p-3 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-1.5",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"현재 소속 크루:"}),d.jsx("span",{className:"font-bold text-white",children:l?.name??"선택된 크루 없음"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"내 계정 ID:"}),d.jsx("span",{className:"font-mono text-[10px] text-zinc-400",children:B?`${B.slice(0,10)}...`:"로그인 필요"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"크루장 권한 상태:"}),d.jsx("span",{className:`font-bold flex items-center gap-1 ${ae?"text-amber-400":"text-neon-yellow"}`,children:ae?d.jsxs(d.Fragment,{children:[d.jsx(Nn,{size:12})," 실제 크루장 (DB 등록됨)"]}):d.jsxs(d.Fragment,{children:[d.jsx(Oi,{size:12})," 개발자 모드 바이패스 적용됨"]})})]})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("p",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-wider",children:"크루장 기능 바로가기 & 권한 제어"}),l&&d.jsxs("button",{type:"button",onClick:()=>{r(!1),u(se(Y.crewAdmin,{crewId:l.id}))},className:"w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx(Mi,{size:16,className:"text-neon-yellow"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"관리자 설정 페이지 열기"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"그룹 정책, 벌금, 크루 정보 수정, 멤버 탈퇴 관리"})]})]}),d.jsx("span",{className:"text-neon-yellow font-bold text-xs",children:"이동 →"})]}),l&&d.jsxs("button",{type:"button",onClick:()=>q(!0),className:"w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx(Er,{size:16,className:"text-amber-400"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"주간 특별 이벤트 목표 설정"}),d.jsxs("p",{className:"text-[10px] text-zinc-400",children:["이번 주(",Dt(m),"~) 크루 합산 목표 거리 설정"]})]})]}),d.jsx("span",{className:"text-amber-400 font-bold text-xs",children:"설정 →"})]}),l&&!ae&&d.jsxs("button",{type:"button",onClick:ke,disabled:N,className:"w-full flex items-center justify-between p-3 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx(Nn,{size:16,className:"text-amber-400"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-amber-300 text-xs",children:"나를 실제 크루장으로 위임 (DB 적용)"}),d.jsx("p",{className:"text-[10px] text-amber-200/70",children:"crews.created_by와 crew_members.role을 내 계정으로 변경"})]})]}),N?d.jsx("div",{className:"w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"}):d.jsx("span",{className:"text-amber-400 font-bold text-xs",children:"실행 ⚡"})]}),l&&d.jsxs("div",{className:"pt-2 border-t border-zinc-800 space-y-2",children:[d.jsx("p",{className:"text-[10px] font-bold text-red-400 uppercase tracking-wider",children:"위험 구역 (크루원 있어도 강제 삭제)"}),V?d.jsxs("div",{className:"p-3 rounded-xl bg-red-950/50 border border-red-800 space-y-2.5",children:[d.jsxs("p",{className:"text-red-300 font-bold text-xs text-center",children:["정말 [",l.name,"] 크루를 강제 삭제하시겠습니까?"]}),d.jsx("p",{className:"text-zinc-400 text-[10px] text-center",children:"크루원 존재 여부와 상관없이 즉시 영구 삭제되며 복구할 수 없습니다."}),d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{type:"button",onClick:()=>z(!1),className:"flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-300 font-bold text-xs",children:"취소"}),d.jsx("button",{type:"button",onClick:g,disabled:E,className:"flex-1 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs disabled:opacity-50 flex items-center justify-center gap-1.5",children:E?"삭제 중...":"강제 삭제 확인"})]})]}):d.jsxs("button",{type:"button",onClick:()=>z(!0),className:"w-full flex items-center justify-between p-3 rounded-xl bg-red-950/30 hover:bg-red-950/60 border border-red-900/60 text-red-400 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-2.5",children:[d.jsx(Pn,{size:16,className:"text-red-400"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-red-300 text-xs",children:"현재 크루 강제 삭제 (크루원 무시)"}),d.jsx("p",{className:"text-[10px] text-red-400/70",children:"소속 크루원 및 모든 관련 데이터를 즉시 영구 삭제합니다."})]})]}),d.jsx("span",{className:"text-red-400 font-bold text-xs",children:"삭제 →"})]})]})]})]}),f==="mock"&&d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-wider",children:"원클릭 러닝 기록 시뮬레이션"}),d.jsxs("div",{children:[d.jsx("label",{className:"text-zinc-400 text-[11px] block mb-1",children:"거리 (km)"}),d.jsx("div",{className:"flex gap-1.5 mb-2 flex-wrap",children:["3.00","5.00","7.00","10.00","15.00","21.10"].map(R=>d.jsxs("button",{type:"button",onClick:()=>x(R),className:`px-2.5 py-1 rounded-lg border text-xs font-bold transition-all ${p===R?"bg-neon-yellow text-black border-neon-yellow":"bg-zinc-800 text-zinc-300 border-zinc-700 hover:border-zinc-500"}`,children:[R,"km"]},R))}),d.jsx("input",{type:"number",step:"0.01",value:p,onChange:R=>x(R.target.value),className:"w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-sm focus:border-neon-yellow outline-none",placeholder:"거리 직접 입력 (km)"})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("div",{children:[d.jsx("label",{className:"text-zinc-400 text-[11px] block mb-1",children:"시간 (MM:SS)"}),d.jsx("input",{type:"text",value:y,onChange:R=>_(R.target.value),className:"w-full bg-black border border-zinc-700 rounded-xl px-3 py-2 text-white font-mono text-sm focus:border-neon-yellow outline-none",placeholder:"25:00"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-zinc-400 text-[11px] block mb-1",children:"유형"}),d.jsxs("div",{className:"flex gap-1",children:[d.jsx("button",{type:"button",onClick:()=>T("outdoor"),className:`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${w==="outdoor"?"bg-neon-yellow text-black border-neon-yellow":"bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:"실외"}),d.jsx("button",{type:"button",onClick:()=>T("indoor"),className:`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${w==="indoor"?"bg-neon-yellow text-black border-neon-yellow":"bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:"실내"})]})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-zinc-400 text-[11px] block mb-1",children:"기록 날짜"}),d.jsx("div",{className:"flex gap-1",children:[{label:"오늘",days:0},{label:"어제",days:1},{label:"2일 전",days:2},{label:"3일 전",days:3},{label:"1주 전",days:7}].map(({label:R,days:K})=>d.jsx("button",{type:"button",onClick:()=>k(K),className:`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${A===K?"bg-neon-yellow text-black border-neon-yellow":"bg-zinc-800 text-zinc-400 border-zinc-700"}`,children:R},K))})]}),d.jsxs("label",{className:"flex items-center gap-2 cursor-pointer pt-1",children:[d.jsx("input",{type:"checkbox",checked:S,onChange:R=>$(R.target.checked),className:"rounded border-zinc-700 text-neon-yellow focus:ring-0"}),d.jsx("span",{className:"text-zinc-300 text-xs",children:"추가런(is_extra)으로 등록 (주간 목표 인정 제외)"})]}),d.jsxs("div",{className:"flex gap-2 pt-2 border-t border-zinc-800",children:[d.jsxs("button",{type:"button",onClick:fe,disabled:O,className:"flex-1 py-3 rounded-xl bg-neon-yellow text-black font-sporty-heading font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(204,255,0,0.3)] active:scale-95 transition-all disabled:opacity-50",children:[d.jsx(_t,{size:14,fill:"black"}),O?"등록 중...":"더미 러닝 기록 생성"]}),d.jsx("button",{type:"button",onClick:je,className:"p-3 rounded-xl bg-zinc-800 hover:bg-red-950/40 border border-zinc-700 hover:border-red-800 text-zinc-400 hover:text-red-400 transition-colors",title:"내 최근 러닝 기록 1건 삭제",children:d.jsx(Pn,{size:16})})]})]}),f==="time"&&d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"p-3 bg-zinc-950/60 border border-zinc-800 rounded-xl space-y-1.5",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"크루 시작일:"}),d.jsx("span",{className:"font-mono text-zinc-200",children:l?.start_date??"미설정"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"크루 종료일:"}),d.jsx("span",{className:"font-mono text-zinc-200",children:l?.end_date??"미설정"})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsx("span",{className:"text-zinc-400",children:"현재 계산 상태:"}),d.jsx("span",{className:"font-bold text-neon-yellow",children:le.status==="active"?`${le.week}주차 (진행 중)`:le.status==="before_start"?"시작 전":le.status==="completed"?`완료 (${le.totalWeeks}주차)`:"기간 미설정"})]})]}),d.jsxs("div",{className:"space-y-2",children:[d.jsx("p",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-wider",children:"크루 활동 기간 프리셋 변경 (DB 즉시 반영)"}),d.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[d.jsxs("button",{type:"button",onClick:()=>pe(0),className:"p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-neon-yellow text-left",children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"오늘 시작"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"1주차 진행 중"})]}),d.jsxs("button",{type:"button",onClick:()=>pe(7),className:"p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-neon-yellow text-left",children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"1주 전 시작"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"2주차 진행 중"})]}),d.jsxs("button",{type:"button",onClick:()=>pe(21),className:"p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-neon-yellow text-left",children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"3주 전 시작"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"4주차 진행 중"})]}),d.jsxs("button",{type:"button",onClick:()=>pe(-7),className:"p-2.5 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-neon-yellow text-left",children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"1주 후 시작"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"시작 전 상태"})]})]})]})]}),f==="cache"&&d.jsxs("div",{className:"space-y-3",children:[d.jsx("p",{className:"text-[10px] font-bold text-zinc-400 uppercase tracking-wider",children:"캐시 및 환경 제어"}),d.jsxs("button",{type:"button",onClick:te,className:"w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-left transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(kn,{size:15,className:"text-neon-yellow"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"React Query 캐시 초기화 & 갱신"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"모든 쿼리 캐시를 지우고 최신 데이터로 다시 가져옵니다."})]})]}),d.jsx("span",{className:"text-neon-yellow font-bold",children:"실행"})]}),d.jsxs("button",{type:"button",onClick:Ae,className:"w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-left transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(Pn,{size:15,className:"text-orange-400"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"LocalStorage 클리어"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"버전 태그, 임시 초대 해시 등 로컬 저장소 비우기"})]})]}),d.jsx("span",{className:"text-orange-400 font-bold",children:"실행"})]}),d.jsxs("button",{type:"button",onClick:()=>window.location.reload(),className:"w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-left transition-colors",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(kn,{size:15,className:"text-sky-400"}),d.jsxs("div",{children:[d.jsx("p",{className:"font-bold text-white text-xs",children:"앱 전체 새로고침"}),d.jsx("p",{className:"text-[10px] text-zinc-400",children:"페이지를 리로드합니다."})]})]}),d.jsx("span",{className:"text-sky-400 font-bold",children:"새로고침"})]}),d.jsxs("button",{type:"button",onClick:()=>n(!1),className:"w-full p-3 rounded-xl bg-red-950/40 hover:bg-red-900/50 border border-red-900/60 text-red-300 font-bold text-xs transition-colors flex items-center justify-center gap-2",children:[d.jsx(_n,{size:14}),d.jsx("span",{children:"개발자 모드 끄기 (버전 7회 탭으로 다시 활성화 가능)"})]})]})]}),d.jsxs("div",{className:"pt-3 border-t border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500 flex-shrink-0",children:[d.jsx("span",{children:"RUNC Dev Suite v1.0"}),d.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white font-bold",children:"닫기"})]})]}),l&&D&&d.jsx(Pa,{isOpen:D,onClose:()=>q(!1),crewId:l.id,weekKey:de,weekLabel:`이번 주 (${Dt(m)}~)`,defaultTarget:100,currentTarget:null})]})}class Da extends j.Component{constructor(n){super(n),this.state={hasError:!1,error:null}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,t){console.error("Uncaught error:",n,t)}handleReload=()=>{window.location.reload()};handleGoHome=()=>{window.location.hash="#/",window.location.reload()};handleRetry=()=>{this.setState({hasError:!1,error:null})};render(){return this.state.hasError&&this.props.compact?d.jsxs("div",{className:"bg-red-500/10 border border-red-500/30 rounded-2xl p-4 flex items-center justify-between gap-3 text-red-400",children:[d.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold",children:[d.jsx(Ct,{size:16}),d.jsx("span",{children:this.props.compactLabel??"이 영역을 표시하지 못했습니다."})]}),d.jsx("button",{type:"button",onClick:this.handleRetry,className:"text-[11px] font-bold text-red-300 hover:text-red-200 underline underline-offset-2 flex-shrink-0",children:"다시 시도"})]}):this.state.hasError?d.jsxs("div",{className:"min-h-screen bg-[#0D0D0D] text-white flex flex-col items-center justify-center p-6 text-center",children:[d.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-950/50 border border-red-900/60 flex items-center justify-center text-red-400 mb-5 shadow-[0_0_24px_rgba(239,68,68,0.2)]",children:d.jsx(Ct,{size:32})}),d.jsx("h1",{className:"font-sporty-heading text-2xl tracking-wide mb-2",children:"SOMETHING WENT WRONG"}),d.jsx("p",{className:"text-zinc-400 text-sm max-w-xs mb-6",children:"일시적인 오류가 발생했습니다. 아래 버튼을 눌러 다시 시도해주세요."}),d.jsxs("div",{className:"flex gap-3 w-full max-w-xs",children:[d.jsxs("button",{onClick:this.handleReload,className:"flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-neon-yellow text-black font-sporty-heading font-black text-sm active:scale-95 transition-all shadow-[0_0_16px_rgba(204,255,0,0.3)]",children:[d.jsx(kn,{size:15})," 새로고침"]}),d.jsxs("button",{onClick:this.handleGoHome,className:"flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 font-bold text-sm hover:text-white active:scale-95 transition-all",children:[d.jsx(Fi,{size:15})," 홈으로"]})]})]}):this.props.children}}function La(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const Oa=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ma=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Fa={};function Ot(e,n){return(Fa.jsx?Ma:Oa).test(e)}const Ua=/[ \t\n\f\r]/g;function $a(e){return typeof e=="object"?e.type==="text"?Mt(e.value):!1:Mt(e)}function Mt(e){return e.replace(Ua,"")===""}class dn{constructor(n,t,r){this.normal=t,this.property=n,r&&(this.space=r)}}dn.prototype.normal={};dn.prototype.property={};dn.prototype.space=void 0;function Dr(e,n){const t={},r={};for(const i of e)Object.assign(t,i.property),Object.assign(r,i.normal);return new dn(t,r,n)}function Xn(e){return e.toLowerCase()}class ce{constructor(n,t){this.attribute=t,this.property=n}}ce.prototype.attribute="";ce.prototype.booleanish=!1;ce.prototype.boolean=!1;ce.prototype.commaOrSpaceSeparated=!1;ce.prototype.commaSeparated=!1;ce.prototype.defined=!1;ce.prototype.mustUseProperty=!1;ce.prototype.number=!1;ce.prototype.overloadedBoolean=!1;ce.prototype.property="";ce.prototype.spaceSeparated=!1;ce.prototype.space=void 0;let qa=0;const U=Me(),ne=Me(),Kn=Me(),v=Me(),J=Me(),We=Me(),me=Me();function Me(){return 2**++qa}const Gn=Object.freeze(Object.defineProperty({__proto__:null,boolean:U,booleanish:ne,commaOrSpaceSeparated:me,commaSeparated:We,number:v,overloadedBoolean:Kn,spaceSeparated:J},Symbol.toStringTag,{value:"Module"})),An=Object.keys(Gn);class ot extends ce{constructor(n,t,r,i){let a=-1;if(super(n,t),Ft(this,"space",i),typeof r=="number")for(;++a<An.length;){const l=An[a];Ft(this,An[a],(r&Gn[l])===Gn[l])}}}ot.prototype.defined=!0;function Ft(e,n,t){t&&(e[n]=t)}function Ke(e){const n={},t={};for(const[r,i]of Object.entries(e.properties)){const a=new ot(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),n[r]=a,t[Xn(r)]=r,t[Xn(a.attribute)]=r}return new dn(n,t,e.space)}const Lr=Ke({properties:{ariaActiveDescendant:null,ariaAtomic:ne,ariaAutoComplete:null,ariaBusy:ne,ariaChecked:ne,ariaColCount:v,ariaColIndex:v,ariaColSpan:v,ariaControls:J,ariaCurrent:null,ariaDescribedBy:J,ariaDetails:null,ariaDisabled:ne,ariaDropEffect:J,ariaErrorMessage:null,ariaExpanded:ne,ariaFlowTo:J,ariaGrabbed:ne,ariaHasPopup:null,ariaHidden:ne,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:J,ariaLevel:v,ariaLive:null,ariaModal:ne,ariaMultiLine:ne,ariaMultiSelectable:ne,ariaOrientation:null,ariaOwns:J,ariaPlaceholder:null,ariaPosInSet:v,ariaPressed:ne,ariaReadOnly:ne,ariaRelevant:null,ariaRequired:ne,ariaRoleDescription:J,ariaRowCount:v,ariaRowIndex:v,ariaRowSpan:v,ariaSelected:ne,ariaSetSize:v,ariaSort:null,ariaValueMax:v,ariaValueMin:v,ariaValueNow:v,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Or(e,n){return n in e?e[n]:n}function Mr(e,n){return Or(e,n.toLowerCase())}const Ba=Ke({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:We,acceptCharset:J,accessKey:J,action:null,allow:null,allowFullScreen:U,allowPaymentRequest:U,allowUserMedia:U,alt:null,as:null,async:U,autoCapitalize:null,autoComplete:J,autoFocus:U,autoPlay:U,blocking:J,capture:null,charSet:null,checked:U,cite:null,className:J,cols:v,colSpan:null,content:null,contentEditable:ne,controls:U,controlsList:J,coords:v|We,crossOrigin:null,data:null,dateTime:null,decoding:null,default:U,defer:U,dir:null,dirName:null,disabled:U,download:Kn,draggable:ne,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:U,formTarget:null,headers:J,height:v,hidden:Kn,high:v,href:null,hrefLang:null,htmlFor:J,httpEquiv:J,id:null,imageSizes:null,imageSrcSet:null,inert:U,inputMode:null,integrity:null,is:null,isMap:U,itemId:null,itemProp:J,itemRef:J,itemScope:U,itemType:J,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:U,low:v,manifest:null,max:null,maxLength:v,media:null,method:null,min:null,minLength:v,multiple:U,muted:U,name:null,nonce:null,noModule:U,noValidate:U,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:U,optimum:v,pattern:null,ping:J,placeholder:null,playsInline:U,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:U,referrerPolicy:null,rel:J,required:U,reversed:U,rows:v,rowSpan:v,sandbox:J,scope:null,scoped:U,seamless:U,selected:U,shadowRootClonable:U,shadowRootDelegatesFocus:U,shadowRootMode:null,shape:null,size:v,sizes:null,slot:null,span:v,spellCheck:ne,src:null,srcDoc:null,srcLang:null,srcSet:null,start:v,step:null,style:null,tabIndex:v,target:null,title:null,translate:null,type:null,typeMustMatch:U,useMap:null,value:ne,width:v,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:J,axis:null,background:null,bgColor:null,border:v,borderColor:null,bottomMargin:v,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:U,declare:U,event:null,face:null,frame:null,frameBorder:null,hSpace:v,leftMargin:v,link:null,longDesc:null,lowSrc:null,marginHeight:v,marginWidth:v,noResize:U,noHref:U,noShade:U,noWrap:U,object:null,profile:null,prompt:null,rev:null,rightMargin:v,rules:null,scheme:null,scrolling:ne,standby:null,summary:null,text:null,topMargin:v,valueType:null,version:null,vAlign:null,vLink:null,vSpace:v,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:U,disableRemotePlayback:U,prefix:null,property:null,results:v,security:null,unselectable:null},space:"html",transform:Mr}),Va=Ke({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:me,accentHeight:v,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:v,amplitude:v,arabicForm:null,ascent:v,attributeName:null,attributeType:null,azimuth:v,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:v,by:null,calcMode:null,capHeight:v,className:J,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:v,diffuseConstant:v,direction:null,display:null,dur:null,divisor:v,dominantBaseline:null,download:U,dx:null,dy:null,edgeMode:null,editable:null,elevation:v,enableBackground:null,end:null,event:null,exponent:v,externalResourcesRequired:null,fill:null,fillOpacity:v,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:We,g2:We,glyphName:We,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:v,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:v,horizOriginX:v,horizOriginY:v,id:null,ideographic:v,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:v,k:v,k1:v,k2:v,k3:v,k4:v,kernelMatrix:me,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:v,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:v,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:v,overlineThickness:v,paintOrder:null,panose1:null,path:null,pathLength:v,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:J,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:v,pointsAtY:v,pointsAtZ:v,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:me,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:me,rev:me,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:me,requiredFeatures:me,requiredFonts:me,requiredFormats:me,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:v,specularExponent:v,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:v,strikethroughThickness:v,string:null,stroke:null,strokeDashArray:me,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:v,strokeOpacity:v,strokeWidth:null,style:null,surfaceScale:v,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:me,tabIndex:v,tableValues:null,target:null,targetX:v,targetY:v,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:me,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:v,underlineThickness:v,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:v,values:null,vAlphabetic:v,vMathematical:v,vectorEffect:null,vHanging:v,vIdeographic:v,version:null,vertAdvY:v,vertOriginX:v,vertOriginY:v,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:v,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Or}),Fr=Ke({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),Ur=Ke({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Mr}),$r=Ke({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),Ha={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Wa=/[A-Z]/g,Ut=/-[a-z]/g,Xa=/^data[-\w.:]+$/i;function Ka(e,n){const t=Xn(n);let r=n,i=ce;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&Xa.test(n)){if(n.charAt(4)==="-"){const a=n.slice(5).replace(Ut,Ya);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=n.slice(4);if(!Ut.test(a)){let l=a.replace(Wa,Ga);l.charAt(0)!=="-"&&(l="-"+l),n="data"+l}}i=ot}return new i(r,n)}function Ga(e){return"-"+e.toLowerCase()}function Ya(e){return e.charAt(1).toUpperCase()}const Qa=Dr([Lr,Ba,Fr,Ur,$r],"html"),st=Dr([Lr,Va,Fr,Ur,$r],"svg");function Ja(e){return e.join(" ").trim()}var Be={},Rn,$t;function Za(){if($t)return Rn;$t=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,i=/^:\s*/,a=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,l=/^[;\s]*/,o=/^\s+|\s+$/g,c=`
`,s="/",u="*",f="",h="comment",p="declaration";function x(_,w){if(typeof _!="string")throw new TypeError("First argument must be a string");if(!_)return[];w=w||{};var T=1,S=1;function $(z){var E=z.match(n);E&&(T+=E.length);var W=z.lastIndexOf(c);S=~W?z.length-W:S+z.length}function A(){var z={line:T,column:S};return function(E){return E.position=new k(z),D(),E}}function k(z){this.start=z,this.end={line:T,column:S},this.source=w.source}k.prototype.content=_;function O(z){var E=new Error(w.source+":"+T+":"+S+": "+z);if(E.reason=z,E.filename=w.source,E.line=T,E.column=S,E.source=_,!w.silent)throw E}function F(z){var E=z.exec(_);if(E){var W=E[0];return $(W),_=_.slice(W.length),E}}function D(){F(t)}function q(z){var E;for(z=z||[];E=N();)E!==!1&&z.push(E);return z}function N(){var z=A();if(!(s!=_.charAt(0)||u!=_.charAt(1))){for(var E=2;f!=_.charAt(E)&&(u!=_.charAt(E)||s!=_.charAt(E+1));)++E;if(E+=2,f===_.charAt(E-1))return O("End of comment missing");var W=_.slice(2,E-2);return S+=2,$(W),_=_.slice(E),S+=2,z({type:h,comment:W})}}function P(){var z=A(),E=F(r);if(E){if(N(),!F(i))return O("property missing ':'");var W=F(a),B=z({type:p,property:y(E[0].replace(e,f)),value:W?y(W[0].replace(e,f)):f});return F(l),B}}function V(){var z=[];q(z);for(var E;E=P();)E!==!1&&(z.push(E),q(z));return z}return D(),V()}function y(_){return _?_.replace(o,f):f}return Rn=x,Rn}var qt;function el(){if(qt)return Be;qt=1;var e=Be&&Be.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Be,"__esModule",{value:!0}),Be.default=t;const n=e(Za());function t(r,i){let a=null;if(!r||typeof r!="string")return a;const l=(0,n.default)(r),o=typeof i=="function";return l.forEach(c=>{if(c.type!=="declaration")return;const{property:s,value:u}=c;o?i(s,u,c):u&&(a=a||{},a[s]=u)}),a}return Be}var Ze={},Bt;function nl(){if(Bt)return Ze;Bt=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,i=/^-(ms)-/,a=function(s){return!s||t.test(s)||e.test(s)},l=function(s,u){return u.toUpperCase()},o=function(s,u){return"".concat(u,"-")},c=function(s,u){return u===void 0&&(u={}),a(s)?s:(s=s.toLowerCase(),u.reactCompat?s=s.replace(i,o):s=s.replace(r,o),s.replace(n,l))};return Ze.camelCase=c,Ze}var en,Vt;function tl(){if(Vt)return en;Vt=1;var e=en&&en.__importDefault||function(i){return i&&i.__esModule?i:{default:i}},n=e(el()),t=nl();function r(i,a){var l={};return!i||typeof i!="string"||(0,n.default)(i,function(o,c){o&&c&&(l[(0,t.camelCase)(o,a)]=c)}),l}return r.default=r,en=r,en}var rl=tl();const il=_r(rl),qr=Br("end"),ut=Br("start");function Br(e){return n;function n(t){const r=t&&t.position&&t.position[e]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function al(e){const n=ut(e),t=qr(e);if(n&&t)return{start:n,end:t}}function an(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?Ht(e.position):"start"in e||"end"in e?Ht(e):"line"in e||"column"in e?Yn(e):""}function Yn(e){return Wt(e&&e.line)+":"+Wt(e&&e.column)}function Ht(e){return Yn(e&&e.start)+"-"+Yn(e&&e.end)}function Wt(e){return e&&typeof e=="number"?e:1}class ie extends Error{constructor(n,t,r){super(),typeof t=="string"&&(r=t,t=void 0);let i="",a={},l=!1;if(t&&("line"in t&&"column"in t?a={place:t}:"start"in t&&"end"in t?a={place:t}:"type"in t?a={ancestors:[t],place:t.position}:a={...t}),typeof n=="string"?i=n:!a.cause&&n&&(l=!0,i=n.message,a.cause=n),!a.ruleId&&!a.source&&typeof r=="string"){const c=r.indexOf(":");c===-1?a.ruleId=r:(a.source=r.slice(0,c),a.ruleId=r.slice(c+1))}if(!a.place&&a.ancestors&&a.ancestors){const c=a.ancestors[a.ancestors.length-1];c&&(a.place=c.position)}const o=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file="",this.message=i,this.line=o?o.line:void 0,this.name=an(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=l&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}ie.prototype.file="";ie.prototype.name="";ie.prototype.reason="";ie.prototype.message="";ie.prototype.stack="";ie.prototype.column=void 0;ie.prototype.line=void 0;ie.prototype.ancestors=void 0;ie.prototype.cause=void 0;ie.prototype.fatal=void 0;ie.prototype.place=void 0;ie.prototype.ruleId=void 0;ie.prototype.source=void 0;const ct={}.hasOwnProperty,ll=new Map,ol=/[A-Z]/g,sl=new Set(["table","tbody","thead","tfoot","tr"]),ul=new Set(["td","th"]),Vr="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function cl(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let r;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=yl(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=xl(t,n.jsx,n.jsxs)}const i={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:r,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?st:Qa,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},a=Hr(i,e,void 0);return a&&typeof a!="string"?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Hr(e,n,t){if(n.type==="element")return dl(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return fl(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return hl(e,n,t);if(n.type==="mdxjsEsm")return pl(e,n);if(n.type==="root")return ml(e,n,t);if(n.type==="text")return gl(e,n)}function dl(e,n,t){const r=e.schema;let i=r;n.tagName.toLowerCase()==="svg"&&r.space==="html"&&(i=st,e.schema=i),e.ancestors.push(n);const a=Xr(e,n.tagName,!1),l=bl(e,n);let o=ft(e,n);return sl.has(n.tagName)&&(o=o.filter(function(c){return typeof c=="string"?!$a(c):!0})),Wr(e,l,a,n),dt(l,o),e.ancestors.pop(),e.schema=r,e.create(n,a,l,t)}function fl(e,n){if(n.data&&n.data.estree&&e.evaluater){const r=n.data.estree.body[0];return r.type,e.evaluater.evaluateExpression(r.expression)}sn(e,n.position)}function pl(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);sn(e,n.position)}function hl(e,n,t){const r=e.schema;let i=r;n.name==="svg"&&r.space==="html"&&(i=st,e.schema=i),e.ancestors.push(n);const a=n.name===null?e.Fragment:Xr(e,n.name,!0),l=wl(e,n),o=ft(e,n);return Wr(e,l,a,n),dt(l,o),e.ancestors.pop(),e.schema=r,e.create(n,a,l,t)}function ml(e,n,t){const r={};return dt(r,ft(e,n)),e.create(n,e.Fragment,r,t)}function gl(e,n){return n.value}function Wr(e,n,t,r){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=r)}function dt(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function xl(e,n,t){return r;function r(i,a,l,o){const s=Array.isArray(l.children)?t:n;return o?s(a,l,o):s(a,l)}}function yl(e,n){return t;function t(r,i,a,l){const o=Array.isArray(a.children),c=ut(r);return n(i,a,l,o,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function bl(e,n){const t={};let r,i;for(i in n.properties)if(i!=="children"&&ct.call(n.properties,i)){const a=kl(e,i,n.properties[i]);if(a){const[l,o]=a;e.tableCellAlignToStyle&&l==="align"&&typeof o=="string"&&ul.has(n.tagName)?r=o:t[l]=o}}if(r){const a=t.style||(t.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return t}function wl(e,n){const t={};for(const r of n.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&e.evaluater){const a=r.data.estree.body[0];a.type;const l=a.expression;l.type;const o=l.properties[0];o.type,Object.assign(t,e.evaluater.evaluateExpression(o.argument))}else sn(e,n.position);else{const i=r.name;let a;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&e.evaluater){const o=r.value.data.estree.body[0];o.type,a=e.evaluater.evaluateExpression(o.expression)}else sn(e,n.position);else a=r.value===null?!0:r.value;t[i]=a}return t}function ft(e,n){const t=[];let r=-1;const i=e.passKeys?new Map:ll;for(;++r<n.children.length;){const a=n.children[r];let l;if(e.passKeys){const c=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(c){const s=i.get(c)||0;l=c+"-"+s,i.set(c,s+1)}}const o=Hr(e,a,l);o!==void 0&&t.push(o)}return t}function kl(e,n,t){const r=Ka(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=r.commaSeparated?La(t):Ja(t)),r.property==="style"){let i=typeof t=="object"?t:vl(e,String(t));return e.stylePropertyNameCase==="css"&&(i=Sl(i)),["style",i]}return[e.elementAttributeNameCase==="react"&&r.space?Ha[r.property]||r.property:r.attribute,t]}}function vl(e,n){try{return il(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const r=t,i=new ie("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw i.file=e.filePath||void 0,i.url=Vr+"#cannot-parse-style-attribute",i}}function Xr(e,n,t){let r;if(!t)r={type:"Literal",value:n};else if(n.includes(".")){const i=n.split(".");let a=-1,l;for(;++a<i.length;){const o=Ot(i[a])?{type:"Identifier",name:i[a]}:{type:"Literal",value:i[a]};l=l?{type:"MemberExpression",object:l,property:o,computed:!!(a&&o.type==="Literal"),optional:!1}:o}r=l}else r=Ot(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(r.type==="Literal"){const i=r.value;return ct.call(e.components,i)?e.components[i]:i}if(e.evaluater)return e.evaluater.evaluateExpression(r);sn(e)}function sn(e,n){const t=new ie("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=Vr+"#cannot-handle-mdx-estrees-without-createevaluater",t}function Sl(e){const n={};let t;for(t in e)ct.call(e,t)&&(n[_l(t)]=e[t]);return n}function _l(e){let n=e.replace(ol,Cl);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function Cl(e){return"-"+e.toLowerCase()}const Dn={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},El={};function jl(e,n){const t=El,r=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,i=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return Kr(e,r,i)}function Kr(e,n,t){if(Il(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Xt(e.children,n,t)}return Array.isArray(e)?Xt(e,n,t):""}function Xt(e,n,t){const r=[];let i=-1;for(;++i<e.length;)r[i]=Kr(e[i],n,t);return r.join("")}function Il(e){return!!(e&&typeof e=="object")}const Kt=document.createElement("i");function pt(e){const n="&"+e+";";Kt.innerHTML=n;const t=Kt.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Ee(e,n,t,r){const i=e.length;let a=0,l;if(n<0?n=-n>i?0:i+n:n=n>i?i:n,t=t>0?t:0,r.length<1e4)l=Array.from(r),l.unshift(n,t),e.splice(...l);else for(t&&e.splice(n,t);a<r.length;)l=r.slice(a,a+1e4),l.unshift(n,0),e.splice(...l),a+=1e4,n+=1e4}function we(e,n){return e.length>0?(Ee(e,e.length,0,n),e):n}const Gt={}.hasOwnProperty;function zl(e){const n={};let t=-1;for(;++t<e.length;)Nl(n,e[t]);return n}function Nl(e,n){let t;for(t in n){const i=(Gt.call(e,t)?e[t]:void 0)||(e[t]={}),a=n[t];let l;if(a)for(l in a){Gt.call(i,l)||(i[l]=[]);const o=a[l];Pl(i[l],Array.isArray(o)?o:o?[o]:[])}}}function Pl(e,n){let t=-1;const r=[];for(;++t<n.length;)(n[t].add==="after"?e:r).push(n[t]);Ee(e,0,0,r)}function Gr(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function Xe(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Ce=Te(/[A-Za-z]/),ge=Te(/[\dA-Za-z]/),Tl=Te(/[#-'*+\--9=?A-Z^-~]/);function Qn(e){return e!==null&&(e<32||e===127)}const Jn=Te(/\d/),Al=Te(/[\dA-Fa-f]/),Rl=Te(/[!-/:-@[-`{-~]/);function L(e){return e!==null&&e<-2}function ue(e){return e!==null&&(e<0||e===32)}function X(e){return e===-2||e===-1||e===32}const Dl=Te(new RegExp("\\p{P}|\\p{S}","u")),Ll=Te(/\s/);function Te(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Ge(e){const n=[];let t=-1,r=0,i=0;for(;++t<e.length;){const a=e.charCodeAt(t);let l="";if(a===37&&ge(e.charCodeAt(t+1))&&ge(e.charCodeAt(t+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(l=String.fromCharCode(a));else if(a>55295&&a<57344){const o=e.charCodeAt(t+1);a<56320&&o>56319&&o<57344?(l=String.fromCharCode(a,o),i=1):l="�"}else l=String.fromCharCode(a);l&&(n.push(e.slice(r,t),encodeURIComponent(l)),r=t+i+1,l=""),i&&(t+=i,i=0)}return n.join("")+e.slice(r)}function Z(e,n,t,r){const i=r?r-1:Number.POSITIVE_INFINITY;let a=0;return l;function l(c){return X(c)?(e.enter(t),o(c)):n(c)}function o(c){return X(c)&&a++<i?(e.consume(c),o):(e.exit(t),n(c))}}const Ol={tokenize:Ml};function Ml(e){const n=e.attempt(this.parser.constructs.contentInitial,r,i);let t;return n;function r(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),Z(e,n,"linePrefix")}function i(o){return e.enter("paragraph"),a(o)}function a(o){const c=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=c),t=c,l(o)}function l(o){if(o===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(o);return}return L(o)?(e.consume(o),e.exit("chunkText"),a):(e.consume(o),l)}}const Fl={tokenize:Ul},Yt={tokenize:$l};function Ul(e){const n=this,t=[];let r=0,i,a,l;return o;function o(S){if(r<t.length){const $=t[r];return n.containerState=$[1],e.attempt($[0].continuation,c,s)(S)}return s(S)}function c(S){if(r++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,i&&T();const $=n.events.length;let A=$,k;for(;A--;)if(n.events[A][0]==="exit"&&n.events[A][1].type==="chunkFlow"){k=n.events[A][1].end;break}w(r);let O=$;for(;O<n.events.length;)n.events[O][1].end={...k},O++;return Ee(n.events,A+1,0,n.events.slice($)),n.events.length=O,s(S)}return o(S)}function s(S){if(r===t.length){if(!i)return h(S);if(i.currentConstruct&&i.currentConstruct.concrete)return x(S);n.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Yt,u,f)(S)}function u(S){return i&&T(),w(r),h(S)}function f(S){return n.parser.lazy[n.now().line]=r!==t.length,l=n.now().offset,x(S)}function h(S){return n.containerState={},e.attempt(Yt,p,x)(S)}function p(S){return r++,t.push([n.currentConstruct,n.containerState]),h(S)}function x(S){if(S===null){i&&T(),w(0),e.consume(S);return}return i=i||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:i,contentType:"flow",previous:a}),y(S)}function y(S){if(S===null){_(e.exit("chunkFlow"),!0),w(0),e.consume(S);return}return L(S)?(e.consume(S),_(e.exit("chunkFlow")),r=0,n.interrupt=void 0,o):(e.consume(S),y)}function _(S,$){const A=n.sliceStream(S);if($&&A.push(null),S.previous=a,a&&(a.next=S),a=S,i.defineSkip(S.start),i.write(A),n.parser.lazy[S.start.line]){let k=i.events.length;for(;k--;)if(i.events[k][1].start.offset<l&&(!i.events[k][1].end||i.events[k][1].end.offset>l))return;const O=n.events.length;let F=O,D,q;for(;F--;)if(n.events[F][0]==="exit"&&n.events[F][1].type==="chunkFlow"){if(D){q=n.events[F][1].end;break}D=!0}for(w(r),k=O;k<n.events.length;)n.events[k][1].end={...q},k++;Ee(n.events,F+1,0,n.events.slice(O)),n.events.length=k}}function w(S){let $=t.length;for(;$-- >S;){const A=t[$];n.containerState=A[1],A[0].exit.call(n,e)}t.length=S}function T(){i.write([null]),a=void 0,i=void 0,n.containerState._closeFlow=void 0}}function $l(e,n,t){return Z(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Qt(e){if(e===null||ue(e)||Ll(e))return 1;if(Dl(e))return 2}function ht(e,n,t){const r=[];let i=-1;for(;++i<e.length;){const a=e[i].resolveAll;a&&!r.includes(a)&&(n=a(n,t),r.push(a))}return n}const Zn={name:"attention",resolveAll:ql,tokenize:Bl};function ql(e,n){let t=-1,r,i,a,l,o,c,s,u;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(r=t;r--;)if(e[r][0]==="exit"&&e[r][1].type==="attentionSequence"&&e[r][1]._open&&n.sliceSerialize(e[r][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[r][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const f={...e[r][1].end},h={...e[t][1].start};Jt(f,-c),Jt(h,c),l={type:c>1?"strongSequence":"emphasisSequence",start:f,end:{...e[r][1].end}},o={type:c>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:h},a={type:c>1?"strongText":"emphasisText",start:{...e[r][1].end},end:{...e[t][1].start}},i={type:c>1?"strong":"emphasis",start:{...l.start},end:{...o.end}},e[r][1].end={...l.start},e[t][1].start={...o.end},s=[],e[r][1].end.offset-e[r][1].start.offset&&(s=we(s,[["enter",e[r][1],n],["exit",e[r][1],n]])),s=we(s,[["enter",i,n],["enter",l,n],["exit",l,n],["enter",a,n]]),s=we(s,ht(n.parser.constructs.insideSpan.null,e.slice(r+1,t),n)),s=we(s,[["exit",a,n],["enter",o,n],["exit",o,n],["exit",i,n]]),e[t][1].end.offset-e[t][1].start.offset?(u=2,s=we(s,[["enter",e[t][1],n],["exit",e[t][1],n]])):u=0,Ee(e,r-1,t-r+3,s),t=r+s.length-u-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function Bl(e,n){const t=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Qt(r);let a;return l;function l(c){return a=c,e.enter("attentionSequence"),o(c)}function o(c){if(c===a)return e.consume(c),o;const s=e.exit("attentionSequence"),u=Qt(c),f=!u||u===2&&i||t.includes(c),h=!i||i===2&&u||t.includes(r);return s._open=!!(a===42?f:f&&(i||!h)),s._close=!!(a===42?h:h&&(u||!f)),n(c)}}function Jt(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const Vl={name:"autolink",tokenize:Hl};function Hl(e,n,t){let r=0;return i;function i(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return Ce(p)?(e.consume(p),l):p===64?t(p):s(p)}function l(p){return p===43||p===45||p===46||ge(p)?(r=1,o(p)):s(p)}function o(p){return p===58?(e.consume(p),r=0,c):(p===43||p===45||p===46||ge(p))&&r++<32?(e.consume(p),o):(r=0,s(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):p===null||p===32||p===60||Qn(p)?t(p):(e.consume(p),c)}function s(p){return p===64?(e.consume(p),u):Tl(p)?(e.consume(p),s):t(p)}function u(p){return ge(p)?f(p):t(p)}function f(p){return p===46?(e.consume(p),r=0,u):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),n):h(p)}function h(p){if((p===45||ge(p))&&r++<63){const x=p===45?h:f;return e.consume(p),x}return t(p)}}const jn={partial:!0,tokenize:Wl};function Wl(e,n,t){return r;function r(a){return X(a)?Z(e,i,"linePrefix")(a):i(a)}function i(a){return a===null||L(a)?n(a):t(a)}}const Yr={continuation:{tokenize:Kl},exit:Gl,name:"blockQuote",tokenize:Xl};function Xl(e,n,t){const r=this;return i;function i(l){if(l===62){const o=r.containerState;return o.open||(e.enter("blockQuote",{_container:!0}),o.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(l),e.exit("blockQuoteMarker"),a}return t(l)}function a(l){return X(l)?(e.enter("blockQuotePrefixWhitespace"),e.consume(l),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(l))}}function Kl(e,n,t){const r=this;return i;function i(l){return X(l)?Z(e,a,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l):a(l)}function a(l){return e.attempt(Yr,n,t)(l)}}function Gl(e){e.exit("blockQuote")}const Qr={name:"characterEscape",tokenize:Yl};function Yl(e,n,t){return r;function r(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),i}function i(a){return Rl(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(a)}}const Jr={name:"characterReference",tokenize:Ql};function Ql(e,n,t){const r=this;let i=0,a,l;return o;function o(f){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),c}function c(f){return f===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(f),e.exit("characterReferenceMarkerNumeric"),s):(e.enter("characterReferenceValue"),a=31,l=ge,u(f))}function s(f){return f===88||f===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(f),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,l=Al,u):(e.enter("characterReferenceValue"),a=7,l=Jn,u(f))}function u(f){if(f===59&&i){const h=e.exit("characterReferenceValue");return l===ge&&!pt(r.sliceSerialize(h))?t(f):(e.enter("characterReferenceMarker"),e.consume(f),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return l(f)&&i++<a?(e.consume(f),u):t(f)}}const Zt={partial:!0,tokenize:Zl},er={concrete:!0,name:"codeFenced",tokenize:Jl};function Jl(e,n,t){const r=this,i={partial:!0,tokenize:A};let a=0,l=0,o;return c;function c(k){return s(k)}function s(k){const O=r.events[r.events.length-1];return a=O&&O[1].type==="linePrefix"?O[2].sliceSerialize(O[1],!0).length:0,o=k,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(k)}function u(k){return k===o?(l++,e.consume(k),u):l<3?t(k):(e.exit("codeFencedFenceSequence"),X(k)?Z(e,f,"whitespace")(k):f(k))}function f(k){return k===null||L(k)?(e.exit("codeFencedFence"),r.interrupt?n(k):e.check(Zt,y,$)(k)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),h(k))}function h(k){return k===null||L(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),f(k)):X(k)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Z(e,p,"whitespace")(k)):k===96&&k===o?t(k):(e.consume(k),h)}function p(k){return k===null||L(k)?f(k):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),x(k))}function x(k){return k===null||L(k)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),f(k)):k===96&&k===o?t(k):(e.consume(k),x)}function y(k){return e.attempt(i,$,_)(k)}function _(k){return e.enter("lineEnding"),e.consume(k),e.exit("lineEnding"),w}function w(k){return a>0&&X(k)?Z(e,T,"linePrefix",a+1)(k):T(k)}function T(k){return k===null||L(k)?e.check(Zt,y,$)(k):(e.enter("codeFlowValue"),S(k))}function S(k){return k===null||L(k)?(e.exit("codeFlowValue"),T(k)):(e.consume(k),S)}function $(k){return e.exit("codeFenced"),n(k)}function A(k,O,F){let D=0;return q;function q(E){return k.enter("lineEnding"),k.consume(E),k.exit("lineEnding"),N}function N(E){return k.enter("codeFencedFence"),X(E)?Z(k,P,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(E):P(E)}function P(E){return E===o?(k.enter("codeFencedFenceSequence"),V(E)):F(E)}function V(E){return E===o?(D++,k.consume(E),V):D>=l?(k.exit("codeFencedFenceSequence"),X(E)?Z(k,z,"whitespace")(E):z(E)):F(E)}function z(E){return E===null||L(E)?(k.exit("codeFencedFence"),O(E)):F(E)}}}function Zl(e,n,t){const r=this;return i;function i(l){return l===null?t(l):(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a)}function a(l){return r.parser.lazy[r.now().line]?t(l):n(l)}}const Ln={name:"codeIndented",tokenize:no},eo={partial:!0,tokenize:to};function no(e,n,t){const r=this;return i;function i(s){return e.enter("codeIndented"),Z(e,a,"linePrefix",5)(s)}function a(s){const u=r.events[r.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?l(s):t(s)}function l(s){return s===null?c(s):L(s)?e.attempt(eo,l,c)(s):(e.enter("codeFlowValue"),o(s))}function o(s){return s===null||L(s)?(e.exit("codeFlowValue"),l(s)):(e.consume(s),o)}function c(s){return e.exit("codeIndented"),n(s)}}function to(e,n,t){const r=this;return i;function i(l){return r.parser.lazy[r.now().line]?t(l):L(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),i):Z(e,a,"linePrefix",5)(l)}function a(l){const o=r.events[r.events.length-1];return o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(l):L(l)?i(l):t(l)}}const ro={name:"codeText",previous:ao,resolve:io,tokenize:lo};function io(e){let n=e.length-4,t=3,r,i;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(r=t;++r<n;)if(e[r][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(r=t-1,n++;++r<=n;)i===void 0?r!==n&&e[r][1].type!=="lineEnding"&&(i=r):(r===n||e[r][1].type==="lineEnding")&&(e[i][1].type="codeTextData",r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),n-=r-i-2,r=i+2),i=void 0);return e}function ao(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function lo(e,n,t){let r=0,i,a;return l;function l(f){return e.enter("codeText"),e.enter("codeTextSequence"),o(f)}function o(f){return f===96?(e.consume(f),r++,o):(e.exit("codeTextSequence"),c(f))}function c(f){return f===null?t(f):f===32?(e.enter("space"),e.consume(f),e.exit("space"),c):f===96?(a=e.enter("codeTextSequence"),i=0,u(f)):L(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),c):(e.enter("codeTextData"),s(f))}function s(f){return f===null||f===32||f===96||L(f)?(e.exit("codeTextData"),c(f)):(e.consume(f),s)}function u(f){return f===96?(e.consume(f),i++,u):i===r?(e.exit("codeTextSequence"),e.exit("codeText"),n(f)):(a.type="codeTextData",s(f))}}class oo{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const r=t??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(n,r):n>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(n,t,r){const i=t||0;this.setCursor(Math.trunc(n));const a=this.right.splice(this.right.length-i,Number.POSITIVE_INFINITY);return r&&nn(this.left,r),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),nn(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),nn(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);nn(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);nn(this.left,t.reverse())}}}function nn(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function Zr(e){const n={};let t=-1,r,i,a,l,o,c,s;const u=new oo(e);for(;++t<u.length;){for(;t in n;)t=n[t];if(r=u.get(t),t&&r[1].type==="chunkFlow"&&u.get(t-1)[1].type==="listItemPrefix"&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type==="lineEndingBlank"&&(a+=2),a<c.length&&c[a][1].type==="content"))for(;++a<c.length&&c[a][1].type!=="content";)c[a][1].type==="chunkText"&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]==="enter")r[1].contentType&&(Object.assign(n,so(u,t)),t=n[t],s=!0);else if(r[1]._container){for(a=t,i=void 0;a--;)if(l=u.get(a),l[1].type==="lineEnding"||l[1].type==="lineEndingBlank")l[0]==="enter"&&(i&&(u.get(i)[1].type="lineEndingBlank"),l[1].type="lineEnding",i=a);else if(!(l[1].type==="linePrefix"||l[1].type==="listItemIndent"))break;i&&(r[1].end={...u.get(i)[1].start},o=u.slice(i,t),o.unshift(r),u.splice(i,t-i+1,o))}}return Ee(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!s}function so(e,n){const t=e.get(n)[1],r=e.get(n)[2];let i=n-1;const a=[];let l=t._tokenizer;l||(l=r.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(l._contentTypeTextTrailing=!0));const o=l.events,c=[],s={};let u,f,h=-1,p=t,x=0,y=0;const _=[y];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),f&&l.defineSkip(p.start),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=!0),l.write(u),p._isInFirstContentOfListItem&&(l._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=t;++h<o.length;)o[h][0]==="exit"&&o[h-1][0]==="enter"&&o[h][1].type===o[h-1][1].type&&o[h][1].start.line!==o[h][1].end.line&&(y=h+1,_.push(y),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(l.events=[],p?(p._tokenizer=void 0,p.previous=void 0):_.pop(),h=_.length;h--;){const w=o.slice(_[h],_[h+1]),T=a.pop();c.push([T,T+w.length-1]),e.splice(T,2,w)}for(c.reverse(),h=-1;++h<c.length;)s[x+c[h][0]]=x+c[h][1],x+=c[h][1]-c[h][0]-1;return s}const uo={resolve:fo,tokenize:po},co={partial:!0,tokenize:ho};function fo(e){return Zr(e),e}function po(e,n){let t;return r;function r(o){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),i(o)}function i(o){return o===null?a(o):L(o)?e.check(co,l,a)(o):(e.consume(o),i)}function a(o){return e.exit("chunkContent"),e.exit("content"),n(o)}function l(o){return e.consume(o),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,i}}function ho(e,n,t){const r=this;return i;function i(l){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),Z(e,a,"linePrefix")}function a(l){if(l===null||L(l))return t(l);const o=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&o&&o[1].type==="linePrefix"&&o[2].sliceSerialize(o[1],!0).length>=4?n(l):e.interrupt(r.parser.constructs.flow,t,n)(l)}}function ei(e,n,t,r,i,a,l,o,c){const s=c||Number.POSITIVE_INFINITY;let u=0;return f;function f(w){return w===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(w),e.exit(a),h):w===null||w===32||w===41||Qn(w)?t(w):(e.enter(r),e.enter(l),e.enter(o),e.enter("chunkString",{contentType:"string"}),y(w))}function h(w){return w===62?(e.enter(a),e.consume(w),e.exit(a),e.exit(i),e.exit(r),n):(e.enter(o),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===62?(e.exit("chunkString"),e.exit(o),h(w)):w===null||w===60||L(w)?t(w):(e.consume(w),w===92?x:p)}function x(w){return w===60||w===62||w===92?(e.consume(w),p):p(w)}function y(w){return!u&&(w===null||w===41||ue(w))?(e.exit("chunkString"),e.exit(o),e.exit(l),e.exit(r),n(w)):u<s&&w===40?(e.consume(w),u++,y):w===41?(e.consume(w),u--,y):w===null||w===32||w===40||Qn(w)?t(w):(e.consume(w),w===92?_:y)}function _(w){return w===40||w===41||w===92?(e.consume(w),y):y(w)}}function ni(e,n,t,r,i,a){const l=this;let o=0,c;return s;function s(p){return e.enter(r),e.enter(i),e.consume(p),e.exit(i),e.enter(a),u}function u(p){return o>999||p===null||p===91||p===93&&!c||p===94&&!o&&"_hiddenFootnoteSupport"in l.parser.constructs?t(p):p===93?(e.exit(a),e.enter(i),e.consume(p),e.exit(i),e.exit(r),n):L(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||L(p)||o++>999?(e.exit("chunkString"),u(p)):(e.consume(p),c||(c=!X(p)),p===92?h:f)}function h(p){return p===91||p===92||p===93?(e.consume(p),o++,f):f(p)}}function ti(e,n,t,r,i,a){let l;return o;function o(h){return h===34||h===39||h===40?(e.enter(r),e.enter(i),e.consume(h),e.exit(i),l=h===40?41:h,c):t(h)}function c(h){return h===l?(e.enter(i),e.consume(h),e.exit(i),e.exit(r),n):(e.enter(a),s(h))}function s(h){return h===l?(e.exit(a),c(l)):h===null?t(h):L(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),Z(e,s,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(h){return h===l||h===null||L(h)?(e.exit("chunkString"),s(h)):(e.consume(h),h===92?f:u)}function f(h){return h===l||h===92?(e.consume(h),u):u(h)}}function ln(e,n){let t;return r;function r(i){return L(i)?(e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t=!0,r):X(i)?Z(e,r,t?"linePrefix":"lineSuffix")(i):n(i)}}const mo={name:"definition",tokenize:xo},go={partial:!0,tokenize:yo};function xo(e,n,t){const r=this;let i;return a;function a(p){return e.enter("definition"),l(p)}function l(p){return ni.call(r,e,o,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function o(p){return i=Xe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):t(p)}function c(p){return ue(p)?ln(e,s)(p):s(p)}function s(p){return ei(e,u,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function u(p){return e.attempt(go,f,f)(p)}function f(p){return X(p)?Z(e,h,"whitespace")(p):h(p)}function h(p){return p===null||L(p)?(e.exit("definition"),r.parser.defined.push(i),n(p)):t(p)}}function yo(e,n,t){return r;function r(o){return ue(o)?ln(e,i)(o):t(o)}function i(o){return ti(e,a,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(o)}function a(o){return X(o)?Z(e,l,"whitespace")(o):l(o)}function l(o){return o===null||L(o)?n(o):t(o)}}const bo={name:"hardBreakEscape",tokenize:wo};function wo(e,n,t){return r;function r(a){return e.enter("hardBreakEscape"),e.consume(a),i}function i(a){return L(a)?(e.exit("hardBreakEscape"),n(a)):t(a)}}const ko={name:"headingAtx",resolve:vo,tokenize:So};function vo(e,n){let t=e.length-2,r=3,i,a;return e[r][1].type==="whitespace"&&(r+=2),t-2>r&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(r===t-1||t-4>r&&e[t-2][1].type==="whitespace")&&(t-=r+1===t?2:4),t>r&&(i={type:"atxHeadingText",start:e[r][1].start,end:e[t][1].end},a={type:"chunkText",start:e[r][1].start,end:e[t][1].end,contentType:"text"},Ee(e,r,t-r+1,[["enter",i,n],["enter",a,n],["exit",a,n],["exit",i,n]])),e}function So(e,n,t){let r=0;return i;function i(u){return e.enter("atxHeading"),a(u)}function a(u){return e.enter("atxHeadingSequence"),l(u)}function l(u){return u===35&&r++<6?(e.consume(u),l):u===null||ue(u)?(e.exit("atxHeadingSequence"),o(u)):t(u)}function o(u){return u===35?(e.enter("atxHeadingSequence"),c(u)):u===null||L(u)?(e.exit("atxHeading"),n(u)):X(u)?Z(e,o,"whitespace")(u):(e.enter("atxHeadingText"),s(u))}function c(u){return u===35?(e.consume(u),c):(e.exit("atxHeadingSequence"),o(u))}function s(u){return u===null||u===35||ue(u)?(e.exit("atxHeadingText"),o(u)):(e.consume(u),s)}}const _o=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],nr=["pre","script","style","textarea"],Co={concrete:!0,name:"htmlFlow",resolveTo:Io,tokenize:zo},Eo={partial:!0,tokenize:Po},jo={partial:!0,tokenize:No};function Io(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function zo(e,n,t){const r=this;let i,a,l,o,c;return s;function s(g){return u(g)}function u(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),f}function f(g){return g===33?(e.consume(g),h):g===47?(e.consume(g),a=!0,y):g===63?(e.consume(g),i=3,r.interrupt?n:m):Ce(g)?(e.consume(g),l=String.fromCharCode(g),_):t(g)}function h(g){return g===45?(e.consume(g),i=2,p):g===91?(e.consume(g),i=5,o=0,x):Ce(g)?(e.consume(g),i=4,r.interrupt?n:m):t(g)}function p(g){return g===45?(e.consume(g),r.interrupt?n:m):t(g)}function x(g){const fe="CDATA[";return g===fe.charCodeAt(o++)?(e.consume(g),o===fe.length?r.interrupt?n:P:x):t(g)}function y(g){return Ce(g)?(e.consume(g),l=String.fromCharCode(g),_):t(g)}function _(g){if(g===null||g===47||g===62||ue(g)){const fe=g===47,je=l.toLowerCase();return!fe&&!a&&nr.includes(je)?(i=1,r.interrupt?n(g):P(g)):_o.includes(l.toLowerCase())?(i=6,fe?(e.consume(g),w):r.interrupt?n(g):P(g)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?t(g):a?T(g):S(g))}return g===45||ge(g)?(e.consume(g),l+=String.fromCharCode(g),_):t(g)}function w(g){return g===62?(e.consume(g),r.interrupt?n:P):t(g)}function T(g){return X(g)?(e.consume(g),T):q(g)}function S(g){return g===47?(e.consume(g),q):g===58||g===95||Ce(g)?(e.consume(g),$):X(g)?(e.consume(g),S):q(g)}function $(g){return g===45||g===46||g===58||g===95||ge(g)?(e.consume(g),$):A(g)}function A(g){return g===61?(e.consume(g),k):X(g)?(e.consume(g),A):S(g)}function k(g){return g===null||g===60||g===61||g===62||g===96?t(g):g===34||g===39?(e.consume(g),c=g,O):X(g)?(e.consume(g),k):F(g)}function O(g){return g===c?(e.consume(g),c=null,D):g===null||L(g)?t(g):(e.consume(g),O)}function F(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||ue(g)?A(g):(e.consume(g),F)}function D(g){return g===47||g===62||X(g)?S(g):t(g)}function q(g){return g===62?(e.consume(g),N):t(g)}function N(g){return g===null||L(g)?P(g):X(g)?(e.consume(g),N):t(g)}function P(g){return g===45&&i===2?(e.consume(g),W):g===60&&i===1?(e.consume(g),B):g===62&&i===4?(e.consume(g),de):g===63&&i===3?(e.consume(g),m):g===93&&i===5?(e.consume(g),le):L(g)&&(i===6||i===7)?(e.exit("htmlFlowData"),e.check(Eo,ke,V)(g)):g===null||L(g)?(e.exit("htmlFlowData"),V(g)):(e.consume(g),P)}function V(g){return e.check(jo,z,ke)(g)}function z(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),E}function E(g){return g===null||L(g)?V(g):(e.enter("htmlFlowData"),P(g))}function W(g){return g===45?(e.consume(g),m):P(g)}function B(g){return g===47?(e.consume(g),l="",ae):P(g)}function ae(g){if(g===62){const fe=l.toLowerCase();return nr.includes(fe)?(e.consume(g),de):P(g)}return Ce(g)&&l.length<8?(e.consume(g),l+=String.fromCharCode(g),ae):P(g)}function le(g){return g===93?(e.consume(g),m):P(g)}function m(g){return g===62?(e.consume(g),de):g===45&&i===2?(e.consume(g),m):P(g)}function de(g){return g===null||L(g)?(e.exit("htmlFlowData"),ke(g)):(e.consume(g),de)}function ke(g){return e.exit("htmlFlow"),n(g)}}function No(e,n,t){const r=this;return i;function i(l){return L(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),a):t(l)}function a(l){return r.parser.lazy[r.now().line]?t(l):n(l)}}function Po(e,n,t){return r;function r(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(jn,n,t)}}const To={name:"htmlText",tokenize:Ao};function Ao(e,n,t){const r=this;let i,a,l;return o;function o(m){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(m),c}function c(m){return m===33?(e.consume(m),s):m===47?(e.consume(m),A):m===63?(e.consume(m),S):Ce(m)?(e.consume(m),F):t(m)}function s(m){return m===45?(e.consume(m),u):m===91?(e.consume(m),a=0,x):Ce(m)?(e.consume(m),T):t(m)}function u(m){return m===45?(e.consume(m),p):t(m)}function f(m){return m===null?t(m):m===45?(e.consume(m),h):L(m)?(l=f,B(m)):(e.consume(m),f)}function h(m){return m===45?(e.consume(m),p):f(m)}function p(m){return m===62?W(m):m===45?h(m):f(m)}function x(m){const de="CDATA[";return m===de.charCodeAt(a++)?(e.consume(m),a===de.length?y:x):t(m)}function y(m){return m===null?t(m):m===93?(e.consume(m),_):L(m)?(l=y,B(m)):(e.consume(m),y)}function _(m){return m===93?(e.consume(m),w):y(m)}function w(m){return m===62?W(m):m===93?(e.consume(m),w):y(m)}function T(m){return m===null||m===62?W(m):L(m)?(l=T,B(m)):(e.consume(m),T)}function S(m){return m===null?t(m):m===63?(e.consume(m),$):L(m)?(l=S,B(m)):(e.consume(m),S)}function $(m){return m===62?W(m):S(m)}function A(m){return Ce(m)?(e.consume(m),k):t(m)}function k(m){return m===45||ge(m)?(e.consume(m),k):O(m)}function O(m){return L(m)?(l=O,B(m)):X(m)?(e.consume(m),O):W(m)}function F(m){return m===45||ge(m)?(e.consume(m),F):m===47||m===62||ue(m)?D(m):t(m)}function D(m){return m===47?(e.consume(m),W):m===58||m===95||Ce(m)?(e.consume(m),q):L(m)?(l=D,B(m)):X(m)?(e.consume(m),D):W(m)}function q(m){return m===45||m===46||m===58||m===95||ge(m)?(e.consume(m),q):N(m)}function N(m){return m===61?(e.consume(m),P):L(m)?(l=N,B(m)):X(m)?(e.consume(m),N):D(m)}function P(m){return m===null||m===60||m===61||m===62||m===96?t(m):m===34||m===39?(e.consume(m),i=m,V):L(m)?(l=P,B(m)):X(m)?(e.consume(m),P):(e.consume(m),z)}function V(m){return m===i?(e.consume(m),i=void 0,E):m===null?t(m):L(m)?(l=V,B(m)):(e.consume(m),V)}function z(m){return m===null||m===34||m===39||m===60||m===61||m===96?t(m):m===47||m===62||ue(m)?D(m):(e.consume(m),z)}function E(m){return m===47||m===62||ue(m)?D(m):t(m)}function W(m){return m===62?(e.consume(m),e.exit("htmlTextData"),e.exit("htmlText"),n):t(m)}function B(m){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(m),e.exit("lineEnding"),ae}function ae(m){return X(m)?Z(e,le,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(m):le(m)}function le(m){return e.enter("htmlTextData"),l(m)}}const mt={name:"labelEnd",resolveAll:Oo,resolveTo:Mo,tokenize:Fo},Ro={tokenize:Uo},Do={tokenize:$o},Lo={tokenize:qo};function Oo(e){let n=-1;const t=[];for(;++n<e.length;){const r=e[n][1];if(t.push(e[n]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const i=r.type==="labelImage"?4:2;r.type="data",n+=i}}return e.length!==t.length&&Ee(e,0,e.length,t),e}function Mo(e,n){let t=e.length,r=0,i,a,l,o;for(;t--;)if(i=e[t][1],a){if(i.type==="link"||i.type==="labelLink"&&i._inactive)break;e[t][0]==="enter"&&i.type==="labelLink"&&(i._inactive=!0)}else if(l){if(e[t][0]==="enter"&&(i.type==="labelImage"||i.type==="labelLink")&&!i._balanced&&(a=t,i.type!=="labelLink")){r=2;break}}else i.type==="labelEnd"&&(l=t);const c={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},s={type:"label",start:{...e[a][1].start},end:{...e[l][1].end}},u={type:"labelText",start:{...e[a+r+2][1].end},end:{...e[l-2][1].start}};return o=[["enter",c,n],["enter",s,n]],o=we(o,e.slice(a+1,a+r+3)),o=we(o,[["enter",u,n]]),o=we(o,ht(n.parser.constructs.insideSpan.null,e.slice(a+r+4,l-3),n)),o=we(o,[["exit",u,n],e[l-2],e[l-1],["exit",s,n]]),o=we(o,e.slice(l+1)),o=we(o,[["exit",c,n]]),Ee(e,a,e.length,o),e}function Fo(e,n,t){const r=this;let i=r.events.length,a,l;for(;i--;)if((r.events[i][1].type==="labelImage"||r.events[i][1].type==="labelLink")&&!r.events[i][1]._balanced){a=r.events[i][1];break}return o;function o(h){return a?a._inactive?f(h):(l=r.parser.defined.includes(Xe(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(h),e.exit("labelMarker"),e.exit("labelEnd"),c):t(h)}function c(h){return h===40?e.attempt(Ro,u,l?u:f)(h):h===91?e.attempt(Do,u,l?s:f)(h):l?u(h):f(h)}function s(h){return e.attempt(Lo,u,f)(h)}function u(h){return n(h)}function f(h){return a._balanced=!0,t(h)}}function Uo(e,n,t){return r;function r(f){return e.enter("resource"),e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),i}function i(f){return ue(f)?ln(e,a)(f):a(f)}function a(f){return f===41?u(f):ei(e,l,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function l(f){return ue(f)?ln(e,c)(f):u(f)}function o(f){return t(f)}function c(f){return f===34||f===39||f===40?ti(e,s,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):u(f)}function s(f){return ue(f)?ln(e,u)(f):u(f)}function u(f){return f===41?(e.enter("resourceMarker"),e.consume(f),e.exit("resourceMarker"),e.exit("resource"),n):t(f)}}function $o(e,n,t){const r=this;return i;function i(o){return ni.call(r,e,a,l,"reference","referenceMarker","referenceString")(o)}function a(o){return r.parser.defined.includes(Xe(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?n(o):t(o)}function l(o){return t(o)}}function qo(e,n,t){return r;function r(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),i}function i(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),n):t(a)}}const Bo={name:"labelStartImage",resolveAll:mt.resolveAll,tokenize:Vo};function Vo(e,n,t){const r=this;return i;function i(o){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(o),e.exit("labelImageMarker"),a}function a(o){return o===91?(e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelImage"),l):t(o)}function l(o){return o===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(o):n(o)}}const Ho={name:"labelStartLink",resolveAll:mt.resolveAll,tokenize:Wo};function Wo(e,n,t){const r=this;return i;function i(l){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelLink"),a}function a(l){return l===94&&"_hiddenFootnoteSupport"in r.parser.constructs?t(l):n(l)}}const On={name:"lineEnding",tokenize:Xo};function Xo(e,n){return t;function t(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),Z(e,n,"linePrefix")}}const vn={name:"thematicBreak",tokenize:Ko};function Ko(e,n,t){let r=0,i;return a;function a(s){return e.enter("thematicBreak"),l(s)}function l(s){return i=s,o(s)}function o(s){return s===i?(e.enter("thematicBreakSequence"),c(s)):r>=3&&(s===null||L(s))?(e.exit("thematicBreak"),n(s)):t(s)}function c(s){return s===i?(e.consume(s),r++,c):(e.exit("thematicBreakSequence"),X(s)?Z(e,o,"whitespace")(s):o(s))}}const oe={continuation:{tokenize:Jo},exit:es,name:"list",tokenize:Qo},Go={partial:!0,tokenize:ns},Yo={partial:!0,tokenize:Zo};function Qo(e,n,t){const r=this,i=r.events[r.events.length-1];let a=i&&i[1].type==="linePrefix"?i[2].sliceSerialize(i[1],!0).length:0,l=0;return o;function o(p){const x=r.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(x==="listUnordered"?!r.containerState.marker||p===r.containerState.marker:Jn(p)){if(r.containerState.type||(r.containerState.type=x,e.enter(x,{_container:!0})),x==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(vn,t,s)(p):s(p);if(!r.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return t(p)}function c(p){return Jn(p)&&++l<10?(e.consume(p),c):(!r.interrupt||l<2)&&(r.containerState.marker?p===r.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),s(p)):t(p)}function s(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||p,e.check(jn,r.interrupt?t:u,e.attempt(Go,h,f))}function u(p){return r.containerState.initialBlankLine=!0,a++,h(p)}function f(p){return X(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),h):t(p)}function h(p){return r.containerState.size=a+r.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(p)}}function Jo(e,n,t){const r=this;return r.containerState._closeFlow=void 0,e.check(jn,i,a);function i(o){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Z(e,n,"listItemIndent",r.containerState.size+1)(o)}function a(o){return r.containerState.furtherBlankLines||!X(o)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,l(o)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(Yo,n,l)(o))}function l(o){return r.containerState._closeFlow=!0,r.interrupt=void 0,Z(e,e.attempt(oe,n,t),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o)}}function Zo(e,n,t){const r=this;return Z(e,i,"listItemIndent",r.containerState.size+1);function i(a){const l=r.events[r.events.length-1];return l&&l[1].type==="listItemIndent"&&l[2].sliceSerialize(l[1],!0).length===r.containerState.size?n(a):t(a)}}function es(e){e.exit(this.containerState.type)}function ns(e,n,t){const r=this;return Z(e,i,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function i(a){const l=r.events[r.events.length-1];return!X(a)&&l&&l[1].type==="listItemPrefixWhitespace"?n(a):t(a)}}const tr={name:"setextUnderline",resolveTo:ts,tokenize:rs};function ts(e,n){let t=e.length,r,i,a;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){r=t;break}e[t][1].type==="paragraph"&&(i=t)}else e[t][1].type==="content"&&e.splice(t,1),!a&&e[t][1].type==="definition"&&(a=t);const l={type:"setextHeading",start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type="setextHeadingText",a?(e.splice(i,0,["enter",l,n]),e.splice(a+1,0,["exit",e[r][1],n]),e[r][1].end={...e[a][1].end}):e[r][1]=l,e.push(["exit",l,n]),e}function rs(e,n,t){const r=this;let i;return a;function a(s){let u=r.events.length,f;for(;u--;)if(r.events[u][1].type!=="lineEnding"&&r.events[u][1].type!=="linePrefix"&&r.events[u][1].type!=="content"){f=r.events[u][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||f)?(e.enter("setextHeadingLine"),i=s,l(s)):t(s)}function l(s){return e.enter("setextHeadingLineSequence"),o(s)}function o(s){return s===i?(e.consume(s),o):(e.exit("setextHeadingLineSequence"),X(s)?Z(e,c,"lineSuffix")(s):c(s))}function c(s){return s===null||L(s)?(e.exit("setextHeadingLine"),n(s)):t(s)}}const is={tokenize:as};function as(e){const n=this,t=e.attempt(jn,r,e.attempt(this.parser.constructs.flowInitial,i,Z(e,e.attempt(this.parser.constructs.flow,i,e.attempt(uo,i)),"linePrefix")));return t;function r(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function i(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const ls={resolveAll:ii()},os=ri("string"),ss=ri("text");function ri(e){return{resolveAll:ii(e==="text"?us:void 0),tokenize:n};function n(t){const r=this,i=this.parser.constructs[e],a=t.attempt(i,l,o);return l;function l(u){return s(u)?a(u):o(u)}function o(u){if(u===null){t.consume(u);return}return t.enter("data"),t.consume(u),c}function c(u){return s(u)?(t.exit("data"),a(u)):(t.consume(u),c)}function s(u){if(u===null)return!0;const f=i[u];let h=-1;if(f)for(;++h<f.length;){const p=f[h];if(!p.previous||p.previous.call(r,r.previous))return!0}return!1}}}function ii(e){return n;function n(t,r){let i=-1,a;for(;++i<=t.length;)a===void 0?t[i]&&t[i][1].type==="data"&&(a=i,i++):(!t[i]||t[i][1].type!=="data")&&(i!==a+2&&(t[a][1].end=t[i-1][1].end,t.splice(a+2,i-a-2),i=a+2),a=void 0);return e?e(t,r):t}}function us(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const r=e[t-1][1],i=n.sliceStream(r);let a=i.length,l=-1,o=0,c;for(;a--;){const s=i[a];if(typeof s=="string"){for(l=s.length;s.charCodeAt(l-1)===32;)o++,l--;if(l)break;l=-1}else if(s===-2)c=!0,o++;else if(s!==-1){a++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(o=0),o){const s={type:t===e.length||c||o<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?l:r.start._bufferIndex+l,_index:r.start._index+a,line:r.end.line,column:r.end.column-o,offset:r.end.offset-o},end:{...r.end}};r.end={...s.start},r.start.offset===r.end.offset?Object.assign(r,s):(e.splice(t,0,["enter",s,n],["exit",s,n]),t+=2)}t++}return e}const cs={42:oe,43:oe,45:oe,48:oe,49:oe,50:oe,51:oe,52:oe,53:oe,54:oe,55:oe,56:oe,57:oe,62:Yr},ds={91:mo},fs={[-2]:Ln,[-1]:Ln,32:Ln},ps={35:ko,42:vn,45:[tr,vn],60:Co,61:tr,95:vn,96:er,126:er},hs={38:Jr,92:Qr},ms={[-5]:On,[-4]:On,[-3]:On,33:Bo,38:Jr,42:Zn,60:[Vl,To],91:Ho,92:[bo,Qr],93:mt,95:Zn,96:ro},gs={null:[Zn,ls]},xs={null:[42,95]},ys={null:[]},bs=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:xs,contentInitial:ds,disable:ys,document:cs,flow:ps,flowInitial:fs,insideSpan:gs,string:hs,text:ms},Symbol.toStringTag,{value:"Module"}));function ws(e,n,t){let r={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const i={},a=[];let l=[],o=[];const c={attempt:O(A),check:O(k),consume:T,enter:S,exit:$,interrupt:O(k,{interrupt:!0})},s={code:null,containerState:{},defineSkip:y,events:[],now:x,parser:e,previous:null,sliceSerialize:h,sliceStream:p,write:f};let u=n.tokenize.call(s,c);return n.resolveAll&&a.push(n),s;function f(N){return l=we(l,N),_(),l[l.length-1]!==null?[]:(F(n,0),s.events=ht(a,s.events,s),s.events)}function h(N,P){return vs(p(N),P)}function p(N){return ks(l,N)}function x(){const{_bufferIndex:N,_index:P,line:V,column:z,offset:E}=r;return{_bufferIndex:N,_index:P,line:V,column:z,offset:E}}function y(N){i[N.line]=N.column,q()}function _(){let N;for(;r._index<l.length;){const P=l[r._index];if(typeof P=="string")for(N=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===N&&r._bufferIndex<P.length;)w(P.charCodeAt(r._bufferIndex));else w(P)}}function w(N){u=u(N)}function T(N){L(N)?(r.line++,r.column=1,r.offset+=N===-3?2:1,q()):N!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===l[r._index].length&&(r._bufferIndex=-1,r._index++)),s.previous=N}function S(N,P){const V=P||{};return V.type=N,V.start=x(),s.events.push(["enter",V,s]),o.push(V),V}function $(N){const P=o.pop();return P.end=x(),s.events.push(["exit",P,s]),P}function A(N,P){F(N,P.from)}function k(N,P){P.restore()}function O(N,P){return V;function V(z,E,W){let B,ae,le,m;return Array.isArray(z)?ke(z):"tokenize"in z?ke([z]):de(z);function de(te){return Ae;function Ae(pe){const R=pe!==null&&te[pe],K=pe!==null&&te.null,re=[...Array.isArray(R)?R:R?[R]:[],...Array.isArray(K)?K:K?[K]:[]];return ke(re)(pe)}}function ke(te){return B=te,ae=0,te.length===0?W:g(te[ae])}function g(te){return Ae;function Ae(pe){return m=D(),le=te,te.partial||(s.currentConstruct=te),te.name&&s.parser.constructs.disable.null.includes(te.name)?je():te.tokenize.call(P?Object.assign(Object.create(s),P):s,c,fe,je)(pe)}}function fe(te){return N(le,m),E}function je(te){return m.restore(),++ae<B.length?g(B[ae]):W}}}function F(N,P){N.resolveAll&&!a.includes(N)&&a.push(N),N.resolve&&Ee(s.events,P,s.events.length-P,N.resolve(s.events.slice(P),s)),N.resolveTo&&(s.events=N.resolveTo(s.events,s))}function D(){const N=x(),P=s.previous,V=s.currentConstruct,z=s.events.length,E=Array.from(o);return{from:z,restore:W};function W(){r=N,s.previous=P,s.currentConstruct=V,s.events.length=z,o=E,q()}}function q(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function ks(e,n){const t=n.start._index,r=n.start._bufferIndex,i=n.end._index,a=n.end._bufferIndex;let l;if(t===i)l=[e[t].slice(r,a)];else{if(l=e.slice(t,i),r>-1){const o=l[0];typeof o=="string"?l[0]=o.slice(r):l.shift()}a>0&&l.push(e[i].slice(0,a))}return l}function vs(e,n){let t=-1;const r=[];let i;for(;++t<e.length;){const a=e[t];let l;if(typeof a=="string")l=a;else switch(a){case-5:{l="\r";break}case-4:{l=`
`;break}case-3:{l=`\r
`;break}case-2:{l=n?" ":"	";break}case-1:{if(!n&&i)continue;l=" ";break}default:l=String.fromCharCode(a)}i=a===-2,r.push(l)}return r.join("")}function Ss(e){const r={constructs:zl([bs,...(e||{}).extensions||[]]),content:i(Ol),defined:[],document:i(Fl),flow:i(is),lazy:{},string:i(os),text:i(ss)};return r;function i(a){return l;function l(o){return ws(r,a,o)}}}function _s(e){for(;!Zr(e););return e}const rr=/[\0\t\n\r]/g;function Cs(){let e=1,n="",t=!0,r;return i;function i(a,l,o){const c=[];let s,u,f,h,p;for(a=n+(typeof a=="string"?a.toString():new TextDecoder(l||void 0).decode(a)),f=0,n="",t&&(a.charCodeAt(0)===65279&&f++,t=void 0);f<a.length;){if(rr.lastIndex=f,s=rr.exec(a),h=s&&s.index!==void 0?s.index:a.length,p=a.charCodeAt(h),!s){n=a.slice(f);break}if(p===10&&f===h&&r)c.push(-3),r=void 0;else switch(r&&(c.push(-5),r=void 0),f<h&&(c.push(a.slice(f,h)),e+=h-f),p){case 0:{c.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,c.push(-2);e++<u;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:r=!0,e=1}f=h+1}return o&&(r&&c.push(-5),n&&c.push(n),c.push(null)),c}}const Es=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function js(e){return e.replace(Es,Is)}function Is(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const i=t.charCodeAt(1),a=i===120||i===88;return Gr(t.slice(a?2:1),a?16:10)}return pt(t)||e}const ai={}.hasOwnProperty;function zs(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),Ns(t)(_s(Ss(t).document().write(Cs()(e,n,!0))))}function Ns(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(kt),autolinkProtocol:D,autolinkEmail:D,atxHeading:a(De),blockQuote:a(K),characterEscape:D,characterReference:D,codeFenced:a(re),codeFencedFenceInfo:l,codeFencedFenceMeta:l,codeIndented:a(re,l),codeText:a(Ne,l),codeTextData:D,data:D,codeFlowValue:D,definition:a(Re),definitionDestinationString:l,definitionLabelString:l,definitionTitleString:l,emphasis:a(Ue),hardBreakEscape:a(hn),hardBreakTrailing:a(hn),htmlFlow:a(Ye,l),htmlFlowData:D,htmlText:a(Ye,l),htmlTextData:D,image:a(yi),label:l,link:a(kt),listItem:a(bi),listItemValue:h,listOrdered:a(vt,f),listUnordered:a(vt),paragraph:a(wi),reference:g,referenceString:l,resourceDestinationString:l,resourceTitleString:l,setextHeading:a(De),strong:a(ki),thematicBreak:a(Si)},exit:{atxHeading:c(),atxHeadingSequence:A,autolink:c(),autolinkEmail:R,autolinkProtocol:pe,blockQuote:c(),characterEscapeValue:q,characterReferenceMarkerHexadecimal:je,characterReferenceMarkerNumeric:je,characterReferenceValue:te,characterReference:Ae,codeFenced:c(_),codeFencedFence:y,codeFencedFenceInfo:p,codeFencedFenceMeta:x,codeFlowValue:q,codeIndented:c(w),codeText:c(E),codeTextData:q,data:q,definition:c(),definitionDestinationString:$,definitionLabelString:T,definitionTitleString:S,emphasis:c(),hardBreakEscape:c(P),hardBreakTrailing:c(P),htmlFlow:c(V),htmlFlowData:q,htmlText:c(z),htmlTextData:q,image:c(B),label:le,labelText:ae,lineEnding:N,link:c(W),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:fe,resourceDestinationString:m,resourceTitleString:de,resource:ke,setextHeading:c(F),setextHeadingLineSequence:O,setextHeadingText:k,strong:c(),thematicBreak:c()}};li(n,(e||{}).mdastExtensions||[]);const t={};return r;function r(b){let C={type:"root",children:[]};const M={stack:[C],tokenStack:[],config:n,enter:o,exit:s,buffer:l,resume:u,data:t},H=[];let Q=-1;for(;++Q<b.length;)if(b[Q][1].type==="listOrdered"||b[Q][1].type==="listUnordered")if(b[Q][0]==="enter")H.push(Q);else{const ve=H.pop();Q=i(b,ve,Q)}for(Q=-1;++Q<b.length;){const ve=n[b[Q][0]];ai.call(ve,b[Q][1].type)&&ve[b[Q][1].type].call(Object.assign({sliceSerialize:b[Q][2].sliceSerialize},M),b[Q][1])}if(M.tokenStack.length>0){const ve=M.tokenStack[M.tokenStack.length-1];(ve[1]||ir).call(M,void 0,ve[0])}for(C.position={start:Pe(b.length>0?b[0][1].start:{line:1,column:1,offset:0}),end:Pe(b.length>0?b[b.length-2][1].end:{line:1,column:1,offset:0})},Q=-1;++Q<n.transforms.length;)C=n.transforms[Q](C)||C;return C}function i(b,C,M){let H=C-1,Q=-1,ve=!1,Le,Ie,Qe,Je;for(;++H<=M;){const he=b[H];switch(he[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{he[0]==="enter"?Q++:Q--,Je=void 0;break}case"lineEndingBlank":{he[0]==="enter"&&(Le&&!Je&&!Q&&!Qe&&(Qe=H),Je=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Je=void 0}if(!Q&&he[0]==="enter"&&he[1].type==="listItemPrefix"||Q===-1&&he[0]==="exit"&&(he[1].type==="listUnordered"||he[1].type==="listOrdered")){if(Le){let $e=H;for(Ie=void 0;$e--;){const ze=b[$e];if(ze[1].type==="lineEnding"||ze[1].type==="lineEndingBlank"){if(ze[0]==="exit")continue;Ie&&(b[Ie][1].type="lineEndingBlank",ve=!0),ze[1].type="lineEnding",Ie=$e}else if(!(ze[1].type==="linePrefix"||ze[1].type==="blockQuotePrefix"||ze[1].type==="blockQuotePrefixWhitespace"||ze[1].type==="blockQuoteMarker"||ze[1].type==="listItemIndent"))break}Qe&&(!Ie||Qe<Ie)&&(Le._spread=!0),Le.end=Object.assign({},Ie?b[Ie][1].start:he[1].end),b.splice(Ie||H,0,["exit",Le,he[2]]),H++,M++}if(he[1].type==="listItemPrefix"){const $e={type:"listItem",_spread:!1,start:Object.assign({},he[1].start),end:void 0};Le=$e,b.splice(H,0,["enter",$e,he[2]]),H++,M++,Qe=void 0,Je=!0}}}return b[C][1]._spread=ve,M}function a(b,C){return M;function M(H){o.call(this,b(H),H),C&&C.call(this,H)}}function l(){this.stack.push({type:"fragment",children:[]})}function o(b,C,M){this.stack[this.stack.length-1].children.push(b),this.stack.push(b),this.tokenStack.push([C,M||void 0]),b.position={start:Pe(C.start),end:void 0}}function c(b){return C;function C(M){b&&b.call(this,M),s.call(this,M)}}function s(b,C){const M=this.stack.pop(),H=this.tokenStack.pop();if(H)H[0].type!==b.type&&(C?C.call(this,b,H[0]):(H[1]||ir).call(this,b,H[0]));else throw new Error("Cannot close `"+b.type+"` ("+an({start:b.start,end:b.end})+"): it’s not open");M.position.end=Pe(b.end)}function u(){return jl(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(b){if(this.data.expectingFirstListItemValue){const C=this.stack[this.stack.length-2];C.start=Number.parseInt(this.sliceSerialize(b),10),this.data.expectingFirstListItemValue=void 0}}function p(){const b=this.resume(),C=this.stack[this.stack.length-1];C.lang=b}function x(){const b=this.resume(),C=this.stack[this.stack.length-1];C.meta=b}function y(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function _(){const b=this.resume(),C=this.stack[this.stack.length-1];C.value=b.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const b=this.resume(),C=this.stack[this.stack.length-1];C.value=b.replace(/(\r?\n|\r)$/g,"")}function T(b){const C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=Xe(this.sliceSerialize(b)).toLowerCase()}function S(){const b=this.resume(),C=this.stack[this.stack.length-1];C.title=b}function $(){const b=this.resume(),C=this.stack[this.stack.length-1];C.url=b}function A(b){const C=this.stack[this.stack.length-1];if(!C.depth){const M=this.sliceSerialize(b).length;C.depth=M}}function k(){this.data.setextHeadingSlurpLineEnding=!0}function O(b){const C=this.stack[this.stack.length-1];C.depth=this.sliceSerialize(b).codePointAt(0)===61?1:2}function F(){this.data.setextHeadingSlurpLineEnding=void 0}function D(b){const M=this.stack[this.stack.length-1].children;let H=M[M.length-1];(!H||H.type!=="text")&&(H=vi(),H.position={start:Pe(b.start),end:void 0},M.push(H)),this.stack.push(H)}function q(b){const C=this.stack.pop();C.value+=this.sliceSerialize(b),C.position.end=Pe(b.end)}function N(b){const C=this.stack[this.stack.length-1];if(this.data.atHardBreak){const M=C.children[C.children.length-1];M.position.end=Pe(b.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(C.type)&&(D.call(this,b),q.call(this,b))}function P(){this.data.atHardBreak=!0}function V(){const b=this.resume(),C=this.stack[this.stack.length-1];C.value=b}function z(){const b=this.resume(),C=this.stack[this.stack.length-1];C.value=b}function E(){const b=this.resume(),C=this.stack[this.stack.length-1];C.value=b}function W(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=C,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function B(){const b=this.stack[this.stack.length-1];if(this.data.inReference){const C=this.data.referenceType||"shortcut";b.type+="Reference",b.referenceType=C,delete b.url,delete b.title}else delete b.identifier,delete b.label;this.data.referenceType=void 0}function ae(b){const C=this.sliceSerialize(b),M=this.stack[this.stack.length-2];M.label=js(C),M.identifier=Xe(C).toLowerCase()}function le(){const b=this.stack[this.stack.length-1],C=this.resume(),M=this.stack[this.stack.length-1];if(this.data.inReference=!0,M.type==="link"){const H=b.children;M.children=H}else M.alt=C}function m(){const b=this.resume(),C=this.stack[this.stack.length-1];C.url=b}function de(){const b=this.resume(),C=this.stack[this.stack.length-1];C.title=b}function ke(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function fe(b){const C=this.resume(),M=this.stack[this.stack.length-1];M.label=C,M.identifier=Xe(this.sliceSerialize(b)).toLowerCase(),this.data.referenceType="full"}function je(b){this.data.characterReferenceType=b.type}function te(b){const C=this.sliceSerialize(b),M=this.data.characterReferenceType;let H;M?(H=Gr(C,M==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):H=pt(C);const Q=this.stack[this.stack.length-1];Q.value+=H}function Ae(b){const C=this.stack.pop();C.position.end=Pe(b.end)}function pe(b){q.call(this,b);const C=this.stack[this.stack.length-1];C.url=this.sliceSerialize(b)}function R(b){q.call(this,b);const C=this.stack[this.stack.length-1];C.url="mailto:"+this.sliceSerialize(b)}function K(){return{type:"blockquote",children:[]}}function re(){return{type:"code",lang:null,meta:null,value:""}}function Ne(){return{type:"inlineCode",value:""}}function Re(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Ue(){return{type:"emphasis",children:[]}}function De(){return{type:"heading",depth:0,children:[]}}function hn(){return{type:"break"}}function Ye(){return{type:"html",value:""}}function yi(){return{type:"image",title:null,url:"",alt:null}}function kt(){return{type:"link",title:null,url:"",children:[]}}function vt(b){return{type:"list",ordered:b.type==="listOrdered",start:null,spread:b._spread,children:[]}}function bi(b){return{type:"listItem",spread:b._spread,checked:null,children:[]}}function wi(){return{type:"paragraph",children:[]}}function ki(){return{type:"strong",children:[]}}function vi(){return{type:"text",value:""}}function Si(){return{type:"thematicBreak"}}}function Pe(e){return{line:e.line,column:e.column,offset:e.offset}}function li(e,n){let t=-1;for(;++t<n.length;){const r=n[t];Array.isArray(r)?li(e,r):Ps(e,r)}}function Ps(e,n){let t;for(t in n)if(ai.call(n,t))switch(t){case"canContainEols":{const r=n[t];r&&e[t].push(...r);break}case"transforms":{const r=n[t];r&&e[t].push(...r);break}case"enter":case"exit":{const r=n[t];r&&Object.assign(e[t],r);break}}}function ir(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+an({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+an({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+an({start:n.start,end:n.end})+") is still open")}function Ts(e){const n=this;n.parser=t;function t(r){return zs(r,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function As(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function Rs(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function Ds(e,n){const t=n.value?n.value+`
`:"",r={},i=n.lang?n.lang.split(/\s+/):[];i.length>0&&(r.className=["language-"+i[0]]);let a={type:"element",tagName:"code",properties:r,children:[{type:"text",value:t}]};return n.meta&&(a.data={meta:n.meta}),e.patch(n,a),a=e.applyData(n,a),a={type:"element",tagName:"pre",properties:{},children:[a]},e.patch(n,a),a}function Ls(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Os(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ms(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",r=String(n.identifier).toUpperCase(),i=Ge(r.toLowerCase()),a=e.footnoteOrder.indexOf(r);let l,o=e.footnoteCounts.get(r);o===void 0?(o=0,e.footnoteOrder.push(r),l=e.footnoteOrder.length):l=a+1,o+=1,e.footnoteCounts.set(r,o);const c={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+i,id:t+"fnref-"+i+(o>1?"-"+o:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(l)}]};e.patch(n,c);const s={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(n,s),e.applyData(n,s)}function Fs(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Us(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function oi(e,n){const t=n.referenceType;let r="]";if(t==="collapsed"?r+="[]":t==="full"&&(r+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+r}];const i=e.all(n),a=i[0];a&&a.type==="text"?a.value="["+a.value:i.unshift({type:"text",value:"["});const l=i[i.length-1];return l&&l.type==="text"?l.value+=r:i.push({type:"text",value:r}),i}function $s(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return oi(e,n);const i={src:Ge(r.url||""),alt:n.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"img",properties:i,children:[]};return e.patch(n,a),e.applyData(n,a)}function qs(e,n){const t={src:Ge(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,r),e.applyData(n,r)}function Bs(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const r={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,r),e.applyData(n,r)}function Vs(e,n){const t=String(n.identifier).toUpperCase(),r=e.definitionById.get(t);if(!r)return oi(e,n);const i={href:Ge(r.url||"")};r.title!==null&&r.title!==void 0&&(i.title=r.title);const a={type:"element",tagName:"a",properties:i,children:e.all(n)};return e.patch(n,a),e.applyData(n,a)}function Hs(e,n){const t={href:Ge(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const r={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Ws(e,n,t){const r=e.all(n),i=t?Xs(t):si(n),a={},l=[];if(typeof n.checked=="boolean"){const u=r[0];let f;u&&u.type==="element"&&u.tagName==="p"?f=u:(f={type:"element",tagName:"p",properties:{},children:[]},r.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let o=-1;for(;++o<r.length;){const u=r[o];(i||o!==0||u.type!=="element"||u.tagName!=="p")&&l.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!i?l.push(...u.children):l.push(u)}const c=r[r.length-1];c&&(i||c.type!=="element"||c.tagName!=="p")&&l.push({type:"text",value:`
`});const s={type:"element",tagName:"li",properties:a,children:l};return e.patch(n,s),e.applyData(n,s)}function Xs(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let r=-1;for(;!n&&++r<t.length;)n=si(t[r])}return n}function si(e){const n=e.spread;return n??e.children.length>1}function Ks(e,n){const t={},r=e.all(n);let i=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++i<r.length;){const l=r[i];if(l.type==="element"&&l.tagName==="li"&&l.properties&&Array.isArray(l.properties.className)&&l.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const a={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(r,!0)};return e.patch(n,a),e.applyData(n,a)}function Gs(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Ys(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Qs(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Js(e,n){const t=e.all(n),r=t.shift(),i=[];if(r){const l={type:"element",tagName:"thead",properties:{},children:e.wrap([r],!0)};e.patch(n.children[0],l),i.push(l)}if(t.length>0){const l={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},o=ut(n.children[1]),c=qr(n.children[n.children.length-1]);o&&c&&(l.position={start:o,end:c}),i.push(l)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(i,!0)};return e.patch(n,a),e.applyData(n,a)}function Zs(e,n,t){const r=t?t.children:void 0,a=(r?r.indexOf(n):1)===0?"th":"td",l=t&&t.type==="table"?t.align:void 0,o=l?l.length:n.children.length;let c=-1;const s=[];for(;++c<o;){const f=n.children[c],h={},p=l?l[c]:void 0;p&&(h.align=p);let x={type:"element",tagName:a,properties:h,children:[]};f&&(x.children=e.all(f),e.patch(f,x),x=e.applyData(f,x)),s.push(x)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(s,!0)};return e.patch(n,u),e.applyData(n,u)}function eu(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const ar=9,lr=32;function nu(e){const n=String(e),t=/\r?\n|\r/g;let r=t.exec(n),i=0;const a=[];for(;r;)a.push(or(n.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=t.exec(n);return a.push(or(n.slice(i),i>0,!1)),a.join("")}function or(e,n,t){let r=0,i=e.length;if(n){let a=e.codePointAt(r);for(;a===ar||a===lr;)r++,a=e.codePointAt(r)}if(t){let a=e.codePointAt(i-1);for(;a===ar||a===lr;)i--,a=e.codePointAt(i-1)}return i>r?e.slice(r,i):""}function tu(e,n){const t={type:"text",value:nu(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function ru(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const iu={blockquote:As,break:Rs,code:Ds,delete:Ls,emphasis:Os,footnoteReference:Ms,heading:Fs,html:Us,imageReference:$s,image:qs,inlineCode:Bs,linkReference:Vs,link:Hs,listItem:Ws,list:Ks,paragraph:Gs,root:Ys,strong:Qs,table:Js,tableCell:eu,tableRow:Zs,text:tu,thematicBreak:ru,toml:gn,yaml:gn,definition:gn,footnoteDefinition:gn};function gn(){}const ui=-1,In=0,on=1,Cn=2,gt=3,xt=4,yt=5,bt=6,ci=7,di=8,sr=typeof self=="object"?self:globalThis,au=(e,n)=>{const t=(i,a)=>(e.set(a,i),i),r=i=>{if(e.has(i))return e.get(i);const[a,l]=n[i];switch(a){case In:case ui:return t(l,i);case on:{const o=t([],i);for(const c of l)o.push(r(c));return o}case Cn:{const o=t({},i);for(const[c,s]of l)o[r(c)]=r(s);return o}case gt:return t(new Date(l),i);case xt:{const{source:o,flags:c}=l;return t(new RegExp(o,c),i)}case yt:{const o=t(new Map,i);for(const[c,s]of l)o.set(r(c),r(s));return o}case bt:{const o=t(new Set,i);for(const c of l)o.add(r(c));return o}case ci:{const{name:o,message:c}=l;return t(new sr[o](c),i)}case di:return t(BigInt(l),i);case"BigInt":return t(Object(BigInt(l)),i);case"ArrayBuffer":return t(new Uint8Array(l).buffer,l);case"DataView":{const{buffer:o}=new Uint8Array(l);return t(new DataView(o),l)}}return t(new sr[a](l),i)};return r},ur=e=>au(new Map,e)(0),Ve="",{toString:lu}={},{keys:ou}=Object,tn=e=>{const n=typeof e;if(n!=="object"||!e)return[In,n];const t=lu.call(e).slice(8,-1);switch(t){case"Array":return[on,Ve];case"Object":return[Cn,Ve];case"Date":return[gt,Ve];case"RegExp":return[xt,Ve];case"Map":return[yt,Ve];case"Set":return[bt,Ve];case"DataView":return[on,t]}return t.includes("Array")?[on,t]:t.includes("Error")?[ci,t]:[Cn,t]},xn=([e,n])=>e===In&&(n==="function"||n==="symbol"),su=(e,n,t,r)=>{const i=(l,o)=>{const c=r.push(l)-1;return t.set(o,c),c},a=l=>{if(t.has(l))return t.get(l);let[o,c]=tn(l);switch(o){case In:{let u=l;switch(c){case"bigint":o=di,u=l.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);u=null;break;case"undefined":return i([ui],l)}return i([o,u],l)}case on:{if(c){let h=l;return c==="DataView"?h=new Uint8Array(l.buffer):c==="ArrayBuffer"&&(h=new Uint8Array(l)),i([c,[...h]],l)}const u=[],f=i([o,u],l);for(const h of l)u.push(a(h));return f}case Cn:{if(c)switch(c){case"BigInt":return i([c,l.toString()],l);case"Boolean":case"Number":case"String":return i([c,l.valueOf()],l)}if(n&&"toJSON"in l)return a(l.toJSON());const u=[],f=i([o,u],l);for(const h of ou(l))(e||!xn(tn(l[h])))&&u.push([a(h),a(l[h])]);return f}case gt:return i([o,l.toISOString()],l);case xt:{const{source:u,flags:f}=l;return i([o,{source:u,flags:f}],l)}case yt:{const u=[],f=i([o,u],l);for(const[h,p]of l)(e||!(xn(tn(h))||xn(tn(p))))&&u.push([a(h),a(p)]);return f}case bt:{const u=[],f=i([o,u],l);for(const h of l)(e||!xn(tn(h)))&&u.push(a(h));return f}}const{message:s}=l;return i([o,{name:c,message:s}],l)};return a},cr=(e,{json:n,lossy:t}={})=>{const r=[];return su(!(n||t),!!n,new Map,r)(e),r},En=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?ur(cr(e,n)):structuredClone(e):(e,n)=>ur(cr(e,n));function uu(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function cu(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function du(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||uu,r=e.options.footnoteBackLabel||cu,i=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",l=e.options.footnoteLabelProperties||{className:["sr-only"]},o=[];let c=-1;for(;++c<e.footnoteOrder.length;){const s=e.footnoteById.get(e.footnoteOrder[c]);if(!s)continue;const u=e.all(s),f=String(s.identifier).toUpperCase(),h=Ge(f.toLowerCase());let p=0;const x=[],y=e.footnoteCounts.get(f);for(;y!==void 0&&++p<=y;){x.length>0&&x.push({type:"text",value:" "});let T=typeof t=="string"?t:t(c,p);typeof T=="string"&&(T={type:"text",value:T}),x.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(c,p),className:["data-footnote-backref"]},children:Array.isArray(T)?T:[T]})}const _=u[u.length-1];if(_&&_.type==="element"&&_.tagName==="p"){const T=_.children[_.children.length-1];T&&T.type==="text"?T.value+=" ":_.children.push({type:"text",value:" "}),_.children.push(...x)}else u.push(...x);const w={type:"element",tagName:"li",properties:{id:n+"fn-"+h},children:e.wrap(u,!0)};e.patch(s,w),o.push(w)}if(o.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...En(l),id:"footnote-label"},children:[{type:"text",value:i}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(o,!0)},{type:"text",value:`
`}]}}const fi=(function(e){if(e==null)return mu;if(typeof e=="function")return zn(e);if(typeof e=="object")return Array.isArray(e)?fu(e):pu(e);if(typeof e=="string")return hu(e);throw new Error("Expected function, string, or object as test")});function fu(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=fi(e[t]);return zn(r);function r(...i){let a=-1;for(;++a<n.length;)if(n[a].apply(this,i))return!0;return!1}}function pu(e){const n=e;return zn(t);function t(r){const i=r;let a;for(a in e)if(i[a]!==n[a])return!1;return!0}}function hu(e){return zn(n);function n(t){return t&&t.type===e}}function zn(e){return n;function n(t,r,i){return!!(gu(t)&&e.call(this,t,typeof r=="number"?r:void 0,i||void 0))}}function mu(){return!0}function gu(e){return e!==null&&typeof e=="object"&&"type"in e}const pi=[],xu=!0,dr=!1,yu="skip";function bu(e,n,t,r){let i;typeof n=="function"&&typeof t!="function"?(r=t,t=n):i=n;const a=fi(i),l=r?-1:1;o(e,void 0,[])();function o(c,s,u){const f=c&&typeof c=="object"?c:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=pi,x,y,_;if((!n||a(c,s,u[u.length-1]||void 0))&&(p=wu(t(c,u)),p[0]===dr))return p;if("children"in c&&c.children){const w=c;if(w.children&&p[0]!==yu)for(y=(r?w.children.length:-1)+l,_=u.concat(w);y>-1&&y<w.children.length;){const T=w.children[y];if(x=o(T,y,_)(),x[0]===dr)return x;y=typeof x[1]=="number"?x[1]:y+l}}return p}}}function wu(e){return Array.isArray(e)?e:typeof e=="number"?[xu,e]:e==null?pi:[e]}function hi(e,n,t,r){let i,a,l;typeof n=="function"&&typeof t!="function"?(a=void 0,l=n,i=t):(a=n,l=t,i=r),bu(e,a,o,i);function o(c,s){const u=s[s.length-1],f=u?u.children.indexOf(c):void 0;return l(c,f,u)}}const et={}.hasOwnProperty,ku={};function vu(e,n){const t=n||ku,r=new Map,i=new Map,a=new Map,l={...iu,...t.handlers},o={all:s,applyData:_u,definitionById:r,footnoteById:i,footnoteCounts:a,footnoteOrder:[],handlers:l,one:c,options:t,patch:Su,wrap:Eu};return hi(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const f=u.type==="definition"?r:i,h=String(u.identifier).toUpperCase();f.has(h)||f.set(h,u)}}),o;function c(u,f){const h=u.type,p=o.handlers[h];if(et.call(o.handlers,h)&&p)return p(o,u,f);if(o.options.passThrough&&o.options.passThrough.includes(h)){if("children"in u){const{children:y,..._}=u,w=En(_);return w.children=o.all(u),w}return En(u)}return(o.options.unknownHandler||Cu)(o,u,f)}function s(u){const f=[];if("children"in u){const h=u.children;let p=-1;for(;++p<h.length;){const x=o.one(h[p],u);if(x){if(p&&h[p-1].type==="break"&&(!Array.isArray(x)&&x.type==="text"&&(x.value=fr(x.value)),!Array.isArray(x)&&x.type==="element")){const y=x.children[0];y&&y.type==="text"&&(y.value=fr(y.value))}Array.isArray(x)?f.push(...x):f.push(x)}}}return f}}function Su(e,n){e.position&&(n.position=al(e))}function _u(e,n){let t=n;if(e&&e.data){const r=e.data.hName,i=e.data.hChildren,a=e.data.hProperties;if(typeof r=="string")if(t.type==="element")t.tagName=r;else{const l="children"in t?t.children:[t];t={type:"element",tagName:r,properties:{},children:l}}t.type==="element"&&a&&Object.assign(t.properties,En(a)),"children"in t&&t.children&&i!==null&&i!==void 0&&(t.children=i)}return t}function Cu(e,n){const t=n.data||{},r="value"in n&&!(et.call(t,"hProperties")||et.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,r),e.applyData(n,r)}function Eu(e,n){const t=[];let r=-1;for(n&&t.push({type:"text",value:`
`});++r<e.length;)r&&t.push({type:"text",value:`
`}),t.push(e[r]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function fr(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function pr(e,n){const t=vu(e,n),r=t.one(e,void 0),i=du(t),a=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return i&&a.children.push({type:"text",value:`
`},i),a}function ju(e,n){return e&&"run"in e?async function(t,r){const i=pr(t,{file:r,...n});await e.run(i,r)}:function(t,r){return pr(t,{file:r,...e||n})}}function hr(e){if(e)throw e}var Mn,mr;function Iu(){if(mr)return Mn;mr=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,r=Object.getOwnPropertyDescriptor,i=function(s){return typeof Array.isArray=="function"?Array.isArray(s):n.call(s)==="[object Array]"},a=function(s){if(!s||n.call(s)!=="[object Object]")return!1;var u=e.call(s,"constructor"),f=s.constructor&&s.constructor.prototype&&e.call(s.constructor.prototype,"isPrototypeOf");if(s.constructor&&!u&&!f)return!1;var h;for(h in s);return typeof h>"u"||e.call(s,h)},l=function(s,u){t&&u.name==="__proto__"?t(s,u.name,{enumerable:!0,configurable:!0,value:u.newValue,writable:!0}):s[u.name]=u.newValue},o=function(s,u){if(u==="__proto__")if(e.call(s,u)){if(r)return r(s,u).value}else return;return s[u]};return Mn=function c(){var s,u,f,h,p,x,y=arguments[0],_=1,w=arguments.length,T=!1;for(typeof y=="boolean"&&(T=y,y=arguments[1]||{},_=2),(y==null||typeof y!="object"&&typeof y!="function")&&(y={});_<w;++_)if(s=arguments[_],s!=null)for(u in s)f=o(y,u),h=o(s,u),y!==h&&(T&&h&&(a(h)||(p=i(h)))?(p?(p=!1,x=f&&i(f)?f:[]):x=f&&a(f)?f:{},l(y,{name:u,newValue:c(T,x,h)})):typeof h<"u"&&l(y,{name:u,newValue:h}));return y},Mn}var zu=Iu();const Fn=_r(zu);function nt(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Nu(){const e=[],n={run:t,use:r};return n;function t(...i){let a=-1;const l=i.pop();if(typeof l!="function")throw new TypeError("Expected function as last argument, not "+l);o(null,...i);function o(c,...s){const u=e[++a];let f=-1;if(c){l(c);return}for(;++f<i.length;)(s[f]===null||s[f]===void 0)&&(s[f]=i[f]);i=s,u?Pu(u,o)(...s):l(null,...s)}}function r(i){if(typeof i!="function")throw new TypeError("Expected `middelware` to be a function, not "+i);return e.push(i),n}}function Pu(e,n){let t;return r;function r(...l){const o=e.length>l.length;let c;o&&l.push(i);try{c=e.apply(this,l)}catch(s){const u=s;if(o&&t)throw u;return i(u)}o||(c&&c.then&&typeof c.then=="function"?c.then(a,i):c instanceof Error?i(c):a(c))}function i(l,...o){t||(t=!0,n(l,...o))}function a(l){i(null,l)}}const _e={basename:Tu,dirname:Au,extname:Ru,join:Du,sep:"/"};function Tu(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');fn(e);let t=0,r=-1,i=e.length,a;if(n===void 0||n.length===0||n.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?"":e.slice(t,r)}if(n===e)return"";let l=-1,o=n.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){t=i+1;break}}else l<0&&(a=!0,l=i+1),o>-1&&(e.codePointAt(i)===n.codePointAt(o--)?o<0&&(r=i):(o=-1,r=l));return t===r?r=l:r<0&&(r=e.length),e.slice(t,r)}function Au(e){if(fn(e),e.length===0)return".";let n=-1,t=e.length,r;for(;--t;)if(e.codePointAt(t)===47){if(r){n=t;break}}else r||(r=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function Ru(e){fn(e);let n=e.length,t=-1,r=0,i=-1,a=0,l;for(;n--;){const o=e.codePointAt(n);if(o===47){if(l){r=n+1;break}continue}t<0&&(l=!0,t=n+1),o===46?i<0?i=n:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||t<0||a===0||a===1&&i===t-1&&i===r+1?"":e.slice(i,t)}function Du(...e){let n=-1,t;for(;++n<e.length;)fn(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":Lu(t)}function Lu(e){fn(e);const n=e.codePointAt(0)===47;let t=Ou(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function Ou(e,n){let t="",r=0,i=-1,a=0,l=-1,o,c;for(;++l<=e.length;){if(l<e.length)o=e.codePointAt(l);else{if(o===47)break;o=47}if(o===47){if(!(i===l-1||a===1))if(i!==l-1&&a===2){if(t.length<2||r!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(c=t.lastIndexOf("/"),c!==t.length-1){c<0?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),i=l,a=0;continue}}else if(t.length>0){t="",r=0,i=l,a=0;continue}}n&&(t=t.length>0?t+"/..":"..",r=2)}else t.length>0?t+="/"+e.slice(i+1,l):t=e.slice(i+1,l),r=l-i-1;i=l,a=0}else o===46&&a>-1?a++:a=-1}return t}function fn(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const Mu={cwd:Fu};function Fu(){return"/"}function tt(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Uu(e){if(typeof e=="string")e=new URL(e);else if(!tt(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return $u(e)}function $u(e){if(e.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const r=n.codePointAt(t+2);if(r===70||r===102){const i=new TypeError("File URL path must not include encoded / characters");throw i.code="ERR_INVALID_FILE_URL_PATH",i}}return decodeURIComponent(n)}const Un=["history","path","basename","stem","extname","dirname"];class mi{constructor(n){let t;n?tt(n)?t={path:n}:typeof n=="string"||qu(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":Mu.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<Un.length;){const a=Un[r];a in t&&t[a]!==void 0&&t[a]!==null&&(this[a]=a==="history"?[...t[a]]:t[a])}let i;for(i in t)Un.includes(i)||(this[i]=t[i])}get basename(){return typeof this.path=="string"?_e.basename(this.path):void 0}set basename(n){qn(n,"basename"),$n(n,"basename"),this.path=_e.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?_e.dirname(this.path):void 0}set dirname(n){gr(this.basename,"dirname"),this.path=_e.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?_e.extname(this.path):void 0}set extname(n){if($n(n,"extname"),gr(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=_e.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){tt(n)&&(n=Uu(n)),qn(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?_e.basename(this.path,this.extname):void 0}set stem(n){qn(n,"stem"),$n(n,"stem"),this.path=_e.join(this.dirname||"",n+(this.extname||""))}fail(n,t,r){const i=this.message(n,t,r);throw i.fatal=!0,i}info(n,t,r){const i=this.message(n,t,r);return i.fatal=void 0,i}message(n,t,r){const i=new ie(n,t,r);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function $n(e,n){if(e&&e.includes(_e.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+_e.sep+"`")}function qn(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function gr(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function qu(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Bu=(function(e){const r=this.constructor.prototype,i=r[e],a=function(){return i.apply(a,arguments)};return Object.setPrototypeOf(a,r),a}),Vu={}.hasOwnProperty;class wt extends Bu{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Nu()}copy(){const n=new wt;let t=-1;for(;++t<this.attachers.length;){const r=this.attachers[t];n.use(...r)}return n.data(Fn(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Hn("data",this.frozen),this.namespace[n]=t,this):Vu.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Hn("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const i=t.call(n,...r);typeof i=="function"&&this.transformers.use(i)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=yn(n),r=this.parser||this.Parser;return Bn("parse",r),r(String(t),t)}process(n,t){const r=this;return this.freeze(),Bn("process",this.parser||this.Parser),Vn("process",this.compiler||this.Compiler),t?i(void 0,t):new Promise(i);function i(a,l){const o=yn(n),c=r.parse(o);r.run(c,o,function(u,f,h){if(u||!f||!h)return s(u);const p=f,x=r.stringify(p,h);Xu(x)?h.value=x:h.result=x,s(u,h)});function s(u,f){u||!f?l(u):a?a(f):t(void 0,f)}}}processSync(n){let t=!1,r;return this.freeze(),Bn("processSync",this.parser||this.Parser),Vn("processSync",this.compiler||this.Compiler),this.process(n,i),yr("processSync","process",t),r;function i(a,l){t=!0,hr(a),r=l}}run(n,t,r){xr(n),this.freeze();const i=this.transformers;return!r&&typeof t=="function"&&(r=t,t=void 0),r?a(void 0,r):new Promise(a);function a(l,o){const c=yn(t);i.run(n,c,s);function s(u,f,h){const p=f||n;u?o(u):l?l(p):r(void 0,p,h)}}}runSync(n,t){let r=!1,i;return this.run(n,t,a),yr("runSync","run",r),i;function a(l,o){hr(l),i=o,r=!0}}stringify(n,t){this.freeze();const r=yn(t),i=this.compiler||this.Compiler;return Vn("stringify",i),xr(n),i(n,r)}use(n,...t){const r=this.attachers,i=this.namespace;if(Hn("use",this.frozen),n!=null)if(typeof n=="function")c(n,t);else if(typeof n=="object")Array.isArray(n)?o(n):l(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function a(s){if(typeof s=="function")c(s,[]);else if(typeof s=="object")if(Array.isArray(s)){const[u,...f]=s;c(u,f)}else l(s);else throw new TypeError("Expected usable value, not `"+s+"`")}function l(s){if(!("plugins"in s)&&!("settings"in s))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(s.plugins),s.settings&&(i.settings=Fn(!0,i.settings,s.settings))}function o(s){let u=-1;if(s!=null)if(Array.isArray(s))for(;++u<s.length;){const f=s[u];a(f)}else throw new TypeError("Expected a list of plugins, not `"+s+"`")}function c(s,u){let f=-1,h=-1;for(;++f<r.length;)if(r[f][0]===s){h=f;break}if(h===-1)r.push([s,...u]);else if(u.length>0){let[p,...x]=u;const y=r[h][1];nt(y)&&nt(p)&&(p=Fn(!0,y,p)),r[h]=[s,p,...x]}}}}const Hu=new wt().freeze();function Bn(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Vn(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Hn(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function xr(e){if(!nt(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function yr(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function yn(e){return Wu(e)?e:new mi(e)}function Wu(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function Xu(e){return typeof e=="string"||Ku(e)}function Ku(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Gu="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",br=[],wr={allowDangerousHtml:!0},Yu=/^(https?|ircs?|mailto|xmpp)$/i,Qu=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Ju(e){const n=Zu(e),t=ec(e);return nc(n.runSync(n.parse(t),t),e)}function Zu(e){const n=e.rehypePlugins||br,t=e.remarkPlugins||br,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...wr}:wr;return Hu().use(Ts).use(t).use(ju,r).use(n)}function ec(e){const n=e.children||"",t=new mi;return typeof n=="string"&&(t.value=n),t}function nc(e,n){const t=n.allowedElements,r=n.allowElement,i=n.components,a=n.disallowedElements,l=n.skipHtml,o=n.unwrapDisallowed,c=n.urlTransform||tc;for(const u of Qu)Object.hasOwn(n,u.from)&&(""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+Gu+u.id,void 0);return hi(e,s),cl(e,{Fragment:d.Fragment,components:i,ignoreInvalidStyle:!0,jsx:d.jsx,jsxs:d.jsxs,passKeys:!0,passNode:!0});function s(u,f,h){if(u.type==="raw"&&h&&typeof f=="number")return l?h.children.splice(f,1):h.children[f]={type:"text",value:u.value},f;if(u.type==="element"){let p;for(p in Dn)if(Object.hasOwn(Dn,p)&&Object.hasOwn(u.properties,p)){const x=u.properties[p],y=Dn[p];(y===null||y.includes(u.tagName))&&(u.properties[p]=c(String(x||""),p,u))}}if(u.type==="element"){let p=t?!t.includes(u.tagName):a?a.includes(u.tagName):!1;if(!p&&r&&typeof f=="number"&&(p=!r(u,f,h)),p&&h&&typeof f=="number")return o&&u.children?h.children.splice(f,1,...u.children):h.children.splice(f,1),f}}}function tc(e){const n=e.indexOf(":"),t=e.indexOf("?"),r=e.indexOf("#"),i=e.indexOf("/");return n===-1||i!==-1&&n>i||t!==-1&&n>t||r!==-1&&n>r||Yu.test(e.slice(0,n))?e:""}const rc=`## v0.44.5 (2026-09-02)

## 러닝 인증 사진 업로드 안정성 개선

- **갤러리 사진 인증 첫 시도 실패 문제 수정**: 안드로이드 기기(특히 구글 포토 등 클라우드 백업 연동 환경)에서 갤러리로 사진을 선택해 러닝 인증을 시도할 때, 앱 실행 후 첫 시도에서만 "사진 업로드 실패" 또는 "이미지를 불러올 수 없습니다" 오류가 뜨고 재시도하면 성공하던 문제를 해결했습니다. 이제 선택한 사진을 처음 한 번만 안전하게 불러온 뒤 그대로 사용해, 첫 시도부터 안정적으로 인증됩니다.
- **사진 압축 실패 시 원본이 그대로 업로드되는 문제 방지**: 사진 압축 과정에 문제가 생겼을 때 용량이 크거나 손상된 원본 사진이 조용히 업로드되어 실패로 이어지던 상황을 막고, 문제 발생 시 명확하게 오류를 알리도록 개선했습니다.

## v0.44.4 (2026-09-02)

### 개선 사항

- **러닝 인증 사진 업로드 안정성 강화**: 네트워크가 불안정한 환경에서 사진 업로드가 실패할 경우, 원인을 더 정확하게 안내하고 재시도 로직을 개선하여 업로드 성공률을 높였습니다.
- **오늘 기록이 있을 때 배너 오표시 수정**: 이미 오늘의 러닝 기록을 인증했는데도 "계속 달리는 중" 배너가 남아있던 문제를 수정했습니다.
- **크루 그룹 화면 정리**: 팀 거리 라벨을 제거하여 화면을 더 깔끔하게 정리했습니다.

### 버그 수정

- **멤버 그룹 해제 불가 문제 해결**: 관리자가 멤버의 그룹 지정을 해제할 수 없어 그룹 설정 자체를 끌 수 없었던 문제를 수정했습니다. 이제 멤버 그룹을 자유롭게 해제/변경할 수 있습니다.

## v0.44.3 (2026-09-01)

## 러닝 인증 및 기록 정확도 개선

- **중복 인증 방지 강화**: 더블탭이나 여러 기기에서 거의 동시에 인증을 시도해도 같은 날 유효 기록이 두 번 집계되지 않도록 서버 단에서 한 번 더 검증하도록 개선했습니다. 동시에 제출된 인증은 자동으로 "추가 기록"으로 저장되어 주간 횟수에 중복 반영되지 않습니다.
- **AI 분석 실패 시 처리 개선**: AI 분석이 정상적으로 완료되지 않았을 때 빈 결과가 그대로 저장되던 문제를 수정하여, 인증 실패를 더 정확하게 감지하도록 했습니다.
- **자동 입력 후 수동 수정 시 페이스 재계산**: AI가 자동으로 채운 거리·시간을 사용자가 직접 수정했을 때, 이전 AI 분석값이 아닌 수정된 값 기준으로 페이스가 정확히 다시 계산되도록 수정했습니다.
- **활동 기간 외 사진 인증 방어 강화**: 카카오톡 파일명으로 활동 기간 외 사진임을 감지한 뒤에도, AI 분석 결과에 의해 해당 경고가 잘못 해제되어 인증이 통과되던 문제를 수정했습니다.
- **인증 기준 검증 누락 수정**: 러닝 시간이 비어있는 등 일부 케이스에서 크루의 최대 시간/페이스 기준 검증을 건너뛰던 문제를 수정하여, 기준 미달 기록이 유효 기록으로 잘못 인정되지 않도록 했습니다.

## 대시보드

- **기록 삭제 시 잘못된 기록이 표시되던 문제 수정**: 기록을 삭제한 뒤 화면에 반영되는 삭제 대상이 실제로 삭제한 기록과 다르게 표시되던 문제를 수정했습니다.

## 관리자 화면

- **멤버 삭제 실패 시 오류 안내 개선**: 멤버 삭제가 실제로는 실패했는데도 성공 메시지가 표시되던 문제를 수정하여, 실패 시 정확히 안내되도록 했습니다.

## v0.44.2 (2026-09-01)

## 이번 업데이트 내용

**벌금·랭킹 정확도 개선**
- 크루 보드의 전체 기간 벌금 랭킹 계산이 정확해지도록 수정했습니다.
- 벌금 금액을 수동으로 수정하면 랭킹에 즉시 반영되도록 개선했습니다.
- 벌금 단가를 변경해도 이전 주의 벌금에는 소급 적용되지 않도록 수정했습니다.

**크루 가입 보안 강화**
- 비공개 크루는 초대 코드가 있어야만 가입할 수 있도록 보완했습니다.
- 크루 가입 요청 승인 처리의 안정성과 보안을 강화했습니다.

**기타 개선**
- 벌금 영수증 표의 항목명을 "부과내역"으로 정리했습니다.

## v0.44.1 (2026-08-31)

## 개선사항

- **크루 벌금 계산 정확도 개선**: 크루에 가입하기 전 주(週)는 벌금 계산에서 제외되도록 수정했습니다. 이제 가입 이전 기간이 벌금 대상에 잘못 포함되는 문제가 해결됩니다.
- **벌금 독촉 메시지 문구 다듬음**: 독촉 메시지의 표현을 좀 더 자연스럽게 개선했습니다.

## v0.44.0 (2026-08-31)

## 새로운 소식 🎉

**신규 기능**
- **정산소 벌금 독촉하기**: 크루 방장/관리자가 미납 크루원에게 벌금·회비 납부를 독촉할 수 있어요. 마지막으로 독촉한 시간이 버튼에 함께 표시되고, 독촉 이력도 확인할 수 있어요.
- **정산 완료 후 감사 공유**: 정산을 마치면 고마운 마음을 담아 공유할 수 있는 감사 인사 카드가 추가됐어요.
- **주간 클리어 연속 기록 뱃지**: 프로필에서 몇 주 연속으로 미션을 클리어했는지 뱃지로 바로 확인할 수 있어요.
- **주간 포스터 문구 랜덤화**: 매주 생성되는 포스터의 헤드라인 문구와 배경 템플릿이 랜덤으로 바뀌어 더 다양한 느낌을 줍니다.

**개선 및 수정**
- 클리어한 주에도 페이스 페널티로 부과된 벌금이 벌금함 상세 화면에 정확히 표시되도록 수정했어요.
- 기록 화면(RecordPage)에서 발생하던 반복 렌더링 문제를 해결해 더 안정적으로 동작해요.

## v0.43.0 (2026-08-29)

## ✨ 새 기능

- **정산소에 기부금 장부 추가**: 크루원 여부와 무관하게 이벤트·외부 기부금 내역을 기록할 수 있는 탭이 정산소에 새로 생겼습니다. 모든 멤버는 누적 기부금 총액과 상세 내역(기부자/출처, 금액, 메모)을 확인할 수 있고, 관리자는 내역을 추가·삭제할 수 있습니다.

## 🛠 개선 및 수정

- **인스타 스토리 공유 이미지에 러닝 기록 상세 추가**: 주간 미션 완료 스토리 이미지 하단에 이번 주 달린 날짜·요일, 거리, 시간, 페이스를 한눈에 볼 수 있는 기록 리스트 카드가 추가되었습니다.
- **누적 벌금 순위의 동점 처리 개선**: 전체 기간 기준으로 벌금 총액을 정렬할 때, 금액이 같은 멤버들이 같은 순위로 표시되도록 수정했습니다.
- **랭킹 보드에서 유예 멤버 표시 명확화**: 벌금이 유예된 멤버는 랭킹 목록에서 흐리게 표시되고 상위 3위 강조에서도 제외되어, 유예 상태를 더 쉽게 구분할 수 있습니다.

## v0.42.0 (2026-08-28)

## ✨ 새로운 기능
- 주간 목표 달성 시 공유용 스토리 이미지가 완주 포스터 스타일로 새롭게 생성됩니다.

## 🛠 개선 사항
- 벌금과 회비 정산 화면이 하나로 통합되어 총액을 한눈에 확인할 수 있고, 중복 표시되던 UI가 정리되었습니다.
- 벌금 금액을 직접 수정할 수 있게 되었습니다.
- 카카오톡 공유 시 이미지가 미리 준비되기 전까지 공유 버튼이 비활성화되어, 불완전한 이미지가 공유되는 문제를 방지합니다.
- 모바일 크루 초대 이미지 공유 시 초대 링크가 함께 포함됩니다.

## 🐛 버그 수정
- 청구서(인보이스) 총액과 미납 목록에 회비가 누락되던 문제를 수정했습니다.
- 회비만 미납된 경우에도 미납 안내 배너가 정상적으로 표시되도록 수정했습니다.

## v0.41.0 (2026-08-28)

## RUNC 업데이트 소식

**주간 목표 달성 공유 기능이 더 풍성해졌어요! 🎉**

- 카카오톡으로 러닝 사진을 공유할 때, 주간 목표를 달성한 경우 **"미션 완료" 캡션이 사진에 함께 새겨집니다.**
- 사진 하단에 캡션 바가 추가되어, RUNC 아이콘과 함께 크루 정보·주간 진행 상황이 더 깔끔하게 표시됩니다.
- 캡션 내 텍스트 크기를 통일해 가독성을 개선했습니다.

앞으로도 나만의 러닝 기록을 더 멋지게 자랑해보세요!

## v0.40.0 (2026-08-28)

## 릴리즈 노트

### ✨ 새로운 기능
- 러닝 기록을 공유할 때 사진에 크루 이름과 주차 정보가 워터마크로 새겨져, 어떤 크루의 몇 주차 기록인지 한눈에 알아볼 수 있습니다.

### 🛠 개선 사항
- 모바일에서 크루 초대 및 주간 목표 공유 시, 기본 공유(Web Share) 방식이 우선 적용되어 더 매끄럽게 공유할 수 있습니다.
- 러닝 기록 공유 시 텍스트에 제목이 중복으로 표시되던 문제를 수정했습니다.

## v0.39.1 (2026-08-27)

## 개선 사항

- 📸 **사진 공유 기능 개선**: 러닝 인증 사진을 공유할 때 실제 인증샷이 아닌 다른 이미지가 공유되던 문제를 수정했습니다. 이제 모바일에서 공유하기를 누르면 정확한 러닝 사진이 전달됩니다.
- 📶 **업로드 안정성 강화**: 모바일에서 네트워크가 불안정하거나 순간적으로 끊기는 상황에서도 러닝 인증 사진 업로드가 더 안정적으로 완료되도록 개선했습니다.
- 👑 **크루 선택 화면 표시 개선**: 크루 선택 화면에서 각 크루의 방장 닉네임이 해당 크루 기준으로 정확하게 표시되도록 수정했습니다.

## v0.39.0 (2026-08-27)

## 업데이트 소식

### 새로운 기능
- **스쿼드 페이지 강화**: 주간 활동 현황, 멤버 명단, 게시글 고정 기능이 추가되고 화면이 더 넓게 확장되었습니다.
- **스쿼드 멤버 현황 구분**: 멤버 목록이 완료/미완료 그룹으로 나뉘어 한눈에 진행 상황을 파악할 수 있습니다.

### 개선 및 수정
- 크루 그룹 기능이 꺼져 있을 때 대시보드와 관리자 멤버 목록에 "자유모드"로 올바르게 표시됩니다.
- 스쿼드 게시글 작성자의 닉네임이 해당 크루 전용 닉네임으로 정확히 표시됩니다.
- 크루 검색 버튼에 스크린 리더용 이름을 추가해 접근성을 개선했습니다.
- 주간 목표(횟수·거리)를 달성했더라도 페이스 기준에 미달하면 패널티가 정상적으로 적용되도록 수정했습니다.
- 관리자 그룹 선택 시 비활성화된 그룹은 목록에서 제외되며, 더 이상 존재하지 않는 그룹 배지가 남아있던 문제를 해결했습니다.

## v0.38.0 (2026-08-27)

## ✨ 새로운 기능

- **정산 진입 경로 세분화**: 대시보드, 스쿼드, 프로필 등 각 화면에서 정산 화면으로 진입할 때 상황에 맞는 방식으로 연결되도록 개선했습니다.

## 🛠 개선 사항

- **대시보드 미납 안내 배너 강화**: 정산할 미납 금액이 있을 때만 배너가 표시되며, 놓치지 않도록 시각적으로 더 눈에 띄게 디자인을 개선했습니다.
- **크루 설정 정합성 개선**: 크루 설정값을 불러오는 로직을 일원화하여 화면마다 다르게 보이던 문제를 방지했습니다.
- **크루 삭제 안전장치 추가**: 크루 삭제 시 예기치 않은 데이터 손실을 막기 위한 보호 로직을 추가했습니다.
- **설정 변경 시점 명확화**: 크루 설정을 변경해도 이미 지난 기록에는 소급 적용되지 않도록 하여, 과거 기록이 의도치 않게 바뀌는 문제를 방지했습니다.

## v0.37.0 (2026-08-27)

### ✨ 새로운 기능

* **러닝 인증 · 주간 목표 공유 미리보기 추가**
  * 카카오톡으로 공유한 러닝 인증이나 주간 목표 달성 카드를 눌렀을 때, 로그인 여부와 상관없이 바로 확인할 수 있는 미리보기 화면이 추가되었습니다.
  * 미리보기 화면에서 바로 해당 크루에 참여할 수 있는 버튼도 함께 제공됩니다.

### 🐛 버그 수정

* **카카오톡 공유 오류 수정**
  * 카카오톡이 정상적으로 설치되어 있어도 "설치가 필요합니다" 안내가 잘못 표시되던 문제를 해결했습니다.
* **주간 기록 조회 실패 안내 추가**
  * 일시적인 오류로 이번 주 기록을 불러오지 못했을 때 "0km"로 잘못 표시되던 문제를 고치고, 오류 안내와 다시 시도 버튼을 추가했습니다.
* **멤버 목록 빈 화면 개선**
  * 크루에 멤버가 없을 때 빈 화면 대신 안내 문구가 표시됩니다.

### 🔒 보안 및 시스템 안정성

* **크루 관리자 권한 보안 취약점 조치**
  * 정상적인 초대 절차 없이 임의의 크루 관리자 권한을 얻을 수 있었던 취약점을 발견하여 즉시 조치했습니다.
* **오류 발생 시 영향 범위 최소화**
  * 일부 데이터 표시 오류가 앱 전체에 영향을 주지 않도록 안전장치를 추가했습니다.
* **벌금 계산 로직 검증 강화**
  * 벌금 및 주간 목표 달성 판정 로직의 정확성을 별도로 검증하여 신뢰도를 높였습니다.

## v0.36.0 (2026-08-26)

### ✨ 기능 개선 및 버그 수정

* **주간 통계 데이터 정확도 개선**
  * 기록을 삭제했을 때 주간 통계가 즉시 다시 계산되도록 수정하여, 항상 최신의 정확한 통계 정보를 확인하실 수 있습니다.
* **카카오톡 공유 기능 표준화**
  * 카카오톡 피드 공유 형식을 표준화하여 보다 깔끔하고 일관된 형태로 소식을 공유할 수 있도록 개선했습니다.

### 🔒 보안 및 시스템 안정성

* **데이터 및 파일 보안 강화**
  * 데이터베이스 및 저장소의 보안 접근 제어를 강화하여 사용자의 소중한 데이터와 파일을 더욱 안전하게 보호하도록 조치했습니다.

## v0.35.0 (2026-08-26)

### ✨ 새로운 기능

* **주간 목표 공유 포스터 배경 템플릿 추가**
  * 주간 목표를 공유할 때 내 취향에 맞는 다양한 포스터 배경 템플릿을 선택하고 꾸밀 수 있습니다.
  * 나만의 스타일로 완성된 목표 포스터를 만들어 친구나 팀원들에게 공유해 보세요!

## v0.34.0 (2026-08-26)

### ✨ 새로워진 점

- **주간 목표 달성 공유 화면 개선**
  - 주간 목표를 달성했을 때 공유되는 메시지가 한층 더 깔끔해졌습니다.
  - 복잡한 내용을 덜어내고, 축하 문구와 핵심 이미지를 중심으로 보기 쉽게 정돈되어 달성의 기쁨을 더 직관적으로 공유할 수 있습니다.

## v0.33.0 (2026-08-26)

### ✨ 신규 기능 및 개선 사항

- **주간 보드에서 오늘 러닝 확인**
  - 주간 보드 화면에서 오늘 달린 러닝 기록을 바로 확인할 수 있도록 개선되었습니다.
- **벌금/정산 장부 목록 개선**
  - 장부 내역을 더욱 한눈에 파악하기 쉽고 깔끔하게 정리하여 사용 편의성을 높였습니다.

---

### 🛠️ 버그 수정 및 안정성 향상

- **기록 일자 표시 오류 수정**
  - 접속 환경(타임존)에 따라 러닝 기록의 날짜가 다르게 표시되던 문제를 수정했습니다.
- **모바일 사진 업로드 안정성 강화**
  - 모바일 환경에서 러닝 인증 사진을 업로드할 때 발생하던 오류를 개선하여 더욱 안정적으로 업로드할 수 있습니다.
- **모바일 공유 기능 개선**
  - 모바일 기기에서 카카오톡 등 외부 앱으로 러닝 기록을 공유할 때 팝업 및 연동이 더 매끄럽게 동작하도록 개선했습니다.

## v0.32.0 (2026-08-25)

### 🚀 새로운 기능

- **대표 러닝 지정 기능 추가**
  - 하루에 여러 번 달렸을 때, 원하는 기록을 당일의 **대표 유효 러닝**으로 직접 선택하고 변경할 수 있습니다.
- **정산소 및 회비 관리 시스템 도입**
  - 크루 벌금 현황을 한눈에 보고 정산할 수 있는 **정산소(1~3단계 페널티 장부 및 크루 팟)**가 추가되었습니다.
  - **회비 장부** 탭이 신설되어 개인 영수증에서 벌금과 회비 내역을 함께 확인할 수 있습니다.
- **개별 러닝 기준 페이스 벌금 누적 산정**
  - 유효 러닝마다 개별 페이스를 평가하여 기준 미달 시 페널티 벌금이 정확하게 누적 계산되도록 개선되었습니다.

---

### 🎨 UI / UX 개선

- **직관적인 메뉴 명칭 변경 ('정산소')**
  - 기존 '스쿼드 벌금 장부', '벌금 팟' 등으로 나뉘어 있던 명칭을 **'정산소'**로 통일하여 접근성을 높였습니다.
- **영수증 및 정산 화면 가독성 향상**
  - 영수증 헤더를 깔끔하게 정돈하고, 상태 표시를 **'완납'**으로 통일했습니다.
  - 정산소 모달에서 멤버별 벌금 상세 내역을 기본 접힘 상태로 제공하여 필요할 때 클릭해서 펼쳐볼 수 있습니다.
  - 작은 화면에서도 벌금 금액과 납부 상태 배지가 줄바꿈되거나 잘리지 않도록 레이아웃을 개선했습니다.
- **그룹 정책 설정 UI 개선**
  - 페이스 벌금 설정 시 모호했던 \`~ 0:00\` 표기 대신 **'~ 이상'** 배지로 명확하게 표시되도록 변경했습니다.

---

### 🛠️ 주요 오류 수정 및 성능 개선

- **AI 기록 이미지 분석(OCR) 멈춤 현상 해결**
  - 러닝 인증 사진 업로드 시 AI 분석이 지연되거나 멈추던 문제를 해결하고 분석 안정성을 높였습니다.
- **주간 목표 미달 페널티 정상화**
  - 주간 목표 거리를 채우지 못했을 때 부족한 거리 상세 정보가 명확히 표시되고 정상적으로 벌금이 부과되도록 수정했습니다.
- **랭킹 및 페널티 데이터 정합성 개선**
  - 멤버 조회 오류를 해결하고, 랭킹 페이지와 페널티 계산 로직 간의 데이터 불일치 문제를 수정했습니다.

## v0.31.0 (2026-08-25)

### 🌟 주간 목표 공유 & 포스터 기능 업그레이드

- **인스타그램 스토리(9:16) 포스터 지원**: 인스타그램 스토리에 딱 맞는 9:16 비율의 공유 이미지를 저장하고 복사할 수 있습니다. (카카오톡 공유는 기존 1:1 최적화 유지)
- **포스터 디자인 및 정보 가독성 개선**:
  - 러너 아바타, 닉네임, 크루명을 더 크고 돋보이게 배치했습니다.
  - 러닝 횟수 대신 **총 달린 시간(소요 시간)**이 표시되며, 날짜·요일·거리별 세부 기록을 깔끔하게 한눈에 확인할 수 있습니다.
  - 2회부터 최대 10회까지의 러닝 기록을 유연하게 담을 수 있도록 포스터 레이아웃을 최적화했습니다.
- **카카오톡 공유 카드 간소화**: 복잡한 텍스트 대신 시각적인 포스터 카드와 핵심 스코어 중심으로 간결하게 공유되도록 개선했습니다.

---

### 📊 대시보드 및 미션 화면 개선

- **슈퍼 골(Super Goal) 달성 연출 추가**: 미션 달성 시 더욱 특별한 성취감을 느낄 수 있도록 화려한 스타일과 축하 애니메이션을 적용했습니다.
- **유효 러닝 기준 안내 강화**:
  - 1일 1회 인정 기준 및 누적 거리 등 '유효 러닝' 인정 조건을 대시보드 카드 아래에서 바로 확인할 수 있습니다.
  - 전체 러닝 횟수와 유효 러닝 횟수를 명확하게 구분하여 표시합니다.
- **대시보드 액션 바 복원 및 버튼 정리**:
  - 화면 어디서든 빠르게 기록을 시작할 수 있는 **'새 기록 시작' 액션 바**를 다시 제공합니다.
  - 중복 노출되던 공유 버튼을 하나로 통합해 화면을 깔끔하게 정리했습니다.

---

### 🏃 러닝 기록 및 통계 뷰 정돈

- **깔끔해진 러닝 로그**: 날짜와 거리, 유효성 상태 태그를 보기 쉽게 정돈하여 러닝 히스토리를 직관적으로 파악할 수 있습니다.
- **시각 지표 최적화**: 텍스트 간격, 폰트 크기, 지표 배치를 전반적으로 다듬어 중요한 기록 정보를 더 시원하고 또렷하게 볼 수 있습니다.

## v0.30.0 (2026-08-25)

### 🚀 신규 기능

- **주간 목표 달성 '자랑하기' 포스터 & 공유 기능 추가**
  - 주간 미션(거리 + 횟수)을 100% 완수한 러너를 위한 전용 축하 배너 및 '자랑하기' 기능이 추가되었습니다.
  - **📸 인스타 스토리 / 고해상도 이미지 저장**: RUNC 네온 테마의 주간 완주 포스터(1080x1350)를 생성하여 인스타그램 스토리나 피드에 바로 공유하거나 갤러리에 저장할 수 있습니다.
  - **💬 카카오톡 자랑하기**: 크루 단톡방에 주간 달성 성과와 벌금 방어 인증 카드를 원클릭으로 공유할 수 있습니다.
- **크루보드 ALL-TIME '벌금순' 랭킹 정렬 추가**
  - 크루 활동 기간 동안 누적된 벌금순으로 순위를 확인할 수 있는 탭이 추가되었습니다. (동률 시 누적 거리순)

### 🛠 벌금 산정 로직 개선 및 공정성 강화

- **완료된 주차 기준 벌금 확정**: 진행 중인 이번 주는 제외하고, 일요일이 지난 완료 주차만 누적 벌금에 포함되도록 개선되었습니다.
- **회당 비례 부과 방식 적용**: 횟수/거리 미달을 러닝 회차별로 공정하게 판정하여 계산합니다.
- **미달 런 페이스 중복 면제**: 거리 미달로 이미 벌금이 부과된 기록에 대해 페이스 벌금이 중복 부과되어 비참여자가 유리해지던 역인센티브 문제를 해결했습니다.

## v0.29.0 (2026-08-24)

### 🚀 신규 기능 및 개선 사항

- **러닝 앱 인증 이미지 인식(OCR) 성능 개선**
  - Garmin, Nike Run Club(NRC), Strava 등 주요 러닝 앱의 스크린샷 이미지 인식 정확도와 해상도 처리가 크게 향상되었습니다. 러닝 기록 이미지를 더욱 빠르고 정확하게 자동 인식합니다.

### 🛠 오류 수정 및 안정성 개선

- **크루 랭킹 및 러닝 횟수 집계 오류 수정**
  - 특정 러닝 기록 집계 시 카운트가 누락되거나 오작동하던 현상을 해결했습니다.
  - 크루 프로필 내 랭킹(순위) 정보가 정상적으로 표시되도록 수정되었습니다.

## v0.28.0 (2026-08-24)

### ✨ 신규 기능

- **크루원 패널티 유예 및 그룹 관리 기능 추가 (관리자)**
  - 관리자 페이지에서 크루원의 패널티 유예 설정 및 그룹을 보다 간편하게 관리할 수 있는 기능이 추가되었습니다.

---

### 🎨 UI/UX 개선

- **패널티 유예 주차 정렬 및 자동 스크롤 적용**
  - 패널티 유예 주차 목록이 시간 순서(오름차순)대로 정렬되어 주차별 내역을 직관적으로 확인할 수 있습니다.
  - 페이지 진입 시 **현재 주차 위치로 화면이 자동 스크롤**되어, 매번 스크롤할 필요 없이 현재 주차 정보를 즉시 확인할 수 있습니다.

## v0.27.0 (2026-08-24)

### ✨ 새로운 기능

- **크루 관리자 기능 강화**
  - **크루 설정 수정**: 크루 관리자가 직접 크루 정보 및 설정을 변경할 수 있습니다.
  - **크루원 러닝 기록 관리**: 부적절하거나 잘못 등록된 크루원의 러닝 기록을 관리자가 직접 삭제하고 정리할 수 있습니다.

---

### 🎨 UI/UX 및 디자인 개선

- **카카오톡 공유 스타일 개편**: 러닝 기록을 카카오톡으로 공유할 때 더 보기 좋고 깔끔한 레이아웃으로 공유됩니다.
- **거리 표시 네온 스타일 적용**: 러닝 거리 표시 영역에 감각적인 네온 스타일을 적용하여 시각적 몰입감을 높였습니다.

---

### 🛠️ 버그 수정 및 개선

- **러닝 기록 삭제 즉시 반영**: 러닝 기록을 삭제한 후 화면 목록에 바로 업데이트되지 않던 현상을 수정하여 더욱 쾌적하게 관리할 수 있습니다.

## v0.26.1 (2026-08-23)

### ⚡ 성능 및 사용성 개선

- **모바일 환경 이미지 처리 속도 및 반응성 향상**
  - 모바일 기기에서 이미지를 업로드하거나 가공할 때 발생하는 속도 저하 및 버벅임 현상을 크게 개선했습니다.
  - 리소스 사용을 대폭 줄여 저사양 기기나 불안정한 네트워크 환경에서도 보다 빠르고 끊김 없이 쾌적하게 이미지를 처리할 수 있습니다.

## v0.26.0 (2026-08-23)

### 🚀 새로운 기능 및 사용성 개선

- **카카오톡 공유 후 대시보드 자동 이동**
  - 카카오톡 공유를 완료하면 번거로운 추가 조작 없이 바로 크루 대시보드로 자동 이동되어 흐름이 더욱 편리해졌습니다.

### 🛠 안정성 개선 및 버그 수정

- **파일 업로드 안정성 향상**
  - 사진 및 파일 업로드 중 네트워크 지연이나 세션 만료 등으로 인해 발생하던 간헐적 오류를 수정하여, 더욱 안정적으로 업로드할 수 있도록 개선했습니다.

## v0.25.3 (2026-08-23)

### ✨ 사용성 개선 (UI/UX)

- **기록 페이지 분석 경험 개선**: 기록 페이지 내 분석 기능의 화면 흐름과 UI를 개선하여, 분석 진행 및 결과 확인이 더욱 직관적이고 편리해졌습니다.

### 🛠️ 버그 수정 및 안정성 향상

- **이미지 분석 안정성 강화**: 이미지 업로드 및 분석 처리 과정에서 발생할 수 있는 오류를 수정하여 보다 안정적인 분석 서비스를 제공합니다.

## v0.25.2 (2026-08-23)

### 📱 모바일 이미지 업로드 및 안정성 개선

- **모바일 이미지 업로드 안정화**
  - 모바일 환경에서 사진 및 이미지를 첨부할 때 발생할 수 있는 업로드 실패 현상을 개선하여 더욱 안정적인 업로드가 가능해졌습니다.
- **이미지 압축 처리 보완**
  - 다양한 모바일 기기 환경에서 이미지 압축 시 발생하던 예외 상황에 안전하게 대응하여, 끊김 없이 원활하게 이미지를 등록할 수 있도록 최적화했습니다.

## v0.25.1 (2026-08-23)

### 🛠️ 개선 및 수정 사항

- **기록 페이지 이미지 업로드 안정성 향상**
  - 러닝 기록에 사진을 첨부할 때 보다 안정적이고 빠르게 업로드되도록 개선했습니다.

- **오류 발생 시 안내(피드백) 강화**
  - 기록 페이지 이용 중 일시적인 오류나 문제가 발생했을 때, 상황을 직관적으로 이해하고 대처할 수 있도록 오류 안내 메시지와 화면 피드백을 개선했습니다.

## v0.25.0 (2026-08-23)

### ✨ 새로운 기능

- **카카오톡 그룹 공유 지원**: 콘텐츠 및 모임 정보를 카카오톡 그룹/채팅방으로 더 쉽고 빠르게 공유할 수 있는 전용 공유 팝업(모달)이 추가되었습니다.

---

### 🚀 개선 사항

- **AI 응답 안정성 향상**: AI 기능 이용 시 일시적인 오류나 지연이 발생하더라도 대체 모델을 통해 끊김 없이 안정적으로 답변을 받아보실 수 있도록 서비스 안정성을 강화했습니다.

## v0.24.0 (2026-08-23)

### 🚀 기능 개선 및 안정성 강화

- **오류 복구 및 안내 화면 추가**: 앱 실행 중 예기치 않은 오류가 발생하더라도 화면이 멈추지 않고, 안전하게 안내 화면을 통해 서비스를 계속 이용할 수 있도록 안정성을 강화했습니다.
- **페이지 로딩 속도 개선**: 앱 리소스 로딩 방식을 최적화하여 초기 접속 및 화면 전환 속도가 더 빨라졌습니다.

### 🐛 버그 수정

- **종료일 기간 선택 오류 수정**: 기간이나 일정을 설정할 때 마지막 날(종료일) 기준 데이터가 올바르게 포함 및 반영되지 않던 현상을 수정했습니다.

## v0.23.0 (2026-08-23)

### ✨ 새로운 기능 및 UX 개선

- **크루 탭 좌우 스와이프 제스처 네비게이션 추가**
  - 이제 크루 화면에서 좌우로 화면을 쓸어 넘기는(스와이프) 제스처로 탭 간 이동이 가능합니다.
  - 상단 탭을 직접 터치하지 않고도 직관적이고 부드럽게 화면을 전환하며 편리하게 크루 정보를 탐색해 보세요.

## v0.22.0 (2026-08-23)

### 🚀 주요 업데이트

- **스쿼드 게시글 유형 개편 및 추가**
  - 스쿼드 활동 목적에 맞춰 보다 다양하고 직관적인 유형의 게시글을 작성하고 탐색할 수 있도록 게시글 형식이 개선되었습니다.

- **개발자 모드 툴킷 도입**
  - 기능 테스트와 디버깅을 효율적으로 지원하는 개발자 모드 환경이 새롭게 추가되었습니다.

## v0.21.0 (2026-08-23)

### ✨ 새로운 기능 및 UI 개선

- **크루 리더 뱃지 표시**: 크루 게시판에서 크루장을 한눈에 알아볼 수 있도록 리더 전용 뱃지가 추가되었습니다.

### ⚡ 성능 및 사용성 개선

- **앱 성능 최적화**: 전반적인 앱 동작 성능을 개선하여 더욱 빠르고 쾌적하게 서비스를 이용하실 수 있습니다.

## v0.20.0 (2026-08-22)

### 🚀 새로운 기능

- **역대 크루 보드 '런 횟수' 정렬 옵션 추가**: 역대 크루(All-time Crew) 보드에서 크루원들의 기록을 **달리기 횟수(Run Count)** 기준으로 정렬하여 볼 수 있는 기능이 추가되었습니다.

### 🎨 UI/UX 개선

- **화면 가독성 향상**: 불필요하게 중복 표시되던 합계(Sum) 텍스트를 제거하여 보드 화면을 더욱 깔끔하고 직관적으로 개선했습니다.

## v0.19.0 (2026-08-22)

### ✨ 새로운 기능 및 개선 사항

- **카카오 계정 프로필 자동 기본값 적용**
  - 크루 프로필 설정 시 카카오 계정의 닉네임과 프로필 이미지가 기본값으로 자동 반영됩니다.
  - 별도의 추가 입력 없이도 카카오 계정 정보를 기반으로 더욱 빠르고 편리하게 프로필을 완성하고 시작해보세요.

## v0.18.0 (2026-08-22)

### ✨ 새로운 기능 및 개선 사항

- **크루 선택 화면에서 초대받은 크루 확인**
  - 초대받은 크루가 있는 경우, 크루 선택 화면에 해당 크루 카드가 표시되어 바로 확인하고 손쉽게 참여할 수 있습니다.

- **대기 중인 크루 초대 내역 유지**
  - 수락 대기 중인 크루 초대 정보가 안전하게 보존되어, 페이지를 벗어나거나 다시 접속하더라도 초대 내역을 놓치지 않고 이어서 진행할 수 있습니다.

## v0.17.0 (2026-08-22)

### ✨ 크루 보드 및 랭킹 기능 강화

- **팀 챌린지 & 주간 이벤트 목표 지원**: 크루 보드에서 팀 챌린지와 주간 이벤트 목표를 한눈에 확인하고, 진행률 기준으로 정렬하여 크루원들의 현황을 손쉽게 살펴볼 수 있습니다.
- **크루 활동 기간에 맞춘 랭킹 표시**: 주간 및 월간 랭킹 기간이 크루의 실제 활동 기간에 맞춰 정확하게 반영되며, 크루 시작 전 대기 상태를 직관적으로 확인할 수 있도록 안내가 추가되었습니다.

---

### 🧭 네비게이션 및 사용성(UX) 개선

- **앱 버전 및 릴리즈 노트 바로가기**: 하단 네비게이션 영역에서 현재 앱 버전을 쉽게 확인하고, 최신 업데이트 내역으로 바로 이동할 수 있는 링크가 추가되었습니다.
- **동선 간소화 및 사용성 개선**: 화면 이동 과정의 불편 요소를 개선하고 전반적인 탐색 동선을 간소화하여 더욱 쾌적한 사용 환경을 제공합니다.

## v0.16.0 (2026-08-22)

### ✨ 새로운 기능

- **크루장 권한 위임 기능**
  - 이제 크루장이 다른 크루원에게 크루장 권한을 직접 위임(양도)할 수 있습니다.
  - 크루장 변경 시에도 기존 크루를 유지하며 유연하게 역할을 넘겨줄 수 있어 크루 운영이 더욱 편리해집니다.

---

### 🛠 기타 개선

- 서비스 배포 프로세스 및 시스템 안정성 개선이 진행되었습니다.

## v0.15.0 (2026-08-22)

### 🏆 랭킹 및 내비게이션 개선

- **편리해진 랭킹 페이지 탐색**: 랭킹 페이지의 내비게이션이 개선되어 원하는 순위와 크루 정보를 더욱 빠르고 직관적으로 이동하며 확인할 수 있습니다.

### 👥 크루 진행 상황(Progress) 확인 강화

- **크루 진행도 한눈에 보기**: 함께하는 크루원들의 활동 및 진행 현황을 보다 명확하고 직관적으로 파악할 수 있도록 표시 방식이 개선되었습니다.

### 📊 통계 요약(Stats Summary) 개편

- **핵심 성과 지표 요약 제공**: 주요 활동 데이터와 성과를 한눈에 비교하고 확인할 수 있도록 통계 요약 화면의 가독성이 향상되었습니다.

## v0.14.0 (2026-05-14)

### UI/UX 개선 및 멤버 프로필 네비게이션

- **멤버 상세 프로필 이동 기능**: 랭킹 페이지에서 멤버 항목을 클릭하면 해당 멤버의 프로필 페이지로 바로 이동할 수 있도록 네비게이션이 추가되었습니다.
- **헤더 디자인 및 시각적 위계 개편**:
  - 페이지 제목과 크루 이름의 스타일을 조정하여 현재 위치한 페이지의 가독성을 높였습니다.
  - 대시보드 헤더의 로고(또는 크루 아이콘)를 클릭하면 내 프로필 이미지를 크게 확인할 수 있는 미리보기 기능이 추가되었습니다.
- **인터랙션 경험 향상**: 랭킹 리스트 등 클릭 가능한 요소에 터치 피드백(누름 효과)을 적용하여 보다 직관적인 사용감을 제공합니다.

## v0.13.21 (2026-05-14)

### 🚀 주요 업데이트

- **크루 전용 프로필 적용**: 대시보드 상단 헤더에 해당 크루에서 사용하는 개인 프로필 이미지가 표시되도록 개선되었습니다.
- **크루 정보 화면 가독성 개선**: 크루 정보 모달에서 운영 정책 섹션이 기본적으로 접힌 상태로 표시되어, 주요 정보를 더 빠르게 확인할 수 있습니다.

### 🎨 디자인 및 사용성 개선

- **멤버 프로필 이동 편의성**: 크루 멤버 목록에서 아바타를 클릭하면 이미지 미리보기 대신 해당 멤버의 프로필 페이지로 즉시 이동하도록 변경되었습니다.
- **크루 선택 화면 UI 정돈**: 크루 선택 페이지의 헤더 타이틀을 더 깔끔하고 일관성 있는 스타일로 업데이트했습니다.

## v0.13.20 (2026-05-13)

### 🎨 UI/UX 개선

- **대시보드 진행 현황 가독성 개선**: 대시보드 내 목표 달성률 표시 방식을 최적화하여 현재 진행 상태를 보다 직관적으로 확인할 수 있도록 개선했습니다.

### 🐛 버그 수정 및 기능 개선

- **러닝 이미지 AI 분석 정확도 향상**: 기록 인증 이미지 분석 시 페이스(Pace) 데이터를 날짜로 오인하던 문제를 해결했습니다. 이제 사진을 통한 자동 기록 입력이 더욱 정확해졌습니다.

## v0.13.19 (2026-05-11)

제공해주신 커밋 내역을 바탕으로 작성한 릴리즈 노트입니다.

### 🎨 UI/UX 개선

- **대시보드 시각적 요소 최적화**: 주간 달성률 표시에서 상태 이모지를 제거하여 UI를 더욱 간결하고 깔끔하게 개선했습니다. 불필요한 요소를 줄여 사용자가 목표 달성 수치 등 핵심 정보에 더욱 집중할 수 있도록 가독성을 높였습니다.

## v0.13.18 (2026-05-11)

### 🚀 주요 업데이트

#### **디자인 시스템 및 모바일 경험 대규모 개편**

- **모바일 퍼스트 디자인 적용**: 다양한 기기의 노치 및 다이나믹 아일랜드를 고려한 세이프 에어리어(Safe Area)를 완벽히 지원합니다.
- **Sporty Neon 테마 도입**: Space Grotesk 폰트와 강렬한 네온 컬러를 적용하여 RUNC만의 역동적인 브랜드 이미지를 강화했습니다.
- **터치 최적화**: 버튼 터치 영역 및 인터랙션 피드백을 개선하여 모바일 환경에서 더욱 쾌적한 조작이 가능합니다.

#### **페이지 전환 애니메이션 개선**

- 화면 이동 시 더욱 자연스럽고 부드러운 전환 효과(Framer Motion 기반)를 적용하여 앱 사용 전반의 시각적 즐거움을 더했습니다.

#### **멀티 크루 동시 인증 기능**

- 한 번의 기록 등록으로 여러 크루에 동시에 인증할 수 있는 기능이 추가되었습니다. 레이아웃 최적화를 통해 많은 크루에 가입된 사용자도 안정적으로 인증 버튼을 사용할 수 있습니다.

#### **대시보드 및 달성률 시각화 개선**

- **주간 달성률 상세화**: 이제 목표를 초과 달성했을 때 100% 이상의 수치가 정확하게 표시됩니다.
- **상태 이모지 추가**: 주간 목표 달성 여부를 직관적으로 확인할 수 있도록 상태 이모지가 추가되었습니다. (미달성 시 ⏳ 아이콘으로 변경)

## v0.13.17 (2026-05-11)

### 🚀 주요 업데이트

- **러닝 기록 이미지 확대 기능**: 업로드된 러닝 기록 이미지를 클릭하여 크게 확인할 수 있는 미리보기 모달이 추가되었습니다. 기록의 세부 내용을 더욱 선명하게 확인해 보세요.
- **실시간 상태 알림(Toast) 도입**: 작업 성공, 오류 등 서비스 이용 중 발생하는 주요 피드백을 직관적인 토스트 메시지로 즉시 확인할 수 있어 사용성이 개선되었습니다.
- **거리 직접 수정 기능**: 자동 인식된 결과 외에도 사용자가 직접 러닝 거리를 입력하고 수정할 수 있는 필드가 추가되어, 더욱 정확한 기록 관리가 가능해졌습니다.

### 🛠 개선 사항

- 코드 가독성 및 시스템 안정성을 위한 내부 최적화 작업을 진행하였습니다.

## v0.13.16 (2026-05-07)

### 🚀 신규 기능 및 개선 사항

- **트레드밀(러닝머신) 기록 분석 지원**: 이제 야외 러닝뿐만 아니라 트레드밀(러닝머신) 계기판 이미지도 AI가 자동으로 분석합니다. 사진 한 장으로 실내 운동 기록까지 간편하게 인증해 보세요.
- **AI 기록 인식 고도화**: 트레드밀 환경 특유의 다양한 화면 구성을 더 정교하게 인식할 수 있도록 AI 분석 로직을 개선하여 데이터 추출의 정확도를 높였습니다.

### 💡 사용자 영향

날씨나 장소에 상관없이 실내 트레드밀 기록까지 스마트하게 관리할 수 있게 되어, 더욱 끊김 없는 러닝 루틴 관리가 가능해졌습니다. 기기 화면을 촬영해 업로드하는 것만으로 거리와 페이스 등 주요 정보를 자동으로 입력할 수 있어 기록 등록이 훨씬 편리해졌습니다.

## v0.13.15 (2026-05-07)

- **대시보드 가독성 개선**: 대시보드의 주요 상태 카드(러닝 횟수, 목표 거리, 평균 페이스) 레이아웃을 최적화했습니다. 카드별 너비 비율을 재조정하여, 정보량이 많은 항목도 잘림 없이 균형 있게 표시되도록 시각적 편의성을 높였습니다.

## v0.13.14 (2026-05-07)

### 🛠️ 개선 및 수정 사항

**대시보드 데이터 가독성 및 정확도 향상**

- **활동 거리 표시 표준화**: 모든 활동 거리가 소수점 둘째 자리까지 일관되게 표시되도록 개선되어, 더욱 깔끔하고 정돈된 대시보드를 확인하실 수 있습니다.
- **평균 페이스 노출 오류 수정**: 특정 상황에서 평균 페이스가 \`NaN:NaN\`으로 잘못 표시되던 문제를 해결하여, 이제 언제나 정확한 기록 확인이 가능합니다.

## v0.13.13 (2026-05-05)

### UI/UX 개선

- **그룹 선택 편의성 향상**: 그룹 선택 버튼의 크기를 키우고 레이블 표시 방식을 개선하여 보다 직관적이고 편리하게 조작할 수 있도록 업데이트했습니다.
- **기록 안내 시인성 강화**: 러닝 기록 입력 시 날짜가 지정되지 않았을 때 나타나는 안내 문구를 Amber 색상으로 강조하여 사용자가 쉽게 인지할 수 있도록 개선했습니다.

### 기능 및 편의성

- **자동 닉네임 설정**: 카카오톡 초대 링크를 통해 크루에 가입할 경우, 별도의 입력 없이도 카카오 프로필의 닉네임이 자동으로 크루 프로필에 반영되어 가입 절차가 간소화되었습니다.

## v0.13.12 (2026-05-05)

### 🚀 기능 개선

- **기록 이미지 날짜 정보 안내 추가**: 업로드한 이미지에서 날짜 정보를 자동으로 추출할 수 없는 경우, 사용자에게 안내 메시지를 표시하여 수동 입력을 돕도록 개선되었습니다.

### 🛠️ 버그 수정 및 최적화

- **이미지 데이터 분석 자동 입력 강화**: 이미지의 날짜가 크루 활동 기간을 벗어나더라도, 분석된 거리와 페이스 정보는 자동으로 입력되도록 수정되었습니다. 이제 날짜와 관계없이 분석된 수치를 즉시 확인하고 활용할 수 있습니다.

### 💡 사용자 영향

기록 인증 시 발생할 수 있는 예외 상황에 대한 안내가 강화되었고, 데이터 자동 입력 로직이 유연해짐에 따라 기록 등록 과정이 더욱 빠르고 편리해졌습니다.

## v0.13.11 (2026-05-05)

제공해주신 커밋 내역을 바탕으로, 사용자가 체감할 수 있는 변화를 중심으로 정리한 릴리즈 노트입니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 러닝 기록 이미지에서 날짜 정보가 명확하게 보이지 않거나 포함되지 않은 경우, AI가 잘못된 날짜를 임의로 추측하지 않도록 로직을 정교화했습니다. 이를 통해 분석 결과의 신뢰도를 높이고, 잘못된 데이터가 등록되는 것을 사전에 방지합니다.

### 💡 사용자 영향

기록 인증 과정에서의 데이터 정합성을 강화하여, 사용자가 업로드한 이미지를 기반으로 더욱 정확하고 신뢰할 수 있는 러닝 기록 관리가 가능해졌습니다.

## v0.13.10 (2026-05-05)

제공해주신 커밋 내역과 이전 버전(\`v0.13.8\`) 이후의 변경 사항들을 종합하여, 사용자가 체감할 수 있는 가치 중심의 릴리즈 노트를 작성해 드립니다.

### 🚀 신규 기능 및 UI 개선

- **멤버 프로필 정보 강화**: 이제 멤버 프로필 화면에서 크루 이름 옆에 소속 그룹 배지와 함께 개인별 주간 목표(거리 및 횟수)를 한눈에 확인할 수 있습니다. 동료들의 목표 달성 현황을 더 직관적으로 파악해 보세요.
- **버전 정보 표시**: 크루 선택 화면에 현재 앱의 버전 정보가 담긴 배지가 추가되었습니다. 내가 사용 중인 앱의 최신 여부를 더욱 쉽게 확인할 수 있습니다.
- **프로필 이미지 반영 개선**: 프로필 사진을 변경했을 때 이전 이미지가 계속 남아있던 현상을 수정했습니다. 이제 변경된 사진이 즉시 화면에 반영됩니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 기록 이미지 분석 시 연도 정보가 없는 경우에도 AI가 날짜를 정확하게 인식하도록 로직을 개선했습니다. 이제 기록 누락이나 오차 걱정 없이 러닝을 인증할 수 있습니다.
- **시스템 안정성 및 내부 최적화**: 앱 전반의 성능 안정성을 위해 크루 선택 페이지의 내부 모듈 로딩 구조를 정돈하고 최적화했습니다.

### 💡 사용자 영향

이번 업데이트를 통해 멤버 간의 목표 공유가 활발해지고, 기록 인증의 정확도가 높아져 더욱 신뢰할 수 있는 크루 활동이 가능해집니다.

## v0.13.9 (2026-05-04)

### 🚀 신규 기능 및 UI 개선

- **멤버 프로필 정보 강화**: 멤버 프로필 화면에서 크루 이름 옆에 소속 그룹 배지와 함께 개인별 목표(주간 거리 및 횟수)를 한눈에 확인할 수 있습니다.
- **버전 정보 표시**: 크루 선택 화면에 현재 앱의 버전 배지가 추가되었습니다.
- **프로필 이미지 반영 개선**: 프로필 사진 변경 시 간혹 이전 이미지가 계속 보이던 현상을 수정하여, 변경된 사진이 즉시 반영되도록 개선했습니다.

### 🛠️ 기능 수정 및 최적화

- **러닝 기록 분석 정확도 향상**: 기록 이미지 분석 시 연도 정보가 없는 경우 AI가 잘못된 연도를 추측하지 않도록 로직을 개선하여, 기록 측정의 정확도를 높였습니다.

## v0.13.8 (2026-05-04)

### 🛠️ 개선 및 수정 사항

- **크루 활동 기간 설정 유효성 검사 강화**: 크루 생성 및 관리자 설정 시, 종료일이 시작일보다 이전 날짜로 설정되지 않도록 개선되었습니다. 이를 통해 잘못된 기간 설정으로 인한 혼란을 방지하고, 크루 활동 데이터를 더욱 정확하게 관리할 수 있습니다.

## v0.13.7 (2026-05-04)

### UI/UX 개선

- **대시보드 시각적 일관성 강화**: 프리 모드 안내 문구 내 'Profile' 표기를 디자인 시스템 가이드에 맞춰 대문자(**PROFILE**)로 변경하여 브랜드 아이덴티티와 시각적 통일성을 높였습니다.

## v0.13.6 (2026-05-04)

### 🚀 새로운 기능

- **자율 목표 설정 지원 (자율 모드)**: 크루 내 그룹 활동이 없는 상태에서도 멤버 개인이 직접 주간 목표를 설정하고 달성량을 관리할 수 있는 '자율 모드' 기능이 추가되었습니다.
- **프로필 배지 및 바로가기 추가**: 프로필 화면의 크루 이름 옆에 '자율 모드' 상태임을 알리는 배지가 표시됩니다. 이 배지를 클릭하면 목표 설정 화면으로 즉시 이동할 수 있는 단축 경로가 제공됩니다.

### 🛠️ 개선 및 수정 사항

- **카카오톡 초대 링크 오류 해결**: 카카오톡 공유 링크를 통해 접속 시 화면이 검게 표시되던 현상을 수정하여 이제 정상적으로 초대 페이지에 접속할 수 있습니다.
- **사용자 프로필 조회 안정화**: 일부 환경에서 멤버 프로필 정보를 불러오지 못하던 오류를 수정하여 서비스 이용의 안정성을 높였습니다.

## v0.13.5 (2026-05-04)

### ✨ 사용자 경험(UX) 개선

- **대시보드 목표 거리 표시 최적화**: 대시보드에서 설정된 목표 거리가 생략되거나 잘리지 않고 전체 수치가 명확하게 표시되도록 개선했습니다. 이제 나의 목표 달성 현황을 더욱 정확하게 확인하실 수 있습니다.

## v0.13.4 (2026-05-04)

### ✨ 사용자 경험(UX) 및 디자인 개선

- **대시보드 가독성 최적화**: 대시보드의 상태 카드(Condition Card) 레이아웃을 개선하여 정보가 줄바꿈 없이 한 줄로 깔끔하게 표시되도록 했습니다. 이제 주요 수치와 진행 상황을 더욱 직관적으로 확인할 수 있습니다.

### 🛠️ 시스템 안정성 향상

- **앱 업데이트 환경 안정화**: 새로운 버전 업데이트 시 발생할 수 있는 페이지 로딩 오류를 방지하고, 항상 최신 상태의 서비스를 끊김 없이 안정적으로 이용하실 수 있도록 업데이트 로직을 보강했습니다.

## v0.13.3 (2026-05-04)

### 🚀 기능 개선

- **카카오톡 초대 공유 이미지 최적화**: 이제 크루 초대 링크를 카카오톡으로 공유할 때, 해당 크루의 **고유 아이콘**이 썸네일로 함께 전달됩니다. 크루 아이콘이 설정되지 않은 경우에도 기본 RUNC 아이콘이 자동으로 적용되어, 어떤 상황에서도 깔끔하고 전문적인 공유 화면을 제공합니다. 이를 통해 크루의 아이덴티티를 더욱 효과적으로 드러낼 수 있습니다.

## v0.13.2 (2026-05-03)

### 🚀 주요 업데이트

#### 📊 통계 및 랭킹 정확도 개선

- **크루 시작일 기준 기록 필터링:** 이제 모든 통계와 랭킹 데이터에 크루 시작일 이후의 기록만 반영됩니다. 크루 활동 시작 전의 데이터가 포함되지 않아 더욱 공정하고 정확한 순위 확인이 가능합니다.

#### 📱 UI/UX 및 사용성 최적화

- **모바일 대시보드 가독성 향상:** 모바일 화면에서 거리(Distance) 레이아웃이 깨지거나 줄바꿈되던 현상을 수정하여, 운동 기록을 더 쾌적하게 확인할 수 있습니다.
- **프로필 설정 화면 정돈:** 프로필 내 그룹 목표 할당 등 주요 정보의 레이아웃을 더 깔끔하게 개선했습니다.

#### 🔄 데이터 실시간 동기화 강화

- **설정 변경 즉시 반영:** 프로필 정보를 수정하면 대시보드의 통계와 그룹 설정이 즉시 최신 상태로 업데이트되도록 개선되었습니다.
- **랭킹 및 목표 데이터 정합성 확보:** 프로필 변경 시 발생할 수 있던 랭킹 정보나 그룹 설정 간의 데이터 불일치 문제를 해결하여 서비스 안정성을 높였습니다.

## v0.13.1 (2026-05-03)

### ✨ 사용자 경험(UX) 개선

- **모바일 대시보드 레이아웃 최적화**: 모바일 환경에서 주행 거리 수치가 레이아웃을 벗어나지 않고 깔끔하게 표시되도록 개선했습니다.
- **프로필 설정 UI 정돈**: 사용자 프로필 화면에서 그룹 목표 설정 영역의 가독성을 높이기 위해 텍스트 포맷을 정교하게 다듬었습니다.

### 🛠️ 주요 수정 사항

- **실시간 데이터 동기화 강화**: 프로필 정보를 변경하거나 목표를 수정했을 때, 대시보드 통계와 랭킹 정보가 즉시 최신 상태로 반영되도록 개선되었습니다.
- **랭킹 및 통계 정확도 향상**: 크루의 활동 시작일을 기준으로 기록을 필터링하도록 수정하여, 크루 활동 기간 외의 데이터가 랭킹이나 통계에 영향을 주지 않도록 정확도를 높였습니다.
- **데이터 일관성 보완**: 설정 변경 시 발생할 수 있는 데이터 불일치 문제를 해결하기 위해 내부 캐시 및 쿼리 갱신 로직을 보강했습니다.

## v0.13.0 (2026-05-03)

### 🚀 신규 기능

- **그룹 관리 및 자율성 확대**: 멤버가 직접 그룹을 변경하거나, 관리자가 특정 그룹으로 멤버를 지정할 수 있는 기능이 추가되었습니다.
- **그룹 종류 확장**: 기존 5개(A~E)에서 최대 10개(A~J) 그룹까지 지원하여 더욱 세밀한 그룹 운영이 가능해졌습니다.
- **주간 벌금 유예(Deferral) 도입**: 멤버별로 주간 벌금을 유예할 수 있는 기능이 추가되어 운영의 유연성을 높였습니다.
- **관리자 모니터링 강화**: 관리자 페이지 리스트에서 멤버별 주간 미션 달성 현황과 예상 벌금을 한눈에 확인할 수 있습니다.

### ✨ 사용자 경험(UX) 개선

- **기록 등록 편의성 향상**: 기록 등록 시 거리, 페이스, 케이던스는 분석값에 따라 고정(Read-only)되며, 날짜 수정 및 소요 시간 자동 포맷팅 기능이 추가되어 등록이 더 간편해졌습니다.
- **시각적 경고 알림**: 평균 페이스 미달로 벌금이 적용되는 경우 수치를 강조 표시하여 사용자가 쉽게 인지할 수 있도록 개선했습니다.
- **그룹별 맞춤 정책 설정**: 정책 설정 UI가 개선되었으며, 그룹별로 상이한 목표치를 더욱 쉽게 설정할 수 있습니다.

### 🛠️ 주요 수정 사항

- **랭킹 시스템 정교화**: 탈퇴 멤버를 순위에서 제외하고 공동 순위 처리를 지원하여 더욱 정확한 랭킹 정보를 제공합니다.
- **이미지 날짜 인식 고도화**: 기록 이미지 분석 시 연도 정보가 없는 경우 현재 연도를 지능적으로 추론하여 정확한 날짜로 등록합니다.
- **데이터 실시간 반영**: 그룹 변경 사항이 대시보드와 프로필에 즉시 업데이트되도록 개선되었습니다.
- **페이스 계산 및 표시 최적화**: 평균 페이스를 항상 확인할 수 있도록 표시 방식을 개선하고 벌금 계산 로직을 정교하게 수정했습니다.

## v0.12.0 (2026-05-03)

### 🚀 신규 기능

- **평균 페이스 패널티 범위 설정 추가**: 크루 관리자가 평균 페이스에 따른 패널티 범위를 직접 세부적으로 설정할 수 있는 기능이 도입되었습니다.
- **패널티 정책 시각화**: 설정된 페이스 패널티 범위를 사용자가 직관적으로 확인할 수 있도록 전용 디스플레이 영역이 추가되었습니다.

### 💡 주요 개선 사항

- **정책 관리 유연성 강화**: 크루의 운동 강도나 운영 방식에 맞춰 더욱 정교한 패널티 시스템을 구축할 수 있습니다.
- **UI/UX 최적화**: 복잡할 수 있는 패널티 수치를 시각적으로 정리하여 정책 이해도를 높였습니다.

### 🛠️ 사용자 영향

- 이제 크루 멤버들은 본인의 페이스가 패널티 범위에 해당하는지 명확하게 인지할 수 있으며, 관리자는 크루의 성격에 맞는 공정한 규칙을 적용할 수 있습니다.

## v0.11.0 (2026-05-03)

### 🚀 신규 기능

- **크루 멤버 내보내기 기능**: 크루 관리자(Admin)를 위한 멤버 관리 권한이 강화되었습니다. 이제 관리자는 크루 멤버 목록에서 특정 멤버를 내보낼 수 있어, 더욱 체계적이고 활발한 크루 운영이 가능해집니다.

### 🎨 관리 도구 및 UX 개선

- **직관적인 멤버 관리 UI**: 크루 관리자 페이지의 멤버 리스트에 삭제 버튼이 추가되었습니다. 관리자가 여러 단계를 거치지 않고도 즉시 멤버 현황을 정리할 수 있도록 UX를 최적화했습니다.

### 💡 사용자 영향

- **크루 운영 효율성 증대**: 크루의 성격에 맞지 않는 활동을 하거나 활동이 없는 멤버를 직접 관리할 수 있게 되어, 크루의 활동성과 커뮤니티 품질을 더욱 효과적으로 유지할 수 있습니다.

## v0.10.0 (2026-05-03)

### 🚀 새로운 기능

- **멤버 상세 프로필 조회**: 크루 멤버들의 개별 활동 현황과 기록을 확인할 수 있는 상세 프로필 페이지가 추가되었습니다. 동료들의 러닝 데이터를 확인하며 함께 달리는 동기부여를 얻어보세요.
- **개인 최고 기록(PB) 표시**: 내 프로필 화면에서 **최고 거리**와 **최고 페이스**를 한눈에 확인할 수 있습니다. 나의 러닝 성취도를 직관적으로 파악해 보세요.
- **스탯 박스 연동 기능**: 대시보드의 스탯 박스를 클릭하면 해당 기록으로 즉시 화면이 포커스되어, 원하는 정보를 더 빠르고 편리하게 확인할 수 있습니다.
- **관리자 전용 멤버 리스트**: 크루 관리자 페이지 내에 멤버 관리 전용 리스트가 도입되어, 크루장과 관리자가 멤버 현황을 더 효율적으로 관리할 수 있게 되었습니다.

### 🎨 UI/UX 및 사용성 개선

- **자동 스크롤 최적화**: 페이지 이동 시 화면이 항상 최상단에서 시작되도록 개선하여, 긴 리스트를 확인한 후에도 끊김 없는 탐색이 가능해졌습니다.
- **관리자 경로 직관화**: 관리자 페이지의 접근 경로를 크루 서비스 구조에 맞춰 재구성하여 접근성을 높였습니다.

### 🛠 시스템 안정화 및 버그 수정

- **데이터 실시간성 강화**: 러닝 기록 등록 후 주간 통계가 즉시 반영되지 않던 문제를 해결하고, 데이터 캐시 정책을 최적화하여 항상 최신 정보를 보장합니다.
- **프로필 설정 오류 수정**: 크루 생성 시 관리자의 닉네임이 정상적으로 적용되지 않던 문제와 서비스 이용 중 발생하던 마이너 버그들을 수정하여 안정성을 강화했습니다.

## v0.9.0 (2026-05-03)

### 🚀 주요 업데이트

- **크루 멤버 프로필 상세 조회 기능 추가**
  - 이제 크루 내 다른 멤버들의 러닝 통계와 활동 내역을 확인할 수 있는 상세 프로필 페이지가 도입되었습니다.
  - 크루원들의 목표 달성 현황과 최근 러닝 기록을 확인하며 함께 달리는 즐거움을 느껴보세요.

### 🎨 디자인 및 UI/UX 개선

- **멤버 프로필 레이아웃 최적화**
  - RUNC만의 강렬한 **스포티 네온(Sporty Neon)** 디자인을 적용하여 프로필 정보의 가독성을 높였습니다.
  - 멤버 리스트에서 프로필로 이어지는 흐름을 개선하여 더욱 직관적인 탐색이 가능해졌습니다.

### 📈 사용자 경험 향상

- **동료 활동 확인을 통한 동기부여**
  - 단순한 명단 확인을 넘어, 동료들의 운동 성과를 구체적으로 확인하고 크루 내 유대감을 강화할 수 있습니다.

## v0.8.0 (2026-05-03)

신규 기능 및 개선 사항을 담은 릴리즈 노트입니다.

### 🚀 신규 기능

**관리자 페이지 내 크루 멤버 리스트 도입**

- 이제 크루 관리자 페이지에서 모든 크루 멤버를 한눈에 확인하고 관리할 수 있습니다.
- 멤버들의 상태를 직관적으로 파악하여 더욱 효율적인 크루 운영이 가능해졌습니다.

### 🎨 UI/UX 개선

**관리자 대시보드 레이아웃 최적화**

- 크루 멤버 리스트가 관리자 페이지에 자연스럽게 통합되었습니다. RUNC 특유의 강렬한 네온 디자인 시스템을 유지하면서도, 많은 정보를 쾌적하게 볼 수 있도록 가독성을 높였습니다.

### 💡 사용자 영향

- **크루장/관리자:** 멤버 현황 파악을 위해 다른 화면으로 이동할 필요 없이, 관리자 페이지 내에서 즉시 멤버 명단을 확인할 수 있어 운영 편의성이 크게 향상되었습니다.

## v0.7.0 (2026-05-03)

### 🚀 신규 기능

- **프로필 개인 최고 기록 표시**: 프로필 화면에서 나의 **최고 거리**와 **최고 페이스**를 확인할 수 있는 항목이 추가되었습니다. 이제 자신의 러닝 성취도를 한눈에 파악해 보세요.
- **통계 박스 클릭 상호작용**: 대시보드 등의 통계 박스를 클릭하면 해당되는 상세 기록으로 화면이 자동 포커스됩니다. 원하는 기록을 더 빠르고 편리하게 찾아볼 수 있습니다.

### 🛠 개선 사항

- **관리 페이지 접근성 개선**: 크루 관리자 페이지의 경로를 크루 서비스 구조에 맞춰 더욱 직관적으로 재구성하였습니다.

## v0.6.4 (2026-05-02)

포괄적인 사용자 경험 개선을 위해 다음과 같이 릴리즈 노트를 작성하였습니다.

### 🎨 UI/UX 개선

- **페이지 이동 시 스크롤 자동 최적화**: 다른 메뉴나 페이지로 이동할 때 화면이 항상 최상단에서 시작되도록 개선되었습니다. 이제 긴 리스트를 보다가 페이지를 전환하더라도 수동으로 올릴 필요 없이 즉시 새로운 콘텐츠를 확인할 수 있습니다.

## v0.6.3 (2026-05-02)

### 🚀 주요 업데이트 및 개선 사항

**1. 데이터 업데이트 실시간성 개선**

- **주간 기록 즉시 반영**: 새로운 러닝 기록을 등록한 후, 메인 화면의 주간 통계가 즉시 업데이트되지 않던 문제를 해결했습니다. 이제 별도의 새로고침 없이도 최신 기록을 바로 확인할 수 있습니다.
- **데이터 정확도 향상**: 화면에 표시되는 정보의 최신 상태를 보장하기 위해 데이터 관리 방식을 최적화했습니다.

**2. 크루 관리 기능 수정**

- **닉네임 설정 오류 해결**: 크루를 처음 생성할 때 관리자의 닉네임이 정상적으로 등록되지 않던 문제를 수정했습니다. 이제 크루 생성과 동시에 프로필 정보가 올바르게 적용됩니다.

**3. 시스템 안정성 강화**

- 데이터 업데이트 프로세스를 개선하여 전반적인 앱 사용 경험이 더욱 매끄러워졌습니다.

## v0.6.2 (2026-05-02)

\`RELEASES.md\` 및 최근 변경 사항을 바탕으로 정리한 릴리즈 노트입니다.

### 🚀 새로운 기능 및 개선 사항

- **크루 가입 신청 시스템 도입**: 이제 새로운 크루에 가입 신청을 보낼 수 있으며, 크루 관리자는 신청 내역을 확인하고 승인할 수 있는 기능이 추가되었습니다.
- **월간 목표 설정**: 크루 프로필에서 매달 달성하고자 하는 개인별 월간 목표 거리를 설정하고 관리할 수 있습니다.
- **크루 공개 설정**: 크루의 성격에 따라 누구나 검색하고 참여할 수 있도록 공개 여부를 설정할 수 있는 옵션이 추가되었습니다.
- **러닝 기록 상세 정보 강화**: 러닝 기록에 케이던스(Cadence)와 페이스(Pace) 정보가 추가되어 더욱 전문적인 분석이 가능해졌습니다.

### 🛠 안정성 및 성능 개선

- **시스템 안정성 강화**: 서비스 이용 중 발생하던 예기치 않은 오류들을 수정하여 더욱 매끄러운 사용 경험을 제공합니다.
- **내부 구조 최적화**: 앱 내부 데이터 구조와 폴더 체계를 정리하여 전반적인 앱 성능과 로딩 속도를 개선하였습니다.
- **개발 환경 고도화**: UI 테스트 환경을 강화하여 향후 업데이트 시 발생할 수 있는 시각적 오류를 사전에 방지하도록 개선하였습니다.

## v0.6.1 (2026-05-02)

### ✨ 주요 업데이트

#### 🛠️ 기능 개선 및 버그 수정

- **크루 가입 프로세스 안정화**: 크루 가입 시 발생하던 오류를 수정하여 이제 막힘없이 크루에 참여할 수 있습니다.
- **데이터 최신화 유지**: 정보 모달을 열 때 최신 데이터를 실시간으로 다시 불러오도록 개선하여 데이터의 정확성을 높였습니다.
- **페이지 이동 및 경로 최적화**: 기록 페이지와 대시보드 간의 연결을 매끄럽게 다듬고, 서비스 전반의 경로(Route) 구조를 더욱 효율적으로 재구성했습니다.

#### 📱 사용자 경험(UX) 향상

- **앱 업데이트 속도 개선**: 웹 앱(PWA) 사용 시 최신 버전을 더 빠르게 적용할 수 있도록 업데이트 설정을 최적화했습니다.
- **서비스 안정성 강화**: 내부 시스템 구조를 체계적으로 정리하여 더욱 빠르고 안정적인 서비스 환경을 구축했습니다.

## v0.6.0 (2026-05-02)

릴리즈 노트를 정리했습니다.

### 🚀 신규 기능 및 개선 사항

- **크루 초대 경험 개선**: 초대 링크를 클릭했을 때 크루 가입 모달이 즉시 표시되지 않던 문제를 수정하여 가입 과정이 더욱 매끄러워졌습니다.
- **실시간 데이터 동기화**: 정보 모달을 열 때마다 최신 데이터를 다시 불러오도록 개선하여 항상 정확한 정보를 확인할 수 있습니다.
- **내비게이션 편의성 향상**: 기록 페이지에서 대시보드로 바로 이동할 수 있도록 경로와 버튼 동작을 최적화했습니다.
- **앱 업데이트 가속화**: PWA(Progressive Web App) 환경에서 새로운 버전이 배포되었을 때 보다 즉각적으로 업데이트가 반영되도록 설정했습니다.

### 🛠 버그 수정

- **크루 가입 로직 안정화**: 유효하지 않은 방식으로 크루에 가입되던 보안 및 논리 오류를 수정했습니다.
- **라우팅 경로 정규화**: 서비스 내부의 이동 경로를 더욱 직관적으로 정리했습니다.

### ⚙️ 시스템 최적화

- **성능 및 안정성 강화**: Vite 7 및 최신 TypeScript 환경으로 업그레이드하여 앱의 반응 속도와 시스템 안정성을 높였습니다.
- **데이터 처리 구조 고도화**: 내부 데이터베이스(Supabase) 연동 로직을 리팩토링하여 향후 기능 확장이 용이하도록 기반을 다졌습니다.

## v0.5.1 (2026-05-02)

### 🚀 주요 업데이트

#### ⚡️ 앱 로딩 및 실행 속도 개선

- **화면 지연 로딩(Lazy Loading) 적용**: 앱을 처음 켤 때 모든 데이터를 한꺼번에 불러오지 않고, 필요한 시점에 나누어 불러오도록 최적화했습니다. 이로 인해 초기 로딩 시간이 단축되고 데이터 소모가 줄어들었습니다.
- **최신 구동 엔진 교체**: 앱의 기반이 되는 시스템(Vite 7)을 최신 버전으로 업데이트하여 전반적인 반응 속도와 화면 전환이 더욱 매끄러워졌습니다.

#### 👥 크루 선택 환경 고도화

- **크루 선택 페이지 안정화**: 사용자가 참여할 크루를 탐색하고 선택하는 과정에서의 시각적 완성도를 높이고, 화면 구성의 안정성을 강화했습니다.

#### 🛠 서비스 안정성 강화

- **최신 보안 및 시스템 패치**: 내부 시스템(TypeScript 등)을 최신 상태로 유지하여 잠재적인 오류를 방지하고, 더욱 쾌적하고 안전한 서비스 이용 환경을 구축했습니다.

## v0.5.0 (2026-05-02)

### 🚀 주요 개선 사항

- **초대 링크 참여 경험 개선**: 초대 링크를 통해 접속했을 때 크루 참여 모달이 즉시 열리지 않던 현상을 수정했습니다. 이제 링크 클릭 한 번으로 더 빠르게 크루에 합류할 수 있습니다.
- **데이터 연동 안정성 강화**: 내부 데이터 처리 방식을 최적화하여 서비스 이용 중 발생할 수 있는 오류를 줄이고, 보다 안정적인 환경을 구축했습니다.

### 🛠 시스템 업데이트

- **개발 및 품질 관리 환경 고도화**: 모바일 중심의 UI 환경을 더 정교하게 테스트할 수 있는 시스템을 도입하여, 향후 더 높은 퀄리티의 기능을 빠르게 제공할 수 있는 기반을 마련했습니다.
- **인프라 최적화**: 데이터베이스 마이그레이션 및 관리 효율을 높이기 위한 내부 시스템 업데이트가 진행되었습니다.

## v0.4.1 (2026-05-02)

### 🛡️ 데이터 연동 및 시스템 안정성 강화

- **데이터 관리 체계 고도화**: 내부 데이터 처리 방식(Supabase API)을 개선하여 더욱 빠르고 안정적인 서비스 환경을 구축했습니다.
- **데이터베이스 정합성 보완**: 데이터베이스 동기화 과정에서 발생하던 오류를 해결하여, 사용자의 러닝 기록과 크루 정보가 보다 정확하고 안전하게 관리되도록 수정했습니다.

### 🛠️ 서비스 품질 유지 및 최적화

- **시스템 자동화 및 검증 강화**: 코드 품질 관리 시스템을 최적화하여 향후 기능 업데이트 시 발생할 수 있는 오류를 사전에 방지하고, 지속적으로 안정적인 서비스를 제공할 수 있는 기반을 마련했습니다.

## v0.4.0 (2026-05-02)

### ✨ 신규 기능

- **크루 참여 승인제**: 공개 크루에 참여 신청을 하면 크루장의 승인 후 입장이 가능합니다. 크루장은 관리자 설정 화면에서 대기 중인 참여 요청을 승인하거나 거절할 수 있습니다.
- **초대 링크**: 크루 초대 코드가 포함된 링크(\`/invite/코드\`)로 바로 접속하면 해당 크루의 참여 화면이 즉시 표시됩니다. 초대 링크를 통한 참여는 승인 없이 즉시 가입됩니다.
- **전체 기간 랭킹**: 랭킹 화면에서 주간·월간 외에 전체 기간(ALL-TIME) 기준 랭킹을 확인할 수 있습니다.

### 📱 사용성 개선

- **크루 카드 레이아웃 개선**: 크루 목록의 입장/참여 버튼이 카드 우측 중앙에 배치되어 더 보기 편해졌습니다.
- **랭킹 아바타 표시**: 랭킹 목록에서 각 멤버의 프로필 아바타가 표시됩니다.

## v0.3.0 (2026-05-02)

### ✨ 신규 기능

- **카카오톡 공유**: 크루 초대 코드를 카카오톡으로 바로 공유할 수 있습니다. 크루 정보 모달에서 '카카오 초대' 버튼을 눌러보세요.
- **크루 공개/비공개 설정**: 크루 생성 시 공개 여부를 선택할 수 있습니다. 비공개 크루는 이름 검색에 노출되지 않으며, 초대 코드로만 참여할 수 있습니다.

### 📱 사용성 개선

- **크루 아이콘 표시 개선**: 페이지 상단 헤더와 크루 목록에 크루 아이콘이 표시됩니다.
- **크루 카드 공개 뱃지**: 크루 목록에서 공개/비공개 상태를 한눈에 확인할 수 있습니다.

## v0.2.0 (2026-05-01)

버전 업데이트 소식입니다.

### 📱 사용성 개선

- **홈 화면 아이콘 개선**: iOS 기기에서 홈 화면에 추가했을 때 앱 아이콘이 더 선명하게 보이도록 PNG 형식으로 최적화했습니다. 이제 아이폰에서도 런씨(RUNC) 아이콘을 더 깔끔하게 만나보실 수 있습니다.

### ✨ 신규 기능

- **업데이트 알림창 추가**: 새로운 기능이나 변경 사항이 있을 때, 앱 접속 시 릴리즈 노트를 바로 확인하실 수 있는 알림창 기능을 추가했습니다. 런씨의 발전 과정을 가장 먼저 확인해보세요.

## v0.1.0 (2026-05-01)

커밋 내역을 바탕으로 작성한 릴리즈 노트입니다.

### 🚀 주요 신규 기능

- **RUNC 정식 서비스 런칭**: 러닝 크루 활동을 위한 통합 플랫폼 RUNC가 시작되었습니다.
- **크루 관리 시스템**: 원하는 러닝 크루를 선택하고 소속되어 활동할 수 있는 시스템이 구축되었습니다.
- **AI 러닝 인증 분석**: 러닝 기록 이미지를 업로드하면 AI가 자동으로 데이터를 분석하여 기록을 인증해줍니다.

### ✨ 디자인 및 UX 개선

- **UI/UX 전면 리뉴얼**: 사용자 편의를 위해 더 직관적이고 세련된 디자인으로 앱 환경을 개선했습니다.
- **크루 데이터 격리 및 보안**: 소속된 크루 내에서만 데이터를 안전하게 공유하고 관리할 수 있도록 보안을 강화했습니다.
- **모바일 앱(PWA) 지원**: 모바일 웹 브라우저에서 '홈 화면에 추가' 기능을 통해 실제 앱처럼 간편하게 실행할 수 있습니다.
- **AI 분석 성능 고도화**: 러닝 기록 이미지 인식 엔진을 개선하여 데이터 추출의 정확도를 높였습니다.

### 🛠️ 주요 수정 사항

- **로그인 안정화**: 카카오 소셜 로그인 과정에서 발생하던 연결 오류를 수정했습니다.
- **앱 아이콘 및 실행 최적화**: 모바일 환경에서 앱 아이콘이 표시되지 않던 문제와 실행 안정성을 개선했습니다.
`;function ic({isOpen:e,onClose:n}){return e?d.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200",children:d.jsxs("div",{className:"bg-zinc-900 w-full max-w-lg max-h-[80vh] rounded-2xl border border-zinc-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200",children:[d.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50 sticky top-0 z-10",children:[d.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[d.jsx("span",{className:"w-2 h-2 rounded-full bg-neon-yellow animate-pulse"}),"업데이트 소식"]}),d.jsx("button",{onClick:n,className:"p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white",children:d.jsx(_n,{size:20})})]}),d.jsx("div",{className:"flex-1 overflow-y-auto px-6 py-6 custom-scrollbar",children:d.jsx("div",{className:`prose prose-invert prose-zinc max-w-none 
            prose-headings:text-white prose-headings:font-bold prose-h2:text-xl prose-h2:mt-0 prose-h2:mb-4
            prose-h3:text-neon-yellow prose-h3:text-sm prose-h3:uppercase prose-h3:tracking-wider prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-zinc-400 prose-p:leading-relaxed
            prose-ul:text-zinc-400 prose-li:my-1 prose-li:marker:text-neon-yellow/50`,children:d.jsx(Ju,{children:rc})})}),d.jsx("div",{className:"p-4 border-t border-zinc-800 bg-zinc-900/50",children:d.jsx("button",{onClick:n,className:"w-full bg-neon-yellow text-black font-bold py-3 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(204,255,0,0.2)]",children:"확인했습니다"})})]})}):null}let gi="fade";function ac(e){gi=e}function kr(){return gi}function xi(){const e=it();return(n,t="fade")=>{ac(t),e(n)}}const bn=[{key:"dashboard",route:Y.crewDashboard},{key:"rank",route:Y.crewRank},{key:"squad",route:Y.crewSquad},{key:"profile",route:Y.crewProfile}];function lc(){const e=xi(),{pathname:n}=at(),t=j.useRef(null);j.useEffect(()=>{const r=n.match(/^\/crews\/([^/]+)\/([^/]+)/),i=r?.[1],a=r?.[2];if(!i||!a)return;const l=bn.findIndex(s=>s.key===a);if(l===-1)return;const o=s=>{if(s.touches.length!==1){t.current=null;return}const u=s.touches[0],f=u.target;let h=!1,p=f;for(;p&&p!==document.body;){if(p.tagName==="INPUT"||p.tagName==="TEXTAREA"||p.getAttribute("data-no-swipe")==="true"){h=!0;break}const x=window.getComputedStyle(p);if((x.overflowX==="auto"||x.overflowX==="scroll")&&p.scrollWidth>p.clientWidth+10){h=!0;break}p=p.parentElement}t.current={x:u.clientX,y:u.clientY,time:Date.now(),skip:h}},c=s=>{if(!t.current||t.current.skip){t.current=null;return}const u=s.changedTouches[0];if(!u)return;const f=u.clientX-t.current.x,h=u.clientY-t.current.y,p=Date.now()-t.current.time;if(t.current=null,Math.abs(f)>=55&&Math.abs(f)>Math.abs(h)*1.3&&p<=500){if(f<0){if(l<bn.length-1){const x=bn[l+1];e(se(x.route,{crewId:i}),"slide-left")}}else if(l>0){const x=bn[l-1];e(se(x.route,{crewId:i}),"slide-right")}}};return window.addEventListener("touchstart",o,{passive:!0}),window.addEventListener("touchend",c,{passive:!0}),()=>{window.removeEventListener("touchstart",o),window.removeEventListener("touchend",c)}},[n,e])}let rn=null;function oc(){return window.Kakao?Promise.resolve():rn||(rn=new Promise((e,n)=>{const t=document.createElement("script");t.src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js",t.crossOrigin="anonymous",t.onload=()=>e(),t.onerror=()=>{rn=null,n(new Error("Kakao SDK 로드 실패"))},document.head.appendChild(t)}),rn)}async function Fe(){const e="22ada2dde34935e1ceec297e5b5c9c5c";try{return await oc(),window.Kakao.isInitialized()||window.Kakao.init(e),window.Kakao.isInitialized()}catch{return!1}}function sc(){Fe()}function pn(){return typeof navigator>"u"?!1:/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||!!navigator.maxTouchPoints&&navigator.maxTouchPoints>1}async function Pd({crewName:e,description:n,inviteCode:t,crewIconUrl:r,iconBlob:i}){const a=window.location.origin,l=`${a}/#${se(Y.invite,{code:t})}`,o=n?`${n}

초대 코드: ${t}`:`초대 코드: ${t}`,c=`[RUNC] ${e} 크루에 초대합니다!`,s=pn();if(s&&i&&typeof navigator<"u"&&navigator.share){const f=new File([i],"runc-crew-icon.jpg",{type:i.type||"image/jpeg"});if(navigator.canShare?.({files:[f]}))try{return await navigator.share({files:[f],title:c,text:`${e} 크루에 합류하세요!
${o}
${l}`,url:l}),"share"}catch(h){if(h instanceof Error&&(h.name==="AbortError"||h.message.includes("abort")||h.message.includes("canceled")||h.message.includes("cancel")))return"share"}}if(s&&typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:c,text:`${e} 크루에 합류하세요!
${o}`,url:l}),"share"}catch(f){if(f instanceof Error&&(f.name==="AbortError"||f.message.includes("abort")||f.message.includes("canceled")||f.message.includes("cancel")))return"share"}if(await Fe())try{const f=r??(window.location.protocol==="https:"?`${a}/runc-icon.png`:void 0);return window.Kakao.Share.sendDefault({objectType:"feed",installTalk:!1,content:{title:`[RUNC] ${e} 크루에 초대합니다!`,description:o,...f&&{imageUrl:f},link:{mobileWebUrl:l,webUrl:l}},buttons:[{title:"RUNC 열기",link:{mobileWebUrl:l,webUrl:l}}]}),"kakao"}catch{}if(typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:c,text:`${e} 크루에 합류하세요!
${o}`,url:l}),"share"}catch(f){if(f instanceof Error&&(f.name==="AbortError"||f.message.includes("abort")||f.message.includes("canceled")||f.message.includes("cancel")))return"share"}return await navigator.clipboard.writeText(`[RUNC] ${e} 크루에 합류하세요!
${o}
${l}`),"clipboard"}async function Td({runnerName:e,crewName:n,crewId:t,weekNumber:r,runNumber:i,distance:a,duration:l,pace:o,imageUrl:c,imageBlob:s}){const u=window.location.origin;let f=n;r&&i?f=`${n} ${r}주차 ${i}Run 완료`:r?f=`${n} ${r}주차`:i&&(f=`${n} ${i}Run 완료`);const h=new URLSearchParams;t&&h.set("crewId",t),h.set("crewName",n),h.set("runnerName",e),h.set("label",f),h.set("distance",String(a)),h.set("duration",l),o&&h.set("pace",o),c&&h.set("imageUrl",c);const p=`${u}/#${se(Y.shareRun,{})}?${h.toString()}`,x=o?` | ⚡ 페이스: ${o}/km`:"",y=`🏃‍♂️ ${e}님의 ${a}km 러닝 인증!`,_=`⏱️ 시간: ${l}${x}
🏆 ${f}`,w=pn();if(w&&s&&typeof navigator<"u"&&navigator.share){const S=new File([s],"runc-record.jpg",{type:s.type||"image/jpeg"});if(navigator.canShare?.({files:[S]}))try{return await navigator.share({files:[S],title:y,text:_}),"share"}catch($){if($ instanceof Error&&($.name==="AbortError"||$.message.includes("abort")||$.message.includes("canceled")||$.message.includes("cancel")))return"share"}}if(w&&typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:y,text:_,url:p}),"share"}catch(S){if(S instanceof Error&&(S.name==="AbortError"||S.message.includes("abort")||S.message.includes("canceled")||S.message.includes("cancel")))return"share"}if(await Fe())try{const S=c||(window.location.protocol==="https:"?`${u}/runc-icon.png`:void 0);return window.Kakao.Share.sendDefault({objectType:"feed",installTalk:!1,content:{title:y,description:_,...S&&{imageUrl:S},link:{mobileWebUrl:p,webUrl:p}},buttons:[{title:"RUNC에서 러닝 보기",link:{mobileWebUrl:p,webUrl:p}}]}),"kakao"}catch{}if(typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:y,text:_,url:p}),"share"}catch(S){if(S instanceof Error&&(S.name==="AbortError"||S.message.includes("abort")||S.message.includes("canceled")||S.message.includes("cancel")))return"share"}return await navigator.clipboard.writeText(`${y}
${_}
${p}`),"clipboard"}async function uc(e){if(!await Fe())return null;try{const t=e instanceof File?e:new File([e],"runc-weekly-goal.png",{type:"image/png"});return(await window.Kakao.Share.uploadImage({file:[t]}))?.infos?.original?.url??null}catch{return null}}async function Ad({runnerName:e,crewName:n,crewId:t,weekLabel:r,totalDistance:i,targetDistance:a,validRunCount:l,progress:o,averagePace:c,imageBlob:s}){const u=`[${n}] ${e}님 ${r} 미션 완료! 축하해 주세요 🎉`,f=pn();if(f&&s&&typeof navigator<"u"&&navigator.share){const p=new File([s],`runc-${r}-${e}.png`,{type:"image/png"});if(navigator.canShare?.({files:[p]}))try{return await navigator.share({files:[p],title:u,text:u}),"share"}catch(x){if(x instanceof Error&&(x.name==="AbortError"||x.message.includes("abort")||x.message.includes("canceled")||x.message.includes("cancel")))return"share"}}if(f&&typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:u,text:u}),"share"}catch(p){if(p instanceof Error&&(p.name==="AbortError"||p.message.includes("abort")||p.message.includes("canceled")||p.message.includes("cancel")))return"share"}if(await Fe())try{let p;if(s){const w=await uc(s);w&&(p=w)}const x=window.location.origin,y=new URLSearchParams;t&&y.set("crewId",t),y.set("crewName",n),y.set("runnerName",e),y.set("weekLabel",r),i!==void 0&&y.set("totalDistance",String(i)),a!==void 0&&y.set("targetDistance",String(a)),l!==void 0&&y.set("validRunCount",String(l)),o!==void 0&&y.set("progress",String(Math.round(o))),c&&y.set("averagePace",c),p&&y.set("posterImageUrl",p);const _=`${x}/#${se(Y.shareGoal,{})}?${y.toString()}`;return window.Kakao.Share.sendDefault({objectType:"feed",installTalk:!1,content:{title:`[${n}] ${e}님`,description:`${r} 미션 완료! 축하해 주세요 🎉`,...p&&{imageUrl:p},link:{mobileWebUrl:_,webUrl:_}},buttons:[{title:"🔥 RUNC에서 확인하기",link:{mobileWebUrl:_,webUrl:_}}]}),"kakao"}catch{}if(typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:u,text:u}),"share"}catch(p){if(p instanceof Error&&(p.name==="AbortError"||p.message.includes("abort")||p.message.includes("canceled")||p.message.includes("cancel")))return"share"}return await navigator.clipboard.writeText(u),"clipboard"}async function Rd({memberName:e,crewName:n,crewId:t,itemLabel:r,amount:i,detailText:a,settlement:l}){const o=window.location.origin,c=t?`${o}/#${se(Y.crewSquad,{crewId:t})}`:o,s=l?.bank&&l?.account?`
입금계좌: ${l.bank} ${l.account}${l.holder?` (${l.holder})`:""}`:"",u=`[${n}] ${e}님 ${r} 미납 안내`,f=`미납 ${r}: ${i.toLocaleString()}원${a?`
${a}`:""}${s}
정산소에서 확인 후 완납 부탁드립니다 🙏`;if(pn()&&typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:u,text:`${f}
${c}`}),"share"}catch(x){if(x instanceof Error&&(x.name==="AbortError"||x.message.includes("abort")||x.message.includes("canceled")||x.message.includes("cancel")))return"share"}if(await Fe())try{return window.Kakao.Share.sendDefault({objectType:"feed",installTalk:!1,content:{title:u,description:f,link:{mobileWebUrl:c,webUrl:c}},buttons:[{title:"정산소에서 확인하기",link:{mobileWebUrl:c,webUrl:c}}]}),"kakao"}catch{}if(typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:u,text:`${f}
${c}`}),"share"}catch(x){if(x instanceof Error&&(x.name==="AbortError"||x.message.includes("abort")||x.message.includes("canceled")||x.message.includes("cancel")))return"share"}return await navigator.clipboard.writeText(`${u}
${f}
${c}`),"clipboard"}async function Dd({memberName:e,crewName:n,crewId:t}){const r=window.location.origin,i=t?`${r}/#${se(Y.crewSquad,{crewId:t})}`:r,a=`[${n}] ${e}님 완납 확인!`,l=`${e}님, 벌금/회비 전액 완납 확인했습니다. 협조해주셔서 감사합니다 🙏🎉`;if(pn()&&typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:a,text:`${l}
${i}`}),"share"}catch(s){if(s instanceof Error&&(s.name==="AbortError"||s.message.includes("abort")||s.message.includes("canceled")||s.message.includes("cancel")))return"share"}if(await Fe())try{return window.Kakao.Share.sendDefault({objectType:"feed",installTalk:!1,content:{title:a,description:l,link:{mobileWebUrl:i,webUrl:i}},buttons:[{title:"RUNC 열기",link:{mobileWebUrl:i,webUrl:i}}]}),"kakao"}catch{}if(typeof navigator<"u"&&navigator.share)try{return await navigator.share({title:a,text:`${l}
${i}`}),"share"}catch(s){if(s instanceof Error&&(s.name==="AbortError"||s.message.includes("abort")||s.message.includes("canceled")||s.message.includes("cancel")))return"share"}return await navigator.clipboard.writeText(`${a}
${l}
${i}`),"clipboard"}const rt="0.44.5",cc=j.lazy(()=>xe(()=>import("./AdminPage-m7gfsgiA.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),dc=j.lazy(()=>xe(()=>import("./LoginPage-BzEJrSCs.js"),__vite__mapDeps([9,1,2,10,4,7,8]))),fc=j.lazy(()=>xe(()=>import("./CrewSelectPage-DV1Ltt7R.js"),__vite__mapDeps([11,1,2,6,4,10,12,5,13,14,15,7,8]))),pc=j.lazy(()=>xe(()=>import("./DashboardPage-B3Cwoj2H.js"),__vite__mapDeps([16,1,2,4,17,18,19,8,6,20,13,14,10,7]))),hc=j.lazy(()=>xe(()=>import("./GroupSelectPage-Cg8Sctyd.js"),__vite__mapDeps([21,1,2,4,7,8]))),mc=j.lazy(()=>xe(()=>import("./InvitePage-BI41CIz7.js"),__vite__mapDeps([22,1,2,12,10,4,15,7,8]))),gc=j.lazy(()=>xe(()=>import("./CrewMemberPage-B3qVeW5b.js"),__vite__mapDeps([23,1,2,4,24,17,18,19,8,6,14,10,7]))),xc=j.lazy(()=>xe(()=>import("./ProfilePage-CI5GbIAf.js"),__vite__mapDeps([25,1,2,3,4,24,17,18,19,8,6,14,10,7]))),yc=j.lazy(()=>xe(()=>import("./RankPage-pX5WoMt2.js"),__vite__mapDeps([26,1,2,13,14,6,4,10,19,7,8]))),bc=j.lazy(()=>xe(()=>import("./RecordPage-BDu1720G.js"),__vite__mapDeps([27,1,2,4,20,15,19,7,8]))),wc=j.lazy(()=>xe(()=>import("./SquadPage-BLTI7T7q.js"),__vite__mapDeps([28,1,2,4,6,18,19,8,13,14,10,7]))),kc=j.lazy(()=>xe(()=>import("./ShareRunPage-C-ZXI1Ol.js"),__vite__mapDeps([29,1,2,4,7,8]))),vc=j.lazy(()=>xe(()=>import("./ShareGoalPage-8Al5BN-X.js"),__vite__mapDeps([30,1,2,4,7,8])));function Sn(){return d.jsx("div",{className:"min-h-screen bg-sporty-bg flex items-center justify-center",children:d.jsx("img",{src:"/runc-icon.png",alt:"RUNC",className:"w-20 h-20 rounded-2xl animate-pulse"})})}function Sc(e){return e.startsWith("/invite/")}function _c(e){return e.startsWith("/share/")}function Oe({children:e}){const{crewId:n}=Ni(),{session:t,currentCrew:r,setCurrentCrew:i,loading:a}=cn(),[l,o]=j.useState(!0);return j.useEffect(()=>{if(!n||!t?.user||a)return;if(r?.id===n){o(!1);return}o(!0);const c=t.user.id;Promise.all([Wn(n),zr(c,n)]).then(([{data:s},{data:u}])=>{i(s??null,u??null)}).finally(()=>o(!1))},[n,t?.user.id,a,t?.user,r?.id,i]),l?d.jsx(Sn,{}):e?d.jsx(d.Fragment,{children:e}):d.jsx(Pi,{})}function Cc(e){switch(e){case"slide-left":return{x:"28%",opacity:0};case"slide-right":return{x:"-28%",opacity:0};case"slide-up":return{y:"100%"};case"slide-down":return{y:"-8%",opacity:0};default:return{opacity:0,y:6}}}function Ec(e){switch(e){case"slide-left":return{x:"-28%",opacity:0};case"slide-right":return{x:"28%",opacity:0};case"slide-up":return{y:"-8%",opacity:0};case"slide-down":return{y:"100%"};default:return{opacity:0,y:-6}}}const jc={initial:e=>Cc(e),animate:{x:0,y:0,opacity:1},exit:e=>Ec(e)},vr=["dashboard","rank","squad","profile"];function wn(e,n){if(n==="record")return"slide-up";const t=e?vr.indexOf(e):-1,r=vr.indexOf(n);return t===-1||r===-1?"fade":r>t?"slide-left":"slide-right"}function Ic({onOpenReleaseNotes:e}){const n=xi(),{currentCrew:t}=cn(),{handleVersionClick:r,handleVersionTouchStart:i,handleVersionTouchEnd:a}=lt(),{pathname:l}=at(),o=l.match(/^\/crews\/([^/]+)\/([^/]+)/),c=o?.[1],s=o?.[2];if(!c||s==="record"||s==="admin"||Sc(l)||_c(l))return null;const u=p=>s===p,f=Rr(t?.start_date??null,t?.end_date??null),h=f.status==="before_start"||f.status==="completed";return d.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur border-t border-zinc-800/60 px-6 pt-3 pb-safe flex justify-between items-center z-50 max-w-lg mx-auto",style:{paddingBottom:"max(0.75rem, env(safe-area-inset-bottom, 0px))"},children:[d.jsxs("button",{onClick:()=>n(se(Y.crewDashboard,{crewId:c}),wn(s,"dashboard")),className:`flex flex-col items-center gap-1 min-w-[48px] transition-colors ${u("dashboard")?"text-neon-yellow":"text-zinc-600 hover:text-zinc-400"}`,children:[d.jsx($i,{size:22,strokeWidth:u("dashboard")?2.5:1.8}),d.jsx("span",{className:`text-[10px] font-bold ${u("dashboard")?"text-neon-yellow":"text-zinc-600"}`,children:"Dashboard"})]}),d.jsxs("button",{onClick:()=>n(se(Y.crewRank,{crewId:c}),wn(s,"rank")),className:`flex flex-col items-center gap-1 min-w-[48px] transition-colors ${u("rank")?"text-neon-yellow":"text-zinc-600 hover:text-zinc-400"}`,children:[d.jsx(qi,{size:22,strokeWidth:u("rank")?2.5:1.8}),d.jsx("span",{className:`text-[10px] font-bold ${u("rank")?"text-neon-yellow":"text-zinc-600"}`,children:"Board"})]}),d.jsx("div",{className:"relative -top-5",children:d.jsx("button",{onClick:()=>{if(h){const p=f.status==="before_start"?"크루 시작 전에는 기록을 등록할 수 없습니다.":"크루가 종료되어 더 이상 기록을 등록할 수 없습니다.";ee.error(p);return}n(se(Y.crewRecord,{crewId:c}),"slide-up")},className:`w-14 h-14 rounded-full flex items-center justify-center border-4 border-sporty-bg shadow-lg transition-transform ${h?"bg-zinc-800 text-zinc-600 cursor-not-allowed border-zinc-900 shadow-none":"bg-neon-yellow text-black hover:scale-105 active:scale-95 shadow-neon-yellow/20"}`,children:d.jsx(Bi,{size:24,strokeWidth:2.5})})}),d.jsxs("button",{onClick:()=>n(se(Y.crewSquad,{crewId:c}),wn(s,"squad")),className:`flex flex-col items-center gap-1 min-w-[48px] transition-colors ${u("squad")?"text-neon-yellow":"text-zinc-600 hover:text-zinc-400"}`,children:[d.jsx(Vi,{size:22,strokeWidth:u("squad")?2.5:1.8}),d.jsx("span",{className:`text-[10px] font-bold ${u("squad")?"text-neon-yellow":"text-zinc-600"}`,children:"Squad"})]}),d.jsxs("button",{onClick:()=>n(se(Y.crewProfile,{crewId:c}),wn(s,"profile")),className:`flex flex-col items-center gap-1 min-w-[48px] transition-colors ${u("profile")?"text-neon-yellow":"text-zinc-600 hover:text-zinc-400"}`,children:[d.jsx(Hi,{size:22,strokeWidth:u("profile")?2.5:1.8}),d.jsx("span",{className:`text-[10px] font-bold ${u("profile")?"text-neon-yellow":"text-zinc-600"}`,children:"Profile"})]}),d.jsxs("button",{type:"button",onClick:()=>r(e),onTouchStart:i,onTouchEnd:a,onMouseDown:i,onMouseUp:a,className:"absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600 hover:text-zinc-400 font-mono tracking-tight opacity-70 hover:opacity-100 transition-opacity select-none leading-none",children:["v",rt]})]})}function zc(){const{session:e,loading:n}=cn(),[t,r]=j.useState(!1),i=it(),a=at(),{pathname:l}=a;lc(),j.useEffect(()=>{window.scrollTo(0,0)},[l]),j.useEffect(()=>{e&&localStorage.getItem("lastSeenVersion")!==rt&&r(!0)},[e]),j.useEffect(()=>{e&&sc()},[e]),j.useEffect(()=>{if(!e)return;const c=localStorage.getItem("pendingInviteHash");c&&(localStorage.removeItem("pendingInviteHash"),i(c.replace(/^#/,"")))},[e,i]);const o=()=>{localStorage.setItem("lastSeenVersion",rt),r(!1)};return n?d.jsx(Sn,{}):e?d.jsxs("div",{className:"min-h-screen bg-sporty-bg bg-dot-pattern text-white pb-nav font-sans overflow-x-hidden",children:[d.jsx(Xi,{mode:"wait",custom:kr(),initial:!1,children:d.jsx(Ki.div,{custom:kr(),variants:jc,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.22,ease:[.25,.46,.45,.94]},children:d.jsx(j.Suspense,{fallback:d.jsx(Sn,{}),children:d.jsxs(zi,{location:a,children:[d.jsx(ye,{path:be(Y.root),element:d.jsx(fc,{})}),d.jsx(ye,{path:be(Y.crewDashboard),element:d.jsx(Oe,{children:d.jsx(pc,{})})}),d.jsx(ye,{path:be(Y.crewRank),element:d.jsx(Oe,{children:d.jsx(yc,{})})}),d.jsx(ye,{path:be(Y.crewRecord),element:d.jsx(Oe,{children:d.jsx(bc,{})})}),d.jsx(ye,{path:be(Y.crewSquad),element:d.jsx(Oe,{children:d.jsx(wc,{})})}),d.jsx(ye,{path:be(Y.crewProfile),element:d.jsx(Oe,{children:d.jsx(xc,{})})}),d.jsx(ye,{path:be(Y.crewMember),element:d.jsx(Oe,{children:d.jsx(gc,{})})}),d.jsx(ye,{path:be(Y.crewAdmin),element:d.jsx(Oe,{children:d.jsx(cc,{})})}),d.jsx(ye,{path:be(Y.groupSelect),element:d.jsx(hc,{})}),d.jsx(ye,{path:be(Y.invite),element:d.jsx(mc,{})}),d.jsx(ye,{path:be(Y.shareRun),element:d.jsx(kc,{})}),d.jsx(ye,{path:be(Y.shareGoal),element:d.jsx(vc,{})})]})})},l)}),d.jsx(Ic,{onOpenReleaseNotes:()=>r(!0)}),d.jsx(Ui,{position:"top-center",toastOptions:{style:{background:"#1C1C1C",border:"1px solid #27272A",color:"#fff",borderRadius:"12px",fontFamily:"Pretendard, sans-serif"}}}),d.jsx(ic,{isOpen:t,onClose:o}),d.jsx(oa,{}),d.jsx(Ra,{})]}):d.jsx(j.Suspense,{fallback:d.jsx(Sn,{}),children:d.jsx(dc,{})})}const Nc=new Ei({defaultOptions:{queries:{staleTime:1e3*60*2,gcTime:1e3*60*10,refetchOnWindowFocus:!1,retry:1}}});function Pc(){return d.jsx(Da,{children:d.jsx(ji,{client:Nc,children:d.jsx(Ta,{children:d.jsx(la,{children:d.jsx(zc,{})})})})})}if("serviceWorker"in navigator){const e=!!navigator.serviceWorker.controller;navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&window.location.reload()})}Yi.createRoot(document.getElementById("root")).render(d.jsx(j.StrictMode,{children:d.jsx(Ti,{children:d.jsx(Pc,{})})}));export{Dt as $,za as A,Oc as B,jd as C,Ed as D,Fc as E,Yc as F,xd as G,sd as H,Wc as I,Qc as J,ed as K,qc as L,fa as M,zr as N,Mc as O,$c as P,rt as Q,Rr as R,ud as S,Jc as T,Hc as U,pa as V,Zc as W,Kc as X,Uc as Y,Ad as Z,Id as _,Na as a,Da as a0,ka as a1,nd as a2,va as a3,ga as a4,Pa as a5,yd as a6,md as a7,gd as a8,Td as a9,Lt as aa,rd as ab,wa as ac,id as ad,Vc as ae,vd as af,Sd as ag,kd as ah,Cd as ai,_d as aj,Nd as ak,Rd as al,Dd as am,ld as an,od as ao,ad as ap,wd as aq,bd as ar,Pd as as,td as at,At as b,lt as c,zd as d,Y as e,Bc as f,Gc as g,Tn as h,cd as i,dd as j,ya as k,fd as l,He as m,ha as n,Nr as o,Tr as p,Ca as q,se as r,pd as s,Rt as t,cn as u,hd as v,Aa as w,xa as x,Ir as y,Xc as z};
