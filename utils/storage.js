const storage = {
  /**
   * 设置本地缓存数据
   * @param {String} key 键 必填
   * @param {*} data 要设置的值 必填
   * @callback success 成功后的回调 不是必填
   * @callback fail 失败后的回调 不是必填
   * @callback complete 完成后的回调 不是必填
   */

  setItem(key, data, success, fail, complete) {
    wx.setStorage({
      key: key,
      data: data,
      success: success,
      fail: fail,
      complete: complete
    });
  },
  /**
   * 获取本地缓存数据
   * @param {String} key 键
   * @callback success 成功后的回调 必填
   * @callback fail 失败后的回调 不是必填
   * @callback complete 完成后的回调 不是必填
   */
  
  getItem(key,success,fail,complete) {
    wx.getStorage({
      key: key,
      success: success,
      fail:fail,
      complete:complete
    });
  },
  /** 
   * 清理本地数据缓存
  */
  clear(){
    wx.clearStorage();
  },
  /**
   * 删除指定key的本地缓存数据
   * @param {String} key 键
   * @callback success 成功后的回调 不是必填
   * @callback fail 失败后的回调 不是必填
   * @callback complete 完成后的回调 不是必填
   */
  removeItem(key, success, fail, complete){
    wx.removeStorage({
      key: key,
      success:success,
      fail: fail,
      complete: complete
    })
  },
  /**
   * 同步设置本地缓存数据
   * @param {String} key 键 必填
   * @param {*} data 要设置的值 必填
   */
  setSyncItem(key,value){
    if (!key){
      return;
    }
    try {
      wx.setStorageSync(key, value)
    } catch (e) { 
      console.log("***setSyncItem***" + key, e);
    }
  },
  /**
   * 同步获取本地缓存数据
   * @param {String} key 键 必填
   */
  getSyncItem(key) {
    if(!key){
      return "";
    }
    try {
      return wx.getStorageSync(key);
    } catch (e) {
      console.log("***getSyncItem***"+key,e);
     }
    return "";
  }
}
export default storage;