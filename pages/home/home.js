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
  }
  
})