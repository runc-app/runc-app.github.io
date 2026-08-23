let c=null;function w(){return window.Kakao?Promise.resolve():c||(c=new Promise((t,e)=>{const a=document.createElement("script");a.src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js",a.crossOrigin="anonymous",a.onload=()=>t(),a.onerror=()=>{c=null,e(new Error("Kakao SDK 로드 실패"))},document.head.appendChild(a)}),c)}async function p(){const t="d7d9a271a55c37fda2ed03bec993af1e";try{return await w(),window.Kakao.isInitialized()||window.Kakao.init(t),window.Kakao.isInitialized()}catch{return!1}}async function h({crewName:t,description:e,inviteCode:a,crewIconUrl:d}){const i="https://runc-app.github.io",o=`${i}/#/invite/${a}`,r=e?`${e}

초대 코드: ${a}`:`초대 코드: ${a}`;if(await p())try{const s=d??(window.location.protocol==="https:"?`${i}/runc-icon.png`:void 0);return window.Kakao.Share.sendDefault({objectType:"feed",content:{title:`[RUNC] ${t} 크루에 초대합니다!`,description:r,...s&&{imageUrl:s},link:{mobileWebUrl:o,webUrl:o}},buttons:[{title:"RUNC 열기",link:{mobileWebUrl:o,webUrl:o}}]}),"kakao"}catch{}if(navigator.share)try{return await navigator.share({title:`[RUNC] ${t} 크루에 초대합니다!`,text:`${t} 크루에 합류하세요!
${r}`,url:o}),"share"}catch{}return await navigator.clipboard.writeText(`[RUNC] ${t} 크루에 합류하세요!
${r}
${o}`),"clipboard"}async function b({runnerName:t,crewName:e,distance:a,duration:d,pace:i,imageUrl:o}){const r="https://runc-app.github.io",n=`${r}/#/`,s=i?` | ⚡ 페이스: ${i}/km`:"",l=`🏃‍♂️ ${t}님의 ${a}km 러닝 인증!`,k=`⏱️ 시간: ${d}${s}
🏆 크루: ${e}`;if(await p())try{const u=o||(window.location.protocol==="https:"?`${r}/runc-icon.png`:void 0);return window.Kakao.Share.sendDefault({objectType:"feed",content:{title:l,description:k,...u&&{imageUrl:u},link:{mobileWebUrl:n,webUrl:n}},buttons:[{title:"RUNC에서 러닝 보기",link:{mobileWebUrl:n,webUrl:n}}]}),"kakao"}catch{}if(navigator.share)try{return await navigator.share({title:l,text:`${l}
${k}`,url:n}),"share"}catch{}return await navigator.clipboard.writeText(`${l}
${k}
${n}`),"clipboard"}export{h as a,b as s};
