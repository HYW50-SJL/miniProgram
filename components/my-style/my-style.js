// components/my-style/my-style.js
Component({
  data: {
    title: 'my-style组件标题'
  },
  options: {
    // styleIsolation: "shared", 
    //页面样式和自定义组件样式相互影响；若二者对同一class名设置样式时，自定义组件的class样式优先级高于页面的样式
    styleIsolation: "apply-shared" //页面样式会影响自定义组件，但自定义组件的样式不会影响页面
  }
})
