var storage = require('../utils/storage.js').default;
var common = require('../baseservices/common.js');
// const app = getApp()
var http={
  httpPost:function(url,data,success,fail)
  {
      // 获取接口地址
      const baseUrl = this.getBaseUrl(url);
      wx.request({
        url: baseUrl,
        header: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json',
        },
        data: data,
        method: 'post',
        success: success,
        fail: fail
      });
  },
  httpGet:function(url,data,success,fail)
  {

        // 获取接口地址
        const baseUrl = this.getBaseUrl(url);
        wx.request({
          url: baseUrl,
          data: data,
          method: 'get',
          success: success,
          fail: fail
        });
  },
  httpAuthPost:function (url, ticket, data, success, fail)
  {
    // 获取接口地址
    const baseUrl = this.getBaseUrl(url);
    wx.request({
      url: baseUrl,
      data: data,
      method: 'post',
      header: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ticket
      },
      success: function (res) {
        success(res);
      },
      fail: function (error) {
        fail && fail(error);
      }
    });
  },
httpAuthGet:function(url, ticket, data, success, fail) 
{
  // 获取接口地址
  const baseUrl = this.getBaseUrl(url);
  wx.request({
    url: baseUrl,
    data: data,
    method: 'get',
    header: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + ticket
    },
    success: function (res) {
      success(res);
    },
    fail: function (error) {
      fail && fail(error);
    }
  });
},
//同步方法
httpAuthGetSync:function(url, ticket, data){
  return new Promise((resolve, reject) => {
    // 获取接口地址
    const baseUrl = this.getBaseUrl(url);
    wx.request({
      url: baseUrl,
      data: data,
      method: 'get',
      header: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + ticket
      },
      success: function (res) {
        resolve(res);
      },
      fail: function (error) {
        reject(error);
      }
    });

  }
    );

 
},
httpAutoAuthGet:function(url, data, success, fail, aler) 
{
  var _ticket = storage.getSyncItem(common.config.keylist.TICKET);
  if(!_ticket){
    wx.showToast({
      title: '您的授权已失效，请重新登录！',
      icon: 'error',
      duration: 2000
    })
    return;
  }
   //加载产品
   if(!aler){
    wx.showLoading({
      title: '加载中...',
    })
  }
  // 获取接口地址
  const baseUrl = this.getBaseUrl(url);
  wx.request({
    url: baseUrl,
    data: data,
    method: 'get',
    header: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _ticket
    },
    success: function (res) {
      success(res);
      setTimeout(function () {
        wx.hideLoading()
      }, 300);
    },
    fail: function (error) {
      setTimeout(function () {
        wx.hideLoading()
      }, 600);
      fail && fail(error);
    },
    complete: function(){
      setTimeout(function () {
        wx.hideLoading()
      }, 1000);
    }
  });
},
/**
 * 自动授权方法
 * param {string} method 请求方式，post、get 
 * param {string} url 请求api地址
 * param {object} data 请求参数
 * param {function} success 请求成功回调
 * param {function} fail 请求失败回调
 * */ 
httpAutoAuth:function(method,url, data, success, fail,aler) 
{

  var _ticket = storage.getSyncItem(common.config.keylist.TICKET);
  if(!_ticket){
    wx.showToast({
      title: '您的授权已失效，请重新登录！',
      icon: 'error',
      duration: 2000
    })
    return;
  }
  method = method ? method : 'get';
   //加载产品
  if(!aler){
    wx.showLoading({
      title: '加载中...',
    })
  }
  // 获取接口地址
  const baseUrl = this.getBaseUrl(url);
  wx.request({
    url: baseUrl,
    data: data,
    method: method,
    header: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + _ticket
    },
    success: function (res) {
      success(res);
      setTimeout(function () {
        wx.hideLoading()
      }, 300);
    },
    fail: function (error) {
      setTimeout(function () {
        wx.hideLoading()
      }, 600);
      console.log(error);
      fail && fail(error);
    },
    complete: function(){
      setTimeout(function () {
        wx.hideLoading()
      }, 1000);
    }
  });
},
// 获取BaseUrl
getBaseUrl: function(url){
  if(url && !(url.indexOf('http') == 0)){
    let app = getApp();
    let _baseUrls =[common.config.apilist.GetAdListson, common.config.apilist.GetAdInfoJson]
    let baseUrl = common.config.ApiUrl;
    if(app && app.globalData && app.globalData.isFenXiao && _baseUrls.indexOf(url) == -1){
      baseUrl = common.config.branchApiUrl;
    }
    console.log(baseUrl)
    // 获取接口地址
    url = baseUrl + url;
  }
  return url;
}
}
module.exports = http;