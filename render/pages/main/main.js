// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    length:5,
    zs:101,
    flag:true,
    list:['zs','lf','hw'],
    arr:[{id:0,name:"zs"},
         {id:1,name:"zaire"},
         {id:2,name:"sinatra"},],
    name:'',
    hahaha:[{id:1,name:"zi"},{id:2,name:"yi"}],
    whoami:['zs','lf','hw'],
    page:1,
    msglist:[1,2,3,4,5,6,7,8,9,10]
  },
 
  btnTap:function(){
    this.setData({
      flag:!this.data.flag
    })
  },


  iptHandler:function(e){
    console.log(e)
    this.setData({
      name:e.detail.value,
    })
  },


  add:function(){
    const userInfo = {id: this.data.arr.length,name:this.data.name}
    console.log(userInfo);
    const aaa = this.data.arr
    aaa.unshift(userInfo)
    this.setData({
      arr:aaa
    })
  },

  btnHandler2:function(){
    wx.startPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('触发了下拉刷新事件')
    this.setData({
      whoami:['zs',"hh"]
    })

    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // 先让页码值自增加1
    console.log("触底了")
    this.setData({
      page:this.data.page+1
    })
    const newArr = []
    for(let i = 1 ; i <= 10 ; i++){
      const c = (this.data.page - 1) * 10 + i
      newArr.push(c)
      console.log(newArr)
      }
      this.setData({
        msglist:[...this.data.msglist,...newArr]
    })
  },
  onPageScroll:function(obj){
    console.log(obj)
    console.log('当前页面在垂直方向上已滚动了'+obj.scrollTop)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (obj) {
    console.log(obj);
    if(obj.from==='button'){
      console.log('来源于button');
    }
    return {
      title:'测试转发ZSFDP',
      path:'/pages/main/main',
      imageUrl:'../../asset/images/Lantern-Festival.png'
    }
  },
  onTabItemTap(item){
    console.log(item);
    // 打印为一个Object,其中index即索引为0的一项...
  }
})