Page({
  data: {
    name: 'coder',
    age: 18,
    students: [
      {"id":1, "name": "Coco", "gender": "男"},
      {"id":2, "name": "Jack", "gender": "女"},
      {"id":3, "name": "John", "gender": "男"}
    ],
    count: 0,
    counter: 0
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
  pageHandle(event){
    console.log(event);
    this.setData({
      counter: this.data.counter + 2
    })
  },
  handleTabClick(event){
    // console.log(event)
  },
  handleChangeMySelData(){
    // console.log('------')
    // 目的：修改my-sel组件中的num
    // 获取组件对象
    const my_sel = this.selectComponent('#mySel_id');
    // console.log(my_sel);
    // 不推荐这种做法，最好通过组件内部的方法来修改，然后外部调用最好这些内部方法
    /*my_sel.setData({
      num:  my_sel.data.num + 10
    })*/
    my_sel.mySelIncrement(10)
  }
  
})