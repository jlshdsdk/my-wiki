---
title: Python 环境与 pip —— 把工具箱整理好
---
# 06 · Python 环境与 pip：开工前的最后一步

> 一句话说清这课解决什么问题：搞懂 Python 代码是怎么被电脑执行的、`pip install` 到底把东西装到了哪、以及为什么以后每个项目要一个独立「书架」。

## 它是什么？（大白话 + 生活比喻）

先想一个问题：电脑只认识 0 和 1，你写的 `print("hello")` 它凭什么懂？靠**解释器**（interpreter）——一个把 Python 代码「同声传译」成机器指令的程序。你每跑一次 `.py` 文件，都是解释器现场读一行、翻一行、执行一行。

你机器上的这位翻译官叫 `py`（Windows 的 py 启动器，帮你找到装好的 Python 3.14.4，和直接敲 `python` 效果基本一样，一句话带过：`py` 更保险，不怕 PATH 里指错人）。

但是翻译官只自带基础词汇。想要新能力（比如发 HTTP 请求），就得装**包**（package，别人写好的一套代码，拿来即用）。负责装包的快递员叫 **pip**——Python 世界的应用商店配送员，对应前端世界的 npm。

`py -m pip install 包名` 这条命令背后是三步：

1. 去官方仓库 PyPI（一个存着几十万个包的大仓库）找这本书；
2. 下载下来；
3. 装进本机的 `site-packages`——你可以理解为翻译官家的**书架**，以后 `import` 就是去书架上取书。

## 为什么我们需要它？

你的项目清单全靠它：

- 调智谱 GLM 的 API 要装 `openai` 或 `zhipuai` 包；
- 本课和上一课的例子已经用了 `requests` 包；
- 以后做网页服务、读文件、跑 agent，全是装包 → `import` → 干活。

还有一个提前打预防针的概念：**依赖**（dependency，你的项目运行所需要的那些包）。项目 A 依赖 1.0 版的某包、项目 B 依赖 2.0 版，全挤在一个书架上就会打架。解法是 **venv（虚拟环境）**：给每个项目一个独立书架，互不干扰。阶段 3 会带你亲手建，本课只需要记住这个比喻。

先扎实把本课的事做完：确认翻译官在岗、快递员在岗、能装包、装完能验证。

## 动手试一试

打开 cmd（按 `Win+R`，输 `cmd`，回车），依次敲下面四条命令：

```bat
py --version
```
这条命令在干什么：让翻译官自报版本号，期待输出 `Python 3.14.4`，确认它装好且在岗。

```bat
py -m pip --version
```
这条命令在干什么：确认快递员在岗，期待输出 `pip 26.0.1 ...`。`-m pip` 的意思是「用刚才那个翻译官（py）自带的 pip 模块」，而不是随便从 PATH 里抓一个来路不明的 pip。

```bat
py -m pip install requests
```
这条命令在干什么：走完「找书 → 下载 → 上架」三步，把 requests 包装进 site-packages 书架。看到一行行 `Downloading` / `Installing` 最后 `Successfully installed` 就是成功。

```bat
py -c "import requests; print(requests.__version__)"
```
这条命令在干什么：`-c` 表示直接执行一句代码——去书架取 requests 这本书，打印它的版本号。能打印出版本号，说明这本书确实装上了、取得到。这是「装完必验证」的好习惯。

**为什么要写成 `py -m pip` 而不是光秃秃的 `pip`？** 光敲 `pip` 时，Windows 会去 PATH（系统找程序的搜索清单）里翻，可能翻到另一个 Python 的 pip——结果包装进了别人的书架，你 `import` 时却取不到。`py -m pip` 把「翻译官」和「快递员」绑死成同一个人，从根上避开这个坑。

### 预告：装得慢怎么办——镜像

PyPI 的服务器在国外，国内下载可能龟速。**镜像**（mirror，仓库的国内分店）能救急，用清华源：

```bat
py -m pip install 包名 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

这条命令在干什么：`-i` 指定「去清华这家分店进货」，货是一样的，只是近得多。

## 常见报错与怎么读它

最经典的报错，你在 cmd 里跑一句 `import requests` 时可能见到：

```text
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ModuleNotFoundError: No module named 'requests'
```

怎么读报错（这是你人生必会技能，Python 报错叫 traceback，从下往上读）：

1. **最后一行是结论**：`ModuleNotFoundError: No module named 'requests'`——书架上没这本书。前面几行是「案发经过」（在哪个文件哪一行摔倒的），初学先只看最后一行。
2. **两种可能**：a) 根本没装过；b) 装了，但**装到别的书架去了**——比如你曾用光秃秃的 `pip install` 装到了另一个 Python 的 site-packages，而现在 `py` 用的是这个书架。

解决办法按顺序试：

- 没装过 → `py -m pip install requests` 装上；
- 装过还报错 → 用 `py -m pip show requests` 查这本书装到了哪、再重新用 `py -m pip install requests` 装进正确的书架；
- 装完**必跑验证命令**：`py -c "import requests; print(requests.__version__)"`，打印出版本才算数，不要凭「刚才装过了」想当然。

## 自测两题

**第 1 题**：`py -m pip install requests` 成功了，但运行 `import requests` 仍然报 `ModuleNotFoundError`，最可能的原因是什么？

::: details 点击看答案
包装进了「别的书架」：当年用的是不带 `py -m` 的 `pip`，它属于另一个 Python，装进了另一个解释器的 site-packages。而 `py` 启动的翻译官去自己的书架上找，当然找不到。解法：统一改用 `py -m pip install requests`，让翻译官和快递员是同一个人。
:::

**第 2 题**：`pip install` 下载特别慢甚至超时，一条命令怎么解决？

::: details 点击看答案
换国内镜像源，比如清华源：`py -m pip install 包名 -i https://pypi.tuna.tsinghua.edu.cn/simple`。`-i` 的意思是去指定的镜像分店下载，包的内容完全一样，只是服务器在国内、速度快得多。
:::

## 下一课

到此你的三件套齐了：会写 Markdown（网站的内容）、懂 HTTP 与 API（和 AI 对话的规则）、环境与 pip（工具箱就位）。下一阶段开始，你就要亲手写出第一段调用智谱 GLM 的 Python 代码，让你自己的 Wiki 项目真正「长出大脑」。
