// pages/scroll-view/scroll-view.js
Page({
  handleScroll(event){
    console.log("正在滚动");
    console.log("滚动距离",event.detail.scrollTop)
  }
})