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

var midautumnonee = function (_wepy$page) {
  _inherits(midautumnonee, _wepy$page);

  function midautumnonee() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, midautumnonee);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = midautumnonee.__proto__ || Object.getPrototypeOf(midautumnonee)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: ''
    }, _this.components = {}, _this.data = {
      selectPerson: true,
      // 活动数据
      carmodel: '',
      // 顶部图片
      topimgurl: '',
      // 页面标题
      name: '',
      // 楼层名称
      floorName: '',
      // 是否查看更多
      lookatmore: '',
      // 查看更多要跳转的页面
      cartype: '',
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/midautumnonee?activityid=' + this.activityid
        };
      },
      // 查看更多判断
      gengd: function gengd(e) {
        if (e == 0) {
          this.$navigate({
            url: 'sousuo?carpricesection=' + '0' + '&downpaymentsection=' + '0' + '&monthlysupplysection=' + '0'
          });
        }
        if (e == 1) {
          this.$navigate({
            url: 'tiexi'
          });
        }
        if (e == 2) {
          this.$navigate({
            url: 'products'
          });
        }
        if (e == 3) {
          this.$navigate({
            url: 'straight'
          });
        }
      },

      // 数据获取跳转—产品列表页
      toChanpinDetail: function toChanpinDetail(e) {
        var carmodelid = e.currentTarget.dataset.carmodelid;
        wx.navigateTo({
          url: 'commodity_details?carmodelid=' + carmodelid
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(midautumnonee, [{
    key: 'onLoad',
    value: function onLoad(res) {
      wx.showLoading({
        title: '加载中'
      });
      var activityid = res.activityid;
      this.activityid = activityid;
      var are = this;
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      wx.request({
        // 活动模板
        url: json_link + '/api/wxapp/activity/template',
        data: {
          activityid: activityid
        },
        // 后台返回值
        success: function success(data) {
          wx.hideLoading();
          // 定义返回值的数据
          are.carmodel = data.data.data.carlist;
          are.topimgurl = data.data.data.topimgurl;
          are.name = data.data.data.name;
          are.lookatmore = data.data.data.lookatmore;
          are.floorName = data.data.data.floorname;
          are.cartype = data.data.data.cartype;
          wx.setNavigationBarTitle({
            title: are.name //页面标题为路由参数
          });
          // 给数据进行绑定
          are.$apply();
        }
      });
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 清掉贷款提交订单接口两个参数的值
      this.$parent.globalData.source = 0;
      this.$parent.globalData.sourceid = '';
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      that.url_link = that.$parent.globalData.url_link;
    }
  }]);

  return midautumnonee;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(midautumnonee , 'pages/midautumnone'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGF1dHVtbm9uZS5qcyJdLCJuYW1lcyI6WyJtaWRhdXR1bW5vbmVlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJkYXRhIiwic2VsZWN0UGVyc29uIiwiY2FybW9kZWwiLCJ0b3BpbWd1cmwiLCJuYW1lIiwiZmxvb3JOYW1lIiwibG9va2F0bW9yZSIsImNhcnR5cGUiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJhY3Rpdml0eWlkIiwiZ2VuZ2QiLCJlIiwiJG5hdmlnYXRlIiwidXJsIiwidG9DaGFucGluRGV0YWlsIiwiY2FybW9kZWxpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid3giLCJuYXZpZ2F0ZVRvIiwicmVzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImFyZSIsImpzb25fbGluayIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVxdWVzdCIsInN1Y2Nlc3MiLCJoaWRlTG9hZGluZyIsImNhcmxpc3QiLCJmbG9vcm5hbWUiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCIkYXBwbHkiLCJzb3VyY2UiLCJzb3VyY2VpZCIsInRoYXQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLG9CQUFjLElBRFQ7QUFFTDtBQUNBQyxnQkFBVSxFQUhMO0FBSUw7QUFDQUMsaUJBQVcsRUFMTjtBQU1MO0FBQ0FDLFlBQU0sRUFQRDtBQVFMO0FBQ0FDLGlCQUFXLEVBVE47QUFVTDtBQUNBQyxrQkFBWSxFQVhQO0FBWUw7QUFDQUMsZUFBUyxFQWJKO0FBY0xDLGdCQUFTO0FBZEosSyxRQWlCUEMsTyxHQUFVO0FBQ1JDLHlCQUFtQiw2QkFBVztBQUM1QixlQUFPO0FBQ0xDLGdCQUFNLHFDQUFxQyxLQUFLQztBQUQzQyxTQUFQO0FBR0QsT0FMTztBQU1SO0FBQ0FDLFdBUFEsaUJBT0ZDLENBUEUsRUFPQztBQUNQLFlBQUlBLEtBQUssQ0FBVCxFQUFZO0FBQ1YsZUFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUNFLDRCQUNBLEdBREEsR0FFQSxzQkFGQSxHQUdBLEdBSEEsR0FJQSx3QkFKQSxHQUtBO0FBUFcsV0FBZjtBQVNEO0FBQ0QsWUFBSUYsS0FBSyxDQUFULEVBQVk7QUFDVixlQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQUs7QUFEUSxXQUFmO0FBR0Q7QUFDRCxZQUFJRixLQUFLLENBQVQsRUFBWTtBQUNWLGVBQUtDLFNBQUwsQ0FBZTtBQUNiQyxpQkFBSztBQURRLFdBQWY7QUFHRDtBQUNELFlBQUlGLEtBQUssQ0FBVCxFQUFZO0FBQ1YsZUFBS0MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFLO0FBRFEsV0FBZjtBQUdEO0FBQ0YsT0FsQ087O0FBbUNSO0FBQ0FDLHFCQXBDUSwyQkFvQ1FILENBcENSLEVBb0NXO0FBQ2pCLFlBQUlJLGFBQWFKLEVBQUVLLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixVQUF6QztBQUNBRyxXQUFHQyxVQUFILENBQWM7QUFDWk4sZUFBSyxrQ0FBa0NFO0FBRDNCLFNBQWQ7QUFHRDtBQXpDTyxLOzs7OzsyQkEyQ0hLLEcsRUFBSztBQUNWRixTQUFHRyxXQUFILENBQWU7QUFDYkMsZUFBTztBQURNLE9BQWY7QUFHQSxVQUFJYixhQUFhVyxJQUFJWCxVQUFyQjtBQUNBLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsVUFBSWMsTUFBTSxJQUFWO0FBQ0E7QUFDQSxVQUFJQyxZQUFZLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkYsU0FBeEM7QUFDQUQsVUFBSUMsU0FBSixHQUFnQkEsU0FBaEI7QUFDQU4sU0FBR1MsT0FBSCxDQUFXO0FBQ1Q7QUFDQWQsYUFBS1csWUFBWSw4QkFGUjtBQUdUM0IsY0FBTTtBQUNKWSxzQkFBWUE7QUFEUixTQUhHO0FBTVQ7QUFDQW1CLGlCQUFTLGlCQUFTL0IsSUFBVCxFQUFlO0FBQ3RCcUIsYUFBR1csV0FBSDtBQUNBO0FBQ0FOLGNBQUl4QixRQUFKLEdBQWVGLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlaUMsT0FBOUI7QUFDQVAsY0FBSXZCLFNBQUosR0FBZ0JILEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlRyxTQUEvQjtBQUNBdUIsY0FBSXRCLElBQUosR0FBV0osS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVJLElBQTFCO0FBQ0FzQixjQUFJcEIsVUFBSixHQUFpQk4sS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVNLFVBQWhDO0FBQ0FvQixjQUFJckIsU0FBSixHQUFnQkwsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVrQyxTQUEvQjtBQUNBUixjQUFJbkIsT0FBSixHQUFjUCxLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZU8sT0FBN0I7QUFDQWMsYUFBR2MscUJBQUgsQ0FBeUI7QUFDdkJWLG1CQUFPQyxJQUFJdEIsSUFEWSxDQUNQO0FBRE8sV0FBekI7QUFHQTtBQUNBc0IsY0FBSVUsTUFBSjtBQUNEO0FBckJRLE9BQVg7QUF1QkQ7OzsrQkFDVTtBQUNUO0FBQ0EsV0FBS1IsT0FBTCxDQUFhQyxVQUFiLENBQXdCUSxNQUF4QixHQUFpQyxDQUFqQztBQUNBLFdBQUtULE9BQUwsQ0FBYUMsVUFBYixDQUF3QlMsUUFBeEIsR0FBbUMsRUFBbkM7QUFDRDs7OzZCQUNPO0FBQ05DLFdBQUsvQixRQUFMLEdBQWdCK0IsS0FBS1gsT0FBTCxDQUFhQyxVQUFiLENBQXdCckIsUUFBeEM7QUFDRDs7OztFQTNHd0NnQyxlQUFLQyxJOztrQkFBM0I3QyxhIiwiZmlsZSI6Im1pZGF1dHVtbm9uZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1pZGF1dHVtbm9uZWUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICcnXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge307XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBzZWxlY3RQZXJzb246IHRydWUsXHJcbiAgICAvLyDmtLvliqjmlbDmja5cclxuICAgIGNhcm1vZGVsOiAnJyxcclxuICAgIC8vIOmhtumDqOWbvueJh1xyXG4gICAgdG9waW1ndXJsOiAnJyxcclxuICAgIC8vIOmhtemdouagh+mimFxyXG4gICAgbmFtZTogJycsXHJcbiAgICAvLyDmpbzlsYLlkI3np7BcclxuICAgIGZsb29yTmFtZTogJycsXHJcbiAgICAvLyDmmK/lkKbmn6XnnIvmm7TlpJpcclxuICAgIGxvb2thdG1vcmU6ICcnLFxyXG4gICAgLy8g5p+l55yL5pu05aSa6KaB6Lez6L2s55qE6aG16Z2iXHJcbiAgICBjYXJ0eXBlOiAnJyxcclxuICAgIHVybF9saW5rOicnXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL21pZGF1dHVtbm9uZWU/YWN0aXZpdHlpZD0nICsgdGhpcy5hY3Rpdml0eWlkXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8g5p+l55yL5pu05aSa5Yik5patXHJcbiAgICBnZW5nZChlKSB7XHJcbiAgICAgIGlmIChlID09IDApIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICB1cmw6XHJcbiAgICAgICAgICAgICdzb3VzdW8/Y2FycHJpY2VzZWN0aW9uPScgK1xyXG4gICAgICAgICAgICAnMCcgK1xyXG4gICAgICAgICAgICAnJmRvd25wYXltZW50c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZtb250aGx5c3VwcGx5c2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUgPT0gMSkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgIHVybDogJ3RpZXhpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlID09IDIpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICB1cmw6ICdwcm9kdWN0cydcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZSA9PSAzKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOiAnc3RyYWlnaHQnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDmlbDmja7ojrflj5bot7PovazigJTkuqflk4HliJfooajpobVcclxuICAgIHRvQ2hhbnBpbkRldGFpbChlKSB7XHJcbiAgICAgIGxldCBjYXJtb2RlbGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY2FybW9kZWxpZDtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnY29tbW9kaXR5X2RldGFpbHM/Y2FybW9kZWxpZD0nICsgY2FybW9kZWxpZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIG9uTG9hZChyZXMpIHtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIGxldCBhY3Rpdml0eWlkID0gcmVzLmFjdGl2aXR5aWQ7XHJcbiAgICB0aGlzLmFjdGl2aXR5aWQgPSBhY3Rpdml0eWlkO1xyXG4gICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAvLyDlrprkuYl1cmxcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICBhcmUuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vIOa0u+WKqOaooeadv1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2FjdGl2aXR5L3RlbXBsYXRlJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGFjdGl2aXR5aWQ6IGFjdGl2aXR5aWRcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgIGFyZS5jYXJtb2RlbCA9IGRhdGEuZGF0YS5kYXRhLmNhcmxpc3Q7XHJcbiAgICAgICAgYXJlLnRvcGltZ3VybCA9IGRhdGEuZGF0YS5kYXRhLnRvcGltZ3VybDtcclxuICAgICAgICBhcmUubmFtZSA9IGRhdGEuZGF0YS5kYXRhLm5hbWU7XHJcbiAgICAgICAgYXJlLmxvb2thdG1vcmUgPSBkYXRhLmRhdGEuZGF0YS5sb29rYXRtb3JlO1xyXG4gICAgICAgIGFyZS5mbG9vck5hbWUgPSBkYXRhLmRhdGEuZGF0YS5mbG9vcm5hbWU7XHJcbiAgICAgICAgYXJlLmNhcnR5cGUgPSBkYXRhLmRhdGEuZGF0YS5jYXJ0eXBlO1xyXG4gICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgICAgICB0aXRsZTogYXJlLm5hbWUgLy/pobXpnaLmoIfpopjkuLrot6/nlLHlj4LmlbBcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBvblVubG9hZCgpIHtcclxuICAgIC8vIOa4heaOiei0t+asvuaPkOS6pOiuouWNleaOpeWPo+S4pOS4quWPguaVsOeahOWAvFxyXG4gICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc291cmNlID0gMDtcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNvdXJjZWlkID0gJyc7XHJcbiAgfVxyXG4gIG9uU2hvdygpe1xyXG4gICAgdGhhdC51cmxfbGluayA9IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gIH1cclxufVxyXG4iXX0=