'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var testMixin = function (_wepy$mixin) {
  _inherits(testMixin, _wepy$mixin);

  function testMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, testMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = testMixin.__proto__ || Object.getPrototypeOf(testMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      mixin: 'This is mixin data.'
    }, _this.methods = {
      tap: function tap(getCoupon) {
        getCoupon();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(testMixin, [{
    key: 'java_login',
    value: function java_login(e, hanshu) {
      var this_ = this.$parent.globalData;
      this_.logining = true;
      console.log(e);
      wx.login({
        success: function success(res) {
          if (res.code) {
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
                  if (data.data.code == 'A00006') {
                    wx.showToast({
                      title: '登录成功！',
                      icon: 'success'
                    });
                    this_.access_token = data.data.access_token;
                    this_.optionid = data.data.optionid;
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
                  console.log('授权15');
                  if (data.data.code == 'A00006') {
                    wx.showToast({
                      title: '登录成功！',
                      icon: 'success'
                    });
                    this_.access_token = data.data.access_token;
                    var _access_token = data.data.access_token;
                    this_.optionid = data.data.optionid;
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
    }
  }, {
    key: 'tap',
    value: function tap(getCoupon) {
      return getCoupon();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('mixin onShow');
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      console.log('mixin onLoad');
    }
  }]);

  return testMixin;
}(_wepy2.default.mixin);

exports.default = testMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsidGVzdE1peGluIiwiZGF0YSIsIm1peGluIiwibWV0aG9kcyIsInRhcCIsImdldENvdXBvbiIsImUiLCJoYW5zaHUiLCJ0aGlzXyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibG9naW5pbmciLCJjb25zb2xlIiwibG9nIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiYXV0aGlkIiwiYXV0aHNlY3JldCIsIm1waWQiLCJtb2R1bGVpZCIsImpzY29kZSIsIml2IiwiZW5jcnlwdGVkRGF0YSIsImNvbnZlcnRtcGlkIiwidGVsbnVtZGF0YSIsImxvZ2luX3RlbG51bV9taXlhbyIsInRlbG51bWl2IiwibG9naW5fdGVsbnVtX2l2IiwicGhvbmVicmFuZCIsImxvZ2luX3Bob25lYnJhbmQiLCJwaG9uZW1vZGVsIiwibG9naW5fcGhvbmVtb2RlbCIsInN5c3RlbSIsImxvZ2luX3N5c3RlbSIsInBsYXRmb3JtIiwibG9naW5fcGxhdGZvcm0iLCJuZXR3b3JrIiwibG9naW5fbmV0d29yayIsImxhdCIsImxvZ2luX2xhdCIsImxuZyIsImxvZ2luX2xuZyIsImNvdW50cnkiLCJhZGRyZXNzQ29tcG9uZW50IiwiY2l0eSIsInByb3ZpbmNlIiwidXNlcmlkIiwicmVxdWVzdCIsInVybCIsImpzb25fbGluayIsIm1ldGhvZCIsImhlYWRlciIsIndpdGhhdXRoZGF0YSIsInJlZmVyZWUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJhY2Nlc3NfdG9rZW4iLCJvcHRpb25pZCIsInR5cGUiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm1UZXh0IiwiY29uZmlybSIsInNlbmRmbGFnIiwiY2FuY2VsIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTztBQURGLEssUUFH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QUNKbUUsOENBQVU7QUFETixtQ0FGRztBQUtUcEQsMkNBQVMsaUJBQVNmLElBQVQsRUFBZSxDQUN2QjtBQU5RLGlDQUFYO0FBUUQ7QUFDRjtBQTFCVSwyQkFBYjtBQTRCRDtBQUNEO0FBQ0E7QUFFRDtBQS9EUSxxQkFBWDtBQWtFRCxtQkF6RkQsTUF5Rk87QUFDTGEsdUJBQUcyQyxTQUFILENBQWE7QUFDWEMsNkJBQU8sT0FESTtBQUVYQyw0QkFBTTtBQUZLLHFCQUFiO0FBSUQ7QUFDRG5ELHdCQUFNRyxRQUFOLEdBQWlCLEtBQWpCO0FBQ0Q7QUE3SFEsZUFBWDtBQStIRDtBQUVGLFdBeFJELE1Bd1JPO0FBQ0xDLG9CQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBTCxrQkFBTUcsUUFBTixHQUFpQixLQUFqQjtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRDtBQUNGO0FBL1JNLE9BQVQ7QUFpU0Q7Ozt3QkFFSVIsUyxFQUFXO0FBQ2QsYUFBT0EsV0FBUDtBQUNEOzs7NkJBRVE7QUFDUE8sY0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDRDs7OzZCQUVRO0FBQ1BELGNBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0Q7Ozs7RUExVG9DeUQsZUFBS3BFLEs7O2tCQUF2QkYsUyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xyXG4gIGRhdGEgPSB7XHJcbiAgICBtaXhpbjogJ1RoaXMgaXMgbWl4aW4gZGF0YS4nXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YXAgKGdldENvdXBvbikge1xyXG4gICAgICBnZXRDb3Vwb24oKTtcclxuICAgIH1cclxuICB9XHJcbiAgamF2YV9sb2dpbihlLCBoYW5zaHUpIHtcclxuICAgIGxldCB0aGlzXyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgdGhpc18ubG9naW5pbmcgPSB0cnVlO1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICBsZXQgYXV0aGlkID0gJ2Rvbmd6aGVuZyc7XHJcbiAgICAgICAgICBsZXQgYXV0aHNlY3JldCA9ICdkb25nemhlbmcnO1xyXG4gICAgICAgICAgbGV0IG1waWQgPSAnRFoyMDE4JztcclxuICAgICAgICAgIGxldCBtb2R1bGVpZCA9ICcyY2JiMmZhMTQyNzk0ODY0OTlkZTIwYzk3MWVmOTZkMSc7XHJcbiAgICAgICAgICBsZXQganNjb2RlID0gcmVzLmNvZGU7XHJcbiAgICAgICAgICBsZXQgaXYgPSBlLml2O1xyXG4gICAgICAgICAgbGV0IGVuY3J5cHRlZERhdGEgPSBlLmVuY3J5cHRlZERhdGE7XHJcbiAgICAgICAgICBsZXQgY29udmVydG1waWQgPSAnRFoyMDE4JztcclxuICAgICAgICAgIC8vIOaJi+acuuWPguaVsFxyXG4gICAgICAgICAgbGV0IHRlbG51bWRhdGEgPSB0aGlzXy5sb2dpbl90ZWxudW1fbWl5YW87XHJcbiAgICAgICAgICBsZXQgdGVsbnVtaXYgPSB0aGlzXy5sb2dpbl90ZWxudW1faXY7XHJcbiAgICAgICAgICBsZXQgcGhvbmVicmFuZCA9IHRoaXNfLmxvZ2luX3Bob25lYnJhbmQ7XHJcbiAgICAgICAgICBsZXQgcGhvbmVtb2RlbCA9IHRoaXNfLmxvZ2luX3Bob25lbW9kZWw7XHJcbiAgICAgICAgICBsZXQgc3lzdGVtID0gdGhpc18ubG9naW5fc3lzdGVtO1xyXG4gICAgICAgICAgbGV0IHBsYXRmb3JtID0gdGhpc18ubG9naW5fcGxhdGZvcm07XHJcbiAgICAgICAgICBsZXQgbmV0d29yayA9IHRoaXNfLmxvZ2luX25ldHdvcms7XHJcbiAgICAgICAgICBsZXQgbGF0ID0gdGhpc18ubG9naW5fbGF0O1xyXG4gICAgICAgICAgbGV0IGxuZyA9IHRoaXNfLmxvZ2luX2xuZztcclxuICAgICAgICAgIGxldCAgY291bnRyeT0gdGhpc18uYWRkcmVzc0NvbXBvbmVudC5jb3VudHJ5Oy8v6L+HXHJcbiAgICAgICAgICBsZXQgY2l0eSA9IHRoaXNfLmFkZHJlc3NDb21wb25lbnQuY2l0eTtcclxuICAgICAgICAgIGxldCBwcm92aW5jZSA9IHRoaXNfLmFkZHJlc3NDb21wb25lbnQucHJvdmluY2U7XHJcbiAgICAgICAgICBsZXQgdXNlcmlkPXRoaXNfLnVzZXJpZFxyXG4gICAgICAgICAgaWYodXNlcmlkIT0nJyl7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvdXNlci9sb2dpbicsXHJcbiAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGpzY29kZToganNjb2RlLFxyXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YTogZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgICAgIGl2OiBpdixcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRtcGlkOiBjb252ZXJ0bXBpZCxcclxuICAgICAgICAgICAgICAgIG1waWQ6IG1waWQsXHJcbiAgICAgICAgICAgICAgICBhdXRoaWQ6IGF1dGhpZCxcclxuICAgICAgICAgICAgICAgIGF1dGhzZWNyZXQ6IGF1dGhzZWNyZXQsXHJcbiAgICAgICAgICAgICAgICBtb2R1bGVpZDogbW9kdWxlaWQsXHJcbiAgICAgICAgICAgICAgICB3aXRoYXV0aGRhdGE6IDAsXHJcbiAgICAgICAgICAgICAgICB0ZWxudW1kYXRhOiB0ZWxudW1kYXRhLFxyXG4gICAgICAgICAgICAgICAgdGVsbnVtaXY6IHRlbG51bWl2LFxyXG4gICAgICAgICAgICAgICAgcGhvbmVicmFuZDogcGhvbmVicmFuZCxcclxuICAgICAgICAgICAgICAgIHBob25lbW9kZWw6IHBob25lbW9kZWwsXHJcbiAgICAgICAgICAgICAgICBzeXN0ZW06IHN5c3RlbSxcclxuICAgICAgICAgICAgICAgIHBsYXRmb3JtOiBwbGF0Zm9ybSxcclxuICAgICAgICAgICAgICAgIG5ldHdvcms6IG5ldHdvcmssXHJcbiAgICAgICAgICAgICAgICBsYXQ6IGxhdCxcclxuICAgICAgICAgICAgICAgIGxuZzogbG5nLFxyXG4gICAgICAgICAgICAgICAgY291bnRyeTpjb3VudHJ5LFxyXG4gICAgICAgICAgICAgICAgY2l0eTpjaXR5LFxyXG4gICAgICAgICAgICAgICAgcHJvdmluY2U6cHJvdmluY2UsXHJcbiAgICAgICAgICAgICAgICByZWZlcmVlOnVzZXJpZFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09ICdBMDAwMDYnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip/vvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uYWNjZXNzX3Rva2VuID0gZGF0YS5kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgICAgICAgICAgdGhpc18ub3B0aW9uaWQgPSBkYXRhLmRhdGEub3B0aW9uaWQ7XHJcbiAgICAgICAgICAgICAgICAgIGhhbnNodSh0aGlzXy5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL3VzZXJpbmZvL2RldGFpbD9hY2Nlc3NfdG9rZW49JyArZGF0YS5kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggZGF0YS5kYXRhLmRhdGEudXNlcmlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18udXNlcmlkPWRhdGEuZGF0YS5kYXRhLnVzZXJpZDtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8g6aKG5Y+WXHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkaW5mbz9hY2Nlc3NfdG9rZW49JyArZGF0YS5kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhLmRhdGEudHlwZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDpooblj5ZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmRhdGEuZGF0YS50eXBlPT0tMSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEuZGF0YS5kYXRhLnR5cGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBkYXRhLmRhdGEuZGF0YS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkP2FjY2Vzc190b2tlbj0nICthY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZmxhZzogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlICBpZihkYXRhLmRhdGEuZGF0YS50eXBlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5kYXRhLmRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0Olwi6aKG5Y+WXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkP2FjY2Vzc190b2tlbj0nICthY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZmxhZzogMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRmbGFnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKXvvIEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXNfLmxvZ2luaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL3VzZXIvbG9naW4nLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBqc2NvZGU6IGpzY29kZSxcclxuICAgICAgICAgICAgICAgIGVuY3J5cHRlZERhdGE6IGVuY3J5cHRlZERhdGEsXHJcbiAgICAgICAgICAgICAgICBpdjogaXYsXHJcbiAgICAgICAgICAgICAgICBjb252ZXJ0bXBpZDogY29udmVydG1waWQsXHJcbiAgICAgICAgICAgICAgICBtcGlkOiBtcGlkLFxyXG4gICAgICAgICAgICAgICAgYXV0aGlkOiBhdXRoaWQsXHJcbiAgICAgICAgICAgICAgICBhdXRoc2VjcmV0OiBhdXRoc2VjcmV0LFxyXG4gICAgICAgICAgICAgICAgbW9kdWxlaWQ6IG1vZHVsZWlkLFxyXG4gICAgICAgICAgICAgICAgd2l0aGF1dGhkYXRhOiAwLFxyXG4gICAgICAgICAgICAgICAgdGVsbnVtZGF0YTogdGVsbnVtZGF0YSxcclxuICAgICAgICAgICAgICAgIHRlbG51bWl2OiB0ZWxudW1pdixcclxuICAgICAgICAgICAgICAgIHBob25lYnJhbmQ6IHBob25lYnJhbmQsXHJcbiAgICAgICAgICAgICAgICBwaG9uZW1vZGVsOiBwaG9uZW1vZGVsLFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtOiBzeXN0ZW0sXHJcbiAgICAgICAgICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm0sXHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrOiBuZXR3b3JrLFxyXG4gICAgICAgICAgICAgICAgbGF0OiBsYXQsXHJcbiAgICAgICAgICAgICAgICBsbmc6IGxuZyxcclxuICAgICAgICAgICAgICAgIGNvdW50cnk6Y291bnRyeSxcclxuICAgICAgICAgICAgICAgIGNpdHk6Y2l0eSxcclxuICAgICAgICAgICAgICAgIHByb3ZpbmNlOnByb3ZpbmNlXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DMTUnKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5oiQ5Yqf77yBJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXNfLmFjY2Vzc190b2tlbiA9IGRhdGEuZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW49ZGF0YS5kYXRhLmFjY2Vzc190b2tlblxyXG4gICAgICAgICAgICAgICAgICB0aGlzXy5vcHRpb25pZCA9IGRhdGEuZGF0YS5vcHRpb25pZDtcclxuICAgICAgICAgICAgICAgICAgaGFuc2h1KHRoaXNfLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvdXNlcmluZm8vZGV0YWlsP2FjY2Vzc190b2tlbj0nICtkYXRhLmRhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCBkYXRhLmRhdGEuZGF0YS51c2VyaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzXy51c2VyaWQ9ZGF0YS5kYXRhLmRhdGEudXNlcmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaIkOWKn2Fk77yBJylcclxuICAgICAgICAgICAgICAgICAgLy8g6aKG5Y+WXHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICAgICAgICAgIHVybDogdGhpc18uanNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2FyZC9sb2dpbnNlbmRjYXJkaW5mbz9hY2Nlc3NfdG9rZW49JyArZGF0YS5kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyDpooblj5ZcclxuICAgICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuZGF0YS5kYXRhLnR5cGU9PS0xKXtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihkYXRhLmRhdGEuZGF0YS50eXBlPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogZGF0YS5kYXRhLmRhdGEudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6XCLpooblj5ZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcmQvbG9naW5zZW5kY2FyZD9hY2Nlc3NfdG9rZW49JyArYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRmbGFnOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSAgaWYoZGF0YS5kYXRhLmRhdGEudHlwZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGRhdGEuZGF0YS5kYXRhLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRleHQ6XCLpooblj5ZcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXNfLmpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcmQvbG9naW5zZW5kY2FyZD9hY2Nlc3NfdG9rZW49JyArYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRmbGFnOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzXy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJkL2xvZ2luc2VuZGNhcmQ/YWNjZXNzX3Rva2VuPScgK2FjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kZmxhZzogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyDmj5DnpLpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSl77yBJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzXy5sb2dpbmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DMTMnKTtcclxuICAgICAgICAgIHRoaXNfLmxvZ2luaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5aSx6LSl77yB77yB77yBJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB0YXAgKGdldENvdXBvbikge1xyXG4gICAgcmV0dXJuIGdldENvdXBvbigpO1xyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc29sZS5sb2coJ21peGluIG9uU2hvdycpXHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnbWl4aW4gb25Mb2FkJylcclxuICB9XHJcbn1cclxuIl19