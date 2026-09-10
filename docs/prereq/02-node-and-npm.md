---
title: Node.js 与 npm：给 JavaScript 搭个舞台
---
# 02 · Node.js 与 npm：给 JavaScript 搭个舞台

> 一句话说清这课解决什么问题：搞明白为什么搭个 Wiki 还得装 Node.js，以及 npm 这个「应用商店」怎么帮你把 VitePress 请到电脑上。

## 它是什么？（大白话 + 一个生活比喻）

JavaScript（简称 JS）这门语言，原本只能在浏览器里跑——它是给网页写的伴舞，离开浏览器就没了舞台。可以想象成**剧场驻演**的演员：只在这家剧场（浏览器）演出，哪里都去不了。

**Node.js** 就是给 JS 搭的**巡演舞台**：装上它，JS 就能脱离浏览器，直接在你的电脑上独立运行。于是 JS 能干的事一下子多了——写后端、写脚本、跑建站工具，都行。

**npm** 是 JS 世界的**应用商店 + 快递员**（npm = Node Package Manager）。全世界的 JS 开发者把写好的工具包放到 npm 的中央仓库，你敲一条命令，npm 就帮你下载到本地。**依赖**这个词以后会常常见到，意思就是「别人写好的现成轮子」——你不必重新发明轮子，直接拿来用。

还有一个词：**package.json**——项目根目录下的一个文件，它是这个项目的**采购清单**：写明了项目叫什么、需要哪些依赖、各是什么版本。npm 看着它就知道该去进什么货。

## 为什么我们需要它？（和你要做的 Wiki 挂钩）

你可能会问：我以后要学 Python 做大模型应用，为什么现在要装 JS 的东西？

因为你的 Wiki 站点要用 **VitePress** 搭，而 VitePress 本身就是一个用 JS 写成的程序。它自己不会跑，得有舞台——这个舞台就是 Node.js。装好 Node.js 的同时，npm 也就附带装上了，你才能敲 `npm install` 把 VitePress 请到电脑上。

链条就是这样：**Node.js（舞台）→ npm（快递员）→ VitePress（建站工具）→ 你的 Wiki**。

## 动手试一试（核心命令）

先确认 Node.js 已装好（没装的话去 nodejs.org 下载 LTS 版安装即可）。打开 cmd，逐条试：

```bat
node --version
rem 查询 Node.js 的版本号（比如输出 v22.11.0），有版本号 = 装好了

node -e "console.log(1+1)"
rem 让 Node 直接执行一小段 JS 代码（-e = evaluate）；
rem console.log 是 JS 的「打印出来」，屏幕上会输出 2

npm --version
rem 查询 npm 的版本号，确认快递员也上岗了
```

以后在你的 Wiki 项目里，最常用的一条是：

```bat
npm install --registry=https://registry.npmmirror.com/
rem 按采购清单（package.json）下载所有依赖
```

这条命令在干什么？拆成三步看，npm install 本质上就是：

1. **读清单**：打开项目里的 package.json，看看要买哪些东西。
2. **去仓库下载**：到 npm 的中央仓库把这些包一个个拉下来。
3. **放进仓库间**：全部塞进项目下的 **node_modules** 文件夹——这个文件夹就是「轮子仓库」，几十上百个依赖都住在里面，不用手改，也别手动动它。

末尾的 `--registry=...` 是说「换一家分仓取货」：npm 的主仓库在国外，国内访问慢。**镜像**就是主仓在国内开的**分仓**，货完全一样但离你近。国内最常用的是 npmmirror，加上这个参数，下载速度常常快十倍。

## 常见报错与怎么读它

真实案例：

```
'node' 不是内部或外部命令，也不是可运行的程序或批处理文件。
```

上一课刚讲过：**环境变量**里的 **PATH** 是系统的地址簿，敲一个命令名，系统就按地址簿挨个文件夹找程序。这条报错的意思是：翻遍地址簿也没找到 node.exe。

两种可能，从报错本身推不出来，要自己排查：

1. **根本没装 Node.js**——解决：去 nodejs.org 下载 LTS 版安装，装完**关掉 cmd 重开**（PATH 的改动老窗口看不到）。
2. **装了，但没进地址簿**——常见于便携版（解压即用的绿色版，没人替你登记户口）。解决：把 node.exe 所在文件夹手动加进 PATH；或者像你的便携版 git 一样，每次敲完整路径。

判断到底是哪种最快的办法：打开安装位置看一眼，node.exe 在不在。在，就是 PATH 问题；不在，就是没装。

## 自测两题

**第 1 题**：你以后主要写 Python，为什么搭 Wiki 还要先装 Node.js？

::: details 看答案
因为建站工具 VitePress 是用 JavaScript 写的，它需要在 Node.js 这个「舞台」上才能运行；而下载安装 VitePress 用的 npm，也是随 Node.js 一起装上的。Python 是你以后写大模型应用用的，两者不冲突。
:::

**第 2 题**：`npm install` 慢得像蜗牛，加什么参数能提速？为什么有效？

::: details 看答案
加 `--registry=https://registry.npmmirror.com/`。npm 主仓库在国外，直连很慢；这个参数让 npm 从国内的**镜像**（npmmirror 分仓）取货——分仓的货和主仓一致，但物理上离你近，所以快得多。
:::

## 下一课

[03 · Git 与 GitHub](./03-git-and-github.md)——学会用「时光机」管理代码，把你的 Wiki 发布到网上。
