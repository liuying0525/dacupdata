'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _sidebar = require('./../components/sidebar.js');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _substitution = require('./../components/substitution.js');

var _substitution2 = _interopRequireDefault(_substitution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var pinpai = function (_wepy$page) {
  _inherits(pinpai, _wepy$page);

  function pinpai() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, pinpai);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = pinpai.__proto__ || Object.getPrototypeOf(pinpai)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择品牌',
      usingComponents: {
        'list-html': '../components/wx-index-list/wx-index-list'
      }
    }, _this.$repeat = {}, _this.$props = { "sidebar": { "xmlns:v-on": "" } }, _this.$events = { "sidebar": { "v-on:childFn": "linkTo2" } }, _this.components = {
      sidebar: _sidebar2.default,
      substitution: _substitution2.default
    }, _this.data = {
      name: 'leo',
      // 城市列表
      city: [],
      carbrandgroupJA: [],
      zt: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/pinpai'
        };
      },
      linkTo2: function linkTo2(url, evt) {
        this.$navigate(url, { carseriesid: evt });
      },

      // 点击品牌
      bindtap: function bindtap(e) {
        var zhi = e.detail;
        var carbrandid = zhi.carbrandid;
        var name = zhi.name;
        if (this.zt == '1') {
          this.$invoke('sidebar', 'someMethod', { carbrandid: carbrandid });
        } else {
          // 非热门品牌进入

          this.$parent.globalData.biaoji = '1';
          this.$parent.globalData.nameors = name;
          this.$parent.globalData.pinpaiid = carbrandid;
          this.$parent.globalData.turn = '品牌页';
          wx.navigateBack({
            delta: -1
          });
        }
      },

      // 选择不限品牌
      resdf: function resdf() {
        this.$parent.globalData.biaoji = '2';
        this.$parent.globalData.nameors = '品牌';
        this.$parent.globalData.pinpaiid = '""';
        this.$parent.globalData.turn = '品牌页';
        wx.navigateBack({
          delta: -1
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(pinpai, [{
    key: 'onLoad',
    value: function onLoad(res) {
      this.$parent.globalData.biaoji = '0';
      wx.showLoading({
        title: '加载中'
      });
      var this_ = this;
      if (res.zhi == '热门品牌') {
        this_.zt = '1';
      }
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
          this_.city = City;
          wx.hideLoading();
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
    // 隐藏sliderbar

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$invoke('sidebar', 'clear_yy');
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.zt = '';
    }
  }]);

  return pinpai;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(pinpai , 'pages/pinpai'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbnBhaS5qcyJdLCJuYW1lcyI6WyJwaW5wYWkiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2lkZWJhciIsIlNpZGViYXIiLCJzdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJkYXRhIiwibmFtZSIsImNpdHkiLCJjYXJicmFuZGdyb3VwSkEiLCJ6dCIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJsaW5rVG8yIiwidXJsIiwiZXZ0IiwiJG5hdmlnYXRlIiwiY2Fyc2VyaWVzaWQiLCJiaW5kdGFwIiwiZSIsInpoaSIsImRldGFpbCIsImNhcmJyYW5kaWQiLCIkaW52b2tlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJiaWFvamkiLCJuYW1lb3JzIiwicGlucGFpaWQiLCJ0dXJuIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInJlc2RmIiwicmVzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInRoaXNfIiwianNvbl9saW5rIiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJDaXR5IiwiaSIsImxlbmd0aCIsInB1c2giLCJmaXJzdHBpbnlpbiIsIml0ZW0iLCJjYXJicmFuZEpBIiwiaGlkZUxvYWRpbmciLCIkYXBwbHkiLCJmYWlsIiwic2hvd1RvYXN0IiwiaWNvbiIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixxQkFBYTtBQURFO0FBRlYsSyxRQU9WQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsY0FBYSxFQUFkLEVBQVgsRSxR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dUJLO0FBRnJCLGFBQVY7QUFJRDtBQUNEVixnQkFBTTlCLElBQU4sR0FBYWtDLElBQWI7QUFDQUosZ0JBQU05QixJQUFOLEdBQWFrQyxJQUFiO0FBQ0FYLGFBQUdrQixXQUFIO0FBQ0FYLGdCQUFNWSxNQUFOO0FBQ0QsU0FoQlE7QUFpQlRDLGNBQU0sZ0JBQVc7QUFDZnBCLGFBQUdxQixTQUFILENBQWE7QUFDWGYsbUJBQU8sTUFESTtBQUVYZ0Isa0JBQU07QUFGSyxXQUFiOztBQUtBQyxxQkFBVyxZQUFXO0FBQ3BCdkIsZUFBR3dCLFNBQUg7QUFDRCxXQUZELEVBRUcsSUFGSDtBQUdBO0FBQ0Q7QUEzQlEsT0FBWDtBQTZCRDtBQUNEOzs7OzZCQUNTO0FBQ1AsV0FBSy9CLE9BQUwsQ0FBYSxTQUFiLEVBQXdCLFVBQXhCO0FBQ0Q7OzsrQkFDVztBQUNWLFdBQUtkLEVBQUwsR0FBUyxFQUFUO0FBQ0Q7Ozs7RUE5R2lDOEMsZUFBS0MsSTs7a0JBQXBCL0QsTSIsImZpbGUiOiJwaW5wYWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBTaWRlYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcic7XHJcbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zdWJzdGl0dXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGlucGFpIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YCJ5oup5ZOB54mMJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnbGlzdC1odG1sJzogJy4uL2NvbXBvbmVudHMvd3gtaW5kZXgtbGlzdC93eC1pbmRleC1saXN0J1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzaWRlYmFyXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcInNpZGViYXJcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImxpbmtUbzJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHNpZGViYXI6IFNpZGViYXIsXHJcbiAgICBzdWJzdGl0dXRpb246U3Vic3RpdHV0aW9uXHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG5hbWU6ICdsZW8nLFxyXG4gICAgLy8g5Z+O5biC5YiX6KGoXHJcbiAgICBjaXR5OiBbXSxcclxuICAgIGNhcmJyYW5kZ3JvdXBKQTogW10sXHJcbiAgICB6dDogJydcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvcGlucGFpJ1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGxpbmtUbzIodXJsLCBldnQpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGUodXJsLCB7IGNhcnNlcmllc2lkOiBldnQgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g54K55Ye75ZOB54mMXHJcbiAgICBiaW5kdGFwKGUpIHtcclxuICAgICAgbGV0IHpoaSA9IGUuZGV0YWlsO1xyXG4gICAgICBsZXQgY2FyYnJhbmRpZCA9IHpoaS5jYXJicmFuZGlkO1xyXG4gICAgICBsZXQgbmFtZSA9IHpoaS5uYW1lO1xyXG4gICAgICBpZiAodGhpcy56dCA9PSAnMScpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3NpZGViYXInLCAnc29tZU1ldGhvZCcsIHtjYXJicmFuZGlkOiBjYXJicmFuZGlkfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8g6Z2e54Ot6Zeo5ZOB54mM6L+b5YWlXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmlhb2ppID0gJzEnO1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnMgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBpbnBhaWlkID0gY2FyYnJhbmRpZDtcclxuICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudHVybj0n5ZOB54mM6aG1JztcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgZGVsdGE6IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDpgInmi6nkuI3pmZDlk4HniYxcclxuICAgIHJlc2RmKCkge1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWFvamkgPSAnMic7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnMgPSAn5ZOB54mMJztcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGlucGFpaWQgPSAnXCJcIic7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnR1cm49J+WTgeeJjOmhtSc7XHJcbiAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgZGVsdGE6IC0xXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9O1xyXG4gIG9uTG9hZChyZXMpIHtcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmJpYW9qaSA9ICcwJztcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIHZhciB0aGlzXyA9IHRoaXM7XHJcbiAgICBpZiAocmVzLnpoaSA9PSAn54Ot6Zeo5ZOB54mMJykge1xyXG4gICAgICB0aGlzXy56dCA9ICcxJztcclxuICAgIH1cclxuICAgIHZhciBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAvLyDpgInmi6nlk4HniYxcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vYnJhbmQvYnJhbmRsaXN0JyxcclxuICAgICAgZGF0YToge30sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB2YXIgemhpID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIGxldCBDaXR5ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6aGkuY2FyYnJhbmRncm91cEpBLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBDaXR5LnB1c2goe1xyXG4gICAgICAgICAgICB0aXRsZTogemhpLmNhcmJyYW5kZ3JvdXBKQVtpXS5maXJzdHBpbnlpbixcclxuICAgICAgICAgICAgaXRlbTogemhpLmNhcmJyYW5kZ3JvdXBKQVtpXS5jYXJicmFuZEpBXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc18uY2l0eSA9IENpdHk7XHJcbiAgICAgICAgdGhpc18uY2l0eSA9IENpdHk7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8g6ZqQ6JePc2xpZGVyYmFyXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy4kaW52b2tlKCdzaWRlYmFyJywgJ2NsZWFyX3l5Jyk7XHJcbiAgfVxyXG4gICBvblVubG9hZCgpIHtcclxuICAgIHRoaXMuenQ9ICcnO1xyXG4gIH1cclxufVxyXG4iXX0=