// ─────────────────────────────────────────────────────────────
//  站点内容集中管理 —— 改这一个文件即可更新全站中英文案与作品
//  All site content lives here. Edit once, update everywhere.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://chrisley.site';

/** 联系方式(中英通用) */
export const contact = {
  wechat: 'ChrisLey521',
  // 如有更多渠道,按需补充,会自动出现在联系区与 JSON-LD sameAs
  links: [] as { label: string; url: string }[],
};

/** 工作过的城市 —— 呼应"南北差异",以坐标标签形式展示 */
export const cities = {
  zh: ['武汉', '广州', '北京'],
  en: ['Wuhan', 'Guangzhou', 'Beijing'],
};

/** 照片区占位。替换 public/photos/ 下同名文件即可换成真实生活/工作照 */
export const photos = {
  hero: {
    src: '/photos/hero.jpg', // 建议 1200×1500 竖幅(生活照/工作照,非证件照)
    zh: '南舟 ChrisLey · 全栈工程师 · 工作照',
    en: 'Chris Ley (南舟), full-stack engineer at work',
  },
  gallery: [
    { src: '/photos/life-01.jpg', zh: '生活照一', en: 'Life photo one' },
    { src: '/photos/work-01.jpg', zh: '工作照一', en: 'Work photo one' },
    { src: '/photos/life-02.jpg', zh: '生活照二', en: 'Life photo two' },
  ],
};

/** 作品(中英双语),icon 为内联 SVG 键名,见 components/WorkCard 的图标表 */
export type Work = {
  key: string;
  icon: 'glow' | 'ai' | 'server' | 'ship';
  year: string;
  tags: string[];
  url?: string;
  zh: { name: string; role: string; desc: string };
  en: { name: string; role: string; desc: string };
};

export const works: Work[] = [
  {
    key: 'nightglow',
    icon: 'glow',
    year: '2024',
    tags: ['App', '小程序 / Mini Program', 'HarmonyOS'],
    zh: {
      name: '夜光',
      role: '独立开发 · 产品 & 全栈',
      desc: '夜间自拍补光神器。用屏幕作柔光箱,智能调节色温与亮度,暗光下也能拍清人脸。App 与小程序双端。',
    },
    en: {
      name: 'Nightglow',
      role: 'Solo · Product & full-stack',
      desc: 'A screen-as-softbox fill light for night selfies — smart color temperature and brightness so faces stay clear in the dark. Shipped as both App and mini program.',
    },
  },
  {
    key: 'relayhub',
    icon: 'ai',
    year: '2025',
    tags: ['AI', 'Service', 'API'],
    zh: {
      name: 'RelayHub',
      role: '主创 · 架构 & 后端',
      desc: '一站式 AI 服务中转平台,聚合多家模型能力,统一鉴权、计费与调度,让接入 AI 像接一根网线一样简单。',
    },
    en: {
      name: 'RelayHub',
      role: 'Founder · Architecture & backend',
      desc: 'A one-stop AI service relay that aggregates multiple model providers behind unified auth, billing and routing — plugging in AI as simply as plugging in a cable.',
    },
  },
  {
    key: 'dst-launcher',
    icon: 'ship',
    year: '2023',
    tags: ['桌面 / Desktop', '游戏服务器 / Game Server'],
    zh: {
      name: '饥荒,启动!',
      role: '独立开发',
      desc: '《饥荒》专有服务器一键启动台。图形化管理世界、mod、存档与联机配置,把繁琐的命令行开服变成点几下的事。',
    },
    en: {
      name: "Don't Starve, Launch!",
      role: 'Solo developer',
      desc: 'A one-click launcher for Don’t Starve dedicated servers. Manage worlds, mods, saves and networking from a GUI — turning fiddly command-line hosting into a few clicks.',
    },
  },
  {
    key: 'shipyard',
    icon: 'server',
    year: '2025',
    tags: ['Self-hosted', 'DevOps', 'Platform'],
    zh: {
      name: 'Shipyard',
      role: '主创 · 全栈',
      desc: '自托管应用部署平台。把容器编排、域名、证书与回滚收进一块面板,让个人开发者也能拥有自己的"小型云"。',
    },
    en: {
      name: 'Shipyard',
      role: 'Founder · Full-stack',
      desc: 'A self-hosted deployment platform. Container orchestration, domains, certificates and rollbacks in one panel — giving solo developers their own small cloud.',
    },
  },
];

/** 双语文案 */
export const copy = {
  zh: {
    lang: 'zh-CN',
    langLabel: '中文',
    altHref: '/en',
    siteTitle: '个人主页网站',
    name: '南舟',
    latin: 'ChrisLey',
    role: '全栈工程师',
    tagline: '把想法照亮成产品',
    heroLead:
      '独立开发者与全栈工程师。做过夜里也能拍清人脸的补光工具,也搭过一整套 AI 中转与自托管平台。相信好产品是被一点点"照亮"出来的。',
    nav: {
      about: '关于',
      works: '作品',
      services: '服务',
      contact: '联系',
    },
    photoPlaceholder: '照片占位',
    photoHint: '生活照 / 工作照 · 替换 public/photos/ 即可',
    citiesLabel: '工作足迹',
    about: {
      title: '关于我',
      body: [
        '十余年一线研发沉淀,历经武汉、广州、北京多地技术团队。从架构设计、核心开发到部署上线,独立掌控产品的完整生命周期——一件事从头负责到尾,更少的沟通损耗,更高的完成度,以及对每一处细节的把控。',
        '擅长把复杂的技术问题收敛为简洁、可靠的产品方案:高并发的后端服务、稳定的系统架构,与打磨到位的前端体验,始终以工程师的严谨和作品级的标准交付,经得起真实场景的长期检验。',
      ],
      facts: [
        { k: '定位', v: '全栈架构 · 独立交付' },
        { k: '技术', v: 'Web · 移动端 · 服务端' },
        { k: '标准', v: '严谨 · 高完成度 · 可维护' },
      ],
    },
    works: {
      title: '代表作品',
      lead: '一些我从 0 做到 1、并持续打磨的东西。',
      visit: '了解更多',
    },
    services: {
      title: '合作 · 个人主页定制',
      lead: '接个人主页网站定制业务',
      body: '为个人、创作者与团队定制高质感、可被搜索到的个人主页。从视觉方向、内容梳理到 SEO 与部署,一并交付。想拥有一个像这样的站点?微信聊聊。',
      stat: { value: '33', label: '位客户已获得优质服务与交付' },
      points: [
        '独特视觉方向,拒绝模板脸',
        '全维度 SEO,一搜就能找到你',
        '静态高性能,秒开、稳定、易维护',
      ],
      cta: '微信联系我',
    },
    contact: {
      title: '联系我',
      lead: '有产品想法、定制需求,或只是想认识一下,都欢迎。',
      wechatLabel: '微信',
      copy: '复制',
      copied: '已复制',
    },
    footer: {
      rights: '版权所有',
      built: '用 Astro 构建 · 夜光设计',
    },
  },
  en: {
    lang: 'en-US',
    langLabel: 'EN',
    altHref: '/',
    siteTitle: 'Personal Website',
    name: 'Chris Ley',
    latin: '南舟',
    role: 'Full-stack Engineer',
    tagline: 'Turning ideas into products, one light at a time',
    heroLead:
      'Independent developer and full-stack engineer. I have built a fill light that keeps faces clear in the dark, and whole platforms for AI relaying and self-hosting. I believe good products are lit up one small detail at a time.',
    nav: {
      about: 'About',
      works: 'Work',
      services: 'Services',
      contact: 'Contact',
    },
    photoPlaceholder: 'Photo placeholder',
    photoHint: 'Life / work photo · replace public/photos/',
    citiesLabel: 'Worked in',
    about: {
      title: 'About',
      body: [
        'Over a decade of front-line engineering, across technical teams in Wuhan, Guangzhou and Beijing. From architecture and core development to deployment and launch, I own the full product lifecycle end to end — less overhead, higher completeness, and control over every detail that matters.',
        'I specialise in distilling complex technical problems into clean, dependable solutions: high-concurrency back-end services, resilient system architecture, and thoroughly polished front-end experiences — delivered with an engineer’s rigour and a maker’s standard, built to hold up in the real world over time.',
      ],
      facts: [
        { k: 'Focus', v: 'Full-stack architecture · Solo delivery' },
        { k: 'Stack', v: 'Web · Mobile · Server' },
        { k: 'Standard', v: 'Rigorous · Complete · Maintainable' },
      ],
    },
    works: {
      title: 'Selected Work',
      lead: 'A few things I took from 0 to 1 and kept polishing.',
      visit: 'Learn more',
    },
    services: {
      title: 'Work with me · Personal sites',
      lead: 'Custom personal websites, on commission',
      body: 'I design high-craft, search-friendly personal sites for individuals, creators and teams — from visual direction and content to SEO and deployment, delivered end to end. Want a site like this one? Let’s talk on WeChat.',
      stat: { value: '33', label: 'clients served and delivered to date' },
      points: [
        'A distinctive visual direction — never a template face',
        'Full-spectrum SEO so people find you at a glance',
        'Static and fast — instant loads, stable, easy to maintain',
      ],
      cta: 'Contact me on WeChat',
    },
    contact: {
      title: 'Get in touch',
      lead: 'Product ideas, commissions, or just to say hi — all welcome.',
      wechatLabel: 'WeChat',
      copy: 'Copy',
      copied: 'Copied',
    },
    footer: {
      rights: 'All rights reserved',
      built: 'Built with Astro · Nightglow design',
    },
  },
};

export type Lang = keyof typeof copy;

/** SEO 元数据(中英) */
export const seo = {
  zh: {
    title: '南舟 (ChrisLey) — 全栈工程师 · 独立开发者 | 个人主页',
    description:
      '南舟(ChrisLey),全栈工程师、独立开发者。代表作:夜光(夜间自拍补光 App/小程序)、RelayHub AI 服务、饥荒启动台、Shipyard 自托管平台。曾在武汉、广州、北京工作。承接个人主页网站定制。',
    keywords:
      '南舟,ChrisLey,李世林,全栈工程师,独立开发者,夜光,补光App,RelayHub,Shipyard,饥荒启动,个人主页定制,武汉,广州,北京',
    ogLocale: 'zh_CN',
  },
  en: {
    title: 'Chris Ley (南舟) — Full-stack Engineer & Indie Developer',
    description:
      'Chris Ley (ChrisLey / 南舟), full-stack engineer and independent developer. Work: Nightglow (night selfie fill-light app), RelayHub AI relay, a Don’t Starve server launcher, and Shipyard self-hosting platform. Available for personal-site commissions.',
    keywords:
      'Chris Ley,ChrisLey,南舟,李世林,full-stack engineer,indie developer,Nightglow,RelayHub,Shipyard,personal website,portfolio',
    ogLocale: 'en_US',
  },
};
