'use strict';
let storageOK=true,state=null,page='home',pending=null,lastSelection=-Infinity;
try{const s=JSON.parse(localStorage.getItem(KEY));if(valid(s))state=s}catch{}
const app=document.getElementById('app'),modal=document.getElementById('modal');
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));localStorage.removeItem('xiangye-career-v1');localStorage.removeItem('xiangye-career-v2')}catch{if(storageOK){storageOK=false;toast('浏览器无法保存进度，请在本页完成测评')}}}
function dialog(title,body,button='知道了',action=null){document.getElementById('modal-content').innerHTML=`<h2 id="dialog-title">${title}</h2>${body}<button class="primary" id="dialog-ok">${button}</button>`;if(!modal.open)modal.showModal();document.getElementById('dialog-ok').onclick=()=>{modal.close();if(action)action()}}
function toast(msg){const el=document.getElementById('toast');el.className='toast';el.textContent=msg;clearTimeout(toast.timer);toast.timer=setTimeout(()=>{el.className='';el.textContent=''},2600)}
function home(){clearTimeout(pending);page='home';const count=state?Object.keys(state.answers).length:0;app.innerHTML=`<section class="home"><div class="home-art" aria-hidden="true"><img src="assets/creative.svg" alt=""><img src="assets/research.svg" alt=""><img src="assets/helping.svg" alt=""></div><h1>工作里的你，<br>是哪一派？</h1><p class="intro">每部分3题，先试试做起来顺不顺。</p><button class="primary" id="start">${state?(state.complete?'看看我的结果':'接着玩'):'开始探索'} <span aria-hidden="true">↗</span></button><p class="meta">6题体验版 · 约2分钟</p>${state?`<div class="resume-line"><span>${state.complete?'上次的结果还在':`上次玩到第 ${Math.min(count+1,TOTAL)} 题`}</span><button class="text-link" id="restart">重新开始</button></div>`:''}</section>`;document.getElementById('start').onclick=()=>{if(!state){state=fresh();save()}if(state.complete)results();else question(true)};const restartButton=document.getElementById('restart');if(restartButton)restartButton.onclick=restart;}
function restart(){clearTimeout(pending);document.getElementById('modal-content').innerHTML='<h2 id="dialog-title">开启一次新的探索？</h2><p>这会清除当前浏览器中的答案与报告。</p><div class="dialog-actions"><button class="secondary" id="cancel-reset">保留记录</button><button class="primary" id="confirm-reset">重新开始</button></div>';modal.showModal();document.getElementById('cancel-reset').onclick=()=>modal.close();document.getElementById('confirm-reset').onclick=()=>{modal.close();state=fresh();save();question(true)}}
function showGuide(part){dialog(`第${part+1}部分 / 共2部分 · ${part===0?'你的做事风格':'心动小任务'}`,part===0?'<p>把自己放进小剧场，选最像你的做法。三个选项都说得通，跟着直觉就好。</p><p>这一部分共3题，选完自动下一题，可以返回修改。</p>':'<p>假设时间和学习支持差不多，选你最想试的一项。不用考虑现在会不会。</p>','出发')}
function question(showIntro=false){
 clearTimeout(pending);page='question';const id=state.order[state.index],q=questions[id-1],part=q.part,partIndex=state.index%PART_SIZE+1;
 app.innerHTML=`<section class="question-shell fade"><div class="progress-top"><span>第${part+1}部分 / 共2部分 · ${part===0?'做事风格':'心动任务'}</span><span>${state.index+1} / ${TOTAL}</span></div><div class="track"><i style="width:${state.index/TOTAL*100}%"></i></div><div class="question-head"><span class="badge">${part===0?'选一个最像你的':'选一个最心动的'}</span><button class="help" id="help" aria-label="查看本部分作答说明">?</button></div><p class="question-context" id="question-context">${q.context}</p><h1 id="question-title" tabindex="-1" aria-describedby="question-context">${q.text}</h1><div class="answers" role="group" aria-labelledby="question-title" aria-describedby="question-context">${state.optionOrder[id].map((choice,i)=>`<button class="answer ${state.answers[id]===choice?'selected':''}" data-choice="${choice}" data-letter="${'ABC'[i]}" aria-pressed="${state.answers[id]===choice}"><span class="letter" aria-hidden="true">${'ABC'[i]}</span><span>${q.options[choice].text}</span></button>`).join('')}</div></section><div class="q-actions"><div><button class="quiet" id="prev">${state.index?'← 上一题':'返回首页'}</button></div></div>`;
 document.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{
  if(modal.open||performance.now()-lastSelection<450||btn.disabled)return;
  lastSelection=performance.now();state.answers[id]=Number(btn.dataset.choice);state.complete=false;save();
  document.querySelectorAll('[data-choice]').forEach(b=>{b.classList.toggle('selected',b===btn);b.setAttribute('aria-pressed',String(b===btn));b.disabled=true});document.getElementById('prev').disabled=true;
  pending=setTimeout(()=>{if(page!=='question')return;if(state.index===TOTAL-1){question();finish()}else{state.index++;save();question(true);window.scrollTo(0,0)}},220);
 });
 document.getElementById('prev').onclick=()=>{if(state.index){state.index--;save();question()}else home()};
 document.getElementById('help').onclick=()=>showGuide(part);document.getElementById('question-title').focus({preventScroll:true});
 if(showIntro&&!state.seen.includes(part)){state.seen.push(part);save();showGuide(part)}
}
function finish(){
 const missing=state.order.findIndex(id=>!Number.isInteger(state.answers[id]));if(missing!==-1){state.index=missing;save();question(true);return}
 document.getElementById('modal-content').innerHTML='<h2 id="dialog-title">6题体验完成</h2><p>要看职业灵感的展示示例吗？这只是题目体验，不代表完整测评结果。</p><div class="dialog-actions"><button class="secondary" id="review">返回检查</button><button class="primary" id="finish">查看结果</button></div>';modal.showModal();
 document.getElementById('review').onclick=()=>{modal.close();state.index=0;save();question()};document.getElementById('finish').onclick=()=>{modal.close();state.complete=true;save();results();window.scrollTo(0,0)};
}
function strength(g,styles){
 const r=score(state.answers),chosen=Object.keys(styleNames).filter(k=>r.styleCounts[k]>0).sort((a,b)=>r.styleCounts[b]-r.styleCounts[a]||g.order.indexOf(a)-g.order.indexOf(b)).slice(0,2);
 const phrases={L:'按线索查找、用记录作判断',P:'直接操作、看实际效果',K:'动手制作有趣的内容',H:'请人帮忙、共同决定',O:'安排谁做什么、几点到',N:'逐项核对信息'};
 return `这几题里，你选过${chosen.map(k=>phrases[k]).join('、')}的做法。这里只演示这些选择怎样呈现在结果中。`;
}
function results(){
 clearTimeout(pending);page='results';const r=score(state.answers),visible=topDirections(r);
 app.innerHTML=`<section class="result-page"><div class="result-top"><p class="eyebrow">6题体验 · 结果展示示例</p><h1>看看职业灵感，<br class="mobile-break">会怎样呈现。</h1></div><div class="career-grid">${visible.map(g=>`<article class="career"><div class="career-art" style="--wash:${g.color}"><img src="assets/${g.id}.svg" alt="${g.name}职业图标"></div><div class="career-body"><h2>${g.name}</h2><p class="roles">${g.roles.slice(0,3).join(' · ')}</p><p class="strength">${strength(g,r.styles)}</p></div></article>`).join('')}</div><div class="result-tools"><button class="primary" id="share">邀请朋友测一测 ↗</button><button class="secondary" id="download">保存结果</button></div><div class="result-links"><button class="text-link" id="edit">修改答案</button><button class="text-link" id="restart">再玩一次</button></div><p class="result-note">这6题只用于体验题目，不足以形成职业结论。</p></section>`;
 document.getElementById('edit').onclick=()=>{state.index=0;save();question()};document.getElementById('restart').onclick=restart;document.getElementById('download').onclick=()=>downloadReport(r);document.getElementById('share').onclick=share;
}
function reportText(r){return ['向野 · 6题体验结果展示示例','',...topDirections(r).map(g=>`${g.name}\n职业示例：${g.roles.slice(0,3).join('、')}\n选项解读示例：${strength(g,r.styles)}\n`),'这6题只用于体验题目，职业方向和选项解读仅用于展示结果样式，不能用作职业结论。'].join('\n')}
function downloadReport(r){const url=URL.createObjectURL(new Blob(['\uFEFF'+reportText(r)],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='向野-职业灵感.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('结果已生成')}
async function share(){const url=location.origin+location.pathname;try{if(navigator.share)await navigator.share({title:'向野 · 职业探索',text:'每部分3题，试试更具体的职业探索题目。',url});else if(navigator.clipboard){await navigator.clipboard.writeText(url);toast('测评链接已复制')}else dialog('分享测评','<p>复制浏览器地址栏中的网址，邀请朋友开启他们自己的测评。</p>')}catch(e){if(e.name!=='AbortError')toast('请复制浏览器地址栏中的网址')}}
document.getElementById('about').onclick=()=>dialog('关于6题体验版','<p>每部分3题，用于查看题目和选项是否具体、易懂。完成后可查看3个职业方向的展示示例，不能据此判断职业适配或性格。</p><p>题目按“具体原因＋明确目标＋三种具体行动”编写。兴趣任务交代时间和指导条件，不要求已有技能。</p><p>示例仍按选项对应的类别计算，并按本组实际出现次数归一化。题量很少、覆盖不均衡，结果不能与原40题版比较，也不是经过验证的测评。</p><p>答案仅保存在当前浏览器，不上传服务器。本体验版与之前版本分开保存。</p>');
document.querySelector('.brand').onclick=e=>{e.preventDefault();home();scrollTo(0,0)};
document.addEventListener('keydown',e=>{if(page!=='question'||modal.open||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;const key=e.key.toUpperCase();if('ABC'.includes(key)&&key.length===1){e.preventDefault();document.querySelector(`[data-letter="${key}"]`)?.click()}});
home();
