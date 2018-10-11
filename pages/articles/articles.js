//logs.js
const util = require('../../utils/util.js')
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({
  data: {
    article_content:''
  },
  onLoad: function (options) {
    // console.log(options.id);
    var that = this;
    //根据ID请求数据
    wx.request({
      url: 'https://cnodejs.org/api/v1/topic/'+options.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) { 
        var temp = WxParse.wxParse('article_content', 'html', res.data.data.content, that, 5);
        that.setData({temp });    
      }
    })
  }

})
