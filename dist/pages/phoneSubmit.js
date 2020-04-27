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

var phoneSubmit = function (_wepy$page) {
  _inherits(phoneSubmit, _wepy$page);

  function phoneSubmit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, phoneSubmit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = phoneSubmit.__proto__ || Object.getPrototypeOf(phoneSubmit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改手机号'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      parent_data: '',
      id: ''
    }, _this.methods = {
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      },
      // 取消申请
      cancel: function cancel() {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该修改手机号申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/mobileModifyRecord/cancel',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'POST',
                data: { recordId: that.id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
                success: function success(res) {
                  if (res.data.code == '10001') {
                    that.$redirect('phoneCancel');
                  } else {
                    that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
                  }
                },
                fail: function fail() {
                  console.log('取消修改手机号成功');
                }
              });
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      // 去列表页面
      goList: function goList() {
        wx.navigateBack({
          delta: 1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(phoneSubmit, [{
    key: 'onLoad',
    value: function onLoad(option) {
      this.id = option.id;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
    }
  }]);

  return phoneSubmit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(phoneSubmit , 'pages/phoneSubmit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lU3VibWl0LmpzIl0sIm5hbWVzIjpbInBob25lU3VibWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwidXJsX2xpbmsiLCJwYXJlbnRfZGF0YSIsImlkIiwibWV0aG9kcyIsIm1ha2VDYWxsIiwicGhvbmUiLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbCIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsImhlYWRlciIsIm1ldGhvZCIsInJlY29yZElkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwiY29kZSIsIiRyZWRpcmVjdCIsIiRpbnZva2UiLCJtc2ciLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImdvTGlzdCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9uIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxtQkFBYSxFQUZSO0FBR0xDLFVBQUk7QUFIQyxLLFFBS1BDLE8sR0FBVTtBQUNSQyxnQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN6QkMsV0FBR0MsYUFBSCxDQUFpQjtBQUNmQyx1QkFBYUg7QUFERSxTQUFqQjtBQUdELE9BTE87QUFNUjtBQUNBSSxjQUFRLGtCQUFZO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBSixXQUFHSyxTQUFILENBQWE7QUFDWEMsaUJBQU8sTUFESTtBQUVYQyxtQkFBUyxtQkFGRTtBQUdYQyxzQkFBVyxLQUhBO0FBSVhDLHVCQUFZLElBSkQ7QUFLWEMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaLGdCQUFJQSxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZaLGlCQUFHYSxPQUFILENBQVc7QUFDVEMscUJBQUtWLEtBQUtULFdBQUwsQ0FBaUJvQixXQUFqQixHQUErQiw0QkFEM0I7QUFFVEMsd0JBQVE7QUFDTixrQ0FBZ0IsbUNBRFYsQ0FDOEM7QUFEOUMsaUJBRkM7QUFLVEMsd0JBQVEsTUFMQztBQU1UeEIsc0JBQU0sRUFBQ3lCLFVBQVVkLEtBQUtSLEVBQWhCLEVBQW1CdUIsWUFBWWYsS0FBS1QsV0FBTCxDQUFpQnlCLFdBQWhELEVBQTZEQyxRQUFRakIsS0FBS1QsV0FBTCxDQUFpQjJCLFlBQXRGLEVBTkc7QUFPVFoseUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixzQkFBSUEsSUFBSWxCLElBQUosQ0FBUzhCLElBQVQsSUFBaUIsT0FBckIsRUFBOEI7QUFDNUJuQix5QkFBS29CLFNBQUwsQ0FBZSxhQUFmO0FBQ0QsbUJBRkQsTUFFTztBQUNMcEIseUJBQUtxQixPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q2QsSUFBSWxCLElBQUosQ0FBUzhCLElBQWhELEVBQXNEWixJQUFJbEIsSUFBSixDQUFTaUMsR0FBL0Q7QUFDRDtBQUNGLGlCQWJRO0FBY1RDLHNCQUFNLGdCQUFZO0FBQ2hCQywwQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFDRDtBQWhCUSxlQUFYO0FBa0JELGFBbkJELE1BbUJPLElBQUlsQixJQUFJUixNQUFSLEVBQWdCO0FBQ3JCeUIsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQTVCVSxTQUFiO0FBOEJELE9BdkNPO0FBd0NSO0FBQ0FDLGNBQVEsa0JBQVk7QUFDbEI5QixXQUFHK0IsWUFBSCxDQUFnQjtBQUNkQyxpQkFBTztBQURPLFNBQWhCO0FBR0Q7QUE3Q08sSzs7Ozs7MkJBK0NIQyxNLEVBQVE7QUFDYixXQUFLckMsRUFBTCxHQUFVcUMsT0FBT3JDLEVBQWpCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtGLFFBQUwsR0FBZ0IsS0FBS3dDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QnpDLFFBQXhDO0FBQ0EsV0FBS0MsV0FBTCxHQUFtQixLQUFLdUMsT0FBTCxDQUFhQyxVQUFoQztBQUNEOzs7O0VBakVzQ0MsZUFBS0MsSTs7a0JBQXpCakQsVyIsImZpbGUiOiJwaG9uZVN1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbydcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBwaG9uZVN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkv67mlLnmiYvmnLrlj7cnXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJyxcclxuICAgICAgaWQ6ICcnLFxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG1ha2VDYWxsOiBmdW5jdGlvbiAocGhvbmUpIHtcclxuICAgICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWPlua2iOeUs+ivt1xyXG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICflsI/kuLvvvIznoa7lrprlj5bmtojor6Xkv67mlLnmiYvmnLrlj7fnlLPor7flkJfvvJ8nLFxyXG4gICAgICAgICAgY2FuY2VsVGV4dDon5YaN5oOz5oOzJyxcclxuICAgICAgICAgIGNvbmZpcm1UZXh0Oifnoa7lrponLFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9tb2JpbGVNb2RpZnlSZWNvcmQvY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7cmVjb3JkSWQ6IHRoYXQuaWQsbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbiwgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRyZWRpcmVjdCgncGhvbmVDYW5jZWwnKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOS/ruaUueaJi+acuuWPt+aIkOWKnycpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDljrvliJfooajpobXpnaJcclxuICAgICAgZ29MaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB0aGlzLmlkID0gb3B0aW9uLmlkO1xyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==