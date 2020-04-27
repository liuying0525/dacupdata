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

var indemnityState = function (_wepy$page) {
  _inherits(indemnityState, _wepy$page);

  function indemnityState() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, indemnityState);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = indemnityState.__proto__ || Object.getPrototypeOf(indemnityState)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '保险赔付'
    }, _this.data = {
      url_link: '',
      stateIcon: ['lpz.png', 'yfs.png', 'yjc.png'],
      stateText: ['生成中...', '已发送', '已寄出'],
      stateDesc: ['别急，理赔函我们正努力为你生成', '电子理赔函已发送至你的邮箱1223344@ss.com,请注意查收', '纸质理赔函已寄往你提供的住址，请注意查收'],
      stateNum: 2
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(indemnityState, [{
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return indemnityState;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indemnityState , 'pages/indemnityState'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVtbml0eVN0YXRlLmpzIl0sIm5hbWVzIjpbImluZGVtbml0eVN0YXRlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1cmxfbGluayIsInN0YXRlSWNvbiIsInN0YXRlVGV4dCIsInN0YXRlRGVzYyIsInN0YXRlTnVtIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsYzs7Ozs7Ozs7Ozs7Ozs7c01BQ25CQyxNLEdBQVE7QUFDTkMsOEJBQXdCO0FBRGxCLEssUUFHUkMsSSxHQUFPO0FBQ0xDLGdCQUFTLEVBREo7QUFFTEMsaUJBQVcsQ0FBQyxTQUFELEVBQVcsU0FBWCxFQUFxQixTQUFyQixDQUZOO0FBR0xDLGlCQUFXLENBQUMsUUFBRCxFQUFVLEtBQVYsRUFBZ0IsS0FBaEIsQ0FITjtBQUlMQyxpQkFBVyxDQUFDLGlCQUFELEVBQW1CLG1DQUFuQixFQUF1RCxzQkFBdkQsQ0FKTjtBQUtMQyxnQkFBVTtBQUxMLEs7Ozs7OzZCQU9FO0FBQ1AsV0FBS0osUUFBTCxHQUFnQixLQUFLSyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JOLFFBQXhDO0FBQ0Q7Ozs7RUFieUNPLGVBQUtDLEk7O2tCQUE1QlosYyIsImZpbGUiOiJpbmRlbW5pdHlTdGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRlbW5pdHlTdGF0ZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgIGNvbmZpZz0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkv53pmanotZTku5gnXHJcbiAgICAgIH07XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsX2xpbms6JycsXHJcbiAgICAgICAgc3RhdGVJY29uOiBbJ2xwei5wbmcnLCd5ZnMucG5nJywneWpjLnBuZyddLFxyXG4gICAgICAgIHN0YXRlVGV4dDogWyfnlJ/miJDkuK0uLi4nLCflt7Llj5HpgIEnLCflt7Llr4Tlh7onXSxcclxuICAgICAgICBzdGF0ZURlc2M6IFsn5Yir5oCl77yM55CG6LWU5Ye95oiR5Lus5q2j5Yqq5Yqb5Li65L2g55Sf5oiQJywn55S15a2Q55CG6LWU5Ye95bey5Y+R6YCB6Iez5L2g55qE6YKu566xMTIyMzM0NEBzcy5jb20s6K+35rOo5oSP5p+l5pS2Jywn57q46LSo55CG6LWU5Ye95bey5a+E5b6A5L2g5o+Q5L6b55qE5L2P5Z2A77yM6K+35rOo5oSP5p+l5pS2J10sXHJcbiAgICAgICAgc3RhdGVOdW06IDJcclxuICAgICAgfTtcclxuICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0=