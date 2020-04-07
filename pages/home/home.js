Page({
  data: {
    name: 'coder',
  },
  /* 3.用API跳转页面*/
handleRedirectTo(){
  wx.redirectTo({
    url: '/pages/about/about',
  })
},
handleNavigateTo(){
  wx.navigateTo({
    url: '/pages/about/about',
  })
}
})