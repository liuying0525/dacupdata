'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toastInfo = require('./../components/toastInfo.js');

var _toastInfo2 = _interopRequireDefault(_toastInfo);

var _md = require('./../mixins/md5.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var secLogin = function (_wepy$page) {
  _inherits(secLogin, _wepy$page);

  function secLogin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, secLogin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = secLogin.__proto__ || Object.getPrototypeOf(secLogin)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      parent_data: '',
      url_link: '',
      phone: '',
      password: '',
      backUrl: '',
      code: '',
      getCodeTime: 60,
      timerFunc: {},
      onblurBtn: false,
      rephone: '',
      clickBtn: 0,
      inter: {}
    }, _this.methods = {
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      },

      getCode: function getCode(e) {
        var that = this;
        if (that.phone == '') {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入手机号');
          return false;
        }
        if (!that.$invoke('toastInfo', 'phoneReg', that.phone)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
          return false;
        }
        if (that.clickBtn != 0) {
          return false;
        } else {
          that.clickBtn = 1;
          that.interTime();
          that.getCodeFunc();
        }
      },
      login: function login() {
        var that = this;
        if (that.phone != '' && that.password != '' && that.code != '') {
          if (!that.$invoke('toastInfo', 'phoneReg', that.phone)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
            return false;
          }
          if (!that.$invoke('toastInfo', 'passwordReg', that.password)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入8到20位字母和数字组合的密码');
            return false;
          }
        } else {
          that.$invoke('toastInfo', 'modelFunc', '000', '请填写完整的登录信息');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/user/login',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          data: {
            telephone: that.phone,
            password: that.password, //hexMD5(that.password)
            verificationCode: that.code
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.$parent.globalData.login_token = res.data.data.loginToken;
              that.$parent.globalData.login_phone = res.data.data.telephone;
              that.$parent.globalData.login_idCard = res.data.data.idCard;
              that.$parent.globalData.login_name = res.data.data.name;
              that.$parent.globalData.login_userId = res.data.data.userId;
              that.$apply();
              wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 2000,
                success: function success() {
                  if (that.backUrl != '') {
                    if (that.backUrl == 'my') {
                      wx.reLaunch({
                        url: that.backUrl
                      });
                    } else {
                      that.$redirect(that.backUrl);
                    }
                  } else {
                    wx.navigateBack({
                      delta: 1
                    });
                  }
                }
              });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          }
        });
      },
      goForget: function goForget() {
        this.$redirect('secForget');
      },
      goRegister: function goRegister() {
        this.$redirect('secRegister');
      },
      goMy: function goMy() {
        wx.reLaunch({
          url: 'my'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(secLogin, [{
    key: 'interTime',

    // 定时器

    value: function interTime() {
      var that = this;

      that.inter = setInterval(function () {
        that.getCodeTime--;
        that.$apply();
        if (that.getCodeTime == 0) {
          clearInterval(that.inter);
          that.getCodeTime = 60;
          that.clickBtn = 0;
          that.$apply();
        }
      }, 1000);
    }
  }, {
    key: 'setCache',
    value: function setCache() {
      var that = this;
      if (that.getCodeTime == 60) return;
      var oldtime = Date.parse(new Date());
      var time = {
        oldtime: oldtime,
        alreadytime: that.getCodeTime
      };
      wx.setStorageSync('alreadytime', time);
    }
    // 获取验证码

  }, {
    key: 'getCodeFunc',
    value: function getCodeFunc() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/sms/login',
        data: {
          telephone: that.phone
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'POST',
        success: function success(res) {
          if (res.data.code == '10001') {} else {

            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }
  }, {
    key: 'onUnload',
    value: function onUnload(options) {
      this.setCache();
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      if (this.parent_data.login_phone != '') {
        this.phone = '';
        this.password = '';
      }
      if (options) {
        if (options.backUrl) {
          this.backUrl = options.backUrl;
        }
      }
    }
  }, {
    key: 'onHide',
    value: function onHide(options) {
      this.setCache();
    }
  }, {
    key: 'onShow',
    value: function onShow(options) {
      var that = this;
      var oldalreadytime = wx.getStorageSync('alreadytime');
      if (!!oldalreadytime) {
        var nowtime = Date.parse(new Date());
        var second = parseInt((nowtime - oldalreadytime.oldtime) / 1000);
        //console.log("缓存时间="+second);
        if (second > 60) {
          that.getCodeTime = 60;
          that.clickBtn = 0;
        } else {
          var stime = oldalreadytime.alreadytime - second;
          // console.log("stime="+stime+",oldalreadytime.alreadytime="+oldalreadytime.alreadytime);
          if (stime <= 0) {
            that.getCodeTime = 60;
            that.clickBtn = 0;
          } else {
            that.getCodeTime = stime;
            that.clickBtn = 1;
          }
          that.$apply();
        }
      }
      wx.removeStorageSync("alreadytime");
    }
  }]);

  return secLogin;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(secLogin , 'pages/secLogin'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY0xvZ2luLmpzIl0sIm5hbWVzIjpbInNlY0xvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwicGFyZW50X2RhdGEiLCJ1cmxfbGluayIsInBob25lIiwicGFzc3dvcmQiLCJiYWNrVXJsIiwiY29kZSIsImdldENvZGVUaW1lIiwidGltZXJGdW5jIiwib25ibHVyQnRuIiwicmVwaG9uZSIsImNsaWNrQnRuIiwiaW50ZXIiLCJtZXRob2RzIiwiY2hhbmdlVmFsdWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCJnZXRDb2RlIiwidGhhdCIsIiRpbnZva2UiLCJpbnRlclRpbWUiLCJnZXRDb2RlRnVuYyIsImxvZ2luIiwid3giLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJtZXRob2QiLCJoZWFkZXIiLCJ0ZWxlcGhvbmUiLCJ2ZXJpZmljYXRpb25Db2RlIiwic3VjY2VzcyIsInJlcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibG9naW5fdG9rZW4iLCJsb2dpblRva2VuIiwibG9naW5fcGhvbmUiLCJsb2dpbl9pZENhcmQiLCJpZENhcmQiLCJsb2dpbl9uYW1lIiwibG9naW5fdXNlcklkIiwidXNlcklkIiwiJGFwcGx5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJyZUxhdW5jaCIsIiRyZWRpcmVjdCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibXNnIiwiZ29Gb3JnZXQiLCJnb1JlZ2lzdGVyIiwiZ29NeSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9sZHRpbWUiLCJEYXRlIiwicGFyc2UiLCJ0aW1lIiwiYWxyZWFkeXRpbWUiLCJzZXRTdG9yYWdlU3luYyIsIm9wdGlvbnMiLCJzZXRDYWNoZSIsIm9sZGFscmVhZHl0aW1lIiwiZ2V0U3RvcmFnZVN5bmMiLCJub3d0aW1lIiwic2Vjb25kIiwicGFyc2VJbnQiLCJzdGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsSSxHQUFPO0FBQ0xDLG1CQUFhLEVBRFI7QUFFTEMsZ0JBQVUsRUFGTDtBQUdMQyxhQUFPLEVBSEY7QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxlQUFTLEVBTEo7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLG1CQUFhLEVBUFI7QUFRTEMsaUJBQVcsRUFSTjtBQVNMQyxpQkFBVyxLQVROO0FBVUxDLGVBQVMsRUFWSjtBQVdMQyxnQkFBVSxDQVhMO0FBWUxDLGFBQU07QUFaRCxLLFFBY1BDLE8sR0FBVTtBQUNSQyxtQkFBYSxxQkFBU0MsQ0FBVCxFQUFZO0FBQ3ZCLGFBQUtBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUE3QixJQUFxQ0gsRUFBRUksTUFBRixDQUFTQyxLQUE5QztBQUNELE9BSE87O0FBS1JDLGVBQVMsaUJBQVNOLENBQVQsRUFBWTtBQUNuQixZQUFJTyxPQUFPLElBQVg7QUFDQyxZQUFJQSxLQUFLbkIsS0FBTCxJQUFjLEVBQWxCLEVBQXNCO0FBQ25CbUIsZUFBS0MsT0FBTCxDQUFhLFdBQWIsRUFBMEIsV0FBMUIsRUFBdUMsS0FBdkMsRUFBOEMsUUFBOUM7QUFDQSxpQkFBTyxLQUFQO0FBQ0Q7QUFDRCxZQUFJLENBQUNELEtBQUtDLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFVBQTFCLEVBQXNDRCxLQUFLbkIsS0FBM0MsQ0FBTCxFQUF3RDtBQUN0RG1CLGVBQUtDLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFdBQTFCLEVBQXVDLEtBQXZDLEVBQThDLFdBQTlDO0FBQ0EsaUJBQU8sS0FBUDtBQUNEO0FB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QUtDLFFBQUw7QUFDRDs7OzJCQUNNRCxPLEVBQVM7QUFDZCxVQUFJOUMsT0FBTyxJQUFYO0FBQ0EsVUFBSWdELGlCQUFpQjNDLEdBQUc0QyxjQUFILENBQWtCLGFBQWxCLENBQXJCO0FBQ0EsVUFBSSxDQUFDLENBQUNELGNBQU4sRUFDQTtBQUNHLFlBQUlFLFVBQVVULEtBQUtDLEtBQUwsQ0FBVyxJQUFJRCxJQUFKLEVBQVgsQ0FBZDtBQUNBLFlBQUlVLFNBQVNDLFNBQVMsQ0FBQ0YsVUFBVUYsZUFBZVIsT0FBMUIsSUFBcUMsSUFBOUMsQ0FBYjtBQUNBO0FBQ0MsWUFBR1csU0FBTyxFQUFWLEVBQ0E7QUFDSW5ELGVBQUtmLFdBQUwsR0FBaUIsRUFBakI7QUFDQWUsZUFBS1gsUUFBTCxHQUFjLENBQWQ7QUFDSCxTQUpELE1BTUE7QUFDSSxjQUFJZ0UsUUFBTUwsZUFBZUosV0FBZixHQUEyQk8sTUFBckM7QUFDRDtBQUNDLGNBQUdFLFNBQU8sQ0FBVixFQUNBO0FBQ0lyRCxpQkFBS2YsV0FBTCxHQUFpQixFQUFqQjtBQUNBZSxpQkFBS1gsUUFBTCxHQUFjLENBQWQ7QUFDSCxXQUpELE1BTUE7QUFDSVcsaUJBQUtmLFdBQUwsR0FBaUJvRSxLQUFqQjtBQUNBckQsaUJBQUtYLFFBQUwsR0FBYyxDQUFkO0FBQ0g7QUFDQ1csZUFBS3lCLE1BQUw7QUFDTDtBQUVKO0FBQ0RwQixTQUFHaUQsaUJBQUgsQ0FBcUIsYUFBckI7QUFDRDs7OztFQXBPbUNDLGVBQUtDLEk7O2tCQUF0Qm5GLFEiLCJmaWxlIjoic2VjTG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nO1xyXG5pbXBvcnQgeyBoZXhNRDUgfSBmcm9tICcuLi9taXhpbnMvbWQ1LmpzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICBwaG9uZTogJycsXHJcbiAgICBwYXNzd29yZDogJycsXHJcbiAgICBiYWNrVXJsOiAnJyxcclxuICAgIGNvZGU6ICcnLFxyXG4gICAgZ2V0Q29kZVRpbWU6IDYwLFxyXG4gICAgdGltZXJGdW5jOiB7fSxcclxuICAgIG9uYmx1ckJ0bjogZmFsc2UsXHJcbiAgICByZXBob25lOiAnJyxcclxuICAgIGNsaWNrQnRuOiAwLFxyXG4gICAgaW50ZXI6e31cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjaGFuZ2VWYWx1ZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICBcclxuICAgIGdldENvZGU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgaWYgKHRoYXQucGhvbmUgPT0gJycpIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+36L6T5YWl5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAncGhvbmVSZWcnLCB0aGF0LnBob25lKSkge1xyXG4gICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgJzAwMCcsICfor7fovpPlhaXmraPnoa7nmoTmiYvmnLrlj7cnKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIGlmICh0aGF0LmNsaWNrQnRuICE9IDApIFxyXG4gICAgICB7XHJcbiAgICAgICAgIHJldHVybiBmYWxzZTsgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZVxyXG4gICAgICB7XHJcbiAgICAgICAgdGhhdC5jbGlja0J0bj0xO1xyXG4gICAgICAgIHRoYXQuaW50ZXJUaW1lKCk7XHJcbiAgICAgICAgdGhhdC5nZXRDb2RlRnVuYygpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9naW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGlmICh0aGF0LnBob25lICE9ICcnICYmIHRoYXQucGFzc3dvcmQgIT0gJycgJiYgdGhhdC5jb2RlICE9ICcnKSB7XHJcbiAgICAgICAgaWYgKCF0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdwaG9uZVJlZycsIHRoYXQucGhvbmUpKSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ3Bhc3N3b3JkUmVnJywgdGhhdC5wYXNzd29yZCkpIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZShcclxuICAgICAgICAgICAgJ3RvYXN0SW5mbycsXHJcbiAgICAgICAgICAgICdtb2RlbEZ1bmMnLFxyXG4gICAgICAgICAgICAnMDAwJyxcclxuICAgICAgICAgICAgJ+ivt+i+k+WFpTjliLAyMOS9jeWtl+avjeWSjOaVsOWtl+e7hOWQiOeahOWvhueggSdcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+35aGr5YaZ5a6M5pW055qE55m75b2V5L+h5oGvJyk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvdXNlci9sb2dpbicsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0ZWxlcGhvbmU6IHRoYXQucGhvbmUsXHJcbiAgICAgICAgICBwYXNzd29yZDogdGhhdC5wYXNzd29yZCwgLy9oZXhNRDUodGhhdC5wYXNzd29yZClcclxuICAgICAgICAgIHZlcmlmaWNhdGlvbkNvZGU6IHRoYXQuY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX3Rva2VuID0gcmVzLmRhdGEuZGF0YS5sb2dpblRva2VuO1xyXG4gICAgICAgICAgICB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9waG9uZSA9IHJlcy5kYXRhLmRhdGEudGVsZXBob25lO1xyXG4gICAgICAgICAgICB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9pZENhcmQgPSByZXMuZGF0YS5kYXRhLmlkQ2FyZDtcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fbmFtZSA9IHJlcy5kYXRhLmRhdGEubmFtZTtcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fdXNlcklkID0gcmVzLmRhdGEuZGF0YS51c2VySWQ7XHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXmiJDlip8nLFxyXG4gICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGF0LmJhY2tVcmwgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoYXQuYmFja1VybCA9PSAnbXknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdXJsOiB0aGF0LmJhY2tVcmxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRyZWRpcmVjdCh0aGF0LmJhY2tVcmwpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ29Gb3JnZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjRm9yZ2V0Jyk7XHJcbiAgICB9LFxyXG4gICAgZ29SZWdpc3RlcjogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuJHJlZGlyZWN0KCdzZWNSZWdpc3RlcicpO1xyXG4gICAgfSxcclxuICAgIGdvTXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgdXJsOiAnbXknXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g5a6a5pe25ZmoXHJcblxyXG4gIGludGVyVGltZSgpe1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIFxyXG4gICAgICB0aGF0LmludGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoYXQuZ2V0Q29kZVRpbWUtLTtcclxuICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgaWYgKHRoYXQuZ2V0Q29kZVRpbWUgPT0gMCkge1xyXG4gICAgICAgICBjbGVhckludGVydmFsKHRoYXQuaW50ZXIpO1xyXG4gICAgICAgICAgdGhhdC5nZXRDb2RlVGltZT02MDsgXHJcbiAgICAgICAgICB0aGF0LmNsaWNrQnRuPTA7IFxyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTsgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LDEwMDApO1xyXG4gIH1cclxuICBzZXRDYWNoZSgpXHJcbiAge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgaWYodGhhdC5nZXRDb2RlVGltZT09NjApXHJcbiAgICByZXR1cm47XHJcbiAgICB2YXIgb2xkdGltZSA9IERhdGUucGFyc2UobmV3IERhdGUoKSk7XHJcbiAgICB2YXIgdGltZSA9IHtcclxuICAgICAgIG9sZHRpbWU6IG9sZHRpbWUsXHJcbiAgICAgICBhbHJlYWR5dGltZTogdGhhdC5nZXRDb2RlVGltZVxyXG4gICAgIH07XHJcbiAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2FscmVhZHl0aW1lJywgdGltZSk7XHJcbiAgfVxyXG4gIC8vIOiOt+WPlumqjOivgeeggVxyXG4gIGdldENvZGVGdW5jKCkge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvc21zL2xvZ2luJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRlbGVwaG9uZTogdGhhdC5waG9uZVxyXG4gICAgICB9LFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgIFxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25VbmxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLnNldENhY2hlKCk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgaWYgKHRoaXMucGFyZW50X2RhdGEubG9naW5fcGhvbmUgIT0gJycpIHtcclxuICAgICAgdGhpcy5waG9uZSA9ICcnO1xyXG4gICAgICB0aGlzLnBhc3N3b3JkID0gJyc7XHJcbiAgICB9XHJcbiAgICBpZiAob3B0aW9ucykge1xyXG4gICAgICBpZiAob3B0aW9ucy5iYWNrVXJsKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrVXJsID0gb3B0aW9ucy5iYWNrVXJsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkhpZGUob3B0aW9ucykge1xyXG4gICAgdGhpcy5zZXRDYWNoZSgpO1xyXG4gIH1cclxuICBvblNob3cob3B0aW9ucykge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgdmFyIG9sZGFscmVhZHl0aW1lID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2FscmVhZHl0aW1lJyk7XHJcbiAgICBpZiAoISFvbGRhbHJlYWR5dGltZSlcclxuICAgIHtcclxuICAgICAgIHZhciBub3d0aW1lID0gRGF0ZS5wYXJzZShuZXcgRGF0ZSgpKTtcclxuICAgICAgIHZhciBzZWNvbmQgPSBwYXJzZUludCgobm93dGltZSAtIG9sZGFscmVhZHl0aW1lLm9sZHRpbWUpIC8gMTAwMCk7XHJcbiAgICAgICAvL2NvbnNvbGUubG9nKFwi57yT5a2Y5pe26Ze0PVwiK3NlY29uZCk7XHJcbiAgICAgICAgaWYoc2Vjb25kPjYwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhhdC5nZXRDb2RlVGltZT02MDtcclxuICAgICAgICAgICAgdGhhdC5jbGlja0J0bj0wOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIHN0aW1lPW9sZGFscmVhZHl0aW1lLmFscmVhZHl0aW1lLXNlY29uZDtcclxuICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0aW1lPVwiK3N0aW1lK1wiLG9sZGFscmVhZHl0aW1lLmFscmVhZHl0aW1lPVwiK29sZGFscmVhZHl0aW1lLmFscmVhZHl0aW1lKTtcclxuICAgICAgICAgICAgaWYoc3RpbWU8PTApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29kZVRpbWU9NjA7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmNsaWNrQnRuPTA7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5nZXRDb2RlVGltZT1zdGltZTtcclxuICAgICAgICAgICAgICAgIHRoYXQuY2xpY2tCdG49MTsgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgIH1cclxuICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKFwiYWxyZWFkeXRpbWVcIik7XHJcbiAgfVxyXG59XHJcbiJdfQ==