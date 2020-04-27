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

var borrow = function (_wepy$page) {
  _inherits(borrow, _wepy$page);

  function borrow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, borrow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = borrow.__proto__ || Object.getPrototypeOf(borrow)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '帮您贷款'
    }, _this.data = {
      // 月供
      monthlysupplysection: '',
      // 车型id
      carmodelid: '',
      nativeplace: '',
      // 城市名称
      cityname: '',
      householdtype: '',
      // 车型信息
      carmodelJO: {},
      // 产品列表
      financialproductJA: [],
      // 状态码
      code: '',
      url_link: ''
    }, _this.methods = {
      // 分享
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/borrow'
        };
      },
      // 申请
      sq_btn: function sq_btn(e) {
        console.log(e);

        var financialproductid = e.financialproductid;
        this.$parent.globalData.UVselectType = -1;
        this.$navigate('details', {
          carmodelid: this.carmodelid,
          financialproductid: financialproductid,
          downpaymentpercent: e.downpaymentPercent,
          loanterm: e.loanterm
        });
      },

      // 咨询客服
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '400-920-7258'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(borrow, [{
    key: 'onLoad',

    // 获取上一个页面值
    value: function onLoad(res) {
      this.carmodelid = res.carmodelid;
      this.cityname = res.cityname;
      this.nativeplace = res.nativeplace;
      this.householdtype = res.householdtype;
      this.monthlysupplysection = res.monthlysupplysection;
      // 调用产品列表方法
      this.getList();
    }
  }, {
    key: 'onshow',
    value: function onshow() {
      this.url_link = this.$parent.globalData.url_link;
    }

    // 获取产品列表

  }, {
    key: 'getList',
    value: function getList() {
      var that = this;
      var parent_data = this.$parent.globalData;
      wx.showLoading({
        title: '加载中'
      });
      // 产品列表接口请求
      wx.request({
        url: parent_data.json_link + '/api/wxapp/newcarloan/helpyouloan/productlist',
        data: {
          carmodelid: that.carmodelid,
          cityname: that.cityname,
          nativeplace: that.nativeplace,
          householdtype: that.householdtype,
          monthlysupplysection: that.monthlysupplysection
        },
        success: function success(data) {
          wx.hideLoading();
          var res = data.data;
          that.carmodelJO = res.carmodelJO;
          that.financialproductJA = res.financialproductJA;
          that.code = res.code;
          that.$apply();
        },
        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });
        }
      });
    }
  }]);

  return borrow;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(borrow , 'pages/borrow'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvcnJvdy5qcyJdLCJuYW1lcyI6WyJib3Jyb3ciLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm1vbnRobHlzdXBwbHlzZWN0aW9uIiwiY2FybW9kZWxpZCIsIm5hdGl2ZXBsYWNlIiwiY2l0eW5hbWUiLCJob3VzZWhvbGR0eXBlIiwiY2FybW9kZWxKTyIsImZpbmFuY2lhbHByb2R1Y3RKQSIsImNvZGUiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJzcV9idG4iLCJlIiwiY29uc29sZSIsImxvZyIsImZpbmFuY2lhbHByb2R1Y3RpZCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiVVZzZWxlY3RUeXBlIiwiJG5hdmlnYXRlIiwiZG93bnBheW1lbnRwZXJjZW50IiwiZG93bnBheW1lbnRQZXJjZW50IiwibG9hbnRlcm0iLCJ0YXBfdGVsIiwid3giLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJyZXMiLCJnZXRMaXN0IiwidGhhdCIsInBhcmVudF9kYXRhIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2xpbmsiLCJzdWNjZXNzIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJmYWlsIiwic2hvd1RvYXN0IiwiaWNvbiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTDtBQUNBQyw0QkFBc0IsRUFGakI7QUFHTDtBQUNBQyxrQkFBWSxFQUpQO0FBS0xDLG1CQUFhLEVBTFI7QUFNTDtBQUNBQyxnQkFBVSxFQVBMO0FBUUxDLHFCQUFlLEVBUlY7QUFTTDtBQUNBQyxrQkFBWSxFQVZQO0FBV0w7QUFDQUMsMEJBQW9CLEVBWmY7QUFhTDtBQUNBQyxZQUFNLEVBZEQ7QUFlTEMsZ0JBQVM7QUFmSixLLFFBa0JQQyxPLEdBQVU7QUFDUjtBQUNBQyx5QkFBbUIsNkJBQVk7QUFDN0IsZUFBTztBQUNMQyxnQkFBTTtBQURELFNBQVA7QUFHRCxPQU5PO0FBT1I7QUFDQUMsWUFSUSxrQkFRREMsQ0FSQyxFQVFFO0FBQ1JDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7O0FBRUEsWUFBSUcscUJBQXFCSCxFQUFFRyxrQkFBM0I7QUFDQSxhQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFlBQXhCLEdBQXVDLENBQUMsQ0FBeEM7QUFDQSxhQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4Qm5CLHNCQUFZLEtBQUtBLFVBRE87QUFFeEJlLDhCQUFvQkEsa0JBRkk7QUFHeEJLLDhCQUFtQlIsRUFBRVMsa0JBSEc7QUFJeEJDLG9CQUFVVixFQUFFVTtBQUpZLFNBQTFCO0FBTUQsT0FuQk87O0FBb0JSO0FBQ0FDLGFBckJRLHFCQXFCRTtBQUNSQyxXQUFHQyxhQUFILENBQWlCO0FBQ2ZDLHVCQUFhO0FBREUsU0FBakI7QUFHRDtBQXpCTyxLOzs7Ozs7QUEyQlY7MkJBQ09DLEcsRUFBSztBQUNWLFdBQUszQixVQUFMLEdBQWtCMkIsSUFBSTNCLFVBQXRCO0FBQ0EsV0FBS0UsUUFBTCxHQUFnQnlCLElBQUl6QixRQUFwQjtBQUNBLFdBQUtELFdBQUwsR0FBbUIwQixJQUFJMUIsV0FBdkI7QUFDQSxXQUFLRSxhQUFMLEdBQXFCd0IsSUFBSXhCLGFBQXpCO0FBQ0EsV0FBS0osb0JBQUwsR0FBNEI0QixJQUFJNUIsb0JBQWhDO0FBQ0E7QUFDQSxXQUFLNkIsT0FBTDtBQUNEOzs7NkJBQ087QUFDTixXQUFLckIsUUFBTCxHQUFnQixLQUFLUyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JWLFFBQXhDO0FBQ0Q7O0FBRUQ7Ozs7OEJBQ1U7QUFDUixVQUFJc0IsT0FBTyxJQUFYO0FBQ0EsVUFBSUMsY0FBYyxLQUFLZCxPQUFMLENBQWFDLFVBQS9CO0FBQ0FPLFNBQUdPLFdBQUgsQ0FBZTtBQUNiQyxlQUFPO0FBRE0sT0FBZjtBQUdBO0FBQ0FSLFNBQUdTLE9BQUgsQ0FBVztBQUNUQyxhQUFLSixZQUFZSyxTQUFaLEdBQ0gsK0NBRk87QUFHVHJDLGNBQU07QUFDSkUsc0JBQVk2QixLQUFLN0IsVUFEYjtBQUVKRSxvQkFBVTJCLEtBQUszQixRQUZYO0FBR0pELHVCQUFhNEIsS0FBSzVCLFdBSGQ7QUFJSkUseUJBQWUwQixLQUFLMUIsYUFKaEI7QUFLSkosZ0NBQXNCOEIsS0FBSzlCO0FBTHZCLFNBSEc7QUFVVHFDLGVBVlMsbUJBVUR0QyxJQVZDLEVBVUs7QUFDWjBCLGFBQUdhLFdBQUg7QUFDQSxjQUFJVixNQUFNN0IsS0FBS0EsSUFBZjtBQUNBK0IsZUFBS3pCLFVBQUwsR0FBa0J1QixJQUFJdkIsVUFBdEI7QUFDQXlCLGVBQUt4QixrQkFBTCxHQUEwQnNCLElBQUl0QixrQkFBOUI7QUFDQXdCLGVBQUt2QixJQUFMLEdBQVlxQixJQUFJckIsSUFBaEI7QUFDQXVCLGVBQUtTLE1BQUw7QUFDRCxTQWpCUTtBQWtCVEMsWUFsQlMsa0JBa0JGO0FBQ0xmLGFBQUdnQixTQUFILENBQWE7QUFDWFIsbUJBQU8sTUFESTtBQUVYUyxrQkFBTTtBQUZLLFdBQWI7QUFJRDtBQXZCUSxPQUFYO0FBeUJEOzs7O0VBakdpQ0MsZUFBS0MsSTs7a0JBQXBCaEQsTSIsImZpbGUiOiJib3Jyb3cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYm9ycm93IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+W4ruaCqOi0t+asvidcclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5pyI5L6bXHJcbiAgICAgIG1vbnRobHlzdXBwbHlzZWN0aW9uOiAnJyxcclxuICAgICAgLy8g6L2m5Z6LaWRcclxuICAgICAgY2FybW9kZWxpZDogJycsXHJcbiAgICAgIG5hdGl2ZXBsYWNlOiAnJyxcclxuICAgICAgLy8g5Z+O5biC5ZCN56ewXHJcbiAgICAgIGNpdHluYW1lOiAnJyxcclxuICAgICAgaG91c2Vob2xkdHlwZTogJycsXHJcbiAgICAgIC8vIOi9puWei+S/oeaBr1xyXG4gICAgICBjYXJtb2RlbEpPOiB7fSxcclxuICAgICAgLy8g5Lqn5ZOB5YiX6KGoXHJcbiAgICAgIGZpbmFuY2lhbHByb2R1Y3RKQTogW10sXHJcbiAgICAgIC8vIOeKtuaAgeeggVxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgdXJsX2xpbms6JydcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5YiG5LqrXHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvYm9ycm93J1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeUs+ivt1xyXG4gICAgICBzcV9idG4oZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcblxyXG4gICAgICAgIGxldCBmaW5hbmNpYWxwcm9kdWN0aWQgPSBlLmZpbmFuY2lhbHByb2R1Y3RpZDtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAtMTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnZGV0YWlscycsIHtcclxuICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXMuY2FybW9kZWxpZCxcclxuICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogZmluYW5jaWFscHJvZHVjdGlkLFxyXG4gICAgICAgICAgZG93bnBheW1lbnRwZXJjZW50OmUuZG93bnBheW1lbnRQZXJjZW50LFxyXG4gICAgICAgICAgbG9hbnRlcm06IGUubG9hbnRlcm1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZKo6K+i5a6i5pyNXHJcbiAgICAgIHRhcF90ZWwoKSB7XHJcbiAgICAgICAgd3gubWFrZVBob25lQ2FsbCh7XHJcbiAgICAgICAgICBwaG9uZU51bWJlcjogJzQwMC05MjAtNzI1OCdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIOiOt+WPluS4iuS4gOS4qumhtemdouWAvFxyXG4gICAgb25Mb2FkKHJlcykge1xyXG4gICAgICB0aGlzLmNhcm1vZGVsaWQgPSByZXMuY2FybW9kZWxpZDtcclxuICAgICAgdGhpcy5jaXR5bmFtZSA9IHJlcy5jaXR5bmFtZTtcclxuICAgICAgdGhpcy5uYXRpdmVwbGFjZSA9IHJlcy5uYXRpdmVwbGFjZTtcclxuICAgICAgdGhpcy5ob3VzZWhvbGR0eXBlID0gcmVzLmhvdXNlaG9sZHR5cGU7XHJcbiAgICAgIHRoaXMubW9udGhseXN1cHBseXNlY3Rpb24gPSByZXMubW9udGhseXN1cHBseXNlY3Rpb247XHJcbiAgICAgIC8vIOiwg+eUqOS6p+WTgeWIl+ihqOaWueazlVxyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuICAgIG9uc2hvdygpe1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5Lqn5ZOB5YiX6KGoXHJcbiAgICBnZXRMaXN0KCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDkuqflk4HliJfooajmjqXlj6Por7fmsYJcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9oZWxweW91bG9hbi9wcm9kdWN0bGlzdCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2FybW9kZWxpZDogdGhhdC5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgY2l0eW5hbWU6IHRoYXQuY2l0eW5hbWUsXHJcbiAgICAgICAgICBuYXRpdmVwbGFjZTogdGhhdC5uYXRpdmVwbGFjZSxcclxuICAgICAgICAgIGhvdXNlaG9sZHR5cGU6IHRoYXQuaG91c2Vob2xkdHlwZSxcclxuICAgICAgICAgIG1vbnRobHlzdXBwbHlzZWN0aW9uOiB0aGF0Lm1vbnRobHlzdXBwbHlzZWN0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICBsZXQgcmVzID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdGhhdC5jYXJtb2RlbEpPID0gcmVzLmNhcm1vZGVsSk87XHJcbiAgICAgICAgICB0aGF0LmZpbmFuY2lhbHByb2R1Y3RKQSA9IHJlcy5maW5hbmNpYWxwcm9kdWN0SkE7XHJcbiAgICAgICAgICB0aGF0LmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=