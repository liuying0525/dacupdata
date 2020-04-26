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

var cardSubmit = function (_wepy$page) {
  _inherits(cardSubmit, _wepy$page);

  function cardSubmit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cardSubmit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cardSubmit.__proto__ || Object.getPrototypeOf(cardSubmit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      email: '',
      recordId: '',
      parent_data: ''
    }, _this.methods = {
      goList: function goList() {
        wx.navigateBack({
          delta: 2
        });
      },
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      },
      cancel: function cancel() {
        var that = this;
        wx.request({
          url: that.parent_data.json_dhLink + '/paycardModifyRecord/cancel',
          data: {
            userId: that.parent_data.login_userId,
            loginToken: that.parent_data.login_token,
            recordId: that.recordId
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.$redirect('cardCancel', { delta: 3 });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail() {
            console.log('还款卡变更申请失败');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cardSubmit, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.recordId = options.recordId;
      this.email = options.email;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
    }
  }]);

  return cardSubmit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cardSubmit , 'pages/cardSubmit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRTdWJtaXQuanMiXSwibmFtZXMiOlsiY2FyZFN1Ym1pdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwiZW1haWwiLCJyZWNvcmRJZCIsInBhcmVudF9kYXRhIiwibWV0aG9kcyIsImdvTGlzdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJtYWtlQ2FsbCIsInBob25lIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwiY2FuY2VsIiwidGhhdCIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsInVzZXJJZCIsImxvZ2luX3VzZXJJZCIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsIm1ldGhvZCIsImhlYWRlciIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiJHJlZGlyZWN0IiwiJGludm9rZSIsIm1zZyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwib3B0aW9ucyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsYUFBTyxFQUZGO0FBR0xDLGdCQUFVLEVBSEw7QUFJTEMsbUJBQWE7QUFKUixLLFFBTVBDLE8sR0FBVTtBQUNSQyxjQUFRLGtCQUFZO0FBQ2xCQyxXQUFHQyxZQUFILENBQWdCO0FBQ2RDLGlCQUFPO0FBRE8sU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGdCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3pCSixXQUFHSyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhRjtBQURFLFNBQWpCO0FBR0QsT0FWTztBQVdSRyxjQUFRLGtCQUFZO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBUixXQUFHUyxPQUFILENBQVc7QUFDVEMsZUFBS0YsS0FBS1gsV0FBTCxDQUFpQmMsV0FBakIsR0FBK0IsNkJBRDNCO0FBRVRsQixnQkFBTTtBQUNKbUIsb0JBQVFKLEtBQUtYLFdBQUwsQ0FBaUJnQixZQURyQjtBQUVKQyx3QkFBWU4sS0FBS1gsV0FBTCxDQUFpQmtCLFdBRnpCO0FBR0puQixzQkFBVVksS0FBS1o7QUFIWCxXQUZHO0FBT1RvQixrQkFBUSxNQVBDO0FBUVRDLGtCQUFRO0FBQ04sNEJBQWdCLGlEQURWLENBQzREO0FBRDVELFdBUkM7QUFXVEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSUEsSUFBSTFCLElBQUosQ0FBUzJCLElBQVQsSUFBaUIsT0FBckIsRUFBOEI7QUFDNUJaLG1CQUFLYSxTQUFMLENBQWUsWUFBZixFQUE0QixFQUFDbkIsT0FBTyxDQUFSLEVBQTVCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xNLG1CQUFLYyxPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q0gsSUFBSTFCLElBQUosQ0FBUzJCLElBQWhELEVBQXNERCxJQUFJMUIsSUFBSixDQUFTOEIsR0FBL0Q7QUFDRDtBQUNGLFdBakJRO0FBa0JUQyxnQkFBTSxnQkFBWTtBQUNoQkMsb0JBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0Q7QUFwQlEsU0FBWDtBQXNCRDtBQW5DTyxLOzs7OzsyQkFxQ0hDLE8sRUFBUztBQUNkLFdBQUsvQixRQUFMLEdBQWdCK0IsUUFBUS9CLFFBQXhCO0FBQ0EsV0FBS0QsS0FBTCxHQUFhZ0MsUUFBUWhDLEtBQXJCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtELFFBQUwsR0FBZ0IsS0FBS2tDLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qm5DLFFBQXhDO0FBQ0EsV0FBS0csV0FBTCxHQUFtQixLQUFLK0IsT0FBTCxDQUFhQyxVQUFoQztBQUNEOzs7O0VBekRxQ0MsZUFBS0MsSTs7a0JBQXhCM0MsVSIsImZpbGUiOiJjYXJkU3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmRTdWJtaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6L+Y5qy+5Y2h5Y+Y5pu0J1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBlbWFpbDogJycsXHJcbiAgICAgIHJlY29yZElkOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZ29MaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgbWFrZUNhbGw6IGZ1bmN0aW9uIChwaG9uZSkge1xyXG4gICAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9wYXljYXJkTW9kaWZ5UmVjb3JkL2NhbmNlbCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWQsXHJcbiAgICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgICAgIHJlY29yZElkOiB0aGF0LnJlY29yZElkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LiRyZWRpcmVjdCgnY2FyZENhbmNlbCcse2RlbHRhOiAzfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/mOasvuWNoeWPmOabtOeUs+ivt+Wksei0pScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMucmVjb3JkSWQgPSBvcHRpb25zLnJlY29yZElkO1xyXG4gICAgICB0aGlzLmVtYWlsID0gb3B0aW9ucy5lbWFpbDtcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=