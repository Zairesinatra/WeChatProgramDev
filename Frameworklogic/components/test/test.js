// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  // 开启多个插槽
  options:{
    multipleSlots:true
  },
  
  properties: {
 //   propCount:{
 //     type:Number,
 //     value:0
 //  },
    propCount:Number
  },

  //定义组件生命周期方式-lifetime
  lifetimes:{
    created(){},
    attatched(){},
    detached(){}
  },

//定义组件所在页面的生命周期
pageLifetimes:{
  show(){},
  hide(){},
  resize(){}
},
  /**
   * 组件的初始数据
   */
  data: {
    name:"zs"
  },
  // 数据监听器
  observers:{
    'name,propCount':function(newName,newpropCount){console.log('最新的name:'+newName);console.log('最新的propCount:'+newpropCount)}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    btnHandler:function(){
      console.log('OK')
      this.setData({
        name:"zairesinatra"
      })
    },
    changePropCountVal:function(){
      this.setData({
        propCount:this.properties.propCount + 1
      })
      this.triggerEvent('myevent',{count:this.properties.propCount})
    }
  }
})
