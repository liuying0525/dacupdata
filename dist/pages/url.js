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

var url = function (_wepy$page) {
  _inherits(url, _wepy$page);

  function url() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, url);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = url.__proto__ || Object.getPrototypeOf(url)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.components = {}, _this.data = {
      url: ""
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(url, [{
    key: 'onLoad',
    value: function onLoad(red) {
      console.log(red.url);
      this.url = red.url;
    }
  }]);

  return url;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(url , 'pages/url'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVybC5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwicmVkIiwiY29uc29sZSIsImxvZyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWEsRSxRQUViQyxJLEdBQU87QUFDTEosV0FBSTtBQURDLEssUUFJUEssTyxHQUFVLEU7Ozs7OzJCQUdIQyxHLEVBQUs7QUFDUkMsY0FBUUMsR0FBUixDQUFZRixJQUFJTixHQUFoQjtBQUNBLFdBQUtBLEdBQUwsR0FBU00sSUFBSU4sR0FBYjtBQUVIOzs7O0VBakI4QlMsZUFBS0MsSTs7a0JBQWpCVixHIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdXJsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJ1xyXG4gIH07XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICB9OyBcclxuICBkYXRhID0ge1xyXG4gICAgdXJsOlwiXCJcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gIH07XHJcblxyXG4gIG9uTG9hZChyZWQpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVkLnVybClcclxuICAgICAgdGhpcy51cmw9cmVkLnVybFxyXG4gICBcclxuICB9XHJcblxyXG4gIFxyXG59XHJcbiJdfQ==