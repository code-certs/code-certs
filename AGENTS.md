# `www` 模块 AGENTS 指南

本文件适用于 `www/` 目录。

## 模块定位

- 这是 `Code: Certs` 的官网，技术栈是 Nuxt 3 + Tailwind CSS。
- 当前站点是轻量级静态站点，核心页面只有首页，结构简单但承担产品介绍和导流作用。
- 部署目标仍是 FC 上的静态站点，但 `s.yaml` 现已改成 `fc3 + website-fc-serve`：先 `yarn generate` 产出静态资源，再由插件注入 `serve` 运行时包装。

## 核心代码结构

- `pages/index.vue`：首页主体，当前大量内容是静态文案与静态计数。
- `layouts/default.vue`：统一页面框架。
- `components/AppHeader.vue` / `components/AppFooter.vue`：头尾公共组件。
- `generate-git-info.js`：静态生成前的辅助脚本。
- `s.yaml`：发布到 FC 的静态站点配置，`codeUri` 指向 `.output/public`。

## 当前实现中的关键事实

- 本模块偏静态站点思路，真正发布时更接近 `yarn generate` 输出静态文件，而不是依赖服务端运行时能力。
- `yarn generate` 前会先执行 `pregenerate`，因此改动生成链路时要一起检查 `generate-git-info.js`。
- 首页统计数字目前是硬编码数据，源码里已经留了 “fetch api” 的 TODO；若要改成动态数据，属于架构变更，不是简单文案调整。
- 当前文案和页面目标用户主要是中文读者，改文案时优先保留中文语境和产品导向。
- `website-fc-serve` 只在 `pre-deploy` 阶段生效，函数运行时、Nodejs22 官方层、`serve` 依赖与 `customRuntimeConfig` 都由插件自动注入；不要手工把这些配置再写回 `s.yaml`。
- 站点当前不是 SPA，`website-fc-serve` 默认首页仍是 `index.html`，不要无故打开 `fallbackToIndex`。

## 开发与验证命令

- 安装依赖：`yarn install`
- 本地开发：`yarn dev`
- 构建：`yarn build`
- 静态生成：`yarn generate`
- 本地预览：`yarn preview`
- 发布：`yarn deploy`

## 已知注意事项

- `README.md` 只做了非常简短的仓库介绍，真正的操作约束以 `package.json`、`s.yaml` 和本文件为准。
- `s.yaml` 使用了 `dummy-handler` 与 `custom` runtime 组合来承载静态站点发布，不要在不了解 DevsApp 流程的情况下随意改动。
- 如果只是改首页视觉或文案，不要顺手引入需要额外服务端接口的能力。

## 改动建议

- 优先保持静态站点可生成、可发布这一前提，较大改动后至少跑一次 `yarn generate`。
- 改登录入口或产品跳转链接时，要同步确认 `console` 的线上地址是否一致。
- 新增页面时先确认它是否真的属于官网职责，而不是应该放到 `console` 管理台里。
