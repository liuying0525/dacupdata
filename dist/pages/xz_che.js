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

var xz_che = function (_wepy$page) {
  _inherits(xz_che, _wepy$page);

  function xz_che() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, xz_che);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = xz_che.__proto__ || Object.getPrototypeOf(xz_che)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择车型'
    }, _this.data = {
      // 显示slider
      sidebar_: false,
      // 车系数据
      res: [],
      ck: [],
      // 车系index
      indexwai: 0,
      xz_zt: 0,
      // 控制车型列表的滑动
      isTouch: false
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      click_zt: function click_zt(index1, index2) {
        if (this.isTouch) {
          return false;
        }
        this.indexwai = index1;
        this.xz_zt = index2;
        this.$apply();
      },

      // 点击车系
      click_cx: function click_cx(e) {
        this.ck = {};
        if (this.isTouch) {
          this.isTouch = false;
          this.ck.carmodelyearJA = [];
          return false;
        }
        wx.showLoading({
          title: '加载中'
        });
        var json_link = this.$parent.globalData.json_link;
        var this_ = this;
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/carmodel/listbycarseries',
          data: {
            carseriesid: e
          },
          success: function success(data) {
            this_.isTouch = true;
            this_.ck = data.data;
            this_.$apply();
            wx.hideLoading();
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

      //      点击车型
      ck_btn: function ck_btn(e, name) {
        this.isTouch = false;
        wx.setStorageSync('chexing', {
          carmodelid: e,
          name: name
        });
        wx.navigateBack();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(xz_che, [{
    key: 'onLoad',
    value: function onLoad(res) {
      this.isTouch = false;
      wx.showLoading({
        title: '加载中'
      });
      var json_link = this.$parent.globalData.json_link;
      var this_ = this;
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/series/carserieslist',
        data: {
          carbrandid: res.carbrandid
        },
        success: function success(data) {
          this_.res = data.data;

          if (!data.data.carseriesJA[0].cmfcarseriesJA.length) {
            this_.res = data.data;
            this_.$apply();
            wx.hideLoading();
            console.log(data.data.carbrandJO.name);
            return;
          }
          this_.res = data.data;
          var carseriesid = this_.res.carseriesJA[0].cmfcarseriesJA[0].carseriesid;
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/carmodel/listbycarseries',
            data: {
              carseriesid: carseriesid
            },
            success: function success(data) {
              this_.ck = data.data;
              this_.$apply();
              wx.hideLoading();
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
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.isTouch = false;
      this.indexwai = 0;
    }
  }]);

  return xz_che;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(xz_che , 'pages/xz_che'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInh6X2NoZS5qcyJdLCJuYW1lcyI6WyJ4el9jaGUiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNpZGViYXJfIiwicmVzIiwiY2siLCJpbmRleHdhaSIsInh6X3p0IiwiaXNUb3VjaCIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJjbGlja196dCIsImluZGV4MSIsImluZGV4MiIsIiRhcHBseSIsImNsaWNrX2N4IiwiZSIsImNhcm1vZGVseWVhckpBIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwianNvbl9saW5rIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ0aGlzXyIsInJlcXVlc3QiLCJ1cmwiLCJjYXJzZXJpZXNpZCIsInN1Y2Nlc3MiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJzaG93VG9hc3QiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsImNrX2J0biIsIm5hbWUiLCJzZXRTdG9yYWdlU3luYyIsImNhcm1vZGVsaWQiLCJuYXZpZ2F0ZUJhY2siLCJjYXJicmFuZGlkIiwiY2Fyc2VyaWVzSkEiLCJjbWZjYXJzZXJpZXNKQSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjYXJicmFuZEpPIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLGdCQUFVLEtBRkw7QUFHTDtBQUNBQyxXQUFLLEVBSkE7QUFLTEMsVUFBSSxFQUxDO0FBTUw7QUFDQUMsZ0JBQVUsQ0FQTDtBQVFMQyxhQUFPLENBUkY7QUFTTDtBQUNBQyxlQUFTO0FBVkosSyxRQVlQQyxPLEdBQVU7QUFDUkMseUJBQW1CLDZCQUFXO0FBQzVCLGVBQU87QUFDTEMsZ0JBQU07QUFERCxTQUFQO0FBR0QsT0FMTztBQU1SQyxjQU5R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LGFBRkc7QUFLVEMscUJBQVMsaUJBQVMzQixJQUFULEVBQWU7QUFDdEJ1QixvQkFBTXBCLEVBQU4sR0FBV0gsS0FBS0EsSUFBaEI7QUFDQXVCLG9CQUFNVixNQUFOO0FBQ0FJLGlCQUFHVyxXQUFIO0FBQ0QsYUFUUTtBQVVUQyxrQkFBTSxnQkFBVztBQUNmWixpQkFBR2EsU0FBSCxDQUFhO0FBQ1hYLHVCQUFPLE1BREk7QUFFWFksc0JBQU07QUFGSyxlQUFiOztBQUtBQyx5QkFBVyxZQUFXO0FBQ3BCZixtQkFBR2dCLFNBQUg7QUFDRCxlQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7QUFwQlEsV0FBWDtBQXNCRCxTQXhDUTtBQXlDVEosY0FBTSxnQkFBVztBQUNmWixhQUFHYSxTQUFILENBQWE7QUFDWFgsbUJBQU8sTUFESTtBQUVYWSxrQkFBTTtBQUZLLFdBQWI7O0FBS0FDLHFCQUFXLFlBQVc7QUFDcEJmLGVBQUdnQixTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBbkRRLE9BQVg7QUFxREQ7OzsrQkFFVTtBQUNULFdBQUszQixPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUtGLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRDs7OztFQTlJaUMwQyxlQUFLQyxJOztrQkFBcEJsRCxNIiwiZmlsZSI6Inh6X2NoZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgeHpfY2hlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YCJ5oup6L2m5Z6LJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOaYvuekunNsaWRlclxyXG4gICAgc2lkZWJhcl86IGZhbHNlLFxyXG4gICAgLy8g6L2m57O75pWw5o2uXHJcbiAgICByZXM6IFtdLFxyXG4gICAgY2s6IFtdLFxyXG4gICAgLy8g6L2m57O7aW5kZXhcclxuICAgIGluZGV4d2FpOiAwLFxyXG4gICAgeHpfenQ6IDAsXHJcbiAgICAvLyDmjqfliLbovablnovliJfooajnmoTmu5HliqhcclxuICAgIGlzVG91Y2g6IGZhbHNlXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgY2xpY2tfenQoaW5kZXgxLCBpbmRleDIpIHtcclxuICAgICAgaWYgKHRoaXMuaXNUb3VjaCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmluZGV4d2FpID0gaW5kZXgxO1xyXG4gICAgICB0aGlzLnh6X3p0ID0gaW5kZXgyO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfSxcclxuICAgIC8vIOeCueWHu+i9puezu1xyXG4gICAgY2xpY2tfY3goZSkge1xyXG4gICAgICB0aGlzLmNrID0ge307XHJcbiAgICAgIGlmICh0aGlzLmlzVG91Y2gpIHtcclxuICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNrLmNhcm1vZGVseWVhckpBID0gW107XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIHZhciBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jYXJtb2RlbC9saXN0YnljYXJzZXJpZXMnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNhcnNlcmllc2lkOiBlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgIHRoaXNfLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgICAgdGhpc18uY2sgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyAgICAgIOeCueWHu+i9puWei1xyXG4gICAgY2tfYnRuKGUsIG5hbWUpIHtcclxuICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdjaGV4aW5nJywge1xyXG4gICAgICAgIGNhcm1vZGVsaWQ6IGUsXHJcbiAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgICB9KTtcclxuICAgICAgd3gubmF2aWdhdGVCYWNrKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQocmVzKSB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIHZhciBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9zZXJpZXMvY2Fyc2VyaWVzbGlzdCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBjYXJicmFuZGlkOiByZXMuY2FyYnJhbmRpZFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdGhpc18ucmVzID0gZGF0YS5kYXRhO1xyXG4gICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAgICBpZighZGF0YS5kYXRhLmNhcnNlcmllc0pBWzBdLmNtZmNhcnNlcmllc0pBLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXNfLnJlcyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEuY2FyYnJhbmRKTy5uYW1lKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgIHRoaXNfLnJlcyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIGxldCBjYXJzZXJpZXNpZCA9dGhpc18ucmVzLmNhcnNlcmllc0pBWzBdLmNtZmNhcnNlcmllc0pBWzBdLmNhcnNlcmllc2lkO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9uZXdjYXJsb2FuL2Nhcm1vZGVsL2xpc3RieWNhcnNlcmllcycsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNhcnNlcmllc2lkOiBjYXJzZXJpZXNpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpc18uY2sgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgIHRoaXMuaW5kZXh3YWkgPSAwO1xyXG4gIH1cclxufVxyXG4iXX0=