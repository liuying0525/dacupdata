'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '贷款计算器'
    }, _this.data = {
      // 按钮颜色
      yanse: 'huise',
      // 按钮文本
      jisuanTxt: '开始计算',
      // 计算结果区域隐藏
      jsjg_zt: false,
      // 裸车价格默认值
      input_jg: 35.6,
      // 客户利率默认值
      input_ll: 9.98,
      firstP: '展开',
      firstPres: '展开',
      // 首付比例
      sf: 20,
      // 期限比例
      qx: 12,
      // 必要花费下拉列表状态
      byhf_zt: 0,
      // 商业保险下拉列表状态
      bx_zt: 0,
      index: 0,
      array: ['交强险(6座以下)', '交强险(6座以上)'],
      array_rmb: 950,
      cc_index: 0,
      chechuan: ['1.0L(含)以下', '1.0-1.6L(含)', ' 1.6-2.0L(含)', '2.0-2.5L(含)', '2.5-3.0L(含)', '3.0-4.0L(含)', '4.0L以上'],
      chechuan_rmb: [300, 420, 480, 900, 1920, 3480, 5280],
      chechuan_rmb_sj: 300,
      //      保险
      array_bx_index: 0,
      array_bx: ['5万', '10万', '20万', '50万', '100万'],
      array_bx_rmb: [516, 746, 924, 1252, 1630],
      array_bx_jg: 516,
      //      保险2（玻璃单独破碎险）
      array_bx_index2: 0,
      array_bx2: ['进口', '国产'],
      array_bx_rmb2: [],
      array_bx_jg2: 516,
      //      保险3（车上人员责任险）
      array_bx_index3: 0,
      array_bx_index31: 0,
      array_bx3: [1, 2, 3, 4, 5, 6],
      array_bx31: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      array_bx_jg3: 0,
      //      保险4（车身划痕险）
      array_bx_index4: 0,
      array_bx4: ['2千', '5千', '1万', '2万'],
      array_bx4_rmb: [400, 570, 760, 1140],
      array_bx_jg4: 400,
      //      购置税
      gzs: 0,
      //      必要花费
      byhf: 0,
      //      车辆损失保险
      ssbx: 0,
      //      全车盗抢险
      qcdqx: 0,
      //      自燃损失险
      zrssx: 0,
      //      不计免赔特约险
      bjmptyx: 0,
      //      无过责任险
      wgzrx: 0,
      //      保险总额
      bxze_rmb: 0,
      //      计算结果
      jsjg: []
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/calculator'
        };
      },
      // 开始计算
      cal_js: function cal_js() {
        var json_link = this.$parent.globalData.json_link;
        var this_ = this;
        // 按钮置灰
        this_.yanse = 'hongse';
        this_.jisuanTxt = '计算结果';
        // 贷款计算器
        wx.request({
          url: json_link + '/api/wxapp/newcarloan/loan/calculator',
          data: {
            price: parseInt(this_.input_jg * 10000),
            interestratepercent: this_.input_ll,
            downpaymentpercent: this_.sf,
            loanterm: this_.qx,
            necessarycost: this_.byhf * 10000,
            commercialinsurance: this_.bxze_rmb * 10000
          },
          success: function success(data) {
            this_.jsjg = data.data;
            this_.jsjg_zt = true;
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
      },

      // 裸车价格输入
      lcjg: function lcjg(e) {
        this.input_jg = e.detail.value;
        var this_ = this;
        // 按钮高亮
        this_.yanse = 'huise';
        this_.jisuanTxt = '开始计算';
        //      玻璃保险价格运算
        this_.array_bx_rmb2 = [parseInt(this_.input_jg * 10000 * 0.0025), parseInt(this_.input_jg * 10000 * 0.0015)];
        //      购置税
        var gzs = this_.input_jg * 10000 / 1.17 * 0.075;
        this_.gzs = gzs.toFixed(2);
        //      必要花费
        this_.byhf = ((parseInt(this_.gzs) + this_.array_rmb + this_.chechuan_rmb_sj + 500) / 10000).toFixed(2);
        //      全车盗抢险
        if (this_.array_rmb == 950) {
          this_.qcdqx = parseInt(285 + this_.input_jg * 10000 * 0.0095);
          //      车辆损失保险
          this_.ssbx = parseInt(285 + this_.input_jg * 10000 * 0.01088);
        } else {
          this_.qcdqx = parseInt(342 + this_.input_jg * 10000 * 0.009);
          this_.ssbx = parseInt(342 + this_.input_jg * 10000 * 0.01088);
        }
        //      自燃损失险
        this_.zrssx = this_.input_jg * 10000 * 0.0015;
        //      不计免赔特约险
        this_.bjmptyx = (this_.ssbx + this_.array_bx_jg) * 0.2;
        //      无过责任险
        this_.wgzrx = parseInt(this_.array_bx_jg * 0.2);
      },

      // 客户利率输入
      khll: function khll(e) {
        this.input_ll = e.detail.value;
        // 按钮高亮
        this.yanse = 'huise';
        this.jisuanTxt = '开始计算';
      },


      // 列表项选择
      bindPickerChange: function bindPickerChange(e) {
        var this_ = this;
        // 按钮高亮
        this_.yanse = 'huise';
        this_.jisuanTxt = '开始计算';
        this.index = e.detail.value;
        if (this_.index == 0) {
          this_.array_rmb = 950;
        } else {
          this_.array_rmb = 1100;
        }
        //      必要花费
        this_.byhf = (parseInt(this_.gzs) + this_.array_rmb + this_.chechuan_rmb_sj + 500) / 10000;

        //      全车盗抢险
        if (this_.array_rmb == 950) {
          this_.qcdqx = parseInt(285 + this_.input_jg * 10000 * 0.0095);
          //      车辆损失保险
          this_.ssbx = parseInt((285 + this_.input_jg * 10000) * 0.01088);
        } else {
          this_.qcdqx = parseInt(342 + this_.input_jg * 10000 * 0.009);
          this_.ssbx = parseInt((342 + this_.input_jg * 10000) * 0.01088);
        }
      },

      // 车船使用税
      bindPickerChange_cc: function bindPickerChange_cc(e) {
        var this_ = this;
        this_.cc_index = e.detail.value;
        this_.chechuan_rmb_sj = this_.chechuan_rmb[e.detail.value];
        //      必要花费
        this_.byhf = (parseInt(this_.gzs) + this_.array_rmb + this_.chechuan_rmb_sj + 500) / 10000;
      },

      // 第三方责任险
      bindPickerChange_zr: function bindPickerChange_zr(e) {
        var this_ = this;
        this_.array_bx_index = e.detail.value;
        this_.array_bx_jg = this_.array_bx_rmb[e.detail.value];
      },

      // 玻璃单独破碎险
      bindPickerChange_zr2: function bindPickerChange_zr2(e) {
        var this_ = this;
        this_.array_bx_index2 = e.detail.value;
        this_.array_bx_jg2 = this_.array_bx_rmb2[e.detail.value];
      },

      // 车上人员责任险
      bindPickerChange_zr3: function bindPickerChange_zr3(e) {
        var this_ = this;
        this_.array_bx_index3 = e.detail.value;
      },
      bindPickerChange_zr31: function bindPickerChange_zr31(e) {
        var this_ = this;
        this_.array_bx_index31 = e.detail.value;
      },

      // 车身划痕险
      bindPickerChange_zr4: function bindPickerChange_zr4(e) {
        var this_ = this;
        this_.array_bx_index4 = e.detail.value;
        this_.array_bx_jg4 = this_.array_bx4_rmb[e.detail.value];
      },


      // 首付滑动
      slider4change: function slider4change(e) {
        this.sf = e.detail.value;
        // 按钮高亮
        this.yanse = 'huise';
        this.jisuanTxt = '开始计算';
        this.$apply();
      },

      // 期限滑动
      slider5change: function slider5change(e) {
        this.qx = e.detail.value;
        // 按钮高亮
        this.yanse = 'huise';
        this.jisuanTxt = '开始计算';
        this.$apply();
      },

      // 必要花费
      bixu_btn: function bixu_btn(e) {
        var this_ = this;
        if (e == '1') {
          this_.byhf_zt = 0;
          this.firstP = '展开';
        } else {
          this_.byhf_zt = 1;
          this.firstP = '收起';
        }
      },

      // 商业保险
      bx_btn: function bx_btn(e) {
        var this_ = this;
        if (e == '1') {
          this_.bx_zt = 0;
          this.firstPres = '展开';
        } else {
          this_.bx_zt = 1;
          this.firstPres = '收起';
        }
      },

      // 第三方责任险
      checkboxChange: function checkboxChange(e) {
        var zhi = e.detail.value;
        var this_ = this;
        this_.yanse = 'huise';
        this_.jisuanTxt = '开始计算';
        var shu = 0;
        for (var i = 0; i < zhi.length; i++) {
          shu += parseInt(zhi[i]);
        }
        this_.bxze_rmb = (shu / 10000).toFixed(2);
      },

      // 查看符合条件车型
      ckfhcx: function ckfhcx() {
        var zhi = 0;
        if (this.input_jg <= 30) {
          zhi = 1;
        } else if (this.input_jg <= 40 && this.input_jg > 30) {
          zhi = 2;
        } else if (this.input_jg <= 50 && this.input_jg > 40) {
          zhi = 3;
        } else if (this.input_jg <= 60 && this.input_jg > 50) {
          zhi = 4;
        } else if (this.input_jg > 60) {
          zhi = 5;
        }

        wx.navigateTo({
          url: 'sousuo?carpricesection=' + zhi + '&downpaymentsection=' + '0' + '&monthlysupplysection=' + '0'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var this_ = this;
      //      玻璃保险价格运算
      this_.array_bx_rmb2 = [parseInt(this_.input_jg * 10000 * 0.0025), parseInt(this_.input_jg * 10000 * 0.0015)];
      //      购置税
      var gzs = this_.input_jg * 10000 / 1.17 * 0.075;
      this_.gzs = gzs.toFixed(2);
      //      必要花费
      var xz_byhf = (parseInt(this_.gzs) + this_.array_rmb + this_.chechuan_rmb_sj + 500) / 10000;
      this_.byhf = xz_byhf.toFixed(2);

      //      全车盗抢险
      if (this_.array_rmb == 950) {
        this_.qcdqx = parseInt(285 + this_.input_jg * 10000 * 0.0095);
        //      车辆损失保险
        this_.ssbx = parseInt((285 + this_.input_jg * 10000) * 0.01088);
      } else {
        this_.qcdqx = parseInt(342 + this_.input_jg * 10000 * 0.009);
        this_.ssbx = parseInt((342 + this_.input_jg * 10000) * 0.01088);
      }
      //      自燃损失险
      this_.zrssx = this_.input_jg * 10000 * 0.0015;
      //      不计免赔特约险
      this_.bjmptyx = (this_.ssbx + this_.array_bx_jg) / 5;
      //      无过责任险
      this_.wgzrx = parseInt(this_.array_bx_jg * 0.2);
      console.log(this_.wgzrx, parseInt(this_.array_bx_jg * 0.2));
      this_.$apply();
    }
    // 初始化

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$parent.PVUVstatistical('loancalculator');
      this.yanse = 'huise', this.jisuanTxt = '开始计算', this.jsjg_zt = false, this.input_jg = 35.6, this.input_ll = 9.98, this.firstP = '展开', this.firstPres = '展开', this.sf = 20, this.qx = 12, this.byhf_zt = 0, this.bx_zt = 0, this.index = 0, this.array = ['交强险(6座以下)', '交强险(6座以上)'], this.arra_rmb = 950, this.cc_index = 0, this.chechuan = ['1.0L(含)以下', '1.0-1.6L(含)', ' 1.6-2.0L(含)', '2.0-2.5L(含)', '2.5-3.0L(含)', '3.0-4.0L(含)', '4.0L以上'], this.chechuan_rmb = [300, 420, 480, 900, 1920, 3480, 5280], this.chechuan_rmb_sj = 300,
      //      保险
      this.array_bx_index = 0, this.array_bx = ['5万', '10万', '20万', '50万', '100万'], this.array_bx_rmb = [516, 746, 924, 1252, 1630], this.array_bx_jg = 516,
      //      保险2（玻璃单独破碎险）
      this.array_bx_index2 = 0, this.array_bx2 = ['进口', '国产'], this.array_bx_rmb2 = [], this.array_bx_jg2 = 516,
      //      保险3（车上人员责任险）
      this.array_bx_index3 = 0, this.array_bx_index31 = 0, this.array_bx3 = [1, 2, 3, 4, 5, 6], this.array_bx31 = [1, 2, 3, 4, 5, 6, 7, 8, 9], this.array_bx_jg3 = 0,
      //      保险4（车身划痕险）
      this.array_bx_index4 = 0, this.array_bx4 = ['2千', '5千', '1万', '2万'], this.array_bx4_rmb = [400, 570, 760, 1140], this.array_bx_jg4 = 400,
      //      购置税
      this.gzs = 0,
      //      必要花费
      this.byhf = 0.175,
      //      车辆损失保险
      this.ssbx = 0,
      //      全车盗抢险
      this.qcdqx = 0,
      //      自燃损失险
      this.zrssx = 0,
      //      不计免赔特约险
      this.bjmptyx = 0,
      //      无过责任险
      // this.wgzrx = 0,
      //      保险总额
      this.bxze_rmb = 0,
      //      计算结果
      this.jsjg = [], this.$apply();
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/calculator'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInlhbnNlIiwiamlzdWFuVHh0IiwianNqZ196dCIsImlucHV0X2pnIiwiaW5wdXRfbGwiLCJmaXJzdFAiLCJmaXJzdFByZXMiLCJzZiIsInF4IiwiYnloZl96dCIsImJ4X3p0IiwiaW5kZXgiLCJhcnJheSIsImFycmF5X3JtYiIsImNjX2luZGV4IiwiY2hlY2h1YW4iLCJjaGVjaHVhbl9ybWIiLCJjaGVjaHVhbl9ybWJfc2oiLCJhcnJheV9ieF9pbmRleCIsImFycmF5X2J4IiwiYXJyYXlfYnhfcm1iIiwiYXJyYXlfYnhfamciLCJhcnJheV9ieF9pbmRleDIiLCJhcnJheV9ieDIiLCJhcnJheV9ieF9ybWIyIiwiYXJyYXlfYnhfamcyIiwiYXJyYXlfYnhfaW5kZXgzIiwiYXJyYXlfYnhfaW5kZXgzMSIsImFycmF5X2J4MyIsImFycmF5X2J4MzEiLCJhcnJheV9ieF9qZzMiLCJhcnJheV9ieF9pbmRleDQiLCJhcnJheV9ieDQiLCJhcnJheV9ieDRfcm1iIiwiYXJyYXlfYnhfamc0IiwiZ3pzIiwiYnloZiIsInNzYngiLCJxY2RxeCIsInpyc3N4IiwiYmptcHR5eCIsIndnenJ4IiwiYnh6ZV9ybWIiLCJqc2pnIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImNhbF9qcyIsImpzb25fbGluayIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidGhpc18iLCJ3eCIsInJlcXVlc3QiLCJ1cmwiLCJwcmljZSIsInBhcnNlSW50IiwiaW50ZXJlc3RyYXRlcGVyY2VudCIsImRvd25wYXltZW50cGVyY2VudCIsImxvYW50ZXJtIiwibmVjZXNzYXJ5Y29zdCIsImNvbW1lcmNpYWxpbnN1cmFuY2UiLCJzdWNjZXNzIiwiJGFwcGx5IiwiZmFpbCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsInNldFRpbWVvdXQiLCJoaWRlVG9hc3QiLCJsY2pnIiwiZSIsImRldGFpbCIsInZhbHVlIiwidG9GaXhlZCIsImtobGwiLCJiaW5kUGlja2VyQ2hhbmdlIiwiYmluZFBpY2tlckNoYW5nZV9jYyIsImJpbmRQaWNrZXJDaGFuZ2VfenIiLCJiaW5kUGlja2VyQ2hhbmdlX3pyMiIsImJpbmRQaWNrZXJDaGFuZ2VfenIzIiwiYmluZFBpY2tlckNoYW5nZV96cjMxIiwiYmluZFBpY2tlckNoYW5nZV96cjQiLCJzbGlkZXI0Y2hhbmdlIiwic2xpZGVyNWNoYW5nZSIsImJpeHVfYnRuIiwiYnhfYnRuIiwiY2hlY2tib3hDaGFuZ2UiLCJ6aGkiLCJzaHUiLCJpIiwibGVuZ3RoIiwiY2tmaGN4IiwibmF2aWdhdGVUbyIsInh6X2J5aGYiLCJjb25zb2xlIiwibG9nIiwiUFZVVnN0YXRpc3RpY2FsIiwiYXJyYV9ybWIiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0w7QUFDQUMsYUFBTyxPQUZGO0FBR0w7QUFDQUMsaUJBQVcsTUFKTjtBQUtMO0FBQ0FDLGVBQVMsS0FOSjtBQU9MO0FBQ0FDLGdCQUFVLElBUkw7QUFTTDtBQUNBQyxnQkFBVSxJQVZMO0FBV0xDLGNBQVEsSUFYSDtBQVlMQyxpQkFBVyxJQVpOO0FBYUw7QUFDQUMsVUFBSSxFQWRDO0FBZUw7QUFDQUMsVUFBSSxFQWhCQztBQWlCTDtBQUNBQyxlQUFTLENBbEJKO0FBbUJMO0FBQ0FDLGFBQU8sQ0FwQkY7QUFxQkxDLGFBQU8sQ0FyQkY7QUFzQkxDLGFBQU8sQ0FBQyxXQUFELEVBQWMsV0FBZCxDQXRCRjtBQXVCTEMsaUJBQVcsR0F2Qk47QUF3QkxDLGdCQUFVLENBeEJMO0FBeUJMQyxnQkFBVSxDQUNSLFdBRFEsRUFFUixhQUZRLEVBR1IsY0FIUSxFQUlSLGFBSlEsRUFLUixhQUxRLEVBTVIsYUFO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O0FBcURBO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBdERiO0FBdURBO0FBQ0EsV0FBS0MsS0FBTCxHQUFhLENBeERiO0FBeURBO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBMURmO0FBMkRBO0FBQ0E7QUFDQTtBQUNBLFdBQUtFLFFBQUwsR0FBZ0IsQ0E5RGhCO0FBK0RBO0FBQ0EsV0FBS0MsSUFBTCxHQUFZLEVBaEVaLEVBaUVBLEtBQUtvQixNQUFMLEVBakVBO0FBa0VEOzs7O0VBM1pnQ29DLGVBQUtDLEk7O2tCQUFuQnhHLEsiLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0t+asvuiuoeeul+WZqCdcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyDmjInpkq7popzoibJcclxuICAgICAgeWFuc2U6ICdodWlzZScsXHJcbiAgICAgIC8vIOaMiemSruaWh+acrFxyXG4gICAgICBqaXN1YW5UeHQ6ICflvIDlp4vorqHnrpcnLFxyXG4gICAgICAvLyDorqHnrpfnu5PmnpzljLrln5/pmpDol49cclxuICAgICAganNqZ196dDogZmFsc2UsXHJcbiAgICAgIC8vIOijuOi9puS7t+agvOm7mOiupOWAvFxyXG4gICAgICBpbnB1dF9qZzogMzUuNixcclxuICAgICAgLy8g5a6i5oi35Yip546H6buY6K6k5YC8XHJcbiAgICAgIGlucHV0X2xsOiA5Ljk4LFxyXG4gICAgICBmaXJzdFA6ICflsZXlvIAnLFxyXG4gICAgICBmaXJzdFByZXM6ICflsZXlvIAnLFxyXG4gICAgICAvLyDpppbku5jmr5TkvotcclxuICAgICAgc2Y6IDIwLFxyXG4gICAgICAvLyDmnJ/pmZDmr5TkvotcclxuICAgICAgcXg6IDEyLFxyXG4gICAgICAvLyDlv4XopoHoirHotLnkuIvmi4nliJfooajnirbmgIFcclxuICAgICAgYnloZl96dDogMCxcclxuICAgICAgLy8g5ZWG5Lia5L+d6Zmp5LiL5ouJ5YiX6KGo54q25oCBXHJcbiAgICAgIGJ4X3p0OiAwLFxyXG4gICAgICBpbmRleDogMCxcclxuICAgICAgYXJyYXk6IFsn5Lqk5by66ZmpKDbluqfku6XkuIspJywgJ+S6pOW8uumZqSg25bqn5Lul5LiKKSddLFxyXG4gICAgICBhcnJheV9ybWI6IDk1MCxcclxuICAgICAgY2NfaW5kZXg6IDAsXHJcbiAgICAgIGNoZWNodWFuOiBbXHJcbiAgICAgICAgJzEuMEwo5ZCrKeS7peS4iycsXHJcbiAgICAgICAgJzEuMC0xLjZMKOWQqyknLFxyXG4gICAgICAgICcgMS42LTIuMEwo5ZCrKScsXHJcbiAgICAgICAgJzIuMC0yLjVMKOWQqyknLFxyXG4gICAgICAgICcyLjUtMy4wTCjlkKspJyxcclxuICAgICAgICAnMy4wLTQuMEwo5ZCrKScsXHJcbiAgICAgICAgJzQuMEzku6XkuIonXHJcbiAgICAgIF0sXHJcbiAgICAgIGNoZWNodWFuX3JtYjogWzMwMCwgNDIwLCA0ODAsIDkwMCwgMTkyMCwgMzQ4MCwgNTI4MF0sXHJcbiAgICAgIGNoZWNodWFuX3JtYl9zajogMzAwLFxyXG4gICAgICAvLyAgICAgIOS/nemZqVxyXG4gICAgICBhcnJheV9ieF9pbmRleDogMCxcclxuICAgICAgYXJyYXlfYng6IFsnNeS4hycsICcxMOS4hycsICcyMOS4hycsICc1MOS4hycsICcxMDDkuIcnXSxcclxuICAgICAgYXJyYXlfYnhfcm1iOiBbNTE2LCA3NDYsIDkyNCwgMTI1MiwgMTYzMF0sXHJcbiAgICAgIGFycmF5X2J4X2pnOiA1MTYsXHJcbiAgICAgIC8vICAgICAg5L+d6ZmpMu+8iOeOu+eSg+WNleeLrOegtOeijumZqe+8iVxyXG4gICAgICBhcnJheV9ieF9pbmRleDI6IDAsXHJcbiAgICAgIGFycmF5X2J4MjogWyfov5vlj6MnLCAn5Zu95LqnJ10sXHJcbiAgICAgIGFycmF5X2J4X3JtYjI6IFtdLFxyXG4gICAgICBhcnJheV9ieF9qZzI6IDUxNixcclxuICAgICAgLy8gICAgICDkv53pmakz77yI6L2m5LiK5Lq65ZGY6LSj5Lu76Zmp77yJXHJcbiAgICAgIGFycmF5X2J4X2luZGV4MzogMCxcclxuICAgICAgYXJyYXlfYnhfaW5kZXgzMTogMCxcclxuICAgICAgYXJyYXlfYngzOiBbMSwgMiwgMywgNCwgNSwgNl0sXHJcbiAgICAgIGFycmF5X2J4MzE6IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSxcclxuICAgICAgYXJyYXlfYnhfamczOiAwLFxyXG4gICAgICAvLyAgICAgIOS/nemZqTTvvIjovabouqvliJLnl5XpmanvvIlcclxuICAgICAgYXJyYXlfYnhfaW5kZXg0OiAwLFxyXG4gICAgICBhcnJheV9ieDQ6IFsnMuWNgycsICc15Y2DJywgJzHkuIcnLCAnMuS4hyddLFxyXG4gICAgICBhcnJheV9ieDRfcm1iOiBbNDAwLCA1NzAsIDc2MCwgMTE0MF0sXHJcbiAgICAgIGFycmF5X2J4X2pnNDogNDAwLFxyXG4gICAgICAvLyAgICAgIOi0ree9rueojlxyXG4gICAgICBnenM6IDAsXHJcbiAgICAgIC8vICAgICAg5b+F6KaB6Iqx6LS5XHJcbiAgICAgIGJ5aGY6IDAsXHJcbiAgICAgIC8vICAgICAg6L2m6L6G5o2f5aSx5L+d6ZmpXHJcbiAgICAgIHNzYng6IDAsXHJcbiAgICAgIC8vICAgICAg5YWo6L2m55uX5oqi6ZmpXHJcbiAgICAgIHFjZHF4OiAwLFxyXG4gICAgICAvLyAgICAgIOiHqueHg+aNn+WksemZqVxyXG4gICAgICB6cnNzeDogMCxcclxuICAgICAgLy8gICAgICDkuI3orqHlhY3otZTnibnnuqbpmalcclxuICAgICAgYmptcHR5eDogMCxcclxuICAgICAgLy8gICAgICDml6Dov4fotKPku7vpmalcclxuICAgICAgd2d6cng6IDAsXHJcbiAgICAgIC8vICAgICAg5L+d6Zmp5oC76aKdXHJcbiAgICAgIGJ4emVfcm1iOiAwLFxyXG4gICAgICAvLyAgICAgIOiuoeeul+e7k+aenFxyXG4gICAgICBqc2pnOiBbXVxyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2NhbGN1bGF0b3InXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5byA5aeL6K6h566XXHJcbiAgICAgIGNhbF9qcygpIHtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5oyJ6ZKu572u54GwXHJcbiAgICAgICAgdGhpc18ueWFuc2UgPSAnaG9uZ3NlJztcclxuICAgICAgICB0aGlzXy5qaXN1YW5UeHQgPSAn6K6h566X57uT5p6cJztcclxuICAgICAgICAvLyDotLfmrL7orqHnrpflmahcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvbmV3Y2FybG9hbi9sb2FuL2NhbGN1bGF0b3InLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwcmljZTogcGFyc2VJbnQodGhpc18uaW5wdXRfamcgKiAxMDAwMCksXHJcbiAgICAgICAgICAgIGludGVyZXN0cmF0ZXBlcmNlbnQ6IHRoaXNfLmlucHV0X2xsLFxyXG4gICAgICAgICAgICBkb3ducGF5bWVudHBlcmNlbnQ6IHRoaXNfLnNmLFxyXG4gICAgICAgICAgICBsb2FudGVybTogdGhpc18ucXgsXHJcbiAgICAgICAgICAgIG5lY2Vzc2FyeWNvc3Q6IHRoaXNfLmJ5aGYgKiAxMDAwMCxcclxuICAgICAgICAgICAgY29tbWVyY2lhbGluc3VyYW5jZTogdGhpc18uYnh6ZV9ybWIgKiAxMDAwMFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXNfLmpzamcgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXNfLmpzamdfenQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDoo7jovabku7fmoLzovpPlhaVcclxuICAgICAgbGNqZyhlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dF9qZyA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5oyJ6ZKu6auY5LquXHJcbiAgICAgICAgdGhpc18ueWFuc2UgPSAnaHVpc2UnO1xyXG4gICAgICAgIHRoaXNfLmppc3VhblR4dCA9ICflvIDlp4vorqHnrpcnO1xyXG4gICAgICAgIC8vICAgICAg546755KD5L+d6Zmp5Lu35qC86L+Q566XXHJcbiAgICAgICAgdGhpc18uYXJyYXlfYnhfcm1iMiA9IFtcclxuICAgICAgICAgIHBhcnNlSW50KHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAwMjUpLFxyXG4gICAgICAgICAgcGFyc2VJbnQodGhpc18uaW5wdXRfamcgKiAxMDAwMCAqIDAuMDAxNSlcclxuICAgICAgICBdO1xyXG4gICAgICAgIC8vICAgICAg6LSt572u56iOXHJcbiAgICAgICAgbGV0IGd6cyA9IHRoaXNfLmlucHV0X2pnICogMTAwMDAgLyAxLjE3ICogMC4wNzU7XHJcbiAgICAgICAgdGhpc18uZ3pzID0gZ3pzLnRvRml4ZWQoMik7XHJcbiAgICAgICAgLy8gICAgICDlv4XopoHoirHotLlcclxuICAgICAgICB0aGlzXy5ieWhmID0gKFxyXG4gICAgICAgICAgKHBhcnNlSW50KHRoaXNfLmd6cykgKyB0aGlzXy5hcnJheV9ybWIgKyB0aGlzXy5jaGVjaHVhbl9ybWJfc2ogKyA1MDApIC9cclxuICAgICAgICAgIDEwMDAwXHJcbiAgICAgICAgKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIC8vICAgICAg5YWo6L2m55uX5oqi6ZmpXHJcbiAgICAgICAgaWYgKHRoaXNfLmFycmF5X3JtYiA9PSA5NTApIHtcclxuICAgICAgICAgIHRoaXNfLnFjZHF4ID0gcGFyc2VJbnQoMjg1ICsgdGhpc18uaW5wdXRfamcgKiAxMDAwMCAqIDAuMDA5NSk7XHJcbiAgICAgICAgICAvLyAgICAgIOi9pui+huaNn+WkseS/nemZqVxyXG4gICAgICAgICAgdGhpc18uc3NieCA9IHBhcnNlSW50KDI4NSArIHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAxMDg4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc18ucWNkcXggPSBwYXJzZUludCgzNDIgKyB0aGlzXy5pbnB1dF9qZyAqIDEwMDAwICogMC4wMDkpO1xyXG4gICAgICAgICAgdGhpc18uc3NieCA9IHBhcnNlSW50KDM0MiArIHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAxMDg4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICDoh6rnh4PmjZ/lpLHpmalcclxuICAgICAgICB0aGlzXy56cnNzeCA9IHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAwMTU7XHJcbiAgICAgICAgLy8gICAgICDkuI3orqHlhY3otZTnibnnuqbpmalcclxuICAgICAgICB0aGlzXy5iam1wdHl4ID0gKHRoaXNfLnNzYnggKyB0aGlzXy5hcnJheV9ieF9qZykgKiAwLjI7XHJcbiAgICAgICAgLy8gICAgICDml6Dov4fotKPku7vpmalcclxuICAgICAgICB0aGlzXy53Z3pyeCA9IHBhcnNlSW50KHRoaXNfLmFycmF5X2J4X2pnICogMC4yKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5a6i5oi35Yip546H6L6T5YWlXHJcbiAgICAgIGtobGwoZSkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRfbGwgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAvLyDmjInpkq7pq5jkuq5cclxuICAgICAgICB0aGlzLnlhbnNlID0gJ2h1aXNlJztcclxuICAgICAgICB0aGlzLmppc3VhblR4dCA9ICflvIDlp4vorqHnrpcnO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g5YiX6KGo6aG56YCJ5oupXHJcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5oyJ6ZKu6auY5LquXHJcbiAgICAgICAgdGhpc18ueWFuc2UgPSAnaHVpc2UnO1xyXG4gICAgICAgIHRoaXNfLmppc3VhblR4dCA9ICflvIDlp4vorqHnrpcnO1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICBpZiAodGhpc18uaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgdGhpc18uYXJyYXlfcm1iID0gOTUwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy5hcnJheV9ybWIgPSAxMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgICAgIOW/heimgeiKsei0uVxyXG4gICAgICAgIHRoaXNfLmJ5aGYgPVxyXG4gICAgICAgICAgKHBhcnNlSW50KHRoaXNfLmd6cykgKyB0aGlzXy5hcnJheV9ybWIgKyB0aGlzXy5jaGVjaHVhbl9ybWJfc2ogKyA1MDApIC9cclxuICAgICAgICAgIDEwMDAwO1xyXG5cclxuICAgICAgICAvLyAgICAgIOWFqOi9puebl+aKoumZqVxyXG4gICAgICAgIGlmICh0aGlzXy5hcnJheV9ybWIgPT0gOTUwKSB7XHJcbiAgICAgICAgICB0aGlzXy5xY2RxeCA9IHBhcnNlSW50KDI4NSArIHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAwOTUpO1xyXG4gICAgICAgICAgLy8gICAgICDovabovobmjZ/lpLHkv53pmalcclxuICAgICAgICAgIHRoaXNfLnNzYnggPSBwYXJzZUludCgoMjg1ICsgdGhpc18uaW5wdXRfamcgKiAxMDAwMCkgKiAwLjAxMDg4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc18ucWNkcXggPSBwYXJzZUludCgzNDIgKyB0aGlzXy5pbnB1dF9qZyAqIDEwMDAwICogMC4wMDkpO1xyXG4gICAgICAgICAgdGhpc18uc3NieCA9IHBhcnNlSW50KCgzNDIgKyB0aGlzXy5pbnB1dF9qZyAqIDEwMDAwKSAqIDAuMDEwODgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g6L2m6Ii55L2/55So56iOXHJcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2VfY2MoZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgdGhpc18uY2NfaW5kZXggPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICB0aGlzXy5jaGVjaHVhbl9ybWJfc2ogPSB0aGlzXy5jaGVjaHVhbl9ybWJbZS5kZXRhaWwudmFsdWVdO1xyXG4gICAgICAgIC8vICAgICAg5b+F6KaB6Iqx6LS5XHJcbiAgICAgICAgdGhpc18uYnloZiA9XHJcbiAgICAgICAgICAocGFyc2VJbnQodGhpc18uZ3pzKSArIHRoaXNfLmFycmF5X3JtYiArIHRoaXNfLmNoZWNodWFuX3JtYl9zaiArIDUwMCkgL1xyXG4gICAgICAgICAgMTAwMDA7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOesrOS4ieaWuei0o+S7u+mZqVxyXG4gICAgICBiaW5kUGlja2VyQ2hhbmdlX3pyKGUpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIHRoaXNfLmFycmF5X2J4X2luZGV4ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgdGhpc18uYXJyYXlfYnhfamcgPSB0aGlzXy5hcnJheV9ieF9ybWJbZS5kZXRhaWwudmFsdWVdO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDnjrvnkoPljZXni6znoLTnoo7pmalcclxuICAgICAgYmluZFBpY2tlckNoYW5nZV96cjIoZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgdGhpc18uYXJyYXlfYnhfaW5kZXgyID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgdGhpc18uYXJyYXlfYnhfamcyID0gdGhpc18uYXJyYXlfYnhfcm1iMltlLmRldGFpbC52YWx1ZV07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi9puS4iuS6uuWRmOi0o+S7u+mZqVxyXG4gICAgICBiaW5kUGlja2VyQ2hhbmdlX3pyMyhlKSB7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICB0aGlzXy5hcnJheV9ieF9pbmRleDMgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgYmluZFBpY2tlckNoYW5nZV96cjMxKGUpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIHRoaXNfLmFycmF5X2J4X2luZGV4MzEgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6L2m6Lqr5YiS55eV6ZmpXHJcbiAgICAgIGJpbmRQaWNrZXJDaGFuZ2VfenI0KGUpIHtcclxuICAgICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICAgIHRoaXNfLmFycmF5X2J4X2luZGV4NCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIHRoaXNfLmFycmF5X2J4X2pnNCA9IHRoaXNfLmFycmF5X2J4NF9ybWJbZS5kZXRhaWwudmFsdWVdO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8g6aaW5LuY5ruR5YqoXHJcbiAgICAgIHNsaWRlcjRjaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2YgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAvLyDmjInpkq7pq5jkuq5cclxuICAgICAgICB0aGlzLnlhbnNlID0gJ2h1aXNlJztcclxuICAgICAgICB0aGlzLmppc3VhblR4dCA9ICflvIDlp4vorqHnrpcnO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOacn+mZkOa7keWKqFxyXG4gICAgICBzbGlkZXI1Y2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnF4ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgLy8g5oyJ6ZKu6auY5LquXHJcbiAgICAgICAgdGhpcy55YW5zZSA9ICdodWlzZSc7XHJcbiAgICAgICAgdGhpcy5qaXN1YW5UeHQgPSAn5byA5aeL6K6h566XJztcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDlv4XopoHoirHotLlcclxuICAgICAgYml4dV9idG4oZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGUgPT0gJzEnKSB7XHJcbiAgICAgICAgICB0aGlzXy5ieWhmX3p0ID0gMDtcclxuICAgICAgICAgIHRoaXMuZmlyc3RQID0gJ+WxleW8gCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNfLmJ5aGZfenQgPSAxO1xyXG4gICAgICAgICAgdGhpcy5maXJzdFAgPSAn5pS26LW3JztcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWVhuS4muS/nemZqVxyXG4gICAgICBieF9idG4oZSkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGUgPT0gJzEnKSB7XHJcbiAgICAgICAgICB0aGlzXy5ieF96dCA9IDA7XHJcbiAgICAgICAgICB0aGlzLmZpcnN0UHJlcyA9ICflsZXlvIAnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzXy5ieF96dCA9IDE7XHJcbiAgICAgICAgICB0aGlzLmZpcnN0UHJlcyA9ICfmlLbotbcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g56ys5LiJ5pa56LSj5Lu76ZmpXHJcbiAgICAgIGNoZWNrYm94Q2hhbmdlKGUpIHtcclxuICAgICAgICBsZXQgemhpID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICB0aGlzXy55YW5zZSA9ICdodWlzZSc7XHJcbiAgICAgICAgdGhpc18uamlzdWFuVHh0ID0gJ+W8gOWni+iuoeeulyc7XHJcbiAgICAgICAgbGV0IHNodSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB6aGkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHNodSArPSBwYXJzZUludCh6aGlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzXy5ieHplX3JtYiA9IChzaHUgLyAxMDAwMCkudG9GaXhlZCgyKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5p+l55yL56ym5ZCI5p2h5Lu26L2m5Z6LXHJcbiAgICAgIGNrZmhjeCgpIHtcclxuICAgICAgICBsZXQgemhpID0gMDtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dF9qZyA8PSAzMCkge1xyXG4gICAgICAgICAgemhpID0gMTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRfamcgPD0gNDAgJiYgdGhpcy5pbnB1dF9qZyA+IDMwKSB7XHJcbiAgICAgICAgICB6aGkgPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pbnB1dF9qZyA8PSA1MCAmJiB0aGlzLmlucHV0X2pnID4gNDApIHtcclxuICAgICAgICAgIHpoaSA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlucHV0X2pnIDw9IDYwICYmIHRoaXMuaW5wdXRfamcgPiA1MCkge1xyXG4gICAgICAgICAgemhpID0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5wdXRfamcgPiA2MCkge1xyXG4gICAgICAgICAgemhpID0gNTtcclxuICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDpcclxuICAgICAgICAgICdzb3VzdW8/Y2FycHJpY2VzZWN0aW9uPScgK1xyXG4gICAgICAgICAgemhpICtcclxuICAgICAgICAgICcmZG93bnBheW1lbnRzZWN0aW9uPScgK1xyXG4gICAgICAgICAgJzAnICtcclxuICAgICAgICAgICcmbW9udGhseXN1cHBseXNlY3Rpb249JyArXHJcbiAgICAgICAgICAnMCdcclxuICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIC8vICAgICAg546755KD5L+d6Zmp5Lu35qC86L+Q566XXHJcbiAgICAgIHRoaXNfLmFycmF5X2J4X3JtYjIgPSBbXHJcbiAgICAgICAgcGFyc2VJbnQodGhpc18uaW5wdXRfamcgKiAxMDAwMCAqIDAuMDAyNSksXHJcbiAgICAgICAgcGFyc2VJbnQodGhpc18uaW5wdXRfamcgKiAxMDAwMCAqIDAuMDAxNSlcclxuICAgICAgXTtcclxuICAgICAgLy8gICAgICDotK3nva7nqI5cclxuICAgICAgbGV0IGd6cyA9IHRoaXNfLmlucHV0X2pnICogMTAwMDAgLyAxLjE3ICogMC4wNzU7XHJcbiAgICAgIHRoaXNfLmd6cyA9IGd6cy50b0ZpeGVkKDIpO1xyXG4gICAgICAvLyAgICAgIOW/heimgeiKsei0uVxyXG4gICAgICBsZXQgeHpfYnloZiA9XHJcbiAgICAgICAgKHBhcnNlSW50KHRoaXNfLmd6cykgKyB0aGlzXy5hcnJheV9ybWIgKyB0aGlzXy5jaGVjaHVhbl9ybWJfc2ogKyA1MDApIC9cclxuICAgICAgICAxMDAwMDtcclxuICAgICAgdGhpc18uYnloZiA9IHh6X2J5aGYudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgIC8vICAgICAg5YWo6L2m55uX5oqi6ZmpXHJcbiAgICAgIGlmICh0aGlzXy5hcnJheV9ybWIgPT0gOTUwKSB7XHJcbiAgICAgICAgdGhpc18ucWNkcXggPSBwYXJzZUludCgyODUgKyB0aGlzXy5pbnB1dF9qZyAqIDEwMDAwICogMC4wMDk1KTtcclxuICAgICAgICAvLyAgICAgIOi9pui+huaNn+WkseS/nemZqVxyXG4gICAgICAgIHRoaXNfLnNzYnggPSBwYXJzZUludCgoMjg1ICsgdGhpc18uaW5wdXRfamcgKiAxMDAwMCkgKiAwLjAxMDg4KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzXy5xY2RxeCA9IHBhcnNlSW50KDM0MiArIHRoaXNfLmlucHV0X2pnICogMTAwMDAgKiAwLjAwOSk7XHJcbiAgICAgICAgdGhpc18uc3NieCA9IHBhcnNlSW50KCgzNDIgKyB0aGlzXy5pbnB1dF9qZyAqIDEwMDAwKSAqIDAuMDEwODgpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vICAgICAg6Ieq54eD5o2f5aSx6ZmpXHJcbiAgICAgIHRoaXNfLnpyc3N4ID0gdGhpc18uaW5wdXRfamcgKiAxMDAwMCAqIDAuMDAxNTtcclxuICAgICAgLy8gICAgICDkuI3orqHlhY3otZTnibnnuqbpmalcclxuICAgICAgdGhpc18uYmptcHR5eCA9ICh0aGlzXy5zc2J4ICsgdGhpc18uYXJyYXlfYnhfamcpIC8gNTtcclxuICAgICAgLy8gICAgICDml6Dov4fotKPku7vpmalcclxuICAgICAgdGhpc18ud2d6cnggPSBwYXJzZUludCh0aGlzXy5hcnJheV9ieF9qZyAqIDAuMik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXNfLndnenJ4LCBwYXJzZUludCh0aGlzXy5hcnJheV9ieF9qZyAqIDAuMikpXHJcbiAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgLy8g5Yid5aeL5YyWXHJcbiAgICBvblVubG9hZCgpIHtcclxuICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnbG9hbmNhbGN1bGF0b3InKTtcclxuICAgICAgdGhpcy55YW5zZSA9ICdodWlzZScsXHJcbiAgICAgIHRoaXMuamlzdWFuVHh0ID0gJ+W8gOWni+iuoeeulycsXHJcbiAgICAgIHRoaXMuanNqZ196dCA9IGZhbHNlLFxyXG4gICAgICB0aGlzLmlucHV0X2pnID0gMzUuNixcclxuICAgICAgdGhpcy5pbnB1dF9sbCA9IDkuOTgsXHJcbiAgICAgIHRoaXMuZmlyc3RQID0gJ+WxleW8gCcsXHJcbiAgICAgIHRoaXMuZmlyc3RQcmVzID0gJ+WxleW8gCcsXHJcbiAgICAgIHRoaXMuc2YgPSAyMCxcclxuICAgICAgdGhpcy5xeCA9IDEyLFxyXG4gICAgICB0aGlzLmJ5aGZfenQgPSAwLFxyXG4gICAgICB0aGlzLmJ4X3p0ID0gMCxcclxuICAgICAgdGhpcy5pbmRleCA9IDAsXHJcbiAgICAgIHRoaXMuYXJyYXkgPSBbJ+S6pOW8uumZqSg25bqn5Lul5LiLKScsICfkuqTlvLrpmakoNuW6p+S7peS4iiknXSxcclxuICAgICAgdGhpcy5hcnJhX3JtYiA9IDk1MCxcclxuICAgICAgdGhpcy5jY19pbmRleCA9IDAsXHJcbiAgICAgIHRoaXMuY2hlY2h1YW4gPSBbXHJcbiAgICAgICAgJzEuMEwo5ZCrKeS7peS4iycsXHJcbiAgICAgICAgJzEuMC0xLjZMKOWQqyknLFxyXG4gICAgICAgICcgMS42LTIuMEwo5ZCrKScsXHJcbiAgICAgICAgJzIuMC0yLjVMKOWQqyknLFxyXG4gICAgICAgICcyLjUtMy4wTCjlkKspJyxcclxuICAgICAgICAnMy4wLTQuMEwo5ZCrKScsXHJcbiAgICAgICAgJzQuMEzku6XkuIonXHJcbiAgICAgIF0sXHJcbiAgICAgIHRoaXMuY2hlY2h1YW5fcm1iID0gWzMwMCwgNDIwLCA0ODAsIDkwMCwgMTkyMCwgMzQ4MCwgNTI4MF0sXHJcbiAgICAgIHRoaXMuY2hlY2h1YW5fcm1iX3NqID0gMzAwLFxyXG4gICAgICAvLyAgICAgIOS/nemZqVxyXG4gICAgICB0aGlzLmFycmF5X2J4X2luZGV4ID0gMCxcclxuICAgICAgdGhpcy5hcnJheV9ieCA9IFsnNeS4hycsICcxMOS4hycsICcyMOS4hycsICc1MOS4hycsICcxMDDkuIcnXSxcclxuICAgICAgdGhpcy5hcnJheV9ieF9ybWIgPSBbNTE2LCA3NDYsIDkyNCwgMTI1MiwgMTYzMF0sXHJcbiAgICAgIHRoaXMuYXJyYXlfYnhfamcgPSA1MTYsXHJcbiAgICAgIC8vICAgICAg5L+d6ZmpMu+8iOeOu+eSg+WNleeLrOegtOeijumZqe+8iVxyXG4gICAgICB0aGlzLmFycmF5X2J4X2luZGV4MiA9IDAsXHJcbiAgICAgIHRoaXMuYXJyYXlfYngyID0gWyfov5vlj6MnLCAn5Zu95LqnJ10sXHJcbiAgICAgIHRoaXMuYXJyYXlfYnhfcm1iMiA9IFtdLFxyXG4gICAgICB0aGlzLmFycmF5X2J4X2pnMiA9IDUxNixcclxuICAgICAgLy8gICAgICDkv53pmakz77yI6L2m5LiK5Lq65ZGY6LSj5Lu76Zmp77yJXHJcbiAgICAgIHRoaXMuYXJyYXlfYnhfaW5kZXgzID0gMCxcclxuICAgICAgdGhpcy5hcnJheV9ieF9pbmRleDMxID0gMCxcclxuICAgICAgdGhpcy5hcnJheV9ieDMgPSBbMSwgMiwgMywgNCwgNSwgNl0sXHJcbiAgICAgIHRoaXMuYXJyYXlfYngzMSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XSxcclxuICAgICAgdGhpcy5hcnJheV9ieF9qZzMgPSAwLFxyXG4gICAgICAvLyAgICAgIOS/nemZqTTvvIjovabouqvliJLnl5XpmanvvIlcclxuICAgICAgdGhpcy5hcnJheV9ieF9pbmRleDQgPSAwLFxyXG4gICAgICB0aGlzLmFycmF5X2J4NCA9IFsnMuWNgycsICc15Y2DJywgJzHkuIcnLCAnMuS4hyddLFxyXG4gICAgICB0aGlzLmFycmF5X2J4NF9ybWIgPSBbNDAwLCA1NzAsIDc2MCwgMTE0MF0sXHJcbiAgICAgIHRoaXMuYXJyYXlfYnhfamc0ID0gNDAwLFxyXG4gICAgICAvLyAgICAgIOi0ree9rueojlxyXG4gICAgICB0aGlzLmd6cyA9IDAsXHJcbiAgICAgIC8vICAgICAg5b+F6KaB6Iqx6LS5XHJcbiAgICAgIHRoaXMuYnloZiA9IDAuMTc1LFxyXG4gICAgICAvLyAgICAgIOi9pui+huaNn+WkseS/nemZqVxyXG4gICAgICB0aGlzLnNzYnggPSAwLFxyXG4gICAgICAvLyAgICAgIOWFqOi9puebl+aKoumZqVxyXG4gICAgICB0aGlzLnFjZHF4ID0gMCxcclxuICAgICAgLy8gICAgICDoh6rnh4PmjZ/lpLHpmalcclxuICAgICAgdGhpcy56cnNzeCA9IDAsXHJcbiAgICAgIC8vICAgICAg5LiN6K6h5YWN6LWU54m557qm6ZmpXHJcbiAgICAgIHRoaXMuYmptcHR5eCA9IDAsXHJcbiAgICAgIC8vICAgICAg5peg6L+H6LSj5Lu76ZmpXHJcbiAgICAgIC8vIHRoaXMud2d6cnggPSAwLFxyXG4gICAgICAvLyAgICAgIOS/nemZqeaAu+minVxyXG4gICAgICB0aGlzLmJ4emVfcm1iID0gMCxcclxuICAgICAgLy8gICAgICDorqHnrpfnu5PmnpxcclxuICAgICAgdGhpcy5qc2pnID0gW10sXHJcbiAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=