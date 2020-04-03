// pages/profile/profile.js
// getAPP()是系统给的函数
const app = getApp();// 获取全局的APP()实例对象
console.log(app.globalData.name)
Page({  
  handleGetUserInfo(event){
    console.log(event)
  }
})