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
// 底部导航


var Leotable = function (_wepy$component) {
  _inherits(Leotable, _wepy$component);

  function Leotable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Leotable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Leotable.__proto__ || Object.getPrototypeOf(Leotable)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 文本值
      che: '',
      ys: '',
      my: '',
      // 底部padding的值
      btuBottom: ''
    }, _this.props = {
      che_: String,
      ys_: String,
      my_: String
    }, _this.methods = {
      // 去直租
      zhizu: function zhizu() {
        this.$emit('childFn', 'straight');
      },

      // 去新车贷款
      xcdk: function xcdk() {
        this.$emit('childFn', 'index');
      },

      // 去我的页面
      my: function my() {
        this.$emit('childFn', 'my');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Leotable, [{
    key: 'onLoad',

    // 初始化数据
    value: function onLoad() {
      var parent_data = this.$parent.$parent.globalData;
      var res = wx.getSystemInfoSync();
      parent_data.login_phonemodel = res.model;
      if (res.model.search('iPhone X') != -1) {
        this.btuBottom = '68rpx';
      } else {
        this.btuBottom = '15rpx';
      }
      this.che = this.che_;
      this.ys = this.ys_;
      this.my = this.my_;
      console.log(this.che);
      this.$apply();
    }
  }]);

  return Leotable;
}(_wepy2.default.component);

exports.default = Leotable;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlb3RhYmxlLmpzIl0sIm5hbWVzIjpbIkxlb3RhYmxlIiwiZGF0YSIsImNoZSIsInlzIiwibXkiLCJidHVCb3R0b20iLCJwcm9wcyIsImNoZV8iLCJTdHJpbmciLCJ5c18iLCJteV8iLCJtZXRob2RzIiwiemhpenUiLCIkZW1pdCIsInhjZGsiLCJwYXJlbnRfZGF0YSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVzIiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsImxvZ2luX3Bob25lbW9kZWwiLCJtb2RlbCIsInNlYXJjaCIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEksR0FBTztBQUNMO0FBQ0FDLFdBQUssRUFGQTtBQUdMQyxVQUFJLEVBSEM7QUFJTEMsVUFBSSxFQUpDO0FBS0w7QUFDQUMsaUJBQVc7QUFOTixLLFFBUVBDLEssR0FBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLFdBQUtELE1BRkM7QUFHTkUsV0FBS0Y7QUFIQyxLLFFBS1JHLE8sR0FBVTtBQUNSO0FBQ0FDLFdBRlEsbUJBRUE7QUFDTixhQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQixVQUF0QjtBQUNELE9BSk87O0FBS1I7QUFDQUMsVUFOUSxrQkFNRDtBQUNMLGFBQUtELEtBQUwsQ0FBVyxTQUFYLEVBQXNCLE9BQXRCO0FBQ0QsT0FSTzs7QUFTUjtBQUNBVCxRQVZRLGdCQVVIO0FBQ0gsYUFBS1MsS0FBTCxDQUFXLFNBQVgsRUFBc0IsSUFBdEI7QUFDRDtBQVpPLEs7Ozs7OztBQWNWOzZCQUNTO0FBQ1AsVUFBSUUsY0FBYyxLQUFLQyxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXZDO0FBQ0EsVUFBSUMsTUFBTUMsR0FBR0MsaUJBQUgsRUFBVjtBQUNBTCxrQkFBWU0sZ0JBQVosR0FBK0JILElBQUlJLEtBQW5DO0FBQ0EsVUFBSUosSUFBSUksS0FBSixDQUFVQyxNQUFWLENBQWlCLFVBQWpCLEtBQWdDLENBQUMsQ0FBckMsRUFBd0M7QUFDdEMsYUFBS2xCLFNBQUwsR0FBaUIsT0FBakI7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxTQUFMLEdBQWlCLE9BQWpCO0FBQ0Q7QUFDRCxXQUFLSCxHQUFMLEdBQVcsS0FBS0ssSUFBaEI7QUFDQSxXQUFLSixFQUFMLEdBQVUsS0FBS00sR0FBZjtBQUNBLFdBQUtMLEVBQUwsR0FBVSxLQUFLTSxHQUFmO0FBQ0FjLGNBQVFDLEdBQVIsQ0FBWSxLQUFLdkIsR0FBakI7QUFDQSxXQUFLd0IsTUFBTDtBQUNEOzs7O0VBM0NtQ0MsZUFBS0MsUzs7a0JBQXRCNUIsUSIsImZpbGUiOiJsZW90YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC8vIOW6lemDqOWvvOiIqlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExlb3RhYmxlIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5paH5pys5YC8XHJcbiAgICAgIGNoZTogJycsXHJcbiAgICAgIHlzOiAnJyxcclxuICAgICAgbXk6ICcnLFxyXG4gICAgICAvLyDlupXpg6hwYWRkaW5n55qE5YC8XHJcbiAgICAgIGJ0dUJvdHRvbTogJydcclxuICAgIH07XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgY2hlXzogU3RyaW5nLFxyXG4gICAgICB5c186IFN0cmluZyxcclxuICAgICAgbXlfOiBTdHJpbmdcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDljrvnm7Tnp59cclxuICAgICAgemhpenUoKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsICdzdHJhaWdodCcpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDljrvmlrDovabotLfmrL5cclxuICAgICAgeGNkaygpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGlsZEZuJywgJ2luZGV4Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWOu+aIkeeahOmhtemdolxyXG4gICAgICBteSgpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGlsZEZuJywgJ215Jyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIHBhcmVudF9kYXRhLmxvZ2luX3Bob25lbW9kZWwgPSByZXMubW9kZWw7XHJcbiAgICAgIGlmIChyZXMubW9kZWwuc2VhcmNoKCdpUGhvbmUgWCcpICE9IC0xKSB7XHJcbiAgICAgICAgdGhpcy5idHVCb3R0b20gPSAnNjhycHgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYnR1Qm90dG9tID0gJzE1cnB4JztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoZSA9IHRoaXMuY2hlXztcclxuICAgICAgdGhpcy55cyA9IHRoaXMueXNfO1xyXG4gICAgICB0aGlzLm15ID0gdGhpcy5teV87XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2hlKVxyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19