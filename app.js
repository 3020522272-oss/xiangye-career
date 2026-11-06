'use strict';
let storageOK=true,state=null,page='home',pending=null,lastSelection=-Infinity;
try{const s=JSON.parse(localStorage.getItem(KEY));if(valid(s))state=s}catch{}
const app=document.getElementById('app'),modal=document.getElementById('modal');
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));localStorage.removeItem('xiangye-career-v1');localStorage.removeItem('xiangye-career-v2')}catch{if(storageOK){storageOK=false;toast('浏览器无法保存进度，请在本页完成测评')}}}
function dialog(title,body,button='知道了',action=null){document.getElementById('modal-content').innerHTML=`<h2 id="dialog-title">${title}</h2>${body}<button class="primary" id="dialog-ok">${button}</button>`;if(!modal.open)modal.showModal();document.getElementById('dialog-ok').onclick=()=>{modal.close();if(action)action()}}
function toast(msg){const el=document.getElementById('toast');el.className='toast';el.textContent=msg;clearTimeout(toast.timer);toast.timer=setTimeout(()=>{el.className='';el.textContent=''},2600)}
function home(){clearTimeout(pending);page='home';const count=state?Object.keys(state.answers).length:0;app.innerHTML=`<section class="home"><div class="home-art" aria-hidden="true"><img src="assets/creative.svg" alt=""><img src="assets/research.svg" alt=""><img src="assets/helping.svg" alt=""></div><h1>工作里的你，<br>是哪一派？</h1><p class="intro">40个小剧场，发现让你心动的职业。</p><button class="primary" id="start">${state?(state.complete?'看看我的结果':'接着玩'):'开始探索'} <span aria-hidden="true">↗</span></button><p class="meta">40 题 · 约 8 分钟</p>${state?`<div class="resume-line"><span>${state.complete?'上次的结果还在':`上次玩到第 ${Math.min(count+1,40)} 题`}</span><button class="text-link" id="restart">重新开始</button></div>`:''}</section>`;document.getElementById('start').onclick=()=>{if(!state){state=fresh();save()}if(state.complete)results();else question(true)};const restartButton=document.getElementById('restart');if(restartButton)restartButton.onclick=restart;}
function restart(){clearTimeout(pending);document.getElementById('modal-content').innerHTML='<h2 id="dialog-title">开启一次新的探索？</h2><p>这会清除当前浏览器中的答案与报告。</p><div class="dialog-actions"><button class="secondary" id="cancel-reset">保留记录</button><button class="primary" id="confirm-reset">重新开始</button></div>';modal.showModal();document.getElementById('cancel-reset').onclick=()=>modal.close();document.getElementById('confirm-reset').onclick=()=>{modal.close();state=fresh();save();question(true)}}
function showGuide(part){dialog(`第${part+1}部分 / 共2部分 · ${part===0?'你的做事风格':'心动小任务'}`,part===0?'<p>把自己放进小剧场，选最像你的做法。三个选项都说得通，跟着直觉就好。</p><p>选完自动下一题，随时可以返回修改。</p>':'<p>假设时间和学习支持差不多，选你最想试的一项。不用考虑现在会不会。</p>','出发')}
function question(showIntro=false){
 clearTimeout(pending);page='question';const id=state.order[state.index],q=questions[id-1],part=q.part,partIndex=part===0?state.index+1:state.index-23;
 app.innerHTML=`<section class="question-shell fade"><div class="progress-top"><span>第${part+1}部分 / 共2部分 · ${part===0?'做事风格':'心动任务'}</span><span>${state.index+1} / 40</span></div><div class="track"><i style="width:${state.index/40*100}%"></i></div><div class="question-head"><span class="badge">${part===0?'选一个最像你的':'选一个最心动的'}</span><button class="help" id="help" aria-label="查看本部分作答说明">?</button></div><h1 id="question-title" tabindex="-1">${q.text}</h1><div class="answers" role="group" aria-labelledby="question-title">${state.optionOrder[id].map((choice,i)=>`<button class="answer ${state.answers[id]===choice?'selected':''}" data-choice="${choice}" data-letter="${'ABC'[i]}" aria-pressed="${state.answers[id]===choice}"><span class="letter" aria-hidden="true">${'ABC'[i]}</span><span>${q.options[choice].text}</span></button>`).join('')}</div></section><div class="q-actions"><div><button class="quiet" id="prev">${state.index?'← 上一题':'返回首页'}</button></div></div>`;
 document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{
  if(modal.open||performance.now()-lastSelection<450||btn.disabled)return;
  lastSelection=performance.now();state.answers[id]=Number(btn.dataset.choice);state.complete=false;save();
  document.querySelectorAll('[data-choice]').forEach(b=>{b.classList.toggle('selected',b===btn);b.setAttribute('aria-pressed',String(b===btn));b.disabled=true});document.getElementById('prev').disabled=true;
  pending=setTimeout(()=>{if(page!=='question')return;if(state.index===39){question();finish()}else{state.index++;save();question(true);window.scrollTo(0,0)}},220);
 });
 document.getElementById('prev').onclick=()=>{if(state.index){state.index--;save();question()}else home()};
 document.getElementById('help').onclick=()=>showGuide(part);document.getElementById('question-title').focus({preventScroll:true});
 if(showIntro&&!state.seen.includes(part)){state.seen.push(part);save();showGuide(part)}
}
function finish(){
 const missing=state.order.findIndex(id=>!Number.isInteger(state.answers[id]));if(missing!==-1){state.index=missing;save();question(true);return}
 document.getElementById('modal-content').innerHTML='<h2 id="dialog-title">40个小剧场，通关！</h2><p>看看哪3个职业方向值得你心动？</p><div class="dialog-actions"><button class="secondary" id="review">返回检查</button><button class="primary" id="finish">查看结果</button></div>';modal.showModal();
 document.getElementById('review').onclick=()=>{modal.close();state.index=0;save();question()};document.getElementById('finish').onclick=()=>{modal.close();state.complete=true;save();results();window.scrollTo(0,0)};
}
function strength(g,styles){
 const max=Math.max(...Object.values(styles)),min=Math.min(...Object.values(styles));
 if(max-min<1e-8)return '你的做事方式较为均衡，遇到不同任务时，可以灵活切换方法。';
 const chosen=Object.keys(styleNames).filter(k=>styles[k]>100/3+1e-8).sort((a,b)=>styles[b]-styles[a]||g.order.indexOf(a)-g.order.indexOf(b)).slice(0,2);
 const phrases={L:'用线索和依据理清问题',P:'把点子变成小实验',K:'换个角度找新点子',H:'把大家的想法串起来',O:'把事情安排得有条不紊',N:'留意容易漏掉的细节'};
 const contexts={research:'面对研究问题',engineering:'打磨技术方案',creative:'创作作品',business:'准备合作方案',helping:'帮助别人学习和成长',coordination:'与团队协作',operations:'推进日常任务',compliance:'核验材料和要求',practical:'解决实际操作问题'};
 return `你偏爱${chosen.map(k=>phrases[k]).join('、')}。${contexts[g.id]}时，这些习惯可能成为你的助力。`;
}
function results(){
 clearTimeout(pending);page='results';const r=score(state.answers),visible=topDirections(r);
 app.innerHTML=`<section class="result-page"><div class="result-top"><p class="eyebrow">你的职业灵感</p><h1>这3个方向，<br class="mobile-break">值得你靠近。</h1></div><div class="career-grid">${visible.map(g=>`<article class="career"><div class="career-art" style="--wash:${g.color}"><img src="assets/${g.id}.svg" alt="${g.name}职业图标"></div><div class="career-body"><h2>${g.name}</h2><p class="roles">${g.roles.slice(0,3).join(' · ')}</p><p class="strength">${strength(g,r.styles)}</p></div></article>`).join('')}</div><div class="result-tools"><button class="primary" id="share">邀请朋友测一测 ↗</button><button class="secondary" id="download">保存结果</button></div><div class="result-links"><button class="text-link" id="edit">修改答案</button><button class="text-link" id="restart">再玩一次</button></div><p class="result-note">给职业探索一点灵感，也记得用真实体验验证。</p></section>`;
 document.getElementById('edit').onclick=()=>{state.index=0;save();question()};document.getElementById('restart').onclick=restart;document.getElementById('download').onclick=()=>downloadReport(r);document.getElementById('share').onclick=share;
}
function reportText(r){return ['向野 · 你的3个职业灵感','',...topDirections(r).map(g=>`${g.name}\n职业示例：${g.roles.slice(0,3).join('、')}\n你的潜在优势：${strength(g,r.styles)}\n`),'这是一份职业探索灵感，不代表能力或职业成功的保证。原创简版尚未完成信效度验证。'].join('\n')}
function downloadReport(r){const url=URL.createObjectURL(new Blob(['\uFEFF'+reportText(r)],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='向野-职业灵感.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('结果已生成')}
async function share(){const url=location.origin+location.pathname;try{if(navigator.share)await navigator.share({title:'向野 · 职业探索',text:'40个小剧场，看看工作里的你是哪一派。',url});else if(navigator.clipboard){await navigator.clipboard.writeText(url);toast('测评链接已复制')}else dialog('分享测评','<p>复制浏览器地址栏中的网址，邀请朋友开启他们自己的测评。</p>')}catch(e){if(e.name!=='AbortError')toast('请复制浏览器地址栏中的网址')}}
document.getElementById('about').onclick=()=>dialog('一点小说明','<p>40道情境选择，结合做事风格与职业兴趣，提供3个值得探索的方向。</p><p>这是原创探索简版，尚未完成信效度验证，不是官方MBTI测评，也不用于招聘筛选。结果不能代替能力评估和实际工作体验。</p><p>答案仅保存在当前浏览器，不上传至服务器。新版题目有更新，上个版本的答案不会混用。托管服务会记录普通访问日志。</p><details><summary>结果是怎么来的？</summary><p>每题选项对应一种工作方式或兴趣。六种工作方式各出现12次，六类职业兴趣各出现8次。先按职业兴趣选出方向，同分时参考做事风格；完全同分时按固定职业群顺序呈现。</p><p>页面和保存的结果只展示3个方向，不展示分数或比例。</p></details>');
document.querySelector('.brand').onclick=e=>{e.preventDefault();home();scrollTo(0,0)};
document.addEventListener('keydown',e=>{if(page!=='question'||modal.open||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;const key=e.key.toUpperCase();if('ABC'.includes(key)&&key.length===1){e.preventDefault();document.querySelector(`[data-letter="${key}"]`)?.click()}});
home();
