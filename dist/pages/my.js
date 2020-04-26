'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _leotable = require('./../components/leotable.js');

var _leotable2 = _interopRequireDefault(_leotable);

var _toastInfo = require('./../components/toastInfo.js');

var _toastInfo2 = _interopRequireDefault(_toastInfo);

var _userinfo_alert = require('./../components/userinfo_alert.js');

var _userinfo_alert2 = _interopRequireDefault(_userinfo_alert);

var _getCoupon = require('./../components/getCoupon.js');

var _getCoupon2 = _interopRequireDefault(_getCoupon);

var _alert = require('./../components/alert.js');

var _alert2 = _interopRequireDefault(_alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My = function (_wepy$page) {
  _inherits(My, _wepy$page);

  function My() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, My);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = My.__proto__ || Object.getPrototypeOf(My)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的'
    }, _this.data = {
      couponInfo: null,
      parent_data: '',
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      text: '',
      // 还款日
      hk_time: '',
      // 还款显示
      huankuan_show: true,
      select: false,
      selected: true,
      // 卡券列表
      coiling: [],
      // 卡券状态
      searchtype: 0,
      // 订单数
      orderNum: 0,
      // 收藏数
      collectionNum: 0,
      // 头像默认
      avatarurl: '',
      // 姓名注册
      nickname: '登录 注册',
      url_link: '',
      // login_token: '',
      isRegist: '',
      loginData: false, // 是否授权
      showLogin: true,
      latestRepaymentDate: 0,
      couponCount: 0,
      deliveryCount: 0
    }, _this.$repeat = {}, _this.$props = { "leotable": { "che_": "image/index_btm_che0.png", "ys_": "image/index_btm_ys0.png", "my_": "image/index_btm_my1.png" }, "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "get_coupon": { "xmlns:v-bind": "", "v-bind:info.once": "couponInfo" } }, _this.$events = { "leotable": { "v-on:childFn": "linkTo" }, "userinfo_alert": { "v-on:childFn": "alert_userinfo" } }, _this.components = {
      leotable: _leotable2.default,
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default,
      get_coupon: _getCoupon2.default,
      toastInfo: _toastInfo2.default
    }, _this.methods = {
      //去个人中心
      goSecLogin: function goSecLogin() {
        this.$navigate('secLogin');
      },
      // 分享
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 个人信息
      myprofile: function myprofile() {
        if (this.isLogin()) {
          wx.navigateTo({
            url: 'myprofile'
          });
        }
      },

      // 我的订单
      wddd: function wddd() {
        if (this.isLogin()) {
          wx.navigateTo({
            url: 'myorder'
          });
        }
      },

      // 收藏车辆
      sccl: function sccl() {
        if (this.isLogin()) {
          wx.navigateTo({
            url: 'myordey'
          });
        }
      },

      // 我的贷款
      repayment: function repayment() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'repayment'
            });
          }
        }
      },

      // 提前还款
      early: function early() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'earlyList'
            });
          }
        }
      },

      //信息变更
      informationChange: function informationChange() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'informationC'
            });
          }
        }
      },

      //结清材料
      settlement: function settlement() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'settlement'
            });
          }
        }
      },

      // 保险赔付
      indemnityPerson: function indemnityPerson() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'indemnityList'
            });
          }
        }
      },

      // 我的卡券
      coupon: function coupon() {
        if (this.isLogin()) {
          if (this.isDzLogin()) {
            wx.navigateTo({
              url: 'coupon'
            });
          }
        }
      },

      // 意见反馈
      opinion: function opinion() {
        if (this.isLogin()) {
          wx.navigateTo({
            url: 'opinion'
          });
        }
      },

      // 帮您贷款
      borrow: function borrow() {
        if (this.isLogin()) {
          wx.navigateTo({
            url: 'choose'
          });
        }
      },

      // 贷款计算器
      calculator: function calculator() {
        wx.navigateTo({
          url: 'calculator'
        });
      },

      // 贷款流程
      loanprocess: function loanprocess() {
        wx.navigateTo({
          url: 'loanprocess'
        });
      },

      // 帮助中心
      help: function help() {
        wx.navigateTo({
          url: 'help'
        });
      },

      // 关于我们
      aboutme: function aboutme() {
        wx.navigateTo({
          url: 'aboutme'
        });
      },
      linkTo: function linkTo(url, evt) {
        this.$redirect(url);
      },
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '400-920-7258' //打电话
        });
      },

      // 授权手机号
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        this_.$invoke('userinfo_alert', 'chufa', false);
        this_.avatarurl = e.detail.userInfo.avatarUrl;
        this_.nickname = e.detail.userInfo.nickName;
        this_.loginData = true;
      },
      select: function select(e) {
        this.searchtype = e.currentTarget.dataset.idd;
        this.getCardList();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(My, [{
    key: 'timeReg',
    value: function timeReg(num) {
      if (num != 0) {
        var date = new Date(num * 1000);

        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
        var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate();
        return M + D;
      } else {
        return 0;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // wx.showLoading({
      //   title: '加载中'
      // });
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      var parent_data = this.$parent.globalData;
      this.parent_data = this.$parent.globalData;
      this_.url_link = this.$parent.globalData.url_link;
      // 判断access_token是否存在
      // 微信接口获取jscode
      wx.login({
        success: function success(res) {
          console.log(res);
          console.log('.....');
          wx.request({
            url: json_link + '/api/wxa/sessionkey?mpid=DZ2018',
            data: {
              jscode: res.code
            },
            success: function success(data) {}
          });
        }
      });
    }
    //显示卡券

  }, {
    key: 'showCoupon',
    value: function showCoupon() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/coupon/user/tip',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        },
        success: function success(res) {
          if (res.data.code == 10001) {
            that.couponInfo = res.data.data;
            that.$broadcast('showCoupon', that.couponInfo);
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }
    // 获取卡券列表

  }, {
    key: 'getCardList',
    value: function getCardList() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/coupon/user/list',
        data: {
          pageNum: 1,
          pageSize: 1000,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId,
          status: 1
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            that.coiling = res.data.data.list;
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }

    //获取还款日和结清材料数量

  }, {
    key: 'getnumShow',
    value: function getnumShow() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/afterLoan/info',
        data: {
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            console.log(res);
            that.couponCount = res.data.data.couponCount;
            that.deliveryCount = res.data.data.deliveryCount;
            that.latestRepaymentDate = that.timeReg(res.data.data.latestRepaymentDate);
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }

    // 返回时页面刷新 订单-收藏的个数

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.PVUVstatistical('my');
      this.parent_data = this.$parent.globalData;
      var this_ = this;
      if (this_.avatarurl == "") {
        this_.avatarurl = this.$parent.globalData.url_link + 'mrtx.png';
      }
      if (this_.parent_data.login_token != '') {
        this_.showLogin = false;
        console.log('这是登录之后的数据' + this_.parent_data.login_token);
        //  this_.showCoupon();
        //  this_.getCardList();
        this_.getnumShow();
      }
      wx.getSetting({
        success: function success(data) {
          console.log('获取setting信息，看是否授权userinfo');
          if (data.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: function success(datas) {
                this_.avatarurl = datas.userInfo.avatarUrl;
                this_.nickname = datas.userInfo.nickName;
                this_.loginData = true;
                this_.$apply();
              }
            });
          }
        },
        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });

          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return false;
        }
      });
    }

    // 判断是否授权登陆

  }, {
    key: 'isLogin',
    value: function isLogin() {
      var this_ = this;
      if (!this_.loginData) {
        wx.getSetting({
          success: function success(data) {
            console.log('获取setting信息，看是否授权userinfo');
            if (data.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function success(datas) {
                  this_.avatarurl = datas.userInfo.avatarUrl;
                  this_.nickname = datas.userInfo.nickName;
                  this_.loginData = true;
                  this_.$apply();
                }
              });
              return true;
            } else {
              this_.$invoke('userinfo_alert', 'chufa', true);
              return false;
            }
          },
          fail: function fail() {
            wx.showToast({
              title: '网络异常',
              icon: 'none'
            });

            setTimeout(function () {
              wx.hideToast();
            }, 2000);
            return false;
          }
        });
      } else {
        return true;
      }
    }
  }, {
    key: 'isDzLogin',
    value: function isDzLogin() {
      if (this.$parent.globalData.login_token === '') {
        wx.navigateTo({
          url: 'secLogin'
        });
        return false;
      } else {
        return true;
      }
    }

    // 初始化

  }, {
    key: 'init',
    value: function init() {
      var are = this;
      are.text = '',
      // 还款日
      are.hk_time = '',
      // 还款显示
      are.huankuan_show = true, are.select = false, are.selected = true,
      // 卡券列表
      are.coiling = '',
      // 卡券状态
      are.searchtype = 0,
      // 订单数
      are.orderNum = 0,
      // 收藏数
      are.collectionNum = 0,
      // 头像默认
      are.avatarurl = are.parent_data.url_link + 'mrtx.png',
      // 姓名注册
      are.nickname = '登录 注册';
    }
  }]);

  return My;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(My , 'pages/my'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LmpzIl0sIm5hbWVzIjpbIk15IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb3Vwb25JbmZvIiwicGFyZW50X2RhdGEiLCJjYW5JVXNlIiwid3giLCJ0ZXh0IiwiaGtfdGltZSIsImh1YW5rdWFuX3Nob3ciLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNvaWxpbmciLCJzZWFyY2h0eXBlIiwib3JkZXJOdW0iLCJjb2xsZWN0aW9uTnVtIiwiYXZhdGFydXJsIiwibmlja25hbWUiLCJ1cmxfbGluayIsImlzUmVnaXN0IiwibG9naW5EYXRhIiwic2hvd0xvZ2luIiwibGF0ZXN0UmVwYXltZW50RGF0ZSIsImNvdXBvbkNvdW50IiwiZGVsaXZlcnlDb3VudCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxlb3RhYmxlIiwiTGVvdGFibGUiLCJ1c2VyaW5mb19hbGVydCIsIlVzZXJpbmZvX2FsZXJ0IiwiYWxlcnRfbCIsIkFsZXJ0IiwiZ2V0X2NvdXBvbiIsIkdldENvdXBvbiIsInRvYXN0SW5mbyIsIm1ldGhvZHMiLCJnb1NlY0xvZ2luIiwiJG5hdmlnYXRlIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwibXlwcm9maWxlIiwiaXNMb2dpbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ3ZGRkIiwic2NjbCIsInJlcGF5bWVudCIsImlzRHpMb2dpbiIsImVhcmx5IiwiaW5mb3JtYXRpb25DaGFuZ2UiLCJzZXR0bGVtZW50IiwiaW5kZW1uaXR5UGVyc29uIiwiY291cG9uIiwib3BpbmlvbiIsImJvcnJvdyIsImNhbGN1bGF0b3IiLCJsb2FucHJvY2VzcyIsImhlbHAiLCJhYm91dG1lIiwibGlua1RvIiwiZXZ0IiwiJHJlZGlyZWN0IiwidGFwX3RlbCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsImFsZXJ0X3VzZXJpbmZvIiwiZSIsInRoaXNfIiwiJGludm9rZSIsImRldGFpbCIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImlkZCIsImdldENhcmRMaXN0IiwibnVtIiwiZGF0ZSIsIkRhdGUiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImpzb25fbGluayIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsInJlcXVlc3QiLCJqc2NvZGUiLCJjb2RlIiwidGhhdCIsImpzb25fZGhMaW5rIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwiJGJyb2FkY2FzdCIsIiRhcHBseSIsIm1zZyIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInN0YXR1cyIsImxpc3QiLCJ0aW1lUmVnIiwiUFZVVnN0YXRpc3RpY2FsIiwiZ2V0bnVtU2hvdyIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiZGF0YXMiLCJmYWlsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsImFyZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsRTs7Ozs7Ozs7Ozs7Ozs7OEtBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGtCQUFXLElBRE47QUFFTEMsbUJBQVksRUFGUDtBQUdMQyxlQUFTQyxHQUFHRCxPQUFILENBQVcsOEJBQVgsQ0FISjtBQUlMRSxZQUFNLEVBSkQ7QUFLTDtBQUNBQyxlQUFTLEVBTko7QUFPTDtBQUNBQyxxQkFBZSxJQVJWO0FBU0xDLGNBQVEsS0FUSDtBQVVMQyxnQkFBVSxJQVZMO0FBV0w7QUFDQUMsZUFBUyxFQVpKO0FBYUw7QUFDQUMsa0JBQVksQ0FkUDtBQWVMO0FBQ0FDLGdCQUFTLENBaEJKO0FBaUJMO0FBQ0FDLHFCQUFjLENBbEJUO0FBbUJMO0FBQ0FDLGlCQUFVLEVBcEJMO0FBcUJMO0FBQ0FDLGdCQUFTLE9BdEJKO0FBdUJMQyxnQkFBUyxFQXZCSjtBQXdCTDtBQUNBQyxnQkFBVSxFQXpCTDtBQTBCTEMsaUJBQVcsS0ExQk4sRUEwQmE7QUFDbEJDLGlCQUFXLElBM0JOO0FBNEJMQywyQkFBb0IsQ0E1QmY7QUE2QkxDLG1CQUFZLENBN0JQO0FBOEJMQyxxQkFBYztBQTlCVCxLLFFBaUNSQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsUUFBTywwQkFBUixFQUFtQyxPQUFNLHlCQUF6QyxFQUFtRSxPQUFNLHlCQUF6RSxFQUFaLEVBQWdILGtCQUFpQixFQUFDLGNBQWEsRUFBZCxFQUFpQixZQUFXLFlBQTVCLEVBQWpJLEVBQTJLLGNBQWEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixvQkFBbUIsWUFBdEMsRUFBeEwsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsUUFBaEIsRUFBWixFQUFzQyxrQkFBaUIsRUFBQyxnQkFBZSxnQkFBaEIsRUFBdkQsRSxRQUNUQyxVLEdBQWE7QUFDVkMsZ0JBQVVDLGtCQURBO0FBRVZDLHNCQUFnQkMsd0JBRk47QUFHVkMsZUFBU0MsZUFIQztBQUlWQyxrQkFBWUMsbUJBSkY7QUFLVkMsaUJBQVdBO0FBTEQsSyxRQU9aQyxPLEdBQVU7QUFDUjtBQUNBQyxrQkFBWSxzQkFBWTtBQUN0QixhQUFLQyxTQUFMLENBQWUsVUFBZjtBQUNELE9BSk87QUFLUjtBQUNBQyx5QkFBbUIsNkJBQVc7QUFDNUIsZUFBTztBQUNMQyxnQkFBTTtBQURELFNBQVA7QUFHRCxPQVZPO0FBV1I7QUFDQUMsZUFaUSx1QkFZSTtBQUNWLFlBQUksS0FBS0MsT0FBTCxFQUFKLEVBQW9CO0FBQ2xCdEMsYUFBR3VDLFVBQUgsQ0FBYztBQUNaQyxpQkFBSztBQURPLFdBQWQ7QUFHRDtBQUNGLE9BbEJPOztBQW1CUjtBQUNBQyxVQXBCUSxrQkFvQkQ7QUFDTCxZQUFJLEtBQUtILE9BQUwsRUFBSixFQUFvQjtBQUNsQnRDLGFBQUd1QyxVQUFILENBQWM7QUFDWkMsaUJBQUs7QUFETyxXQUFkO0FBR0Q7QUFDRixPQTFCTzs7QUEyQlI7QUFDQUUsVUE1QlEsa0JBNEJEO0FBQ0wsWUFBSSxLQUFLSixPQUFMLEVBQUosRUFBb0I7QUFDbEJ0QyxhQUFHdUMsVUFBSCxDQUFjO0FBQ1pDLGlCQUFLO0FBRE8sV0FBZDtBQUdEO0FBQ0YsT0FsQ087O0FBbUNSO0FBQ0FHLGVBcENRLHVCQW9DSTtBQUNWLFlBQUksS0FBS0wsT0FBTCxFQUFKLEVBQW9CO0FBQ2xCLGNBQUksS0FBS00sU0FBTCxFQUFKLEVBQXNCO0FBQ3BCNUMsZUFBR3VDLFVBQUgsQ0FBYztBQUNaQyxtQkFBSztBQURPLGFBQWQ7QUFHRDtBQUNGO0FBQ0YsT0E1Q087O0FBNkNSO0FBQ0FLLFdBOUNRLG1CQThDQTtBQUNOLFlBQUksS0FBS1AsT0FBTCxFQUFKLEVBQW9CO0FBQ2xCLGNBQUksS0FBS00sU0FBTCxFQUFKLEVBQXNCO0FBQ3BCNUMsZUFBR3VDLFVBQUgsQ0FBYztBQUNaQyxtQkFBSztBQURPLGFBQWQ7QUFHRDtBQUNGO0FBQ0YsT0F0RE87O0FBdURSO0FBQ0FNLHVCQXhEUSwrQkF3RFc7QUFDckIsWUFBSSxLQUFLUixPQUFMLEVBQUosRUFBb0I7QUFDZCxjQUFJLEtBQUtNLFNBQUwsRUFBSixFQUFzQjtBQUNwQjVDLGVBQUd1QyxVQUFILENBQWM7QUFDWkMsbUJBQUs7QUFETyxhQUFkO0FBR0Q7QUFDRjtBQUNGLE9BaEVPOztBQWlFUjtBQUNBTyxnQkFsRVEsd0JBa0VLO0FBQ1gsWUFBSSxLQUFLVCxPQUFMLEVBQUosRUFBb0I7QUFDbEIsY0FBSSxLQUFLTSxTQUFMLEVBQUosRUFBc0I7QUFDcEI1QyxlQUFHdUMsVUFBSCxDQUFjO0FBQ1pDLG1CQUFLO0FBRE8sYUFBZDtBQUdEO0FBQ0Y7QUFDRixPQTFFTzs7QUEyRVI7QUFDQVEscUJBNUVRLDZCQTRFVTtBQUNoQixZQUFJLEtBQUtWLE9BQUwsRUFBSixFQUFvQjtBQUNsQixjQUFJLEtBQUtNLFNBQUwsRUFBSixFQUFzQjtBQUNwQjVDLGVBQUd1QyxVQUFILENBQWM7QUFDWkMsbUJBQUs7QUFETyxhQUFkO0FBR0Q7QUFDRjtBQUNGLE9BcEZPOztBQXFGUjtBQUNBUyxZQXRGUSxvQkFzRkM7QUFDUCxZQUFJLEtBQUtYLE9BQUwsRUFBSixFQUFvQjtBQUNsQixjQUFJLEtBQUtNLFNBQUwsRUFBSixFQUFzQjtBQUNwQjVDLGVBQUd1QyxVQUFILENBQWM7QUFDWkMsbUJBQUs7QUFETyxhQUFkO0FBR0Q7QUFDRjtBQUNGLE9BOUZPOztBQStGUjtBQUNBVSxhQWhHUSxxQkFnR0U7QUFDUixZQUFJLEtBQUtaLE9BQUwsRUFBSixFQUFvQjtBQUNsQnRDLGFBQUd1QyxVQUFILENBQWM7QUFDWkMsaUJBQUs7QUFETyxXQUFkO0FBR0Q7QUFDRixPQXRHTzs7QUF1R1I7QUFDQVcsWUF4R1Esb0JBd0dDO0FBQ1AsWUFBSSxLQUFLYixPQUFMLEVBQUosRUFBb0I7QUFDbEJ0QyxhQUFHdUMsVUFBSCxDQUFjO0FBQ1pDLGlCQUFLO0FBRE8sV0FBZDtBQUdEO0FBQ0YsT0E5R087O0FBK0dSO0FBQ0FZLGdCQWhIUSx3QkFnSEs7QUFDWHBELFdBQUd1QyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQXBITzs7QUFxSFI7QUFDQWEsaUJBdEhRLHlCQXNITTtBQUNackQsV0FBR3VDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdELE9BMUhPOztBQTJIUjtBQUNBYyxVQTVIUSxrQkE0SEQ7QUFDTHRELFdBQUd1QyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQWhJTzs7QUFpSVI7QUFDQWUsYUFsSVEscUJBa0lFO0FBQ1J2RCxXQUFHdUMsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0F0SU87QUF1SVJnQixZQXZJUSxrQkF1SURoQixHQXZJQyxFQXVJSWlCLEdBdklKLEVBdUlTO0FBQ2YsYUFBS0MsU0FBTCxDQUFlbEIsR0FBZjtBQUNELE9BeklPO0FBMElSbUIsYUExSVEscUJBMElFO0FBQ1IzRCxXQUFHNEQsYUFBSCxDQUFpQjtBQUNmQyx1QkFBYSxjQURFLENBQ2E7QUFEYixTQUFqQjtBQUdELE9BOUlPOztBQStJUjtBQUNBQyxvQkFoSlEsMEJBZ0pPQyxDQWhKUCxFQWdKVTtBQUNoQixZQUFJQyxRQUFRLElBQVo7QUFDQUEsY0FBTUMsT0FBTixDQUFjLGdCQUFkLEVBQWdDLE9BQWhDLEVBQXlDLEtBQXpDO0FBQ0FELGNBQU10RCxTQUFOLEdBQWtCcUQsRUFBRUcsTUFBRixDQUFTQyxRQUFULENBQWtCQyxTQUFwQztBQUNBSixjQUFNckQsUUFBTixHQUFpQm9ELEVBQUVHLE1BQUYsQ0FBU0MsUUFBVCxDQUFrQkUsUUFBbkM7QUFDQUwsY0FBTWxELFNBQU4sR0FBa0IsSUFBbEI7QUFDRCxPQXRKTztBQXVKUlYsWUF2SlEsa0JBdUpEMkQsQ0F2SkMsRUF1SkU7QUFDUixhQUFLeEQsVUFBTCxHQUFrQndELEVBQUVPLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxHQUExQztBQUNBLGFBQUtDLFdBQUw7QUFDRDtBQTFKTyxLOzs7Ozs0QkE0SkZDLEcsRUFBSztBQUNaLFVBQUdBLE9BQUssQ0FBUixFQUFVO0FBQ1QsWUFBSUMsT0FBTyxJQUFJQyxJQUFKLENBQVNGLE1BQU0sSUFBZixDQUFYOztBQUVJLFlBQUlHLElBQUksQ0FBQ0YsS0FBS0csUUFBTCxLQUFnQixDQUFoQixHQUFvQixFQUFwQixHQUF5QixPQUFLSCxLQUFLRyxRQUFMLEtBQWdCLENBQXJCLENBQXpCLEdBQW1ESCxLQUFLRyxRQUFMLEtBQWdCLENBQXBFLElBQXlFLEdBQWpGO0FBQ0EsWUFBSUMsSUFBSUosS0FBS0ssT0FBTCxLQUFpQixFQUFqQixHQUFzQixNQUFNTCxLQUFLSyxPQUFMLEVBQU4sR0FBd0IsR0FBOUMsR0FBc0RMLEtBQUtLLE9BQUwsRUFBOUQ7QUFDQSxlQUFPSCxJQUFFRSxDQUFUO0FBQ0osT0FORCxNQU1LO0FBQ0gsZUFBTyxDQUFQO0FBQ0Q7QUFFQzs7OzZCQUNNO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBSWYsUUFBUSxJQUFaO0FBQ0EsVUFBSWlCLFlBQVksS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCRixTQUF4QztBQUNBLFVBQUluRixjQUFjLEtBQUtvRixPQUFMLENBQWFDLFVBQS9CO0FBQ0EsV0FBS3JGLFdBQUwsR0FBbUIsS0FBS29GLE9BQUwsQ0FBYUMsVUFBaEM7QUFDQW5CLFlBQU1wRCxRQUFOLEdBQWlCLEtBQUtzRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0J2RSxRQUF6QztBQUNBO0FBQ0E7QUFDQVosU0FBR29GLEtBQUgsQ0FBUztBQUNQQyxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxrQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBeEYsYUFBR3lGLE9BQUgsQ0FBVztBQUNUakQsaUJBQUt5QyxZQUFZLGlDQURSO0FBRVRyRixrQkFBTTtBQUNKOEYsc0JBQVFKLElBQUlLO0FBRFIsYUFGRztBQUtUTixtQkFMUyxtQkFLRHpGLElBTEMsRUFLSyxDQUFFO0FBTFAsV0FBWDtBQU9EO0FBWE0sT0FBVDtBQWFEO0FBQ0Q7Ozs7aUNBQ2M7QUFDWixVQUFJZ0csT0FBTyxJQUFYO0FBQ0E1RixTQUFHeUYsT0FBSCxDQUFXO0FBQ1RqRCxhQUFLb0QsS0FBSzlGLFdBQUwsQ0FBaUIrRixXQUFqQixHQUErQixrQkFEM0I7QUFFVGpHLGNBQU07QUFDSmtHLGtCQUFRRixLQUFLOUYsV0FBTCxDQUFpQmlHLFlBRHJCO0FBRUpDLHNCQUFZSixLQUFLOUYsV0FBTCxDQUFpQm1HO0FBRnpCLFNBRkc7QUFNVFosZUFOUyxtQkFNREMsR0FOQyxFQU1JO0FBQ1gsY0FBR0EsSUFBSTFGLElBQUosQ0FBUytGLElBQVQsSUFBaUIsS0FBcEIsRUFBMkI7QUFDekJDLGlCQUFLL0YsVUFBTCxHQUFrQnlGLElBQUkxRixJQUFKLENBQVNBLElBQTNCO0FBQ0FnRyxpQkFBS00sVUFBTCxDQUFnQixZQUFoQixFQUE4Qk4sS0FBSy9GLFVBQW5DO0FBQ0ErRixpQkFBS08sTUFBTDtBQUNELFdBSkQsTUFJTztBQUNMUCxpQkFBSzNCLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFdBQTFCLEVBQXVDcUIsSUFBSTFGLElBQUosQ0FBUytGLElBQWhELEVBQXNETCxJQUFJMUYsSUFBSixDQUFTd0csR0FBL0Q7QUFDRDtBQUNGO0FBZFEsT0FBWDtBQWdCRDtBQUNEOzs7O2tDQUNjO0FBQ1osVUFBSVIsT0FBTyxJQUFYO0FBQ0E1RixTQUFHeUYsT0FBSCxDQUFXO0FBQ1RqRCxhQUFLb0QsS0FBSzlGLFdBQUwsQ0FBaUIrRixXQUFqQixHQUErQixtQkFEM0I7QUFFVGpHLGNBQU07QUFDSnlHLG1CQUFTLENBREw7QUFFSkMsb0JBQVUsSUFGTjtBQUdKTixzQkFBWUosS0FBSzlGLFdBQUwsQ0FBaUJtRyxXQUh6QjtBQUlKSCxrQkFBUUYsS0FBSzlGLFdBQUwsQ0FBaUJpRyxZQUpyQjtBQUtKUSxrQkFBTztBQUxILFNBRkc7QUFTVGxCLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsY0FBSUEsSUFBSTFGLElBQUosQ0FBUytGLElBQVQsSUFBaUIsT0FBckIsRUFBOEI7QUFDNUJDLGlCQUFLdEYsT0FBTCxHQUFlZ0YsSUFBSTFGLElBQUosQ0FBU0EsSUFBVCxDQUFjNEcsSUFBN0I7QUFDQVosaUJBQUtPLE1BQUw7QUFDRCxXQUhELE1BR087QUFDTFAsaUJBQUszQixPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q3FCLElBQUkxRixJQUFKLENBQVMrRixJQUFoRCxFQUFzREwsSUFBSTFGLElBQUosQ0FBU3dHLEdBQS9EO0FBQ0Q7QUFDRjtBQWhCUSxPQUFYO0FBa0JEOztBQUVIOzs7O2lDQUNZO0FBQ1YsVUFBSVIsT0FBSyxJQUFUO0FBQ0k1RixTQUFHeUYsT0FBSCxDQUFXO0FBQ1hqRCxhQUFLb0QsS0FBSzlGLFdBQUwsQ0FBaUIrRixXQUFqQixHQUErQixpQkFEekI7QUFFWGpHLGNBQU07QUFDSm9HLHNCQUFZSixLQUFLOUYsV0FBTCxDQUFpQm1HLFdBRHpCO0FBRURILGtCQUFRRixLQUFLOUYsV0FBTCxDQUFpQmlHO0FBRnhCLFNBRks7QUFNWFYsaUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUN0QixjQUFJQSxJQUFJMUYsSUFBSixDQUFTK0YsSUFBVCxJQUFpQixPQUFyQixFQUE4QjtBQUM3Qkosb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBTSxpQkFBSzNFLFdBQUwsR0FBaUJxRSxJQUFJMUYsSUFBSixDQUFTQSxJQUFULENBQWNxQixXQUEvQjtBQUNBMkUsaUJBQUsxRSxhQUFMLEdBQW1Cb0UsSUFBSTFGLElBQUosQ0FBU0EsSUFBVCxDQUFjc0IsYUFBakM7QUFDQTBFLGlCQUFLNUUsbUJBQUwsR0FBeUI0RSxLQUFLYSxPQUFMLENBQWFuQixJQUFJMUYsSUFBSixDQUFTQSxJQUFULENBQWNvQixtQkFBM0IsQ0FBekI7QUFDQSxXQUxELE1BS087QUFDTDRFLGlCQUFLM0IsT0FBTCxDQUFhLFdBQWIsRUFBMEIsV0FBMUIsRUFBdUNxQixJQUFJMUYsSUFBSixDQUFTK0YsSUFBaEQsRUFBc0RMLElBQUkxRixJQUFKLENBQVN3RyxHQUEvRDtBQUNEO0FBQ0Y7QUFmVSxPQUFYO0FBaUJMOztBQUVEOzs7OzZCQUNXO0FBQ1AsV0FBS2xCLE9BQUwsQ0FBYXdCLGVBQWIsQ0FBNkIsSUFBN0I7QUFDQyxXQUFLNUcsV0FBTCxHQUFtQixLQUFLb0YsT0FBTCxDQUFhQyxVQUFoQztBQUNBLFVBQUluQixRQUFRLElBQVo7QUFDQSxVQUFHQSxNQUFNdEQsU0FBTixJQUFpQixFQUFwQixFQUF1QjtBQUNyQnNELGNBQU10RCxTQUFOLEdBQWdCLEtBQUt3RSxPQUFMLENBQWFDLFVBQWIsQ0FBd0J2RSxRQUF4QixHQUFpQyxVQUFqRDtBQUNEO0FBQ0QsVUFBR29ELE1BQU1sRSxXQUFOLENBQWtCbUcsV0FBbEIsSUFBaUMsRUFBcEMsRUFBd0M7QUFDdENqQyxjQUFNakQsU0FBTixHQUFrQixLQUFsQjtBQUNBd0UsZ0JBQVFDLEdBQVIsQ0FBWSxjQUFjeEIsTUFBTWxFLFdBQU4sQ0FBa0JtRyxXQUE1QztBQUNEO0FBQ0E7QUFDQ2pDLGNBQU0yQyxVQUFOO0FBQ0Q7QUFDRjNHLFNBQUc0RyxVQUFILENBQWM7QUFDWnZCLGlCQUFTLGlCQUFTekYsSUFBVCxFQUFlO0FBQ3RCMkYsa0JBQVFDLEdBQVIsQ0FBWSwyQkFBWjtBQUNBLGNBQUk1RixLQUFLaUgsV0FBTCxDQUFpQixnQkFBakIsQ0FBSixFQUF3QztBQUN0QztBQUNBN0csZUFBRzhHLFdBQUgsQ0FBZTtBQUNiekIsdUJBQVMsaUJBQVMwQixLQUFULEVBQWdCO0FBQ3ZCL0Msc0JBQU10RCxTQUFOLEdBQWtCcUcsTUFBTTVDLFFBQU4sQ0FBZUMsU0FBakM7QUFDQUosc0JBQU1yRCxRQUFOLEdBQWlCb0csTUFBTTVDLFFBQU4sQ0FBZUUsUUFBaEM7QUFDQUwsc0JBQU1sRCxTQUFOLEdBQWtCLElBQWxCO0FBQ0FrRCxzQkFBTW1DLE1BQU47QUFDRDtBQU5ZLGFBQWY7QUFRRDtBQUNGLFNBZFc7QUFlWmEsY0FBTSxnQkFBVztBQUNmaEgsYUFBR2lILFNBQUgsQ0FBYTtBQUNYQyxtQkFBTyxNQURJO0FBRVhDLGtCQUFNO0FBRkssV0FBYjs7QUFLQUMscUJBQVcsWUFBVztBQUNwQnBILGVBQUdxSCxTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQSxpQkFBTyxLQUFQO0FBQ0Q7QUF6QlcsT0FBZDtBQTJCRDs7QUFFRDs7Ozs4QkFDVTtBQUNSLFVBQUlyRCxRQUFRLElBQVo7QUFDQSxVQUFJLENBQUNBLE1BQU1sRCxTQUFYLEVBQXNCO0FBQ3BCZCxXQUFHNEcsVUFBSCxDQUFjO0FBQ1p2QixtQkFBUyxpQkFBU3pGLElBQVQsRUFBZTtBQUN0QjJGLG9CQUFRQyxHQUFSLENBQVksMkJBQVo7QUFDQSxnQkFBSTVGLEtBQUtpSCxXQUFMLENBQWlCLGdCQUFqQixDQUFKLEVBQXdDO0FBQ3RDO0FBQ0E3RyxpQkFBRzhHLFdBQUgsQ0FBZTtBQUNiekIseUJBQVMsaUJBQVMwQixLQUFULEVBQWdCO0FBQ3ZCL0Msd0JBQU10RCxTQUFOLEdBQWtCcUcsTUFBTTVDLFFBQU4sQ0FBZUMsU0FBakM7QUFDQUosd0JBQU1yRCxRQUFOLEdBQWlCb0csTUFBTTVDLFFBQU4sQ0FBZUUsUUFBaEM7QUFDQUwsd0JBQU1sRCxTQUFOLEdBQWtCLElBQWxCO0FBQ0FrRCx3QkFBTW1DLE1BQU47QUFDRDtBQU5ZLGVBQWY7QUFRQSxxQkFBTyxJQUFQO0FBQ0QsYUFYRCxNQVdPO0FBQ0xuQyxvQkFBTUMsT0FBTixDQUFjLGdCQUFkLEVBQWdDLE9BQWhDLEVBQXlDLElBQXpDO0FBQ0EscUJBQU8sS0FBUDtBQUNEO0FBQ0YsV0FsQlc7QUFtQlorQyxnQkFBTSxnQkFBVztBQUNmaEgsZUFBR2lILFNBQUgsQ0FBYTtBQUNYQyxxQkFBTyxNQURJO0FBRVhDLG9CQUFNO0FBRkssYUFBYjs7QUFLQUMsdUJBQVcsWUFBVztBQUNwQnBILGlCQUFHcUgsU0FBSDtBQUNELGFBRkQsRUFFRyxJQUZIO0FBR0EsbUJBQU8sS0FBUDtBQUNEO0FBN0JXLFNBQWQ7QUErQkQsT0FoQ0QsTUFnQ087QUFDTCxlQUFPLElBQVA7QUFDRDtBQUNGOzs7Z0NBQ1k7QUFDWCxVQUFJLEtBQUtuQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JjLFdBQXhCLEtBQXdDLEVBQTVDLEVBQWdEO0FBQzlDakcsV0FBR3VDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdBLGVBQU8sS0FBUDtBQUNELE9BTEQsTUFLTztBQUNMLGVBQU8sSUFBUDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7MkJBQ087QUFDTCxVQUFJOEUsTUFBTSxJQUFWO0FBQ0dBLFVBQUtySCxJQUFMLEdBQVksRUFBWjtBQUNIO0FBQ0FxSCxVQUFJcEgsT0FBSixHQUFjLEVBRlg7QUFHSDtBQUNBb0gsVUFBSW5ILGFBQUosR0FBcUIsSUFKbEIsRUFLSG1ILElBQUlsSCxNQUFKLEdBQWMsS0FMWCxFQU1Ia0gsSUFBSWpILFFBQUosR0FBZ0IsSUFOYjtBQU9IO0FBQ0FpSCxVQUFJaEgsT0FBSixHQUFlLEVBUlo7QUFTSDtBQUNBZ0gsVUFBSS9HLFVBQUosR0FBa0IsQ0FWZjtBQVdIO0FBQ0ErRyxVQUFJOUcsUUFBSixHQUFlLENBWlo7QUFhSDtBQUNBOEcsVUFBSTdHLGFBQUosR0FBb0IsQ0FkakI7QUFlSDtBQUNBNkcsVUFBSTVHLFNBQUosR0FBZTRHLElBQUl4SCxXQUFKLENBQWdCYyxRQUFoQixHQUF5QixVQWhCckM7QUFpQkg7QUFDRDBHLFVBQUkzRyxRQUFKLEdBQWUsT0FsQlg7QUFtQko7Ozs7RUFyYTZCNEcsZUFBS0MsSTs7a0JBQWhCL0gsRSIsImZpbGUiOiJteS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IExlb3RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGVvdGFibGUnO1xyXG5pbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBHZXRDb3Vwb24gZnJvbSAnLi4vY29tcG9uZW50cy9nZXRDb3Vwb24nXHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIGNvdXBvbkluZm86bnVsbCxcclxuICAgIHBhcmVudF9kYXRhOicnLFxyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgdGV4dDogJycsXHJcbiAgICAvLyDov5jmrL7ml6VcclxuICAgIGhrX3RpbWU6ICcnLFxyXG4gICAgLy8g6L+Y5qy+5pi+56S6XHJcbiAgICBodWFua3Vhbl9zaG93OiB0cnVlLFxyXG4gICAgc2VsZWN0OiBmYWxzZSxcclxuICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgLy8g5Y2h5Yi45YiX6KGoXHJcbiAgICBjb2lsaW5nOiBbXSxcclxuICAgIC8vIOWNoeWIuOeKtuaAgVxyXG4gICAgc2VhcmNodHlwZTogMCxcclxuICAgIC8vIOiuouWNleaVsFxyXG4gICAgb3JkZXJOdW06MCxcclxuICAgIC8vIOaUtuiXj+aVsFxyXG4gICAgY29sbGVjdGlvbk51bTowLFxyXG4gICAgLy8g5aS05YOP6buY6K6kXHJcbiAgICBhdmF0YXJ1cmw6JycsXHJcbiAgICAvLyDlp5PlkI3ms6jlhoxcclxuICAgIG5pY2tuYW1lOifnmbvlvZUg5rOo5YaMJyxcclxuICAgIHVybF9saW5rOicnLFxyXG4gICAgLy8gbG9naW5fdG9rZW46ICcnLFxyXG4gICAgaXNSZWdpc3Q6ICcnLFxyXG4gICAgbG9naW5EYXRhOiBmYWxzZSwgLy8g5piv5ZCm5o6I5p2DXHJcbiAgICBzaG93TG9naW46IHRydWUsXHJcbiAgICBsYXRlc3RSZXBheW1lbnREYXRlOjAsXHJcbiAgICBjb3Vwb25Db3VudDowLFxyXG4gICAgZGVsaXZlcnlDb3VudDowXHJcbiAgfTtcclxuXHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxlb3RhYmxlXCI6e1wiY2hlX1wiOlwiaW1hZ2UvaW5kZXhfYnRtX2NoZTAucG5nXCIsXCJ5c19cIjpcImltYWdlL2luZGV4X2J0bV95czAucG5nXCIsXCJteV9cIjpcImltYWdlL2luZGV4X2J0bV9teTEucG5nXCJ9LFwidXNlcmluZm9fYWxlcnRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPnmbvlvZVcIn0sXCJnZXRfY291cG9uXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbmZvLm9uY2VcIjpcImNvdXBvbkluZm9cIn19O1xyXG4kZXZlbnRzID0ge1wibGVvdGFibGVcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImxpbmtUb1wifSxcInVzZXJpbmZvX2FsZXJ0XCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF91c2VyaW5mb1wifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgbGVvdGFibGU6IExlb3RhYmxlLFxyXG4gICAgdXNlcmluZm9fYWxlcnQ6IFVzZXJpbmZvX2FsZXJ0LFxyXG4gICAgYWxlcnRfbDogQWxlcnQsXHJcbiAgICBnZXRfY291cG9uOiBHZXRDb3Vwb24sXHJcbiAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8v5Y675Liq5Lq65Lit5b+DXHJcbiAgICBnb1NlY0xvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5hdmlnYXRlKCdzZWNMb2dpbicpO1xyXG4gICAgfSxcclxuICAgIC8vIOWIhuS6q1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8g5Liq5Lq65L+h5oGvXHJcbiAgICBteXByb2ZpbGUoKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9naW4oKSkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnbXlwcm9maWxlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5oiR55qE6K6i5Y2VXHJcbiAgICB3ZGRkKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2luKCkpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJ215b3JkZXInXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDmlLbol4/ovabovoZcclxuICAgIHNjY2woKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9naW4oKSkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnbXlvcmRleSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOi0t+asvlxyXG4gICAgcmVwYXltZW50KCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2luKCkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0R6TG9naW4oKSkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ3JlcGF5bWVudCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOaPkOWJjei/mOasvlxyXG4gICAgZWFybHkoKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9naW4oKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHpMb2dpbigpKSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnZWFybHlMaXN0J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/kv6Hmga/lj5jmm7RcclxuICAgIGluZm9ybWF0aW9uQ2hhbmdlKCl7XHJcbiAgaWYgKHRoaXMuaXNMb2dpbigpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEekxvZ2luKCkpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdpbmZvcm1hdGlvbkMnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+e7k+a4headkOaWmVxyXG4gICAgc2V0dGxlbWVudCgpIHtcclxuICAgICAgaWYgKHRoaXMuaXNMb2dpbigpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEekxvZ2luKCkpIHtcclxuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdzZXR0bGVtZW50J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5L+d6Zmp6LWU5LuYXHJcbiAgICBpbmRlbW5pdHlQZXJzb24oKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9naW4oKSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRHpMb2dpbigpKSB7XHJcbiAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnaW5kZW1uaXR5TGlzdCdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOaIkeeahOWNoeWIuFxyXG4gICAgY291cG9uKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0xvZ2luKCkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0R6TG9naW4oKSkge1xyXG4gICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ2NvdXBvbidcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOaEj+ingeWPjemmiFxyXG4gICAgb3BpbmlvbigpIHtcclxuICAgICAgaWYgKHRoaXMuaXNMb2dpbigpKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdvcGluaW9uJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5biu5oKo6LS35qy+XHJcbiAgICBib3Jyb3coKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTG9naW4oKSkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnY2hvb3NlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g6LS35qy+6K6h566X5ZmoXHJcbiAgICBjYWxjdWxhdG9yKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdjYWxjdWxhdG9yJ1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDotLfmrL7mtYHnqItcclxuICAgIGxvYW5wcm9jZXNzKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdsb2FucHJvY2VzcydcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5biu5Yqp5Lit5b+DXHJcbiAgICBoZWxwKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdoZWxwJ1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDlhbPkuo7miJHku6xcclxuICAgIGFib3V0bWUoKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ2Fib3V0bWUnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGxpbmtUbyh1cmwsIGV2dCkge1xyXG4gICAgICB0aGlzLiRyZWRpcmVjdCh1cmwpO1xyXG4gICAgfSxcclxuICAgIHRhcF90ZWwoKSB7XHJcbiAgICAgIHd4Lm1ha2VQaG9uZUNhbGwoe1xyXG4gICAgICAgIHBob25lTnVtYmVyOiAnNDAwLTkyMC03MjU4JyAvL+aJk+eUteivnVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmjojmnYPmiYvmnLrlj7dcclxuICAgIGFsZXJ0X3VzZXJpbmZvKGUpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIHRoaXNfLmF2YXRhcnVybCA9IGUuZGV0YWlsLnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgdGhpc18ubmlja25hbWUgPSBlLmRldGFpbC51c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgdGhpc18ubG9naW5EYXRhID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3QoZSkge1xyXG4gICAgICB0aGlzLnNlYXJjaHR5cGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZGQ7XHJcbiAgICAgIHRoaXMuZ2V0Q2FyZExpc3QoKTtcclxuICAgIH1cclxuICB9O1xyXG4gdGltZVJlZyAobnVtKSB7XHJcbiAgIGlmKG51bSE9MCl7XHJcbiAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG51bSAqIDEwMDApO1xyXG4gICAgICBcclxuICAgICAgICBsZXQgTSA9IChkYXRlLmdldE1vbnRoKCkrMSA8IDEwID8gJzAnKyhkYXRlLmdldE1vbnRoKCkrMSkgOiBkYXRlLmdldE1vbnRoKCkrMSkgKyAnLyc7XHJcbiAgICAgICAgbGV0IEQgPSBkYXRlLmdldERhdGUoKSA8IDEwPyAoJzAnKyAoZGF0ZS5nZXREYXRlKCkpICsgJyAnKSA6IChkYXRlLmdldERhdGUoKSk7XHJcbiAgICAgICAgcmV0dXJuIE0rRDtcclxuICAgfWVsc2V7XHJcbiAgICAgcmV0dXJuIDBcclxuICAgfVxyXG4gICAgXHJcbiAgICB9O1xyXG4gIG9uTG9hZCgpIHtcclxuICAgIC8vIHd4LnNob3dMb2FkaW5nKHtcclxuICAgIC8vICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAvLyB9KTtcclxuICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB0aGlzXy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgLy8g5Yik5patYWNjZXNzX3Rva2Vu5piv5ZCm5a2Y5ZyoXHJcbiAgICAvLyDlvq7kv6HmjqXlj6Pojrflj5Zqc2NvZGVcclxuICAgIHd4LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCcuLi4uLicpXHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YS9zZXNzaW9ua2V5P21waWQ9RFoyMDE4JyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAganNjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge31cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8v5pi+56S65Y2h5Yi4XHJcbiAgc2hvd0NvdXBvbiAoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9jb3Vwb24vdXNlci90aXAnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAxMDAwMSkge1xyXG4gICAgICAgICAgdGhhdC5jb3Vwb25JbmZvID0gcmVzLmRhdGEuZGF0YTtcclxuICAgICAgICAgIHRoYXQuJGJyb2FkY2FzdCgnc2hvd0NvdXBvbicsIHRoYXQuY291cG9uSW5mbylcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLy8g6I635Y+W5Y2h5Yi45YiX6KGoXHJcbiAgZ2V0Q2FyZExpc3QoKSB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9jb3Vwb24vdXNlci9saXN0JyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBhZ2VOdW06IDEsXHJcbiAgICAgICAgcGFnZVNpemU6IDEwMDAsXHJcbiAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgIHN0YXR1czoxXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICB0aGF0LmNvaWxpbmcgPSByZXMuZGF0YS5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4vL+iOt+WPlui/mOasvuaXpeWSjOe7k+a4headkOaWmeaVsOmHj1xyXG5nZXRudW1TaG93KCl7XHJcbiAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvYWZ0ZXJMb2FuL2luZm8nLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICB0aGF0LmNvdXBvbkNvdW50PXJlcy5kYXRhLmRhdGEuY291cG9uQ291bnQ7XHJcbiAgICAgICAgIHRoYXQuZGVsaXZlcnlDb3VudD1yZXMuZGF0YS5kYXRhLmRlbGl2ZXJ5Q291bnQ7XHJcbiAgICAgICAgIHRoYXQubGF0ZXN0UmVwYXltZW50RGF0ZT10aGF0LnRpbWVSZWcocmVzLmRhdGEuZGF0YS5sYXRlc3RSZXBheW1lbnREYXRlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuLy8g6L+U5Zue5pe26aG16Z2i5Yi35pawIOiuouWNlS3mlLbol4/nmoTkuKrmlbBcclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLiRwYXJlbnQuUFZVVnN0YXRpc3RpY2FsKCdteScpO1xyXG4gICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgIGlmKHRoaXNfLmF2YXRhcnVybD09XCJcIil7XHJcbiAgICAgICB0aGlzXy5hdmF0YXJ1cmw9dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbmsrJ21ydHgucG5nJztcclxuICAgICB9XHJcbiAgICAgaWYodGhpc18ucGFyZW50X2RhdGEubG9naW5fdG9rZW4gIT0gJycpIHtcclxuICAgICAgIHRoaXNfLnNob3dMb2dpbiA9IGZhbHNlO1xyXG4gICAgICAgY29uc29sZS5sb2coJ+i/meaYr+eZu+W9leS5i+WQjueahOaVsOaNricgKyB0aGlzXy5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbilcclxuICAgICAgLy8gIHRoaXNfLnNob3dDb3Vwb24oKTtcclxuICAgICAgLy8gIHRoaXNfLmdldENhcmRMaXN0KCk7XHJcbiAgICAgICB0aGlzXy5nZXRudW1TaG93KCk7XHJcbiAgICAgfVxyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn6I635Y+Wc2V0dGluZ+S/oeaBr++8jOeci+aYr+WQpuaOiOadg3VzZXJpbmZvJyk7XHJcbiAgICAgICAgaWYgKGRhdGEuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7BcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YXMpIHtcclxuICAgICAgICAgICAgICB0aGlzXy5hdmF0YXJ1cmwgPSBkYXRhcy51c2VySW5mby5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgdGhpc18ubmlja25hbWUgPSBkYXRhcy51c2VySW5mby5uaWNrTmFtZTtcclxuICAgICAgICAgICAgICB0aGlzXy5sb2dpbkRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDliKTmlq3mmK/lkKbmjojmnYPnmbvpmYZcclxuICBpc0xvZ2luKCkge1xyXG4gICAgbGV0IHRoaXNfID0gdGhpc1xyXG4gICAgaWYgKCF0aGlzXy5sb2dpbkRhdGEpIHtcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlnNldHRpbmfkv6Hmga/vvIznnIvmmK/lkKbmjojmnYN1c2VyaW5mbycpO1xyXG4gICAgICAgICAgaWYgKGRhdGEuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNfLmF2YXRhcnVybCA9IGRhdGFzLnVzZXJJbmZvLmF2YXRhclVybDtcclxuICAgICAgICAgICAgICAgIHRoaXNfLm5pY2tuYW1lID0gZGF0YXMudXNlckluZm8ubmlja05hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzXy5sb2dpbkRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpc0R6TG9naW4gKCkge1xyXG4gICAgaWYgKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX3Rva2VuID09PSAnJykge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdzZWNMb2dpbidcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g5Yid5aeL5YyWXHJcbiAgaW5pdCgpIHtcclxuICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgYXJlLiB0ZXh0ID0gJycsXHJcbiAgICAvLyDov5jmrL7ml6VcclxuICAgIGFyZS5oa190aW1lID0gJycsXHJcbiAgICAvLyDov5jmrL7mmL7npLpcclxuICAgIGFyZS5odWFua3Vhbl9zaG93ID0gIHRydWUsXHJcbiAgICBhcmUuc2VsZWN0ID0gIGZhbHNlLFxyXG4gICAgYXJlLnNlbGVjdGVkID0gIHRydWUsXHJcbiAgICAvLyDljaHliLjliJfooahcclxuICAgIGFyZS5jb2lsaW5nID0gICcnLFxyXG4gICAgLy8g5Y2h5Yi454q25oCBXHJcbiAgICBhcmUuc2VhcmNodHlwZSA9ICAwLFxyXG4gICAgLy8g6K6i5Y2V5pWwXHJcbiAgICBhcmUub3JkZXJOdW0gPSAwLFxyXG4gICAgLy8g5pS26JeP5pWwXHJcbiAgICBhcmUuY29sbGVjdGlvbk51bSA9IDAsXHJcbiAgICAvLyDlpLTlg4/pu5jorqRcclxuICAgIGFyZS5hdmF0YXJ1cmwgPWFyZS5wYXJlbnRfZGF0YS51cmxfbGluaysnbXJ0eC5wbmcnLFxyXG4gICAgLy8g5aeT5ZCN5rOo5YaMXHJcbiAgIGFyZS5uaWNrbmFtZSA9ICfnmbvlvZUg5rOo5YaMJ1xyXG4gIH1cclxufVxyXG4iXX0=