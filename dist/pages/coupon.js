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

var coupon = function (_wepy$page) {
  _inherits(coupon, _wepy$page);

  function coupon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, coupon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = coupon.__proto__ || Object.getPrototypeOf(coupon)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '抵扣券'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      //卡券种类
      state: 1,
      // 资源地址
      url_link: '',
      parent_data: '',
      currentNum: 1,
      list: []
    }, _this.computed = {
      // 缺省压面是否显示
      noData_show: function noData_show() {
        if (this.list.length == 0) {
          return true;
        } else {
          return false;
        }
      }
    }, _this.methods = {
      goUse: function goUse(id) {
        if (this.state === 1) {
          this.$navigate('couponDetail', { id: id });
        }
      },
      // 更改状态值
      changeState: function changeState(state) {
        this.state = state;
        this.list = [];
        this.currentNum = 1;
        this.getList();
      },
      // onShareAppMessage: function () {
      //   return {
      //     path: '/pages/index'
      //   };
      // },
      // 使用门店
      //点击生成二维码
      save: function save() {
        wx.showActionSheet({
          itemList: ['保存图片'],
          success: function success(res) {
            if (res.tapIndex == 0) {
              qrcode.exportImage(function (path) {
                wx.saveImageToPhotosAlbum({
                  filePath: path
                });
              });
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(coupon, [{
    key: 'getList',
    value: function getList() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/coupon/user/list',
        data: {
          pageNum: that.currentNum,
          pageSize: 10,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId,
          status: that.state
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            wx.hideLoading();
            if (res.data.data.list.length > 0) {
              that.list = that.list.concat(res.data.data.list);
              that.$apply();
            } else {
              if (that.currentNum == 1) {
                that.list = res.data.data.list;
                that.$apply();
              } else {
                that.currentNum = that.currentNum <= 1 ? 1 : that.currentNum - 1;
                wx.showToast({
                  title: '加载全部',
                  icon: 'success',
                  duration: 2000
                });
              }
              return false;
            }
          } else {
            wx.hideLoading();
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.list = [];
      this.currentNum = 1;
      this.getList();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.currentNum = this.currentNum + 1;
      this.getList();
    }
    // 数据获取

  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      that.parent_data = this.$parent.globalData;
      that.url_link = this.$parent.globalData.url_link;
      that.list = [];
      that.currentNum = 1;
      that.getList();
    }
  }]);

  return coupon;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(coupon , 'pages/coupon'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbi5qcyJdLCJuYW1lcyI6WyJjb3Vwb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJzdGF0ZSIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJjdXJyZW50TnVtIiwibGlzdCIsImNvbXB1dGVkIiwibm9EYXRhX3Nob3ciLCJsZW5ndGgiLCJtZXRob2RzIiwiZ29Vc2UiLCJpZCIsIiRuYXZpZ2F0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0TGlzdCIsInNhdmUiLCJ3eCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0Iiwic3VjY2VzcyIsInJlcyIsInRhcEluZGV4IiwicXJjb2RlIiwiZXhwb3J0SW1hZ2UiLCJwYXRoIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImZpbGVQYXRoIiwidGhhdCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJwYWdlTnVtIiwicGFnZVNpemUiLCJsb2dpblRva2VuIiwibG9naW5fdG9rZW4iLCJ1c2VySWQiLCJsb2dpbl91c2VySWQiLCJzdGF0dXMiLCJjb2RlIiwiaGlkZUxvYWRpbmciLCJjb25jYXQiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCIkaW52b2tlIiwibXNnIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTDtBQUNBQyxhQUFPLENBRkY7QUFHTDtBQUNBQyxnQkFBVSxFQUpMO0FBS0xDLG1CQUFhLEVBTFI7QUFNTEMsa0JBQVksQ0FOUDtBQU9MQyxZQUFN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YSxXQUFiLEVBQTBCLFdBQTFCLEVBQXVDM0IsSUFBSXBCLElBQUosQ0FBU3dDLElBQWhELEVBQXNEcEIsSUFBSXBCLElBQUosQ0FBU2dELEdBQS9EO0FBQ0Q7QUFDRjtBQWpDUSxPQUFYO0FBbUNEOzs7d0NBQ21CO0FBQ2xCLFdBQUszQyxJQUFMLEdBQVksRUFBWjtBQUNBLFdBQUtELFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxXQUFLVSxPQUFMO0FBQ0Q7OztvQ0FDZTtBQUNkLFdBQUtWLFVBQUwsR0FBa0IsS0FBS0EsVUFBTCxHQUFrQixDQUFwQztBQUNBLFdBQUtVLE9BQUw7QUFDRDtBQUNEOzs7OzZCQUNTLENBQ1I7Ozs2QkFDUTtBQUNQLFVBQUlhLE9BQU8sSUFBWDtBQUNBQSxXQUFLeEIsV0FBTCxHQUFtQixLQUFLOEMsT0FBTCxDQUFhQyxVQUFoQztBQUNBdkIsV0FBS3pCLFFBQUwsR0FBZ0IsS0FBSytDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmhELFFBQXhDO0FBQ0F5QixXQUFLdEIsSUFBTCxHQUFZLEVBQVo7QUFDQXNCLFdBQUt2QixVQUFMLEdBQWtCLENBQWxCO0FBQ0F1QixXQUFLYixPQUFMO0FBQ0Q7Ozs7RUF6SGlDcUMsZUFBS0MsSTs7a0JBQXBCekQsTSIsImZpbGUiOiJjb3Vwb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNvdXBvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmirXmiaPliLgnXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvL+WNoeWIuOenjeexu1xyXG4gICAgICBzdGF0ZTogMSxcclxuICAgICAgLy8g6LWE5rqQ5Zyw5Z2AXHJcbiAgICAgIHVybF9saW5rOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgICBjdXJyZW50TnVtOiAxLFxyXG4gICAgICBsaXN0OiBbXVxyXG4gICAgfTtcclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAvLyDnvLrnnIHljovpnaLmmK/lkKbmmL7npLpcclxuICAgICAgbm9EYXRhX3Nob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGdvVXNlOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICBpZih0aGlzLnN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnY291cG9uRGV0YWlsJyx7aWQ6IGlkfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOabtOaUueeKtuaAgeWAvFxyXG4gICAgICBjaGFuZ2VTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtID0gMTtcclxuICAgICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgICAgfSxcclxuICAgICAgLy8gb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgICAgcGF0aDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgLy8gICB9O1xyXG4gICAgICAvLyB9LFxyXG4gICAgICAvLyDkvb/nlKjpl6jlupdcclxuICAgICAgLy/ngrnlh7vnlJ/miJDkuoznu7TnoIFcclxuICAgICAgc2F2ZSgpIHtcclxuICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5L+d5a2Y5Zu+54mHJ10sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMudGFwSW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgIHFyY29kZS5leHBvcnRJbWFnZShmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2F2ZUltYWdlVG9QaG90b3NBbGJ1bSh7XHJcbiAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiBwYXRoXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0TGlzdCAoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgfSlcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9jb3Vwb24vdXNlci9saXN0JyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwYWdlTnVtOiB0aGF0LmN1cnJlbnROdW0sXHJcbiAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIHN0YXR1czp0aGF0LnN0YXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoYXQubGlzdCA9IHRoYXQubGlzdCAuY29uY2F0KHJlcy5kYXRhLmRhdGEubGlzdCk7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhhdC5jdXJyZW50TnVtID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudE51bSA9IHRoYXQuY3VycmVudE51bSA8PSAxID8gMTogdGhhdC5jdXJyZW50TnVtLSAxO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnROdW0gPSAxO1xyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IHRoaXMuY3VycmVudE51bSArIDE7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG4gICAgLy8g5pWw5o2u6I635Y+WXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGF0LnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICB0aGF0LmN1cnJlbnROdW0gPSAxO1xyXG4gICAgICB0aGF0LmdldExpc3QoKTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==