# WeChatProgramDev

------

### <u>Welcome to my project, here are some things I want to describe.</u>

微信开放平台与公众号平台概述

小程序与APP本质区别

小程序适合的业务场景

注册小程序开发者账号

使用小程序开发者工具创建小程序项目

### <u>Whether you are a native Chinese speaker or not, and want to learn Wechat applet development, try Google translation to master the above and next content.</u>

------

## 微信开发概述

### 1. 平台介绍

基于微信提供的大量接口和功能，进行二次开发，叫做**微信开发**。

- [微信开放平台](https://open.weixin.qq.com)（主要后端使用）

​	第三方网站调用微信登陆、支付、分享等微信开放的接口，需上微信开放平台申请相关的权限才可集成在自己的网站或者APP。同时需通过开发者资质认证，才可使用开放平台提供的能力。个人无法申请、仅企业可申请。

- [微信公众平台](https://mp.weixin.qq.com)（主要前端开发）

基于微信公众号为微信服务提供咨询并进行业务开发。

公众号包括订阅号（偏向为用户传达咨询）、服务号（偏向服务交互：银行、查询、114）、小程序（新的开放能力）、企业微信（企业专业办公管理工具：打卡、审批...）。

- 微信开放平台与公众平台的区别：

| 开放平台                               | 公众平台                                 |
| -------------------------------------- | ---------------------------------------- |
| 是微信对外开放API接口的平台            | 基于微信公众号，为微信用户提供服务的平台 |
| 开放的API接口，提供第三方网站和APP调用 | 所有公众号属于微信内开发                 |
| 后端程序员为开放平台的主力军           | 前端程序员为公众平台开发主力军           |

### 2. 初识小程序

- 小程序定义、特点、理念与目的：

链接用户与服务的媒介；体积小方便传播；轻度依赖；拦截用户流量入口，模拟APP体验

- 与传统手机APP区别：

在开发原理上，不同于手机系统提供的API而是通过微信提供的API。且小程序不同于APP运行于手机操作系统，而是基于手机微信。

------

## 小程序基础

### 1. 组件与 API

> #### 组件：
>
> 自带微信风格样式的组件是视图层基本单元。通常一个组件包括开始和结束标签，属性用来修饰这个组件，内容在两个标签之间。且所有<u>组件名称</u>和<u>属性名称</u>为小写。

> #### API：
>
> API（Application Programming Interface，应用程序编程接口）是预先定义的函数。通过API开发人员无需访问程序的源码。

### 2. API 分类及比较

| API类型  |                      特点                      |                             举例                             |
| :------: | :--------------------------------------------: | :----------------------------------------------------------: |
| 事件监听 |         以on开头，监听某个事件是否触发         | `wx.onNetworkStatusChange(function callback)` // 当网络状态改变 |
| 同步API  | 以```Sync```结尾、可以通过函数的返回值直接获取 | `var batteryInfo = wx.getBatteryInfoSync()` // 获取电池信息  |
| 异步API  |    需要指定回调函数接收调用的结果（大多数）    |       `wx.request(Object object)` // 发起HTTPS网络请求       |

**组件与API的异同点：**

组件以UI结构布局为主，一般不需处理业务逻辑。API以纯业务为主，一般没有对应UI结构。

组件与API都是官方提供，为方便小程序快速开发。

**练习：**

1. 下列不属于小程序的特点的是（A）

A、需要安装应用程序	B、体积小	C、方便获取	D、传播快

2. 下列不是小程序提供的API的是 （D）

A、`wx.onNetWorkStatusChange(fn,cb)`	B、`wx.getEatteryInfoSync()`	C、`wx.request(obj, obj)`	D、`wx.getElement()`

3. 使用微信开放平台需要具备什么（A）

A、开发者资质认证	B、微信资质认证	C、微信证书	D、微信内部职工

### 3. 开发账号

- [注册开发者账号](https://developers.weixin.qq.com/miniprogram/introduction/#%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%B3%A8%E5%86%8C)

- 基本信息设置：


登陆小程序后台->设置->基本设置

- 开发者设置：


小程序后台 -> 开发 -> 开发设置

- 成员权限说明：


开发者权限、运营者权限、数据分析者

### 4. 开发者工具的使用

- 下载微信开发者工具


- 小程序的`app.js`和`app.json`是必须的（小程序入口和全局配置文件必须的）


- 对于小程序的页面来说```.js和.wxml```文件是必须的（业务逻辑和UI结构）


------

## 小程序结构和组件

Vue组件与小程序页面、一般静态页面的对比：

| .vue组件         | 小程序页面  | 静态页面     |
| ---------------- | ----------- | ------------ |
| `template`模板   | `.wxml`结构 | `html` 结构  |
| `script`行为逻辑 | `.js`逻辑   | `.js` 逻辑   |
| `style`样式      | `.wxss`样式 | `.css` 样式  |
| `config` 配置    | `.json`配置 | `.json` 配置 |

`.wxml结构`：描述当前页面结构，提供类似于Vue中指令语法

`.js`：定义当前页面得到的数据、交互逻辑和形影用户的操作

`.json`：个性化配置

`.wxss`：定义样式美化**当前**页面，有类似 Vue 的 `<style scoped lang="less"> `效果

**练习：**

1. 下列属于小程序开发者权限是的（A）

A、开发模块权限	B、管理模块权限	C、统计模块权限	 D、推广模块权限

2. 在小程序项目中下列不属于管理员分配的权限是（A）

A、产品设计权限	B、开发者权限	C、运营者权限	D、数据分析者

3. 下列不属于小程序项目结构目录的是（C）

A、`app.js`	B、app.json	C、app.jsp	D、app.wxss

## 开始

### 创建项目页面：

pages 目录上右键 新建名为 home 目录，并在 home 目录中新建名为 home 的 page 页面，此时会自动生成相关文件

### 🖇设置默认首页：

`app.json` 全局配置文件找到 `pages` 节点。 `pages`节点是一个存储所有页面的访问路径的数组。其中 `pages` 数组中第一个路径页面就是小程序项目的默认首页。

### UI 组件：

**`text` 文本**

| 属性名       | 类型      | 默认值  | 说明                                                         |
| ------------ | --------- | ------- | ------------------------------------------------------------ |
| `selectable` | `Boolean` | `false` | `文本是否可选，除text外其他组件无法长按选中`                 |
| `space`      | `String`  | `false` | 显示连续空格，可选值：`ensp(每个空格渲染成英文长度)、emsp(每一个空格渲染成汉字的长度)、nbsp(每一个空格渲染成当前文字字体)` |
| `decode`     | `Boolean` | `false` | 是否解码，可解析 `&nbsp；&lt；&gt；&amp；&apos；&ensp；&emsp` |

**`Button` 按钮组件** <u>默认按钮独占一行,设置以后变为行内</u>

| 属性名     | 类型      | 默认值    | 说明                       |
| ---------- | --------- | --------- | -------------------------- |
| `size`     | `String`  | `default` | 按钮的大小                 |
| `type`     | `String`  | `default` | 按钮的样式类型             |
| `plain`    | `Boolean` | `false`   | 按钮是否为镂空，背景色透明 |
| `disabled` | `Boolean` | `false`   | 是否禁用                   |
| `loading`  | `Boolean` | `false`   | 名称前是否带有loading图标  |

**`input` 输入框**

| 属性名        | 类型      | 默认值  | 说明                               |
| :------------ | :-------- | :------ | :--------------------------------- |
| `value`       | `string`  |         | 输入框初始内容                     |
| `type`        | `string`  | `text`  | `input`类型                        |
| `placeholder` | `string`  |         | 输入框为空占位符                   |
| `password`    | `Boolean` | `false` | 是否密码类型                       |
| `disabled`    | `Boolean` | `false` | 是否禁用                           |
| `maxlength`   | `Number`  | 140     | 最大长度，设置为-1时不限制最大长度 |

**`image` 图片属性**

这里注意不是 `<img>` 而是 `<image>`

`src`：支持网络图片或者本地图片	image图片默认宽高为w:300px、H:225px

`mode`：指定图片宽高和缩放的模式-`aspectFill(图片宽高完全拉伸填满image)`和`aspectFit(图片长边完全显示)`

**`view` 视图容器**

| 属性                   | 类型    | 默认值 | 必填 | 说明                                                         |
| :--------------------- | :------ | :----- | :--- | :----------------------------------------------------------- |
| hover-class            | string  | none   | 否   | 指定按下去的样式类。当 `hover-class="none"` 时，没有点击态效果 |
| hover-stop-propagation | boolean | false  | 否   | 指定是否阻止本节点的祖先节点出现点击态                       |
| hover-start-time       | number  | 50     | 否   | 按住后多久出现点击态，单位毫秒                               |
| hover-stay-time        | number  | 400    | 否   | 手指松开后点击态保留时间，单位毫秒                           |

### WXSS 样式：

是一套样式语言决定WXML组件显示的样式语言

相比于CSS扩展尺寸单位、样式导入的特性

支持绝大多数选择器，而有些许不同，如属性选择器需要加 `data-` 在属性之前

`rpx` 即 responsive pixel - 小程序独有解决屏幕自适应的单位（web端用的是rem需要手动换算）	- 不论什么屏幕都分为`750rpx`	

`rpx`与`px`之间的换算	-	以iphone6为标准例：`750rpx=375px(屏幕宽度)=750物理像素`	=>	<u>`1rpx=0.5px=1物理像素`</u>

`rpx`与`iPhone6`设计稿关系	-	**设计师视觉稿是二倍图**所以要绘制宽高`200px`盒子则可以直接换算为`200rpx`

### DEMO：

要求：使用`rpx`绘制一个占屏幕一半的盒子

思路：小程序的`rpx`尺寸单位把所有尺寸的屏幕同一划分了750分，不论屏幕大小，`375rpx`可以被小程序识别渲染为屏幕宽度的一半。

### 样式导入：

`@import` 导入外联样式表

```css
@import "wxss样式表的相对路径"
```

全局样式与局部样式

```js
全局样式定义在app.wxss中，作用于每一个页面中；局部样式在wxss文件中定义的样式，仅在对应页面，会覆盖app.wxss中相同选择器
当且仅当局部样式的权重大于或等于全局样式的权重时，才会覆盖全局样式的效果。
```

**练习：**

1. 在新建小程序页面默认生成的结构中不包含哪个后缀名的文件（B）

 A、`.js`	B、`.css`	C、`.json`	D、`.wxss`

2. 下列不属于text组件属性的是（D）

A、selected	B、space	C、decode	D、checked

3. 下列不属于button按钮属性的是（C）

A、size	B、type	C、plan	D、loading

### 全局配置文件：

`app.json` 配置文件主要配置节点：

| 配置节点   | 作用                                         |
| ---------- | -------------------------------------------- |
| pages数组  | 配置小程序的页面路径                         |
| window对象 | 设置小程序的状态栏、导航条、标题与窗口背景色 |
| tabBar     | 配置小程序的tab栏效果                        |

- `pages`：

指定小程序页面组成，每一项对应一个页面的 路径+文件名 信息

文件名不需要写文件后缀，框架会自动寻找对应位置的`.json`、`.js`、`.wxml`、`.wxss`四个文件进行处理

<u>建议自动创建新页面的方式</u>：在app.json => pages数组节点 => 新增页面路径并保存 =>自动创建路径对应页面

设置默认首页：数组第一项代表小程序的初始页面、小程序中新增或删除页面都必须对 pages 数组进行修改

------

小程序窗口的组成部分

| 组成            | 说明                         |
| --------------- | ---------------------------- |
| `navigationBar` | 导航条区域                   |
| `background`    | 背景区域，默认不见，下拉可见 |
| `page`          | 页面主体区域，显示wxml中布局 |

- window节点常用的配置项


| 属性名                         | 类型       | 默认值    | 说明                                     |
| ------------------------------ | ---------- | --------- | ---------------------------------------- |
| `navigationBarTitleText`       | `Sring`    | 字符串    | 导航栏标题文字类容                       |
| `navigationBarbackgroundColor` | `HexColor` | #`000000` | 导航栏背景颜色，如#`000000`              |
| `navigationBarTextStyle`       | `Sring`    | `white`   | 导航栏标题颜色、支持`black\white`        |
| `backgroundColor`              | `HexColor` | `#ffffff` | 窗口的背景色                             |
| `backgroundTextStyle`          | `Sring`    | `dark`    | 下拉loading的状态，仅支持derk、light     |
| `enablePullDownRefresh`        | `Boolean`  | `false`   | 是都开启全局下拉刷新                     |
| `onReachBottomDistance`        | `Number`   | 50        | 页面上拉触底事件触发距离底部距离，单位px |

- tabBar-配置Tab栏


应用端常见页面效果，用于实现多页面的快速切换；小程序分底部 tabBar 和顶部 tabBar。

tabBar中，只能配置最少2个最多5个tab页签，页面渲染顶部tabBar时，不现实icon，只显示文本。

| 组成               | 说明                      |
| ------------------ | ------------------------- |
| `backgroundColor`  | 导航条背景色              |
| `selectedIconPath` | 选中时的图片路径          |
| `boderstyle`       | tabBar上边框的颜色        |
| `iconPath`         | 未选中时图片路径          |
| `selectedColor`    | tab上文字选中的颜色       |
| `color`            | tab上未选中的文字默认颜色 |

tabBar节点的list的配置项

| 属性               | 类型     | 必填 | 描述                                                      |
| ------------------ | -------- | ---- | --------------------------------------------------------- |
| `pagePath`         | `String` | 是   | 页面路径，必须在pages中先定义                             |
| `text`             | `String` | 是   | tab上按钮文字                                             |
| `iconPath`         | `String` | 否   | 图片路径不支持网络图（建议大小限制40kb，尺寸为81px*81px） |
| `selectedIconPath` | `String` | 否   | 选中时的图片路径                                          |

页面级别配置文件与全局级别配置文件

小程序`app.json`中的`window`节点，可以 全局配置 小程序中每个页面的窗口表现。若特殊页面窗口表现则配置页面级别的json。

总结：页面级别配置优先于全局配置生效。

页面配置文件中可选的配置项列表

| 属性                           | 类型       | 默认值    | 描述                                 |
| ------------------------------ | ---------- | --------- | ------------------------------------ |
| `navigationBarBackgroundColor` | `HexColor` | `#000000` | 导航栏背景颜色                       |
| `navigationBarTextStyle`       | `String`   | `white`   | 导航栏标题颜色                       |
| `navigationBarTitleText`       | `String`   |           | 导航栏标题文字内容                   |
| `backgroundColor`              | `HexColor` | `#ffffff` | 窗口背景色                           |
| `backgroundTextStyle`          | `String`   | dark      | 下拉loading的样式，仅支持dark、light |

下列不属于小程序项目中app.json文件配置节点的是（D）

A、pages数组	B、windows对象	C、tabBar对象	D、navBar对象

在小程序项目中开启全局下拉刷新的属性是（C）

A、navigationBarTitleText	B、navigationBarBackgrondColor	C、enablePullDownRefresh	D、navigationBarTextStyle

在小程序项目中可以设置导航栏标题文本颜色的属性是（D）

A、navigationBarTitleText	B、navigationBarBackgrondColor	C、navigationBarText	D、navigationBarTextStyle

------

### 生命周期（Life Cycle）

生命周期指一个对象从 创建=>运行=>销毁 的整个过程，强调的是一个时间段。

小程序生命周期：应用生命周期（启动、运行、销毁）、页面生命周期（页面加载、渲染、销毁）。应用生命周期包括多个页面生命周期。

生命周期函数：框架提供的内置函数，会 **自动按次序执行** 某些特定操作。

生命周期强调时间段，生命周期函数强调时间点。

`app.js`是小程序执行入口，在其中必调用`App()`，其中参数有`onLaunch:`、`onShow:`、`onHide:`

小程序页面必须调用自己的 `.js` 文件，同时也必须有调用`Page()函数`：**onLoad、onShow、onReady、onHide、onUnload** 否则报错。

在应用周期app函数中不属于生命周期函数的是（B）

A、onLaunch：function(){}	 B、oncheck:function(){}	C、onShow:function(){}	 D、onHide:function(){}

在小程序项目中小程序被最小化后可以执行哪个函数：（D）

A、onLaunch：function(){}	B、oncheck:function(){}	C、onShow:function(){}	D、onHide:function(){}

在小程序中页面生命周期函数必须调用哪个函数才可以（D）

A、`wx()`	B、`App()`	C、`wxApp()`	D、`Page()`

------

### 数据绑定与应用绑定

小程序的 `.js` 部分文件可以定义页面的数据、生命周期、其他业务

在 `.js` 文件中，数据定义在 data 节点下

```js
Page({
  data: {
    info: "init data", // 字符串类型数据
    array: [{msg: '1'}, {msg: '2'}] // 数组类型的数据
  }
})
```

数据绑定使用Mustache语法格式：绑定数据、绑定属性以及进行三元运算。

```html
<view>{{要绑定的数据名称}}</view>
```

事件绑定：

事件是视图层与逻辑层的通讯

bindtap 绑定触摸事件-不同于网页的 onclick 鼠标点击事件，而是通过 tap 事件响应触摸行为。

```
<view bindtap="tapName">Click me!</view>
```

```
Page中定义:
Page({tapName:function(event){console.log(event)}})
```

bindinput 绑定文本框的输入事件

```
<input bindinput="inputName"></input>
```

```
Page({inputName:function(event){event}})
```

data和文本框之间数据同步：

1.监听文本框的数据变化```event.detail.value```、2.修改 data 中的数据```this.setData(dataObject)```

事件传参：

不能在绑定事件的同时传递参数 => 小程序会把bindtap后的值统一当做事件名称来处理-如下述代码报错：

```html
<!--btnHandler(123)都看作事件名称-->
<button type="primary" bindtap='btnHandler(123)'>事件传参</button>
```

只能通过 ```data-*```自定义事件属性传参：

如果要在组件触发事件处理函数时，传递参数，可以为组件提供 ```data-*```自定义属性传参，并使用```event.target.dataset```参数名获取自定义属性传递到事件处理函数中的参数。

```html
<button bindtap="btnHandler" data-info="zairesinatra">事件传参</button>
info视作参数名、数值zairesinatra当做参数值
```

`wxs(WeiXin Script)`脚本：

wxs 是小程序一套脚本语言，结合`WXML`可以构建页面的结构

```
1.没有兼容性，不依赖运行时的基础库版本，可以在所有版本的小程序中运行 2.与javascript不同 3.隔离性：不能调用js文件定义的函数以及小程序提供的API 4.不能进行事件回调 5.ios设备上必javascript快-(某些功能能写wxs就写wxs,因为效率高)
```

`wxs(WeiXin Script)`遵循`CommonJS`模块化规范：

`CommonJS`是`Javascript`模块化规范之一，故使用`wxs`和`node.js`体验类似，可以使用CommonJS规范规定的如下成员：

```
module对象：每个wxs都是 独立的模块，每个模块有一个内置的module对象与作用域。
module.exports：由于wxs独立的作用域，所以在一个模块里定义的变量与函数，默认为私有，对其他模块不可见。
require()函数：在wxs模块中引用其他的wxs文件，可以使用require函数
```

`wxs基础语法`

```js
使用module.exports向外共享私有变量
var foo = "'hello world'from wxs"	//定义私有化变量
var bar = function(e){return e;}
module.exports = {FOO:foo,bar:bar,}
module.exports.msg = "some msg" // 额外向 module.exports 挂载 msg 变量
```

```
使用require注意点
1.只能使用.wxs文件模块，且必须相对路径
2.wxs模块均为单例，即都是引用的同一 wxs 模块对象
3.如果一个wxs模块在定义后一直没有被引用则改模块不会被解析与运行
```

[wxs`支持的数据类型`](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/06datatype.html)：

| 数据类型   | 数据类型 | 数据类型  | 数据类型 |
| ---------- | -------- | --------- | -------- |
| `number`   | `string` | `boolean` | `objecr` |
| `function` | `array`  | `date`    | `regexp` |

`内嵌wxs脚本`

`wxs`可以编写在`wxs文件`<wxs></wxs>标签内，但是必须提供一个 module 属性，指定当前标签的模块名

`wxs`可以编写在内联作用：

```js
<view>{{foo.msg}}</view>
<!-- 内嵌wxs -->
<wxs module="foo">
  var some_msg = 'Hello world'
  module.exports = {
    msg:some_msg
  }
</wxs>
```

`wxs`可以编写在外联作用：

`wxs` 代码可以编写在以 `.wxs` 为后缀名的文件内，就像 JavaScript 代码可以编写在以 `.js` 后缀名的文件一样。如果要引入外联的 wxs 脚本，则必须为 `<wxs></wxs>` 标签添加 module 和 src 属性。其中 `module` 为标签指定模块名，作为当前页面访问这个模块的表示名称；`src` 指定当前的引入脚本路径，且必须是相对路径。

```js
var foo = 'hello world from tools.wxs'
var bar = function(zs){
  return zs
}
module.exports = {
  FOO:foo,
  bar:bar
}
module.exports.msg = 'some message'
```

```html
<!-- 外联wxs -->
<wxs src="./../tools.wxs" module="tools"></wxs>
<view>{{tools.msg}}</view>
<view>{{tools.bar(tools.FOO)}}</view>
//别用太高级的JS const、let
```

这里注意不要在 `.wxs` 想当然直接使用 `.js` 的 `let、const` 等语法，只能使用 `var` ；在 node.js 中向外暴露的变量与名一样可以简写，而 `wxs` 中不能简写。

------

### 页面渲染

#### 条件渲染：

1.小程序中使用`wx:if="{{condition}}"`来判断是否需要渲染该代码，同时也可使用`wx:elif`和`wx:else`来添加一个`else`块。

```html
<view wx:if="{{condition}}">True</view>
//example
<view wx:if="{{length>6}}">666</view>
<view wx:elif="{{length>3}}">333</view>
<view wx:else>emememe</view>
```

2.`block wx:if`可一次性判断多个组件标签，通过`<block></block>`标签将多个组件包装起来，并上边使用`wx:if`控制属性

```html
<block wx:if="{{true}}"><view>view1</view><view>view2</view></block>	
// view1 view2都会显示	block为包装元素，不会在页面中做任何渲染
```

3.`hidden`也可以控制小程序的显示与隐藏

```html
<!--hidden="{{condition}}"-->
<view hidden="{{true}}">略略略</view>
```

4.`wx:if `与`hidden`区别：

- 被`wx:if`控制的区域会进行局部渲染，动态创建或销毁


- 同时`wx:if`是惰性的，在条件第一次为真才会开始局部渲染


- 相比之下`hidden`简单，组件始终渲染，知识简单控制显示与隐藏


- `wx:if`会有更多的切换消耗，`hidden`会有更多的初始渲染消耗

#### 列表渲染：

1.`wx:for`	组件上使用`wx:for`控制属性绑定一个数组，即可使数组中各项的数据重复渲染该组件。默认当前数组当前项下标变量名为`index`，数组当前变量名为`item`。

```html
<view wx:key="index" wx:for="{{array}}"> 索引是{{index}} 当前项是{{item}} </view>
```

2.手动指定索引和当前项的变量名

```html
<!--wx:for-item指定当前数组元素变量名	wx:for-index指定数组当前下标的变量名-->
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">索引是{{idx}} 当前项是{{itemName}}</view>
```

3.列表渲染中的`key`

```key```在列表循环中的作用即如果**列表中项目的位置会动态改变**或者**有新的项目添加到列表中**，且**希望列表中的项目保持字节的特征和状态**，需要使用```wx:key```来指定列表中项目的唯一的标识符。当数据改变触发渲染层重新渲染时，会矫正带有key的组件，框架会确保他们被重新排序而不是重新创建，以确保是组件保持自身的状态，提升渲染的效率与性能并避免数据混乱的情况出现。

key不绑定index,因为每次渲染索引值重新排号。

`key`值具有唯一性且不能动态改变、`key`值必须是数字或字符串、保留关键字`*this`代表在`for`循环中`item`本身，也可充当`key`值，但需要`item`本身是有一个唯一的字符串或者数字、如果不提供`wx:key`会在终端报一个`warning`，若明确知道列表是静态的，或者不关注其顺序则可以选择忽略。

页面事件：

1.下拉刷新	用户手指在屏幕上自上而下滑动，从而移动端更新列表数据的交互行为。相比定时以及按钮刷新有更好的用户体验。

2.启动下拉刷新：需要在```app.json```的```window```选项中或页面配置开启```enablePullDownRefresh```。一般情况推荐在页面配置中为需要的页面单独开启下拉刷新。或调用顶级对象的函数```wx.startPullDownRefresh()```触发下拉刷新。

3.配置下拉刷新窗口的样式：在 app.json 文件的 window 选项中修改```backgroundColor```或```backgroundTextStyle```选项

4.监听下拉刷新事件：给页面添加```onPullDownRefresh()```函数即可监听在当前页面下拉刷新操作

5.停止下拉刷新效果：下拉刷新效果不会主动消失，应手动调用```wx.stopPullDownRefresh()```

6.上拉加载更多的概念及应用场景：本质是数据的分页加载

7.配置上拉触底的距离：在```app.json```的```window```选项中或页面配置中设置触底距离```onReachBottomDistance```。单位是```px```默认触底距离为```50px```。而当上拉超过不足```50px```时会触发```onReachBottom()```函数。监听用户当前页面上拉触底事件，实现上拉加载更多列表的效果。

<img src="./assets/distance.png" alt="dis" style="zoom:50%;" />

其他页面事件：

1.```onPageScroll(Object)```监听滑动页面事件，其中的```Object```参数说明如下

| 属性            | 类型   | 说明                                 |
| --------------- | ------ | ------------------------------------ |
| ```scrollTop``` | Number | 页面在垂直方向已滚动的距离（单位px） |

2.```onShareAppMessage(Object)```监听用户点击页面内转发按钮```<button>组件:open-type="share"```或与上角菜单"转发"按钮行为，并自定义转发内容。其中```Object```参数说明如下。

| 参数             | 类型         | 说明                                                         |
| ---------------- | ------------ | ------------------------------------------------------------ |
| ```from```       | ```String``` | 转发事件来源，button来自页面内转发按钮，menu来自右上角转发菜单 |
| ```target```     | ```Object``` | 若from值为button，则```target```触发这次转发事件的```button```，否则为```undefined``` |
| ```webViewUrl``` | ```String``` | 页面包含<web-view>组件时，返回当前<web-view>的```url```      |

转发期间自定义转发的内容-```onShareAppMessage(Object)```return一个自定义转发内容。

| 字段           | 说明           | 默认值         |
| -------------- | -------------- | -------------- |
| ```title```    | 转发标题       | 当前小程序名称 |
| ```path```     | 转发路径       | 当前页面path   |
| ```imageUrl``` | 自定义图片路径 | 使用默认截图   |

3.```onTabItemTap(Object)```-底部Tab栏触发

| 参数           | 默认值       | 说明                       |
| -------------- | ------------ | -------------------------- |
| ```index```    | ```String``` | 被点击tabItem序号，从0开始 |
| ```pagePath``` | ```String``` | 被点击tabItem页面路径      |
| ```text```     | ```String``` | 被点击tabItem的按钮文字    |

## Framework and logic

#### 页面导航：

**页面之间的跳转**（页面导航）：

- 声明式导航：通过navigator组件或标签（相当于网页中的`<a>`链接）实现页面跳转

- 编程式导航：通过调用小程序API接口实现跳转

**声明式导航：**

```js
1.导航到非tabBar页面（没有被当做tabBar进行切换的页面）
<navigator url="/pages/info/info">去info页面</navigator>
//	url必须以斜线开头
```

```js
2.导航到tabBar页面（被当做tabBar进行切换的页面，如果单纯使用navigator组件的url属性无法完成导航，需结合open-type属性）
<navigator url="/pages/home/home" open-type="switchTab">导航到home页面</navigator>
```

```js
3.声明式导航后退（后退上一页面或多级页面，需要把open-type设置为navigateBack，同时使delta属性指定后退的层数）
<navigator open-type="navigateBack" delta="1">返回上一级</navigator>
//不需要url属性了
```

**编程式导航：**

```js
1.跳转到非tabBar页面
btnHandler1:function(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
通过wx.navigateTo(Object object)方法可以跳转到应用某个页面。但不能跳转到tabBar页面，其中Object参数对象属性列表如下
```

| 属性       | 类型       | 必选项 |                             说明                             |
| ---------- | ---------- | ------ | :----------------------------------------------------------: |
| `url`      | `string`   | 是     | 跳转应用内非tabBar的页面路径，路径后可带参数。参数与路径之间使用 ? 分隔，参数健与参数值用=相连，不同参数用&分隔 |
| `success`  | `function` | 否     |                    接口调用成功的回调函数                    |
| `fail`     | `dunction` | 否     |                    接口调用失败的回调函数                    |
| `cpmplete` | `function` | 否     |            接口调用结束的回调函数（不论成功与否）            |

```js
2.通过编程式导航跳转到tabBar页面-注意这里的路径必须是以斜线开头
btnHandler2:function(){
    wx.switchTab({
      url: '/pages/home/home',
    })
  }
通过wx.switchTab(Object object)，可以跳转到tabBar页面，并关闭其他所有非tabBar页面，其中Object参数对象属性如上
```

```js
3.通过编程式导航后退
<button type="primary" bindtap="btnHandler3">通过编程式导航后退</button>
btnHandler3:function(){
    wx.navigateBack({
      delta: 1,
    })
  }
通过wx.navigateBack(Object object)方法，关闭当前页面，返回上一级或多级页面，其中Object参数对象的属性如下
```

| 属性       | 类型       | 必选项 | 说明                                            |
| ---------- | ---------- | ------ | ----------------------------------------------- |
| `delta`    | `number`   | Y      | 返回页面数，若`delta`大于现有的页面数则返回首页 |
| `success`  | `function` | N      | 接口调用成功的回调函数                          |
| `fail`     | `function` | N      | 接口调用失败的回调函数                          |
| `complete` | `function` | N      | 接口调用完成的回调函数                          |

导航传参：

```js
声明式导航传参
navigator组件的url属性用来指定导航的页面路径，同时路径后面还可以携带参数，参数与路径之间使用？分隔，参数健与参数值用=相连，不同参数用&分隔
<navigator url="/pages/logs/logs?name=zs&age=23">去log页面</navigator>
```

```js
编程式导航
wx.navigateTo(Object object)方法的object参数中，url属性来制定需要跳转的应用非tabBar的页面的路径。同时路径后面还可以携带参数，参数与路径之间使用？分隔，参数健与参数值用=相连，不同参数用&分隔
wx.navigateTo({url:"/pages/logs/logs?name=zs&age=23"})
```

```js
页面接收导航传递过来的参数
不论声明式导航还是编程式导航，最终导航到的页面可以在onload生命周期函数中接收传递过来的参数
//生命周期函数-监听页面加载
onload:function(options){console.log(options)//options就是导航传递过来的参数}
```

自定义编译模式快速传参：
小程序每次需改代码会默认首页进入，开发阶段针对特定页面开发，为方便小程序编译直接进入对应页面可适配自定义编译模式
工具栏的“普通编译”-下拉菜单“添加编译模式”-弹出自定义编译条件窗口设置

在小程序中可以实现导航后退的方式的是（B）

```
A、<navigator url="/page/info/info" open-type="switchTab">返回上一页</navigator>

B、<navigator open-type="switchTab" delta="1">返回上一页</navigator>

C、<navigator open-type="navigateBack" delta="1">返回上一页</navigator>

D、<navigator open-type="navigatego" delta="1">返回上一页</navigator>
```

在小程序中用于监听页面滑动的事件是（C）

```js
A、onLoad()	B、onFullpageDown()	C、onPageScoll()	D、onUnLoad()
```

在小程序中可以实现导航到非tabBar页面的方式的是（A）

```
A、<navigator url="/page/info/info">去info页面</navigator>

B、<navigator to="/page/info/info">去info页面</navigator>

C、<navigator link-to="/page/info/info">去info页面</navigator>

D、<navigator URL="/page/info/info">去info页面</navigator>
```

#### 网络数据请求：

配置服务器域名-每个小程序需要事先设置一个服务器域名，小程序只可以与指定的域名进行网络通讯

##### 服务器域名配置：小程序后台-开发-开发设置-服务器域名

**注意**：

- 域名只支持`https(request、uploadFile、downloadFile)`与`wss(connectSocket)`两种协议
- 域名不能使用`IP地址`与`localhost`
- 域名必须经过ICP备案
- 域名服务器一个月内可申请5次修改
- 一般配置request请求即可

<u>跳过域名检验</u>：微信开发者工具中开启【开发环境不检验请求域名，TLS以及HTTPS证书】若服务器域名配置完成则勿忘关闭此功能。

##### 网络数据请求：

- **发起`get`请求：**调用 `wx.request(Object object)` 方法发起`get`请求

```js
wx.request({//请求url地址必须基于HTTPS协议
	url:'https://www.zsfdp.top:8082/api/get',
  data:{name:'zs',age:23}//发送到服务器的数据
  sucess:function(request){console.log(request)}//成功之后的回调函数
})
```

- **发起`post`请求：**调用`wx.request(Object object)`方法发起`post`请求

```js
wx.request({//请求url地址必须基于HTTPS协议
	url:'https://www.zsfdp.top:8082/api/post',
  method:'POST',
  data:{name:'zs',age:23}//发送到服务器的数据
  sucess:function(request){console.log(request)}//成功之后的回调函数
})
```

- **小程序中没有跨域的限制：**

网页中有浏览器同源策略，存在数据跨域请求从而衍生出了JSONP和CORS。而小程序的运行代码并不在浏览器所以不存在。

在小程序中如何发起get请求（A）

 A、调用 `wx.request()`	B、调用 `wx.get()`	C、调用 `wx.$get()`	D、调用 `wx.requestget()`

在小程序中是否存在跨域问题（B）

A、不确定	B、不存在	C、存在	D、以上都不对

在小程序中关于配置服务器域名一个月可以修改几次（B）

A、1次	B、5次	C、10次	D、无数次

#### 自定义组件

##### 组件的创建与引用

1.创建组件

```js
在项目的根目录中，鼠标右键，创建components->test文件夹
新建的component->test文件夹鼠标右键点击新建component
新建组件命名后会自动生成对应4个文件，后缀分别是.js、.json、.wxml、.wxss
```

2.引用组件

```js
1.找到需要引用组件的目录中.json配置文件，新增usingComponents节点
2.在usingComponents中通过键值对的形式注册组件，键为注册的组件名称，值为组件的相对引用路径
3.页面的.wxml中把注册的组件名称以标签形式在页面上使用，即可把组件展现在页面
注册组件时建议把名称注册为短横线的形式，例如vant-button、custom-button
```

3.使用样式修饰组件

```js
组件对应wxss文件的样式，只对组件wxml内节点生效。
组件和应用组件的页面不能使用id选择器(#id)、属性选择器([a])、标签名选择器，请使用class选择器
组件和应用组件的页面使用后代选择器(.a.b)一些极端情况下会有非预期的表现
子元素选择器(.a>.b)只能用于view组件与其子节点，用于其他组件一些极端情况下会有非预期的表现
继承样式会从组件外继承到组件内，如font、color
除继承样式外，app.wxss中样式、组件所在页面的样式对自定义组件无效
```

##### 组件的data与methods

使用data定义组件的私有数据：

```js
小程序组件中的data和小程序页面中的data用法一致。只不过组件中的data定义在Component()函数中，页面的data定义在Page()函数中；
在组件的.js文件中：访问data数据使用this.data即可；若要为data中数据重新赋值则调用this.setData({数据名称:新值})
在组件的.wxml文件中：渲染data中的值则直接使用{{数据名称}}
```

使用methods定义组件的事件处理函数：

```js
// 和页面不同，组件的事件处理函数必须定义在methods节点中
component({methods:{ // 按钮的点击事件处理函数
btnHandler:function(){}}})
```

##### 组件的`properties`

`properties`的作用：类似`vue`的`props`，是组件的对外属性，用来接收外界传递到组件的数据。

小程序中，组件的`data`与`properties`类似，都是可读可写，不过`data`倾向存储组件的私有数据，`properties`倾向于存储外界传递到组件的数据。

```js
Component({properties:{ // 完整定义方式
  propA:{	// 属性名
  	type:String	// 属性类型
  	value:''	// 默认属性值
  },
  propB:String	// 简化的定义方式
}})
// type值可选Number\String\Boolean\Object\Array\null
```

如何为组件传递`properties`的值-数据绑定向子组件传递动态数据

```html
<!--引用组件的页面模板-->
<view><component-tag-name prop-a="{{dataFieIdA}}" prop-b="{{dataFieIdB}}"></component-tag-name></view>
<!--可以通过setData修改绑定的数据字段-->
<!--定义properties采用驼峰写法，在wxml中指定属性时候对应连字符写法，应用数据绑定时采用驼峰写法-->
```

组件内修改`properties`的值

```js
小程序中的properties值可读可写，用法与data一致，通过setData修改properties的值得任何属性
properties:{count:Number},methods:{add:function(){this.setData({count:this.properties.count + 1})}}
```

##### 数据监听器

监听响应任何 属性 与 数据字段 的变化。类似于`vue`中的`watch`。从小程序2.6.1开始支持。

```js
Component({observers:{'字段A,字段B':function(字段A的新值,字段B的新值){//这里可以监听多个字段，任一值变化触发function
  //do something
}}})
```

监听子数据字段的变化

```js
Component({observers:{'zs.age':function(zs.age的新值){//此时使用this.data.zs.age触发;this.data.zs也触发
},'arr[666]':function(arr666){//此时使用setData设置this.data.arr[666]触发;设置this.data.arr触发
}}})
```

```js
Component({observers:{'zs.field.**':function(field){//使用setData设置this.data.some.field本身或旗下任何字段触发;同时设置this.data.zs也触发
field === this.data.zs.field}}})
```

##### 组件的生命周期（CAD）

组件的生命周期指的是组件自身的函数，这一些函数在特定时间点或者在遇见特定的框架被触发。其中最重要的是`created`、`attached`、`detached`，包含一个组件实例生命流程的主要时间点。

- 组件实例刚刚被创建好时，`created`生命周期被触发。此时不能调用`setData`。通常情况这个生命周期只应给组件this添加自定义的属性字段。


- 组件完全初始化完毕，进入节点页面树。此时this.setData已被初始化完毕。绝大多数初始化工作在这个时机进行。


- 组件离开`detached`节点树时，`detached`生命周期被触发。退出一个页面，如组件还在页面节点树则`detached`被触发。


| 生命周期   | 参数         | 描述                                 | 最低版本 |
| ---------- | ------------ | ------------------------------------ | -------- |
| `created`  | 无           | 组件创建时执行                       | 1.6.3    |
| `attached` | 无           | 组件实例进入页面节点树执行           | 1.6.3    |
| `ready`    | 无           | 组件视图布局完成后执行               | 1.6.3    |
| `moved`    | 无           | 组件实例被移动到节点树另一个位置执行 | 1.6.3    |
| `detached` | 无           | 组件实例从页面节点树移除时执行       | 1.6.3    |
| `error`    | Object Error | 组件方法抛出报错执行                 | 2.4.1    |

定义生命周期函数：1.定义在`Component`构造器第一级参数中 2.**生命周期在`lifetimes`字段内声明(推荐、优先级高)**

```js
Component({
  lifetimes: {
    created() {},
    attatched() {},
    detached() {}
  }
  // 或者
  created() {},
  attatched() {},
  detached() {}
})
```

组件所在页面的生命周期：特殊的生命周期，与组件关联不强，但有时组件需要获知，以便组件内部处理，在`pageLifetimes`定义段中定义。其中可用生命周期包括：

| 生命周期 | 参数          | 描述                     | 版本  |
| -------- | ------------- | ------------------------ | ----- |
| `show`   | 无            | 组件所在的页面被展示执行 | 2.2.3 |
| `hide`   | 无            | 组件所在页面被隐藏执行   | 2.2.3 |
| `resize` | `Object Size` | 组件所在页面尺寸变化执行 | 2.4.0 |

##### 组件插槽：

- 默认插槽：在组件的`wxml`中可以包含`slot`节点，用于承载组件使用者提供的`wxml`结构。


- 默认情况下一个组件`wxml`仅包含一个`slot`。需要使用多个`slot`时在组件的`js`中声明。


- 小程序目前仅存默认插槽与多个插槽，暂不支持作用于插槽。


```html
<!--组件模板-->
<view class="wrapper"><view>这是组件的内部节点</view><slot></slot></view>
<!----------->
<!--引用组件的页面模板-->
<view><component-tag-name>
  <!--这部分内容放置在组价<slot>的位置上-->
  <view>这部分是插入到组件slot中的内容</view>
</component-tag-name></view>
```

```js
// 启用多个插槽
Component({
  options:{
    multipleSlots:true //组件定义时选项中启用多slot支持
          },
	properties:{},
	methods:{}})
```

```html
<!--组件模板-->
<view class="wrapper"><slot name="before"></slot><view>这里是组件的内部结构</view><slot name="after"></slot></view>
```

**多个插槽的使用:**

```html
<!--引用组件的页面模板-->
<view>
  <component-tag-name>
    <!--这部分内容放置在组件<slot name="before">位置-->
    <view slot="before">这里是插入组件slot name="before"中的内容</view>
    <!--这部分内容放置在组件<slot name="after">位置-->
    <view slot="after">这里是插入组件slot name="after"中的内容</view>
 	</component-tag-name>
</view>
```

**组件之间的通讯:**

组件之间三种基本通讯方式:

- `WXML`数据绑定：父组件向子组件的指定属性传递数据，仅设置JSON兼容数据（基础库版本2.0.9后可使用函数）

- 事件：子组件向父组件传递数据，传递任意数据


以上方法不满足则还可父组件通过`this.selectComponent`方法获取子组件实例对象，此方法可以直接访问组件的任意数据和方法。

通过`this.selectComponent(string)`进行组件通讯:

```html
<!--wxml-->
<component-a class="customA" id="cA"></component-a>

<!--父组件的.js文件可以调用 selectComponent 函数并指定 id 或 class 选择器，获取子组件对象-->
Page({onLoad(){
	var component = this.selectComponent('.customA');//此处不得为.custom-a;也可传递 id 选择器 #cA
	console.log(component);
	console.log(component.data.name); 
}})
```

通过事件监听实现子向父传值：

事件系统是组件通讯的重要方式。自定义组件触发任意事件，引用组件页面监听事件。

```js
1.在父组件的js中定义一个函数，即通过自定义属性的形式传递子组件
2.父组件的wxml中通过自定义事件将步骤一系列函数引用传递子组件
3.子组件的js调用this.triggerEvent('自定义事件名',{/*参数对象*/})，将数据发送父组件
4.父组件的js中可以使用 e.detail 获取子组件传递过来的数据
getSonCount(e){ // getSonCount 默认为传递子组件的函数
  console.log(e.detail)
}
```

在小程序中自定义组件如何访问data中的数据（B）

A、`this.getdata.数据名` B、`this.data.数据名` C、`this.setdata.数据名` D、`this.数据名`

在小程序组件中 `properties` 声明方式正确的是（D）

A、`Component(properties:{propA:{type:string, value:''}})`

B、`Page(properties:{propA:{type:string, value:''}})`

C、`App(properties:{propA:{type:string, value:''}})`

D、`Components(properties:{propA:{type:string, value:''}})`

在小程序组件中在定义properties下列属性名写法正确的是（D）

A、propertyName

B、propertyname

C、property-name

D、property_name
