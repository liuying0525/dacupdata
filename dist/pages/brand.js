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

var brand = function (_wepy$page) {
  _inherits(brand, _wepy$page);

  function brand() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, brand);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = brand.__proto__ || Object.getPrototypeOf(brand)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择车型',
      usingComponents: {
        'list-html': '../components/wx-index-list/wx-index-list'
      }
    }, _this.data = {
      // 品牌列表
      city: [],
      carbrandgroupJA: [],
      // 热卖车型列表
      remenData: [],
      ck: [],
      // 选择车系
      isSelectChexi: false
    }, _this.methods = {
      // 分享
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/brand'
        };
      },
      // 点击品牌
      bindtap: function bindtap(e) {
        var zhi = e.detail;
        var carbrandid = zhi.carbrandid;
        var this_ = this;
        var jsonlink = this_.$parent.globalData.json_link;
        this.$redirect('xz_che', {
          carbrandid: carbrandid
        });
      },

      // 点击热卖车型
      bindtaps: function bindtaps(e) {
        if (this.isSelectChexi) {
          this.isSelectChexi = false;
          return false;
        }
        var carseriesid = e.currentTarget.dataset.carseriesid;

        this.$parent.globalData.pageid = [carseriesid];
        this.$parent.globalData.pagename = [2];
        this.$parent.clicknumordernumstat(1);

        wx.showLoading({
          title: '加载中'
        });
        var json_link = this.$parent.globalData.json_link;
        var this_ = this;
        // 商品详情（车型列表）
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/carmodel/listbycarseries',
          data: {
            carseriesid: carseriesid
          },
          success: function success(data) {
            this_.ck = data.data;
            this_.isSelectChexi = true;
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

      // 选择车辆
      ck_btn: function ck_btn(carmodelid, name) {
        wx.setStorageSync('chexing', {
          carmodelid: carmodelid,
          name: name
        });
        wx.navigateBack();
        this.isSelectChexi = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(brand, [{
    key: 'onLoad',
    value: function onLoad() {
      wx.showLoading({
        title: '加载中'
      });
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      // 选择品牌
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/brand/brandlist',
        data: {},
        success: function success(data) {
          var zhi = data.data;
          var City = [];
          for (var i = 0; i < zhi.carbrandgroupJA.length; i++) {
            City.push({
              title: zhi.carbrandgroupJA[i].firstpinyin,
              item: zhi.carbrandgroupJA[i].carbrandJA
            });
          }
          this_.city = City;
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
      this.getRemai();
    }

    // 获取热卖车型

  }, {
    key: 'getRemai',
    value: function getRemai() {
      var that = this;
      var json_link = this.$parent.globalData.json_link;
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/series/selectmodule',
        success: function success(res) {
          that.remenData = res.data.hotsalecarseriesJA;
          that.$apply();
        }
      });
    }
  }]);

  return brand;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(brand , 'pages/brand'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kLmpzIl0sIm5hbWVzIjpbImJyYW5kIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJjaXR5IiwiY2FyYnJhbmRncm91cEpBIiwicmVtZW5EYXRhIiwiY2siLCJpc1NlbGVjdENoZXhpIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImJpbmR0YXAiLCJlIiwiemhpIiwiZGV0YWlsIiwiY2FyYnJhbmRpZCIsInRoaXNfIiwianNvbmxpbmsiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImpzb25fbGluayIsIiRyZWRpcmVjdCIsImJpbmR0YXBzIiwiY2Fyc2VyaWVzaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInBhZ2VpZCIsInBhZ2VuYW1lIiwiY2xpY2tudW1vcmRlcm51bXN0YXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwic3VjY2VzcyIsIiRhcHBseSIsImhpZGVMb2FkaW5nIiwiZmFpbCIsInNob3dUb2FzdCIsImljb24iLCJzZXRUaW1lb3V0IiwiaGlkZVRvYXN0IiwiY2tfYnRuIiwiY2FybW9kZWxpZCIsIm5hbWUiLCJzZXRTdG9yYWdlU3luYyIsIm5hdmlnYXRlQmFjayIsIkNpdHkiLCJpIiwibGVuZ3RoIiwicHVzaCIsImZpcnN0cGlueWluIiwiaXRlbSIsImNhcmJyYW5kSkEiLCJnZXRSZW1haSIsInRoYXQiLCJyZXMiLCJob3RzYWxlY2Fyc2VyaWVzSkEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHFCQUFhO0FBREU7QUFGVixLLFFBTVRDLEksR0FBTztBQUNMO0FBQ0FDLFlBQU0sRUFGRDtBQUdMQyx1QkFBaUIsRUFIWjtBQUlMO0FBQ0FDLGlCQUFXLEVBTE47QUFNTEMsVUFBSSxFQU5DO0FBT0w7QUFDQUMscUJBQWU7QUFSVixLLFFBVVBDLE8sR0FBVTtBQUNSO0FBQ0FDLHlCQUFtQiw2QkFBWTtBQUM3QixlQUFPO0FBQ0xDLGdCQUFNO0FBREQsU0FBUDtBQUdELE9BTk87QUFPUjtBQUNBQyxhQVJRLG1CQVFBQyxDQVJBLEVBUUc7QUFDVCxZQUFJQyxNQUFNRCxFQUFFRSxNQUFaO0FBQ0EsWUFBSUMsYUFBYUYsSUFBSUUsVUFBckI7QUFDQSxZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFJQyxXQUFXRCxNQUFNRSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFNBQXhDO0FBQ0EsYUFBS0MsU0FBTCxDQUFlLFFBQWYsRUFBeUI7QUFDdkJOLHNCQUFZQTtBQURXLFNBQXpCO0FBR0QsT0FoQk87O0FBaUJSO0FBQ0FPLGNBbEJRLG9CQWtCQ1YsQ0FsQkQsRUFrQkk7QUFDVixZQUFJLEtBQUtMLGFBQVQsRUFBd0I7QUFDdEIsZUFBS0EsYUFBTCxHQUFxQixLQUFyQjtBQUNBLGlCQUFPLEtBQVA7QUFDRDtBQUNELFlBQUlnQixjQUFjWCxFQUFFWSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkYsV0FBMUM7O0FBRUEsYUFBS0wsT0FBTCxDQUFhQyxVQUFiLENBQXdCTyxNQUF4QixHQUFpQyxDQUFDSCxXQUFELENBQWpDO0FBQ0EsYUFBS0wsT0FBTCxDQUFhQyxVQUFiLENBQXdCUSxRQUF4QixHQUFtQyxDQUFDLENBQUQsQ0FBbkM7QUFDQSxhQUFLVCxPQUFMLENBQWFVLG9CQUFiLENBQWtDLENBQWxDOztBQUVBQyxXQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQU87QUFETSxTQUFmO0FBR0EsWUFBSVgsWUFBWSxLQUFLRixPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFNBQXhDO0FBQ0EsWUFBSUosUUFBUSxJQUFaO0FBQ0E7QUFDQWEsV0FBR0csT0FBSCxDQUFXO0FBQ1RDLGVBQUtiLFlBQVksZ0RBRFI7QUFFVGxCLGdCQUFNO0FBQ0pxQix5QkFBYUE7QUFEVCxXQUZHO0FBS1RXLG1CQUFTLGlCQUFVaEMsSUFBVixFQUFnQjtBQUN2QmMsa0JBQU1WLEVBQU4sR0FBV0osS0FBS0EsSUFBaEI7QUFDQWMsa0JBQU1ULGFBQU4sR0FBc0IsSUFBdEI7QUFDQVMsa0JBQU1tQixNQUFOO0FBQ0FOLGVBQUdPLFdBQUg7QUFDRCxXQVZRO0FBV1RDLGdCQUFNLGdCQUFZO0FBQ2hCUixlQUFHUyxTQUFILENBQWE7QUFDWFAscUJBQU8sTUFESTtBQUVYUSxvQkFBTTtBQUZLLGFBQWI7QUFJQUMsdUJBQVcsWUFBWTtBQUNyQlgsaUJBQUdZLFNBQUg7QUFDRCxhQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7QUFwQlEsU0FBWDtBQXNCRCxPQXpETzs7QUEwRFI7QUFDQUMsWUEzRFEsa0JBMkREQyxVQTNEQyxFQTJEV0MsSUEzRFgsRUEyRGlCO0FBQ3ZCZixXQUFHZ0IsY0FBSCxDQUFrQixTQUFsQixFQUE2QjtBQUMzQkYsc0JBQVlBLFVBRGU7QUFFM0JDLGdCQUFNQTtBQUZxQixTQUE3QjtBQUlBZixXQUFHaUIsWUFBSDtBQUNBLGFBQUt2QyxhQUFMLEdBQXFCLEtBQXJCO0FBQ0Q7QUFsRU8sSzs7Ozs7NkJBb0VEO0FBQ1BzQixTQUFHQyxXQUFILENBQWU7QUFDYkMsZUFBTztBQURNLE9BQWY7QUFHQSxVQUFJZixRQUFRLElBQVo7QUFDQSxVQUFJSSxZQUFZLEtBQUtGLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsU0FBeEM7QUFDQTtBQUNBUyxTQUFHRyxPQUFILENBQVc7QUFDVEMsYUFBS2IsWUFBWSx1Q0FEUjtBQUVUbEIsY0FBTSxFQUZHO0FBR1RnQyxlQUhTLG1CQUdEaEMsSUFIQyxFQUdLO0FBQ1osY0FBSVcsTUFBTVgsS0FBS0EsSUFBZjtBQUNBLGNBQUk2QyxPQUFPLEVBQVg7QUFDQSxlQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSW5DLElBQUlULGVBQUosQ0FBb0I2QyxNQUF4QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDbkRELGlCQUFLRyxJQUFMLENBQVU7QUFDUm5CLHFCQUFPbEIsSUFBSVQsZUFBSixDQUFvQjRDLENBQXBCLEVBQXVCRyxXQUR0QjtBQUVSQyxvQkFBTXZDLElBQUlULGVBQUosQ0FBb0I0QyxDQUFwQixFQUF1Qks7QUFGckIsYUFBVjtBQUlEO0FBQ0RyQyxnQkFBTWIsSUFBTixHQUFhNEMsSUFBYjtBQUNBL0IsZ0JBQU1tQixNQUFOO0FBQ0FOLGFBQUdPLFdBQUg7QUFDRCxTQWZRO0FBZ0JUQyxZQWhCUyxrQkFnQkY7QUFDTFIsYUFBR1MsU0FBSCxDQUFhO0FBQ1hQLG1CQUFPLE1BREk7QUFFWFEsa0JBQU07QUFGSyxXQUFiOztBQUtBQyxxQkFBVyxZQUFZO0FBQ3JCWCxlQUFHWSxTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBMUJRLE9BQVg7QUE0QkEsV0FBS2EsUUFBTDtBQUNEOztBQUVEOzs7OytCQUNXO0FBQ1QsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsVUFBSW5DLFlBQVksS0FBS0YsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxTQUF4QztBQUNBUyxTQUFHRyxPQUFILENBQVc7QUFDVEMsYUFBS2IsWUFBWSwyQ0FEUjtBQUVUYyxlQUZTLG1CQUVEc0IsR0FGQyxFQUVJO0FBQ1hELGVBQUtsRCxTQUFMLEdBQWlCbUQsSUFBSXRELElBQUosQ0FBU3VELGtCQUExQjtBQUNBRixlQUFLcEIsTUFBTDtBQUNEO0FBTFEsT0FBWDtBQU9EOzs7O0VBdElnQ3VCLGVBQUtDLEk7O2tCQUFuQjdELEsiLCJmaWxlIjoiYnJhbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgYnJhbmQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YCJ5oup6L2m5Z6LJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgJ2xpc3QtaHRtbCc6ICcuLi9jb21wb25lbnRzL3d4LWluZGV4LWxpc3Qvd3gtaW5kZXgtbGlzdCdcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOWTgeeJjOWIl+ihqFxyXG4gICAgICBjaXR5OiBbXSxcclxuICAgICAgY2FyYnJhbmRncm91cEpBOiBbXSxcclxuICAgICAgLy8g54Ot5Y2W6L2m5Z6L5YiX6KGoXHJcbiAgICAgIHJlbWVuRGF0YTogW10sXHJcbiAgICAgIGNrOiBbXSxcclxuICAgICAgLy8g6YCJ5oup6L2m57O7XHJcbiAgICAgIGlzU2VsZWN0Q2hleGk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5YiG5LqrXHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvYnJhbmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgLy8g54K55Ye75ZOB54mMXHJcbiAgICAgIGJpbmR0YXAoZSkge1xyXG4gICAgICAgIGxldCB6aGkgPSBlLmRldGFpbDtcclxuICAgICAgICBsZXQgY2FyYnJhbmRpZCA9IHpoaS5jYXJicmFuZGlkO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGpzb25saW5rID0gdGhpc18uJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgICB0aGlzLiRyZWRpcmVjdCgneHpfY2hlJywge1xyXG4gICAgICAgICAgY2FyYnJhbmRpZDogY2FyYnJhbmRpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDngrnlh7vng63ljZbovablnotcclxuICAgICAgYmluZHRhcHMoZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0Q2hleGkpIHtcclxuICAgICAgICAgIHRoaXMuaXNTZWxlY3RDaGV4aSA9IGZhbHNlO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2Fyc2VyaWVzaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJzZXJpZXNpZDtcclxuXHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW2NhcnNlcmllc2lkXTtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFsyXTtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuY2xpY2tudW1vcmRlcm51bXN0YXQoMSk7XHJcblxyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICAvLyDllYblk4Hor6bmg4XvvIjovablnovliJfooajvvIlcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jYXJtb2RlbC9saXN0YnljYXJzZXJpZXMnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjYXJzZXJpZXNpZDogY2Fyc2VyaWVzaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzXy5jayA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgICAgdGhpc18uaXNTZWxlY3RDaGV4aSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YCJ5oup6L2m6L6GXHJcbiAgICAgIGNrX2J0bihjYXJtb2RlbGlkLCBuYW1lKSB7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2NoZXhpbmcnLCB7XHJcbiAgICAgICAgICBjYXJtb2RlbGlkOiBjYXJtb2RlbGlkLFxyXG4gICAgICAgICAgbmFtZTogbmFtZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICAgIHRoaXMuaXNTZWxlY3RDaGV4aSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAvLyDpgInmi6nlk4HniYxcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9uZXdjYXJsb2FuL2JyYW5kL2JyYW5kbGlzdCcsXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgemhpID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgbGV0IENpdHkgPSBbXTtcclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgemhpLmNhcmJyYW5kZ3JvdXBKQS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBDaXR5LnB1c2goe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiB6aGkuY2FyYnJhbmRncm91cEpBW2ldLmZpcnN0cGlueWluLFxyXG4gICAgICAgICAgICAgIGl0ZW06IHpoaS5jYXJicmFuZGdyb3VwSkFbaV0uY2FyYnJhbmRKQVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXNfLmNpdHkgPSBDaXR5O1xyXG4gICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdldFJlbWFpKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W54Ot5Y2W6L2m5Z6LXHJcbiAgICBnZXRSZW1haSgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vc2VyaWVzL3NlbGVjdG1vZHVsZScsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIHRoYXQucmVtZW5EYXRhID0gcmVzLmRhdGEuaG90c2FsZWNhcnNlcmllc0pBO1xyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuIl19