'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userinfo_alert = require('./../components/userinfo_alert.js');

var _userinfo_alert2 = _interopRequireDefault(_userinfo_alert);

var _alert = require('./../components/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = getApp();

var myordey = function (_wepy$page) {
  _inherits(myordey, _wepy$page);

  function myordey() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, myordey);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myordey.__proto__ || Object.getPrototypeOf(myordey)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的订单'
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default
    }, _this.data = {
      request_cs: function request_cs() {},
      url_link: '',
      // startX: 0, //开始坐标
      // startY: 0,
      // 车型id
      carmodelid: '',
      // 产品id
      financialproductid: '',
      json_link: '',
      // 订单列表
      text: [],
      parent_data: ''
      // 当前左滑的item索引
      // footIndex: -1
    }, _this.methods = _defineProperty({
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 跳转订单详情
      dj_btn: function dj_btn(e) {
        this.footIndex = -1;
        var orderid = e.currentTarget.dataset.orderid;
        var ordertype = e.currentTarget.dataset.ordertype;
        var orderstatue = e.currentTarget.dataset.orderstatue;
        this.$navigate('ddxq', {
          orderid: orderid,
          ordertype: ordertype,
          orderstatue: orderstatue
        });
      },

      // 去首页
      gg: function gg(e) {
        wx.reLaunch({
          url: 'index'
        });
      },

      //删除事件
      // del(e, a, c) {
      //   let this_ = this;
      //   let json_link = this.$parent.globalData.json_link;
      //   let parent_data = this.$parent.globalData;
      //   wx.showModal({
      //     title: '删除订单',
      //     content: '是否删除该订单',
      //     success(res) {
      //       if (res.confirm) {
      //         wx.showLoading({
      //           title: '删除中'
      //         });
      //         if (c == '已取消') {
      //           wx.request({
      //             url:
      //               parent_data.json_link +
      //               '/api/wxapp/reservationorder/removeorder?access_token=' +
      //               parent_data.access_token,
      //             data: {
      //               orderid: e
      //             },
      //             success: function(data) {
      //               wx.request({
      //                 url:
      //                   parent_data.json_link +
      //                   '/api/wxapp/reservationorder/orderlist?access_token=' +
      //                   parent_data.access_token,
      //                 data: {},
      //                 success: function(data) {
      //                   setTimeout(function() {
      //                     wx.hideLoading();
      //                   }, 0);
      //                   this_.footIndex = -1;
      //                   wx.showToast({
      //                     title: '删除订单成功',
      //                     icon: 'success',
      //                     duration: 2000
      //                   });
      //                   this_.text = data.data.data;
      //                   for (var i = 0; i < data.data.data.length; i++) {
      //                     data.data.data[i].createtime = this_.js_date_time(
      //                       data.data.data[i].createtime
      //                     );
      //                   }
      //                   this_.text = data.data.data.map(ele => {
      //                     ele.newMonthlySupply = ele.monthlySupply.toFixed(2);
      //                     ele.newDownpaymentPara = ele.downpaymentPara.toFixed(2);
      //                     return ele;
      //                   });
      //                   // 给数据进行绑定
      //                   this_.$apply();
      //                 }
      //               });
      //             }
      //           });
      //         } else {
      //           wx.showToast({
      //             title: '无法删除审核订单',
      //             icon: 'none',
      //             duration: 2000
      //           });
      //           this_.footIndex = -1;
      //         }
      //       } else if (res.cancel) {
      //         this_.footIndex = -1;
      //       }
      //       this_.$apply();
      //     }
      //   });
      // },
      // 滑动开始
      // touchstart(e) {
      //   this.startX = e.changedTouches[0].clientX;
      //   this.startY = e.changedTouches[0].clientY;
      // },
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },
      alert_tel: function alert_tel(res) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        zhi.login_telnum_iv = res.iv;
        zhi.login_telnum_miyao = res.miyao;
        this_.$invoke('alert_l', 'chufa', false);
        // 查看是否授权
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function success(res) {
                  zhi.java_login(res, this_.request_cs);
                }
              });
            } else {
              this_.$invoke('userinfo_alert', 'chufa', true);
            }
          }
        });
      }
    }, 'alert_tel', function alert_tel(res) {
      var this_ = this;
      var zhi = this.$parent.globalData;
      zhi.login_telnum_iv = res.iv;
      zhi.login_telnum_miyao = res.miyao;
      this_.$invoke('alert_l', 'chufa', false);
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(res) {
                zhi.java_login(res, this_.request_cs);
              }
            });
          } else {
            this_.$invoke('userinfo_alert', 'chufa', true);
          }
        }
      });
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(myordey, [{
    key: 'onLoad',

    //   /**
    //    * 计算滑动角度
    //    * @param {Object} start 起点坐标
    //    * @param {Object} end 终点坐标
    //    */
    // angle(start, end) {
    //   var _X = end.X - start.X,
    //     _Y = end.Y - start.Y;
    //   //返回角度 /Math.atan()返回数字的反正切值
    //   return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    // }

    value: function onLoad(res) {

      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      var parent_data = this.$parent.globalData;
      if (parent_data.access_token != '') {
        // 我的订单列表
        wx.showLoading({
          title: '加载中'
        });
        wx.request({
          url: parent_data.json_link + '/api/wxapp/reservationorder/orderlist?access_token=' + parent_data.access_token,
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);
            for (var i = 0; i < data.data.data.length; i++) {
              data.data.data[i].createtime = this_.js_date_time(data.data.data[i].createtime);
            }
            this_.text = data.data.data.map(function (ele) {
              ele.newMonthlySupply = ele.monthlySupply.toFixed(2);
              ele.newDownpaymentPara = ele.downpaymentPara.toFixed(2);
              return ele;
            });
            // 给数据进行绑定
            this_.$apply();
          }
        });
      } else {
        this_.$invoke('alert_l', 'chufa', true);
        this_.request_cs = function (access_token) {
          wx.showLoading({
            title: '加载中'
          });
          // 我的订单列表
          wx.request({
            url: parent_data.json_link + '/api/wxapp/reservationorder/orderlist?access_token=' + parent_data.access_token,
            data: {},
            success: function success(data) {
              setTimeout(function () {
                wx.hideLoading();
              }, 0);
              this_.text = data.data.data.map(function (ele) {
                ele.newMonthlySupply = ele.monthlySupply.toFixed(2);
                ele.newDownpaymentPara = ele.downpaymentPara.toFixed(2);
                return ele;
              });
              // 给数据进行绑定
              this_.$apply();
            }
          });
        };
      }
    }

    // 格式化时间

  }, {
    key: 'js_date_time',
    value: function js_date_time(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.onLoad();
      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.footIndex = -1;
    }
  }]);

  return myordey;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(myordey , 'pages/myorder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXIuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwibXlvcmRleSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ1c2VyaW5mb19hbGVydCIsIlVzZXJpbmZvX2FsZXJ0IiwiYWxlcnRfbCIsIkFsZXJ0IiwiZGF0YSIsInJlcXVlc3RfY3MiLCJ1cmxfbGluayIsImNhcm1vZGVsaWQiLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJqc29uX2xpbmsiLCJ0ZXh0IiwicGFyZW50X2RhdGEiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiZGpfYnRuIiwiZSIsImZvb3RJbmRleCIsIm9yZGVyaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm9yZGVydHlwZSIsIm9yZGVyc3RhdHVlIiwiJG5hdmlnYXRlIiwiZ2ciLCJ3eCIsInJlTGF1bmNoIiwidXJsIiwiYWxlcnRfdXNlcmluZm8iLCJ0aGlzXyIsInpoaSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGludm9rZSIsImphdmFfbG9naW4iLCJkZXRhaWwiLCJhbGVydF90ZWwiLCJyZXMiLCJsb2dpbl90ZWxudW1faXYiLCJpdiIsImxvZ2luX3RlbG51bV9taXlhbyIsIm1peWFvIiwiZ2V0U2V0dGluZyIsInN1Y2Nlc3MiLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiYWNjZXNzX3Rva2VuIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCJpIiwibGVuZ3RoIiwiY3JlYXRldGltZSIsImpzX2RhdGVfdGltZSIsIm1hcCIsImVsZSIsIm5ld01vbnRobHlTdXBwbHkiLCJtb250aGx5U3VwcGx5IiwidG9GaXhlZCIsIm5ld0Rvd25wYXltZW50UGFyYSIsImRvd25wYXltZW50UGFyYSIsIiRhcHBseSIsInRpbWVzdGFtcCIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwib25Mb2FkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxNQUFNQyxRQUFWOztJQUNxQkMsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsY0FBYSxFQUFkLEVBQWlCLFlBQVcsWUFBNUIsRUFBbEIsRUFBNEQsV0FBVSxFQUFDLFlBQVcsYUFBWixFQUF0RSxFLFFBQ1RDLE8sR0FBVSxFQUFDLGtCQUFpQixFQUFDLGdCQUFlLGdCQUFoQixFQUFsQixFQUFvRCxXQUFVLEVBQUMsZ0JBQWUsV0FBaEIsRUFBOUQsRSxRQUNUQyxVLEdBQWE7QUFDVkMsc0JBQWdCQyx3QkFETjtBQUVWQyxlQUFTQztBQUZDLEssUUFJWkMsSSxHQUFPO0FBQ0xDLGtCQUFZLHNCQUFXLENBQUUsQ0FEcEI7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMO0FBQ0E7QUFDQTtBQUNBQyxrQkFBWSxFQU5QO0FBT0w7QUFDQUMsMEJBQW9CLEVBUmY7QUFTTEMsaUJBQVcsRUFUTjtBQVVMO0FBQ0FDLFlBQU0sRUFYRDtBQVlMQyxtQkFBYTtBQUNiO0FBQ0E7QUFkSyxLLFFBZ0JQQyxPO0FBQ0VDLHlCQUFtQiw2QkFBVztBQUM1QixlQUFPO0FBQ0xDLGdCQUFNO0FBREQsU0FBUDtBQUdELE87QUFDRDtBQUNBQyxZLGtCQUFPQyxDLEVBQUc7QUFDUixhQUFLQyxTQUFMLEdBQWlCLENBQUMsQ0FBbEI7QUFDQSxZQUFJQyxVQUFVRixFQUFFRyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsT0FBdEM7QUFDQSxZQUFJRyxZQUFZTCxF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QURzQixDQUNVO0FBQ2hDLFVBQUlHLElBQUlGLEtBQUtHLFdBQUwsS0FBcUIsR0FBN0I7QUFDQSxVQUFJQyxJQUNGLENBQUNKLEtBQUtLLFFBQUwsS0FBa0IsQ0FBbEIsR0FBc0IsRUFBdEIsR0FDRyxPQUFPTCxLQUFLSyxRQUFMLEtBQWtCLENBQXpCLENBREgsR0FFR0wsS0FBS0ssUUFBTCxLQUFrQixDQUZ0QixJQUUyQixHQUg3QjtBQUlBLFVBQUlDLElBQUlOLEtBQUtPLE9BQUwsS0FBaUIsR0FBekI7QUFDQSxVQUFJQyxJQUFJUixLQUFLUyxRQUFMLEtBQWtCLEdBQTFCO0FBQ0EsVUFBSUMsSUFBSVYsS0FBS1csVUFBTCxLQUFvQixHQUE1QjtBQUNBLFVBQUlDLElBQUlaLEtBQUthLFVBQUwsRUFBUjtBQUNBLGFBQU9YLElBQUlFLENBQUosR0FBUUUsQ0FBUixHQUFZRSxDQUFaLEdBQWdCRSxDQUFoQixHQUFvQkUsQ0FBM0I7QUFDRDs7OzZCQUNRO0FBQ1AsV0FBS0UsTUFBTDtBQUNBLFdBQUt6RSxRQUFMLEdBQWdCLEtBQUt5QixPQUFMLENBQWFDLFVBQWIsQ0FBd0IxQixRQUF4QztBQUNEOztBQUVEOzs7OytCQUNXO0FBQ1QsV0FBS1csU0FBTCxHQUFpQixDQUFDLENBQWxCO0FBQ0Q7Ozs7RUFqVGtDK0QsZUFBS0MsSTs7a0JBQXJCeEYsTyIsImZpbGUiOiJteW9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxudmFyIGFwcCA9IGdldEFwcCgpO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBteW9yZGV5IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE6K6i5Y2VJ1xyXG4gIH07XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInVzZXJpbmZvX2FsZXJ0XCI6e1wieG1sbnM6di1vblwiOlwiXCIsXCJ0ZXh0X3poaVwiOlwi5Lic5q2j6YeR6J6N6K+35rGC5o6I5p2D55m75b2VXCJ9LFwiYWxlcnRfbFwiOntcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPmiYvmnLrlj7dcIn19O1xyXG4kZXZlbnRzID0ge1widXNlcmluZm9fYWxlcnRcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImFsZXJ0X3VzZXJpbmZvXCJ9LFwiYWxlcnRfbFwiOntcInYtb246Y2hpbGRGblwiOlwiYWxlcnRfdGVsXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICB1c2VyaW5mb19hbGVydDogVXNlcmluZm9fYWxlcnQsXHJcbiAgICBhbGVydF9sOiBBbGVydFxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIHJlcXVlc3RfY3M6IGZ1bmN0aW9uKCkge30sXHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICAvLyBzdGFydFg6IDAsIC8v5byA5aeL5Z2Q5qCHXHJcbiAgICAvLyBzdGFydFk6IDAsXHJcbiAgICAvLyDovablnotpZFxyXG4gICAgY2FybW9kZWxpZDogJycsXHJcbiAgICAvLyDkuqflk4FpZFxyXG4gICAgZmluYW5jaWFscHJvZHVjdGlkOiAnJyxcclxuICAgIGpzb25fbGluazogJycsXHJcbiAgICAvLyDorqLljZXliJfooahcclxuICAgIHRleHQ6IFtdLFxyXG4gICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgLy8g5b2T5YmN5bem5ruR55qEaXRlbee0ouW8lVxyXG4gICAgLy8gZm9vdEluZGV4OiAtMVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOi3s+i9rOiuouWNleivpuaDhVxyXG4gICAgZGpfYnRuKGUpIHtcclxuICAgICAgdGhpcy5mb290SW5kZXggPSAtMTtcclxuICAgICAgbGV0IG9yZGVyaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcmRlcmlkO1xyXG4gICAgICBsZXQgb3JkZXJ0eXBlID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQub3JkZXJ0eXBlO1xyXG4gICAgICBsZXQgb3JkZXJzdGF0dWUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcmRlcnN0YXR1ZTtcclxuICAgICAgdGhpcy4kbmF2aWdhdGUoJ2RkeHEnLCB7XHJcbiAgICAgICAgb3JkZXJpZDogb3JkZXJpZCxcclxuICAgICAgICBvcmRlcnR5cGU6IG9yZGVydHlwZSxcclxuICAgICAgICBvcmRlcnN0YXR1ZTogb3JkZXJzdGF0dWVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5Y676aaW6aG1XHJcbiAgICBnZyhlKSB7XHJcbiAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICB1cmw6ICdpbmRleCdcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy/liKDpmaTkuovku7ZcclxuICAgIC8vIGRlbChlLCBhLCBjKSB7XHJcbiAgICAvLyAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAvLyAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAvLyAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgLy8gICB3eC5zaG93TW9kYWwoe1xyXG4gICAgLy8gICAgIHRpdGxlOiAn5Yig6Zmk6K6i5Y2VJyxcclxuICAgIC8vICAgICBjb250ZW50OiAn5piv5ZCm5Yig6Zmk6K+l6K6i5Y2VJyxcclxuICAgIC8vICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgLy8gICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAvLyAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgIC8vICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOS4rSdcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChjID09ICflt7Llj5bmtognKSB7XHJcbiAgICAvLyAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAvLyAgICAgICAgICAgICB1cmw6XHJcbiAgICAvLyAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAvLyAgICAgICAgICAgICAgICcvYXBpL3d4YXBwL3Jlc2VydmF0aW9ub3JkZXIvcmVtb3Zlb3JkZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgLy8gICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAvLyAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIG9yZGVyaWQ6IGVcclxuICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHVybDpcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL29yZGVybGlzdD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgdGhpc18uZm9vdEluZGV4ID0gLTE7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOiuouWNleaIkOWKnycsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgdGhpc18udGV4dCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhLmRhdGEuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhLmRhdGEuZGF0YVtpXS5jcmVhdGV0aW1lID0gdGhpc18uanNfZGF0ZV90aW1lKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5kYXRhW2ldLmNyZWF0ZXRpbWVcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YS5tYXAoZWxlID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZWxlLm5ld01vbnRobHlTdXBwbHkgPSBlbGUubW9udGhseVN1cHBseS50b0ZpeGVkKDIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBlbGUubmV3RG93bnBheW1lbnRQYXJhID0gZWxlLmRvd25wYXltZW50UGFyYS50b0ZpeGVkKDIpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlOiAn5peg5rOV5Yig6Zmk5a6h5qC46K6i5Y2VJyxcclxuICAgIC8vICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAvLyAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgICAgdGhpc18uZm9vdEluZGV4ID0gLTE7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzXy5mb290SW5kZXggPSAtMTtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8g5ruR5Yqo5byA5aeLXHJcbiAgICAvLyB0b3VjaHN0YXJ0KGUpIHtcclxuICAgIC8vICAgdGhpcy5zdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAvLyAgIHRoaXMuc3RhcnRZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgLy8gfSxcclxuICAgIGFsZXJ0X3VzZXJpbmZvKGUpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIGZhbHNlKTtcclxuICAgICAgemhpLmphdmFfbG9naW4oZS5kZXRhaWwsIHRoaXNfLnJlcXVlc3RfY3MpO1xyXG4gICAgfSxcclxuICAgIGFsZXJ0X3RlbChyZXMpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX21peWFvID0gcmVzLm1peWFvO1xyXG4gICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgemhpLmphdmFfbG9naW4ocmVzLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8v5ruR5Yqo5LqL5Lu25aSE55CGXHJcbiAgICAvLyB0b3VjaG1vdmUoZSkge1xyXG4gICAgLy8gICB2YXIgdGhhdCA9IHRoaXMsXHJcbiAgICAvLyAgICAgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgLy/lvZPliY3ntKLlvJVcclxuICAgIC8vICAgICBzdGFydFggPSB0aGF0LmRhdGEuc3RhcnRYLCAvL+W8gOWni1jlnZDmoIdcclxuICAgIC8vICAgICBzdGFydFkgPSB0aGF0LmRhdGEuc3RhcnRZLCAvL+W8gOWni1nlnZDmoIdcclxuICAgIC8vICAgICB0b3VjaE1vdmVYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLCAvL+a7keWKqOWPmOWMluWdkOagh1xyXG4gICAgLy8gICAgIHRvdWNoTW92ZVkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFksIC8v5ruR5Yqo5Y+Y5YyW5Z2Q5qCHXHJcbiAgICAvLyAgICAgLy/ojrflj5bmu5Hliqjop5LluqZcclxuICAgIC8vICAgICBhbmdsZSA9IHRoYXQuYW5nbGUoXHJcbiAgICAvLyAgICAgICB7IFg6IHN0YXJ0WCwgWTogc3RhcnRZIH0sXHJcbiAgICAvLyAgICAgICB7IFg6IHRvdWNoTW92ZVgsIFk6IHRvdWNoTW92ZVkgfVxyXG4gICAgLy8gICAgICk7XHJcblxyXG4gICAgLy8gICB0aGF0LnRleHQuZm9yRWFjaChmdW5jdGlvbih2LCBpKSB7XHJcbiAgICAvLyAgICAgLy/mu5HliqjotoXov4czMOW6puinkiByZXR1cm5cclxuICAgIC8vICAgICBpZiAoTWF0aC5hYnMoYW5nbGUpID4gMzApIHJldHVybjtcclxuICAgIC8vICAgICBpZiAoaSA9PSBpbmRleCkge1xyXG4gICAgLy8gICAgICAgaWYgKHRvdWNoTW92ZVggPiBzdGFydFgpIHtcclxuICAgIC8vICAgICAgICAgLy/lj7Pmu5FcclxuICAgIC8vICAgICAgICAgaWYgKHRoYXQuZm9vdEluZGV4ID09IGluZGV4KSB7XHJcbiAgICAvLyAgICAgICAgICAgdGhhdC5mb290SW5kZXggPSAtMTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgLy/lt6bmu5FcclxuICAgIC8vICAgICAgICAgdGhhdC5mb290SW5kZXggPSBpbmRleDtcclxuICAgIC8vICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgIH0pO1xyXG4gICAgLy8gfSxcclxuICAgIGFsZXJ0X3RlbChyZXMpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX21peWFvID0gcmVzLm1peWFvO1xyXG4gICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgemhpLmphdmFfbG9naW4ocmVzLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gICAvKipcclxuICAvLyAgICAqIOiuoeeul+a7keWKqOinkuW6plxyXG4gIC8vICAgICogQHBhcmFtIHtPYmplY3R9IHN0YXJ0IOi1t+eCueWdkOagh1xyXG4gIC8vICAgICogQHBhcmFtIHtPYmplY3R9IGVuZCDnu4jngrnlnZDmoIdcclxuICAvLyAgICAqL1xyXG4gIC8vIGFuZ2xlKHN0YXJ0LCBlbmQpIHtcclxuICAvLyAgIHZhciBfWCA9IGVuZC5YIC0gc3RhcnQuWCxcclxuICAvLyAgICAgX1kgPSBlbmQuWSAtIHN0YXJ0Llk7XHJcbiAgLy8gICAvL+i/lOWbnuinkuW6piAvTWF0aC5hdGFuKCnov5Tlm57mlbDlrZfnmoTlj43mraPliIflgLxcclxuICAvLyAgIHJldHVybiAzNjAgKiBNYXRoLmF0YW4oX1kgLyBfWCkgLyAoMiAqIE1hdGguUEkpO1xyXG4gIC8vIH1cclxuXHJcbiAgb25Mb2FkKHJlcykge1xyXG4gXHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgaWYgKHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSAnJykge1xyXG4gICAgICAvLyDmiJHnmoTorqLljZXliJfooahcclxuICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6XHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9vcmRlcmxpc3Q/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5kYXRhLmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGF0YS5kYXRhLmRhdGFbaV0uY3JlYXRldGltZSA9IHRoaXNfLmpzX2RhdGVfdGltZShcclxuICAgICAgICAgICAgICBkYXRhLmRhdGEuZGF0YVtpXS5jcmVhdGV0aW1lXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzXy50ZXh0ID0gZGF0YS5kYXRhLmRhdGEubWFwKGVsZSA9PiB7XHJcbiAgICAgICAgICAgIGVsZS5uZXdNb250aGx5U3VwcGx5ID0gZWxlLm1vbnRobHlTdXBwbHkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgZWxlLm5ld0Rvd25wYXltZW50UGFyYSA9IGVsZS5kb3ducGF5bWVudFBhcmEudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICB0aGlzXy5yZXF1ZXN0X2NzID0gZnVuY3Rpb24oYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pO1xyXG4gICAgICAgIC8vIOaIkeeahOiuouWNleWIl+ihqFxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL29yZGVybGlzdD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzXy50ZXh0ID0gZGF0YS5kYXRhLmRhdGEubWFwKGVsZSA9PiB7XHJcbiAgICAgICAgICAgICAgZWxlLm5ld01vbnRobHlTdXBwbHkgPSBlbGUubW9udGhseVN1cHBseS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgIGVsZS5uZXdEb3ducGF5bWVudFBhcmEgPSBlbGUuZG93bnBheW1lbnRQYXJhLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIOagvOW8j+WMluaXtumXtFxyXG4gIGpzX2RhdGVfdGltZSh0aW1lc3RhbXApIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUodGltZXN0YW1wKTsgLy/ml7bpl7TmiLPkuLoxMOS9jemcgCoxMDAw77yM5pe26Ze05oiz5Li6MTPkvY3nmoTor53kuI3pnIDkuZgxMDAwXHJcbiAgICB2YXIgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgIHZhciBNID1cclxuICAgICAgKGRhdGUuZ2V0TW9udGgoKSArIDEgPCAxMFxyXG4gICAgICAgID8gJzAnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpXHJcbiAgICAgICAgOiBkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJztcclxuICAgIHZhciBEID0gZGF0ZS5nZXREYXRlKCkgKyAnICc7XHJcbiAgICB2YXIgaCA9IGRhdGUuZ2V0SG91cnMoKSArICc6JztcclxuICAgIHZhciBtID0gZGF0ZS5nZXRNaW51dGVzKCkgKyAnOic7XHJcbiAgICB2YXIgcyA9IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgcmV0dXJuIFkgKyBNICsgRCArIGggKyBtICsgcztcclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5vbkxvYWQoKTtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICB9XHJcblxyXG4gIC8vIOWIneWni+WMllxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgdGhpcy5mb290SW5kZXggPSAtMTtcclxuICB9XHJcbn1cclxuIl19