Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中...', //必填,提示的内容
      icon: 'loading', // 默认图标是success(对勾),none;设置loading和success时,title最多显示7个汉字,none最多显示两行
      image: '/assets/tabbar/cart.png', // 自定义图标,优先级高于icon
      duration: 2000, //默认1500
      mask: true, //是否显示透明蒙层,防止触摸穿透,默认为false
      success: function(){console.log('接口调用成功的回调函数')},
      fail: function(){console.log('接口调用失败的回调函数')},
      complete: function(){console.log('接口调用结束的回调函数,成功和失败都会调用')}
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '标题',
      content: '我是模态弹窗内容',
      showCancel: true, // 是否显示取消按钮，默认true
      cancelText: '取消', // 取消按钮的文字,最多四个字符     
      cancelColor: '', // 取消按钮文字的颜色,最好是16进制
      confirmText: '确定', //确定按钮文字
      confirmColor: '#ff09ff',
      success: function(res){
        console.log('接口调用成功并点击了确定或取消按钮时调用，',res);
        if(res.cancel){
          console.log('点击了取消')
        }
        if(res.comfirm){
          console.log('点击了确定')
        }
      },
      fail: function(res){console.log('接口调用失败的回调函数',res.errMsg)},
      complete: function(){console.log('接口调用结束的回调函数,成功和失败都会调用')}
    })
  },
  // showLoading与showToast只能显示一个
  handleShowLoading(){
    // 可用于网络请求时
    wx.showLoading({
      title: '加载中...',
      mask: true,
      success:function(res){console.log(res)},
      fail: function(res){
        console.log(res.errMsg)
      },
      complete: function(){}
    });
    // 若要关闭Loading弹窗必须手动调用hideLoading
    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },
  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['item1','item2'], // 数组长度最大为6
      itemColor: 'red',
      success: function(res){
        // 获取用户点击的按钮序号,从上到下(从0开始)
        console.log(res.tabIndex)
      },
      fail: function(res){
        // 按下取消时调用
        console.log(res.errMsg); 
      },
      complete: function(){}
    })
  },
  // 内置方法
  onShareAppMessage(options){
    return {
      title: '嘿哈嘿哈', // 转发时小程序显示的标题
      path: '/pages/home/home', // 用户点击被分享的小程序时进入到的页面
      imageUrl: '/assets/1_06.png' // 转发时小程序显示的图片
    }
  }
  
})