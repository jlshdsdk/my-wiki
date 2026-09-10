# my-wiki · 奕博的学习小站

从零开始的大模型应用开发学习 Wiki。基于 [VitePress](https://vitepress.dev/) 构建，由 GitHub Pages 托管、GitHub Actions 自动部署：**写完笔记 push 一下，网页自动更新**。

## 本地运行

需要 Node.js 18 及以上版本。

```bash
npm install        # 安装依赖（本项目已通过 .npmrc 配置 npmmirror 镜像）
npm run docs:dev   # 本地开发预览，浏览器打开 http://localhost:5173
npm run docs:build # 构建静态页面到 docs/.vitepress/dist
```

## 目录结构

| 目录 | 内容 |
|---|---|
| `docs/guide/` | 学习路线与总览 |
| `docs/prereq/` | 前置知识课（命令行、Git、HTTP、API 等） |
| `docs/projects/` | 项目复现（每个项目一个子目录） |
| `docs/pitfalls/` | 踩坑记录 |
| `docs/glossary/` | 术语表 |

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并发布到 GitHub Pages：
https://jlshdsdk.github.io/my-wiki/
