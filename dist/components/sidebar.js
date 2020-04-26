'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 选择车系列表


var Sidebar = function (_wepy$component) {
  _inherits(Sidebar, _wepy$component);

  function Sidebar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 品牌
      ppai: '',
      // 品牌logo地址
      ppai_logo: '',
      json_link: '',
      // 数据列表
      json_zhi: [],
      // 控制组件显隐
      sidebar_: false,
      scrollTop: 0
    }, _this.watch = {
      sidebar_: function sidebar_() {
        if (!this.sidebar_) {
          this.json_zhi = [];
        }
      }
    }, _this.methods = {
      //      关闭
      clear_yy: function clear_yy() {
        this.sidebar_ = false;
      },
      someMethod: function someMethod(res) {
        wx.showLoading({
          title: '加载中'
        });
        var that = this;
        var json_link = this.$parent.$parent.globalData.json_link;
        // 选定品牌-车系列表
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/series/carserieslist',
          data: {
            carbrandid: res.carbrandid
          },
          success: function success(data) {
            wx.hideLoading();
            setTimeout(function () {
              that.scrollTop = 0;
              that.$apply();
            }, 1000);
            that.json_zhi = data.data;
            that.ppai = data.data.carbrandJO.name;
            that.ppai_logo = data.data.carbrandJO.imgurl;
            that.sidebar_ = true;
            that.$apply();
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
      // 去产品列表页
      click_tz: function click_tz(a) {
        this.$parent.$parent.globalData.UVselectType = -1;
        this.$emit('childFn', 'commodity_details', a);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Sidebar;
}(_wepy2.default.component);

exports.default = Sidebar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuanMiXSwibmFtZXMiOlsiU2lkZWJhciIsImRhdGEiLCJwcGFpIiwicHBhaV9sb2dvIiwianNvbl9saW5rIiwianNvbl96aGkiLCJzaWRlYmFyXyIsInNjcm9sbFRvcCIsIndhdGNoIiwibWV0aG9kcyIsImNsZWFyX3l5Iiwic29tZU1ldGhvZCIsInJlcyIsInd4Iiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInRoYXQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJjYXJicmFuZGlkIiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwic2V0VGltZW91dCIsIiRhcHBseSIsImNhcmJyYW5kSk8iLCJuYW1lIiwiaW1ndXJsIiwiZmFpbCIsInNob3dUb2FzdCIsImljb24iLCJoaWRlVG9hc3QiLCJjbGlja190eiIsImEiLCJVVnNlbGVjdFR5cGUiLCIkZW1pdCIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLEksR0FBTztBQUNMO0FBQ0FDLFlBQU0sRUFGRDtBQUdMO0FBQ0FDLGlCQUFXLEVBSk47QUFLTEMsaUJBQVcsRUFMTjtBQU1MO0FBQ0FDLGdCQUFVLEVBUEw7QUFRTDtBQUNBQyxnQkFBVSxLQVRMO0FBVUxDLGlCQUFXO0FBVk4sSyxRQVlQQyxLLEdBQVE7QUFDTkYsY0FETSxzQkFDSztBQUNULFlBQUksQ0FBQyxLQUFLQSxRQUFWLEVBQW9CO0FBQ2xCLGVBQUtELFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDtBQUNGO0FBTEssSyxRQU9SSSxPLEdBQVU7QUFDUjtBQUNBQyxnQkFBVSxvQkFBWTtBQUNwQixhQUFLSixRQUFMLEdBQWdCLEtBQWhCO0FBQ0QsT0FKTztBQUtSSyxrQkFBWSxvQkFBVUMsR0FBVixFQUFlO0FBQ3pCQyxXQUFHQyxXQUFILENBQWU7QUFDYkMsaUJBQU87QUFETSxTQUFmO0FBR0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSVosWUFBWSxLQUFLYSxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDZCxTQUFoRDtBQUNBO0FBQ0FTLFdBQUdNLE9BQUgsQ0FBVztBQUNUQyxlQUFLaEIsWUFBWSw0Q0FEUjtBQUVUSCxnQkFBTTtBQUNKb0Isd0JBQVlULElBQUlTO0FBRFosV0FGRztBQUtUQyxtQkFBUyxpQkFBVXJCLElBQVYsRUFBZ0I7QUFDdkJZLGVBQUdVLFdBQUg7QUFDQUMsdUJBQVcsWUFBTTtBQUNmUixtQkFBS1QsU0FBTCxHQUFpQixDQUFqQjtBQUNBUyxtQkFBS1MsTUFBTDtBQUNELGFBSEQsRUFHRyxJQUhIO0FBSUFULGlCQUFLWCxRQUFMLEdBQWdCSixLQUFLQSxJQUFyQjtBQUNBZSxpQkFBS2QsSUFBTCxHQUFZRCxLQUFLQSxJQUFMLENBQVV5QixVQUFWLENBQXFCQyxJQUFqQztBQUNBWCxpQkFBS2IsU0FBTCxHQUFpQkYsS0FBS0EsSUFBTCxDQUFVeUIsVUFBVixDQUFxQkUsTUFBdEM7QUFDQVosaUJBQUtWLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQVUsaUJBQUtTLE1BQUw7QUFDRCxXQWhCUTtBQWlCVEksZ0JBQU0sZ0JBQVk7QUFDaEJoQixlQUFHaUIsU0FBSCxDQUFhO0FBQ1hmLHFCQUFPLE1BREk7QUFFWGdCLG9CQUFNO0FBRkssYUFBYjs7QUFLQVAsdUJBQVcsWUFBWTtBQUNyQlgsaUJBQUdtQixTQUFIO0FBQ0QsYUFGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBM0JRLFNBQVg7QUE2QkQsT0F6Q087QUEwQ1I7QUFDQUMsY0EzQ1Esb0JBMkNDQyxDQTNDRCxFQTJDSTtBQUNWLGFBQUtqQixPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDaUIsWUFBaEMsR0FBK0MsQ0FBQyxDQUFoRDtBQUNBLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLG1CQUF0QixFQUEyQ0YsQ0FBM0M7QUFDRDtBQTlDTyxLOzs7O0VBcEJ5QkcsZUFBS0MsUzs7a0JBQXJCdEMsTyIsImZpbGUiOiJzaWRlYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLy8g6YCJ5oup6L2m57O75YiX6KGoXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZWJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOWTgeeJjFxyXG4gICAgICBwcGFpOiAnJyxcclxuICAgICAgLy8g5ZOB54mMbG9nb+WcsOWdgFxyXG4gICAgICBwcGFpX2xvZ286ICcnLFxyXG4gICAgICBqc29uX2xpbms6ICcnLFxyXG4gICAgICAvLyDmlbDmja7liJfooahcclxuICAgICAganNvbl96aGk6IFtdLFxyXG4gICAgICAvLyDmjqfliLbnu4Tku7bmmL7pmpBcclxuICAgICAgc2lkZWJhcl86IGZhbHNlLFxyXG4gICAgICBzY3JvbGxUb3A6IDBcclxuICAgIH07XHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgc2lkZWJhcl8oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNpZGViYXJfKSB7XHJcbiAgICAgICAgICB0aGlzLmpzb25femhpID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8gICAgICDlhbPpl61cclxuICAgICAgY2xlYXJfeXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNpZGViYXJfID0gZmFsc2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNvbWVNZXRob2Q6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIC8vIOmAieWumuWTgeeJjC3ovabns7vliJfooahcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9zZXJpZXMvY2Fyc2VyaWVzbGlzdCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNhcmJyYW5kaWQ6IHJlcy5jYXJicmFuZGlkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhhdC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB0aGF0Lmpzb25femhpID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB0aGF0LnBwYWkgPSBkYXRhLmRhdGEuY2FyYnJhbmRKTy5uYW1lO1xyXG4gICAgICAgICAgICB0aGF0LnBwYWlfbG9nbyA9IGRhdGEuZGF0YS5jYXJicmFuZEpPLmltZ3VybDtcclxuICAgICAgICAgICAgdGhhdC5zaWRlYmFyXyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5Y675Lqn5ZOB5YiX6KGo6aG1XHJcbiAgICAgIGNsaWNrX3R6KGEpIHtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoaWxkRm4nLCAnY29tbW9kaXR5X2RldGFpbHMnLCBhKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiJdfQ==