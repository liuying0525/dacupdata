'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 新车贷款首页
      'pages/index',
      // 我的
      'pages/my',
      // 还款计划
      'pages/repayment',
      //修改手机号-申请记录
      'pages/phoneList',
      // 帮助中心
      'pages/help',
      // 还款卡变更-列表
      'pages/cardList',
      //保险赔付-列表
      'pages/indemnityList',
      // 提前还款-申请列表
      'pages/earlyList',
      // 卡券
      'pages/coupon',
      //个人中心登录页面
      'pages/secLogin',
      //还款卡变更-个人信息录入
      'pages/cardPerson',
      //卡券详情
      'pages/couponDetail',
      // 还款卡变更-扣款授权书
      'pages/cardBook',
      // 还款卡变更提交成功
      'pages/cardSubmit',
      // 注册页面
      'pages/secRegister',
      // 还款卡变更-重新获取
      'pages/cardGetAgain',
      // 还款卡变更-添加扣款授权书
      'pages/cardUpBook',
      // 还款卡变更-取消成功
      'pages/cardCancel',
      //还款卡变更
      'pages/cardChange',
      //信息变更
      'pages/informationC',
      //结清材料申请
      'pages/settlement',
      //结清材料申请-寄送信息填写
      'pages/sendInformation',
      //结清材料申请-待寄件/已寄件
      'pages/tosenda',
      // 提前还款-合同信息
      'pages/earlyContract',
      // 修改手机号-提交成功
      'pages/phoneSubmit',
      // 修改手机号-个人信息
      'pages/phonePerson',
      //修改手机号-取消成功
      'pages/phoneCancel',
      // 个人信息
      'pages/myprofile',
      // 重置密码
      'pages/secForget',
      // 保险理赔-个人信息填写
      'pages/indemnityPerson',
      // 提前还款-个人信息
      'pages/earlyPerson',
      //保险赔付取消成功页
      'pages/indemnityCancel',
      // 提前还款-提交成功
      'pages/earlySubmit',
      // 保险理赔-提交成功
      'pages/indemnitySubmit',
      // 注册成功
      'pages/secRegisterSuccess',
      // 提前还款-取消成功
      'pages/earlyCancel',
      // 选择门店
      'pages/mendian',
      // 保险理赔-理赔进度
      'pages/indemnityState',
      // 条件选车
      'pages/sousuo',
      // 金融产品详情页
      'pages/details',
      // 帮您贷款申请页
      'pages/borrow',
      // 直租
      'pages/straight',
      // 直租详情
      'pages/straight_detail',
      // 金融产品列表
      'pages/commodity_details',
      // 贷款计算器
      'pages/calculator',
      // 帮您贷款选择车型
      'pages/xz_che',
      // 搜索
      'pages/brandd',
      // 选择品牌
      'pages/pinpai',
      // 搜索结果
      'pages/branddd',
      // 预约确认
      'pages/order',
      // 我的订单
      'pages/myorder',
      // 我的收藏
      'pages/myordey',
      // 意见反馈
      'pages/opinion',
      // 关于我们
      'pages/aboutme',
      // 贷款流程
      'pages/loanprocess',
      // 我的足迹
      'pages/footprint',
      // 修改手机号
      'pages/change',
      // 热销好车
      'pages/products',
      // 贴息专区
      'pages/tiexi',
      // 成功页
      'pages/successfulorder',
      // 选择车型
      'pages/brand',
      // 帮您贷款
      'pages/choose',
      // 订单详情
      'pages/ddxq',
      // 直租搜索结果页
      'pages/seek',
      // 直租搜索页
      'pages/rent',
      // 活动
      'pages/midautumn', 'pages/midautumnn', 'pages/midautumnone', 'pages/midautumnonee',
      // 活动预约确认
      'pages/activities', 'pages/personal', 'pages/url'],
      permission: {
        'scope.userLocation': {
          'desc': '你的位置信息将用于小程序位置接口的效果展示'
        }
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#6044ca',
        navigationBarTextStyle: 'white',
        onReachBottomDistance: 10
      },
      debug: false
    };
    _this.globalData = {
      // 二期贷后以及红旗优惠券静态资源地址
      url_dhLink: 'https://webapi.dongzhengafc.com:9503/images/',
      // 二期贷后用的生产接口域名
      //json_dhLink: 'https://webapi.dongzhengafc.com:9503',
      // 二期贷后用的测试接口域名
      //json_dhLink: 'http://test-wxapp.dongzhengafc.com:9091',
      json_dhLink: 'http://test-webapi.dongzhengafc.com:9113',
      // 是否注册
      isRegist: false,
      // login_token 登录的token
      login_token: '',
      // 注册登录的手机号
      login_phone: '',
      login_idCard: '',
      login_name: '',
      login_userId: '',
      // 品牌列表
      pinpailist: '123123123123',
      // 用户信息
      userInfo: null,
      // 定位
      gps_dw: '',

      // 资源地址
      // url_link: 'https://wxapp.dongzhengafc.com/mg/assets/',
      // 新的资源地址
      url_link: 'https://webapi.dongzhengafc.com:9503/images/',
      //测试资源地址
      // url_link: 'http://test-wxapp.dongzhengafc.com/assets/',
      // 正式服务器
      json_link: 'https://wxapp.dongzhengafc.com', //mg',
      // 测试地址
      //json_link:'http://test-wxapp.dongzhengafc.com',
      // 登录
      java_login: function java_login(e, hanshu) {

        console.log('检查是否授权');
        var this_ = this;
        this.logining = true;
        console.log(e);
        console.log("这里是函数:" + hanshu);
        wx.login({
          success: function success(res) {
            console.log('微信官方登录获取信息');
            if (res.code) {
              console.log('微信登录成功');
              var authid = 'dongzheng';
              var authsecret = 'dongzheng';
              var mpid = 'DZ2018';
              var moduleid = '2cbb2fa14279486499de20c971ef96d1';
              var jscode = res.code;
              var iv = e.iv;
              var encryptedData = e.encryptedData;
              var convertmpid = 'DZ2018';
              // 手机参数
              var telnumdata = this_.login_telnum_miyao;
              var telnumiv = this_.login_telnum_iv;
              var phonebrand = this_.login_phonebrand;
              var phonemodel = this_.login_phonemodel;
              var system = this_.login_system;
              var platform = this_.login_platform;
              var network = this_.login_network;
              var lat = this_.login_lat;
              var lng = this_.login_lng;
              var country = this_.addressComponent.country; //过
              var city = this_.addressComponent.city;
              var province = this_.addressComponent.province;
              var userid = this_.userid;
              if (userid != '') {
                console.log('真的特别匹');
                wx.request({
                  url: this_.json_link + '/api/wxapp/user/login',
                  method: 'POST',
                  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  data: {
                    jscode: jscode,
                    encryptedData: encryptedData,
                    iv: iv,
                    convertmpid: convertmpid,
                    mpid: mpid,
                    authid: authid,
                    authsecret: authsecret,
                    moduleid: moduleid,
                    withauthdata: 0,
                    telnumdata: telnumdata,
                    telnumiv: telnumiv,
                    phonebrand: phonebrand,
                    phonemodel: phonemodel,
                    system: system,
                    platform: platform,
                    network: network,
                    lat: lat,
                    lng: lng,
                    country: country,
                    city: city,
                    province: province,
                    referee: userid
                  },
                  success: function success(data) {
                    console.log('进入登录成功');
                    if (data.data.code == 'A00006') {
                      wx.showToast({
                        title: '登录成功！',
                        icon: 'success'
                      });
                      this_.access_token = data.data.access_token;
                      this_.optionid = data.data.optionid;
                      debugger;
                      hanshu(this_.access_token);
                      wx.request({
                        // url拼接
                        url: this_.json_link + '/api/wxapp/userinfo/detail?access_token=' + data.data.access_token,
                        data: {},
                        // 后台返回值
                        success: function success(data) {
                          console.log(data.data.data.userid);
                          this_.userid = data.data.data.userid;
                          // 定义返回值的数据
                          // 领取
                          wx.request({
                            // url拼接
                            url: this_.json_link + '/api/wxapp/card/loginsendcardinfo?access_token=' + data.data.access_token,
                            data: {},
                            // 后台返回值
                            success: function success(data) {
                              console.log(data.data.data.type);
                              // 领取
                              if (data.data.data.type == -1) {} else if (data.data.data.type == 1) {
                                wx.showModal({
                                  title: '提示',
                                  content: data.data.data.title,
                                  showCancel: false,
                                  confirmText: "领取",
                                  success: function success(res) {
                                    if (res.confirm) {
                                      wx.request({
                                        url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + access_token,
                                        data: {
                                          sendflag: 0
                                        },
                                        success: function success(data) {}
                                      });
                                    } else if (res.cancel) {
                                      console.log('用户点击取消');
                                    }
                                  }
                                });
                              } else if (data.data.data.type == 0) {
                                wx.showModal({
                                  title: '提示',
                                  content: data.data.data.title,
                                  showCancel: true,
                                  confirmText: "领取",
                                  success: function success(res) {
                                    if (res.confirm) {
                                      wx.request({
                                        url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + access_token,
                                        data: {
                                          sendflag: 1
                                        },
                                        success: function success(data) {}
                                      });
                                    } else if (res.cancel) {
                                      console.log('用户点击取消');
                                      wx.request({
                                        url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + access_token,
                                        data: {
                                          sendflag: 0
                                        },
                                        success: function success(data) {}
                                      });
                                    }
                                  }
                                });
                              }
                              // 定义返回值的数据
                              // 提示
                            }
                          });
                        }
                      });
                    } else {
                      wx.showToast({
                        title: '登录失败！',
                        icon: 'success'
                      });
                    }
                    this_.logining = false;
                  }
                });
              } else {
                wx.request({
                  url: this_.json_link + '/api/wxapp/user/login',
                  method: 'POST',
                  header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                  data: {
                    jscode: jscode,
                    encryptedData: encryptedData,
                    iv: iv,
                    convertmpid: convertmpid,
                    mpid: mpid,
                    authid: authid,
                    authsecret: authsecret,
                    moduleid: moduleid,
                    withauthdata: 0,
                    telnumdata: telnumdata,
                    telnumiv: telnumiv,
                    phonebrand: phonebrand,
                    phonemodel: phonemodel,
                    system: system,
                    platform: platform,
                    network: network,
                    lat: lat,
                    lng: lng,
                    country: country,
                    city: city,
                    province: province
                  },
                  success: function success(data) {
                    console.log('进入登录成功');
                    if (data.data.code == 'A00006') {
                      wx.showToast({
                        title: '登录成功！',
                        icon: 'success'
                      });
                      this_.access_token = data.data.access_token;
                      var _access_token = data.data.access_token;
                      this_.optionid = data.data.optionid;

                      hanshu(this_.access_token);
                      debugger;
                      wx.request({
                        // url拼接
                        url: this_.json_link + '/api/wxapp/userinfo/detail?access_token=' + data.data.access_token,
                        data: {},
                        // 后台返回值
                        success: function success(data) {
                          console.log(data.data.data.userid);
                          this_.userid = data.data.data.userid;
                          // 定义返回值的数据
                        }
                      });
                      console.log('登录成功ad！');
                      // 领取
                      wx.request({
                        // url拼接
                        url: this_.json_link + '/api/wxapp/card/loginsendcardinfo?access_token=' + data.data.access_token,
                        data: {},
                        // 后台返回值
                        success: function success(data) {
                          // 领取
                          if (data.data.data.type == -1) {} else if (data.data.data.type == 1) {
                            wx.showModal({
                              title: '提示',
                              content: data.data.data.title,
                              showCancel: false,
                              confirmText: "领取",
                              success: function success(res) {
                                if (res.confirm) {
                                  wx.request({
                                    url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + _access_token,
                                    data: {
                                      sendflag: 0
                                    },
                                    success: function success(data) {}
                                  });
                                } else if (res.cancel) {
                                  console.log('用户点击取消');
                                }
                              }
                            });
                          } else if (data.data.data.type == 0) {
                            wx.showModal({
                              title: '提示',
                              content: data.data.data.title,
                              showCancel: true,
                              confirmText: "领取",
                              success: function success(res) {
                                if (res.confirm) {
                                  wx.request({
                                    url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + _access_token,
                                    data: {
                                      sendflag: 1
                                    },
                                    success: function success(data) {}
                                  });
                                } else if (res.cancel) {
                                  console.log('用户点击取消');
                                  wx.request({
                                    url: this_.json_link + '/api/wxapp/card/loginsendcard?access_token=' + _access_token,
                                    data: {
                                      sendflag: 0
                                    },
                                    success: function success(data) {}
                                  });
                                }
                              }
                            });
                          }
                          // 定义返回值的数据
                          // 提示
                        }
                      });
                    } else {
                      wx.showToast({
                        title: '登录失败！',
                        icon: 'success'
                      });
                    }
                    this_.logining = false;
                  }
                });
              }
            } else {
              console.log('授权13');
              this_.logining = false;
              console.log('登录失败！！！');
            }
          }
        });
      },
      addressComponent: '',
      // token
      access_token: '',
      // optionid
      optionid: '',
      // 登录需要的参数
      login_telnum_iv: '',
      login_telnum_miyao: '',
      login_phonebrand: '',
      login_phonemodel: '',
      login_system: '',
      login_platform: '',
      login_network: '',
      login_lat: '',
      login_lng: '',
      nameors: '品牌',
      // 品牌id
      pinpaiid: '',
      biaoji: '0',
      pageWidth: '', // 页面宽度
      pageHeight: '', // 页面高度
      // 保存选中的门店信息
      selectMendian: {},
      // 当前城市
      cityName: '全国',
      // 正在登陆 true表示正在登陆
      logining: false,
      // UV统计选车类型 0--新车贷款 1--条件选车 2--贴息专区 3--热销好车
      UVselectType: -1,
      // 点击数生成订单数统计
      // 当前点击对象的id
      pageid: [],
      // 当前操作对象 1:热搜词, 2:热卖车系, 3:车辆, 4:首页车辆图片, 5:广告, 6:活动, 7:直租热搜词
      pagename: [],
      // 贷款提交订单接口两个参数
      // 来源 0 默认 1 贴息 2 活动
      source: 0,
      // 来源id carmodelid/activityid
      sourceid: '',
      value: '',
      userid: '',
      turn: '当前'
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      var that = this;
      this.testAsync();
      wx.setEnableDebug({
        // 调试模式开关
        enableDebug: false

      });

      // 监听网络变化
      wx.onNetworkStatusChange(function (res) {
        if (!res.isConnected) {
          wx.showToast({
            title: '网络已断开'
          });
        }
      });

      // 获取导航高度
      // 获取系统信息
      wx.getSystemInfo({
        success: function success(res) {
          // 可使用窗口宽度、高度
          that.globalData.pageWidth = res.windowWidth;
          that.globalData.pageHeight = res.windowHeight;
        }
      });
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
    // 获取用户信息

  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
    // 维护我的足迹数据
    /**
     * value
     参数:
     type: 0 直租详情 1 金融商品列表
     carmodelid: 车系id
     financialproductid: 产品id(直租)
     daikuantag: 贷款标签：新车贷(1)
     goodimage: 图片地址
     carseriesname: 车系名称
     name: 产品名称
     price: 厂家指导价
     cardpageJA: 活动(直租)
     downpayment: 首付
     monthlysupply: 月供(直租详情)
     downpaymentpercent: 首付百分比
     loanterm: 贷款期限
     *
     */

  }, {
    key: 'myFootData',
    value: function myFootData(option, value) {
      if (option === 'get') {
        return wx.getStorageSync('myFoot').data;
      } else if (option === 'add') {
        if (wx.getStorageSync('myFoot')) {
          var data = wx.getStorageSync('myFoot').data;
          data = data.filter(function (ele, index) {
            return ele.carmodelid !== value.carmodelid;
          });
          data.unshift(value);
          // 保留前50条数据
          if (data.length > 50) {
            data = data.slice(0, 50);
          }
          wx.setStorageSync('myFoot', { data: data });
        } else {
          var myFoot = {
            data: []
          };
          myFoot.data.unshift(value);
          wx.setStorageSync('myFoot', myFoot);
        }
      } else if (option === 'del') {
        var _data = wx.getStorageSync('myFoot').data;
        _data = _data.filter(function (ele, index) {
          return ele.carmodelid !== value;
        });
        wx.setStorageSync('myFoot', { data: _data });
      }
    }

    // 修改手机号倒计时状态
    /**
     type: set--保存当前倒计时状态  get--获取倒计时状态 remove--移除状态
     phone: 当前手机号
     timerNum: 当前倒计时秒数
     **/

  }, {
    key: 'changeTimerState',
    value: function changeTimerState(type, phone, timerNum) {
      if (type === 'set') {
        // 秒
        var timestr = Date.parse(new Date()) / 1000;
        var obj = {
          phone: phone,
          timerNum: timerNum,
          timestr: timestr
        };
        wx.setStorageSync('timerState', obj);
      } else if (type === 'get') {
        return wx.getStorageSync('timerState');
      } else if (type === 'remove') {
        wx.removeStorageSync('timerState');
      }
    }

    // UV统计
    // currentpage: newcarhomepage--新车贷款.choosecarpage--条件选车、贴息专区、热销好车.loanproductlist--金融产品列表.loanproductdetail--金融产品详情.fillinorderpage--预约确认.newordersubmitsuccess--新用户创建订单成功.oldordersubmitsuccess--老用户创建订单成功

  }, {
    key: 'UVstatistical',
    value: function UVstatistical(currentpage) {
      var that = this;
      if (that.globalData.UVselectType < 0) {
        return false;
      }
      wx.request({
        url: that.globalData.json_link + '/mframework/api/token?authid=dongzheng&authsecret=dongzheng',
        success: function success(res) {
          wx.request({
            url: that.globalData.json_link + '/api/wxapp/stat/orderstat?access_token=' + res.data.access_token,
            data: {
              currentpage: currentpage,
              choosecartype: that.globalData.UVselectType
            },
            success: function success(res) {
              console.log(res);
            }
          });
        }
      });
    }

    // PV UV统计
    /** currentpage:
     newcarhomepage  首页
     interestdiscount  贴息专区
     hotsale  热销好车
     conditionchoosecar  条件选车
     loanproductlist  金融产品列表
     loanproductdetail  金融产品详情
     directrenthomepage  直租
     directrentdetail  直租详情
     my  我的
     cardpagedetail  卡券详情
     helpyouload  帮您贷款
     loancalculator  贷款计算器
     rentfillinorderpage  直租预约确认
     rentnewordersubmitsuccess  直租新用户创建订单成功
     rentoldordersubmitsuccess  直租老用户创建订单成功
     **/

  }, {
    key: 'PVUVstatistical',
    value: function PVUVstatistical(currentpage) {
      var that = this;
      wx.request({
        url: that.globalData.json_link + '/mframework/api/token?authid=dongzheng&authsecret=dongzheng',
        success: function success(res) {
          wx.request({
            url: that.globalData.json_link + '/api/wxapp/stat/flowstat?access_token=' + res.data.access_token,
            data: {
              currentpage: currentpage
            },
            success: function success(res) {
              console.log(res);
            }
          });
        }
      });
    }

    // 点击数生成订单数统计
    /** incrfield: 1:点击数  2 ：生成订单数
     **/

  }, {
    key: 'clicknumordernumstat',
    value: function clicknumordernumstat(incrfield) {
      var that = this;
      wx.request({
        url: that.globalData.json_link + '/mframework/api/token?authid=dongzheng&authsecret=dongzheng',
        success: function success(res) {
          for (var i = 0; i < that.globalData.pageid.length; i++) {
            wx.request({
              url: that.globalData.json_link + '/api/wxapp/stat/clicknumordernumstat?access_token=' + res.data.access_token,
              data: {
                pageid: that.globalData.pageid[i],
                pagename: that.globalData.pagename[i],
                incrfield: incrfield
              },
              success: function success(res) {
                console.log(res);
              }
            });
          }
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 版本更新
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        console.log(res.hasUpdate);
      });
      updateManager.onUpdateReady(function () {
        wx.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: function success(res) {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          }
        });
      });
      updateManager.onUpdateFailed(function () {
        // 新的版本下载失败
      });
      //
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInBlcm1pc3Npb24iLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJkZWJ1ZyIsImdsb2JhbERhdGEiLCJ1cmxfZGhMaW5rIiwianNvbl9kaExpbmsiLCJpc1JlZ2lzdCIsImxvZ2luX3Rva2VuIiwibG9naW5fcGhvbmUiLCJsb2dpbl9pZENhcmQiLCJsb2dpbl9uYW1lIiwibG9naW5fdXNlcklkIiwicGlucGFpbGlzdCIsInVzZXJJbmZvIiwiZ3BzX2R3IiwidXJsX2xpbmsiLCJqc29uX2xpbmsiLCJqYXZhX2xvZ2luIiwiZSIsImhhbnNodSIsImNvbnNvbGUiLCJsb2ciLCJ0aGlzXyIsImxvZ2luaW5nIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiYXV0aGlkIiwiYXV0aHNlY3JldCIsIm1waWQiLCJtb2R1bGVpZCIsImpzY29kZSIsIml2IiwiZW5jcnlwdGVkRGF0YSIsImNvbnZlcnRtcGlkIiwidGVsbnVtZGF0YSIsImxvZ2luX3RlbG51bV9taXlhbyIsInRlbG51bWl2IiwibG9naW5fdGVsbnVtX2l2IiwicGhvbmVicmFuZCIsImxvZ2luX3Bob25lYnJhbmQiLCJwaG9uZW1vZGVsIiwibG9naW5fcGhvbmVtb2RlbCIsInN5c3RlbSIsImxvZ2luX3N5c3RlbSIsInBsYXRmb3JtIiwibG9naW5fcGxhdGZvcm0iLCJuZXR3b3JrIiwibG9naW5fbmV0d29yayIsImxhdCIsImxvZ2luX2xhdCIsImxuZyIsImxvZ2luX2xuZyIsImNvdW50cnkiLCJhZGRyZXNzQ29tcG9uZW50IiwiY2l0eSIsInByb3ZpbmNlIiwidXNlcmlkIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsImhlYWRlciIsImRhdGEiLCJ3aXRoYXV0aGRhdGEiLCJyZWZlcmVlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiYWNjZXNzX3Rva2VuIiwib3B0aW9uaWQiLCJ0eXBlIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJzZW5kZmxhZyIsImNhbmNlbCIsIm5hbWVvcnMiLCJwaW5wYWlpZCIsImJpYW9qaSIsInBhZ2VXaWR0aCIsInBhZ2VIZWlnaHQiLCJzZWxlY3RNZW5kaWFuIiwiY2l0eU5hbWUiLCJVVnNlbGVjdFR5cGUiLCJwYWdlaWQiLCJwYWdlbmFtZSIsInNvdXJjZSIsInNvdXJjZWlkIiwidmFsdWUiLCJ0dXJuIiwidXNlIiwidGhhdCIsInRlc3RBc3luYyIsInNldEVuYWJsZURlYnVnIiwiZW5hYmxlRGVidWciLCJvbk5ldHdvcmtTdGF0dXNDaGFuZ2UiLCJpc0Nvbm5lY3RlZCIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImNiIiwid2VweSIsImdldFVzZXJJbmZvIiwib3B0aW9uIiwiZ2V0U3RvcmFnZVN5bmMiLCJmaWx0ZXIiLCJlbGUiLCJpbmRleCIsImNhcm1vZGVsaWQiLCJ1bnNoaWZ0IiwibGVuZ3RoIiwic2xpY2UiLCJzZXRTdG9yYWdlU3luYyIsIm15Rm9vdCIsInBob25lIiwidGltZXJOdW0iLCJ0aW1lc3RyIiwiRGF0ZSIsInBhcnNlIiwib2JqIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJjdXJyZW50cGFnZSIsImNob29zZWNhcnR5cGUiLCJpbmNyZmllbGQiLCJpIiwidXBkYXRlTWFuYWdlciIsImdldFVwZGF0ZU1hbmFnZXIiLCJvbkNoZWNrRm9yVXBkYXRlIiwiaGFzVXBkYXRlIiwib25VcGRhdGVSZWFkeSIsImFwcGx5VXBkYXRlIiwib25VcGRhdGVGYWlsZWQiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNF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QUFFWE0sbUJBQVMsa0JBRkU7QUFHWGhELG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlrRCxPQUFSLEVBQWlCO0FBQ2Y7QUFDQTBELDRCQUFjSyxXQUFkO0FBQ0Q7QUFDRjtBQVJVLFNBQWI7QUFVRCxPQVhEO0FBWUFMLG9CQUFjTSxjQUFkLENBQTZCLFlBQVc7QUFDdEM7QUFDRCxPQUZEO0FBR0E7QUFFRDs7OztFQXh3QjBCOUIsZUFBSytCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgLy8g5paw6L2m6LS35qy+6aaW6aG1XHJcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAvLyDmiJHnmoRcclxuICAgICAgICAncGFnZXMvbXknLFxyXG4gICAgICAgIC8vIOi/mOasvuiuoeWIklxyXG4gICAgICAgICdwYWdlcy9yZXBheW1lbnQnLFxyXG4gICAgICAgIC8v5L+u5pS55omL5py65Y+3LeeUs+ivt+iusOW9lVxyXG4gICAgICAgICdwYWdlcy9waG9uZUxpc3QnLFxyXG4gICAgICAgIC8vIOW4ruWKqeS4reW/g1xyXG4gICAgICAgICdwYWdlcy9oZWxwJyxcclxuICAgICAgICAvLyDov5jmrL7ljaHlj5jmm7Qt5YiX6KGoXHJcbiAgICAgICAgJ3BhZ2VzL2NhcmRMaXN0JyxcclxuICAgICAgICAvL+S/nemZqei1lOS7mC3liJfooahcclxuICAgICAgICAncGFnZXMvaW5kZW1uaXR5TGlzdCcsXHJcbiAgICAgICAgLy8g5o+Q5YmN6L+Y5qy+LeeUs+ivt+WIl+ihqFxyXG4gICAgICAgICdwYWdlcy9lYXJseUxpc3QnLFxyXG4gICAgICAgIC8vIOWNoeWIuFxyXG4gICAgICAgICdwYWdlcy9jb3Vwb24nLFxyXG4gICAgICAgIC8v5Liq5Lq65Lit5b+D55m75b2V6aG16Z2iXHJcbiAgICAgICAgJ3BhZ2VzL3NlY0xvZ2luJyxcclxuICAgICAgICAvL+i/mOasvuWNoeWPmOabtC3kuKrkurrkv6Hmga/lvZXlhaVcclxuICAgICAgICAncGFnZXMvY2FyZFBlcnNvbicsXHJcbiAgICAgICAgLy/ljaHliLjor6bmg4VcclxuICAgICAgICAncGFnZXMvY291cG9uRGV0YWlsJyxcclxuICAgICAgICAvLyDov5jmrL7ljaHlj5jmm7Qt5omj5qy+5o6I5p2D5LmmXHJcbiAgICAgICAgJ3BhZ2VzL2NhcmRCb29rJyxcclxuICAgICAgICAvLyDov5jmrL7ljaHlj5jmm7Tmj5DkuqTmiJDlip9cclxuICAgICAgICAncGFnZXMvY2FyZFN1Ym1pdCcsXHJcbiAgICAgICAgLy8g5rOo5YaM6aG16Z2iXHJcbiAgICAgICAgJ3BhZ2VzL3NlY1JlZ2lzdGVyJyxcclxuICAgICAgICAvLyDov5jmrL7ljaHlj5jmm7Qt6YeN5paw6I635Y+WXHJcbiAgICAgICAgJ3BhZ2VzL2NhcmRHZXRBZ2FpbicsXHJcbiAgICAgICAgLy8g6L+Y5qy+5Y2h5Y+Y5pu0Lea3u+WKoOaJo+asvuaOiOadg+S5plxyXG4gICAgICAgICdwYWdlcy9jYXJkVXBCb29rJyxcclxuICAgICAgICAvLyDov5jmrL7ljaHlj5jmm7Qt5Y+W5raI5oiQ5YqfXHJcbiAgICAgICAgJ3BhZ2VzL2NhcmRDYW5jZWwnLFxyXG4gICAgICAgIC8v6L+Y5qy+5Y2h5Y+Y5pu0XHJcbiAgICAgICAgJ3BhZ2VzL2NhcmRDaGFuZ2UnLFxyXG4gICAgICAgIC8v5L+h5oGv5Y+Y5pu0XHJcbiAgICAgICAgJ3BhZ2VzL2luZm9ybWF0aW9uQycsXHJcbiAgICAgICAgICAgLy/nu5PmuIXmnZDmlpnnlLPor7dcclxuICAgICAgICAncGFnZXMvc2V0dGxlbWVudCcsXHJcbiAgICAgICAgLy/nu5PmuIXmnZDmlpnnlLPor7ct5a+E6YCB5L+h5oGv5aGr5YaZXHJcbiAgICAgICAgJ3BhZ2VzL3NlbmRJbmZvcm1hdGlvbicsXHJcbiAgICAgICAgLy/nu5PmuIXmnZDmlpnnlLPor7ct5b6F5a+E5Lu2L+W3suWvhOS7tlxyXG4gICAgICAgICdwYWdlcy90b3NlbmRhJyxcclxuICAgICAgICAvLyDmj5DliY3ov5jmrL4t5ZCI5ZCM5L+h5oGvXHJcbiAgICAgICAgJ3BhZ2VzL2Vhcmx5Q29udHJhY3QnLFxyXG4gICAgICAgIC8vIOS/ruaUueaJi+acuuWPty3mj5DkuqTmiJDlip9cclxuICAgICAgICAncGFnZXMvcGhvbmVTdWJtaXQnLFxyXG4gICAgICAgIC8vIOS/ruaUueaJi+acuuWPty3kuKrkurrkv6Hmga9cclxuICAgICAgICAncGFnZXMvcGhvbmVQZXJzb24nLFxyXG4gICAgICAgIC8v5L+u5pS55omL5py65Y+3LeWPlua2iOaIkOWKn1xyXG4gICAgICAgICdwYWdlcy9waG9uZUNhbmNlbCcsXHJcbiAgICAgICAgLy8g5Liq5Lq65L+h5oGvXHJcbiAgICAgICAgJ3BhZ2VzL215cHJvZmlsZScsXHJcbiAgICAgICAgLy8g6YeN572u5a+G56CBXHJcbiAgICAgICAgJ3BhZ2VzL3NlY0ZvcmdldCcsXHJcbiAgICAgICAgLy8g5L+d6Zmp55CG6LWULeS4quS6uuS/oeaBr+Whq+WGmVxyXG4gICAgICAgICdwYWdlcy9pbmRlbW5pdHlQZXJzb24nLFxyXG4gICAgICAgIC8vIOaPkOWJjei/mOasvi3kuKrkurrkv6Hmga9cclxuICAgICAgICAncGFnZXMvZWFybHlQZXJzb24nLFxyXG4gICAgICAgIC8v5L+d6Zmp6LWU5LuY5Y+W5raI5oiQ5Yqf6aG1XHJcbiAgICAgICAgJ3BhZ2VzL2luZGVtbml0eUNhbmNlbCcsXHJcbiAgICAgICAgLy8g5o+Q5YmN6L+Y5qy+LeaPkOS6pOaIkOWKn1xyXG4gICAgICAgICdwYWdlcy9lYXJseVN1Ym1pdCcsXHJcbiAgICAgICAgLy8g5L+d6Zmp55CG6LWULeaPkOS6pOaIkOWKn1xyXG4gICAgICAgICdwYWdlcy9pbmRlbW5pdHlTdWJtaXQnLFxyXG4gICAgICAgIC8vIOazqOWGjOaIkOWKn1xyXG4gICAgICAgICdwYWdlcy9zZWNSZWdpc3RlclN1Y2Nlc3MnLFxyXG4gICAgICAgIC8vIOaPkOWJjei/mOasvi3lj5bmtojmiJDlip9cclxuICAgICAgICAncGFnZXMvZWFybHlDYW5jZWwnLFxyXG4gICAgICAgIC8vIOmAieaLqemXqOW6l1xyXG4gICAgICAgICdwYWdlcy9tZW5kaWFuJyxcclxuICAgICAgICAvLyDkv53pmannkIbotZQt55CG6LWU6L+b5bqmXHJcbiAgICAgICAgJ3BhZ2VzL2luZGVtbml0eVN0YXRlJyxcclxuICAgICAgICAvLyDmnaHku7bpgInovaZcclxuICAgICAgICAncGFnZXMvc291c3VvJyxcclxuICAgICAgICAvLyDph5Hono3kuqflk4Hor6bmg4XpobVcclxuICAgICAgICAncGFnZXMvZGV0YWlscycsXHJcbiAgICAgICAgLy8g5biu5oKo6LS35qy+55Sz6K+36aG1XHJcbiAgICAgICAgJ3BhZ2VzL2JvcnJvdycsXHJcbiAgICAgICAgLy8g55u056efXHJcbiAgICAgICAgJ3BhZ2VzL3N0cmFpZ2h0JyxcclxuICAgICAgICAvLyDnm7Tnp5/or6bmg4VcclxuICAgICAgICAncGFnZXMvc3RyYWlnaHRfZGV0YWlsJyxcclxuICAgICAgICAvLyDph5Hono3kuqflk4HliJfooahcclxuICAgICAgICAncGFnZXMvY29tbW9kaXR5X2RldGFpbHMnLFxyXG4gICAgICAgIC8vIOi0t+asvuiuoeeul+WZqFxyXG4gICAgICAgICdwYWdlcy9jYWxjdWxhdG9yJyxcclxuICAgICAgICAvLyDluK7mgqjotLfmrL7pgInmi6novablnotcclxuICAgICAgICAncGFnZXMveHpfY2hlJyxcclxuICAgICAgICAvLyDmkJzntKJcclxuICAgICAgICAncGFnZXMvYnJhbmRkJyxcclxuICAgICAgICAvLyDpgInmi6nlk4HniYxcclxuICAgICAgICAncGFnZXMvcGlucGFpJyxcclxuICAgICAgICAvLyDmkJzntKLnu5PmnpxcclxuICAgICAgICAncGFnZXMvYnJhbmRkZCcsXHJcbiAgICAgICAgLy8g6aKE57qm56Gu6K6kXHJcbiAgICAgICAgJ3BhZ2VzL29yZGVyJyxcclxuICAgICAgICAvLyDmiJHnmoTorqLljZVcclxuICAgICAgICAncGFnZXMvbXlvcmRlcicsXHJcbiAgICAgICAgLy8g5oiR55qE5pS26JePXHJcbiAgICAgICAgJ3BhZ2VzL215b3JkZXknLFxyXG4gICAgICAgIC8vIOaEj+ingeWPjemmiFxyXG4gICAgICAgICdwYWdlcy9vcGluaW9uJyxcclxuICAgICAgICAvLyDlhbPkuo7miJHku6xcclxuICAgICAgICAncGFnZXMvYWJvdXRtZScsXHJcbiAgICAgICAgLy8g6LS35qy+5rWB56iLXHJcbiAgICAgICAgJ3BhZ2VzL2xvYW5wcm9jZXNzJyxcclxuICAgICAgICAvLyDmiJHnmoTotrPov7lcclxuICAgICAgICAncGFnZXMvZm9vdHByaW50JyxcclxuICAgICAgICAvLyDkv67mlLnmiYvmnLrlj7dcclxuICAgICAgICAncGFnZXMvY2hhbmdlJyxcclxuICAgICAgICAvLyDng63plIDlpb3ovaZcclxuICAgICAgICAncGFnZXMvcHJvZHVjdHMnLFxyXG4gICAgICAgIC8vIOi0tOaBr+S4k+WMulxyXG4gICAgICAgICdwYWdlcy90aWV4aScsXHJcbiAgICAgICAgLy8g5oiQ5Yqf6aG1XHJcbiAgICAgICAgJ3BhZ2VzL3N1Y2Nlc3NmdWxvcmRlcicsXHJcbiAgICAgICAgLy8g6YCJ5oup6L2m5Z6LXHJcbiAgICAgICAgJ3BhZ2VzL2JyYW5kJyxcclxuICAgICAgICAvLyDluK7mgqjotLfmrL5cclxuICAgICAgICAncGFnZXMvY2hvb3NlJyxcclxuICAgICAgICAvLyDorqLljZXor6bmg4VcclxuICAgICAgICAncGFnZXMvZGR4cScsXHJcbiAgICAgICAgLy8g55u056ef5pCc57Si57uT5p6c6aG1XHJcbiAgICAgICAgJ3BhZ2VzL3NlZWsnLFxyXG4gICAgICAgIC8vIOebtOenn+aQnOe0oumhtVxyXG4gICAgICAgICdwYWdlcy9yZW50JyxcclxuICAgICAgICAvLyDmtLvliqhcclxuICAgICAgICAncGFnZXMvbWlkYXV0dW1uJyxcclxuICAgICAgICAncGFnZXMvbWlkYXV0dW1ubicsXHJcbiAgICAgICAgJ3BhZ2VzL21pZGF1dHVtbm9uZScsXHJcbiAgICAgICAgJ3BhZ2VzL21pZGF1dHVtbm9uZWUnLFxyXG4gICAgICAgIC8vIOa0u+WKqOmihOe6puehruiupFxyXG4gICAgICAgICdwYWdlcy9hY3Rpdml0aWVzJyxcclxuICAgICAgICAncGFnZXMvcGVyc29uYWwnLFxyXG4gICAgICAgICdwYWdlcy91cmwnXHJcbiAgICAgIF0sXHJcbiAgICAgIHBlcm1pc3Npb246IHtcclxuICAgICAgICAnc2NvcGUudXNlckxvY2F0aW9uJzoge1xyXG4gICAgICAgICAgJ2Rlc2MnOiAn5L2g55qE5L2N572u5L+h5oGv5bCG55So5LqO5bCP56iL5bqP5L2N572u5o6l5Y+j55qE5pWI5p6c5bGV56S6J1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzYwNDRjYScsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDEwXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlYnVnOmZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGdsb2JhbERhdGEgPSB7XHJcbiAgICAgIC8vIOS6jOacn+i0t+WQjuS7peWPiue6ouaXl+S8mOaDoOWIuOmdmeaAgei1hOa6kOWcsOWdgFxyXG4gICAgICB1cmxfZGhMaW5rOiAnaHR0cHM6Ly93ZWJhcGkuZG9uZ3poZW5nYWZjLmNvbTo5NTAzL2ltYWdlcy8nLFxyXG4gICAgICAvLyDkuozmnJ/otLflkI7nlKjnmoTnlJ/kuqfmjqXlj6Pln5/lkI1cclxuICAgICAgIC8vanNvbl9kaExpbms6ICdodHRwczovL3dlYmFwaS5kb25nemhlbmdhZmMuY29tOjk1MDMnLFxyXG4gICAgICAvLyDkuozmnJ/otLflkI7nlKjnmoTmtYvor5XmjqXlj6Pln5/lkI1cclxuICAgICAgLy9qc29uX2RoTGluazogJ2h0dHA6Ly90ZXN0LXd4YXBwLmRvbmd6aGVuZ2FmYy5jb206OTA5MScsXHJcbiAgICAgIGpzb25fZGhMaW5rOiAnaHR0cDovL3Rlc3Qtd2ViYXBpLmRvbmd6aGVuZ2FmYy5jb206OTExMycsXHJcbiAgICAgIC8vIOaYr+WQpuazqOWGjFxyXG4gICAgICBpc1JlZ2lzdDogZmFsc2UsXHJcbiAgICAgIC8vIGxvZ2luX3Rva2VuIOeZu+W9leeahHRva2VuXHJcbiAgICAgIGxvZ2luX3Rva2VuOiAnJyxcclxuICAgICAgLy8g5rOo5YaM55m75b2V55qE5omL5py65Y+3XHJcbiAgICAgIGxvZ2luX3Bob25lOiAnJyxcclxuICAgICAgbG9naW5faWRDYXJkOiAnJyxcclxuICAgICAgbG9naW5fbmFtZTogJycsXHJcbiAgICAgIGxvZ2luX3VzZXJJZDogJycsXHJcbiAgICAgIC8vIOWTgeeJjOWIl+ihqFxyXG4gICAgICBwaW5wYWlsaXN0OiAnMTIzMTIzMTIzMTIzJyxcclxuICAgICAgLy8g55So5oi35L+h5oGvXHJcbiAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICAvLyDlrprkvY1cclxuICAgICAgZ3BzX2R3OiAnJyxcclxuXHJcbiAgICAgIC8vIOi1hOa6kOWcsOWdgFxyXG4gICAgICAvLyB1cmxfbGluazogJ2h0dHBzOi8vd3hhcHAuZG9uZ3poZW5nYWZjLmNvbS9tZy9hc3NldHMvJyxcclxuICAgICAgLy8g5paw55qE6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgIHVybF9saW5rOiAnaHR0cHM6Ly93ZWJhcGkuZG9uZ3poZW5nYWZjLmNvbTo5NTAzL2ltYWdlcy8nLFxyXG4gICAgICAvL+a1i+ivlei1hOa6kOWcsOWdgFxyXG4gICAgICAvLyB1cmxfbGluazogJ2h0dHA6Ly90ZXN0LXd4YXBwLmRvbmd6aGVuZ2FmYy5jb20vYXNzZXRzLycsXHJcbiAgICAgIC8vIOato+W8j+acjeWKoeWZqFxyXG4gICAgICBqc29uX2xpbms6ICdodHRwczovL3d4YXBwLmRvbmd6aGVuZ2FmYy5jb20nLC8vbWcnLFxyXG4gICAgICAvLyDmtYvor5XlnLDlnYBcclxuICAgICAgIC8vanNvbl9saW5rOidodHRwOi8vdGVzdC13eGFwcC5kb25nemhlbmdhZmMuY29tJyxcclxuICAgICAgLy8g55m75b2VXHJcbiAgICAgIGphdmFfbG9naW46IGZ1bmN0aW9uKGUsIGhhbnNodSkge1xyXG4gICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ajgOafpeaYr+WQpuaOiOadgycpO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sb2dpbmluZyA9IHRydWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLov5nph4zmmK/lh73mlbA6XCIraGFuc2h1KVxyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5b6u5L+h5a6Y5pa555m75b2V6I635Y+W5L+h5oGvJyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflvq7kv6HnmbvlvZXmiJDlip8nKTtcclxuICAgICAgICAgICAgICBsZXQgYXV0aGlkID0gJ2Rvbmd6aGVuZyc7XHJcbiAgICAgICAgICAgICAgbGV0IGF1dGhzZWNyZXQgPSAnZG9uZ3poZW5nJztcclxuICAgICAgICAgICAgICBsZXQgbXBpZCA9ICdEWjIwMTgnO1xyXG4gICAgICAgICAgICAgIGxldCBtb2R1bGVpZCA9ICcyY2JiMmZhMTQyNzk0ODY0OTlkZTIwYzk3MWVmOTZkMSc7XHJcbiAgICAgICAgICAgICAgbGV0IGpzY29kZSA9IHJlcy5jb2RlO1xyXG4gICAgICAgICAgICAgIGxldCBpdiA9IGUuaXY7XHJcbiAgICAgICAgICAgICAgbGV0IGVuY3J5cHRlZERhdGEgPSBlLmVuY3J5cHRlZERhdGE7XHJcbiAgICAgICAgICAgICAgbGV0IGNvbnZlcnRtcGlkID0gJ0RaMjAxOCc7XHJcbiAgICAgICAgICAgICAgLy8g5omL5py65Y+C5pWwXHJcbiAgICAgICAgICAgICAgbGV0IHRlbG51bWRhdGEgPSB0aGlzXy5sb2dpbl90ZWxudW1fbWl5YW87XHJcbiAgICAgICAgICAgICAgbGV0IHRlbG51bWl2ID0gdGhpc18ubG9naW5fdGVsbnVtX2l2O1xyXG4gICAgICAgICAgICAgIGxldCBwaG9uZWJyYW5kID0gdGhpc18ubG9naW5fcGhvbmVicmFuZDtcclxuICAgICAgICAgICAgICBsZXQgcGhvbmVtb2RlbCA9IHRoaXNfLmxvZ2luX3Bob25lbW9kZWw7XHJcbiAgICAgICAgICAgICAgbGV0IHN5c3RlbSA9IHRoaXNfLmxvZ2luX3N5c3RlbTtcclxuICAgICAgICAgICAgICBsZXQgcGxhdGZvcm0gPSB0aGlzXy5sb2dpbl9wbGF0Zm9ybTtcclxuICAgICAgICAgICAgICBsZXQgbmV0d29yayA9IHRoaXNfLmxvZ2luX25ldHdvcms7XHJcbiAgICAgICAgICAgICAgbGV0IGxhdCA9IHRoaXNfLmxvZ2luX2xhdDtcclxuICAgICAgICAgICAgICBsZXQgbG5nID0gdGhpc18ubG9naW5fbG5nO1xyXG4gICAgICAgICAgICAgIGxldCAgY291bnRyeT0gdGhpc18uYWRkcmVzc0NvbXBvbmVudC5jb3VudHJ5Oy8v6L+HXHJcbiAgICAgICAgICAgICAgbGV0IGNpdHkgPSB0aGlzXy5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XHJcbiAgICAgICAgICAgICAgbGV0IHByb3ZpbmNlID0gdGhpc18uYWRkcmVzc0NvbXBvbmVudC5wcm92aW5jZTtcclxuICAgICAgICAgICAgICBsZXQgdXNlcmlkPXRoaXNfLnVzZXJpZFxyXG4gICAgICAgICAgICAgIGlmKHVzZXJpZCE9Jycpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+ecn+eahOeJueWIq+WMuScpXHJcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC91c2VyL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzY29kZToganNjb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRtcGlkOiBjb252ZXJ0bXBpZCxcclxuICAgICAgICAgICAgICAgICAgICBtcGlkOiBtcGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhpZDogYXV0aGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhzZWNyZXQ6IGF1dGhzZWNyZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlaWQ6IG1vZHVsZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhhdXRoZGF0YTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWxudW1kYXRhOiB0ZWxudW1kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbG51bWl2OiB0ZWxudW1pdixcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZWJyYW5kOiBwaG9uZWJyYW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lbW9kZWw6IHBob25lbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtOiBzeXN0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmssXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBsbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTpjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6Y2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTpwcm92aW5jZSxcclxuICAgICAgICAgICAgICAgICAgICByZWZlcmVlOnVzZXJpZFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/m+WFpeeZu+W9leaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip/vvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18uYWNjZXNzX3Rva2VuID0gZGF0YS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLm9wdGlvbmlkID0gZGF0YS5kYXRhLm9wdGlvbmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICAgICAgICAgIGhhbnNodSh0aGlzXy5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL3VzZXJpbmZvL2RldGFpbD9hY2Nlc3NfdG9rZW49JyArZGF0YS5kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGRhdGEuZGF0YS5kYXRhLnVzZXJpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXy51c2VyaWQ9ZGF0YS5kYXRhLmRhdGEudXNlcmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmihuWPllxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcmQvbG9naW5zZW5kY2FyZGluZm8/YWNjZXNzX3Rva2VuPScgK2RhdGEuZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEuZGF0YS50eXBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpooblj5ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5kYXRhLmRhdGEudHlwZT09LTEpe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZGF0YS5kYXRhLmRhdGEudHlwZT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuZGF0YS5kYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDpcIumihuWPllwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGZsYWc6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgIGlmKGRhdGEuZGF0YS5kYXRhLnR5cGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmRhdGEuZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGV4dDpcIumihuWPllwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGZsYWc6IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGZsYWc6IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSl77yBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc18ubG9naW5pbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC91c2VyL2xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGpzY29kZToganNjb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgaXY6IGl2LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnZlcnRtcGlkOiBjb252ZXJ0bXBpZCxcclxuICAgICAgICAgICAgICAgICAgICBtcGlkOiBtcGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhpZDogYXV0aGlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dGhzZWNyZXQ6IGF1dGhzZWNyZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlaWQ6IG1vZHVsZWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhhdXRoZGF0YTogMCxcclxuICAgICAgICAgICAgICAgICAgICB0ZWxudW1kYXRhOiB0ZWxudW1kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbG51bWl2OiB0ZWxudW1pdixcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZWJyYW5kOiBwaG9uZWJyYW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lbW9kZWw6IHBob25lbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3lzdGVtOiBzeXN0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhdGZvcm06IHBsYXRmb3JtLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmssXHJcbiAgICAgICAgICAgICAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBsbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTpjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6Y2l0eSxcclxuICAgICAgICAgICAgICAgICAgICBwcm92aW5jZTpwcm92aW5jZVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/m+WFpeeZu+W9leaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip/vvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18uYWNjZXNzX3Rva2VuID0gZGF0YS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW49ZGF0YS5kYXRhLmFjY2Vzc190b2tlblxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18ub3B0aW9uaWQgPSBkYXRhLmRhdGEub3B0aW9uaWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuc2h1KHRoaXNfLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxyXG4gICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL3VzZXJpbmZvL2RldGFpbD9hY2Nlc3NfdG9rZW49JyArZGF0YS5kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBkYXRhLmRhdGEuZGF0YS51c2VyaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLnVzZXJpZD1kYXRhLmRhdGEuZGF0YS51c2VyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaIkOWKn2Fk77yBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyDpooblj5ZcclxuICAgICAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmRpbmZvP2FjY2Vzc190b2tlbj0nICtkYXRhLmRhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpooblj5ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmRhdGEuZGF0YS50eXBlPT0tMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEuZGF0YS5kYXRhLnR5cGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmRhdGEuZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkP2FjY2Vzc190b2tlbj0nICthY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZmxhZzogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlICBpZihkYXRhLmRhdGEuZGF0YS50eXBlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5kYXRhLmRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkP2FjY2Vzc190b2tlbj0nICthY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZmxhZzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRmbGFnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzXy5sb2dpbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYMxMycpO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmxvZ2luaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leWksei0pe+8ge+8ge+8gScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFkZHJlc3NDb21wb25lbnQ6JycsXHJcbiAgICAgIC8vIHRva2VuXHJcbiAgICAgIGFjY2Vzc190b2tlbjogJycsXHJcbiAgICAgIC8vIG9wdGlvbmlkXHJcbiAgICAgIG9wdGlvbmlkOicnLFxyXG4gICAgICAvLyDnmbvlvZXpnIDopoHnmoTlj4LmlbBcclxuICAgICAgbG9naW5fdGVsbnVtX2l2OiAnJyxcclxuICAgICAgbG9naW5fdGVsbnVtX21peWFvOiAnJyxcclxuICAgICAgbG9naW5fcGhvbmVicmFuZDogJycsXHJcbiAgICAgIGxvZ2luX3Bob25lbW9kZWw6ICcnLFxyXG4gICAgICBsb2dpbl9zeXN0ZW06ICcnLFxyXG4gICAgICBsb2dpbl9wbGF0Zm9ybTogJycsXHJcbiAgICAgIGxvZ2luX25ldHdvcms6ICcnLFxyXG4gICAgICBsb2dpbl9sYXQ6ICcnLFxyXG4gICAgICBsb2dpbl9sbmc6ICcnLFxyXG4gICAgICBuYW1lb3JzOiAn5ZOB54mMJyxcclxuICAgICAgLy8g5ZOB54mMaWRcclxuICAgICAgcGlucGFpaWQ6ICcnLFxyXG4gICAgICBiaWFvamk6ICcwJyxcclxuICAgICAgcGFnZVdpZHRoOiAnJywgLy8g6aG16Z2i5a695bqmXHJcbiAgICAgIHBhZ2VIZWlnaHQ6ICcnLCAvLyDpobXpnaLpq5jluqZcclxuICAgICAgLy8g5L+d5a2Y6YCJ5Lit55qE6Zeo5bqX5L+h5oGvXHJcbiAgICAgIHNlbGVjdE1lbmRpYW46IHt9LFxyXG4gICAgICAvLyDlvZPliY3ln47luIJcclxuICAgICAgY2l0eU5hbWU6ICflhajlm70nLFxyXG4gICAgICAvLyDmraPlnKjnmbvpmYYgdHJ1ZeihqOekuuato+WcqOeZu+mZhlxyXG4gICAgICBsb2dpbmluZzogZmFsc2UsXHJcbiAgICAgIC8vIFVW57uf6K6h6YCJ6L2m57G75Z6LIDAtLeaWsOi9pui0t+asviAxLS3mnaHku7bpgInovaYgMi0t6LS05oGv5LiT5Yy6IDMtLeeDremUgOWlvei9plxyXG4gICAgICBVVnNlbGVjdFR5cGU6IC0xLFxyXG4gICAgICAvLyDngrnlh7vmlbDnlJ/miJDorqLljZXmlbDnu5/orqFcclxuICAgICAgLy8g5b2T5YmN54K55Ye75a+56LGh55qEaWRcclxuICAgICAgcGFnZWlkOiBbXSxcclxuICAgICAgLy8g5b2T5YmN5pON5L2c5a+56LGhIDE654Ot5pCc6K+NLCAyOueDreWNlui9puezuywgMzrovabovoYsIDQ66aaW6aG16L2m6L6G5Zu+54mHLCA1OuW5v+WRiiwgNjrmtLvliqgsIDc655u056ef54Ot5pCc6K+NXHJcbiAgICAgIHBhZ2VuYW1lOiBbXSxcclxuICAgICAgLy8g6LS35qy+5o+Q5Lqk6K6i5Y2V5o6l5Y+j5Lik5Liq5Y+C5pWwXHJcbiAgICAgIC8vIOadpea6kCAwIOm7mOiupCAxIOi0tOaBryAyIOa0u+WKqFxyXG4gICAgICBzb3VyY2U6IDAsXHJcbiAgICAgIC8vIOadpea6kGlkIGNhcm1vZGVsaWQvYWN0aXZpdHlpZFxyXG4gICAgICBzb3VyY2VpZDogJycsXHJcbiAgICAgIHZhbHVlOicnLFxyXG4gICAgICB1c2VyaWQ6JycsXHJcbiAgICAgIHR1cm46J+W9k+WJjSdcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcclxuICAgIH1cclxuICAgIG9uTGF1bmNoKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoaXMudGVzdEFzeW5jKCk7XHJcbiAgICAgIHd4LnNldEVuYWJsZURlYnVnKHtcclxuICAgICAgICAvLyDosIPor5XmqKHlvI/lvIDlhbNcclxuICAgICAgICAgIGVuYWJsZURlYnVnOiBmYWxzZVxyXG4gICAgIFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIOebkeWQrOe9kee7nOWPmOWMllxyXG4gICAgICB3eC5vbk5ldHdvcmtTdGF0dXNDaGFuZ2UocmVzID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5pc0Nvbm5lY3RlZCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlt7Lmlq3lvIAnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8g6I635Y+W5a+86Iiq6auY5bqmXHJcbiAgICAgIC8vIOiOt+WPluezu+e7n+S/oeaBr1xyXG4gICAgICB3eC5nZXRTeXN0ZW1JbmZvKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOWPr+S9v+eUqOeql+WPo+WuveW6puOAgemrmOW6plxyXG4gICAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnBhZ2VXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS5wYWdlSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgc2xlZXAocykge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpO1xyXG4gICAgICAgIH0sIHMgKiAxMDAwKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLnNsZWVwKDMpO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm87XHJcbiAgICAgIH1cclxuICAgICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgIGNiICYmIGNiKHJlcy51c2VySW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIOe7tOaKpOaIkeeahOi2s+i/ueaVsOaNrlxyXG4gICAgLyoqXHJcbiAgICAgKiB2YWx1ZVxyXG4gICAgIOWPguaVsDpcclxuICAgICB0eXBlOiAwIOebtOenn+ivpuaDhSAxIOmHkeiejeWVhuWTgeWIl+ihqFxyXG4gICAgIGNhcm1vZGVsaWQ6IOi9puezu2lkXHJcbiAgICAgZmluYW5jaWFscHJvZHVjdGlkOiDkuqflk4FpZCjnm7Tnp58pXHJcbiAgICAgZGFpa3VhbnRhZzog6LS35qy+5qCH562+77ya5paw6L2m6LS3KDEpXHJcbiAgICAgZ29vZGltYWdlOiDlm77niYflnLDlnYBcclxuICAgICBjYXJzZXJpZXNuYW1lOiDovabns7vlkI3np7BcclxuICAgICBuYW1lOiDkuqflk4HlkI3np7BcclxuICAgICBwcmljZTog5Y6C5a625oyH5a+85Lu3XHJcbiAgICAgY2FyZHBhZ2VKQTog5rS75YqoKOebtOennylcclxuICAgICBkb3ducGF5bWVudDog6aaW5LuYXHJcbiAgICAgbW9udGhseXN1cHBseTog5pyI5L6bKOebtOenn+ivpuaDhSlcclxuICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IOmmluS7mOeZvuWIhuavlFxyXG4gICAgIGxvYW50ZXJtOiDotLfmrL7mnJ/pmZBcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIG15Rm9vdERhdGEob3B0aW9uLCB2YWx1ZSkge1xyXG4gICAgICBpZiAob3B0aW9uID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYygnbXlGb290JykuZGF0YTtcclxuICAgICAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdhZGQnKSB7XHJcbiAgICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdteUZvb3QnKSkge1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnbXlGb290JykuZGF0YTtcclxuICAgICAgICAgIGRhdGEgPSBkYXRhLmZpbHRlcigoZWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlLmNhcm1vZGVsaWQgIT09IHZhbHVlLmNhcm1vZGVsaWQ7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRhdGEudW5zaGlmdCh2YWx1ZSk7XHJcbiAgICAgICAgICAvLyDkv53nlZnliY01MOadoeaVsOaNrlxyXG4gICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gNTApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGRhdGEuc2xpY2UoMCwgNTApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ215Rm9vdCcsIHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IG15Rm9vdCA9IHtcclxuICAgICAgICAgICAgZGF0YTogW11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBteUZvb3QuZGF0YS51bnNoaWZ0KHZhbHVlKTtcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdteUZvb3QnLCBteUZvb3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChvcHRpb24gPT09ICdkZWwnKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnbXlGb290JykuZGF0YTtcclxuICAgICAgICBkYXRhID0gZGF0YS5maWx0ZXIoKGVsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIHJldHVybiBlbGUuY2FybW9kZWxpZCAhPT0gdmFsdWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ215Rm9vdCcsIHsgZGF0YTogZGF0YSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOS/ruaUueaJi+acuuWPt+WAkuiuoeaXtueKtuaAgVxyXG4gICAgLyoqXHJcbiAgICAgdHlwZTogc2V0LS3kv53lrZjlvZPliY3lgJLorqHml7bnirbmgIEgIGdldC0t6I635Y+W5YCS6K6h5pe254q25oCBIHJlbW92ZS0t56e76Zmk54q25oCBXHJcbiAgICAgcGhvbmU6IOW9k+WJjeaJi+acuuWPt1xyXG4gICAgIHRpbWVyTnVtOiDlvZPliY3lgJLorqHml7bnp5LmlbBcclxuICAgICAqKi9cclxuICAgIGNoYW5nZVRpbWVyU3RhdGUodHlwZSwgcGhvbmUsIHRpbWVyTnVtKSB7XHJcbiAgICAgIGlmICh0eXBlID09PSAnc2V0Jykge1xyXG4gICAgICAgIC8vIOenklxyXG4gICAgICAgIGxldCB0aW1lc3RyID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDA7XHJcbiAgICAgICAgbGV0IG9iaiA9IHtcclxuICAgICAgICAgIHBob25lOiBwaG9uZSxcclxuICAgICAgICAgIHRpbWVyTnVtOiB0aW1lck51bSxcclxuICAgICAgICAgIHRpbWVzdHI6IHRpbWVzdHJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0aW1lclN0YXRlJywgb2JqKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZ2V0Jykge1xyXG4gICAgICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYygndGltZXJTdGF0ZScpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3RpbWVyU3RhdGUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVW57uf6K6hXHJcbiAgICAvLyBjdXJyZW50cGFnZTogbmV3Y2FyaG9tZXBhZ2UtLeaWsOi9pui0t+asvi5jaG9vc2VjYXJwYWdlLS3mnaHku7bpgInovabjgIHotLTmga/kuJPljLrjgIHng63plIDlpb3ovaYubG9hbnByb2R1Y3RsaXN0LS3ph5Hono3kuqflk4HliJfooagubG9hbnByb2R1Y3RkZXRhaWwtLemHkeiejeS6p+WTgeivpuaDhS5maWxsaW5vcmRlcnBhZ2UtLemihOe6puehruiupC5uZXdvcmRlcnN1Ym1pdHN1Y2Nlc3MtLeaWsOeUqOaIt+WIm+W7uuiuouWNleaIkOWKny5vbGRvcmRlcnN1Ym1pdHN1Y2Nlc3MtLeiAgeeUqOaIt+WIm+W7uuiuouWNleaIkOWKn1xyXG4gICAgVVZzdGF0aXN0aWNhbChjdXJyZW50cGFnZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGlmICh0aGF0Lmdsb2JhbERhdGEuVVZzZWxlY3RUeXBlIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoYXQuZ2xvYmFsRGF0YS5qc29uX2xpbmsgKyAnL21mcmFtZXdvcmsvYXBpL3Rva2VuP2F1dGhpZD1kb25nemhlbmcmYXV0aHNlY3JldD1kb25nemhlbmcnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiB0aGF0Lmdsb2JhbERhdGEuanNvbl9saW5rICsgJy9hcGkvd3hhcHAvc3RhdC9vcmRlcnN0YXQ/YWNjZXNzX3Rva2VuPScgKyByZXMuZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjdXJyZW50cGFnZTogY3VycmVudHBhZ2UsXHJcbiAgICAgICAgICAgICAgY2hvb3NlY2FydHlwZTogdGhhdC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQViBVVue7n+iuoVxyXG4gICAgLyoqIGN1cnJlbnRwYWdlOlxyXG4gICAgIG5ld2NhcmhvbWVwYWdlICDpppbpobVcclxuICAgICBpbnRlcmVzdGRpc2NvdW50ICDotLTmga/kuJPljLpcclxuICAgICBob3RzYWxlICDng63plIDlpb3ovaZcclxuICAgICBjb25kaXRpb25jaG9vc2VjYXIgIOadoeS7tumAiei9plxyXG4gICAgIGxvYW5wcm9kdWN0bGlzdCAg6YeR6J6N5Lqn5ZOB5YiX6KGoXHJcbiAgICAgbG9hbnByb2R1Y3RkZXRhaWwgIOmHkeiejeS6p+WTgeivpuaDhVxyXG4gICAgIGRpcmVjdHJlbnRob21lcGFnZSAg55u056efXHJcbiAgICAgZGlyZWN0cmVudGRldGFpbCAg55u056ef6K+m5oOFXHJcbiAgICAgbXkgIOaIkeeahFxyXG4gICAgIGNhcmRwYWdlZGV0YWlsICDljaHliLjor6bmg4VcclxuICAgICBoZWxweW91bG9hZCAg5biu5oKo6LS35qy+XHJcbiAgICAgbG9hbmNhbGN1bGF0b3IgIOi0t+asvuiuoeeul+WZqFxyXG4gICAgIHJlbnRmaWxsaW5vcmRlcnBhZ2UgIOebtOenn+mihOe6puehruiupFxyXG4gICAgIHJlbnRuZXdvcmRlcnN1Ym1pdHN1Y2Nlc3MgIOebtOenn+aWsOeUqOaIt+WIm+W7uuiuouWNleaIkOWKn1xyXG4gICAgIHJlbnRvbGRvcmRlcnN1Ym1pdHN1Y2Nlc3MgIOebtOenn+iAgeeUqOaIt+WIm+W7uuiuouWNleaIkOWKn1xyXG4gICAgICoqL1xyXG4gICAgUFZVVnN0YXRpc3RpY2FsKGN1cnJlbnRwYWdlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0Lmdsb2JhbERhdGEuanNvbl9saW5rICsgJy9tZnJhbWV3b3JrL2FwaS90b2tlbj9hdXRoaWQ9ZG9uZ3poZW5nJmF1dGhzZWNyZXQ9ZG9uZ3poZW5nJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogdGhhdC5nbG9iYWxEYXRhLmpzb25fbGluayArICcvYXBpL3d4YXBwL3N0YXQvZmxvd3N0YXQ/YWNjZXNzX3Rva2VuPScgKyByZXMuZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjdXJyZW50cGFnZTogY3VycmVudHBhZ2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g54K55Ye75pWw55Sf5oiQ6K6i5Y2V5pWw57uf6K6hXHJcbiAgICAvKiogaW5jcmZpZWxkOiAxOueCueWHu+aVsCAgMiDvvJrnlJ/miJDorqLljZXmlbBcclxuICAgICAqKi9cclxuICAgIGNsaWNrbnVtb3JkZXJudW1zdGF0KGluY3JmaWVsZCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5nbG9iYWxEYXRhLmpzb25fbGluayArICcvbWZyYW1ld29yay9hcGkvdG9rZW4/YXV0aGlkPWRvbmd6aGVuZyZhdXRoc2VjcmV0PWRvbmd6aGVuZycsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhhdC5nbG9iYWxEYXRhLnBhZ2VpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IHRoYXQuZ2xvYmFsRGF0YS5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9zdGF0L2NsaWNrbnVtb3JkZXJudW1zdGF0P2FjY2Vzc190b2tlbj0nICsgcmVzLmRhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHBhZ2VpZDogdGhhdC5nbG9iYWxEYXRhLnBhZ2VpZFtpXSxcclxuICAgICAgICAgICAgICAgIHBhZ2VuYW1lOiB0aGF0Lmdsb2JhbERhdGEucGFnZW5hbWVbaV0sXHJcbiAgICAgICAgICAgICAgICBpbmNyZmllbGQ6IGluY3JmaWVsZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAvLyDniYjmnKzmm7TmlrBcclxuICAgICAgY29uc3QgdXBkYXRlTWFuYWdlciA9IHd4LmdldFVwZGF0ZU1hbmFnZXIoKTtcclxuICAgICAgdXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOivt+axguWujOaWsOeJiOacrOS/oeaBr+eahOWbnuiwg1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5oYXNVcGRhdGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgdXBkYXRlTWFuYWdlci5vblVwZGF0ZVJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+abtOaWsOaPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn5paw54mI5pys5bey57uP5YeG5aSH5aW977yM5piv5ZCm6YeN5ZCv5bqU55So77yfJyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAvLyDmlrDnmoTniYjmnKzlt7Lnu4/kuIvovb3lpb3vvIzosIPnlKggYXBwbHlVcGRhdGUg5bqU55So5paw54mI5pys5bm26YeN5ZCvXHJcbiAgICAgICAgICAgICAgdXBkYXRlTWFuYWdlci5hcHBseVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB1cGRhdGVNYW5hZ2VyLm9uVXBkYXRlRmFpbGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIOaWsOeahOeJiOacrOS4i+i9veWksei0pVxyXG4gICAgICB9KTtcclxuICAgICAgLy9cclxuICAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuIl19