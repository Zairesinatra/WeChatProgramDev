# WePY

> 腾讯官方出品的小程序快速开发框架，贴近`MVVM`架构，支持`ES6、7`，风格接近`Vue`

## 安装WePY框架

```zsh
npm install -g wepy-cli@1.7.3
```

## 创建WePY项目

### 初始化WePY项目

```zsh
*初始化项目结构
wepy init standard myproject	//wepy固定写法 standard为模板类型 wepy list查看所有可用的项目模板 myproject项目名称
*勾选ESLint选项-约束代码风格
```

### WePY项目与小程序之间的关系

`wepy`项目为模板项目，需要 编译 为小程序项目才可运行

`wepy`项目特点：开发人员手动编写、无法直接做小程序使用

小程序特点：根据模板自动生成、可以运行查看项目效果、随后发布上线

#### 实时编译`WePY`项目

运行`cd zsproject`切换至`WePY`项目根目录

运行`npm install`安装`WePY`项目依赖项

运行`wepy build --watch`开启实时编译，此时 循环监听 WePY项目中源代码的改变，自动编译生成小程序项目，生成的小程序存放在`dist`目录。

以上就会出现问题-解决方案请见博客-https://zairesinatra.com/solve-wepy-error/-<u>同时窗口不可关闭，否则实时编译功能暂停</u>

#### WePY项目目录结构

#### WePY项目加在微信开发者工具

`1.7.0` 之后的版本`init`新生成的代码包会在根目录包含`project.config.json`文件，之前生成的代码包可能不存在`project.config.json`文件。 检查根目录是否存在该文件。

如果存在，使用`微信开发者工具`-->`添加项目`，`项目目录`请选择项目根目录即可根据配置完成项目信息自动配置。

#### 解决ESLint报错问题

首次将`WePY`项目加载微信开发者工具会报两个错误-我没有-若有则找到对应位置删除多余空行

#### .wpy文件的组成部分

一个`.wpy`文件可以分为三大部分，各自对应一个标签：1.脚本部分（逻辑部分和配置部分）	2.结构部分	3.样式部分

`lang`和`src`属性：`.wpy`文件的`script`、`template`、`style`三个标签都支持`lang`和`src`属性，`lang`决定了其代码的编译过程、`src`决定是否外联代码，存在`src`属性且有效时，会忽略内联代码。

| 标签       | `lang`默认值 | `src`支持值                              |
| ---------- | ------------ | ---------------------------------------- |
| `style`    | `css`        | css、`less`、`scss`、`stylus`、`postcss` |
| `template` | `wxml`       | `wxml`、`xml`、`pug`                     |
| `script`   | `babel`      | `babel`、`TypeScript`                    |

#### 代码高亮

`Code`里安装`Vue`的语法高亮插件`Vetur`-打开任意.wpy文件-右下角选择语言模式-弹出窗口选择`.wpy`配置文件关联语言模式选择`Vue`-在`VSCode`编辑器设置//文件-首选项-设置-`settings.json`中添加`"files.associations":{"*.wpy":"vue"}`

#### 小程序入口文件`app.wpy`

入口文件`app.wpy`所声明的小程序实例继承自`wepy.app`类，包含一个`config`属性和其他属性、方法、事件。在`build`编译期间：

`config`属性谁被编译成小程序的`app.json`全局配置文件

`config`属性以外的其他节点会被编译为小程序的`app.js`文件

`style`标签会被编译为小程序的`app.wxss`全局样式文件

#### 使用`app.wpy`全局配置小程序的外观

继承自`wepy.app`小程序入口文件找到`window`节点：`app.wpy`->`script`标签->`config`

<img src="/Users/xieziyi/Library/Application Support/typora-user-images/截屏2021-03-04 21.51.19.png" alt="截屏2021-03-04 21.51.19" style="zoom:50%;" />

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



