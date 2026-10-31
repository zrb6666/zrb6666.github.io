/* =========================================================
   个人作品集 · 内容配置
   只改这一个文件就能更新整站，不用动 HTML/CSS
   ---------------------------------------------------------
   【项目卡片字段说明】
   name       项目名
   subtitle   一句话定位
   desc       项目简介（2~3 句，讲清解决什么问题）
   cover      截图路径，放到 assets/screenshots/ 下
              截图建议 16:10 或 16:9，宽度 ≥1200px
              文件不存在时会自动显示代码风封面，不会破版
   demo       在线演示 / 应用市场地址（可留空，填了会显示绿色按钮）
   demoLabel  绿色按钮文字，默认「在线演示」；应用市场可填「华为应用市场」
   stack      技术栈数组（留空则不显示该行）
   highlights 亮点列表（可留空）
   links      额外链接（GitHub / Gitee / 官网 等）
   featured   true = 通栏大卡片（建议只给 1 个项目）
   ========================================================= */

const SITE = {
  /* ---------- 基本身份 ---------- */
  name: "There be",                      // 主署名
  alias: "ZRB",                          // 副署名
  role: "独立开发者 / HarmonyOS & 桌面端",
  prompt: "whoami",                      // 首屏那行终端命令，可改成 "cat about.md"
  tagline: "把日常里忍不了的小麻烦，做成能真正跑起来的 App。",
  intro:
    "高中在读，独立开发者。多数项目由我一个人走完需求、设计、开发、发布的完整流程，" +
    "也参与团队项目中的部分模块开发。主要方向是 HarmonyOS NEXT 原生应用，同时在做桌面端。" +
    "写代码的出发点很简单：先解决自己的问题，再看有没有人也需要。",
  location: "贵州 · 贵阳",
  status: "OPEN TO COLLAB",              // 首屏状态标签
  avatarText: "T",

  /* ---------- 首屏数据条 ---------- */
  stats: [
    { k: "since", v: "2025" },
    { k: "projects", v: "4" },
    { k: "released", v: "1 app" },
    { k: "certs", v: "2" },
  ],

  /* ---------- 项目 ---------- */
  /* 顺序即展示顺序；featured 的那个会渲染成通栏大卡片 */
  projects: [
    {
      featured: true,
      name: "Focus Guard · 鸿蒙端",
      subtitle: "番茄钟 · 强制自律",
      year: "2026",
      status: "v1.0.2 · 已上架",
      desc:
        "基于 HarmonyOS NEXT（API 12）原生开发的专注力管理应用。它把「想专心」变成「必须专心」：" +
        "开启严格模式后，切走应用会被立刻拦截；所有专注时长都来自真实计时，不做任何虚假打卡。",
      highlights: [
        "已在华为应用市场正式上架",
        "任务库：自定义任务、时长与休息节奏",
        "严格模式：跳出即拦截，中途放弃不计入统计",
        "真实统计：只记录实际专注时间",
        "ArkTS 原生实现，适配鸿蒙设计规范",
      ],
      cover: "assets/screenshots/focus-guard-harmony.webp",
      demo: "https://appgallery.huawei.com/app/detail?id=com.focusguard.pro",
      demoLabel: "华为应用市场",
      stack: ["HarmonyOS NEXT", "ArkTS", "ArkUI", "API 12"],
      links: [],
    },
    {
      name: "Focus Guard Pro · 桌面端",
      subtitle: "电脑端番茄钟 · 独立应用",
      year: "2026",
      status: "开源 · 独立发布",
      desc:
        "Focus Guard 的电脑端与鸿蒙端是两个独立的应用，分别开发、分别发布。" +
        "桌面端基于 Electron + Vue 3 构建，把番茄钟与专注流程搬到键盘鼠标场景。",
      highlights: [],
      cover: "assets/screenshots/focus-guard-desktop.webp",
      demo: "",
      stack: ["Electron", "Vue 3", "JavaScript"],
      links: [
        { label: "GitHub", href: "https://github.com/zrb6666/focus-guard-pro", icon: "github" },
      ],
    },
    {
      name: "LX Focus",
      subtitle: "专注锁 + 音乐播放，做成一件事",
      year: "2026",
      status: "v0.1.0 · 开源",
      desc:
        "基于 LX Music 桌面版二次开发的专注工具。进入专注后应用会接管窗口与系统层交互，" +
        "专注期间自动播放指定歌单、休息时切歌或静音；每次专注的时长、完成情况和" +
        "「走神次数」都如实记录。设计取向是把分心的摩擦成本抬高，而不是造一个不可破解的笼子。",
      highlights: [
        "四层专注锁：窗口层（kiosk / 置顶 / 夺焦）、快捷键层、原生进程层、解锁码",
        "原生 C# 辅助进程吞掉 Win 键与 Alt+Tab，非 Windows 平台自动降级",
        "专注界面：环形计时、多轮循环、7 天柱状图与最近会话",
        "如实列出「已生效」与「无法防护」两组项目，不假装封死一切",
      ],
      cover: "assets/screenshots/lx-focus.webp",
      demo: "",
      stack: ["Electron", "Vue 3", "TypeScript", "C#"],
      links: [
        { label: "GitHub", href: "https://github.com/zrb6666/lx-music-focus", icon: "github" },
      ],
    },
    {
      name: "ClassIsland",
      subtitle: "班级大屏课表软件 · 团队协作",
      year: "2026",
      status: "团队项目",
      desc:
        "面向班级大屏的课表信息显示工具，基于 .NET + Avalonia 构建，支持 Windows / Linux / macOS。" +
        "能自动显示当前课程、上下课提醒、调课与多周轮换课表，并通过组件、主题和插件扩展。" +
        "我参与团队开发，提交了其中一部分代码。",
      highlights: ["团队协作开发，参与部分模块的代码提交"],
      cover: "assets/screenshots/classisland.webp",
      demo: "https://www.classisland.tech/",
      demoLabel: "官网",
      stack: [".NET", "Avalonia", "C#"],
      links: [
        { label: "GitHub", href: "https://github.com/ClassIsland/ClassIsland", icon: "github" },
      ],
    },
  ],

  /* ---------- 认证 ---------- */
  /* name 证书名称 / org 发证机构 / issued 发证日期 / valid 有效期至 / level 证书类型
     image 证书图片路径（可留空，填了卡片会出现「查看证书」） */
  certs: [
    {
      name: "HarmonyOS 应用开发者基础认证",
      org: "华为开发者联盟 · 开发者学堂",
      issued: "2026.10.24",
      valid: "2028.10.23",
      level: "Professional Certificate",
      image: "assets/screenshots/cert-harmony.webp",
    },
    {
      name: "人工智能初识微认证",
      org: "Huawei Certification · 学习与认证服务",
      issued: "2026.08.11",
      valid: "2028.08.10",
      level: "Micro Certification",
      image: "assets/screenshots/cert-ai.webp",
    },
  ],

  /* ---------- 技术栈 ---------- */
  stack: [
    { group: "应用开发", items: ["ArkTS", "ArkUI", "HarmonyOS NEXT", "TypeScript"] },
    { group: "桌面端", items: ["Electron", "Vue 3", "C# / .NET", "Avalonia"] },
    { group: "工程", items: ["Git / GitHub", "Gitee", "AGC 发布", "命令行"] },
  ],

  /* ---------- 时间线 ---------- */
  timeline: [
    { time: "2026", title: "Focus Guard 上架鸿蒙", desc: "鸿蒙端已在华为应用市场正式上架；桌面端基于 Electron 独立开发、独立发布。" },
    { time: "2026", title: "LX Focus", desc: "基于 LX Music 二次开发，把专注锁与音乐播放合并成一个桌面工具。" },
    { time: "2025", title: "成为 AGC 实名开发者", desc: "开始独立完成应用的设计、开发与发布。" },
    { time: "2025", title: "第一行 ArkTS", desc: "从语法开始，把想法第一次变成能装进手机的应用。" },
  ],

  /* ---------- 联系方式 ---------- */
  contacts: [
    { label: "Email", value: "zheng15185057329@126.com", href: "mailto:zheng15185057329@126.com", icon: "mail" },
    { label: "GitHub", value: "zrb6666", href: "https://github.com/zrb6666", icon: "github" },
    { label: "Gitee", value: "zrb114", href: "https://gitee.com/zrb114", icon: "gitee" },
  ],
};
