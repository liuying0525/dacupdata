'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toastInfo = require('./../components/toastInfo.js');

var _toastInfo2 = _interopRequireDefault(_toastInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var secRegisterSuccess = function (_wepy$page) {
  _inherits(secRegisterSuccess, _wepy$page);

  function secRegisterSuccess() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, secRegisterSuccess);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = secRegisterSuccess.__proto__ || Object.getPrototypeOf(secRegisterSuccess)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '注册成功'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      // 去列表页面
      goLogin: function goLogin() {
        this.$redirect('secLogin');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(secRegisterSuccess, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return secRegisterSuccess;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(secRegisterSuccess , 'pages/secRegisterSuccess'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY1JlZ2lzdGVyU3VjY2Vzcy5qcyJdLCJuYW1lcyI6WyJzZWNSZWdpc3RlclN1Y2Nlc3MiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJnb0xvZ2luIiwiJHJlZGlyZWN0Iiwib3B0aW9uIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxrQjs7Ozs7Ozs7Ozs7Ozs7OE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUdQQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUFTLG1CQUFZO0FBQ25CLGFBQUtDLFNBQUwsQ0FBZSxVQUFmO0FBQ0Q7QUFKTyxLOzs7OzsyQkFNSEMsTSxFQUFRO0FBQ2IsV0FBS0osUUFBTCxHQUFnQixLQUFLSyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JOLFFBQXhDO0FBQ0Q7Ozs7RUFsQjZDTyxlQUFLQyxJOztrQkFBaENkLGtCIiwiZmlsZSI6InNlY1JlZ2lzdGVyU3VjY2Vzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBzZWNSZWdpc3RlclN1Y2Nlc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5rOo5YaM5oiQ5YqfJ1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5Y675YiX6KGo6aG16Z2iXHJcbiAgICAgIGdvTG9naW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjTG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=