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
// 获取手机号


var getCoupon = function (_wepy$component) {
  _inherits(getCoupon, _wepy$component);

  function getCoupon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, getCoupon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = getCoupon.__proto__ || Object.getPrototypeOf(getCoupon)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      couponShow: false,
      info: ''
    }, _this.events = {
      'showCoupon': function showCoupon(info, $event) {
        _this.info = info;
        if (_this.info !== null) {
          _this.couponShow = !_this.info.hidden;
        }
        console.log(info);
      }
    }, _this.methods = {
      closeCoupon: function closeCoupon() {
        this.couponShow = false;
      },
      goCoupons: function goCoupons() {
        this.$parent.$navigate('coupon');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(getCoupon, [{
    key: 'onLoad',

    // 渲染页面
    value: function onLoad() {}
  }]);

  return getCoupon;
}(_wepy2.default.component);

exports.default = getCoupon;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldENvdXBvbi5qcyJdLCJuYW1lcyI6WyJnZXRDb3Vwb24iLCJkYXRhIiwiY291cG9uU2hvdyIsImluZm8iLCJldmVudHMiLCIkZXZlbnQiLCJoaWRkZW4iLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNsb3NlQ291cG9uIiwiZ29Db3Vwb25zIiwiJHBhcmVudCIsIiRuYXZpZ2F0ZSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsSSxHQUFPO0FBQ0xDLGtCQUFXLEtBRE47QUFFTEMsWUFBTTtBQUZELEssUUFJUEMsTSxHQUFTO0FBQ0wsb0JBQWMsb0JBQUNELElBQUQsRUFBTUUsTUFBTixFQUFpQjtBQUM3QixjQUFLRixJQUFMLEdBQVlBLElBQVo7QUFDQSxZQUFHLE1BQUtBLElBQUwsS0FBWSxJQUFmLEVBQXFCO0FBQ25CLGdCQUFLRCxVQUFMLEdBQWtCLENBQUMsTUFBS0MsSUFBTCxDQUFVRyxNQUE3QjtBQUNEO0FBQ0RDLGdCQUFRQyxHQUFSLENBQVlMLElBQVo7QUFDRDtBQVBJLEssUUFTVE0sTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNNO0FBQ1osYUFBS1IsVUFBTCxHQUFrQixLQUFsQjtBQUNELE9BSE87QUFJUlMsZUFKUSx1QkFJSTtBQUNWLGFBQUtDLE9BQUwsQ0FBYUMsU0FBYixDQUF1QixRQUF2QjtBQUNEO0FBTk8sSzs7Ozs7O0FBUVY7NkJBQ1MsQ0FDUjs7OztFQXhCb0NDLGVBQUtDLFM7O2tCQUF2QmYsUyIsImZpbGUiOiJnZXRDb3Vwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyDojrflj5bmiYvmnLrlj7dcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBnZXRDb3Vwb24gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBjb3Vwb25TaG93OmZhbHNlLFxyXG4gICAgICBpbmZvOiAnJ1xyXG4gICAgfTtcclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgICAnc2hvd0NvdXBvbic6IChpbmZvLCRldmVudCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5pbmZvID0gaW5mb1xyXG4gICAgICAgICAgaWYodGhpcy5pbmZvIT09bnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvdXBvblNob3cgPSAhdGhpcy5pbmZvLmhpZGRlbjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNsb3NlQ291cG9uKCkge1xyXG4gICAgICAgIHRoaXMuY291cG9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBnb0NvdXBvbnMoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LiRuYXZpZ2F0ZSgnY291cG9uJyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDmuLLmn5PpobXpnaJcclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==