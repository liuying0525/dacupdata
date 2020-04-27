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

var CardGetAgain = function (_wepy$page) {
  _inherits(CardGetAgain, _wepy$page);

  function CardGetAgain() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardGetAgain);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardGetAgain.__proto__ || Object.getPrototypeOf(CardGetAgain)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.data = {
      parent_data: '',
      email: '',
      recordId: '',
      canClickAgin: true,
      createtime: '',
      emailaddress: ''
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.methods = {
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      },
      sendAgain: function sendAgain() {
        var that = this;
        if (!that.canClickAgin) {
          return false;
        }
        that.canClickAgin = false;
        if (!that.$invoke('toastInfo', 'emailReg', that.email)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '邮箱格式错误');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/email/sendAuthorization',
          data: {
            userId: that.parent_data.login_userId,
            loginToken: that.parent_data.login_token,
            recordId: that.recordId,
            email: that.email
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            that.canClickAgin = true;
            if (res.data.code == '10001') {
              wx.navigateBack({
                delta: 1
              });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail() {
            console.log('邮件发送失败');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardGetAgain, [{
    key: 'showearly',
    value: function showearly() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/email/latelyRecord',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token,
          recordId: that.recordId
        },
        success: function success(res) {
          console.log(res);
          if (res.data.code == '10001') {
            that.createtime = that.timeReg(res.data.data.createTime);
            that.emailaddress = res.data.data.receiver;
            that.$apply();
          }
        }
      });
    }
  }, {
    key: 'timeReg',
    value: function timeReg(num) {
      var date = new Date(num * 1000);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
      var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      this.parent_data = this.$parent.globalData;
      this.recordId = options.id;
    }
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
      if (this.parent_data.login_token !== '') {

        this.showearly();
      } else {
        this.$redirect('secLogin', { backUrl: 'cardGetAgain' });
      }
    }
  }]);

  return CardGetAgain;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(CardGetAgain , 'pages/cardGetAgain'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRHZXRBZ2Fpbi5qcyJdLCJuYW1lcyI6WyJDYXJkR2V0QWdhaW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInBhcmVudF9kYXRhIiwiZW1haWwiLCJyZWNvcmRJZCIsImNhbkNsaWNrQWdpbiIsImNyZWF0ZXRpbWUiLCJlbWFpbGFkZHJlc3MiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwibWV0aG9kcyIsImNoYW5nZVZhbHVlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibmFtZSIsImRldGFpbCIsInZhbHVlIiwic2VuZEFnYWluIiwidGhhdCIsIiRpbnZva2UiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsInVzZXJJZCIsImxvZ2luX3VzZXJJZCIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJtc2ciLCJmYWlsIiwiY29uc29sZSIsImxvZyIsInRpbWVSZWciLCJjcmVhdGVUaW1lIiwicmVjZWl2ZXIiLCIkYXBwbHkiLCJudW0iLCJkYXRlIiwiRGF0ZSIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsIm9wdGlvbnMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImlkIiwidXJsX2xpbmsiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1vZGVsIiwic2VhcmNoIiwiaXBob25lWCIsInNob3dlYXJseSIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIs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QixLQUFLMEQsT0FBTCxDQUFhQyxVQUFoQztBQUNBLFVBQUk3QixNQUFNWCxHQUFHMkMsaUJBQUgsRUFBVjtBQUNBLFVBQUloQyxJQUFJaUMsS0FBSixDQUFVQyxNQUFWLENBQWlCLFVBQWpCLE1BQWlDLENBQUMsQ0FBdEMsRUFBeUM7QUFDdkMsYUFBS0MsT0FBTCxHQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBQ0QsVUFBSSxLQUFLakUsV0FBTCxDQUFpQjBCLFdBQWpCLEtBQWlDLEVBQXJDLEVBQXlDOztBQUV4QyxhQUFLd0MsU0FBTDtBQUNBLE9BSEQsTUFHTztBQUNMLGFBQUtDLFNBQUwsQ0FBZSxVQUFmLEVBQTBCLEVBQUNDLFNBQVMsY0FBVixFQUExQjtBQUNEO0FBQ0Y7Ozs7RUEzR3VDQyxlQUFLQyxJOztrQkFBMUIxRSxZIiwiZmlsZSI6ImNhcmRHZXRBZ2Fpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkR2V0QWdhaW4gZXh0ZW5kcyB3ZXB5LnBhZ2V7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfov5jmrL7ljaHlj5jmm7QnXHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcmVjb3JkSWQ6ICcnLFxyXG4gICAgICBjYW5DbGlja0FnaW46dHJ1ZSxcclxuICAgICAgY3JlYXRldGltZTonJyxcclxuICAgICAgZW1haWxhZGRyZXNzOicnXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGNoYW5nZVZhbHVlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2VuZEFnYWluOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmKCF0aGF0LmNhbkNsaWNrQWdpbil7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICB0aGF0LmNhbkNsaWNrQWdpbj1mYWxzZTtcclxuICAgICAgICBpZighdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnZW1haWxSZWcnLCB0aGF0LmVtYWlsKSl7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+mCrueuseagvOW8j+mUmeivrycpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvZW1haWwvc2VuZEF1dGhvcml6YXRpb24nLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICByZWNvcmRJZDogdGhhdC5yZWNvcmRJZCxcclxuICAgICAgICAgICAgZW1haWw6IHRoYXQuZW1haWxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB0aGF0LmNhbkNsaWNrQWdpbj10cnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24oICkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6YKu5Lu25Y+R6YCB5aSx6LSlJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgICBzaG93ZWFybHkoKXtcclxuICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOnRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsrJy9lbWFpbC9sYXRlbHlSZWNvcmQnLFxyXG4gICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICAgICAgcmVjb3JkSWQ6IHRoYXQucmVjb3JkSWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LmNyZWF0ZXRpbWU9dGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGEuY3JlYXRlVGltZSk7XHJcbiAgICAgICAgICAgICAgdGhhdC5lbWFpbGFkZHJlc3M9cmVzLmRhdGEuZGF0YS5yZWNlaXZlcjtcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfTtcclxuICAgICAgIHRpbWVSZWcgKG51bSkge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG51bSAqIDEwMDApO1xyXG4gICAgICBsZXQgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgICAgbGV0IE0gPSAoZGF0ZS5nZXRNb250aCgpKzEgPCAxMCA/ICcwJysoZGF0ZS5nZXRNb250aCgpKzEpIDogZGF0ZS5nZXRNb250aCgpKzEpICsgJy0nO1xyXG4gICAgICBsZXQgRCA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTA/ICgnMCcrIChkYXRlLmdldERhdGUoKSkgKyAnICcpIDogKGRhdGUuZ2V0RGF0ZSgpICsgJyAnKTtcclxuICAgICAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICgoJzAnICsgZGF0ZS5nZXRIb3VycygpKSArICc6JykgOiAoZGF0ZS5nZXRIb3VycygpICsgJzonKTtcclxuICAgICAgbGV0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkgKyAnOicpIDogKGRhdGUuZ2V0TWludXRlcygpICsgJzonKTtcclxuICAgICAgbGV0IHMgPSBkYXRlLmdldFNlY29uZHMoKTwgMTAgPyAoJzAnICsgZGF0ZS5nZXRTZWNvbmRzKCkpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHJldHVybiBZK00rRCtoK20rcztcclxuICAgIH07XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXMucmVjb3JkSWQgPSBvcHRpb25zLmlkO1xyXG4gICAgICBcclxuICAgICBcclxuICAgIH07XHJcbiAgICAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB2YXIgcmVzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgaWYgKHJlcy5tb2RlbC5zZWFyY2goJ2lQaG9uZSBYJykgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5pcGhvbmVYID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlwaG9uZVggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbiAhPT0gJycpIHtcclxuXHJcbiAgICAgICB0aGlzLnNob3dlYXJseSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJHJlZGlyZWN0KCdzZWNMb2dpbicse2JhY2tVcmw6ICdjYXJkR2V0QWdhaW4nfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gIH1cclxuIl19