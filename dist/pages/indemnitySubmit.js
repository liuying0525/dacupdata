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

var indemnitySubmit = function (_wepy$page) {
  _inherits(indemnitySubmit, _wepy$page);

  function indemnitySubmit() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, indemnitySubmit);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = indemnitySubmit.__proto__ || Object.getPrototypeOf(indemnitySubmit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '理赔证明'
    }, _this.data = {
      url_link: '',
      id: ''
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.methods = {
      toState: function toState() {
        wx.navigateBack({
          delta: 1
        });
      },
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      },
      cancelSubmit: function cancelSubmit() {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该保险赔付申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/insuranceClaim/cancel',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'POST',
                data: { insuranceClaimId: that.id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
                success: function success(res) {
                  if (res.data.code == '10001') {
                    that.$redirect('indemnityCancel');
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(indemnitySubmit, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.id = options.id;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
    }
  }]);

  return indemnitySubmit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indemnitySubmit , 'pages/indemnitySubmit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVtbml0eVN1Ym1pdC5qcyJdLCJuYW1lcyI6WyJpbmRlbW5pdHlTdWJtaXQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInVybF9saW5rIiwiaWQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwibWV0aG9kcyIsInRvU3RhdGUiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwibWFrZUNhbGwiLCJwaG9uZSIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImNhbmNlbFN1Ym1pdCIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJwYXJlbnRfZGF0YSIsImpzb25fZGhMaW5rIiwiaGVhZGVyIiwibWV0aG9kIiwiaW5zdXJhbmNlQ2xhaW1JZCIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsInVzZXJJZCIsImxvZ2luX3VzZXJJZCIsImNvZGUiLCIkcmVkaXJlY3QiLCIkaW52b2tlIiwibXNnIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWwiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxlOzs7Ozs7Ozs7Ozs7Ozt3TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxVQUFJO0FBRkMsSyxRQUlQQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxPLEdBQVU7QUFDUkMsZUFBUyxtQkFBWTtBQUNuQkMsV0FBR0MsWUFBSCxDQUFnQjtBQUNkQyxpQkFBTztBQURPLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxnQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN6QkosV0FBR0ssYUFBSCxDQUFpQjtBQUNmQyx1QkFBYUY7QUFERSxTQUFqQjtBQUdELE9BVk87QUFXUkcsb0JBQWMsd0JBQVk7QUFDeEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FSLFdBQUdTLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxNQURJO0FBRVhDLG1CQUFTLGtCQUZFO0FBR1hDLHNCQUFXLEtBSEE7QUFJWEMsdUJBQVksSUFKRDtBQUtYQyxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1osZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZmhCLGlCQUFHaUIsT0FBSCxDQUFXO0FBQ1RDLHFCQUFLVixLQUFLVyxXQUFMLENBQWlCQyxXQUFqQixHQUErQix3QkFEM0I7QUFFVEMsd0JBQVE7QUFDTixrQ0FBZ0IsbUNBRFYsQ0FDOEM7QUFEOUMsaUJBRkM7QUFLVEMsd0JBQVEsTUFMQztBQU1UN0Isc0JBQU0sRUFBQzhCLGtCQUFrQmYsS0FBS2IsRUFBeEIsRUFBNEI2QixZQUFZaEIsS0FBS1csV0FBTCxDQUFpQk0sV0FBekQsRUFBc0VDLFFBQVFsQixLQUFLVyxXQUFMLENBQWlCUSxZQUEvRixFQU5HO0FBT1RiLHlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsc0JBQUlBLElBQUl0QixJQUFKLENBQVNtQyxJQUFULElBQWlCLE9BQXJCLEVBQThCO0FBQzVCcEIseUJBQUtxQixTQUFMLENBQWUsaUJBQWY7QUFDRCxtQkFGRCxNQUVPO0FBQ0xyQix5QkFBS3NCLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFdBQTFCLEVBQXVDZixJQUFJdEIsSUFBSixDQUFTbUMsSUFBaEQsRUFBc0RiLElBQUl0QixJQUFKLENBQVNzQyxHQUEvRDtBQUNEO0FBQ0YsaUJBYlE7QUFjVEMsc0JBQU0sZ0JBQVk7QUFDaEJDLDBCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNEO0FBaEJRLGVBQVg7QUFrQkQsYUFuQkQsTUFtQk8sSUFBSW5CLElBQUlvQixNQUFSLEVBQWdCO0FBQ3JCRixzQkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBNUJVLFNBQWI7QUE4QkQ7QUEzQ08sSzs7Ozs7MkJBNkNIRSxPLEVBQVM7QUFDZCxXQUFLekMsRUFBTCxHQUFVeUMsUUFBUXpDLEVBQWxCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtELFFBQUwsR0FBZ0IsS0FBSzJDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjVDLFFBQXhDO0FBQ0EsV0FBS3lCLFdBQUwsR0FBbUIsS0FBS2tCLE9BQUwsQ0FBYUMsVUFBaEM7QUFDRDs7OztFQTlEMENDLGVBQUtDLEk7O2tCQUE3QmxELGUiLCJmaWxlIjoiaW5kZW1uaXR5U3VibWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGVtbml0eVN1Ym1pdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnkIbotZTor4HmmI4nXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBpZDogJydcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHRvU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBtYWtlQ2FsbDogZnVuY3Rpb24gKHBob25lKSB7XHJcbiAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogcGhvbmVcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBjYW5jZWxTdWJtaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICflsI/kuLvvvIznoa7lrprlj5bmtojor6Xkv53pmanotZTku5jnlLPor7flkJfvvJ8nLFxyXG4gICAgICAgICAgY2FuY2VsVGV4dDon5YaN5oOz5oOzJyxcclxuICAgICAgICAgIGNvbmZpcm1UZXh0Oifnoa7lrponLFxyXG4gICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9pbnN1cmFuY2VDbGFpbS9jYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtpbnN1cmFuY2VDbGFpbUlkOiB0aGF0LmlkLCBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLCB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJHJlZGlyZWN0KCdpbmRlbW5pdHlDYW5jZWwnKVxyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj5bmtojnlLPor7flpLHotKXkuoYnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75Y+W5raIJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLmlkID0gb3B0aW9ucy5pZDtcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=