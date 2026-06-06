const teams = {
  mexico: { name: "墨西哥", flag: "🇲🇽", rank: 16, coach: "哈维尔·阿吉雷", form: "胜 胜 平 负 胜", attack: 78, midfield: 76, defense: 75, pace: 73, experience: 88 },
  southAfrica: { name: "南非", flag: "🇿🇦", rank: 59, coach: "雨果·布鲁斯", form: "胜 平 胜 胜 平", attack: 67, midfield: 69, defense: 68, pace: 76, experience: 61 },
  usa: { name: "美国", flag: "🇺🇸", rank: 14, coach: "毛里西奥·波切蒂诺", form: "胜 负 胜 平 胜", attack: 79, midfield: 78, defense: 76, pace: 82, experience: 72 },
  paraguay: { name: "巴拉圭", flag: "🇵🇾", rank: 39, coach: "古斯塔沃·阿尔法罗", form: "平 胜 负 胜 平", attack: 70, midfield: 72, defense: 76, pace: 69, experience: 70 },
  brazil: { name: "巴西", flag: "🇧🇷", rank: 5, coach: "国家队教练组", form: "胜 胜 平 胜 负", attack: 91, midfield: 87, defense: 82, pace: 90, experience: 90 },
  morocco: { name: "摩洛哥", flag: "🇲🇦", rank: 12, coach: "瓦利德·雷格拉吉", form: "胜 胜 胜 平 胜", attack: 82, midfield: 83, defense: 86, pace: 84, experience: 79 },
  canada: { name: "加拿大", flag: "🇨🇦", rank: 28, coach: "杰西·马什", form: "胜 平 胜 负 胜", attack: 78, midfield: 74, defense: 71, pace: 88, experience: 66 },
  bosnia: { name: "波黑", flag: "🇧🇦", rank: 71, coach: "国家队教练组", form: "负 胜 平 负 胜", attack: 69, midfield: 70, defense: 66, pace: 65, experience: 73 }
};

const fallbackFixtures = [
  { id:"mex-rsa", date:"06月12日", time:"03:00", group:"A组", home:"mexico", away:"southAfrica", venue:"墨西哥城 · 阿兹特克体育场", featured:true },
  { id:"kor-cze", date:"06月12日", time:"10:00", group:"A组", homeName:"韩国", homeFlag:"🇰🇷", awayName:"捷克", awayFlag:"🇨🇿", venue:"瓜达拉哈拉 · 阿克伦体育场" },
  { id:"can-bih", date:"06月13日", time:"03:00", group:"B组", home:"canada", away:"bosnia", venue:"多伦多 · BMO球场", featured:true },
  { id:"usa-par", date:"06月13日", time:"09:00", group:"D组", home:"usa", away:"paraguay", venue:"洛杉矶 · SoFi体育场", featured:true },
  { id:"aus-tur", date:"06月14日", time:"12:00", group:"D组", homeName:"澳大利亚", homeFlag:"🇦🇺", awayName:"土耳其", awayFlag:"🇹🇷", venue:"温哥华 · BC体育馆" },
  { id:"qat-sui", date:"06月14日", time:"03:00", group:"B组", homeName:"卡塔尔", homeFlag:"🇶🇦", awayName:"瑞士", awayFlag:"🇨🇭", venue:"旧金山湾区 · 李维斯体育场" },
  { id:"bra-mar", date:"06月14日", time:"06:00", group:"C组", home:"brazil", away:"morocco", venue:"纽约新泽西 · 大都会人寿体育场", featured:true },
  { id:"hai-sco", date:"06月14日", time:"09:00", group:"C组", homeName:"海地", homeFlag:"🇭🇹", awayName:"苏格兰", awayFlag:"🏴", venue:"波士顿 · 吉列体育场" }
];

let fixtures = [...fallbackFixtures];

const predictions = {
  "mex-rsa": {
    title:"看好墨西哥保持不败", confidence:"信心 7.8", score:"2 : 0", note:"墨西哥小胜概率最高",
    text:"墨西哥在纸面实力、赛事经验和主场环境上都占据优势。阿兹特克体育场的海拔会放大南非长距离移动后的体能压力。不过，南非近期防守组织稳定，比赛前段未必会迅速失衡。",
    factors:[["主场变量","高原、气候与现场氛围均利好墨西哥","+12%"],["中场控制","墨西哥有更稳定的连续传递与二点球能力","+8%"],["反击风险","南非的纵向速度可能制造局部威胁","警惕"]],
    odds:[["Pinnacle","1.54","4.15","7.10"],["bet365","1.50","4.10","7.00"],["Unibet","1.55","4.05","6.80"]],
    social:{
      pro:"世界杯揭幕战前瞻｜墨西哥 vs 南非\n\n模型更看好墨西哥在主场拿下开门红，预计胜率约 62%。高原环境、赛事经验和中场控制力是东道主的主要优势；南非的机会则在于收缩防线后的快速反击。预测比分：墨西哥 2-0 南非。\n\n足球没有标准答案，临场阵容与比赛前 20 分钟的节奏，仍会决定预测能否兑现。\n\n#2026世界杯 #墨西哥vs南非 #世界杯预测",
      hot:"揭幕战来了！东道主墨西哥坐镇阿兹特克，主场声浪、高原环境、纸面实力全部拉满。南非绝不会束手就擒，但只要墨西哥稳住开局，这场开门红值得期待。我的预测：2-0！\n\n#世界杯 #揭幕战 #墨西哥",
      short:"世界杯揭幕战预测：墨西哥胜率 62%，主场与中场控制占优，南非主要依赖反击。参考比分 2-0。理性看球，静待开场。#2026世界杯"
    },
    deep:{
      title:"高原、耐心与第一脚向前：揭幕战真正的胜负手",
      intro:"墨西哥拥有更多主动改变局面的手段。主场海拔、观众压力和大赛经验，会让南非从开场就面对额外消耗。模型给出东道主约六成胜率，但揭幕战通常谨慎；若主队迟迟无法形成禁区内的连续触球，比赛会被拖进南非更舒服的低节奏。",
      tactics:"墨西哥需要用边后卫前压拉宽防线，再由后腰回收第二落点。南非大概率收紧中路，等待传球失误后攻击边路身后。主队的关键不是控球率，而是用无球跑动迫使中卫离开保护区域。若上半场仍是零比零，心理压力会逐渐转移到墨西哥一侧。",
      players:[
        { name:"圣地亚哥·希门尼斯", role:"墨西哥 · 中锋观察", text:"他的价值不只在终结，更在于牵住中卫。背身后的第一脚处理、前点斜插和二点球判断，会决定墨西哥阵地战是否有纵深。" },
        { name:"埃德松·阿尔瓦雷斯", role:"墨西哥 · 中场枢纽", text:"他是攻守转换的闸门。向前出球必须果断，同时要控制压上后的空间；面对南非反击，位置感比一次抢断更重要。" },
        { name:"珀西·陶", role:"南非 · 反击支点", text:"南非能否把防守变成威胁，要看他的持球与转身。他触球不会很多，却必须把少数机会送到正确方向。" }
      ],
      risk:"若墨西哥投入过多人数，南非的速度会把主场优势变成回追压力；若南非过早丢球，被迫压出后又会暴露空间。定位球也可能绕开阵地战差距，因此预测倾向二比零，却不能忽略一比一。",
      closing:"客观结论：墨西哥更接近胜利，但需要耐心。重点看希门尼斯能否固定中卫、阿尔瓦雷斯能否守住转换，以及南非第一次反击的质量。",
      updated:"2026-06-06"
    }
  },
  "usa-par": {
    title:"美国更接近三分", confidence:"信心 7.1", score:"2 : 1", note:"主队优势并非压倒性",
    text:"美国队的速度和前场压迫更具上限，主场条件也能减少旅途消耗。巴拉圭防守硬度足够，定位球威胁不容忽视，这更可能是一场需要耐心的低比分拉锯战。",
    factors:[["推进速度","美国边路爆发力更强","+9%"],["防守硬度","巴拉圭擅长压缩禁区空间","均衡"],["定位球","双方都有改变局面的高球能力","关键"]],
    odds:[["Pinnacle","1.76","3.55","5.10"],["bet365","1.72","3.60","5.00"],["Unibet","1.78","3.50","4.90"]],
    social:{
      pro:"世界杯前瞻｜美国 vs 巴拉圭\n\n美国在主场、速度和阵容上限方面占优，模型给出约 55% 的取胜概率。但巴拉圭的防守纪律与定位球能力意味着比赛不会轻松。参考比分：美国 2-1 巴拉圭。\n\n#2026世界杯 #美国队 #赛前预测",
      hot:"主场首战，美国队要用速度把比赛点燃！巴拉圭够硬，但美国的边路冲击更值得期待。看好东道主 2-1 拿下三分！#世界杯",
      short:"美国 vs 巴拉圭：模型偏向美国，优势在速度与主场；风险在定位球防守。参考比分 2-1。#2026世界杯"
    },
    deep:{
      title:"速度不是答案本身，美国需要把冲击转化为禁区质量",
      intro:"美国拥有主场和运动能力优势，但巴拉圭并不适合用开放对攻解决。模型把美国胜率放在五成以上，原因是他们能用压迫制造更多回合。若比赛长期停留在身体对抗，巴拉圭反而能缩小差距；美国需要尽早建立进攻宽度。",
      tactics:"美国应由中场快速转移，拉开巴拉圭紧凑的防线，再利用弱侧套上制造人数优势。巴拉圭会保护禁区正面并切断肋部倒三角。若美国只依赖边路一对一，进攻会变得可预测；防守端还必须避免无谓犯规，因为定位球是客队最直接的得分工具。",
      players:[
        { name:"克里斯蒂安·普利西奇", role:"美国 · 前场核心", text:"他要在边路爆点和中路组织间找平衡。理想方式是先吸引防守，再无球切入肋部，连接最后一传与终结。" },
        { name:"安东尼·罗宾逊", role:"美国 · 左路推进器", text:"他的套上能把普利西奇释放到内线。每次前插必须与后腰保护同步，否则巴拉圭会直接攻击他身后的空当。" },
        { name:"米格尔·阿尔米隆", role:"巴拉圭 · 转换核心", text:"第一步加速和向前带球是突破压迫的关键。美国若没封住他的左脚线路，一次推进就可能制造定位球或远射。" }
      ],
      risk:"东道主若急于兑现期待，前场压迫可能变成各自追抢，给巴拉圭留下越过第一线的通道；客队若过度保守，也会让美国累积角球和二点进攻。临场应关注美国中场的向前传球。",
      closing:"客观结论：美国更接近三分，但优势有限。普利西奇的活动区域、罗宾逊身后的保护和阿尔米隆第一次成功推进，比控球率更能说明走势。",
      updated:"2026-06-06"
    }
  },
  "bra-mar": {
    title:"巴西略占优势，但需防冷门", confidence:"信心 6.6", score:"2 : 1", note:"小组赛首轮焦点战",
    text:"巴西拥有更强的个人解决能力，但摩洛哥成熟的防守结构已经在大赛中得到验证。若巴西无法尽早拉开宽度，比赛会进入摩洛哥熟悉的低空间节奏。",
    factors:[["单兵能力","巴西前场拥有更高的突破上限","+10%"],["防守结构","摩洛哥阵型紧凑且转换明确","强项"],["比赛节奏","率先进球的一方将获得巨大主动权","关键"]],
    odds:[["Pinnacle","1.68","3.80","5.25"],["bet365","1.65","3.75","5.20"],["Unibet","1.70","3.70","5.00"]],
    social:{
      pro:"焦点战前瞻｜巴西 vs 摩洛哥\n\n这不是一场可以只看队名判断的比赛。巴西个人能力更强，摩洛哥的整体防守却足以限制任何热门球队。模型小幅看好巴西，参考比分 2-1；真正的胜负手是巴西能否在上半场撕开低位防线。\n\n#巴西队 #摩洛哥 #世界杯",
      hot:"桑巴军团碰上非洲铁壁，这场绝对有戏！巴西天赋占优，摩洛哥韧性拉满。看好巴西险胜，但冷门警报已经亮起。预测 2-1！",
      short:"巴西 vs 摩洛哥：巴西略占优，摩洛哥防守结构是最大变量。参考比分 2-1，谨防平局。#世界杯"
    },
    deep:{
      title:"天赋对阵结构：巴西必须先解决摩洛哥的防守耐心",
      intro:"这场比赛的名气差距大于真实实力差距。巴西拥有更多一对一改变局面的球员，因此模型仍将他们放在优势一侧；摩洛哥则用纪律和反击效率证明，传统强队也会失去舒适区。关键不是控球多少，而是能否形成禁区两侧的持续压迫。",
      tactics:"摩洛哥预计保持中后场紧凑，诱导巴西把球送向边路，再用夹击切断回传。巴西需要快速换位：边锋内收吸引防守，套上队友拉开宽度，中场负责回收二点。丢球后的五秒反抢尤其重要，因为摩洛哥最危险的时刻正是巴西边后卫尚未回位时。",
      players:[
        { name:"维尼修斯·儒尼奥尔", role:"巴西 · 左路爆点", text:"面对双人包夹，他何时内切、何时交给套上队友，会决定巴西能否持续移动防线。静态一对二只会消耗他的能力。" },
        { name:"布鲁诺·吉马良斯", role:"巴西 · 节奏控制", text:"他要在冒险直塞和攻守平衡间选择。接球前观察、丢球后的第一步压迫，以及弱侧转移质量都很关键。" },
        { name:"阿什拉夫·哈基米", role:"摩洛哥 · 右路发动机", text:"他既要限制巴西左路，也是反击推进点。若能在断球后越过第一道压迫，巴西整条防线就必须转身。" }
      ],
      risk:"首个进球会改变结构。巴西领先后能利用空间扩大优势；摩洛哥若先得分，则可进入熟悉的防守节奏。巴西久攻不下时若过度远射，反而会减少对手的禁区决策。定位球和门将状态也可能让纸面优势失效。",
      closing:"客观结论：巴西胜面略高，但并不稳妥。维尼修斯如何处理包夹、布鲁诺能否守住转换、哈基米是否获得前插空间，是三个清晰信号。",
      updated:"2026-06-06"
    }
  }
};

const postMatch = {
  social:{
    pro:"一场足以写进世界杯历史的决赛。\n\n阿根廷在大部分时间里展现了更完整的整体性，法国则用极致的个人能力与韧性两次追平。3-3 不是防守失控的简单结果，而是战术调整、体能边界与顶级球员决断力共同作用的产物。\n\n点球大战决定冠军，却无法定义失败者。阿根廷配得上冠军，法国同样值得尊重。\n\n#世界杯决赛 #阿根廷 #法国",
    hot:"从 2-0 到 2-2，从加时领先到再次被追平，这不是比赛，这是两支球队把意志拼到最后一秒。梅西终于举起大力神杯，姆巴佩戴帽仍与冠军擦肩。有人圆梦，有人落泪，但足球在这一夜赢了。#世界杯经典"
  },
  deep:{
    title:"当控制力遭遇极限爆发：2022 决赛为何成为经典",
    intro:"三比三和点球大战容易让人只记住戏剧性，但这场决赛的价值，在于两队用不同方式接近胜利。阿根廷大部分时间拥有更清晰的计划，通过中场人数和高强度回收限制法国；法国则用换人、速度和超级球员的决断重新打开比赛。",
    tactics:"阿根廷开局压迫法国左侧出球，并用迪马利亚的宽度牵制防线。两球领先后，他们仍通过梅西接应维持控球。法国随后减少冗长组织，增加直接冲击，比赛由阵地控制转成高频转换。阿根廷体能下降后无法继续封锁肋部，法国才连续获得机会。",
    players:[
      { name:"利昂内尔·梅西", role:"阿根廷 · 进攻核心", text:"他的影响不只来自进球。回到右侧接球，让法国后腰必须在跟防和守位之间选择；加时补射也体现了阅读二点的能力。" },
      { name:"安赫尔·迪马利亚", role:"阿根廷 · 战术破局者", text:"左路宽度让法国无法只围绕梅西收缩。制造点球、完成第二球并持续攻击身后，是阿根廷上半场最明确的优势。" },
      { name:"基利安·姆巴佩", role:"法国 · 极限终结者", text:"他在支援有限时完成帽子戏法，并让阿根廷后卫不敢继续前压。个人爆发证明顶级球员能用极少机会重置比赛。" }
    ],
    risk:"阿根廷整体表现更完整，高质量机会也更多；法国的韧性与调整同样值得肯定。不能用点球偶然性否定冠军，也不能因法国前段被压制就忽视反扑。后段错误增加，是高强度与体能下降的真实代价。",
    closing:"最终评价：阿根廷凭更长时间的主动控制配得上冠军，法国凭逆境回应赢得尊重。梅西兼顾组织与终结，迪马利亚改变结构，姆巴佩把个人上限推到决赛历史级别。",
    updated:"2022-12-18 · 历史比赛复盘"
  }
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
const bookmakerLinks = {
  Pinnacle: "https://www.pinnacle.com/",
  bet365: "https://www.bet365.com/",
  Unibet: "https://www.unibet.com/"
};
const flagByCode = {
  MEX:"🇲🇽", RSA:"🇿🇦", USA:"🇺🇸", PAR:"🇵🇾", BRA:"🇧🇷", MAR:"🇲🇦", CAN:"🇨🇦",
  KOR:"🇰🇷", CZE:"🇨🇿", AUS:"🇦🇺", TUR:"🇹🇷", QAT:"🇶🇦", SUI:"🇨🇭", HAI:"🇭🇹"
};
const currentCopy = { pre:"", post:"" };
const contentState = { preMode:"social", postMode:"social", preTone:"pro", postTone:"pro" };

function getTeam(fixture, side) {
  const key = fixture[side];
  if (key && teams[key]) return teams[key];
  return {
    name: fixture[`${side}Name`] || "待定",
    flag: fixture[`${side}Flag`] || "⚽",
    rank: "—"
  };
}

function normalizeRemoteFixture(match) {
  const kickoff = new Date(match.utcDate);
  const dateTime = new Intl.DateTimeFormat("zh-CN", {
    timeZone:"Asia/Shanghai", month:"2-digit", day:"2-digit", hour:"2-digit", minute:"2-digit", hour12:false
  }).formatToParts(kickoff).reduce((acc, item) => ({ ...acc, [item.type]:item.value }), {});
  return {
    id:String(match.id),
    date:`${dateTime.month}月${dateTime.day}日`,
    time:`${dateTime.hour}:${dateTime.minute}`,
    group:match.group || match.stageLabel || "世界杯",
    homeName:match.homeTeam?.name || "待定",
    homeFlag:flagByCode[match.homeTeam?.tla] || "⚽",
    awayName:match.awayTeam?.name || "待定",
    awayFlag:flagByCode[match.awayTeam?.tla] || "⚽",
    venue:match.venue || "场地待定",
    featured:false,
    status:match.status
  };
}

async function loadMatchSnapshot() {
  const status = $("#dataStatus");
  try {
    const response = await fetch("./data/matches.json", { cache:"no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const snapshot = await response.json();
    if (Array.isArray(snapshot.matches) && snapshot.matches.length) {
      fixtures = snapshot.matches.map(normalizeRemoteFixture);
      renderFixtures($("#scheduleFilters .active")?.dataset.filter || "all");
    }
    const updated = snapshot.updatedAt ? new Date(snapshot.updatedAt).toLocaleString("zh-CN", { timeZone:"Asia/Shanghai", hour12:false }) : "未知";
    status.textContent = snapshot.stale ? `数据暂未刷新 · 最后快照 ${updated}` : `football-data.org 更新于 ${updated}`;
    status.className = snapshot.stale ? "sync-stale" : "sync-live";
  } catch {
    status.textContent = "数据暂未刷新 · 正在使用内置快照";
    status.className = "sync-stale";
  }
}

function renderFixtures(filter = "all") {
  const visible = fixtures.filter(f => {
    if (filter === "featured") return f.featured;
    if (filter === "today") return !["FINISHED","CANCELLED"].includes(f.status);
    return true;
  });
  $("#scheduleGrid").innerHTML = visible.map((f, index) => {
    const h = getTeam(f, "home"), a = getTeam(f, "away");
    return `<article class="fixture ${f.featured ? "featured" : ""} ${index === 0 ? "selected" : ""}">
      <div class="fixture-meta"><span>${f.group} · ${f.status === "FINISHED" ? "已结束" : "小组赛"}</span><span>${f.date} ${f.time}</span></div>
      <div class="fixture-match">
        <div class="fixture-team"><span>${h.flag}</span><strong>${h.name}</strong><b>主</b></div>
        <div class="fixture-team"><span>${a.flag}</span><strong>${a.name}</strong><b>客</b></div>
      </div>
      <div class="fixture-venue">${f.venue}</div>
      <button data-fixture="${f.id}" aria-label="查看 ${h.name} 对 ${a.name} 的预测">查看预测</button>
    </article>`;
  }).join("") || `<div class="fixture"><strong>当前筛选暂无比赛</strong><div class="fixture-venue">请切换到“全部”查看赛程</div></div>`;
}

function fillTeamSelects() {
  const options = Object.entries(teams).map(([id,t]) => `<option value="${id}">${t.flag} ${t.name}</option>`).join("");
  $("#teamA").innerHTML = options;
  $("#teamB").innerHTML = options;
  $("#teamA").value = "mexico";
  $("#teamB").value = "southAfrica";
}

function teamProfile(t) {
  return `<span class="profile-flag">${t.flag}</span><h3>${t.name}</h3><p>主教练 · ${t.coach}</p><div class="rank-circle">FIFA排名 <b>${t.rank}</b></div><p style="margin-top:15px">近况 · ${t.form}</p>`;
}

function renderCompare() {
  const a = teams[$("#teamA").value], b = teams[$("#teamB").value];
  $("#profileA").innerHTML = teamProfile(a);
  $("#profileB").innerHTML = teamProfile(b);
  const labels = [["attack","进攻"],["midfield","中场"],["defense","防守"],["pace","速度"],["experience","大赛经验"]];
  $("#metrics").innerHTML = labels.map(([key,label]) => `<div class="metric">
    <div class="metric-title"><b>${a[key]}</b><span>${label}</span><b>${b[key]}</b></div>
    <div class="dual-bar"><span><i style="width:${a[key]}%"></i></span><span><i style="width:${b[key]}%"></i></span></div>
  </div>`).join("");
  const delta = (a.attack+a.midfield+a.defense+a.pace+a.experience)-(b.attack+b.midfield+b.defense+b.pace+b.experience);
  $("#compareInsight").innerHTML = `<b>MODEL NOTE</b><span>${Math.abs(delta) < 12 ? "双方综合实力接近，临场策略可能比纸面数据更重要。" : `${delta > 0 ? a.name : b.name}在综合指标上领先，但单场比赛仍需关注阵容与比赛环境。`}</span>`;
}

function deepText(deep) {
  return `${deep.title}\n\n【比赛结论】\n${deep.intro}\n\n【战术对位】\n${deep.tactics}\n\n【球员焦点】\n${deep.players.map(p => `${p.name}｜${p.role}\n${p.text}`).join("\n\n")}\n\n【风险与变数】\n${deep.risk}\n\n【客观总结】\n${deep.closing}`;
}

function deepMarkup(deep) {
  return `<article class="deep-article">
    <div class="deep-meta"><span>DEEP READING · 约 ${deepText(deep).replace(/\s/g,"").length} 字</span><span>更新 ${deep.updated}</span></div>
    <h4>${deep.title}</h4>
    <h5>比赛结论</h5><p>${deep.intro}</p>
    <h5>战术对位</h5><p>${deep.tactics}</p>
    <div class="player-focus-grid">${deep.players.map(p => `<div class="player-focus"><span>${p.role}</span><strong>${p.name}</strong><p>${p.text}</p></div>`).join("")}</div>
    <h5>风险与变数</h5><p>${deep.risk}</p>
    <p class="deep-closing">${deep.closing}</p>
  </article>`;
}

function setContentMode(scope, mode) {
  contentState[`${scope}Mode`] = mode;
  const studio = $(`#${scope}Studio`);
  const socialOutput = $(`#${scope}Copy`);
  const deepOutput = $(`#${scope}Deep`);
  const tone = $(`#${scope}Tone`);
  const title = $(`#${scope}StudioTitle`);
  const copyButton = $(`#${scope}CopyButton`);
  $$(`#${scope}Mode button`).forEach(button => button.classList.toggle("active", button.dataset.mode === mode));
  studio.classList.toggle("deep-mode", mode === "deep");
  socialOutput.hidden = mode === "deep";
  deepOutput.hidden = mode !== "deep";
  tone.hidden = mode === "deep";
  title.textContent = mode === "deep" ? "600 字深度解读" : scope === "pre" ? "自媒体文案" : "赛后发布文案";
  copyButton.textContent = mode === "deep" ? "复制深度解读" : "复制文案";
  if (scope === "pre") renderPreContent();
  else renderPostContent();
}

function renderPreContent() {
  const p = predictions[$("#predictionMatch").value] || predictions["mex-rsa"];
  if (contentState.preMode === "deep") {
    currentCopy.pre = deepText(p.deep);
    $("#preDeep").innerHTML = deepMarkup(p.deep);
  } else {
    currentCopy.pre = p.social[contentState.preTone];
    $("#preCopy").textContent = currentCopy.pre;
  }
  $("#preCount").textContent = `${currentCopy.pre.replace(/\s/g,"").length} 字`;
}

function renderPostContent() {
  if (contentState.postMode === "deep") {
    currentCopy.post = deepText(postMatch.deep);
    $("#postDeep").innerHTML = deepMarkup(postMatch.deep);
  } else {
    currentCopy.post = postMatch.social[contentState.postTone];
    $("#postCopy").textContent = currentCopy.post;
  }
  $("#postCount").textContent = `${currentCopy.post.replace(/\s/g,"").length} 字`;
}

function renderPrediction(id) {
  const p = predictions[id] || predictions["mex-rsa"];
  $("#predictionMatch").value = id in predictions ? id : "mex-rsa";
  $("#verdictTitle").textContent = p.title;
  $("#confidence").textContent = p.confidence;
  $("#verdictText").textContent = p.text;
  $("#scorePick").innerHTML = p.score.replace(":", "<i>:</i>");
  $("#scoreNote").textContent = p.note;
  $("#factorList").innerHTML = p.factors.map((f,i) => `<div class="factor"><i>0${i+1}</i><span>${f[0]} · ${f[1]}</span><b>${f[2]}</b></div>`).join("");
  $("#oddsRows").innerHTML = p.odds.map(o => `<div class="odds-row"><a class="book" href="${bookmakerLinks[o[0]]}" target="_blank" rel="noreferrer" title="访问 ${o[0]} 官方网站"><i></i>${o[0]} ↗</a><b>${o[1]}</b><b>${o[2]}</b><b>${o[3]}</b></div>`).join("");
  $("#bestOdds").textContent = `当前最高：主胜 ${Math.max(...p.odds.map(o=>+o[1])).toFixed(2)} · 平局 ${Math.max(...p.odds.map(o=>+o[2])).toFixed(2)} · 客胜 ${Math.max(...p.odds.map(o=>+o[3])).toFixed(2)}`;
  renderPreContent();
}

function updateCountdown() {
  const target = new Date("2026-06-12T03:00:00+08:00");
  const diff = Math.max(0, target - new Date());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff % 86400000 / 3600000);
  const mins = Math.floor(diff % 3600000 / 60000);
  $("#countdown").innerHTML = `<b>${days}</b>天 <b>${String(hours).padStart(2,"0")}</b>时 <b>${String(mins).padStart(2,"0")}</b>分`;
}

function showToast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.add("show");
  setTimeout(() => $("#toast").classList.remove("show"), 1700);
}

async function copyContent(scope, button) {
  try { await navigator.clipboard.writeText(currentCopy[scope]); }
  catch { showToast("请手动选择内容复制"); return; }
  const original = button.textContent;
  button.textContent = "已复制";
  button.classList.add("copied");
  showToast("内容已复制到剪贴板");
  setTimeout(() => { button.textContent = original; button.classList.remove("copied"); }, 1600);
}

function bindModeSwitch(scope) {
  $(`#${scope}Mode`).addEventListener("click", event => {
    if (!event.target.dataset.mode) return;
    setContentMode(scope, event.target.dataset.mode);
  });
}

function init() {
  renderFixtures();
  fillTeamSelects();
  renderCompare();
  $("#predictionMatch").innerHTML = [
    ["mex-rsa","🇲🇽 墨西哥 vs 南非 🇿🇦"],
    ["usa-par","🇺🇸 美国 vs 巴拉圭 🇵🇾"],
    ["bra-mar","🇧🇷 巴西 vs 摩洛哥 🇲🇦"]
  ].map(([id,name]) => `<option value="${id}">${name}</option>`).join("");
  renderPrediction("mex-rsa");
  renderPostContent();
  loadMatchSnapshot();
  updateCountdown();
  setInterval(updateCountdown, 60000);

  $$("[data-scroll]").forEach(btn => btn.addEventListener("click", () => $(`#${btn.dataset.scroll}`).scrollIntoView()));
  $$(".nav-link").forEach(btn => btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.target).scrollIntoView();
    $$(".nav-link").forEach(n => n.classList.remove("active"));
    btn.classList.add("active");
  }));
  $("#scheduleFilters").addEventListener("click", event => {
    if (!event.target.dataset.filter) return;
    $$("#scheduleFilters button").forEach(button => button.classList.remove("active"));
    event.target.classList.add("active");
    renderFixtures(event.target.dataset.filter);
  });
  $("#scheduleGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-fixture]");
    if (!button) return;
    if (predictions[button.dataset.fixture]) {
      renderPrediction(button.dataset.fixture);
      $("#prediction").scrollIntoView();
    } else showToast("该场预测将在更多数据发布后上线");
  });
  ["teamA","teamB"].forEach(id => $(`#${id}`).addEventListener("change", renderCompare));
  $("#swapTeams").addEventListener("click", () => {
    const a = $("#teamA").value;
    $("#teamA").value = $("#teamB").value;
    $("#teamB").value = a;
    renderCompare();
  });
  $("#predictionMatch").addEventListener("change", event => renderPrediction(event.target.value));
  $("#preTone").addEventListener("click", event => {
    if (!event.target.dataset.tone) return;
    contentState.preTone = event.target.dataset.tone;
    $$("#preTone button").forEach(button => button.classList.toggle("active", button === event.target));
    renderPreContent();
  });
  $("#postTone").addEventListener("click", event => {
    if (!event.target.dataset.tone) return;
    contentState.postTone = event.target.dataset.tone;
    $$("#postTone button").forEach(button => button.classList.toggle("active", button === event.target));
    renderPostContent();
  });
  bindModeSwitch("pre");
  bindModeSwitch("post");
  $("#preCopyButton").addEventListener("click", event => copyContent("pre", event.currentTarget));
  $("#postCopyButton").addEventListener("click", event => copyContent("post", event.currentTarget));
  $("#refreshOdds").addEventListener("click", event => {
    event.currentTarget.textContent = "↻ 读取快照";
    setTimeout(() => {
      event.currentTarget.textContent = "✓ 演示快照";
      showToast("已载入演示赔率快照");
    }, 700);
    setTimeout(() => { event.currentTarget.textContent = "↻ 刷新"; }, 2200);
  });
  $("#themeToggle").addEventListener("click", () => document.body.classList.toggle("light-mode"));
}

document.addEventListener("DOMContentLoaded", init);
