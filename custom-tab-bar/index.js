Component({
  data: {
    selected: 0,
    color: "#000000",
    selectedColor: "#000000",
    list: [{
      "pagePath": "/pages/index/index",
      "text": "主页",
      "iconPath": "/images/navicons/outline/md-home.png",
      "selectedIconPath": "/images/navicons/solid/sm-home.png"
    },
    {
      "pagePath": "/pages/todo/todo",
      "text": "消息",
      "iconPath": "/images/navicons/outline/md-annotation.png",
      "selectedIconPath": "/images/navicons/solid/sm-annotation.png"
    },
    {
      "pagePath": "/pages/me/me",
      "text": "我",
      "iconPath": "/images/navicons/outline/md-user.png",
      "selectedIconPath": "/images/navicons/solid/sm-user.png"
    }
    ]
  },
  attached() { },
  methods: {
    switchTab(e) {
      console.log(e);
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url,
        success: function (e) {
          console.log(e)
        },
        fail: function (e) {
          console.log(e)
        }
      })
      this.setData({
        selected: data.index
      })
    }
  }
})