# WePY

------

> 腾讯官方出品的小程序快速开发框架，贴近`MVVM`架构，支持`ES6、7`，风格接近`Vue`

WePY安装：

```zsh
# 安装WePY框架
sudo npm install -g wepy-cli@1.7.3
```

项目初始化：

```zsh
# 初始化项目结构
wepy init standard myproject
# wepy固定写法 standard为模板类型 wepy list查看所有可用的项目模板 myproject项目名称
# 勾选ESLint选项-约束代码风格
```

WePY项目与小程序之间的关系：

- `wepy`项目为模板项目，需要 **编译** 为小程序项目才可运行
- `wepy`项目特点：开发人员手动编写、无法直接做小程序使用
- 小程序特点：根据模板自动生成、可以运行查看项目效果、随后发布上线

实时编译`WePY`项目：

- 运行`cd ${xxx --repo}`切换至`WePY`项目根目录
- 运行`npm install`安装`WePY`项目依赖项
- 运行`wepy build --watch`开启实时编译，此时循环监听 WePY项目中源代码的改变，自动编译生成小程序项目，生成的小程序存放在`dist`目录。

如果是 wepy2.xx 可能出现问题-解决方案请见[博客](https://zairesinatra.com/solve-wepy-error/)。同时窗口不可关闭，否则实时编译功能暂停。

WePY项目目录结构：

```js
├── dist                   小程序运行代码目录（该目录由 wepy build 指令自动编译生成，请不要直接修改该目录下的文件）
├── node_modules           运行 npm install 安装的依赖包所在目录
├── src                    源代码目录（该目录为使用 WePY 框架后的开发目录）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   └── com_${x}.wpy   可复用的 WePY 组件 x
|   ├── pages              WePY 页面目录（属于完整页面）
|   |   ├── index.wpy      index 页面（经 build 后，会在 dist 目录下的 pages 目录生成 index.js、index.json、index.wxml 和 index.wxss 文件）
|   |   └── other.wpy      other 页面（经 build 后，会在 dist 目录下的 pages 目录生成 other.js、other.json、other.wxml 和 other.wxss 文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经 build 后，会在dist 目录下生成 app.js、app.json 和 app.wxss 文件）
└── package.json           项目的 package 配置
```

#### WePY项目加在微信开发者工具

`1.7.0` 之后的版本`init`新生成的代码包会在根目录包含`project.config.json`文件，之前生成的代码包可能不存在`project.config.json`文件。 检查根目录是否存在该文件。

如果存在，使用`微信开发者工具`-->`添加项目`，`项目目录`请选择项目根目录即可根据配置完成项目信息自动配置。

#### 解决ESLint报错问题

首次将`WePY`项目加载微信开发者工具会报两个错误，找到对应位置删除多余空行。

#### wpy文件的组成部分

`.wpy`文件组成：`<style>`、`<template>`、`<script>`

那么 `<style>` 部分对应于原生的 `.wxss` 文件、`<template>` 对应原生 `.wxml` 部分、`<script>` 部分中 `config` 对象对应于 `.json` 文件，而处此外的部分对应于 `.js` 文件。

小程序入口文件 `app.wpy` 不需要 `template` ，编译时会被忽略。

其中 `.wpy` 文件中的三大标签都支持 `lang` 与 `src` 属性，前者决定编译过程，后者决定是否外联代码，且 `src` 属性生效会忽略内联代码。

`lang`和`src`属性：`.wpy`文件的`script`、`template`、`style`三个标签都支持`lang`和`src`属性，`lang`决定了其代码的编译过程、`src`决定是否外联代码，存在`src`属性且有效时，会忽略内联代码。

| 标签       | `lang`默认值 | `src`支持值                              |
| ---------- | ------------ | ---------------------------------------- |
| `style`    | `css`        | css、`less`、`scss`、`stylus`、`postcss` |
| `template` | `wxml`       | `wxml`、`xml`、`pug`                     |
| `script`   | `babel`      | `babel`、`TypeScript`                    |

#### 代码高亮

VSCode 里安装`Vue`的语法高亮插件`Vetur`-打开任意.wpy文件-右下角选择语言模式-弹出窗口选择`.wpy`配置文件关联语言模式选择`Vue`-在`VSCode`编辑器设置//文件-首选项-设置-`settings.json`中添加`"files.associations":{"*.wpy":"vue"}`

#### 小程序入口文件`app.wpy`

入口文件`app.wpy`所声明的小程序实例继承自`wepy.app`类，包含一个`config`属性和其他属性、方法、事件。在`build`编译期间：

`config`属性谁被编译成小程序的`app.json`全局配置文件

`config`属性以外的其他节点会被编译为小程序的`app.js`文件

`style`标签会被编译为小程序的`app.wxss`全局样式文件

#### 使用`app.wpy`全局配置小程序的外观

继承自`wepy.app`小程序入口文件找到`window`节点：`app.wpy`->`script`标签->`config`

#### 页面`.wpy`文件的`script`标签组成结构

页面文件`page.wpy`所声明的页面实例继承自`wepy.page`类别，该类主要属性介绍如下

| 属性      | 说明                                                         |
| --------- | ------------------------------------------------------------ |
| `config`  | 页面配置对象，对应原生的`page.json`文件，类似`app.wpy`的`config` |
| `data`    | 页面渲染数据对象，声明页面所引入的组件列表                   |
| `methods` | `wxml`事件处理函数对象，存放`wxml`中捕获的事件函数，如：`bindtap`、`bindchange` |
| 其他      | 小程序页面的生命周期函数，如onLoad、onReady等                |
| ...       |                                                              |

#### WePY框架的开发规范

##### 自定义默认首页

创建`home`首页：在`src`->`pages`目录下创建`home.py`页面并创建页面的基本代码结构

```json
<template></template>
<script>
	import wepy from 'wepy'	//导入一个包
	export default class Home extend wepy.page{	//向外暴露一个class类
    config={} methods={}	//声明配置与函数节点
}
</script>
<style><style>
```

设置默认首页：打开`src`->`app.wepy`入口文件，将`home.wpy`的页面路径注册到`config`->`page`数组，并调整为数组第一项。

```json
打开app.wpy
<template></template>
<script>
	import wepy from 'wepy'
	import 'wepy-async-function'
	export default class extends wepy.app{
    config = {pages:['pages/home','pages/index']}
  }
</script>
```

创建.wpy页面的注意事项

1.每个页面的`script`标签中，必须导入`wepy`模块，并创建继承`wepy.page`的页面类，否则报错

2.每个页面路径必须记录在`app.wpy`的`config`->`pages`数组中

3.页面路径记录完毕必须再回到页面文件重新编译生成页面

为 WePY页面绑定事件并传参：

原生小程序使用 `bindtap`、`bindinput` 等绑定事件处理函数，在 wepy 框架中类似于 Vue.js 的绑定语法：

- `bindtap="clickHandler"` 替换为 `@tap="clickHandler"`
- `bindinput = "inputHandler"` 替换为 `@input="inputHandler"`

如果 `@` 符号绑定的事件处理函数需要传参，可以采取优化的简写：

- `bindtap="clickHandler" data-index={{index}}` 替换为 `@tap="click({{index}})"`

自定义事件处理函数注意点：

WePY 中的 methods 属性于 Vue中习惯不一样。前者中的 methods 属性只能声明页面 WXML标签的事件处理函数，不能自定义方法，自定义方法需要声明到和 methods 平级的节点位置。

WePY页面的数据绑定

- 使用 data 定义私有数据：`.wpy` 页面中的私有数据定义到 data 节点中，页面上使用双大括号语法 `{{}}` 渲染 `data` 中数据：

```vue
<template>
	<view>{{msg}}</view>
</template>
data = {
	msg: 'hello wepy'
}
```

文本框与 data 做双向数据绑定：

- 为 `input` 输入框绑定数据和事件处理函数，代码为：`<input value="{msg}" @input="inputHandler" />`
- 在 methods 中定义事件处理函数 inputHandler
- 在事件处理函数中通过事件参数 `e.detail.value` 获取最新的文本框内容
- 通过 `this.msg = e.detail.value` 为 data 中的 msg 重新赋值

使用 wxs 脚本：

- 将 wxs 脚本定义为外联脚本，且后缀名为 `.wxs`
- 在 `<script>` 标签内通过 `import` 导入相对路径的 wxs 模块
- 当前页面的 class 类中，通过 `wxs = {}` 注册导入的 wxs 模块

注意：被注册的 wxs 模块只能在当前的 template 中使用，不能在 script 中使用

在WePY页面发起数据请求：

- 配置 promisify 启用 async 和 await：

默认使用 wepy-cli 创建的项目不支持 ES7 的 async 和 await 简化 PrimiseAPI 的调用。需要手动开启此功能：`src` 中 `app.wpy` 找到 `constructor()` 构造函数，在构造函数中代码最后一行添加 `this.use('promisify')`

- 使用 `wepy.request` 发起 GET请求：

WePY框架对原生小程序进行了封装，通过 wx 调用的 API，都可以直接使用 wepy 进行调用：

`wx.request()` 可写为 `wepy.request()` 发起网络数据请求

- 异步更新数据：

异步函数更新数据，页面检测不到数据的变化，必须手动调用 `this.$apply()` 方法，强制页面重新渲染：

```js
methods = {
	async getInfo () {
		const res = await wepy.request('https://www.zairesinatra.top:8081/api/get')
		this.getMsg = res.data
		this.$apply() // 强制页面渲染
	}
}
```
