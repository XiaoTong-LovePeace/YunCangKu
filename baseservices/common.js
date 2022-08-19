//资源图片地址
let ApiUrl="https://shop.myzhyp.com/api";
let branchApiUrl="https://shop.myzhyp.com/fxapi";
// 总店接口地址
let serverUrl = "https://car.xmtyqp.com/";
// serverUrl =  "https://car.xmtyqp.com";
// 分支版本
let branchUrl = "https://fxcar.xmtyqp.com:444";
// branchUrl = "https://car.myzhyp.com:444";
var erpUrl = "https://erpcar.xmtyqp.com";
var config={
  ApiUrl:ApiUrl,
  branchApiUrl:branchApiUrl,
  server: serverUrl,
  erpUrl: erpUrl,
  branchUrl: branchUrl,
  BYCODE: 'WQBY',
  price: 3000, // 满多少包邮的价格
  apilist:{
    uploadVinImage:"/Cars/DistinguishVinImage",
    login: "/Login/LoginByCode",
    loginByOpenid: "/Login/LoginOpenidBind",
    vinSearch: "/Cars/GetCarsByVin",
    unBindUser: "/Login/UnBindUser",
    vinByProduct: "/Product/GetProductByCar",
    GetCarBrand: "/ProductManage/Cars/GetCarBrand",            // 获取汽车品牌
    GetSerialSelectJson: "/ProductManage/CarSerial/GetSerialSelectJson",  // 根据车品牌获取车型
    GetPLORML: "/ProductManage/Cars/GetPLORML",                  // 获取排量?serialId=179
    GetYears: "/ProductManage/Cars/GetYears",                   // 获取年款?serialId=179&pl=2.0L
    GetFirstCarsJson: "/ProductManage/Cars/GetFirstCarsJson",  // 获取第一辆车数据 serialId=18&Year=&Pl=
    GetCarsJson: "/ProductManage/Cars/GetCarsJson",            // 获取第一辆车数据 serialId=18&Pl=1.8T&Year= 
    GetCarInfoJson: "/ProductManage/Cars/GetCarInfoJson",        // 获取车及相关商品信息 ?carId=10695
    GetGroupProductGridJson: "/ProductManage/Product/GetGroupProductGridJson", // 替换品列表 ?id=EFMQT
    PostProductCart: "/ProductManage/Product/PostProductCart", // 加入购物车 ?code: AFL1G
    PostDelProductCart: "/ProductManage/Product/PostDelProductCart", // 清除购物车?code=
    PostChangeCart: "/ProductManage/Product/PostChangeCart",   // 更新购物车 ?code=&count=
    CollectProduct: "/ProductManage/Product/CollectProduct", // 加入收藏 ?code=
    ProductShoppingCartJson: "/ProductManage/Product/ProductShoppingCartJson",// 获取购物车列表?rows=1000&page=1&sidx=F_LastModifyTime+desc,F_CreatorTime+desc&sord=desc
    CalcShippingFee:  "/SystemManage/Shipping/CalcShippingFee", // 运费计算 ?id=&weight=&province&city=
    GetMyAddressList: "/SystemManage/Shipping/GetMyAddressList", // 获取收货地址列表 ?keyword=
    GetGridJson: "/SystemManage/Shipping/GetGridJson", // 获取快递物流公司列表
    DownloadOrder: "/OrderManage/SaleOrder/DownloadOrder", // 提交订单
    PaymentOrder: "/OrderManage/SaleOrder/PaymentOrder",  // 支付管理
    CCBPaymentOrder: "/OrderManage/SaleOrder/CCBPaymentOrder",  // 新支付方法
    GetOrderGridJson: "/OrderManage/SaleOrder/GetGridJson", // 订单 ?productcodes= &buycount=
    ConfirmProduct: "/ProductManage/Product/ConfirmProduct", // 获取提交商品
    AddressSubmitForm: "/SystemManage/UserAddress/SubmitForm", // 新增、修改收货地址 ?keyValue=修改的值
    GetAddressForm: "/SystemManage/UserAddress/GetForm",// 获取单个地址?keyValue=
    GetDetails: "/SystemManage/UserAddress/GetDetails",// 获取单个地址?keyValue=
    ProcessDefault: "/SystemManage/UserAddress/ProcessDefault", // 设置为默认收货地 id:
    DeleteForm: "/SystemManage/UserAddress/DeleteForm", // 删除收货地址 id:
    GetOrderListJson: "/OrderManage/SaleOrder/GetOrderListJson",// 获取订单列表 rows=10&page=1&sidx=F_CreatorTime desc&sord=desc&OrderCurrentStatus=0
    DeleteSaleOrder: "/OrderManage/SaleOrder/DeleteSaleOrder",// 删除订单 code=
    GetOrderInfo: "/OrderManage/SaleOrder/GetOrderInfo",// 获取订单详情 code=
    GetProductByKeyword: "/ProductManage/Product/GetProductByKeyword", // 通过关键字获取商品信息?q=a
    GetProductInfoByCode: "/ProductManage/Product/GetProductInfoByCode", // 通过code获取商品信息 code=
    GetProductByKeywordRalation: "/ProductManage/Product/GetProductByKeywordRalation", // 通过id获取商品信息 id=
    ProductCollectJson: "/ProductManage/Product/ProductCollectJson", // 获取手册信息 ?rows=20&page=1&sidx=F_CreatorTime+desc&sord=asc
    DeleteProductCollect: "/ProductManage/Product/DeleteProductCollect", // 删除收藏物品
    GetMyOrgJson: "/SystemManage/Organize/GetMyOrgJson", // 获取用户信息
    GetAccountingGridJson: "/SystemManage/Accounting/GetAccountingGridJson", // 获取流水记录
    ChangePassword: "/SystemManage/User/ChangePassword", // 修改密码
    UploadMoblieImage: "/Common/UploadMoblieImage", // 上传图片
    SubmitPayLog: "/SystemManage/Accounting/SubmitPayLog", // 提交凭证
    WxPaymentOrder: '/OrderManage/SaleOrder/WxPaymentOrder', // 微信支付接口  Code,openId
    GetMyTranactionGridJson: '/SystemManage/Accounting/GetMyTranactionGridJson', // 获取转账凭证列表
    GetPoint: '/OrderManage/SaleOrder/GetPoint', // 获取积分
    GetMyProductByBrand: '/ProductManage/Product/GetMyProductByBrand', // 获取分类商品  type: 3, rows:6, page: 1, sidx: 'F_LastModifyTime desc', sord: 'desc' 
    GetPointGridJson: '/SystemManage/Accounting/GetPointGridJson', // 获取积分流水 search=false&nd=1587312198106&rows=50&page=1&sidx=F_LastModifyTime+desc&sord=asc
    GetMyPointProducts: '/ProductManage/Product/GetMyPointProducts', // 获取积分商品
    GetPointBrandList: '/ProductManage/ProductBrand/GetPointBrandList', // 获取积分品牌
    GetFirstCategory: '/ProductManage/ProductCategory/GetFirstCategory', // 获取品牌分类
    GetMyProductGridJson: '/ProductManage/Product/GetMyProductGridJson', // 获取商品
    GetChildCategory: '/ProductManage/ProductCategory/GetChildCategory', // 获取品牌获取分类brand= &prodcategory=
    GetProductDetailByCodeJson: '/ProductManage/Product/GetProductDetailByCodeJson', // 获取商品价格详情 'code': valCode
    ProductGetArrivalDate: '/ProductManage/Product/GetArrivalDate', // 获取到货日期: code
    SubmitJoinUs: '/Login/SubmitJoinUs', // 提交加盟资料
    PostAllDelProductCart:  '/ProductManage/Product/PostAllDelProductCart', // 情况购物车
    ReportForm: '/ProductManage/ProductMatch/ReportForm', // 意见反馈 F_CarModel=&F_Question=
    GetFormJson: '/ProductManage/Product/GetFormJson',   // 商品详细 参数keyValue
    RejectOrder: '/OrderManage/SaleOrder/RejectOrder',   // 订单退款 code=
    CheckAddress: '/SystemManage/UserAddress/CheckAddress', // 地址识别
    getBanner: '/Content/img/mini/banners.txt', // 获取banner信息
    GetAdListson: '/SystemManage/Notice/GetAdListson', // 获取首页banner图
    GetAdInfoJson: '/SystemManage/Notice/GetAdInfoJson', // 获取详情 keyValue=
    GetProvinces: '/OrderManage/SaleOrder/GetProvinces', // 获取省
    GetCity: '/OrderManage/SaleOrder/GetCity', // 获取市 pid=
    GetArea: '/OrderManage/SaleOrder/GetArea', // 获取区 cid=
    GetOrderShipperTrace: '/OrderManage/SaleOrder/GetOrderShipperTrace', // 获取物流信息 code=
    GetGridNotPaymentJson: '/OrderManage/SaleOrder/GetGridNotPaymentJson', // 获取未支付订单
    CheckPaymentTypeJson: '/SystemManage/Organize/CheckPaymentTypeJson', // 获取允许支付的状态
    GetErpProductStock: '/ProductManage/Product/GetErpProductStock', // 获取总店库存数 ?ProductId=AEL1G
    GetunReadMessage: '/SystemManage/Message/GetunReadMessage', // 获取消息数量
    GetGridMessageJson: '/SystemManage/Message/GetGridJson', // 获取消息列表 keyword=？
    DeleteMessageForm: '/SystemManage/Message/DeleteForm', // 删除消息 keyValue=id
    GetMessageDetailJson: '/SystemManage/Message/GetDetailJson', // 获取消息详情 keyValue=id
    ReadAllMessageForm: '/SystemManage/Message/ReadForm', // 一键已读接口
    GetTopList: '/SystemManage/Notice/GetTopList', // 获取重要消息?UserId=
    GetNoticeByOpenIdJson: '/SystemManage/Notice/GetNoticeByOpenIdJson', // 获取通知公告信息string openId, string keyword
    GetNoticeFormJson: '/SystemManage/Notice/GetFormJson', // 获取通知公告详情 keyValue
    GetCarTypeJsonList: '/ReportManage/SearchCarType/GetJsonList', // 获取车型查询历史记录 _search=false&nd=1640745346235&rows=50&page=1&sidx=F_CreatorTime+desc%2CF_OrgName+desc&sord=asc
    QueryOrderPaymentInfoByCode: '/Login/QueryOrderPaymentInfoByCode', // 就会自动去查订单，有支付 就会自动支付成功
  },
  keylist:{
    TICKET: "TICKET",    // 票据信息
    USERINFO: "USERINFO", // 用户信息
    OPENID: "OPENID", // 用户OPENID
    BANNER: "BANNER" // banner
  }
}

module.exports = {
  config: config 
}  