'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _substitution = require('./../components/substitution.js');

var _substitution2 = _interopRequireDefault(_substitution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var tiexi = function (_wepy$page) {
  _inherits(tiexi, _wepy$page);

  function tiexi() {
    var _ref, _this$methods;

    var _temp, _this, _ret;

    _classCallCheck(this, tiexi);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tiexi.__proto__ || Object.getPrototypeOf(tiexi)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '贴息专区',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.$repeat = {}, _this.$props = { "inputd": { "xmlns:v-on": "" } }, _this.$events = { "inputd": { "v-on:childFn": "my" } }, _this.components = {
      inputd: _substitution2.default
    }, _this.data = {
      selectPersonf: false,
      // 默认排序显隐
      selectPerson: true,
      // 筛选字段
      firstPerson: '默认排序',
      firstPersonb: '车价',
      firstPersonc: '品牌',
      firstPersond: '筛选',
      // 筛选条件图标状态
      selectArea: false,
      selectAreb: false,
      selectArec: false,
      selectAred: false,
      // 品牌显隐
      selectPersona: true,
      // 车价显隐
      selectPersonb: true,
      // 筛选显隐
      selectPersond: true,
      json_link: '',
      // 筛选条件值
      _num: 0,
      _numa: 0,
      _numb: 0,
      _numc: 0,
      _numd: 0,
      _nume: 0,
      _numm: 0,
      // 数据
      textx: [],
      tx: '',
      // 首付
      sf: '',
      // 品牌
      sddss: '',
      cgje: 0,
      ygje: 0, // 月供
      sfje: 0, // 首付
      txje: 0, // 贴息标签
      qxje: 0, // 期限
      page: 1,
      // 搜索字段
      ipo: '""',
      carbrandidd: '""',
      // 品牌id
      carbrandidred: '""',
      pricetypesort: 0, // 价格排序
      carpricesection: 0, // 车价,
      code: '',
      // 上拉状态
      getSousuo: true,
      searchLoadingComplete: false,
      url_link: ''
    }, _this.methods = (_this$methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/tiexi?page=1&pagesize=8&carpricesection=' + this.carpricesection + '&searchname=' + this.ipo + '&carbrandid=' + this.carbrandidred + '&pricetypesort=' + this.pricetypesort
        };
      },
      // 首页
      gg: function gg(e) {
        wx.reLaunch({
          url: 'index'
        });
      }
    }, _defineProperty(_this$methods, 'onShareAppMessage', function onShareAppMessage() {
      return {
        path: '/pages/tiexi'
      };
    }), _defineProperty(_this$methods, 'onReachBottom', function onReachBottom() {
      var json_link = this.$parent.globalData.json_link;
      var parent_data = this.$parent.globalData;

      var this_ = this;
      if (this_.getSousuo == false) {
        this_.searchLoadingComplete = true;
        return;
      }
      wx.showLoading({
        title: '加载中'
      });
      this_.page = this_.page + 1;
      //    请求接口
      wx.request({
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: this_.page,
          pagesize: 8,
          searchdata: '{searchname:' + this_.data.ipo + ',pricetypesort:' + this_.data.pricetypesort + ',carpricesection:' + this_.data.carpricesection + ',carbrandid:' + this_.data.carbrandidred + ',monthlysupplysection:' + this_.data.ygje + ',loantermsection:' + this_.data.qxje + ',interesttag:' + this_.data.txje + ',downpaymentsection:' + this_.data.sfje + '}'
        },
        success: function success(data) {
          if (data.data.carmodelJA.length == 0) {
            this_.getSousuo = false;
            this_.searchLoading = true;
            wx.showToast({
              title: '已经到底线啦~'
            });
            this_.$apply();
            setTimeout(function () {
              wx.hideToast();
            }, 2000);
            return;
          }

          for (var index = 0; index < data.data.carmodelJA.length; index++) {
            this_.getSousuo = true;
            this_.textx.push(data.data.carmodelJA[index]);
          }
          // 设置数据
          wx.hideLoading();
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
    }), _defineProperty(_this$methods, 'clickPersondp', function clickPersondp() {
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
    }), _defineProperty(_this$methods, 'my', function my(e) {
      this.textx = [];
      var json_link = this.json_link;
      var are = this;
      are.code = 'A';
      are.data.carbrandidred = '""';
      are.firstPersonc = '品牌';
      if (e != '') {
        wx.showLoading({
          title: '加载中'
        });
        are.ipo = e;
        wx.request({
          // url拼接
          url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
          method: 'POST',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          data: {
            page: 1,
            pagesize: 8,
            searchdata: '{searchname:' + e + ',pricetypesort:' + are.data.pricetypesort + ',carpricesection:' + are.data.carpricesection + ',carbrandid:' + are.data.carbrandidred + '}'
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
          url: _json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
          method: 'POST',
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
          }
        });
      }
    }), _defineProperty(_this$methods, 'xz_pp', function xz_pp(e) {
      wx.navigateTo({
        url: 'commodity_details?carmodelid=' + e
      });

      this.$parent.globalData.pageid = [e];
      this.$parent.globalData.pagename = [3];
      this.$parent.clicknumordernumstat(1);
    }), _defineProperty(_this$methods, 'clickNum', function clickNum(e) {
      this._num = e.target.dataset.num;
      this.cgje = e.target.dataset.id;
    }), _defineProperty(_this$methods, 'clickNuma', function clickNuma(e) {
      this._numa = e.target.dataset.num;
      this.ygje = e.target.dataset.ida;
    }), _defineProperty(_this$methods, 'clickNumb', function clickNumb(e) {
      this._numb = e.target.dataset.num;
      this.qxje = e.target.dataset.idb;
    }), _defineProperty(_this$methods, 'clickNumd', function clickNumd(e) {
      this._numd = e.target.dataset.num;
      this.txje = e.target.dataset.idd;
    }), _defineProperty(_this$methods, 'clickNume', function clickNume(e) {
      this._nume = e.target.dataset.num;
      this.sfje = e.target.dataset.ide;
    }), _defineProperty(_this$methods, 'clickNumc', function clickNumc(e) {
      this._numc = e.target.dataset.num;
    }), _defineProperty(_this$methods, 'clickNumt', function clickNumt(e) {
      this.textx = [];
      this.page = 1;
      this._num = e.target.dataset.num;
      this.carpricesection = e.target.dataset.id;
      wx.showLoading({
        title: '加载中'
      });
      this.selectAreb = false;
      this.selectPersonb = true;
      var json_link = this.json_link;
      var are = this;
      are.code = 'A';
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + ',pricetypesort:' + are.pricetypesort + ',carpricesection:' + e.target.dataset.id + ',carbrandid:' + are.carbrandidred + '}'
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
          setTimeout(function () {
            wx.hideLoading();
          }, 0);
        }
      });
    }), _defineProperty(_this$methods, 'clickPersona', function clickPersona() {
      var selectPerson = this.data.selectPerson;
      if (selectPerson == true) {
        this.selectArea = true;
        this.selectAreb = false, this.selectArec = false, this.selectAred = false, this.selectPerson = false;
        this.selectPersonb = true;
        this.selectPersond = true;
        this.selectPersona = true;
      } else {
        this.selectArea = false;
        this.selectPerson = true;
        this.selectPersonb = true;
        this.selectPersond = true;
        this.selectPersona = true;
      }
    }), _defineProperty(_this$methods, 'clickPersonb', function clickPersonb() {
      var selectPersonb = this.data.selectPersonb;
      if (selectPersonb == true) {
        this.selectAreb = true;
        this.selectArea = false, this.selectArec = false, this.selectAred = false, this.selectPersonb = false;
        this.selectPerson = true;
        this.selectPersond = true;
        this.selectPersona = true;
      } else {
        this.selectAreb = false;
        this.selectPersonb = true;
        this.selectPerson = true;
        this.selectPersond = true;
        this.selectPersona = true;
      }
    }), _defineProperty(_this$methods, 'clickPersonc', function clickPersonc() {
      var selectPersona = this.data.selectPersona;
      if (selectPersona == true) {
        this.selectArec = true;
        this.selectArea = false, this.selectAred = false, this.selectAreb = false, this.selectPersona = false;
        this.selectPerson = true;
        this.selectPersond = true;
        this.selectPersona = false;
      } else {
        this.selectPersona = true;
        this.selectArec = false;
        this.selectPersonb = true;
        this.selectPerson = true;
        this.selectPersond = true;
      }
    }), _defineProperty(_this$methods, 'clickPersond', function clickPersond() {
      var selectPersond = this.data.selectPersond;
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
    }), _defineProperty(_this$methods, 'clickPersondq', function clickPersondq() {
      this.textx = [];
      wx.showLoading({
        title: '加载中'
      });
      var are = this;
      var selectPersond = this.data.selectPersond;
      var json_link = this.json_link;
      are.code = 'A';
      are.carpricesection = are.data.cgje;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.data.ipo + ',carpricesection:' + are.data.cgje + ',monthlysupplysection:' + are.data.ygje + ',loantermsection:' + are.data.qxje + ',interesttag:' + are.data.txje + ',downpaymentsection:' + are.data.sfje + '}'
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
    }), _defineProperty(_this$methods, 'mySelect', function mySelect(e) {
      this.textx = [];
      this.page = 1;
      this._numm = e.target.dataset.num;
      this.firstPerson = e.target.dataset.me;
      this.pricetypesort = e.target.dataset.id;
      // this.firstPersonc = '品牌';
      this.selectArea = false;
      this.selectPerson = true;
      var json_link = this.json_link;
      var are = this;
      are.code = 'A';
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
        }
      });
    }), _defineProperty(_this$methods, 'mySelectc', function mySelectc(e) {
      this.textx = [];
      this.ipo = '""';
      this.page = 1;
      wx.showLoading({
        title: '加载中'
      });
      this.carbrandidred = e.target.dataset.id;
      this.firstPersonc = e.target.dataset.detail.name;
      this.selectArec = false;
      this.selectPersona = true;
      var json_link = this.json_link;
      var are = this;
      are.code = 'A';
      are.$invoke('inputd', 'clearTap', e.target.dataset.detail.name);
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + ',pricetypesort:' + are.pricetypesort + ',carpricesection:' + are.carpricesection + ',carbrandid:' + e.target.dataset.id + '}'
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
        }
      });
    }), _defineProperty(_this$methods, 'mySelectcpp', function mySelectcpp(e) {
      wx.showLoading({
        title: '加载中'
      });
      this.firstPersonc = '品牌';
      this.carbrandidred = '""';
      this.selectArec = false;
      this.selectPersona = true;
      var json_link = this.json_link;
      var are = this;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.data.ipo + ',pricetypesort:' + are.data.pricetypesort + ',carpricesection:' + are.data.carpricesection + ',carbrandid:' + '""' + '}'
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
        }
      });
    }), _defineProperty(_this$methods, 'mySelectd', function mySelectd(e) {
      this.firstPersond = e.target.dataset.me;
      this.selectAred = false;
      this.selectPersond = true;
    }), _this$methods), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tiexi, [{
    key: 'onLoad',
    value: function onLoad() {
      this.selectPersond = true;
      this.sddss = [];
      this.textx = [];
      this.code = 'A';
      this.page = 1;
      wx.showLoading({
        title: '加载中'
      });
      var are = this;
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      wx.request({
        // 贴息专区
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + ',pricetypesort:' + are.pricetypesort + ',carpricesection:' + are.carpricesection + ',carbrandid:' + are.carbrandidred + '}'
        },
        // 后台返回值
        success: function success(data) {
          are.textx = data.data.carmodelJA;
          are.code = data.data.code;
          // 给数据进行绑定
          are.$apply();
          setTimeout(function () {
            wx.hideLoading();
          }, 0);
          // 选择品牌（热销好车/贴息专区）
          wx.request({
            // url拼接
            url: json_link + '/api/wxapp/newcarloan/brand/specialareabrandlist',
            data: {
              specialtype: 'interestdiscount'
            },
            // 后台返回值
            success: function success(data) {
              are.sddss = data.data.carbrandgroupJA;
              // 定义返回值的数据
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

    // 统计

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.globalData.UVselectType = 2;
      this.$parent.UVstatistical('choosecarpage');
      this.$parent.PVUVstatistical('interestdiscount');
      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化

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
      are.selectPersona = true;
    }

    // 清空

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.init();
      this.sddss = [];
      this.textx = [];
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      wx.request({
        url: json_link + '/api/wxapp/carspecialarea/interestdiscountpage',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + this_.data.ipo + ',pricetypesort:' + this_.data.pricetypesort + ',carpricesection:' + this_.data.carpricesection + ',carbrandid:' + this_.data.carbrandidred + '}'
        },
        success: function success(data) {
          for (var index = 0; index < data.data.carmodelJA.length; index++) {
            this_.textx.push(data.data.carmodelJA[index]);
          }
          wx.stopPullDownRefresh();
          // 设置数据
          wx.hideLoading();
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

  return tiexi;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tiexi , 'pages/tiexi'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpZXhpLmpzIl0sIm5hbWVzIjpbInRpZXhpIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbnB1dGQiLCJJbnB1dCIsImRhdGEiLCJzZWxlY3RQZXJzb25mIiwic2VsZWN0UGVyc29uIiwiZmlyc3RQZXJzb24iLCJmaXJzdFBlcnNvbmIiLCJmaXJzdFBlcnNvbmMiLCJmaXJzdFBlcnNvbmQiLCJzZWxlY3RBcmVhIiwic2VsZWN0QXJlYiIsInNlbGVjdEFyZWMiLCJzZWxlY3RBcmVkIiwic2VsZWN0UGVyc29uYSIsInNlbGVjdFBlcnNvbmIiLCJzZWxlY3RQZXJzb25kIiwianNvbl9saW5rIiwiX251bSIsIl9udW1hIiwiX251bWIiLCJfbnVtYyIsIl9udW1kIiwiX251bWUiLCJfbnVtbSIsInRleHR4IiwidHgiLCJzZiIsInNkZHNzIiwiY2dqZSIsInlnamUiLCJzZmplIiwidHhqZSIsInF4amUiLCJwYWdlIiwiaXBvIiwiY2FyYnJhbmRpZGQiLCJjYXJicmFuZGlkcmVkIiwicHJpY2V0eXBlc29ydCIsImNhcnByaWNlc2VjdGlvbiIsImNvZGUiLCJnZXRTb3VzdW8iLCJzZWFyY2hMb2FkaW5nQ29tcGxldGUiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJnZyIsImUiLCJ3eCIsInJlTGF1bmNoIiwidXJsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJwYXJlbnRfZGF0YSIsInRoaXNfIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJwYWdlc2l6ZSIsInNlYXJjaGRhdGEiLCJzdWNjZXNzIiwiY2FybW9kZWxKQSIsImxlbmd0aCIsInNlYXJjaExvYWRpbmciLCJzaG93VG9hc3QiLCIkYXBwbHkiLCJzZXRUaW1lb3V0IiwiaGlkZVRvYXN0IiwiaW5kZXgiLCJwdXNoIiwiaGlkZUxvYWRpbmciLCJmYWlsIiwiaWNvbiIsImFyZSIsInRoYXQiLCJhY2Nlc3NfdG9rZW4iLCJuYXZpZ2F0ZVRvIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsInRhcmdldCIsImRhdGFzZXQiLCJudW0iLCJpZCIsImlkYSIsImlkYiIsImlkZCIsImlkZSIsIm1lIiwiZGV0YWlsIiwibmFtZSIsIiRpbnZva2UiLCJzcGVjaWFsdHlwZSIsImNhcmJyYW5kZ3JvdXBKQSIsIlVWc2VsZWN0VHlwZSIsIlVWc3RhdGlzdGljYWwiLCJQVlVWc3RhdGlzdGljYWwiLCJpbml0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCLElBRmhCO0FBR1BDLDJCQUFxQjtBQUhkLEssUUFLVkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsVUFBUyxFQUFDLGNBQWEsRUFBZCxFQUFWLEUsUUFDVEMsTyxHQUFVLEVBQUMsVUFBUyxFQUFDLGdCQUFlLElBQWhCLEVBQVYsRSxRQUNUQyxVLEdBQWE7QUFDVkMsY0FBUUM7QUFERSxLLFFBR1pDLEksR0FBTztBQUNMQyxxQkFBZSxLQURWO0FBRUw7QUFDQUMsb0JBQWMsSUFIVDtBQUlMO0FBQ0FDLG1CQUFhLE1BTFI7QUFNTEMsb0JBQWMsSUFOVDtBQU9MQyxvQkFBYyxJQVBUO0FBUUxDLG9CQUFjLElBUlQ7QUFTTDtBQUNBQyxrQkFBWSxLQVZQO0FBV0xDLGtCQUFZLEtBWFA7QUFZTEMsa0JBQVksS0FaUDtBQWFMQyxrQkFBWSxLQWJQO0FBY0w7QUFDQUMscUJBQWUsSUFmVjtBQWdCTDtBQUNBQyxxQkFBZSxJQWpCVjtBQWtCTDtBQUNBQyxxQkFB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TixDQUFXZ0MsR0FEWCxHQUVBLGlCQUZBLEdBR0FvQixNQUFNcEQsSUFBTixDQUFXbUMsYUFIWCxHQUlBLG1CQUpBLEdBS0FpQixNQUFNcEQsSUFBTixDQUFXb0MsZUFMWCxHQU1BLGNBTkEsR0FPQWdCLE1BQU1wRCxJQUFOLENBQVdrQyxhQVBYLEdBUUE7QUFaRSxTQUpHO0FBa0JUMEIsaUJBQVMsaUJBQVM1RCxJQUFULEVBQWU7QUFDdEIsZUFBSyxJQUFJb0UsUUFBUSxDQUFqQixFQUFvQkEsUUFBUXBFLEtBQUtBLElBQUwsQ0FBVTZELFVBQVYsQ0FBcUJDLE1BQWpELEVBQXlETSxPQUF6RCxFQUFrRTtBQUNoRWhCLGtCQUFNOUIsS0FBTixDQUFZK0MsSUFBWixDQUFpQnJFLEtBQUtBLElBQUwsQ0FBVTZELFVBQVYsQ0FBcUJPLEtBQXJCLENBQWpCO0FBQ0Q7QUFDRHRCLGFBQUdvRCxtQkFBSDtBQUNBO0FBQ0FwRCxhQUFHd0IsV0FBSDtBQUNBO0FBQ0FsQixnQkFBTWEsTUFBTjtBQUNELFNBM0JRO0FBNEJUTSxjQUFNLGdCQUFXO0FBQ2Z6QixhQUFHa0IsU0FBSCxDQUFhO0FBQ1hWLG1CQUFPLE1BREk7QUFFWGtCLGtCQUFNO0FBRkssV0FBYjs7QUFLQU4scUJBQVcsWUFBVztBQUNwQnBCLGVBQUdxQixTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBdENRLE9BQVg7QUF3Q0Q7Ozs7RUF4eUJnQ2dDLGVBQUtwRSxJOztrQkFBbkIxQyxLIiwiZmlsZSI6InRpZXhpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zdWJzdGl0dXRpb24nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aWV4aSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0tOaBr+S4k+WMuicsXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaydcclxuICB9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbnB1dGRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiaW5wdXRkXCI6e1widi1vbjpjaGlsZEZuXCI6XCJteVwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgaW5wdXRkOiBJbnB1dFxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIHNlbGVjdFBlcnNvbmY6IGZhbHNlLFxyXG4gICAgLy8g6buY6K6k5o6S5bqP5pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb246IHRydWUsXHJcbiAgICAvLyDnrZvpgInlrZfmrrVcclxuICAgIGZpcnN0UGVyc29uOiAn6buY6K6k5o6S5bqPJyxcclxuICAgIGZpcnN0UGVyc29uYjogJ+i9puS7tycsXHJcbiAgICBmaXJzdFBlcnNvbmM6ICflk4HniYwnLFxyXG4gICAgZmlyc3RQZXJzb25kOiAn562b6YCJJyxcclxuICAgIC8vIOetm+mAieadoeS7tuWbvuagh+eKtuaAgVxyXG4gICAgc2VsZWN0QXJlYTogZmFsc2UsXHJcbiAgICBzZWxlY3RBcmViOiBmYWxzZSxcclxuICAgIHNlbGVjdEFyZWM6IGZhbHNlLFxyXG4gICAgc2VsZWN0QXJlZDogZmFsc2UsXHJcbiAgICAvLyDlk4HniYzmmL7pmpBcclxuICAgIHNlbGVjdFBlcnNvbmE6IHRydWUsXHJcbiAgICAvLyDovabku7fmmL7pmpBcclxuICAgIHNlbGVjdFBlcnNvbmI6IHRydWUsXHJcbiAgICAvLyDnrZvpgInmmL7pmpBcclxuICAgIHNlbGVjdFBlcnNvbmQ6IHRydWUsXHJcbiAgICBqc29uX2xpbms6ICcnLFxyXG4gICAgLy8g562b6YCJ5p2h5Lu25YC8XHJcbiAgICBfbnVtOiAwLFxyXG4gICAgX251bWE6IDAsXHJcbiAgICBfbnVtYjogMCxcclxuICAgIF9udW1jOiAwLFxyXG4gICAgX251bWQ6IDAsXHJcbiAgICBfbnVtZTogMCxcclxuICAgIF9udW1tOiAwLFxyXG4gICAgLy8g5pWw5o2uXHJcbiAgICB0ZXh0eDogW10sXHJcbiAgICB0eDogJycsXHJcbiAgICAvLyDpppbku5hcclxuICAgIHNmOiAnJyxcclxuICAgIC8vIOWTgeeJjFxyXG4gICAgc2Rkc3M6ICcnLFxyXG4gICAgY2dqZTogMCxcclxuICAgIHlnamU6IDAsIC8vIOaciOS+m1xyXG4gICAgc2ZqZTogMCwgLy8g6aaW5LuYXHJcbiAgICB0eGplOiAwLCAvLyDotLTmga/moIfnrb5cclxuICAgIHF4amU6IDAsIC8vIOacn+mZkFxyXG4gICAgcGFnZTogMSxcclxuICAgIC8vIOaQnOe0ouWtl+autVxyXG4gICAgaXBvOiAnXCJcIicsXHJcbiAgICBjYXJicmFuZGlkZDogJ1wiXCInLFxyXG4gICAgLy8g5ZOB54mMaWRcclxuICAgIGNhcmJyYW5kaWRyZWQ6ICdcIlwiJyxcclxuICAgIHByaWNldHlwZXNvcnQ6IDAsIC8vIOS7t+agvOaOkuW6j1xyXG4gICAgY2FycHJpY2VzZWN0aW9uOiAwLCAvLyDovabku7csXHJcbiAgICBjb2RlOiAnJyxcclxuICAgIC8vIOS4iuaLieeKtuaAgVxyXG4gICAgZ2V0U291c3VvOiB0cnVlLFxyXG4gICAgc2VhcmNoTG9hZGluZ0NvbXBsZXRlOmZhbHNlLFxyXG4gICAgdXJsX2xpbms6ICcnXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6XHJcbiAgICAgICAgICAnL3BhZ2VzL3RpZXhpP3BhZ2U9MSZwYWdlc2l6ZT04JmNhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgIHRoaXMuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICcmc2VhcmNobmFtZT0nICtcclxuICAgICAgICAgIHRoaXMuaXBvICtcclxuICAgICAgICAgICcmY2FyYnJhbmRpZD0nICtcclxuICAgICAgICAgIHRoaXMuY2FyYnJhbmRpZHJlZCArXHJcbiAgICAgICAgICAnJnByaWNldHlwZXNvcnQ9JyArXHJcbiAgICAgICAgICB0aGlzLnByaWNldHlwZXNvcnRcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDpppbpobVcclxuICAgIGdnKGUpIHtcclxuICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgIHVybDogJ2luZGV4J1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy90aWV4aSdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDkuIrmi4nmu5HliqhcclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgXHJcblxyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBpZih0aGlzXy5nZXRTb3VzdW89PWZhbHNlKXtcclxuICAgICAgICAgICAgdGhpc18uc2VhcmNoTG9hZGluZ0NvbXBsZXRlPXRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzXy5wYWdlID0gdGhpc18ucGFnZSArIDE7XHJcbiAgICAgIC8vICAgIOivt+axguaOpeWPo1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcnNwZWNpYWxhcmVhL2ludGVyZXN0ZGlzY291bnRwYWdlJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZTogdGhpc18ucGFnZSxcclxuICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgc2VhcmNoZGF0YTpcclxuICAgICAgICAgICAgJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICB0aGlzXy5kYXRhLmlwbyArXHJcbiAgICAgICAgICAgICcscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgICAgdGhpc18uZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgIHRoaXNfLmRhdGEuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgICB0aGlzXy5kYXRhLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgICAnLG1vbnRobHlzdXBwbHlzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICB0aGlzXy5kYXRhLnlnamUgK1xyXG4gICAgICAgICAgICAnLGxvYW50ZXJtc2VjdGlvbjonICtcclxuICAgICAgICAgICAgdGhpc18uZGF0YS5xeGplICtcclxuICAgICAgICAgICAgJyxpbnRlcmVzdHRhZzonICtcclxuICAgICAgICAgICAgdGhpc18uZGF0YS50eGplICtcclxuICAgICAgICAgICAgJyxkb3ducGF5bWVudHNlY3Rpb246JyArXHJcbiAgICAgICAgICAgIHRoaXNfLmRhdGEuc2ZqZSArXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5jYXJtb2RlbEpBLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgIHRoaXNfLmdldFNvdXN1bz1mYWxzZTtcclxuICAgICAgICAgICAgdGhpc18uc2VhcmNoTG9hZGluZz10cnVlIDtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+W3sue7j+WIsOW6lee6v+WVpn4nXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGF0YS5kYXRhLmNhcm1vZGVsSkEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHRoaXNfLmdldFNvdXN1bz10cnVlO1xyXG4gICAgICAgICAgICB0aGlzXy50ZXh0eC5wdXNoKGRhdGEuZGF0YS5jYXJtb2RlbEpBW2luZGV4XSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDorr7nva7mlbDmja5cclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8vIOmHjee9rlxyXG4gICAgY2xpY2tQZXJzb25kcCgpIHtcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5zZWxlY3RQZXJzb25kO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgIGFyZS5maXJzdFBlcnNvbiA9ICfpu5jorqTmjpLluo8nO1xyXG4gICAgICBhcmUuZmlyc3RQZXJzb25jID0gJ+WTgeeJjCc7XHJcbiAgICAgIGFyZS5wcmljZXR5cGVzb3J0ID0gMDtcclxuICAgICAgYXJlLmNhcnByaWNlc2VjdGlvbiA9IDA7XHJcbiAgICAgIGFyZS5jYXJicmFuZGlkcmVkID0gJ1wiXCInO1xyXG4gICAgICBhcmUuX251bSA9IDA7XHJcbiAgICAgIGFyZS5fbnVtYSA9IDA7XHJcbiAgICAgIGFyZS5fbnVtYiA9IDA7XHJcbiAgICAgIGFyZS5fbnVtZSA9IDA7XHJcbiAgICAgIGFyZS5fbnVtZCA9IDA7XHJcbiAgICAgIGFyZS5jZ2plID0gMDtcclxuICAgICAgYXJlLnlnamUgPSAwO1xyXG4gICAgICBhcmUucXhqZSA9IDA7XHJcbiAgICAgIGFyZS5zZmplID0gMDtcclxuICAgICAgYXJlLnR4amUgPSAwO1xyXG4gICAgfSxcclxuICAgIC8vIOaQnOe0olxyXG4gICAgbXkoZSkge1xyXG4gICAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICBhcmUuZGF0YS5jYXJicmFuZGlkcmVkPSdcIlwiJ1xyXG4gICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICBpZiAoZSAhPSAnJykge1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFyZS5pcG8gPSBlO1xyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcnNwZWNpYWxhcmVhL2ludGVyZXN0ZGlzY291bnRwYWdlJyxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgICAgc2VhcmNoZGF0YTpcclxuICAgICAgICAgICAgICAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICAgICAgZSArXHJcbiAgICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgICAgIGFyZS5kYXRhLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgICAgICd9J1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmNhcm1vZGVsSkE7XHJcbiAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pcG8gPSAnXCJcIic7XHJcbiAgICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2Fyc3BlY2lhbGFyZWEvaW50ZXJlc3RkaXNjb3VudHBhZ2UnLFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgICBzZWFyY2hkYXRhOlxyXG4gICAgICAgICAgICAgICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgICAnXCJcIicgK1xyXG4gICAgICAgICAgICAgICcscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgICAgICBhcmUuZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICAgICAnLGNhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgICAgICBhcmUuZGF0YS5jYXJwcmljZXNlY3Rpb24gK1xyXG4gICAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgICBhcmUuZGF0YS5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICAgICAnfSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgICBhcmUuY29kZSA9IGRhdGEuZGF0YS5jb2RlO1xyXG4gICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOmAieaLqeWTgeeJjFxyXG4gICAgeHpfcHAoZSkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdjb21tb2RpdHlfZGV0YWlscz9jYXJtb2RlbGlkPScgKyBlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW2VdO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFszXTtcclxuICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgfSxcclxuICAvKuWIh+aNouetm+mAieadoeS7tiovXHJcbiAgICBjbGlja051bShlKSB7XHJcbiAgICAgIHRoaXMuX251bSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLmNnamUgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtYShlKSB7XHJcbiAgICAgIHRoaXMuX251bWEgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy55Z2plID0gZS50YXJnZXQuZGF0YXNldC5pZGE7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tOdW1iKGUpIHtcclxuICAgICAgdGhpcy5fbnVtYiA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLnF4amUgPSBlLnRhcmdldC5kYXRhc2V0LmlkYjtcclxuICAgIH0sXHJcbiAgICBjbGlja051bWQoZSkge1xyXG4gICAgICB0aGlzLl9udW1kID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMudHhqZSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRkO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtZShlKSB7XHJcbiAgICAgIHRoaXMuX251bWUgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5zZmplID0gZS50YXJnZXQuZGF0YXNldC5pZGU7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tOdW1jKGUpIHtcclxuICAgICAgdGhpcy5fbnVtYyA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtdChlKSB7XHJcbiAgICAgIHRoaXMudGV4dHggPSBbXTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5fbnVtID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMuY2FycHJpY2VzZWN0aW9uID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZWxlY3RBcmViID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcnNwZWNpYWxhcmVhL2ludGVyZXN0ZGlzY291bnRwYWdlJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgc2VhcmNoZGF0YTpcclxuICAgICAgICAgICAgJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICBhcmUuaXBvICtcclxuICAgICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgICBhcmUucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICBlLnRhcmdldC5kYXRhc2V0LmlkICtcclxuICAgICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgICBhcmUuY2FyYnJhbmRpZHJlZCArXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gIC8q5LiL5ouJ5o6S5bqP5pa55byPKi9cclxuICAgIGNsaWNrUGVyc29uYSgpIHtcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbiA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb247XHJcbiAgICAgIGlmIChzZWxlY3RQZXJzb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYSA9IHRydWU7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0UGVyc29uID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25hID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOS4i+aLiei9puS7t+mAieaLqVxyXG4gICAgY2xpY2tQZXJzb25iKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uYiA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25iO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25iID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5ZOB54mM5YiH5o2iXHJcbiAgICBjbGlja1BlcnNvbmMoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb25hID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmE7XHJcbiAgICAgIGlmIChzZWxlY3RQZXJzb25hID09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWMgPSB0cnVlO1xyXG4gICAgICAgICh0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbmEgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25hID0gZmFsc2U7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25hID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5LiL5ouJ562b6YCJXHJcbiAgICBjbGlja1BlcnNvbmQoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmQ7XHJcbiAgICAgIGlmIChzZWxlY3RQZXJzb25kID09IHRydWUpIHtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gdHJ1ZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmViID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25kID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgLyrngrnlh7vnrZvpgInmnaHku7YqL1xyXG4gICAgLy8g56Gu5a6aXHJcbiAgICBjbGlja1BlcnNvbmRxKCkge1xyXG4gICAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25kO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICBhcmUuY2FycHJpY2VzZWN0aW9uID0gYXJlLmRhdGEuY2dqZTtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJzcGVjaWFsYXJlYS9pbnRlcmVzdGRpc2NvdW50cGFnZScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgIHNlYXJjaGRhdGE6XHJcbiAgICAgICAgICAgICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgYXJlLmRhdGEuaXBvICtcclxuICAgICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgIGFyZS5kYXRhLmNnamUgK1xyXG4gICAgICAgICAgICAnLG1vbnRobHlzdXBwbHlzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICBhcmUuZGF0YS55Z2plICtcclxuICAgICAgICAgICAgJyxsb2FudGVybXNlY3Rpb246JyArXHJcbiAgICAgICAgICAgIGFyZS5kYXRhLnF4amUgK1xyXG4gICAgICAgICAgICAnLGludGVyZXN0dGFnOicgK1xyXG4gICAgICAgICAgICBhcmUuZGF0YS50eGplICtcclxuICAgICAgICAgICAgJyxkb3ducGF5bWVudHNlY3Rpb246JyArXHJcbiAgICAgICAgICAgIGFyZS5kYXRhLnNmamUgK1xyXG4gICAgICAgICAgICAnfSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmNhcm1vZGVsSkE7XHJcbiAgICAgICAgICBhcmUuY29kZSA9IGRhdGEuZGF0YS5jb2RlO1xyXG4gICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHNlbGVjdFBlcnNvbmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSB0cnVlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbmQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOeCueWHu+WIh+aNolxyXG4gICAgbXlTZWxlY3QoZSkge1xyXG4gICAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuX251bW0gPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5maXJzdFBlcnNvbiA9IGUudGFyZ2V0LmRhdGFzZXQubWU7XHJcbiAgICAgIHRoaXMucHJpY2V0eXBlc29ydCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIC8vIHRoaXMuZmlyc3RQZXJzb25jID0gJ+WTgeeJjCc7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcnNwZWNpYWxhcmVhL2ludGVyZXN0ZGlzY291bnRwYWdlJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZTogMSxcclxuICAgICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgICAgc2VhcmNoZGF0YTpcclxuICAgICAgICAgICAgJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgICBhcmUuZGF0YS5pcG8gK1xyXG4gICAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmRhdGFzZXQuaWQgK1xyXG4gICAgICAgICAgICAnLGNhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgICAgYXJlLmRhdGEuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgICBhcmUuZGF0YS5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICAgJ30nXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g6YCJ5oup5ZOB54mMXHJcbiAgICBteVNlbGVjdGMoZSkge1xyXG4gICAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICAgIHRoaXMuaXBvID0gJ1wiXCInO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmNhcmJyYW5kaWRyZWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICB0aGlzLmZpcnN0UGVyc29uYyA9IGUudGFyZ2V0LmRhdGFzZXQuZGV0YWlsLm5hbWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBhcmUuY29kZSA9ICdBJztcclxuICAgICAgYXJlLiRpbnZva2UoJ2lucHV0ZCcsICdjbGVhclRhcCcsIGUudGFyZ2V0LmRhdGFzZXQuZGV0YWlsLm5hbWUpOyBcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJzcGVjaWFsYXJlYS9pbnRlcmVzdGRpc2NvdW50cGFnZScsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICAgIHNlYXJjaGRhdGE6XHJcbiAgICAgICAgICAgICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgICAgYXJlLmlwbyArXHJcbiAgICAgICAgICAgICcscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgICAgYXJlLnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgICAnLGNhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgICAgYXJlLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAgICcsY2FyYnJhbmRpZDonICtcclxuICAgICAgICAgICAgZS50YXJnZXQuZGF0YXNldC5pZCArXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICBhcmUudGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5LiN6ZmQ5ZOB54mMXHJcbiAgICBteVNlbGVjdGNwcChlKSB7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb25jID0gJ+WTgeeJjCc7XHJcbiAgICAgIHRoaXMuY2FyYnJhbmRpZHJlZCA9ICdcIlwiJztcclxuICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2Fyc3BlY2lhbGFyZWEvaW50ZXJlc3RkaXNjb3VudHBhZ2UnLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgcGFnZXNpemU6IDgsXHJcbiAgICAgICAgICBzZWFyY2hkYXRhOlxyXG4gICAgICAgICAgICAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICAgIGFyZS5kYXRhLmlwbyArXHJcbiAgICAgICAgICAgICcscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgICAgYXJlLmRhdGEucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgICBhcmUuZGF0YS5jYXJwcmljZXNlY3Rpb24gK1xyXG4gICAgICAgICAgICAnLGNhcmJyYW5kaWQ6JyArXHJcbiAgICAgICAgICAgICdcIlwiJyArXHJcbiAgICAgICAgICAgICd9J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICBhcmUudGV4dHggPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG15U2VsZWN0ZChlKSB7XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb25kID0gZS50YXJnZXQuZGF0YXNldC5tZTtcclxuICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgIHRoaXMuc2Rkc3MgPSBbXTtcclxuICAgIHRoaXMudGV4dHggPSBbXTtcclxuICAgIHRoaXMuY29kZSA9ICdBJztcclxuICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgfSk7XHJcbiAgICBsZXQgYXJlID0gdGhpcztcclxuICAgIC8vIOWumuS5iXVybFxyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIGFyZS5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLy8g6LS05oGv5LiT5Yy6XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2Fyc3BlY2lhbGFyZWEvaW50ZXJlc3RkaXNjb3VudHBhZ2UnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICBzZWFyY2hkYXRhOlxyXG4gICAgICAgICAgJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgYXJlLmlwbyArXHJcbiAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICBhcmUucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAnLGNhcnByaWNlc2VjdGlvbjonICtcclxuICAgICAgICAgIGFyZS5jYXJwcmljZXNlY3Rpb24gK1xyXG4gICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgYXJlLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgJ30nXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmNhcm1vZGVsSkE7XHJcbiAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgLy8g6YCJ5oup5ZOB54mM77yI54Ot6ZSA5aW96L2mL+i0tOaBr+S4k+WMuu+8iVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vYnJhbmQvc3BlY2lhbGFyZWFicmFuZGxpc3QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBzcGVjaWFsdHlwZTogJ2ludGVyZXN0ZGlzY291bnQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGFyZS5zZGRzcyA9IGRhdGEuZGF0YS5jYXJicmFuZGdyb3VwSkE7XHJcbiAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDnu5/orqFcclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAyO1xyXG4gICAgdGhpcy4kcGFyZW50LlVWc3RhdGlzdGljYWwoJ2Nob29zZWNhcnBhZ2UnKTtcclxuICAgIHRoaXMuJHBhcmVudC5QVlVWc3RhdGlzdGljYWwoJ2ludGVyZXN0ZGlzY291bnQnKTtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICB9XHJcblxyXG4gIC8vIOWIneWni+WMllxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgYXJlID0gdGhpcztcclxuICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5zZWxlY3RQZXJzb25kO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgYXJlLmZpcnN0UGVyc29uID0gJ+m7mOiupOaOkuW6jyc7XHJcbiAgICBhcmUuZmlyc3RQZXJzb25jID0gJ+WTgeeJjCc7XHJcbiAgICBhcmUucHJpY2V0eXBlc29ydCA9IDA7XHJcbiAgICBhcmUuY2FycHJpY2VzZWN0aW9uID0gMDtcclxuICAgIGFyZS5jYXJicmFuZGlkcmVkID0gJ1wiXCInO1xyXG4gICAgYXJlLl9udW0gPSAwO1xyXG4gICAgYXJlLl9udW1hID0gMDtcclxuICAgIGFyZS5fbnVtYiA9IDA7XHJcbiAgICBhcmUuX251bWUgPSAwO1xyXG4gICAgYXJlLl9udW1kID0gMDtcclxuICAgIGFyZS5jZ2plID0gMDtcclxuICAgIGFyZS55Z2plID0gMDtcclxuICAgIGFyZS5xeGplID0gMDtcclxuICAgIGFyZS5zZmplID0gMDtcclxuICAgIGFyZS50eGplID0gMDtcclxuICAgIGFyZS5pcG8gPSAnXCJcIic7XHJcbiAgICBhcmUuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvLyDmuIXnqbpcclxuICBvblVubG9hZCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgdGhpcy5zZGRzcyA9IFtdO1xyXG4gICAgdGhpcy50ZXh0eCA9IFtdO1xyXG4gIH1cclxuICAvLyDkuIvmi4nliLfmlrBcclxuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvY2Fyc3BlY2lhbGFyZWEvaW50ZXJlc3RkaXNjb3VudHBhZ2UnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZTogMSxcclxuICAgICAgICBwYWdlc2l6ZTogOCxcclxuICAgICAgICBzZWFyY2hkYXRhOlxyXG4gICAgICAgICAgJ3tzZWFyY2huYW1lOicgK1xyXG4gICAgICAgICAgdGhpc18uZGF0YS5pcG8gK1xyXG4gICAgICAgICAgJyxwcmljZXR5cGVzb3J0OicgK1xyXG4gICAgICAgICAgdGhpc18uZGF0YS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgdGhpc18uZGF0YS5jYXJwcmljZXNlY3Rpb24gK1xyXG4gICAgICAgICAgJyxjYXJicmFuZGlkOicgK1xyXG4gICAgICAgICAgdGhpc18uZGF0YS5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICd9J1xyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEuZGF0YS5jYXJtb2RlbEpBLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgdGhpc18udGV4dHgucHVzaChkYXRhLmRhdGEuY2FybW9kZWxKQVtpbmRleF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICAgICAgLy8g6K6+572u5pWw5o2uXHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19