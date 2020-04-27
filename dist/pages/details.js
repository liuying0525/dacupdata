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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var details = function (_wepy$page) {
  _inherits(details, _wepy$page);

  function details() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, details);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = details.__proto__ || Object.getPrototypeOf(details)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '金融产品详情'
    }, _this.data = {
      // 回调函数
      request_cs: function request_cs() {},
      xq_sj: [],
      // 首付
      dk_sf: 20,
      // 期限
      dk_qx: 36,
      // 门店信息
      md: {},
      // 门店id
      mdid: '',
      // 产品信息
      wp: '',
      // 产品id
      wpid: '',
      // 车型id
      carmodelid: '',
      // 产品id
      financialproductid: '',
      // 产品外部id
      financial_product_id: '',
      onload_res: {},
      select: false,
      selected: true,
      // 商品是否收藏
      collected: false,
      // 申请点击次数控制
      isDianji: true,
      // 收藏id
      collectionid: '',
      // 首付比例
      shoufuValue: 20,
      shoufuValueNum: 20,
      // 期限比例
      qixianValue: 36,
      qixianValueNum: 36,
      // 尾款比例
      // weikuanValue: 60,
      weikuanValueNum: 60,
      // 首付
      downpayment: '',
      // 月供
      monthlysupply: '',
      isTouch: true,
      width: 0,
      btuBottom: '',
      // 期限slider列表
      testList: [],
      url_link: ''
    }, _this.$repeat = {}, _this.$props = { "userinfo_alert": { "xmlns:v-on": "", "text_zhi": "东正金融请求授权登录" }, "alert_l": { "text_zhi": "东正金融请求授权手机号" }, "shoufuSlider": { "min": "20", "max": "70", "step": "10", "blockUrl": "{{url_link?url_link+'hk.png':''}}", "xmlns:v-bind": "", "v-bind:value.sync": "shoufuValue" }, "qixianSlider": { "blockUrl": "{{url_link?url_link+'hk.png':''}}" } }, _this.$events = { "userinfo_alert": { "v-on:childFn": "alert_userinfo" }, "alert_l": { "v-on:childFn": "alert_tel" }, "shoufuSlider": { "v-on:sliderChange": "shoufuChange" }, "qixianSlider": { "v-on:sliderChange": "qixianChange" } }, _this.components = {
      userinfo_alert: _userinfo_alert2.default,
      alert_l: _alert2.default,
      shoufuSlider: _Slider2.default,
      qixianSlider: _qixianSlider2.default
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/details?carmodelid=' + this.onload_res.carmodelid + '&financialproductid=' + this.onload_res.financialproductid + '&downpaymentpercent=' + this.shoufuValueNum + '&loanterm=' + this.qixianValueNum + '&businessid=' + this.mdid
        };
      },
      // 快速导航
      click_cx: function click_cx(e) {
        if (this.isTouch == true) {
          this.isTouch = false;
        } else {
          this.isTouch = true;
        }
      },

      // 去首页
      shouye: function shouye() {
        wx.navigateTo({
          url: 'index'
        });
      },

      // 去直租
      zhizhu: function zhizhu() {
        wx.navigateTo({
          url: 'straight'
        });
      },

      // 区我的收藏
      wode: function wode() {
        wx.navigateTo({
          url: 'myorder'
        });
      },
      select: function select(e) {
        if ('w' == e.currentTarget.dataset.w) {
          this.select = false, this.selected = true;
        } else if ('y' == e.currentTarget.dataset.y) {
          this.select = true, this.selected = false;
        }
      },

      // 申请
      bindsubmit: function bindsubmit(e) {
        // 如果正在登陆，不能点击申请按钮
        if (this.$parent.globalData.logining) {
          return false;
        }
        if (!this.isDianji) {
          return false;
        }
        var this_ = this;
        this_.isDianji = false;
        var parent_data = this.$parent.globalData;
        if (parent_data.access_token != '' && parent_data.access_token != undefined) {
          wx.request({
            url: parent_data.json_link + '/api/wxapp/reservationorder/createorder?access_token=' + parent_data.access_token,
            data: {
              carmodelid: this_.carmodelid,
              financialproductid: this_.financialproductid,
              downpaymentratio: this_.dk_sf,
              term: this_.dk_qx,
              businessid: this_.mdid,
              tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
              downpaymentpara: this_.wp.downpayment,
              productpara: this_.wp.financing_amt,
              finalpayment: this_.xq_sj.financialproductinfoJO.tailmoney,
              monthlysupply: this_.xq_sj.financialproductinfoJO.monthlysupply,
              source: parent_data.source,
              sourceid: parent_data.sourceid,
              formid: e.detail.formId
            },
            success: function success(data) {
              var zhi = {
                carmodelid: this_.carmodelid,
                financialproductid: this_.financialproductid,
                downpaymentratio: this_.dk_sf,
                term: this_.dk_qx,
                businessid: this_.mdid,
                tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
                downpaymentpara: this_.wp.downpayment,
                productpara: this_.wp.financing_amt,
                finalpayment: this_.xq_sj.financialproductinfoJO.tailmoney,
                monthlysupply: this_.xq_sj.financialproductinfoJO.monthlysupply,
                che_img: this_.xq_sj.carmodelJO.imgurl,
                sf: this_.xq_sj.financialproductinfoJO.downpayment,
                yg: this_.xq_sj.financialproductinfoJO.monthlysupply,
                name: this_.xq_sj.carmodelJO.name,
                md_name: this_.md.business_partner_nme,
                md_dizhi: this_.md.building_nme, // this_.md.state_nme + this_.md.building_nme,
                md_cahngpin: this_.xq_sj.financialproductinfoJO.line_pro_name
              };
              if (data.data.code == 'A00002') {
                wx.showToast({
                  title: '登录失败',
                  icon: 'none',
                  duration: 1000
                });
              }
              if (data.data.code == 'A00005') {
                wx.showToast({
                  title: data.data.errmsg,
                  icon: 'none',
                  duration: 1000
                });
              }
              if (data.data.code == 'A00004') {
                //04信息不完整
                this_.$navigate('order', zhi);
              }
              if (data.data.code == 'A00006') {
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
              url: parent_data.json_link + '/api/wxapp/reservationorder/createorder?access_token=' + parent_data.access_token,
              data: {
                carmodelid: this_.carmodelid,
                financialproductid: this_.financialproductid,
                downpaymentratio: this_.dk_sf,
                term: this_.dk_qx,
                businessid: this_.mdid,
                tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
                downpaymentpara: this_.wp.downpayment,
                productpara: this_.wp.financing_amt,
                finalpayment: this_.xq_sj.financialproductinfoJO.tailmoney,
                monthlysupply: this_.xq_sj.financialproductinfoJO.monthlysupply,
                source: parent_data.source,
                sourceid: parent_data.sourceid,
                formid: e.detail.formId
              },
              success: function success(data) {
                var zhi = {
                  carmodelid: this_.carmodelid,
                  financialproductid: this_.financialproductid,
                  downpaymentratio: this_.dk_sf,
                  term: this_.dk_qx,
                  businessid: this_.mdid,
                  tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
                  downpaymentpara: this_.wp.downpayment,
                  productpara: this_.wp.financing_amt,
                  finalpayment: this_.xq_sj.financialproductinfoJO.tailmoney,
                  monthlysupply: this_.xq_sj.financialproductinfoJO.monthlysupply,
                  che_img: this_.xq_sj.carmodelJO.imgurl,
                  sf: this_.xq_sj.financialproductinfoJO.downpayment,
                  yg: this_.xq_sj.financialproductinfoJO.monthlysupply,
                  name: this_.xq_sj.carmodelJO.name,
                  md_name: this_.md.business_partner_nme,
                  md_dizhi: this_.md.building_nme, //this_.md.state_nme + this_.md.building_nme,
                  md_cahngpin: this_.xq_sj.financialproductinfoJO.line_pro_name
                };
                if (data.data.code == 'A00002') {
                  wx.showToast({
                    title: '登录失败',
                    icon: 'none',
                    duration: 1000
                  });
                }
                if (data.data.code == 'A00004') {
                  //04信息不完整
                  this_.$navigate('order', zhi);
                }
                if (data.data.code == 'A00005') {
                  wx.showToast({
                    title: data.data.errmsg,
                    icon: 'none',
                    duration: 1000
                  });
                }
                if (data.data.code == 'A00006') {
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
        setTimeout(function () {
          this_.isDianji = true;
        }, 3000);
      },


      // 点击收藏按钮
      tap_sc: function tap_sc() {
        // 如果正在登陆，不能点击申请按钮
        if (this.$parent.globalData.logining) {
          return false;
        }
        var parent_data = this.$parent.globalData;
        var this_ = this;
        if (parent_data.access_token != '' && parent_data.access_token != undefined) {
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
              url: parent_data.json_link + '/api/wxapp/collection/oper?access_token=' + parent_data.access_token,
              data: {
                carmodelid: this_.carmodelid,
                financialproductid: this_.financial_product_id,
                businessid: this_.mdid,
                downpaymentratio: this_.dk_sf,
                term: this_.dk_qx,
                tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
                productpara: this_.wp.financing_amt,
                downpayment: this_.downpayment,
                msup: this_.monthlysupply
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
            // 判断当前状态
            this_.iscollected(function () {
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
                  url: parent_data.json_link + '/api/wxapp/collection/oper?access_token=' + parent_data.access_token,
                  data: {
                    carmodelid: this_.carmodelid,
                    financialproductid: this_.financial_product_id,
                    businessid: this_.mdid,
                    downpaymentratio: this_.dk_sf,
                    term: this_.dk_qx,
                    tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
                    productpara: this_.wp.financing_amt,
                    downpayment: this_.downpayment,
                    msup: this_.monthlysupply
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
      alert_userinfo: function alert_userinfo(e) {
        var this_ = this;
        var zhi = this.$parent.globalData;
        this_.$invoke('userinfo_alert', 'chufa', false);
        zhi.java_login(e.detail, this_.request_cs);
      },

      // 去门店页
      toMendian: function toMendian(e, a) {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        wx.navigateTo({
          url: 'mendian?e=' + e + '&a=' + a + '&json_link=' + json_link
        });
      },

      // 客服
      tap_tel: function tap_tel() {
        wx.makePhoneCall({
          phoneNumber: '021-20689938' //仅为示例，并非真实的电话号码
        });
      },

      // 首付slider滑动
      shoufuChange: function shoufuChange(value) {
        this.shoufuValueNum = value;
        this.dk_sf = value;
        this.getGoodDetail('noLoading');
      },

      // 期限slider滑动
      qixianChange: function qixianChange(value) {
        this.qixianValueNum = value;
        this.dk_qx = value;
        var obj = JSON.parse(JSON.stringify(this.onload_res));
        obj.loanterm = value;
        this.onload_res = obj;
        console.log(this.onload_res);
        this.getGoodDetail('noLoading');
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(details, [{
    key: 'onLoad',
    value: function onLoad(res) {
      this.onload_res = res;
      console.log(res);
      wx.showLoading({
        title: '加载中'
      });
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
      var parent_data = this.$parent.globalData;
      var pst = wx.getSystemInfoSync();
      parent_data.login_phonemodel = pst.model;
      if (pst.model.search('iPhone X') != -1) {
        this.btuBottom = '68rpx';
      } else {
        this.btuBottom = '15rpx';
      }
      var this_ = this;

      this.carmodelid = res.carmodelid;
      this.financialproductid = res.financialproductid;
      this.shoufuValue = res.downpaymentpercent;
      this.shoufuValueNum = res.downpaymentpercent;

      // 金融产品详情
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/financialproduct/info',
        data: {
          carmodelid: this_.carmodelid,
          financialproductid: this_.financialproductid,
          downpaymentpercent: res.downpaymentpercent,
          loanterm: res.loanterm
        },
        success: function success(data) {
          setTimeout(function () {
            wx.hideLoading();
          }, 0);
          console.log(data.data);
          this_.xq_sj = data.data;
          this_.downpayment = data.data.financialproductinfoJO.downpayment;
          this_.monthlysupply = data.data.financialproductinfoJO.monthlysupply;
          this_.md = data.data.businessinfoJO;
          this_.mdid = data.data.businessinfoJO.businessid;
          this_.wp = data.data.financialproductinfoJO;
          this_.financial_product_id = data.data.financialproductinfoJO.financial_product_id;
          this_.wpid = data.data.carmodelJO.asset_model_cde;

          this_.testList = data.data.financialproductinfoJO.term;

          if (this_.testList.indexOf(parseInt(res.loanterm)) !== -1) {
            this_.qixianValue = res.loanterm;
            this_.qixianValueNum = res.loanterm;
          } else {
            this_.qixianValue = this_.testList[0];
            this_.qixianValueNum = this_.testList[0];
          }

          this_.iscollected();
          this_.$broadcast('attachhed', this_.testList, this_.qixianValue);
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
      this_.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      // 统计
      this.$parent.UVstatistical('loanproductdetail');
      this.$parent.PVUVstatistical('loanproductdetail');

      // 门店信息
      if (this.$parent.globalData.selectMendian.businessid) {
        this.md = this.$parent.globalData.selectMendian;
        this.mdid = this.$parent.globalData.selectMendian.businessid;
      }
    }
    // 清空页面数据

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.shoufuValue = 20;
      this.shoufuValueNum = 20;
      this.qixianValue = 36;
      this.qixianValueNum = 36;
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
      var res = this_.onload_res;
      var json_link = this.$parent.globalData.json_link;
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/financialproduct/info',
        data: {
          carmodelid: res.carmodelid,
          financialproductid: res.financialproductid,
          downpaymentpercent: this_.shoufuValueNum,
          loanterm: this_.qixianValueNum,
          businessid: this_.mdid
        },
        success: function success(data) {
          if (!value) {
            wx.hideLoading();
          }
          this_.xq_sj = data.data;
          this_.md = data.data.businessinfoJO;
          this_.downpayment = data.data.financialproductinfoJO.downpayment;
          this_.monthlysupply = data.data.financialproductinfoJO.monthlysupply;
          var downpaymentPercent = data.data.financialproductinfoJO.downpaymentPercent;
          this_.shoufuValueNum = downpaymentPercent;
          this_.$broadcast('setValues', downpaymentPercent);
          // this_.shoufuValue=downpaymentPercent
          this_.dk_sf = downpaymentPercent;
          this_.mdid = data.data.businessinfoJO.businessid;
          this_.wp = data.data.financialproductinfoJO;
          this_.wpid = data.data.carmodelJO.asset_model_cde;
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
            financialproductid: this_.financial_product_id,
            businessid: this_.mdid,
            downpaymentratio: this_.dk_sf,
            term: this_.dk_qx,
            tailmoney: this_.xq_sj.financialproductinfoJO.tailmoneypercent,
            productpara: this_.wp.financing_amt
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
  }]);

  return details;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(details , 'pages/details'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbHMuanMiXSwibmFtZXMiOlsiZGV0YWlscyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwicmVxdWVzdF9jcyIsInhxX3NqIiwiZGtfc2YiLCJka19xeCIsIm1kIiwibWRpZCIsIndwIiwid3BpZCIsImNhcm1vZGVsaWQiLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJmaW5hbmNpYWxfcHJvZHVjdF9pZCIsIm9ubG9hZF9yZXMiLCJzZWxlY3QiLCJzZWxlY3RlZCIsImNvbGxlY3RlZCIsImlzRGlhbmppIiwiY29sbGVjdGlvbmlkIiwic2hvdWZ1VmFsdWUiLCJzaG91ZnVWYWx1ZU51bSIsInFpeGlhblZhbHVlIiwicWl4aWFuVmFsdWVOdW0iLCJ3ZWlrdWFuVmFsdWVOdW0iLCJkb3ducGF5bWVudCIsIm1vbnRobHlzdXBwbHkiLCJpc1RvdWNoIiwid2lkdGgiLCJidHVCb3R0b20iLCJ0ZXN0TGlzdCIsInVybF9saW5rIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidXNlcmluZm9fYWxlcnQiLCJVc2VyaW5mb19hbGVydCIsImFsZXJ0X2wiLCJBbGVydCIsInNob3VmdVNsaWRlciIsIlNsaWRlciIsInFpeGlhblNsaWRlciIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJjbGlja19jeCIsImUiLCJzaG91eWUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ6aGl6aHUiLCJ3b2RlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJ3IiwieSIsImJpbmRzdWJtaXQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImxvZ2luaW5nIiwidGhpc18iLCJwYXJlbnRfZGF0YSIsImFjY2Vzc190b2tlbiIsInVuZGVmaW5lZCIsInJlcXVlc3QiLCJqc29uX2xpbmsiLCJkb3ducGF5bWVudHJhdGlvIiwidGVybSIsImJ1c2luZXNzaWQiLCJ0YWlsbW9uZXkiLCJmaW5hbmNpYWxwcm9kdWN0aW5mb0pPIiwidGFpbG1vbmV5cGVyY2VudCIsImRvd25wYXltZW50cGFyYSIsInByb2R1Y3RwYXJhIiwiZmluYW5jaW5nX2FtdCIsImZpbmFscGF5bWVudCIsInNvdXJjZSIsInNvdXJjZWlkIiwiZm9ybWlkIiwiZGV0YWlsIiwiZm9ybUlkIiwic3VjY2VzcyIsInpoaSIsImNoZV9pbWciLCJjYXJtb2RlbEpPIiwiaW1ndXJsIiwic2YiLCJ5ZyIsIm5hbWUiLCJtZF9uYW1lIiwiYnVzaW5lc3NfcGFydG5lcl9ubWUiLCJtZF9kaXpoaSIsImJ1aWxkaW5nX25tZSIsIm1kX2NhaG5ncGluIiwibGluZV9wcm9fbmFtZSIsImNvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsImVycm1zZyIsIiRuYXZpZ2F0ZSIsIm9yZGVyaW5mbyIsImZyb20iLCJjbGlja251bW9yZGVybnVtc3RhdCIsInBhZ2VpZCIsInBhZ2VuYW1lIiwiZmFpbCIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCIkaW52b2tlIiwidGFwX3NjIiwiY3VycmVudENvbGxlY3QiLCIkYXBwbHkiLCJtc3VwIiwiaXNjb2xsZWN0ZWQiLCJhbGVydF90ZWwiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaXYiLCJsb2dpbl90ZWxudW1faXYiLCJsb2dpbl90ZWxudW1fbWl5YW8iLCJtaXlhbyIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsImdldFVzZXJJbmZvIiwiamF2YV9sb2dpbiIsImFsZXJ0X3VzZXJpbmZvIiwidG9NZW5kaWFuIiwiYSIsInRhcF90ZWwiLCJtYWtlUGhvbmVDYWxsIiwicGhvbmVOdW1iZXIiLCJzaG91ZnVDaGFuZ2UiLCJ2YWx1ZSIsImdldEdvb2REZXRhaWwiLCJxaXhpYW5DaGFuZ2UiLCJvYmoiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJsb2FudGVybSIsInNob3dMb2FkaW5nIiwibG9naW4iLCJqc2NvZGUiLCJwc3QiLCJnZXRTeXN0ZW1JbmZvU3luYyIsImxvZ2luX3Bob25lbW9kZWwiLCJtb2RlbCIsInNlYXJjaCIsImRvd25wYXltZW50cGVyY2VudCIsImhpZGVMb2FkaW5nIiwiYnVzaW5lc3NpbmZvSk8iLCJhc3NldF9tb2RlbF9jZGUiLCJpbmRleE9mIiwicGFyc2VJbnQiLCIkYnJvYWRjYXN0IiwiVVZzdGF0aXN0aWNhbCIsIlBWVVZzdGF0aXN0aWNhbCIsInNlbGVjdE1lbmRpYW4iLCJkb3ducGF5bWVudFBlcmNlbnQiLCJjYWxsYmFjayIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLGtCQUFZLHNCQUFXLENBQUUsQ0FGcEI7QUFHTEMsYUFBTyxFQUhGO0FBSUw7QUFDQUMsYUFBTyxFQUxGO0FBTUw7QUFDQUMsYUFBTyxFQVBGO0FBUUw7QUFDQUMsVUFBSSxFQVRDO0FBVUw7QUFDQUMsWUFBTSxFQVhEO0FBWUw7QUFDQUMsVUFBSSxFQWJDO0FBY0w7QUFDQUMsWUFBTSxFQWZEO0FBZ0JMO0FBQ0FDLGtCQUFZLEVBakJQO0FBa0JMO0FBQ0FDLDBCQUFvQixFQW5CZjtBQW9CTDtBQUNBQyw0QkFBc0IsRUFyQmpCO0FBc0JMQyxrQkFBWSxFQXRCUDtBQXVCTEMsY0FBUSxLQXZCSDtBQXdCTEMsZ0JBQVUsSUF4Qkw7QUF5Qkw7QUFDQUMsaUJBQVcsS0ExQk47QUEyQkw7QUFDQUMsZ0JBQVUsSUE1Qkw7QUE2Qkw7QUFDQUMsb0JBQWMsRUE5QlQ7QUErQkw7QUFDQUMsbUJBQWEsRUFoQ1I7QUFpQ0xDLHNCQUFnQixFQWpDWDtBQWtDTDtBQUNBQyxtQkFBYSxFQW5DUjtBQW9DTEMsc0JBQWdCLEVBcENYO0FBcUNMO0FBQ0E7QUFDQUMsdUJBQWlCLEVBdkNaO0FBd0NMO0FBQ0FDLG1CQUFhLEVBekNSO0FBMENMO0FBQ0FDLHFC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QUFDQWhCLFdBQUdpQixPQUFILENBQVc7QUFDVGYsZUFDRWdCLFlBQ0EsNENBREEsR0FFQUosWUFBWUMsWUFKTDtBQUtUOUQsZ0JBQU07QUFDSlMsd0JBQVltRCxNQUFNbkQsVUFEZDtBQUVKQyxnQ0FBb0JrRCxNQUFNakQsb0JBRnRCO0FBR0p5RCx3QkFBWVIsTUFBTXRELElBSGQ7QUFJSjRELDhCQUFrQk4sTUFBTXpELEtBSnBCO0FBS0pnRSxrQkFBTVAsTUFBTXhELEtBTFI7QUFNSmlFLHVCQUFXVCxNQUFNMUQsS0FBTixDQUFZb0Usc0JBQVosQ0FBbUNDLGdCQU4xQztBQU9KRSx5QkFBYWIsTUFBTXJELEVBQU4sQ0FBU21FO0FBUGxCLFdBTEc7QUFjVE8saUJBZFMsbUJBY0RvQyxHQWRDLEVBY0k7QUFDWHpELGtCQUFNN0MsU0FBTixHQUFrQnNHLElBQUlySCxJQUFKLENBQVNBLElBQVQsS0FBa0IsTUFBbEIsR0FBMkIsSUFBM0IsR0FBa0MsS0FBcEQ7QUFDQTRELGtCQUFNM0MsWUFBTixHQUFxQm9HLElBQUlySCxJQUFKLENBQVNpQixZQUE5QjtBQUNBMkMsa0JBQU1xRCxNQUFOO0FBQ0FpRCx1QkFBV0EsVUFBWCxHQUF3QixFQUF4QjtBQUNEO0FBbkJRLFNBQVg7QUFxQkQ7QUFDRjs7OztFQXJ1QmtDQyxlQUFLQyxJOztrQkFBckJ2SyxPIiwiZmlsZSI6ImRldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBVc2VyaW5mb19hbGVydCBmcm9tICcuLi9jb21wb25lbnRzL3VzZXJpbmZvX2FsZXJ0JztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2xpZGVyJztcclxuaW1wb3J0IHFpeGlhblNsaWRlciBmcm9tICcuLi9jb21wb25lbnRzL3FpeGlhblNsaWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBkZXRhaWxzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6YeR6J6N5Lqn5ZOB6K+m5oOFJ1xyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOWbnuiwg+WHveaVsFxyXG4gICAgcmVxdWVzdF9jczogZnVuY3Rpb24oKSB7fSxcclxuICAgIHhxX3NqOiBbXSxcclxuICAgIC8vIOmmluS7mFxyXG4gICAgZGtfc2Y6IDIwLFxyXG4gICAgLy8g5pyf6ZmQXHJcbiAgICBka19xeDogMzYsXHJcbiAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgIG1kOiB7fSxcclxuICAgIC8vIOmXqOW6l2lkXHJcbiAgICBtZGlkOiAnJyxcclxuICAgIC8vIOS6p+WTgeS/oeaBr1xyXG4gICAgd3A6ICcnLFxyXG4gICAgLy8g5Lqn5ZOBaWRcclxuICAgIHdwaWQ6ICcnLFxyXG4gICAgLy8g6L2m5Z6LaWRcclxuICAgIGNhcm1vZGVsaWQ6ICcnLFxyXG4gICAgLy8g5Lqn5ZOBaWRcclxuICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogJycsXHJcbiAgICAvLyDkuqflk4HlpJbpg6hpZFxyXG4gICAgZmluYW5jaWFsX3Byb2R1Y3RfaWQ6ICcnLFxyXG4gICAgb25sb2FkX3Jlczoge30sXHJcbiAgICBzZWxlY3Q6IGZhbHNlLFxyXG4gICAgc2VsZWN0ZWQ6IHRydWUsXHJcbiAgICAvLyDllYblk4HmmK/lkKbmlLbol49cclxuICAgIGNvbGxlY3RlZDogZmFsc2UsXHJcbiAgICAvLyDnlLPor7fngrnlh7vmrKHmlbDmjqfliLZcclxuICAgIGlzRGlhbmppOiB0cnVlLFxyXG4gICAgLy8g5pS26JePaWRcclxuICAgIGNvbGxlY3Rpb25pZDogJycsXHJcbiAgICAvLyDpppbku5jmr5TkvotcclxuICAgIHNob3VmdVZhbHVlOiAyMCxcclxuICAgIHNob3VmdVZhbHVlTnVtOiAyMCxcclxuICAgIC8vIOacn+mZkOavlOS+i1xyXG4gICAgcWl4aWFuVmFsdWU6IDM2LFxyXG4gICAgcWl4aWFuVmFsdWVOdW06IDM2LFxyXG4gICAgLy8g5bC+5qy+5q+U5L6LXHJcbiAgICAvLyB3ZWlrdWFuVmFsdWU6IDYwLFxyXG4gICAgd2Vpa3VhblZhbHVlTnVtOiA2MCxcclxuICAgIC8vIOmmluS7mFxyXG4gICAgZG93bnBheW1lbnQ6ICcnLFxyXG4gICAgLy8g5pyI5L6bXHJcbiAgICBtb250aGx5c3VwcGx5OiAnJyxcclxuICAgIGlzVG91Y2g6IHRydWUsXHJcbiAgICB3aWR0aDogMCxcclxuICAgIGJ0dUJvdHRvbTogJycsXHJcbiAgICAvLyDmnJ/pmZBzbGlkZXLliJfooahcclxuICAgIHRlc3RMaXN0OiBbXSxcclxuICAgIHVybF9saW5rOicnXHJcbiAgfTtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXNlcmluZm9fYWxlcnRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInRleHRfemhpXCI6XCLkuJzmraPph5Hono3or7fmsYLmjojmnYPnmbvlvZVcIn0sXCJhbGVydF9sXCI6e1widGV4dF96aGlcIjpcIuS4nOato+mHkeiejeivt+axguaOiOadg+aJi+acuuWPt1wifSxcInNob3VmdVNsaWRlclwiOntcIm1pblwiOlwiMjBcIixcIm1heFwiOlwiNzBcIixcInN0ZXBcIjpcIjEwXCIsXCJibG9ja1VybFwiOlwie3t1cmxfbGluaz91cmxfbGluaysnaGsucG5nJzonJ319XCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOnZhbHVlLnN5bmNcIjpcInNob3VmdVZhbHVlXCJ9LFwicWl4aWFuU2xpZGVyXCI6e1wiYmxvY2tVcmxcIjpcInt7dXJsX2xpbms/dXJsX2xpbmsrJ2hrLnBuZyc6Jyd9fVwifX07XHJcbiRldmVudHMgPSB7XCJ1c2VyaW5mb19hbGVydFwiOntcInYtb246Y2hpbGRGblwiOlwiYWxlcnRfdXNlcmluZm9cIn0sXCJhbGVydF9sXCI6e1widi1vbjpjaGlsZEZuXCI6XCJhbGVydF90ZWxcIn0sXCJzaG91ZnVTbGlkZXJcIjp7XCJ2LW9uOnNsaWRlckNoYW5nZVwiOlwic2hvdWZ1Q2hhbmdlXCJ9LFwicWl4aWFuU2xpZGVyXCI6e1widi1vbjpzbGlkZXJDaGFuZ2VcIjpcInFpeGlhbkNoYW5nZVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgdXNlcmluZm9fYWxlcnQ6IFVzZXJpbmZvX2FsZXJ0LFxyXG4gICAgYWxlcnRfbDogQWxlcnQsXHJcbiAgICBzaG91ZnVTbGlkZXI6IFNsaWRlcixcclxuICAgIHFpeGlhblNsaWRlcjogcWl4aWFuU2xpZGVyXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6XHJcbiAgICAgICAgICAnL3BhZ2VzL2RldGFpbHM/Y2FybW9kZWxpZD0nICtcclxuICAgICAgICAgIHRoaXMub25sb2FkX3Jlcy5jYXJtb2RlbGlkICtcclxuICAgICAgICAgICcmZmluYW5jaWFscHJvZHVjdGlkPScgK1xyXG4gICAgICAgICAgdGhpcy5vbmxvYWRfcmVzLmZpbmFuY2lhbHByb2R1Y3RpZCArXHJcbiAgICAgICAgICAnJmRvd25wYXltZW50cGVyY2VudD0nICtcclxuICAgICAgICAgIHRoaXMuc2hvdWZ1VmFsdWVOdW0gK1xyXG4gICAgICAgICAgJyZsb2FudGVybT0nICtcclxuICAgICAgICAgIHRoaXMucWl4aWFuVmFsdWVOdW0gK1xyXG4gICAgICAgICAgJyZidXNpbmVzc2lkPScgK1xyXG4gICAgICAgICAgdGhpcy5tZGlkXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8g5b+r6YCf5a+86IiqXHJcbiAgICBjbGlja19jeChlKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzVG91Y2ggPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDljrvpppbpobVcclxuICAgIHNob3V5ZSgpIHtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnaW5kZXgnXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOWOu+ebtOenn1xyXG4gICAgemhpemh1KCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdzdHJhaWdodCdcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5Yy65oiR55qE5pS26JePXHJcbiAgICB3b2RlKCkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdteW9yZGVyJ1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0KGUpIHtcclxuICAgICAgaWYgKCd3JyA9PSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC53KSB7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0ID0gZmFsc2UpLCAodGhpcy5zZWxlY3RlZCA9IHRydWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKCd5JyA9PSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC55KSB7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0ID0gdHJ1ZSksICh0aGlzLnNlbGVjdGVkID0gZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g55Sz6K+3XHJcbiAgICAgYmluZHN1Ym1pdChlKSB7XHJcbiAgICAgIC8vIOWmguaenOato+WcqOeZu+mZhu+8jOS4jeiDveeCueWHu+eUs+ivt+aMiemSrlxyXG4gICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5pbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLmlzRGlhbmppKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHRoaXNfLmlzRGlhbmppID0gZmFsc2U7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBpZiAocGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuICE9ICcnICYmIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9jcmVhdGVvcmRlcj9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY2FybW9kZWxpZDogdGhpc18uY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0aWQsXHJcbiAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLmRrX3NmLFxyXG4gICAgICAgICAgICB0ZXJtOiB0aGlzXy5ka19xeCxcclxuICAgICAgICAgICAgYnVzaW5lc3NpZDogdGhpc18ubWRpZCxcclxuICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgIGRvd25wYXltZW50cGFyYTogdGhpc18ud3AuZG93bnBheW1lbnQsXHJcbiAgICAgICAgICAgIHByb2R1Y3RwYXJhOiB0aGlzXy53cC5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8udGFpbG1vbmV5LFxyXG4gICAgICAgICAgICBtb250aGx5c3VwcGx5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLm1vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgIHNvdXJjZTogcGFyZW50X2RhdGEuc291cmNlLFxyXG4gICAgICAgICAgICBzb3VyY2VpZDogcGFyZW50X2RhdGEuc291cmNlaWQsXHJcbiAgICAgICAgICAgIGZvcm1pZDplLmRldGFpbC5mb3JtSWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IHpoaSA9IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogdGhpc18uZmluYW5jaWFscHJvZHVjdGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLmRrX3NmLFxyXG4gICAgICAgICAgICAgIHRlcm06IHRoaXNfLmRrX3F4LFxyXG4gICAgICAgICAgICAgIGJ1c2luZXNzaWQ6IHRoaXNfLm1kaWQsXHJcbiAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgZG93bnBheW1lbnRwYXJhOiB0aGlzXy53cC5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18ud3AuZmluYW5jaW5nX2FtdCxcclxuICAgICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8udGFpbG1vbmV5LFxyXG4gICAgICAgICAgICAgIG1vbnRobHlzdXBwbHk6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8ubW9udGhseXN1cHBseSxcclxuICAgICAgICAgICAgICBjaGVfaW1nOiB0aGlzXy54cV9zai5jYXJtb2RlbEpPLmltZ3VybCxcclxuICAgICAgICAgICAgICBzZjogdGhpc18ueHFfc2ouZmluYW5jaWFscHJvZHVjdGluZm9KTy5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICB5ZzogdGhpc18ueHFfc2ouZmluYW5jaWFscHJvZHVjdGluZm9KTy5tb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICAgIG5hbWU6IHRoaXNfLnhxX3NqLmNhcm1vZGVsSk8ubmFtZSxcclxuICAgICAgICAgICAgICBtZF9uYW1lOiB0aGlzXy5tZC5idXNpbmVzc19wYXJ0bmVyX25tZSxcclxuICAgICAgICAgICAgICBtZF9kaXpoaTogdGhpc18ubWQuYnVpbGRpbmdfbm1lLCAvLyB0aGlzXy5tZC5zdGF0ZV9ubWUgKyB0aGlzXy5tZC5idWlsZGluZ19ubWUsXHJcbiAgICAgICAgICAgICAgbWRfY2FobmdwaW46IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8ubGluZV9wcm9fbmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwMicpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA1Jykge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLmVycm1zZyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09ICdBMDAwMDQnKSB7XHJcbiAgICAgICAgICAgICAgLy8wNOS/oeaBr+S4jeWujOaVtFxyXG4gICAgICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnb3JkZXInLCB6aGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA2Jykge1xyXG4gICAgICAgICAgICAgIGRhdGEuZGF0YS5vcmRlcmluZm8uZnJvbSA9ICdkZXRhaWxzJztcclxuICAgICAgICAgICAgICB0aGlzXy4kbmF2aWdhdGUoJ3N1Y2Nlc3NmdWxvcmRlcicsIGRhdGEuZGF0YS5vcmRlcmluZm8pO1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuiuouWNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICB0aGlzXy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDIpO1xyXG4gICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbXTtcclxuICAgICAgICAgICAgICB0aGlzXy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpc18uJGludm9rZSgnYWxlcnRfbCcsICdjaHVmYScsIHRydWUpO1xyXG4gICAgICAgIHRoaXNfLnJlcXVlc3RfY3MgPSBmdW5jdGlvbihhY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6XHJcbiAgICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL2NyZWF0ZW9yZGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogdGhpc18uZmluYW5jaWFscHJvZHVjdGlkLFxyXG4gICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLmRrX3NmLFxyXG4gICAgICAgICAgICAgIHRlcm06IHRoaXNfLmRrX3F4LFxyXG4gICAgICAgICAgICAgIGJ1c2luZXNzaWQ6IHRoaXNfLm1kaWQsXHJcbiAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgZG93bnBheW1lbnRwYXJhOiB0aGlzXy53cC5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18ud3AuZmluYW5jaW5nX2FtdCxcclxuICAgICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8udGFpbG1vbmV5LFxyXG4gICAgICAgICAgICAgIG1vbnRobHlzdXBwbHk6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8ubW9udGhseXN1cHBseSxcclxuICAgICAgICAgICAgICBzb3VyY2U6IHBhcmVudF9kYXRhLnNvdXJjZSxcclxuICAgICAgICAgICAgICBzb3VyY2VpZDogcGFyZW50X2RhdGEuc291cmNlaWQsXHJcbiAgICAgICAgICAgICAgIGZvcm1pZDplLmRldGFpbC5mb3JtSWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHpoaSA9IHtcclxuICAgICAgICAgICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLmZpbmFuY2lhbHByb2R1Y3RpZCxcclxuICAgICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHRoaXNfLmRrX3NmLFxyXG4gICAgICAgICAgICAgICAgdGVybTogdGhpc18uZGtfcXgsXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZGlkLFxyXG4gICAgICAgICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgICBkb3ducGF5bWVudHBhcmE6IHRoaXNfLndwLmRvd25wYXltZW50LFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLndwLmZpbmFuY2luZ19hbXQsXHJcbiAgICAgICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8udGFpbG1vbmV5LFxyXG4gICAgICAgICAgICAgICAgbW9udGhseXN1cHBseTogdGhpc18ueHFfc2ouZmluYW5jaWFscHJvZHVjdGluZm9KTy5tb250aGx5c3VwcGx5LFxyXG4gICAgICAgICAgICAgICAgY2hlX2ltZzogdGhpc18ueHFfc2ouY2FybW9kZWxKTy5pbWd1cmwsXHJcbiAgICAgICAgICAgICAgICBzZjogdGhpc18ueHFfc2ouZmluYW5jaWFscHJvZHVjdGluZm9KTy5kb3ducGF5bWVudCxcclxuICAgICAgICAgICAgICAgIHlnOiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLm1vbnRobHlzdXBwbHksXHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzXy54cV9zai5jYXJtb2RlbEpPLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtZF9uYW1lOiB0aGlzXy5tZC5idXNpbmVzc19wYXJ0bmVyX25tZSxcclxuICAgICAgICAgICAgICAgIG1kX2RpemhpOiB0aGlzXy5tZC5idWlsZGluZ19ubWUsLy90aGlzXy5tZC5zdGF0ZV9ubWUgKyB0aGlzXy5tZC5idWlsZGluZ19ubWUsXHJcbiAgICAgICAgICAgICAgICBtZF9jYWhuZ3BpbjogdGhpc18ueHFfc2ouZmluYW5jaWFscHJvZHVjdGluZm9KTy5saW5lX3Byb19uYW1lXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwMicpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn55m75b2V5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA0Jykge1xyXG4gICAgICAgICAgICAgICAgLy8wNOS/oeaBr+S4jeWujOaVtFxyXG4gICAgICAgICAgICAgICAgdGhpc18uJG5hdmlnYXRlKCdvcmRlcicsIHpoaSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAnQTAwMDA1Jykge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGRhdGEuZGF0YS5lcnJtc2csXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT0gJ0EwMDAwNicpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5vcmRlcmluZm8uZnJvbSA9ICdkZXRhaWxzJztcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnc3VjY2Vzc2Z1bG9yZGVyJywgZGF0YS5kYXRhLm9yZGVyaW5mbyk7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIm+W7uuiuouWNleaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpc18uJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgyKTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXNfLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFtdO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpc18uaXNEaWFuamkgPSB0cnVlO1xyXG4gICAgICB9LCAzMDAwKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8g54K55Ye75pS26JeP5oyJ6ZKuXHJcbiAgICB0YXBfc2MoKSB7XHJcbiAgICAgIC8vIOWmguaenOato+WcqOeZu+mZhu+8jOS4jeiDveeCueWHu+eUs+ivt+aMiemSrlxyXG4gICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5pbmcpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gJycgJiZcclxuICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gdW5kZWZpbmVkXHJcbiAgICAgICkge1xyXG4gICAgICAgIC8vIOWIpOaWreW9k+WJjeeKtuaAgVxyXG4gICAgICAgIGxldCBjdXJyZW50Q29sbGVjdCA9IHRoaXNfLmNvbGxlY3RlZDtcclxuICAgICAgICBpZiAoY3VycmVudENvbGxlY3QpIHtcclxuICAgICAgICAgIC8vIOWPlua2iOaUtuiXj1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgICAgICcvYXBpL3d4YXBwL2NvbGxlY3Rpb24vdW5vcGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjb2xsZWN0aW9uaWQ6IHRoaXNfLmNvbGxlY3Rpb25pZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT09ICdBMDAwMDYnKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXj+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzXy5jb2xsZWN0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5bmtojmlLbol4/lpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g5pS26JePXHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi9vcGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogdGhpc18uZmluYW5jaWFsX3Byb2R1Y3RfaWQsXHJcbiAgICAgICAgICAgICAgYnVzaW5lc3NpZDogdGhpc18ubWRpZCxcclxuICAgICAgICAgICAgICBkb3ducGF5bWVudHJhdGlvOiB0aGlzXy5ka19zZixcclxuICAgICAgICAgICAgICB0ZXJtOiB0aGlzXy5ka19xeCxcclxuICAgICAgICAgICAgICB0YWlsbW9uZXk6IHRoaXNfLnhxX3NqLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8udGFpbG1vbmV5cGVyY2VudCxcclxuICAgICAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18ud3AuZmluYW5jaW5nX2FtdCxcclxuICAgICAgICAgICAgICBkb3ducGF5bWVudDogdGhpc18uZG93bnBheW1lbnQsXHJcbiAgICAgICAgICAgICAgbXN1cDogdGhpc18ubW9udGhseXN1cHBseVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIHRoaXNfLmlzY29sbGVjdGVkKCk7XHJcbiAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICB0aGlzXy5yZXF1ZXN0X2NzID0gZnVuY3Rpb24oYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICAvLyDliKTmlq3lvZPliY3nirbmgIFcclxuICAgICAgICAgIHRoaXNfLmlzY29sbGVjdGVkKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRDb2xsZWN0ID0gdGhpc18uY29sbGVjdGVkO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbGxlY3QpIHtcclxuICAgICAgICAgICAgICAvLyDlj5bmtojmlLbol49cclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi91bm9wZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgICAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb25pZDogdGhpc18uY29sbGVjdGlvbmlkXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YS5kYXRhLmNvZGUgPT09ICdBMDAwMDYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+W5raI5pS26JeP5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXNfLmNvbGxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPlua2iOaUtuiXj+Wksei0pScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvLyDmlLbol49cclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuanNvbl9saW5rICtcclxuICAgICAgICAgICAgICAgICAgJy9hcGkvd3hhcHAvY29sbGVjdGlvbi9vcGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgICAgcGFyZW50X2RhdGEuYWNjZXNzX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLmZpbmFuY2lhbF9wcm9kdWN0X2lkLFxyXG4gICAgICAgICAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZGlkLFxyXG4gICAgICAgICAgICAgICAgICBkb3ducGF5bWVudHJhdGlvOiB0aGlzXy5ka19zZixcclxuICAgICAgICAgICAgICAgICAgdGVybTogdGhpc18uZGtfcXgsXHJcbiAgICAgICAgICAgICAgICAgIHRhaWxtb25leTpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RwYXJhOiB0aGlzXy53cC5maW5hbmNpbmdfYW10LFxyXG4gICAgICAgICAgICAgICAgICBkb3ducGF5bWVudDogdGhpc18uZG93bnBheW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgIG1zdXA6IHRoaXNfLm1vbnRobHlzdXBwbHlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmlLbol4/miJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uaXNjb2xsZWN0ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGVydF90ZWwocmVzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfmjojmnYMxMCcpO1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQgemhpID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXNfLiRpbnZva2UoJ2FsZXJ0X2wnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcblxyXG4gICAgICBpZiAocmVzLml2ID09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX2l2ID0gcmVzLml2O1xyXG4gICAgICB6aGkubG9naW5fdGVsbnVtX21peWFvID0gcmVzLm1peWFvO1xyXG4gICAgICAvLyDmn6XnnIvmmK/lkKbmjojmnYNcclxuICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICB6aGkubG9naW5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadgzEnKTtcclxuICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadgzInKTtcclxuICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5Y+v5Lul55u05o6l6LCD55SoIGdldFVzZXJJbmZvIOiOt+WPluWktOWDj+aYteensFxyXG4gICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5o6I5p2DMycpO1xyXG4gICAgICAgICAgICAgICAgemhpLmphdmFfbG9naW4ocmVzLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aOiOadgzQnKTtcclxuICAgICAgICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCB0cnVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhbGVydF91c2VyaW5mbyhlKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCB6aGkgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpc18uJGludm9rZSgndXNlcmluZm9fYWxlcnQnLCAnY2h1ZmEnLCBmYWxzZSk7XHJcbiAgICAgIHpoaS5qYXZhX2xvZ2luKGUuZGV0YWlsLCB0aGlzXy5yZXF1ZXN0X2NzKTtcclxuICAgIH0sXHJcbiAgICAvLyDljrvpl6jlupfpobVcclxuICAgIHRvTWVuZGlhbihlLCBhKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ21lbmRpYW4/ZT0nICsgZSArICcmYT0nICsgYSArICcmanNvbl9saW5rPScgKyBqc29uX2xpbmtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5a6i5pyNXHJcbiAgICB0YXBfdGVsKCkge1xyXG4gICAgICB3eC5tYWtlUGhvbmVDYWxsKHtcclxuICAgICAgICBwaG9uZU51bWJlcjogJzAyMS0yMDY4OTkzOCcgLy/ku4XkuLrnpLrkvovvvIzlubbpnZ7nnJ/lrp7nmoTnlLXor53lj7fnoIFcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g6aaW5LuYc2xpZGVy5ruR5YqoXHJcbiAgICBzaG91ZnVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG91ZnVWYWx1ZU51bSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmRrX3NmID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZ2V0R29vZERldGFpbCgnbm9Mb2FkaW5nJyk7XHJcbiAgICB9LFxyXG4gICAgLy8g5pyf6ZmQc2xpZGVy5ruR5YqoXHJcbiAgICBxaXhpYW5DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgdGhpcy5xaXhpYW5WYWx1ZU51bSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmRrX3F4ID0gdmFsdWU7XHJcbiAgICAgIGxldCBvYmogPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub25sb2FkX3JlcykpO1xyXG4gICAgICBvYmoubG9hbnRlcm0gPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbmxvYWRfcmVzID0gb2JqO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLm9ubG9hZF9yZXMpXHJcbiAgICAgIHRoaXMuZ2V0R29vZERldGFpbCgnbm9Mb2FkaW5nJyk7XHJcbiAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgb25Mb2FkKHJlcykge1xyXG4gICAgdGhpcy5vbmxvYWRfcmVzID0gcmVzO1xyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIC8vIOW+ruS/oeaOpeWPo+iOt+WPlmpzY29kZVxyXG4gICAgd3gubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhL3Nlc3Npb25rZXk/bXBpZD1EWjIwMTgnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBqc2NvZGU6IHJlcy5jb2RlXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc3VjY2VzcyhkYXRhKSB7fVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgdmFyIHBzdCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICBwYXJlbnRfZGF0YS5sb2dpbl9waG9uZW1vZGVsID0gcHN0Lm1vZGVsO1xyXG4gICAgaWYgKHBzdC5tb2RlbC5zZWFyY2goJ2lQaG9uZSBYJykgIT0gLTEpIHtcclxuICAgICAgdGhpcy5idHVCb3R0b20gPSAnNjhycHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5idHVCb3R0b20gPSAnMTVycHgnO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmNhcm1vZGVsaWQgPSByZXMuY2FybW9kZWxpZDtcclxuICAgIHRoaXMuZmluYW5jaWFscHJvZHVjdGlkID0gcmVzLmZpbmFuY2lhbHByb2R1Y3RpZDtcclxuICAgIHRoaXMuc2hvdWZ1VmFsdWUgPSByZXMuZG93bnBheW1lbnRwZXJjZW50O1xyXG4gICAgdGhpcy5zaG91ZnVWYWx1ZU51bSA9IHJlcy5kb3ducGF5bWVudHBlcmNlbnQ7XHJcblxyXG4gICAgXHJcbiAgICAvLyDph5Hono3kuqflk4Hor6bmg4VcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vZmluYW5jaWFscHJvZHVjdC9pbmZvJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzXy5maW5hbmNpYWxwcm9kdWN0aWQsXHJcbiAgICAgICAgZG93bnBheW1lbnRwZXJjZW50OiByZXMuZG93bnBheW1lbnRwZXJjZW50LFxyXG4gICAgICAgIGxvYW50ZXJtOiByZXMubG9hbnRlcm1cclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5kYXRhKVxyXG4gICAgICAgIHRoaXNfLnhxX3NqID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIHRoaXNfLmRvd25wYXltZW50ID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8uZG93bnBheW1lbnQ7XHJcbiAgICAgICAgdGhpc18ubW9udGhseXN1cHBseSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLm1vbnRobHlzdXBwbHk7XHJcbiAgICAgICAgdGhpc18ubWQgPSBkYXRhLmRhdGEuYnVzaW5lc3NpbmZvSk87XHJcbiAgICAgICAgdGhpc18ubWRpZCA9IGRhdGEuZGF0YS5idXNpbmVzc2luZm9KTy5idXNpbmVzc2lkO1xyXG4gICAgICAgIHRoaXNfLndwID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk87XHJcbiAgICAgICAgdGhpc18uZmluYW5jaWFsX3Byb2R1Y3RfaWQgPSBkYXRhLmRhdGEuZmluYW5jaWFscHJvZHVjdGluZm9KTy5maW5hbmNpYWxfcHJvZHVjdF9pZDtcclxuICAgICAgICB0aGlzXy53cGlkID0gZGF0YS5kYXRhLmNhcm1vZGVsSk8uYXNzZXRfbW9kZWxfY2RlO1xyXG4gICAgICBcclxuICAgICAgICB0aGlzXy50ZXN0TGlzdD1kYXRhLmRhdGEuZmluYW5jaWFscHJvZHVjdGluZm9KTy50ZXJtO1xyXG4gICAgICBcclxuICAgIFxyXG4gICAgICAgIGlmICh0aGlzXy50ZXN0TGlzdC5pbmRleE9mKHBhcnNlSW50KHJlcy5sb2FudGVybSkpICE9PSAtMSkge1xyXG4gICAgICAgICAgdGhpc18ucWl4aWFuVmFsdWUgPSByZXMubG9hbnRlcm07XHJcbiAgICAgICAgICB0aGlzXy5xaXhpYW5WYWx1ZU51bSA9IHJlcy5sb2FudGVybTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc18ucWl4aWFuVmFsdWUgPSB0aGlzXy50ZXN0TGlzdFswXTtcclxuICAgICAgICAgIHRoaXNfLnFpeGlhblZhbHVlTnVtID0gdGhpc18udGVzdExpc3RbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzXy5pc2NvbGxlY3RlZCgpO1xyXG4gICAgICAgIHRoaXNfLiRicm9hZGNhc3QoJ2F0dGFjaGhlZCcsIHRoaXNfLnRlc3RMaXN0LCB0aGlzXy5xaXhpYW5WYWx1ZSk7XHJcbiAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gIH1cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAvLyDnu5/orqFcclxuICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCdsb2FucHJvZHVjdGRldGFpbCcpO1xyXG4gICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnbG9hbnByb2R1Y3RkZXRhaWwnKTtcclxuICAgIFxyXG4gICAgLy8g6Zeo5bqX5L+h5oGvXHJcbiAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2VsZWN0TWVuZGlhbi5idXNpbmVzc2lkKSB7XHJcbiAgICAgIHRoaXMubWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZWxlY3RNZW5kaWFuO1xyXG4gICAgICB0aGlzLm1kaWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZWxlY3RNZW5kaWFuLmJ1c2luZXNzaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOa4heepuumhtemdouaVsOaNrlxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgdGhpcy5zaG91ZnVWYWx1ZSA9IDIwO1xyXG4gICAgdGhpcy5zaG91ZnVWYWx1ZU51bSA9IDIwO1xyXG4gICAgdGhpcy5xaXhpYW5WYWx1ZSA9IDM2O1xyXG4gICAgdGhpcy5xaXhpYW5WYWx1ZU51bSA9IDM2O1xyXG4gICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDIpO1xyXG4gICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW107XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5ZWG5ZOB6K+m5oOF5pWw5o2uXHJcbiAgZ2V0R29vZERldGFpbCh2YWx1ZSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIGxldCByZXMgPSB0aGlzXy5vbmxvYWRfcmVzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vZmluYW5jaWFscHJvZHVjdC9pbmZvJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhcm1vZGVsaWQ6IHJlcy5jYXJtb2RlbGlkLFxyXG4gICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogcmVzLmZpbmFuY2lhbHByb2R1Y3RpZCxcclxuICAgICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXNfLnNob3VmdVZhbHVlTnVtLFxyXG4gICAgICAgIGxvYW50ZXJtOiB0aGlzXy5xaXhpYW5WYWx1ZU51bSxcclxuICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZGlkXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXNfLnhxX3NqID0gZGF0YS5kYXRhO1xyXG4gICAgICAgIHRoaXNfLm1kID0gZGF0YS5kYXRhLmJ1c2luZXNzaW5mb0pPO1xyXG4gICAgICAgIHRoaXNfLmRvd25wYXltZW50ID0gZGF0YS5kYXRhLmZpbmFuY2lhbHByb2R1Y3RpbmZvSk8uZG93bnBheW1lbnQ7XHJcbiAgICAgICAgdGhpc18ubW9udGhseXN1cHBseSA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLm1vbnRobHlzdXBwbHk7XHJcbiAgICAgICAgbGV0IGRvd25wYXltZW50UGVyY2VudCA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLmRvd25wYXltZW50UGVyY2VudDtcclxuICAgICAgICB0aGlzXy5zaG91ZnVWYWx1ZU51bSA9IGRvd25wYXltZW50UGVyY2VudDtcclxuICAgICAgICB0aGlzXy4kYnJvYWRjYXN0KCdzZXRWYWx1ZXMnLCBkb3ducGF5bWVudFBlcmNlbnQpO1xyXG4gICAgICAgIC8vIHRoaXNfLnNob3VmdVZhbHVlPWRvd25wYXltZW50UGVyY2VudFxyXG4gICAgICAgIHRoaXNfLmRrX3NmID0gZG93bnBheW1lbnRQZXJjZW50O1xyXG4gICAgICAgIHRoaXNfLm1kaWQgPSBkYXRhLmRhdGEuYnVzaW5lc3NpbmZvSk8uYnVzaW5lc3NpZDtcclxuICAgICAgICB0aGlzXy53cCA9IGRhdGEuZGF0YS5maW5hbmNpYWxwcm9kdWN0aW5mb0pPO1xyXG4gICAgICAgIHRoaXNfLndwaWQgPSBkYXRhLmRhdGEuY2FybW9kZWxKTy5hc3NldF9tb2RlbF9jZGU7XHJcbiAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g5Yik5pat55So5oi35piv5ZCm5pS26JePXHJcbiAgaXNjb2xsZWN0ZWQoY2FsbGJhY2spIHtcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICBpZiAoXHJcbiAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbiAhPSAnJyAmJlxyXG4gICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4gIT0gdW5kZWZpbmVkXHJcbiAgICApIHtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAganNvbl9saW5rICtcclxuICAgICAgICAgICcvYXBpL3d4YXBwL2NvbGxlY3Rpb24vaXNvcGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBjYXJtb2RlbGlkOiB0aGlzXy5jYXJtb2RlbGlkLFxyXG4gICAgICAgICAgZmluYW5jaWFscHJvZHVjdGlkOiB0aGlzXy5maW5hbmNpYWxfcHJvZHVjdF9pZCxcclxuICAgICAgICAgIGJ1c2luZXNzaWQ6IHRoaXNfLm1kaWQsXHJcbiAgICAgICAgICBkb3ducGF5bWVudHJhdGlvOiB0aGlzXy5ka19zZixcclxuICAgICAgICAgIHRlcm06IHRoaXNfLmRrX3F4LFxyXG4gICAgICAgICAgdGFpbG1vbmV5OiB0aGlzXy54cV9zai5maW5hbmNpYWxwcm9kdWN0aW5mb0pPLnRhaWxtb25leXBlcmNlbnQsXHJcbiAgICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18ud3AuZmluYW5jaW5nX2FtdFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgIHRoaXNfLmNvbGxlY3RlZCA9IHJlcy5kYXRhLmRhdGEgPT09ICdleGl0JyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgIHRoaXNfLmNvbGxlY3Rpb25pZCA9IHJlcy5kYXRhLmNvbGxlY3Rpb25pZDtcclxuICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgICAgY2FsbGJhY2sgPyBjYWxsYmFjaygpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19