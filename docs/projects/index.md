---
title: 项目复现 · 总览
---

# 项目复现 · 总览

> 规矩：一次只推进一个项目；先看候选卡片做选择，再学前置课，然后按里程碑边做边记，最后写复盘。

## 目录结构约定

```txt
projects/
└── <项目名>/
    ├── index.md   # 开题：原项目是干嘛的、架构图、最小复现范围
    ├── notes.md   # 过程笔记：每个里程碑做了什么、代码讲解
    └── retro.md   # 复盘：与原项目的差距、可继续扩展的方向
```

::: tip 数据说明
以下卡片数据由导师于 **2026-09-11** 经 GitHub API 逐个核实（star 数与最近推送时间）。「活跃」= 近 6 个月内有提交。
:::

## 阶段一 · API 调用与聊天助手

### 卡片 1-A · openai/openai-cookbook ⭐ 首选

| 项目 | 内容 |
|---|---|
| 仓库 | [openai/openai-cookbook](https://github.com/openai/openai-cookbook) · 75,893★ · 活跃（2026-09-10 有推送） |
| 一句话 | OpenAI 官方 API 示例库：每个 notebook 独立成课，从第一条聊天请求到流式输出 |
| 能学到 | chat.completions 调用、流式输出、多轮 messages、Embedding——阶段一知识点全覆盖 |
| 最小复现 | 挑 2~3 个入门 notebook 跑通并改写成智谱版；跳过 Assistants 系列（那是另一套 API）。单卡约数小时 |
| 前置知识 | 前置课 05（HTTP/API）、06（Python/pip），会装 Jupyter 更好 |
| 接智谱 GLM | **容易**：多数示例只改两行（base_url + key） |

### 卡片 1-B · microsoft/generative-ai-for-beginners

| 项目 | 内容 |
|---|---|
| 仓库 | [microsoft/generative-ai-for-beginners](https://github.com/microsoft/generative-ai-for-beginners) · 119,484★ · 活跃（2026-09-10） |
| 一句话 | 微软官方 21 课生成式 AI 入门课（英文为主，Jupyter Notebook） |
| 能学到 | LLM 基础、prompt、流式、多轮、function calling（第 1~11 课贴题） |
| 最小复现 | 只做 L1/L2/L4/L5/L11 五课；跳过图像与 Azure 部署课。约 1~2 周 |
| 前置知识 | 同上，另需硬着头皮读英文（可配翻译） |
| 接智谱 GLM | **要改**：示例多用 OpenAI/Azure SDK，需改 base_url |

### 卡片 1-C · datawhalechina/llm-cookbook（中文辅助教材）

| 项目 | 内容 |
|---|---|
| 仓库 | [datawhalechina/llm-cookbook](https://github.com/datawhalechina/llm-cookbook) · 24,667★ · **已停更**（2025-06，但 prompt 教学不时效敏感） |
| 一句话 | 吴恩达《ChatGPT Prompt Engineering》等课程的中文版合集 |
| 定位 | 不作主项目，作 1-A 的**中文对照教材**：英文课看不懂的地方来这里找对应章节 |

**阶段一建议**：主做 **1-A**（每个 notebook 就是一个天然的最小复现单位），卡壳时翻 **1-C** 中文版。

## 阶段二 · RAG 知识库问答

### 卡片 2-A · datawhalechina/llm-universe ⭐ 首选

| 项目 | 内容 |
|---|---|
| 仓库 | [datawhalechina/llm-universe](https://github.com/datawhalechina/llm-universe) · 13,938★ · 活跃（2026-08-27） |
| 一句话 | Datawhale《动手学大模型应用开发》：面向小白的中文教程，**原生支持智谱 GLM API** |
| 能学到 | API 调用 → Prompt 工程 → Embedding → 向量库 → RAG 问答全流程 |
| 最小复现 | 跟第 1 部分（API → 知识库 → RAG 应用）走完；跳过第 3 部分开源案例。约 1~2 周 |
| 前置知识 | 前置课 05、06；教程用 LangChain + Streamlit（中等重量，跟着装即可） |
| 接智谱 GLM | **容易（原生支持）**：教程本身就列智谱为四大官方 API 之一 |

### 卡片 2-B · HKUDS/LightRAG（加餐）

| 项目 | 内容 |
|---|---|
| 仓库 | [HKUDS/LightRAG](https://github.com/HKUDS/LightRAG) · 39,544★ · 活跃（2026-09-10） |
| 一句话 | 论文《Simple and Fast RAG》官方实现，pip 装完即跑的生产级 RAG |
| 能学到 | 真实 RAG 系统的最短路径：切片 → embed → 检索 → 生成，外加图+向量混合检索 |
| 最小复现 | `pip install lightrag-hku` 跑通官方 demo，再读核心流程源码；用内置本地向量库，无需装数据库服务。约半天~1 天 |
| 前置知识 | 建议先做完 2-A，再来这里「看真系统长什么样」 |
| 接智谱 GLM | **容易**：自带 OpenAI 兼容示例脚本，配 base_url 即可 |

**阶段二建议**：主做 **2-A** 打地基，**2-B** 作加餐体验生产级实现。

## 阶段三 · Agent 智能体

### 卡片 3-A · datawhalechina/hello-agents ⭐ 首选

| 项目 | 内容 |
|---|---|
| 仓库 | [datawhalechina/hello-agents](https://github.com/datawhalechina/hello-agents) · 78,264★ · 活跃（2026-09-04） |
| 一句话 | Datawhale《从零开始构建智能体》中文教程 16 章 |
| 能学到 | 第 4 章手写 ReAct 等范式、第 7 章从零造一个智能体框架——正是「手写工具循环」的靶子 |
| 最小复现 | 只做 Ch1~4 + Ch7；跳过记忆/强化学习/MCP 进阶篇和三个大项目。约 2~3 周 |
| 前置知识 | Python 函数/字典/类/异常 + 阶段一、二基础 |
| 接智谱 GLM | **容易**：基于 OpenAI 原生 SDK，改 base_url + key |

### 卡片 3-B · NirDiamant/GenAI_Agents

| 项目 | 内容 |
|---|---|
| 仓库 | [NirDiamant/GenAI_Agents](https://github.com/NirDiamant/GenAI_Agents) · 24,231★ · 活跃（2026-09-08） |
| 一句话 | 50+ 个独立 notebook 的 Agent 技巧库，从最小工具循环到多智能体 |
| 能学到 | 基础篇有纯 Python 手写的最小工具调用循环（含重试陷阱等实战细节） |
| 最小复现 | 只做基础篇 5~8 个 notebook；跳过 LangGraph/MCP/多智能体篇。约 1~2 周 |
| 接智谱 GLM | **要改（挑基础篇则容易）**；Groq/Gemini 专属篇跳过 |

### 卡片 3-C · openai/openai-agents-python（对答案用）

| 项目 | 内容 |
|---|---|
| 仓库 | [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · 29,329★ · 活跃（2026-09-09） |
| 一句话 | OpenAI 官方轻量 Agent 框架（Swarm 继任者），hello world 仅 6 行 |
| 定位 | 手写完 3-A 后来这里「对答案」：看官方怎么抽象 Agent/Tool/Handoff |
| 注意 | 全异步 API（async/await），接智谱需查文档配自定义 client——作收尾对照，不作入门 |

**阶段三建议**：主做 **3-A** 手写循环，**3-C** 放最后当参考答案。

## 三个阶段的推荐组合

| 阶段 | 主项目 | 辅助 | 预计总时长 |
|---|---|---|---|
| 一 | openai-cookbook 入门卡 | llm-cookbook 中文对照 | 1~2 周 |
| 二 | llm-universe 第 1 部分 | LightRAG 加餐 | 2~3 周 |
| 三 | hello-agents Ch1~4+7 | GenAI_Agents 基础篇 | 2~3 周 |

::: warning 通用提醒
本机 Python 是很新的 3.14，个别带编译依赖的库（如 chromadb）可能还没有对应安装包；真遇到装不上的库，优先考虑用 Python 3.11/3.12 建虚拟环境，别死磕。
:::

## 我的选择

- [ ] 项目一：（待定，推荐 openai-cookbook + llm-cookbook 对照）
- [ ] 项目二：（待定，推荐 llm-universe）
- [ ] 项目三：（待定，推荐 hello-agents）
