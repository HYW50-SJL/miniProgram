import myRequest from '../../service/network';
Page({
  data: {
    name: 'coder',
    age: 18,
    students: [
      {"id":1, "name": "Coco", "gender": "男"},
      {"id":2, "name": "Jack", "gender": "女"},
      {"id":3, "name": "John", "gender": "男"}
    ],
    count: 0
  },
  btnAdd(){
    // 数据不是双向绑定，count已经改变，但页面没有改变
    // this.data.count +=1;
    // console.log(this.data.count);
    this.setData({
      count: this.data.count + 1
    })
  },
  btnSub(){
    this.setData({
      count: this.data.count - 1
    })
  },
onLoad(){
  /* 1.home页面网络请求--原生方式 */
  this.getData()
  /* 2.home页面网络请求--使用promise并封装 */
  myRequest({
    url: 'http://httpbin.org/get',
    method: 'get',
    data: {
      type: 'sell',
      page: 1
    }
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  })

},
  getData(){
    wx.request({
      /* get请求 */
      // url: 'http://httpbin.org/get',
      // success: function(res){
      //   console.log(res)
      // }

      /* get请求并携带参数 */
      // url: 'http://httpbin.org/get/type=sell&page=1',
      // url: 'http://httpbin.org/get',
      // data: {
      //   type: 'sell',
      //   page: 1
      // }

      /* post请求并携带参数 */
      // url: 'http://httpbin.org/post',
      // method: 'post',
      // data: {
      //   name: 'Coco',
      //   age: 12
      // },
      // success(res){
      //   console.log(res)
      // }      
    })
  }  
})