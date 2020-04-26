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

var loanprocess = function (_wepy$page) {
  _inherits(loanprocess, _wepy$page);

  function loanprocess() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, loanprocess);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = loanprocess.__proto__ || Object.getPrototypeOf(loanprocess)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '贷款流程'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/loanprocess'
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(loanprocess, [{
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return loanprocess;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(loanprocess , 'pages/loanprocess'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW5wcm9jZXNzLmpzIl0sIm5hbWVzIjpbImxvYW5wcm9jZXNzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVM7QUFESixLLFFBSVBDLE8sR0FBVTtBQUNSQyx5QkFBbUIsNkJBQVk7QUFDL0IsZUFBTztBQUNEQyxnQkFBTTtBQURMLFNBQVA7QUFHRztBQUxLLEs7Ozs7OzZCQU9EO0FBQ1AsV0FBS0gsUUFBTCxHQUFnQixLQUFLSSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JMLFFBQXhDO0FBQ0Q7Ozs7RUFqQnNDTSxlQUFLQyxJOztrQkFBekJYLFciLCJmaWxlIjoibG9hbnByb2Nlc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxvYW5wcm9jZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6LS35qy+5rWB56iLJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIHVybF9saW5rOicnXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2xvYW5wcm9jZXNzJ1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICB9O1xyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICB9XHJcbn1cclxuIl19