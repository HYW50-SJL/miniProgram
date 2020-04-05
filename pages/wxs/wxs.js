// pages/wxs/wxs.js
Page({
  data: {
    num: 1.2345
  },
  handleTofixed(num){
    // return parseFloat(num).toFixed(2)
    this.setData({
      num: this.data.num.toFixed(2)
    })
  }
})