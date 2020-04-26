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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var midautumn = function (_wepy$page) {
  _inherits(midautumn, _wepy$page);

  function midautumn() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, midautumn);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = midautumn.__proto__ || Object.getPrototypeOf(midautumn)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ''
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default
    }, _this.data = {
      url_link: '',
      carmodel: '',
      // 顶部图片
      topimgurl: '',
      // 车型数据
      zhi: [],
      // 请求域名
      json_link: '',
      // 楼层名称
      floorName: '',
      // 查看更多
      lookatmore: '',
      cartype: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/midautumn?activityid=' + this.activityid
        };
      },
      // 查看更多
      gengd: function gengd(e) {
        if (e == 0) {
          this.$navigate({
            url: 'sousuo?carpricesection=' + '0' + '&downpaymentsection=' + '0' + '&monthlysupplysection=' + '0'
          });
        }
        if (e == 1) {
          this.$navigate({
            url: 'tiexi'
          });
        }
        if (e == 2) {
          this.$navigate({
            url: 'products'
          });
        }
        if (e == 3) {
          this.$navigate({
            url: 'straight'
          });
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
                }
              });
            } else {
              this_.$invoke('userinfo_alert', 'chufa', true);
            }
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
      },
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },
      changColor: function changColor(e) {
        this.setData({
          key: e.target.dataset.index
        });
        this.zhi = e.target.dataset.zhi;
        this.$apply();
        console.log(e.target.dataset.zhi);
      },

      // 提交
      zxkf_btn: function zxkf_btn() {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        this.json_link = json_link;
        var parent_data = this.$parent.globalData;
        if (this_.zhi.length != 0) {
          if (parent_data.access_token != '' && parent_data.access_token != undefined) {
            this_.checkregtype();
          } else {
            this_.$invoke('alert_l', 'chufa', true);
            this_.request_cs = function (access_token) {
              this_.checkregtype();
            };
          }
        } else {
          wx.showToast({
            title: '请选择产品',
            mask: true
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(midautumn, [{
    key: 'onLoad',
    value: function onLoad(res) {
      wx.showLoading({
        title: '加载中'
      });
      var activityid = res.activityid;
      this.activityid = activityid;
      var are = this;
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      wx.request({
        // 活动模板
        url: json_link + '/api/wxapp/activity/template',
        data: {
          activityid: activityid
        },
        // 后台返回值
        success: function success(data) {
          wx.hideLoading();
          // 定义返回值的数据
          are.carmodel = data.data.data.carlist;
          are.topimgurl = data.data.data.topimgurl;
          are.floorName = data.data.data.floorname;
          are.name = data.data.data.name;
          are.lookatmore = data.data.data.lookatmore;
          are.floorName = data.data.data.floorname;
          are.cartype = data.data.data.cartype;

          wx.setNavigationBarTitle({
            title: are.name //页面标题为路由参数
          });
          // 给数据进行绑定
          are.$apply();
        }
      });
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 清掉贷款提交订单接口两个参数的值
      this.$parent.globalData.source = 0;
      this.$parent.globalData.sourceid = '';
    }

    // 判断新老用户

  }, {
    key: 'checkregtype',
    value: function checkregtype() {
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var parent_data = this.$parent.globalData;
      wx.request({
        url: parent_data.json_link + '/api/wxapp/userinfo/checkregtype?access_token=' + parent_data.access_token,
        data: {},
        success: function success(data) {
          if (data.data.data == 'old') {
            this_.$navigate('personal', this_.zhi);
          } else {
            this_.$navigate('activities', this_.zhi);
          }
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
  }]);

  return midautumn;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(midautumn , 'pages/midautumn'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGF1dHVtbi5qcyJdLCJuYW1lcyI6WyJtaWRhdXR1bW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidXNlcmluZm9fYWxlcnQiLCJVc2VyaW5mb19hbGVydCIsImFsZXJ0X2wiLCJBbGVydCIsImRhdGEiLCJ1cmxfbGluayIsImNhcm1vZGVsIiwidG9waW1ndXJsIiwiemhpIiwianNvbl9saW5rIiwiZmxvb3JOYW1lIiwibG9va2F0bW9yZSIsImNhcnR5cGUiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiYWN0aXZpdHlpZCIsImdlbmdkIiwiZSIsIiRuYXZpZ2F0ZSIsInVybCIsImFsZXJ0X3RlbCIsInJlcyIsInRoaXNfIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCIkaW52b2tlIiwiaXYiLCJ1bmRlZmluZWQiLCJsb2dpbl90ZWxudW1faXYiLCJsb2dpbl90ZWxudW1fbWl5YW8iLCJtaXlhbyIsInd4IiwiZ2V0U2V0dGluZyIsInN1Y2Nlc3MiLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiamF2YV9sb2dpbiIsInJlcXVlc3RfY3MiLCJmYWlsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsImFsZXJ0X3VzZXJpbmZvIiwiZGV0YWlsIiwiY2hhbmdDb2xvciIsInNldERhdGEiLCJrZXkiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCIkYXBwbHkiLCJjb25zb2xlIiwibG9nIiwienhrZl9idG4iLCJwYXJlbnRfZGF0YSIsImxlbmd0aCIsImFjY2Vzc190b2tlbiIsImNoZWNrcmVndHlwZSIsIm1hc2siLCJzaG93TG9hZGluZyIsImFyZSIsInJlcXVlc3QiLCJoaWRlTG9hZGluZyIsImNhcmxpc3QiLCJmbG9vcm5hbWUiLCJuYW1lIiwic2V0TmF2aWdhdGlvbkJhclRpdGxl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eUJEOzs7O0VBcE5vQzRCLGVBQUtDLEk7O2tCQUF2QmhGLFMiLCJmaWxlIjoibWlkYXV0dW1uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pZGF1dHVtbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJydcclxuICB9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+eZu+W9lVwifSxcImFsZXJ0X2xcIjp7XCJ0ZXh0X3poaVwiOlwi5Lic5q2j6YeR6J6N6K+35rGC5o6I5p2D5omL5py65Y+3XCJ9fTtcclxuJGV2ZW50cyA9IHtcInVzZXJpbmZvX2FsZXJ0XCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF91c2VyaW5mb1wifSxcImFsZXJ0X2xcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImFsZXJ0X3RlbFwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgdXNlcmluZm9fYWxlcnQ6IFVzZXJpbmZvX2FsZXJ0LFxyXG4gICAgYWxlcnRfbDogQWxlcnRcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgdXJsX2xpbms6ICcnLFxyXG4gICAgY2FybW9kZWw6ICcnLFxyXG4gICAgLy8g6aG26YOo5Zu+54mHXHJcbiAgICB0b3BpbWd1cmw6ICcnLFxyXG4gICAgLy8g6L2m5Z6L5pWw5o2uXHJcbiAgICB6aGk6IFtdLFxyXG4gICAgLy8g6K+35rGC5Z+f5ZCNXHJcbiAgICBqc29uX2xpbms6ICcnLFxyXG4gICAgLy8g5qW85bGC5ZCN56ewXHJcbiAgICBmbG9vck5hbWU6ICcnLFxyXG4gICAgLy8g5p+l55yL5pu05aSaXHJcbiAgICBsb29rYXRtb3JlOiAnJyxcclxuICAgIGNhcnR5cGU6ICcnXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL21pZGF1dHVtbj9hY3Rpdml0eWlkPScgKyB0aGlzLmFjdGl2aXR5aWRcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDmn6XnnIvmm7TlpJpcclxuICAgIGdlbmdkKGUpIHtcclxuICAgICAgaWYgKGUgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgJ3NvdXN1bz9jYXJwcmljZXNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJyArXHJcbiAgICAgICAgICAgICcmZG93bnBheW1lbnRzZWN0aW9uPScgK1xyXG4gICAgICAgICAgICAnMCcgK1xyXG4gICAgICAgICAgICAnJm1vbnRobHlzdXBwbHlzZWN0aW9uPScgK1xyXG4gICAgICAgICAgICAnMCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZSA9PSAxKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOiAndGlleGknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUgPT0gMikge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgIHVybDogJ3Byb2R1Y3RzJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlID09IDMpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICB1cmw6ICdzdHJhaWdodCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsZXJ0X3RlbChyZXMpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IHpoaSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgZmFsc2UpO1xyXG5cclxuICAgICAgaWYgKHJlcy5pdiA9PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9pdiA9IHJlcy5pdjtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9taXlhbyA9IHJlcy5taXlhbztcclxuICAgICAgLy8g5p+l55yL5piv5ZCm5o6I5p2DXHJcbiAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHpoaS5qYXZhX2xvZ2luKHJlcywgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWxlcnRfdXNlcmluZm8oZSkge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgZmFsc2UpO1xyXG4gICAgICB6aGkuamF2YV9sb2dpbihlLmRldGFpbCwgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdDb2xvcihlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAga2V5OiBlLnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnpoaSA9IGUudGFyZ2V0LmRhdGFzZXQuemhpO1xyXG4gICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZGF0YXNldC56aGkpXHJcbiAgICB9LFxyXG4gICAgLy8g5o+Q5LqkXHJcbiAgICB6eGtmX2J0bigpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgdGhpcy5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBpZiAodGhpc18uemhpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnICYmXHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gdW5kZWZpbmVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzXy5jaGVja3JlZ3R5cGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgICAgdGhpc18ucmVxdWVzdF9jcyA9IGZ1bmN0aW9uKGFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzXy5jaGVja3JlZ3R5cGUoKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeS6p+WTgScsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZChyZXMpIHtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIGxldCBhY3Rpdml0eWlkID0gcmVzLmFjdGl2aXR5aWQ7XHJcbiAgICB0aGlzLmFjdGl2aXR5aWQgPSBhY3Rpdml0eWlkO1xyXG4gICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAvLyDlrprkuYl1cmxcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICBhcmUuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vIOa0u+WKqOaooeadv1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2FjdGl2aXR5L3RlbXBsYXRlJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5aWQ6IGFjdGl2aXR5aWRcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgIGFyZS5jYXJtb2RlbCA9IGRhdGEuZGF0YS5kYXRhLmNhcmxpc3Q7XHJcbiAgICAgICAgYXJlLnRvcGltZ3VybCA9IGRhdGEuZGF0YS5kYXRhLnRvcGltZ3VybDtcclxuICAgICAgICBhcmUuZmxvb3JOYW1lID0gZGF0YS5kYXRhLmRhdGEuZmxvb3JuYW1lO1xyXG4gICAgICAgIGFyZS5uYW1lID0gZGF0YS5kYXRhLmRhdGEubmFtZTtcclxuICAgICAgICBhcmUubG9va2F0bW9yZSA9IGRhdGEuZGF0YS5kYXRhLmxvb2thdG1vcmU7XHJcbiAgICAgICAgYXJlLmZsb29yTmFtZSA9IGRhdGEuZGF0YS5kYXRhLmZsb29ybmFtZTtcclxuICAgICAgICBhcmUuY2FydHlwZSA9IGRhdGEuZGF0YS5kYXRhLmNhcnR5cGU7XHJcblxyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICB0aXRsZTogYXJlLm5hbWUgLy/pobXpnaLmoIfpopjkuLrot6/nlLHlj4LmlbBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyDmuIXmjonotLfmrL7mj5DkuqTorqLljZXmjqXlj6PkuKTkuKrlj4LmlbDnmoTlgLxcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNvdXJjZSA9IDA7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zb3VyY2VpZCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgLy8g5Yik5pat5paw6ICB55So5oi3XHJcbiAgY2hlY2tyZWd0eXBlKCkge1xyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICB0aGlzLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDpcclxuICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICcvYXBpL3d4YXBwL3VzZXJpbmZvL2NoZWNrcmVndHlwZT9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuZGF0YSA9PSAnb2xkJykge1xyXG4gICAgICAgICAgdGhpc18uJG5hdmlnYXRlKCdwZXJzb25hbCcsIHRoaXNfLnpoaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnYWN0aXZpdGllcycsIHRoaXNfLnpoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=