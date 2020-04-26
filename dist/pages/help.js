'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var help = function (_wepy$page) {
  _inherits(help, _wepy$page);

  function help() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, help);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = help.__proto__ || Object.getPrototypeOf(help)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '帮助中心'
    }, _this.data = {
      type: 'dq'
    }, _this.methods = {
      changeText: function changeText(type) {
        this.type = type;
      },
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '400-920-7258' //联系客服
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return help;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(help , 'pages/help'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuanMiXSwibmFtZXMiOlsiaGVscCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidHlwZSIsIm1ldGhvZHMiLCJjaGFuZ2VUZXh0Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwidGFwX3RlbCIsInd4IiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFHUEMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFVRixJQUFWLEVBQWdCO0FBQzFCLGFBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNELE9BSE87QUFJUkcseUJBQW1CLDZCQUFXO0FBQzVCLGVBQU87QUFDTEMsZ0JBQU07QUFERCxTQUFQO0FBR0QsT0FSTztBQVNSQyxhQVRRLHFCQVNFO0FBQ1JDLFdBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQWEsY0FERSxDQUNhO0FBRGIsU0FBakI7QUFHRDtBQWJPLEs7Ozs7RUFQc0JDLGVBQUtDLEk7O2tCQUFsQmQsSSIsImZpbGUiOiJoZWxwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaGVscCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W4ruWKqeS4reW/gydcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICB0eXBlOiAnZHEnXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBjaGFuZ2VUZXh0OiBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfSxcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHRhcF90ZWwoKSB7XHJcbiAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgIHBob25lTnVtYmVyOiAnNDAwLTkyMC03MjU4JyAvL+iBlOezu+WuouacjVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==