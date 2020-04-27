'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _leotable = require('./../components/leotable.js');

var _leotable2 = _interopRequireDefault(_leotable);

var _sousuo = require('./../components/sousuo.js');

var _sousuo2 = _interopRequireDefault(_sousuo);

var _bq = require('./../components/bq.js');

var _bq2 = _interopRequireDefault(_bq);

var _sidebar = require('./../components/sidebar.js');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _userinfo_alert = require('./../components/userinfo_alert.js');

var _userinfo_alert2 = _interopRequireDefault(_userinfo_alert);

var _alert = require('./../components/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref, _this$data;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '东正金融',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.data = (_this$data = {
      // 回调函数
      request_cs: function request_cs() {},
      login_wz: '登录最高可领取500万元车贷额度',
      // 是否登陆
      login_jt_zt: true,
      // 热门品牌
      rm_che: [],
      // 定位
      gps_city: '',
      // 轮播图点
      indicator: false,
      // 自动轮播
      autoplay: true,
      json_link: '',
      // 广告
      imgUrls: [],
      // 贴息
      tiexi: [],
      // 热销
      rx_imgurl: [],
      posert: ['张先生 贷款50.72万 宝马七系...', '白小姐 贷款60.32万 沃尔沃...', '刘先生 贷款54.22万 保时捷...', '吴小姐 贷款70.72万 奔驰...', '王先生 贷款63.57万 路虎...', '范先生 贷款68.72万 捷豹...', '郭先生 贷款68.72万 路虎...', '齐小姐 贷款48.98万 保时捷...', '张小姐 贷款40.02万 沃尔沃...', '杨先生 贷款50.82万 捷豹...', '刘先生 贷款60.92万 奥迪...', '张先生 贷款58.72万 宝马...', '张先生 贷款49.72万 宝马...']
    }, _defineProperty(_this$data, 'autoplay', true), _defineProperty(_this$data, 'interval', 3000), _defineProperty(_this$data, 'duration', 1000), _defineProperty(_this$data, 'inde', ''), _defineProperty(_this$data, 'adtype', ''), _defineProperty(_this$data, 'url_link', ''), _this$data), _this.$repeat = {}, _this.$props = { "leotable": { "che_": "image/index_btm_che1.png", "ys_": "image/index_btm_ys0.png", "my_": "image/index_btm_my0.png" }, "bq1": { "text_": "条件选车", "right_text": "筛选更多", "img_url": "{{url_link?url_link+'index_tjxc_icon.png':''}}" }, "bq2": { "text_": "贴息专区", "right_text": "查看更多", "img_url": "{{url_link?url_link+'index_tiexi_icon.png':''}}" }, "bq3": { "text_": "热销好车", "right_text": "查看更多", "img_url": "{{url_link?url_link+'index_rx.png':''}}" }, "bq4": { "class": "rm", "text_": "热门品牌", "right_text": "查看更多", "img_url": "{{url_link?url_link+'index_rm_pp.png':''}}" }, "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" } }, _this.$events = { "leotable": { "v-on:childFn": "linkTo" }, "sousuo": { "v-on:childFn": "linkTo2", "v-on:childFn_jw": "jw", "v-on:childFn_gps": "gps_ff" }, "bq1": { "v-on:childFn": "tjxc_btn" }, "bq2": { "v-on:childFn": "linkTo3" }, "bq3": { "v-on:childFn": "linkTo3" }, "bq4": { "v-on:childFn": "linkTo3" }, "sidebar": { "v-on:childFn": "linkTo2" }, "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" } }, _this.components = {
      leotable: _leotable2.default,
      sousuo: _sousuo2.default,
      bq1: _bq2.default,
      bq2: _bq2.default,
      bq3: _bq2.default,
      bq4: _bq2.default,
      sidebar: _sidebar2.default,
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        var userid = this.$parent.globalData.userid;
        console.log(userid);
        return {
          path: '/pages/index?userid=' + userid
        };
      },
      dingd: function dingd() {
        wx.navigateTo({
          url: 'myorder'
        });
      },

      // 条件选车
      tjxc_cj: function tjxc_cj(e) {
        var sfje = e.target.dataset.id;
        wx.navigateTo({
          url: 'sousuo?carpricesection=' + sfje + '&downpaymentsection=' + '0' + '&monthlysupplysection=' + '0'
        });
      },
      tjxc_sf: function tjxc_sf(e) {
        var sfje = e.target.dataset.id;
        wx.navigateTo({
          url: 'sousuo?downpaymentsection=' + sfje + '&carpricesection=' + '0' + '&monthlysupplysection=' + '0'
        });
      },
      tjxc_yg: function tjxc_yg(e) {
        var sfje = e.target.dataset.id;
        wx.navigateTo({
          url: 'sousuo?monthlysupplysection=' + sfje + '&downpaymentsection=' + '0' + '&carpricesection=' + '0'
        });
      },

      // 帮您贷款
      borrow: function borrow() {
        wx.navigateTo({
          url: 'choose'
        });
      },

      // 登录授权请求
      shouquan: function shouquan() {
        var zhi = this.$parent.globalData;
        var this_ = this;
        if (!zhi.access_token) {
          this_.$invoke('alert_l', 'chufa', true);
          this_.request_cs = function (access_token) {
            this_.getCardList();
            this_.login_wz = '';
            this_.login_jt_zt = false;
            this_.$apply();
          };
        }
      },
      alert_tel: function alert_tel(res) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('alert_l', 'chufa', false);
        if (res.iv == undefined) return false;
        zhi.login_telnum_iv = res.iv;
        zhi.login_telnum_miyao = res.miyao;
        // 查看是否授权
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function success(res) {
                  zhi.java_login(res, this_.request_cs);
                  debugger;
                }
              });
            } else {
              this_.$invoke('alert_l', 'chufa', false);
              this_.$invoke('userinfo_alert', 'chufa', true);
            }
          }
        });
      },
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },

      // 搜索
      gps_ff: function gps_ff(res) {
        var zhi = this.$parent.globalData;
        zhi.gps_dw = res.gps;
      },
      jw: function jw(res) {
        var zhi = this.$parent.globalData;
        zhi.login_lat = res.j;
        zhi.login_lng = res.w;
      },

      // 子页面跳转方法
      linkTo: function linkTo(url, evt) {
        this.$redirect(url);
      },
      linkTo2: function linkTo2(url, evt) {
        this.$navigate(url, { carseriesid: evt });
      },

      // 跳转贴息、热销好车
      linkTo3: function linkTo3(url, evt) {
        if (evt.zhi == '贴息专区') {
          this.$navigate('tiexi', { name: '贴息专区' });
        } else if (evt.zhi == '热销好车') {
          this.$navigate('products');
        } else {
          this.$navigate(url, evt);
        }
      },

      // 贴息专区/热销好车
      rxhc_btn: function rxhc_btn(e, from) {
        if (from === 'tiexi') {
          this.$parent.globalData.UVselectType = 2;
          this.$parent.globalData.source = 1;
          this.$parent.globalData.sourceid = e;

          this.$parent.globalData.pageid = [e];
          this.$parent.globalData.pagename = [4];
          this.$parent.clicknumordernumstat(1);
        } else if (from === 'rexiao') {
          this.$parent.globalData.UVselectType = 3;
        }
        this.$parent.UVstatistical('choosecarpage');
        this.$navigate('commodity_details', { carmodelid: e });
      },

      // 条件选车
      tjxc_btn: function tjxc_btn() {
        wx.navigateTo({
          url: 'sousuo?carpricesection=' + '0' + '&downpaymentsection=' + '0' + '&monthlysupplysection=' + '0'
        });
      },

      // 搜索
      ss_clear: function ss_clear() {},
      // 轮播跳转
      tiaourl: function tiaourl(a) {},
      tiaozhuan: function tiaozhuan(e) {
        console.log(e);
        var activityjo = e.currentTarget.dataset.activityjo;
        var adtype = e.currentTarget.dataset.adtype;
        var advid = e.currentTarget.dataset.advid;
        var url = e.currentTarget.dataset.url;
        if (adtype == "none") {
          return;
        }
        if (adtype == "url") {
          console.log(url);
          this.$navigate({
            url: 'url?url=' + url
          });
        } else if (adtype == "activity") {
          this.$parent.globalData.source = 2;
          this.$parent.globalData.sourceid = activityjo.activityid;
          if (activityjo.template == 1 && activityjo.columnshowtype == 1) {
            this.$navigate({
              url: 'midautumn?activityid=' + activityjo.activityid
            });
          }
          if (activityjo.template == 1 && activityjo.columnshowtype == 2) {
            this.$navigate({
              url: 'midautumnn?activityid=' + activityjo.activityid
            });
          }
          if (activityjo.template == 2 && activityjo.columnshowtype == 1) {
            this.$navigate({
              url: 'midautumnone?activityid=' + activityjo.activityid
            });
          }
          if (activityjo.template == 2 && activityjo.columnshowtype == 2) {
            this.$navigate({
              url: 'midautumnonee?activityid=' + activityjo.activityid
            });
          }

          this.$parent.globalData.pageid = [advid, activityjo.activityid];
          this.$parent.globalData.pagename = [5, 6];
          this.$parent.clicknumordernumstat(1);
        }
      },


      //      侧滑
      xz_pp: function xz_pp(a) {
        this.$invoke('sidebar', 'someMethod', { carbrandid: a });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      if (JSON.stringify(options) != "{}" && !!options) {
        if (options.userid != undefined && options.userid != '') {
          console.log('进去了');
          this.$parent.globalData.userid = options.userid;
        } else {
          console.log('没进去了');
        }
      }

      // 保存login需要的参数
      var parent_data = this.$parent.globalData;
      var json_link = this.$parent.globalData.json_link;
      // 微信接口获取jscode
      wx.login({
        success: function success(res) {
          wx.request({
            url: json_link + '/api/wxa/sessionkey?mpid=DZ2018',
            data: {
              jscode: res.code
            },
            success: function success(data) {}
          });
        }
      });
      wx.getNetworkType({
        success: function success(res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType;
          parent_data.login_network = networkType;
        }
      });
      var res = wx.getSystemInfoSync();
      console.log(res);
      parent_data.login_phonebrand = res.brand;
      parent_data.login_phonemodel = res.model;
      parent_data.login_system = res.system;
      parent_data.login_platform = res.platform;

      //      页面代码
      var this_ = this;
      if (parent_data.access_token != '' && parent_data.access_token != undefined) {
        this_.login_wz = '';
        this_.login_jt_zt = false;
      }
      // 新车贷款首页
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/index',
        success: function success(data) {
          this_.imgUrls = data.data.advinfoJA;
          this_.tiexi = data.data.carinterestdiscountspecialareaJA;
          this_.rx_imgurl = data.data.carshotsalepecialareaJA;
          this_.rm_che = data.data.carbrandJA;
          this_.$apply();
        },
        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });

          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return;
        }
      });
      this.getCardList();
    }
    // 刷新页面

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$invoke('sidebar', 'clear_yy');
      // 统计
      this.$parent.globalData.UVselectType = 0;
      this.$parent.UVstatistical('newcarhomepage');
      this.$parent.PVUVstatistical('newcarhomepage');
      this.getCardList();
      var parent_data = this.$parent.globalData;
      this.url_link = this.$parent.globalData.url_link;
      var this_ = this;
      if (!parent_data.access_token) {
        console.log(' 重新登录');
        this_.onLoad();
      }
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });
      // 保存login需要的参数
      var parent_data = this.$parent.globalData;
      wx.getNetworkType({
        success: function success(res) {
          // 返回网络类型, 有效值：
          // wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
          var networkType = res.networkType;
          parent_data.login_network = networkType;
        }
      });
      var res = wx.getSystemInfoSync();
      parent_data.login_phonebrand = res.brand;
      parent_data.login_phonemodel = res.model;
      parent_data.login_system = res.system;
      parent_data.login_platform = res.platform;

      // 页面代码
      var this_ = this;
      if (parent_data.access_token != '' && parent_data.access_token != undefined) {
        this_.login_wz = '';
        this_.login_jt_zt = false;
      }
      var json_link = this.$parent.globalData.json_link;
      this_.json_link = json_link;
      // 新车贷款首页
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/index',
        success: function success(data) {
          this_.imgUrls = data.data.advinfoJA;
          this_.adtype = data.data.advinfoJA.adtype;
          this_.tiexi = data.data.carinterestdiscountspecialareaJA;
          this_.rx_imgurl = data.data.carshotsalepecialareaJA;
          this_.rm_che = data.data.carbrandJA;
          wx.stopPullDownRefresh();
          wx.hideLoading();
          this_.$apply();
        },
        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });

          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return;
        }
      });
    }
    // 登录后查看是否有订单

  }, {
    key: 'getCardList',
    value: function getCardList() {
      var parent_data = this.$parent.globalData;
      var this_ = this;
      if (parent_data.access_token != '') {
        wx.request({
          url: parent_data.json_link + '/api/wxapp/reservationorder/orderlist?access_token=' + parent_data.access_token,
          data: {
            isindex: 1
          },
          success: function success(data) {
            if (data.data.hasOwnProperty("data")) {
              this_.inde = data.data.data[0];
            }

            this_.$apply();
          }
        });
      } else {
        return;
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJkYXRhIiwicmVxdWVzdF9jcyIsImxvZ2luX3d6IiwibG9naW5fanRfenQiLCJybV9jaGUiLCJncHNfY2l0eSIsImluZGljYXRvciIsImF1dG9wbGF5IiwianNvbl9saW5rIiwiaW1nVXJscyIsInRpZXhpIiwicnhfaW1ndXJsIiwicG9zZXJ0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwibGVvdGFibGUiLCJMZW90YWJsZSIsInNvdXN1byIsIlNvdXN1byIsImJxMSIsIkJxIiwiYnEyIiwiYnEzIiwiYnE0Iiwic2lkZWJhciIsIlNpZGViYXIiLCJ1c2VyaW5mb19hbGVydCIsIlVzZXJpbmZvX2FsZXJ0IiwiYWxlcnRfbCIsIkFsZXJ0IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwidXNlcmlkIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsImRpbmdkIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGp4Y19jaiIsImUiLCJzZmplIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwidGp4Y19zZiIsInRqeGNfeWciLCJib3Jyb3ciLCJzaG91cXVhbiIsInpoaSIsInRoaXNfIiwiYWNjZXNzX3Rva2VuIiwiJGludm9rZSIsImdldENhcmRMaXN0IiwiJGFwcGx5IiwiYWxlcnRfdGVsIiwicmVzIiwiaXYiLCJ1bmRlZmluZWQiLCJsb2dpbl90ZWxudW1faXYiLCJsb2dpbl90ZWxudW1fbWl5YW8iLCJtaXlhbyIsImdldFNldHRpbmciLCJzdWNjZXNzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImphdmFfbG9naW4iLCJhbGVydF91c2VyaW5mbyIsImRldGFpbCIsImdwc19mZiIsImdwc19kdyIsImdwcyIsImp3IiwibG9naW5fbGF0IiwiaiIsImxvZ2luX2xuZyIsInciLCJsaW5rVG8iLCJldnQiLCIkcmVkaXJlY3QiLCJsaW5rVG8yIiwiJG5hdmlnYXRlIiwiY2Fyc2VyaWVzaWQiLCJsaW5rVG8zIiwibmFtZSIsInJ4aGNfYnRuIiwiZnJvbSIsIlVWc2VsZWN0VHlwZSIsInNvdXJjZSIsInNvdXJjZWlkIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsIlVWc3RhdGlzdGljYWwiLCJjYXJtb2RlbGlkIiwidGp4Y19idG4iLCJzc19jbGVhciIsInRpYW91cmwiLCJhIiwidGlhb3podWFuIiwiYWN0aXZpdHlqbyIsImN1cnJlbnRUYXJnZXQiLCJhZHR5cGUiLCJhZHZpZCIsImFjdGl2aXR5aWQiLCJ0ZW1wbGF0ZSIsImNvbHVtbnNob3d0eXBlIiwieHpfcHAiLCJjYXJicmFuZGlkIiwib3B0aW9ucyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwYXJlbnRfZGF0YSIsImxvZ2luIiwicmVxdWVzdCIsImpzY29kZSIsImNvZGUiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwibG9naW5fbmV0d29yayIsImdldFN5c3RlbUluZm9TeW5jIiwibG9naW5fcGhvbmVicmFuZCIsImJyYW5kIiwibG9naW5fcGhvbmVtb2RlbCIsIm1vZGVsIiwibG9naW5fc3lzdGVtIiwic3lzdGVtIiwibG9naW5fcGxhdGZvcm0iLCJwbGF0Zm9ybSIsImFkdmluZm9KQSIsImNhcmludGVyZXN0ZGlzY291bnRzcGVjaWFsYXJlYUpBIiwiY2Fyc2hvdHNhbGVwZWNpYWxhcmVhSkEiLCJjYXJicmFuZEpBIiwiZmFpbCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJQVlVWc3RhdGlzdGljYWwiLCJ1cmxfbGluayIsIm9uTG9hZCIsInNob3dMb2FkaW5nIiwic3RvcFB1bGxEb3duUmVmcmVzaCIsImhpZGVMb2FkaW5nIiwiaXNp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IlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBMZW90YWJsZSBmcm9tICcuLi9jb21wb25lbnRzL2xlb3RhYmxlJztcclxuICBpbXBvcnQgU291c3VvIGZyb20gJy4uL2NvbXBvbmVudHMvc291c3VvJztcclxuICBpbXBvcnQgQnEgZnJvbSAnLi4vY29tcG9uZW50cy9icSc7XHJcbiAgaW1wb3J0IFNpZGViYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaWRlYmFyJztcclxuICBpbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbiAgaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4nOato+mHkeiejScsXHJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2RhcmsnXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5Zue6LCD5Ye95pWwXHJcbiAgICAgIHJlcXVlc3RfY3M6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgIGxvZ2luX3d6OiAn55m75b2V5pyA6auY5Y+v6aKG5Y+WNTAw5LiH5YWD6L2m6LS36aKd5bqmJyxcclxuICAgICAgLy8g5piv5ZCm55m76ZmGXHJcbiAgICAgIGxvZ2luX2p0X3p0OiB0cnVlLFxyXG4gICAgICAvLyDng63pl6jlk4HniYxcclxuICAgICAgcm1fY2hlOiBbXSxcclxuICAgICAgLy8g5a6a5L2NXHJcbiAgICAgIGdwc19jaXR5OiAnJyxcclxuICAgICAgLy8g6L2u5pKt5Zu+54K5XHJcbiAgICAgIGluZGljYXRvcjogZmFsc2UsXHJcbiAgICAgIC8vIOiHquWKqOi9ruaSrVxyXG4gICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAganNvbl9saW5rOiAnJyxcclxuICAgICAgLy8g5bm/5ZGKXHJcbiAgICAgIGltZ1VybHM6IFtdLFxyXG4gICAgICAvLyDotLTmga9cclxuICAgICAgdGlleGk6IFtdLFxyXG4gICAgICAvLyDng63plIBcclxuICAgICAgcnhfaW1ndXJsOiBbXSxcclxuICAgICAgcG9zZXJ0OiBbXHJcbiAgICAgICAgJ+W8oOWFiOeUnyDotLfmrL41MC43MuS4hyDlrp3pqazkuIPns7suLi4nLFxyXG4gICAgICAgICfnmb3lsI/lp5Ag6LS35qy+NjAuMzLkuIcg5rKD5bCU5rKDLi4uJyxcclxuICAgICAgICAn5YiY5YWI55SfIOi0t+asvjU0LjIy5LiHIOS/neaXtuaNty4uLicsXHJcbiAgICAgICAgJ+WQtOWwj+WnkCDotLfmrL43MC43MuS4hyDlpZTpqbAuLi4nLFxyXG4gICAgICAgICfnjovlhYjnlJ8g6LS35qy+NjMuNTfkuIcg6Lev6JmOLi4uJyxcclxuICAgICAgICAn6IyD5YWI55SfIOi0t+asvjY4Ljcy5LiHIOaNt+ixuS4uLicsXHJcbiAgICAgICAgJ+mDreWFiOeUnyDotLfmrL42OC43MuS4hyDot6/omY4uLi4nLFxyXG4gICAgICAgICfpvZDlsI/lp5Ag6LS35qy+NDguOTjkuIcg5L+d5pe25o23Li4uJyxcclxuICAgICAgICAn5byg5bCP5aeQIOi0t+asvjQwLjAy5LiHIOayg+WwlOaygy4uLicsXHJcbiAgICAgICAgJ+adqOWFiOeUnyDotLfmrL41MC44MuS4hyDmjbfosbkuLi4nLFxyXG4gICAgICAgICfliJjlhYjnlJ8g6LS35qy+NjAuOTLkuIcg5aWl6L+qLi4uJyxcclxuICAgICAgICAn5byg5YWI55SfIOi0t+asvjU4Ljcy5LiHIOWunemprC4uLicsXHJcbiAgICAgICAgJ+W8oOWFiOeUnyDotLfmrL40OS43MuS4hyDlrp3pqawuLi4nXHJcbiAgICAgIF0sXHJcbiAgICAgIGF1dG9wbGF5OiB0cnVlLCAvL+aYr+WQpuiHquWKqOWIh+aNolxyXG4gICAgICBpbnRlcnZhbDogMzAwMCwgLy/oh6rliqjliIfmjaLml7bpl7Tpl7TpmpQsM3NcclxuICAgICAgZHVyYXRpb246IDEwMDAsIC8vICDmu5HliqjliqjnlLvml7bplb8xc1xyXG4gICAgICAvLyDmnInorqLljZVcclxuICAgICAgaW5kZTogJycsXHJcbiAgICAgIGFkdHlwZTonJyxcclxuICAgICAgdXJsX2xpbms6JydcclxuICAgIH07XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wibGVvdGFibGVcIjp7XCJjaGVfXCI6XCJpbWFnZS9pbmRleF9idG1fY2hlMS5wbmdcIixcInlzX1wiOlwiaW1hZ2UvaW5kZXhfYnRtX3lzMC5wbmdcIixcIm15X1wiOlwiaW1hZ2UvaW5kZXhfYnRtX215MC5wbmdcIn0sXCJicTFcIjp7XCJ0ZXh0X1wiOlwi5p2h5Lu26YCJ6L2mXCIsXCJyaWdodF90ZXh0XCI6XCLnrZvpgInmm7TlpJpcIixcImltZ191cmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsrJ2luZGV4X3RqeGNfaWNvbi5wbmcnOicnfX1cIn0sXCJicTJcIjp7XCJ0ZXh0X1wiOlwi6LS05oGv5LiT5Yy6XCIsXCJyaWdodF90ZXh0XCI6XCLmn6XnnIvmm7TlpJpcIixcImltZ191cmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsrJ2luZGV4X3RpZXhpX2ljb24ucG5nJzonJ319XCJ9LFwiYnEzXCI6e1widGV4dF9cIjpcIueDremUgOWlvei9plwiLFwicmlnaHRfdGV4dFwiOlwi5p+l55yL5pu05aSaXCIsXCJpbWdfdXJsXCI6XCJ7e3VybF9saW5rP3VybF9saW5rKydpbmRleF9yeC5wbmcnOicnfX1cIn0sXCJicTRcIjp7XCJjbGFzc1wiOlwicm1cIixcInRleHRfXCI6XCLng63pl6jlk4HniYxcIixcInJpZ2h0X3RleHRcIjpcIuafpeeci+abtOWkmlwiLFwiaW1nX3VybFwiOlwie3t1cmxfbGluaz91cmxfbGluaysnaW5kZXhfcm1fcHAucG5nJzonJ319XCJ9LFwidXNlcmluZm9fYWxlcnRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPnmbvlvZVcIn0sXCJhbGVydF9sXCI6e1widGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+aJi+acuuWPt1wifX07XHJcbiRldmVudHMgPSB7XCJsZW90YWJsZVwiOntcInYtb246Y2hpbGRGblwiOlwibGlua1RvXCJ9LFwic291c3VvXCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG8yXCIsXCJ2LW9uOmNoaWxkRm5fandcIjpcImp3XCIsXCJ2LW9uOmNoaWxkRm5fZ3BzXCI6XCJncHNfZmZcIn0sXCJicTFcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcInRqeGNfYnRuXCJ9LFwiYnEyXCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG8zXCJ9LFwiYnEzXCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG8zXCJ9LFwiYnE0XCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG8zXCJ9LFwic2lkZWJhclwiOntcInYtb246Y2hpbGRGblwiOlwibGlua1RvMlwifSxcInVzZXJpbmZvX2FsZXJ0XCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF91c2VyaW5mb1wifSxcImFsZXJ0X2xcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImFsZXJ0X3RlbFwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBsZW90YWJsZTogTGVvdGFibGUsXHJcbiAgICAgIHNvdXN1bzogU291c3VvLFxyXG4gICAgICBicTE6IEJxLFxyXG4gICAgICBicTI6IEJxLFxyXG4gICAgICBicTM6IEJxLFxyXG4gICAgICBicTQ6IEJxLFxyXG4gICAgICBzaWRlYmFyOiBTaWRlYmFyLFxyXG4gICAgICB1c2VyaW5mb19hbGVydDogVXNlcmluZm9fYWxlcnQsXHJcbiAgICAgIGFsZXJ0X2w6IEFsZXJ0XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB1c2VyaWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codXNlcmlkKVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4P3VzZXJpZD0nK3VzZXJpZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIGRpbmdkKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnbXlvcmRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5p2h5Lu26YCJ6L2mXHJcbiAgICAgIHRqeGNfY2ooZSkge1xyXG4gICAgICAgIGxldCBzZmplID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgJ3NvdXN1bz9jYXJwcmljZXNlY3Rpb249JyArXHJcbiAgICAgICAgICAgIHNmamUgK1xyXG4gICAgICAgICAgICAnJmRvd25wYXltZW50c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZtb250aGx5c3VwcGx5c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRqeGNfc2YoZSkge1xyXG4gICAgICAgIGxldCBzZmplID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgJ3NvdXN1bz9kb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICAgIHNmamUgK1xyXG4gICAgICAgICAgICAnJmNhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZtb250aGx5c3VwcGx5c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRqeGNfeWcoZSkge1xyXG4gICAgICAgIGxldCBzZmplID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgJ3NvdXN1bz9tb250aGx5c3VwcGx5c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgc2ZqZSArXHJcbiAgICAgICAgICAgICcmZG93bnBheW1lbnRzZWN0aW9uPScgK1xyXG4gICAgICAgICAgICAnMCcgK1xyXG4gICAgICAgICAgICAnJmNhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOW4ruaCqOi0t+asvlxyXG4gICAgICBib3Jyb3coKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdjaG9vc2UnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeZu+W9leaOiOadg+ivt+axglxyXG4gICAgICBzaG91cXVhbigpIHtcclxuICAgICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICBpZiAoIXpoaS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXNfLnJlcXVlc3RfY3MgPSBmdW5jdGlvbihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpc18uZ2V0Q2FyZExpc3QoKTtcclxuICAgICAgICAgICAgdGhpc18ubG9naW5fd3ogPSAnJztcclxuICAgICAgICAgICAgdGhpc18ubG9naW5fanRfenQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWxlcnRfdGVsKHJlcykge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHJlcy5pdiA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICAgIHpoaS5sb2dpbl90ZWxudW1fbWl5YW8gPSByZXMubWl5YW87XHJcbiAgICAgICAgLy8g5p+l55yL5piv5ZCm5o6I5p2DXHJcbiAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgemhpLmphdmFfbG9naW4ocmVzLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgICAgICAgICAgICAgZGVidWdnZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgYWxlcnRfdXNlcmluZm8oZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICAgIHpoaS5qYXZhX2xvZ2luKGUuZGV0YWlsLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5pCc57SiXHJcbiAgICAgIGdwc19mZihyZXMpIHtcclxuICAgICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgemhpLmdwc19kdyA9IHJlcy5ncHM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGp3KHJlcykge1xyXG4gICAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICB6aGkubG9naW5fbGF0ID0gcmVzLmo7XHJcbiAgICAgICAgemhpLmxvZ2luX2xuZyA9IHJlcy53O1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDlrZDpobXpnaLot7Povazmlrnms5VcclxuICAgICAgbGlua1RvKHVybCwgZXZ0KSB7XHJcbiAgICAgICAgdGhpcy4kcmVkaXJlY3QodXJsKTtcclxuICAgICAgfSxcclxuICAgICAgbGlua1RvMih1cmwsIGV2dCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHVybCwgeyBjYXJzZXJpZXNpZDogZXZ0IH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDot7PovazotLTmga/jgIHng63plIDlpb3ovaZcclxuICAgICAgbGlua1RvMyh1cmwsIGV2dCkge1xyXG4gICAgICAgIGlmIChldnQuemhpID09ICfotLTmga/kuJPljLonKSB7XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgndGlleGknLCB7IG5hbWU6ICfotLTmga/kuJPljLonIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZ0LnpoaSA9PSAn54Ot6ZSA5aW96L2mJykge1xyXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3Byb2R1Y3RzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKHVybCwgZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi0tOaBr+S4k+WMui/ng63plIDlpb3ovaZcclxuICAgICAgcnhoY19idG4oZSwgZnJvbSkge1xyXG4gICAgICAgIGlmIChmcm9tID09PSAndGlleGknKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAyO1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc291cmNlID0gMTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNvdXJjZWlkID0gZTtcclxuXHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbZV07XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFs0XTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgxKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZyb20gPT09ICdyZXhpYW8nKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRwYXJlbnQuVVZzdGF0aXN0aWNhbCgnY2hvb3NlY2FycGFnZScpO1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCdjb21tb2RpdHlfZGV0YWlscycsIHsgY2FybW9kZWxpZDogZSB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5p2h5Lu26YCJ6L2mXHJcbiAgICAgIHRqeGNfYnRuKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAnc291c3VvP2NhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZkb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJyArXHJcbiAgICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmkJzntKJcclxuICAgICAgc3NfY2xlYXI6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAgIC8vIOi9ruaSrei3s+i9rFxyXG4gICAgICB0aWFvdXJsKGEpe1xyXG5cclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpYW96aHVhbihlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICBsZXQgYWN0aXZpdHlqbz1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hY3Rpdml0eWpvXHJcbiAgICAgICAgbGV0IGFkdHlwZT1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hZHR5cGVcclxuICAgICAgICBsZXQgYWR2aWQ9ZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuYWR2aWRcclxuICAgICAgICBsZXQgdXJsPWUuY3VycmVudFRhcmdldC5kYXRhc2V0LnVybFxyXG4gICAgICAgIGlmKGFkdHlwZT09XCJub25lXCIpe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGFkdHlwZT09XCJ1cmxcIil7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh1cmwpXHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgIHVybDondXJsP3VybD0nK3VybFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfWVsc2UgaWYoYWR0eXBlPT1cImFjdGl2aXR5XCIpe1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc291cmNlID0gMjtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNvdXJjZWlkID0gYWN0aXZpdHlqby5hY3Rpdml0eWlkO1xyXG4gICAgICAgICAgaWYgKGFjdGl2aXR5am8udGVtcGxhdGUgPT0gMSAmJiBhY3Rpdml0eWpvLmNvbHVtbnNob3d0eXBlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgICAgIHVybDogJ21pZGF1dHVtbj9hY3Rpdml0eWlkPScgKyBhY3Rpdml0eWpvLmFjdGl2aXR5aWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYWN0aXZpdHlqby50ZW1wbGF0ZSA9PSAxICYmIGFjdGl2aXR5am8uY29sdW1uc2hvd3R5cGUgPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnbWlkYXV0dW1ubj9hY3Rpdml0eWlkPScgKyBhY3Rpdml0eWpvLmFjdGl2aXR5aWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoYWN0aXZpdHlqby50ZW1wbGF0ZSA9PSAyICYmIGFjdGl2aXR5am8uY29sdW1uc2hvd3R5cGUgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnbWlkYXV0dW1ub25lP2FjdGl2aXR5aWQ9JyArIGFjdGl2aXR5am8uYWN0aXZpdHlpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChhY3Rpdml0eWpvLnRlbXBsYXRlID09IDIgJiYgYWN0aXZpdHlqby5jb2x1bW5zaG93dHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgICAgICB1cmw6ICdtaWRhdXR1bW5vbmVlP2FjdGl2aXR5aWQ9JyArYWN0aXZpdHlqby5hY3Rpdml0eWlkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFthZHZpZCwgYWN0aXZpdHlqby5hY3Rpdml0eWlkXTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VuYW1lID0gWzUsIDZdO1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyAgICAgIOS+p+a7kVxyXG4gICAgICB4el9wcChhKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdzaWRlYmFyJywgJ3NvbWVNZXRob2QnLCB7IGNhcmJyYW5kaWQ6IGEgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICBpZihKU09OLnN0cmluZ2lmeShvcHRpb25zKSAhPSBcInt9XCIgJiYhIW9wdGlvbnMpe1xyXG4gICAgICBpZihvcHRpb25zLnVzZXJpZCE9dW5kZWZpbmVkICYmIG9wdGlvbnMudXNlcmlkIT0gJycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfov5vljrvkuoYnKVxyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZD1vcHRpb25zLnVzZXJpZDtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+ayoei/m+WOu+S6hicpXHJcbiAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgLy8g5L+d5a2YbG9naW7pnIDopoHnmoTlj4LmlbBcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIC8vIOW+ruS/oeaOpeWPo+iOt+WPlmpzY29kZVxyXG4gICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGEvc2Vzc2lvbmtleT9tcGlkPURaMjAxOCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBqc2NvZGU6IHJlcy5jb2RlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge31cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHd4LmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOi/lOWbnue9kee7nOexu+Weiywg5pyJ5pWI5YC877yaXHJcbiAgICAgICAgICAvLyB3aWZpLzJnLzNnLzRnL3Vua25vd24oQW5kcm9pZOS4i+S4jeW4uOingeeahOe9kee7nOexu+Weiykvbm9uZSjml6DnvZHnu5wpXHJcbiAgICAgICAgICB2YXIgbmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5sb2dpbl9uZXR3b3JrID0gbmV0d29ya1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgcGFyZW50X2RhdGEubG9naW5fcGhvbmVicmFuZCA9IHJlcy5icmFuZDtcclxuICAgICAgcGFyZW50X2RhdGEubG9naW5fcGhvbmVtb2RlbCA9IHJlcy5tb2RlbDtcclxuICAgICAgcGFyZW50X2RhdGEubG9naW5fc3lzdGVtID0gcmVzLnN5c3RlbTtcclxuICAgICAgcGFyZW50X2RhdGEubG9naW5fcGxhdGZvcm0gPSByZXMucGxhdGZvcm07XHJcblxyXG4gICAgICAvLyAgICAgIOmhtemdouS7o+eggVxyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnICYmXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzXy5sb2dpbl93eiA9ICcnO1xyXG4gICAgICAgIHRoaXNfLmxvZ2luX2p0X3p0ID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgLy8g5paw6L2m6LS35qy+6aaW6aG1XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9pbmRleCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgdGhpc18uaW1nVXJscyA9IGRhdGEuZGF0YS5hZHZpbmZvSkE7XHJcbiAgICAgICAgICB0aGlzXy50aWV4aSA9IGRhdGEuZGF0YS5jYXJpbnRlcmVzdGRpc2NvdW50c3BlY2lhbGFyZWFKQTtcclxuICAgICAgICAgIHRoaXNfLnJ4X2ltZ3VybCA9IGRhdGEuZGF0YS5jYXJzaG90c2FsZXBlY2lhbGFyZWFKQTtcclxuICAgICAgICAgIHRoaXNfLnJtX2NoZSA9IGRhdGEuZGF0YS5jYXJicmFuZEpBO1xyXG4gICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZ2V0Q2FyZExpc3QoKTtcclxuICAgIH1cclxuICAgIC8vIOWIt+aWsOmhtemdolxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLiRpbnZva2UoJ3NpZGViYXInLCAnY2xlYXJfeXknKTtcclxuICAgICAgLy8g57uf6K6hXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IDA7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCduZXdjYXJob21lcGFnZScpO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuUFZVVnN0YXRpc3RpY2FsKCduZXdjYXJob21lcGFnZScpO1xyXG4gICAgICB0aGlzLmdldENhcmRMaXN0KCk7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGlmKCFwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCcg6YeN5paw55m75b2VJylcclxuICAgICAgICB0aGlzXy4gb25Mb2FkKClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8g5LiL5ouJ5Yi35pawXHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgLy8g5L+d5a2YbG9naW7pnIDopoHnmoTlj4LmlbBcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHd4LmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIC8vIOi/lOWbnue9kee7nOexu+Weiywg5pyJ5pWI5YC877yaXHJcbiAgICAgICAgICAvLyB3aWZpLzJnLzNnLzRnL3Vua25vd24oQW5kcm9pZOS4i+S4jeW4uOingeeahOe9kee7nOexu+Weiykvbm9uZSjml6DnvZHnu5wpXHJcbiAgICAgICAgICB2YXIgbmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5sb2dpbl9uZXR3b3JrID0gbmV0d29ya1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIHBhcmVudF9kYXRhLmxvZ2luX3Bob25lYnJhbmQgPSByZXMuYnJhbmQ7XHJcbiAgICAgIHBhcmVudF9kYXRhLmxvZ2luX3Bob25lbW9kZWwgPSByZXMubW9kZWw7XHJcbiAgICAgIHBhcmVudF9kYXRhLmxvZ2luX3N5c3RlbSA9IHJlcy5zeXN0ZW07XHJcbiAgICAgIHBhcmVudF9kYXRhLmxvZ2luX3BsYXRmb3JtID0gcmVzLnBsYXRmb3JtO1xyXG5cclxuICAgICAgLy8g6aG16Z2i5Luj56CBXHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gJycgJiZcclxuICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXNfLmxvZ2luX3d6ID0gJyc7XHJcbiAgICAgICAgdGhpc18ubG9naW5fanRfenQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICB0aGlzXy5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICAgIC8vIOaWsOi9pui0t+asvummlumhtVxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vaW5kZXgnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIHRoaXNfLmltZ1VybHMgPSBkYXRhLmRhdGEuYWR2aW5mb0pBO1xyXG4gICAgICAgICAgdGhpc18uYWR0eXBlID0gZGF0YS5kYXRhLmFkdmluZm9KQS5hZHR5cGU7XHJcbiAgICAgICAgICB0aGlzXy50aWV4aSA9IGRhdGEuZGF0YS5jYXJpbnRlcmVzdGRpc2NvdW50c3BlY2lhbGFyZWFKQTtcclxuICAgICAgICAgIHRoaXNfLnJ4X2ltZ3VybCA9IGRhdGEuZGF0YS5jYXJzaG90c2FsZXBlY2lhbGFyZWFKQTtcclxuICAgICAgICAgIHRoaXNfLnJtX2NoZSA9IGRhdGEuZGF0YS5jYXJicmFuZEpBO1xyXG4gICAgICAgICAgd3guc3RvcFB1bGxEb3duUmVmcmVzaCgpO1xyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8g55m75b2V5ZCO5p+l55yL5piv5ZCm5pyJ6K6i5Y2VXHJcbiAgICBnZXRDYXJkTGlzdCgpIHtcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGlmIChwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gJycpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9vcmRlcmxpc3Q/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGlzaW5kZXg6IDFcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZGF0YS5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikpe1xyXG50aGlzXy5pbmRlID0gZGF0YS5kYXRhLmRhdGFbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19