'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _input = require('./../components/input.js');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var brandd = function (_wepy$page) {
  _inherits(brandd, _wepy$page);

  function brandd() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, brandd);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = brandd.__proto__ || Object.getPrototypeOf(brandd)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "inputd": { "xmlns:v-on": "", "value": "" } }, _this.$events = { "inputd": { "v-on:childFn": "my", "v-on:enter": "enter" } }, _this.components = {
      inputd: _input2.default
    }, _this.data = {
      url_link: '',
      selectPersons: false,
      // 搜索出的车系列表
      textx: [],
      // 热搜
      hotsear: '',
      json_link: '',
      // 历史记录
      searchData: [],
      // 历史记录元素隐藏
      sd: false,
      code: ''
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/brandd'
        };
      },
      // 跳转搜索结果页
      brasd: function brasd(value, e) {
        if (value === 'daikuan') {
          this.$parent.globalData.pageid = [e.currentTarget.dataset.hotsearchwordid];
          this.$parent.globalData.pagename = [1];
          this.$parent.clicknumordernumstat(1);
        }
        wx.navigateTo({
          url: 'branddd?id=' + e.currentTarget.id
        });
        // 添加搜索记录
        var searchData = wx.getStorageSync('searchData') || [];
        if (this.IsInArray(searchData, e.currentTarget.id) == false) {
          searchData.unshift(e.currentTarget.id);
          wx.setStorageSync('searchData', searchData);
        }
      },
      brad: function brad(e) {
        wx.navigateTo({
          url: 'branddd?id=' + e.currentTarget.id
        });
        // 添加搜索记录
        var searchData = wx.getStorageSync('searchData') || [];
        if (this.IsInArray(searchData, e.currentTarget.id) == false) {
          searchData.unshift(e.currentTarget.id);
          wx.setStorageSync('searchData', searchData);
        }
      },

      // 模糊搜索
      my: function my(e) {
        var json_link = this.json_link;
        var are = this;
        if (e != ' ') {
          wx.request({
            // url拼接
            url: json_link + '/api/wxapp/search/fuzzysearch',
            data: {
              searchword: e
            },
            // 后台返回值
            success: function success(data) {
              // 定义返回值的数据
              are.textx = data.data.fuzzysearchJA;
              are.code = data.data.code;
              // 给数据进行绑定
              are.$apply();
            }
          });
          this.selectPersons = true;
        }
      },

      // 手机键盘搜索
      enter: function enter(e) {
        wx.navigateTo({
          url: 'branddd?id=' + e
        });
        this.textx = [];
      },

      // 清空历史记录
      deleteHistory: function deleteHistory() {
        var that = this;
        wx.showModal({
          title: '提示',
          content: '是否删除历史搜索',
          success: function success(res) {
            if (res.confirm) {
              that.sd = true;
              that.searchData = [''];
              that.$apply();
              wx.setStorageSync('searchData', []);
              wx.switchTab({
                url: '../pages/brandd'
              });
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(brandd, [{
    key: 'onLoad',
    value: function onLoad() {
      var are = this;
      this.selectPersons = false;
      // 定义url
      var json_link = this.$parent.globalData.json_link;
      are.json_link = json_link;
      // 热搜词
      wx.request({
        // url拼接
        url: json_link + '/api/wxapp/search/hotsearchword',
        data: {
          wordtype: 'newcar'
        },
        // 后台返回值
        success: function success(data) {
          // 定义返回值的数据
          are.hotsear = data.data.hotsearchwordJA;
          // 给数据进行绑定
          are.$apply();
        }
      });
    }
  }, {
    key: 'IsInArray',

    // 判断数组里是否有某个值
    value: function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    }

    // 初始化数据

  }, {
    key: 'onShow',
    value: function onShow() {
      this.textx = [];
      this.url_link = this.$parent.globalData.url_link;
      console.log('首页');
      var searchData = wx.getStorageSync('searchData') || [];
      if (searchData.length > 10) searchData = searchData.slice(0, 10);
      this.searchData = searchData;
      this.sd = false;
      this.$apply();
      this.onLoad();
    }
  }]);

  return brandd;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(brandd , 'pages/brandd'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyYW5kZC5qcyJdLCJuYW1lcyI6WyJicmFuZGQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5wdXRkIiwiSW5wdXQiLCJkYXRhIiwidXJsX2xpbmsiLCJzZWxlY3RQZXJzb25zIiwidGV4dHgiLCJob3RzZWFyIiwianNvbl9saW5rIiwic2VhcmNoRGF0YSIsInNkIiwiY29kZSIsIm1ldGhvZHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhdGgiLCJicmFzZCIsInZhbHVlIiwiZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwicGFnZWlkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJob3RzZWFyY2h3b3JkaWQiLCJwYWdlbmFtZSIsImNsaWNrbnVtb3JkZXJudW1zdGF0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiaWQiLCJnZXRTdG9yYWdlU3luYyIsIklzSW5BcnJheSIsInVuc2hpZnQiLCJzZXRTdG9yYWdlU3luYyIsImJyYWQiLCJteSIsImFyZSIsInJlcXVlc3QiLCJzZWFyY2h3b3JkIiwic3VjY2VzcyIsImZ1enp5c2VhcmNoSkEiLCIkYXBwbHkiLCJlbnRlciIsImRlbGV0ZUhpc3RvcnkiLCJ0aGF0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwicmVzIiwiY29uZmlybSIsInN3aXRjaFRhYiIsIndvcmR0eXBlIiwiaG90c2VhcmNod29yZEpBIiwiYXJyIiwidmFsIiwidGVzdFN0ciIsImpvaW4iLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInNsaWNlIiwib25Mb2FkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFD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SUMsVUFBVSxNQUFNRixJQUFJRyxJQUFKLENBQVMsR0FBVCxDQUFOLEdBQXNCLEdBQXBDO0FBQ0EsYUFBT0QsUUFBUUUsT0FBUixDQUFnQixNQUFNSCxHQUFOLEdBQVksR0FBNUIsS0FBb0MsQ0FBQyxDQUE1QztBQUNEOztBQUVEOzs7OzZCQUNTO0FBQ1AsV0FBS2hELEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS0YsUUFBTCxHQUFnQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JmLFFBQXhDO0FBQ0FzRCxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFVBQUlsRCxhQUFhaUIsR0FBR0ksY0FBSCxDQUFrQixZQUFsQixLQUFtQyxFQUFwRDtBQUNBLFVBQUlyQixXQUFXbUQsTUFBWCxHQUFvQixFQUF4QixFQUE0Qm5ELGFBQWFBLFdBQVdvRCxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEVBQXBCLENBQWI7QUFDNUIsV0FBS3BELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0MsV0FBS0MsRUFBTCxHQUFVLEtBQVY7QUFDQSxXQUFLK0IsTUFBTDtBQUNELFdBQUtxQixNQUFMO0FBQ0Q7Ozs7RUF0SmlDQyxlQUFLQyxJOztrQkFBcEJ0RSxNIiwiZmlsZSI6ImJyYW5kZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCBJbnB1dCBmcm9tICcuLi9jb21wb25lbnRzL2lucHV0JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBicmFuZGQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pCc57SiJ1xyXG4gICAgfTtcclxuICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbnB1dGRcIjp7XCJ4bWxuczp2LW9uXCI6XCJcIixcInZhbHVlXCI6XCJcIn19O1xyXG4kZXZlbnRzID0ge1wiaW5wdXRkXCI6e1widi1vbjpjaGlsZEZuXCI6XCJteVwiLFwidi1vbjplbnRlclwiOlwiZW50ZXJcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgaW5wdXRkOiBJbnB1dFxyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHVybF9saW5rOiAnJyxcclxuICAgICAgc2VsZWN0UGVyc29uczogZmFsc2UsXHJcbiAgICAgIC8vIOaQnOe0ouWHuueahOi9puezu+WIl+ihqFxyXG4gICAgICB0ZXh0eDogW10sXHJcbiAgICAgIC8vIOeDreaQnFxyXG4gICAgICBob3RzZWFyOiAnJyxcclxuICAgICAganNvbl9saW5rOiAnJyxcclxuICAgICAgLy8g5Y6G5Y+y6K6w5b2VXHJcbiAgICAgIHNlYXJjaERhdGE6IFtdLFxyXG4gICAgICAvLyDljoblj7LorrDlvZXlhYPntKDpmpDol49cclxuICAgICAgc2Q6IGZhbHNlLFxyXG4gICAgICBjb2RlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2JyYW5kZCdcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDot7PovazmkJzntKLnu5PmnpzpobVcclxuICAgICAgYnJhc2QodmFsdWUsIGUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09ICdkYWlrdWFuJykge1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZWlkID0gW2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmhvdHNlYXJjaHdvcmRpZF07XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlbmFtZSA9IFsxXTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdicmFuZGRkP2lkPScgKyBlLmN1cnJlbnRUYXJnZXQuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyDmt7vliqDmkJzntKLorrDlvZVcclxuICAgICAgICB2YXIgc2VhcmNoRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJykgfHwgW107XHJcbiAgICAgICAgaWYgKHRoaXMuSXNJbkFycmF5KHNlYXJjaERhdGEsIGUuY3VycmVudFRhcmdldC5pZCkgPT0gZmFsc2UpIHtcclxuICAgICAgICAgIHNlYXJjaERhdGEudW5zaGlmdChlLmN1cnJlbnRUYXJnZXQuaWQpXHJcbiAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnc2VhcmNoRGF0YScsIHNlYXJjaERhdGEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBicmFkKGUpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJ2JyYW5kZGQ/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOa3u+WKoOaQnOe0ouiusOW9lVxyXG4gICAgICAgIHZhciBzZWFyY2hEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnKSB8fCBbXTtcclxuICAgICAgICBpZiAodGhpcy5Jc0luQXJyYXkoc2VhcmNoRGF0YSwgZS5jdXJyZW50VGFyZ2V0LmlkKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgc2VhcmNoRGF0YS51bnNoaWZ0KGUuY3VycmVudFRhcmdldC5pZClcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJywgc2VhcmNoRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOaooeeziuaQnOe0olxyXG4gICAgICBteShlKSB7XHJcbiAgICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuanNvbl9saW5rO1xyXG4gICAgICAgIGxldCBhcmUgPSB0aGlzO1xyXG4gICAgICAgIGlmIChlICE9ICcgJykge1xyXG4gICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgICAgICB1cmw6IGpzb25fbGluayArICcvYXBpL3d4YXBwL3NlYXJjaC9mdXp6eXNlYXJjaCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBzZWFyY2h3b3JkOiBlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOWQjuWPsOi/lOWbnuWAvFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgICAgIGFyZS50ZXh0eCA9IGRhdGEuZGF0YS5mdXp6eXNlYXJjaEpBO1xyXG4gICAgICAgICAgICAgIGFyZS5jb2RlID0gZGF0YS5kYXRhLmNvZGU7XHJcbiAgICAgICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICAgICAgYXJlLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0UGVyc29ucyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDmiYvmnLrplK7nm5jmkJzntKJcclxuICAgICAgZW50ZXIoZSkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnYnJhbmRkZD9pZD0nICsgZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudGV4dHggPSBbXTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5riF56m65Y6G5Y+y6K6w5b2VXHJcbiAgICAgIGRlbGV0ZUhpc3Rvcnk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfmmK/lkKbliKDpmaTljoblj7LmkJzntKInLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICB0aGF0LnNkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICB0aGF0LnNlYXJjaERhdGEgPSBbJyddO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnLCBbXSk7XHJcbiAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2JyYW5kZCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgIHRoaXMuc2VsZWN0UGVyc29ucyA9IGZhbHNlO1xyXG4gICAgICAvLyDlrprkuYl1cmxcclxuICAgICAgbGV0IGpzb25fbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmpzb25fbGluaztcclxuICAgICAgYXJlLmpzb25fbGluayA9IGpzb25fbGluaztcclxuICAgICAgLy8g54Ot5pCc6K+NXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC8vIHVybOaLvOaOpVxyXG4gICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvc2VhcmNoL2hvdHNlYXJjaHdvcmQnLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHdvcmR0eXBlOiAnbmV3Y2FyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgYXJlLmhvdHNlYXIgPSBkYXRhLmRhdGEuaG90c2VhcmNod29yZEpBO1xyXG4gICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG4gICAgLy8g5Yik5pat5pWw57uE6YeM5piv5ZCm5pyJ5p+Q5Liq5YC8XHJcbiAgICBJc0luQXJyYXkoYXJyLCB2YWwpIHvjgIDjgIBcclxuICAgICAgdmFyIHRlc3RTdHIgPSAnLCcgKyBhcnIuam9pbihcIixcIikgKyBcIixcIjvjgIDjgIBcclxuICAgICAgcmV0dXJuIHRlc3RTdHIuaW5kZXhPZihcIixcIiArIHZhbCArIFwiLFwiKSAhPSAtMTtcclxuICAgIH1cclxuXHJcbiAgICAvLyDliJ3lp4vljJbmlbDmja5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy50ZXh0eCA9IFtdO1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfpppbpobUnKVxyXG4gICAgICB2YXIgc2VhcmNoRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJykgfHwgW107XHJcbiAgICAgIGlmIChzZWFyY2hEYXRhLmxlbmd0aCA+IDEwKSBzZWFyY2hEYXRhID0gc2VhcmNoRGF0YS5zbGljZSgwLCAxMCk7XHJcbiAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHNlYXJjaERhdGE7XHJcbiAgICAgICB0aGlzLnNkID0gZmFsc2U7XHJcbiAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICB0aGlzLm9uTG9hZCgpO1xyXG4gICAgfVxyXG4gIH1cclxuIl19