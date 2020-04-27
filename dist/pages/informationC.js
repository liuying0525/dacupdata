'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toastInfo = require('./../components/toastInfo.js');

var _toastInfo2 = _interopRequireDefault(_toastInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var informationC = function (_wepy$page) {
  _inherits(informationC, _wepy$page);

  function informationC() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, informationC);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = informationC.__proto__ || Object.getPrototypeOf(informationC)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '客户信息变更',
      onReachBottomDistance: 50
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      iphoneX: false,
      url_link: '',
      parent_data: ''
    }, _this.methods = {
      //还款卡变更
      cardChange: function cardChange() {
        wx.navigateTo({
          url: 'cardList'
        });
      },

      //修改手机号
      phonePerson: function phonePerson() {
        wx.navigateTo({
          url: 'phoneList'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(informationC, [{
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      var res = wx.getSystemInfoSync();
      if (res.model.search('iPhone X') !== -1) {
        this.iphoneX = true;
      } else {
        this.iphoneX = false;
      }
      if (this.parent_data.login_token !== '') {} else {
        this.$redirect('secLogin', { backUrl: 'informationC' });
      }
    }
  }]);

  return informationC;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(informationC , 'pages/informationC'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uQy5qcyJdLCJuYW1lcyI6WyJpbmZvcm1hdGlvbkMiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwib25SZWFjaEJvdHRvbURpc3RhbmNlIiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJpcGhvbmVYIiwidXJsX2xpbmsiLCJwYXJlbnRfZGF0YSIsIm1ldGhvZHMiLCJjYXJkQ2hhbmdlIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGhvbmVQZXJzb24iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInJlcyIsImdldFN5c3RlbUluZm9TeW5jIiwibW9kZWwiLCJzZWFyY2giLCJsb2dpbl90b2tlbiIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsUUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsSSxHQUFPO0FBQ0xDLGVBQVEsS0FESDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLG1CQUFhO0FBSFIsSyxRQU1QQyxPLEdBQVU7QUFDVjtBQUNBQyxnQkFGVSx3QkFFRztBQUNQQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHTCxPQU5TOztBQU9WO0FBQ0FDLGlCQVJVLHlCQVFJO0FBQ1JILFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUlMO0FBYlMsSzs7Ozs7NkJBaUJELENBR1I7Ozs2QkFDUTtBQUNQLFdBQUtOLFFBQUwsR0FBZ0IsS0FBS1EsT0FBTCxDQUFhQyxVQUFiLENBQXdCVCxRQUF4QztBQUNBLFdBQUtDLFdBQUwsR0FBbUIsS0FBS08sT0FBTCxDQUFhQyxVQUFoQztBQUNBLFVBQUlDLE1BQU1OLEdBQUdPLGlCQUFILEVBQVY7QUFDQSxVQUFJRCxJQUFJRSxLQUFKLENBQVVDLE1BQVYsQ0FBaUIsVUFBakIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxhQUFLZCxPQUFMLEdBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFDRCxVQUFJLEtBQUtFLFdBQUwsQ0FBaUJhLFdBQWpCLEtBQWlDLEVBQXJDLEVBQXlDLENBRXhDLENBRkQsTUFFTztBQUNMLGFBQUtDLFNBQUwsQ0FBZSxVQUFmLEVBQTBCLEVBQUNDLFNBQVMsY0FBVixFQUExQjtBQUNEO0FBQ0Y7Ozs7RUFqRHVDQyxlQUFLQyxJOztrQkFBMUIxQixZIiwiZmlsZSI6ImluZm9ybWF0aW9uQy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5mb3JtYXRpb25DIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WuouaIt+S/oeaBr+WPmOabtCcsXHJcbiAgICAgIG9uUmVhY2hCb3R0b21EaXN0YW5jZTogNTBcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlwaG9uZVg6ZmFsc2UsXHJcbiAgICAgIHVybF9saW5rOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnXHJcbiAgICB9O1xyXG4gXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgLy/ov5jmrL7ljaHlj5jmm7RcclxuICAgIGNhcmRDaGFuZ2UoKSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnY2FyZExpc3QnXHJcbiAgICAgICAgICB9KTsgIFxyXG4gICAgfSxcclxuICAgIC8v5L+u5pS55omL5py65Y+3XHJcbiAgICBwaG9uZVBlcnNvbigpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdwaG9uZUxpc3QnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICB9LFxyXG4gXHJcbiAgICB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIGlmIChyZXMubW9kZWwuc2VhcmNoKCdpUGhvbmUgWCcpICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaXBob25lWCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pcGhvbmVYID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyZW50X2RhdGEubG9naW5fdG9rZW4gIT09ICcnKSB7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJHJlZGlyZWN0KCdzZWNMb2dpbicse2JhY2tVcmw6ICdpbmZvcm1hdGlvbkMnfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==