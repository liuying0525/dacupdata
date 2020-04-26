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

var City = require('./js/allcity.js');

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
    }, _this.computed = {
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

    // 获取页面数据

  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      var this_ = this;
      wx.showLoading({
        title: '加载中'
      });

      var url = void 0;
      if (options.from == '直租详情') {
        // 直租预约门店选择
        url = options.json_link + '/api/wxapp/appointment/selectbusinessdirectrent';
      } else {
        // 贷款预约门店选择
        url = options.json_link + '/api/wxapp/appointment/selectbusiness';
      }

      wx.request({
        // url拼接
        url: url,
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(mendian , 'pages/mendian'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbmRpYW4uanMiXSwibmFtZXMiOlsiQ2l0eSIsInJlcXVpcmUiLCJtZW5kaWFuIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJkc2EiLCJkc2FzIiwiZHNhbiIsImNpdHkiLCJ2aWV3aWQiLCJjaXR5cyIsImNpdHlzUGlueWluIiwic2Nyb2xsVG9wIiwic2Nyb2xsTnVtIiwidHlwZUhlaWdodCIsImdvb2RIZWlnaHQiLCJjb21wdXRlZCIsIm1lbnVIZWlnaHQiLCJwYXJlbnQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhZ2VIZWlnaHQiLCJwYWdlV2lkdGgiLCJtZXRob2RzIiwiZSIsImEiLCJjIiwiZCIsInNlbGVjdE1lbmRpYW4iLCJidXNpbmVzc19wYXJ0bmVyX25tZSIsImJ1aWxkaW5nX25tZSIsInN0YXRlX25hbWUiLCJidXNpbmVzc2lkIiwid3giLCJuYXZpZ2F0ZUJhY2siLCJzZWxlY3RDaXR5IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJnb29kc1Njcm9sbEFjdCIsInRoYXQiLCJ0eXBlQ291bnQiLCJsZW5ndGgiLCJnb29kc0NvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJoZWlnaHRMaXN0IiwiY3VySGVpZ2h0IiwicHVzaCIsImkiLCJkZXRhaWwiLCJ2YWx1ZSIsImluZGV4T2YiLCJvcHRpb25zIiwidGhpc18iLCJzaG93TG9hZGluZyIsInRpdGxlIiwidXJsIiwiZnJvbSIsImpzb25fbGluayIsInJlcXVlc3QiLCJmaW5hbmNpYWxwcm9kdWN0aWQiLCJhc3NldG1vZGVsY2RlIiwic3VjY2VzcyIsImhpZGVMb2FkaW5nIiwiZGF0YXMiLCJlbGUiLCJzdGF0ZV9uYW1lcGlueWluIiwiY2l0eXRvcGlueWluIiwic2xpY2UiLCJsZW5ndGhyIiwiY291bnQiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEs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LFNBQVIsR0FBb0IsdUNBQTFCO0FBQ0Q7O0FBRUR6QixTQUFHMEIsT0FBSCxDQUFXO0FBQ1Q7QUFDQUgsYUFBS0EsR0FGSTtBQUdUcEQsY0FBTTtBQUNKd0QsOEJBQW9CUixRQUFRNUIsQ0FEeEI7QUFFSnFDLHlCQUFlVCxRQUFRM0I7QUFGbkIsU0FIRztBQU9UO0FBQ0FxQyxpQkFBUyxpQkFBUzFELElBQVQsRUFBZTtBQUN0QjZCLGFBQUc4QixXQUFIO0FBQ0E7QUFDQSxjQUFJQyxRQUFRNUQsS0FBS0EsSUFBTCxDQUFVQSxJQUF0QjtBQUNBNEQsZ0JBQU1yQixPQUFOLENBQWMsVUFBQ3NCLEdBQUQsRUFBUztBQUNyQkEsZ0JBQUlDLGdCQUFKLEdBQXVCYixNQUFNYyxZQUFOLENBQW1CRixJQUFJbEMsVUFBdkIsQ0FBdkI7QUFDRCxXQUZEO0FBR0FzQixnQkFBTWhELEdBQU4sR0FBWTJELEtBQVo7QUFDQVgsZ0JBQU05QyxJQUFOLEdBQWF5RCxNQUFNSSxLQUFOLENBQVksQ0FBWixFQUFlSixNQUFNdkIsTUFBTixHQUFlLENBQTlCLENBQWI7QUFDQVksZ0JBQU01QyxNQUFOLEdBQWV1RCxNQUFNLENBQU4sRUFBU0UsZ0JBQXhCOztBQUVBLGNBQUl6QixTQUFTckMsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVxQyxNQUE1QjtBQUNBLGNBQUk0QixVQUFVNUIsU0FBUyxDQUF2QjtBQUNBWSxnQkFBTS9DLElBQU4sR0FBYUYsS0FBS0EsSUFBTCxDQUFVQSxJQUFWLENBQWVpRSxPQUFmLEVBQXdCQyxLQUFyQztBQUNBO0FBQ0FqQixnQkFBTWtCLE1BQU47QUFDRDtBQXhCUSxPQUFYO0FBMEJEOzs7O0VBeEhrQ0MsZUFBS0MsSTs7a0JBQXJCeEUsTyIsImZpbGUiOiJtZW5kaWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5sZXQgQ2l0eSA9IHJlcXVpcmUoJy4uL3BhZ2VzL2pzL2FsbGNpdHkuanMnKTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbWVuZGlhbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mAieaLqemXqOW6lydcclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDpl6jlupfliJfooahcclxuICAgIGRzYTogJycsXHJcbiAgICBkc2FzOiAnJyxcclxuICAgIGRzYW46ICcnLFxyXG4gICAgLy8g5Z+O5biCXHJcbiAgICBjaXR5OiBDaXR5LFxyXG4gICAgLy8g6KaB56e75Yqo5Yiw55qE5L2N572uXHJcbiAgICB2aWV3aWQ6ICcnLFxyXG4gICAgLy8g5Lit5Zu95Z+O5biC5YiX6KGoXHJcbiAgICBjaXR5czogWyfljJfkuqwnLCAn5aSp5rSlJywgJ+S4iua1tycsICfph43luoYnLCAn5rKz5YyXJywgJ+WxseilvycsICfovr3lroEnLCAn5ZCJ5p6XJywgJ+m7kem+meaxnycsICfmsZ/oi48nLCAn5rWZ5rGfJywgJ+WuieW+vScsICfnpo/lu7onLCAn5rGf6KW/JywgJ+WxseS4nCcsICfmsrPljZcnLCAn5rmW5YyXJywgJ+a5luWNlycsICflub/kuJwnLCAn5rW35Y2XJywgJ+Wbm+W3nScsICfotLXlt54nLCAn5LqR5Y2XJywgJ+mZleilvycsICfnlJjogoMnLCAn6Z2S5rW3JywgJ+WPsOa5vicsICflhoXokpnlj6QnLCAn5bm/6KW/JywgJ+ilv+iXjycsICflroHlpI8nLCAn5paw55aGJywgJ+mmmea4rycsICfmvrPpl6gnXSxcclxuICAgIC8vIOWfjuW4guWvueW6lOeahOaLvOmfs1xyXG4gICAgY2l0eXNQaW55aW46IFsnYmVpamluZycsICd0aWFuamluJywgJ3NoYW5naGFpJywgJ2Nob25ncWluZycsICdoZWJlaScsICdzaGFueGkyJywgJ2xpYW9uaW5nJywgJ2ppbGluJywgJ2hlaWxvbmdqaWFuZycsICdqaWFuZ3N1JywgJ3poZWppYW5nJywgJ2FuaHVpJywgJ2Z1amlhbicsICdqaWFuZ3hpJywgJ3NoYW5kb25nJywgJ2hlbmFuJywgJ2h1YmVpJywgJ2h1bmFuJywgJ2d1YW5nZG9uZycsICdoYWluYW4nLCAnc2ljaHVhbicsICdndWl6aG91JywgJ3l1bm5hbicsICdzaGFueGknLCAnZ2Fuc3UnLCAncWluZ2hhaScsICd0YWl3YW4nLCAnbmVpbWVuZ2d1JywgJ2d1YW5neGknLCAneGl6YW5nJywgJ25pbmd4aWEnLCAneGluamlhbmcnLCAneGlhbmdnYW5nJywgJ2FvbWVuJ10sXHJcbiAgICAvLyDlj7Pkvqflr7zoiKrlkJHkuIrmu5rliqjnmoTot53nprtcclxuICAgIHNjcm9sbFRvcDogMCxcclxuICAgIHNjcm9sbE51bTogMCxcclxuICAgIC8vIOmXqOW6l+mrmOW6plxyXG4gICAgdHlwZUhlaWdodDogMjUsXHJcbiAgICAvLyDln47luILpq5jluqZcclxuICAgIGdvb2RIZWlnaHQ6IDYwXHJcbiAgfTtcclxuICBjb21wdXRlZCA9IHtcclxuICAgIG1lbnVIZWlnaHQoKSB7XHJcbiAgICAgIC8vIOiuoeeul+S4u+S9k+mDqOWIhumrmOW6pizljZXkvY3kuLpweFxyXG4gICAgICAvLyBzZWNvbmTpg6jliIbpq5jluqYgPSDliKnnlKjnqpflj6Plj6/kvb/nlKjpq5jluqYgLSBmaXJzdOmDqOWIhumrmOW6pu+8iOi/memHjOeahOmrmOW6puWNleS9jeS4unB477yM5omA5pyJ5Yip55So5q+U5L6L5bCGMzAwcnB46L2s5o2i5Li6cHjvvIlcclxuICAgICAgbGV0IHBhcmVudCA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICByZXR1cm4gcGFyZW50LnBhZ2VIZWlnaHQgLSBwYXJlbnQucGFnZVdpZHRoIC8gNzUwICogODAgKyAncHgnO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8vIOmAieaLqemXqOW6l1xyXG4gICAgbWVuZGlhbihlLCBhLCBjLCBkKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnNlbGVjdE1lbmRpYW4gPSB7XHJcbiAgICAgICAgYnVzaW5lc3NfcGFydG5lcl9ubWU6IGUsXHJcbiAgICAgICAgYnVpbGRpbmdfbm1lOiBhLFxyXG4gICAgICAgIHN0YXRlX25hbWU6IGMsXHJcbiAgICAgICAgYnVzaW5lc3NpZDogZFxyXG4gICAgICB9O1xyXG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKTtcclxuICAgIH0sXHJcbiAgICAvLyDpgInmi6nln47luIJcclxuICAgIHNlbGVjdENpdHkoZSkge1xyXG4gICAgICBsZXQgdmlld2lkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudmlld2lkO1xyXG4gICAgICB0aGlzLnZpZXdpZCA9IHZpZXdpZDtcclxuICAgIH0sXHJcbiAgICAvLyDmu5rliqjlj7PkvqfliJfooajlt6bkvqfogZTliqhcclxuICAgIGdvb2RzU2Nyb2xsQWN0KGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBsZXQgdHlwZUNvdW50ID0gdGhhdC5kc2FuLmxlbmd0aDtcclxuICAgICAgbGV0IGdvb2RzQ291bnQgPSAwXHJcbiAgICAgIHRoYXQuZHNhbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgZ29vZHNDb3VudCArPSBpdGVtLmNpdHkubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoZWlnaHRMaXN0ID0gWzBdO1xyXG4gICAgICBsZXQgY3VySGVpZ2h0ID0gMDtcclxuICAgICAgdGhhdC5kc2FuLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBjdXJIZWlnaHQgKz0gKHRoYXQudHlwZUhlaWdodCArIGl0ZW0uY2l0eS5sZW5ndGggKiB0aGF0Lmdvb2RIZWlnaHQpO1xyXG4gICAgICAgIGhlaWdodExpc3QucHVzaChjdXJIZWlnaHQpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVpZ2h0TGlzdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgaWYgKGUuZGV0YWlsLnNjcm9sbFRvcCA+PSBoZWlnaHRMaXN0W2ldICYmIGUuZGV0YWlsLnNjcm9sbFRvcCA8IGhlaWdodExpc3RbaSsxXSl7XHJcbiAgICAgICAgICB0aGF0LnNjcm9sbE51bSA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIC8vIOWfjuW4guWQjeaYoOWwhOS4uuaLvOmfs1xyXG4gIGNpdHl0b3Bpbnlpbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2l0eXNQaW55aW5bdGhpcy5jaXR5cy5pbmRleE9mKHZhbHVlKV07XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bpobXpnaLmlbDmja5cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgbGV0IHRoaXNfID0gdGhpcztcclxuICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgdXJsO1xyXG4gICAgaWYgKG9wdGlvbnMuZnJvbSA9PSAn55u056ef6K+m5oOFJykge1xyXG4gICAgICAvLyDnm7Tnp5/pooTnuqbpl6jlupfpgInmi6lcclxuICAgICAgdXJsID0gb3B0aW9ucy5qc29uX2xpbmsgKyAnL2FwaS93eGFwcC9hcHBvaW50bWVudC9zZWxlY3RidXNpbmVzc2RpcmVjdHJlbnQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8g6LS35qy+6aKE57qm6Zeo5bqX6YCJ5oupXHJcbiAgICAgIHVybCA9IG9wdGlvbnMuanNvbl9saW5rICsgJy9hcGkvd3hhcHAvYXBwb2ludG1lbnQvc2VsZWN0YnVzaW5lc3MnO1xyXG4gICAgfVxyXG5cclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAvLyB1cmzmi7zmjqVcclxuICAgICAgdXJsOiB1cmwsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBmaW5hbmNpYWxwcm9kdWN0aWQ6IG9wdGlvbnMuZSxcclxuICAgICAgICBhc3NldG1vZGVsY2RlOiBvcHRpb25zLmFcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgIGxldCBkYXRhcyA9IGRhdGEuZGF0YS5kYXRhO1xyXG4gICAgICAgIGRhdGFzLmZvckVhY2goKGVsZSkgPT4ge1xyXG4gICAgICAgICAgZWxlLnN0YXRlX25hbWVwaW55aW4gPSB0aGlzXy5jaXR5dG9waW55aW4oZWxlLnN0YXRlX25hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXNfLmRzYSA9IGRhdGFzO1xyXG4gICAgICAgIHRoaXNfLmRzYW4gPSBkYXRhcy5zbGljZSgwLCBkYXRhcy5sZW5ndGggLSAyKTtcclxuICAgICAgICB0aGlzXy52aWV3aWQgPSBkYXRhc1swXS5zdGF0ZV9uYW1lcGlueWluO1xyXG5cclxuICAgICAgICBsZXQgbGVuZ3RoID0gZGF0YS5kYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgIGxldCBsZW5ndGhyID0gbGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzXy5kc2FzID0gZGF0YS5kYXRhLmRhdGFbbGVuZ3Rocl0uY291bnQ7XHJcbiAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgdGhpc18uJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=