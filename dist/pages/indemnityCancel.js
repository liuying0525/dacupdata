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

var indemnityCancel = function (_wepy$page) {
  _inherits(indemnityCancel, _wepy$page);

  function indemnityCancel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, indemnityCancel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = indemnityCancel.__proto__ || Object.getPrototypeOf(indemnityCancel)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '理赔证明'
    }, _this.data = {
      url_link: ''
    }, _this.methods = {
      // 去列表页面
      goList: function goList() {
        wx.navigateBack({
          delta: 1
        });
      },

      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(indemnityCancel, [{
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return indemnityCancel;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indemnityCancel , 'pages/indemnityCancel'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVtbml0eUNhbmNlbC5qcyJdLCJuYW1lcyI6WyJpbmRlbW5pdHlDYW5jZWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVybF9saW5rIiwibWV0aG9kcyIsImdvTGlzdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJtYWtlQ2FsbCIsInBob25lIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUdQQyxPLEdBQVU7QUFDUjtBQUNBQyxZQUZRLG9CQUVDO0FBQ1BDLFdBQUdDLFlBQUgsQ0FBZ0I7QUFDZEMsaUJBQU87QUFETyxTQUFoQjtBQUdELE9BTk87O0FBT1JDLGdCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3pCSixXQUFHSyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhRjtBQURFLFNBQWpCO0FBR0Q7QUFYTyxLOzs7Ozs2QkFhRDtBQUNQLFdBQUtQLFFBQUwsR0FBZ0IsS0FBS1UsT0FBTCxDQUFhQyxVQUFiLENBQXdCWCxRQUF4QztBQUNEOzs7O0VBdEIwQ1ksZUFBS0MsSTs7a0JBQTdCakIsZSIsImZpbGUiOiJpbmRlbW5pdHlDYW5jZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGVtbml0eUNhbmNlbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnkIbotZTor4HmmI4nXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5Y675YiX6KGo6aG16Z2iXHJcbiAgICAgIGdvTGlzdCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBtYWtlQ2FsbDogZnVuY3Rpb24gKHBob25lKSB7XHJcbiAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGhvbmVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIH1cclxuICB9XHJcbiJdfQ==