// 一、注册一个小程序实例
App({
  // 生命周期函数的存活时间：后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log("小程序初始化完成：onLaunch");
    // console.log(options);

    // 异步调用
    /*wx.getUserInfo({
      // 数据拿到后才执行complate
      complete: (res) => {console.log(res)}
    });*/

    //  测试onError函数
    /*setTimeout(function(){
      const err = new Error();
      throw err;
    },2000)
    */
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 小程序界面显示之后会执行的函数
   */
  onShow: function (options) {
    console.log("界面显示了：onShow");
    // console.log(options);   
    switch(options.scene){
      case 1001:
        break;
        case 1005:
          break;
    } 
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 界面退出后
   */
  onHide: function () {
    console.log("界面隐藏了：onHide");
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log(msg)
  },

  /* 全局共享数据,globalData是自定义的属性名*/
  globalData: {
    name: "LSJ",
    gender: "女"
  }
})
