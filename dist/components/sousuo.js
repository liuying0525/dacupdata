'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sousuo = function (_wepy$component) {
  _inherits(Sousuo, _wepy$component);

  function Sousuo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sousuo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sousuo.__proto__ || Object.getPrototypeOf(Sousuo)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      gps_wz: '定位中...',
      zt: true,
      url_link: ''
    }, _this.props = {
      title: String
    }, _this.methods = {
      dingwei: function dingwei() {
        var this_ = this;
        wx.getSetting({
          success: function success(res) {
            // 判断定位用户授权信息
            if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
              //非初始化进入该页面,且未授权
              wx.showModal({
                title: '是否授权当前位置',
                content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
                success: function success(res) {
                  if (res.cancel) {
                    // console.info("1授权失败返回数据");
                  } else if (res.confirm) {
                    //village_LBS(that);
                    wx.openSetting({
                      success: function success(data) {
                        if (data.authSetting['scope.userLocation'] == true) {
                          //                          再次授权，调用getLocationt的API
                          wx.getLocation({
                            type: 'wgs84',
                            success: function success(res) {
                              // console.log(1111);
                              wx.request({
                                data: {},
                                header: {
                                  'Content-Type': 'application/json'
                                },
                                url: 'https://api.map.baidu.com/geocoder/v2/?ak=yonP0ZC9Gt9zrH5ig8xOUBhAxRZdvBDi&location=' + res.latitude + ',' + res.longitude + '&output=json',
                                success: function success(data) {
                                  var zhi = data.data.result.addressComponent.city;
                                  this_.gps_wz = zhi;
                                  this_.$apply();
                                }
                              });
                            },
                            fail: function fail(res) {
                              wx.getLocation({
                                type: 'wgs84',
                                success: function success(res) {
                                  // console.log(1111);
                                  wx.request({
                                    data: {},
                                    header: {
                                      'Content-Type': 'application/json'
                                    },
                                    url: 'https://api.map.baidu.com/geocoder/v2/?ak=yonP0ZC9Gt9zrH5ig8xOUBhAxRZdvBDi&location=' + res.latitude + ',' + res.longitude + '&output=json',
                                    success: function success(data) {
                                      var zhi = data.data.result.addressComponent.city;
                                      this_.gps_wz = zhi;
                                      this_.$apply();
                                    }
                                  });
                                },
                                fail: function fail(res) {}
                              });
                            }
                          });
                        } else {
                          wx.showToast({
                            title: '授权失败',
                            icon: 'success',
                            duration: 5000
                          });
                        }
                      }
                    });
                  }
                }
              });
            } else if (res.authSetting['scope.userLocation'] == undefined || res.authSetting['scope.userLocation'] == true) {
              //初始化进入
              wx.chooseLocation({
                success: function success(res) {
                  wx.request({
                    data: {},
                    header: {
                      'Content-Type': 'application/json'
                    },
                    url: 'https://api.map.baidu.com/geocoder/v2/?ak=yonP0ZC9Gt9zrH5ig8xOUBhAxRZdvBDi&location=' + res.latitude + ',' + res.longitude + '&output=json',
                    success: function success(data) {
                      var zhi = data.data.result.addressComponent.city;
                      this_.gps_wz = zhi;
                      this_.$apply();
                    }
                  });
                }
              });
            }
          }
        });
      },
      ss_btn: function ss_btn() {
        this.$emit('childFn', 'brandd');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sousuo, [{
    key: 'onLoad',
    value: function onLoad() {
      var this_mo = this;
      var parent = this.$parent.$parent.globalData;
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          this_mo.$emit('childFn_jw', {
            j: res.latitude,
            w: res.longitude
          });
          wx.request({
            data: {},
            header: {
              'Content-Type': 'application/json'
            },
            url: 'https://api.map.baidu.com/geocoder/v2/?ak=yonP0ZC9Gt9zrH5ig8xOUBhAxRZdvBDi&location=' + res.latitude + ',' + res.longitude + '&output=json',
            success: function success(data) {
              console.log(data.data.result.addressComponent);
              this_mo.$parent.$parent.globalData.addressComponent = data.data.result.addressComponent;
              console.log(this_mo.$parent.$parent.addressComponent);
              var zhi = data.data.result.addressComponent.city;
              // console.log(zhi);
              this_mo.gps_wz = zhi;
              parent.cityName = zhi;
              this_mo.$emit('childFn_gps', {
                gps: zhi
              });
              this_mo.$apply();
            }
          });
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return Sousuo;
}(_wepy2.default.component);

exports.default = Sousuo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXN1by5qcyJdLCJuYW1lcyI6WyJTb3VzdW8iLCJkYXRhIiwiZ3BzX3d6IiwienQiLCJ1cmxfbGluayIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJtZXRob2RzIiwiZGluZ3dlaSIsInRoaXNfIiwid3giLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwidW5kZWZpbmVkIiwic2hvd01vZGFsIiwiY29udGVudCIsImNhbmNlbCIsImNvbmZpcm0iLCJvcGVuU2V0dGluZyIsImdldExvY2F0aW9uIiwidHlwZSIsInJlcXVlc3QiLCJoZWFkZXIiLCJ1cmwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpoaSIsInJlc3VsdCIsImFkZHJlc3NDb21wb25lbnQiLCJjaXR5IiwiJGFwcGx5IiwiZmFpbCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUxvY2F0aW9uIiwic3NfYnRuIiwiJGVtaXQiLCJ0aGlzX21vIiwicGFyZW50IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJqIiwidyIsImNvbnNvbGUiLCJsb2ciLCJjaXR5TmFtZSIsImdwcyIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsSSxHQUFPO0FBQ0xDLGNBQVEsUUFESDtBQUVMQyxVQUFJLElBRkM7QUFHTEMsZ0JBQVM7QUFISixLLFFBS1BDLEssR0FBUTtBQUNOQyxhQUFPQztBQURELEssUUFHUkMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUixZQUFJQyxRQUFRLElBQVo7QUFDQUMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLG1CQUFTLHNCQUFPO0FBQ2Q7QUFDQSxnQkFDRUMsSUFBSUMsV0FBSixDQUFnQixvQkFBaEIsS0FBeUNDLFNBQXpDLElBQ0FGLElBQUlDLFdBQUosQ0FBZ0Isb0JBQWhCLEtBQXlDLElBRjNDLEVBR0U7QUFD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UUFBUCxHQUFrQnBCLEdBQWxCO0FBQ0FZLHNCQUFRRCxLQUFSLENBQWMsYUFBZCxFQUE2QjtBQUMzQlUscUJBQUtyQjtBQURzQixlQUE3QjtBQUdBWSxzQkFBUVIsTUFBUjtBQUNEO0FBdEJRLFdBQVg7QUF3QkQ7QUEvQlksT0FBZjtBQWlDRDs7OzZCQUNPO0FBQ04sV0FBSzdCLFFBQUwsR0FBZ0IsS0FBS3VDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QnhDLFFBQXhDO0FBQ0Q7Ozs7RUFyS2lDK0MsZUFBS0MsUzs7a0JBQXBCcEQsTSIsImZpbGUiOiJzb3VzdW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VzdW8gZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBncHNfd3o6ICflrprkvY3kuK0uLi4nLFxyXG4gICAgICB6dDogdHJ1ZSxcclxuICAgICAgdXJsX2xpbms6JydcclxuICAgIH07XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgdGl0bGU6IFN0cmluZ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGRpbmd3ZWkoKSB7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWIpOaWreWumuS9jeeUqOaIt+aOiOadg+S/oeaBr1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSAhPSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddICE9IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgLy/pnZ7liJ3lp4vljJbov5vlhaXor6XpobXpnaIs5LiU5pyq5o6I5p2DXHJcbiAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5piv5ZCm5o6I5p2D5b2T5YmN5L2N572uJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfpnIDopoHojrflj5bmgqjnmoTlnLDnkIbkvY3nva7vvIzor7fnoa7orqTmjojmnYPvvIzlkKbliJnlnLDlm77lip/og73lsIbml6Dms5Xkvb/nlKgnLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUuaW5mbyhcIjHmjojmnYPlpLHotKXov5Tlm57mlbDmja5cIik7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvL3ZpbGxhZ2VfTEJTKHRoYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgIOWGjeasoeaOiOadg++8jOiwg+eUqGdldExvY2F0aW9udOeahEFQSVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDExMTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vZ2VvY29kZXIvdjIvP2FrPXlvblAwWkM5R3Q5enJINWlnOHhPVUJoQXhSWmR2QkRpJmxvY2F0aW9uPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmxhdGl0dWRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcsJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMubG9uZ2l0dWRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmb3V0cHV0PWpzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemhpID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXy5ncHNfd3ogPSB6aGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coMTExMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9nZW9jb2Rlci92Mi8/YWs9eW9uUDBaQzlHdDl6ckg1aWc4eE9VQmhBeFJaZHZCRGkmbG9jYXRpb249JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmxhdGl0dWRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5sb25naXR1ZGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcmb3V0cHV0PWpzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB6aGkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18uZ3BzX3d6ID0gemhpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aOiOadg+Wksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChcclxuICAgICAgICAgICAgICByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddID09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgIHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10gPT0gdHJ1ZVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAvL+WIneWni+WMlui/m+WFpVxyXG4gICAgICAgICAgICAgIHd4LmNob29zZUxvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz15b25QMFpDOUd0OXpySDVpZzh4T1VCaEF4UlpkdkJEaSZsb2NhdGlvbj0nICtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcy5sYXRpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnLCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmVzLmxvbmdpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAnJm91dHB1dD1qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHpoaSA9IGRhdGEuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18uZ3BzX3d6ID0gemhpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBzc19idG4oKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsICdicmFuZGQnKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHRoaXNfbW8gPSB0aGlzO1xyXG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgdGhpc19tby4kZW1pdCgnY2hpbGRGbl9qdycsIHtcclxuICAgICAgICAgICAgajogcmVzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICB3OiByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz15b25QMFpDOUd0OXpySDVpZzh4T1VCaEF4UlpkdkJEaSZsb2NhdGlvbj0nICtcclxuICAgICAgICAgICAgICByZXMubGF0aXR1ZGUgK1xyXG4gICAgICAgICAgICAgICcsJyArXHJcbiAgICAgICAgICAgICAgcmVzLmxvbmdpdHVkZSArXHJcbiAgICAgICAgICAgICAgJyZvdXRwdXQ9anNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgdGhpc19tby4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5hZGRyZXNzQ29tcG9uZW50PWRhdGEuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpc19tby4kcGFyZW50LiRwYXJlbnQuYWRkcmVzc0NvbXBvbmVudClcclxuICAgICAgICAgICAgICBsZXQgemhpID0gZGF0YS5kYXRhLnJlc3VsdC5hZGRyZXNzQ29tcG9uZW50LmNpdHk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coemhpKTtcclxuICAgICAgICAgICAgICB0aGlzX21vLmdwc193eiA9IHpoaTtcclxuICAgICAgICAgICAgICBwYXJlbnQuY2l0eU5hbWUgPSB6aGk7XHJcbiAgICAgICAgICAgICAgdGhpc19tby4kZW1pdCgnY2hpbGRGbl9ncHMnLCB7XHJcbiAgICAgICAgICAgICAgICBncHM6IHpoaVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXNfbW8uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvblNob3coKXtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgfVxyXG4gIH1cclxuIl19