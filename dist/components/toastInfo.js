'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toastInfo = function (_wepy$component) {
  _inherits(toastInfo, _wepy$component);

  function toastInfo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, toastInfo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = toastInfo.__proto__ || Object.getPrototypeOf(toastInfo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      infoText: ''
    }, _this.methods = {
      modelFunc: function modelFunc(code, message) {
        var that = this;

        if (code != 'A00006') {
          if (code == '10017') {
            wx.showToast({
              title: '去登录...',
              icon: 'loading',
              duration: 2000,
              success: function success() {
                that.$parent.$navigate('secLogin');
              }
            });
            return false;
          }
          this.infoText = message;
          wx.showModal({
            // title: '温馨提示',
            content: that.infoText,
            showCancel: false,
            confirmText: '我知道了',
            success: function success() {
              return false;
            }
          });
        }
      },
      // 验证手机号格式
      phoneReg: function phoneReg(num) {
        var pattern = /^1[3456789]\d{9}$/;
        var str = num.replace(/\s+/g, "");
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
      },
      // 身份证验证
      idCardReg: function idCardReg(num) {
        var pattern = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
        var str = num.replace(/\s+/g, "");
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
      },
      // 银行卡验证
      bankCardReg: function bankCardReg(num) {
        var pattern = /^([1-9]{1})(\d{15}|\d{18})$/;
        var str = num.replace(/\s+/g, "");
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
      },
      // 密码格式验证 8~20位 字母和数字的组合
      passwordReg: function passwordReg(num) {
        var pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
        var str = num.replace(/\s+/g, "");
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
      },
      // 邮箱校验
      emailReg: function emailReg(num) {
        var pattern = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
        var str = num.replace(/\s+/g, "");
        if (!pattern.test(str)) {
          return false;
        } else {
          return true;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return toastInfo;
}(_wepy2.default.component);

exports.default = toastInfo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYXN0SW5mby5qcyJdLCJuYW1lcyI6WyJ0b2FzdEluZm8iLCJkYXRhIiwiaW5mb1RleHQiLCJtZXRob2RzIiwibW9kZWxGdW5jIiwiY29kZSIsIm1lc3NhZ2UiLCJ0aGF0Iiwid3giLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInN1Y2Nlc3MiLCIkcGFyZW50IiwiJG5hdmlnYXRlIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtVGV4dCIsInBob25lUmVnIiwibnVtIiwicGF0dGVybiIsInN0ciIsInJlcGxhY2UiLCJ0ZXN0IiwiaWRDYXJkUmVnIiwiYmFua0NhcmRSZWciLCJwYXNzd29yZFJlZyIsImVtYWlsUmVnIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUdQQyxPLEdBQVU7QUFDUkMsaUJBQVcsbUJBQVVDLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ2xDLFlBQUlDLE9BQU8sSUFBWDs7QUFFQSxZQUFJRixRQUFRLFFBQVosRUFBc0I7QUFDcEIsY0FBSUEsUUFBUSxPQUFaLEVBQXFCO0FBQ25CRyxlQUFHQyxTQUFILENBQWE7QUFDWEMscUJBQU8sUUFESTtBQUVYQyxvQkFBTSxTQUZLO0FBR1hDLHdCQUFVLElBSEM7QUFJWEMsdUJBQVMsbUJBQVk7QUFDbkJOLHFCQUFLTyxPQUFMLENBQWFDLFNBQWIsQ0FBdUIsVUFBdkI7QUFDRDtBQU5VLGFBQWI7QUFRQSxtQkFBTyxLQUFQO0FBQ0Q7QUFDRCxlQUFLYixRQUFMLEdBQWdCSSxPQUFoQjtBQUNBRSxhQUFHUSxTQUFILENBQWE7QUFDWDtBQUNBQyxxQkFBU1YsS0FBS0wsUUFGSDtBQUdYZ0Isd0JBQVcsS0FIQTtBQUlYQyx5QkFBWSxNQUpEO0FBS1hOLG1CQUxXLHFCQUtBO0FBQ1QscUJBQU8sS0FBUDtBQUNEO0FBUFUsV0FBYjtBQVNEO0FBQ0YsT0EzQk87QUE0QlI7QUFDQU8sZ0JBQVUsa0JBQVVDLEdBQVYsRUFBZTtBQUN2QixZQUFJQyxVQUFVLG1CQUFkO0FBQ0EsWUFBSUMsTUFBTUYsSUFBSUcsT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsQ0FBVjtBQUNBLFlBQUksQ0FBQ0YsUUFBUUcsSUFBUixDQUFhRixHQUFiLENBQUwsRUFBd0I7QUFDdEIsaUJBQU8sS0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BckNPO0FBc0NSO0FBQ0FHLGlCQUFXLG1CQUFVTCxHQUFWLEVBQWU7QUFDeEIsWUFBSUMsVUFBVSwySUFBZDtBQUNBLFlBQUlDLE1BQU1GLElBQUlHLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLENBQVY7QUFDQSxZQUFJLENBQUNGLFFBQVFHLElBQVIsQ0FBYUYsR0FBYixDQUFMLEVBQXdCO0FBQ3RCLGlCQUFPLEtBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRixPQS9DTztBQWdEUjtBQUNBSSxtQkFBYSxxQkFBVU4sR0FBVixFQUFlO0FBQzFCLFlBQUlDLFVBQVUsNkJBQWQ7QUFDQSxZQUFJQyxNQUFNRixJQUFJRyxPQUFKLENBQVksTUFBWixFQUFvQixFQUFwQixDQUFWO0FBQ0EsWUFBSSxDQUFDRixRQUFRRyxJQUFSLENBQWFGLEdBQWIsQ0FBTCxFQUF3QjtBQUN0QixpQkFBTyxLQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sSUFBUDtBQUNEO0FBQ0YsT0F6RE87QUEwRFI7QUFDQUssbUJBQWEscUJBQVVQLEdBQVYsRUFBZTtBQUMxQixZQUFJQyxVQUFVLDhDQUFkO0FBQ0EsWUFBSUMsTUFBTUYsSUFBSUcsT0FBSixDQUFZLE1BQVosRUFBb0IsRUFBcEIsQ0FBVjtBQUNBLFlBQUksQ0FBQ0YsUUFBUUcsSUFBUixDQUFhRixHQUFiLENBQUwsRUFBd0I7QUFDdEIsaUJBQU8sS0FBUDtBQUNELFNBRkQsTUFFTztBQUNMLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BbkVPO0FBb0VSO0FBQ0FNLGdCQUFVLGtCQUFVUixHQUFWLEVBQWU7QUFDdkIsWUFBSUMsVUFBVSw2QkFBZDtBQUNBLFlBQUlDLE1BQU1GLElBQUlHLE9BQUosQ0FBWSxNQUFaLEVBQW9CLEVBQXBCLENBQVY7QUFDQSxZQUFJLENBQUNGLFFBQVFHLElBQVIsQ0FBYUYsR0FBYixDQUFMLEVBQXdCO0FBQ3RCLGlCQUFPLEtBQVA7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxJQUFQO0FBQ0Q7QUFDRjtBQTdFTyxLOzs7O0VBSjJCTyxlQUFLQyxTOztrQkFBdkIvQixTIiwiZmlsZSI6InRvYXN0SW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvYXN0SW5mbyBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGluZm9UZXh0OiAnJ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG1vZGVsRnVuYzogZnVuY3Rpb24gKGNvZGUsIG1lc3NhZ2UpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNvZGUgIT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgIGlmIChjb2RlID09ICcxMDAxNycpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+WOu+eZu+W9lS4uLicsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuJHBhcmVudC4kbmF2aWdhdGUoJ3NlY0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5pbmZvVGV4dCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAvLyB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoYXQuaW5mb1RleHQsXHJcbiAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgIGNvbmZpcm1UZXh0OifmiJHnn6XpgZPkuoYnLFxyXG4gICAgICAgICAgICBzdWNjZXNzICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpqozor4HmiYvmnLrlj7fmoLzlvI9cclxuICAgICAgcGhvbmVSZWc6IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eMVszNDU2Nzg5XVxcZHs5fSQvO1xyXG4gICAgICAgIGxldCBzdHIgPSBudW0ucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChzdHIpKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g6Lqr5Lu96K+B6aqM6K+BXHJcbiAgICAgIGlkQ2FyZFJlZzogZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIGxldCBwYXR0ZXJuID0gL14oXlsxLTldXFxkezd9KCgwXFxkKXwoMVswLTJdKSkoKFswfDF8Ml1cXGQpfDNbMC0xXSlcXGR7M30kKXwoXlsxLTldXFxkezV9WzEtOV1cXGR7M30oKDBcXGQpfCgxWzAtMl0pKSgoWzB8MXwyXVxcZCl8M1swLTFdKSgoXFxkezR9KXxcXGR7M31bWHhdKSQpJC87XHJcbiAgICAgICAgbGV0IHN0ciA9IG51bS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpk7booYzljaHpqozor4FcclxuICAgICAgYmFua0NhcmRSZWc6IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKFsxLTldezF9KShcXGR7MTV9fFxcZHsxOH0pJC87XHJcbiAgICAgICAgbGV0IHN0ciA9IG51bS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDlr4bnoIHmoLzlvI/pqozor4EgOH4yMOS9jSDlrZfmr43lkozmlbDlrZfnmoTnu4TlkIhcclxuICAgICAgcGFzc3dvcmRSZWc6IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eKD8hWzAtOV0rJCkoPyFbYS16QS1aXSskKVswLTlBLVphLXpdezgsMjB9JC87XHJcbiAgICAgICAgbGV0IHN0ciA9IG51bS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpgq7nrrHmoKHpqoxcclxuICAgICAgZW1haWxSZWc6IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICBsZXQgcGF0dGVybiA9IC9eXFx3K0BbYS16MC05XStcXC5bYS16XXsyLDR9JC87XHJcbiAgICAgICAgbGV0IHN0ciA9IG51bS5yZXBsYWNlKC9cXHMrL2csIFwiXCIpO1xyXG4gICAgICAgIGlmICghcGF0dGVybi50ZXN0KHN0cikpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=