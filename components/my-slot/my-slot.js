// components/my-slot/my-slot.js
Component({
  /* 组件实例可以在组件的methods、生命周期函数和observer中通过this访问 */
  /* 公共代码，类似于mixins*/
  // behaviors:[require('behavior.js')],
  // /* 外界传过来的数据 */
  // properties: {
  //   num: {
  //     // type: Number,
  //     optionalTypes: [Number,String],
  //     value: 0, 
  //     observer: function(newVal,oldVal){
  //       console.log('不推荐使用这里的observe监听数据变化')
  //     }
  //   }
  // },
  // /* 组件本身的数据 */
  // data: {
  // },
  // /* 组件本身的方法 */
  // methods:{},
  // /* 选项 */
  // options: {
  //   multipleSlots: true, // 使用多个插槽
  //   styleIsolation: "shared" //页面与组件样式的共享方式
  // },
  // /* 外部穿过来的样式 */
  // externalClasses: [],
  // /* 监听properties或data的变化 */
  // observers: {
  //   'num1 num2': function(num1,num2){
  //     // 在num1或者num2被设置时触发
  //     this.setData({
  //       sum: num1 + num2
  //     })
  //   },
  //   'some.field': function(field){
  //     // 使用setData设置this.data.some.field或设置this.data.some时触发
  //     field == this.data.some.field
  //   }
  // },
  // /* 组件生命周期--2.2.3以前的定义方法 */
  // created(){console.log('组件被创建时调用，此时不能调用setData（）')},
  // attached(){console.log(' 组件进入页面节点树时调用')},
  // detached(){console.log('组件从页面中被移除时')}, 
  // ready(){console.log('组件布局完成时调用')}, // 
  // moved(){console.log('组件被移动到节点树的另一个位置时')}, 
  /* 组件生命周期声明对象，推荐使用，优先级最高 */
  lifetimes: {
    created(){console.log('组件被创建时调用，此时不能调用setData（）')},
    attached(){console.log(' 组件进入页面节点树时调用')},
    detached(){console.log('组件从页面中被移除时')}, 
    ready(){console.log('组件布局完成时调用')}, // 
    moved(){console.log('组件被移动到节点树的另一个位置时')}, 
  },
  /* 组件所在页面的生命周期函数 */
  pageLifetimes: {
    show(){console.log('组件所在页面被展开时调用')},
    hide(){console.log('组件所在页面被隐藏时调用')},
    resize(){console.log('组件所在页面尺寸变化时调用')}
  },
  definitionFilter(){}
})
