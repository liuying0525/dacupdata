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

var choose = function (_wepy$page) {
  _inherits(choose, _wepy$page);

  function choose() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, choose);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = choose.__proto__ || Object.getPrototypeOf(choose)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '帮您贷款'
    }, _this.data = {
      // 户口所在地
      _numa: 0,
      // 住房状态
      _numc: 0,
      // 月收入
      _numd: 0,
      // 选择车型input文本
      cx_name: '点击选择车型',
      // 城市名
      cityname: '',
      // 车型id
      carmodelid: '',
      // 户口
      nativeplace: '0',
      // 住房状态
      householdtype: '1',
      // 月收入
      monthlysupplysection: 1,
      // 普通选择器列表设置,及初始化
      countryIndex: 1,
      // 城市
      country: '选择城市',
      city: []
    }, _this.methods = {
      // 分享
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/choose'
        };
      },
      // 城市下拉框数据
      changeCountry: function changeCountry(e) {
        this.country = this.city[e.detail.value];
      },

      // 选择车型
      csxds_btn: function csxds_btn() {
        this.$navigate('brand');
      },

      // 户口所在地
      clickNuma: function clickNuma(e) {
        this._numa = e.target.dataset.numa;
        this.nativeplace = e.target.dataset.ide;
      },

      // 住房状态
      clickNumc: function clickNumc(e) {
        this._numc = e.target.dataset.numc;
        this.householdtype = e.target.dataset.ide;
      },

      // 月收入
      clickNumd: function clickNumd(e) {
        this._numd = e.target.dataset.numd;
        this.monthlysupplysection = e.target.dataset.ide;
      },

      // 提交申请
      submit_tj: function submit_tj() {
        var this_ = this;
        var carmodelid = this.carmodelid;
        var cityname = this.country;
        var nativeplace = this.nativeplace;
        var householdtype = this.householdtype;
        var monthlysupplysection = this.monthlysupplysection;
        // 判断条件
        if (!carmodelid || cityname == '选择城市') {
          wx.showToast({
            title: '信息填写未完成',
            icon: 'none'
          });
        } else {
          // borrow
          this_.$redirect('borrow', {
            carmodelid: carmodelid,
            cityname: cityname,
            nativeplace: nativeplace,
            householdtype: householdtype,
            monthlysupplysection: monthlysupplysection
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(choose, [{
    key: 'chengshi',

    // 城市列表接口
    value: function chengshi() {
      var this_ = this;
      var json_link = this_.$parent.globalData.json_link;
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/appointment/businessprocity',
        // 后台返回值
        success: function success(data) {
          var zhi = data.data.data;
          var length = data.data.data.length - 1;
          var City = [];
          // city push添加数据
          for (var i = 0; i < length; i++) {
            City.push(zhi[i].state_name);
          }
          // 赋值
          this_.city = City;
          // 给数据进行绑定
          this_.$apply();
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(res) {
      // 移除缓存中的车型数据
      wx.removeStorageSync('chexing');
      var parent_data = this.$parent.globalData;
      this.chengshi();
      this.$apply();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      // 统计
      this.$parent.PVUVstatistical('helpyouload');
      // 从缓存中取出carmodelid和cx_name
      if (wx.getStorageSync('chexing')) {
        this.carmodelid = wx.getStorageSync('chexing').carmodelid;
        this.cx_name = wx.getStorageSync('chexing').name;
      }
    }
  }, {
    key: 'onUnload',
    value: function onUnload() {
      // 移除缓存中的车型数据
      wx.removeStorageSync('chexing');
    }
  }]);

  return choose;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(choose , 'pages/choose'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNob29zZS5qcyJdLCJuYW1lcyI6WyJjaG9vc2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIl9udW1hIiwiX251bWMiLCJfbnVtZCIsImN4X25hbWUiLCJjaXR5bmFtZSIsImNhcm1vZGVsaWQiLCJuYXRpdmVwbGFjZSIsImhvdXNlaG9sZHR5cGUiLCJtb250aGx5c3VwcGx5c2VjdGlvbiIsImNvdW50cnlJbmRleCIsImNvdW50cnkiLCJjaXR5IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImNoYW5nZUNvdW50cnkiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjc3hkc19idG4iLCIkbmF2aWdhdGUiLCJjbGlja051bWEiLCJ0YXJnZXQiLCJkYXRhc2V0IiwibnVtYSIsImlkZSIsImNsaWNrTnVtYyIsIm51bWMiLCJjbGlja051bWQiLCJudW1kIiwic3VibWl0X3RqIiwidGhpc18iLCJ3eCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsIiRyZWRpcmVjdCIsImpzb25fbGluayIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicmVxdWVzdCIsInVybCIsInN1Y2Nlc3MiLCJ6aGkiLCJsZW5ndGgiLCJDaXR5IiwiaSIsInB1c2giLCJzdGF0ZV9uYW1lIiwiJGFwcGx5IiwicmVzIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJwYXJlbnRfZGF0YSIsImNoZW5nc2hpIiwiUFZVVnN0YXRpc3RpY2FsIiwiZ2V0U3RvcmFnZVN5bmMiLCJuYW1lIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMO0FBQ0FDLGFBQU8sQ0FGRjtBQUdMO0FBQ0FDLGFBQU8sQ0FKRjtBQUtMO0FBQ0FDLGFBQU8sQ0FORjtBQU9MO0FBQ0FDLGVBQVMsUUFSSjtB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RSxJQUFMLENBQVVKLElBQUlHLENBQUosRUFBT0UsVUFBakI7QUFDRDtBQUNEO0FBQ0FqQixnQkFBTXBCLElBQU4sR0FBYWtDLElBQWI7QUFDQTtBQUNBZCxnQkFBTWtCLE1BQU47QUFDRDtBQWhCUSxPQUFYO0FBa0JEOzs7MkJBQ01DLEcsRUFBSztBQUNWO0FBQ0FsQixTQUFHbUIsaUJBQUgsQ0FBcUIsU0FBckI7QUFDQSxVQUFJQyxjQUFjLEtBQUtkLE9BQUwsQ0FBYUMsVUFBL0I7QUFDQSxXQUFLYyxRQUFMO0FBQ0EsV0FBS0osTUFBTDtBQUNEOzs7NkJBQ1E7QUFDUDtBQUNBLFdBQUtYLE9BQUwsQ0FBYWdCLGVBQWIsQ0FBNkIsYUFBN0I7QUFDQTtBQUNBLFVBQUl0QixHQUFHdUIsY0FBSCxDQUFrQixTQUFsQixDQUFKLEVBQWtDO0FBQ2hDLGFBQUtsRCxVQUFMLEdBQWtCMkIsR0FBR3VCLGNBQUgsQ0FBa0IsU0FBbEIsRUFBNkJsRCxVQUEvQztBQUNBLGFBQUtGLE9BQUwsR0FBZTZCLEdBQUd1QixjQUFILENBQWtCLFNBQWxCLEVBQTZCQyxJQUE1QztBQUNEO0FBQ0Y7OzsrQkFDVTtBQUNUO0FBQ0F4QixTQUFHbUIsaUJBQUgsQ0FBcUIsU0FBckI7QUFDRDs7OztFQWpJaUNNLGVBQUtDLEk7O2tCQUFwQjlELE0iLCJmaWxlIjoiY2hvb3NlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNob29zZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfluK7mgqjotLfmrL4nXHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOaIt+WPo+aJgOWcqOWcsFxyXG4gICAgICBfbnVtYTogMCxcclxuICAgICAgLy8g5L2P5oi/54q25oCBXHJcbiAgICAgIF9udW1jOiAwLFxyXG4gICAgICAvLyDmnIjmlLblhaVcclxuICAgICAgX251bWQ6IDAsXHJcbiAgICAgIC8vIOmAieaLqei9puWei2lucHV05paH5pysXHJcbiAgICAgIGN4X25hbWU6ICfngrnlh7vpgInmi6novablnosnLFxyXG4gICAgICAvLyDln47luILlkI1cclxuICAgICAgY2l0eW5hbWU6ICcnLFxyXG4gICAgICAvLyDovablnotpZFxyXG4gICAgICBjYXJtb2RlbGlkOiAnJyxcclxuICAgICAgLy8g5oi35Y+jXHJcbiAgICAgIG5hdGl2ZXBsYWNlOiAnMCcsXHJcbiAgICAgIC8vIOS9j+aIv+eKtuaAgVxyXG4gICAgICBob3VzZWhvbGR0eXBlOiAnMScsXHJcbiAgICAgIC8vIOaciOaUtuWFpVxyXG4gICAgICBtb250aGx5c3VwcGx5c2VjdGlvbjogMSxcclxuICAgICAgLy8g5pmu6YCa6YCJ5oup5Zmo5YiX6KGo6K6+572uLOWPiuWIneWni+WMllxyXG4gICAgICBjb3VudHJ5SW5kZXg6IDEsXHJcbiAgICAgIC8vIOWfjuW4glxyXG4gICAgICBjb3VudHJ5OiAn6YCJ5oup5Z+O5biCJyxcclxuICAgICAgY2l0eTogW11cclxuICAgIH07XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5YiG5LqrXHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvY2hvb3NlJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWfjuW4guS4i+aLieahhuaVsOaNrlxyXG4gICAgICBjaGFuZ2VDb3VudHJ5KGUpIHtcclxuICAgICAgICB0aGlzLmNvdW50cnkgPSB0aGlzLmNpdHlbZS5kZXRhaWwudmFsdWVdO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDpgInmi6novablnotcclxuICAgICAgY3N4ZHNfYnRuKCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCdicmFuZCcpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmiLflj6PmiYDlnKjlnLBcclxuICAgICAgY2xpY2tOdW1hKGUpIHtcclxuICAgICAgICB0aGlzLl9udW1hID0gZS50YXJnZXQuZGF0YXNldC5udW1hO1xyXG4gICAgICAgIHRoaXMubmF0aXZlcGxhY2UgPSBlLnRhcmdldC5kYXRhc2V0LmlkZTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5L2P5oi/54q25oCBXHJcbiAgICAgIGNsaWNrTnVtYyhlKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtYyA9IGUudGFyZ2V0LmRhdGFzZXQubnVtYztcclxuICAgICAgICB0aGlzLmhvdXNlaG9sZHR5cGUgPSBlLnRhcmdldC5kYXRhc2V0LmlkZTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5pyI5pS25YWlXHJcbiAgICAgIGNsaWNrTnVtZChlKSB7XHJcbiAgICAgICAgdGhpcy5fbnVtZCA9IGUudGFyZ2V0LmRhdGFzZXQubnVtZDtcclxuICAgICAgICB0aGlzLm1vbnRobHlzdXBwbHlzZWN0aW9uID0gZS50YXJnZXQuZGF0YXNldC5pZGU7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOaPkOS6pOeUs+ivt1xyXG4gICAgICBzdWJtaXRfdGooKSB7XHJcbiAgICAgICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgICAgICBsZXQgY2FybW9kZWxpZCA9IHRoaXMuY2FybW9kZWxpZDtcclxuICAgICAgICBsZXQgY2l0eW5hbWUgPSB0aGlzLmNvdW50cnk7XHJcbiAgICAgICAgbGV0IG5hdGl2ZXBsYWNlID0gdGhpcy5uYXRpdmVwbGFjZTtcclxuICAgICAgICBsZXQgaG91c2Vob2xkdHlwZSA9IHRoaXMuaG91c2Vob2xkdHlwZTtcclxuICAgICAgICBsZXQgbW9udGhseXN1cHBseXNlY3Rpb24gPSB0aGlzLm1vbnRobHlzdXBwbHlzZWN0aW9uO1xyXG4gICAgICAgIC8vIOWIpOaWreadoeS7tlxyXG4gICAgICAgIGlmICghY2FybW9kZWxpZCB8fCBjaXR5bmFtZSA9PSAn6YCJ5oup5Z+O5biCJykge1xyXG4gICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgdGl0bGU6ICfkv6Hmga/loavlhpnmnKrlrozmiJAnLFxyXG4gICAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBib3Jyb3dcclxuICAgICAgICAgIHRoaXNfLiRyZWRpcmVjdCgnYm9ycm93Jywge1xyXG4gICAgICAgICAgICBjYXJtb2RlbGlkOiBjYXJtb2RlbGlkLFxyXG4gICAgICAgICAgICBjaXR5bmFtZTogY2l0eW5hbWUsXHJcbiAgICAgICAgICAgIG5hdGl2ZXBsYWNlOiBuYXRpdmVwbGFjZSxcclxuICAgICAgICAgICAgaG91c2Vob2xkdHlwZTogaG91c2Vob2xkdHlwZSxcclxuICAgICAgICAgICAgbW9udGhseXN1cHBseXNlY3Rpb246IG1vbnRobHlzdXBwbHlzZWN0aW9uXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvLyDln47luILliJfooajmjqXlj6NcclxuICAgIGNoZW5nc2hpKCkge1xyXG4gICAgICBsZXQgdGhpc18gPSB0aGlzO1xyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpc18uJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9hcHBvaW50bWVudC9idXNpbmVzc3Byb2NpdHknLFxyXG4gICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICBsZXQgemhpID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YS5kYXRhLmRhdGEubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIGxldCBDaXR5ID0gW107XHJcbiAgICAgICAgICAvLyBjaXR5IHB1c2jmt7vliqDmlbDmja5cclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgQ2l0eS5wdXNoKHpoaVtpXS5zdGF0ZV9uYW1lKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOi1i+WAvFxyXG4gICAgICAgICAgdGhpc18uY2l0eSA9IENpdHk7XHJcbiAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgIHRoaXNfLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQocmVzKSB7XHJcbiAgICAgIC8vIOenu+mZpOe8k+WtmOS4reeahOi9puWei+aVsOaNrlxyXG4gICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygnY2hleGluZycpO1xyXG4gICAgICBsZXQgcGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhpcy5jaGVuZ3NoaSgpO1xyXG4gICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAvLyDnu5/orqFcclxuICAgICAgdGhpcy4kcGFyZW50LlBWVVZzdGF0aXN0aWNhbCgnaGVscHlvdWxvYWQnKTtcclxuICAgICAgLy8g5LuO57yT5a2Y5Lit5Y+W5Ye6Y2FybW9kZWxpZOWSjGN4X25hbWVcclxuICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdjaGV4aW5nJykpIHtcclxuICAgICAgICB0aGlzLmNhcm1vZGVsaWQgPSB3eC5nZXRTdG9yYWdlU3luYygnY2hleGluZycpLmNhcm1vZGVsaWQ7XHJcbiAgICAgICAgdGhpcy5jeF9uYW1lID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2NoZXhpbmcnKS5uYW1lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvblVubG9hZCgpIHtcclxuICAgICAgLy8g56e76Zmk57yT5a2Y5Lit55qE6L2m5Z6L5pWw5o2uXHJcbiAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdjaGV4aW5nJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=