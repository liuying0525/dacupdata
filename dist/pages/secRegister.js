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

var secRegister = function (_wepy$page) {
  _inherits(secRegister, _wepy$page);

  function secRegister() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, secRegister);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = secRegister.__proto__ || Object.getPrototypeOf(secRegister)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '注册'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      name: '',
      IdCard: '',
      phone: '',
      code: '',
      password: '',
      getCodeTime: -1,
      parent_data: ''
    }, _this.methods = {
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        console.log(e.currentTarget.dataset.name, e.detail.value);
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
      register: function register() {
        var that = this;
        if (that.name != '' && that.phone != '' && that.IdCard != '' && that.code != '' && that.password != '') {
          if (!that.$invoke('toastInfo', 'phoneReg', that.phone)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
            return false;
          }
          if (!that.$invoke('toastInfo', 'passwordReg', that.password)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入8到20位字母和数字组合的密码');
            return false;
          }
          if (!that.$invoke('toastInfo', 'idCardReg', that.IdCard)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的身份证号');
            return false;
          }
        } else {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入完整的注册信息');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/user/register',
          method: 'post',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          data: {
            idCard: that.IdCard,
            telephone: that.phone,
            authenticationCode: that.code,
            password: that.password, //hexMD5(that.password),
            name: that.name
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.$parent.globalData.isRegist = true;
              that.$apply();
              wx.showToast({
                title: '去登录...',
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
      goLogin: function goLogin() {
        this.$redirect('secLogin');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(secRegister, [{
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
        url: that.parent_data.json_dhLink + '/sms/sendRegister',
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
    }
  }]);

  return secRegister;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(secRegister , 'pages/secRegister'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY1JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbInNlY1JlZ2lzdGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwidXJsX2xpbmsiLCJuYW1lIiwiSWRDYXJkIiwicGhvbmUiLCJjb2RlIiwicGFzc3dvcmQiLCJnZXRDb2RlVGltZSIsInBhcmVudF9kYXRhIiwibWV0aG9kcyIsImNoYW5nZVZhbHVlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29kZSIsInRoYXQiLCIkaW52b2tlIiwiZ2V0Q29kZUZ1bmMiLCJyZWdpc3RlciIsInd4IiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwibWV0aG9kIiwiaGVhZGVyIiwiaWRDYXJkIiwidGVsZXBob25lIiwiYXV0aGVudGljYXRpb25Db2RlIiwic3VjY2VzcyIsInJlcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiaXNSZWdpc3QiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJtc2ciLCJnb0xvZ2luIiwidGltZSIsInRpbWVJbmZvIiwidGltZXJGdW5jIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxZQUFNLEVBRkQ7QUFHTEMsY0FBUSxFQUhIO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxZQUFNLEVBTEQ7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QixxQkFBV1gsS0FBS2Y7QUFEWixTQUZHO0FBS1R3QixnQkFBUTtBQUNOLDBCQUFnQixtQ0FEVixDQUM4QztBQUQ5QyxTQUxDO0FBUVRELGdCQUFRLE1BUkM7QUFTVEssaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixjQUFJQSxJQUFJakMsSUFBSixDQUFTSyxJQUFULElBQWlCLE9BQXJCLEVBQThCO0FBQzVCYyxpQkFBS1osV0FBTCxHQUFtQixFQUFuQjtBQUNBWSxpQkFBS2dDLEtBQUwsQ0FBVyxFQUFYLEVBQWMsYUFBZDtBQUNELFdBSEQsTUFHTztBQUNMaEMsaUJBQUtDLE9BQUwsQ0FBYSxXQUFiLEVBQXlCLFdBQXpCLEVBQXFDYSxJQUFJakMsSUFBSixDQUFTSyxJQUE5QyxFQUFtRDRCLElBQUlqQyxJQUFKLENBQVM0QyxHQUE1RDtBQUNEO0FBQ0Y7QUFoQlEsT0FBWDtBQWtCRDs7OzZCQUNRO0FBQ1AsV0FBSzNDLFFBQUwsR0FBZ0IsS0FBS2lDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmxDLFFBQXhDO0FBQ0EsV0FBS08sV0FBTCxHQUFtQixLQUFLMEIsT0FBTCxDQUFhQyxVQUFoQztBQUNEOzs7O0VBcElzQ2lCLGVBQUtDLEk7O2tCQUF6QjFELFciLCJmaWxlIjoic2VjUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGltcG9ydCB7IGhleE1ENSB9IGZyb20gJy4uL21peGlucy9tZDUuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2VjUmVnaXN0ZXIgZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfms6jlhownXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBJZENhcmQ6ICcnLFxyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGdldENvZGVUaW1lOiAtMSxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWUsZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldENvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoYXQuZ2V0Q29kZVRpbWUgPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGF0LnBob25lID09ICcnKSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycgLCcwMDAnLCAn6K+36L6T5YWl5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdwaG9uZVJlZycsIHRoYXQucGhvbmUpKSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycgLCcwMDAnLCAn6K+36L6T5YWl5q2j56Gu55qE5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuZ2V0Q29kZUZ1bmMoKTtcclxuICAgICAgfSxcclxuICAgICAgcmVnaXN0ZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoYXQubmFtZSAhPSAnJyAmJiB0aGF0LnBob25lICE9ICcnICYmIHRoYXQuSWRDYXJkICE9ICcnICYmIHRoYXQuY29kZSAhPSAnJyAmJiB0aGF0LnBhc3N3b3JkICE9ICcnKSB7XHJcbiAgICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywncGhvbmVSZWcnLCB0aGF0LnBob25lKSkge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywncGFzc3dvcmRSZWcnLCB0aGF0LnBhc3N3b3JkKSkge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpTjliLAyMOS9jeWtl+avjeWSjOaVsOWtl+e7hOWQiOeahOWvhueggScpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywnaWRDYXJkUmVnJywgdGhhdC5JZENhcmQpKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+36L6T5YWl5q2j56Gu55qE6Lqr5Lu96K+B5Y+3Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+36L6T5YWl5a6M5pW055qE5rOo5YaM5L+h5oGvJyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy91c2VyL3JlZ2lzdGVyJyxcclxuICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOntcclxuICAgICAgICAgICAgaWRDYXJkOiB0aGF0LklkQ2FyZCxcclxuICAgICAgICAgICAgdGVsZXBob25lOiB0aGF0LnBob25lLFxyXG4gICAgICAgICAgICBhdXRoZW50aWNhdGlvbkNvZGU6IHRoYXQuY29kZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoYXQucGFzc3dvcmQsIC8vaGV4TUQ1KHRoYXQucGFzc3dvcmQpLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGF0Lm5hbWVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS5pc1JlZ2lzdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfljrvnmbvlvZUuLi4nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuJHJlZGlyZWN0KCdzZWNMb2dpbicse2JhY2tVcmw6ICdteSd9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycscmVzLmRhdGEuY29kZSxyZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgfSxcclxuICAgICAgZ29Mb2dpbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZGlyZWN0KCdzZWNMb2dpbicpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8g5a6a5pe25ZmoXHJcbiAgICB0aW1lcih0aW1lLCBuYW1lKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdmFyIHRpbWVJbmZvID0gdGltZTtcclxuICAgICAgdmFyIHRpbWVyRnVuYyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aW1lSW5mbyA+PSAwKSB7XHJcbiAgICAgICAgICB0aGF0W25hbWVdID0gdGltZUluZm8tLTtcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5bpqozor4HnoIFcclxuICAgIGdldENvZGVGdW5jKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayAgKyAnL3Ntcy9zZW5kUmVnaXN0ZXInLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHRlbGVwaG9uZTogdGhhdC5waG9uZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHRoYXQuZ2V0Q29kZVRpbWUgPSA2MDtcclxuICAgICAgICAgICAgdGhhdC50aW1lcig1OSwnZ2V0Q29kZVRpbWUnKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywnbW9kZWxGdW5jJyxyZXMuZGF0YS5jb2RlLHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==