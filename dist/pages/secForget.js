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

var secForget = function (_wepy$page) {
  _inherits(secForget, _wepy$page);

  function secForget() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, secForget);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = secForget.__proto__ || Object.getPrototypeOf(secForget)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '重置密码'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      phone: '',
      password1: '',
      password2: '',
      code: '',
      getCodeTime: -1,
      parent_data: ''
    }, _this.methods = {
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      },
      getCode: function getCode() {
        var that = this;
        if (that.getCodeTime > 0) {
          return false;
        }
        if (that.phone == '') {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入手机号');
          return false;
        }
        if (!that.$invoke('toastInfo', 'phoneReg', that.phone)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
          return false;
        }
        that.getCodeFunc();
      },
      reset: function reset() {
        var that = this;
        if (that.phone != '' && that.password1 != '' && that.password2 != '' && that.code != '') {
          if (!that.$invoke('toastInfo', 'phoneReg', that.phone)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
            return false;
          }
          if (that.password1 == that.password2) {
            if (!that.$invoke('toastInfo', 'passwordReg', that.password1)) {
              that.$invoke('toastInfo', 'modelFunc', '000', '请输入8到20位字母和数字组合的密码');
              return false;
            }
          } else {
            that.$invoke('toastInfo', 'modelFunc', '000', '确认新密码输入有误');
            return false;
          }
        } else {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入完整的信息');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/user/resetPassword',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          data: {
            telephone: that.phone,
            password: that.password1, //hexMD5(that.password1)
            authenticationCode: that.code,
            confirmPassword: that.password2
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              wx.showToast({
                title: '密码修改成功',
                icon: 'success',
                duration: 2000,
                success: function success() {
                  that.$redirect('secLogin', { backUrl: 'my' });
                }
              });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          }
        });
      },
      goRegister: function goRegister() {
        this.$redirect('secRegister');
      },
      goLogin: function goLogin() {
        this.$redirect('secLogin');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(secForget, [{
    key: 'timer',

    // 定时器
    value: function timer(time, name) {
      var that = this;
      var timeInfo = time;
      var timerFunc = setInterval(function () {
        if (timeInfo >= 0) {
          that[name] = timeInfo--;
          that.$apply();
        } else {
          clearInterval(timerFunc);
        }
      }, 1000);
    }
    // 获取验证码

  }, {
    key: 'getCodeFunc',
    value: function getCodeFunc() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/sms/sendResetPassoword',
        data: {
          telephone: that.phone
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded' // 默认值
        },
        method: 'POST',
        success: function success(res) {
          if (res.data.code == '10001') {
            that.getCodeTime = 60;
            that.timer(59, 'getCodeTime');
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      if (this.parent_data.login_phone != '') {
        this.phone = this.parent_data.login_phone;
      }
    }
  }]);

  return secForget;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(secForget , 'pages/secForget'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY0ZvcmdldC5qcyJdLCJuYW1lcyI6WyJzZWNGb3JnZXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJ1cmxfbGluayIsInBob25lIiwicGFzc3dvcmQxIiwicGFzc3dvcmQyIiwiY29kZSIsImdldENvZGVUaW1lIiwicGFyZW50X2RhdGEiLCJtZXRob2RzIiwiY2hhbmdlVmFsdWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJuYW1lIiwiZGV0YWlsIiwidmFsdWUiLCJnZXRDb2RlIiwidGhhdCIsIiRpbnZva2UiLCJnZXRDb2RlRnVuYyIsInJlc2V0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJtZXRob2QiLCJoZWFkZXIiLCJ0ZWxlcGhvbmUiLCJwYXNzd29yZCIsImF1dGhlbnRpY2F0aW9uQ29kZSIsImNvbmZpcm1QYXNzd29yZCIsInN1Y2Nlc3MiLCJyZXMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJtc2ciLCJnb1JlZ2lzdGVyIiwiZ29Mb2dpbiIsInRpbWUiLCJ0aW1lSW5mbyIsInRpbWVyRnVuYyIsInNldEludGVydmFsIiwiJGFwcGx5IiwiY2xlYXJJbnRlcnZhbCIsInRpbWVyIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJsb2dpbl9waG9uZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGFBQU8sRUFGRjtBQUdMQyxpQkFBVyxFQUhOO0FBSUxDLGlCQUFXLEVB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QUtYLFdBQUwsR0FBbUIsRUFBbkI7QUFDQVcsaUJBQUsrQixLQUFMLENBQVcsRUFBWCxFQUFjLGFBQWQ7QUFDRCxXQUhELE1BR087QUFDTC9CLGlCQUFLQyxPQUFMLENBQWEsV0FBYixFQUF5QixXQUF6QixFQUFxQ2MsSUFBSWhDLElBQUosQ0FBU0ssSUFBOUMsRUFBbUQyQixJQUFJaEMsSUFBSixDQUFTdUMsR0FBNUQ7QUFDRDtBQUNGO0FBaEJRLE9BQVg7QUFrQkQ7Ozs2QkFDUTtBQUNQLFdBQUt0QyxRQUFMLEdBQWdCLEtBQUtnRCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JqRCxRQUF4QztBQUNBLFdBQUtNLFdBQUwsR0FBbUIsS0FBSzBDLE9BQUwsQ0FBYUMsVUFBaEM7QUFDQSxVQUFJLEtBQUszQyxXQUFMLENBQWlCNEMsV0FBakIsSUFBZ0MsRUFBcEMsRUFBd0M7QUFDdEMsYUFBS2pELEtBQUwsR0FBYSxLQUFLSyxXQUFMLENBQWlCNEMsV0FBOUI7QUFDRDtBQUNGOzs7O0VBcElvQ0MsZUFBS0MsSTs7a0JBQXZCMUQsUyIsImZpbGUiOiJzZWNGb3JnZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGltcG9ydCB7IGhleE1ENSB9IGZyb20gJy4uL21peGlucy9tZDUuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjRm9yZ2V0IGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YeN572u5a+G56CBJ1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIHBhc3N3b3JkMTogJycsXHJcbiAgICAgIHBhc3N3b3JkMjogJycsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBnZXRDb2RlVGltZTogLTEsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0Q29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAodGhhdC5nZXRDb2RlVGltZSA+IDApIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoYXQucGhvbmUgPT0gJycpIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywnbW9kZWxGdW5jJywnMDAwJywn6K+36L6T5YWl5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdwaG9uZVJlZycsIHRoYXQucGhvbmUpKSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycsJzAwMCcsJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LmdldENvZGVGdW5jKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlc2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGF0LnBob25lICE9ICcnICYmIHRoYXQucGFzc3dvcmQxICE9ICcnICYmIHRoYXQucGFzc3dvcmQyICE9ICcnICYmIHRoYXQuY29kZSAhPSAnJykge1xyXG4gICAgICAgICAgaWYgKCF0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ3Bob25lUmVnJyx0aGF0LnBob25lKSkge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhhdC5wYXNzd29yZDEgPT0gdGhhdC5wYXNzd29yZDIpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ3Bhc3N3b3JkUmVnJyx0aGF0LnBhc3N3b3JkMSkpIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpTjliLAyMOS9jeWtl+avjeWSjOaVsOWtl+e7hOWQiOeahOWvhueggScpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgJzAwMCcsICfnoa7orqTmlrDlr4bnoIHovpPlhaXmnInor68nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgJzAwMCcsICfor7fovpPlhaXlrozmlbTnmoTkv6Hmga8nKTtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL3VzZXIvcmVzZXRQYXNzd29yZCcsXHJcbiAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YTp7XHJcbiAgICAgICAgICAgIHRlbGVwaG9uZTogdGhhdC5waG9uZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoYXQucGFzc3dvcmQxLC8vaGV4TUQ1KHRoYXQucGFzc3dvcmQxKVxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNvZGU6IHRoYXQuY29kZSxcclxuICAgICAgICAgICAgY29uZmlybVBhc3N3b3JkOiB0aGF0LnBhc3N3b3JkMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WvhueggeS/ruaUueaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgdGhhdC4kcmVkaXJlY3QoJ3NlY0xvZ2luJyx7YmFja1VybDogJ215J30pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ29SZWdpc3RlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjUmVnaXN0ZXInKTtcclxuICAgIH0sXHJcbiAgICAgIGdvTG9naW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOWumuaXtuWZqFxyXG4gICAgdGltZXIodGltZSwgbmFtZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHZhciB0aW1lSW5mbyA9IHRpbWU7XHJcbiAgICAgIHZhciB0aW1lckZ1bmMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGltZUluZm8gPj0gMCkge1xyXG4gICAgICAgICAgdGhhdFtuYW1lXSA9IHRpbWVJbmZvLS07XHJcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyRnVuYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCAxMDAwKVxyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W6aqM6K+B56CBXHJcbiAgICBnZXRDb2RlRnVuYygpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgICsgJy9zbXMvc2VuZFJlc2V0UGFzc293b3JkJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB0ZWxlcGhvbmUgOiB0aGF0LnBob25lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgdGhhdC5nZXRDb2RlVGltZSA9IDYwO1xyXG4gICAgICAgICAgICB0aGF0LnRpbWVyKDU5LCdnZXRDb2RlVGltZScpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBpZiAodGhpcy5wYXJlbnRfZGF0YS5sb2dpbl9waG9uZSAhPSAnJykge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSB0aGlzLnBhcmVudF9kYXRhLmxvZ2luX3Bob25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=