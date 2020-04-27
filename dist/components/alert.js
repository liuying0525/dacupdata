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


var alert = function (_wepy$component) {
  _inherits(alert, _wepy$component);

  function alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = alert.__proto__ || Object.getPrototypeOf(alert)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 文本信息
      text_: '',
      // 控制弹框的显隐
      zt: false
    }, _this.props = {
      // 文本信息
      text_zhi: String
    }, _this.methods = {
      // 获取手机号
      bindalertInfo: function bindalertInfo(e) {
        this.$parent.$parent.globalData.logining = true;
        this.$emit('childFn', {
          iv: e.detail.iv,
          miyao: e.detail.encryptedData
        });
        // wx.setStorageSync('detailInfo', JSON.stringify(e.detail));
      },

      // 控制弹框的显隐
      chufa: function chufa(res) {
        this.$parent.$parent.globalData.logining = false;
        this.zt = res;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(alert, [{
    key: 'onLoad',

    // 渲染页面
    value: function onLoad() {
      this.text_ = this.text_zhi;
      this.$apply();
    }
  }]);

  return alert;
}(_wepy2.default.component);

exports.default = alert;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmpzIl0sIm5hbWVzIjpbImFsZXJ0IiwiZGF0YSIsInRleHRfIiwienQiLCJwcm9wcyIsInRleHRfemhpIiwiU3RyaW5nIiwibWV0aG9kcyIsImJpbmRhbGVydEluZm8iLCJlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJsb2dpbmluZyIsIiRlbWl0IiwiaXYiLCJkZXRhaWwiLCJtaXlhbyIsImVuY3J5cHRlZERhdGEiLCJjaHVmYSIsInJlcyIsIiRhcHBseSIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0w7QUFDQUMsYUFBTyxFQUZGO0FBR0w7QUFDQUMsVUFBSTtBQUpDLEssUUFNUEMsSyxHQUFRO0FBQ047QUFDQUMsZ0JBQVVDO0FBRkosSyxRQUlSQyxPLEdBQVU7QUFDUjtBQUNBQyxtQkFGUSx5QkFFTUMsQ0FGTixFQUVTO0FBQ2YsYUFBS0MsT0FBTCxDQUFhQSxPQUFiLENBQXFCQyxVQUFyQixDQUFnQ0MsUUFBaEMsR0FBMkMsSUFBM0M7QUFDQSxhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQjtBQUNwQkMsY0FBSUwsRUFBRU0sTUFBRixDQUFTRCxFQURPO0FBRXBCRSxpQkFBT1AsRUFBRU0sTUFBRixDQUFTRTtBQUZJLFNBQXRCO0FBSUE7QUFDRCxPQVRPOztBQVVSO0FBQ0FDLFdBWFEsaUJBV0ZDLEdBWEUsRUFXRztBQUNULGFBQUtULE9BQUwsQ0FBYUEsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NDLFFBQWhDLEdBQTJDLEtBQTNDO0FBQ0EsYUFBS1QsRUFBTCxHQUFVZ0IsR0FBVjtBQUNEO0FBZE8sSzs7Ozs7O0FBZ0JWOzZCQUNTO0FBQ1AsV0FBS2pCLEtBQUwsR0FBYSxLQUFLRyxRQUFsQjtBQUNBLFdBQUtlLE1BQUw7QUFDRDs7OztFQS9CZ0NDLGVBQUtDLFM7O2tCQUFuQnRCLEsiLCJmaWxlIjoiYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyDojrflj5bmiYvmnLrlj7dcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBhbGVydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOaWh+acrOS/oeaBr1xyXG4gICAgICB0ZXh0XzogJycsXHJcbiAgICAgIC8vIOaOp+WItuW8ueahhueahOaYvumakFxyXG4gICAgICB6dDogZmFsc2VcclxuICAgIH07XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgLy8g5paH5pys5L+h5oGvXHJcbiAgICAgIHRleHRfemhpOiBTdHJpbmdcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDojrflj5bmiYvmnLrlj7dcclxuICAgICAgYmluZGFsZXJ0SW5mbyhlKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbmluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIHtcclxuICAgICAgICAgIGl2OiBlLmRldGFpbC5pdixcclxuICAgICAgICAgIG1peWFvOiBlLmRldGFpbC5lbmNyeXB0ZWREYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gd3guc2V0U3RvcmFnZVN5bmMoJ2RldGFpbEluZm8nLCBKU09OLnN0cmluZ2lmeShlLmRldGFpbCkpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmjqfliLblvLnmoYbnmoTmmL7pmpBcclxuICAgICAgY2h1ZmEocmVzKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuenQgPSByZXM7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDmuLLmn5PpobXpnaJcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy50ZXh0XyA9IHRoaXMudGV4dF96aGk7XHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=