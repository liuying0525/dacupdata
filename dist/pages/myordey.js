'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _userinfo_alert = require('./../components/userinfo_alert.js');

var _userinfo_alert2 = _interopRequireDefault(_userinfo_alert);

var _alert = require('./../components/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var myordey = function (_wepy$page) {
  _inherits(myordey, _wepy$page);

  function myordey() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, myordey);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = myordey.__proto__ || Object.getPrototypeOf(myordey)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的收藏'
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default
    }, _this.data = {
      request_cs: function request_cs() {},
      startX: 0, //开始坐标
      startY: 0,
      // 车型id
      carmodelid: '',
      // 产品id
      financialproductid: '',
      // 收藏列表数据
      text: [],
      // 当前左滑的item索引
      footIndex: -1,
      url_link: ""
    }, _this.methods = _defineProperty({
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 去首页
      gg: function gg(e) {
        wx.reLaunch({
          url: 'index'
        });
      },

      // 收藏列表跳转详情
      to_xq: function to_xq(e, collectiontype) {
        this.footIndex = -1;
        this.$parent.globalData.UVselectType = -1;
        var carmodelid = e.carmodel.carmodelid;
        var financialproductid = e.financial_product.financialproductid;
        var downpaymentpercent = 20;
        var loanterm = e.term;
        if (collectiontype == 0) {
          // 贷款
          var res = { carmodelid: carmodelid, financialproductid: financialproductid, downpaymentpercent: downpaymentpercent, loanterm: loanterm };
          this.$navigate('details', res);
        } else {
          // 直租
          var _res = { carmodelid: carmodelid, financialid: financialproductid, downpaymentpercent: downpaymentpercent, loanterm: loanterm };
          this.$navigate('straight_detail', _res);
        }
      },

      //删除事件
      del: function del(e) {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        wx.showModal({
          title: '取消收藏',
          content: '是否取消该商品收藏',
          success: function success(res) {
            if (res.confirm) {
              wx.showLoading({
                title: '删除中'
              });
              wx.request({
                url: parent_data.json_link + '/api/wxapp/collection/unoper?access_token=' + parent_data.access_token,
                data: {
                  collectionid: e
                },
                success: function success(data) {
                  wx.request({
                    url: parent_data.json_link + '/api/wxapp/collection/mycollectionlist?access_token=' + parent_data.access_token,
                    data: {},
                    success: function success(data) {
                      setTimeout(function () {
                        wx.hideLoading();
                      }, 0);
                      this_.footIndex = -1;
                      wx.showToast({
                        title: '删除收藏成功',
                        icon: 'success',
                        duration: 700
                      });
                      this_.text = data.data.data;
                      // 取值.00
                      this_.text = data.data.data.map(function (ele) {
                        ele.downpayment = ele.downpayment.toFixed(2);
                        return ele;
                      });
                      this_.text = data.data.data.map(function (ele) {
                        ele.msup = ele.msup.toFixed(2);
                        return ele;
                      });
                      // 给数据进行绑定
                      this_.$apply();
                    }
                  });
                }
              });
            } else if (res.cancel) {
              this_.footIndex = -1;
            }
            this_.$apply();
          }
        });
      },

      // 开始滑动
      touchstart: function touchstart(e) {
        this.startX = e.changedTouches[0].clientX;
        this.startY = e.changedTouches[0].clientY;
      },
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },
      alert_tel: function alert_tel(res) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        zhi.login_telnum_iv = res.iv;
        zhi.login_telnum_miyao = res.miyao;
        this_.$invoke('alert_l', 'chufa', false);
        // 查看是否授权
        wx.getSetting({
          success: function success(res) {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function success(res) {
                  zhi.java_login(res, this_.request_cs);
                }
              });
            } else {
              this_.$invoke('userinfo_alert', 'chufa', true);
            }
          }
        });
      },

      //滑动事件处理
      touchmove: function touchmove(e) {
        var that = this,
            index = e.currentTarget.dataset.index,
            //当前索引
        startX = that.data.startX,
            //开始X坐标
        startY = that.data.startY,
            //开始Y坐标
        touchMoveX = e.changedTouches[0].clientX,
            //滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY,
            //滑动变化坐标
        //获取滑动角度
        angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

        that.text.forEach(function (v, i) {
          //滑动超过30度角 return
          if (Math.abs(angle) > 30) return;
          if (i == index) {
            if (touchMoveX > startX) {
              //右滑
              if (that.footIndex == index) {
                that.footIndex = -1;
              }
            } else {
              //左滑
              that.footIndex = index;
            }
          }
        });
      }
    }, 'alert_tel', function alert_tel(res) {
      var this_ = this;
      var zhi = this.$parent.globalData;
      zhi.login_telnum_iv = res.iv;
      zhi.login_telnum_miyao = res.miyao;
      this_.$invoke('alert_l', 'chufa', false);
      // 查看是否授权
      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(res) {
                zhi.java_login(res, this_.request_cs);
              }
            });
          } else {
            this_.$invoke('userinfo_alert', 'chufa', true);
          }
        }
      });
    }), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(myordey, [{
    key: 'angle',

    //   /**
    //    * 计算滑动角度
    //    * @param {Object} start 起点坐标
    //    * @param {Object} end 终点坐标
    //    */
    value: function angle(start, end) {
      var _X = end.X - start.X,
          _Y = end.Y - start.Y;
      //返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      var parent_data = this.$parent.globalData;
      if (parent_data.access_token != '') {
        wx.showLoading({
          title: '加载中'
        });
        // 收藏列表
        wx.request({
          url: parent_data.json_link + '/api/wxapp/collection/mycollectionlist?access_token=' + parent_data.access_token,
          data: {},
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);

            this_.text = data.data.data;

            this_.text = data.data.data.map(function (ele) {
              ele.downpayment = ele.downpayment.toFixed(2);
              return ele;
            });
            this_.text = data.data.data.map(function (ele) {
              ele.msup = ele.msup.toFixed(2);
              return ele;
            });
            // 给数据进行绑定
            this_.$apply();
          }
        });
      } else {
        this_.$invoke('alert_l', 'chufa', true);
        this_.request_cs = function (access_token) {
          // 收藏列表
          wx.request({
            url: parent_data.json_link + '/api/wxapp/collection/mycollectionlist?access_token=' + parent_data.access_token,
            data: {},
            success: function success(data) {
              setTimeout(function () {
                wx.hideLoading();
              }, 0);
              this_.text = data.data.data.map(function (ele) {
                ele.downpayment = ele.downpayment.toFixed(2);
                return ele;
              });
              // 给数据进行绑定
              this_.$apply();
            }
          });
        };
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.onLoad();

      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.footIndex = -1;
    }
  }]);

  return myordey;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(myordey , 'pages/myordey'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15b3JkZXkuanMiXSwibmFtZXMiOlsibXlvcmRleSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJ1c2VyaW5mb19hbGVydCIsIlVzZXJpbmZvX2FsZXJ0IiwiYWxlcnRfbCIsIkFsZXJ0IiwiZGF0YSIsInJlcXVlc3RfY3MiLCJzdGFydFgiLCJzdGFydFkiLCJjYXJtb2RlbGlkIiwiZmluYW5jaWFscHJvZHVjdGlkIiwidGV4dCIsImZvb3RJbmRleCIsInVybF9saW5rIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImdnIiwiZSIsInd4IiwicmVMYXVuY2giLCJ1cmwiLCJ0b194cSIsImNvbGxlY3Rpb250eXBlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJVVnNlbGVjdFR5cGUiLCJjYXJtb2RlbCIsImZpbmFuY2lhbF9wcm9kdWN0IiwiZG93bnBheW1lbnRwZXJjZW50IiwibG9hbnRlcm0iLCJ0ZXJtIiwicmVzIiwiJG5hdmlnYXRlIiwiZmluYW5jaWFsaWQiLCJkZWwiLCJ0aGlzXyIsImpzb25fbGluayIsInBhcmVudF9kYXRhIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsImNvbmZpcm0iLCJzaG93TG9hZGluZyIsInJlcXVlc3QiLCJhY2Nlc3NfdG9rZW4iLCJjb2xsZWN0aW9uaWQiLCJzZXRUaW1lb3V0IiwiaGlkZUxvYWRpbmciLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJtYXAiLCJlbGUiLCJkb3ducGF5bWVudCIsInRvRml4ZWQiLCJtc3VwIiwiJGFwcGx5IiwiY2FuY2VsIiwidG91Y2hzdGFydCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJhbGVydF91c2VyaW5mbyIsInpoaSIsIiRpbnZva2UiLCJqYXZhX2xvZ2luIiwiZGV0YWlsIiwiYWxlcnRfdGVsIiwibG9naW5fdGVsbnVtX2l2IiwiaXYiLCJsb2dpbl90ZWxudW1fbWl5YW8iLCJtaXlhbyIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwidG91Y2htb3ZlIiwidGhhdCIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ0b3VjaE1vdmVYIiwidG91Y2hNb3ZlWSIsImFuZ2xlIiwiWCIsIlkiLCJmb3JFYWNoIiwidiIsImkiLCJNYXRoIiwiYWJzIiwic3RhcnQiLCJlbmQiLCJfWCIsIl9ZIiwiYXRhbiIsIlBJIiwib25Mb2FkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLGtCQUFpQixFQUFDLGNBQWEsRUFBZCxFQUFpQixZQUFXLFlBQTVCLEVBQWxCLEVBQTRELFdBQVUsRUFBQyxZQUFXLGFBQVosRUFBdEUsRSxRQUNUQyxPLEdBQVUsRUFBQyxrQkFBaUIsRUFBQyxnQkFBZSxnQkFBaEIsRUFBbEIsRUFBb0QsV0FBVSxFQUFDLGdCQUFlLFdBQWhCLEVBQTlELEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLHNCQUFnQkMsd0JBRE47QUFFVkMsZUFBU0M7QUFGQyxLLFFBSVpDLEksR0FBTztBQUNMQyxrQkFBWSxzQkFBVyxDQUFFLENBRHBCO0FBRUxDLGNBQVEsQ0FGSCxFQUVNO0FBQ1hDLGNBQVEsQ0FISDtBQUlMO0FBQ0FDLGtCQUFZLEVBTFA7QUFNTDtBQUNBQywwQkFBb0IsRUFQZjtBQVFMO0FBQ0FDLFlBQU0sRUFURDtBQVVMO0FBQ0FDLGlCQUFXLENBQUMsQ0FYUDtBQVlMQyxnQkFBUztBQVpKLEssUUFjUEMsTztBQUNFQyx5QkFBbUIsNkJBQVk7QUFDL0IsZUFBTztBQUNEQyxnQkFBTTtBQURMLFNBQVA7QUFHRyxPO0FB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QixNQUFOO0FBQ0Q7QUF2QlEsU0FBWDtBQXlCRCxPQTlCRCxNQThCTztBQUNMdEIsY0FBTThCLE9BQU4sQ0FBYyxTQUFkLEVBQXlCLE9BQXpCLEVBQWtDLElBQWxDO0FBQ0E5QixjQUFNOUIsVUFBTixHQUFtQixVQUFTd0MsWUFBVCxFQUF1QjtBQUN4QztBQUNBM0IsYUFBRzBCLE9BQUgsQ0FBVztBQUNUeEIsaUJBQ0VpQixZQUFZRCxTQUFaLEdBQ0Esc0RBREEsR0FFQUMsWUFBWVEsWUFKTDtBQUtUekMsa0JBQU0sRUFMRztBQU1UcUMscUJBQVMsaUJBQVNyQyxJQUFULEVBQWU7QUFDdEIyQyx5QkFBVyxZQUFXO0FBQ3BCN0IsbUJBQUc4QixXQUFIO0FBQ0QsZUFGRCxFQUVHLENBRkg7QUFHQWIsb0JBQU16QixJQUFOLEdBQWFOLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlZ0QsR0FBZixDQUFtQixVQUFDQyxHQUFELEVBQVM7QUFDdENBLG9CQUFJQyxXQUFKLEdBQWtCRCxJQUFJQyxXQUFKLENBQWdCQyxPQUFoQixDQUF3QixDQUF4QixDQUFsQjtBQUNELHVCQUFPRixHQUFQO0FBQ0QsZUFIWSxDQUFiO0FBSUE7QUFDQWxCLG9CQUFNc0IsTUFBTjtBQUNEO0FBaEJRLFdBQVg7QUFrQkQsU0FwQkQ7QUFxQkQ7QUFDRjs7OzZCQUVRO0FBQ1AsV0FBS3dDLE1BQUw7O0FBRUEsV0FBS3JGLFFBQUwsR0FBZ0IsS0FBS1csT0FBTCxDQUFhQyxVQUFiLENBQXdCWixRQUF4QztBQUNEOztBQUVEOzs7OytCQUNXO0FBQ1QsV0FBS0QsU0FBTCxHQUFpQixDQUFDLENBQWxCO0FBQ0Q7Ozs7RUEzUmtDdUYsZUFBS0MsSTs7a0JBQXJCMUcsTyIsImZpbGUiOiJteW9yZGV5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG15b3JkZXkgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTmlLbol48nXHJcbiAgfTtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlcmluZm9fYWxlcnRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPnmbvlvZVcIn0sXCJhbGVydF9sXCI6e1widGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+aJi+acuuWPt1wifX07XHJcbiRldmVudHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInYtb246Y2hpbGRGblwiOlwiYWxlcnRfdXNlcmluZm9cIn0sXCJhbGVydF9sXCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF90ZWxcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIHVzZXJpbmZvX2FsZXJ0OiBVc2VyaW5mb19hbGVydCxcclxuICAgIGFsZXJ0X2w6IEFsZXJ0XHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgcmVxdWVzdF9jczogZnVuY3Rpb24oKSB7fSxcclxuICAgIHN0YXJ0WDogMCwgLy/lvIDlp4vlnZDmoIdcclxuICAgIHN0YXJ0WTogMCxcclxuICAgIC8vIOi9puWei2lkXHJcbiAgICBjYXJtb2RlbGlkOiAnJyxcclxuICAgIC8vIOS6p+WTgWlkXHJcbiAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6ICcnLFxyXG4gICAgLy8g5pS26JeP5YiX6KGo5pWw5o2uXHJcbiAgICB0ZXh0OiBbXSxcclxuICAgIC8vIOW9k+WJjeW3pua7keeahGl0ZW3ntKLlvJVcclxuICAgIGZvb3RJbmRleDogLTEsXHJcbiAgICB1cmxfbGluazpcIlwiXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIC8vIOWOu+mmlumhtVxyXG4gICAgZ2coZSkge1xyXG4gICAgICB3eC5yZUxhdW5jaCh7XHJcbiAgICAgICAgdXJsOiAnaW5kZXgnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOaUtuiXj+WIl+ihqOi3s+i9rOivpuaDhVxyXG4gICAgdG9feHEoZSwgY29sbGVjdGlvbnR5cGUpe1xyXG4gICAgICB0aGlzLmZvb3RJbmRleCA9IC0xO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAtMTtcclxuICAgICAgbGV0IGNhcm1vZGVsaWQgPSBlLmNhcm1vZGVsLmNhcm1vZGVsaWQ7XHJcbiAgICAgIGxldCBmaW5hbmNpYWxwcm9kdWN0aWQgPSBlLmZpbmFuY2lhbF9wcm9kdWN0LmZpbmFuY2lhbHByb2R1Y3RpZDtcclxuICAgICAgbGV0IGRvd25wYXltZW50cGVyY2VudCA9IDIwO1xyXG4gICAgICBsZXQgbG9hbnRlcm0gPSBlLnRlcm07XHJcbiAgICAgIGlmIChjb2xsZWN0aW9udHlwZSA9PSAwKSB7XHJcbiAgICAgICAgLy8g6LS35qy+XHJcbiAgICAgICAgbGV0IHJlcyA9IHtjYXJtb2RlbGlkOmNhcm1vZGVsaWQsZmluYW5jaWFscHJvZHVjdGlkOmZpbmFuY2lhbHByb2R1Y3RpZCxkb3ducGF5bWVudHBlcmNlbnQ6ZG93bnBheW1lbnRwZXJjZW50LGxvYW50ZXJtOmxvYW50ZXJtfTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnZGV0YWlscycscmVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyDnm7Tnp59cclxuICAgICAgICBsZXQgcmVzID0ge2Nhcm1vZGVsaWQ6Y2FybW9kZWxpZCxmaW5hbmNpYWxpZDpmaW5hbmNpYWxwcm9kdWN0aWQsZG93bnBheW1lbnRwZXJjZW50OmRvd25wYXltZW50cGVyY2VudCxsb2FudGVybTpsb2FudGVybX07XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3N0cmFpZ2h0X2RldGFpbCcscmVzKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5Yig6Zmk5LqL5Lu2XHJcbiAgICBkZWwoZSkge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXjycsXHJcbiAgICAgICAgY29udGVudDogJ+aYr+WQpuWPlua2iOivpeWVhuWTgeaUtuiXjycsXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaTkuK0nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi91bm9wZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25pZDogZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL3d4YXBwL2NvbGxlY3Rpb24vbXljb2xsZWN0aW9ubGlzdD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpc18uZm9vdEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6Zmk5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA3MDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXy50ZXh0ID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Y+W5YC8LjAwXHJcbiAgICAgICAgICAgICAgICB0aGlzXy50ZXh0ID0gZGF0YS5kYXRhLmRhdGEubWFwKChlbGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlbGUuZG93bnBheW1lbnQgPSBlbGUuZG93bnBheW1lbnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18udGV4dCA9IGRhdGEuZGF0YS5kYXRhLm1hcCgoZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLm1zdXAgPSBlbGUubXN1cC50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgIHRoaXNfLmZvb3RJbmRleCA9IC0xO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8vIOW8gOWni+a7keWKqFxyXG4gICAgdG91Y2hzdGFydChlKSB7XHJcbiAgICAgIHRoaXMuc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICB0aGlzLnN0YXJ0WSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WTtcclxuICAgIH0sXHJcbiAgICBhbGVydF91c2VyaW5mbyhlKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIHpoaS5qYXZhX2xvZ2luKGUuZGV0YWlsLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgIH0sXHJcbiAgICBhbGVydF90ZWwocmVzKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9pdiA9IHJlcy5pdjtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9taXlhbyA9IHJlcy5taXlhbztcclxuICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIGZhbHNlKTtcclxuICAgICAgLy8g5p+l55yL5piv5ZCm5o6I5p2DXHJcbiAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHpoaS5qYXZhX2xvZ2luKHJlcywgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvL+a7keWKqOS6i+S7tuWkhOeQhlxyXG4gICAgdG91Y2htb3ZlKGUpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgIGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXgsIC8v5b2T5YmN57Si5byVXHJcbiAgICAgICAgc3RhcnRYID0gdGhhdC5kYXRhLnN0YXJ0WCwgLy/lvIDlp4tY5Z2Q5qCHXHJcbiAgICAgICAgc3RhcnRZID0gdGhhdC5kYXRhLnN0YXJ0WSwgLy/lvIDlp4tZ5Z2Q5qCHXHJcbiAgICAgICAgdG91Y2hNb3ZlWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCwgLy/mu5Hliqjlj5jljJblnZDmoIdcclxuICAgICAgICB0b3VjaE1vdmVZID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZLCAvL+a7keWKqOWPmOWMluWdkOagh1xyXG4gICAgICAgIC8v6I635Y+W5ruR5Yqo6KeS5bqmXHJcbiAgICAgICAgYW5nbGUgPSB0aGF0LmFuZ2xlKFxyXG4gICAgICAgICAgeyBYOiBzdGFydFgsIFk6IHN0YXJ0WSB9LFxyXG4gICAgICAgICAgeyBYOiB0b3VjaE1vdmVYLCBZOiB0b3VjaE1vdmVZIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgdGhhdC50ZXh0LmZvckVhY2goZnVuY3Rpb24odiwgaSkge1xyXG4gICAgICAgIC8v5ruR5Yqo6LaF6L+HMzDluqbop5IgcmV0dXJuXHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGFuZ2xlKSA+IDMwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGlmICh0b3VjaE1vdmVYID4gc3RhcnRYKSB7XHJcbiAgICAgICAgICAgIC8v5Y+z5ruRXHJcbiAgICAgICAgICAgIGlmICh0aGF0LmZvb3RJbmRleCA9PSBpbmRleCkge1xyXG4gICAgICAgICAgICAgIHRoYXQuZm9vdEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v5bem5ruRXHJcbiAgICAgICAgICAgIHRoYXQuZm9vdEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhbGVydF90ZWwocmVzKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9pdiA9IHJlcy5pdjtcclxuICAgICAgemhpLmxvZ2luX3RlbG51bV9taXlhbyA9IHJlcy5taXlhbztcclxuICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIGZhbHNlKTtcclxuICAgICAgLy8g5p+l55yL5piv5ZCm5o6I5p2DXHJcbiAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHpoaS5qYXZhX2xvZ2luKHJlcywgdGhpc18ucmVxdWVzdF9jcyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ3VzZXJpbmZvX2FsZXJ0JywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gICAgLy8gICAvKipcclxuICAgIC8vICAgICog6K6h566X5ruR5Yqo6KeS5bqmXHJcbiAgICAvLyAgICAqIEBwYXJhbSB7T2JqZWN0fSBzdGFydCDotbfngrnlnZDmoIdcclxuICAgIC8vICAgICogQHBhcmFtIHtPYmplY3R9IGVuZCDnu4jngrnlnZDmoIdcclxuICAgIC8vICAgICovXHJcbiAgYW5nbGUoc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIF9YID0gZW5kLlggLSBzdGFydC5YLFxyXG4gICAgICBfWSA9IGVuZC5ZIC0gc3RhcnQuWTtcclxuICAgIC8v6L+U5Zue6KeS5bqmIC9NYXRoLmF0YW4oKei/lOWbnuaVsOWtl+eahOWPjeato+WIh+WAvFxyXG4gICAgcmV0dXJuIDM2MCAqIE1hdGguYXRhbihfWSAvIF9YKSAvICgyICogTWF0aC5QSSk7XHJcbiAgfVxyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgaWYgKHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSAnJykge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyDmlLbol4/liJfooahcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICcvYXBpL3d4YXBwL2NvbGxlY3Rpb24vbXljb2xsZWN0aW9ubGlzdD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIH0sIDApO1xyXG5cclxuICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YTtcclxuXHJcbiAgICAgICAgICAgdGhpc18udGV4dCA9IGRhdGEuZGF0YS5kYXRhLm1hcCgoZWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZWxlLmRvd25wYXltZW50ID0gZWxlLmRvd25wYXltZW50LnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICB0aGlzXy50ZXh0ID0gZGF0YS5kYXRhLmRhdGEubWFwKChlbGUpID0+IHtcclxuICAgICAgICAgICAgICBlbGUubXN1cCA9IGVsZS5tc3VwLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzXy4kaW52b2tlKCdhbGVydF9sJywgJ2NodWZhJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXNfLnJlcXVlc3RfY3MgPSBmdW5jdGlvbihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAvLyDmlLbol4/liJfooahcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi9teWNvbGxlY3Rpb25saXN0P2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgZGF0YToge30sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXNfLnRleHQgPSBkYXRhLmRhdGEuZGF0YS5tYXAoKGVsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICBlbGUuZG93bnBheW1lbnQgPSBlbGUuZG93bnBheW1lbnQudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5vbkxvYWQoKTtcclxuICAgIFxyXG4gICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gIH1cclxuXHJcbiAgLy8g5Yid5aeL5YyWXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICB0aGlzLmZvb3RJbmRleCA9IC0xO1xyXG4gIH1cclxufVxyXG4iXX0=