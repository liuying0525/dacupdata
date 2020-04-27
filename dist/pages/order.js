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
      disabled: true,
      url_link: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 提交申请
      click_: function click_() {
        var this_ = this;
        var res = this_.zhi;
        var parent_data = this_.$parent.globalData;
        if (this_.username != '' && this_.sfz != '') {
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
          if (this_.disabled == false) {
            return;
          }
          this_.disabled = false;
          if (leo) {
            // 创建直租订单
            wx.request({
              url: parent_data.json_link + '/api/wxapp/reservationorder/createorder?access_token=' + parent_data.access_token,
              data: {
                carmodelid: res.carmodelid,
                financialproductid: res.financialproductid,
                downpaymentratio: res.downpaymentratio,
                term: res.term,
                businessid: res.businessid,
                tailmoney: res.tailmoney,
                downpaymentpara: res.downpaymentpara,
                productpara: res.productpara,
                finalpayment: res.finalpayment,
                monthlysupply: res.monthlysupply,
                username: this_.username,
                idnumber: this_.sfz
              },
              success: function success(data) {
                this_.disabled = false;
                data.data.orderinfo.PVUVfrom = this_.from;
                setTimeout(function () {
                  this_.$redirect('successfulorder', data.data.orderinfo);
                });
              },
              fail: function fail() {
                wx.showToast({
                  title: '网络异常',
                  icon: 'none'
                });
                setTimeout(function () {
                  wx.hideToast();
                  this_.disabled = true;
                }, 2000);
                return;
              }
            });
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

    // 初始化数据
    value: function onLoad(res) {
      this.PVUVfrom = res.PVUVfrom;
      if (res.PVUVfrom === 'zhizu') {
        this.$parent.PVUVstatistical('rentfillinorderpage');
      }
      var this_ = this;
      this_.zhi = res;
      this_.img_url = res.che_img;
      this_.name = res.name;
      this_.finan = res.financialproductName;
      this_.sf = res.sf;
      this_.yg = res.yg;
      this_.cahg = res.md_cahngpin;
      this_.$apply();
    }

    // 统计

  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.$parent.UVstatistical('fillinorderpage');
    }
  }]);

  return order;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(order , 'pages/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIm9yZGVyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ6aGkiLCJpbWdfdXJsIiwibmFtZSIsImZpbmFuIiwic2YiLCJ5ZyIsInVzZXJuYW1lIiwic2Z6IiwiY2FoZyIsImRpc2FibGVkIiwidXJsX2xpbmsiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiY2xpY2tfIiwidGhpc18iLCJyZXMiLCJwYXJlbnRfZGF0YSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiSWRlbnRpdHlDb2RlVmFsaWQiLCJjb2RlIiwiY2l0eSIsInRpcCIsInBhc3MiLCJ0ZXN0Iiwic3Vic3RyIiwibGVuZ3RoIiwic3BsaXQiLCJmYWN0b3IiLCJwYXJpdHkiLCJzdW0iLCJhaSIsIndpIiwiaSIsImxhc3QiLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiYyIsImxlbyIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2xpbmsiLCJhY2Nlc3NfdG9rZW4iLCJjYXJtb2RlbGlkIiwiZmluYW5jaWFscHJvZHVjdGlkIiwiZG93bnBheW1lbnRyYXRpbyIsInRlcm0iLCJidXNpbmVzc2lkIiwidGFpbG1vbmV5IiwiZG93bnBheW1lbnRwYXJhIiwicHJvZHVjdHBhcmEiLCJmaW5hbHBheW1lbnQiLCJtb250aGx5c3VwcGx5IiwiaWRudW1iZXIiLCJzdWNjZXNzIiwib3JkZXJpbmZvIiwiUFZVVmZyb20iLCJmcm9tIiwic2V0VGltZW91dCIsIiRyZWRpcmVjdCIsImZhaWwiLCJoaWRlVG9hc3QiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJ1c2Vyc2Z6IiwiUFZVVnN0YXRpc3RpY2FsIiwiY2hlX2ltZyIsImZpbmFuY2lhbHByb2R1Y3ROYW1lIiwibWRfY2FobmdwaW4iLCIkYXBwbHkiLCJVVnN0YXRpc3RpY2FsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztB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O0FBS0Q7QUFDRixPQXpLTzs7QUEwS1I7QUFDQWxDLGNBM0tRLG9CQTJLQzRELENBM0tELEVBMktJO0FBQ1YsYUFBSzVELFFBQUwsR0FBZ0I0RCxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0QsT0E3S087O0FBOEtSO0FBQ0FDLGFBL0tRLG1CQStLQUgsQ0EvS0EsRUErS0c7QUFDVCxhQUFLM0QsR0FBTCxHQUFXMkQsRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNEO0FBakxPLEs7Ozs7OztBQW1MVjsyQkFDT3BELEcsRUFBSztBQUNWLFdBQUs0QyxRQUFMLEdBQWdCNUMsSUFBSTRDLFFBQXBCO0FBQ0EsVUFBSTVDLElBQUk0QyxRQUFKLEtBQWlCLE9BQXJCLEVBQThCO0FBQzVCLGFBQUsxQyxPQUFMLENBQWFvRCxlQUFiLENBQTZCLHFCQUE3QjtBQUNEO0FBQ0QsVUFBSXZELFFBQVEsSUFBWjtBQUNBQSxZQUFNZixHQUFOLEdBQVlnQixHQUFaO0FBQ0FELFlBQU1kLE9BQU4sR0FBZ0JlLElBQUl1RCxPQUFwQjtBQUNBeEQsWUFBTWIsSUFBTixHQUFhYyxJQUFJZCxJQUFqQjtBQUNBYSxZQUFNWixLQUFOLEdBQWNhLElBQUl3RCxvQkFBbEI7QUFDQXpELFlBQU1YLEVBQU4sR0FBV1ksSUFBSVosRUFBZjtBQUNBVyxZQUFNVixFQUFOLEdBQVdXLElBQUlYLEVBQWY7QUFDQVUsWUFBTVAsSUFBTixHQUFhUSxJQUFJeUQsV0FBakI7QUFDQTFELFlBQU0yRCxNQUFOO0FBQ0Q7O0FBRUQ7Ozs7NkJBQ1M7QUFDUCxXQUFLaEUsUUFBTCxHQUFnQixLQUFLUSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JULFFBQXhDO0FBQ0EsV0FBS1EsT0FBTCxDQUFheUQsYUFBYixDQUEyQixpQkFBM0I7QUFDRDs7OztFQWpPZ0NDLGVBQUtDLEk7O2tCQUFuQmpGLEsiLCJmaWxlIjoib3JkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBvcmRlciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOe6puehruiupCdcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgIHpoaToge30sXHJcbiAgICAvLyDlm77niYflnLDlnYBcclxuICAgIGltZ191cmw6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICAvLyDkuqflk4HlkI1cclxuICAgIGZpbmFuOiAnJyxcclxuICAgIC8vIOmmluS7mFxyXG4gICAgc2Y6ICcnLFxyXG4gICAgLy8g5pyI5L6bXHJcbiAgICB5ZzogJycsXHJcbiAgICAvLyDlp5PlkI1cclxuICAgIHVzZXJuYW1lOiAnJyxcclxuICAgIC8vIOi6q+S7veivgeWPt1xyXG4gICAgc2Z6OiAnJyxcclxuICAgIGNhaGc6ICcnLFxyXG4gICAgZGlzYWJsZWQ6IHRydWUsXHJcbiAgICB1cmxfbGluazonJ1xyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDmj5DkuqTnlLPor7dcclxuICAgIGNsaWNrXygpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IHJlcyA9IHRoaXNfLnpoaTtcclxuICAgICAgbGV0IHBhcmVudF9kYXRhID0gdGhpc18uJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICBpZiAodGhpc18udXNlcm5hbWUgIT0gJycgJiYgdGhpc18uc2Z6ICE9ICcnKSB7XHJcbiAgICAgICAgZnVuY3Rpb24gSWRlbnRpdHlDb2RlVmFsaWQoY29kZSkge1xyXG4gICAgICAgICAgdmFyIGNpdHkgPSB7XHJcbiAgICAgICAgICAgIDExOiAn5YyX5LqsJyxcclxuICAgICAgICAgICAgMTI6ICflpKnmtKUnLFxyXG4gICAgICAgICAgICAxMzogJ+ays+WMlycsXHJcbiAgICAgICAgICAgIDE0OiAn5bGx6KW/JyxcclxuICAgICAgICAgICAgMTU6ICflhoXokpnlj6QnLFxyXG4gICAgICAgICAgICAyMTogJ+i+veWugScsXHJcbiAgICAgICAgICAgIDIyOiAn5ZCJ5p6XJyxcclxuICAgICAgICAgICAgMjM6ICfpu5HpvpnmsZ8gJyxcclxuICAgICAgICAgICAgMzE6ICfkuIrmtbcnLFxyXG4gICAgICAgICAgICAzMjogJ+axn+iLjycsXHJcbiAgICAgICAgICAgIDMzOiAn5rWZ5rGfJyxcclxuICAgICAgICAgICAgMzQ6ICflronlvr0nLFxyXG4gICAgICAgICAgICAzNTogJ+emj+W7uicsXHJcbiAgICAgICAgICAgIDM2OiAn5rGf6KW/JyxcclxuICAgICAgICAgICAgMzc6ICflsbHkuJwnLFxyXG4gICAgICAgICAgICA0MTogJ+ays+WNlycsXHJcbiAgICAgICAgICAgIDQyOiAn5rmW5YyXICcsXHJcbiAgICAgICAgICAgIDQzOiAn5rmW5Y2XJyxcclxuICAgICAgICAgICAgNDQ6ICflub/kuJwnLFxyXG4gICAgICAgICAgICA0NTogJ+W5v+ilvycsXHJcbiAgICAgICAgICAgIDQ2OiAn5rW35Y2XJyxcclxuICAgICAgICAgICAgNTA6ICfph43luoYnLFxyXG4gICAgICAgICAgICA1MTogJ+Wbm+W3nScsXHJcbiAgICAgICAgICAgIDUyOiAn6LS15beeJyxcclxuICAgICAgICAgICAgNTM6ICfkupHljZcnLFxyXG4gICAgICAgICAgICA1NDogJ+ilv+iXjyAnLFxyXG4gICAgICAgICAgICA2MTogJ+mZleilvycsXHJcbiAgICAgICAgICAgIDYyOiAn55SY6IKDJyxcclxuICAgICAgICAgICAgNjM6ICfpnZLmtbcnLFxyXG4gICAgICAgICAgICA2NDogJ+WugeWkjycsXHJcbiAgICAgICAgICAgIDY1OiAn5paw55aGJyxcclxuICAgICAgICAgICAgNzE6ICflj7Dmub4nLFxyXG4gICAgICAgICAgICA4MTogJ+mmmea4rycsXHJcbiAgICAgICAgICAgIDgyOiAn5r6z6ZeoJyxcclxuICAgICAgICAgICAgOTE6ICflm73lpJYgJ1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHZhciB0aXAgPSAnJztcclxuICAgICAgICAgIHZhciBwYXNzID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICFjb2RlIHx8XHJcbiAgICAgICAgICAgICEvXlxcZHs2fSgxOHwxOXwyMCk/XFxkezJ9KDBbMS05XXwxWzAxMl0pKDBbMS05XXxbMTJdXFxkfDNbMDFdKVxcZHszfShcXGR8WCkkL2kudGVzdChcclxuICAgICAgICAgICAgICBjb2RlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICkge1xyXG4gICAgICAgICAgICB0aXAgPSAn6Lqr5Lu96K+B5Y+35qC85byP6ZSZ6K+vJztcclxuICAgICAgICAgICAgcGFzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICghY2l0eVtjb2RlLnN1YnN0cigwLCAyKV0pIHtcclxuICAgICAgICAgICAgdGlwID0gJ+i6q+S7veivgeWcsOWdgOe8lueggemUmeivryc7XHJcbiAgICAgICAgICAgIHBhc3MgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vMTjkvY3ouqvku73or4HpnIDopoHpqozor4HmnIDlkI7kuIDkvY3moKHpqozkvY1cclxuICAgICAgICAgICAgaWYgKGNvZGUubGVuZ3RoID09IDE4KSB7XHJcbiAgICAgICAgICAgICAgY29kZSA9IGNvZGUuc3BsaXQoJycpO1xyXG4gICAgICAgICAgICAgIC8v4oiRKGFpw5dXaSkobW9kIDExKVxyXG4gICAgICAgICAgICAgIC8v5Yqg5p2D5Zug5a2QXHJcbiAgICAgICAgICAgICAgdmFyIGZhY3RvciA9IFtcclxuICAgICAgICAgICAgICAgIDcsXHJcbiAgICAgICAgICAgICAgICA5LFxyXG4gICAgICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICAgICAgOCxcclxuICAgICAgICAgICAgICAgIDQsXHJcbiAgICAgICAgICAgICAgICAyLFxyXG4gICAgICAgICAgICAgICAgMSxcclxuICAgICAgICAgICAgICAgIDYsXHJcbiAgICAgICAgICAgICAgICAzLFxyXG4gICAgICAgICAgICAgICAgNyxcclxuICAgICAgICAgICAgICAgIDksXHJcbiAgICAgICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgICAgIDUsXHJcbiAgICAgICAgICAgICAgICA4LFxyXG4gICAgICAgICAgICAgICAgNCxcclxuICAgICAgICAgICAgICAgIDJcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgIC8v5qCh6aqM5L2NXHJcbiAgICAgICAgICAgICAgdmFyIHBhcml0eSA9IFsxLCAwLCAnWCcsIDksIDgsIDcsIDYsIDUsIDQsIDMsIDJdO1xyXG4gICAgICAgICAgICAgIHZhciBzdW0gPSAwO1xyXG4gICAgICAgICAgICAgIHZhciBhaSA9IDA7XHJcbiAgICAgICAgICAgICAgdmFyIHdpID0gMDtcclxuICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE3OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGFpID0gY29kZVtpXTtcclxuICAgICAgICAgICAgICAgIHdpID0gZmFjdG9yW2ldO1xyXG4gICAgICAgICAgICAgICAgc3VtICs9IGFpICogd2k7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciBsYXN0ID0gcGFyaXR5W3N1bSAlIDExXTtcclxuICAgICAgICAgICAgICBpZiAocGFyaXR5W3N1bSAlIDExXSAhPSBjb2RlWzE3XSkge1xyXG4gICAgICAgICAgICAgICAgdGlwID0gJ+i6q+S7veivgeagoemqjOS9jemUmeivryc7XHJcbiAgICAgICAgICAgICAgICBwYXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXBhc3MpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogdGlwLFxyXG4gICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBwYXNzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYyA9IHRoaXNfLnNmejtcclxuICAgICAgICB2YXIgbGVvID0gSWRlbnRpdHlDb2RlVmFsaWQoYyk7XHJcbiAgICAgICAgaWYgKHRoaXNfLmRpc2FibGVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgdGhpc18uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChsZW8pIHtcclxuICAgICAgICAgICAgLy8g5Yib5bu655u056ef6K6i5Y2VXHJcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgIHVybDpcclxuICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmpzb25fbGluayArXHJcbiAgICAgICAgICAgICAgICAnL2FwaS93eGFwcC9yZXNlcnZhdGlvbm9yZGVyL2NyZWF0ZW9yZGVyP2FjY2Vzc190b2tlbj0nICtcclxuICAgICAgICAgICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjYXJtb2RlbGlkOiByZXMuY2FybW9kZWxpZCxcclxuICAgICAgICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogcmVzLmZpbmFuY2lhbHByb2R1Y3RpZCxcclxuICAgICAgICAgICAgICAgIGRvd25wYXltZW50cmF0aW86IHJlcy5kb3ducGF5bWVudHJhdGlvLFxyXG4gICAgICAgICAgICAgICAgdGVybTogcmVzLnRlcm0sXHJcbiAgICAgICAgICAgICAgICBidXNpbmVzc2lkOiByZXMuYnVzaW5lc3NpZCxcclxuICAgICAgICAgICAgICAgIHRhaWxtb25leTogcmVzLnRhaWxtb25leSxcclxuICAgICAgICAgICAgICAgIGRvd25wYXltZW50cGFyYTogcmVzLmRvd25wYXltZW50cGFyYSxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RwYXJhOiByZXMucHJvZHVjdHBhcmEsXHJcbiAgICAgICAgICAgICAgICBmaW5hbHBheW1lbnQ6IHJlcy5maW5hbHBheW1lbnQsXHJcbiAgICAgICAgICAgICAgICBtb250aGx5c3VwcGx5OiByZXMubW9udGhseXN1cHBseSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzXy51c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIGlkbnVtYmVyOiB0aGlzXy5zZnpcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpc18uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRhdGEuZGF0YS5vcmRlcmluZm8uUFZVVmZyb20gPSB0aGlzXy5mcm9tO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpc18uJHJlZGlyZWN0KCdzdWNjZXNzZnVsb3JkZXInLCBkYXRhLmRhdGEub3JkZXJpbmZvKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZmFpbCgpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn572R57uc5byC5bi4JyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgICAgICAgICAgICB0aGlzXy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+ivt+WujOWWhOS/oeaBrycsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g6L6T5YWl5aeT5ZCNXHJcbiAgICB1c2VybmFtZShlKSB7XHJcbiAgICAgIHRoaXMudXNlcm5hbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyDovpPlhaXouqvku73or4Hlj7dcclxuICAgIHVzZXJzZnooZSkge1xyXG4gICAgICB0aGlzLnNmeiA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8g5Yid5aeL5YyW5pWw5o2uXHJcbiAgb25Mb2FkKHJlcykge1xyXG4gICAgdGhpcy5QVlVWZnJvbSA9IHJlcy5QVlVWZnJvbTtcclxuICAgIGlmIChyZXMuUFZVVmZyb20gPT09ICd6aGl6dScpIHtcclxuICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgncmVudGZpbGxpbm9yZGVycGFnZScpO1xyXG4gICAgfVxyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIHRoaXNfLnpoaSA9IHJlcztcclxuICAgIHRoaXNfLmltZ191cmwgPSByZXMuY2hlX2ltZztcclxuICAgIHRoaXNfLm5hbWUgPSByZXMubmFtZTtcclxuICAgIHRoaXNfLmZpbmFuID0gcmVzLmZpbmFuY2lhbHByb2R1Y3ROYW1lO1xyXG4gICAgdGhpc18uc2YgPSByZXMuc2Y7XHJcbiAgICB0aGlzXy55ZyA9IHJlcy55ZztcclxuICAgIHRoaXNfLmNhaGcgPSByZXMubWRfY2FobmdwaW47XHJcbiAgICB0aGlzXy4kYXBwbHkoKTtcclxuICB9XHJcblxyXG4gIC8vIOe7n+iuoVxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCdmaWxsaW5vcmRlcnBhZ2UnKTtcclxuICB9XHJcbn1cclxuIl19