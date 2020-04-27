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
        this.$emit('childFn', 'rent');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sousuo, [{
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
    }
  }, {
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
  }]);

  return Sousuo;
}(_wepy2.default.component);

exports.default = Sousuo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyJdLCJuYW1lcyI6WyJTb3VzdW8iLCJkYXRhIiwiZ3BzX3d6IiwienQiLCJ1cmxfbGluayIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJtZXRob2RzIiwiZGluZ3dlaSIsInRoaXNfIiwid3giLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwidW5kZWZpbmVkIiwic2hvd01vZGFsIiwiY29udGVudCIsImNhbmNlbCIsImNvbmZpcm0iLCJvcGVuU2V0dGluZyIsImdldExvY2F0aW9uIiwidHlwZSIsInJlcXVlc3QiLCJoZWFkZXIiLCJ1cmwiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInpoaSIsInJlc3VsdCIsImFkZHJlc3NDb21wb25lbnQiLCJjaXR5IiwiJGFwcGx5IiwiZmFpbCIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImNob29zZUxvY2F0aW9uIiwic3NfYnRuIiwiJGVtaXQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInRoaXNfbW8iLCJwYXJlbnQiLCJqIiwidyIsImNpdHlOYW1lIiwiZ3BzIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsY0FBUSxRQURIO0FBRUxDLFVBQUksSUFGQztBQUdMQyxnQkFBVTtBQUhMLEssUUFLUEMsSyxHQUFRO0FBQ05DLGFBQU9DO0FBREQsSyxRQUdSQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLFlBQUlDLFFBQVEsSUFBWjtBQUNBQyxXQUFHQyxVQUFILENBQWM7QUFDWkMsbUJBQVMsc0JBQU87QUFDZCxnQkFDRUMsSUFBSUMsV0FBSixDQUFnQixvQkFBaEIsS0FBeUNDLFNBQXpDLElBQ0FGLElBQUlDLFdBQUosQ0FBZ0Isb0JBQWhCLEtBQXlDLElBRjNDLEVBR0U7QUFDQTtBQUNBSixpQkFBR00sU0FBSCxD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Ijoic2VhcmNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291c3VvIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgZ3BzX3d6OiAn5a6a5L2N5LitLi4uJyxcclxuICAgICAgenQ6IHRydWUsXHJcbiAgICAgIHVybF9saW5rOiAnJ1xyXG4gICAgfTtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICB0aXRsZTogU3RyaW5nXHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgZGluZ3dlaSgpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10gIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSAhPSB0cnVlXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIC8v6Z2e5Yid5aeL5YyW6L+b5YWl6K+l6aG16Z2iLOS4lOacquaOiOadg1xyXG4gICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aYr+WQpuaOiOadg+W9k+WJjeS9jee9ricsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn6ZyA6KaB6I635Y+W5oKo55qE5Zyw55CG5L2N572u77yM6K+356Gu6K6k5o6I5p2D77yM5ZCm5YiZ5Zyw5Zu+5Yqf6IO95bCG5peg5rOV5L2/55SoJyxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmluZm8oXCIx5o6I5p2D5aSx6LSl6L+U5Zue5pWw5o2uXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy92aWxsYWdlX0xCUyh0aGF0KTtcclxuICAgICAgICAgICAgICAgICAgICB3eC5vcGVuU2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hdXRoU2V0dGluZ1snc2NvcGUudXNlckxvY2F0aW9uJ10gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICDlho3mrKHmjojmnYPvvIzosIPnlKhnZXRMb2NhdGlvbnTnmoRBUElcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygxMTExKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz15b25QMFpDOUd0OXpySDVpZzh4T1VCaEF4UlpkdkJEaSZsb2NhdGlvbj0nICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5sYXRpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmxvbmdpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJm91dHB1dD1qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHpoaSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18uZ3BzX3d6ID0gemhpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldExvY2F0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKDExMTEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLm1hcC5iYWlkdS5jb20vZ2VvY29kZXIvdjIvP2FrPXlvblAwWkM5R3Q5enJINWlnOHhPVUJoQXhSWmR2QkRpJmxvY2F0aW9uPScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5sYXRpdHVkZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJywnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMubG9uZ2l0dWRlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJm91dHB1dD1qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgemhpID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLmdwc193eiA9IHpoaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAocmVzKSB7fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmjojmnYPlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgICAgICAgcmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VyTG9jYXRpb24nXSA9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgICByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJMb2NhdGlvbiddID09IHRydWVcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgLy/liJ3lp4vljJbov5vlhaVcclxuICAgICAgICAgICAgICB3eC5jaG9vc2VMb2NhdGlvbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkubWFwLmJhaWR1LmNvbS9nZW9jb2Rlci92Mi8/YWs9eW9uUDBaQzlHdDl6ckg1aWc4eE9VQmhBeFJaZHZCRGkmbG9jYXRpb249JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXMubGF0aXR1ZGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJywnICtcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcy5sb25naXR1ZGUgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgJyZvdXRwdXQ9anNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGxldCB6aGkgPSBkYXRhLmRhdGEucmVzdWx0LmFkZHJlc3NDb21wb25lbnQuY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLmdwc193eiA9IHpoaTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgc3NfYnRuKCkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoaWxkRm4nLCAncmVudCcpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgb25TaG93KCl7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IHRoaXNfbW8gPSB0aGlzO1xyXG4gICAgICBsZXQgcGFyZW50ID0gdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgd3guZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgdGhpc19tby4kZW1pdCgnY2hpbGRGbl9qdycsIHtcclxuICAgICAgICAgICAgajogcmVzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICB3OiByZXMubG9uZ2l0dWRlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL2FwaS5tYXAuYmFpZHUuY29tL2dlb2NvZGVyL3YyLz9haz15b25QMFpDOUd0OXpySDVpZzh4T1VCaEF4UlpkdkJEaSZsb2NhdGlvbj0nICtcclxuICAgICAgICAgICAgICByZXMubGF0aXR1ZGUgK1xyXG4gICAgICAgICAgICAgICcsJyArXHJcbiAgICAgICAgICAgICAgcmVzLmxvbmdpdHVkZSArXHJcbiAgICAgICAgICAgICAgJyZvdXRwdXQ9anNvbicsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHpoaSA9IGRhdGEuZGF0YS5yZXN1bHQuYWRkcmVzc0NvbXBvbmVudC5jaXR5O1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHpoaSk7XHJcbiAgICAgICAgICAgICAgdGhpc19tby5ncHNfd3ogPSB6aGk7XHJcbiAgICAgICAgICAgICAgcGFyZW50LmNpdHlOYW1lID0gemhpO1xyXG4gICAgICAgICAgICAgIHRoaXNfbW8uJGVtaXQoJ2NoaWxkRm5fZ3BzJywge1xyXG4gICAgICAgICAgICAgICAgZ3BzOiB6aGlcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzX21vLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuIl19