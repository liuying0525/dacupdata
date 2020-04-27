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

// let QRCode = require('./js/weapp-qrcode.js');
var couponDetail = function (_wepy$page) {
  _inherits(couponDetail, _wepy$page);

  function couponDetail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, couponDetail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = couponDetail.__proto__ || Object.getPrototypeOf(couponDetail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '卡券详情'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      //卡券种类
      state: 1,
      // 资源地址
      url_link: '',
      parent_data: '',
      couponInfo: ''
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(couponDetail, [{
    key: 'onLoad',


    // 数据获取
    value: function onLoad(options) {
      var that = this;
      that.parent_data = this.$parent.globalData;
      that.url_link = this.$parent.globalData.url_link;
      //卡券详情
      wx.request({
        url: that.parent_data.json_dhLink + '/coupon/user/use',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token,
          couponId: options.id
        },
        success: function success(res) {
          if (res.data.code == 10001) {
            that.couponInfo = res.data.data;
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
          // console.log(res)
          // 解析用户token
          // wx.request({
          //   url: that.parent_data.json_link +
          //     '/api/wxapp/userinfo/getuserid?access_token=' +
          //     that.parent_data.access_token,
          //   method: 'POST',
          //   header: {
          //     'Content-Type': 'application/x-www-form-urlencoded'
          //   },
          //   success(res) {
          //     that.access = res.data.data;
          //     qrcode = new QRCode('canvas', {
          //       text: res.data.data + '&' + that.id,
          //       width: 150,
          //       height: 150,
          //       colorDark: '#000',
          //       colorLight: 'white',
          //       correctLevel: QRCode.CorrectLevel.H
          //     });
          //     wx.canvasToTempFilePath({
          //       x: 0,
          //       y: 0,
          //       width: 150,
          //       height: 150,
          //       canvasId: 'canvas',
          //       success: function(res) {
          //         console.log(res)
          //         that.radarImg= res.tempFilePath;
          //         that.$apply()
          //       }
          //     });
          //     that.$apply();
          //   }
          // });
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // this.$parent.PVUVstatistical('cardpagedetail');
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      // clearInterval(this.set)
    }
  }]);

  return couponDetail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(couponDetail , 'pages/couponDetail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXBvbkRldGFpbC5qcyJdLCJuYW1lcyI6WyJjb3Vwb25EZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJzdGF0ZSIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJjb3Vwb25JbmZvIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJ0aGF0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsInVzZXJJZCIsImxvZ2luX3VzZXJJZCIsImxvZ2luVG9rZW4iLCJsb2dpbl90b2tlbiIsImNvdXBvbklkIiwiaWQiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsIiRhcHBseSIsIiRpbnZva2UiLCJtc2ciLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7SUFDcUJBLFk7Ozs7Ozs7Ozs7Ozs7O2tNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMO0FBQ0FDLGFBQU8sQ0FGRjtBQUdMO0FBQ0FDLGdCQUFVLEVBSkw7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxrQkFBWTtBQU5QLEssUUFRUEMsTyxHQUFVLEU7Ozs7Ozs7QUFLVjsyQkFDT0MsTyxFQUFTO0FBQ2QsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLFdBQUwsR0FBbUIsS0FBS0ssT0FBTCxDQUFhQyxVQUFoQztBQUNBRixXQUFLTCxRQUFMLEdBQWdCLEtBQUtNLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlAsUUFBeEM7QUFDQTtBQUNBUSxTQUFHQyxPQUFILENBQVc7QUFDVEMsYUFBS0wsS0FBS0osV0FBTCxDQUFpQlUsV0FBakIsR0FBK0Isa0JBRDNCO0FBRVRiLGNBQU07QUFDSmMsa0JBQVFQLEtBQUtKLFdBQUwsQ0FBaUJZLFlBRHJCO0FBRUpDLHNCQUFZVCxLQUFLSixXQUFMLENBQWlCYyxXQUZ6QjtBQUdKQyxvQkFBVVosUUFBUWE7QUFIZCxTQUZHO0FBT1RDLGVBUFMsbUJBT0RDLEdBUEMsRUFPSTtBQUNYLGNBQUdBLElBQUlyQixJQUFKLENBQVNzQixJQUFULElBQWlCLEtBQXBCLEVBQTJCO0FBQ3pCZixpQkFBS0gsVUFBTCxHQUFrQmlCLElBQUlyQixJQUFKLENBQVNBLElBQTNCO0FBQ0FPLGlCQUFLZ0IsTUFBTDtBQUNELFdBSEQsTUFHTztBQUNMaEIsaUJBQUtpQixPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q0gsSUFBSXJCLElBQUosQ0FBU3NCLElBQWhELEVBQXNERCxJQUFJckIsSUFBSixDQUFTeUIsR0FBL0Q7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQWpEUSxPQUFYO0FBbUREOzs7NkJBQ1E7QUFDUDtBQUNEOzs7K0JBQ1U7QUFDVDtBQUNEOzs7O0VBbkZ1Q0MsZUFBS0MsSTs7a0JBQTFCaEMsWSIsImZpbGUiOiJjb3Vwb25EZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIC8vIGxldCBRUkNvZGUgPSByZXF1aXJlKCcuLi9wYWdlcy9qcy93ZWFwcC1xcmNvZGUuanMnKTtcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBjb3Vwb25EZXRhaWwgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Y2h5Yi46K+m5oOFJ1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy/ljaHliLjnp43nsbtcclxuICAgICAgc3RhdGU6IDEsXHJcbiAgICAgIC8vIOi1hOa6kOWcsOWdgFxyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJyxcclxuICAgICAgY291cG9uSW5mbzogJydcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG5cclxuICAgIH07XHJcblxyXG5cclxuICAgIC8vIOaVsOaNruiOt+WPllxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoYXQudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgLy/ljaHliLjor6bmg4VcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9jb3Vwb24vdXNlci91c2UnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWQsXHJcbiAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgY291cG9uSWQ6IG9wdGlvbnMuaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDEwMDAxKSB7XHJcbiAgICAgICAgICAgIHRoYXQuY291cG9uSW5mbyA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgLy8g6Kej5p6Q55So5oi3dG9rZW5cclxuICAgICAgICAgIC8vIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgIC8vICAgICAnL2FwaS93eGFwcC91c2VyaW5mby9nZXR1c2VyaWQ/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgLy8gICAgIHRoYXQucGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIC8vICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAvLyAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAvLyAgICAgdGhhdC5hY2Nlc3MgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgLy8gICAgIHFyY29kZSA9IG5ldyBRUkNvZGUoJ2NhbnZhcycsIHtcclxuICAgICAgICAgIC8vICAgICAgIHRleHQ6IHJlcy5kYXRhLmRhdGEgKyAnJicgKyB0aGF0LmlkLFxyXG4gICAgICAgICAgLy8gICAgICAgd2lkdGg6IDE1MCxcclxuICAgICAgICAgIC8vICAgICAgIGhlaWdodDogMTUwLFxyXG4gICAgICAgICAgLy8gICAgICAgY29sb3JEYXJrOiAnIzAwMCcsXHJcbiAgICAgICAgICAvLyAgICAgICBjb2xvckxpZ2h0OiAnd2hpdGUnLFxyXG4gICAgICAgICAgLy8gICAgICAgY29ycmVjdExldmVsOiBRUkNvZGUuQ29ycmVjdExldmVsLkhcclxuICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgIC8vICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAvLyAgICAgICB4OiAwLFxyXG4gICAgICAgICAgLy8gICAgICAgeTogMCxcclxuICAgICAgICAgIC8vICAgICAgIHdpZHRoOiAxNTAsXHJcbiAgICAgICAgICAvLyAgICAgICBoZWlnaHQ6IDE1MCxcclxuICAgICAgICAgIC8vICAgICAgIGNhbnZhc0lkOiAnY2FudmFzJyxcclxuICAgICAgICAgIC8vICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAvLyAgICAgICAgIHRoYXQucmFkYXJJbWc9IHJlcy50ZW1wRmlsZVBhdGg7XHJcbiAgICAgICAgICAvLyAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgIC8vICAgICAgIH1cclxuICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgIC8vICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAvLyB0aGlzLiRwYXJlbnQuUFZVVnN0YXRpc3RpY2FsKCdjYXJkcGFnZWRldGFpbCcpO1xyXG4gICAgfVxyXG4gICAgb25VbmxvYWQoKSB7XHJcbiAgICAgIC8vIGNsZWFySW50ZXJ2YWwodGhpcy5zZXQpXHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=