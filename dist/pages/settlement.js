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

var settlement = function (_wepy$page) {
  _inherits(settlement, _wepy$page);

  function settlement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, settlement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = settlement.__proto__ || Object.getPrototypeOf(settlement)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '结清材料'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      winHeight: 0,
      url_link: '',
      parent_data: '',
      repaymentIds: [], //列表中ids
      // 列表
      list: [],
      // 还款日
      hk_time: '',
      currentTab: 0, //预设当前项的值
      scrollLeft: 0, //tab标题的滚动条位置
      noData_show: false,
      contractEndDte: '',
      contractEndTime: '',
      statutsEn: ['快递信息待填写', '已填写待结清', '待寄件', '已寄件', '已签收']

    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },

      //跳转页面
      currentStatut: function currentStatut(item) {
        switch (item.status) {
          case 0:
            this.$navigate('sendInformation', item);
            break;
          case 1:
            this.$navigate('tosenda', item);
          case 2:
            this.$navigate('tosenda', item);
            break;
          case 3:
            this.$navigate('tosenda', item);
            break;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  // computed = {
  //   // 缺省压面是否显示
  //   noData_show: function () {
  //     if (this.list.length == 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }
  // };


  _createClass(settlement, [{
    key: 'getList',


    // 结清材料
    value: function getList() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.login({
        success: function success(res) {
          // success
          wx.request({
            url: that.parent_data.json_dhLink + '/delivery/queryContractList',
            //url: 'http://test-webapi.dongzhengafc.com:9113/delivery/queryContractList',
            //url:'http://localhost:8088/settlement.json',
            data: {
              loginToken: that.parent_data.login_token,
              userId: that.parent_data.login_userId

            },
            header: {
              'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            method: 'POST',
            success: function success(res) {
              if (res.data.code == '10001') {
                console.log('新获取列表长度为：' + that.list.length + '当前页为' + that.currentNum);
                wx.hideLoading();
                that.existProcessing = res.data.data.existProcessing;
                that.repaymentIds = [];

                if (res.data.data.length > 0) {
                  that.list = res.data.data;
                  for (var i in res.data.data) {
                    // res.data.data[i].contractEndDte = that.timeReg(res.data.data[i].contractEndDte).split('T')[0];
                    // res.data.data[i].contractEndDte = that.timeReg(res.data.data[i].contractEndDte);
                    res.data.data[i].contractEndDte = res.data.data[i].contractEndDte.split('T')[0];
                    if (res.data.data[i].contractMaturityDte != null) {
                      res.data.data[i].contractMaturityDte = res.data.data[i].contractMaturityDte.split('T')[0];
                    } else {
                      res.data.data[i].contractMaturityDte = "----------";
                    }

                    that.repaymentIds.push(res.data.data[i].contractId);
                    if (res.data.data[i].status == 1) {
                      if (res.data.data[i].requestStatusCde == 20) {
                        that.list[i].status = 1;
                      } else {
                        that.list[i].status = null;
                      }
                    }
                    if (res.data.data[i].status == 2) {
                      if (res.data.data[i].requestStatusCde == 24 || res.data.data[i].requestStatusCde == 25) {
                        that.list[i].status = 2;
                      } else {
                        that.list[i].status = null;
                      }
                    }
                    that.noData_show = false;
                    that.$apply();
                  }
                } else {
                  that.noData_show = true;
                  if (that.currentNum == 1) {
                    that.list = res.data.data;
                    that.$apply();
                  } else {
                    that.currentNum = that.currentNum <= 1 ? 1 : that.currentNum - 1;
                    wx.showToast({
                      title: '加载全部',
                      icon: 'success',
                      duration: 2000
                    });
                  }
                  // return false;
                }
                // }
              } else {
                wx.hideLoading();
                that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
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
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
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
    key: 'onShow',
    value: function onShow() {
      this.parent_data = this.$parent.globalData;
      this.url_link = this.$parent.globalData.url_link;

      if (this.parent_data.login_token !== '') {
        this.list = [];
        this.getList();
      } else {
        this.$redirect('secLogin', { backUrl: 'settlement' });
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return settlement;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(settlement , 'pages/settlement'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRsZW1lbnQuanMiXSwibmFtZXMiOlsic2V0dGxlbWVudCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsIndpbkhlaWdodCIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJyZXBheW1lbnRJZHMiLCJsaXN0IiwiaGtfdGltZSIsImN1cnJlbnRUYWIiLCJzY3JvbGxMZWZ0Iiwibm9EYXRhX3Nob3ciLCJjb250cmFjdEVuZER0ZSIsImNvbnRyYWN0RW5kVGltZSIsInN0YXR1dHNFbiIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJjdXJyZW50U3RhdHV0IiwiaXRlbSIsInN0YXR1cyIsIiRuYXZpZ2F0ZSIsInRoYXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJsb2dpblRva2VuIiwibG9naW5fdG9rZW4iLCJ1c2VySWQiLCJsb2dpbl91c2VySWQiLCJoZWFkZXIiLCJtZXRob2QiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImN1cnJlbnROdW0iLCJoaWRlTG9hZGluZyIsImV4aXN0UHJvY2Vzc2luZyIsImkiLCJzcGxpdCIsImNvbnRyYWN0TWF0dXJpdHlEdGUiLCJwdXNoIiwiY29udHJhY3RJZCIsInJlcXVlc3RTdGF0dXNDZGUiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCIkaW52b2tlIiwibXNnIiwiZmFpbCIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJjb21wbGV0ZSIsIm51bSIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiJHBhcmVudCIsImds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S2EsVUFBTCxFQUFoQyxHQUFxRGIsS0FBS2EsVUFBTCxFQUE3RDtBQUNBLGFBQU9YLElBQUVFLENBQUYsR0FBSUUsQ0FBSixHQUFNRSxDQUFOLEdBQVFFLENBQVIsR0FBVUUsQ0FBakI7QUFDRDs7OzZCQUdPO0FBQ1IsV0FBS3JFLFdBQUwsR0FBbUIsS0FBS3VFLE9BQUwsQ0FBYUMsVUFBaEM7QUFDQSxXQUFLekUsUUFBTCxHQUFnQixLQUFLd0UsT0FBTCxDQUFhQyxVQUFiLENBQXdCekUsUUFBeEM7O0FBRUEsVUFBSSxLQUFLQyxXQUFMLENBQWlCNEIsV0FBakIsS0FBaUMsRUFBckMsRUFBeUM7QUFDdkMsYUFBSzFCLElBQUwsR0FBWSxFQUFaO0FBQ0EsYUFBS3VFLE9BQUw7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLQyxTQUFMLENBQWUsVUFBZixFQUEwQixFQUFDQyxTQUFTLFlBQVYsRUFBMUI7QUFDRDtBQUNGOzs7NkJBQ1EsQ0FDUjs7OztFQS9McUNDLGVBQUtDLEk7O2tCQUF4QnJGLFUiLCJmaWxlIjoic2V0dGxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IHRvYXN0SW5mbyBmcm9tICcuLi9jb21wb25lbnRzL3RvYXN0SW5mbydcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc2V0dGxlbWVudCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+e7k+a4headkOaWmSdcclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIHdpbkhlaWdodDogMCxcclxuICAgIHVybF9saW5rOiAnJyxcclxuICAgIHBhcmVudF9kYXRhOicnLFxyXG4gICAgcmVwYXltZW50SWRzOltdLC8v5YiX6KGo5LitaWRzXHJcbiAgICAvLyDliJfooahcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgLy8g6L+Y5qy+5pelXHJcbiAgICBoa190aW1lOiAnJyxcclxuICAgICBjdXJyZW50VGFiOiAwLCAvL+mihOiuvuW9k+WJjemhueeahOWAvFxyXG4gICAgc2Nyb2xsTGVmdDogMCwgLy90YWLmoIfpopjnmoTmu5rliqjmnaHkvY3nva5cclxuICAgIG5vRGF0YV9zaG93OmZhbHNlLFxyXG4gICAgY29udHJhY3RFbmREdGU6JycsXHJcbiAgICBjb250cmFjdEVuZFRpbWU6JycsXHJcbiAgICBzdGF0dXRzRW46Wyflv6vpgJLkv6Hmga/lvoXloavlhpknLCflt7LloavlhpnlvoXnu5PmuIUnLCflvoXlr4Tku7YnLCflt7Llr4Tku7YnLCflt7Lnrb7mlLYnXVxyXG5cclxuICB9O1xyXG4gIC8vIGNvbXB1dGVkID0ge1xyXG4gIC8vICAgLy8g57y655yB5Y6L6Z2i5piv5ZCm5pi+56S6XHJcbiAgLy8gICBub0RhdGFfc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gIC8vICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIHRydWU7XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9XHJcbiAgLy8gfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL+i3s+i9rOmhtemdolxyXG4gICAgY3VycmVudFN0YXR1dDpmdW5jdGlvbihpdGVtKXtcclxuICAgICAgc3dpdGNoKGl0ZW0uc3RhdHVzKXtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnc2VuZEluZm9ybWF0aW9uJyxpdGVtKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTogIFxyXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3Rvc2VuZGEnLGl0ZW0pO1xyXG4gICAgICAgIGNhc2UgMjogIFxyXG4gICAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3Rvc2VuZGEnLGl0ZW0pO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOiAgXHJcbiAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgndG9zZW5kYScsaXRlbSk7XHJcbiAgICAgICAgICBicmVhazsgICAgICAgICAgXHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOe7k+a4headkOaWmVxyXG4gIGdldExpc3QgKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgIH0pXHJcbnd4LmxvZ2luKHtcclxuICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpe1xyXG4gICAgLy8gc3VjY2Vzc1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rKycvZGVsaXZlcnkvcXVlcnlDb250cmFjdExpc3QnLFxyXG4gICAgICAvL3VybDogJ2h0dHA6Ly90ZXN0LXdlYmFwaS5kb25nemhlbmdhZmMuY29tOjkxMTMvZGVsaXZlcnkvcXVlcnlDb250cmFjdExpc3QnLFxyXG4gICAgICAvL3VybDonaHR0cDovL2xvY2FsaG9zdDo4MDg4L3NldHRsZW1lbnQuanNvbicsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWRcclxuICAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04J1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5paw6I635Y+W5YiX6KGo6ZW/5bqm5Li677yaJysgdGhhdC5saXN0Lmxlbmd0aCArICflvZPliY3pobXkuLonKyB0aGF0LmN1cnJlbnROdW0pO1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB0aGF0LmV4aXN0UHJvY2Vzc2luZyA9IHJlcy5kYXRhLmRhdGEuZXhpc3RQcm9jZXNzaW5nO1xyXG4gICAgICAgICAgICB0aGF0LnJlcGF5bWVudElkcyA9IFtdO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSByZXMuZGF0YS5kYXRhOyBcclxuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gcmVzLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgIC8vIHJlcy5kYXRhLmRhdGFbaV0uY29udHJhY3RFbmREdGUgPSB0aGF0LnRpbWVSZWcocmVzLmRhdGEuZGF0YVtpXS5jb250cmFjdEVuZER0ZSkuc3BsaXQoJ1QnKVswXTtcclxuICAgICAgICAgICAgICAvLyByZXMuZGF0YS5kYXRhW2ldLmNvbnRyYWN0RW5kRHRlID0gdGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGFbaV0uY29udHJhY3RFbmREdGUpO1xyXG4gICAgICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGFbaV0uY29udHJhY3RFbmREdGUgPSByZXMuZGF0YS5kYXRhW2ldLmNvbnRyYWN0RW5kRHRlLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGF0YVtpXS5jb250cmFjdE1hdHVyaXR5RHRlIT1udWxsKXtcclxuICAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhW2ldLmNvbnRyYWN0TWF0dXJpdHlEdGU9cmVzLmRhdGEuZGF0YVtpXS5jb250cmFjdE1hdHVyaXR5RHRlLnNwbGl0KCdUJylbMF07XHJcbiAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhW2ldLmNvbnRyYWN0TWF0dXJpdHlEdGU9XCItLS0tLS0tLS0tXCJcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGF0LnJlcGF5bWVudElkcy5wdXNoKHJlcy5kYXRhLmRhdGFbaV0uY29udHJhY3RJZCk7XHJcbiAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGF0YVtpXS5zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGF0YVtpXS5yZXF1ZXN0U3RhdHVzQ2RlPT0yMCl7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQubGlzdFtpXS5zdGF0dXM9MTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICB0aGF0Lmxpc3RbaV0uc3RhdHVzPW51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGFbaV0uc3RhdHVzPT0yKXtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGFbaV0ucmVxdWVzdFN0YXR1c0NkZT09MjQgfHwgcmVzLmRhdGEuZGF0YVtpXS5yZXF1ZXN0U3RhdHVzQ2RlPT0yNSl7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQubGlzdFtpXS5zdGF0dXM9MjtcclxuICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoYXQubGlzdFtpXS5zdGF0dXM9bnVsbDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdGhhdC5ub0RhdGFfc2hvdz1mYWxzZTtcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0Lm5vRGF0YV9zaG93PXRydWU7XHJcbiAgICAgICAgICAgICAgaWYgKHRoYXQuY3VycmVudE51bSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TnVtID0gdGhhdC5jdXJyZW50TnVtIDw9IDEgPyAxOiB0aGF0LmN1cnJlbnROdW0tIDE7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBmYWlsXHJcbiAgfSxcclxuICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBjb21wbGV0ZVxyXG4gIH1cclxufSlcclxuXHJcblxyXG4gXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICAgdGltZVJlZyAobnVtKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUobnVtICogMTAwMCk7XHJcbiAgICAgIGxldCBZID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nO1xyXG4gICAgICBsZXQgTSA9IChkYXRlLmdldE1vbnRoKCkrMSA8IDEwID8gJzAnKyhkYXRlLmdldE1vbnRoKCkrMSkgOiBkYXRlLmdldE1vbnRoKCkrMSkgKyAnLSc7XHJcbiAgICAgIGxldCBEID0gZGF0ZS5nZXREYXRlKCkgPCAxMD8gKCcwJysgKGRhdGUuZ2V0RGF0ZSgpKSArICcgJykgOiAoZGF0ZS5nZXREYXRlKCkgKyAnICcpO1xyXG4gICAgICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldEhvdXJzKCkpICsgJzonKSA6IChkYXRlLmdldEhvdXJzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgbSA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAoKCcwJyArIGRhdGUuZ2V0TWludXRlcygpKSArICc6JykgOiAoZGF0ZS5nZXRNaW51dGVzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgcyA9IGRhdGUuZ2V0U2Vjb25kcygpIDwgMTAgPyAoJzAnICsgZGF0ZS5nZXRTZWNvbmRzKCkpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHJldHVybiBZK00rRCtoK20rcztcclxuICAgIH1cclxuXHJcblxyXG4gIG9uU2hvdyAoKSB7XHJcbiAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgIFxyXG4gICAgaWYgKHRoaXMucGFyZW50X2RhdGEubG9naW5fdG9rZW4gIT09ICcnKSB7XHJcbiAgICAgIHRoaXMubGlzdCA9IFtdXHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4kcmVkaXJlY3QoJ3NlY0xvZ2luJyx7YmFja1VybDogJ3NldHRsZW1lbnQnfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uTG9hZCgpIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==