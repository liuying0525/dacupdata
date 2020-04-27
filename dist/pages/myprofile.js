'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myprofile = function (_wepy$page) {
  _inherits(myprofile, _wepy$page);

  function myprofile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, myprofile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myprofile.__proto__ || Object.getPrototypeOf(myprofile)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的资料'
    }, _this.components = {}, _this.data = {
      parent_data: '',
      url_link: '',
      imgUrl: null,
      index: 1,
      selectPersons: false,
      d: true,
      text: '',
      //合同手机号隐藏一部分显示
      htPhoneHide: '',
      // 手机号隐藏一部分显示
      phoneHide: '',
      // 身份证号隐藏一部分显示
      cardHide: '',
      avatarurl: '',
      sex: '未知'
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },

      // 修改手机号
      change: function change(e) {
        wx.navigateTo({
          url: 'change?currentPhone=' + this.text.telnum
        });
      },

      // 修改合同手机号
      changeHt: function changeHt() {
        if (this.$parent.globalData.login_token != '') {
          this.$navigate('phonePerson', { type: true });
        } else {
          this.$navigate('secLogin', { backUrl: 'phonePerson' });
        }
      },

      // 切换头像
      setPhotoInfo: function setPhotoInfo(e) {
        var that = this;
        var json_link = this.$parent.globalData.json_link;
        var access_token = that.$parent.globalData.access_token;
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            that.avatarurl = tempFilePaths;
            wx.uploadFile({
              url: json_link + '/m/mexpress/upload?access_token=' + access_token,
              filePath: tempFilePaths[0],
              name: 'upload',
              success: function success(res) {
                var avatarurl = JSON.parse(res.data).imageurl;
                that.avatarurl = avatarurl;
                wx.request({
                  // 更换头像
                  url: json_link + '/api/wxapp/userinfo/heelchangeimage?access_token=' + access_token,
                  data: {
                    image: avatarurl
                  },
                  // 后台返回值
                  success: function success(data) {
                    setTimeout(function () {
                      wx.hideLoading();
                    }, 0);
                  }
                });
                that.$apply();
              },
              fail: function fail(res) {
                console.log('fail');
              }
            });
          }
        });
      },

      // 点击图片
      clickImage: function clickImage() {
        var that = this;
        var access_token = that.$parent.globalData.access_token;
        var url_link = that.url_link;
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            that.head_url = tempFilePaths[0];
            wx.uploadFile({
              url: url_link + '/account/upload?access_token=' + access_token,
              filePath: tempFilePaths[0],
              name: 'upload',
              success: function success(res) {
                that.head_url = JSON.parse(res.data).imageurl;
                that.$apply();
              }
            });
          }
        });
      },

      // 退出登录
      logout: function logout() {
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        var optionid = this.$parent.globalData.optionid;
        this.$parent.globalData.access_token = '';
        var that = this;
        wx.request({
          url: parent_data.json_dhLink + '/user/logout',
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          data: {
            userId: that.parent_data.login_userId,
            loginToken: that.parent_data.login_token
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.$parent.globalData.login_userId = '';
              that.$parent.globalData.login_token = '';
              that.$parent.globalData.login_idCard = '';
              that.$parent.globalData.login_name = '';
              that.$parent.globalData.login_phone = '';
              wx.reLaunch({
                url: 'my'
              });
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(myprofile, [{
    key: 'onShow',
    value: function onShow() {
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      this.parent_data = this.$parent.globalData;
      wx.getSetting({
        success: function success(data) {
          console.log('获取setting信息，看是否授权userinfo');
          if (data.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(datas) {
                this_.avatarurl = datas.userInfo.avatarUrl;
                this_.sex = datas.userInfo.gender;
                this_.loginData = true;
                this_.$apply();
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
      // 用户信息
      // wx.request({
      //   url:
      //     parent_data.json_link +
      //     '/api/wxapp/userinfo/detail?access_token=' +
      //     parent_data.access_token,
      //   data: {},
      //   success(data) {
      //     setTimeout(function() {
      //       wx.hideLoading();
      //     }, 0);
      //     this_.text = data.data.data;
      //     this_.avatarurl = data.data.data.avatarurl;
      //     this_.phoneHide =
      //       this_.text.telnum.slice(0, 3) +
      //       '****' +
      //       this_.text.telnum.slice(7, 11);
      //     this_.htPhoneHide =
      //       this_.$parent.globalData.login_phone.slice(0, 3) +
      //       '****' +
      //       this_.$parent.globalData.login_phone.slice(7, 11);
      //     this_.cardHide =
      //       this_.text.idnumber.slice(0, 6) +
      //       '*****' +
      //       this_.text.idnumber.slice(15, 18);
      //     if (data.data.data.sex == 1) {
      //       this_.sex = '男';
      //     } else if (data.data.data.sex == 2) {
      //       this_.sex = '女';
      //     } else {
      //       this_.sex = '未知';
      //     }
      //     // 给数据进行绑定
      //     this_.$apply();
      //   }
      // });
    }
  }]);

  return myprofile;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(myprofile , 'pages/myprofile'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15cHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJteXByb2ZpbGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJwYXJlbnRfZGF0YSIsInVybF9saW5rIiwiaW1nVXJsIiwiaW5kZXgiLCJzZWxlY3RQZXJzb25zIiwiZCIsInRleHQiLCJodFBob25lSGlkZSIsInBob25lSGlkZSIsImNhcmRIaWRlIiwiYXZhdGFydXJsIiwic2V4IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImNoYW5nZSIsImUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0ZWxudW0iLCJjaGFuZ2VIdCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibG9naW5fdG9rZW4iLCIkbmF2aWdhdGUiLCJ0eXBlIiwiYmFja1VybCIsInNldFBob3RvSW5mbyIsInRoYXQiLCJqc29uX2xpbmsiLCJhY2Nlc3NfdG9rZW4iLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsImltYWdldXJsIiwicmVxdWVzdCIsImltYWdlIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiJGFwcGx5IiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJjbGlja0ltYWdlIiwiaGVhZF91cmwiLCJsb2dvdXQiLCJvcHRpb25pZCIsImpzb25fZGhMaW5rIiwiaGVhZGVyIiwibWV0aG9kIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImNvZGUiLCJsb2dpbl9pZENhcmQiLCJsb2dpbl9uYW1lIiwibG9naW5fcGhvbmUiLCJyZUxhdW5jaCIsInRoaXNfIiwiZ2V0U2V0dGluZyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJkYXRhcyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiZ2VuZGVyIiwibG9naW5EYXRh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LGFBQWY7QUFRRCxXQVZELE1BVU87QUFDTG1CLGtCQUFNUyxPQUFOLENBQWMsZ0JBQWQsRUFBZ0MsT0FBaEMsRUFBeUMsSUFBekM7QUFDRDtBQUNGLFNBaEJXO0FBaUJaM0IsY0FBTSxnQkFBVztBQUNmOUIsYUFBRzBELFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxNQURJO0FBRVhDLGtCQUFNO0FBRkssV0FBYjs7QUFLQWpDLHFCQUFXLFlBQVc7QUFDcEIzQixlQUFHNkQsU0FBSDtBQUNELFdBRkQsRUFFRyxJQUZIO0FBR0E7QUFDRDtBQTNCVyxPQUFkO0FBNkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7O0VBOU1vQ0MsZUFBS0MsSTs7a0JBQXZCckYsUyIsImZpbGUiOiJteXByb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBteXByb2ZpbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTotYTmlpknXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIHBhcmVudF9kYXRhOicnLFxyXG4gICAgdXJsX2xpbms6ICcnLFxyXG4gICAgaW1nVXJsOiBudWxsLFxyXG4gICAgaW5kZXg6IDEsXHJcbiAgICBzZWxlY3RQZXJzb25zOiBmYWxzZSxcclxuICAgIGQ6IHRydWUsXHJcbiAgICB0ZXh0OiAnJyxcclxuICAgIC8v5ZCI5ZCM5omL5py65Y+36ZqQ6JeP5LiA6YOo5YiG5pi+56S6XHJcbiAgICBodFBob25lSGlkZTogJycsXHJcbiAgICAvLyDmiYvmnLrlj7fpmpDol4/kuIDpg6jliIbmmL7npLpcclxuICAgIHBob25lSGlkZTogJycsXHJcbiAgICAvLyDouqvku73or4Hlj7fpmpDol4/kuIDpg6jliIbmmL7npLpcclxuICAgIGNhcmRIaWRlOiAnJyxcclxuICAgIGF2YXRhcnVybDogJycsXHJcbiAgICBzZXg6ICfmnKrnn6UnXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDkv67mlLnmiYvmnLrlj7dcclxuICAgIGNoYW5nZShlKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ2NoYW5nZT9jdXJyZW50UGhvbmU9JyArIHRoaXMudGV4dC50ZWxudW1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5L+u5pS55ZCI5ZCM5omL5py65Y+3XHJcbiAgICBjaGFuZ2VIdCAoKSB7XHJcbiAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl90b2tlbiAhPSAnJykge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCdwaG9uZVBlcnNvbicsIHt0eXBlOiB0cnVlfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3NlY0xvZ2luJywge2JhY2tVcmw6ICdwaG9uZVBlcnNvbid9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWIh+aNouWktOWDj1xyXG4gICAgc2V0UGhvdG9JbmZvKGUpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgYWNjZXNzX3Rva2VuID0gdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgdGhhdC5hdmF0YXJ1cmwgPSB0ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9tL21leHByZXNzL3VwbG9hZD9hY2Nlc3NfdG9rZW49JyArIGFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgICAgICAgIG5hbWU6ICd1cGxvYWQnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBsZXQgYXZhdGFydXJsID0gSlNPTi5wYXJzZShyZXMuZGF0YSkuaW1hZ2V1cmw7XHJcbiAgICAgICAgICAgICAgdGhhdC5hdmF0YXJ1cmwgPSBhdmF0YXJ1cmw7XHJcbiAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAvLyDmm7TmjaLlpLTlg49cclxuICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAganNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvdXNlcmluZm8vaGVlbGNoYW5nZWltYWdlP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBpbWFnZTogYXZhdGFydXJsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWwnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vlm77niYdcclxuICAgIGNsaWNrSW1hZ2UoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgbGV0IHVybF9saW5rID0gdGhhdC51cmxfbGluaztcclxuICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgdmFyIHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgIHRoYXQuaGVhZF91cmwgPSB0ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIHVybDogdXJsX2xpbmsgKyAnL2FjY291bnQvdXBsb2FkP2FjY2Vzc190b2tlbj0nICsgYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgbmFtZTogJ3VwbG9hZCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIHRoYXQuaGVhZF91cmwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKS5pbWFnZXVybDtcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgbGV0IG9wdGlvbmlkID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEub3B0aW9uaWQ7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmFjY2Vzc190b2tlbiA9ICcnO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogcGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL3VzZXIvbG9nb3V0JyxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl91c2VySWQgPSAnJztcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fdG9rZW4gPSAnJztcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5faWRDYXJkID0gJyc7XHJcbiAgICAgICAgICAgIHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX25hbWUgPSAnJztcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fcGhvbmUgPSAnJztcclxuICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogJ215J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG9uU2hvdygpIHtcclxuICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+Wc2V0dGluZ+S/oeaBr++8jOeci+aYr+WQpuaOiOadg3VzZXJpbmZvJyk7XHJcbiAgICAgICAgaWYgKGRhdGEuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YXMpIHtcclxuICAgICAgICAgICAgICB0aGlzXy5hdmF0YXJ1cmwgPSBkYXRhcy51c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgdGhpc18uc2V4ID0gZGF0YXMudXNlckluZm8uZ2VuZGVyO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmxvZ2luRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIOeUqOaIt+S/oeaBr1xyXG4gICAgLy8gd3gucmVxdWVzdCh7XHJcbiAgICAvLyAgIHVybDpcclxuICAgIC8vICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgLy8gICAgICcvYXBpL3d4YXBwL3VzZXJpbmZvL2RldGFpbD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAvLyAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgLy8gICBkYXRhOiB7fSxcclxuICAgIC8vICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAvLyAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAvLyAgICAgfSwgMCk7XHJcbiAgICAvLyAgICAgdGhpc18udGV4dCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgLy8gICAgIHRoaXNfLmF2YXRhcnVybCA9IGRhdGEuZGF0YS5kYXRhLmF2YXRhcnVybDtcclxuICAgIC8vICAgICB0aGlzXy5waG9uZUhpZGUgPVxyXG4gICAgLy8gICAgICAgdGhpc18udGV4dC50ZWxudW0uc2xpY2UoMCwgMykgK1xyXG4gICAgLy8gICAgICAgJyoqKionICtcclxuICAgIC8vICAgICAgIHRoaXNfLnRleHQudGVsbnVtLnNsaWNlKDcsIDExKTtcclxuICAgIC8vICAgICB0aGlzXy5odFBob25lSGlkZSA9XHJcbiAgICAvLyAgICAgICB0aGlzXy4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fcGhvbmUuc2xpY2UoMCwgMykgK1xyXG4gICAgLy8gICAgICAgJyoqKionICtcclxuICAgIC8vICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9waG9uZS5zbGljZSg3LCAxMSk7XHJcbiAgICAvLyAgICAgdGhpc18uY2FyZEhpZGUgPVxyXG4gICAgLy8gICAgICAgdGhpc18udGV4dC5pZG51bWJlci5zbGljZSgwLCA2KSArXHJcbiAgICAvLyAgICAgICAnKioqKionICtcclxuICAgIC8vICAgICAgIHRoaXNfLnRleHQuaWRudW1iZXIuc2xpY2UoMTUsIDE4KTtcclxuICAgIC8vICAgICBpZiAoZGF0YS5kYXRhLmRhdGEuc2V4ID09IDEpIHtcclxuICAgIC8vICAgICAgIHRoaXNfLnNleCA9ICfnlLcnO1xyXG4gICAgLy8gICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmRhdGEuc2V4ID09IDIpIHtcclxuICAgIC8vICAgICAgIHRoaXNfLnNleCA9ICflpbMnO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICB0aGlzXy5zZXggPSAn5pyq55+lJztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAvLyAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=