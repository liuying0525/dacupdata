'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 选择预约门店插件


var app = getApp();
var City = require('./../pages/js/allcity.js');

var mendian = function (_wepy$page) {
  _inherits(mendian, _wepy$page);

  function mendian() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, mendian);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = mendian.__proto__ || Object.getPrototypeOf(mendian)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '选择门店'
    }, _this.data = {
      // 门店列表
      dsa: '',
      dsas: '',
      dsan: '',
      // 城市
      city: City,
      // 要移动到的位置
      viewid: '',
      // 中国城市列表
      citys: ['北京', '天津', '上海', '重庆', '河北', '山西', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '海南', '四川', '贵州', '云南', '陕西', '甘肃', '青海', '台湾', '内蒙古', '广西', '西藏', '宁夏', '新疆', '香港', '澳门'],
      // 城市对应的拼音
      citysPinyin: ['beijing', 'tianjin', 'shanghai', 'chongqing', 'hebei', 'shanxi2', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'shanxi', 'gansu', 'qinghai', 'taiwan', 'neimenggu', 'guangxi', 'xizang', 'ningxia', 'xinjiang', 'xianggang', 'aomen'],
      // 右侧导航向上滚动的距离
      scrollTop: 0,
      scrollNum: 0,
      // 门店高度
      typeHeight: 25,
      // 城市高度
      goodHeight: 60
    }, _this.components = {}, _this.computed = {
      menuHeight: function menuHeight() {
        // 计算主体部分高度,单位为px
        // second部分高度 = 利用窗口可使用高度 - first部分高度（这里的高度单位为px，所有利用比例将300rpx转换为px）
        var parent = this.$parent.globalData;
        return parent.pageHeight - parent.pageWidth / 750 * 80 + 'px';
      }
    }, _this.methods = {
      // 选择门店
      mendian: function mendian(e, a, c, d) {
        this.$parent.globalData.selectMendian = {
          business_partner_nme: e,
          building_nme: a,
          state_name: c,
          businessid: d
        };
        wx.navigateBack();
      },

      // 选择城市
      selectCity: function selectCity(e) {
        var viewid = e.currentTarget.dataset.viewid;
        this.viewid = viewid;
      },

      // 滚动右侧列表左侧联动
      goodsScrollAct: function goodsScrollAct(e) {
        var that = this;
        var typeCount = that.dsan.length;
        var goodsCount = 0;
        that.dsan.forEach(function (item) {
          goodsCount += item.city.length;
        });

        var heightList = [0];
        var curHeight = 0;
        that.dsan.forEach(function (item) {
          curHeight += that.typeHeight + item.city.length * that.goodHeight;
          heightList.push(curHeight);
        });

        for (var i = 0; i < heightList.length; i++) {
          if (e.detail.scrollTop >= heightList[i] && e.detail.scrollTop < heightList[i + 1]) {
            that.scrollNum = i;
          }
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(mendian, [{
    key: 'citytopinyin',


    // 城市名映射为拼音
    value: function citytopinyin(value) {
      return this.citysPinyin[this.citys.indexOf(value)];
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var this_ = this;
      wx.showLoading({
        title: '加载中'
      });

      wx.request({
        // url拼接
        url: options.json_link + '/api/wxapp/appointment/selectbusiness',
        data: {
          financialproductid: options.e,
          assetmodelcde: options.a
        },
        // 后台返回值
        success: function success(data) {
          wx.hideLoading();
          // 定义返回值的数据
          var datas = data.data.data;
          datas.forEach(function (ele) {
            ele.state_namepinyin = this_.citytopinyin(ele.state_name);
          });
          this_.dsa = datas;
          this_.dsan = datas.slice(0, datas.length - 2);
          this_.viewid = datas[0].state_namepinyin;

          var length = data.data.data.length;
          var lengthr = length - 1;
          this_.dsas = data.data.data[lengthr].count;
          // 给数据进行绑定
          this_.$apply();
        }
      });
    }
  }]);

  return mendian;
}(_wepy2.default.page);

exports.default = mendian;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbmRpYW4uanMiXSwibmFtZXMiOlsiYXBwIiwiZ2V0QXBwIiwiQ2l0eSIsInJlcXVpcmUiLCJtZW5kaWFuIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkc2EiLCJkc2FzIiwiZHNhbiIsImNpdHkiLCJ2aWV3aWQiLCJjaXR5cyIsImNpdHlzUGlueWluIiwic2Nyb2xsVG9wIiwic2Nyb2xsTnVtIiwidHlwZUhlaWdodCIsImdvb2RIZWlnaHQiLCJjb21wb25lbnRzIiwiY29tcHV0ZWQiLCJtZW51SGVpZ2h0IiwicGFyZW50IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJwYWdlSGVpZ2h0IiwicGFnZVdpZHRoIiwibWV0aG9kcyIsImUiLCJhIiwiYyIsImQiLCJzZWxlY3RNZW5kaWFuIiwiYnVzaW5lc3NfcGFydG5lcl9ubWUiLCJidWlsZGluZ19ubWUiLCJzdGF0ZV9uYW1lIiwiYnVzaW5lc3NpZCIsInd4IiwibmF2aWdhdGVCYWNrIiwic2VsZWN0Q2l0eSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZ29vZHNTY3JvbGxBY3QiLCJ0aGF0IiwidHlwZUNvdW50IiwibGVuZ3RoIiwiZ29vZHNDb3VudCIsImZvckVhY2giLCJpdGVtIiwiaGVpZ2h0TGlzdCIsImN1ckhlaWdodCIsInB1c2giLCJpIiwiZGV0YWlsIiwidmFsdWUiLCJpbmRleE9mIiwib3B0aW9ucyIsInRoaXNfIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2xpbmsiLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJhc3NldG1vZGVsY2RlIiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwiZGF0YXMiLCJlbGUiLCJzdGF0ZV9uYW1lcGlueWluIiwiY2l0eXRvcGlueWluIiwic2xpY2UiLCJsZW5ndGhyIiwiY291bnQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7O0FB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NUIsQ0FEeEI7QUFFSm9DLHlCQUFlUixRQUFRM0I7QUFGbkIsU0FIRztBQU9UO0FBQ0FvQyxpQkFBUyxpQkFBVTFELElBQVYsRUFBZ0I7QUFDdkI4QixhQUFHNkIsV0FBSDtBQUNBO0FBQ0EsY0FBSUMsUUFBUTVELEtBQUtBLElBQUwsQ0FBVUEsSUFBdEI7QUFDQTRELGdCQUFNcEIsT0FBTixDQUFjLFVBQUNxQixHQUFELEVBQVM7QUFDckJBLGdCQUFJQyxnQkFBSixHQUF1QlosTUFBTWEsWUFBTixDQUFtQkYsSUFBSWpDLFVBQXZCLENBQXZCO0FBQ0QsV0FGRDtBQUdBc0IsZ0JBQU1qRCxHQUFOLEdBQVkyRCxLQUFaO0FBQ0FWLGdCQUFNL0MsSUFBTixHQUFheUQsTUFBTUksS0FBTixDQUFZLENBQVosRUFBZUosTUFBTXRCLE1BQU4sR0FBZSxDQUE5QixDQUFiO0FBQ0FZLGdCQUFNN0MsTUFBTixHQUFldUQsTUFBTSxDQUFOLEVBQVNFLGdCQUF4Qjs7QUFFQSxjQUFJeEIsU0FBU3RDLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlc0MsTUFBNUI7QUFDQSxjQUFJMkIsVUFBVTNCLFNBQVMsQ0FBdkI7QUFDQVksZ0JBQU1oRCxJQUFOLEdBQWFGLEtBQUtBLElBQUwsQ0FBVUEsSUFBVixDQUFlaUUsT0FBZixFQUF3QkMsS0FBckM7QUFDQTtBQUNBaEIsZ0JBQU1pQixNQUFOO0FBQ0Q7QUF4QlEsT0FBWDtBQTBCRDs7OztFQXJIa0NDLGVBQUtDLEk7O2tCQUFyQnhFLE8iLCJmaWxlIjoibWVuZGlhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC8vIOmAieaLqemihOe6pumXqOW6l+aPkuS7tlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGxldCBhcHAgPSBnZXRBcHAoKTtcclxuICBsZXQgQ2l0eSA9IHJlcXVpcmUoJy4uL3BhZ2VzL2pzL2FsbGNpdHkuanMnKTtcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBtZW5kaWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mAieaLqemXqOW6lydcclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAvLyDpl6jlupfliJfooahcclxuICAgICAgZHNhOiAnJyxcclxuICAgICAgZHNhczogJycsXHJcbiAgICAgIGRzYW46ICcnLFxyXG4gICAgICAvLyDln47luIJcclxuICAgICAgY2l0eTogQ2l0eSxcclxuICAgICAgLy8g6KaB56e75Yqo5Yiw55qE5L2N572uXHJcbiAgICAgIHZpZXdpZDogJycsXHJcbiAgICAgIC8vIOS4reWbveWfjuW4guWIl+ihqFxyXG4gICAgICBjaXR5czogWyfljJfkuqwnLCAn5aSp5rSlJywgJ+S4iua1tycsICfph43luoYnLCAn5rKz5YyXJywgJ+WxseilvycsICfovr3lroEnLCAn5ZCJ5p6XJywgJ+m7kem+meaxnycsICfmsZ/oi48nLCAn5rWZ5rGfJywgJ+WuieW+vScsICfnpo/lu7onLCAn5rGf6KW/JywgJ+WxseS4nCcsICfmsrPljZcnLCAn5rmW5YyXJyxcclxuICAgICAgICAn5rmW5Y2XJywgJ+W5v+S4nCcsICfmtbfljZcnLCAn5Zub5bedJywgJ+i0teW3nicsICfkupHljZcnLCAn6ZmV6KW/JywgJ+eUmOiCgycsICfpnZLmtbcnLCAn5Y+w5rm+JywgJ+WGheiSmeWPpCcsICflub/opb8nLCAn6KW/6JePJywgJ+WugeWkjycsICfmlrDnloYnLCAn6aaZ5rivJywgJ+a+s+mXqCdcclxuICAgICAgXSxcclxuICAgICAgLy8g5Z+O5biC5a+55bqU55qE5ou86Z+zXHJcbiAgICAgIGNpdHlzUGlueWluOiBbJ2JlaWppbmcnLCAndGlhbmppbicsICdzaGFuZ2hhaScsICdjaG9uZ3FpbmcnLCAnaGViZWknLCAnc2hhbnhpMicsICdsaWFvbmluZycsICdqaWxpbicsXHJcbiAgICAgICAgJ2hlaWxvbmdqaWFuZycsICdqaWFuZ3N1JywgJ3poZWppYW5nJywgJ2FuaHVpJywgJ2Z1amlhbicsICdqaWFuZ3hpJywgJ3NoYW5kb25nJywgJ2hlbmFuJywgJ2h1YmVpJyxcclxuICAgICAgICAnaHVuYW4nLCAnZ3Vhbmdkb25nJywgJ2hhaW5hbicsICdzaWNodWFuJywgJ2d1aXpob3UnLCAneXVubmFuJywgJ3NoYW54aScsICdnYW5zdScsICdxaW5naGFpJywgJ3RhaXdhbicsXHJcbiAgICAgICAgJ25laW1lbmdndScsICdndWFuZ3hpJywgJ3hpemFuZycsICduaW5neGlhJywgJ3hpbmppYW5nJywgJ3hpYW5nZ2FuZycsICdhb21lbidcclxuICAgICAgXSxcclxuICAgICAgLy8g5Y+z5L6n5a+86Iiq5ZCR5LiK5rua5Yqo55qE6Led56a7XHJcbiAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgc2Nyb2xsTnVtOiAwLFxyXG4gICAgICAvLyDpl6jlupfpq5jluqZcclxuICAgICAgdHlwZUhlaWdodDogMjUsXHJcbiAgICAgIC8vIOWfjuW4gumrmOW6plxyXG4gICAgICBnb29kSGVpZ2h0OiA2MFxyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7fTtcclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBtZW51SGVpZ2h0KCkge1xyXG4gICAgICAgIC8vIOiuoeeul+S4u+S9k+mDqOWIhumrmOW6pizljZXkvY3kuLpweFxyXG4gICAgICAgIC8vIHNlY29uZOmDqOWIhumrmOW6piA9IOWIqeeUqOeql+WPo+WPr+S9v+eUqOmrmOW6piAtIGZpcnN06YOo5YiG6auY5bqm77yI6L+Z6YeM55qE6auY5bqm5Y2V5L2N5Li6cHjvvIzmiYDmnInliKnnlKjmr5TkvovlsIYzMDBycHjovazmjaLkuLpweO+8iVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgICByZXR1cm4gcGFyZW50LnBhZ2VIZWlnaHQgLSBwYXJlbnQucGFnZVdpZHRoIC8gNzUwICogODAgKyAncHgnO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g6YCJ5oup6Zeo5bqXXHJcbiAgICAgIG1lbmRpYW4oZSwgYSwgYywgZCkge1xyXG4gICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlbGVjdE1lbmRpYW4gPSB7XHJcbiAgICAgICAgICBidXNpbmVzc19wYXJ0bmVyX25tZTogZSxcclxuICAgICAgICAgIGJ1aWxkaW5nX25tZTogYSxcclxuICAgICAgICAgIHN0YXRlX25hbWU6IGMsXHJcbiAgICAgICAgICBidXNpbmVzc2lkOiBkXHJcbiAgICAgICAgfTtcclxuICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YCJ5oup5Z+O5biCXHJcbiAgICAgIHNlbGVjdENpdHkoZSkge1xyXG4gICAgICAgIGxldCB2aWV3aWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC52aWV3aWQ7XHJcbiAgICAgICAgdGhpcy52aWV3aWQgPSB2aWV3aWQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOa7muWKqOWPs+S+p+WIl+ihqOW3puS+p+iBlOWKqFxyXG4gICAgICBnb29kc1Njcm9sbEFjdChlKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0eXBlQ291bnQgPSB0aGF0LmRzYW4ubGVuZ3RoO1xyXG4gICAgICAgIGxldCBnb29kc0NvdW50ID0gMFxyXG4gICAgICAgIHRoYXQuZHNhbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBnb29kc0NvdW50ICs9IGl0ZW0uY2l0eS5sZW5ndGg7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBoZWlnaHRMaXN0ID0gWzBdO1xyXG4gICAgICAgIGxldCBjdXJIZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoYXQuZHNhbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjdXJIZWlnaHQgKz0gKHRoYXQudHlwZUhlaWdodCArIGl0ZW0uY2l0eS5sZW5ndGggKiB0aGF0Lmdvb2RIZWlnaHQpO1xyXG4gICAgICAgICAgaGVpZ2h0TGlzdC5wdXNoKGN1ckhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKGUuZGV0YWlsLnNjcm9sbFRvcCA+PSBoZWlnaHRMaXN0W2ldICYmIGUuZGV0YWlsLnNjcm9sbFRvcCA8IGhlaWdodExpc3RbaSArIDFdKSB7XHJcbiAgICAgICAgICAgIHRoYXQuc2Nyb2xsTnVtID0gaTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIOWfjuW4guWQjeaYoOWwhOS4uuaLvOmfs1xyXG4gICAgY2l0eXRvcGlueWluKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNpdHlzUGlueWluW3RoaXMuY2l0eXMuaW5kZXhPZih2YWx1ZSldO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIGxldCB0aGlzXyA9IHRoaXM7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgICB1cmw6IG9wdGlvbnMuanNvbl9saW5rICsgJy9hcGkvd3hhcHAvYXBwb2ludG1lbnQvc2VsZWN0YnVzaW5lc3MnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGZpbmFuY2lhbHByb2R1Y3RpZDogb3B0aW9ucy5lLFxyXG4gICAgICAgICAgYXNzZXRtb2RlbGNkZTogb3B0aW9ucy5hXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlkI7lj7Dov5Tlm57lgLxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgbGV0IGRhdGFzID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBkYXRhcy5mb3JFYWNoKChlbGUpID0+IHtcclxuICAgICAgICAgICAgZWxlLnN0YXRlX25hbWVwaW55aW4gPSB0aGlzXy5jaXR5dG9waW55aW4oZWxlLnN0YXRlX25hbWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICB0aGlzXy5kc2EgPSBkYXRhcztcclxuICAgICAgICAgIHRoaXNfLmRzYW4gPSBkYXRhcy5zbGljZSgwLCBkYXRhcy5sZW5ndGggLSAyKTtcclxuICAgICAgICAgIHRoaXNfLnZpZXdpZCA9IGRhdGFzWzBdLnN0YXRlX25hbWVwaW55aW47XHJcblxyXG4gICAgICAgICAgbGV0IGxlbmd0aCA9IGRhdGEuZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIGxldCBsZW5ndGhyID0gbGVuZ3RoIC0gMTtcclxuICAgICAgICAgIHRoaXNfLmRzYXMgPSBkYXRhLmRhdGEuZGF0YVtsZW5ndGhyXS5jb3VudDtcclxuICAgICAgICAgIC8vIOe7meaVsOaNrui/m+ihjOe7keWumlxyXG4gICAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ==