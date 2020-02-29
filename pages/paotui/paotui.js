// Pages/paotui/paotui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    paotuiOrderList:[
      {
        price : 2.0,
        category : "快递",
        genderLimit : "限男生",
        isBig : "是",
        getAddress: "兴庆校区西12申通快递",
        sendtoAddress : "主楼E座808",
        sendtoTime : "2020-2-28 10:30-12:30",
        remarker : "到了提前打电话"
      },
      {
        price: 5.0,
        category: "送取",
        genderLimit: "不限",
        isBig: "否",
        getAddress: "钱学森图书馆",
        sendtoAddress: "软件学院机房",
        sendtoTime: "2020-3-2 10:30-12:30",
        remarker: "到了提前打电话"
      },
      {
        price: 1.0,
        category: "快递",
        genderLimit: "不限",
        isBig: "否",
        getAddress: "兴庆校区西12申通快递",
        sendtoAddress: "主楼E座808",
        sendtoTime: "2020-2-28 10:30-12:30",
        remarker: "到了提前打电话"
      }
    ],

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