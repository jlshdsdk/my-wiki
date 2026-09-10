---
title: HTTP 与 API —— 程序之间怎么对话
---
# 05 · HTTP 与 API：调大模型前必须懂的一顿饭

> 一句话说清这课解决什么问题：让你明白「调用大模型 API」这句话背后到底发生了什么——其实就是让你的程序向远方的服务器下一份「电子订单」。

## 它是什么？（大白话 + 生活比喻）

**HTTP** 是浏览器和服务器之间约定好的「对话语言」。你每次打开网页，背后都是一场对话：浏览器提一个**请求**（request，顾客下单），服务器回一个**响应**（response，服务员端菜上桌回话）。

把它想象成去餐厅吃饭：

- **你进餐厅看菜单** → 浏览器向网站要网页
- **你下单** → 浏览器向服务器提交数据（比如登录表单）
- **服务员回话「菜来了」或「没这道菜」** → 服务器返回成功或错误

对话总要有个「点谁」。**URL**（网址）就是订单上的地址，它由三段组成：

```
https://open.bigmodel.cn/api/paas/v4/
└─协议┘└────域名────┘└────路径────┘
```

- **协议**：用什么规则对话，`https` 表示加密过的 HTTP，放心传秘密。
- **域名**：哪家店，`open.bigmodel.cn` 就是智谱的服务器。
- **路径**：店里哪个窗口，`/api/paas/v4/` 表示「AI 服务的四号窗口」。

在餐厅里点菜有两种典型动作，HTTP 里也有：

- **GET** = 看菜单：只是**拿数据**，不改变什么。
- **POST** = 下单：**交数据**过去，让服务器办事（比如把你写的对话交给 AI）。

服务员回话时带一个**状态码**（status code，三个数字表示结果），常见的用吃饭来记：

| 状态码 | 大白话 |
| ------ | ------ |
| 200 | 菜来了，一切正常 |
| 404 | 没这道菜（地址/路径写错了） |
| 401 | 会员卡无效（没登录 / Key 不对） |
| 500 | 厨房着火了（服务器自己出了故障） |

## 为什么我们需要它？

因为**API** 就是「程序对程序的服务窗口」：API（Application Programming Interface，应用程序接口）让一个程序不用打开网页点鼠标，直接用代码向另一个程序要东西、交东西。

你的项目正是这样：你要写的不是「ChatGPT 网页」，而是**自己的程序调用智谱 GLM 的 API**。点这顿饭需要三样东西：

1. **API Key**：会员卡号，一串只有你知道的密码。服务器靠它证明「你是谁、给你记账收费」。之后去 https://open.bigmodel.cn 注册就能拿到。
2. **JSON**：点菜单的标准格式。JSON（JavaScript Object Notation）是一种「键值对」写法——冒号左边是名字，右边是内容，人和程序都好读：

```json
{
  "model": "glm-4",
  "messages": [
    { "role": "user", "content": "你好，介绍一下你自己" }
  ]
}
```

3. **那个地址**：https://open.bigmodel.cn/api/paas/v4/ ，这是智谱的 OpenAI 兼容接口（意思是它学着 OpenAI 的订单格式做菜，你以后换工具、抄教程都方便）。

一句话总结未来的项目：**调大模型 API = POST 一段对话 JSON 过去，服务器把 AI 的回复 JSON 发回来。** 就这么简单。

## 动手试一试

先执行下面这条命令，把 `requests` 工具包装好（它是做什么的、为什么这么写，下一课 06 细讲）：

```
py -m pip install requests
rem 用 Python 自带的 pip 装 requests 这个第三方包
```

然后新建 `test_api.py`：

```python
import requests  # 引入发请求的工具包

resp = requests.get("https://api.github.com/zen")  # GET 一个公开测试接口
print(resp.status_code)  # 打印状态码，期待 200
print(resp.text)         # 打印服务器返回的正文
```

逐行解释：

- `import requests` → 把「发 HTTP 请求」的工具搬进你的程序。
- `requests.get(网址)` → 向这个地址发一个 **GET** 请求（看菜单），返回值存进 `resp`。
- `resp.status_code` → 服务员的回话编号，`200` 就是成功。
- `resp.text` → 回话的正文内容。GitHub 这个接口会回一句随机哲理短句，很有趣。

跑起来看到 `200` 和一句英文，恭喜——你已经完成了一次真正的 HTTP 对话。以后调 GLM，只是把 `get` 换成 `post`、附上 API Key 和 JSON 菜单而已。

## 常见报错与怎么读它

**案例一：网不通。** 报错原文长这样（最后一行是重点）：

```text
requests.exceptions.ConnectionError:
HTTPSConnectionPool(host='api.github.com', port=443):
Max retries exceeded with url: /zen
(Caused by NameResolutionError("Failed to resolve 'api.github.com'"))
```

怎么读：**先看异常类型的最后一行**。类型是 `ConnectionError`——「连不上」；括号里 `Failed to resolve` 说明连域名都没解析出来。线索指向：网断了、代理没开，或**网址打错了**。解决顺序：先确认能上网 → 再核对 URL 有没有拼错（比如少个字母、多了空格）。注意这和 404 不同：404 是「店找到了但没这道菜」，ConnectionError 是「店根本找不到」。

**案例二：会员卡无效。** 程序不报错，但打印的状态码是 `401`：

```text
401
{"error": {"code": "401", "message": "Invalid API key"}}
```

怎么读：异常没有抛出，所以这次要看**状态码**。`401` 对照上表 = 会员卡无效；再看正文 JSON 里的 `message`，明说 `Invalid API key`。解决：检查 Key 有没有复制全、有没有漏掉传给服务器的那一步（以后代码里是往请求头 headers 里放 Key，忘了放就会 401）。

养成肌肉记忆：**报错先看异常最后一行，没异常先看状态码**，这两个信息能解决九成问题。

## 自测两题

**第 1 题**：把一段对话发给智谱 GLM 让它回复，应该用 GET 还是 POST？状态码 500 大概是谁的问题？

::: details 点击看答案
用 **POST**——你在「交数据」让服务器办事，属于下单而不是看菜单。500 = 厨房着火，是**服务器那边**的问题（智谱的机器出故障了），不是你的代码错，等一会儿重试即可。
:::

**第 2 题**：`https://open.bigmodel.cn/api/paas/v4/` 这串地址里，域名是哪一段？状态码 401 和 404 分别说明什么？

::: details 点击看答案
域名是 `open.bigmodel.cn`；`https` 是协议，`/api/paas/v4/` 是路径。401 = 会员卡无效，即 API Key 没传对；404 = 没这道菜，即 URL 路径写错了（或接口地址不存在）。
:::

## 下一课

你懂了「对话规则」，下一课补上「工具箱」：**Python 环境与 pip**——解释器是什么、`py -m pip install` 到底把东西装到了哪、为什么要虚拟环境。装好环境，就正式开工。
