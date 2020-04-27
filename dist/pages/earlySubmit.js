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

var earlySubmit = function (_wepy$page) {
  _inherits(earlySubmit, _wepy$page);

  function earlySubmit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, earlySubmit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = earlySubmit.__proto__ || Object.getPrototypeOf(earlySubmit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提前还款'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      datas: '',
      parent_data: ''
    }, _this.methods = {
      // 取消申请
      cancelSubmit: function cancelSubmit() {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该前提还款申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/repayment/cancel',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'POST',
                data: { repaymentId: that.datas.id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
                success: function success(res) {
                  if (res.data.code == '10001') {
                    that.$redirect('earlyCancel');
                  } else {
                    that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
                  }
                },
                fail: function fail() {
                  console.log('取消申请失败了');
                }
              });
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      // 去列表
      goList: function goList() {
        // this.$redirect('earlyList')
        wx.navigateBack({
          delta: 2
        });
      },
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(earlySubmit, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.datas = options;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
    }
  }]);

  return earlySubmit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlySubmit , 'pages/earlySubmit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5U3VibWl0LmpzIl0sIm5hbWVzIjpbImVhcmx5U3VibWl0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwidXJsX2xpbmsiLCJkYXRhcyIsInBhcmVudF9kYXRhIiwibWV0aG9kcyIsImNhbmNlbFN1Ym1pdCIsInRoYXQiLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwiaGVhZGVyIiwibWV0aG9kIiwicmVwYXltZW50SWQiLCJpZCIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsInVzZXJJZCIsImxvZ2luX3VzZXJJZCIsImNvZGUiLCIkcmVkaXJlY3QiLCIkaW52b2tlIiwibXNnIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJnb0xpc3QiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm1ha2VDYWxsIiwicGhvbmUiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxhQUFPLEVBRkY7QUFHTEMsbUJBQWE7QUFIUixLLFFBS1BDLE8sR0FBVTtBQUNSO0FBQ0FDLG9CQUFjLHdCQUFZO0FBQ3hCLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxXQUFHQyxTQUFILENBQWE7QUFDWEMsaUJBQU8sTUFESTtBQUVYQyxtQkFBUyxrQkFGRTtBQUdYQyxzQkFBVyxLQUhBO0FBSVhDLHVCQUFZLElBSkQ7QUFLWEMsaUJBTFcsbUJBS0ZDLEdBTEUsRUFLRztBQUNaLGdCQUFJQSxJQUFJQyxPQUFSLEVBQWlCO0FBQ2ZSLGlCQUFHUyxPQUFILENBQVc7QUFDVEMscUJBQUtYLEtBQUtILFdBQUwsQ0FBaUJlLFdBQWpCLEdBQStCLG1CQUQzQjtBQUVUQyx3QkFBUTtBQUNOLGtDQUFnQixtQ0FEVixDQUM4QztBQUQ5QyxpQkFGQztBQUtUQyx3QkFBUSxNQUxDO0FBTVRwQixzQkFBTSxFQUFDcUIsYUFBYWYsS0FBS0osS0FBTCxDQUFXb0IsRUFBekIsRUFBNEJDLFlBQVlqQixLQUFLSCxXQUFMLENBQWlCcUIsV0FBekQsRUFBc0VDLFFBQVFuQixLQUFLSCxXQUFMLENBQWlCdUIsWUFBL0YsRUFORztBQU9UYix5QkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCLHNCQUFJQSxJQUFJZCxJQUFKLENBQVMyQixJQUFULElBQWlCLE9BQXJCLEVBQThCO0FBQzVCckIseUJBQUtzQixTQUFMLENBQWUsYUFBZjtBQUNELG1CQUZELE1BRU87QUFDTHRCLHlCQUFLdUIsT0FBTCxDQUFhLFdBQWIsRUFBeUIsV0FBekIsRUFBcUNmLElBQUlkLElBQUosQ0FBUzJCLElBQTlDLEVBQW1EYixJQUFJZCxJQUFKLENBQVM4QixHQUE1RDtBQUNEO0FBQ0YsaUJBYlE7QUFjVEMsc0JBQU0sZ0JBQVk7QUFDaEJDLDBCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBaEJRLGVBQVg7QUFrQkQsYUFuQkQsTUFtQk8sSUFBSW5CLElBQUlvQixNQUFSLEVBQWdCO0FBQ3JCRixzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBNUJVLFNBQWI7QUE4QkQsT0FsQ087QUFtQ1I7QUFDQUUsY0FBUSxrQkFBWTtBQUNsQjtBQUNBNUIsV0FBRzZCLFlBQUgsQ0FBZ0I7QUFDZEMsaUJBQU87QUFETyxTQUFoQjtBQUdELE9BekNPO0FBMENSQyxnQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN6QmhDLFdBQUdpQyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhRjtBQURFLFNBQWpCO0FBR0Q7QUE5Q08sSzs7Ozs7MkJBZ0RIRyxPLEVBQVM7QUFDZCxXQUFLeEMsS0FBTCxHQUFhd0MsT0FBYjtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLekMsUUFBTCxHQUFnQixLQUFLMEMsT0FBTCxDQUFhQyxVQUFiLENBQXdCM0MsUUFBeEM7QUFDQSxXQUFLRSxXQUFMLEdBQW1CLEtBQUt3QyxPQUFMLENBQWFDLFVBQWhDO0FBQ0Q7Ozs7RUFsRXNDQyxlQUFLQyxJOztrQkFBekJuRCxXIiwiZmlsZSI6ImVhcmx5U3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbydcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGVhcmx5U3VibWl0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DliY3ov5jmrL4nXHJcbiAgICAgIH07XHJcbiAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgICAgfTtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICB1cmxfbGluazogJycsXHJcbiAgICAgICAgZGF0YXM6ICcnLFxyXG4gICAgICAgIHBhcmVudF9kYXRhOiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIC8vIOWPlua2iOeUs+ivt1xyXG4gICAgICAgIGNhbmNlbFN1Ym1pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn5bCP5Li777yM56Gu5a6a5Y+W5raI6K+l5YmN5o+Q6L+Y5qy+55Sz6K+35ZCX77yfJyxcclxuICAgICAgICAgICAgY2FuY2VsVGV4dDon5YaN5oOz5oOzJyxcclxuICAgICAgICAgICAgY29uZmlybVRleHQ6J+ehruWumicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvcmVwYXltZW50L2NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHtyZXBheW1lbnRJZDogdGhhdC5kYXRhcy5pZCxsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLCB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkfSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJHJlZGlyZWN0KCdlYXJseUNhbmNlbCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywnbW9kZWxGdW5jJyxyZXMuZGF0YS5jb2RlLHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOeUs+ivt+Wksei0peS6hicpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5Y675YiX6KGoXHJcbiAgICAgICAgZ29MaXN0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAvLyB0aGlzLiRyZWRpcmVjdCgnZWFybHlMaXN0JylcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgIGRlbHRhOiAyXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFrZUNhbGw6IGZ1bmN0aW9uIChwaG9uZSkge1xyXG4gICAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhcyA9IG9wdGlvbnM7XHJcbiAgICAgIH1cclxuICAgICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuIl19