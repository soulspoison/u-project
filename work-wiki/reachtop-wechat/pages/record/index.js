//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    beginshow: false,
    beginingshow: true,
    recordok: true,
    filePath: '',
  },
  beginrecord: function() {
    var that = this;
    wx.startRecord({
      success: function (res) {
        var tempFilePath = res.tempFilePath;
        console.log(tempFilePath + '-->tempFilePath1')
        that.setData({
          filePath: tempFilePath
        })
      },
      fail: function (res) {
        //录音失败
      },
    })
    setTimeout(function () {
      //结束录音  
      wx.stopRecord()
    }, 10000)
    this.setData({
      beginshow: true,
      beginingshow: false,
    })
  },
  finishrecord: function() {
    wx.stopRecord(),
    this.setData({
      beginingshow: true,
      recordok: false
    })
  },
  resetrecord: function () {
    this.setData({
      recordok: true,
      beginshow: false
    })
  },
  playSound: function(e) {
    var filePath = e.currentTarget.dataset.key;
    //点击开始播放 
    wx.showToast({
      title: '播放结束',
      icon: 'success',
      duration: 1000
    })
    wx.playVoice({
      filePath: filePath,
      success: function () {
        wx.showToast({
          title: '开始播放',
          icon: 'success',
          duration: 1000
        })
      }
    })
  }
})

