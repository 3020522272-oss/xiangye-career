'use strict';
const KEY='xiangye-career-full-v6';
const VERSION=6;
const styleNames={L:'分析论证',P:'实践验证',K:'创意探索',H:'协同沟通',O:'组织推进',N:'规范落实'};
const interestNames={R:'实作',I:'研究',A:'艺术',S:'助人',E:'经营',C:'事务'};
const questions=[
 {
  "id": 1,
  "part": 0,
  "domain": "工作",
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
  "domain": "学习",
  "context": "学习小组准备一个月后的考试，大家希望你认领一项任务。",
  "text": "你更愿意负责哪项？",
  "options": [
   {
    "key": "L",
    "text": "分析大家的错题，找出最容易混淆的知识点"
   },
   {
    "key": "P",
    "text": "带大家做模拟题，在练习中改进解题方法"
   },
   {
    "key": "O",
    "text": "安排每周复习内容，跟进大家的完成情况"
   }
  ]
 },
 {
  "id": 3,
  "part": 0,
  "domain": "生活",
  "context": "合租房最近电费比平时多了不少，室友们准备一起查找原因。",
  "text": "下面三项任务，你愿意接哪项？",
  "options": [
   {
    "key": "L",
    "text": "比较近几个月的用电量，找出变化最大的时段"
   },
   {
    "key": "P",
    "text": "分别测一测常用电器，看看各自耗电多少"
   },
   {
    "key": "N",
    "text": "核对电表读数、收费单价和账单是否一致"
   }
  ]
 },
 {
  "id": 4,
  "part": 0,
  "domain": "工作",
  "context": "团队要改进一款记账软件，目标是让第一次使用的人更快上手。",
  "text": "你更想参与哪项工作？",
  "options": [
   {
    "key": "L",
    "text": "分析新用户在哪个页面退出，找出集中出现的问题"
   },
   {
    "key": "K",
    "text": "设计一种新的首页布局，让记账入口更醒目"
   },
   {
    "key": "H",
    "text": "请新用户讲讲使用经历，了解他们哪里没看懂"
   }
  ]
 },
 {
  "id": 5,
  "part": 0,
  "domain": "学习",
  "context": "读书小组要办一场历史主题分享，资料已经收集好了。",
  "text": "你最愿意负责哪一块？",
  "options": [
   {
    "key": "L",
    "text": "比较不同史料，梳理哪些观点有证据支持"
   },
   {
    "key": "K",
    "text": "把人物关系画成一张容易看懂的故事地图"
   },
   {
    "key": "O",
    "text": "安排分享顺序、发言时间和现场分工"
   }
  ]
 },
 {
  "id": 6,
  "part": 0,
  "domain": "家庭",
  "context": "家人准备把长辈的口述经历做成一本家庭纪念册，录音和老照片都已备齐。",
  "text": "你更想负责哪项？",
  "options": [
   {
    "key": "L",
    "text": "对照录音和已有资料，梳理事情的来龙去脉"
   },
   {
    "key": "K",
    "text": "把经历写成有画面感的小故事，设计章节主题"
   },
   {
    "key": "N",
    "text": "逐页核对姓名、年份和照片说明是否准确"
   }
  ]
 },
 {
  "id": 7,
  "part": 0,
  "domain": "家庭",
  "context": "家里准备一次三天的旅行，几条路线都在预算内，大家约定分工筹备。",
  "text": "你愿意承担哪项职责？",
  "options": [
   {
    "key": "L",
    "text": "比较路线的交通时间、住宿位置和游玩内容"
   },
   {
    "key": "H",
    "text": "和家人分别聊聊，整理大家最在意的安排"
   },
   {
    "key": "O",
    "text": "负责订票订房，把出发时间和行程衔接好"
   }
  ]
 },
 {
  "id": 8,
  "part": 0,
  "domain": "学习",
  "context": "学校要向乡村阅读室捐一批图书，你参加了筹备小组。",
  "text": "你更愿意负责哪项？",
  "options": [
   {
    "key": "L",
    "text": "分析现有书目和借阅记录，列出缺少的图书种类"
   },
   {
    "key": "H",
    "text": "和当地老师、学生交流，了解他们想读什么书"
   },
   {
    "key": "N",
    "text": "按接收要求核对图书版本、品相和登记信息"
   }
  ]
 },
 {
  "id": 9,
  "part": 0,
  "domain": "工作",
  "context": "网店最近退货增多，团队要分工处理一批售后订单。",
  "text": "哪项工作更合你的心意？",
  "options": [
   {
    "key": "L",
    "text": "整理退货原因，找出最常出现的产品问题"
   },
   {
    "key": "O",
    "text": "安排处理顺序和负责人，跟进每批订单进度"
   },
   {
    "key": "N",
    "text": "按售后规则核对订单、退款金额和凭证"
   }
  ]
 },
 {
  "id": 10,
  "part": 0,
  "domain": "学习",
  "context": "学习小组要帮助新同学掌握一款演示文稿软件，准备分工做教学。",
  "text": "你更想采用哪种教学方式？",
  "options": [
   {
    "key": "P",
    "text": "带着大家做一页幻灯片，边操作边修改"
   },
   {
    "key": "K",
    "text": "设计一个改造丑幻灯片的挑战，让大家尝试"
   },
   {
    "key": "H",
    "text": "让同学说出卡住的地方，逐个讨论怎么解决"
   }
  ]
 },
 {
  "id": 11,
  "part": 0,
  "domain": "生活",
  "context": "社区要办一场老街照片展，照片已征集到，现在需要志愿者布展。",
  "text": "你更愿意认领哪项？",
  "options": [
   {
    "key": "P",
    "text": "动手安装展架、调整灯光，试出合适的摆放位置"
   },
   {
    "key": "K",
    "text": "设计展览主题和照片排版，让故事更有吸引力"
   },
   {
    "key": "O",
    "text": "安排布展分工和时间，协调场地与物料到位"
   }
  ]
 },
 {
  "id": 12,
  "part": 0,
  "domain": "家庭",
  "context": "家人想把一批纸质老照片做成电子纪念册，扫描工具和照片都准备好了。",
  "text": "你更想负责哪一部分？",
  "options": [
   {
    "key": "P",
    "text": "试用几种扫描设置，做出清晰的电子照片"
   },
   {
    "key": "K",
    "text": "设计纪念册的封面、配色和每页的样式"
   },
   {
    "key": "N",
    "text": "核对照片上的人物、拍摄年份和文字说明"
   }
  ]
 },
 {
  "id": 13,
  "part": 0,
  "domain": "工作",
  "context": "团队准备把新的报销工具推给同事使用，现在有三项工作需要认领。",
  "text": "你愿意负责哪项？",
  "options": [
   {
    "key": "P",
    "text": "找几张真实票据试填，记录哪里需要修改"
   },
   {
    "key": "H",
    "text": "和各部门同事交流，了解他们报销时的困扰"
   },
   {
    "key": "O",
    "text": "安排各部门的启用时间，跟进培训与切换进度"
   }
  ]
 },
 {
  "id": 14,
  "part": 0,
  "domain": "生活",
  "context": "社区准备教居民用手机预约挂号，你加入了志愿者小组。",
  "text": "你更想负责哪项工作？",
  "options": [
   {
    "key": "P",
    "text": "用演示账号把预约流程走一遍，找出操作难点"
   },
   {
    "key": "H",
    "text": "询问居民最困惑的地方，安排针对性的答疑"
   },
   {
    "key": "N",
    "text": "核对教学单里的入口、步骤和注意事项是否准确"
   }
  ]
 },
 {
  "id": 15,
  "part": 0,
  "domain": "学习",
  "context": "实验课要举办一次公开演示，老师已确定实验方案，大家正在分工准备。",
  "text": "你更愿意接哪项任务？",
  "options": [
   {
    "key": "P",
    "text": "组装和调试演示装置，反复试到能稳定运行"
   },
   {
    "key": "O",
    "text": "安排准备进度、人员轮班和每场演示的时间"
   },
   {
    "key": "N",
    "text": "按老师给的清单检查器材、材料和操作要求"
   }
  ]
 },
 {
  "id": 16,
  "part": 0,
  "domain": "家庭",
  "context": "分散在不同城市的家人准备办一场线上团聚，大家希望一起做得有意思些。",
  "text": "你更想负责哪项？",
  "options": [
   {
    "key": "K",
    "text": "设计家庭问答小游戏和有趣的开场短片"
   },
   {
    "key": "H",
    "text": "联系家人，了解大家愿意分享的故事和话题"
   },
   {
    "key": "O",
    "text": "确定参加时间，安排节目顺序和发言时长"
   }
  ]
 },
 {
  "id": 17,
  "part": 0,
  "domain": "生活",
  "context": "你参加的电影社群要办一场公开分享，选片和场地都已确定。",
  "text": "你更愿意负责哪一块？",
  "options": [
   {
    "key": "K",
    "text": "设计活动海报和开场介绍，吸引更多人来"
   },
   {
    "key": "H",
    "text": "带领映后讨论，让参与者交流不同的观影感受"
   },
   {
    "key": "N",
    "text": "核对介绍材料中的片名、主创和引用出处"
   }
  ]
 },
 {
  "id": 18,
  "part": 0,
  "domain": "工作",
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
  "id": 19,
  "part": 1,
  "domain": "工作",
  "context": "有机会跟着专业人员体验半天工作，三项都有人指导。",
  "text": "你最想体验哪项？",
  "options": [
   {
    "key": "R",
    "text": "跟技术员检查一台无法启动的设备"
   },
   {
    "key": "I",
    "text": "分析网店订单，查找销量下降的原因"
   },
   {
    "key": "S",
    "text": "教新员工操作收银系统，陪他们练熟"
   }
  ]
 },
 {
  "id": 20,
  "part": 1,
  "domain": "学习",
  "context": "学校组织一天职业体验，你可以跟随一位从业者学习。",
  "text": "你想跟着谁体验工作？",
  "options": [
   {
    "key": "R",
    "text": "维修技师：检查自行车故障并更换零件"
   },
   {
    "key": "I",
    "text": "实验员：比较不同材料的保温效果"
   },
   {
    "key": "E",
    "text": "商务人员：向商家介绍方案，争取合作"
   }
  ]
 },
 {
  "id": 21,
  "part": 1,
  "domain": "生活",
  "context": "社区想了解公共照明为什么经常出问题，准备请志愿者协助专业人员。",
  "text": "你最想参与哪项工作？",
  "options": [
   {
    "key": "R",
    "text": "跟师傅检查灯具，协助更换损坏的配件"
   },
   {
    "key": "I",
    "text": "分析报修记录，查找故障集中的位置和时段"
   },
   {
    "key": "C",
    "text": "核对维修清单、零件数量和采购票据"
   }
  ]
 },
 {
  "id": 22,
  "part": 1,
  "domain": "学习",
  "context": "学校要举办一次科学体验日，三个岗位都提供培训，投入时间相同。",
  "text": "你最愿意参加哪个岗位？",
  "options": [
   {
    "key": "R",
    "text": "按图装配一个可以转动的演示装置"
   },
   {
    "key": "A",
    "text": "设计展区海报和互动故事"
   },
   {
    "key": "S",
    "text": "向来访同学讲解实验，帮助他们完成体验"
   }
  ]
 },
 {
  "id": 23,
  "part": 1,
  "domain": "生活",
  "context": "社区准备做一个旧物改造集市，每项工作都能跟着有经验的人学习。",
  "text": "你更想参与哪项？",
  "options": [
   {
    "key": "R",
    "text": "把旧木板做成能使用的小置物架"
   },
   {
    "key": "A",
    "text": "给改造后的物品设计外观和展示照片"
   },
   {
    "key": "E",
    "text": "向店主介绍集市，争取他们来摆摊"
   }
  ]
 },
 {
  "id": 24,
  "part": 1,
  "domain": "家庭",
  "context": "家里准备改造一个小书房。假设三类工作都有指导，花费和投入时间相同。",
  "text": "你更想承担哪项？",
  "options": [
   {
    "key": "R",
    "text": "动手安装书架、灯具和收纳配件"
   },
   {
    "key": "A",
    "text": "设计书房的配色、墙面和整体风格"
   },
   {
    "key": "C",
    "text": "逐项核对尺寸、采购数量和开支记录"
   }
  ]
 },
 {
  "id": 25,
  "part": 1,
  "domain": "工作",
  "context": "一家新店准备开业，下面三个岗位都提供入门培训，收入相同。",
  "text": "你更想尝试哪项工作？",
  "options": [
   {
    "key": "R",
    "text": "安装和调试店里的展示设备"
   },
   {
    "key": "S",
    "text": "教新同事使用设备，陪他们完成练习"
   },
   {
    "key": "E",
    "text": "向附近商家介绍开业活动，争取联合推广"
   }
  ]
 },
 {
  "id": 26,
  "part": 1,
  "domain": "生活",
  "context": "社区要办三次自行车服务活动，三个岗位投入的时间相同。",
  "text": "你愿意持续参与哪项？",
  "options": [
   {
    "key": "R",
    "text": "在指导下调整刹车、链条和轮胎"
   },
   {
    "key": "S",
    "text": "教初学者检查车辆和掌握基本骑行技巧"
   },
   {
    "key": "C",
    "text": "核对工具借还、耗材数量和服务登记"
   }
  ]
 },
 {
  "id": 27,
  "part": 1,
  "domain": "工作",
  "context": "下面三份工作都提供培训，工作时间和收入相同。",
  "text": "你更愿意尝试哪份？",
  "options": [
   {
    "key": "R",
    "text": "跟技术人员排查不能启动的设备"
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
  "id": 28,
  "part": 1,
  "domain": "学习",
  "context": "你可以参加一门为期四周的实践课，三门课都从基础教起。",
  "text": "哪门课让你更想报名？",
  "options": [
   {
    "key": "I",
    "text": "分析一组真实数据，回答一个生活中的问题"
   },
   {
    "key": "A",
    "text": "拍摄并剪辑一支有故事的短片"
   },
   {
    "key": "S",
    "text": "设计一节小课堂，把熟悉的技能教给别人"
   }
  ]
 },
 {
  "id": 29,
  "part": 1,
  "domain": "工作",
  "context": "一家饮料公司提供三种实习任务，培训、时长和报酬相同。",
  "text": "你更想做哪项？",
  "options": [
   {
    "key": "I",
    "text": "分析试饮评价，找出影响购买意愿的因素"
   },
   {
    "key": "A",
    "text": "为新品设计广告画面和宣传文案"
   },
   {
    "key": "E",
    "text": "向便利店店主介绍新品，争取上架机会"
   }
  ]
 },
 {
  "id": 30,
  "part": 1,
  "domain": "家庭",
  "context": "家人经营的小店想请你每周帮忙两小时，三项任务都有人教。",
  "text": "你更愿意长期做哪项？",
  "options": [
   {
    "key": "I",
    "text": "分析销售记录，找出哪些商品卖得好及原因"
   },
   {
    "key": "A",
    "text": "拍商品照片，设计橱窗和宣传图片"
   },
   {
    "key": "C",
    "text": "核对进货单、库存和当天收款记录"
   }
  ]
 },
 {
  "id": 31,
  "part": 1,
  "domain": "学习",
  "context": "学校准备办一场面向新生的学习交流会，三个岗位投入时间相同。",
  "text": "你更愿意报名哪项？",
  "options": [
   {
    "key": "I",
    "text": "分析学习问卷，找出新生最常遇到的困难"
   },
   {
    "key": "S",
    "text": "带一个学习小组，帮助同学练习学习方法"
   },
   {
    "key": "E",
    "text": "向企业介绍活动，争取书籍和物资支持"
   }
  ]
 },
 {
  "id": 32,
  "part": 1,
  "domain": "工作",
  "context": "团队招募志愿者改进新员工入职体验，下面三项都可跟着同事学习。",
  "text": "你最想参与哪项？",
  "options": [
   {
    "key": "I",
    "text": "分析入职反馈，查找反复出现的问题"
   },
   {
    "key": "S",
    "text": "担任学习伙伴，帮助新人掌握工作流程"
   },
   {
    "key": "C",
    "text": "整理入职资料，核对表格和办理记录"
   }
  ]
 },
 {
  "id": 33,
  "part": 1,
  "domain": "生活",
  "context": "社区计划更新一批公共设施，需要志愿者协助筹备。",
  "text": "你更愿意投入哪项？",
  "options": [
   {
    "key": "I",
    "text": "分析使用记录，判断哪些设施最需要更新"
   },
   {
    "key": "E",
    "text": "向商家介绍计划，争取物资赞助"
   },
   {
    "key": "C",
    "text": "整理报价、采购清单和报销凭证"
   }
  ]
 },
 {
  "id": 34,
  "part": 1,
  "domain": "家庭",
  "context": "家人准备组织一次面向亲友的小型义卖，三项任务的投入时间相同。",
  "text": "你更想负责哪项？",
  "options": [
   {
    "key": "A",
    "text": "为义卖品设计包装、展示图片和介绍文案"
   },
   {
    "key": "S",
    "text": "教第一次参加的人制作手工义卖品"
   },
   {
    "key": "E",
    "text": "向来访者介绍义卖品，促成购买"
   }
  ]
 },
 {
  "id": 35,
  "part": 1,
  "domain": "学习",
  "context": "你参加的社团要开展一个月的课后活动，每周投入两小时。",
  "text": "你更愿意持续做哪项？",
  "options": [
   {
    "key": "A",
    "text": "为每次活动写短视频脚本、制作宣传内容"
   },
   {
    "key": "S",
    "text": "带新成员练习技能，帮助他们完成作品"
   },
   {
    "key": "C",
    "text": "管理报名、签到、材料数量和活动记录"
   }
  ]
 },
 {
  "id": 36,
  "part": 1,
  "domain": "工作",
  "context": "一支团队要参加行业展会，三个岗位都有培训，工作量和收入相同。",
  "text": "你更想尝试哪项？",
  "options": [
   {
    "key": "A",
    "text": "设计展位画面、宣传册和产品演示短片"
   },
   {
    "key": "E",
    "text": "向到访客户介绍方案，争取后续合作"
   },
   {
    "key": "C",
    "text": "核对参展资料、客户登记和展品出入记录"
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
const PART_SIZE=18;
const exposures=Object.fromEntries([0,1].map(part=>[part,Object.fromEntries(Object.keys(part===0?styleNames:interestNames).map(key=>[key,questions.filter(q=>q.part===part).flatMap(q=>q.options).filter(o=>o.key===key).length]))]));
function score(answers){
 const styleCounts=Object.fromEntries(Object.keys(styleNames).map(k=>[k,0]));
 const interestCounts=Object.fromEntries(Object.keys(interestNames).map(k=>[k,0]));
 for(const q of questions){const a=answers[q.id];if(Number.isInteger(a)&&a>=0&&a<3)(q.part===0?styleCounts:interestCounts)[q.options[a].key]++}
 // Within-person preference indices only, not population norms or match probabilities.
 const styles=Object.fromEntries(Object.entries(styleCounts).map(([k,n])=>[k,n/exposures[0][k]*100]));
 const interests=Object.fromEntries(Object.entries(interestCounts).map(([k,n])=>[k,n/exposures[1][k]*100]));
 const careers=groups.map(g=>({...g,score:Object.entries(g.w).reduce((sum,[k,w])=>sum+interests[k]*w,0)}));
 return{styles,interests,styleCounts,interestCounts,careers};
}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const n=new Uint32Array(1);crypto.getRandomValues(n);const j=Math.floor(n[0]/4294967296*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function fresh(){return{version:VERSION,answers:{},order:[...shuffle(questions.filter(q=>q.part===0).map(q=>q.id)),...shuffle(questions.filter(q=>q.part===1).map(q=>q.id))],optionOrder:Object.fromEntries(questions.map(q=>[q.id,shuffle([0,1,2])])),index:0,complete:false,seen:[]}}
function valid(s){return !!(s&&s.version===VERSION&&s.answers&&typeof s.answers==='object'&&!Array.isArray(s.answers)&&Array.isArray(s.order)&&s.order.length===TOTAL&&new Set(s.order).size===TOTAL&&s.order.every((q,i)=>Number.isInteger(q)&&q>=1&&q<=TOTAL&&(i<PART_SIZE?q<=PART_SIZE:q>PART_SIZE))&&s.optionOrder&&questions.every(q=>Array.isArray(s.optionOrder[q.id])&&s.optionOrder[q.id].length===3&&[...s.optionOrder[q.id]].sort().join(',')==='0,1,2')&&Number.isInteger(s.index)&&s.index>=0&&s.index<TOTAL&&typeof s.complete==='boolean'&&Array.isArray(s.seen)&&s.seen.every(t=>t===0||t===1)&&Object.entries(s.answers).every(([k,v])=>String(+k)===k&&+k>=1&&+k<=TOTAL&&Number.isInteger(v)&&v>=0&&v<3)&&(!s.complete||questions.every(q=>Number.isInteger(s.answers[q.id]))));}
function affinity(g,result){return result.styles[g.order[0]]*.6+result.styles[g.order[1]]*.4}
function rankedDirections(result){return [...result.careers].sort((a,b)=>{const delta=b.score-a.score;return (Math.abs(delta)>1e-8?delta:0)||affinity(b,result)-affinity(a,result)||groups.findIndex(g=>g.id===a.id)-groups.findIndex(g=>g.id===b.id)})}
function topDirections(result){return rankedDirections(result).slice(0,3)}
function closeDirections(result){const ranked=rankedDirections(result);return ranked[2].score-ranked[3].score<=100/9+1e-8}
