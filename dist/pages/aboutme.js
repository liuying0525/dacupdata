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

var aboutme = function (_wepy$page) {
  _inherits(aboutme, _wepy$page);

  function aboutme() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, aboutme);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = aboutme.__proto__ || Object.getPrototypeOf(aboutme)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '关于我们'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(aboutme, [{
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return aboutme;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(aboutme , 'pages/aboutme'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0bWUuanMiXSwibmFtZXMiOlsiYWJvdXRtZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXJsX2xpbmsiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFLO0FBQ0hDLGdCQUFTO0FBRE4sSyxRQUdMQyxPLEdBQVU7QUFDUkMseUJBQW1CLDZCQUFZO0FBQzdCLGVBQU87QUFDTEMsZ0JBQU07QUFERCxTQUFQO0FBR0Q7QUFMTyxLOzs7Ozs2QkFPRjtBQUNOLFdBQUtILFFBQUwsR0FBZ0IsS0FBS0ksT0FBTCxDQUFhQyxVQUFiLENBQXdCTCxRQUF4QztBQUNEOzs7O0VBaEJrQ00sZUFBS0MsSTs7a0JBQXJCWCxPIiwiZmlsZSI6ImFib3V0bWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYWJvdXRtZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICflhbPkuo7miJHku6wnXHJcbiAgICB9O1xyXG4gICAgZGF0YT17XHJcbiAgICAgIHVybF9saW5rOicnXHJcbiAgICB9XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBvblNob3coKXtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgfVxyXG4gIH1cclxuIl19