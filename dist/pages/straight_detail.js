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

var _Slider = require('./../components/Slider.js');

var _Slider2 = _interopRequireDefault(_Slider);

var _qixianSlider = require('./../components/qixianSlider.js');

var _qixianSlider2 = _interopRequireDefault(_qixianSlider);

var _sidebar_ck = require('./../components/sidebar_ck.js');

var _sidebar_ck2 = _interopRequireDefault(_sidebar_ck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var straight_detail = function (_wepy$page) {
  _inherits(straight_detail, _wepy$page);

  function straight_detail() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, straight_detail);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = straight_detail.__proto__ || Object.getPrototypeOf(straight_detail)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '产品详情'
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" }, "shoufuSlider": { "min": "0", "max": "50", "step": "10", "blockUrl": "{{url_link?url_link+'hk.png':''}}", "v-bind:value.sync": "shoufuValue" }, "qixianSlider": { "blockUrl": "{{url_link?url_link+'hk.png':''}}" }, "sidebarck": { "xmlns:v-bind": "", "v-bind:sidebar_.once": "sidebar_" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" }, "shoufuSlider": { "v-on:sliderChange": "shoufuChange" }, "qixianSlider": { "v-on:sliderChange": "qixianChange" }, "sidebarck": { "v-on:childFn": "linkTo" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default,
      shoufuSlider: _Slider2.default,
      qixianSlider: _qixianSlider2.default,
      weikuanSlider: _Slider2.default,
      sidebarck: _sidebar_ck2.default
    }, _this.data = _defineProperty({
      dongz: '预约门店',
      dongzw: '金融产品详情',
      loanterm: '',
      // 图片地址
      url_link: '',
      // 回调函数
      request_cs: function request_cs() {},
      // 门店信息
      md: {},
      mdid: '',
      wp: '',
      wpid: '',
      oeds: false,
      // 车型id
      carmodelid: '',
      // 产品id
      financialproductid: '',
      financial_product_id: '',
      // onload_res: {},
      select: false,
      tabindex: 0, // tab切换
      configureIndex: 0, // 显示某个配置项
      collected: false, // 商品是否收藏
      // 首付
      shoufuValue: 10,
      shoufuValueNum: 10,
      // 期限
      qixianValue: 36,
      qixianValueNum: 36,
      // 尾款
      // weikuanValue: 12,
      weikuanValueNum: 0,
      // 金融产品
      financialproductJA: {},
      carmodelJO: {},
      // 活动
      activityJO: [],
      collectionid: '',
      // 申请点击次数控制
      isDianji: true,
      summary: '',
      // 期限slider列表
      testList: []
    }, 'url_link', ''), _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/straight_detail?carmodelid=' + this.carmodelid + '&financialid=' + this.financialid + '&downpaymentpercent=' + this.shoufuValueNum + '&loanterm=' + this.qixianValueNum
        };
      },
      // 车型列表
      linkTo: function linkTo(a) {
        var this_ = this;
        var carmodelid = a;
        this_.carmodelid = a;
        var json_link = this.json_link;
        this.getGoodDetail();
        // wx.request({
        //   url: json_link + '/api/wxapp/directrent/carmodel/info',
        //   data: {
        //     carmodelid: carmodelid,
        //     downpaymentpercent: this_.shoufuValueNum,
        //     loanterm: this_.qixianValueNum
        //   },
        //   success: function(data) {
        //     this_.xq_sj = data.data.carmodelJO;
        //     this_.carseriesid = data.data.carmodelJO.carseriesid;
        //     this_.financialproductJA = data.data.financialproductJA;
        //     this_.$apply();
        //   },
        //   fail: function() {
        //     wx.showToast({
        //       title: '网络异常',
        //       icon: 'none'
        //     });

        //     setTimeout(function() {
        //       wx.hideToast();
        //     }, 2000);
        //     return;
        //   }
        // });

        this.$parent.globalData.pageid = [a];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      // 查看车型
      ck_btn: function ck_btn(e) {
        wx.showLoading({
          title: '加载中'
        });
        // let json_link = this.json_link;
        var parent_data = this.$parent.globalData;
        var this_ = this;
        wx.request({
          url: parent_data.json_link + '/api/wxapp/newcarloan/carmodel/listbycarseries',
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
      },

      // 请求用户信息
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },

      // 请求手机号
      alert_tel: function alert_tel(res) {
        console.log('授权10');
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('alert_l', 'chufa', false);

        if (res.iv == undefined) return false;
        zhi.login_telnum_iv = res.iv;
        zhi.login_telnum_miyao = res.miyao;
        // 查看是否授权
        wx.getSetting({
          success: function success(res) {
            zhi.logining = true;
            console.log('授权1');
            if (res.authSetting['scope.userInfo']) {
              console.log('授权2');
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
              wx.getUserInfo({
                success: function success(res) {
                  console.log('授权3');
                  zhi.java_login(res, this_.request_cs);
                }
              });
            } else {
              console.log('授权4');
              this_.$invoke('userinfo_alert', 'chufa', true);
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
            return;
          }
        });
      },

      // 选择门店
      selectShop: function selectShop() {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        // 车型外部id
        var financial_product_id = this.financialproductJA.financial_product_id;
        var asset_model_cde = this.carmodelJO.asset_model_cde;
        wx.navigateTo({
          url: 'mendian?e=' + financial_product_id + '&a=' + asset_model_cde + '&json_link=' + json_link + '&from=直租详情'
        });
      },

      // tab切换
      tabChange: function tabChange(e) {
        var tabindex = e.currentTarget.dataset.tabindex;
        this.tabindex = parseInt(tabindex);
      },

      // 切换配置信息
      setConfigIndex: function setConfigIndex(e) {
        var configureIndex = e.currentTarget.dataset.configureindex;
        this.configureIndex = configureIndex;
      },

      // 点击收藏按钮
      tap_sc: function tap_sc() {
        var parent_data = this.$parent.globalData;
        var this_ = this;
        if (parent_data.access_token != '') {
          // 判断当前状态
          var currentCollect = this_.collected;
          if (currentCollect) {
            // 取消收藏
            wx.request({
              url: parent_data.json_link + '/api/wxapp/collection/unoper?access_token=' + parent_data.access_token,
              data: {
                collectionid: this_.collectionid
              },
              success: function success(data) {
                if (data.data.code === 'A00006') {
                  wx.showToast({
                    title: '取消收藏成功',
                    icon: 'success'
                  });
                  this_.collected = false;
                } else {
                  wx.showToast({
                    title: '取消收藏失败',
                    icon: 'success'
                  });
                }
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
          } else {
            // 收藏
            wx.request({
              url: parent_data.json_link + '/api/wxapp/collection/operdirectrent?access_token=' + parent_data.access_token,
              data: {
                carmodelid: this_.carmodelJO.carmodelid,
                financialproductid: this_.financialproductJA.financial_product_id,
                businessid: this_.mdid,
                downpaymentpara: this_.financialproductJA.downpayment,
                msup: this_.financialproductJA.newMonthlysupply,
                downpaymentratio: this_.shoufuValueNum,
                term: this_.qixianValueNum,
                tailmoney: this_.financialproductJA.tailmoneypercent,
                productpara: this_.financialproductJA.financing_amt,
                bondpara: this_.financialproductJA.bond,
                bondratio: this_.financialproductJA.bondpct
              },
              success: function success(data) {
                wx.showToast({
                  title: '收藏成功',
                  icon: 'success'
                });
                this_.iscollected();
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
        } else {
          this_.$invoke('alert_l', 'chufa', true);
          this_.request_cs = function (access_token) {
            this_.iscollected(function () {
              // 判断当前状态
              var currentCollect = this_.collected;
              if (currentCollect) {
                // 取消收藏
                wx.request({
                  url: parent_data.json_link + '/api/wxapp/collection/unoper?access_token=' + parent_data.access_token,
                  data: {
                    collectionid: this_.collectionid
                  },
                  success: function success(data) {
                    if (data.data.code === 'A00006') {
                      wx.showToast({
                        title: '取消收藏成功',
                        icon: 'success'
                      });
                      this_.collected = false;
                    } else {
                      wx.showToast({
                        title: '取消收藏失败',
                        icon: 'success'
                      });
                    }
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
              } else {
                // 收藏
                wx.request({
                  url: parent_data.json_link + '/api/wxapp/collection/operdirectrent?access_token=' + parent_data.access_token,
                  data: {
                    carmodelid: this_.carmodelJO.carmodelid,
                    financialproductid: this_.financialproductJA.financial_product_id,
                    businessid: this_.mdid,
                    downpaymentpara: this_.financialproductJA.downpayment,
                    msup: this_.financialproductJA.newMonthlysupply,
                    downpaymentratio: this_.shoufuValueNum,
                    term: this_.qixianValueNum,
                    tailmoney: this_.financialproductJA.tailmoneypercent,
                    productpara: this_.financialproductJA.financing_amt,
                    bondpara: this_.financialproductJA.bond,
                    bondratio: this_.financialproductJA.bondpct
                  },
                  success: function success(data) {
                    wx.showToast({
                      title: '收藏成功',
                      icon: 'success'
                    });
                    this_.iscollected();
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
            });
          };
        }
      },

      // 申请
      tap_ljsq: function tap_ljsq() {
        // 如果正在登陆，不能点击申请按钮
        var this_ = this;
        this_.isDianji = false;
        var parent_data = this.$parent.globalData;
        if (parent_data.access_token != '' && parent_data.access_token != undefined) {
          wx.request({
            url: parent_data.json_link + '/api/wxapp/reservationorder/createorderdirectrent?access_token=' + parent_data.access_token,
            data: {
              carmodelid: this_.carmodelJO.carmodelid,
              financialproductid: this_.financialproductJA.financialproductid,
              downpaymentratio: this_.shoufuValueNum,
              term: this_.qixianValueNum,
              businessid: this_.md.businessid,
              msup: this_.financialproductJA.newMonthlysupply,
              tailmoney: this_.financialproductJA.tailmoneypercent,
              downpaymentpara: this_.financialproductJA.downpayment,
              productpara: this_.financialproductJA.financing_amt,
              finalpayment: this_.financialproductJA.tailmoney,
              monthlysupply: this_.financialproductJA.monthlysupply,
              bondpara: this_.financialproductJA.bond,
              bondratio: this_.financialproductJA.bondpct
            },
            success: function success(data) {
              var zhi = {
                carmodelid: this_.carmodelJO.carmodelid,
                financialproductid: this_.financialproductJA.financialproductid,
                downpaymentratio: this_.shoufuValueNum,
                term: this_.qixianValueNum,
                businessid: this_.md.businessid,
                tailmoney: this_.financialproductJA.tailmoneypercent,
                downpaymentpara: this_.financialproductJA.downpayment,
                productpara: this_.financialproductJA.financing_amt,
                finalpayment: this_.financialproductJA.tailmoney,
                monthlysupply: this_.financialproductJA.monthlysupply,
                che_img: this_.carmodelJO.imgurl,
                sf: this_.financialproductJA.downpayment,
                yg: this_.financialproductJA.monthlysupply,
                name: this_.carmodelJO.name,
                md_name: this_.md.business_partner_nme,
                md_dizhi: this_.md.state_nme + this_.md.building_nme,
                md_cahngpin: this_.financialproductJA.summary,
                PVUVfrom: 'zhizu'
              };
              if (data.data.code == 'A00006') {
                data.data.orderinfo.PVUVfrom = 'zhizu';
                data.data.orderinfo.from = 'details';
                console.log(data.data);
                this_.$navigate('successfulorder', data.data.orderinfo);
                wx.showToast({
                  title: '创建订单成功',
                  icon: 'success',
                  duration: 2000
                });
                this_.$parent.clicknumordernumstat(2);
                this_.$parent.globalData.pageid = [];
                this_.$parent.globalData.pagename = [];
              } else if (data.data.code == 'A00002') {
                wx.showToast({
                  title: '登录失败',
                  icon: 'none',
                  duration: 1000
                });
              } else {
                this_.$navigate('order', zhi);
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
              return;
            }
          });
        } else {
          this_.$invoke('alert_l', 'chufa', true);
          this_.request_cs = function (access_token) {
            wx.request({
              url: parent_data.json_link + '/api/wxapp/reservationorder/createorderdirectrent?access_token=' + parent_data.access_token,
              data: {
                carmodelid: this_.carmodelJO.carmodelid,
                financialproductid: this_.financialproductJA.financialproductid,
                downpaymentratio: this_.shoufuValueNum,
                term: this_.qixianValueNum,
                businessid: this_.md.businessid,
                msup: this_.financialproductJA.newMonthlysupply,
                tailmoney: this_.financialproductJA.tailmoneypercent,
                downpaymentpara: this_.financialproductJA.downpayment,
                productpara: this_.financialproductJA.financing_amt,
                finalpayment: this_.financialproductJA.tailmoney,
                monthlysupply: this_.financialproductJA.monthlysupply,
                bondpara: this_.financialproductJA.bond,
                bondratio: this_.financialproductJA.bondpct
              },
              success: function success(data) {
                var zhi = {
                  carmodelid: this_.carmodelJO.carmodelid,
                  financialproductid: this_.financialproductJA.financialproductid,
                  downpaymentratio: this_.shoufuValueNum,
                  term: this_.qixianValueNum,
                  businessid: this_.md.businessid,
                  tailmoney: this_.financialproductJA.tailmoneypercent,
                  downpaymentpara: this_.financialproductJA.downpayment,
                  productpara: this_.financialproductJA.financing_amt,
                  finalpayment: this_.financialproductJA.tailmoney,
                  monthlysupply: this_.financialproductJA.monthlysupply,
                  che_img: this_.carmodelJO.imgurl,
                  sf: this_.financialproductJA.downpayment,
                  yg: this_.financialproductJA.monthlysupply,
                  name: this_.carmodelJO.name,
                  md_name: this_.md.business_partner_nme,
                  md_dizhi: this_.md.state_nme + this_.md.building_nme,
                  md_cahngpin: this_.financialproductJA.summary,
                  PVUVfrom: 'zhizu'
                };
                if (data.data.code == 'A00006') {
                  data.data.orderinfo.PVUVfrom = 'zhizu';
                  data.data.orderinfo.from = 'details';
                  this_.$navigate('successfulorder', data.data.orderinfo);
                  wx.showToast({
                    title: '创建订单成功',
                    icon: 'success',
                    duration: 2000
                  });
                  this_.$parent.clicknumordernumstat(2);
                  this_.$parent.globalData.pageid = [];
                  this_.$parent.globalData.pagename = [];
                } else if (data.data.code == 'A00002') {
                  wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 1000
                  });
                } else {
                  this_.$navigate('order', zhi);
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
                return;
              }
            });
          };
        }
      },

      // 咨询客服
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '021-20689938' //仅为示例，并非真实的电话号码
        });
      },

      // 首付slider滑动
      shoufuChange: function shoufuChange(value) {
        this.shoufuValueNum = value;
        this.getGoodDetail('noLoading');
      },

      // 期限slider滑动
      qixianChange: function qixianChange(value) {
        this.qixianValueNum = value;
        this.getGoodDetail('noLoading');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(straight_detail, [{
    key: 'onLoad',
    value: function onLoad(res) {
      var json_link = this.$parent.globalData.json_link;
      // 微信接口获取jscode
      wx.login({
        success: function success(res) {
          wx.request({
            url: json_link + '/api/wxa/sessionkey?mpid=DZ2018',
            data: {
              jscode: res.code
            },
            success: function success(data) {}
          });
        }
      });
      wx.hideLoading();
      this.carmodelid = res.carmodelid;
      this.financialid = res.financialid;
      this.getGoodDetail('onLoad');
    }

    // 获取门店信息

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.PVUVstatistical('directrentdetail');
      this.isDianji = true;
      this.url_link = this.$parent.globalData.url_link;
      if (this.$parent.globalData.selectMendian.businessid) {
        this.md = this.$parent.globalData.selectMendian;
        this.mdid = this.md.businessid;
      }
      this.$apply();
    }

    // 清空数据

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$parent.clicknumordernumstat(2);
      this.$parent.globalData.pageid = [];
      this.$parent.globalData.pagename = [];
    }

    // 获取商品详情数据

  }, {
    key: 'getGoodDetail',
    value: function getGoodDetail(value) {
      if (!value) {
        wx.showLoading({
          title: '加载中'
        });
      }
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      wx.request({
        url: json_link + '/api/wxapp/directrent/carmodel/info',
        data: {
          carmodelid: this_.carmodelid,
          financialid: this_.financialid,
          downpaymentpercent: this_.shoufuValueNum,
          loanterm: this_.qixianValueNum
        },
        success: function success(res) {
          if (!value) {
            wx.hideLoading();
          }

          if (res.data.financialproductJA) {
            this_.financialproductJA = res.data.financialproductJA;
            this_.financialproductJA.newMonthlysupply = res.data.financialproductJA.monthlysupply.toFixed(2);
          } else {
            this_.financialproductJA = {};
            this_.financialproductJA.newMonthlysupply = 0;
          }

          if (res.data.carmodelJO) {
            this_.carmodelJO = res.data.carmodelJO;
          }

          if (res.data.activityJO) {
            this_.activityJO = res.data.activityJO;
          } else {
            this_.activityJO = [];
          }

          if (res.data.businessinfoJO) {
            this_.md = res.data.businessinfoJO;
          } else {
            this_.md = {};
          }

          if (res.data.financialproductJA) {
            this_.summary = res.data.financialproductJA;
            this_.weikuanValueNum = res.data.financialproductJA.tailmoneypercent;
          } else {
            this_.weikuanValueNum = 10;
          }
          this_.testList = res.data.financialproductJA ? res.data.financialproductJA.term : [];

          if (value === 'onLoad') {
            this_.$broadcast('attachhed', this_.testList, this_.qixianValue);
          }

          this_.addGoodToMyFoot();
          this_.iscollected();
          this_.$apply();
        }
      });
    }

    // 判断用户是否收藏

  }, {
    key: 'iscollected',
    value: function iscollected(callback) {
      var json_link = this.$parent.globalData.json_link;
      var parent_data = this.$parent.globalData;
      var this_ = this;
      if (parent_data.access_token != '' && parent_data.access_token != undefined) {
        wx.request({
          url: json_link + '/api/wxapp/collection/isoper?access_token=' + parent_data.access_token,
          data: {
            carmodelid: this_.carmodelid,
            financialproductid: this_.financialproductJA.financial_product_id,
            msup: this_.financialproductJA.newMonthlysupply,
            downpaymentratio: this_.shoufuValueNum,
            term: this_.qixianValueNum,
            tailmoney: this_.financialproductJA.tailmoneypercent,
            productpara: this_.financialproductJA.financing_amt
          },
          success: function success(res) {
            this_.collected = res.data.data === 'exit' ? true : false;
            this_.collectionid = res.data.collectionid;
            this_.$apply();
            callback ? callback() : '';
          }
        });
      }
    }

    // 添加足迹

  }, {
    key: 'addGoodToMyFoot',
    value: function addGoodToMyFoot() {
      // 每次显示，添加到我的足迹
      var good = {
        // 0 直租详情 1 金融商品列表
        type: 0,
        carmodelid: this.carmodelJO.carmodelid,
        financialproductid: this.financialproductJA.financialproductid,
        daikuantag: '直租',
        goodimage: this.carmodelJO.imgurl,
        carseriesname: this.carmodelJO.carseriesname,
        name: this.carmodelJO.name,
        price: parseInt(this.carmodelJO.price) / 10000,
        cardpageJA: this.financialproductJA.cardpageJA,
        downpayment: this.financialproductJA.downpayment,
        monthlysupply: this.financialproductJA.monthlysupply,
        downpaymentpercent: this.shoufuValueNum,
        loanterm: this.qixianValueNum
      };
      this.$parent.myFootData('add', good);
    }
  }]);

  return straight_detail;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(straight_detail , 'pages/straight_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmFpZ2h0X2RldGFpbC5qcyJdLCJuYW1lcyI6WyJzdHJhaWdodF9kZXRhaWwiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidXNlcmluZm9fYWxlcnQiLCJVc2VyaW5mb19hbGVydCIsImFsZXJ0X2wiLCJBbGVydCIsInNob3VmdVNsaWRlciIsIlNsaWRlciIsInFpeGlhblNsaWRlciIsIndlaWt1YW5TbGlkZXIiLCJzaWRlYmFyY2siLCJTaWRlYmFyX2NrIiwiZGF0YSIsImRvbmd6IiwiZG9uZ3p3IiwibG9hbnRlcm0iLCJ1cmxfbGluayIsInJlcXVlc3RfY3MiLCJtZCIsIm1kaWQiLCJ3cCIsIndwaWQiLCJvZWRzIiwiY2FybW9kZWxpZCIsImZpbmFuY2lhbHByb2R1Y3RpZCIsImZpbmFuY2lhbF9wcm9kdWN0X2lkIiwic2VsZWN0IiwidGFiaW5kZXgiLCJjb25maWd1cmVJbmRleCIsImNvbGxlY3RlZCIsInNob3VmdVZhbHVlIiwic2hvdWZ1VmFsdWVOdW0iLCJxaXhpYW5WYWx1ZSIsInFpeGlhblZhbHVlTnVtIiwid2Vpa3VhblZhbHVlTnVtIiwiZmluYW5jaWFscHJvZHVjdEpBIiwiY2FybW9kZWxKTyIsImFjdGl2aXR5Sk8iLCJjb2xsZWN0aW9uaWQiLCJpc0RpYW5qaSIsInN1bW1hcnkiLCJ0ZXN0TGlzdCIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJmaW5hbmNpYWxpZCIsImxpbmtUbyIsImEiLCJ0aGlzXyIsImpzb25fbGluayIsImdldEdvb2REZXRhaWwiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhZ2VpZCIsInBhZ2VuYW1lIiwiY2xpY2tudW1vcmRlcm51bXN0YXQiLCJja19idG4iLCJlIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwicGFyZW50X2RhdGEiLCJyZXF1ZXN0IiwidXJsIiwiY2Fyc2VyaWVzaWQiLCJzdWNjZXNzIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiJGludm9rZSIsImZhaWwiLCJzaG93VG9hc3QiLCJpY29uIiwiaGlkZVRvYXN0IiwiYWxlcnRfdXNlcmluZm8iLCJ6aGkiLCJqYXZhX2xvZ2luIiwiZGV0YWlsIiwiYWxlcnRfdGVsIiwicmVzIiwiY29uc29sZSIsImxvZyIsIml2IiwidW5kZWZpbmVkIiwibG9naW5fdGVsbnVtX2l2IiwibG9naW5fdGVsbnVtX21peWFvIiwibWl5YW8iLCJnZXRTZXR0aW5nIiwibG9naW5pbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwic2VsZWN0U2hvcCIsImFzc2V0X21vZGVsX2NkZSIsIm5hdmlnYXRlVG8iLCJ0YWJDaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInBhcnNlSW50Iiwic2V0Q29uZmlnSW5kZXgiLCJjb25maWd1cmVpbmRleCIsInRhcF9zYyIsImFjY2Vzc190b2tlbiIsImN1cnJlbnRDb2xsZWN0IiwiY29kZSIsIiRhcHBseSIsImJ1c2luZXNzaWQiLCJkb3ducGF5bWVudHBhcmEiLCJkb3ducGF5bWVudCIsIm1zdXAiLCJuZXdNb250aGx5c3VwcGx5IiwiZG93bnBheW1lbnRyYXRpbyIsInRlcm0iLCJ0YWlsbW9uZXkiLCJ0YWlsbW9uZXlwZXJjZW50IiwicHJvZHVjdHBhcmEiLCJmaW5hbmNpbmdfYW10IiwiYm9uZHBhcmEiLCJib25kIiwiYm9uZHJhdGlvIiwiYm9uZHBjdCIsImlzY29sbGVjdGVkIiwidGFwX2xqc3EiLCJmaW5hbHBheW1lbnQiLCJtb250aGx5c3VwcGx5IiwiY2hlX2ltZyIsImltZ3VybCIsInNmIiwieWciLCJuYW1lIiwibWRfbmFtZSIsImJ1c2luZXNzX3BhcnRuZXJfbm1lIiwibWRfZGl6aGkiLCJzdGF0ZV9ubWUiLCJidWlsZGluZ19ubWUiLCJtZF9jYWhuZ3BpbiIsIlBWVVZmcm9tIiwib3JkZXJpbmZvIiwiZnJvbSIsIiRuYXZpZ2F0ZSIsImR1cmF0aW9uIiwidGFwX3RlbCIsIm1ha2VQaG9uZUNhbGwiLCJwaG9uZU51bWJlciIsInNob3VmdUNoYW5nZSIsInZhbHVlIiwicWl4aWFuQ2hhbmdlIiwibG9naW4iLCJqc2NvZGUiLCJQVlVWc3RhdGlzdGljYWwiLCJzZWxlY3RNZW5kaWFuIiwiZG93bnBheW1lbnRwZXJjZW50IiwidG9GaXhlZCIsImJ1c2luZXNzaW5mb0pPIiwiJGJyb2FkY2FzdCIsImFkZEdvb2RUb015Rm9vdCIsImNhbGxiYWNrIiwiZ29vZCIsInR5cGUiLCJkYWlrdWFudGFnIiwiZ29vZGltYWdlIiwiY2Fyc2VyaWVzbmFtZSIsInByaWNlIiwiY2FyZHBhZ2VKQSIsIm15Rm9vdERhdGEiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsZTs7Ozs7Ozs7Ozs7Ozs7d01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsa0JBQWlCLEVBQUMsY0FBYSxFQUFkLEVBQWlCLFlBQVcsWUFBNUIsRUFBbEIsRUFBNEQsV0FBVSxFQUFDLFlBQVcsYUFBWixFQUF0RSxFQUFpRyxnQkFBZSxFQUFDLE9BQU0sR0FBUCxFQUFXLE9BQU0sSUFBakIsRUFBc0IsUUFBTyxJQUE3QixFQUFrQyxZQUFXLG1DQUE3QyxFQUFpRixxQkFBb0IsYUFBckcsRUFBaEgsRUFBb08sZ0JBQWUsRUFBQyxZQUFXLG1DQUFaLEVBQW5QLEVBQW9TLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBaFQsRSxRQUNUQyxPLEdBQVUsRUFBQyxrQkFBaUIsRUFBQyxnQkFBZSxnQkFBaEIsRUFBbEIsRUFBb0QsV0FBVSxFQUFDLGdCQUFlLFdBQWhCLEVBQTlELEVBQTJGLGdCQUFlLEVBQUMscUJBQW9CLGNBQXJCLEVBQTFHLEVBQStJLGdCQUFlLEVBQUMscUJBQW9CLGNB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LFlBQU4sR0FBcUJ3QyxJQUFJbEUsSUFBSixDQUFTMEIsWUFBOUI7QUFDQVUsa0JBQU11RCxNQUFOO0FBQ0FtRCx1QkFBV0EsVUFBWCxHQUF3QixFQUF4QjtBQUNEO0FBbkJRLFNBQVg7QUFxQkQ7QUFDRjs7QUFFRDs7OztzQ0FDa0I7QUFDaEI7QUFDQSxVQUFJQyxPQUFPO0FBQ1Q7QUFDQUMsY0FBTSxDQUZHO0FBR1RySSxvQkFBWSxLQUFLYSxVQUFMLENBQWdCYixVQUhuQjtBQUlUQyw0QkFBb0IsS0FBS1csa0JBQUwsQ0FBd0JYLGtCQUpuQztBQUtUcUksb0JBQVksSUFMSDtBQU1UQyxtQkFBVyxLQUFLMUgsVUFBTCxDQUFnQndGLE1BTmxCO0FBT1RtQyx1QkFBZSxLQUFLM0gsVUFBTCxDQUFnQjJILGFBUHRCO0FBUVRoQyxjQUFNLEtBQUszRixVQUFMLENBQWdCMkYsSUFSYjtBQVNUaUMsZUFBT2hFLFNBQVMsS0FBSzVELFVBQUwsQ0FBZ0I0SCxLQUF6QixJQUFrQyxLQVRoQztBQVVUQyxvQkFBWSxLQUFLOUgsa0JBQUwsQ0FBd0I4SCxVQVYzQjtBQVdUdkQscUJBQWEsS0FBS3ZFLGtCQUFMLENBQXdCdUUsV0FYNUI7QUFZVGdCLHVCQUFlLEtBQUt2RixrQkFBTCxDQUF3QnVGLGFBWjlCO0FBYVQyQiw0QkFBb0IsS0FBS3RILGNBYmhCO0FBY1RoQixrQkFBVSxLQUFLa0I7QUFkTixPQUFYO0FBZ0JBLFdBQUtrQixPQUFMLENBQWErRyxVQUFiLENBQXdCLEtBQXhCLEVBQStCUCxJQUEvQjtBQUNEOzs7O0VBMXVCMENRLGVBQUtDLEk7O2tCQUE3QnpLLGUiLCJmaWxlIjoic3RyYWlnaHRfZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgVXNlcmluZm9fYWxlcnQgZnJvbSAnLi4vY29tcG9uZW50cy91c2VyaW5mb19hbGVydCc7XHJcbmltcG9ydCBBbGVydCBmcm9tICcuLi9jb21wb25lbnRzL2FsZXJ0JztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL1NsaWRlcic7XHJcbmltcG9ydCBxaXhpYW5TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9xaXhpYW5TbGlkZXInO1xyXG5pbXBvcnQgU2lkZWJhcl9jayBmcm9tICcuLi9jb21wb25lbnRzL3NpZGViYXJfY2snO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RyYWlnaHRfZGV0YWlsIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lqn5ZOB6K+m5oOFJ1xyXG4gIH07XHJcblxyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+eZu+W9lVwifSxcImFsZXJ0X2xcIjp7XCJ0ZXh0X3poaVwiOlwi5Lic5q2j6YeR6J6N6K+35rGC5o6I5p2D5omL5py65Y+3XCJ9LFwic2hvdWZ1U2xpZGVyXCI6e1wibWluXCI6XCIwXCIsXCJtYXhcIjpcIjUwXCIsXCJzdGVwXCI6XCIxMFwiLFwiYmxvY2tVcmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsrJ2hrLnBuZyc6Jyd9fVwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInNob3VmdVZhbHVlXCJ9LFwicWl4aWFuU2xpZGVyXCI6e1wiYmxvY2tVcmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsrJ2hrLnBuZyc6Jyd9fVwifSxcInNpZGViYXJja1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6c2lkZWJhcl8ub25jZVwiOlwic2lkZWJhcl9cIn19O1xyXG4kZXZlbnRzID0ge1widXNlcmluZm9fYWxlcnRcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImFsZXJ0X3VzZXJpbmZvXCJ9LFwiYWxlcnRfbFwiOntcInYtb246Y2hpbGRGblwiOlwiYWxlcnRfdGVsXCJ9LFwic2hvdWZ1U2xpZGVyXCI6e1widi1vbjpzbGlkZXJDaGFuZ2VcIjpcInNob3VmdUNoYW5nZVwifSxcInFpeGlhblNsaWRlclwiOntcInYtb246c2xpZGVyQ2hhbmdlXCI6XCJxaXhpYW5DaGFuZ2VcIn0sXCJzaWRlYmFyY2tcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcImxpbmtUb1wifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgdXNlcmluZm9fYWxlcnQ6IFVzZXJpbmZvX2FsZXJ0LFxyXG4gICAgYWxlcnRfbDogQWxlcnQsXHJcbiAgICBzaG91ZnVTbGlkZXI6IFNsaWRlcixcclxuICAgIHFpeGlhblNsaWRlcixcclxuICAgIHdlaWt1YW5TbGlkZXI6IFNsaWRlcixcclxuICAgIHNpZGViYXJjazogU2lkZWJhcl9ja1xyXG4gIH07XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBkb25nejogJ+mihOe6pumXqOW6lycsXHJcbiAgICBkb25nenc6ICfph5Hono3kuqflk4Hor6bmg4UnLFxyXG4gICAgbG9hbnRlcm06ICcnLFxyXG4gICAgLy8g5Zu+54mH5Zyw5Z2AXHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICAvLyDlm57osIPlh73mlbBcclxuICAgIHJlcXVlc3RfY3M6IGZ1bmN0aW9uKCkge30sXHJcbiAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgIG1kOiB7fSxcclxuICAgIG1kaWQ6ICcnLFxyXG4gICAgd3A6ICcnLFxyXG4gICAgd3BpZDogJycsXHJcbiAgICBvZWRzOiBmYWxzZSxcclxuICAgIC8vIOi9puWei2lkXHJcbiAgICBjYXJtb2RlbGlkOiAnJyxcclxuICAgIC8vIOS6p+WTgWlkXHJcbiAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6ICcnLFxyXG4gICAgZmluYW5jaWFsX3Byb2R1Y3RfaWQ6ICcnLFxyXG4gICAgLy8gb25sb2FkX3Jlczoge30sXHJcbiAgICBzZWxlY3Q6IGZhbHNlLFxyXG4gICAgdGFiaW5kZXg6IDAsIC8vIHRhYuWIh+aNolxyXG4gICAgY29uZmlndXJlSW5kZXg6IDAsIC8vIOaYvuekuuafkOS4qumFjee9rumhuVxyXG4gICAgY29sbGVjdGVkOiBmYWxzZSwgLy8g5ZWG5ZOB5piv5ZCm5pS26JePXHJcbiAgICAvLyDpppbku5hcclxuICAgIHNob3VmdVZhbHVlOiAxMCxcclxuICAgIHNob3VmdVZhbHVlTnVtOiAxMCxcclxuICAgIC8vIOacn+mZkFxyXG4gICAgcWl4aWFuVmFsdWU6IDM2LFxyXG4gICAgcWl4aWFuVmFsdWVOdW06IDM2LFxyXG4gICAgLy8g5bC+5qy+XHJcbiAgICAvLyB3ZWlrdWFuVmFsdWU6IDEyLFxyXG4gICAgd2Vpa3VhblZhbHVlTnVtOiAwLFxyXG4gICAgLy8g6YeR6J6N5Lqn5ZOBXHJcbiAgICBmaW5hbmNpYWxwcm9kdWN0SkE6IHt9LFxyXG4gICAgY2FybW9kZWxKTzoge30sXHJcbiAgICAvLyDmtLvliqhcclxuICAgIGFjdGl2aXR5Sk86IFtdLFxyXG4gICAgY29sbGVjdGlvbmlkOiAnJyxcclxuICAgIC8vIOeUs+ivt+eCueWHu+asoeaVsOaOp+WItlxyXG4gICAgaXNEaWFuamk6IHRydWUsXHJcbiAgICBzdW1tYXJ5OiAnJyxcclxuICAgIC8vIOacn+mZkHNsaWRlcuWIl+ihqFxyXG4gICAgdGVzdExpc3Q6IFtdLFxyXG4gICAgdXJsX2xpbms6JydcclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6XHJcbiAgICAgICAgICAnL3BhZ2VzL3N0cmFpZ2h0X2RldGFpbD9jYXJtb2RlbGlkPScgK1xyXG4gICAgICAgICAgdGhpcy5jYXJtb2RlbGlkICtcclxuICAgICAgICAgICcmZmluYW5jaWFsaWQ9JyArXHJcbiAgICAgICAgICB0aGlzLmZpbmFuY2lhbGlkICtcclxuICAgICAgICAgICcmZG93bnBheW1lbnRwZXJjZW50PScgK1xyXG4gICAgICAgICAgdGhpcy5zaG91ZnVWYWx1ZU51bSArXHJcbiAgICAgICAgICAnJmxvYW50ZXJtPScgK1xyXG4gICAgICAgICAgdGhpcy5xaXhpYW5WYWx1ZU51bVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOi9puWei+WIl+ihqFxyXG4gICAgbGlua1RvKGEpIHtcclxuICAgICAgdmFyIHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IGNhcm1vZGVsaWQgPSBhO1xyXG4gICAgICB0aGlzXy5jYXJtb2RlbGlkID0gYTtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICB0aGlzLmdldEdvb2REZXRhaWwoKTtcclxuICAgICAgLy8gd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9kaXJlY3RyZW50L2Nhcm1vZGVsL2luZm8nLFxyXG4gICAgICAvLyAgIGRhdGE6IHtcclxuICAgICAgLy8gICAgIGNhcm1vZGVsaWQ6IGNhcm1vZGVsaWQsXHJcbiAgICAgIC8vICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAvLyAgICAgbG9hbnRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIC8vICAgICB0aGlzXy54cV9zaiA9IGRhdGEuZGF0YS5jYXJtb2RlbEpPO1xyXG4gICAgICAvLyAgICAgdGhpc18uY2Fyc2VyaWVzaWQgPSBkYXRhLmRhdGEuY2FybW9kZWxKTy5jYXJzZXJpZXNpZDtcclxuICAgICAgLy8gICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkE7XHJcbiAgICAgIC8vICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAvLyAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgLy8gICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAvLyAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgLy8gICAgIH0pO1xyXG5cclxuICAgICAgLy8gICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIC8vICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAvLyAgICAgfSwgMjAwMCk7XHJcbiAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFthXTtcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbM107XHJcbiAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgxKTtcclxuICAgIH0sXHJcbiAgICAvLyDmn6XnnIvovablnotcclxuICAgIGNrX2J0bihlKSB7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDpcclxuICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAnL2FwaS93eGFwcC9uZXdjYXJsb2FuL2Nhcm1vZGVsL2xpc3RieWNhcnNlcmllcycsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2Fyc2VyaWVzaWQ6IGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgIHRoaXNfLiRpbnZva2UoJ3NpZGViYXJjaycsICdzb21lTWV0aG9kJywgZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g6K+35rGC55So5oi35L+h5oGvXHJcbiAgICBhbGVydF91c2VyaW5mbyhlKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIHpoaS5qYXZhX2xvZ2luKGUuZGV0YWlsLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgIH0sXHJcbiAgICAvLyDor7fmsYLmiYvmnLrlj7dcclxuICAgIGFsZXJ0X3RlbChyZXMpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+aOiOadgzEwJyk7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIGZhbHNlKTtcclxuXHJcbiAgICAgIGlmIChyZXMuaXYgPT0gdW5kZWZpbmVkKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIHpoaS5sb2dpbl90ZWxudW1faXYgPSByZXMuaXY7XHJcbiAgICAgIHpoaS5sb2dpbl90ZWxudW1fbWl5YW8gPSByZXMubWl5YW87XHJcbiAgICAgIC8vIOafpeeci+aYr+WQpuaOiOadg1xyXG4gICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIHpoaS5sb2dpbmluZyA9IHRydWU7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DMScpO1xyXG4gICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DMicpO1xyXG4gICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzlj6/ku6Xnm7TmjqXosIPnlKggZ2V0VXNlckluZm8g6I635Y+W5aS05YOP5pi156ewXHJcbiAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmjojmnYMzJyk7XHJcbiAgICAgICAgICAgICAgICB6aGkuamF2YV9sb2dpbihyZXMsIHRoaXNfLnJlcXVlc3RfY3MpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DNCcpO1xyXG4gICAgICAgICAgICB0aGlzXy4kaW52b2tlKCd1c2VyaW5mb19hbGVydCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOmAieaLqemXqOW6l1xyXG4gICAgc2VsZWN0U2hvcCgpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgLy8g6L2m5Z6L5aSW6YOoaWRcclxuICAgICAgbGV0IGZpbmFuY2lhbF9wcm9kdWN0X2lkID0gdGhpcy5maW5hbmNpYWxwcm9kdWN0SkEuZmluYW5jaWFsX3Byb2R1Y3RfaWQ7XHJcbiAgICAgIGxldCBhc3NldF9tb2RlbF9jZGUgPSB0aGlzLmNhcm1vZGVsSk8uYXNzZXRfbW9kZWxfY2RlO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6XHJcbiAgICAgICAgICAnbWVuZGlhbj9lPScgK1xyXG4gICAgICAgICAgZmluYW5jaWFsX3Byb2R1Y3RfaWQgK1xyXG4gICAgICAgICAgJyZhPScgK1xyXG4gICAgICAgICAgYXNzZXRfbW9kZWxfY2RlICtcclxuICAgICAgICAgICcmanNvbl9saW5rPScgK1xyXG4gICAgICAgICAganNvbl9saW5rICtcclxuICAgICAgICAgICcmZnJvbT3nm7Tnp5/or6bmg4UnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIHRhYuWIh+aNolxyXG4gICAgdGFiQ2hhbmdlKGUpIHtcclxuICAgICAgbGV0IHRhYmluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGFiaW5kZXg7XHJcbiAgICAgIHRoaXMudGFiaW5kZXggPSBwYXJzZUludCh0YWJpbmRleCk7XHJcbiAgICB9LFxyXG4gICAgLy8g5YiH5o2i6YWN572u5L+h5oGvXHJcbiAgICBzZXRDb25maWdJbmRleChlKSB7XHJcbiAgICAgIGxldCBjb25maWd1cmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmNvbmZpZ3VyZWluZGV4O1xyXG4gICAgICB0aGlzLmNvbmZpZ3VyZUluZGV4ID0gY29uZmlndXJlSW5kZXg7XHJcbiAgICB9LFxyXG4gICAgLy8g54K55Ye75pS26JeP5oyJ6ZKuXHJcbiAgICB0YXBfc2MoKSB7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBpZiAocGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnKSB7XHJcbiAgICAgICAgLy8g5Yik5pat5b2T5YmN54q25oCBXHJcbiAgICAgICAgbGV0IGN1cnJlbnRDb2xsZWN0ID0gdGhpc18uY29sbGVjdGVkO1xyXG4gICAgICAgIGlmIChjdXJyZW50Q29sbGVjdCkge1xyXG4gICAgICAgICAgLy8g5Y+W5raI5pS26JePXHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi91bm9wZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNvbGxlY3Rpb25pZDogdGhpc18uY29sbGVjdGlvbmlkXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+W5raI5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLmNvbGxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXj+Wksei0pScsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOaUtuiXj1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICcvYXBpL3d4YXBwL2NvbGxlY3Rpb24vb3BlcmRpcmVjdHJlbnQ/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsSk8uY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpYWxfcHJvZHVjdF9pZCxcclxuICAgICAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmRvd25wYXltZW50LFxyXG4gICAgICAgICAgICAgIG1zdXA6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5uZXdNb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgIHRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgIHRhaWxtb25leTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICAgIGJvbmRwYXJhOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuYm9uZCxcclxuICAgICAgICAgICAgICBib25kcmF0aW86IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5ib25kcGN0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB0aGlzXy5pc2NvbGxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICB0aGlzXy5yZXF1ZXN0X2NzID0gZnVuY3Rpb24oYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICB0aGlzXy5pc2NvbGxlY3RlZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOWIpOaWreW9k+WJjeeKtuaAgVxyXG4gICAgICAgICAgICBsZXQgY3VycmVudENvbGxlY3QgPSB0aGlzXy5jb2xsZWN0ZWQ7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29sbGVjdCkge1xyXG4gICAgICAgICAgICAgIC8vIOWPlua2iOaUtuiXj1xyXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC9jb2xsZWN0aW9uL3Vub3Blcj9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgY29sbGVjdGlvbmlkOiB0aGlzXy5jb2xsZWN0aW9uaWRcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXy5jb2xsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtojmlLbol4/lpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyDmlLbol49cclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi9vcGVyZGlyZWN0cmVudD9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgY2FybW9kZWxpZDogdGhpc18uY2FybW9kZWxKTy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmZpbmFuY2lhbF9wcm9kdWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZGlkLFxyXG4gICAgICAgICAgICAgICAgICBkb3ducGF5bWVudHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICAgICAgbXN1cDogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLm5ld01vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgICAgICB0ZXJtOiB0aGlzXy5xaXhpYW5WYWx1ZU51bSxcclxuICAgICAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEudGFpbG1vbmV5cGVyY2VudCxcclxuICAgICAgICAgICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICAgICAgICBib25kcGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmJvbmQsXHJcbiAgICAgICAgICAgICAgICAgIGJvbmRyYXRpbzogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmJvbmRwY3RcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzXy5pc2NvbGxlY3RlZCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g55Sz6K+3XHJcbiAgICB0YXBfbGpzcSgpIHtcclxuICAgICAgLy8g5aaC5p6c5q2j5Zyo55m76ZmG77yM5LiN6IO954K55Ye755Sz6K+35oyJ6ZKuXHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHRoaXNfLmlzRGlhbmppID0gZmFsc2U7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnICYmXHJcbiAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9IHVuZGVmaW5lZFxyXG4gICAgICApIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9jcmVhdGVvcmRlcmRpcmVjdHJlbnQ/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsSk8uY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuZmluYW5jaWFscHJvZHVjdGlkLFxyXG4gICAgICAgICAgICBkb3ducGF5bWVudHJhdGlvOiB0aGlzXy5zaG91ZnVWYWx1ZU51bSxcclxuICAgICAgICAgICAgdGVybTogdGhpc18ucWl4aWFuVmFsdWVOdW0sXHJcbiAgICAgICAgICAgIGJ1c2luZXNzaWQ6IHRoaXNfLm1kLmJ1c2luZXNzaWQsXHJcbiAgICAgICAgICAgIG1zdXA6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5uZXdNb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICB0YWlsbW9uZXk6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS50YWlsbW9uZXlwZXJjZW50LFxyXG4gICAgICAgICAgICBkb3ducGF5bWVudHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS50YWlsbW9uZXksXHJcbiAgICAgICAgICAgIG1vbnRobHlzdXBwbHk6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5tb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICBib25kcGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmJvbmQsXHJcbiAgICAgICAgICAgIGJvbmRyYXRpbzogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmJvbmRwY3RcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHpoaSA9IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbEpPLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuZmluYW5jaWFscHJvZHVjdGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgIHRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgIGJ1c2luZXNzaWQ6IHRoaXNfLm1kLmJ1c2luZXNzaWQsXHJcbiAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEudGFpbG1vbmV5cGVyY2VudCxcclxuICAgICAgICAgICAgICBkb3ducGF5bWVudHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmZpbmFuY2luZ19hbXQsXHJcbiAgICAgICAgICAgICAgZmluYWxwYXltZW50OiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEudGFpbG1vbmV5LFxyXG4gICAgICAgICAgICAgIG1vbnRobHlzdXBwbHk6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5tb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICAgIGNoZV9pbWc6IHRoaXNfLmNhcm1vZGVsSk8uaW1ndXJsLFxyXG4gICAgICAgICAgICAgIHNmOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuZG93bnBheW1lbnQsXHJcbiAgICAgICAgICAgICAgeWc6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5tb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICAgIG5hbWU6IHRoaXNfLmNhcm1vZGVsSk8ubmFtZSxcclxuICAgICAgICAgICAgICBtZF9uYW1lOiB0aGlzXy5tZC5idXNpbmVzc19wYXJ0bmVyX25tZSxcclxuICAgICAgICAgICAgICBtZF9kaXpoaTogdGhpc18ubWQuc3RhdGVfbm1lICsgdGhpc18ubWQuYnVpbGRpbmdfbm1lLFxyXG4gICAgICAgICAgICAgIG1kX2NhaG5ncGluOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuc3VtbWFyeSxcclxuICAgICAgICAgICAgICBQVlVWZnJvbTogJ3poaXp1J1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICBkYXRhLmRhdGEub3JkZXJpbmZvLlBWVVZmcm9tID0gJ3poaXp1JztcclxuICAgICAgICAgICAgICBkYXRhLmRhdGEub3JkZXJpbmZvLmZyb20gPSAnZGV0YWlscyc7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coIGRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICB0aGlzXy4kbmF2aWdhdGUoJ3N1Y2Nlc3NmdWxvcmRlcicsIGRhdGEuZGF0YS5vcmRlcmluZm8pO1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuiuouWNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuY2xpY2tudW1vcmRlcm51bXN0YXQoMik7XHJcbiAgICAgICAgICAgICAgdGhpc18uJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFtdO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFtdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YS5jb2RlID09ICdBMDAwMDInKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhpc18uJG5hdmlnYXRlKCdvcmRlcicsIHpoaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICB0aGlzXy5yZXF1ZXN0X2NzID0gZnVuY3Rpb24oYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9jcmVhdGVvcmRlcmRpcmVjdHJlbnQ/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsSk8uY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpYWxwcm9kdWN0aWQsXHJcbiAgICAgICAgICAgICAgZG93bnBheW1lbnRyYXRpbzogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICAgICAgdGVybTogdGhpc18ucWl4aWFuVmFsdWVOdW0sXHJcbiAgICAgICAgICAgICAgYnVzaW5lc3NpZDogdGhpc18ubWQuYnVzaW5lc3NpZCxcclxuICAgICAgICAgICAgICBtc3VwOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEubmV3TW9udGhseXN1cHBseSxcclxuICAgICAgICAgICAgICB0YWlsbW9uZXk6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS50YWlsbW9uZXlwZXJjZW50LFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmRvd25wYXltZW50LFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RwYXJhOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuZmluYW5jaW5nX2FtdCxcclxuICAgICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS50YWlsbW9uZXksXHJcbiAgICAgICAgICAgICAgbW9udGhseXN1cHBseTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLm1vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgICAgYm9uZHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5ib25kLFxyXG4gICAgICAgICAgICAgIGJvbmRyYXRpbzogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmJvbmRwY3RcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHpoaSA9IHtcclxuICAgICAgICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsSk8uY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmZpbmFuY2lhbHByb2R1Y3RpZCxcclxuICAgICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAgICAgICAgICAgdGVybTogdGhpc18ucWl4aWFuVmFsdWVOdW0sXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZC5idXNpbmVzc2lkLFxyXG4gICAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEudGFpbG1vbmV5cGVyY2VudCxcclxuICAgICAgICAgICAgICAgIGRvd25wYXltZW50cGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmRvd25wYXltZW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICAgICAgZmluYWxwYXltZW50OiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEudGFpbG1vbmV5LFxyXG4gICAgICAgICAgICAgICAgbW9udGhseXN1cHBseTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLm1vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgICAgICBjaGVfaW1nOiB0aGlzXy5jYXJtb2RlbEpPLmltZ3VybCxcclxuICAgICAgICAgICAgICAgIHNmOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEuZG93bnBheW1lbnQsXHJcbiAgICAgICAgICAgICAgICB5ZzogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLm1vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzXy5jYXJtb2RlbEpPLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZF9uYW1lOiB0aGlzXy5tZC5idXNpbmVzc19wYXJ0bmVyX25tZSxcclxuICAgICAgICAgICAgICAgIG1kX2RpemhpOiB0aGlzXy5tZC5zdGF0ZV9ubWUgKyB0aGlzXy5tZC5idWlsZGluZ19ubWUsXHJcbiAgICAgICAgICAgICAgICBtZF9jYWhuZ3BpbjogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLnN1bW1hcnksXHJcbiAgICAgICAgICAgICAgICBQVlVWZnJvbTogJ3poaXp1J1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09ICdBMDAwMDYnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmRhdGEub3JkZXJpbmZvLlBWVVZmcm9tID0gJ3poaXp1JztcclxuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5vcmRlcmluZm8uZnJvbSA9ICdkZXRhaWxzJztcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnc3VjY2Vzc2Z1bG9yZGVyJywgZGF0YS5kYXRhLm9yZGVyaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuiuouWNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpc18uJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFtdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwMicpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnb3JkZXInLCB6aGkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5ZKo6K+i5a6i5pyNXHJcbiAgICB0YXBfdGVsKCkge1xyXG4gICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICBwaG9uZU51bWJlcjogJzAyMS0yMDY4OTkzOCcgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTnlLXor53lj7fnoIFcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g6aaW5LuYc2xpZGVy5ruR5YqoXHJcbiAgICBzaG91ZnVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG91ZnVWYWx1ZU51bSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmdldEdvb2REZXRhaWwoJ25vTG9hZGluZycpO1xyXG4gICAgfSxcclxuICAgIC8vIOacn+mZkHNsaWRlcua7keWKqFxyXG4gICAgcWl4aWFuQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMucWl4aWFuVmFsdWVOdW0gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5nZXRHb29kRGV0YWlsKCdub0xvYWRpbmcnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBvbkxvYWQocmVzKSB7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgLy8g5b6u5L+h5o6l5Y+j6I635Y+WanNjb2RlXHJcbiAgICB3eC5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGEvc2Vzc2lvbmtleT9tcGlkPURaMjAxOCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGpzY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKGRhdGEpIHt9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgIHRoaXMuY2FybW9kZWxpZCA9IHJlcy5jYXJtb2RlbGlkO1xyXG4gICAgdGhpcy5maW5hbmNpYWxpZCA9IHJlcy5maW5hbmNpYWxpZDtcclxuICAgIHRoaXMuZ2V0R29vZERldGFpbCgnb25Mb2FkJyk7XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bpl6jlupfkv6Hmga9cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLiRwYXJlbnQuUFZVVnN0YXRpc3RpY2FsKCdkaXJlY3RyZW50ZGV0YWlsJyk7XHJcbiAgICB0aGlzLmlzRGlhbmppID0gdHJ1ZTtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZWxlY3RNZW5kaWFuLmJ1c2luZXNzaWQpIHtcclxuICAgICAgdGhpcy5tZCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlbGVjdE1lbmRpYW47XHJcbiAgICAgIHRoaXMubWRpZCA9IHRoaXMubWQuYnVzaW5lc3NpZDtcclxuICAgIH1cclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgfVxyXG5cclxuICAvLyDmuIXnqbrmlbDmja5cclxuICBvblVubG9hZCgpIHtcclxuICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgyKTtcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VpZCA9IFtdO1xyXG4gICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluWVhuWTgeivpuaDheaVsOaNrlxyXG4gIGdldEdvb2REZXRhaWwodmFsdWUpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvZGlyZWN0cmVudC9jYXJtb2RlbC9pbmZvJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgZmluYW5jaWFsaWQ6IHRoaXNfLmZpbmFuY2lhbGlkLFxyXG4gICAgICAgIGRvd25wYXltZW50cGVyY2VudDogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgbG9hbnRlcm06IHRoaXNfLnFpeGlhblZhbHVlTnVtXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkEpIHtcclxuICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQSA9IHJlcy5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQTtcclxuICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5uZXdNb250aGx5c3VwcGx5ID0gKFxyXG4gICAgICAgICAgICByZXMuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkEubW9udGhseXN1cHBseVxyXG4gICAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy5maW5hbmNpYWxwcm9kdWN0SkEgPSB7fTtcclxuICAgICAgICAgIHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5uZXdNb250aGx5c3VwcGx5ID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5jYXJtb2RlbEpPKSB7XHJcbiAgICAgICAgICB0aGlzXy5jYXJtb2RlbEpPID0gcmVzLmRhdGEuY2FybW9kZWxKTztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5hY3Rpdml0eUpPKSB7XHJcbiAgICAgICAgICB0aGlzXy5hY3Rpdml0eUpPID0gcmVzLmRhdGEuYWN0aXZpdHlKTztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc18uYWN0aXZpdHlKTyA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmJ1c2luZXNzaW5mb0pPKSB7XHJcbiAgICAgICAgICB0aGlzXy5tZCA9IHJlcy5kYXRhLmJ1c2luZXNzaW5mb0pPO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy5tZCA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQSkge1xyXG4gICAgICAgICAgdGhpc18uc3VtbWFyeSA9IHJlcy5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQTtcclxuICAgICAgICAgIHRoaXNfLndlaWt1YW5WYWx1ZU51bSA9IHJlcy5kYXRhLmZpbmFuY2lhbHByb2R1Y3RKQS50YWlsbW9uZXlwZXJjZW50O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy53ZWlrdWFuVmFsdWVOdW0gPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpc18udGVzdExpc3QgPSByZXMuZGF0YS5maW5hbmNpYWxwcm9kdWN0SkFcclxuICAgICAgICAgID8gcmVzLmRhdGEuZmluYW5jaWFscHJvZHVjdEpBLnRlcm1cclxuICAgICAgICAgIDogW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSAnb25Mb2FkJykge1xyXG4gICAgICAgICAgdGhpc18uJGJyb2FkY2FzdCgnYXR0YWNoaGVkJywgdGhpc18udGVzdExpc3QsIHRoaXNfLnFpeGlhblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpc18uYWRkR29vZFRvTXlGb290KCk7XHJcbiAgICAgICAgdGhpc18uaXNjb2xsZWN0ZWQoKTtcclxuICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDliKTmlq3nlKjmiLfmmK/lkKbmlLbol49cclxuICBpc2NvbGxlY3RlZChjYWxsYmFjaykge1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIGlmIChcclxuICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnICYmXHJcbiAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSB1bmRlZmluZWRcclxuICAgICkge1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6XHJcbiAgICAgICAgICBqc29uX2xpbmsgK1xyXG4gICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi9pc29wZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpYWxfcHJvZHVjdF9pZCxcclxuICAgICAgICAgIG1zdXA6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RKQS5uZXdNb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgZG93bnBheW1lbnRyYXRpbzogdGhpc18uc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgICAgICB0ZXJtOiB0aGlzXy5xaXhpYW5WYWx1ZU51bSxcclxuICAgICAgICAgIHRhaWxtb25leTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18uZmluYW5jaWFscHJvZHVjdEpBLmZpbmFuY2luZ19hbXRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICB0aGlzXy5jb2xsZWN0ZWQgPSByZXMuZGF0YS5kYXRhID09PSAnZXhpdCcgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzXy5jb2xsZWN0aW9uaWQgPSByZXMuZGF0YS5jb2xsZWN0aW9uaWQ7XHJcbiAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgIGNhbGxiYWNrID8gY2FsbGJhY2soKSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyDmt7vliqDotrPov7lcclxuICBhZGRHb29kVG9NeUZvb3QoKSB7XHJcbiAgICAvLyDmr4/mrKHmmL7npLrvvIzmt7vliqDliLDmiJHnmoTotrPov7lcclxuICAgIGxldCBnb29kID0ge1xyXG4gICAgICAvLyAwIOebtOenn+ivpuaDhSAxIOmHkeiejeWVhuWTgeWIl+ihqFxyXG4gICAgICB0eXBlOiAwLFxyXG4gICAgICBjYXJtb2RlbGlkOiB0aGlzLmNhcm1vZGVsSk8uY2FybW9kZWxpZCxcclxuICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzLmZpbmFuY2lhbHByb2R1Y3RKQS5maW5hbmNpYWxwcm9kdWN0aWQsXHJcbiAgICAgIGRhaWt1YW50YWc6ICfnm7Tnp58nLFxyXG4gICAgICBnb29kaW1hZ2U6IHRoaXMuY2FybW9kZWxKTy5pbWd1cmwsXHJcbiAgICAgIGNhcnNlcmllc25hbWU6IHRoaXMuY2FybW9kZWxKTy5jYXJzZXJpZXNuYW1lLFxyXG4gICAgICBuYW1lOiB0aGlzLmNhcm1vZGVsSk8ubmFtZSxcclxuICAgICAgcHJpY2U6IHBhcnNlSW50KHRoaXMuY2FybW9kZWxKTy5wcmljZSkgLyAxMDAwMCxcclxuICAgICAgY2FyZHBhZ2VKQTogdGhpcy5maW5hbmNpYWxwcm9kdWN0SkEuY2FyZHBhZ2VKQSxcclxuICAgICAgZG93bnBheW1lbnQ6IHRoaXMuZmluYW5jaWFscHJvZHVjdEpBLmRvd25wYXltZW50LFxyXG4gICAgICBtb250aGx5c3VwcGx5OiB0aGlzLmZpbmFuY2lhbHByb2R1Y3RKQS5tb250aGx5c3VwcGx5LFxyXG4gICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXMuc2hvdWZ1VmFsdWVOdW0sXHJcbiAgICAgIGxvYW50ZXJtOiB0aGlzLnFpeGlhblZhbHVlTnVtXHJcbiAgICB9O1xyXG4gICAgdGhpcy4kcGFyZW50Lm15Rm9vdERhdGEoJ2FkZCcsIGdvb2QpO1xyXG4gIH1cclxufVxyXG4iXX0=