// pages/WXML/WXML.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg: '数据1',
    firstname: 'jack',
    lastname: 'John',
    age: 19,
    isActive: false,
    isShow: false,
    score: 50
  },
  handleChange(){
    this.setData({
      isActive: !this.data.isActive
    }) 
  },
  handleIsShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleAddScore(){
    this.setData({
      score: this.data.score + 6
    })
  }
})