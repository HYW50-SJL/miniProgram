// pages/about/about.js
Page({
  // 1.从home传递数据
  onLoad: function (options) {
    console.log(options);//options包含home页面传过来的数据
  },

  // 2.从about传递数据给home---修改home的数据
  onUnload: function () {
    // 返回时传递数据给home页面
    //  getCurrentPages():全局方法，获取所有在栈中的页面
    const pages = getCurrentPages();
    // console.log(pages);
    // 1.获取home页面对象
    const home = pages[0];
    home.setData({
      name: '哈哈哈'
    })
  },
  /* 3.用API返回上一页 */
  handleNavigateBack(){
    wx.navigateBack({
      // delta: 2
    })
  },
})