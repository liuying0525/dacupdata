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

var sousuo = function (_wepy$page) {
  _inherits(sousuo, _wepy$page);

  function sousuo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, sousuo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = sousuo.__proto__ || Object.getPrototypeOf(sousuo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '条件选车',
      enablePullDownRefresh: true,
      backgroundTextStyle: 'dark'
    }, _this.$repeat = {}, _this.$props = { "inputd": { "xmlns:v-on": "", "value": "" } }, _this.$events = { "inputd": { "v-on:childFn": "my" } }, _this.components = {
      inputd: _substitution2.default
    }, _this.data = {
      selectPersonf: false,
      // 默认排序显隐
      selectPerson: true,
      // 车价显隐
      selectPersonb: true,
      // 筛选显隐
      selectPersond: true,
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
      selectPersonc: true,
      json_link: '',
      // 筛选条件值
      _numa: 0,
      _numb: 0,
      _numc: 0,
      _numd: 0,
      _nume: 0,
      _numm: 0,
      textx: [],
      bajhs: '',
      ygg: '',
      qxx: '',
      tx: '',
      sf: '',
      cxid: '',
      me: '',
      cgje: 0,
      // 月供区间
      ygje: 0,
      // 首付区间
      sfje: 0,
      txje: 0,
      // 贷款期限
      qxje: 0,
      sdfd: '0',
      page: 1,
      // 搜索字段
      ipo: '""',
      carbrandidd: '""',
      // 品牌id
      carbrandidred: '',
      // 价格排序
      pricetypesort: 0,
      // 车价区间
      carpricesection: 0,
      // 1 表示从筛选跳转到品牌
      pinpaiFrom: '',
      code: '',
      // 滚动到底部
      getSousuo: true,
      searchLoadingComplete: false,
      posfd: '',
      url_link: ''
    }, _this.watch = {
      carbrandidred: function carbrandidred() {
        if (this.posfd != '') {
          console.log('pp');
          return;
        }
        this.ipo = '""';
        if (this.pinpaiFrom != 1) {
          this.getSousuoList();
        }
      }
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/sousuo?page=1&pagesize=8&carpricesection=' + this.carpricesection + '&searchname=' + this.ipo + '&monthlysupplysection=' + this.ygje + '&loantermsection=' + this.qxje + '&downpaymentsection=' + this.sfje + '&carbrandid=' + this.carbrandidred + '&pricetypesort=' + this.pricetypesort
        };
      },
      onReachBottom: function onReachBottom() {
        this.page = this.page + 1;
        if (this.getSousuo == false) {
          this.searchLoadingComplete = true;
          return;
        }
        this.getSousuoList('onReachBottom');
      },

      // 搜索车型
      my: function my(e) {
        console.log(e);
        this.page = 1;
        var are = this;
        if (e != '') {
          are.ipo = e;
          are.code = 'A';
          are.carbrandidred = '';
          are.firstPersonc = '品牌', are.posfd = '搜索';
          are.getSousuoList();
        } else {
          are.ipo = '""';
          var that = this;
          var json_link = this.$parent.globalData.json_link;
          var parent_data = this.$parent.globalData;
          var access_token = parent_data.access_token;
          are.code = 'A';
          are.posfd = '搜索';
          are.getSousuoList();
        }
      },

      // 选择品牌
      xz_pp: function xz_pp(e) {
        var that = this;
        if (that._nume == 0) {
          var sf = 20;
        } else if (that._nume) {
          var sf = 30;
        } else if (that._nume) {
          var sf = 40;
        } else if (that._nume) {
          var sf = 50;
        } else if (that._nume) {
          var sf = 60;
        } else if (that._nume) {
          var sf = 70;
        }

        if (that._numb == 0) {
          var fq = 12;
        } else if (that._numb) {
          var fq = 24;
        } else if (that._numb) {
          var fq = 36;
        } else if (that._numb) {
          var fq = 48;
        } else if (that._numb) {
          var fq = 60;
        }

        wx.navigateTo({
          url: 'commodity_details?carmodelid=' + e + '&downpaymentpercent=' + sf + '&loanterm=' + fq
        });

        this.$parent.globalData.pageid = [e];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      // 筛选 车间区间选择
      clickNum: function clickNum(e) {
        this.carpricesection = e.target.dataset.id;
      },

      // 月供区间选择
      clickNuma: function clickNuma(e) {
        this._numa = e.target.dataset.num;
        this.ygje = e.target.dataset.ida;
      },

      // 贷款期限选择
      clickNumb: function clickNumb(e) {
        this._numb = e.target.dataset.num;
        this.qxje = e.target.dataset.idb;
      },

      // 首付区间选择
      clickNume: function clickNume(e) {
        this._nume = e.target.dataset.num;
        this.sfje = e.target.dataset.ide;
      },
      clickNumc: function clickNumc(e) {
        this._numc = e.target.dataset.num;
      },

      // 点击选择类型
      clickPersona: function clickPersona() {
        var selectPerson = this.data.selectPerson;
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
      clickPersonb: function clickPersonb() {
        var selectPersonb = this.data.selectPersonb;
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

      // 选择品牌
      clickPersonc: function clickPersonc() {
        this.page = 1;
        var selectPersonc = this.selectPersonc;
        this.posfd = '';
        wx.navigateTo({
          url: 'pinpai'
        });
        this.selectArec = false;
        this.selectPersonb = true;
        this.selectPerson = true;
        this.selectPersod = true;
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
        are._numa = 0;
        are._numb = 0;
        are._nume = 0;
        are.cgje = 0;
        are.ygje = 0;
        are.qxje = 0;
        are.sfje = 0;
      },

      // 筛选确定
      clickPersondq: function clickPersondq() {
        this.page = 1;
        var are = this;
        are.code = 'A';
        var selectPersond = this.data.selectPersond;
        are.firstPerson = '默认排序';
        are.pricetypesort = 0;
        this.getSousuoList();
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

      // 价格排序
      mySelect: function mySelect(e) {
        this.page = 1;
        this._numm = e.target.dataset.num;
        this.pricetypesort = e.target.dataset.id;
        this.firstPerson = e.target.dataset.me;
        this.selectArea = false;
        this.selectPerson = true;
        this.code = 'A';
        this.getSousuoList();
      },

      // 车价区间
      clickNumt: function clickNumt(e) {
        this.page = 1;
        this.carpricesection = e.target.dataset.id;
        this.selectAreb = false;
        this.selectPersonb = true;
        this.code = 'A';
        this.getSousuoList();
      },
      mySelectc: function mySelectc(e) {
        this.firstPersonc = e.target.dataset.me;
        this.selectArec = false;
        this.code = 'A';
      },

      // 筛选点击选择品牌
      selectPinpai: function selectPinpai() {
        this.pinpaiFrom = 1;
        this.posfd = '';
        wx.navigateTo({
          url: 'pinpai'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(sousuo, [{
    key: 'init',

    // 初始化
    value: function init() {
      var are = this;
      var selectPersond = this.selectPersond;
      var json_link = this.json_link;
      are.firstPerson = '默认排序';
      are.firstPersonc = '品牌';
      are.pricetypesort = 0;
      are.carpricesection = 0;
      are.carbrandidred = '';
      are._numa = 0;
      are._numb = 0;
      are._nume = 0;
      are.cgje = 0;
      are.ygje = 0;
      are.qxje = 0;
      are.sfje = 0;
      are.code = 'A';
      are.ipo = '""';
      are.getSousuo = false;
    }

    // 初始化

  }, {
    key: 'onLoad',
    value: function onLoad(res) {
      this.textx = [];
      var that = this;
      console.log(res);
      that.page = 1;
      that.code = 'A';
      this.getSousuo = false;
      that.carpricesection = res.carpricesection;
      that._nume = res.downpaymentsection;
      that.sfje = res.downpaymentsection;
      that._numa = res.monthlysupplysection;
      that.ygje = res.monthlysupplysection;
      that.$apply();
      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var parent_data = this.$parent.globalData;
      var nameors = this.$parent.globalData.nameors;
      var pinpaiid = this.$parent.globalData.pinpaiid;
      this.firstPersonc = nameors;
      this.carbrandidred = pinpaiid;
      if (nameors != '品牌' && nameors != '' && nameors != undefined) {
        this.firstPersonc = nameors;
        this.carbrandidred = pinpaiid;
        this.getSousuoList();
      } else {
        if (nameors == '品牌') {
          this.firstPerson = '默认排序';
          this.firstPersonb = '车价';
          that.data.pricetypesort = 0;
          that.data.carpricesection = 0;

          this.getSousuoList();
        }
      }
    }

    // 获取条件选车数据

  }, {
    key: 'getSousuoList',
    value: function getSousuoList(type) {
      if (!type) {
        this.textx = [];
      }
      wx.showLoading({
        title: '加载中',
        mask: true
      });
      var nameors = this.$parent.globalData.nameors;
      if (nameors != '品牌' && nameors != '' && nameors != undefined) {
        console.log(nameors);
        this.$invoke('inputd', 'clearTap', nameors);
        // this.$invoke('inputd', 'clearTap', nameors);   
      }
      var that = this;
      var json_link = this.$parent.globalData.json_link;
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: that.page,
          pagesize: 8,
          searchdata: '{searchname:' + that.ipo + ',pricetypesort:' + that.pricetypesort + ',carpricesection:' + that.carpricesection + ',carbrandid:"' + that.carbrandidred + '",downpaymentsection:' + that.sfje + ',monthlysupplysection:' + that.ygje + ',loantermsection:' + that.qxje + '}'
        },
        success: function success(data) {
          wx.hideLoading();
          if (type === 'onReachBottom') {
            if (data.data.carmodelJA.length > 0) {
              that.getSousuo = true;
              that.textx = that.textx.concat(data.data.carmodelJA);
            } else {
              that.page -= 1;
              that.getSousuo = false;
              wx.showToast({
                title: '已经到底线啦~'
              });
            }
          } else {
            that.getSousuo = true;
            that.textx = data.data.carmodelJA;
            that.code = data.data.code;
          }
          // 给数据进行绑定
          that.$apply();
        },

        fail: function fail() {
          wx.showToast({
            title: '网络异常'
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
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      // 统计
      this.$parent.globalData.UVselectType = 1;
      this.$parent.UVstatistical('choosecarpage');
      this.$parent.PVUVstatistical('conditionchoosecar');

      // 初始化
      var nameors = this.$parent.globalData.nameors;
      var pinpaiid = this.$parent.globalData.pinpaiid;
      this.firstPersonc = nameors;
      this.carbrandidred = pinpaiid;
      this.selectPerson = true;
      this.selectPersonb = true;
      if (this.pinpaiFrom != 1) {
        this.selectPersond = true;
        this.pinpaiFrom = '';
      }
    }
    // 初始化

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$parent.globalData.nameors = '品牌';
      this.$parent.globalData.pinpaiid = '';
      this.init();
    }
    // 下拉刷新

  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      wx.showLoading({
        title: '加载中'
      });
      var that = this;
      var json_link = this.$parent.globalData.json_link;
      // 条件选车（贷款）
      wx.request({
        url: json_link + '/api/wxapp/newcarloan/conditionselectioncar/list',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: 1,
          pagesize: 8,
          searchdata: '{searchname:' + that.ipo + ',pricetypesort:' + that.pricetypesort + ',carpricesection:' + that.carpricesection + ',carbrandid:"' + that.carbrandidred + '",downpaymentsection:' + that.sfje + ',monthlysupplysection:' + that.ygje + ',loantermsection:' + that.qxje + '}'
        },
        success: function success(data) {
          wx.hideLoading();
          that.textx = data.data.carmodelJA;
          that.code = data.data.code;
          wx.stopPullDownRefresh();
          // 给数据进行绑定
          that.$apply();
        },

        fail: function fail() {
          wx.showToast({
            title: '网络异常'
          });
          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return;
        }
      });
    }
  }]);

  return sousuo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(sousuo , 'pages/sousuo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXN1by5qcyJdLCJuYW1lcyI6WyJzb3VzdW8iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImlucHV0ZCIsIklucHV0IiwiZGF0YSIsInNlbGVjdFBlcnNvbmYiLCJzZWxlY3RQZXJzb24iLCJzZWxlY3RQZXJzb25iIiwic2VsZWN0UGVyc29uZCIsImZpcnN0UGVyc29uIiwiZmlyc3RQZXJzb25iIiwiZmlyc3RQZXJzb25jIiwiZmlyc3RQZXJzb25kIiwic2VsZWN0QXJlYSIsInNlbGVjdEFyZWIiLCJzZWxlY3RBcmVjIiwic2VsZWN0QXJlZCIsInNlbGVjdFBlcnNvbmMiLCJqc29uX2xpbmsiLCJfbnVtYSIsIl9udW1iIiwiX251bWMiLCJfbnVtZCIsIl9udW1lIiwiX251bW0iLCJ0ZXh0eCIsImJhamhzIiwieWdnIiwicXh4IiwidHgiLCJzZiIsImN4aWQiLCJtZSIsImNnamUiLCJ5Z2plIiwic2ZqZSIsInR4amUiLCJxeGplIiwic2RmZCIsInBhZ2UiLCJpcG8iLCJjYXJicmFuZGlkZCIsImNhcmJyYW5kaWRyZWQiLCJwcmljZXR5cGVzb3J0IiwiY2FycHJpY2VzZWN0aW9uIiwicGlucGFpRnJvbSIsImNvZGUiLCJnZXRTb3VzdW8iLCJzZWFyY2hMb2FkaW5nQ29tcGxldGUiLCJwb3NmZCIsInVybF9saW5rIiwid2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZ2V0U291c3VvTGlzdCIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJvblJlYWNoQm90dG9tIiwibXkiLCJlIiwiYXJlIiwidGhhdCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicGFyZW50X2RhdGEiLCJhY2Nlc3NfdG9rZW4iLCJ4el9wcCIsImZxIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsImNsaWNrTnVtIiwidGFyZ2V0IiwiZGF0YXNldCIsImlkIiwiY2xpY2tOdW1hIiwibnVtIiwiaWRhIiwiY2xpY2tOdW1iIiwiaWRiIiwiY2xpY2tOdW1lIiwiaWRlIiwiY2xpY2tOdW1jIiwiY2xpY2tQZXJzb25hIiwiY2xpY2tQZXJzb25iIiwiY2xpY2tQZXJzb25jIiwic2VsZWN0UGVyc29kIiwiY2xpY2tQZXJzb25kIiwiY2xpY2tQZXJzb25kcCIsImNsaWNrUGVyc29uZHEiLCJteVNlbGVjdCIsImNsaWNrTnVtdCIsIm15U2VsZWN0YyIsInNlbGVjdFBpbnBhaSIsInJlcyIsImRvd25wYXltZW50c2VjdGlvbiIsIm1vbnRobHlzdXBwbHlzZWN0aW9uIiwiJGFwcGx5IiwibmFtZW9ycyIsInBpbnBhaWlkIiwidW5kZWZpbmVkIiwidHlwZSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwiJGludm9rZSIsInJlcXVlc3QiLCJtZXRob2QiLCJoZWFkZXIiLCJwYWdlc2l6ZSIsInNlYXJjaGRhdGEiLCJzdWNjZXNzIiwiaGlkZUxvYWRpbmciLCJjYXJtb2RlbEpBIiwibGVuZ3RoIiwiY29uY2F0Iiwic2hvd1RvYXN0IiwiZmFpbCIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJVVnNlbGVjdFR5cGUiLCJVVnN0YXRpc3RpY2FsIiwiUFZVVnN0YXRpc3RpY2FsIiwiaW5pdCIsInN0b3BQdWxsRG93blJlZnJlc2giLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyw2QkFBdUIsSUFGaEI7QUFHUEMsMkJBQXFCO0FBSGQsSyxRQUtWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxVQUFTLEVBQUMsY0FBYSxFQUFkLEVBQWlCLFNBQVEsRUFBekIsRUFBVixFLFFB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QUt0QixHQURMLEdBRUEsaUJBRkEsR0FHQXNCLEtBQUtuQixhQUhMLEdBSUEsbUJBSkEsR0FLQW1CLEtBQUtsQixlQUxMLEdBTUEsZUFOQSxHQU9Ba0IsS0FBS3BCLGFBUEwsR0FRQSx1QkFSQSxHQVNBb0IsS0FBSzNCLElBVEwsR0FVQSx3QkFWQSxHQVdBMkIsS0FBSzVCLElBWEwsR0FZQSxtQkFaQSxHQWFBNEIsS0FBS3pCLElBYkwsR0FjQTtBQWxCRSxTQUpHO0FBd0JUOEUsZUF4QlMsbUJBd0JEL0csSUF4QkMsRUF3Qks7QUFDWmlFLGFBQUcrQyxXQUFIO0FBQ0F0RCxlQUFLckMsS0FBTCxHQUFhckIsS0FBS0EsSUFBTCxDQUFVaUgsVUFBdkI7QUFDQXZELGVBQUtoQixJQUFMLEdBQVkxQyxLQUFLQSxJQUFMLENBQVUwQyxJQUF0QjtBQUNBdUIsYUFBRzJELG1CQUFIO0FBQ0E7QUFDQWxFLGVBQUt1QyxNQUFMO0FBQ0QsU0EvQlE7O0FBZ0NUb0IsY0FBTSxnQkFBVztBQUNmcEQsYUFBR21ELFNBQUgsQ0FBYTtBQUNYYixtQkFBTztBQURJLFdBQWI7QUFHQWUscUJBQVcsWUFBVztBQUNwQnJELGVBQUdzRCxTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBeENRLE9BQVg7QUEwQ0Q7Ozs7RUE1aUJpQ00sZUFBSzFGLEk7O2tCQUFwQjlDLE0iLCJmaWxlIjoic291c3VvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy9zdWJzdGl0dXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc291c3VvIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p2h5Lu26YCJ6L2mJyxcclxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdkYXJrJ1xyXG4gIH07XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImlucHV0ZFwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidmFsdWVcIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJpbnB1dGRcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcIm15XCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBpbnB1dGQ6IElucHV0XHJcbiAgfTtcclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIHNlbGVjdFBlcnNvbmY6IGZhbHNlLFxyXG4gICAgLy8g6buY6K6k5o6S5bqP5pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb246IHRydWUsXHJcbiAgICAvLyDovabku7fmmL7pmpBcclxuICAgIHNlbGVjdFBlcnNvbmI6IHRydWUsXHJcbiAgICAvLyDnrZvpgInmmL7pmpBcclxuICAgIHNlbGVjdFBlcnNvbmQ6IHRydWUsXHJcbiAgICAvLyDnrZvpgInlrZfmrrVcclxuICAgIGZpcnN0UGVyc29uOiAn6buY6K6k5o6S5bqPJyxcclxuICAgIGZpcnN0UGVyc29uYjogJ+i9puS7tycsXHJcbiAgICBmaXJzdFBlcnNvbmM6ICflk4HniYwnLFxyXG4gICAgZmlyc3RQZXJzb25kOiAn562b6YCJJyxcclxuICAgIC8vIOetm+mAieadoeS7tuWbvuagh+eKtuaAgVxyXG4gICAgc2VsZWN0QXJlYTogZmFsc2UsXHJcbiAgICBzZWxlY3RBcmViOiBmYWxzZSxcclxuICAgIHNlbGVjdEFyZWM6IGZhbHNlLFxyXG4gICAgc2VsZWN0QXJlZDogZmFsc2UsXHJcbiAgICBzZWxlY3RQZXJzb25jOiB0cnVlLFxyXG4gICAganNvbl9saW5rOiAnJyxcclxuICAgIC8vIOetm+mAieadoeS7tuWAvFxyXG4gICAgX251bWE6IDAsXHJcbiAgICBfbnVtYjogMCxcclxuICAgIF9udW1jOiAwLFxyXG4gICAgX251bWQ6IDAsXHJcbiAgICBfbnVtZTogMCxcclxuICAgIF9udW1tOiAwLFxyXG4gICAgdGV4dHg6IFtdLFxyXG4gICAgYmFqaHM6ICcnLFxyXG4gICAgeWdnOiAnJyxcclxuICAgIHF4eDogJycsXHJcbiAgICB0eDogJycsXHJcbiAgICBzZjogJycsXHJcbiAgICBjeGlkOiAnJyxcclxuICAgIG1lOiAnJyxcclxuICAgIGNnamU6IDAsXHJcbiAgICAvLyDmnIjkvpvljLrpl7RcclxuICAgIHlnamU6IDAsXHJcbiAgICAvLyDpppbku5jljLrpl7RcclxuICAgIHNmamU6IDAsXHJcbiAgICB0eGplOiAwLFxyXG4gICAgLy8g6LS35qy+5pyf6ZmQXHJcbiAgICBxeGplOiAwLFxyXG4gICAgc2RmZDogJzAnLFxyXG4gICAgcGFnZTogMSxcclxuICAgIC8vIOaQnOe0ouWtl+autVxyXG4gICAgaXBvOiAnXCJcIicsXHJcbiAgICBjYXJicmFuZGlkZDogJ1wiXCInLFxyXG4gICAgLy8g5ZOB54mMaWRcclxuICAgIGNhcmJyYW5kaWRyZWQ6ICcnLFxyXG4gICAgLy8g5Lu35qC85o6S5bqPXHJcbiAgICBwcmljZXR5cGVzb3J0OiAwLFxyXG4gICAgLy8g6L2m5Lu35Yy66Ze0XHJcbiAgICBjYXJwcmljZXNlY3Rpb246IDAsXHJcbiAgICAvLyAxIOihqOekuuS7juetm+mAiei3s+i9rOWIsOWTgeeJjFxyXG4gICAgcGlucGFpRnJvbTogJycsXHJcbiAgICBjb2RlOiAnJyxcclxuICAgIC8vIOa7muWKqOWIsOW6lemDqFxyXG4gICAgZ2V0U291c3VvOiB0cnVlLFxyXG4gICAgc2VhcmNoTG9hZGluZ0NvbXBsZXRlOiBmYWxzZSxcclxuICAgIHBvc2ZkOicnLFxyXG4gICAgdXJsX2xpbms6JydcclxuICB9O1xyXG5cclxuICB3YXRjaCA9IHtcclxuICAgIGNhcmJyYW5kaWRyZWQoKSB7XHJcbiAgICAgIGlmKHRoaXMucG9zZmQhPScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZygncHAnKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuaXBvID0gJ1wiXCInO1xyXG4gICAgICBpZiAodGhpcy5waW5wYWlGcm9tICE9IDEpIHtcclxuICAgICAgICB0aGlzLmdldFNvdXN1b0xpc3QoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDpcclxuICAgICAgICAgICcvcGFnZXMvc291c3VvP3BhZ2U9MSZwYWdlc2l6ZT04JmNhcnByaWNlc2VjdGlvbj0nICtcclxuICAgICAgICAgIHRoaXMuY2FycHJpY2VzZWN0aW9uICtcclxuICAgICAgICAgICcmc2VhcmNobmFtZT0nICtcclxuICAgICAgICAgIHRoaXMuaXBvICtcclxuICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnlnamUgK1xyXG4gICAgICAgICAgJyZsb2FudGVybXNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnF4amUgK1xyXG4gICAgICAgICAgJyZkb3ducGF5bWVudHNlY3Rpb249JyArXHJcbiAgICAgICAgICB0aGlzLnNmamUgK1xyXG4gICAgICAgICAgJyZjYXJicmFuZGlkPScgK1xyXG4gICAgICAgICAgdGhpcy5jYXJicmFuZGlkcmVkICtcclxuICAgICAgICAgICcmcHJpY2V0eXBlc29ydD0nICtcclxuICAgICAgICAgIHRoaXMucHJpY2V0eXBlc29ydFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZSArIDE7XHJcbiAgICAgIGlmICh0aGlzLmdldFNvdXN1byA9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTG9hZGluZ0NvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZXRTb3VzdW9MaXN0KCdvblJlYWNoQm90dG9tJyk7XHJcbiAgICB9LFxyXG4gICAgLy8g5pCc57Si6L2m5Z6LXHJcbiAgICBteShlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBpZiAoZSAhPSAnJykge1xyXG4gICAgICAgIGFyZS5pcG8gPSBlO1xyXG4gICAgICAgIGFyZS5jb2RlID0gJ0EnO1xyXG4gICAgICAgIGFyZS5jYXJicmFuZGlkcmVkPScnO1xyXG4gICAgICAgIGFyZS5maXJzdFBlcnNvbmM9ICflk4HniYwnLFxyXG4gICAgICAgIGFyZS5wb3NmZD0n5pCc57SiJztcclxuICAgICAgICBhcmUuZ2V0U291c3VvTGlzdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFyZS5pcG8gPSAnXCJcIic7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbjtcclxuICAgICAgICBhcmUuY29kZSA9ICdBJztcclxuICAgICAgICAgYXJlLnBvc2ZkPSfmkJzntKInO1xyXG4gICAgICAgIGFyZS5nZXRTb3VzdW9MaXN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDpgInmi6nlk4HniYxcclxuICAgIHh6X3BwKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBpZiAodGhhdC5fbnVtZSA9PSAwKSB7XHJcbiAgICAgICAgdmFyIHNmID0gMjA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC5fbnVtZSkge1xyXG4gICAgICAgIHZhciBzZiA9IDMwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuX251bWUpIHtcclxuICAgICAgICB2YXIgc2YgPSA0MDtcclxuICAgICAgfSBlbHNlIGlmICh0aGF0Ll9udW1lKSB7XHJcbiAgICAgICAgdmFyIHNmID0gNTA7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC5fbnVtZSkge1xyXG4gICAgICAgIHZhciBzZiA9IDYwO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuX251bWUpIHtcclxuICAgICAgICB2YXIgc2YgPSA3MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoYXQuX251bWIgPT0gMCkge1xyXG4gICAgICAgIHZhciBmcSA9IDEyO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuX251bWIpIHtcclxuICAgICAgICB2YXIgZnEgPSAyNDtcclxuICAgICAgfSBlbHNlIGlmICh0aGF0Ll9udW1iKSB7XHJcbiAgICAgICAgdmFyIGZxID0gMzY7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhhdC5fbnVtYikge1xyXG4gICAgICAgIHZhciBmcSA9IDQ4O1xyXG4gICAgICB9IGVsc2UgaWYgKHRoYXQuX251bWIpIHtcclxuICAgICAgICB2YXIgZnEgPSA2MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgJ2NvbW1vZGl0eV9kZXRhaWxzP2Nhcm1vZGVsaWQ9JyArXHJcbiAgICAgICAgICBlICtcclxuICAgICAgICAgICcmZG93bnBheW1lbnRwZXJjZW50PScgK1xyXG4gICAgICAgICAgc2YgK1xyXG4gICAgICAgICAgJyZsb2FudGVybT0nICtcclxuICAgICAgICAgIGZxXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW2VdO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFszXTtcclxuICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgfSxcclxuICAgIC8vIOetm+mAiSDovabpl7TljLrpl7TpgInmi6lcclxuICAgIGNsaWNrTnVtKGUpIHtcclxuICAgICAgdGhpcy5jYXJwcmljZXNlY3Rpb24gPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgfSxcclxuICAgIC8vIOaciOS+m+WMuumXtOmAieaLqVxyXG4gICAgY2xpY2tOdW1hKGUpIHtcclxuICAgICAgdGhpcy5fbnVtYSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLnlnamUgPSBlLnRhcmdldC5kYXRhc2V0LmlkYTtcclxuICAgIH0sXHJcbiAgICAvLyDotLfmrL7mnJ/pmZDpgInmi6lcclxuICAgIGNsaWNrTnVtYihlKSB7XHJcbiAgICAgIHRoaXMuX251bWIgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5xeGplID0gZS50YXJnZXQuZGF0YXNldC5pZGI7XHJcbiAgICB9LFxyXG4gICAgLy8g6aaW5LuY5Yy66Ze06YCJ5oupXHJcbiAgICBjbGlja051bWUoZSkge1xyXG4gICAgICB0aGlzLl9udW1lID0gZS50YXJnZXQuZGF0YXNldC5udW07XHJcbiAgICAgIHRoaXMuc2ZqZSA9IGUudGFyZ2V0LmRhdGFzZXQuaWRlO1xyXG4gICAgfSxcclxuICAgIGNsaWNrTnVtYyhlKSB7XHJcbiAgICAgIHRoaXMuX251bWMgPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vpgInmi6nnsbvlnotcclxuICAgIGNsaWNrUGVyc29uYSgpIHtcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbiA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb247XHJcbiAgICAgIGlmIChzZWxlY3RQZXJzb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYSA9IHRydWU7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0UGVyc29uID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tQZXJzb25iKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uYiA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25iO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uYiA9PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RBcmViID0gdHJ1ZTtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVhID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWQgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25iID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDpgInmi6nlk4HniYxcclxuICAgIGNsaWNrUGVyc29uYygpIHtcclxuICAgICAgdGhpcy5wYWdlID0gMTtcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbmMgPSB0aGlzLnNlbGVjdFBlcnNvbmM7XHJcbiAgICAgIHRoaXMucG9zZmQ9Jyc7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ3BpbnBhaSdcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29kID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBjbGlja1BlcnNvbmQoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmQ7XHJcbiAgICAgIGlmIChzZWxlY3RQZXJzb25kID09IHRydWUpIHtcclxuICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gdHJ1ZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmViID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RQZXJzb25kID0gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDph43nva5cclxuICAgIGNsaWNrUGVyc29uZHAoKSB7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICBhcmUuZmlyc3RQZXJzb24gPSAn6buY6K6k5o6S5bqPJztcclxuICAgICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgICBhcmUucHJpY2V0eXBlc29ydCA9IDA7XHJcbiAgICAgIGFyZS5jYXJwcmljZXNlY3Rpb24gPSAwO1xyXG4gICAgICBhcmUuY2FyYnJhbmRpZHJlZCA9ICcnO1xyXG4gICAgICBhcmUuX251bWEgPSAwO1xyXG4gICAgICBhcmUuX251bWIgPSAwO1xyXG4gICAgICBhcmUuX251bWUgPSAwO1xyXG4gICAgICBhcmUuY2dqZSA9IDA7XHJcbiAgICAgIGFyZS55Z2plID0gMDtcclxuICAgICAgYXJlLnF4amUgPSAwO1xyXG4gICAgICBhcmUuc2ZqZSA9IDA7XHJcbiAgICB9LFxyXG4gICAgLy8g562b6YCJ56Gu5a6aXHJcbiAgICBjbGlja1BlcnNvbmRxKCkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgYXJlLmNvZGUgPSAnQSc7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5kYXRhLnNlbGVjdFBlcnNvbmQ7XHJcbiAgICAgIGFyZS5maXJzdFBlcnNvbiA9ICfpu5jorqTmjpLluo8nO1xyXG4gICAgICBhcmUucHJpY2V0eXBlc29ydCA9IDA7XHJcbiAgICAgIHRoaXMuZ2V0U291c3VvTGlzdCgpO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0QXJlZCA9IHRydWUpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVjID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0UGVyc29uZCA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5Lu35qC85o6S5bqPXHJcbiAgICBteVNlbGVjdChlKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuX251bW0gPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5wcmljZXR5cGVzb3J0ID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgdGhpcy5maXJzdFBlcnNvbiA9IGUudGFyZ2V0LmRhdGFzZXQubWU7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgIHRoaXMuY29kZSA9ICdBJztcclxuICAgICAgdGhpcy5nZXRTb3VzdW9MaXN0KCk7XHJcbiAgICB9LFxyXG4gICAgLy8g6L2m5Lu35Yy66Ze0XHJcbiAgICBjbGlja051bXQoZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmNhcnByaWNlc2VjdGlvbiA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNvZGUgPSAnQSc7XHJcbiAgICAgIHRoaXMuZ2V0U291c3VvTGlzdCgpO1xyXG4gICAgfSxcclxuICAgIG15U2VsZWN0YyhlKSB7XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb25jID0gZS50YXJnZXQuZGF0YXNldC5tZTtcclxuICAgICAgdGhpcy5zZWxlY3RBcmVjID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY29kZSA9ICdBJztcclxuICAgIH0sXHJcbiAgICAvLyDnrZvpgInngrnlh7vpgInmi6nlk4HniYxcclxuICAgIHNlbGVjdFBpbnBhaSgpIHtcclxuICAgICAgdGhpcy5waW5wYWlGcm9tID0gMTtcclxuICAgICAgdGhpcy5wb3NmZD0nJztcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAncGlucGFpJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIOWIneWni+WMllxyXG4gIGluaXQoKSB7XHJcbiAgICBsZXQgYXJlID0gdGhpcztcclxuICAgIGxldCBzZWxlY3RQZXJzb25kID0gdGhpcy5zZWxlY3RQZXJzb25kO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgYXJlLmZpcnN0UGVyc29uID0gJ+m7mOiupOaOkuW6jyc7XHJcbiAgICBhcmUuZmlyc3RQZXJzb25jID0gJ+WTgeeJjCc7XHJcbiAgICBhcmUucHJpY2V0eXBlc29ydCA9IDA7XHJcbiAgICBhcmUuY2FycHJpY2VzZWN0aW9uID0gMDtcclxuICAgIGFyZS5jYXJicmFuZGlkcmVkID0gJyc7XHJcbiAgICBhcmUuX251bWEgPSAwO1xyXG4gICAgYXJlLl9udW1iID0gMDtcclxuICAgIGFyZS5fbnVtZSA9IDA7XHJcbiAgICBhcmUuY2dqZSA9IDA7XHJcbiAgICBhcmUueWdqZSA9IDA7XHJcbiAgICBhcmUucXhqZSA9IDA7XHJcbiAgICBhcmUuc2ZqZSA9IDA7XHJcbiAgICBhcmUuY29kZSA9ICdBJztcclxuICAgIGFyZS5pcG8gPSAnXCJcIic7XHJcbiAgICBhcmUuZ2V0U291c3VvID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyDliJ3lp4vljJZcclxuICBvbkxvYWQocmVzKSB7XHJcbiAgICB0aGlzLnRleHR4ID0gW107XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB0aGF0LnBhZ2UgPSAxO1xyXG4gICAgdGhhdC5jb2RlID0gJ0EnO1xyXG4gICAgdGhpcy5nZXRTb3VzdW8gPSBmYWxzZTtcclxuICAgIHRoYXQuY2FycHJpY2VzZWN0aW9uID0gcmVzLmNhcnByaWNlc2VjdGlvbjtcclxuICAgIHRoYXQuX251bWUgPSByZXMuZG93bnBheW1lbnRzZWN0aW9uO1xyXG4gICAgdGhhdC5zZmplID0gcmVzLmRvd25wYXltZW50c2VjdGlvbjtcclxuICAgIHRoYXQuX251bWEgPSByZXMubW9udGhseXN1cHBseXNlY3Rpb247XHJcbiAgICB0aGF0LnlnamUgPSByZXMubW9udGhseXN1cHBseXNlY3Rpb247XHJcbiAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIHRoaXMuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICBsZXQgbmFtZW9ycyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnM7XHJcbiAgICBsZXQgcGlucGFpaWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5waW5wYWlpZDtcclxuICAgIHRoaXMuZmlyc3RQZXJzb25jID0gbmFtZW9ycztcclxuICAgIHRoaXMuY2FyYnJhbmRpZHJlZCA9IHBpbnBhaWlkO1xyXG4gICAgaWYgKG5hbWVvcnMgIT0gJ+WTgeeJjCcgJiYgbmFtZW9ycyAhPSAnJyAmJiBuYW1lb3JzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmZpcnN0UGVyc29uYyA9IG5hbWVvcnM7XHJcbiAgICAgIHRoaXMuY2FyYnJhbmRpZHJlZCA9IHBpbnBhaWlkO1xyXG4gICAgICB0aGlzLmdldFNvdXN1b0xpc3QoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChuYW1lb3JzID09ICflk4HniYwnKSB7XHJcbiAgICAgICAgdGhpcy5maXJzdFBlcnNvbiA9ICfpu5jorqTmjpLluo8nO1xyXG4gICAgICAgIHRoaXMuZmlyc3RQZXJzb25iID0gJ+i9puS7tyc7XHJcbiAgICAgICAgdGhhdC5kYXRhLnByaWNldHlwZXNvcnQgPSAwO1xyXG4gICAgICAgIHRoYXQuZGF0YS5jYXJwcmljZXNlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgICB0aGlzLmdldFNvdXN1b0xpc3QoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g6I635Y+W5p2h5Lu26YCJ6L2m5pWw5o2uXHJcbiAgZ2V0U291c3VvTGlzdCh0eXBlKSB7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgdGhpcy50ZXh0eCA9IFtdO1xyXG4gICAgfVxyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pO1xyXG4gICAgIGxldCBuYW1lb3JzID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubmFtZW9ycztcclxuICAgICBpZihuYW1lb3JzICE9ICflk4HniYwnICYmIG5hbWVvcnMgIT0gJycgJiYgbmFtZW9ycyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgY29uc29sZS5sb2cobmFtZW9ycylcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ2lucHV0ZCcsICdjbGVhclRhcCcsIG5hbWVvcnMpO1xyXG4gICAgICAgIC8vIHRoaXMuJGludm9rZSgnaW5wdXRkJywgJ2NsZWFyVGFwJywgbmFtZW9ycyk7ICAgXHJcbiAgICAgfVxyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL25ld2NhcmxvYW4vY29uZGl0aW9uc2VsZWN0aW9uY2FyL2xpc3QnLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcGFnZTogdGhhdC5wYWdlLFxyXG4gICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgIHNlYXJjaGRhdGE6XHJcbiAgICAgICAgICAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICB0aGF0LmlwbyArXHJcbiAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICB0aGF0LnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAnLGNhcmJyYW5kaWQ6XCInICtcclxuICAgICAgICAgIHRoYXQuY2FyYnJhbmRpZHJlZCArXHJcbiAgICAgICAgICAnXCIsZG93bnBheW1lbnRzZWN0aW9uOicgK1xyXG4gICAgICAgICAgdGhhdC5zZmplICtcclxuICAgICAgICAgICcsbW9udGhseXN1cHBseXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LnlnamUgK1xyXG4gICAgICAgICAgJyxsb2FudGVybXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LnF4amUgK1xyXG4gICAgICAgICAgJ30nXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdvblJlYWNoQm90dG9tJykge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZGF0YS5jYXJtb2RlbEpBLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhhdC5nZXRTb3VzdW8gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGF0LnRleHR4ID0gdGhhdC50ZXh0eC5jb25jYXQoZGF0YS5kYXRhLmNhcm1vZGVsSkEpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC5wYWdlIC09IDE7XHJcbiAgICAgICAgICAgIHRoYXQuZ2V0U291c3VvID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICflt7Lnu4/liLDlupXnur/llaZ+J1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5nZXRTb3VzdW8gPSB0cnVlO1xyXG4gICAgICAgICAgdGhhdC50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgICAgdGhhdC5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAvLyDnu5/orqFcclxuICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IDE7XHJcbiAgICB0aGlzLiRwYXJlbnQuVVZzdGF0aXN0aWNhbCgnY2hvb3NlY2FycGFnZScpO1xyXG4gICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnY29uZGl0aW9uY2hvb3NlY2FyJyk7XHJcblxyXG4gICAgLy8g5Yid5aeL5YyWXHJcbiAgICBsZXQgbmFtZW9ycyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnM7XHJcbiAgICBsZXQgcGlucGFpaWQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5waW5wYWlpZDtcclxuICAgIHRoaXMuZmlyc3RQZXJzb25jID0gbmFtZW9ycztcclxuICAgIHRoaXMuY2FyYnJhbmRpZHJlZCA9IHBpbnBhaWlkO1xyXG4gICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgIGlmICh0aGlzLnBpbnBhaUZyb20gIT0gMSkge1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnBpbnBhaUZyb20gPSAnJztcclxuICAgIH1cclxuICB9XHJcbiAgLy8g5Yid5aeL5YyWXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5uYW1lb3JzID0gJ+WTgeeJjCc7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5waW5wYWlpZCA9ICcnO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG4gIC8vIOS4i+aLieWIt+aWsFxyXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIC8vIOadoeS7tumAiei9pu+8iOi0t+asvu+8iVxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9jb25kaXRpb25zZWxlY3Rpb25jYXIvbGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgIHBhZ2VzaXplOiA4LFxyXG4gICAgICAgIHNlYXJjaGRhdGE6XHJcbiAgICAgICAgICAne3NlYXJjaG5hbWU6JyArXHJcbiAgICAgICAgICB0aGF0LmlwbyArXHJcbiAgICAgICAgICAnLHByaWNldHlwZXNvcnQ6JyArXHJcbiAgICAgICAgICB0aGF0LnByaWNldHlwZXNvcnQgK1xyXG4gICAgICAgICAgJyxjYXJwcmljZXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LmNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICAgICAnLGNhcmJyYW5kaWQ6XCInICtcclxuICAgICAgICAgIHRoYXQuY2FyYnJhbmRpZHJlZCArXHJcbiAgICAgICAgICAnXCIsZG93bnBheW1lbnRzZWN0aW9uOicgK1xyXG4gICAgICAgICAgdGhhdC5zZmplICtcclxuICAgICAgICAgICcsbW9udGhseXN1cHBseXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LnlnamUgK1xyXG4gICAgICAgICAgJyxsb2FudGVybXNlY3Rpb246JyArXHJcbiAgICAgICAgICB0aGF0LnF4amUgK1xyXG4gICAgICAgICAgJ30nXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgdGhhdC50ZXh0eCA9IGRhdGEuZGF0YS5jYXJtb2RlbEpBO1xyXG4gICAgICAgIHRoYXQuY29kZSA9IGRhdGEuZGF0YS5jb2RlO1xyXG4gICAgICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==