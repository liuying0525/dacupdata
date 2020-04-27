'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _input = require('./../components/input.js');

var _input2 = _interopRequireDefault(_input);

var _substitution = require('./../components/substitution.js');

var _substitution2 = _interopRequireDefault(_substitution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var branddd = function (_wepy$page) {
  _inherits(branddd, _wepy$page);

  function branddd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, branddd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = branddd.__proto__ || Object.getPrototypeOf(branddd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.$repeat = {}, _this.$props = { "substitution": { "xmlns:v-on": "", "value": "" } }, _this.$events = { "substitution": { "v-on:childFn": "my" } }, _this.components = {
      inputd: _input2.default,
      substitution: _substitution2.default
    }, _this.data = _defineProperty({
      url_link: '',
      // 默认排序弹框隐藏
      selectPerson: true,
      // 默认排序文本
      firstPerson: '默认排序',
      // 车价排序文本
      firstPersonb: '车价',
      // 品牌文本
      firstPersonc: '品牌',
      // 筛选文本
      firstPersond: '筛选',
      // 控制小三角样式
      selectArea: false,
      selectAreb: false,
      selectArec: false,
      selectAred: false,
      // 车价排序弹窗隐藏
      selectPersonb: true,
      selectPersonc: true,
      // 筛选弹窗隐藏
      selectPersond: true,
      // 请求地址
      json_link: '',
      // 控制筛选条件
      _num: 0,
      _numa: 0,
      _numb: 0,
      _numc: 0,
      _numd: 0,
      _nume: 0,
      _numm: 0,
      _nums: 0,
      // 车型列表
      textx: [],
      tx: '',
      // 车价条件选择
      cgje: 0,
      // 月供选择
      ygje: 0,
      // 首付选择
      sfje: 0,
      // 贴息选择
      txje: 0,
      // 期限选择
      qxje: 0,
      selectPersonf: false,
      page: 1,
      // 搜索文本
      ipo: '""',
      // 品牌id
      carbrandidred: '""',
      // 价格排序
      pricetypesort: 0,
      // 车价区间
      carpricesection: 0,
      code: '',
      getSousuo: true,
      searchLoadingComplete: false,
      inpiyxiaoshi: true
    }, 'url_link', ''), _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/branddd?page=1&pagesize=8&searchdata=' + '{searchname:' + this.ipo + '}'
        };
      },
      // 重置
      clickPersondp: function clickPersondp() {
        var are = this;
        var selectPersond = this.selectPersond;
        var json_link = this.json_link;
        are.firstPerson = '默认排序';
        are.firstPersonc = '品牌';
        are.pricetypesort = 0;
        are.carpricesection = 0;
        are.carbrandidred = '""';
        are._num = 0;
        are._nums = 0;
        are._numa = 0;
        are._numb = 0;
        are._nume = 0;
        are._numd = 0;
        are.cgje = 0;
        are.ygje = 0;
        are.qxje = 0;
        are.sfje = 0;
        are.txje = 0;
        //  are. $broadcast('clearTap' );
        // are.$navigate('clearTap');
        are.$invoke('inputd', 'clearTap');
      },

      // 下拉刷新
      onReachBottom: function onReachBottom() {
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        if (this.getSousuo == false) {
          this.searchLoadingComplete = true;
          return;
        }
        wx.showLoading({
          title: '加载中'
        });
        if (this.data.ipo != '') {
          var this_ = this;
          this_.page = this_.page + 1;
          //    请求接口
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              page: this_.page,
              pagesize: 8,
              searchdata: '{searchname:' + this_.ipo + ',pricetypesort:' + this_.pricetypesort + ',carpricesection:' + this_.carpricesection + ',carbrandid:' + this_.carbrandidred + '}'
            },
            success: function success(data) {
              if (data.data.carmodelJA.length > 0) {
                this_.getSousuo = true;

                // are.carmodelja = are.carmodelja.concat(data.data.carmodelJA);
                for (var index = 0; index < data.data.carmodelJA.length; index++) {
                  this_.textx.push(data.data.carmodelJA[index]);
                }
                // 设置数据
                wx.hideLoading();
                // 给数据进行绑定
                this_.$apply();
              } else {
                this_.page -= 1;
                this_.getSousuo = false;
                this_.searchLoadingComplete = true;
                wx.showToast({
                  title: '已经到底线啦~'
                });
                this_.$apply();
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
          return;
        }
      },

      // 条件选车
      my: function my(e) {
        var json_link = this.json_link;
        var are = this;
        are.carbrandidred = '""';
        are.code = 'A';
        are.firstPersonc = '品牌';
        are.$apply();
        if (e != '') {
          wx.showLoading({
            title: '加载中'
          });
          are.ipo = e;
          wx.request({
            // url拼接
            url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              page: 1,
              pagesize: 8,
              searchdata: '{searchname:' + e + ',pricetypesort:' + are.pricetypesort + ',carpricesection:' + are.carpricesection + ',carbrandid:' + "''" + '}'
            },
            // 后台返回值
            success: function success(data) {
              setTimeout(function () {
                wx.hideLoading();
              }, 0);
              // 定义返回值的数据
              are.textx = data.data.carmodelJA;
              are.code = data.data.code;
              // 给数据进行绑定
              are.$apply();
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
          this.ipo = '""';
          wx.showLoading({
            title: '加载中'
          });
          var that = this;
          var _json_link = this.$parent.globalData.json_link;
          var parent_data = this.$parent.globalData;
          var access_token = parent_data.access_token;
          wx.request({
            url: _json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              page: 1,
              pagesize: 8,
              searchdata: '{searchname:' + '""' + ',pricetypesort:' + are.data.pricetypesort + ',carpricesection:' + are.data.carpricesection + ',carbrandid:' + are.data.carbrandidred + '}'
            },
            success: function success(data) {
              setTimeout(function () {
                wx.hideLoading();
              }, 0);
              are.textx = data.data.carmodelJA;
              are.code = data.data.code;
              // 给数据进行绑定
              that.$apply();
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

      // 跳转金融产品列表
      xz_pp: function xz_pp(e) {
        this.$parent.globalData.turn = '当前';
        this.$parent.globalData.UVselectType = -1;
        wx.navigateTo({
          url: 'commodity_details?carmodelid=' + e
        });

        this.$parent.globalData.pageid = [e];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      // 车价选择
      clickNum: function clickNum(e) {
        this._num = e.target.dataset.num;
        this._nums = e.target.dataset.num;
        this.cgje = e.target.dataset.id;
      },

      // 月供选择
      clickNuma: function clickNuma(e) {
        this._numa = e.target.dataset.num;
        this.ygje = e.target.dataset.ida;
      },

      // 期限选择
      clickNumb: function clickNumb(e) {
        this._numb = e.target.dataset.num;
        this.qxje = e.target.dataset.idb;
      },

      // 贴息选择
      clickNumd: function clickNumd(e) {
        this._numd = e.target.dataset.num;
        this.txje = e.target.dataset.idd;
      },

      // 首付选择
      clickNume: function clickNume(e) {
        this._nume = e.target.dataset.num;
        this.sfje = e.target.dataset.ide;
      },

      // 点击选择类型
      clickPersona: function clickPersona() {
        this.page = 1;
        // this.textx = [];
        var selectPerson = this.selectPerson;
        if (selectPerson == true) {
          this.selectArea = true;
          this.selectAreb = false, this.selectArec = false, this.selectAred = false, this.selectPerson = false;
          this.selectPersonb = true;
          this.selectPersond = true;
        } else {
          this.selectArea = false;
          this.selectPerson = true;
          this.selectPersonb = true;
          this.selectPersond = true;
        }
      },

      // 点击选择车价
      clickPersonb: function clickPersonb() {
        this.page = 1;
        // this.textx = [];
        var selectPersonb = this.selectPersonb;
        if (selectPersonb == true) {
          this.selectAreb = true;
          this.selectArea = false, this.selectArec = false, this.selectAred = false, this.selectPersonb = false;
          this.selectPerson = true;
          this.selectPersond = true;
        } else {
          this.selectAreb = false;
          this.selectPersonb = true;
          this.selectPerson = true;
          this.selectPersond = true;
        }
      },

      // 点击选择品牌
      clickPersonc: function clickPersonc() {
        var selectPersonc = this.data.selectPersonc;
        this.$parent.globalData.turn = '当前';
        wx.navigateTo({
          url: 'pinpai'
        });
        this.selectArec = false;
        this.selectPersonb = true;
        this.selectPerson = true;
        this.selectPersod = true;
      },

      // 点击筛选
      clickPersond: function clickPersond() {
        var selectPersond = this.selectPersond;
        if (selectPersond == true) {
          this.selectAred = true, this.selectAreb = false, this.selectArea = false, this.selectArec = false, this.selectPersond = false;
          this.selectPersonb = true;
          this.selectPerson = true;
        } else {
          this.selectAred = false;
          this.selectPersond = true;
          this.selectPersonb = true;
          this.selectPerson = true;
        }
      },

      // 确定
      clickPersondq: function clickPersondq() {
        var are = this;
        var selectPersond = this.data.selectPersond;
        var json_link = this.json_link;
        wx.showLoading({
          title: '加载中'
        });
        are.code = 'A';
        wx.request({
          // url拼接
          url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            searchdata: '{carpricesection:' + are.cgje + ',monthlysupplysection:' + are.ygje + ',loantermsection:' + are.qxje + ',interesttag:' + are.txje + ',downpaymentsection:' + are.sfje + '}'
          },
          // 后台返回值
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);
            // 定义返回值的数据
            are.textx = data.data.carmodelJA;
            are.code = data.data.code;
            // 给数据进行绑定
            are.$apply();
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
        if (selectPersond == true) {
          this.selectAred = true, this.selectAreb = false, this.selectArea = false, this.selectArec = false, this.selectPersond = false;
          this.selectPersonb = true;
          this.selectPerson = true;
        } else {
          this.selectAred = false;
          this.selectPersond = true;
          this.selectPersonb = true;
          this.selectPerson = true;
        }
      },

      // 点击切换
      mySelect: function mySelect(e) {
        this.firstPerson = e.target.dataset.me;
        this.pricetypesort = e.target.dataset.id;
        this.selectArea = false;
        this.selectPerson = true;
        var json_link = this.json_link;
        var are = this;
        wx.showLoading({
          title: '加载中'
        });
        are.code = 'A';
        wx.request({
          // url拼接
          url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            page: 1,
            pagesize: 8,
            searchdata: '{searchname:' + are.data.ipo + ',pricetypesort:' + e.target.dataset.id + ',carpricesection:' + are.data.carpricesection + ',carbrandid:' + are.data.carbrandidred + '}'
          },
          // 后台返回值
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);
            // 定义返回值的数据
            are.textx = data.data.carmodelJA;
            are.code = data.data.code;
            // 给数据进行绑定
            are.$apply();
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

      // 车价区间选择
      clickNumt: function clickNumt(e) {
        wx.showLoading({
          title: '加载中'
        });
        this._nums = e.target.dataset.num;
        this._num = e.target.dataset.num;
        this.carpricesection = e.target.dataset.id;
        this.selectAreb = false;
        this.selectPersonb = true;
        var json_link = this.json_link;
        var are = this;
        are.code = 'A';
        wx.request({
          // url拼接
          url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {
            page: 1,
            pagesize: 8,
            searchdata: '{searchname:' + are.data.ipo + ',pricetypesort:' + are.data.pricetypesort + ',carpricesection:' + e.target.dataset.id + ',carbrandid:' + are.data.carbrandidred + '}'
          },
          // 后台返回值
          success: function success(data) {
            setTimeout(function () {
              wx.hideLoading();
            }, 0);
            // 定义返回值的数据
            are.textx = data.data.carmodelJA;
            are.code = data.data.code;
            // 给数据进行绑定
            are.$apply();
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
      mySelectc: function mySelectc(e) {
        this.firstPersonc = e.target.dataset.me;
        this.selectArec = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(branddd, [{
    key: 'onLoad',


    // 条件选车（贷款）
    value: function onLoad(option) {
      // 初始化
      var turn = this.$parent.globalData.turn;
      this.textx = [];
      console.log(turn);
      if (turn != '当前') {
        this.porsr();
      }
      wx.showLoading({
        title: '加载中'
      });

      var are = this;
      are.ipo = option.id ? option.id : '""';
      this.$invoke('substitution', 'clearTap', option.id);
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + '}'
        },
        // 后台返回值
        success: function success(data) {
          setTimeout(function () {
            wx.hideLoading();
          }, 0);
          // 定义返回值的数据
          are.textx = data.data.carmodelJA;
          are.code = data.data.code;

          // 给数据进行绑定
          are.$apply();
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
  }, {
    key: 'onShow',
    value: function onShow() {}

    // 条件选车数据

  }, {
    key: 'porsr',
    value: function porsr() {
      wx.showLoading({
        title: '加载中'
      });

      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var biaoji = this.$parent.globalData.biaoji;
      var nameors = this.$parent.globalData.nameors;
      var pinpaiid = this.$parent.globalData.pinpaiid;
      var that = this;
      that.code = 'A';
      this.page = 1;
      this.textx = [];
      if (this.$parent.globalData.biaoji != '0') {
        this.firstPersonc = nameors;
        this.carbrandidred = pinpaiid;
        console.log(pinpaiid);
        if (nameors != '品牌' && nameors != '' && nameors != undefined) {
          this.$invoke('substitution', 'clearTap', nameors);
          this.firstPersonc = nameors;
          this.carbrandidred = pinpaiid;
          this.ipo = '""';
          this.inpiyxiaoshi = false;
          wx.request({
            url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
            method: 'POST',
            header: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: {
              page: 1,
              pagesize: 8,
              searchdata: '{searchname:' + '""' + ',pricetypesort:' + that.data.pricetypesort + ',carpricesection:' + that.data.carpricesection + ',carbrandid:' + pinpaiid + '}'
            },
            success: function success(data) {
              wx.hideLoading();
              that.textx = data.data.carmodelJA;
              that.code = data.data.code;
              // 给数据进行绑定
              that.$apply();
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
          if (nameors == '品牌') {
            console.log(that.data.carbrandidred);
            this.page = 1;
            this.textx = [];
            this.firstPerson = '默认排序', this.firstPersonb = '车价', that.data.pricetypesort = 0, that.data.carpricesection = 0, wx.request({
              url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
              method: 'POST',
              header: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              data: {
                page: 1,
                pagesize: 8,
                searchdata: '{searchname:' + that.data.ipo + ',pricetypesort:' + that.data.pricetypesort + ',carpricesection:' + that.data.carpricesection + ',carbrandid:' + pinpaiid + '}'
              },
              success: function success(data) {
                wx.hideLoading();
                that.textx = data.data.carmodelJA;
                that.code = data.data.code;
                // 给数据进行绑定
                that.$apply();
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
        }
      }
    }

    // 初始化数据

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.init();
      this.$parent.globalData.nameors = '品牌';
      this.$parent.globalData.pinpaiid = '';
      this.$parent.globalData.value = '';
      this.$parent.globalData.turn = '当前';
    }
  }, {
    key: 'onshow',
    value: function onshow() {
      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化数据

  }, {
    key: 'init',
    value: function init() {
      var are = this;
      var selectPersond = this.selectPersond;
      var json_link = this.json_link;
      are.firstPerson = '默认排序';
      are.firstPersonc = '品牌';
      are.pricetypesort = 0;
      are.carpricesection = 0;
      are.carbrandidred = '""';
      are._num = 0;
      are._numa = 0;
      are._numb = 0;
      are._nume = 0;
      are._numd = 0;
      are.cgje = 0;
      are.ygje = 0;
      are.qxje = 0;
      are.sfje = 0;
      are.txje = 0;
      are.ipo = '""';
      are.$apply();
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });

      var this_ = this;
      this_.code = 'A';
      var json_link = this_.$parent.globalData.json_link;
      // 条件选车（贷款）
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
        method: 'POST',
        header: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + this_.data.ipo + ',pricetypesort:' + this_.data.pricetypesort + ',carpricesection:' + this_.data.carpricesection + ',carbrandid:' + this_.data.carbrandidred + '}'
        },
        success: function success(data) {
          this_.textx = data.data.carmodelJA;
          this_.code = data.data.code;
          // 设置数据
          wx.hideLoading();
          wx.stopPullDownRefresh();
          // 给数据进行绑定
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
  }]);

  return branddd;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(branddd , 'pages/branddd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kZGQuanMiXSwibmFtZXMiOlsiYnJhbmRkZCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5wdXRkIiwiSW5wdXQiLCJzdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJkYXRhIiwidXJsX2xpbmsiLCJzZWxlY3RQZXJzb24iLCJmaXJzdFBlcnNvbiIsImZpcnN0UGVyc29uYiIsImZpcnN0UGVyc29uYyIsImZpcnN0UGVyc29uZCIsInNlbGVjdEFyZWEiLCJzZWxlY3RBcmViIiwic2VsZWN0QXJlYyIsInNlbGVjdEFyZWQiLCJzZWxlY3RQZXJzb25iIiwic2VsZWN0UGVyc29uYyIsInNlbGVjdFBlcnNvbmQiLCJqc29uX2xpbmsiLCJfbnVtIiwiX251bWEiLCJfbnVtYiIsIl9udW1jIiwiX251bWQiLCJfbnVtZSIsIl9udW1tIiwiX251bXMiLCJ0ZXh0eCIsInR4IiwiY2dqZSIsInlnamUiLCJzZmplIiwidHhqZSIsInF4amUiLCJzZWxlY3RQZXJzb25mIiwicGFnZSIsImlwbyIsImNhcmJyYW5kaWRyZWQiLCJwcmljZXR5cGVzb3J0IiwiY2FycHJpY2VzZWN0aW9uIiwiY29kZSIsImdldFNvdXN1byIsInNlYXJjaExvYWRpbmdDb21wbGV0ZSIsImlucGl5eGlhb3NoaSIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJjbGlja1BlcnNvbmRwIiwiYXJlIiwiJGludm9rZSIsIm9uUmVhY2hCb3R0b20iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhcmVudF9kYXRhIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwidGhpc18iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiaGVhZGVyIiwicGFnZXNpemUiLCJzZWFyY2hkYXRhIiwic3VjY2VzcyIsImNhcm1vZGVsSkEiLCJsZW5ndGgiLCJpbmRleCIsInB1c2giLCJoaWRlTG9hZGluZyIsIiRhcHBseSIsInNob3dUb2FzdCIsImZhaWwiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsIm15IiwiZSIsInRoYXQiLCJhY2Nlc3NfdG9rZW4iLCJ4el9wcCIsInR1cm4iLCJVVnNlbGVjdFR5cGUiLCJuYXZpZ2F0ZVRvIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsImNsaWNrTnVtIiwidGFyZ2V0IiwiZGF0YXNldCIsIm51bSIsImlkIiwiY2xpY2tOdW1hIiwiaWRhIiwiY2xpY2tOdW1iIiwiaWRiIiwiY2xpY2tOdW1kIiwiaWRkIiwiY2xpY2tOdW1lIiwiaWRlIiwiY2xpY2tQZXJzb25hIiwiY2xpY2tQZXJzb25iIiwiY2xpY2tQZXJzb25jIiwic2VsZWN0UGVyc29kIiwiY2xpY2tQZXJzb25kIiwiY2xpY2tQZXJzb25kcSIsIm15U2VsZWN0IiwibWUiLCJjbGlja051bXQiLCJteVNlbGVjdGMiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwicG9yc3IiLCJiaWFvamkiLCJuYW1lb3JzIiwicGlucGFpaWQiLCJ1bmRlZmluZWQiLCJpbml0IiwidmFsdWUiLCJzdG9wUHVsbERvd25SZWZyZXNoIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLDZCQUF1QixJQUZoQjtBQUdQQywyQkFBcUI7QUFIZCxLLFFBTVZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLGdCQUFlLEVBQUMsY0FBYSxFQUFkLEVBQWlCLFNBQVEsRUFBekIsRUFBaEIsRSxRQUNUQyxPLEdBQVUsRUFBQyxnQkFBZSxFQUFDLGdCQUFlLElBQWhCLEVBQWhCLEUsUUFDVEMsVSxHQUFhO0FBQ1JDLGNBQVFDLGVB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a0IsTUFBTXJELElBQU4sQ0FBV2lDLGFBUEQsR0FRVjtBQVhFLFNBTkc7QUFtQlQyQixpQkFBUyxpQkFBVTVELElBQVYsRUFBZ0I7QUFDdkJxRCxnQkFBTTlCLEtBQU4sR0FBY3ZCLEtBQUtBLElBQUwsQ0FBVTZELFVBQXhCO0FBQ0FSLGdCQUFNakIsSUFBTixHQUFhcEMsS0FBS0EsSUFBTCxDQUFVb0MsSUFBdkI7QUFDQTtBQUNBYyxhQUFHZSxXQUFIO0FBQ0FmLGFBQUdrRSxtQkFBSDtBQUNBO0FBQ0EvRCxnQkFBTWEsTUFBTjtBQUNELFNBM0JRO0FBNEJURSxjQUFNLGdCQUFZO0FBQ2hCbEIsYUFBR2lCLFNBQUgsQ0FBYTtBQUNYZixtQkFBTyxNQURJO0FBRVhpQixrQkFBTTtBQUZLLFdBQWI7O0FBS0FDLHFCQUFXLFlBQVk7QUFDckJwQixlQUFHcUIsU0FBSDtBQUNELFdBRkQsRUFFRyxJQUZIO0FBR0E7QUFDRDtBQXRDUSxPQUFYO0FBd0NEOzs7O0VBbDFCa0M4QyxlQUFLdEYsSTs7a0JBQXJCNUMsTyIsImZpbGUiOiJicmFuZGRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG4gIGltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9zdWJzdGl0dXRpb24nO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGJyYW5kZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJyxcclxuICAgICAgZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlLFxyXG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaydcclxuICAgIH07XHJcblxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInN1YnN0aXR1dGlvblwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidmFsdWVcIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJzdWJzdGl0dXRpb25cIjp7XCJ2LW9uOmNoaWxkRm5cIjpcIm15XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIGlucHV0ZDogSW5wdXQsXHJcbiAgICAgIHN1YnN0aXR1dGlvbjpTdWJzdGl0dXRpb25cclxuICAgIH07XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICAvLyDpu5jorqTmjpLluo/lvLnmoYbpmpDol49cclxuICAgICAgc2VsZWN0UGVyc29uOiB0cnVlLFxyXG4gICAgICAvLyDpu5jorqTmjpLluo/mlofmnKxcclxuICAgICAgZmlyc3RQZXJzb246ICfpu5jorqTmjpLluo8nLFxyXG4gICAgICAvLyDovabku7fmjpLluo/mlofmnKxcclxuICAgICAgZmlyc3RQZXJzb25iOiAn6L2m5Lu3JyxcclxuICAgICAgLy8g5ZOB54mM5paH5pysXHJcbiAgICAgIGZpcnN0UGVyc29uYzogJ+WTgeeJjCcsXHJcbiAgICAgIC8vIOetm+mAieaWh+acrFxyXG4gICAgICBmaXJzdFBlcnNvbmQ6ICfnrZvpgIknLFxyXG4gICAgICAvLyDmjqfliLblsI/kuInop5LmoLflvI9cclxuICAgICAgc2VsZWN0QXJlYTogZmFsc2UsXHJcbiAgICAgIHNlbGVjdEFyZWI6IGZhbHNlLFxyXG4gICAgICBzZWxlY3RBcmVjOiBmYWxzZSxcclxuICAgICAgc2VsZWN0QXJlZDogZmFsc2UsXHJcbiAgICAgIC8vIOi9puS7t+aOkuW6j+W8ueeql+makOiXj1xyXG4gICAgICBzZWxlY3RQZXJzb25iOiB0cnVlLFxyXG4gICAgICBzZWxlY3RQZXJzb25jOiB0cnVlLFxyXG4gICAgICAvLyDnrZvpgInlvLnnqpfpmpDol49cclxuICAgICAgc2VsZWN0UGVyc29uZDogdHJ1ZSxcclxuICAgICAgLy8g6K+35rGC5Zyw5Z2AXHJcbiAgICAgIGpzb25fbGluazogJycsXHJcbiAgICAgIC8vIOaOp+WItuetm+mAieadoeS7tlxyXG4gICAgICBfbnVtOiAwLFxyXG4gICAgICBfbnVtYTogMCxcclxuICAgICAgX251bWI6IDAsXHJcbiAgICAgIF9udW1jOiAwLFxyXG4gICAgICBfbnVtZDogMCxcclxuICAgICAgX251bWU6IDAsXHJcbiAgICAgIF9udW1tOiAwLFxyXG4gICAgICBfbnVtczogMCxcclxuICAgICAgLy8g6L2m5Z6L5YiX6KGoXHJcbiAgICAgIHRleHR4OiBbXSxcclxuICAgICAgdHg6ICcnLFxyXG4gICAgICAvLyDovabku7fmnaHku7bpgInmi6lcclxuICAgICAgY2dqZTogMCxcclxuICAgICAgLy8g5pyI5L6b6YCJ5oupXHJcbiAgICAgIHlnamU6IDAsXHJcbiAgICAgIC8vIOmmluS7mOmAieaLqVxyXG4gICAgICBzZmplOiAwLFxyXG4gICAgICAvLyDotLTmga/pgInmi6lcclxuICAgICAgdHhqZTogMCxcclxuICAgICAgLy8g5pyf6ZmQ6YCJ5oupXHJcbiAgICAgIHF4amU6IDAsXHJcbiAgICAgIHNlbGVjdFBlcnNvbmY6IGZhbHNlLFxyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICAvLyDmkJzntKLmlofmnKxcclxuICAgICAgaXBvOiAnXCJcIicsXHJcbiAgICAgIC8vIOWTgeeJjGlkXHJcbiAgICAgIGNhcmJyYW5kaWRyZWQ6ICdcIlwiJyxcclxuICAgICAgLy8g5Lu35qC85o6S5bqPXHJcbiAgICAgIHByaWNldHlwZXNvcnQ6IDAsXHJcbiAgICAgIC8vIOi9puS7t+WMuumXtFxyXG4gICAgICBjYXJwcmljZXNlY3Rpb246IDAsXHJcbiAgICAgIGNvZGU6ICcnLFxyXG4gICAgICBnZXRTb3VzdW86IHRydWUsXHJcbiAgICAgIHNlYXJjaExvYWRpbmdDb21wbGV0ZTogZmFsc2UsXHJcbiAgICAgIGlucGl5eGlhb3NoaTp0cnVlLFxyXG4gICAgICB1cmxfbGluazonJyAgICAgICAgIFxyXG4gICAgICBcclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9icmFuZGRkP3BhZ2U9MSZwYWdlc2l6ZT04JnNlYXJjaGRhdGE9JyArXHJcbiAgICAgICAgICAgICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgdGhpcy5pcG8gK1xyXG4gICAgICAgICAgICAnfSdcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDph43nva5cclxuICAgICAgY2xpY2tQZXJzb25kcCgpIHtcclxuICAgICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgICAgYXJlLmZpcnN0UGVyc29uID0gJ+m7mOiupOaOkuW6jyc7XHJcbiAgICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICAgIGFyZS5wcmljZXR5cGVzb3J0ID0gMDtcclxuICAgICAgICBhcmUuY2FycHJpY2VzZWN0aW9uID0gMDtcclxuICAgICAgICBhcmUuY2FyYnJhbmRpZHJlZCA9ICdcIlwiJztcclxuICAgICAgICBhcmUuX251bSA9IDA7XHJcbiAgICAgICAgYXJlLl9udW1zID0gMDtcclxuICAgICAgICBhcmUuX251bWEgPSAwO1xyXG4gICAgICAgIGFyZS5fbnVtYiA9IDA7XHJcbiAgICAgICAgYXJlLl9udW1lID0gMDtcclxuICAgICAgICBhcmUuX251bWQgPSAwO1xyXG4gICAgICAgIGFyZS5jZ2plID0gMDtcclxuICAgICAgICBhcmUueWdqZSA9IDA7XHJcbiAgICAgICAgYXJlLnF4amUgPSAwO1xyXG4gICAgICAgIGFyZS5zZmplID0gMDtcclxuICAgICAgICBhcmUudHhqZSA9IDA7XHJcbiAgICAgICAgLy8gIGFyZS4gJGJyb2FkY2FzdCgnY2xlYXJUYXAnICk7XHJcbiAgICAgICAgLy8gYXJlLiRuYXZpZ2F0ZSgnY2xlYXJUYXAnKTtcclxuICAgICAgICAgYXJlLiRpbnZva2UoJ2lucHV0ZCcsICdjbGVhclRhcCcpO1xyXG4gICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOS4i+aLieWIt+aWsFxyXG4gICAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0U291c3VvID09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLnNlYXJjaExvYWRpbmdDb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuaXBvICE9ICcnKSB7XHJcbiAgICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgICAgdGhpc18ucGFnZSA9IHRoaXNfLnBhZ2UgKyAxO1xyXG4gICAgICAgICAgLy8gICAg6K+35rGC5o6l5Y+jXHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9uZXdjYXJsb2FuL2NvbmRpdGlvbnNlbGVjdGlvbmNhci9saXN0JyxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgcGFnZTogdGhpc18ucGFnZSxcclxuICAgICAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgICAgICBzZWFyY2hkYXRhOiAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICAgICAgICB0aGlzXy5pcG8gK1xyXG4gICAgICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICAgICAgdGhpc18ucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAgICAgICAnLGNhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgICAgICAgIHRoaXNfLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICAgICAnLGNhcmJyYW5kaWQ6JyArXHJcbiAgICAgICAgICAgICAgICB0aGlzXy5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICAgICAgICd9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgIGlmIChkYXRhLmRhdGEuY2FybW9kZWxKQS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzXy5nZXRTb3VzdW8gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFyZS5jYXJtb2RlbGphID0gYXJlLmNhcm1vZGVsamEuY29uY2F0KGRhdGEuZGF0YS5jYXJtb2RlbEpBKTtcclxuICAgICAgICAgICAgICAgIGZvciAoXHJcbiAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmNhcm1vZGVsSkEubGVuZ3RoOyBpbmRleCsrXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgdGhpc18udGV4dHgucHVzaChkYXRhLmRhdGEuY2FybW9kZWxKQVtpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpc18ucGFnZSAtPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpc18uZ2V0U291c3VvID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzXy5zZWFyY2hMb2FkaW5nQ29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICflt7Lnu4/liLDlupXnur/llaZ+J1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOadoeS7tumAiei9plxyXG4gICAgICBteShlKSB7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgIGFyZS5jYXJicmFuZGlkcmVkPSdcIlwiJztcclxuICAgICAgICBhcmUuY29kZSA9ICdBJztcclxuICAgICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgaWYgKGUgIT0gJycpIHtcclxuICAgICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGFyZS5pcG8gPSBlO1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgICAgIHNlYXJjaGRhdGE6ICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgICAgIGUgK1xyXG4gICAgICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICAgICAgYXJlLnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgICAgICBhcmUuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgICAgIFwiJydcIiArXHJcbiAgICAgICAgICAgICAgICAnfSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuaXBvID0gJ1wiXCInO1xyXG4gICAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgICAgIHNlYXJjaGRhdGE6ICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgICAgICdcIlwiJyArXHJcbiAgICAgICAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICAgICAgICBhcmUuZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgICAgYXJlLmRhdGEuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgICAgIGFyZS5kYXRhLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g6Lez6L2s6YeR6J6N5Lqn5ZOB5YiX6KGoXHJcbiAgICAgIHh6X3BwKGUpIHtcclxuICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudHVybiA9ICflvZPliY0nO1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IC0xO1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnY29tbW9kaXR5X2RldGFpbHM/Y2FybW9kZWxpZD0nICsgZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbZV07XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbM107XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDovabku7fpgInmi6lcclxuICAgICAgY2xpY2tOdW0oZSkge1xyXG4gICAgICAgIHRoaXMuX251bSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICAgIHRoaXMuX251bXMgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgICB0aGlzLmNnamUgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmnIjkvpvpgInmi6lcclxuICAgICAgY2xpY2tOdW1hKGUpIHtcclxuICAgICAgICB0aGlzLl9udW1hID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgICAgdGhpcy55Z2plID0gZS50YXJnZXQuZGF0YXNldC5pZGE7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOacn+mZkOmAieaLqVxyXG4gICAgICBjbGlja051bWIoZSkge1xyXG4gICAgICAgIHRoaXMuX251bWIgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgICB0aGlzLnF4amUgPSBlLnRhcmdldC5kYXRhc2V0LmlkYjtcclxuICAgICAgfSxcclxuICAgICAgLy8g6LS05oGv6YCJ5oupXHJcbiAgICAgIGNsaWNrTnVtZChlKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtZCA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICAgIHRoaXMudHhqZSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRkO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDpppbku5jpgInmi6lcclxuICAgICAgY2xpY2tOdW1lKGUpIHtcclxuICAgICAgICB0aGlzLl9udW1lID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgICAgdGhpcy5zZmplID0gZS50YXJnZXQuZGF0YXNldC5pZGU7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeCueWHu+mAieaLqeexu+Wei1xyXG4gICAgICBjbGlja1BlcnNvbmEoKSB7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgICAvLyB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgICAgbGV0IHNlbGVjdFBlcnNvbiA9IHRoaXMuc2VsZWN0UGVyc29uO1xyXG4gICAgICAgIGlmIChzZWxlY3RQZXJzb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBcmVhID0gdHJ1ZTtcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVjID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlZCA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbiA9IGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g54K55Ye76YCJ5oup6L2m5Lu3XHJcbiAgICAgIGNsaWNrUGVyc29uYigpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIC8vIHRoaXMudGV4dHggPSBbXTtcclxuICAgICAgICBsZXQgc2VsZWN0UGVyc29uYiA9IHRoaXMuc2VsZWN0UGVyc29uYjtcclxuICAgICAgICBpZiAoc2VsZWN0UGVyc29uYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdEFyZWIgPSB0cnVlO1xyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0UGVyc29uYiA9IGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDngrnlh7vpgInmi6nlk4HniYxcclxuICAgICAgY2xpY2tQZXJzb25jKCkge1xyXG4gICAgICAgIGxldCBzZWxlY3RQZXJzb25jID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmM7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudHVybiA9ICflvZPliY0nO1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAncGlucGFpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29kID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgLy8g54K55Ye7562b6YCJXHJcbiAgICAgIGNsaWNrUGVyc29uZCgpIHtcclxuICAgICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgICAgICBpZiAoc2VsZWN0UGVyc29uZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gdHJ1ZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmViID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25kID0gZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOehruWumlxyXG4gICAgICBjbGlja1BlcnNvbmRxKCkge1xyXG4gICAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmQ7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzZWFyY2hkYXRhOiAne2NhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgICAgICBhcmUuY2dqZSArXHJcbiAgICAgICAgICAgICAgJyxtb250aGx5c3VwcGx5c2VjdGlvbjonICtcclxuICAgICAgICAgICAgICBhcmUueWdqZSArXHJcbiAgICAgICAgICAgICAgJyxsb2FudGVybXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgICAgYXJlLnF4amUgK1xyXG4gICAgICAgICAgICAgICcsaW50ZXJlc3R0YWc6JyArXHJcbiAgICAgICAgICAgICAgYXJlLnR4amUgK1xyXG4gICAgICAgICAgICAgICcsZG93bnBheW1lbnRzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5zZmplICtcclxuICAgICAgICAgICAgICAnfSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmNhcm1vZGVsSkE7XHJcbiAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc2VsZWN0UGVyc29uZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gdHJ1ZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmViID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25kID0gZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOeCueWHu+WIh+aNolxyXG4gICAgICBteVNlbGVjdChlKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdFBlcnNvbiA9IGUudGFyZ2V0LmRhdGFzZXQubWU7XHJcbiAgICAgICAgdGhpcy5wcmljZXR5cGVzb3J0ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgICAgc2VhcmNoZGF0YTogJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmlwbyArXHJcbiAgICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuaWQgK1xyXG4gICAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgICAgICd9J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICBhcmUudGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDovabku7fljLrpl7TpgInmi6lcclxuICAgICAgY2xpY2tOdW10KGUpIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9udW1zID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgICAgdGhpcy5fbnVtID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgICAgdGhpcy5jYXJwcmljZXNlY3Rpb24gPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgICAgc2VhcmNoZGF0YTogJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmlwbyArXHJcbiAgICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuaWQgK1xyXG4gICAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgICBhcmUuZGF0YS5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICAgICAnfSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmNhcm1vZGVsSkE7XHJcbiAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgbXlTZWxlY3RjKGUpIHtcclxuICAgICAgICB0aGlzLmZpcnN0UGVyc29uYyA9IGUudGFyZ2V0LmRhdGFzZXQubWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8g5p2h5Lu26YCJ6L2m77yI6LS35qy+77yJXHJcbiAgICBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICAgIC8vIOWIneWni+WMllxyXG4gICAgICBsZXQgdHVybiA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnR1cm47XHJcbiAgICAgIHRoaXMudGV4dHggPSBbXTtcclxuICAgICAgY29uc29sZS5sb2codHVybilcclxuICAgICAgaWYodHVybiE9J+W9k+WJjScpe1xyXG4gICAgICAgIHRoaXMucG9yc3IoKVxyXG4gICAgICB9XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgYXJlLmlwbyA9IG9wdGlvbi5pZCA/IG9wdGlvbi5pZCA6ICdcIlwiJztcclxuICAgICAgIHRoaXMuJGludm9rZSgnc3Vic3RpdHV0aW9uJywgJ2NsZWFyVGFwJywgb3B0aW9uLmlkKTtcclxuICAgICAgLy8g5a6a5LmJdXJsXHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIGFyZS5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jb25kaXRpb25zZWxlY3Rpb25jYXIvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgIHNlYXJjaGRhdGE6ICd7c2VhcmNobmFtZTonICsgYXJlLmlwbyArICd9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuXHJcbiAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBvblNob3coKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICAgLy8g5p2h5Lu26YCJ6L2m5pWw5o2uXHJcbiAgICBwb3JzcigpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIHRoaXMuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgICBsZXQgYmlhb2ppID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmlhb2ppO1xyXG4gICAgICBsZXQgbmFtZW9ycyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnM7XHJcbiAgICAgIGxldCBwaW5wYWlpZCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBpbnBhaWlkO1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoYXQuY29kZSA9ICdBJztcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy50ZXh0eCA9IFtdO1xyXG4gICAgICBpZiAodGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmlhb2ppICE9ICcwJykge1xyXG4gICAgICAgIHRoaXMuZmlyc3RQZXJzb25jID0gbmFtZW9ycztcclxuICAgICAgICB0aGlzLmNhcmJyYW5kaWRyZWQgPSBwaW5wYWlpZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhwaW5wYWlpZClcclxuICAgICAgICBpZiAobmFtZW9ycyAhPSAn5ZOB54mMJyAmJiBuYW1lb3JzICE9ICcnICYmIG5hbWVvcnMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCdzdWJzdGl0dXRpb24nLCAnY2xlYXJUYXAnLCBuYW1lb3JzKTtcclxuICAgICAgICAgIHRoaXMuZmlyc3RQZXJzb25jID0gbmFtZW9ycztcclxuICAgICAgICAgIHRoaXMuY2FyYnJhbmRpZHJlZCA9IHBpbnBhaWlkO1xyXG4gICAgICAgICAgIHRoaXMuaXBvID0gJ1wiXCInO1xyXG4gICAgICAgICAgICB0aGlzLmlucGl5eGlhb3NoaT1mYWxzZTsgICAgIFxyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jb25kaXRpb25zZWxlY3Rpb25jYXIvbGlzdCcsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgICAgcGFnZXNpemU6IDgsXHJcbiAgICAgICAgICAgICAgc2VhcmNoZGF0YTogJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICAgICAgJ1wiXCInICtcclxuICAgICAgICAgICAgICAgICcscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgICAgICAgIHRoYXQuZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgICAgdGhhdC5kYXRhLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICAgICAnLGNhcmJyYW5kaWQ6JyArXHJcbiAgICAgICAgICAgICAgICBwaW5wYWlpZCArXHJcbiAgICAgICAgICAgICAgICAnfSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgICAgIHRoYXQudGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgICAgICB0aGF0LmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuYW1lb3JzID09ICflk4HniYwnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQuZGF0YS5jYXJicmFuZGlkcmVkKVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgICAgICAgICh0aGlzLmZpcnN0UGVyc29uID0gJ+m7mOiupOaOkuW6jycpLFxyXG4gICAgICAgICAgICAodGhpcy5maXJzdFBlcnNvbmIgPSAn6L2m5Lu3JyksXHJcbiAgICAgICAgICAgICh0aGF0LmRhdGEucHJpY2V0eXBlc29ydCA9IDApLFxyXG4gICAgICAgICAgICAodGhhdC5kYXRhLmNhcnByaWNlc2VjdGlvbiA9IDApLFxyXG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZXNpemU6IDgsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hkYXRhOiAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YS5pcG8gK1xyXG4gICAgICAgICAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuZGF0YS5jYXJwcmljZXNlY3Rpb24gK1xyXG4gICAgICAgICAgICAgICAgICAnLGNhcmJyYW5kaWQ6JyArXHJcbiAgICAgICAgICAgICAgICAgIHBpbnBhaWlkICtcclxuICAgICAgICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoYXQudGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgICAgICAgIHRoYXQuY29kZSA9IGRhdGEuZGF0YS5jb2RlO1xyXG4gICAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIG9uVW5sb2FkKCkge1xyXG4gICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubmFtZW9ycyA9ICflk4HniYwnO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5waW5wYWlpZCA9ICcnO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS50dXJuID0gJ+W9k+WJjSc7XHJcbiAgICB9XHJcbiAgICBvbnNob3coKXtcclxuICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7IFxyXG4gICAgfVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICBhcmUuZmlyc3RQZXJzb24gPSAn6buY6K6k5o6S5bqPJztcclxuICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICBhcmUucHJpY2V0eXBlc29ydCA9IDA7XHJcbiAgICAgIGFyZS5jYXJwcmljZXNlY3Rpb24gPSAwO1xyXG4gICAgICBhcmUuY2FyYnJhbmRpZHJlZCA9ICdcIlwiJztcclxuICAgICAgYXJlLl9udW0gPSAwO1xyXG4gICAgICBhcmUuX251bWEgPSAwO1xyXG4gICAgICBhcmUuX251bWIgPSAwO1xyXG4gICAgICBhcmUuX251bWUgPSAwO1xyXG4gICAgICBhcmUuX251bWQgPSAwO1xyXG4gICAgICBhcmUuY2dqZSA9IDA7XHJcbiAgICAgIGFyZS55Z2plID0gMDtcclxuICAgICAgYXJlLnF4amUgPSAwO1xyXG4gICAgICBhcmUuc2ZqZSA9IDA7XHJcbiAgICAgIGFyZS50eGplID0gMDtcclxuICAgICAgYXJlLmlwbyA9ICdcIlwiJztcclxuICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgIH1cclxuICAgIC8vIOS4i+aLieWIt+aWsFxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICB0aGlzXy5jb2RlID0gJ0EnO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpc18uJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgLy8g5p2h5Lu26YCJ6L2m77yI6LS35qy+77yJXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jb25kaXRpb25zZWxlY3Rpb25jYXIvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgIHNlYXJjaGRhdGE6ICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgdGhpc18uZGF0YS5pcG8gK1xyXG4gICAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICAgIHRoaXNfLmRhdGEucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICB0aGlzXy5kYXRhLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgdGhpc18uZGF0YS5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgdGhpc18udGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgIHRoaXNfLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgIC8vIOiuvue9ruaVsOaNrlxyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==