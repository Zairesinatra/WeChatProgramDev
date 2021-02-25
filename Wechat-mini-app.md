#### 微信小程序基本应用

------

app.json配置文件对微信小程序进行全局配置

​	主要配置节点：

| 配置节点   | 作用                                         |
| ---------- | -------------------------------------------- |
| pages数组  | 配置小程序的页面路径                         |
| window对象 | 设置小程序的状态栏、导航条、标题与窗口背景色 |
| tabBar     | 配置小程序的tab栏效果                        |

​	·`pages`：

​	1.指定小程序页面组成，每一项对应一个页面的 路径+文件名 信息

​	文件名不需要写文件后缀，框架会自动寻找对应位置的.`json`、.`js`、.`wxml`、.`wxss`四个文件进行处理

​	建议自动创建新页面的方式：在app.json => pages数组节点 => 新增页面路径并保存 =>自动创建路径对应页面

​	2.设置默认首页

​	数组第一项代表小程序的初始页面、小程序中新增或删除页面都必须对pages数组进行修改

------

小程序窗口的组成部分

| 组成            | 说明                         |
| --------------- | ---------------------------- |
| `navigationBar` | 导航条区域                   |
| `background`    | 背景区域，默认不见，下拉可见 |
| `page`          | 页面主体区域，显示wxml中布局 |

window节点常用的配置项

| 属性名                         | 类型       | 默认值    | 说明                                     |
| ------------------------------ | ---------- | --------- | ---------------------------------------- |
| `navigationBarTitleText`       | `Sring`    | 字符串    | 导航栏标题文字类容                       |
| `navigationBarbackgroundColor` | `HexColor` | #`000000` | 导航栏背景颜色，如#`000000`              |
| `navigationBarTextStyle`       | `Sring`    | `white`   | 导航栏标题颜色、支持`black\white`        |
| `backgroundColor`              | `HexColor` | `#ffffff` | 窗口的背景色                             |
| `backgroundTextStyle`          | `Sring`    | `dark`    | 下拉loading的状态，仅支持derk、light     |
| `enablePullDownRefresh`        | `Boolean`  | `false`   | 是都开启全局下拉刷新                     |
| `onReachBottomDistance`        | `Number`   | 50        | 页面上拉触底事件触发距离底部距离，单位px |

tabBar-配置Tab栏

应用端常见页面效果，用于实现多页面的快速切换；小程序分底部tabBar和顶部tabBar。

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

**小程序的生命周期**

生命周期指一个对象从 创建=>运行=>销毁 的整个过程，强调的是一个时间段。

小程序生命周期：应用生命周期（启动、运行、销毁）、页面生命周期（页面加载、渲染、销毁）。应用生命周期包括多个页面生命周期。

生命周期函数：小程序框架提供内置函数，自动按次序执行某些特定操作。

生命周期强调时间段，生命周期函数强调时间点。

`app.js`是小程序执行入口，在其中必调用`App()`，其中参数有`onLaunch:`、`onShow:`、`onHide:`

小程序页面同上，也必须有调用`Page()函数`：onLoad、onShow、onReady、onHide、onUnload。

在应用周期app函数中不属于生命周期函数的是（B）

A、onLaunch：function(){}	 B、oncheck:function(){}	C、onShow:function(){}	 D、onHide:function(){}

在小程序项目中小程序被最小化后可以执行哪个函数：（D）

A、onLaunch：function(){}	B、oncheck:function(){}	C、onShow:function(){}	D、onHide:function(){}

在小程序中页面生命周期函数必须调用哪个函数才可以（D）

A、`wx()`	B、`App()`	C、`wxApp()`	D、`Page()`

------

#### 小程序数据绑定与应用绑定

数据定义在data节点下、数据绑定使用Mustache语法格式

```js
<view>{{要绑定的数据名称}}</view>
```

而Mustache不仅可以绑定数据、也可以绑定属性以及进行三元运算。

事件绑定：事件是视图层与逻辑层的通讯。

​	·bindtap绑定触摸事件-不同于网页的onclick鼠标点击事件，而是通过tap事件响应触摸行为。

```
<view bindtap="tapName">Click me!</view>
```

```
Page中定义:
Page({tapName:function(event){console.log(event)}})
```

​	 ·bindinput绑定文本框的输入事件

```
<input bindinput="inputName"></input>
```

```
Page({inputName:function(event){event}})
```

data和文本框之间数据同步

​	1.监听文本框的数据变化```event.detail.value```、2.修改data中的数据```this.setData(dataObject)```

不能在绑定事件的同时传递参数-小程序会把bindtap后的值同一当做事件名称来处理-如下述代码报错

```
<button type="primary" bindtap='btnHandler(123)'>事件传参</button>
```

通过 ```data-*```自定义事件属性传参

​	如果要在组件触发事件处理函数时，传递参数，可以为组件提供 ```data-*```自定义属性传参，并使用```event.target.dataset```参数名获取自定义属性传递到事件处理函数中的参数。

```
<button bindtap="btnHandler" data-info="zairesinatra">事件传参</button>
info视作参数名、数值zairesinatra当做参数值
```

`wxs(WeiXin Script)`脚本-小程序一套脚本语言，结合`WXML`可以构建页面的结构

```
1.没有兼容性，不依赖运行时的基础库版本，可以在所有版本的小程序中运行 2.与javascript不同 3.隔离性：不能调用js文件定义的函数以及小程序提供的API 4.不能进行事件回调 5.ios设备上必javascript快-(某些功能能写wxs就写wxs,因为效率高)
```

`wxs(WeiXin Script)`遵循`CommonJS`模块化规范

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
module.exports.msg = "some msg"
```

```
使用require注意点
1.只能使用.wxs文件模块，且必须相对路径
2.wxs模块均为单例
3.如果一个wxs模块在定义后一直没有被引用则改模块不会被解析与运行
```

wxs`支持的数据类型`

| 数据类型   | 数据类型 | 数据类型  | 数据类型 |
| ---------- | -------- | --------- | -------- |
| `number`   | `string` | `boolean` | `objecr` |
| `function` | `array`  | `date`    | `regexp` |

https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/06datatype.html

`内嵌wxs脚本`

`wxs`可以编写在`wxs文件`<wxs></wxs>标签内

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

`wxs`可以编写在外联作用

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

<!-- 外联wxs -->
<wxs src="./../tools.wxs" module="tools"></wxs>
<view>{{tools.msg}}</view>
<view>{{tools.bar(tools.FOO)}}</view>
//别用太高级的JS const、let
```

------

#### 页面渲染

条件渲染：小程序中使用`wx:if="{{condition}}"`来判断是否需要渲染该代码，同时也可使用`wx:elif`和`wx:else`来添加一个`else`块。

```js
<view wx:if="{{condition}}">True</view>
//example
<view wx:if="{{length>6}}">666</view>
<view wx:elif="{{length>3}}">333</view>
<view wx:else>emememe</view>
```

