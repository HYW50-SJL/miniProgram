// components/my-selector/my-sel.js
Component({
  properties: {

  },
  data: {
    num: 0
  },
  methods: {
    mySelIncrement(n){
      this.setData({
        num: this.data.num + n
      })
    }
  }
})
