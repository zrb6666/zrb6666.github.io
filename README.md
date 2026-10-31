# 个人作品集

纯静态站点，无框架、无运行时依赖，可直接托管在任意静态服务上。

性能：图片全部为 WebP（首屏图 35KB），样式内联进 HTML，首屏只有 2 次网络请求。

## 结构

```
index.html            页面骨架（样式已内联在 <style> 中）
style.css             样式源文件（仅作编辑用，页面不引用）
data.js               内容配置（改内容只改这里）
main.js               渲染与交互
assets/screenshots/   项目截图（webp）
```

## 更新内容

所有文案、项目、技术栈、时间线与联系方式都在 `data.js` 中，修改后刷新即可生效，无需改动 HTML / CSS。

新增项目时，在 `data.js` 的 `projects` 数组里追加一项：

```js
{
  name: "项目名",
  subtitle: "一句话定位",
  status: "状态标签",
  year: "2026",
  desc: "两到三句简介。",
  highlights: ["亮点一", "亮点二"],
  cover: "assets/screenshots/your-project.png",
  demo: "",
  stack: ["Electron", "Vue 3"],
  links: [{ label: "GitHub", href: "https://github.com/...", icon: "github" }],
}
```

截图缺失时会自动降级为代码风封面，不会出现裂图或布局塌陷。

## 部署

- GitHub Pages：仓库 Settings → Pages → Source 选 `Deploy from a branch`，分支 `main`、目录 `/ (root)`。
- Cloudflare Pages / Netlify / Vercel：连接仓库或直接上传本目录，无需构建命令，输出目录填 `/`。
- 任意静态托管：把本目录整体上传到网站根目录即可。

## 说明

站点不加载任何外部字体、CDN 或分析脚本，可离线打开，也不依赖任何付费服务。
