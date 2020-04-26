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
      // 车列表
      carmodel: '',
      // 顶部图片
      topimgurl: '',
      zhi: '',
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
    // 判断新旧用户

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(midautumn , 'pages/midautumnn'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGF1dHVtbm4uanMiXSwibmFtZXMiOlsibWlkYXV0dW1uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInVzZXJpbmZvX2FsZXJ0IiwiVXNlcmluZm9fYWxlcnQiLCJhbGVydF9sIiwiQWxlcnQiLCJkYXRhIiwidXJsX2xpbmsiLCJjYXJtb2RlbCIsInRvcGltZ3VybCIsInpoaSIsImpzb25fbGluayIsImZsb29yTmFtZSIsImxvb2thdG1vcmUiLCJjYXJ0eXBlIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImFjdGl2aXR5aWQiLCJnZW5nZCIsImUiLCIkbmF2aWdhdGUiLCJ1cmwiLCJhbGVydF90ZWwiLCJyZXMiLCJ0aGlzXyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGludm9rZSIsIml2IiwidW5kZWZpbmVkIiwibG9naW5fdGVsbnVtX2l2IiwibG9naW5fdGVsbnVtX21peWFvIiwibWl5YW8iLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImphdmFfbG9naW4iLCJyZXF1ZXN0X2NzIiwiZmFpbCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJhbGVydF91c2VyaW5mbyIsImRldGFpbCIsImNoYW5nQ29sb3IiLCJzZXREYXRhIiwia2V5IiwidGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwienhrZl9idG4iLCJwYXJlbnRfZGF0YSIsImxlbmd0aCIsImFjY2Vzc190b2tlbiIsImNoZWNrcmVndHlwZSIsIm1hc2siLCJzaG93TG9hZGluZyIsImFyZSIsInJlcXVlc3QiLCJoaWRlTG9hZGluZyIsImNhcmxpc3QiLCJuYW1lIiwiZmxvb3JuYW1lIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGFwcGx5Iiwic291cmNlIiwic291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Q0EsV0FBSzNDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjJDLE1BQXhCLEdBQWlDLENBQWpDO0FBQ0EsV0FBSzVDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjRDLFFBQXhCLEdBQW1DLEVBQW5DO0FBQ0Q7QUFDRDs7OzttQ0FDZTtBQUNiLFVBQUk5QyxRQUFRLElBQVo7QUFDQSxVQUFJZCxZQUFZLEtBQUtlLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmhCLFNBQXhDO0FBQ0EsV0FBS0EsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFJNkMsY0FBYyxLQUFLOUIsT0FBTCxDQUFhQyxVQUEvQjtBQUNBTyxTQUFHNkIsT0FBSCxDQUFXO0FBQ1R6QyxhQUNFa0MsWUFBWTdDLFNBQVosR0FDQSxnREFEQSxHQUVBNkMsWUFBWUUsWUFKTDtBQUtUcEQsY0FBTSxFQUxHO0FBTVQ4QixpQkFBUyxpQkFBUzlCLElBQVQsRUFBZTtBQUN0QixjQUFJQSxLQUFLQSxJQUFMLENBQVVBLElBQVYsSUFBa0IsS0FBdEIsRUFBNkI7QUFDM0JtQixrQkFBTUosU0FBTixDQUFnQixVQUFoQixFQUE0QkksTUFBTWYsR0FBbEM7QUFDRCxXQUZELE1BRU87QUFDTGUsa0JBQU1KLFNBQU4sQ0FBZ0IsWUFBaEIsRUFBOEJJLE1BQU1mLEdBQXBDO0FBQ0Q7QUFDRixTQVpRO0FBYVQrQixjQUFNLGdCQUFXO0FBQ2ZQLGFBQUdRLFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxNQURJO0FBRVhDLGtCQUFNO0FBRkssV0FBYjs7QUFLQUMscUJBQVcsWUFBVztBQUNwQlgsZUFBR1ksU0FBSDtBQUNELFdBRkQsRUFFRyxJQUZIO0FBR0E7QUFDRDtBQXZCUSxPQUFYO0FBeUJEOzs7O0VBOU1vQzBCLGVBQUtDLEk7O2tCQUF2QjlFLFMiLCJmaWxlIjoibWlkYXV0dW1ubi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IFVzZXJpbmZvX2FsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcmluZm9fYWxlcnQnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtaWRhdXR1bW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXHJcbiAgfTtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlcmluZm9fYWxlcnRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPnmbvlvZVcIn0sXCJhbGVydF9sXCI6e1widGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+aJi+acuuWPt1wifX07XHJcbiRldmVudHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInYtb246Y2hpbGRGblwiOlwiYWxlcnRfdXNlcmluZm9cIn0sXCJhbGVydF9sXCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF90ZWxcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHVzZXJpbmZvX2FsZXJ0OiBVc2VyaW5mb19hbGVydCxcclxuICAgIGFsZXJ0X2w6IEFsZXJ0XHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHVybF9saW5rOiAnJyxcclxuICAgIC8vIOi9puWIl+ihqFxyXG4gICAgY2FybW9kZWw6ICcnLFxyXG4gICAgLy8g6aG26YOo5Zu+54mHXHJcbiAgICB0b3BpbWd1cmw6ICcnLFxyXG4gICAgemhpOiAnJyxcclxuICAgIGpzb25fbGluazogJycsXHJcbiAgICAvLyDmpbzlsYLlkI3np7BcclxuICAgIGZsb29yTmFtZTogJycsXHJcbiAgICAvLyDmn6XnnIvmm7TlpJpcclxuICAgIGxvb2thdG1vcmU6ICcnLFxyXG4gICAgY2FydHlwZTogJydcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvbWlkYXV0dW1uP2FjdGl2aXR5aWQ9JyArIHRoaXMuYWN0aXZpdHlpZFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOafpeeci+abtOWkmlxyXG4gICAgZ2VuZ2QoZSkge1xyXG4gICAgICBpZiAoZSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAnc291c3VvP2NhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZkb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJyArXHJcbiAgICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlID09IDEpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICB1cmw6ICd0aWV4aSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZSA9PSAyKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOiAncHJvZHVjdHMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUgPT0gMykge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgIHVybDogJ3N0cmFpZ2h0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWxlcnRfdGVsKHJlcykge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcblxyXG4gICAgICBpZiAocmVzLml2ID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX21peWFvID0gcmVzLm1peWFvO1xyXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XHJcbiAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgemhpLmphdmFfbG9naW4ocmVzLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhbGVydF91c2VyaW5mbyhlKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIHpoaS5qYXZhX2xvZ2luKGUuZGV0YWlsLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ0NvbG9yOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAga2V5OiBlLnRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnpoaSA9IGUudGFyZ2V0LmRhdGFzZXQuemhpO1xyXG4gICAgfSxcclxuICAgIC8vIOaPkOS6pFxyXG4gICAgenhrZl9idG4oKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIHRoaXMuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgaWYgKHRoaXNfLnpoaS5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSAnJyAmJlxyXG4gICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9IHVuZGVmaW5lZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpc18uY2hlY2tyZWd0eXBlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXNfLnJlcXVlc3RfY3MgPSBmdW5jdGlvbihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpc18uY2hlY2tyZWd0eXBlKCk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nkuqflk4EnLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Mb2FkKHJlcykge1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pO1xyXG4gICAgbGV0IGFjdGl2aXR5aWQgPSByZXMuYWN0aXZpdHlpZDtcclxuICAgIHRoaXMuYWN0aXZpdHlpZCA9IGFjdGl2aXR5aWQ7XHJcbiAgICBsZXQgYXJlID0gdGhpcztcclxuICAgIC8vIOWumuS5iXVybFxyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGFyZS5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLy8g5rS75Yqo5qih5p2/XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvYWN0aXZpdHkvdGVtcGxhdGUnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgYWN0aXZpdHlpZDogYWN0aXZpdHlpZFxyXG4gICAgICB9LFxyXG4gICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgYXJlLmNhcm1vZGVsID0gZGF0YS5kYXRhLmRhdGEuY2FybGlzdDtcclxuICAgICAgICBhcmUudG9waW1ndXJsID0gZGF0YS5kYXRhLmRhdGEudG9waW1ndXJsO1xyXG4gICAgICAgIGFyZS5uYW1lID0gZGF0YS5kYXRhLmRhdGEubmFtZTtcclxuICAgICAgICBhcmUubG9va2F0bW9yZSA9IGRhdGEuZGF0YS5kYXRhLmxvb2thdG1vcmU7XHJcbiAgICAgICAgYXJlLmZsb29yTmFtZSA9IGRhdGEuZGF0YS5kYXRhLmZsb29ybmFtZTtcclxuICAgICAgICBhcmUuY2FydHlwZSA9IGRhdGEuZGF0YS5kYXRhLmNhcnR5cGU7XHJcbiAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcclxuICAgICAgICAgIHRpdGxlOiBhcmUubmFtZSAvL+mhtemdouagh+mimOS4uui3r+eUseWPguaVsFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgLy8g5riF5o6J6LS35qy+5o+Q5Lqk6K6i5Y2V5o6l5Y+j5Lik5Liq5Y+C5pWw55qE5YC8XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zb3VyY2UgPSAwO1xyXG4gICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc291cmNlaWQgPSAnJztcclxuICB9XHJcbiAgLy8g5Yik5pat5paw5pen55So5oi3XHJcbiAgY2hlY2tyZWd0eXBlKCkge1xyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICB0aGlzLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDpcclxuICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICcvYXBpL3d4YXBwL3VzZXJpbmZvL2NoZWNrcmVndHlwZT9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICBkYXRhOiB7fSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuZGF0YSA9PSAnb2xkJykge1xyXG4gICAgICAgICAgdGhpc18uJG5hdmlnYXRlKCdwZXJzb25hbCcsIHRoaXNfLnpoaSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnYWN0aXZpdGllcycsIHRoaXNfLnpoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=