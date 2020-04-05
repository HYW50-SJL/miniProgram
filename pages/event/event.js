// pages/event/event.js
Page({
  data:{
    fruits: ['香蕉','西瓜','柠檬']
  },
  handleTap(){
    console.log('handleTap')
  },
  handleTouchStart(){
    console.log('handleTouchStart')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  bindLongPress(){
    console.log('bindLongPress')
  },
  handleBtnClick(event){
    // console.log('事件对象：',event);
    console.log('页面打开到触发事件所经过的毫秒数：',event.timeStamp);
    console.log('产生事件的源组件：',event.target);
    console.log('触发事件的当前组件：',event.currentTarget);
    console.log('事件所携带的信息：',event.detail);
    console.log('触摸的手指个数及信息：',event.touches);
    console.log('记录触摸的变化及信息：',event.changeTouches);
    //点击事件的detail 带有的 x, y 同 pageX, pageY 代表距离文档左上角的距离
  },

  // =======用data-*传递参数=====
  handleFruits(event){
    var dataSet = event.currentTarget.dataset;
    // console.log(event);
    console.log(dataSet.index);
    console.log(dataSet.item);
  },
 // =======事件捕获和事件冒泡=====
 handleCapBox1(){
   console.log('handleCapBox1');
 },
 handleCapBox2(){
    console.log('handleCapBox2');
  },
  handleCapBox3(){
    console.log('handleCapBox3');
  },
  handleBox1(){
    console.log('handleBox1');
  },
  handleBox2(){
     console.log('handleBox2');
  },
   handleBox3(){
     console.log('handleBox3');
  }
})