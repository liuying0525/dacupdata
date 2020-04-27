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

var earlyContract = function (_wepy$page) {
  _inherits(earlyContract, _wepy$page);

  function earlyContract() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, earlyContract);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = earlyContract.__proto__ || Object.getPrototypeOf(earlyContract)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提前还款'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      parent_data: '',
      timeList: [],
      currentTime: '',
      contractData: '',
      submitInfo: '',
      showDetail: false,
      fileType: '1'
    }, _this.methods = {
      radioChange: function radioChange(e) {
        this.fileType = e.detail.value;
        console.log(this.fileType);
        this.$apply();
      },
      getDetail: function getDetail() {
        this.showDetail = true;
      },
      timeChange: function timeChange(val) {
        this.currentTime = this.timeList[val.detail.value];
      },
      goBack: function goBack() {
        wx.navigateBack({
          delta: 1
        });
      },
      submit: function submit() {
        var that = this;
        Object.assign(that.submitInfo, { "repaymentMethod": that.fileType });
        wx.request({
          url: that.parent_data.json_dhLink + '/repayment/apply',
          data: that.submitInfo,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.$redirect('earlySubmit', { id: res.data.data.repaymentId });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(earlyContract, [{
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
      var that = this;
      that.parent_data = that.$parent.globalData;
      that.url_link = that.$parent.globalData.url_link;
      wx.request({
        url: that.parent_data.json_dhLink + '/repayment/trial',
        //url:"http://localhost:8088/earlyContract.json",
        data: options,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            res.data.data.paymentDate = that.timeReg(res.data.data.paymentDate).split(' ')[0];
            res.data.data.contractStartDate = that.timeReg(res.data.data.contractStartDate).split(' ')[0];
            res.data.data.contractEndDate = that.timeReg(res.data.data.contractEndDate).split(' ')[0];
            that.contractData = res.data.data;
            var timeStr = new Date(res.data.data.paymentDate).getTime() / 1000;
            that.submitInfo = {
              userId: that.parent_data.login_userId,
              contractNo: that.contractData.contractNo,
              payDate: timeStr,
              loginToken: that.parent_data.login_token,
              repaymentAmount: that.contractData.paymentAmount
            };
            wx.getStorage({
              key: 'contract_id',
              success: function success(res) {
                if (res.data) {
                  that.submitInfo.repaymentId = res.data;
                  console.log('id的值为：' + res.data);
                }
              }
            });
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            if (res.data.code == '10017') {
              that.$redirect('secLogin');
            }
          }
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.parent_data = this.$parent.globalData;
      this.url_link = this.$parent.globalData.url_link;
      this.showDetail = false;
    }
  }]);

  return earlyContract;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlyContract , 'pages/earlyContract'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5Q29udHJhY3QuanMiXSwibmFtZXMiOlsiZWFybHlDb250cmFjdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJ0aW1lTGlzdCIsImN1cnJlbnRUaW1lIiwiY29udHJhY3REYXRhIiwic3VibWl0SW5mbyIsInNob3dEZXRhaWwiLCJmaWxlVHlwZSIsIm1ldGhvZHMiLCJyYWRpb0NoYW5nZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCJnZXREZXRhaWwiLCJ0aW1lQ2hhbmdlIiwidmFsIiwiZ29CYWNrIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInN1Ym1pdCIsInRoYXQiLCJPYmplY3QiLCJhc3NpZ24iLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsIiRyZWRpcmVjdCIsImlkIiwicmVwYXltZW50SWQiLCIkaW52b2tlIiwibXNnIiwibnVtIiwiZGF0ZSIsIkRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJwYXltZW50RGF0ZSIsInRpbWVSZWciLCJzcGxpdCIsImNvbnRyYWN0U3RhcnREYXRlIiwiY29udHJhY3RFbmREYXRlIiwidGltZVN0ciIsImdldFRpbWUiLCJ1c2VySWQiLCJsb2dpbl91c2VySWQiLCJjb250cmFjdE5vIiwicGF5RGF0ZSIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsInJlcGF5bWVudEFtb3VudCIsInBheW1lbnRBbW91bnQiLCJnZXRTdG9yYWdlIiwia2V5Iiwid2VweSIs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QUFDQSxnQkFBSU4sSUFBSWxDLElBQUosQ0FBU21DLElBQVQsSUFBaUIsT0FBckIsRUFBOEI7QUFDNUJWLG1CQUFLVyxTQUFMLENBQWUsVUFBZjtBQUNEO0FBQ0Y7QUFDRjtBQXRDUSxPQUFYO0FBd0NEOzs7NkJBQ1E7QUFDUCxXQUFLbEMsV0FBTCxHQUFtQixLQUFLdUQsT0FBTCxDQUFhQyxVQUFoQztBQUNBLFdBQUt6RCxRQUFMLEdBQWdCLEtBQUt3RCxPQUFMLENBQWFDLFVBQWIsQ0FBd0J6RCxRQUF4QztBQUNBLFdBQUtNLFVBQUwsR0FBa0IsS0FBbEI7QUFDRDs7OztFQWpId0NxRSxlQUFLQyxJOztrQkFBM0JsRixhIiwiZmlsZSI6ImVhcmx5Q29udHJhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGVhcmx5Q29udHJhY3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o+Q5YmN6L+Y5qy+J1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICAgIHRpbWVMaXN0OltdLFxyXG4gICAgICBjdXJyZW50VGltZTogJycsXHJcbiAgICAgIGNvbnRyYWN0RGF0YTogJycsXHJcbiAgICAgIHN1Ym1pdEluZm86ICcnLFxyXG4gICAgICBzaG93RGV0YWlsOiBmYWxzZSxcclxuICAgICAgZmlsZVR5cGU6ICcxJyxcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgcmFkaW9DaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpcy5maWxlVHlwZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZVR5cGUpO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldERldGFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbCA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVDaGFuZ2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50aW1lTGlzdFt2YWwuZGV0YWlsLnZhbHVlXVxyXG4gICAgICB9LFxyXG4gICAgICBnb0JhY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoYXQuc3VibWl0SW5mbyx7XCJyZXBheW1lbnRNZXRob2RcIjp0aGF0LmZpbGVUeXBlfSk7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL3JlcGF5bWVudC9hcHBseScsXHJcbiAgICAgICAgICBkYXRhOiB0aGF0LnN1Ym1pdEluZm8sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kcmVkaXJlY3QoJ2Vhcmx5U3VibWl0Jywge2lkOiByZXMuZGF0YS5kYXRhLnJlcGF5bWVudElkfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycscmVzLmRhdGEuY29kZSxyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRpbWVSZWcgKG51bSkge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG51bSAqIDEwMDApO1xyXG4gICAgICBsZXQgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgICAgbGV0IE0gPSAoZGF0ZS5nZXRNb250aCgpKzEgPCAxMCA/ICcwJysoZGF0ZS5nZXRNb250aCgpKzEpIDogZGF0ZS5nZXRNb250aCgpKzEpICsgJy0nO1xyXG4gICAgICBsZXQgRCA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTA/ICgnMCcrIChkYXRlLmdldERhdGUoKSkgKyAnICcpIDogKGRhdGUuZ2V0RGF0ZSgpICsgJyAnKTtcclxuICAgICAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICgoJzAnICsgZGF0ZS5nZXRIb3VycygpKSArICc6JykgOiAoZGF0ZS5nZXRIb3VycygpICsgJzonKTtcclxuICAgICAgbGV0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkgKyAnOicpIDogKGRhdGUuZ2V0TWludXRlcygpICsgJzonKTtcclxuICAgICAgbGV0IHMgPSBkYXRlLmdldFNlY29uZHMoKTwgMTAgPyAoJzAnICsgZGF0ZS5nZXRTZWNvbmRzKCkpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHJldHVybiBZK00rRCtoK20rcztcclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5wYXJlbnRfZGF0YSA9IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGF0LnVybF9saW5rID0gdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9yZXBheW1lbnQvdHJpYWwnLFxyXG4gICAgICAgIC8vdXJsOlwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2Vhcmx5Q29udHJhY3QuanNvblwiLFxyXG4gICAgICAgZGF0YTogb3B0aW9ucyxcclxuICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucGF5bWVudERhdGUgPSB0aGF0LnRpbWVSZWcocmVzLmRhdGEuZGF0YS5wYXltZW50RGF0ZSkuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5jb250cmFjdFN0YXJ0RGF0ZSA9IHRoYXQudGltZVJlZyhyZXMuZGF0YS5kYXRhLmNvbnRyYWN0U3RhcnREYXRlKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhLmNvbnRyYWN0RW5kRGF0ZSA9IHRoYXQudGltZVJlZyhyZXMuZGF0YS5kYXRhLmNvbnRyYWN0RW5kRGF0ZSkuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICAgICAgdGhhdC5jb250cmFjdERhdGEgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICBsZXQgdGltZVN0ciA9IG5ldyBEYXRlKHJlcy5kYXRhLmRhdGEucGF5bWVudERhdGUpLmdldFRpbWUoKS8xMDAwO1xyXG4gICAgICAgICAgICB0aGF0LnN1Ym1pdEluZm8gPSB7XHJcbiAgICAgICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgICAgICBjb250cmFjdE5vOiB0aGF0LmNvbnRyYWN0RGF0YS5jb250cmFjdE5vLFxyXG4gICAgICAgICAgICAgIHBheURhdGU6IHRpbWVTdHIsXHJcbiAgICAgICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICAgICAgICByZXBheW1lbnRBbW91bnQ6IHRoYXQuY29udHJhY3REYXRhLnBheW1lbnRBbW91bnQsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd3guZ2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAga2V5OiAnY29udHJhY3RfaWQnLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc3VibWl0SW5mby5yZXBheW1lbnRJZCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWTnmoTlgLzkuLrvvJonICsgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDE3Jykge1xyXG4gICAgICAgICAgICAgIHRoYXQuJHJlZGlyZWN0KCdzZWNMb2dpbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5zaG93RGV0YWlsID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=