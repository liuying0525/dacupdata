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

var personal = function (_wepy$page) {
  _inherits(personal, _wepy$page);

  function personal() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, personal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = personal.__proto__ || Object.getPrototypeOf(personal)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '预约确认'
    }, _this.data = {
      // 门店信息
      zhi: {},
      url_link: '',
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
      // 产品外部id
      wp: '',
      wpid: '',
      // 产品id
      shuju: '',
      // 门店信息
      md: [],
      disabled: true
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 选择门店
      toMendian: function toMendian(e, a) {
        var this_ = this;
        var json_link = this.$parent.globalData.json_link;
        wx.navigateTo({
          url: 'mendian?e=' + e + '&a=' + a + '&json_link=' + json_link
        });
      },

      // 提交申请
      click_: function click_() {
        if (this.disabled == false) {
          return;
        }
        this.shengqin();
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

  _createClass(personal, [{
    key: 'onLoad',


    // 初始化订单
    value: function onLoad(e, res) {
      console.log(e);
      console.log(res);
      this.PVUVfrom = e.PVUVfrom;
      if (e.PVUVfrom === 'zhizu') {
        this.$parent.PVUVstatistical('rentfillinorderpage');
      }
      var this_ = this;
      this_.zhi = e;
      this_.shuju = res.from.zhi.productlist[0].financialproductid;
      this_.img_url = e.thumbnailimgurl;
      this_.name = e.name;
      this_.finan = e.financialproductName;
      this_.wp = res.from.zhi.productlist[0].financial_product_id;
      this_.wpid = e.asset_model_cde;
      this_.sf = e.downpayment;
      this_.yg = e.monthsuppert;
      this_.cahg = e.carseriesname;
      this_.md = res.from.zhi.productlist[0].businessinfoJO;
      this_.$apply();
    }
    // 申请

  }, {
    key: 'shengqin',
    value: function shengqin() {
      var this_ = this;
      var json_link = this.$parent.globalData.json_link;
      this.json_link = json_link;
      var parent_data = this.$parent.globalData;

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
          source: parent_data.source,
          sourceid: parent_data.sourceid
        },
        success: function success(data) {
          if (data.data.code == "A00005") {
            wx.showToast({
              title: data.data.errmsg,
              icon: 'none'
            });
            return;
          }
          this_.disabled = true;
          this_.$apply();
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
    // 初始化数据

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
  }]);

  return personal;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(personal , 'pages/personal'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLmpzIl0sIm5hbWVzIjpbInBlcnNvbmFsIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ6aGkiLCJ1cmxfbGluayIsImltZ191cmwiLCJuYW1lIiwiZmluYW4iLCJzZiIsInlnIiwidXNlcm5hbWUiLCJzZnoiLCJjYWhnIiwid3AiLCJ3cGlkIiwic2h1anUiLCJtZCIsImRpc2FibGVkIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsInRvTWVuZGlhbiIsImUiLCJhIiwidGhpc18iLCJqc29uX2xpbmsiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImNsaWNrXyIsInNoZW5ncWluIiwiZGV0YWlsIiwidmFsdWUiLCJ1c2Vyc2Z6IiwicmVzIiwiY29uc29sZSIsImxvZyIsIlBWVVZmcm9tIiwiUFZVVnN0YXRpc3RpY2FsIiwiZnJvbSIsInByb2R1Y3RsaXN0IiwiZmluYW5jaWFscHJvZHVjdGlkIiwidGh1bWJuYWlsaW1ndXJsIiwiZmluYW5jaWFscHJvZHVjdE5hbWUiLCJmaW5hbmNpYWxfcHJvZHVjdF9pZCIsImFzc2V0X21vZGVsX2NkZSIsImRvd25wYXltZW50IiwibW9udGhzdXBwZXJ0IiwiY2Fyc2VyaWVzbmFtZSIsImJ1c2luZXNzaW5mb0pPIiwiJGFwcGx5IiwicGFyZW50X2RhdGEiLCJyZXF1ZXN0IiwiYWNjZXNzX3Rva2VuIiwiY2FybW9kZWxpZCIsImRvd25wYXltZW50cmF0aW8iLCJidXNpbmVzc2lkIiwidGVybSIsInRhaWxtb25leSIsImRvd25wYXltZW50cGFyYSIsInByb2R1Y3RwYXJhIiwiZmluYW5jaW5nYW10IiwiZmluYWxwYXltZW50IiwibW9udGhseXN1cHBseSIsInNvdXJjZSIsInNvdXJjZWlkIiwic3VjY2VzcyIsImNvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImVycm1zZyIsImljb24iLCJvcmRlcmluZm8iLCIkbmF2aWdhdGUiLCJmYWlsIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsIlVWc3RhdGlzdGljYWwiLCJzZWxlY3RNZW5kaWFuIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMO0FBQ0FDLFdBQUssRUFGQTtBQUdMQyxnQkFBVSxFQUhMO0FBSUxDLGVBQVMsRUFKSjtBQUtMQyxZQUFNLEVBTEQ7QUFNTDtBQUNBQyxhQUFPLEVBUEY7QUFRTDtBQUNBQyxVQUFJLEVBVEM7QUFVTDtBQUNBQyxVQUFJLEVBWEM7QUFZTDtBQUNBQyxnQkFBVSxFQWJMO0FBY0w7QUFDQUMsV0FBSyxFQWZBO0FBZ0JMQyxZQUFNLEVBaEJEO0FBaUJMO0FBQ0FDLFVBQUksRUFsQkM7QUFtQkxDLFlBQU0sRUFuQkQ7QUFvQkw7QUFDQUMsYUFBTyxFQXJCRjtBQXNCTDtBQUNBQyxVQUFJLEVBdkJDO0FBd0JMQyxnQkFBVTtBQXhCTCxLLFFBMkJQQyxPLEdBQVU7QUFDUkMseUJBQW1CLDZCQUFXO0FBQzVCLGVBQU87QUFDTEMsZ0JBQU07QUFERCxTQUFQO0FBR0QsT0FMTztBQU1SO0FBQ0FDLGVBUFEscUJBT0VDLENBUEYsRUFPS0MsQ0FQTCxFQU9RO0FBQ2QsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsWUFBSUMsWUFBWSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JGLFNBQXhDO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLGVBQWVSLENBQWYsR0FBbUIsS0FBbkIsR0FBMkJDLENBQTNCLEdBQStCLGFBQS9CLEdBQStDRTtBQUR4QyxTQUFkO0FBR0QsT0FiTzs7QUFjUjtBQUNBTSxZQWZRLG9CQWVDO0FBQ1AsWUFBSSxLQUFLZCxRQUFMLElBQWlCLEtBQXJCLEVBQTRCO0FBQzFCO0FBQ0Q7QUFDRCxhQUFLZSxRQUFMO0FBQ0QsT0FwQk87O0FB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UUFBTixHQUFpQixJQUFqQjtBQUNBTyxnQkFBTTRCLE1BQU47QUFDQWxELGVBQUtBLElBQUwsQ0FBVXdFLFNBQVYsQ0FBb0JqQyxJQUFwQixHQUEyQixTQUEzQjtBQUNBakIsZ0JBQU1tRCxTQUFOLENBQWdCLGlCQUFoQixFQUFtQ3pFLEtBQUtBLElBQUwsQ0FBVXdFLFNBQTdDO0FBQ0QsU0EvQlE7QUFnQ1RFLGNBQU0sZ0JBQVc7QUFDZmhELGFBQUcwQyxTQUFILENBQWE7QUFDWEMsbUJBQU8sTUFESTtBQUVYRSxrQkFBTTtBQUZLLFdBQWI7O0FBS0FJLHFCQUFXLFlBQVc7QUFDcEJqRCxlQUFHa0QsU0FBSDtBQUNELFdBRkQsRUFFRyxJQUZIO0FBR0E7QUFDRDtBQTFDUSxPQUFYO0FBNENEO0FBQ0Q7Ozs7NkJBQ1M7QUFDUCxXQUFLcEQsT0FBTCxDQUFhcUQsYUFBYixDQUEyQixtQkFBM0I7QUFDQSxXQUFLckQsT0FBTCxDQUFhYyxlQUFiLENBQTZCLG1CQUE3QjtBQUNBLFdBQUtwQyxRQUFMLEdBQWdCLEtBQUtzQixPQUFMLENBQWFDLFVBQWIsQ0FBd0J2QixRQUF4QztBQUNBLFVBQUksS0FBS3NCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QnFELGFBQXhCLENBQXNDdEIsVUFBMUMsRUFBc0Q7QUFDcEQsYUFBSzFDLEVBQUwsR0FBVSxLQUFLVSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JxRCxhQUFsQztBQUNEO0FBQ0Y7Ozs7RUFoSm1DQyxlQUFLQyxJOztrQkFBdEJuRixRIiwiZmlsZSI6InBlcnNvbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwZXJzb25hbCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOe6puehruiupCdcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgIHpoaToge30sXHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICBpbWdfdXJsOiAnJyxcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgLy8g5Lqn5ZOB5ZCNXHJcbiAgICBmaW5hbjogJycsXHJcbiAgICAvLyDpppbku5hcclxuICAgIHNmOiAnJyxcclxuICAgIC8vIOaciOS+m1xyXG4gICAgeWc6ICcnLFxyXG4gICAgLy8g5aeT5ZCNXHJcbiAgICB1c2VybmFtZTogJycsXHJcbiAgICAvLyDouqvku73or4Hlj7dcclxuICAgIHNmejogJycsXHJcbiAgICBjYWhnOiAnJyxcclxuICAgIC8vIOS6p+WTgeWklumDqGlkXHJcbiAgICB3cDogJycsXHJcbiAgICB3cGlkOiAnJyxcclxuICAgIC8vIOS6p+WTgWlkXHJcbiAgICBzaHVqdTogJycsXHJcbiAgICAvLyDpl6jlupfkv6Hmga9cclxuICAgIG1kOiBbXSxcclxuICAgIGRpc2FibGVkOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4J1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIC8vIOmAieaLqemXqOW6l1xyXG4gICAgdG9NZW5kaWFuKGUsIGEpIHtcclxuICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnbWVuZGlhbj9lPScgKyBlICsgJyZhPScgKyBhICsgJyZqc29uX2xpbms9JyArIGpzb25fbGlua1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmj5DkuqTnlLPor7dcclxuICAgIGNsaWNrXygpIHtcclxuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zaGVuZ3FpbigpO1xyXG4gICAgfSxcclxuICAgIC8vIOi+k+WFpeWnk+WQjVxyXG4gICAgdXNlcm5hbWUoZSkge1xyXG4gICAgICB0aGlzLnVzZXJuYW1lID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICB9LFxyXG4gICAgLy8g6L6T5YWl6Lqr5Lu96K+B5Y+3XHJcbiAgICB1c2Vyc2Z6KGUpIHtcclxuICAgICAgdGhpcy5zZnogPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyDliJ3lp4vljJborqLljZVcclxuICBvbkxvYWQoZSwgcmVzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgdGhpcy5QVlVWZnJvbSA9IGUuUFZVVmZyb207XHJcbiAgICBpZiAoZS5QVlVWZnJvbSA9PT0gJ3poaXp1Jykge1xyXG4gICAgICB0aGlzLiRwYXJlbnQuUFZVVnN0YXRpc3RpY2FsKCdyZW50ZmlsbGlub3JkZXJwYWdlJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgdGhpc18uemhpID0gZTtcclxuICAgIHRoaXNfLnNodWp1ID0gcmVzLmZyb20uemhpLnByb2R1Y3RsaXN0WzBdLmZpbmFuY2lhbHByb2R1Y3RpZDtcclxuICAgIHRoaXNfLmltZ191cmwgPSBlLnRodW1ibmFpbGltZ3VybDtcclxuICAgIHRoaXNfLm5hbWUgPSBlLm5hbWU7XHJcbiAgICB0aGlzXy5maW5hbiA9IGUuZmluYW5jaWFscHJvZHVjdE5hbWU7XHJcbiAgICB0aGlzXy53cCA9IHJlcy5mcm9tLnpoaS5wcm9kdWN0bGlzdFswXS5maW5hbmNpYWxfcHJvZHVjdF9pZDtcclxuICAgIHRoaXNfLndwaWQgPSBlLmFzc2V0X21vZGVsX2NkZTtcclxuICAgIHRoaXNfLnNmID0gZS5kb3ducGF5bWVudDtcclxuICAgIHRoaXNfLnlnID0gZS5tb250aHN1cHBlcnQ7XHJcbiAgICB0aGlzXy5jYWhnID0gZS5jYXJzZXJpZXNuYW1lO1xyXG4gICAgdGhpc18ubWQgPSByZXMuZnJvbS56aGkucHJvZHVjdGxpc3RbMF0uYnVzaW5lc3NpbmZvSk87XHJcbiAgICB0aGlzXy4kYXBwbHkoKTtcclxuICB9XHJcbiAgLy8g55Sz6K+3XHJcbiAgc2hlbmdxaW4oKSB7XHJcbiAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgIHRoaXMuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgbGV0IHBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDpcclxuICAgICAgICBwYXJlbnRfZGF0YS5qc29uX2xpbmsgK1xyXG4gICAgICAgICcvYXBpL3d4YXBwL3Jlc2VydmF0aW9ub3JkZXIvY3JlYXRlb3JkZXI/YWNjZXNzX3Rva2VuPScgK1xyXG4gICAgICAgIHBhcmVudF9kYXRhLmFjY2Vzc190b2tlbixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGNhcm1vZGVsaWQ6IHRoaXNfLnpoaS5jYXJtb2RlbGlkLFxyXG4gICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogdGhpc18uc2h1anUsXHJcbiAgICAgICAgZG93bnBheW1lbnRyYXRpbzogMjAsXHJcbiAgICAgICAgYnVzaW5lc3NpZDogdGhpc18ubWQuYnVzaW5lc3NpZCxcclxuICAgICAgICB0ZXJtOiAzNixcclxuICAgICAgICB0YWlsbW9uZXk6IDAsXHJcbiAgICAgICAgZG93bnBheW1lbnRwYXJhOiB0aGlzXy56aGkuZG93bnBheW1lbnQgLyAxMDAwMCxcclxuICAgICAgICBwcm9kdWN0cGFyYTogdGhpc18uemhpLmZpbmFuY2luZ2FtdCxcclxuICAgICAgICBmaW5hbHBheW1lbnQ6IDAsXHJcbiAgICAgICAgbW9udGhseXN1cHBseTogdGhpc18uemhpLm1vbnRoc3VwcGVydCxcclxuICAgICAgICBzb3VyY2U6IHBhcmVudF9kYXRhLnNvdXJjZSxcclxuICAgICAgICBzb3VyY2VpZDogcGFyZW50X2RhdGEuc291cmNlaWRcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmKGRhdGEuZGF0YS5jb2RlPT1cIkEwMDAwNVwiKXtcclxuICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogZGF0YS5kYXRhLmVycm1zZyxcclxuICAgICAgICAgIGljb246ICdub25lJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzXy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgZGF0YS5kYXRhLm9yZGVyaW5mby5mcm9tID0gJ2RldGFpbHMnO1xyXG4gICAgICAgIHRoaXNfLiRuYXZpZ2F0ZSgnc3VjY2Vzc2Z1bG9yZGVyJywgZGF0YS5kYXRhLm9yZGVyaW5mbyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vIOWIneWni+WMluaVsOaNrlxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMuJHBhcmVudC5VVnN0YXRpc3RpY2FsKCdsb2FucHJvZHVjdGRldGFpbCcpO1xyXG4gICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnbG9hbnByb2R1Y3RkZXRhaWwnKTtcclxuICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgIGlmICh0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5zZWxlY3RNZW5kaWFuLmJ1c2luZXNzaWQpIHtcclxuICAgICAgdGhpcy5tZCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlbGVjdE1lbmRpYW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==