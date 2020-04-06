// components/my-event/my-event.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement(){
      this.triggerEvent('triEvent',{},{bubbles:true,composed:true,capturePhase: true})
    }
    // bubbles:是否可以冒泡，composed：事件是否可以穿越组件边界
    // capturePhase：组件是否可以拥有捕获阶段
  }
})
