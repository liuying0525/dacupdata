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

var change = function (_wepy$page) {
  _inherits(change, _wepy$page);

  function change() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, change);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = change.__proto__ || Object.getPrototypeOf(change)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改手机号'
    }, _this.data = {
      url_link: '',
      // 输入的手机号
      code: '',
      // 输入的验证码
      password: '',
      // 倒计时值
      second: '60',
      clear_time: null,
      second_show: false,
      // 当前手机号
      currentPhone: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 输入手机号
      userNameInput: function userNameInput(e) {
        this.code = e.detail.value;
      },

      // 输入验证码
      passWdInput: function passWdInput(e) {
        this.password = e.detail.value;
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
          },
          fail: function fail() {
            wx.showToast({
              title: '网络异常',
              icon: 'none'
              // duration: 10000
            });

            setTimeout(function () {
              wx.hideToast();
            }, 2000);
            return;
          }
        });
      },

      // 确认修改
      formSubmit: function formSubmit(e) {
        //点击登录时，调用的函数

        var data = e.detail.value; //获取提交from的json数据

        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; //手机正则式
        if (!this.code) {
          wx.showToast({
            title: '请先填写手机号',
            mask: true
          });
          return false;
        }
        if (!this.password) {
          wx.showToast({
            title: '请填写验证码'
          });
          return false;
        }

        if (!myreg.test(data.code)) {
          //验证手机号

          wx.showToast({
            title: '手机号有误！',
            icon: 'none'
          });

          return false;
        } else {
          // wx.showLoading({
          //   title: '修改中'
          // });
          var this_ = this;
          var json_link = this.$parent.globalData.json_link;
          var parent_data = this.$parent.globalData;
          if (parent_data.access_token != '') {
            wx.request({
              url: parent_data.json_link + '/api/wxapp/userinfo/updatenum?access_token=' + parent_data.access_token,
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: {
                mobile: this_.data.code,
                identifyingcode: this_.data.password
              },
              success: function success(data) {
                // wx.hideLoading();
                this_.text = data.data.data;
                if (data.data.code === 'A00006') {
                  wx.showToast({
                    title: '修改成功',
                    icon: 'success',
                    duration: 3000
                  });
                  setTimeout(function () {
                    wx.navigateBack({
                      delta: -1
                    });
                  }, 3000);
                } else {
                  wx.showToast({
                    title: '验证码错误',
                    icon: 'success',
                    duration: 1500
                  });
                }
                // 给数据进行绑定
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
          } else {
            this_.$invoke('alert_l', 'chufa', true);
            this_.request_cs = function (access_token) {
              // wx.showLoading({
              //   title: '修改中'
              // });
              wx.request({
                url: parent_data.json_link + '/api/wxapp/userinfo/updatenum?access_token=' + parent_data.access_token,
                method: 'POST',
                header: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                  mobile: this_.data.code,
                  identifyingcode: this_.data.password
                },
                success: function success(data) {
                  // wx.hideLoading();
                  this_.text = data.data.data;
                  if (data.data.code === 'A00006') {
                    wx.showToast({
                      title: '修改成功',
                      icon: 'success',
                      duration: 3000
                    });
                    setTimeout(function () {
                      wx.navigateBack({
                        delta: -1
                      });
                    }, 3000);
                  } else {
                    wx.showToast({
                      title: '验证码错误',
                      icon: 'success',
                      duration: 1500
                    });
                  }
                  // 给数据进行绑定
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
            };
          }
        }
      },

      // 获取验证码
      getVerificationCode: function getVerificationCode(e) {
        if (!this.code) {
          wx.showToast({
            title: '请先填写手机号',
            mask: true
          });
          return false;
        }

        if (this.currentPhone == this.code) {
          wx.showToast({
            title: '该手机号已存在'
          });
          return false;
        }
        wx.showLoading({
          title: '加载中'
        });

        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/; //手机正则式
        if (parent_data.access_token != '') {
          if (!myreg.test(this_.code)) {
            //验证手机号

            wx.showToast({
              title: '手机号有误！',
              icon: 'none',
              duration: 1500
            });

            return false;
          } else {
            // 发送验证码
            wx.request({
              url: parent_data.json_link + '/api/wxapp/userinfo/getmobilecode?access_token=' + parent_data.access_token,
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: {
                mobile: this_.data.code
              },
              success: function success(data) {
                wx.hideLoading();
                this_.text = data.data.data;
                if (data.data.code === 'A00006') {
                  // 给数据进行绑定
                  this_.second_show = true;
                  this_.countDown();
                } else {
                  wx.showToast({
                    title: '每日上限为5次',
                    duration: 3000
                  });
                }
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
        } else {
          wx.hideLoading();
          this_.$invoke('alert_l', 'chufa', true);
          this_.request_cs = function (access_token) {
            wx.showLoading({
              title: '加载中'
            });
            wx.request({
              url: parent_data.json_link + '/api/wxapp/userinfo/getmobilecode?access_token=' + parent_data.access_token,
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: {
                mobile: this_.data.code
              },
              success: function success(data) {
                wx.hideLoading();
                this_.text = data.data.data;
                if (data.data.code === 'A00006') {
                  // 给数据进行绑定
                  this_.second_show = true;
                  this_.countDown();
                } else {
                  wx.showToast({
                    title: '每日上限为5次',
                    duration: 3000
                  });
                }
                // 给数据进行绑定
                this_.$apply();
              },
              fail: function fail() {
                wx.showToast({
                  title: '网络异常',
                  icon: 'none'
                });
                return;
              }
            });
          };
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(change, [{
    key: 'onLoad',


    // 初始倒计时状态
    value: function onLoad(res) {
      this.currentPhone = res.currentPhone;
      var timerState = this.$parent.changeTimerState('get');
      // 当前时间戳到秒
      var newtimestr = Date.parse(new Date()) / 1000;
      if (newtimestr - timerState.timestr < timerState.timerNum) {
        this.second_show = true;
        this.second = timerState.timerNum - (newtimestr - timerState.timestr);
        this.code = timerState.phone;
        this.countDown();
        this.$parent.changeTimerState('remove');
        return false;
      }
      this.second_show = false;
    }

    // 倒计时

  }, {
    key: 'countDown',
    value: function countDown() {
      var that = this;
      var second = that.second; //获取倒计时初始值
      this.clear_time = setInterval(function () {
        second--;
        that.second = second;
        that.$apply();

        if (second == 0) {
          clearInterval(that.clear_time);
          that.second_show = false;
          that.second = 60;
          that.$apply();
        }
      }, 1000);
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 改变倒计时的状态
      if (this.second_show) {
        this.$parent.changeTimerState('set', this.code, this.second);
      }
      this.second = '60';
      this.code = '';
      clearInterval(this.clear_time);
    }
  }]);

  return change;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(change , 'pages/change'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS5qcyJdLCJuYW1lcyI6WyJjaGFuZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVybF9saW5rIiwiY29kZSIsInBhc3N3b3JkIiwic2Vjb25kIiwiY2xlYXJfdGltZSIsInNlY29uZF9zaG93IiwiY3VycmVudFBob25lIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsInVzZXJOYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJwYXNzV2RJbnB1dCIsImFsZXJ0X3VzZXJpbmZvIiwidGhpc18iLCJ6aGkiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRpbnZva2UiLCJqYXZhX2xvZ2luIiwicmVxdWVzdF9jcyIsImFsZXJ0X3RlbCIsInJlcyIsImxvZ2luX3RlbG51bV9pdiIsIml2IiwibG9naW5fdGVsbnVtX21peWFvIiwibWl5YW8iLCJ3eCIsImdldFNldHRpbmciLCJzdWNjZXNzIiwiYXV0aFNldHRpbmciLCJnZXRVc2VySW5mbyIsImZhaWwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJzZXRUaW1lb3V0IiwiaGlkZVRvYXN0IiwiZm9ybVN1Ym1pdCIsIm15cmVnIiwibWFzayIsInRlc3QiLCJqc29uX2xpbmsiLCJwYXJlbnRfZGF0YSIsImFjY2Vzc190b2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXIiLCJtb2JpbGUiLCJpZGVudGlmeWluZ2NvZGUiLCJ0ZXh0IiwiZHVyYXRpb24iLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRhcHBseSIsImdldFZlcmlmaWNhdGlvbkNvZGUiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiY291bnREb3duIiwidGltZXJTdGF0ZSIsImNoYW5nZVRpbWVyU3RhdGUiLCJuZXd0aW1lc3RyIiwiRGF0ZSIsInBhcnNlIiwidGltZXN0ciIsInRpbWVyTnVtIiwicGhvbmUiLCJ0aGF0Iiwic2V0SW50ZXJ2YWwiLCJj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QkFBYyxLQUFLcEUsVUFBbkI7QUFDRDs7OztFQS9YaUNxRSxlQUFLQyxJOztrQkFBcEI5RSxNIiwiZmlsZSI6ImNoYW5nZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBVc2VyaW5mb19hbGVydCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJpbmZvX2FsZXJ0JztcclxuICBpbXBvcnQgQWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy9hbGVydCc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgY2hhbmdlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S/ruaUueaJi+acuuWPtydcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICAvLyDovpPlhaXnmoTmiYvmnLrlj7dcclxuICAgICAgY29kZTogJycsXHJcbiAgICAgIC8vIOi+k+WFpeeahOmqjOivgeeggVxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIC8vIOWAkuiuoeaXtuWAvFxyXG4gICAgICBzZWNvbmQ6ICc2MCcsXHJcbiAgICAgIGNsZWFyX3RpbWU6IG51bGwsXHJcbiAgICAgIHNlY29uZF9zaG93OiBmYWxzZSxcclxuICAgICAgLy8g5b2T5YmN5omL5py65Y+3XHJcbiAgICAgIGN1cnJlbnRQaG9uZTogJydcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDovpPlhaXmiYvmnLrlj7dcclxuICAgICAgdXNlck5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi+k+WFpemqjOivgeeggVxyXG4gICAgICBwYXNzV2RJbnB1dDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsZXJ0X3VzZXJpbmZvKGUpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIGZhbHNlKTtcclxuICAgICAgICB6aGkuamF2YV9sb2dpbihlLmRldGFpbCwgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsZXJ0X3RlbChyZXMpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICAgIHpoaS5sb2dpbl90ZWxudW1fbWl5YW8gPSByZXMubWl5YW87XHJcbiAgICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIGZhbHNlKTtcclxuICAgICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcclxuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHpoaS5qYXZhX2xvZ2luKHJlcywgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgLy8gZHVyYXRpb246IDEwMDAwXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOehruiupOS/ruaUuVxyXG4gICAgICBmb3JtU3VibWl0KGUpIHtcclxuICAgICAgICAvL+eCueWHu+eZu+W9leaXtu+8jOiwg+eUqOeahOWHveaVsFxyXG5cclxuICAgICAgICB2YXIgZGF0YSA9IGUuZGV0YWlsLnZhbHVlOyAvL+iOt+WPluaPkOS6pGZyb23nmoRqc29u5pWw5o2uXHJcblxyXG4gICAgICAgIHZhciBteXJlZyA9IC9eKCgoMTNbMC05XXsxfSl8KDE1WzAtOV17MX0pfCgxOFswLTldezF9KXwoMTdbMC05XXsxfSkpK1xcZHs4fSkkLzsgLy/miYvmnLrmraPliJnlvI9cclxuICAgICAgICBpZiAoIXRoaXMuY29kZSkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfor7flhYjloavlhpnmiYvmnLrlj7cnLFxyXG4gICAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+ivt+Whq+WGmemqjOivgeeggSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFteXJlZy50ZXN0KGRhdGEuY29kZSkpIHtcclxuICAgICAgICAgIC8v6aqM6K+B5omL5py65Y+3XHJcblxyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fmnInor6/vvIEnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgLy8gICB0aXRsZTogJ+S/ruaUueS4rSdcclxuICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICAgIGlmIChwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gJycpIHtcclxuICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgdXJsOiBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvdXNlcmluZm8vdXBkYXRlbnVtP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlOiB0aGlzXy5kYXRhLmNvZGUsXHJcbiAgICAgICAgICAgICAgICBpZGVudGlmeWluZ2NvZGU6IHRoaXNfLmRhdGEucGFzc3dvcmRcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDAwXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDMwMDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mqjOivgeeggemUmeivrycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpc18ucmVxdWVzdF9jcyA9IGZ1bmN0aW9uIChhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgICAgICAvLyB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgLy8gICB0aXRsZTogJ+S/ruaUueS4rSdcclxuICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvdXNlcmluZm8vdXBkYXRlbnVtP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBtb2JpbGU6IHRoaXNfLmRhdGEuY29kZSxcclxuICAgICAgICAgICAgICAgICAgaWRlbnRpZnlpbmdjb2RlOiB0aGlzXy5kYXRhLnBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+S/ruaUueaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IC0xXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpqozor4HnoIHplJnor68nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDojrflj5bpqozor4HnoIFcclxuICAgICAgZ2V0VmVyaWZpY2F0aW9uQ29kZShlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvZGUpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn6K+35YWI5aGr5YaZ5omL5py65Y+3JyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGhvbmUgPT0gdGhpcy5jb2RlKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+ivpeaJi+acuuWPt+W3suWtmOWcqCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIHZhciBteXJlZyA9IC9eKCgoMTNbMC05XXsxfSl8KDE1WzAtOV17MX0pfCgxOFswLTldezF9KXwoMTdbMC05XXsxfSkpK1xcZHs4fSkkLzsgLy/miYvmnLrmraPliJnlvI9cclxuICAgICAgICBpZiAocGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnKSB7XHJcbiAgICAgICAgICBpZiAoIW15cmVnLnRlc3QodGhpc18uY29kZSkpIHtcclxuICAgICAgICAgICAgLy/pqozor4HmiYvmnLrlj7dcclxuXHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmiYvmnLrlj7fmnInor6/vvIEnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWPkemAgemqjOivgeeggVxyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC91c2VyaW5mby9nZXRtb2JpbGVjb2RlP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbW9iaWxlOiB0aGlzXy5kYXRhLmNvZGVcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgICAgIHRoaXNfLnNlY29uZF9zaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uY291bnREb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5q+P5pel5LiK6ZmQ5Li6NeasoScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDMwMDBcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIHRoaXNfLnJlcXVlc3RfY3MgPSBmdW5jdGlvbiAoYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDogcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICcvYXBpL3d4YXBwL3VzZXJpbmZvL2dldG1vYmlsZWNvZGU/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGU6IHRoaXNfLmRhdGEuY29kZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpc18udGV4dCA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgICAgICAgICAgdGhpc18uc2Vjb25kX3Nob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzXy5jb3VudERvd24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmr4/ml6XkuIrpmZDkuLo15qyhJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwMFxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyDliJ3lp4vlgJLorqHml7bnirbmgIFcclxuICAgIG9uTG9hZChyZXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGhvbmUgPSByZXMuY3VycmVudFBob25lO1xyXG4gICAgICBsZXQgdGltZXJTdGF0ZSA9IHRoaXMuJHBhcmVudC5jaGFuZ2VUaW1lclN0YXRlKCdnZXQnKTtcclxuICAgICAgLy8g5b2T5YmN5pe26Ze05oiz5Yiw56eSXHJcbiAgICAgIGxldCBuZXd0aW1lc3RyID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKSAvIDEwMDA7XHJcbiAgICAgIGlmIChuZXd0aW1lc3RyIC0gdGltZXJTdGF0ZS50aW1lc3RyIDwgdGltZXJTdGF0ZS50aW1lck51bSkge1xyXG4gICAgICAgIHRoaXMuc2Vjb25kX3Nob3cgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kID0gdGltZXJTdGF0ZS50aW1lck51bSAtIChuZXd0aW1lc3RyIC0gdGltZXJTdGF0ZS50aW1lc3RyKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSB0aW1lclN0YXRlLnBob25lO1xyXG4gICAgICAgIHRoaXMuY291bnREb3duKCk7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LmNoYW5nZVRpbWVyU3RhdGUoJ3JlbW92ZScpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlY29uZF9zaG93ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YCS6K6h5pe2XHJcbiAgICBjb3VudERvd24oKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgbGV0IHNlY29uZCA9IHRoYXQuc2Vjb25kOyAvL+iOt+WPluWAkuiuoeaXtuWIneWni+WAvFxyXG4gICAgICB0aGlzLmNsZWFyX3RpbWUgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2Vjb25kLS07XHJcbiAgICAgICAgdGhhdC5zZWNvbmQgPSBzZWNvbmQ7XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuXHJcbiAgICAgICAgaWYgKHNlY29uZCA9PSAwKSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRoYXQuY2xlYXJfdGltZSk7XHJcbiAgICAgICAgICB0aGF0LnNlY29uZF9zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGF0LnNlY29uZCA9IDYwO1xyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVW5sb2FkKCkge1xyXG4gICAgICAvLyDmlLnlj5jlgJLorqHml7bnmoTnirbmgIFcclxuICAgICAgaWYgKHRoaXMuc2Vjb25kX3Nob3cpIHtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuY2hhbmdlVGltZXJTdGF0ZSgnc2V0JywgdGhpcy5jb2RlLCB0aGlzLnNlY29uZCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWNvbmQgPSAnNjAnO1xyXG4gICAgICB0aGlzLmNvZGUgPSAnJztcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyX3RpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19