// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:6
  },
  // msg页面值改变也会自动传递到组件中
  changeCountval:function(){
    this.setData({
      count:this.data.count + 1
    })
    // 组件之间通讯-返回组件实例
    var component = this.selectComponent('.customA')
    console.log(component)
    console.log(component.data.name);
  },

  getSonCount:function(fakee){
    console.log('ok');
    console.log(fakee.detail);
    this.setData({
      count:fakee.detail.count
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})