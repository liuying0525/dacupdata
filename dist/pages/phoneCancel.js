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

var phoneCancel = function (_wepy$page) {
  _inherits(phoneCancel, _wepy$page);

  function phoneCancel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, phoneCancel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = phoneCancel.__proto__ || Object.getPrototypeOf(phoneCancel)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改手机号'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      },
      // 去列表页面
      goList: function goList() {
        wx.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(phoneCancel, [{
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return phoneCancel;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(phoneCancel , 'pages/phoneCancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lQ2FuY2VsLmpzIl0sIm5hbWVzIjpbInBob25lQ2FuY2VsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJtYWtlQ2FsbCIsInBob25lIiwid3giLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJnb0xpc3QiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFHUEMsTyxHQUFVO0FBQ1JDLGdCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3pCQyxXQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhSDtBQURFLFNBQWpCO0FBR0QsT0FMTztBQU1SO0FBQ0FJLFlBUFEsb0JBT0M7QUFDUEgsV0FBR0ksWUFBSCxDQUFnQjtBQUNkQyxpQkFBTztBQURPLFNBQWhCO0FBR0Q7QUFYTyxLOzs7Ozs2QkFhRDtBQUNQLFdBQUtULFFBQUwsR0FBZ0IsS0FBS1UsT0FBTCxDQUFhQyxVQUFiLENBQXdCWCxRQUF4QztBQUNEOzs7O0VBdEJzQ1ksZUFBS0MsSTs7a0JBQXpCakIsVyIsImZpbGUiOiJwaG9uZUNhbmNlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGhvbmVDYW5jZWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+u5pS55omL5py65Y+3J1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVybF9saW5rOiAnJ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG1ha2VDYWxsOiBmdW5jdGlvbiAocGhvbmUpIHtcclxuICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWOu+WIl+ihqOmhtemdolxyXG4gICAgICBnb0xpc3QoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=