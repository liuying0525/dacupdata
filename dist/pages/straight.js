'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _leotable = require('./../components/leotable.js');

var _leotable2 = _interopRequireDefault(_leotable);

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var straight = function (_wepy$page) {
  _inherits(straight, _wepy$page);

  function straight() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, straight);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = straight.__proto__ || Object.getPrototypeOf(straight)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '东正金融'
    }, _this.$repeat = {}, _this.$props = { "leotable": { "che_": "image/index_btm_che0.png", "ys_": "image/index_btm_ys1.png", "my_": "image/index_btm_my0.png" }, "search": { "xmlns:v-on": "" } }, _this.$events = { "leotable": { "v-on:childFn": "linkTo" }, "search": { "v-on:childFn": "toBrandd" } }, _this.components = {
      leotable: _leotable2.default,
      search: _search2.default
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
      selectPersonc: true,
      // 筛选显隐
      selectPersond: true,
      json_link: '',
      _numm: 0, // 价格排序
      _num: 0,
      tx: '',
      // 首付
      sf: '',
      me: '',
      cgje: 0,
      ygje: 0, // 月供
      sfje: 0, // 首付
      txje: 0, // 贴息标签
      qxje: 0, // 期限
      page: 1,
      // 搜索字段
      ipo: '""',
      pricetypesort: 0,
      // 车价区间
      carpricesection: 0,
      // 车列表
      carsList: [],
      // 车型id
      carmodelid: '',
      // 品牌id
      carbrandid: '',
      code: 'A',
      url_link: ''
    }, _this.watch = {
      carbrandid: function carbrandid() {
        wx.showLoading();
        this.carsList = [];
        this.$apply();
        this.getSelectData();
      }
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/straight'
        };
      },
      onReachBottom: function onReachBottom() {
        var json_link = this.$parent.globalData.json_link;
        var parent_data = this.$parent.globalData;
        wx.showLoading({
          title: '加载中'
        });
        this.page = this.page + 1;
        //    请求接口
        this.getSelectData('onReachBottom');
      },
      linkTo: function linkTo(url, evt) {
        this.$redirect(url);
      },

      // 搜索
      toBrandd: function toBrandd(url, evt) {
        this.$navigate(url, { carseriesid: evt });
      },

      // 点击选择排序类型
      clickPersona: function clickPersona() {
        var selectPerson = this.data.selectPerson;
        if (selectPerson == true) {
          this.selectArea = true;
          this.selectAreb = false, this.selectArec = false, this.selectAred = false, this.selectPerson = false;
          this.selectPersonb = true;
          this.selectPersonc = true;
          this.selectPersond = true;
        } else {
          this.selectArea = false;
          this.selectPerson = true;
          this.selectPersonb = true;
          this.selectPersonc = true;
          this.selectPersond = true;
        }
      },

      // 点击选择车价类型
      clickPersonb: function clickPersonb() {
        var selectPersonb = this.data.selectPersonb;
        if (selectPersonb == true) {
          this.selectAreb = true;
          this.selectArea = false, this.selectArec = false, this.selectAred = false, this.selectPersonb = false;
          this.selectPerson = true;
          this.selectPersonc = true;
          this.selectPersond = true;
        } else {
          this.selectAreb = false;
          this.selectPersonb = true;
          this.selectPerson = true;
          this.selectPersonc = true;
          this.selectPersond = true;
        }
      },

      // 选择品牌页面跳转
      clickPersonc: function clickPersonc() {
        var selectPersonc = this.data.selectPersonc;
        wx.navigateTo({
          url: 'pinpai'
        });
        this.selectArec = false;
        this.selectPersonb = true;
        this.selectPerson = true;
        this.selectPersod = true;
      },

      // 价格排序
      mySelect: function mySelect(e) {
        this.page = 1;
        this.carsList = [];
        this._numm = e.currentTarget.dataset.num;
        this.pricetypesort = e.currentTarget.dataset.id;
        this.firstPerson = e.currentTarget.dataset.me;
        this.selectArea = false;
        this.selectPerson = true;
        var json_link = this.json_link;
        var are = this;
        wx.showLoading({
          title: '加载中'
        });
        this.getSelectData();
      },

      // 选择车价
      clickNumt: function clickNumt(e) {
        this.page = 1;
        this.carsList = [];
        this._num = e.target.dataset.num;
        this.carpricesection = e.target.dataset.id;
        this.selectAreb = false;
        this.selectPersonb = true;
        var json_link = this.json_link;
        var are = this;
        wx.showLoading({
          title: '加载中'
        });
        this.getSelectData();
      },

      // 去直租详情页
      toStraightDetail: function toStraightDetail(e) {
        this.$parent.globalData.UVselectType = -1;
        var carmodelid = e.currentTarget.dataset.carmodelid;
        var financialid = e.currentTarget.dataset.financialid;
        this.carmodelid = carmodelid;
        wx.navigateTo({
          url: 'straight_detail?carmodelid=' + carmodelid + '&financialid=' + financialid
        });

        this.$parent.globalData.pageid = [carmodelid];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(straight, [{
    key: 'onLoad',


    // 初始化页面
    value: function onLoad() {
      this.carsList = [];
      this.page = 1;
      wx.showLoading({
        title: '加载中'
      });
      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var nameors = this.$parent.globalData.nameors;
      this.firstPersonc = nameors;
      this.getSelectData();
    }

    // 初始化

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.PVUVstatistical('directrenthomepage');
      this.url_link = this.$parent.globalData.url_link;
      var nameors = this.$parent.globalData.nameors;
      this.firstPersonc = nameors;
      var carbrandid = this.$parent.globalData.pinpaiid;
      this.carbrandid = carbrandid;
      this.init();
    }

    // 清空数据

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.carsList = [];
      this.page = 1;
      this.init();
    }

    // 获取直租数据

  }, {
    key: 'getSelectData',
    value: function getSelectData(type) {
      if (!type) {
        this.carsList = [];
      }
      var that = this;
      var json_link = this.json_link;
      var carbrandid = this.carbrandid;
      var cityname = this.$parent.globalData.cityName;
      var carpricesection = this.carpricesection;
      var bondpricesection = this.cgje;
      var monthlysupplysection = this.sfje;
      var pricetypesort = this.pricetypesort;
      var jsonStr = '{carbrandid: "' + carbrandid + '",carpricesection: ' + carpricesection + ',pricetypesort: ' + pricetypesort + '}';

      wx.request({
        url: json_link + '/api/wxapp/directrent/conditionselectioncar/list',
        method: 'POST',
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          page: that.page,
          pagesize: 8,
          searchdata: jsonStr
        },
        success: function success(res) {
          wx.hideLoading();
          if (type === 'onReachBottom') {
            if (res.data.carmodelJA.length > 0) {
              var carsList = res.data.carmodelJA.map(function (ele) {
                ele.newMonthlysupply = ele.monthlysupply.toFixed(2);
                return ele;
              });
              that.carsList = that.carsList.concat(carsList);
              that.code = res.data.code;
            } else {
              that.page -= 1;
              wx.showToast({
                title: '没有数据了'
              });
            }
          } else {
            that.carsList = res.data.carmodelJA.map(function (ele) {
              ele.newMonthlysupply = ele.monthlysupply.toFixed(2);
              return ele;
            });
            that.code = res.data.code;
          }
          that.$apply();
        }
      });
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
      this.$parent.globalData.pinpaiid = '';
      are.cgje = 0;
      are.ygje = 0;
      are.qxje = 0;
      are.sfje = 0;
      are.code = "A";
    }
  }]);

  return straight;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(straight , 'pages/straight'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmFpZ2h0LmpzIl0sIm5hbWVzIjpbInN0cmFpZ2h0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImxlb3RhYmxlIiwiTGVvdGFibGUiLCJzZWFyY2giLCJTZWFyY2giLCJkYXRhIiwic2VsZWN0UGVyc29uIiwiZmlyc3RQZXJzb24iLCJmaXJzdFBlcnNvbmIiLCJmaXJzdFBlcnNvbmMiLCJmaXJzdFBlcnNvbmQiLCJzZWxlY3RBcmVhIiwic2VsZWN0QXJlYiIsInNlbGVjdEFyZWMiLCJzZWxlY3RBcmVkIiwic2VsZWN0UGVyc29uYiIsInNlbGVjdFBlcnNvbmMiLCJzZWxlY3RQZXJzb25kIiwianNvbl9saW5rIiwiX251bW0iLCJfbnVtIiwidHgiLCJzZiIsIm1lIiwiY2dqZSIsInlnamUiLCJzZmplIiwidHhqZSIsInF4amUiLCJwYWdlIiwiaXBvIiwicHJpY2V0eXBlc29ydCIsImNhcnByaWNlc2VjdGlvbiIsImNhcnNMaXN0IiwiY2FybW9kZWxpZCIsImNhcmJyYW5kaWQiLCJjb2RlIiwidXJsX2xpbmsiLCJ3YXRjaCIsInd4Iiwic2hvd0xvYWRpbmciLCIkYXBwbHkiLCJnZXRTZWxlY3REYXRhIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsIm9uUmVhY2hCb3R0b20iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhcmVudF9kYXRhIiwidGl0bGUiLCJsaW5rVG8iLCJ1cmwiLCJldnQiLCIkcmVkaXJlY3QiLCJ0b0JyYW5kZCIsIiRuYXZpZ2F0ZSIsImNhcnNlcmllc2lkIiwiY2xpY2tQZXJzb25hIiwiY2xpY2tQZXJzb25iIiwiY2xpY2tQZXJzb25jIiwibmF2aWdhdGVUbyIsInNlbGVjdFBlcnNvZCIsIm15U2VsZWN0IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwibnVtIiwiaWQiLCJhcmUiLCJjbGlja051bXQiLCJ0YXJnZXQiLCJ0b1N0cmFpZ2h0RGV0YWlsIiwiVVZzZWxlY3RUeXBlIiwiZmluYW5jaWFsaWQiLCJwYWdlaWQiLCJwYWdlbmFtZSIsImNsaWNrbnVtb3JkZXJudW1zdGF0IiwibmFtZW9ycyIsIlBWVVZzdGF0aXN0aWNhbCIsInBpbnBhaWlkIiwiaW5pdCIsInR5cGUiLCJ0aGF0IiwiY2l0eW5hbWUiLCJjaXR5TmFtZSIsImJvbmRwcmljZXNlY3Rpb24iLCJtb250aGx5c3VwcGx5c2VjdGlvbiIsImpzb25TdHIiLCJyZXF1ZXN0IiwibWV0aG9kIiwiaGVhZGVyIiwicGFnZXNpemUiLCJzZWFyY2hkYXRhIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiY2FybW9kZWxKQSIsImxlbmd0aCIsIm1hcCIsImVsZSIsIm5ld01vbnRobHlzdXBwbHkiLCJtb250aGx5c3VwcGx5IiwidG9GaXhlZCIsImNvbmNhdCIsInNob3dUb2FzdCIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsUUFBTywwQkFBUixFQUFtQyxPQUFNLHlCQUF6QyxFQUFtRSxPQUFNLHlCQUF6RSxFQUFaLEVBQWdILFVBQVMsRUFBQyxjQUFhLEVBQWQsRUFBekgsRSxRQUNUQyxPLEdBQVUsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsUUFBaEIsRUFBWixFQUFzQyxVQUFTLEVBQUMsZ0JBQWUsVUFBaEIsRUFBL0MsRSxRQUNUQyxVLEdBQWE7QUFDVkMsZ0JBQVVDLGtCQURBO0FBRVZDLGNBQVFDO0FBRkUsSyxRQUlaQyxJLEdBQU87QUFDTDtBQUNBQyxvQkFBYyxJQUZUO0FBR0w7QUFDQUMsbUJBQWEsTUFKUjtBQUtMQyxvQkFBYyxJQUxUO0FBTUxDLG9CQUFjLElBTlQ7QUFPTEMsb0JBQWMsSUFQ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R0FBVyxDQUFYO0FBQ0EyQyxVQUFJakMsSUFBSixHQUFVLEdBQVY7QUFDRDs7OztFQXZTbUNzRSxlQUFLN0UsSTs7a0JBQXRCbkMsUSIsImZpbGUiOiJzdHJhaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IExlb3RhYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvbGVvdGFibGUnO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHN0cmFpZ2h0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lic5q2j6YeR6J6NJ1xyXG4gIH07XHJcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImxlb3RhYmxlXCI6e1wiY2hlX1wiOlwiaW1hZ2UvaW5kZXhfYnRtX2NoZTAucG5nXCIsXCJ5c19cIjpcImltYWdlL2luZGV4X2J0bV95czEucG5nXCIsXCJteV9cIjpcImltYWdlL2luZGV4X2J0bV9teTAucG5nXCJ9LFwic2VhcmNoXCI6e1wieG1sbnM6di1vblwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHtcImxlb3RhYmxlXCI6e1widi1vbjpjaGlsZEZuXCI6XCJsaW5rVG9cIn0sXCJzZWFyY2hcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcInRvQnJhbmRkXCJ9fTtcclxuIGNvbXBvbmVudHMgPSB7XHJcbiAgICBsZW90YWJsZTogTGVvdGFibGUsXHJcbiAgICBzZWFyY2g6IFNlYXJjaFxyXG4gIH07XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOm7mOiupOaOkuW6j+aYvumakFxyXG4gICAgc2VsZWN0UGVyc29uOiB0cnVlLFxyXG4gICAgLy8g562b6YCJ5a2X5q61XHJcbiAgICBmaXJzdFBlcnNvbjogJ+m7mOiupOaOkuW6jycsXHJcbiAgICBmaXJzdFBlcnNvbmI6ICfovabku7cnLFxyXG4gICAgZmlyc3RQZXJzb25jOiAn5ZOB54mMJyxcclxuICAgIGZpcnN0UGVyc29uZDogJ+etm+mAiScsXHJcbiAgICAvLyDnrZvpgInmnaHku7blm77moIfnirbmgIFcclxuICAgIHNlbGVjdEFyZWE6IGZhbHNlLFxyXG4gICAgc2VsZWN0QXJlYjogZmFsc2UsXHJcbiAgICBzZWxlY3RBcmVjOiBmYWxzZSxcclxuICAgIHNlbGVjdEFyZWQ6IGZhbHNlLFxyXG4gICAgLy8g6L2m5Lu35pi+6ZqQXHJcbiAgICBzZWxlY3RQZXJzb25iOiB0cnVlLFxyXG4gICAgc2VsZWN0UGVyc29uYzogdHJ1ZSxcclxuICAgIC8vIOetm+mAieaYvumakFxyXG4gICAgc2VsZWN0UGVyc29uZDogdHJ1ZSxcclxuICAgIGpzb25fbGluazogJycsXHJcbiAgICBfbnVtbTogMCwgLy8g5Lu35qC85o6S5bqPXHJcbiAgICBfbnVtOiAwLFxyXG4gICAgdHg6ICcnLFxyXG4gICAgLy8g6aaW5LuYXHJcbiAgICBzZjogJycsXHJcbiAgICBtZTogJycsXHJcbiAgICBjZ2plOiAwLFxyXG4gICAgeWdqZTogMCwgLy8g5pyI5L6bXHJcbiAgICBzZmplOiAwLCAvLyDpppbku5hcclxuICAgIHR4amU6IDAsIC8vIOi0tOaBr+agh+etvlxyXG4gICAgcXhqZTogMCwgLy8g5pyf6ZmQXHJcbiAgICBwYWdlOiAxLFxyXG4gICAgLy8g5pCc57Si5a2X5q61XHJcbiAgICBpcG86ICdcIlwiJyxcclxuICAgIHByaWNldHlwZXNvcnQ6IDAsXHJcbiAgICAvLyDovabku7fljLrpl7RcclxuICAgIGNhcnByaWNlc2VjdGlvbjogMCxcclxuICAgIC8vIOi9puWIl+ihqFxyXG4gICAgY2Fyc0xpc3Q6IFtdLFxyXG4gICAgLy8g6L2m5Z6LaWRcclxuICAgIGNhcm1vZGVsaWQ6ICcnLFxyXG4gICAgLy8g5ZOB54mMaWRcclxuICAgIGNhcmJyYW5kaWQ6ICcnLFxyXG4gICAgY29kZTonQScsXHJcbiAgICB1cmxfbGluazonJyAgICBcclxuICB9O1xyXG4gIHdhdGNoID0ge1xyXG4gICAgY2FyYnJhbmRpZCgpIHtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoKTtcclxuICAgICAgdGhpcy5jYXJzTGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB0aGlzLmdldFNlbGVjdERhdGEoKTtcclxuICAgIH1cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9zdHJhaWdodCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5wYWdlID0gdGhpcy5wYWdlICsgMTtcclxuICAgICAgLy8gICAg6K+35rGC5o6l5Y+jXHJcbiAgICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgnb25SZWFjaEJvdHRvbScpO1xyXG4gICAgfSxcclxuICAgIGxpbmtUbyh1cmwsIGV2dCkge1xyXG4gICAgICB0aGlzLiRyZWRpcmVjdCh1cmwpO1xyXG4gICAgfSxcclxuICAgIC8vIOaQnOe0olxyXG4gICAgdG9CcmFuZGQodXJsLCBldnQpIHtcclxuICAgICAgdGhpcy4kbmF2aWdhdGUodXJsLCB7IGNhcnNlcmllc2lkOiBldnQgfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g54K55Ye76YCJ5oup5o6S5bqP57G75Z6LXHJcbiAgICBjbGlja1BlcnNvbmEoKSB7XHJcbiAgICAgIGxldCBzZWxlY3RQZXJzb24gPSB0aGlzLmRhdGEuc2VsZWN0UGVyc29uO1xyXG4gICAgICBpZiAoc2VsZWN0UGVyc29uID09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWEgPSB0cnVlO1xyXG4gICAgICAgICh0aGlzLnNlbGVjdEFyZWIgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVjID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0QXJlZCA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdFBlcnNvbiA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdEFyZWEgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDngrnlh7vpgInmi6novabku7fnsbvlnotcclxuICAgIGNsaWNrUGVyc29uYigpIHtcclxuICAgICAgbGV0IHNlbGVjdFBlcnNvbmIgPSB0aGlzLmRhdGEuc2VsZWN0UGVyc29uYjtcclxuICAgICAgaWYgKHNlbGVjdFBlcnNvbmIgPT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IHRydWU7XHJcbiAgICAgICAgKHRoaXMuc2VsZWN0QXJlYSA9IGZhbHNlKSxcclxuICAgICAgICAgICh0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZSksXHJcbiAgICAgICAgICAodGhpcy5zZWxlY3RBcmVkID0gZmFsc2UpLFxyXG4gICAgICAgICAgKHRoaXMuc2VsZWN0UGVyc29uYiA9IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25jID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBlcnNvbmQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0UGVyc29uYyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25kID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOmAieaLqeWTgeeJjOmhtemdoui3s+i9rFxyXG4gICAgY2xpY2tQZXJzb25jKCkge1xyXG4gICAgICBsZXQgc2VsZWN0UGVyc29uYyA9IHRoaXMuZGF0YS5zZWxlY3RQZXJzb25jO1xyXG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICdwaW5wYWknXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNlbGVjdEFyZWMgPSBmYWxzZTtcclxuICAgICAgdGhpcy5zZWxlY3RQZXJzb25iID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zZWxlY3RQZXJzb24gPSB0cnVlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvZCA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgLy8g5Lu35qC85o6S5bqPXHJcbiAgICBteVNlbGVjdChlKSB7XHJcbiAgICAgIHRoaXMucGFnZSA9IDE7XHJcbiAgICAgIHRoaXMuY2Fyc0xpc3QgPSBbXTtcclxuICAgICAgdGhpcy5fbnVtbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm51bTtcclxuICAgICAgdGhpcy5wcmljZXR5cGVzb3J0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHRoaXMuZmlyc3RQZXJzb24gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tZTtcclxuICAgICAgdGhpcy5zZWxlY3RBcmVhID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29uID0gdHJ1ZTtcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5nZXRTZWxlY3REYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgLy8g6YCJ5oup6L2m5Lu3XHJcbiAgICBjbGlja051bXQoZSkge1xyXG4gICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICB0aGlzLmNhcnNMaXN0ID0gW107XHJcbiAgICAgIHRoaXMuX251bSA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xyXG4gICAgICB0aGlzLmNhcnByaWNlc2VjdGlvbiA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHRoaXMuc2VsZWN0QXJlYiA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnNlbGVjdFBlcnNvbmIgPSB0cnVlO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdldFNlbGVjdERhdGEoKTtcclxuICAgIH0sXHJcbiAgICAvLyDljrvnm7Tnp5/or6bmg4XpobVcclxuICAgIHRvU3RyYWlnaHREZXRhaWwoZSkge1xyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5VVnNlbGVjdFR5cGUgPSAtMTtcclxuICAgICAgbGV0IGNhcm1vZGVsaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jYXJtb2RlbGlkO1xyXG4gICAgICBsZXQgZmluYW5jaWFsaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maW5hbmNpYWxpZDtcclxuICAgICAgdGhpcy5jYXJtb2RlbGlkID0gY2FybW9kZWxpZDtcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOlxyXG4gICAgICAgICAgJ3N0cmFpZ2h0X2RldGFpbD9jYXJtb2RlbGlkPScgK1xyXG4gICAgICAgICAgY2FybW9kZWxpZCArXHJcbiAgICAgICAgICAnJmZpbmFuY2lhbGlkPScgK1xyXG4gICAgICAgICAgZmluYW5jaWFsaWRcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbY2FybW9kZWxpZF07XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VuYW1lID0gWzNdO1xyXG4gICAgICB0aGlzLiRwYXJlbnQuY2xpY2tudW1vcmRlcm51bXN0YXQoMSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8g5Yid5aeL5YyW6aG16Z2iXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdGhpcy5jYXJzTGlzdCA9IFtdO1xyXG4gICAgdGhpcy5wYWdlID0gMTtcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5qc29uX2xpbms7XHJcbiAgICB0aGlzLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgIGxldCBuYW1lb3JzID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubmFtZW9ycztcclxuICAgIHRoaXMuZmlyc3RQZXJzb25jID0gbmFtZW9ycztcclxuICAgIHRoaXMuZ2V0U2VsZWN0RGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgLy8g5Yid5aeL5YyWXHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnZGlyZWN0cmVudGhvbWVwYWdlJyk7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICBsZXQgbmFtZW9ycyA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLm5hbWVvcnM7XHJcbiAgICB0aGlzLmZpcnN0UGVyc29uYyA9IG5hbWVvcnM7XHJcbiAgICBsZXQgY2FyYnJhbmRpZCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBpbnBhaWlkO1xyXG4gICAgdGhpcy5jYXJicmFuZGlkID0gY2FyYnJhbmRpZDtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgLy8g5riF56m65pWw5o2uXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICB0aGlzLmNhcnNMaXN0ID0gW107XHJcbiAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bnm7Tnp5/mlbDmja5cclxuICBnZXRTZWxlY3REYXRhKHR5cGUpIHtcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICB0aGlzLmNhcnNMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICBsZXQgY2FyYnJhbmRpZCA9IHRoaXMuY2FyYnJhbmRpZDtcclxuICAgIGxldCBjaXR5bmFtZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmNpdHlOYW1lO1xyXG4gICAgbGV0IGNhcnByaWNlc2VjdGlvbiA9IHRoaXMuY2FycHJpY2VzZWN0aW9uO1xyXG4gICAgbGV0IGJvbmRwcmljZXNlY3Rpb24gPSB0aGlzLmNnamU7XHJcbiAgICBsZXQgbW9udGhseXN1cHBseXNlY3Rpb24gPSB0aGlzLnNmamU7XHJcbiAgICBsZXQgcHJpY2V0eXBlc29ydCA9IHRoaXMucHJpY2V0eXBlc29ydDtcclxuICAgIGxldCBqc29uU3RyID1cclxuICAgICAgJ3tjYXJicmFuZGlkOiBcIicgK1xyXG4gICAgICBjYXJicmFuZGlkICtcclxuICAgICAgJ1wiLGNhcnByaWNlc2VjdGlvbjogJyArXHJcbiAgICAgIGNhcnByaWNlc2VjdGlvbiArXHJcbiAgICAgICcscHJpY2V0eXBlc29ydDogJyArXHJcbiAgICAgIHByaWNldHlwZXNvcnQgK1xyXG4gICAgICAnfSc7XHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvZGlyZWN0cmVudC9jb25kaXRpb25zZWxlY3Rpb25jYXIvbGlzdCcsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXI6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwYWdlOiB0aGF0LnBhZ2UsXHJcbiAgICAgICAgcGFnZXNpemU6IDgsXHJcbiAgICAgICAgc2VhcmNoZGF0YToganNvblN0clxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdvblJlYWNoQm90dG9tJykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNhcm1vZGVsSkEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgY2Fyc0xpc3QgPSByZXMuZGF0YS5jYXJtb2RlbEpBLm1hcChlbGUgPT4ge1xyXG4gICAgICAgICAgICAgIGVsZS5uZXdNb250aGx5c3VwcGx5ID0gZWxlLm1vbnRobHlzdXBwbHkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhhdC5jYXJzTGlzdCA9IHRoYXQuY2Fyc0xpc3QuY29uY2F0KGNhcnNMaXN0KTtcclxuICAgICAgICAgICAgdGhhdC5jb2RlID0gcmVzLmRhdGEuY29kZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoYXQucGFnZSAtPSAxO1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5rKh5pyJ5pWw5o2u5LqGJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhhdC5jYXJzTGlzdCA9IHJlcy5kYXRhLmNhcm1vZGVsSkEubWFwKGVsZSA9PiB7XHJcbiAgICAgICAgICAgIGVsZS5uZXdNb250aGx5c3VwcGx5ID0gZWxlLm1vbnRobHlzdXBwbHkudG9GaXhlZCgyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGF0LmNvZGUgPSByZXMuZGF0YS5jb2RlOyAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyDliJ3lp4vljJZcclxuICBpbml0KCkge1xyXG4gICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICBsZXQgc2VsZWN0UGVyc29uZCA9IHRoaXMuc2VsZWN0UGVyc29uZDtcclxuICAgIGxldCBqc29uX2xpbmsgPSB0aGlzLmpzb25fbGluaztcclxuICAgIGFyZS5maXJzdFBlcnNvbiA9ICfpu5jorqTmjpLluo8nO1xyXG4gICAgYXJlLmZpcnN0UGVyc29uYyA9ICflk4HniYwnO1xyXG4gICAgYXJlLnByaWNldHlwZXNvcnQgPSAwO1xyXG4gICAgYXJlLmNhcnByaWNlc2VjdGlvbiA9IDA7XHJcbiAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5waW5wYWlpZCA9ICcnO1xyXG4gICAgYXJlLmNnamUgPSAwO1xyXG4gICAgYXJlLnlnamUgPSAwO1xyXG4gICAgYXJlLnF4amUgPSAwO1xyXG4gICAgYXJlLnNmamUgPSAwO1xyXG4gICAgYXJlLmNvZGUgPVwiQVwiXHJcbiAgfVxyXG59XHJcbiJdfQ==