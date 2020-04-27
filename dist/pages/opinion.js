'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userinfo_alert = require('./../components/userinfo_alert.js');

var _userinfo_alert2 = _interopRequireDefault(_userinfo_alert);

var _alert = require('./../components/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var opinion = function (_wepy$page) {
  _inherits(opinion, _wepy$page);

  function opinion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, opinion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = opinion.__proto__ || Object.getPrototypeOf(opinion)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '意见反馈'
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
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
      },

      // 意见反馈
      bindFormSubmit: function bindFormSubmit(e) {
        if (e.detail.value.textarea != '') {
          var this_ = this;
          var json_link = this.$parent.globalData.json_link;
          var parent_data = this.$parent.globalData;
          if (parent_data.access_token != '') {
            wx.request({
              url: parent_data.json_link + '/api/wxapp/opinionfeedback/post?access_token=' + parent_data.access_token,
              method: 'POST',
              header: { 'Content-Type': 'application/x-www-form-urlencoded' },
              data: {
                content: e.detail.value.textarea
              },
              success: function success(data) {
                wx.showToast({
                  title: '成功',
                  icon: 'success',
                  duration: 2000
                });
                setTimeout(function () {
                  wx.navigateBack({
                    delta: 1
                  });
                }, 2000);
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
          } else {
            this_.$invoke('alert_l', 'chufa', true);
            this_.request_cs = function (access_token) {
              wx.request({
                url: parent_data.json_link + '/api/wxapp/opinionfeedback/post?access_token=' + parent_data.access_token,
                method: 'POST',
                header: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: {
                  content: e.detail.value.textarea
                },
                success: function success(data) {
                  wx.showToast({
                    title: '成功',
                    icon: 'success',
                    duration: 2000
                  });
                  setTimeout(function () {
                    wx.navigateBack({
                      delta: 1
                    });
                  }, 2000);
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
            };
          }
        } else {
          wx.showToast({
            title: '不能为空',
            icon: 'none',
            duration: 2000
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return opinion;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(opinion , 'pages/opinion'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9waW5pb24uanMiXSwibmFtZXMiOlsib3BpbmlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ1c2VyaW5mb19hbGVydCIsIlVzZXJpbmZvX2FsZXJ0IiwiYWxlcnRfbCIsIkFsZXJ0IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImFsZXJ0X3VzZXJpbmZvIiwiZSIsInRoaXNfIiwiemhpIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkaW52b2tlIiwiamF2YV9sb2dpbiIsImRldGFpbCIsInJlcXVlc3RfY3MiLCJhbGVydF90ZWwiLCJyZXMiLCJsb2dpbl90ZWxudW1faXYiLCJpdiIsImxvZ2luX3RlbG51bV9taXlhbyIsIm1peWFvIiwid3giLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJiaW5kRm9ybVN1Ym1pdCIsInZhbHVlIiwidGV4dGFyZWEiLCJqc29uX2xpbmsiLCJwYXJlbnRfZGF0YSIsImFjY2Vzc190b2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJkYXRhIiwiY29udGVudCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZmFpbCIsImhpZGVUb2FzdCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGNBQWEsRUFBZCxFQUFpQixZQUFXLFlBQTVCLEVBQWxCLEVBQTRELFdBQVUsRUFBQyxZQUFXLGFBQVos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b20gJ3dlcHknO1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgb3BpbmlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aEj+ingeWPjemmiCdcclxuICB9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+eZu+W9lVwifSxcImFsZXJ0X2xcIjp7XCJ0ZXh0X3poaVwiOlwi5Lic5q2j6YeR6J6N6K+35rGC5o6I5p2D5omL5py65Y+3XCJ9fTtcclxuJGV2ZW50cyA9IHtcInVzZXJpbmZvX2FsZXJ0XCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF91c2VyaW5mb1wifSxcImFsZXJ0X2xcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImFsZXJ0X3RlbFwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgdXNlcmluZm9fYWxlcnQ6IFVzZXJpbmZvX2FsZXJ0LFxyXG4gICAgYWxlcnRfbDogQWxlcnRcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgYWxlcnRfdXNlcmluZm8oZSkge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICB6aGkuamF2YV9sb2dpbihlLmRldGFpbCwgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICB9LFxyXG4gICAgYWxlcnRfdGVsKHJlcykge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHpoaS5sb2dpbl90ZWxudW1faXYgPSByZXMuaXY7XHJcbiAgICAgIHpoaS5sb2dpbl90ZWxudW1fbWl5YW8gPSByZXMubWl5YW87XHJcbiAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIC8vIOafpeeci+aYr+WQpuaOiOadg1xyXG4gICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB6aGkuamF2YV9sb2dpbihyZXMsIHRoaXNfLnJlcXVlc3RfY3MpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5oSP6KeB5Y+N6aaIXHJcbiAgICBiaW5kRm9ybVN1Ym1pdChlKSB7XHJcbiAgICAgIGlmIChlLmRldGFpbC52YWx1ZS50ZXh0YXJlYSAhPSAnJykge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICBpZiAocGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnKSB7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvb3BpbmlvbmZlZWRiYWNrL3Bvc3Q/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGUuZGV0YWlsLnZhbHVlLnRleHRhcmVhXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgICAgICB0aGlzXy5yZXF1ZXN0X2NzID0gZnVuY3Rpb24oYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC9vcGluaW9uZmVlZGJhY2svcG9zdD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGUuZGV0YWlsLnZhbHVlLnRleHRhcmVhXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn5LiN6IO95Li656m6JyxcclxuICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==