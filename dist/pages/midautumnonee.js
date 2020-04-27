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
      url_link: '',
      selectPerson: true,
      carmodel: '',
      topimgurl: '',
      name: '',
      // 楼层名称
      floorName: '',
      lookatmore: '',
      cartype: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/midautumnonee?activityid=' + this.activityid
        };
      },
      // 数据获取跳转—产品列表页
      toChanpinDetail: function toChanpinDetail(e) {
        var carmodelid = e.currentTarget.dataset.carmodelid;
        wx.navigateTo({
          url: 'commodity_details?carmodelid=' + carmodelid
        });
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
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return midautumnonee;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(midautumnonee , 'pages/midautumnonee'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pZGF1dHVtbm9uZWUuanMiXSwibmFtZXMiOlsibWlkYXV0dW1ub25lZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZGF0YSIsInVybF9saW5rIiwic2VsZWN0UGVyc29uIiwiY2FybW9kZWwiLCJ0b3BpbWd1cmwiLCJuYW1lIiwiZmxvb3JOYW1lIiwibG9va2F0bW9yZSIsImNhcnR5cGUiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiYWN0aXZpdHlpZCIsInRvQ2hhbnBpbkRldGFpbCIsImUiLCJjYXJtb2RlbGlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZW5nZCIsIiRuYXZpZ2F0ZSIsInJlcyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJhcmUiLCJqc29uX2xpbmsiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInJlcXVlc3QiLCJzdWNjZXNzIiwiaGlkZUxvYWRpbmciLCJjYXJsaXN0IiwiZmxvb3JuYW1lIiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiJGFwcGx5Iiwic291cmNlIiwic291cmNlaWQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhLEUsUUFFYkMsSSxHQUFPO0FBQ0xDLGdCQUFVLEVBREw7QUFFTEMsb0JBQWMsSUFGVDtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGlCQUFXLEVBSk47QUFLTEMsWUFBTSxFQUxEO0FBTUw7QUFDQUMsaUJBQVcsRUFQTjtBQVFMQyxrQkFBWSxFQVJQO0FBU0xDLGVBQVM7QUFUSixLLFFBWVBDLE8sR0FBVTtBQUNSQyx5QkFBbUIsNkJBQVc7QUFDNUIsZUFBTztBQUNMQyxnQkFBTSxxQ0FBcUMsS0FBS0M7QUFEM0MsU0FBUDtBQUdELE9BTE87QUFNUjtBQUNBQyxxQkFQUSwyQkFPUUMsQ0FQUixFQU9XO0FBQ2pCLFlBQUlDLGFBQWFELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixVQUF6QztBQUNBRyxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSyxrQ0FBa0NMO0FBRDNCLFNBQWQ7QUFHRCxPQVpPOztBQWFSO0FBQ0FNLFdBZFEsaUJBY0ZQLENBZEUsRUFjQztBQUNQLFlBQUlBLEtBQUssQ0FBVCxFQUFZO0FBQ1YsZUFBS1EsU0FBTCxDQUFlO0FBQ2JGLGlCQUNFLDRCQUNBLEdBREEsR0FFQSxzQkFGQSxHQUdBLEdBSEEsR0FJQSx3QkFKQSxHQUtBO0FBUFcsV0FBZjtBQVNEO0FBQ0QsWUFBSU4sS0FBSyxDQUFULEVBQVk7QUFDVixlQUFLUSxTQUFMLENBQWU7QUFDYkYsaUJBQUs7QUFEUSxXQUFmO0FBR0Q7QUFDRCxZQUFJTixLQUFLLENBQVQsRUFBWTtBQUNWLGVBQUtRLFNBQUwsQ0FBZTtBQUNiRixpQkFBSztBQURRLFdBQWY7QUFHRDtBQUNELFlBQUlOLEtBQUssQ0FBVCxFQUFZO0FBQ1YsZUFBS1EsU0FBTCxDQUFlO0FBQ2JGLGlCQUFLO0FBRFEsV0FBZjtBQUdEO0FBQ0Y7QUF6Q08sSzs7Ozs7MkJBMkNIRyxHLEVBQUs7QUFDVkwsU0FBR00sV0FBSCxDQUFlO0FBQ2JDLGVBQU87QUFETSxPQUFmO0FBR0EsVUFBSWIsYUFBYVcsSUFBSVgsVUFBckI7QUFDQSxXQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFVBQUljLE1BQU0sSUFBVjtBQUNBO0FBQ0EsVUFBSUMsWUFBWSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLFNBQXhDO0FBQ0FELFVBQUlDLFNBQUosR0FBZ0JBLFNBQWhCO0FBQ0FULFNBQUdZLE9BQUgsQ0FBVztBQUNUO0FBQ0FWLGFBQUtPLFlBQVksOEJBRlI7QUFHVDNCLGNBQU07QUFDSlksc0JBQVlBO0FBRFIsU0FIRztBQU1UO0FBQ0FtQixpQkFBUyxpQkFBUy9CLElBQVQsRUFBZTtBQUN0QmtCLGFBQUdjLFdBQUg7QUFDQTtBQUNBTixjQUFJdkIsUUFBSixHQUFlSCxLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZWlDLE9BQTlCO0FBQ0FQLGNBQUl0QixTQUFKLEdBQWdCSixLQUFLQSxJQUFMLENBQVVBLElBQVYsQ0FBZUksU0FBL0I7QUFDQXNCLGNBQUlyQixJQUFKLEdBQVdMLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlSyxJQUExQjtBQUNBcUIsY0FBSW5CLFVBQUosR0FBaUJQLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlTyxVQUFoQztBQUNBbUIsY0FBSXBCLFNBQUosR0FBZ0JOLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFla0MsU0FBL0I7QUFDQVIsY0FBSWxCLE9BQUosR0FBY1IsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVRLE9BQTdCO0FBQ0FVLGFBQUdpQixxQkFBSCxDQUF5QjtBQUN2QlYsbUJBQU9DLElBQUlyQixJQURZLENBQ1A7QUFETyxXQUF6QjtBQUdBO0FBQ0FxQixjQUFJVSxNQUFKO0FBQ0Q7QUFyQlEsT0FBWDtBQXVCRDs7OytCQUNVO0FBQ1Q7QUFDQSxXQUFLUixPQUFMLENBQWFDLFVBQWIsQ0FBd0JRLE1BQXhCLEdBQWlDLENBQWpDO0FBQ0EsV0FBS1QsT0FBTCxDQUFhQyxVQUFiLENBQXdCUyxRQUF4QixHQUFtQyxFQUFuQztBQUNEOzs7NkJBQ087QUFDTixXQUFLckMsUUFBTCxHQUFnQixLQUFLMkIsT0FBTCxDQUFhQyxVQUFiLENBQXdCNUIsUUFBeEM7QUFDRDs7OztFQXRHd0NzQyxlQUFLQyxJOztrQkFBM0I1QyxhIiwiZmlsZSI6Im1pZGF1dHVtbm9uZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtaWRhdXR1bW5vbmVlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnJ1xyXG4gIH07XHJcbiAgY29tcG9uZW50cyA9IHt9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgdXJsX2xpbms6ICcnLFxyXG4gICAgc2VsZWN0UGVyc29uOiB0cnVlLFxyXG4gICAgY2FybW9kZWw6ICcnLFxyXG4gICAgdG9waW1ndXJsOiAnJyxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgLy8g5qW85bGC5ZCN56ewXHJcbiAgICBmbG9vck5hbWU6ICcnLFxyXG4gICAgbG9va2F0bW9yZTogJycsXHJcbiAgICBjYXJ0eXBlOiAnJ1xyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9taWRhdXR1bW5vbmVlP2FjdGl2aXR5aWQ9JyArIHRoaXMuYWN0aXZpdHlpZFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOaVsOaNruiOt+WPlui3s+i9rOKAlOS6p+WTgeWIl+ihqOmhtVxyXG4gICAgdG9DaGFucGluRGV0YWlsKGUpIHtcclxuICAgICAgbGV0IGNhcm1vZGVsaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJtb2RlbGlkO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdjb21tb2RpdHlfZGV0YWlscz9jYXJtb2RlbGlkPScgKyBjYXJtb2RlbGlkXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOafpeeci+abtOWkmuWIpOaWrVxyXG4gICAgZ2VuZ2QoZSkge1xyXG4gICAgICBpZiAoZSA9PSAwKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAnc291c3VvP2NhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgICAgJzAnICtcclxuICAgICAgICAgICAgJyZkb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJyArXHJcbiAgICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICAgICcwJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChlID09IDEpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSh7XHJcbiAgICAgICAgICB1cmw6ICd0aWV4aSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZSA9PSAyKSB7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoe1xyXG4gICAgICAgICAgdXJsOiAncHJvZHVjdHMnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGUgPT0gMykge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKHtcclxuICAgICAgICAgIHVybDogJ3N0cmFpZ2h0J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBvbkxvYWQocmVzKSB7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgfSk7XHJcbiAgICBsZXQgYWN0aXZpdHlpZCA9IHJlcy5hY3Rpdml0eWlkO1xyXG4gICAgdGhpcy5hY3Rpdml0eWlkID0gYWN0aXZpdHlpZDtcclxuICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgLy8g5a6a5LmJdXJsXHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgYXJlLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAvLyDmtLvliqjmqKHmnb9cclxuICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9hY3Rpdml0eS90ZW1wbGF0ZScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBhY3Rpdml0eWlkOiBhY3Rpdml0eWlkXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICBhcmUuY2FybW9kZWwgPSBkYXRhLmRhdGEuZGF0YS5jYXJsaXN0O1xyXG4gICAgICAgIGFyZS50b3BpbWd1cmwgPSBkYXRhLmRhdGEuZGF0YS50b3BpbWd1cmw7XHJcbiAgICAgICAgYXJlLm5hbWUgPSBkYXRhLmRhdGEuZGF0YS5uYW1lO1xyXG4gICAgICAgIGFyZS5sb29rYXRtb3JlID0gZGF0YS5kYXRhLmRhdGEubG9va2F0bW9yZTtcclxuICAgICAgICBhcmUuZmxvb3JOYW1lID0gZGF0YS5kYXRhLmRhdGEuZmxvb3JuYW1lO1xyXG4gICAgICAgIGFyZS5jYXJ0eXBlID0gZGF0YS5kYXRhLmRhdGEuY2FydHlwZTtcclxuICAgICAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgICAgdGl0bGU6IGFyZS5uYW1lIC8v6aG16Z2i5qCH6aKY5Li66Lev55Sx5Y+C5pWwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICAvLyDmuIXmjonotLfmrL7mj5DkuqTorqLljZXmjqXlj6PkuKTkuKrlj4LmlbDnmoTlgLxcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNvdXJjZSA9IDA7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zb3VyY2VpZCA9ICcnO1xyXG4gIH1cclxuICBvblNob3coKXtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICB9XHJcbn1cclxuIl19