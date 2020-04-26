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

var cardCancel = function (_wepy$page) {
  _inherits(cardCancel, _wepy$page);

  function cardCancel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cardCancel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cardCancel.__proto__ || Object.getPrototypeOf(cardCancel)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      // 去列表页面
      goList: function goList() {
        wx.navigateBack({
          delta: 2
        });
      },

      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cardCancel, [{
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return cardCancel;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cardCancel , 'pages/cardCancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRDYW5jZWwuanMiXSwibmFtZXMiOlsiY2FyZENhbmNlbCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXJsX2xpbmsiLCJtZXRob2RzIiwiZ29MaXN0Iiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1ha2VDYWxsIiwicGhvbmUiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBR1BDLE8sR0FBVTtBQUNSO0FBQ0FDLFlBRlEsb0JBRUM7QUFDUEMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxpQkFBTztBQURPLFNBQWhCO0FBR0QsT0FOTzs7QUFPUkMsZ0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDekJKLFdBQUdLLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQWFGO0FBREUsU0FBakI7QUFHRDtBQVhPLEs7Ozs7OzZCQWFEO0FBQ1AsV0FBS1AsUUFBTCxHQUFnQixLQUFLVSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JYLFFBQXhDO0FBQ0Q7Ozs7RUF0QnFDWSxlQUFLQyxJOztrQkFBeEJqQixVIiwiZmlsZSI6ImNhcmRDYW5jZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmRDYW5jZWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6L+Y5qy+5Y2h5Y+Y5pu0J1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVybF9saW5rOiAnJ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOWOu+WIl+ihqOmhtemdolxyXG4gICAgICBnb0xpc3QoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgbWFrZUNhbGw6IGZ1bmN0aW9uIChwaG9uZSkge1xyXG4gICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=