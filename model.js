'use strict';
const KEY='xiangye-career-sample-v5';
const VERSION=5;
const styleNames={L:'分析论证',P:'实践验证',K:'创意探索',H:'协同沟通',O:'组织推进',N:'规范落实'};
const interestNames={R:'实作',I:'研究',A:'艺术',S:'助人',E:'经营',C:'事务'};
const questions=[
 {
  "id": 1,
  "part": 0,
  "context": "奶茶店周末排队经常超过20分钟，店长想缩短顾客的等待时间，请你参与改进。",
  "text": "如果只能负责一项，你选什么？",
  "options": [
   {
    "key": "L",
    "text": "统计点单、制作、取餐的用时，找最慢环节"
   },
   {
    "key": "P",
    "text": "把点单和取餐分成两队，试一天看效果"
   },
   {
    "key": "H",
    "text": "和顾客、店员聊一聊，记录他们遇到的麻烦"
   }
  ]
 },
 {
  "id": 2,
  "part": 0,
  "context": "一款记账软件要给客户演示15分钟，功能和价格已确定，团队现在需要分工。",
  "text": "你最愿意负责哪一项？",
  "options": [
   {
    "key": "K",
    "text": "用“记一周开销”的故事串起演示"
   },
   {
    "key": "O",
    "text": "安排每个人讲哪段、讲多久、何时上场"
   },
   {
    "key": "N",
    "text": "核对展示的功能、报价和优惠条件"
   }
  ]
 },
 {
  "id": 3,
  "part": 0,
  "context": "你要参与一个为期一个月的项目。下面三种工作安排，收入和工作量相同。",
  "text": "哪种安排让你更想投入？",
  "options": [
   {
    "key": "O",
    "text": "每周任务提前定好，按计划推进"
   },
   {
    "key": "P",
    "text": "每天做一个小版本，反复试用和修改"
   },
   {
    "key": "H",
    "text": "每天与用户交流，根据反馈调整任务"
   }
  ]
 },
 {
  "id": 4,
  "part": 1,
  "context": "有机会跟着专业人员体验半天工作，下面三项都有人指导，报酬相同。",
  "text": "你最想体验哪项工作？",
  "options": [
   {
    "key": "I",
    "text": "分析网店订单，找出销量下降的原因"
   },
   {
    "key": "A",
    "text": "为一款新饮料设计广告海报"
   },
   {
    "key": "S",
    "text": "带新员工练习，帮助他们掌握操作流程"
   }
  ]
 },
 {
  "id": 5,
  "part": 1,
  "context": "下面三份工作都提供入门培训，工作时间和收入也相同。",
  "text": "你更愿意尝试哪一份？",
  "options": [
   {
    "key": "R",
    "text": "跟技术人员排查一台不能启动的设备"
   },
   {
    "key": "E",
    "text": "向商家介绍合作方案，争取他们参与"
   },
   {
    "key": "C",
    "text": "核对订单和发货清单，找出错发漏发"
   }
  ]
 },
 {
  "id": 6,
  "part": 1,
  "context": "下面三项工作都持续一个月，每天两小时。假设你都能学会，收入也一样。",
  "text": "哪项工作让你更愿意持续做？",
  "options": [
   {
    "key": "I",
    "text": "分析用户反馈，找出产品最常见的问题"
   },
   {
    "key": "A",
    "text": "为同一品牌持续写短视频脚本"
   },
   {
    "key": "S",
    "text": "给新员工讲解流程，陪他们练到熟悉"
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
