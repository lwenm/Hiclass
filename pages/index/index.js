//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },

  tabChange: function (e) {
    console.log(e);
  },
  
  //事件处理函数
  gotoPaotui: function(event) {
    wx.navigateTo({
      url: '../paotui/paotui'
    })
  },

  gotoQiuzhu: function (event) {
    wx.navigateTo({
      url: '../qiuzhu/qiuzhu',
    })
  },

  gotoXianzhi: function(event) {
    wx.navigateTo({
      url: '../xianzhi/xianzhi',
    })
  },

  gotoBiaobai: function(event) {
    wx.navigateTo({
      url: '../biaobai/biaobai',
    })
  },

  onLoad: function () {
    console.log(app);
    wx.setTabBarBadge({
      index: 1,
      text: '9',
    })
    this.setData({
      globalData:app.globalData
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        globalData: app.globalData
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
