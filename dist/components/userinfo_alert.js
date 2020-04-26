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
// 请求用户信息


var userinfo_alert = function (_wepy$component) {
  _inherits(userinfo_alert, _wepy$component);

  function userinfo_alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, userinfo_alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = userinfo_alert.__proto__ || Object.getPrototypeOf(userinfo_alert)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 文本
      text_: '',
      // 控制组件显隐
      zt: false
    }, _this.props = {
      text_zhi: String
    }, _this.methods = {
      // 获取用户信息
      bindGetUserInfo: function bindGetUserInfo(e) {
        console.log(e);
        this.$parent.$parent.globalData.logining = true;
        this.$emit('childFn', e);
      },

      // 组件显隐
      chufa: function chufa(res) {
        this.zt = res;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(userinfo_alert, [{
    key: 'onLoad',

    // 初始化
    value: function onLoad() {
      this.text_ = this.text_zhi;
      this.$apply();
    }
  }]);

  return userinfo_alert;
}(_wepy2.default.component);

exports.default = userinfo_alert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJpbmZvX2FsZXJ0LmpzIl0sIm5hbWVzIjpbInVzZXJpbmZvX2FsZXJ0IiwiZGF0YSIsInRleHRfIiwienQiLCJwcm9wcyIsInRleHRfemhpIiwiU3RyaW5nIiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsImUiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJsb2dpbmluZyIsIiRlbWl0IiwiY2h1ZmEiLCJyZXMiLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxjOzs7Ozs7Ozs7Ozs7OztzTUFDbkJDLEksR0FBTztBQUNMO0FBQ0FDLGFBQU8sRUFGRjtBQUdMO0FBQ0FDLFVBQUk7QUFKQyxLLFFBTVBDLEssR0FBUTtBQUNOQyxnQkFBVUM7QUFESixLLFFBR1JDLE8sR0FBVTtBQUNSO0FBQ0FDLHFCQUZRLDJCQUVRQyxDQUZSLEVBRVc7QUFDakJDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxhQUFLRyxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDQyxRQUFoQyxHQUEyQyxJQUEzQztBQUNBLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCTixDQUF0QjtBQUNELE9BTk87O0FBT1I7QUFDQU8sYUFBTyxlQUFVQyxHQUFWLEVBQWU7QUFDcEIsYUFBS2QsRUFBTCxHQUFVYyxHQUFWO0FBQ0Q7QUFWTyxLOzs7Ozs7QUFZVjs2QkFDUztBQUNQLFdBQUtmLEtBQUwsR0FBYSxLQUFLRyxRQUFsQjtBQUNBLFdBQUthLE1BQUw7QUFDRDs7OztFQTFCeUNDLGVBQUtDLFM7O2tCQUE1QnBCLGMiLCJmaWxlIjoidXNlcmluZm9fYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyDor7fmsYLnlKjmiLfkv6Hmga9cclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHVzZXJpbmZvX2FsZXJ0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5paH5pysXHJcbiAgICAgIHRleHRfOiAnJyxcclxuICAgICAgLy8g5o6n5Yi257uE5Lu25pi+6ZqQXHJcbiAgICAgIHp0OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0ZXh0X3poaTogU3RyaW5nLFxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICBiaW5kR2V0VXNlckluZm8oZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIGUpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDnu4Tku7bmmL7pmpBcclxuICAgICAgY2h1ZmE6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICB0aGlzLnp0ID0gcmVzXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy50ZXh0XyA9IHRoaXMudGV4dF96aGk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=