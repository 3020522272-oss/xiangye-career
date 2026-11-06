'use strict';
const KEY='xiangye-career-sample-v4';
const VERSION=4;
const styleNames={L:'分析论证',P:'实践验证',K:'创意探索',H:'协同沟通',O:'组织推进',N:'规范落实'};
const interestNames={R:'实作',I:'研究',A:'艺术',S:'助人',E:'经营',C:'事务'};
const questions=[
 {
  "id": 1,
  "part": 0,
  "context": "给朋友做生日视频，要找去年露营时他穿黄色外套、站在帐篷旁的照片。手机里有几千张照片。",
  "text": "你会用哪种办法找？",
  "options": [
   {
    "key": "L",
    "text": "按露营的月份找，再看那几天的照片"
   },
   {
    "key": "P",
    "text": "打开照片缩略图，一排排找黄色外套"
   },
   {
    "key": "H",
    "text": "在朋友群里描述画面，请大家帮忙找"
   }
  ]
 },
 {
  "id": 2,
  "part": 0,
  "context": "周六要给朋友过生日，餐厅和蛋糕都订好了。下面三件事各缺一个人负责。",
  "text": "你最想接哪一件？",
  "options": [
   {
    "key": "K",
    "text": "用朋友的照片做一段搞笑开场视频"
   },
   {
    "key": "O",
    "text": "通知大家几点到、谁拿蛋糕、谁布置"
   },
   {
    "key": "N",
    "text": "核对蛋糕上的名字、到店时间和人数"
   }
  ]
 },
 {
  "id": 3,
  "part": 0,
  "context": "你和朋友周末摆摊卖柠檬茶。有人想少放糖，有人想多放糖，今天只能做一种甜度。",
  "text": "你更愿意怎么定下来？",
  "options": [
   {
    "key": "L",
    "text": "看上次两种甜度各卖了多少，选卖得多的"
   },
   {
    "key": "P",
    "text": "各做一小杯，请路人试喝，选更受欢迎的"
   },
   {
    "key": "H",
    "text": "让一起摆摊的朋友投票，按多数人的选"
   }
  ]
 },
 {
  "id": 4,
  "part": 1,
  "context": "社区周末有场旧物交换活动，下面三个岗位都有人带你做，每个都只需要一小时。",
  "text": "你更想试哪一个？",
  "options": [
   {
    "key": "I",
    "text": "数一数各摊位的成交量，看哪类旧物最受欢迎"
   },
   {
    "key": "A",
    "text": "用现成的图片和文字，设计一张活动海报"
   },
   {
    "key": "S",
    "text": "教不会用手机的老人拍照、发出交换信息"
   }
  ]
 },
 {
  "id": 5,
  "part": 1,
  "context": "楼下准备办一次旧书交换。下面三件事都有人指导，也都需要一小时左右。",
  "text": "你愿意认领哪一件？",
  "options": [
   {
    "key": "R",
    "text": "用螺丝刀把木板装成放书的小架子"
   },
   {
    "key": "E",
    "text": "向附近店主介绍活动，争取借来桌子"
   },
   {
    "key": "C",
    "text": "对照登记表，核对书名、数量和捐书人"
   }
  ]
 },
 {
  "id": 6,
  "part": 1,
  "context": "朋友想整理刚结束的旅行，照片、花费记录都发给你了。每项任务都能在一小时内完成。",
  "text": "你更想帮哪个忙？",
  "options": [
   {
    "key": "I",
    "text": "比较每天的花费，找出哪一天超支最多"
   },
   {
    "key": "A",
    "text": "选照片、配音乐，剪一段一分钟旅行视频"
   },
   {
    "key": "S",
    "text": "教不会做相册的朋友，把照片放进电子相册"
   }
  ]
 }
];
const groups=[
{id:'research',name:'研究分析',w:{I:.8,C:.2},roles:['数据分析师','行业研究员','科研助理'],color:'#e5ebdf',order:['L','N','K','P','H','O'],context:'整理资料、形成假设和比较证据',task:'选一个感兴趣的问题，收集资料，写一页包含问题、证据和结论的分析报告。'},
{id:'engineering',name:'技术研发',w:{I:.6,R:.4},roles:['软件工程师','硬件研发工程师','自动化工程师'],color:'#e1eaf0',order:['P','L','K','N','O','H'],context:'理解需求、比较技术方案和设计验证步骤',task:'选择一个小需求，用熟悉的工具制作原型，并记录一次测试和改进过程。'},
{id:'creative',name:'创意表达',w:{A:.8,I:.2},roles:['视觉设计师','文案策划','视频编导'],color:'#f3e6dc',order:['K','P','H','L','O','N'],context:'构思主题、制作作品和迭代表达',task:'围绕同一主题制作两版文案、海报或短视频，向三个人收集反馈。'},
{id:'business',name:'商业拓展',w:{E:.8,S:.2},roles:['销售顾问','商务拓展','渠道经理'],color:'#efe6d6',order:['H','O','L','K','P','N'],context:'了解客户需求、准备合作方案和推进沟通',task:'为一个熟悉的产品准备三分钟介绍，向朋友演示，记录他们提出的问题。'},
{id:'helping',name:'教育助人',w:{S:.8,I:.2},roles:['教师','培训师','社会工作者'],color:'#e7eadb',order:['H','P','K','O','L','N'],context:'理解服务对象、解释内容和安排练习',task:'把一个熟悉的技能教给别人，观察对方哪里需要帮助，再调整讲解方式。'},
{id:'coordination',name:'组织协调',w:{E:.5,S:.3,C:.2},roles:['项目经理','产品经理（偏协调）','活动统筹'],color:'#e9e4f0',order:['O','H','N','L','K','P'],context:'汇集意见、协调取舍和安排协作节点',task:'组织一次小活动，明确目标、人员分工和时间安排，结束后进行复盘。'},
{id:'operations',name:'运营交付',w:{C:.6,E:.2,S:.2},roles:['电商运营','供应链运营','项目交付专员'],color:'#e2ece7',order:['O','N','P','H','L','K'],context:'落实流程、跟进任务和根据反馈调整安排',task:'为一个小项目建立任务清单，跟进一周，找出一个可以改进的流程。'},
{id:'compliance',name:'规范审查',w:{C:.8,I:.2},roles:['会计','审计助理','合规专员','质量检验员'],color:'#e7e9ef',order:['N','L','O','P','H','K'],context:'核对材料、执行规则和记录判断依据',task:'用明确的检查清单核对资料或账目，记录发现的问题及核验依据。'},
{id:'practical',name:'实务技术',w:{R:.8,I:.2},roles:['设备维修技师','现场实施工程师','实验技术员'],color:'#eee7da',order:['P','N','L','O','K','H'],context:'理解操作要求、安排实施步骤和处理现场反馈',task:'在指导和安全条件下完成一次简单装配或工具操作，记录步骤与遇到的问题。'}
];

const TOTAL=questions.length;
const PART_SIZE=3;
const exposures=Object.fromEntries([0,1].map(part=>[part,Object.fromEntries(Object.keys(part===0?styleNames:interestNames).map(key=>[key,questions.filter(q=>q.part===part).flatMap(q=>q.options).filter(o=>o.key===key).length]))]));
function score(answers){
 const styleCounts=Object.fromEntries(Object.keys(styleNames).map(k=>[k,0]));
 const interestCounts=Object.fromEntries(Object.keys(interestNames).map(k=>[k,0]));
 for(const q of questions){const a=answers[q.id];if(Number.isInteger(a)&&a>=0&&a<3)(q.part===0?styleCounts:interestCounts)[q.options[a].key]++}
 const styles=Object.fromEntries(Object.entries(styleCounts).map(([k,n])=>[k,exposures[0][k]?n/exposures[0][k]*100:0]));
 const interests=Object.fromEntries(Object.entries(interestCounts).map(([k,n])=>[k,exposures[1][k]?n/exposures[1][k]*100:0]));
 const careers=groups.map(g=>({...g,score:Object.entries(g.w).reduce((sum,[k,w])=>sum+interests[k]*w,0)})).sort((a,b)=>b.score-a.score);
 return{styles,interests,styleCounts,interestCounts,careers};
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const n=new Uint32Array(1);crypto.getRandomValues(n);const j=Math.floor(n[0]/4294967296*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function fresh(){return{version:VERSION,answers:{},order:[1,2,3,...shuffle([4,5,6])],optionOrder:Object.fromEntries(questions.map(q=>[q.id,shuffle([0,1,2])])),index:0,complete:false,seen:[]}}
function valid(s){return !!(s&&s.version===VERSION&&s.answers&&typeof s.answers==='object'&&!Array.isArray(s.answers)&&Array.isArray(s.order)&&s.order.length===TOTAL&&new Set(s.order).size===TOTAL&&s.order.every((q,i)=>Number.isInteger(q)&&q>=1&&q<=TOTAL&&(i>=PART_SIZE?q>PART_SIZE:q===i+1))&&s.optionOrder&&questions.every(q=>Array.isArray(s.optionOrder[q.id])&&s.optionOrder[q.id].length===3&&[...s.optionOrder[q.id]].sort().join(',')==='0,1,2')&&Number.isInteger(s.index)&&s.index>=0&&s.index<TOTAL&&typeof s.complete==='boolean'&&Array.isArray(s.seen)&&s.seen.every(t=>t===0||t===1)&&Object.entries(s.answers).every(([k,v])=>String(+k)===k&&+k>=1&&+k<=TOTAL&&Number.isInteger(v)&&v>=0&&v<3)&&(!s.complete||questions.every(q=>Number.isInteger(s.answers[q.id]))));}
// Short sample: normalized exposure is used only for illustrative directions.
function topDirections(result){return [...result.careers].sort((a,b)=>{if(Math.abs(b.score-a.score)>1e-8)return b.score-a.score;const affinity=g=>result.styles[g.order[0]]*.6+result.styles[g.order[1]]*.4;return affinity(b)-affinity(a)||groups.findIndex(g=>g.id===a.id)-groups.findIndex(g=>g.id===b.id)}).slice(0,3)}
