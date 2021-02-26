// pages/keykey/keykey.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { id:2,name:"hh" },
      { id:1,name:"zs" },
    ] 
  },
  iptHandler:function(e){
    console.log(e)
    this.setData({
      name:e.detail.value,
    })
  },
  Insert: function () {
    const userInfo = {id:this.data.list.length+1,name:this.data.name}
    const arr = this.data.list
    arr.unshift(userInfo)
    this.setData({
      list:arr
    })
  },
  // Random: function (e) {
  //   const length = this.data.list.length
  //   for (let i = 0; i < length; ++i) {
  //     const x = Math.floor(Math.random() * length)
  //     const y = Math.floor(Math.random() * length)
  //     const temp = this.data.list[x]
  //     this.data.list[x] = this.data.list[y]
  //     this.data.list[y] = temp
  //   }
    // this.setData({
    //   list: this.data.list
  //   // })
  // },
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