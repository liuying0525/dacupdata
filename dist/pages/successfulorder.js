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

var successfulorder = function (_wepy$page) {
  _inherits(successfulorder, _wepy$page);

  function successfulorder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, successfulorder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = successfulorder.__proto__ || Object.getPrototypeOf(successfulorder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '订单提交成功'
    }, _this.data = {
      zhi: {},
      // 下单时间
      time: '',
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 回到首页
      home_btn: function home_btn() {
        wx.reLaunch({
          url: 'index'
        });
      },


      // 去订单详情
      toDetails: function toDetails(e) {
        var orderid = this.data.zhi.orderid;
        var ordertype = this.data.zhi.ordertype;
        var orderstatue = this.data.zhi.orderstatue;

        this.$navigate('ddxq', {
          orderid: orderid,
          ordertype: ordertype,
          orderstatue: orderstatue
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(successfulorder, [{
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }, {
    key: 'onLoad',
    value: function onLoad(res) {
      this.url_link = this.$parent.globalData.url_link;
      if (res.from === 'details') {
        // 详情页跳转过来
        if (res.PVUVfrom === 'zhizu') {
          // 直租来源
          this.$parent.PVUVstatistical('rentoldordersubmitsuccess');
        }
        this.$parent.UVstatistical('oldordersubmitsuccess');
      } else {
        // 预约确认页跳转过来
        if (res.PVUVfrom === 'zhizu') {
          // 直租来源
          this.$parent.PVUVstatistical('rentnewordersubmitsuccess');
        }
        this.$parent.UVstatistical('newordersubmitsuccess');
      }
      var time = '';
      this.zhi = res;
      console.log(res);
      var d = new Date(parseInt(res.createtime));
      var sd = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
      this.time = sd;
      this.$apply();
    }
  }]);

  return successfulorder;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(successfulorder , 'pages/successfulorder'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3NmdWxvcmRlci5qcyJdLCJuYW1lcyI6WyJzdWNjZXNzZnVsb3JkZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInpoaSIsInRpbWUiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJob21lX2J0biIsInd4IiwicmVMYXVuY2giLCJ1cmwiLCJ0b0RldGFpbHMiLCJlIiwib3JkZXJpZCIsIm9yZGVydHlwZSIsIm9yZGVyc3RhdHVlIiwiJG5hdmlnYXRlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJyZXMiLCJmcm9tIiwiUFZVVmZyb20iLCJQVlVWc3RhdGlzdGljYWwiLCJVVnN0YXRpc3RpY2FsIiwiY29uc29sZSIsImxvZyIsImQiLCJEYXRlIiwicGFyc2VJbnQiLCJjcmVhdGV0aW1lIiwic2QiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFdBQUssRUFEQTtBQUVMO0FBQ0FDLFlBQU0sRUFIRDtBQUlMQyxnQkFBUztBQUpKLEssUUFNUEMsTyxHQUFVO0FBQ1JDLHlCQUFtQiw2QkFBVztBQUM1QixlQUFPO0FBQ0xDLGdCQUFNO0FBREQsU0FBUDtBQUdELE9BTE87QUFNUjtBQUNBQyxjQVBRLHNCQU9HO0FBQ1RDLFdBQUdDLFFBQUgsQ0FBWTtBQUNWQyxlQUFLO0FBREssU0FBWjtBQUdELE9BWE87OztBQWFSO0FBQ0FDLGVBZFEscUJBY0VDLENBZEYsRUFjSztBQUNYLFlBQUlDLFVBQVUsS0FBS2IsSUFBTCxDQUFVQyxHQUFWLENBQWNZLE9BQTVCO0FBQ0EsWUFBSUMsWUFBWSxLQUFLZCxJQUFMLENBQVVDLEdBQVYsQ0FBY2EsU0FBOUI7QUFDQSxZQUFJQyxjQUFjLEtBQUtmLElBQUwsQ0FBVUMsR0FBVixDQUFjYyxXQUFoQzs7QUFFQSxhQUFLQyxTQUFMLENBQWUsTUFBZixFQUF1QjtBQUNyQkgsbUJBQVNBLE9BRFk7QUFFckJDLHFCQUFXQSxTQUZVO0FBR3JCQyx1QkFBYUE7QUFIUSxTQUF2QjtBQUtEO0FBeEJPLEs7Ozs7OzZCQTBCRjtBQUNQLFdBQUtaLFFBQUwsR0FBZ0IsS0FBS2MsT0FBTCxDQUFhQyxVQUFiLENBQXdCZixRQUF4QztBQUNBOzs7MkJBQ01nQixHLEVBQUs7QUFDVixXQUFLaEIsUUFBTCxHQUFnQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JmLFFBQXhDO0FBQ0EsVUFBSWdCLElBQUlDLElBQUosS0FBYSxTQUFqQixFQUE0QjtBQUMxQjtBQUNBLFlBQUlELElBQUlFLFFBQUosS0FBaUIsT0FBckIsRUFBOEI7QUFDNUI7QUFDQSxlQUFLSixPQUFMLENBQWFLLGVBQWIsQ0FBNkIsMkJBQTdCO0FBQ0Q7QUFDRCxhQUFLTCxPQUFMLENBQWFNLGFBQWIsQ0FBMkIsdUJBQTNCO0FBQ0QsT0FQRCxNQU9PO0FBQ0w7QUFDQSxZQUFJSixJQUFJRSxRQUFKLEtBQWlCLE9BQXJCLEVBQThCO0FBQzVCO0FBQ0EsZUFBS0osT0FBTCxDQUFhSyxlQUFiLENBQTZCLDJCQUE3QjtBQUNEO0FBQ0QsYUFBS0wsT0FBTCxDQUFhTSxhQUFiLENBQTJCLHVCQUEzQjtBQUNEO0FBQ0QsVUFBSXJCLE9BQU8sRUFBWDtBQUNBLFdBQUtELEdBQUwsR0FBV2tCLEdBQVg7QUFDQUssY0FBUUMsR0FBUixDQUFZTixHQUFaO0FBQ0EsVUFBSU8sSUFBSSxJQUFJQyxJQUFKLENBQVNDLFNBQVNULElBQUlVLFVBQWIsQ0FBVCxDQUFSO0FBQ0EsVUFBSUMsS0FDRkosRUFBRUssV0FBRixLQUNBLEdBREEsSUFFQ0wsRUFBRU0sUUFBRixLQUFlLENBRmhCLElBR0EsR0FIQSxHQUlBTixFQUFFTyxPQUFGLEVBSkEsR0FLQSxHQUxBLEdBTUFQLEVBQUVRLFFBQUYsRUFOQSxHQU9BLEdBUEEsR0FRQVIsRUFBRVMsVUFBRixFQVJBLEdBU0EsR0FUQSxHQVVBVCxFQUFFVSxVQUFGLEVBWEY7QUFZQSxXQUFLbEMsSUFBTCxHQUFZNEIsRUFBWjtBQUNBLFdBQUtPLE1BQUw7QUFDRDs7OztFQTFFMENDLGVBQUtDLEk7O2tCQUE3QjFDLGUiLCJmaWxlIjoic3VjY2Vzc2Z1bG9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdWNjZXNzZnVsb3JkZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXmj5DkuqTmiJDlip8nXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgemhpOiB7fSxcclxuICAgIC8vIOS4i+WNleaXtumXtFxyXG4gICAgdGltZTogJycsXHJcbiAgICB1cmxfbGluazonJ1xyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOWbnuWIsOmmlumhtVxyXG4gICAgaG9tZV9idG4oKSB7XHJcbiAgICAgIHd4LnJlTGF1bmNoKHtcclxuICAgICAgICB1cmw6ICdpbmRleCdcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOWOu+iuouWNleivpuaDhVxyXG4gICAgdG9EZXRhaWxzKGUpIHtcclxuICAgICAgbGV0IG9yZGVyaWQgPSB0aGlzLmRhdGEuemhpLm9yZGVyaWQ7XHJcbiAgICAgIGxldCBvcmRlcnR5cGUgPSB0aGlzLmRhdGEuemhpLm9yZGVydHlwZTtcclxuICAgICAgbGV0IG9yZGVyc3RhdHVlID0gdGhpcy5kYXRhLnpoaS5vcmRlcnN0YXR1ZTtcclxuXHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCdkZHhxJywge1xyXG4gICAgICAgIG9yZGVyaWQ6IG9yZGVyaWQsXHJcbiAgICAgICAgb3JkZXJ0eXBlOiBvcmRlcnR5cGUsXHJcbiAgICAgICAgb3JkZXJzdGF0dWU6IG9yZGVyc3RhdHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgb25TaG93KCl7XHJcbiAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluazsgXHJcbiAgfVxyXG4gIG9uTG9hZChyZXMpIHtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIGlmIChyZXMuZnJvbSA9PT0gJ2RldGFpbHMnKSB7XHJcbiAgICAgIC8vIOivpuaDhemhtei3s+i9rOi/h+adpVxyXG4gICAgICBpZiAocmVzLlBWVVZmcm9tID09PSAnemhpenUnKSB7XHJcbiAgICAgICAgLy8g55u056ef5p2l5rqQXHJcbiAgICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgncmVudG9sZG9yZGVyc3VibWl0c3VjY2VzcycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCdvbGRvcmRlcnN1Ym1pdHN1Y2Nlc3MnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIOmihOe6puehruiupOmhtei3s+i9rOi/h+adpVxyXG4gICAgICBpZiAocmVzLlBWVVZmcm9tID09PSAnemhpenUnKSB7XHJcbiAgICAgICAgLy8g55u056ef5p2l5rqQXHJcbiAgICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgncmVudG5ld29yZGVyc3VibWl0c3VjY2VzcycpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCduZXdvcmRlcnN1Ym1pdHN1Y2Nlc3MnKTtcclxuICAgIH1cclxuICAgIGxldCB0aW1lID0gJyc7XHJcbiAgICB0aGlzLnpoaSA9IHJlcztcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIHZhciBkID0gbmV3IERhdGUocGFyc2VJbnQocmVzLmNyZWF0ZXRpbWUpKTtcclxuICAgIHZhciBzZCA9XHJcbiAgICAgIGQuZ2V0RnVsbFllYXIoKSArXHJcbiAgICAgICctJyArXHJcbiAgICAgIChkLmdldE1vbnRoKCkgKyAxKSArXHJcbiAgICAgICctJyArXHJcbiAgICAgIGQuZ2V0RGF0ZSgpICtcclxuICAgICAgJyAnICtcclxuICAgICAgZC5nZXRIb3VycygpICtcclxuICAgICAgJzonICtcclxuICAgICAgZC5nZXRNaW51dGVzKCkgK1xyXG4gICAgICAnOicgK1xyXG4gICAgICBkLmdldFNlY29uZHMoKTtcclxuICAgIHRoaXMudGltZSA9IHNkO1xyXG4gICAgdGhpcy4kYXBwbHkoKTtcclxuICB9XHJcbn1cclxuIl19