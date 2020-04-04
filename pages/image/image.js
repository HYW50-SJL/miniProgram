// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picPath: ''
  },
  handleChoosePic(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res); // res包含用户上传的图片的信息，包括保存图片路径的数组（可上传多张图片）
        const picPath = res.tempFilePaths[0]; // 取出第一张图片
        this.setData({
          picPath: picPath // 用于展示图片
        })
      },
    })
  },
  handleImageLoaded(){
    console.log("图片加载完成")
  }
})