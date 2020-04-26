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

var cardChange = function (_wepy$page) {
  _inherits(cardChange, _wepy$page);

  function cardChange() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cardChange);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cardChange.__proto__ || Object.getPrototypeOf(cardChange)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      state: -1,
      parent_data: '',
      createtime: '', // 申请时间
      accepttime: '', // 后台接收时间
      acceptedtime: '' // 已受理时间
    }, _this.methods = {
      makeCall: function makeCall(phone) {
        wx.makePhoneCall({
          phoneNumber: phone
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cardChange, [{
    key: 'getState',

    // 获取状态
    value: function getState() {
      var that = this;
      wx.request({
        url: that.parent_data.json_link + '/api/wxapp/reapymentcard/getstart?access_token=' + that.parent_data.access_token,
        data: { loginToken: that.parent_data.login_token },
        success: function success(res) {
          if (res.data.code == 'A00006') {
            that.state = res.data.data.start;
            that.createtime = res.data.data.createtime ? res.data.data.createtime.split(' ')[0] : '';
            that.accepttime = res.data.data.accepttime ? res.data.data.accepttime.split(' ')[0] : '';
            that.acceptedtime = res.data.data.acceptedtime ? res.data.data.acceptedtime.split(' ')[0] : '';
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.errmsg);
            if (res.data.code == 'A00069' || res.data.code == 'A00070') {
              that.$redirect('secLogin');
            }
          }
        },
        fail: function fail() {
          console.log('获取状态失败了！');
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      this.getState();
    }
  }]);

  return cardChange;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cardChange , 'pages/cardChange'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRDaGFuZ2UuanMiXSwibmFtZXMiOlsiY2FyZENoYW5nZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwic3RhdGUiLCJwYXJlbnRfZGF0YSIsImNyZWF0ZXRpbWUiLCJhY2NlcHR0aW1lIiwiYWNjZXB0ZWR0aW1lIiwibWV0aG9kcyIsIm1ha2VDYWxsIiwicGhvbmUiLCJ3eCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsInRoYXQiLCJyZXF1ZXN0IiwidXJsIiwianNvbl9saW5rIiwiYWNjZXNzX3Rva2VuIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJzdGFydCIsInNwbGl0IiwiJGFwcGx5IiwiJGludm9rZSIsImVycm1zZyIsIiRyZWRpcmVjdCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRTdGF0ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF1QjtBQURoQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLGFBQU8sQ0FBQyxDQUZIO0FBR0xDLG1CQUFhLEVBSFI7QUFJTEMsa0JBQVksRUFKUCxFQUlVO0FBQ2ZDLGtCQUFZLEVBTFAsRUFLVztBQUNoQkMsb0JBQWMsRUFOVCxDQU1ZO0FBTlosSyxRQVFQQyxPLEdBQVU7QUFDUkMsZ0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDekJDLFdBQUdDLGFBQUgsQ0FBaUI7QUFDZkMsdUJBQWFIO0FBREUsU0FBakI7QUFHRDtBQUxPLEs7Ozs7OztBQU9WOytCQUNXO0FBQ1QsVUFBSUksT0FBTyxJQUFYO0FBQ0FILFNBQUdJLE9BQUgsQ0FBVztBQUNUQyxhQUFLRixLQUFLVixXQUFMLENBQWlCYSxTQUFqQixHQUE2QixpREFBN0IsR0FBaUZILEtBQUtWLFdBQUwsQ0FBaUJjLFlBRDlGO0FBRVRqQixjQUFNLEVBQUNrQixZQUFZTCxLQUFLVixXQUFMLENBQWlCZ0IsV0FBOUIsRUFGRztBQUdUQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCLGNBQUlBLElBQUlyQixJQUFKLENBQVNzQixJQUFULElBQWlCLFFBQXJCLEVBQStCO0FBQzdCVCxpQkFBS1gsS0FBTCxHQUFhbUIsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjdUIsS0FBM0I7QUFDQVYsaUJBQUtULFVBQUwsR0FBa0JpQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWNJLFVBQWQsR0FBMEJpQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWNJLFVBQWQsQ0FBeUJvQixLQUF6QixDQUErQixHQUEvQixFQUFvQyxDQUFwQyxDQUExQixHQUFpRSxFQUFuRjtBQUNBWCxpQkFBS1IsVUFBTCxHQUFrQmdCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBY0ssVUFBZCxHQUF5QmdCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBY0ssVUFBZCxDQUF5Qm1CLEtBQXpCLENBQStCLEdBQS9CLEVBQW9DLENBQXBDLENBQXpCLEdBQWdFLEVBQWxGO0FBQ0FYLGlCQUFLUCxZQUFMLEdBQW9CZSxJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWNNLFlBQWQsR0FBMkJlLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBY00sWUFBZCxDQUEyQmtCLEtBQTNCLENBQWlDLEdBQWpDLEVBQXNDLENBQXRDLENBQTNCLEdBQW9FLEVBQXhGO0FBQ0FYLGlCQUFLWSxNQUFMO0FBQ0QsV0FORCxNQU1PO0FBQ0xaLGlCQUFLYSxPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q0wsSUFBSXJCLElBQUosQ0FBU3NCLElBQWhELEVBQXNERCxJQUFJckIsSUFBSixDQUFTMkIsTUFBL0Q7QUFDQSxnQkFBSU4sSUFBSXJCLElBQUosQ0FBU3NCLElBQVQsSUFBaUIsUUFBakIsSUFBNkJELElBQUlyQixJQUFKLENBQVNzQixJQUFULElBQWlCLFFBQWxELEVBQTREO0FBQzFEVCxtQkFBS2UsU0FBTCxDQUFlLFVBQWY7QUFDRDtBQUNGO0FBQ0YsU0FoQlE7QUFpQlRDLGNBQU0sZ0JBQVk7QUFDaEJDLGtCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNEO0FBbkJRLE9BQVg7QUFxQkQ7Ozs2QkFDUTtBQUNQLFdBQUs5QixRQUFMLEdBQWdCLEtBQUsrQixPQUFMLENBQWFDLFVBQWIsQ0FBd0JoQyxRQUF4QztBQUNBLFdBQUtFLFdBQUwsR0FBbUIsS0FBSzZCLE9BQUwsQ0FBYUMsVUFBaEM7QUFDQSxXQUFLQyxRQUFMO0FBQ0Q7Ozs7RUFuRHFDQyxlQUFLQyxJOztrQkFBeEJ6QyxVIiwiZmlsZSI6ImNhcmRDaGFuZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJkQ2hhbmdlIGV4dGVuZHMgd2VweS5wYWdle1xyXG4gICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDon6L+Y5qy+5Y2h5Y+Y5pu0J1xyXG4gICAgICB9O1xyXG4gICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICAgIH07XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICAgIHN0YXRlOiAtMSxcclxuICAgICAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICAgICAgY3JlYXRldGltZTogJycsLy8g55Sz6K+35pe26Ze0XHJcbiAgICAgICAgYWNjZXB0dGltZTogJycsIC8vIOWQjuWPsOaOpeaUtuaXtumXtFxyXG4gICAgICAgIGFjY2VwdGVkdGltZTogJycgLy8g5bey5Y+X55CG5pe26Ze0XHJcbiAgICAgIH07XHJcbiAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgbWFrZUNhbGw6IGZ1bmN0aW9uIChwaG9uZSkge1xyXG4gICAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIC8vIOiOt+WPlueKtuaAgVxyXG4gICAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9saW5rICsgJy9hcGkvd3hhcHAvcmVhcHltZW50Y2FyZC9nZXRzdGFydD9hY2Nlc3NfdG9rZW49JyArIHRoYXQucGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgZGF0YToge2xvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW59LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgIHRoYXQuc3RhdGUgPSByZXMuZGF0YS5kYXRhLnN0YXJ0O1xyXG4gICAgICAgICAgICAgIHRoYXQuY3JlYXRldGltZSA9IHJlcy5kYXRhLmRhdGEuY3JlYXRldGltZT8gcmVzLmRhdGEuZGF0YS5jcmVhdGV0aW1lLnNwbGl0KCcgJylbMF06Jyc7XHJcbiAgICAgICAgICAgICAgdGhhdC5hY2NlcHR0aW1lID0gcmVzLmRhdGEuZGF0YS5hY2NlcHR0aW1lP3Jlcy5kYXRhLmRhdGEuYWNjZXB0dGltZS5zcGxpdCgnICcpWzBdOicnO1xyXG4gICAgICAgICAgICAgIHRoYXQuYWNjZXB0ZWR0aW1lID0gcmVzLmRhdGEuZGF0YS5hY2NlcHRlZHRpbWU/cmVzLmRhdGEuZGF0YS5hY2NlcHRlZHRpbWUuc3BsaXQoJyAnKVswXTonJztcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLmVycm1zZyk7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJ0EwMDA2OScgfHwgcmVzLmRhdGEuY29kZSA9PSAnQTAwMDcwJykge1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kcmVkaXJlY3QoJ3NlY0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W54q25oCB5aSx6LSl5LqG77yBJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIHRoaXMuZ2V0U3RhdGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4iXX0=