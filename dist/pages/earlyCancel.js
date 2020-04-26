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

var earlyCancel = function (_wepy$page) {
  _inherits(earlyCancel, _wepy$page);

  function earlyCancel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, earlyCancel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = earlyCancel.__proto__ || Object.getPrototypeOf(earlyCancel)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提前还款'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      },
      goList: function goList() {
        wx.navigateBack({
          delta: 2
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(earlyCancel, [{
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return earlyCancel;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlyCancel , 'pages/earlyCancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5Q2FuY2VsLmpzIl0sIm5hbWVzIjpbImVhcmx5Q2FuY2VsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJtYWtlQ2FsbCIsInBob25lIiwid3giLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJnb0xpc3QiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFHUEMsTyxHQUFVO0FBQ1JDLGdCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3pCQyxXQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhSDtBQURFLFNBQWpCO0FBR0QsT0FMTztBQU1SSSxjQUFRLGtCQUFZO0FBQ2xCSCxXQUFHSSxZQUFILENBQWdCO0FBQ2RDLGlCQUFPO0FBRE8sU0FBaEI7QUFHRDtBQVZPLEs7Ozs7OzZCQVlEO0FBQ1AsV0FBS1QsUUFBTCxHQUFnQixLQUFLVSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JYLFFBQXhDO0FBQ0Q7Ozs7RUFyQnNDWSxlQUFLQyxJOztrQkFBekJqQixXIiwiZmlsZSI6ImVhcmx5Q2FuY2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBlYXJseUNhbmNlbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DliY3ov5jmrL4nXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgbWFrZUNhbGw6IGZ1bmN0aW9uIChwaG9uZSkge1xyXG4gICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ29MaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgfVxyXG4gIH1cclxuIl19