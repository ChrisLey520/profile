# 李世林 / ChrisLey 个人主页 · Nightglow

「夜光 Nightglow」主题的个人品牌主页 —— 深墨底色 + 随光标移动的暖白补光,视觉从代表作《夜光》(夜间自拍补光神器)长出。中英双语、全维度 SEO、纯静态。

技术:**Astro 7**(静态输出)+ 原生 CSS 设计系统 + `@astrojs/sitemap`。

---

## 开发 & 构建

```bash
pnpm install      # 安装依赖
pnpm dev          # 本地开发 http://localhost:4321
pnpm build        # 产出静态站到 dist/
pnpm preview      # 预览构建结果
```

> 首次 `pnpm install` 会自动允许 esbuild 运行安装脚本(已在 package.json 的
> `pnpm.onlyBuiltDependencies` 声明),无需手动确认。

## 目录

```
src/
  data/site.ts          ← 所有内容(中英双语文案、作品、联系方式、SEO)集中在这里
  layouts/Base.astro    ← <head>、字体、hreflang、OG/Twitter、JSON-LD、补光脚本
  components/            ← Nav / Hero / About / Works / WorkCard / Services / Contact / Footer / Icon
  pages/index.astro      ← 中文首页 (/)
  pages/en/index.astro   ← 英文首页 (/en)
public/
  photos/               ← 照片占位图(见下)
  favicon.svg  og.png  og.svg  robots.txt
```

## 你要做的两件事

### 1. 换照片(生活照 / 工作照,非证件照)
替换 `public/photos/` 下的同名文件即可,尺寸建议:

| 文件 | 建议尺寸 | 用途 |
|------|---------|------|
| `hero.jpg`   | 600×750(竖 4:5) | 首屏主图 |
| `life-01.jpg`| 400×400 起 | 关于区大图 |
| `work-01.jpg`| 400×400 | 关于区小图 |
| `life-02.jpg`| 400×400 | 关于区小图 |

> 图片加载失败会自动隐藏、露出暖光占位块,不会破版。
> 换真人照后,建议同时更新 `public/og.png`(社交分享大图,1200×630),
> 或编辑 `public/og.svg` 后运行:`sips -s format png public/og.svg --out public/og.png`

### 2. 改内容
所有文字都在 `src/data/site.ts`,中(`copy.zh`)、英(`copy.en`)两套,以及作品数组 `works`、SEO 元数据 `seo`。改完重新 `npm run build`。

## 部署到 chrisley.site

产物是纯静态 `dist/`,任选其一:

- **Cloudflare Pages / Vercel / Netlify**:连接仓库,构建命令 `pnpm build`,输出目录 `dist`。
- **自有服务器**:把 `dist/` 传到静态目录即可。

部署后到 **Google Search Console** 与 **必应站长工具** 提交:
`https://chrisley.site/sitemap-index.xml`,加速收录。

## SEO 已内置

- 中英各一套 title / description / canonical,关键词含「李世林 / ChrisLey / 全栈工程师 / 夜光 / RelayHub」等
- `hreflang` zh-CN ↔ en + x-default
- JSON-LD:`Person`(别名 ChrisLey、职业、工作城市、代表作)+ `WebSite` + 作品 `CreativeWork`
- Open Graph + Twitter Card(`og.png`)
- `sitemap-index.xml` + `robots.txt`
- 语义化 HTML、单一 h1、图片 alt、静态预渲染秒开
