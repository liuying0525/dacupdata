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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var products = function (_wepy$page) {
  _inherits(products, _wepy$page);

  function products() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, products);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = products.__proto__ || Object.getPrototypeOf(products)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '热销好车',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.$repeat = {}, _this.$props = { "Input": { "xmlns:v-on": "" } }, _this.$events = { "Input": { "v-on:childFn": "my" } }, _this.components = {
      Input: _substitution2.default
    }, _this.data = {
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
      // 车价显隐
      selectPersonb: true,
      // 品牌显隐
      selectPersona: true,
      // 筛选显隐
      selectPersond: true,
      // 筛选条件值
      _num: 0,
      _numa: 0,
      _numb: 0,
      _numc: 0,
      _numd: 0,
      _nume: 0,
      _numm: 0,
      // 车型列表
      carmodelja: '',
      carmodeltopja: [],
      json_link: '',
      tx: '',
      // 首付
      sf: '',
      sddss: [], // 品牌列表
      ygje: 0, // 月供
      sfje: 0, // 首付
      txje: 0, // 贴息标签
      qxje: 0, // 期限
      selectPersonf: false,
      page: 1,
      // 搜索字段
      ipo: '""',
      carbrandidd: '""',
      carbrandidred: '', // 品牌id
      pricetypesort: 0, // 价格排序
      carpricesection: 0, // 车价,
      // 热推隐藏
      hideReTui: false,
      searchLoadingComplete: false,
      // scroll:false
      // 滚动到底部
      getSousuo: true,
      searchLoading: false,
      code: '',
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/products?page=1&pagesize=8&carpricesection=' + this.carpricesection + '&monthlysupplysection=' + this.ygje + '&loantermsection=' + this.qxje + '&downpaymentsection=' + this.sfje + '&carbrandid=' + this.carbrandidred + '&pricetypesort=' + this.pricetypesort + '&specialtype=hotsale'
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
        are.carbrandidred = '';
        are._num = 0;
        are._numa = 0;
        are._numb = 0;
        are._nume = 0;
        are._numd = 0;
        are.ygje = 0;
        are.qxje = 0;
        are.sfje = 0;
        are.txje = 0;
        are.page = 1;
      },

      // 上拉刷新
      scrolltolower: function scrolltolower() {
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        if (this.getSousuo == false) {
          this.searchLoading = true;
          return;
        }
        wx.showLoading({
          title: '加载中'
        });
        if (this.data.ipo != '') {
          var _this_ = this;
          _this_.page = _this_.page + 1;
          //    请求接口
          this.getRexiao('onReachBottom');
          return;
        }
        var this_ = this;
        this_.page = this_.page + 1;
        //    请求接口
        this.getRexiao('onReachBottom');
      },

      // 监听滚动事件
      scroll: function scroll(e) {
        var scrollTop = e.detail.scrollTop;
        if (scrollTop < 10) {
          this.hideReTui = false;
        } else {
          this.hideReTui = true;
        }
      },

      // 搜索
      my: function my(e) {
        var json_link = this.json_link;
        var are = this;
        if (e != '') {
          wx.showLoading({
            title: '加载中'
          });
          are.ipo = e;
          are.firstPersonc = '品牌';
          are.carbrandidred = '';
          this.getRexiao();
        } else {
          this.ipo = '""';
          wx.showLoading({
            title: '加载中'
          });
          var that = this;
          var _json_link = this.$parent.globalData.json_link;
          var parent_data = this.$parent.globalData;
          var access_token = parent_data.access_token;
          this.getRexiao();
        }
      },

      // 去金融产品列表
      xz_pp: function xz_pp(e) {
        wx.navigateTo({
          url: 'commodity_details?carmodelid=' + e
        });

        this.$parent.globalData.pageid = [e];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      /*切换筛选条件*/
      clickNum: function clickNum(e) {
        this._num = e.target.dataset.num;
        this.carpricesection = e.target.dataset.id;
      },
      clickNuma: function clickNuma(e) {
        this._numa = e.target.dataset.num;
        this.ygje = e.target.dataset.ida;
      },
      clickNumb: function clickNumb(e) {
        this._numb = e.target.dataset.num;
        this.qxje = e.target.dataset.idb;
      },
      clickNumd: function clickNumd(e) {
        this._numd = e.target.dataset.num;
        this.txje = e.target.dataset.idd;
      },
      clickNume: function clickNume(e) {
        this._nume = e.target.dataset.num;
        this.sfje = e.target.dataset.ide;
      },
      clickNumc: function clickNumc(e) {
        this._numc = e.target.dataset.num;
      },
      clickNumt: function clickNumt(e) {
        wx.showLoading({
          title: '加载中'
        });
        this.page = 1;
        this.carmodelja = [];
        this._num = e.target.dataset.num;
        this.firstPersonb = e.target.dataset.me;
        this.carpricesection = e.target.dataset.id;
        this.selectAreb = false;
        this.selectPersonb = true;
        var json_link = this.json_link;
        var are = this;
        this.getRexiao();
      },

      /*切换筛选条件*/

      /*点击筛选条件*/
      clickPersona: function clickPersona() {
        var selectPerson = this.data.selectPerson;
        if (selectPerson == true) {
          this.selectArea = true;
          this.selectAreb = false, this.selectArec = false, this.selectAred = false, this.selectPerson = false;
          this.selectPersonb = true;
          this.selectPersond = true;
          this.selectPersona = true;
        } else {
          this.selectArea = false;
          this.selectArec = false;
          this.selectAreb = false;
          this.selectPerson = true;
          this.selectPersonb = true;
          this.selectPersond = true;
          this.selectPersona = true;
        }
      },
      clickPersonb: function clickPersonb() {
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
      },
      clickPersonc: function clickPersonc() {
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
      },
      clickPersond: function clickPersond() {
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
      },
      clickPersondq: function clickPersondq() {
        wx.showLoading({
          title: '加载中'
        });
        var are = this;
        var selectPersond = this.data.selectPersond;
        var json_link = this.json_link;
        are.page = 1;
        this.getRexiao();
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

      /*点击筛选条件*/
      // 点击切换
      mySelect: function mySelect(e) {
        wx.showLoading({
          title: '加载中'
        });
        this.page = 1;
        this.carmodelja = [];
        this._numm = e.target.dataset.num;
        this.firstPerson = e.target.dataset.me;
        this.pricetypesort = e.target.dataset.id;
        this.selectArea = false;
        this.selectPerson = true;

        var json_link = this.json_link;
        var are = this;
        this.getRexiao();
      },
      mySelectc: function mySelectc(e) {
        wx.showLoading({
          title: '加载中'
        });
        this.page = 1;
        this.carmodelja = [];
        this.firstPersonc = e.target.dataset.detail.name;
        this.carbrandidred = e.target.dataset.id;
        this.selectArec = false;
        this.selectPersona = true;
        var json_link = this.json_link;
        var are = this;
        are.code = 'A';
        are.$invoke('Input', 'clearTap', e.target.dataset.detail.name);
        this.getRexiao();
      },
      mySelectcpp: function mySelectcpp(e) {
        wx.showLoading({
          title: '加载中'
        });
        this.page = 1;
        this.carmodelja = [];
        this.firstPersonc = '品牌';
        this.carbrandidred = '';
        this.selectArec = false;
        this.selectPersona = true;
        var json_link = this.json_link;
        var are = this;
        are.code = 'A';
        are.$invoke('Input', 'clearTap', '请选择品牌');
        this.getRexiao();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(products, [{
    key: 'onLoad',


    // 初始化
    value: function onLoad() {
      wx.showLoading({
        title: '加载中'
      });
      var are = this;
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      this.page = 1;
      are.code = 'A';
      are.sddss = [];
      are.carmodelja = [];
      are.carmodeltopja = [];
      this.getRexiao();
      this.getPinpai();
    }

    // 统计

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.globalData.UVselectType = 3;
      this.$parent.UVstatistical('choosecarpage');
      this.$parent.PVUVstatistical('hotsale');
      this.url_link = this.$parent.globalData.url_link;
    }

    // 获取热销好车数据

  }, {
    key: 'getRexiao',
    value: function getRexiao(type) {
      var are = this;
      var selectPersond = this.selectPersond;
      var json_link = this.json_link;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/hotsale',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: are.page,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + ',carpricesection:' + are.carpricesection + ',monthlysupplysection:' + are.ygje + ',loantermsection:' + are.qxje + ',downpaymentsection:' + are.sfje + ',carbrandid:"' + are.carbrandidred + '",pricetypesort:' + are.pricetypesort + '}'
        },
        // 后台返回值
        success: function success(data) {
          wx.hideLoading();
          // 定义返回值的数据
          if (type === 'onReachBottom') {
            if (data.data.carmodelJA.length > 0) {
              are.getSousuo = true;

              are.carmodelja = are.carmodelja.concat(data.data.carmodelJA);
              are.$apply();
            } else {
              are.page -= 1;
              are.getSousuo = false;
              are.searchLoading = true;
              wx.showToast({
                title: '已经到底线啦~'
              });
              are.$apply();
            }
          } else {
            are.carmodelja = data.data.carmodelJA;
            are.code = data.data.code;
          }
          are.carmodeltopja = data.data.carmodeltopJA;
          // 给数据进行绑定
          are.$apply();
        },

        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });
          return;
        }
      });
    }

    // 获取品牌列表

  }, {
    key: 'getPinpai',
    value: function getPinpai() {
      var are = this;
      var json_link = this.json_link;
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/brand/specialareabrandlist',
        data: {
          specialtype: 'hotsale'
        },
        success: function success(res) {
          are.sddss = res.data.carbrandgroupJA;
          are.$apply();
        }
      });
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
      are.carbrandidred = '';
      are._num = 0;
      are._numa = 0;
      are._numb = 0;
      are._nume = 0;
      are._numd = 0;
      are.ygje = 0;
      are.qxje = 0;
      are.sfje = 0;
      are.txje = 0;
      are.ipo = '""';
      are.sddss = [];
      are.carmodelja = [];
      are.carmodeltopja = [];
      are.hideReTui = false;
      are.selectPersona = true;
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.init();
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });
      var are = this;
      var selectPersond = this.selectPersond;
      var json_link = this.json_link;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/carspecialarea/hotsale',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: are.page,
          pagesize: 8,
          searchdata: '{searchname:' + are.ipo + ',carpricesection:' + are.carpricesection + ',monthlysupplysection:' + are.ygje + ',loantermsection:' + are.qxje + ',downpaymentsection:' + are.sfje + ',carbrandid:"' + are.carbrandidred + '",pricetypesort:' + are.pricetypesort + '}'
        },
        // 后台返回值
        success: function success(data) {
          wx.hideLoading();
          // 定义返回值的数据
          are.carmodelja = data.data.carmodelJA;
          are.code = data.data.code;
          are.carmodeltopja = data.data.carmodeltopJA;
          wx.stopPullDownRefresh();
          // 给数据进行绑定
          are.$apply();
        }
      });
    }
  }]);

  return products;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(products , 'pages/products'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RzLmpzIl0sIm5hbWVzIjpbInByb2R1Y3RzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsImJhY2tncm91bmRUZXh0U3R5bGUiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJJbnB1dCIsImRhdGEiLCJzZWxlY3RQZXJzb24iLCJmaXJzdFBlcnNvbiIsImZpcnN0UGVyc29uYiIsImZpcnN0UGVyc29uYyIsImZpcnN0UGVyc29uZCIsInNlbGVjdEFyZWEiLCJzZWxlY3RBcmViIiwic2VsZWN0QXJlYyIsInNlbGVjdEFyZWQiLCJzZWxlY3RQZXJzb25iIiwic2VsZWN0UGVyc29uYSIsInNlbGVjdFBlcnNvbmQiLCJfbnVtIiwiX251bWEiLCJfbnVtYiIsIl9udW1jIiwiX251bWQiLCJfbnVtZSIsIl9udW1tIiwiY2FybW9kZWxqYSIsImNhcm1vZGVsdG9wamEiLCJqc29uX2xpbmsiLCJ0eCIsInNmIiwic2Rkc3MiLCJ5Z2plIiwic2ZqZSIsInR4amUiLCJxeGplIiwic2VsZWN0UGVyc29uZiIsInBhZ2UiLCJpcG8iLCJjYXJicmFuZGlkZCIsImNhcmJyYW5kaWRyZWQiLCJwcmljZXR5cGVzb3J0IiwiY2FycHJpY2VzZWN0aW9uIiwiaGlkZVJlVHVpIiwic2VhcmNoTG9hZGluZ0NvbXBsZXRlIiwiZ2V0U291c3VvIiwic2VhcmNoTG9hZGluZyIsImNvZGUiLCJ1cmxfbGluayIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJjbGlja1BlcnNvbmRwIiwiYXJlIiwic2Nyb2xsdG9sb3dlciIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicGFyZW50X2RhdGEiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ0aGlzXyIsImdldFJleGlhbyIsInNjcm9sbCIsImUiLCJzY3JvbGxUb3AiLCJkZXRhaWwiLCJteSIsInRoYXQiLCJhY2Nlc3NfdG9rZW4iLCJ4el9wcCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlaWQiLCJwYWdlbmFtZSIsImNsaWNrbnVtb3JkZXJudW1zdGF0IiwiY2xpY2tOdW0iLCJ0YXJnZXQiLCJkYXRhc2V0IiwibnVtIiwiaWQiLCJjbGlja051bWEiLCJpZGEiLCJjbGlja051bWIiLCJpZGIiLCJjbGlja051bWQiLCJpZGQiLCJjbGlja051bWUiLCJpZGUiLCJjbGlja051bWMiLCJjbGlja051bXQiLCJtZSIsImNsaWNrUGVyc29uYSIsImNsaWNrUGVyc29uYiIsImNsaWNrUGVyc29uYyIsImNsaWNrUGVyc29uZCIsImNsaWNrUGVyc29uZHEiLCJteVNlbGVjdCIsIm15U2VsZWN0YyIsIm5hbWUiLCIkaW52b2tlIiwibXlTZWxlY3RjcHAiLCJnZXRQaW5wYWkiLCJVVnNlbGVjdFR5cGUiLCJVVnN0YXRpc3RpY2FsIiwiUFZVVnN0YXRpc3RpY2FsIiwidHlwZSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJwYWdlc2l6ZSIsInNlYXJjaGRhdGEiLCJzdWNjZXNzIiwiaGlkZUxvYWRpbmciLCJjYXJtb2RlbEpBIiwibGVuZ3RoIiwiY29uY2F0IiwiJGFwcGx5Iiwic2hvd1RvYXN0IiwiY2FybW9kZWx0b3BKQSIsImZhaWwiLCJpY29uIiwic3BlY2lhbHR5cGUiLCJyZXMiLCJjYXJicmFuZGdyb3VwSkEiLCJpbml0Iiwic3RvcFB1bGxEb3duUmVmcmVzaCIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QixJQUZoQjtBQUdQQywyQkFBcUI7QUFIZCxLLFFBS1ZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxjQUFhLEVBQWQsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFQUFDLFNBQVEsRUFBQyxnQkFBZSxJQUFoQixFQUFULEUsUUFD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LElBQUlmLEdBREosR0FFQSxtQkFGQSxHQUdBZSxJQUFJWCxlQUhKLEdBSUEsd0JBSkEsR0FLQVcsSUFBSXJCLElBTEosR0FNQSxtQkFOQSxHQU9BcUIsSUFBSWxCLElBUEosR0FRQSxzQkFSQSxHQVNBa0IsSUFBSXBCLElBVEosR0FVQSxlQVZBLEdBV0FvQixJQUFJYixhQVhKLEdBWUEsa0JBWkEsR0FhQWEsSUFBSVosYUFiSixHQWNBO0FBbEJFLFNBTEc7QUF5QlQ7QUFDQXVFLGVBMUJTLG1CQTBCRDFHLElBMUJDLEVBMEJLO0FBQ1pvRCxhQUFHdUQsV0FBSDtBQUNBO0FBQ0E1RCxjQUFJM0IsVUFBSixHQUFpQnBCLEtBQUtBLElBQUwsQ0FBVTRHLFVBQTNCO0FBQ0E3RCxjQUFJTixJQUFKLEdBQVd6QyxLQUFLQSxJQUFMLENBQVV5QyxJQUFyQjtBQUNBTSxjQUFJMUIsYUFBSixHQUFvQnJCLEtBQUtBLElBQUwsQ0FBVWlILGFBQTlCO0FBQ0E3RCxhQUFHb0UsbUJBQUg7QUFDQTtBQUNBekUsY0FBSWdFLE1BQUo7QUFDRDtBQW5DUSxPQUFYO0FBcUNEOzs7O0VBemlCbUNVLGVBQUsxRixJOztrQkFBdEJ6QyxRIiwiZmlsZSI6InByb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zdWJzdGl0dXRpb24nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9kdWN0cyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eDremUgOWlvei9picsXHJcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnZGFyaydcclxuICB9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJJbnB1dFwiOntcInhtbG5zOnYtb25cIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJJbnB1dFwiOntcInYtb246Y2hpbGRGblwiOlwibXlcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgIElucHV0OiBJbnB1dFxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOm7mOiupOaOkuW6j+aYvumakFxyXG4gICAgc2VsZWN0UGVyc29uOiB0cnVlLFxyXG4gICAgLy8g562b6YCJ5a2X5q61XHJcbiAgICBmaXJzdFBlcnNvbjogJ+m7mOiupOaOkuW6jycsXHJcbiAgICBmaXJzdFBlcnNvbmI6ICfovabku7cnLFxyXG4gICAgZmlyc3RQZXJzb25jOiAn5ZOB54mMJyxcclxuICAgIGZpcnN0UGVyc29uZDogJ+etm+mAiScsXHJcbiAgICAvLyDnrZvpgInmnaHku7blm77moIfnirbmgIFcclxuICAgIHNlbGVjdEFyZWE6IGZhbHNlLFxyXG4gICAgc2VsZWN0QXJlYjogZmFsc2UsXHJcbiAgICBzZWxlY3RBcmVjOiBmYWxzZSxcclxuICAgIHNlbGVjdEFyZWQ6IGZhbHNlLFxyXG4gICAgLy8g6L2m5Lu35pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb25iOiB0cnVlLFxyXG4gICAgLy8g5ZOB54mM5pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb25hOiB0cnVlLFxyXG4gICAgLy8g562b6YCJ5pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb25kOiB0cnVlLFxyXG4gICAgLy8g562b6YCJ5p2h5Lu25YC8XHJcbiAgICBfbnVtOiAwLFxyXG4gICAgX251bWE6IDAsXHJcbiAgICBfbnVtYjogMCxcclxuICAgIF9udW1jOiAwLFxyXG4gICAgX251bWQ6IDAsXHJcbiAgICBfbnVtZTogMCxcclxuICAgIF9udW1tOiAwLFxyXG4gICAgLy8g6L2m5Z6L5YiX6KGoXHJcbiAgICBjYXJtb2RlbGphOiAnJyxcclxuICAgIGNhcm1vZGVsdG9wamE6IFtdLFxyXG4gICAganNvbl9saW5rOiAnJyxcclxuICAgIHR4OiAnJyxcclxuICAgIC8vIOmmluS7mFxyXG4gICAgc2Y6ICcnLFxyXG4gICAgc2Rkc3M6IFtdLCAvLyDlk4HniYzliJfooahcclxuICAgIHlnamU6IDAsIC8vIOaciOS+m1xyXG4gICAgc2ZqZTogMCwgLy8g6aaW5LuYXHJcbiAgICB0eGplOiAwLCAvLyDotLTmga/moIfnrb5cclxuICAgIHF4amU6IDAsIC8vIOacn+mZkFxyXG4gICAgc2VsZWN0UGVyc29uZjogZmFsc2UsXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgLy8g5pCc57Si5a2X5q61XHJcbiAgICBpcG86ICdcIlwiJyxcclxuICAgIGNhcmJyYW5kaWRkOiAnXCJcIicsXHJcbiAgICBjYXJicmFuZGlkcmVkOiAnJywgLy8g5ZOB54mMaWRcclxuICAgIHByaWNldHlwZXNvcnQ6IDAsIC8vIOS7t+agvOaOkuW6j1xyXG4gICAgY2FycHJpY2VzZWN0aW9uOiAwLCAvLyDovabku7csXHJcbiAgICAvLyDng63mjqjpmpDol49cclxuICAgIGhpZGVSZVR1aTogZmFsc2UsXHJcbiAgICBzZWFyY2hMb2FkaW5nQ29tcGxldGU6IGZhbHNlLFxyXG4gICAgLy8gc2Nyb2xsOmZhbHNlXHJcbiAgICAvLyDmu5rliqjliLDlupXpg6hcclxuICAgIGdldFNvdXN1bzogdHJ1ZSxcclxuICAgIHNlYXJjaExvYWRpbmc6IGZhbHNlLFxyXG4gICAgY29kZTonJyxcclxuICAgIHVybF9saW5rOicnXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGg6XHJcbiAgICAgICAgICAnL3BhZ2VzL3Byb2R1Y3RzP3BhZ2U9MSZwYWdlc2l6ZT04JmNhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgIHRoaXMuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnlnamUgK1xyXG4gICAgICAgICAgJyZsb2FudGVybXNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnF4amUgK1xyXG4gICAgICAgICAgJyZkb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnNmamUgK1xyXG4gICAgICAgICAgJyZjYXJicmFuZGlkPScgK1xyXG4gICAgICAgICAgdGhpcy5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICcmcHJpY2V0eXBlc29ydD0nICtcclxuICAgICAgICAgIHRoaXMucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAnJnNwZWNpYWx0eXBlPWhvdHNhbGUnXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgLy8g6YeN572uXHJcbiAgICBjbGlja1BlcnNvbmRwKCkge1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbmQgPSB0aGlzLnNlbGVjdFBlcnNvbmQ7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgYXJlLmZpcnN0UGVyc29uID0gJ+m7mOiupOaOkuW6jyc7XHJcbiAgICAgIGFyZS5maXJzdFBlcnNvbmMgPSAn5ZOB54mMJztcclxuICAgICAgYXJlLnByaWNldHlwZXNvcnQgPSAwO1xyXG4gICAgICBhcmUuY2FycHJpY2VzZWN0aW9uID0gMDtcclxuICAgICAgYXJlLmNhcmJyYW5kaWRyZWQgPSAnJztcclxuICAgICAgYXJlLl9udW0gPSAwO1xyXG4gICAgICBhcmUuX251bWEgPSAwO1xyXG4gICAgICBhcmUuX251bWIgPSAwO1xyXG4gICAgICBhcmUuX251bWUgPSAwO1xyXG4gICAgICBhcmUuX251bWQgPSAwO1xyXG4gICAgICBhcmUueWdqZSA9IDA7XHJcbiAgICAgIGFyZS5xeGplID0gMDtcclxuICAgICAgYXJlLnNmamUgPSAwO1xyXG4gICAgICBhcmUudHhqZSA9IDA7XHJcbiAgICAgIGFyZS5wYWdlPSAxXHJcbiAgICB9LFxyXG4gICAgLy8g5LiK5ouJ5Yi35pawXHJcbiAgICBzY3JvbGx0b2xvd2VyKCkge1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgaWYgKHRoaXMuZ2V0U291c3VvID09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5pcG8gIT0gJycpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIHRoaXNfLnBhZ2UgPSB0aGlzXy5wYWdlICsgMTtcclxuICAgICAgICAvLyAgICDor7fmsYLmjqXlj6NcclxuICAgICAgICB0aGlzLmdldFJleGlhbygnb25SZWFjaEJvdHRvbScpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICB0aGlzXy5wYWdlID0gdGhpc18ucGFnZSArIDE7XHJcbiAgICAgIC8vICAgIOivt+axguaOpeWPo1xyXG4gICAgICB0aGlzLmdldFJleGlhbygnb25SZWFjaEJvdHRvbScpO1xyXG4gICAgfSxcclxuICAgIC8vIOebkeWQrOa7muWKqOS6i+S7tlxyXG4gICAgc2Nyb2xsKGUpIHtcclxuICAgICAgbGV0IHNjcm9sbFRvcCA9IGUuZGV0YWlsLnNjcm9sbFRvcDtcclxuICAgICAgaWYgKHNjcm9sbFRvcCA8IDEwKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlUmVUdWkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhpZGVSZVR1aSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDmkJzntKJcclxuICAgIG15KGUpIHtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgaWYgKGUgIT0gJycpIHtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBhcmUuaXBvID0gZTtcclxuICAgICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICAgICBhcmUuY2FyYnJhbmRpZHJlZD0nJztcclxuICAgICAgICB0aGlzLmdldFJleGlhbygpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXBvID0gJ1wiXCInO1xyXG4gICAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW47XHJcbiAgICAgICAgdGhpcy5nZXRSZXhpYW8oKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWOu+mHkeiejeS6p+WTgeWIl+ihqFxyXG4gICAgeHpfcHAoZSkge1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdjb21tb2RpdHlfZGV0YWlscz9jYXJtb2RlbGlkPScgKyBlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW2VdO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFszXTtcclxuICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgfSxcclxuICAgIC8q5YiH5o2i562b6YCJ5p2h5Lu2Ki9cclxuICAgIGNsaWNrTnVtKGUpIHtcclxuICAgICAgdGhpcy5fbnVtID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMuY2FycHJpY2VzZWN0aW9uID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIH0sXHJcbiAgICBjbGlja051bWEoZSkge1xyXG4gICAgICB0aGlzLl9udW1hID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMueWdqZSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRhO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtYihlKSB7XHJcbiAgICAgIHRoaXMuX251bWIgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5xeGplID0gZS50YXJnZXQuZGF0YXNldC5pZGI7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tOdW1kKGUpIHtcclxuICAgICAgdGhpcy5fbnVtZCA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLnR4amUgPSBlLnRhcmdldC5kYXRhc2V0LmlkZDtcclxuICAgIH0sXHJcbiAgICBjbGlja051bWUoZSkge1xyXG4gICAgICB0aGlzLl9udW1lID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMuc2ZqZSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRlO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtYyhlKSB7XHJcbiAgICAgIHRoaXMuX251bWMgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgIH0sXHJcbiAgICBjbGlja051bXQoZSkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmNhcm1vZGVsamEgPSBbXTtcclxuICAgICAgdGhpcy5fbnVtID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb25iID0gZS50YXJnZXQuZGF0YXNldC5tZTtcclxuICAgICAgdGhpcy5jYXJwcmljZXNlY3Rpb24gPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICB0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgdGhpcy5nZXRSZXhpYW8oKTtcclxuICAgIH0sXHJcbiAgICAvKuWIh+aNouetm+mAieadoeS7tiovXHJcblxyXG4gICAgLyrngrnlh7vnrZvpgInmnaHku7YqL1xyXG4gICAgY2xpY2tQZXJzb25hKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbjtcclxuICAgICAgaWYgKHNlbGVjdFBlcnNvbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVhID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmViID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb24gPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVhID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tQZXJzb25iKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uYiA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25iO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25iID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tQZXJzb25jKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uYSA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25hO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uYSA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVjID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlZCA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25hID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsaWNrUGVyc29uZCgpIHtcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbmQgPSB0aGlzLmRhdGEuc2VsZWN0UGVyc29uZDtcclxuICAgICAgaWYgKHNlbGVjdFBlcnNvbmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSB0cnVlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbmQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsaWNrUGVyc29uZHEoKSB7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25kO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgICBhcmUucGFnZT0gMTtcclxuICAgICAgdGhpcy5nZXRSZXhpYW8oKTtcclxuICAgICAgaWYgKHNlbGVjdFBlcnNvbmQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSB0cnVlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbmQgPSBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8q54K55Ye7562b6YCJ5p2h5Lu2Ki9cclxuICAgIC8vIOeCueWHu+WIh+aNolxyXG4gICAgbXlTZWxlY3QoZSkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmNhcm1vZGVsamEgPSBbXTtcclxuICAgICAgdGhpcy5fbnVtbSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLmZpcnN0UGVyc29uID0gZS50YXJnZXQuZGF0YXNldC5tZTtcclxuICAgICAgdGhpcy5wcmljZXR5cGVzb3J0ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgdGhpcy5zZWxlY3RBcmVhID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuZ2V0UmV4aWFvKCk7XHJcbiAgICB9LFxyXG4gICAgbXlTZWxlY3RjKGUpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgdGhpcy5jYXJtb2RlbGphID0gW107XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb25jID0gZS50YXJnZXQuZGF0YXNldC5kZXRhaWwubmFtZTtcclxuICAgICAgdGhpcy5jYXJicmFuZGlkcmVkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uYSA9IHRydWU7XHJcbiAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICBhcmUuJGludm9rZSgnSW5wdXQnLCAnY2xlYXJUYXAnLCBlLnRhcmdldC5kYXRhc2V0LmRldGFpbC5uYW1lKTsgXHJcbiAgICAgIHRoaXMuZ2V0UmV4aWFvKCk7XHJcbiAgICB9LFxyXG4gICAgbXlTZWxlY3RjcHAoZSkge1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmNhcm1vZGVsamEgPSBbXTtcclxuICAgICAgdGhpcy5maXJzdFBlcnNvbmMgPSAn5ZOB54mMJztcclxuICAgICAgdGhpcy5jYXJicmFuZGlkcmVkID0gJyc7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBhcmUuY29kZSA9ICdBJztcclxuICAgICAgYXJlLiRpbnZva2UoJ0lucHV0JywgJ2NsZWFyVGFwJywgJ+ivt+mAieaLqeWTgeeJjCcpO1xyXG4gICAgICB0aGlzLmdldFJleGlhbygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOWIneWni+WMllxyXG4gIG9uTG9hZCgpIHtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgLy8g5a6a5LmJdXJsXHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgYXJlLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICBhcmUuY29kZSA9ICdBJztcclxuICAgIGFyZS5zZGRzcyA9IFtdO1xyXG4gICAgYXJlLmNhcm1vZGVsamEgPSBbXTtcclxuICAgIGFyZS5jYXJtb2RlbHRvcGphID0gW107XHJcbiAgICB0aGlzLmdldFJleGlhbygpO1xyXG4gICAgdGhpcy5nZXRQaW5wYWkoKTtcclxuICB9XHJcblxyXG4gIC8vIOe7n+iuoVxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IDM7XHJcbiAgICB0aGlzLiRwYXJlbnQuVVZzdGF0aXN0aWNhbCgnY2hvb3NlY2FycGFnZScpO1xyXG4gICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnaG90c2FsZScpO1xyXG4gICAgdGhpcy51cmxfbGluaz0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bng63plIDlpb3ovabmlbDmja5cclxuICBnZXRSZXhpYW8odHlwZSkge1xyXG4gICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9jYXJzcGVjaWFsYXJlYS9ob3RzYWxlJyxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBhZ2U6IGFyZS5wYWdlLFxyXG4gICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgIHNlYXJjaGRhdGE6XHJcbiAgICAgICAgICAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICBhcmUuaXBvICtcclxuICAgICAgICAgICcsY2FycHJpY2VzZWN0aW9uOicgK1xyXG4gICAgICAgICAgYXJlLmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAnLG1vbnRobHlzdXBwbHlzZWN0aW9uOicgK1xyXG4gICAgICAgICAgYXJlLnlnamUgK1xyXG4gICAgICAgICAgJyxsb2FudGVybXNlY3Rpb246JyArXHJcbiAgICAgICAgICBhcmUucXhqZSArXHJcbiAgICAgICAgICAnLGRvd25wYXltZW50c2VjdGlvbjonICtcclxuICAgICAgICAgIGFyZS5zZmplICtcclxuICAgICAgICAgICcsY2FyYnJhbmRpZDpcIicgK1xyXG4gICAgICAgICAgYXJlLmNhcmJyYW5kaWRyZWQgK1xyXG4gICAgICAgICAgJ1wiLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICBhcmUucHJpY2V0eXBlc29ydCArXHJcbiAgICAgICAgICAnfSdcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdvblJlYWNoQm90dG9tJykge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5jYXJtb2RlbEpBLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXJlLmdldFNvdXN1byA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBhcmUuY2FybW9kZWxqYSA9IGFyZS5jYXJtb2RlbGphLmNvbmNhdChkYXRhLmRhdGEuY2FybW9kZWxKQSk7XHJcbiAgICAgICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFyZS5wYWdlIC09IDE7XHJcbiAgICAgICAgICAgIGFyZS5nZXRTb3VzdW8gPSBmYWxzZTtcclxuICAgICAgICAgICAgYXJlLnNlYXJjaExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5bey57uP5Yiw5bqV57q/5ZWmfidcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJlLmNhcm1vZGVsamEgPSBkYXRhLmRhdGEuY2FybW9kZWxKQTtcclxuICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFyZS5jYXJtb2RlbHRvcGphID0gZGF0YS5kYXRhLmNhcm1vZGVsdG9wSkE7XHJcbiAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIOiOt+WPluWTgeeJjOWIl+ihqFxyXG4gIGdldFBpbnBhaSgpIHtcclxuICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9icmFuZC9zcGVjaWFsYXJlYWJyYW5kbGlzdCcsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzcGVjaWFsdHlwZTogJ2hvdHNhbGUnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgYXJlLnNkZHNzID0gcmVzLmRhdGEuY2FyYnJhbmRncm91cEpBO1xyXG4gICAgICAgIGFyZS4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDliJ3lp4vljJbmlbDmja5cclxuICBpbml0KCkge1xyXG4gICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgIGFyZS5maXJzdFBlcnNvbiA9ICfpu5jorqTmjpLluo8nO1xyXG4gICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgYXJlLnByaWNldHlwZXNvcnQgPSAwO1xyXG4gICAgYXJlLmNhcnByaWNlc2VjdGlvbiA9IDA7XHJcbiAgICBhcmUuY2FyYnJhbmRpZHJlZCA9ICcnO1xyXG4gICAgYXJlLl9udW0gPSAwO1xyXG4gICAgYXJlLl9udW1hID0gMDtcclxuICAgIGFyZS5fbnVtYiA9IDA7XHJcbiAgICBhcmUuX251bWUgPSAwO1xyXG4gICAgYXJlLl9udW1kID0gMDtcclxuICAgIGFyZS55Z2plID0gMDtcclxuICAgIGFyZS5xeGplID0gMDtcclxuICAgIGFyZS5zZmplID0gMDtcclxuICAgIGFyZS50eGplID0gMDtcclxuICAgIGFyZS5pcG8gPSAnXCJcIic7XHJcbiAgICBhcmUuc2Rkc3MgPSBbXTtcclxuICAgIGFyZS5jYXJtb2RlbGphID0gW107XHJcbiAgICBhcmUuY2FybW9kZWx0b3BqYSA9IFtdO1xyXG4gICAgYXJlLmhpZGVSZVR1aSA9IGZhbHNlO1xyXG4gICAgYXJlLnNlbGVjdFBlcnNvbmEgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgLy8g5LiL5ouJ5Yi35pawXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgfSk7XHJcbiAgICBsZXQgYXJlID0gdGhpcztcclxuICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5zZWxlY3RQZXJzb25kO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL2NhcnNwZWNpYWxhcmVhL2hvdHNhbGUnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZTogYXJlLnBhZ2UsXHJcbiAgICAgICAgcGFnZXNpemU6IDgsXHJcbiAgICAgICAgc2VhcmNoZGF0YTpcclxuICAgICAgICAgICd7c2VhcmNobmFtZTonICtcclxuICAgICAgICAgIGFyZS5pcG8gK1xyXG4gICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICBhcmUuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICcsbW9udGhseXN1cHBseXNlY3Rpb246JyArXHJcbiAgICAgICAgICBhcmUueWdqZSArXHJcbiAgICAgICAgICAnLGxvYW50ZXJtc2VjdGlvbjonICtcclxuICAgICAgICAgIGFyZS5xeGplICtcclxuICAgICAgICAgICcsZG93bnBheW1lbnRzZWN0aW9uOicgK1xyXG4gICAgICAgICAgYXJlLnNmamUgK1xyXG4gICAgICAgICAgJyxjYXJicmFuZGlkOlwiJyArXHJcbiAgICAgICAgICBhcmUuY2FyYnJhbmRpZHJlZCArXHJcbiAgICAgICAgICAnXCIscHJpY2V0eXBlc29ydDonICtcclxuICAgICAgICAgIGFyZS5wcmljZXR5cGVzb3J0ICtcclxuICAgICAgICAgICd9J1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgc3VjY2VzcyhkYXRhKSB7XHJcbiAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAvLyDlrprkuYnov5Tlm57lgLznmoTmlbDmja5cclxuICAgICAgICBhcmUuY2FybW9kZWxqYSA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgYXJlLmNhcm1vZGVsdG9wamEgPSBkYXRhLmRhdGEuY2FybW9kZWx0b3BKQTtcclxuICAgICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19