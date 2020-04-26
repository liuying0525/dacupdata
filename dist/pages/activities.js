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

var order = function (_wepy$page) {
  _inherits(order, _wepy$page);

  function order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = order.__proto__ || Object.getPrototypeOf(order)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预约确认'
    }, _this.data = {
      // 门店信息
      zhi: {},
      // 图片地址
      img_url: '',
      name: '',
      // 产品名
      finan: '',
      // 首付
      sf: '',
      // 月供
      yg: '',
      // 姓名
      username: '',
      // 身份证号
      sfz: '',
      cahg: '',
      // 产品信息
      wp: '',
      // 产品id
      wpid: '',
      // 产品外部id
      shuju: '',
      // 门店
      url_link: '',
      md: [],
      disabled: false
    }, _this.methods = {
      //  分享
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },

      // 预约门店跳转 ea产品关联id
      toMendian: function toMendian(e, a) {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        wx.navigateTo({
          url: 'mendian?e=' + e + '&a=' + a + '&json_link=' + json_link
        });
      },

      // 提交申请
      click_: function click_() {
        var this_ = this;
        var res = this_.zhi;
        var parent_data = this_.$parent.globalData;
        if (this_.username != '' && this_.sfz != '') {
          //   身份证验证
          var IdentityCodeValid = function IdentityCodeValid(code) {
            var city = {
              11: '北京',
              12: '天津',
              13: '河北',
              14: '山西',
              15: '内蒙古',
              21: '辽宁',
              22: '吉林',
              23: '黑龙江 ',
              31: '上海',
              32: '江苏',
              33: '浙江',
              34: '安徽',
              35: '福建',
              36: '江西',
              37: '山东',
              41: '河南',
              42: '湖北 ',
              43: '湖南',
              44: '广东',
              45: '广西',
              46: '海南',
              50: '重庆',
              51: '四川',
              52: '贵州',
              53: '云南',
              54: '西藏 ',
              61: '陕西',
              62: '甘肃',
              63: '青海',
              64: '宁夏',
              65: '新疆',
              71: '台湾',
              81: '香港',
              82: '澳门',
              91: '国外 '
            };
            var tip = '';
            var pass = true;

            if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
              tip = '身份证号格式错误';
              pass = false;
            } else if (!city[code.substr(0, 2)]) {
              tip = '身份证地址编码错误';
              pass = false;
            } else {
              //18位身份证需要验证最后一位校验位
              if (code.length == 18) {
                code = code.split('');
                //∑(ai×Wi)(mod 11)
                //加权因子
                var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                //校验位
                var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
                var sum = 0;
                var ai = 0;
                var wi = 0;
                for (var i = 0; i < 17; i++) {
                  ai = code[i];
                  wi = factor[i];
                  sum += ai * wi;
                }
                var last = parity[sum % 11];
                if (parity[sum % 11] != code[17]) {
                  tip = '身份证校验位错误';
                  pass = false;
                }
              }
            }
            if (!pass) {
              wx.showToast({
                title: tip,
                icon: 'none',
                duration: 2000
              });
            }
            return pass;
          };

          var c = this_.sfz;
          var leo = IdentityCodeValid(c);
          if (leo) {
            if (this.disabled = false) {
              console.log(213);
              return;
            }
            this.shengqin();
          }
        } else {
          wx.showToast({
            title: '请完善信息',
            icon: 'none',
            duration: 2000
          });
        }
      },

      // 输入姓名
      username: function username(e) {
        this.username = e.detail.value;
      },

      // 输入身份证号
      usersfz: function usersfz(e) {
        this.sfz = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(order, [{
    key: 'onLoad',
    value: function onLoad(e, res) {
      // pvuv客户统计
      this.PVUVfrom = e.PVUVfrom;
      if (e.PVUVfrom === 'zhizu') {
        this.$parent.PVUVstatistical('rentfillinorderpage');
      }
      var this_ = this;
      this_.zhi = e;
      this_.img_url = e.thumbnailimgurl;
      this_.name = e.name;
      this_.finan = e.financialproductName;
      this_.shuju = res.from.zhi.productlist[0].financialproductid;
      this_.wp = res.from.zhi.productlist[0].financial_product_id;
      this_.wpid = e.asset_model_cde;
      this_.sf = e.downpayment;
      this_.yg = e.monthsuppert;
      this_.cahg = e.carseriesname;
      this_.md = res.from.zhi.productlist[0].businessinfoJO;
      this_.$apply();
    }
    // 申请请求

  }, {
    key: 'shengqin',
    value: function shengqin() {
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var parent_data = this.$parent.globalData;
      // 申请
      wx.request({
        url: parent_data.json_link + '/api/wxapp/reservationorder/createorder?access_token=' + parent_data.access_token,
        data: {
          carmodelid: this_.zhi.carmodelid,
          financialproductid: this_.shuju,
          downpaymentratio: 20,
          businessid: this_.md.businessid,
          term: 36,
          tailmoney: 0,
          downpaymentpara: this_.zhi.downpayment / 10000,
          productpara: this_.zhi.financingamt,
          finalpayment: 0,
          monthlysupply: this_.zhi.monthsuppert,
          username: this_.username,
          idnumber: this_.sfz,
          source: parent_data.source,
          sourceid: parent_data.sourceid
        },
        success: function success(data) {
          this_.disabled = false;
          this_.$apply();
          this_.$parent.clicknumordernumstat(2);
          this_.$parent.globalData.pageid = [];
          this_.$parent.globalData.pagename = [];
          data.data.orderinfo.from = 'details';
          this_.$navigate('successfulorder', data.data.orderinfo);
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
    // 页面重新进入统计渲染

  }, {
    key: 'onShow',
    value: function onShow() {
      this.$parent.UVstatistical('loanproductdetail');
      this.$parent.PVUVstatistical('loanproductdetail');
      this.url_link = this.$parent.globalData.url_link;
      if (this.$parent.globalData.selectMendian.businessid) {
        this.md = this.$parent.globalData.selectMendian;
      }
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.$parent.clicknumordernumstat(2);
      this.$parent.globalData.pageid = [];
      this.$parent.globalData.pagename = [];
    }
  }]);

  return order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(order , 'pages/activities'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2aXRpZXMuanMiXSwibmFtZXMiOlsib3JkZXIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInpoaSIsImltZ191cmwiLCJuYW1lIiwiZmluYW4iLCJzZiIsInlnIiwidXNlcm5hbWUiLCJzZnoiLCJjYWhnIiwid3AiLCJ3cGlkIiwic2h1anUiLCJ1cmxfbGluayIsIm1kIiwiZGlzYWJsZWQiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwidG9NZW5kaWFuIiwiZSIsImEiLCJ0aGlzXyIsImpzb25fbGluayIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY2xpY2tfIiwicmVzIiwicGFyZW50X2RhdGEiLCJJZGVudGl0eUNvZGVWYWxpZCIsImNvZGUiLCJjaXR5IiwidGlwIiwicGFzcyIsInRlc3QiLCJzdWJzdHIiLCJsZW5ndGgiLCJzcGxpdCIsImZhY3RvciIsInBhcml0eSIsInN1bSIsImFpIiwid2kiLCJpIiwibGFzdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiYyIsImxlbyIsImNvbnNvbGUiLCJsb2ciLCJzaGVuZ3FpbiIsImRldGFpbCIsInZhbHVlIiwidXNlcnNmeiIsIlBWVVZmcm9tIiwiUFZVVnN0YXRpc3RpY2FsIiwidGh1bWJuYWlsaW1ndXJsIiwiZmluYW5jaWFscHJvZHVjdE5hbWUiLCJmcm9tIiwicHJvZHVjdGxpc3QiLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJmaW5hbmNpYWxfcHJvZHVjdF9pZCIsImFzc2V0X21vZGVsX2NkZSIsImRvd25wYXltZW50IiwibW9udGhzdXBwZXJ0IiwiY2Fyc2VyaWVzbmFtZSIsImJ1c2luZXNzaW5mb0pPIiwiJGFwcGx5IiwicmVxdWVzdCIsImFjY2Vzc190b2tlbiIsImNhcm1vZGVsaWQiLCJkb3ducGF5bWVudHJhdGlvIiwiYnVzaW5lc3NpZCIsInRlcm0iLCJ0YWlsbW9uZXkiLCJkb3ducGF5bWVudHBhcmEiLCJwcm9kdWN0cGFyYSIsImZpbmFuY2luZ2FtdCIsImZpbmFscGF5bWVudCIsIm1vbnRobHlzdXBwbHkiLCJpZG51bWJlciIsInNvdXJjZSIsInNvdXJjZWlkIiwic3VjY2VzcyIsImNsaWNrbnVtb3JkZXJudW1zdGF0IiwicGFnZWlkIiwicGFnZW5hbWUiLCJvcmRlcmluZm8iLCIkbmF2aWdhdGUiLCJmYWlsIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsIlVWc3RhdGlzdGljYWwiLCJzZWxlY3RNZW5kaWFuIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLFdBQUssRUFGQTtBQUdMO0FBQ0FDLGVBQVMsRUFKSjtBQUtMQyxZQUFNLEVBTEQ7QUFNTDtBQUNBQyxhQUFPLEVBUEY7QUFRTDtBQUNBQyxVQUFJLEVBVEM7QUFVTDtBQUNBQyxVQUFJLEVBWEM7QUFZTDtBQUNBQyxnQkFBVSxFQWJMO0FBY0w7QUFDQUMsV0FBSyxFQWZBO0FBZ0JMQyxZQUFNLEVBaEJEO0FBaUJMO0FBQ0FDLFVBQUksRUFsQkM7QUFtQkw7QUFDQUMsWUFBTSxFQXBCRDtBQXFCTDtBQUNBQyxhQUFPLEVBdEJGO0FBdUJMO0FBQ0FDLGdCQUFVLEVBeEJMO0FBeUJMQyxVQUFJLEVBekJDO0FBMEJMQyxnQkFBVTtBQTFCTCxLLFFBNkJQQyxPLEdBQVU7QUFDUjtBQUNBQyx1QkFGUSwrQkFFWTtBQUNsQixlQUFPO0FBQ0xDLGdCQUFNO0FBREQsU0FBUDtBQUdELE9BTk87O0FBT1I7QUFDQUMsZUFSUSxxQkFRRUMsQ0FSRixFQVFLQyxDQVJMLEVBUVE7QUFDZCxZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFJQyxZQUFZLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkYsU0FBeEM7QUFDQUcsV0FBR0Ms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WUE3QlMsa0JBNkJGO0FBQ0xyRSxhQUFHc0IsU0FBSCxDQUFhO0FBQ1hDLG1CQUFPLE1BREk7QUFFWEMsa0JBQU07QUFGSyxXQUFiOztBQUtBOEMscUJBQVcsWUFBWTtBQUNyQnRFLGVBQUd1RSxTQUFIO0FBQ0QsV0FGRCxFQUVHLElBRkg7QUFHQTtBQUNEO0FBdkNRLE9BQVg7QUF5Q0Q7QUFDRDs7Ozs2QkFDUztBQUNQLFdBQUt6RSxPQUFMLENBQWEwRSxhQUFiLENBQTJCLG1CQUEzQjtBQUNBLFdBQUsxRSxPQUFMLENBQWFxQyxlQUFiLENBQTZCLG1CQUE3QjtBQUNDLFdBQUtoRCxRQUFMLEdBQWdCLEtBQUtXLE9BQUwsQ0FBYUMsVUFBYixDQUF3QlosUUFBeEM7QUFDRCxVQUFJLEtBQUtXLE9BQUwsQ0FBYUMsVUFBYixDQUF3QjBFLGFBQXhCLENBQXNDckIsVUFBMUMsRUFBc0Q7QUFDcEQsYUFBS2hFLEVBQUwsR0FBVSxLQUFLVSxPQUFMLENBQWFDLFVBQWIsQ0FBd0IwRSxhQUFsQztBQUNEO0FBQ0Y7OzsrQkFDVTtBQUNULFdBQUszRSxPQUFMLENBQWFrRSxvQkFBYixDQUFrQyxDQUFsQztBQUNBLFdBQUtsRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JrRSxNQUF4QixHQUFpQyxFQUFqQztBQUNBLFdBQUtuRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JtRSxRQUF4QixHQUFtQyxFQUFuQztBQUNEOzs7O0VBMVFnQ1EsZUFBS0MsSTs7a0JBQW5CeEcsSyIsImZpbGUiOiJhY3Rpdml0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIG9yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOe6puehruiupCdcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgICAgemhpOiB7fSxcclxuICAgICAgLy8g5Zu+54mH5Zyw5Z2AXHJcbiAgICAgIGltZ191cmw6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgLy8g5Lqn5ZOB5ZCNXHJcbiAgICAgIGZpbmFuOiAnJyxcclxuICAgICAgLy8g6aaW5LuYXHJcbiAgICAgIHNmOiAnJyxcclxuICAgICAgLy8g5pyI5L6bXHJcbiAgICAgIHlnOiAnJyxcclxuICAgICAgLy8g5aeT5ZCNXHJcbiAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgLy8g6Lqr5Lu96K+B5Y+3XHJcbiAgICAgIHNmejogJycsXHJcbiAgICAgIGNhaGc6ICcnLFxyXG4gICAgICAvLyDkuqflk4Hkv6Hmga9cclxuICAgICAgd3A6ICcnLFxyXG4gICAgICAvLyDkuqflk4FpZFxyXG4gICAgICB3cGlkOiAnJyxcclxuICAgICAgLy8g5Lqn5ZOB5aSW6YOoaWRcclxuICAgICAgc2h1anU6ICcnLFxyXG4gICAgICAvLyDpl6jlupdcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBtZDogW10sXHJcbiAgICAgIGRpc2FibGVkOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyAg5YiG5LqrXHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOmihOe6pumXqOW6l+i3s+i9rCBlYeS6p+WTgeWFs+iBlGlkXHJcbiAgICAgIHRvTWVuZGlhbihlLCBhKSB7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnbWVuZGlhbj9lPScgKyBlICsgJyZhPScgKyBhICsgJyZqc29uX2xpbms9JyArIGpzb25fbGlua1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmj5DkuqTnlLPor7dcclxuICAgICAgY2xpY2tfKCkge1xyXG4gICAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHJlcyA9IHRoaXNfLnpoaTtcclxuICAgICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzXy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgICAgaWYgKHRoaXNfLnVzZXJuYW1lICE9ICcnICYmIHRoaXNfLnNmeiAhPSAnJykge1xyXG4gICAgICAgICAgLy8gICDouqvku73or4Hpqozor4FcclxuICAgICAgICAgIGZ1bmN0aW9uIElkZW50aXR5Q29kZVZhbGlkKGNvZGUpIHtcclxuICAgICAgICAgICAgdmFyIGNpdHkgPSB7XHJcbiAgICAgICAgICAgICAgMTE6ICfljJfkuqwnLFxyXG4gICAgICAgICAgICAgIDEyOiAn5aSp5rSlJyxcclxuICAgICAgICAgICAgICAxMzogJ+ays+WMlycsXHJcbiAgICAgICAgICAgICAgMTQ6ICflsbHopb8nLFxyXG4gICAgICAgICAgICAgIDE1OiAn5YaF6JKZ5Y+kJyxcclxuICAgICAgICAgICAgICAyMTogJ+i+veWugScsXHJcbiAgICAgICAgICAgICAgMjI6ICflkInmnpcnLFxyXG4gICAgICAgICAgICAgIDIzOiAn6buR6b6Z5rGfICcsXHJcbiAgICAgICAgICAgICAgMzE6ICfkuIrmtbcnLFxyXG4gICAgICAgICAgICAgIDMyOiAn5rGf6IuPJyxcclxuICAgICAgICAgICAgICAzMzogJ+a1meaxnycsXHJcbiAgICAgICAgICAgICAgMzQ6ICflronlvr0nLFxyXG4gICAgICAgICAgICAgIDM1OiAn56aP5bu6JyxcclxuICAgICAgICAgICAgICAzNjogJ+axn+ilvycsXHJcbiAgICAgICAgICAgICAgMzc6ICflsbHkuJwnLFxyXG4gICAgICAgICAgICAgIDQxOiAn5rKz5Y2XJyxcclxuICAgICAgICAgICAgICA0MjogJ+a5luWMlyAnLFxyXG4gICAgICAgICAgICAgIDQzOiAn5rmW5Y2XJyxcclxuICAgICAgICAgICAgICA0NDogJ+W5v+S4nCcsXHJcbiAgICAgICAgICAgICAgNDU6ICflub/opb8nLFxyXG4gICAgICAgICAgICAgIDQ2OiAn5rW35Y2XJyxcclxuICAgICAgICAgICAgICA1MDogJ+mHjeW6hicsXHJcbiAgICAgICAgICAgICAgNTE6ICflm5vlt50nLFxyXG4gICAgICAgICAgICAgIDUyOiAn6LS15beeJyxcclxuICAgICAgICAgICAgICA1MzogJ+S6keWNlycsXHJcbiAgICAgICAgICAgICAgNTQ6ICfopb/ol48gJyxcclxuICAgICAgICAgICAgICA2MTogJ+mZleilvycsXHJcbiAgICAgICAgICAgICAgNjI6ICfnlJjogoMnLFxyXG4gICAgICAgICAgICAgIDYzOiAn6Z2S5rW3JyxcclxuICAgICAgICAgICAgICA2NDogJ+WugeWkjycsXHJcbiAgICAgICAgICAgICAgNjU6ICfmlrDnloYnLFxyXG4gICAgICAgICAgICAgIDcxOiAn5Y+w5rm+JyxcclxuICAgICAgICAgICAgICA4MTogJ+mmmea4rycsXHJcbiAgICAgICAgICAgICAgODI6ICfmvrPpl6gnLFxyXG4gICAgICAgICAgICAgIDkxOiAn5Zu95aSWICdcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdmFyIHRpcCA9ICcnO1xyXG4gICAgICAgICAgICB2YXIgcGFzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvZGUgfHxcclxuICAgICAgICAgICAgICAhL15cXGR7Nn0oMTh8MTl8MjApP1xcZHsyfSgwWzEtOV18MVswMTJdKSgwWzEtOV18WzEyXVxcZHwzWzAxXSlcXGR7M30oXFxkfFgpJC9pLnRlc3QoXHJcbiAgICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aXAgPSAn6Lqr5Lu96K+B5Y+35qC85byP6ZSZ6K+vJztcclxuICAgICAgICAgICAgICBwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNpdHlbY29kZS5zdWJzdHIoMCwgMildKSB7XHJcbiAgICAgICAgICAgICAgdGlwID0gJ+i6q+S7veivgeWcsOWdgOe8lueggemUmeivryc7XHJcbiAgICAgICAgICAgICAgcGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vMTjkvY3ouqvku73or4HpnIDopoHpqozor4HmnIDlkI7kuIDkvY3moKHpqozkvY1cclxuICAgICAgICAgICAgICBpZiAoY29kZS5sZW5ndGggPT0gMTgpIHtcclxuICAgICAgICAgICAgICAgIGNvZGUgPSBjb2RlLnNwbGl0KCcnKTtcclxuICAgICAgICAgICAgICAgIC8v4oiRKGFpw5dXaSkobW9kIDExKVxyXG4gICAgICAgICAgICAgICAgLy/liqDmnYPlm6DlrZBcclxuICAgICAgICAgICAgICAgIHZhciBmYWN0b3IgPSBbXHJcbiAgICAgICAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgICAgICAgIDEwLFxyXG4gICAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgICA0LFxyXG4gICAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgICAxLFxyXG4gICAgICAgICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgICA3LFxyXG4gICAgICAgICAgICAgICAgICA5LFxyXG4gICAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgICAgNSxcclxuICAgICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIC8v5qCh6aqM5L2NXHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyaXR5ID0gWzEsIDAsICdYJywgOSwgOCwgNywgNiwgNSwgNCwgMywgMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgc3VtID0gMDtcclxuICAgICAgICAgICAgICAgIHZhciBhaSA9IDA7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2kgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNzsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgIGFpID0gY29kZVtpXTtcclxuICAgICAgICAgICAgICAgICAgd2kgPSBmYWN0b3JbaV07XHJcbiAgICAgICAgICAgICAgICAgIHN1bSArPSBhaSAqIHdpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGxhc3QgPSBwYXJpdHlbc3VtICUgMTFdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcml0eVtzdW0gJSAxMV0gIT0gY29kZVsxN10pIHtcclxuICAgICAgICAgICAgICAgICAgdGlwID0gJ+i6q+S7veivgeagoemqjOS9jemUmeivryc7XHJcbiAgICAgICAgICAgICAgICAgIHBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFwYXNzKSB7XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdmFyIGMgPSB0aGlzXy5zZno7XHJcbiAgICAgICAgICB2YXIgbGVvID0gSWRlbnRpdHlDb2RlVmFsaWQoYyk7XHJcbiAgICAgICAgICBpZiAobGVvKSB7XHJcbiAgICAgICAgICAgIGlmICgodGhpcy5kaXNhYmxlZCA9IGZhbHNlKSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKDIxMyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hlbmdxaW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfor7flrozlloTkv6Hmga8nLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi+k+WFpeWnk+WQjVxyXG4gICAgICB1c2VybmFtZShlKSB7XHJcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDovpPlhaXouqvku73or4Hlj7dcclxuICAgICAgdXNlcnNmeihlKSB7XHJcbiAgICAgICAgdGhpcy5zZnogPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBvbkxvYWQoZSwgcmVzKSB7XHJcbiAgICAgIC8vIHB2dXblrqLmiLfnu5/orqFcclxuICAgICAgdGhpcy5QVlVWZnJvbSA9IGUuUFZVVmZyb207XHJcbiAgICAgIGlmIChlLlBWVVZmcm9tID09PSAnemhpenUnKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgncmVudGZpbGxpbm9yZGVycGFnZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHRoaXNfLnpoaSA9IGU7XHJcbiAgICAgIHRoaXNfLmltZ191cmwgPSBlLnRodW1ibmFpbGltZ3VybDtcclxuICAgICAgdGhpc18ubmFtZSA9IGUubmFtZTtcclxuICAgICAgdGhpc18uZmluYW4gPSBlLmZpbmFuY2lhbHByb2R1Y3ROYW1lO1xyXG4gICAgICB0aGlzXy5zaHVqdSA9IHJlcy5mcm9tLnpoaS5wcm9kdWN0bGlzdFswXS5maW5hbmNpYWxwcm9kdWN0aWQ7XHJcbiAgICAgIHRoaXNfLndwID0gcmVzLmZyb20uemhpLnByb2R1Y3RsaXN0WzBdLmZpbmFuY2lhbF9wcm9kdWN0X2lkO1xyXG4gICAgICB0aGlzXy53cGlkID0gZS5hc3NldF9tb2RlbF9jZGU7XHJcbiAgICAgIHRoaXNfLnNmID0gZS5kb3ducGF5bWVudDtcclxuICAgICAgdGhpc18ueWcgPSBlLm1vbnRoc3VwcGVydDtcclxuICAgICAgdGhpc18uY2FoZyA9IGUuY2Fyc2VyaWVzbmFtZTtcclxuICAgICAgdGhpc18ubWQgPSByZXMuZnJvbS56aGkucHJvZHVjdGxpc3RbMF0uYnVzaW5lc3NpbmZvSk87XHJcbiAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgLy8g55Sz6K+36K+35rGCXHJcbiAgICBzaGVuZ3FpbigpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgdGhpcy5qc29uX2xpbmsgPSBqc29uX2xpbms7XHJcbiAgICAgIGxldCBwYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAvLyDnlLPor7dcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICAgJy9hcGkvd3hhcHAvcmVzZXJ2YXRpb25vcmRlci9jcmVhdGVvcmRlcj9hY2Nlc3NfdG9rZW49JyArXHJcbiAgICAgICAgICBwYXJlbnRfZGF0YS5hY2Nlc3NfdG9rZW4sXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgY2FybW9kZWxpZDogdGhpc18uemhpLmNhcm1vZGVsaWQsXHJcbiAgICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IHRoaXNfLnNodWp1LFxyXG4gICAgICAgICAgZG93bnBheW1lbnRyYXRpbzogMjAsXHJcbiAgICAgICAgICBidXNpbmVzc2lkOiB0aGlzXy5tZC5idXNpbmVzc2lkLFxyXG4gICAgICAgICAgdGVybTogMzYsXHJcbiAgICAgICAgICB0YWlsbW9uZXk6IDAsXHJcbiAgICAgICAgICBkb3ducGF5bWVudHBhcmE6IHRoaXNfLnpoaS5kb3ducGF5bWVudCAvIDEwMDAwLFxyXG4gICAgICAgICAgcHJvZHVjdHBhcmE6IHRoaXNfLnpoaS5maW5hbmNpbmdhbXQsXHJcbiAgICAgICAgICBmaW5hbHBheW1lbnQ6IDAsXHJcbiAgICAgICAgICBtb250aGx5c3VwcGx5OiB0aGlzXy56aGkubW9udGhzdXBwZXJ0LFxyXG4gICAgICAgICAgdXNlcm5hbWU6IHRoaXNfLnVzZXJuYW1lLFxyXG4gICAgICAgICAgaWRudW1iZXI6IHRoaXNfLnNmeixcclxuICAgICAgICAgIHNvdXJjZTogcGFyZW50X2RhdGEuc291cmNlLFxyXG4gICAgICAgICAgc291cmNlaWQ6IHBhcmVudF9kYXRhLnNvdXJjZWlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzKGRhdGEpIHtcclxuICAgICAgICAgIHRoaXNfLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzXy4kYXBwbHkoKTtcclxuICAgICAgICAgIHRoaXNfLiRwYXJlbnQuY2xpY2tudW1vcmRlcm51bXN0YXQoMik7XHJcbiAgICAgICAgICB0aGlzXy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW107XHJcbiAgICAgICAgICB0aGlzXy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbXTtcclxuICAgICAgICAgIGRhdGEuZGF0YS5vcmRlcmluZm8uZnJvbSA9ICdkZXRhaWxzJztcclxuICAgICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnc3VjY2Vzc2Z1bG9yZGVyJywgZGF0YS5kYXRhLm9yZGVyaW5mbyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsKCkge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvLyDpobXpnaLph43mlrDov5vlhaXnu5/orqHmuLLmn5NcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy4kcGFyZW50LlVWc3RhdGlzdGljYWwoJ2xvYW5wcm9kdWN0ZGV0YWlsJyk7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5QVlVWc3RhdGlzdGljYWwoJ2xvYW5wcm9kdWN0ZGV0YWlsJyk7XHJcbiAgICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZWxlY3RNZW5kaWFuLmJ1c2luZXNzaWQpIHtcclxuICAgICAgICB0aGlzLm1kID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuc2VsZWN0TWVuZGlhbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25VbmxvYWQoKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgyKTtcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW107XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VuYW1lID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=