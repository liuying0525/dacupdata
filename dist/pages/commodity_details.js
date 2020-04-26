'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _sidebar_ck = require('./../components/sidebar_ck.js');

var _sidebar_ck2 = _interopRequireDefault(_sidebar_ck);

var _Slider = require('./../components/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Commodity_details = function (_wepy$page) {
  _inherits(Commodity_details, _wepy$page);

  function Commodity_details() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Commodity_details);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Commodity_details.__proto__ || Object.getPrototypeOf(Commodity_details)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '金融产品列表'
    }, _this.data = {
      zt: 0,
      json_link: '',
      // 车系id
      carseriesid: '',
      // 车型id
      carmodelid: '',
      js: true,
      // 车信息
      xq_sj: {},
      // 产品信息
      financialproductJA: [],
      sidebar_: false,
      // 首付
      shoufuValue: 20,
      shoufuValueNum: 20,
      // 期限
      qixianValue: 36,
      qixianValueNum: 36,
      url_link: ""
    }, _this.$repeat = {}, _this.$props = { "sidebarck": { "xmlns:v-on": "", "xmlns:v-bind": "", "v-bind:sidebar_.once": "sidebar_" }, "shoufuSlider": { "min": "20", "max": "70", "step": "10", "blockUrl": "{{url_link?url_link + 'hk.png':''}}", "v-bind:value.sync": "shoufuValue" }, "qixianSlider": { "min": "12", "max": "60", "step": "12", "blockUrl": "{{url_link?url_link + 'hk.png':''}}", "v-bind:value.sync": "qixianValue" } }, _this.$events = { "sidebarck": { "v-on:childFn": "linkTo" }, "shoufuSlider": { "v-on:sliderChange": "shoufuChange" }, "qixianSlider": { "v-on:sliderChange": "qixianChange" } }, _this.components = {
      sidebarck: _sidebar_ck2.default,
      shoufuSlider: _Slider2.default,
      qixianSlider: _Slider2.default
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/commodity_details?carmodelid=' + this.carmodelid + '&downpaymentpercent=' + this.shoufuValueNum + '&loanterm=' + this.qixianValueNum
        };
      },

      // 车型列表
      linkTo: function linkTo(a) {
        var this_ = this;
        var carmodelid = a;
        this_.carmodelid = a;
        var json_link = this.json_link;
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/carmodel/info',
          data: {
            carmodelid: carmodelid,
            downpaymentpercent: this_.shoufuValueNum,
            loanterm: this_.qixianValueNum
          },
          success: function success(data) {
            this_.xq_sj = data.data.carmodelJO;
            this_.carseriesid = data.data.carmodelJO.carseriesid;
            this_.financialproductJA = data.data.financialproductJA;
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

        this.$parent.globalData.pageid = [a];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      // 申请
      ljsq_btn: function ljsq_btn(e) {
        var carmodelid = this.xq_sj.carmodelid;
        var financialproductid = e;
        var businessid = '';
        var downpaymentpercent = this.shoufuValueNum;
        var loanterm = this.qixianValueNum;
        var res = {
          carmodelid: carmodelid,
          financialproductid: financialproductid,
          downpaymentpercent: downpaymentpercent,
          loanterm: loanterm
        };
        this.$navigate('details', res);
      },

      // 首付slider滑动
      shoufuChange: function shoufuChange(value) {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        this.shoufuValueNum = value;
        this.addGoodToMyFoot();
        if (this.zt == 0) {
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/carmodel/info',
            data: {
              carmodelid: this_.carmodelid,
              downpaymentpercent: this_.shoufuValueNum,
              loanterm: this_.qixianValueNum
            },
            success: function success(data) {
              this_.xq_sj = data.data.carmodelJO;
              this_.carseriesid = data.data.carmodelJO.carseriesid;
              this_.financialproductJA = data.data.financialproductJA;
              console.log(this_.financialproductJA);
              console.log(data.data.financialproductJA);
              this_.$apply();
              wx.hideLoading();
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
        } else {
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/carmodel/info',
            data: {
              carseriesid: this_.carseriesid,
              downpaymentpercent: this_.shoufuValueNum,
              loanterm: this_.qixianValueNum
            },
            success: function success(data) {
              this_.xq_sj = data.data.carmodelJO;
              this_.carseriesid = data.data.carmodelJO.carseriesid;
              this_.financialproductJA = data.data.financialproductJA;
              console.log(this_.financialproductJA);
              console.log(data.data.financialproductJA);
              this_.$apply();
              wx.hideLoading();
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
      },

      // 期限slider滑动
      qixianChange: function qixianChange(value) {
        var json_link = this.$parent.globalData.json_link;
        var this_ = this;
        this.qixianValueNum = value;
        this.addGoodToMyFoot();
        if (this_.zt == 0) {
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/carmodel/info',
            data: {
              carmodelid: this_.carmodelid,
              downpaymentpercent: this_.shoufuValueNum,
              loanterm: this_.qixianValueNum
            },
            success: function success(data) {
              this_.xq_sj = data.data.carmodelJO;
              this_.carseriesid = data.data.carmodelJO.carseriesid;
              this_.financialproductJA = data.data.financialproductJA;
              console.log(this_.financialproductJA);
              console.log(data.data.financialproductJA);
              this_.$apply();
              wx.hideLoading();
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
        } else {
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/carmodel/info',
            data: {
              carseriesid: this_.carseriesid,
              downpaymentpercent: this_.shoufuValueNum,
              loanterm: this_.qixianValueNum
            },
            success: function success(data) {
              this_.xq_sj = data.data.carmodelJO;
              this_.carseriesid = data.data.carmodelJO.carseriesid;
              this_.financialproductJA = data.data.financialproductJA;
              console.log(this_.financialproductJA);
              console.log(data.data.financialproductJA);

              this_.$apply();
              wx.hideLoading();
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
        this.$apply();
      },

      // 查看车型
      ck_btn: function ck_btn(e) {
        wx.showLoading({
          title: '加载中'
        });
        var json_link = this.json_link;
        var this_ = this;
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/carmodel/listbycarseries',
          data: {
            carseriesid: e
          },
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);
            this_.$invoke('sidebarck', 'someMethod', data);
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Commodity_details, [{
    key: 'onLoad',
    value: function onLoad(res) {
      wx.showLoading({
        title: '加载中',
        mask: true
      });
      var this_ = this;
      // 判断上一个页面有没有传res.carmodelid
      // 判断车型id跟车系id
      if (res.carmodelid != undefined) {
        var Carmodelid = res.carmodelid;
        this_.carmodelid = Carmodelid;
        this_.zt = 0;
        var json_link = this.$parent.globalData.json_link;
        this_.json_link = json_link;
        // 商品详情
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/carmodel/info',
          data: {
            carmodelid: Carmodelid,
            downpaymentpercent: 20,
            loanterm: 36
          },
          success: function success(data) {
            this_.xq_sj = data.data.carmodelJO;
            this_.carseriesid = data.data.carmodelJO.carseriesid;
            this_.financialproductJA = data.data.financialproductJA;
            this_.addGoodToMyFoot();
            this_.$apply();
            wx.hideLoading();
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
      } else {
        var Carseriesid = res.carseriesid;
        this_.carseriesid = Carseriesid;
        this_.zt = 1;
        var _json_link = this.$parent.globalData.json_link;
        this_.json_link = _json_link;
        wx.request({
          url: _json_link + '/api/wxapp/newcarloan/carmodel/info',
          data: {
            carseriesid: Carseriesid,
            downpaymentpercent: 20,
            loanterm: 36
          },
          success: function success(data) {
            this_.xq_sj = data.data.carmodelJO;
            this_.carseriesid = data.data.carmodelJO.carseriesid;
            this_.financialproductJA = data.data.financialproductJA;

            this_.addGoodToMyFoot();
            this_.$apply();
            wx.hideLoading();
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

      // 初始化滑动组件的数值
      this.$broadcast('attachhed');
    }

    // 统计

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.UVstatistical('loanproductlist');
      this.$parent.PVUVstatistical('loanproductlist');
      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化数据

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.shoufuValue = 20;
      this.shoufuValueNum = 20;
      this.qixianValue = 36;
      this.qixianValueNum = 36;
      this.xq_sj = {};
      this.financialproductJA = [];
      this.$invoke('sidebarck', 'clear_yy');

      // 清掉贷款提交订单接口两个参数的值
      this.$parent.globalData.source = 0;
      this.$parent.globalData.sourceid = '';
    }

    // 添加足迹

  }, {
    key: 'addGoodToMyFoot',
    value: function addGoodToMyFoot() {
      // 每次显示，添加到我的足迹
      var xq_sj = this.xq_sj;
      var a = parseInt(xq_sj.price) / 10000;
      var b = parseInt(xq_sj.price * this.shoufuValueNum / 100) / 10000;
      var c = this.qixianValueNum;
      var abc = (a - b) / c;
      if (this.financialproductJA != '') {
        var good = {
          // 0 直租详情 1 金融商品列表
          type: 1,
          carmodelid: xq_sj.carmodelid,
          daikuantag: '新车贷',
          goodimage: xq_sj.imgurl,
          carseriesname: xq_sj.carseriesname,
          name: xq_sj.name,
          price: parseInt(xq_sj.price) / 10000,
          downpayment: parseInt(xq_sj.price * this.shoufuValueNum / 100) / 10000,

          monthlysupply: this.financialproductJA[0].monthlysupply,
          label: this.financialproductJA[0].activityJO.name,
          downpaymentpercent: this.shoufuValueNum,
          loanterm: this.qixianValueNum
        };
        this.$parent.myFootData('add', good);
      } else {
        var _good = {
          // 0 直租详情 1 金融商品列表
          type: 1,
          carmodelid: xq_sj.carmodelid,
          daikuantag: '新车贷',
          goodimage: xq_sj.imgurl,
          carseriesname: xq_sj.carseriesname,
          name: xq_sj.name,
          price: parseInt(xq_sj.price) / 10000,
          downpayment: parseInt(xq_sj.price * this.shoufuValueNum / 100) / 10000,
          monthlysupply: 0,
          downpaymentpercent: this.shoufuValueNum,
          loanterm: this.qixianValueNum
        };
        this.$parent.myFootData('add', _good);
      }
    }
  }]);

  return Commodity_details;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Commodity_details , 'pages/commodity_details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vZGl0eV9kZXRhaWxzLmpzIl0sIm5hbWVzIjpbIkNvbW1vZGl0eV9kZXRhaWxzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ6dCIsImpzb25fbGluayIsImNhcnNlcmllc2lkIiwiY2FybW9kZWxpZCIsImpzIiwieHFfc2oiLCJmaW5hbmNpYWxwcm9kdWN0SkEiLCJzaWRlYmFyXyIsInNob3VmdVZhbHVlIiwic2hvdWZ1VmFsdWVOdW0iLCJxaXhpYW5WYWx1ZSIsInFpeGlhblZhbHVlTnVtIiwidXJsX2xpbmsiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJzaWRlYmFyY2siLCJTaWRlYmFyX2NrIiwic2hvdWZ1U2xpZGVyIiwiU2xpZGVyIiwicWl4aWFuU2xpZGVyIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImxpbmtUbyIsImEiLCJ0aGlzXyIsInd4IiwicmVxdWVzdCIsInVybCIsImRvd25wYXltZW50cGVyY2VudCIsImxvYW50ZXJtIiwic3VjY2VzcyIsImNhcm1vZGVsSk8iLCIkYXBwbHkiLCJmYWlsIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsImxqc3FfYnRuIiwiZSIsImZpbmFuY2lhbHByb2R1Y3RpZCIsImJ1c2luZXNzaWQiLCJyZXMiLCIkbmF2aWdhdGUiLCJzaG91ZnVDaGFuZ2UiLCJ2YWx1ZSIsImFkZEdvb2RUb015Rm9vdCIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsInFpeGlhbkNoYW5nZSIsImNrX2J0biIsInNob3dMb2FkaW5nIiwiJGludm9rZSIsIm1hc2siLCJ1bmRlZmluZWQiLCJDYXJtb2RlbGlkIiwiQ2Fyc2VyaWVzaWQiLCIkYnJvYWRjYXN0IiwiVVZzdGF0aXN0aWNhbCIsIlBWVVZzdGF0aXN0aWNhbCIsInNvdXJjZSIsInNvdXJjZWlkIiwicGFyc2VJbnQiLCJwcmljZSIsImIiLCJjIiwiYWJjIiwiZ29vZCIsInR5cGUiLCJkYWlrdWFudGFnIiwiZ29vZGltYWdlIiwiaW1ndXJsIiwiY2Fyc2VyaWVzbmFtZSIsIm5hbWUiLCJkb3ducGF5bWVudCIsIm1vbnRobHlzdXBwbHkiLCJsYWJlbCIsImFjdGl2aXR5Sk8iLCJteUZvb3REYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxpQjs7Ozs7Ozs7Ozs7Ozs7NE1BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFVBQUksQ0FEQztBQUVMQyxpQkFBVyxFQUZOO0FBR0w7QUFDQUMsbUJBQWEsRUFKUjtBQUtMO0FBQ0FDLGtCQUFZLEVBTlA7QUFPTEMsVUFBSSxJQVBDO0FBUUw7QUFDQUMsYUFBTyxFQVRGO0FBVUw7QUFDQUMsMEJBQW9CLEVBWGY7QUFZTEMsZ0JBQVUsS0FaTDtBQWFMO0FBQ0FDLG1CQUFhLEVBZFI7QUFlTEMsc0JBQWdCLEVBZlg7QUFnQkw7QUFDQUMsbUJBQWEsRUFqQlI7QUFrQkxDLHNCQUFnQixFQWxCWDtBQW1CTEMsZ0JBQVM7QUFuQkosSyxRQXNCUkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLGNBQWEsRUFBZCxFQUFpQixnQkFBZSxFQUFoQyxFQUFtQyx3QkFBdUIsVUFBMUQsRUFBYixFQUFtRixnQkFBZSxFQUFDLE9BQU0sSUFBUCxFQUFZLE9BQU0sSUFBbEIsRUFBdUIsUUFBTyxJQUE5QixFQUFtQyxZQUFXLHFDQUE5QyxFQUFvRixxQkFBb0IsYUFBeEcsRUFBbEcsRUFBeU4sZ0JBQWUsRUFBQyxPQUFNLElBQVAsRUFBWSxPQUFNLElBQWxCLEVBQXVCLFFBQU8sSUFBOUIsRUFBbUMsWUFBVyxxQ0FBOUMsRUFB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QUFiLENBQXdCLEtBQXhCLEVBQStCWCxJQUEvQjtBQUNELE9BbEJELE1Ba0JPO0FBQ0wsWUFBSUEsUUFBTztBQUNUO0FBQ0FDLGdCQUFNLENBRkc7QUFHVDNFLHNCQUFZRSxNQUFNRixVQUhUO0FBSVQ0RSxzQkFBWSxLQUpIO0FBS1RDLHFCQUFXM0UsTUFBTTRFLE1BTFI7QUFNVEMseUJBQWU3RSxNQUFNNkUsYUFOWjtBQU9UQyxnQkFBTTlFLE1BQU04RSxJQVBIO0FBUVRWLGlCQUFPRCxTQUFTbkUsTUFBTW9FLEtBQWYsSUFBd0IsS0FSdEI7QUFTVFcsdUJBQWFaLFNBQVNuRSxNQUFNb0UsS0FBTixHQUFjLEtBQUtoRSxjQUFuQixHQUFvQyxHQUE3QyxJQUFvRCxLQVR4RDtBQVVUNEUseUJBQWUsQ0FWTjtBQVdUdEQsOEJBQW9CLEtBQUt0QixjQVhoQjtBQVlUdUIsb0JBQVUsS0FBS3JCO0FBWk4sU0FBWDtBQWNBLGFBQUsrQixPQUFMLENBQWE4QyxVQUFiLENBQXdCLEtBQXhCLEVBQStCWCxLQUEvQjtBQUNEO0FBQ0Y7Ozs7RUEzWjRDWSxlQUFLQyxJOztrQkFBL0I5RixpQiIsImZpbGUiOiJjb21tb2RpdHlfZGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBTaWRlYmFyX2NrIGZyb20gJy4uL2NvbXBvbmVudHMvc2lkZWJhcl9jayc7XHJcbiAgaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NsaWRlcic7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vZGl0eV9kZXRhaWxzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mHkeiejeS6p+WTgeWIl+ihqCdcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB6dDogMCxcclxuICAgICAganNvbl9saW5rOiAnJyxcclxuICAgICAgLy8g6L2m57O7aWRcclxuICAgICAgY2Fyc2VyaWVzaWQ6ICcnLFxyXG4gICAgICAvLyDovablnotpZFxyXG4gICAgICBjYXJtb2RlbGlkOiAnJyxcclxuICAgICAganM6IHRydWUsXHJcbiAgICAgIC8vIOi9puS/oeaBr1xyXG4gICAgICB4cV9zajoge30sXHJcbiAgICAgIC8vIOS6p+WTgeS/oeaBr1xyXG4gICAgICBmaW5hbmNpYWxwcm9kdWN0SkE6IFtdLFxyXG4gICAgICBzaWRlYmFyXzogZmFsc2UsXHJcbiAgICAgIC8vIOmmluS7mFxyXG4gICAgICBzaG91ZnVWYWx1ZTogMjAsXHJcbiAgICAgIHNob3VmdVZhbHVlTnVtOiAyMCxcclxuICAgICAgLy8g5pyf6ZmQXHJcbiAgICAgIHFpeGlhblZhbHVlOiAzNixcclxuICAgICAgcWl4aWFuVmFsdWVOdW06IDM2LFxyXG4gICAgICB1cmxfbGluazpcIlwiXHJcbiAgICB9O1xyXG5cclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzaWRlYmFyY2tcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2lkZWJhcl8ub25jZVwiOlwic2lkZWJhcl9cIn0sXCJzaG91ZnVTbGlkZXJcIjp7XCJtaW5cIjpcIjIwXCIsXCJtYXhcIjpcIjcwXCIsXCJzdGVwXCI6XCIxMFwiLFwiYmxvY2tVcmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsgKyAnaGsucG5nJzonJ319XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwic2hvdWZ1VmFsdWVcIn0sXCJxaXhpYW5TbGlkZXJcIjp7XCJtaW5cIjpcIjEyXCIsXCJtYXhcIjpcIjYwXCIsXCJzdGVwXCI6XCIxMlwiLFwiYmxvY2tVcmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsgKyAnaGsucG5nJzonJ319XCIsXCJ2LWJpbmQ6dmFsdWUuc3luY1wiOlwicWl4aWFuVmFsdWVcIn19O1xyXG4kZXZlbnRzID0ge1wic2lkZWJhcmNrXCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG9cIn0sXCJzaG91ZnVTbGlkZXJcIjp7XCJ2LW9uOnNsaWRlckNoYW5nZVwiOlwic2hvdWZ1Q2hhbmdlXCJ9LFwicWl4aWFuU2xpZGVyXCI6e1widi1vbjpzbGlkZXJDaGFuZ2VcIjpcInFpeGlhbkNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBzaWRlYmFyY2s6IFNpZGViYXJfY2ssXHJcbiAgICAgIHNob3VmdVNsaWRlcjogU2xpZGVyLFxyXG4gICAgICBxaXhpYW5TbGlkZXI6IFNsaWRlclxyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9jb21tb2RpdHlfZGV0YWlscz9jYXJtb2RlbGlkPScgK1xyXG4gICAgICAgICAgICB0aGlzLmNhcm1vZGVsaWQgK1xyXG4gICAgICAgICAgICAnJmRvd25wYXltZW50cGVyY2VudD0nICtcclxuICAgICAgICAgICAgdGhpcy5zaG91ZnVWYWx1ZU51bSArXHJcbiAgICAgICAgICAgICcmbG9hbnRlcm09JyArXHJcbiAgICAgICAgICAgIHRoaXMucWl4aWFuVmFsdWVOdW1cclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDovablnovliJfooahcclxuICAgICAgbGlua1RvKGEpIHtcclxuICAgICAgICB2YXIgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIGxldCBjYXJtb2RlbGlkID0gYTtcclxuICAgICAgICB0aGlzXy5jYXJtb2RlbGlkID0gYTtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvaW5mbycsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNhcm1vZGVsaWQ6IGNhcm1vZGVsaWQsXHJcbiAgICAgICAgICAgIGRvd25wYXltZW50cGVyY2VudDogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICAgIGxvYW50ZXJtOiB0aGlzXy5xaXhpYW5WYWx1ZU51bVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXNfLnhxX3NqID0gZGF0YS5kYXRhLmNhcm1vZGVsSk87XHJcbiAgICAgICAgICAgIHRoaXNfLmNhcnNlcmllc2lkID0gZGF0YS5kYXRhLmNhcm1vZGVsSk8uY2Fyc2VyaWVzaWQ7XHJcbiAgICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkE7XHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFthXTtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFszXTtcclxuICAgICAgICB0aGlzLiRwYXJlbnQuY2xpY2tudW1vcmRlcm51bXN0YXQoMSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeUs+ivt1xyXG4gICAgICBsanNxX2J0bihlKSB7XHJcbiAgICAgICAgbGV0IGNhcm1vZGVsaWQgPSB0aGlzLnhxX3NqLmNhcm1vZGVsaWQ7XHJcbiAgICAgICAgbGV0IGZpbmFuY2lhbHByb2R1Y3RpZCA9IGU7XHJcbiAgICAgICAgbGV0IGJ1c2luZXNzaWQgPSAnJztcclxuICAgICAgICBsZXQgZG93bnBheW1lbnRwZXJjZW50ID0gdGhpcy5zaG91ZnVWYWx1ZU51bTtcclxuICAgICAgICBsZXQgbG9hbnRlcm0gPSB0aGlzLnFpeGlhblZhbHVlTnVtO1xyXG4gICAgICAgIGxldCByZXMgPSB7XHJcbiAgICAgICAgICBjYXJtb2RlbGlkOiBjYXJtb2RlbGlkLFxyXG4gICAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiBmaW5hbmNpYWxwcm9kdWN0aWQsXHJcbiAgICAgICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IGRvd25wYXltZW50cGVyY2VudCxcclxuICAgICAgICAgIGxvYW50ZXJtOiBsb2FudGVybVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ2RldGFpbHMnLCByZXMpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDpppbku5hzbGlkZXLmu5HliqhcclxuICAgICAgc2hvdWZ1Q2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIHRoaXMuc2hvdWZ1VmFsdWVOdW0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmFkZEdvb2RUb015Rm9vdCgpO1xyXG4gICAgICAgIGlmICh0aGlzLnp0ID09IDApIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvaW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cGVyY2VudDogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICAgICAgbG9hbnRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdGhpc18ueHFfc2ogPSBkYXRhLmRhdGEuY2FybW9kZWxKTztcclxuICAgICAgICAgICAgICB0aGlzXy5jYXJzZXJpZXNpZCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpPLmNhcnNlcmllc2lkO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQSlcclxuICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvaW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJzZXJpZXNpZDogdGhpc18uY2Fyc2VyaWVzaWQsXHJcbiAgICAgICAgICAgICAgZG93bnBheW1lbnRwZXJjZW50OiB0aGlzXy5zaG91ZnVWYWx1ZU51bSxcclxuICAgICAgICAgICAgICBsb2FudGVybTogdGhpc18ucWl4aWFuVmFsdWVOdW1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICB0aGlzXy54cV9zaiA9IGRhdGEuZGF0YS5jYXJtb2RlbEpPO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmNhcnNlcmllc2lkID0gZGF0YS5kYXRhLmNhcm1vZGVsSk8uY2Fyc2VyaWVzaWQ7XHJcbiAgICAgICAgICAgICAgdGhpc18uZmluYW5jaWFscHJvZHVjdEpBID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpc18uZmluYW5jaWFscHJvZHVjdEpBKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEuZmluYW5jaWFscHJvZHVjdEpBKVxyXG4gICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOacn+mZkHNsaWRlcua7keWKqFxyXG4gICAgICBxaXhpYW5DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5xaXhpYW5WYWx1ZU51bSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuYWRkR29vZFRvTXlGb290KCk7XHJcbiAgICAgICAgaWYgKHRoaXNfLnp0ID09IDApIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvaW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cGVyY2VudDogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICAgICAgbG9hbnRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdGhpc18ueHFfc2ogPSBkYXRhLmRhdGEuY2FybW9kZWxKTztcclxuICAgICAgICAgICAgICB0aGlzXy5jYXJzZXJpZXNpZCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpPLmNhcnNlcmllc2lkO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQSlcclxuICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvaW5mbycsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJzZXJpZXNpZDogdGhpc18uY2Fyc2VyaWVzaWQsXHJcbiAgICAgICAgICAgICAgZG93bnBheW1lbnRwZXJjZW50OiB0aGlzXy5zaG91ZnVWYWx1ZU51bSxcclxuICAgICAgICAgICAgICBsb2FudGVybTogdGhpc18ucWl4aWFuVmFsdWVOdW1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICB0aGlzXy54cV9zaiA9IGRhdGEuZGF0YS5jYXJtb2RlbEpPO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmNhcnNlcmllc2lkID0gZGF0YS5kYXRhLmNhcm1vZGVsSk8uY2Fyc2VyaWVzaWQ7XHJcbiAgICAgICAgICAgICAgdGhpc18uZmluYW5jaWFscHJvZHVjdEpBID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpc18uZmluYW5jaWFscHJvZHVjdEpBKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEuZmluYW5jaWFscHJvZHVjdEpBKVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5p+l55yL6L2m5Z6LXHJcbiAgICAgIGNrX2J0bihlKSB7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY2FybW9kZWwvbGlzdGJ5Y2Fyc2VyaWVzJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2Fyc2VyaWVzaWQ6IGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgdGhpc18uJGludm9rZSgnc2lkZWJhcmNrJywgJ3NvbWVNZXRob2QnLCBkYXRhKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uTG9hZChyZXMpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB2YXIgdGhpc18gPSB0aGlzO1xyXG4gICAgICAvLyDliKTmlq3kuIrkuIDkuKrpobXpnaLmnInmsqHmnInkvKByZXMuY2FybW9kZWxpZFxyXG4gICAgICAvLyDliKTmlq3ovablnotpZOi3n+i9puezu2lkXHJcbiAgICAgIGlmIChyZXMuY2FybW9kZWxpZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgQ2FybW9kZWxpZCA9IHJlcy5jYXJtb2RlbGlkO1xyXG4gICAgICAgIHRoaXNfLmNhcm1vZGVsaWQgPSBDYXJtb2RlbGlkO1xyXG4gICAgICAgIHRoaXNfLnp0ID0gMDtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIHRoaXNfLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgICAgICAvLyDllYblk4Hor6bmg4VcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jYXJtb2RlbC9pbmZvJyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2FybW9kZWxpZDogQ2FybW9kZWxpZCxcclxuICAgICAgICAgICAgZG93bnBheW1lbnRwZXJjZW50OiAyMCxcclxuICAgICAgICAgICAgbG9hbnRlcm06IDM2XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpc18ueHFfc2ogPSBkYXRhLmRhdGEuY2FybW9kZWxKTztcclxuICAgICAgICAgICAgdGhpc18uY2Fyc2VyaWVzaWQgPSBkYXRhLmRhdGEuY2FybW9kZWxKTy5jYXJzZXJpZXNpZDtcclxuICAgICAgICAgICAgdGhpc18uZmluYW5jaWFscHJvZHVjdEpBID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQTtcclxuICAgICAgICAgICAgdGhpc18uYWRkR29vZFRvTXlGb290KCk7XHJcbiAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IENhcnNlcmllc2lkID0gcmVzLmNhcnNlcmllc2lkO1xyXG4gICAgICAgIHRoaXNfLmNhcnNlcmllc2lkID0gQ2Fyc2VyaWVzaWQ7XHJcbiAgICAgICAgdGhpc18uenQgPSAxO1xyXG4gICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgdGhpc18uanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9uZXdjYXJsb2FuL2Nhcm1vZGVsL2luZm8nLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjYXJzZXJpZXNpZDogQ2Fyc2VyaWVzaWQsXHJcbiAgICAgICAgICAgIGRvd25wYXltZW50cGVyY2VudDogMjAsXHJcbiAgICAgICAgICAgIGxvYW50ZXJtOiAzNlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXNfLnhxX3NqID0gZGF0YS5kYXRhLmNhcm1vZGVsSk87XHJcbiAgICAgICAgICAgIHRoaXNfLmNhcnNlcmllc2lkID0gZGF0YS5kYXRhLmNhcm1vZGVsSk8uY2Fyc2VyaWVzaWQ7XHJcbiAgICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkE7XHJcblxyXG4gICAgICAgICAgICB0aGlzXy5hZGRHb29kVG9NeUZvb3QoKTtcclxuICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8g5Yid5aeL5YyW5ruR5Yqo57uE5Lu255qE5pWw5YC8XHJcbiAgICAgIHRoaXMuJGJyb2FkY2FzdCgnYXR0YWNoaGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g57uf6K6hXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCdsb2FucHJvZHVjdGxpc3QnKTtcclxuICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnbG9hbnByb2R1Y3RsaXN0Jyk7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIG9uVW5sb2FkKCkge1xyXG4gICAgICB0aGlzLnNob3VmdVZhbHVlID0gMjA7XHJcbiAgICAgIHRoaXMuc2hvdWZ1VmFsdWVOdW0gPSAyMDtcclxuICAgICAgdGhpcy5xaXhpYW5WYWx1ZSA9IDM2O1xyXG4gICAgICB0aGlzLnFpeGlhblZhbHVlTnVtID0gMzY7XHJcbiAgICAgIHRoaXMueHFfc2ogPSB7fTtcclxuICAgICAgdGhpcy5maW5hbmNpYWxwcm9kdWN0SkEgPSBbXTtcclxuICAgICAgdGhpcy4kaW52b2tlKCdzaWRlYmFyY2snLCAnY2xlYXJfeXknKTtcclxuXHJcbiAgICAgIC8vIOa4heaOiei0t+asvuaPkOS6pOiuouWNleaOpeWPo+S4pOS4quWPguaVsOeahOWAvFxyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zb3VyY2UgPSAwO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zb3VyY2VpZCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa3u+WKoOi2s+i/uVxyXG4gICAgYWRkR29vZFRvTXlGb290KCkge1xyXG4gICAgICAvLyDmr4/mrKHmmL7npLrvvIzmt7vliqDliLDmiJHnmoTotrPov7lcclxuICAgICAgbGV0IHhxX3NqID0gdGhpcy54cV9zajtcclxuICAgICAgbGV0IGEgPSBwYXJzZUludCh4cV9zai5wcmljZSkgLyAxMDAwMDtcclxuICAgICAgbGV0IGIgPSBwYXJzZUludCh4cV9zai5wcmljZSAqIHRoaXMuc2hvdWZ1VmFsdWVOdW0gLyAxMDApIC8gMTAwMDA7XHJcbiAgICAgIGxldCBjID0gdGhpcy5xaXhpYW5WYWx1ZU51bTtcclxuICAgICAgbGV0IGFiYyA9IChhIC0gYikgLyBjO1xyXG4gICAgICBpZiAodGhpcy5maW5hbmNpYWxwcm9kdWN0SkEgIT0gJycpIHtcclxuICAgICAgICBsZXQgZ29vZCA9IHtcclxuICAgICAgICAgIC8vIDAg55u056ef6K+m5oOFIDEg6YeR6J6N5ZWG5ZOB5YiX6KGoXHJcbiAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgY2FybW9kZWxpZDogeHFfc2ouY2FybW9kZWxpZCxcclxuICAgICAgICAgIGRhaWt1YW50YWc6ICfmlrDovabotLcnLFxyXG4gICAgICAgICAgZ29vZGltYWdlOiB4cV9zai5pbWd1cmwsXHJcbiAgICAgICAgICBjYXJzZXJpZXNuYW1lOiB4cV9zai5jYXJzZXJpZXNuYW1lLFxyXG4gICAgICAgICAgbmFtZTogeHFfc2oubmFtZSxcclxuICAgICAgICAgIHByaWNlOiBwYXJzZUludCh4cV9zai5wcmljZSkgLyAxMDAwMCxcclxuICAgICAgICAgIGRvd25wYXltZW50OiBwYXJzZUludCh4cV9zai5wcmljZSAqIHRoaXMuc2hvdWZ1VmFsdWVOdW0gLyAxMDApIC8gMTAwMDAsXHJcblxyXG4gICAgICAgICAgbW9udGhseXN1cHBseTogdGhpcy5maW5hbmNpYWxwcm9kdWN0SkFbMF0ubW9udGhseXN1cHBseSxcclxuICAgICAgICAgIGxhYmVsOiB0aGlzLmZpbmFuY2lhbHByb2R1Y3RKQVswXS5hY3Rpdml0eUpPLm5hbWUsXHJcbiAgICAgICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXMuc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICBsb2FudGVybTogdGhpcy5xaXhpYW5WYWx1ZU51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lm15Rm9vdERhdGEoJ2FkZCcsIGdvb2QpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBnb29kID0ge1xyXG4gICAgICAgICAgLy8gMCDnm7Tnp5/or6bmg4UgMSDph5Hono3llYblk4HliJfooahcclxuICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICBjYXJtb2RlbGlkOiB4cV9zai5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgZGFpa3VhbnRhZzogJ+aWsOi9pui0tycsXHJcbiAgICAgICAgICBnb29kaW1hZ2U6IHhxX3NqLmltZ3VybCxcclxuICAgICAgICAgIGNhcnNlcmllc25hbWU6IHhxX3NqLmNhcnNlcmllc25hbWUsXHJcbiAgICAgICAgICBuYW1lOiB4cV9zai5uYW1lLFxyXG4gICAgICAgICAgcHJpY2U6IHBhcnNlSW50KHhxX3NqLnByaWNlKSAvIDEwMDAwLFxyXG4gICAgICAgICAgZG93bnBheW1lbnQ6IHBhcnNlSW50KHhxX3NqLnByaWNlICogdGhpcy5zaG91ZnVWYWx1ZU51bSAvIDEwMCkgLyAxMDAwMCxcclxuICAgICAgICAgIG1vbnRobHlzdXBwbHk6IDAsXHJcbiAgICAgICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXMuc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICBsb2FudGVybTogdGhpcy5xaXhpYW5WYWx1ZU51bVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lm15Rm9vdERhdGEoJ2FkZCcsIGdvb2QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=