import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"前置知识 · 课程总览","description":"","frontmatter":{"title":"前置知识 · 课程总览"},"headers":[],"relativePath":"prereq/index.md","filePath":"prereq/index.md"}');
const _sfc_main = { name: "prereq/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="前置知识-·-课程总览" tabindex="-1">前置知识 · 课程总览 <a class="header-anchor" href="#前置知识-·-课程总览" aria-label="Permalink to &quot;前置知识 · 课程总览&quot;">​</a></h1><blockquote><p>每一课都按同一个套路讲：<strong>它是什么（大白话 + 比喻）→ 动手试一试（10 行以内）→ 常见报错怎么读 → 自测两题</strong>。自测题答案默认折叠，先自己想，再点开对照。</p></blockquote><h2 id="课程表" tabindex="-1">课程表 <a class="header-anchor" href="#课程表" aria-label="Permalink to &quot;课程表&quot;">​</a></h2><table tabindex="0"><thead><tr><th>编号</th><th>课程</th><th>一句话介绍</th><th>状态</th></tr></thead><tbody><tr><td>01</td><td><a href="./01-command-line.html">命令行</a></td><td>用打字指挥电脑；看懂 PATH 和「不是内部或外部命令」</td><td>⬜ 待学习</td></tr><tr><td>02</td><td><a href="./02-node-and-npm.html">Node.js 与 npm</a></td><td>为什么做 Python 项目还要装 Node；npm 是什么</td><td>⬜ 待学习</td></tr><tr><td>03</td><td><a href="./03-git-and-github.html">Git 与 GitHub</a></td><td>给代码拍快照的时光机，和放快照的云端仓库</td><td>⬜ 待学习</td></tr><tr><td>04</td><td><a href="./04-markdown.html">Markdown</a></td><td>这座 Wiki 里每一页用的写作格式</td><td>⬜ 待学习</td></tr><tr><td>05</td><td><a href="./05-http-and-api.html">HTTP 与 API</a></td><td>程序之间怎么「点菜」；API Key 是什么</td><td>⬜ 待学习</td></tr><tr><td>06</td><td><a href="./06-python-env.html">Python 环境与 pip</a></td><td>解释器、pip、虚拟环境——项目一的直接地基</td><td>⬜ 待学习</td></tr></tbody></table><h2 id="建议的学习顺序" tabindex="-1">建议的学习顺序 <a class="header-anchor" href="#建议的学习顺序" aria-label="Permalink to &quot;建议的学习顺序&quot;">​</a></h2><ol><li><strong>01 → 03</strong>：工具三件套。搭 Wiki 的当晚已经真刀真枪用过它们，学完你会明白当时每条命令在干什么。</li><li><strong>04</strong>：随时可学。学完就能开始往 Wiki 里写自己的笔记。</li><li><strong>05 → 06</strong>：项目一开工前的地基课。学完这两课，调大模型 API 的每一步你都能看懂。</li></ol><div class="tip custom-block"><p class="custom-block-title">状态标记约定</p><p>⬜ 待学习 / 🟨 学了没自测 / ✅ 自测通过。学完一课回来更新这张表，并顺手检查<a href="/my-wiki/glossary/">术语表</a>里有没有新术语要补。</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("prereq/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
