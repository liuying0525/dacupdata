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
// 首页


var Bq = function (_wepy$component) {
  _inherits(Bq, _wepy$component);

  function Bq() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Bq);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Bq.__proto__ || Object.getPrototypeOf(Bq)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      right_zhi: '',
      // 文本信息
      text_zhi: '',
      // 图片地址
      img_link: '',
      url_link: ''
    }, _this.props = {
      text_: String,
      img_url: String,
      right_text: String
    }, _this.methods = {
      click_: function click_() {
        this.$emit('childFn', 'pinpai', {
          'zhi': this.text_zhi
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Bq, [{
    key: 'onLoad',

    // 初始化
    value: function onLoad() {
      this.text_zhi = this.text_;
      this.img_link = this.img_url;
      this.right_zhi = this.right_text;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return Bq;
}(_wepy2.default.component);

exports.default = Bq;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJxLmpzIl0sIm5hbWVzIjpbIkJxIiwiZGF0YSIsInJpZ2h0X3poaSIsInRleHRfemhpIiwiaW1nX2xpbmsiLCJ1cmxfbGluayIsInByb3BzIiwidGV4dF8iLCJTdHJpbmciLCJpbWdfdXJsIiwicmlnaHRfdGV4dCIsIm1ldGhvZHMiLCJjbGlja18iLCIkZW1pdCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7O0FBREY7OztJQUV1QkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxJLEdBQU87QUFDTEMsaUJBQVcsRUFETjtBQUVMO0FBQ0FDLGdCQUFVLEVBSEw7QUFJTDtBQUNBQyxnQkFBVSxFQUxMO0FBTUxDLGdCQUFTO0FBTkosSyxRQVFQQyxLLEdBQVE7QUFDTkMsYUFBT0MsTUFERDtBQUVOQyxlQUFTRCxNQUZIO0FBR05FLGtCQUFZRjtBQUhOLEssUUFLUkcsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQixRQUF0QixFQUFnQztBQUM5QixpQkFBTyxLQUFLVjtBQURrQixTQUFoQztBQUdEO0FBTE8sSzs7Ozs7O0FBT1Y7NkJBQ1M7QUFDUCxXQUFLQSxRQUFMLEdBQWdCLEtBQUtJLEtBQXJCO0FBQ0EsV0FBS0gsUUFBTCxHQUFnQixLQUFLSyxPQUFyQjtBQUNBLFdBQUtQLFNBQUwsR0FBaUIsS0FBS1EsVUFBdEI7QUFDRDs7OzZCQUNPO0FBQ04sV0FBS0wsUUFBTCxHQUFnQixLQUFLUyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JWLFFBQXhDO0FBQ0Q7Ozs7RUE3QjZCVyxlQUFLQyxTOztrQkFBaEJqQixFIiwiZmlsZSI6ImJxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIOmmlumhtVxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnEgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICByaWdodF96aGk6ICcnLFxyXG4gICAgICAvLyDmlofmnKzkv6Hmga9cclxuICAgICAgdGV4dF96aGk6ICcnLFxyXG4gICAgICAvLyDlm77niYflnLDlnYBcclxuICAgICAgaW1nX2xpbms6ICcnLFxyXG4gICAgICB1cmxfbGluazonJ1xyXG4gICAgfTtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0ZXh0XzogU3RyaW5nLFxyXG4gICAgICBpbWdfdXJsOiBTdHJpbmcsXHJcbiAgICAgIHJpZ2h0X3RleHQ6IFN0cmluZ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNsaWNrXygpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGlsZEZuJywgJ3BpbnBhaScsIHtcclxuICAgICAgICAgICd6aGknOiB0aGlzLnRleHRfemhpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDliJ3lp4vljJZcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgdGhpcy50ZXh0X3poaSA9IHRoaXMudGV4dF87XHJcbiAgICAgIHRoaXMuaW1nX2xpbmsgPSB0aGlzLmltZ191cmw7XHJcbiAgICAgIHRoaXMucmlnaHRfemhpID0gdGhpcy5yaWdodF90ZXh0O1xyXG4gICAgfVxyXG4gICAgb25TaG93KCl7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIH1cclxuXHJcbiAgfVxyXG4iXX0=