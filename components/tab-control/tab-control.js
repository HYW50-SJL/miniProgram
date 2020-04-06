// components/tab-control/tab-control.js
Component({
  properties: {
    titles:{
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex:0
  },
  methods: {
    handleTabItem(event){
      // console.log(event);
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentIndex: index
      });
      this.triggerEvent('tabClick',{index,title:this.properties.titles[index]},{});
      // triggerEven的第二个参数发送给页面event的detail对象
    }
  }
})
