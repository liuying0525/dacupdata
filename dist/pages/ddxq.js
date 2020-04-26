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

var ddxq = function (_wepy$page) {
  _inherits(ddxq, _wepy$page);

  function ddxq() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ddxq);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ddxq.__proto__ || Object.getPrototypeOf(ddxq)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单详情'
    }, _this.data = {
      // 订单数据
      res: [],
      // 订单id
      orderid: '',
      // 订单类型
      ordertype: '',
      // 订单状态
      orderstatue: '',
      finalPayment: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 取消订单
      quxiao_btn: function quxiao_btn() {
        var this_ = this;
        var access_token = this.$parent.globalData.access_token;
        var json_link = this.$parent.globalData.json_link;
        var orderid = this.orderid;

        wx.showModal({
          title: '提示',
          content: '确认取消？',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: json_link + '/api/wxapp/reservationorder/cancelorder?access_token=' + access_token,
                data: {
                  orderid: orderid
                },
                success: function success(data) {
                  if (data.data.code == 'A00006') {
                    wx.showToast({
                      title: '取消订单成功',
                      icon: 'success',
                      duration: 2000
                    }), this_.orderstatue = '已取消';
                    this_.$apply();
                  }
                },
                fail: function fail() {
                  wx.showToast({
                    title: '网络异常',
                    icon: 'none'
                  });

                  setTimeout(function () {
                    wx.hideToast();
                  }, 2000);
                  return;
                }
              });
            } else if (res.cancel) {}
          }
        });
      },

      // 删除订单
      // bindsubmit(e) {
      //   wx.showLoading({
      //     title: '删除中'
      //   });
      //   let this_ = this;
      //   let json_link = this.$parent.globalData.json_link;
      //   let parent_data = this.$parent.globalData;
      //   wx.request({
      //     url:
      //       parent_data.json_link +
      //       '/api/wxapp/reservationorder/removeorder?access_token=' +
      //       parent_data.access_token,
      //     data: {
      //       orderid: this_.orderid,
      //       formid: e.detail.formId
      //     },
      //     success(data) {
      //       if (data.data.code === 'A00006') {
      //         wx.showToast({
      //           title: '删除订单成功',
      //           icon: 'success'
      //         });

      //         setTimeout(() => {
      //           wx.navigateBack();
      //         }, 1500);
      //       }
      //     }
      //   });
      // },
      // 联系我们
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '021-20689938' //仅为示例，并非真实的电话号码
        });
      },

      // 跳转到金融商品详情页或直租页
      toDetails: function toDetails() {
        this.$parent.globalData.UVselectType = -1;
        var carmodelid = this.data.res.carmodelid;
        if (this.ordertype == 0) {
          // 贷款
          wx.navigateTo({
            url: 'commodity_details?carmodelid=' + carmodelid
          });
        } else {
          // 直租
          wx.navigateTo({
            url: 'straight_detail?carmodelid=' + carmodelid + '&financialid=' + this.res.financialproductid
          });
        }

        this.$parent.globalData.pageid = [carmodelid];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ddxq, [{
    key: 'onLoad',
    value: function onLoad(res) {
      // 请求订单详情的数据
      var orderid = res.orderid ? res.orderid : this.orderid;
      var json_link = this.$parent.globalData.json_link;
      var access_token = this.$parent.globalData.access_token;
      var this_ = this;
      this.ordertype = res.ordertype;
      this.orderstatue = res.orderstatue;
      wx.request({
        url: json_link + '/api/wxapp/reservationorder/orderdetails?access_token=' + access_token,
        data: {
          orderid: orderid
        },
        success: function success(data) {
          var orderM = data.data.data;
          orderM.downpaymentPara = orderM.downpaymentPara.toFixed(2);
          orderM.productpara = orderM.productpara.toFixed(2);
          orderM.monthlySupply = orderM.monthlySupply.toFixed(2);
          orderM.finalPayment = orderM.finalPayment.toFixed(2);
          orderM.createtime = this_.js_date_time(orderM.createtime);
          this_.res = orderM;
          this_.finalPayment = this_.res.finalPayment;

          this_.orderid = orderM.orderid;
          this_.$apply();
        },

        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });

          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return;
        }
      });
    }
    // 格式化时间

  }, {
    key: 'js_date_time',
    value: function js_date_time(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }]);

  return ddxq;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ddxq , 'pages/ddxq'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRkeHEuanMiXSwibmFtZXMiOlsiZGR4cSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVzIiwib3JkZXJpZCIsIm9yZGVydHlwZSIsIm9yZGVyc3RhdHVlIiwiZmluYWxQYXltZW50IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsInF1eGlhb19idG4iLCJ0aGlzXyIsImFjY2Vzc190b2tlbiIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwianNvbl9saW5rIiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzdWNjZXNzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJjb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwiJGFwcGx5IiwiZmFpbCIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJjYW5jZWwiLCJ0YXBfdGVsIiwibWFrZVBob25lQ2FsbCIsInBob25lTnVtYmVyIiwidG9EZXRhaWxzIiwiVVZzZWxlY3RUeXBlIiwiY2FybW9kZWxpZCIsIm5hdmlnYXRlVG8iLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJwYWdlaWQiLCJwYWdlbmFtZSIsImNsaWNrbnVtb3JkZXJudW1zdGF0Iiwib3JkZXJNIiwiZG93bnBheW1lbnRQYXJhIiwidG9GaXhlZCIsInByb2R1Y3RwYXJhIiwibW9udGhseVN1cHBseSIsImNyZWF0ZXRpbWUiLCJqc19kYXRlX3RpbWUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxR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SyxnQkFBTVIsT0FBTixHQUFnQnlDLE9BQU96QyxPQUF2QjtBQUNBUSxnQkFBTWlCLE1BQU47QUFDRCxTQXBCUTs7QUFxQlRDLGNBQU0sZ0JBQVc7QUFDZmIsYUFBR1MsU0FBSCxDQUFhO0FBQ1hQLG1CQUFPLE1BREk7QUFFWFEsa0JBQU07QUFGSyxXQUFiOztBQUtBSSxxQkFBVyxZQUFXO0FBQ3BCZCxlQUFHZSxTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBL0JRLE9BQVg7QUFpQ0Q7QUFDRDs7OztpQ0FDYW9CLFMsRUFBVztBQUN0QixVQUFJQyxPQUFPLElBQUlDLElBQUosQ0FBU0YsU0FBVCxDQUFYLENBRHNCLENBQ1U7QUFDaEMsVUFBSUcsSUFBSUYsS0FBS0csV0FBTCxLQUFxQixHQUE3QjtBQUNBLFVBQUlDLElBQ0YsQ0FBQ0osS0FBS0ssUUFBTCxLQUFrQixDQUFsQixHQUFzQixFQUF0QixHQUNHLE9BQU9MLEtBQUtLLFFBQUwsS0FBa0IsQ0FBekIsQ0FESCxHQUVHTCxLQUFLSyxRQUFMLEtBQWtCLENBRnRCLElBRTJCLEdBSDdCO0FBSUEsVUFBSUMsSUFBSU4sS0FBS08sT0FBTCxLQUFpQixHQUF6QjtBQUNBLFVBQUlDLElBQUlSLEtBQUtTLFFBQUwsS0FBa0IsR0FBMUI7QUFDQSxVQUFJQyxJQUFJVixLQUFLVyxVQUFMLEtBQW9CLEdBQTVCO0FBQ0EsVUFBSUMsSUFBSVosS0FBS2EsVUFBTCxFQUFSO0FBQ0EsYUFBT1gsSUFBSUUsQ0FBSixHQUFRRSxDQUFSLEdBQVlFLENBQVosR0FBZ0JFLENBQWhCLEdBQW9CRSxDQUEzQjtBQUNEOzs7O0VBMUwrQkUsZUFBS0MsSTs7a0JBQWxCckUsSSIsImZpbGUiOiJkZHhxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkZHhxIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6i5Y2V6K+m5oOFJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOiuouWNleaVsOaNrlxyXG4gICAgcmVzOiBbXSxcclxuICAgIC8vIOiuouWNlWlkXHJcbiAgICBvcmRlcmlkOiAnJyxcclxuICAgIC8vIOiuouWNleexu+Wei1xyXG4gICAgb3JkZXJ0eXBlOiAnJyxcclxuICAgIC8vIOiuouWNleeKtuaAgVxyXG4gICAgb3JkZXJzdGF0dWU6ICcnLFxyXG4gICAgZmluYWxQYXltZW50OicnXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8g5Y+W5raI6K6i5Y2VXHJcbiAgICBxdXhpYW9fYnRuKCkge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgYWNjZXNzX3Rva2VuID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYWNjZXNzX3Rva2VuO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgb3JkZXJpZCA9IHRoaXMub3JkZXJpZDtcclxuXHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfnoa7orqTlj5bmtojvvJ8nLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgIGpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL2NhbmNlbG9yZGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBvcmRlcmlkOiBvcmRlcmlkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iOiuouWNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICh0aGlzXy5vcmRlcnN0YXR1ZSA9ICflt7Llj5bmtognKTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOWIoOmZpOiuouWNlVxyXG4gICAgLy8gYmluZHN1Ym1pdChlKSB7XHJcbiAgICAvLyAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgIC8vICAgICB0aXRsZTogJ+WIoOmZpOS4rSdcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAvLyAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAvLyAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgLy8gICB3eC5yZXF1ZXN0KHtcclxuICAgIC8vICAgICB1cmw6XHJcbiAgICAvLyAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgLy8gICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9yZW1vdmVvcmRlcj9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAvLyAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAvLyAgICAgZGF0YToge1xyXG4gICAgLy8gICAgICAgb3JkZXJpZDogdGhpc18ub3JkZXJpZCxcclxuICAgIC8vICAgICAgIGZvcm1pZDogZS5kZXRhaWwuZm9ybUlkXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgIC8vICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PT0gJ0EwMDAwNicpIHtcclxuICAgIC8vICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgIC8vICAgICAgICAgICB0aXRsZTogJ+WIoOmZpOiuouWNleaIkOWKnycsXHJcbiAgICAvLyAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICAvLyAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8g6IGU57O75oiR5LusXHJcbiAgICB0YXBfdGVsKCkge1xyXG4gICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICBwaG9uZU51bWJlcjogJzAyMS0yMDY4OTkzOCcgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTnlLXor53lj7fnoIFcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g6Lez6L2s5Yiw6YeR6J6N5ZWG5ZOB6K+m5oOF6aG15oiW55u056ef6aG1XHJcbiAgICB0b0RldGFpbHMoKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IC0xO1xyXG4gICAgICBsZXQgY2FybW9kZWxpZCA9IHRoaXMuZGF0YS5yZXMuY2FybW9kZWxpZDtcclxuICAgICAgaWYgKHRoaXMub3JkZXJ0eXBlID09IDApIHtcclxuICAgICAgICAvLyDotLfmrL5cclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJ2NvbW1vZGl0eV9kZXRhaWxzP2Nhcm1vZGVsaWQ9JyArIGNhcm1vZGVsaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDnm7Tnp59cclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgJ3N0cmFpZ2h0X2RldGFpbD9jYXJtb2RlbGlkPScgK1xyXG4gICAgICAgICAgICBjYXJtb2RlbGlkICtcclxuICAgICAgICAgICAgJyZmaW5hbmNpYWxpZD0nICtcclxuICAgICAgICAgICAgdGhpcy5yZXMuZmluYW5jaWFscHJvZHVjdGlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFtjYXJtb2RlbGlkXTtcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbM107XHJcbiAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgxKTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZChyZXMpIHtcclxuICAgIC8vIOivt+axguiuouWNleivpuaDheeahOaVsOaNrlxyXG4gICAgbGV0IG9yZGVyaWQgPSByZXMub3JkZXJpZCA/IHJlcy5vcmRlcmlkIDogdGhpcy5vcmRlcmlkO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGxldCBhY2Nlc3NfdG9rZW4gPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgdGhpcy5vcmRlcnR5cGUgPSByZXMub3JkZXJ0eXBlO1xyXG4gICAgdGhpcy5vcmRlcnN0YXR1ZSA9IHJlcy5vcmRlcnN0YXR1ZTtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6XHJcbiAgICAgICAganNvbl9saW5rICtcclxuICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL29yZGVyZGV0YWlscz9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgYWNjZXNzX3Rva2VuLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgb3JkZXJpZDogb3JkZXJpZFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICBsZXQgb3JkZXJNID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgb3JkZXJNLmRvd25wYXltZW50UGFyYSA9IG9yZGVyTS5kb3ducGF5bWVudFBhcmEudG9GaXhlZCgyKTtcclxuICAgICAgICBvcmRlck0ucHJvZHVjdHBhcmEgPSBvcmRlck0ucHJvZHVjdHBhcmEudG9GaXhlZCgyKTtcclxuICAgICAgICBvcmRlck0ubW9udGhseVN1cHBseSA9IG9yZGVyTS5tb250aGx5U3VwcGx5LnRvRml4ZWQoMik7XHJcbiAgICAgICAgb3JkZXJNLmZpbmFsUGF5bWVudCA9IG9yZGVyTS5maW5hbFBheW1lbnQudG9GaXhlZCgyKTtcclxuICAgICAgICBvcmRlck0uY3JlYXRldGltZSA9IHRoaXNfLmpzX2RhdGVfdGltZShvcmRlck0uY3JlYXRldGltZSk7XHJcbiAgICAgICAgdGhpc18ucmVzID0gb3JkZXJNO1xyXG4gICAgICAgIHRoaXNfLmZpbmFsUGF5bWVudD10aGlzXy5yZXMuZmluYWxQYXltZW50O1xyXG4gICAgICAgXHJcbiAgICAgICAgdGhpc18ub3JkZXJpZCA9IG9yZGVyTS5vcmRlcmlkO1xyXG4gICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyDmoLzlvI/ljJbml7bpl7RcclxuICBqc19kYXRlX3RpbWUodGltZXN0YW1wKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7IC8v5pe26Ze05oiz5Li6MTDkvY3pnIAqMTAwMO+8jOaXtumXtOaIs+S4ujEz5L2N55qE6K+d5LiN6ZyA5LmYMTAwMFxyXG4gICAgdmFyIFkgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLSc7XHJcbiAgICB2YXIgTSA9XHJcbiAgICAgIChkYXRlLmdldE1vbnRoKCkgKyAxIDwgMTBcclxuICAgICAgICA/ICcwJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKVxyXG4gICAgICAgIDogZGF0ZS5nZXRNb250aCgpICsgMSkgKyAnLSc7XHJcbiAgICB2YXIgRCA9IGRhdGUuZ2V0RGF0ZSgpICsgJyAnO1xyXG4gICAgdmFyIGggPSBkYXRlLmdldEhvdXJzKCkgKyAnOic7XHJcbiAgICB2YXIgbSA9IGRhdGUuZ2V0TWludXRlcygpICsgJzonO1xyXG4gICAgdmFyIHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgIHJldHVybiBZICsgTSArIEQgKyBoICsgbSArIHM7XHJcbiAgfVxyXG59XHJcbiJdfQ==