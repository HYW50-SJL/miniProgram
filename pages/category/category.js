// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    console.log("onLoad");
    /*wx.request({
      url: 'url',
      success: (res) => { // 最好用箭头函数，this直接执像向当前的Page对象
        const data = res.data;
        this.setData({
          list: data
        })
      }
    })*/
    /*const _this = this
    wx.request({
      url: 'url',
      success: function(){
        const data = res.data;
        _this.setData({
            list: data
        })
      }
    })*/

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示(比onReady先执行)
   */
  onShow: function () {
    console.log("onShow")

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide")

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnLoad")


  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    console.log("onPullDownRefresh")


  },

  /**
   * 页面上拉触底事件的处理函数(滚动到底时)
   */
  onReachBottom: function () {
    console.log("onReachBottom")

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 页面滚动时的处理函数
  onPageScroll(){
    console.log("onPageScroll")
  }
})