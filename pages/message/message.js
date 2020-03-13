// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msgList: [
      { 
        userId:123456789,
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eowd50EcFXavF20CPY3W1MQ6oZjYDmqXiaOUpG1h93DM7BXAWkd2CwQAdHGjyOQmxWbpMWpWjswj0g/132",
      nickName:"国际砖家",
      msgContent:"同学你好，给你放到宿舍门口了"},
      {
        userId: 123456789,
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eowd50EcFXavF20CPY3W1MQ6oZjYDmqXiaOUpG1h93DM7BXAWkd2CwQAdHGjyOQmxWbpMWpWjswj0g/132",
        nickName: "国际砖家1",
        msgContent: "测试一下这个内容"
      },
      {
        userId: 123456789,
        avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83eowd50EcFXavF20CPY3W1MQ6oZjYDmqXiaOUpG1h93DM7BXAWkd2CwQAdHGjyOQmxWbpMWpWjswj0g/132",
        nickName: "国际砖家2",
        msgContent: "内容还得做敏感词过滤，真麻烦"
      }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})