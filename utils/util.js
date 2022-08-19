const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

  /**
 * 将本地资源上传到开发者服务器，客户端发起一个 HTTPS POST 请求
 * @param {string} url 开发者服务器 url
 * @param {string} filePath 要上传文件资源的路径
 * @param {string} name 
 * @param {object} formData HTTP 请求中其他额外的 form data
 */
  function uploadFile(url, filePath, name, formData = { openid: "test" })
{
  return new Promise((resolve, reject) => {
    let opts = { url, filePath, name, formData, header: { 'Content-Type': "multipart/form-data" }, success: resolve, fail: reject };
    wx.uploadFile(opts);
  });
}
/**
 * 处理手机号码
 * @param {string} phone 手机号码
 */
function phoneCode(phone) {
  var reg=11 && /^((1)[1-9]{1}\d{9})$/;
  phone = phone + "";
  if(phone && reg.test(phone)){
    // var reg4 = /(\d{3})(\d{4}(\d{4}))/;
    phone = phone.substr(0, 3) + '****' + phone.substr(7); 
  }
  return phone
}
function isNumber(num) {
  var isNum=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/; 
  if(isNum.test(num)) {
    return true;
  }
}
/**
 * 过滤特殊字符
 * @param {*} str 
 */
function filterSpelChar(str){
  if(!str) return ''
  var pattern=new RegExp("[`~%!@#^=''?~！@#￥……&——‘”“'？*()（），,。.、]"); //[]内输入你要过滤的字符
  var rs="";
  rs = str.replace(pattern,'');
  return rs;
}
/**
 * 校验是否包含特殊字符
 * @param {*} str 
 */
function isCheckSpelChar(str){
   var pattern=new RegExp("[`~%!@#^=''?~！@#￥……&——‘”“'？*()（），,。.、]"); //[]内输入你要过滤的字符
   return pattern.test(str)
}

//导出功能
module.exports = {
  formatTime: formatTime,
  uploadFile: uploadFile,
  phoneCode: phoneCode,
  isNumber: isNumber,
  filterSpelChar: filterSpelChar,
  isCheckSpelChar: isCheckSpelChar
}
