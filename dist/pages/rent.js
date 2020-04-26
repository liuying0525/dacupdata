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
          url: 'seek?id=' + e.currentTarget.id
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
          url: 'seek?id=' + e.currentTarget.id
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
          url: 'seek?id=' + e
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
          wordtype: 'directrent'
        },
        // 后台返回值
        success: function success(data) {
          // 定义返回值的数据
          are.hotsear = data.data.hotsearchwordJA;
          // 给数据进行绑定
          are.$apply();
        }
      });
      var searchData = wx.getStorageSync('searchData') || [];
      if (searchData.length > 10) searchData = searchData.slice(0, 10);
      this.searchData = searchData;
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
      this.onLoad();
      this.url_link = this.$parent.globalData.url_link;
    }
  }]);

  return brandd;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(brandd , 'pages/rent'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbnQuanMiXSwibmFtZXMiOlsiYnJhbmRkIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImlucHV0ZCIsIklucHV0IiwiZGF0YSIsInVybF9saW5rIiwic2VsZWN0UGVyc29ucyIsInRleHR4IiwiaG90c2VhciIsImpzb25fbGluayIsInNlYXJjaERhdGEiLCJzZCIsImNvZGUiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwiYnJhc2QiLCJ2YWx1ZSIsImUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInBhZ2VpZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaG90c2VhcmNod29yZGlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJJc0luQXJyYXkiLCJ1bnNoaWZ0Iiwic2V0U3RvcmFnZVN5bmMiLCJicmFkIiwibXkiLCJhcmUiLCJyZXF1ZXN0Iiwic2VhcmNod29yZCIsInN1Y2Nlc3MiLCJmdXp6eXNlYXJjaEpBIiwiJGFwcGx5IiwiZW50ZXIiLCJkZWxldGVIaXN0b3J5IiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInJlcyIsImNvbmZpcm0iLCJzd2l0Y2hUYWIiLCJ3b3JkdHlwZSIsImhvdHNlYXJjaHdvcmRKQSIsImxlbmd0aCIsInNsaWNlIiwiYXJyIiwidmFsIiwidGVzdFN0ciIsImpvaW4iLCJpbmRleE9mIiwib25Mb2FkIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVkMsTyxHQUFVLEUsUUFDYkMsTSxHQUFTLEVBQUMsVUFB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QVc0QyxNQUFYLEdBQW9CLEVBQXhCLEVBQTRCNUMsYUFBYUEsV0FBVzZDLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsRUFBcEIsQ0FBYjtBQUM1QixXQUFLN0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OztBQUNEOzhCQUNVOEMsRyxFQUFLQyxHLEVBQUs7QUFDbEIsVUFBSUMsVUFBVSxNQUFNRixJQUFJRyxJQUFKLENBQVMsR0FBVCxDQUFOLEdBQXNCLEdBQXBDO0FBQ0EsYUFBT0QsUUFBUUUsT0FBUixDQUFnQixNQUFNSCxHQUFOLEdBQVksR0FBNUIsS0FBb0MsQ0FBQyxDQUE1QztBQUNEOztBQUVEOzs7OzZCQUNTO0FBQ1AsV0FBS2xELEtBQUwsR0FBYSxFQUFiO0FBQ0EsV0FBS3NELE1BQUw7QUFDQSxXQUFLeEQsUUFBTCxHQUFnQixLQUFLYyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JmLFFBQXhDO0FBQ0Q7Ozs7RUFsSmlDeUQsZUFBS0MsSTs7a0JBQXBCcEUsTSIsImZpbGUiOiJyZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgaW1wb3J0IElucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5wdXQnO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGJyYW5kZCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKInXHJcbiAgICB9O1xyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImlucHV0ZFwiOntcInhtbG5zOnYtb25cIjpcIlwiLFwidmFsdWVcIjpcIlwifX07XHJcbiRldmVudHMgPSB7XCJpbnB1dGRcIjp7XCJ2LW9uOmNoaWxkRm5cIjpcIm15XCIsXCJ2LW9uOmVudGVyXCI6XCJlbnRlclwifX07XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICBpbnB1dGQ6IElucHV0XHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBzZWxlY3RQZXJzb25zOiBmYWxzZSxcclxuICAgICAgLy8g5pCc57Si5Ye655qE6L2m57O75YiX6KGoXHJcbiAgICAgIHRleHR4OiBbXSxcclxuICAgICAgLy8g54Ot5pCcXHJcbiAgICAgIGhvdHNlYXI6ICcnLFxyXG4gICAgICBqc29uX2xpbms6ICcnLFxyXG4gICAgICAvLyDljoblj7LorrDlvZVcclxuICAgICAgc2VhcmNoRGF0YTogW10sXHJcbiAgICAgIC8vIOWOhuWPsuiusOW9leWFg+e0oOmakOiXj1xyXG4gICAgICBzZDogZmFsc2UsXHJcbiAgICAgIGNvZGU6ICcnXHJcbiAgICB9O1xyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhdGg6ICcvcGFnZXMvYnJhbmRkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOi3s+i9rOaQnOe0oue7k+aenOmhtVxyXG4gICAgICBicmFzZCh2YWx1ZSwgZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJ2RhaWt1YW4nKSB7XHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaG90c2VhcmNod29yZGlkXTtcclxuICAgICAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnBhZ2VuYW1lID0gWzFdO1xyXG4gICAgICAgICAgdGhpcy4kcGFyZW50LmNsaWNrbnVtb3JkZXJudW1zdGF0KDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJ3NlZWs/aWQ9JyArIGUuY3VycmVudFRhcmdldC5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIOa3u+WKoOaQnOe0ouiusOW9lVxyXG4gICAgICAgIHZhciBzZWFyY2hEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnKSB8fCBbXTtcclxuICAgICAgICBpZiAodGhpcy5Jc0luQXJyYXkoc2VhcmNoRGF0YSwgZS5jdXJyZW50VGFyZ2V0LmlkKSA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgc2VhcmNoRGF0YS51bnNoaWZ0KGUuY3VycmVudFRhcmdldC5pZClcclxuICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJywgc2VhcmNoRGF0YSlcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGJyYWQoZSkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnc2Vlaz9pZD0nICsgZS5jdXJyZW50VGFyZ2V0LmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g5re75Yqg5pCc57Si6K6w5b2VXHJcbiAgICAgICAgdmFyIHNlYXJjaERhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnc2VhcmNoRGF0YScpIHx8IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLklzSW5BcnJheShzZWFyY2hEYXRhLCBlLmN1cnJlbnRUYXJnZXQuaWQpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICBzZWFyY2hEYXRhLnVuc2hpZnQoZS5jdXJyZW50VGFyZ2V0LmlkKVxyXG4gICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnLCBzZWFyY2hEYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g5qih57OK5pCc57SiXHJcbiAgICAgIG15KGUpIHtcclxuICAgICAgICBsZXQganNvbl9saW5rID0gdGhpcy5qc29uX2xpbms7XHJcbiAgICAgICAgbGV0IGFyZSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGUgIT0gJyAnKSB7XHJcbiAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgICAgIHVybDoganNvbl9saW5rICsgJy9hcGkvd3hhcHAvc2VhcmNoL2Z1enp5c2VhcmNoJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIHNlYXJjaHdvcmQ6IGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgLy8g5a6a5LmJ6L+U5Zue5YC855qE5pWw5o2uXHJcbiAgICAgICAgICAgICAgYXJlLnRleHR4ID0gZGF0YS5kYXRhLmZ1enp5c2VhcmNoSkE7XHJcbiAgICAgICAgICAgICAgYXJlLmNvZGUgPSBkYXRhLmRhdGEuY29kZTtcclxuICAgICAgICAgICAgICAvLyDnu5nmlbDmja7ov5vooYznu5HlrppcclxuICAgICAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RQZXJzb25zID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOaJi+acuumUruebmOaQnOe0olxyXG4gICAgICBlbnRlcihlKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdzZWVrP2lkPScgKyBlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50ZXh0eCA9IFtdO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDmuIXnqbrljoblj7LorrDlvZVcclxuICAgICAgZGVsZXRlSGlzdG9yeTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+aYr+WQpuWIoOmZpOWOhuWPsuaQnOe0oicsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIHRoYXQuc2QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIHRoYXQuc2VhcmNoRGF0YSA9IFsnJ107XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnc2VhcmNoRGF0YScsIFtdKTtcclxuICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnLi4vcGFnZXMvYnJhbmRkJ1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICBsZXQgYXJlID0gdGhpcztcclxuICAgICAgdGhpcy5zZWxlY3RQZXJzb25zID0gZmFsc2U7XHJcbiAgICAgIC8vIOWumuS5iXVybFxyXG4gICAgICBsZXQganNvbl9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuanNvbl9saW5rO1xyXG4gICAgICBhcmUuanNvbl9saW5rID0ganNvbl9saW5rO1xyXG4gICAgICAvLyDng63mkJzor41cclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgLy8gdXJs5ou85o6lXHJcbiAgICAgICAgdXJsOiBqc29uX2xpbmsgKyAnL2FwaS93eGFwcC9zZWFyY2gvaG90c2VhcmNod29yZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgd29yZHR5cGU6ICdkaXJlY3RyZW50J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8g5ZCO5Y+w6L+U5Zue5YC8XHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIC8vIOWumuS5iei/lOWbnuWAvOeahOaVsOaNrlxyXG4gICAgICAgICAgYXJlLmhvdHNlYXIgPSBkYXRhLmRhdGEuaG90c2VhcmNod29yZEpBO1xyXG4gICAgICAgICAgLy8g57uZ5pWw5o2u6L+b6KGM57uR5a6aXHJcbiAgICAgICAgICBhcmUuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdmFyIHNlYXJjaERhdGEgPSB3eC5nZXRTdG9yYWdlU3luYygnc2VhcmNoRGF0YScpIHx8IFtdO1xyXG4gICAgICBpZiAoc2VhcmNoRGF0YS5sZW5ndGggPiAxMCkgc2VhcmNoRGF0YSA9IHNlYXJjaERhdGEuc2xpY2UoMCwgMTApO1xyXG4gICAgICB0aGlzLnNlYXJjaERhdGEgPSBzZWFyY2hEYXRhO1xyXG4gICAgfTtcclxuICAgIC8vIOWIpOaWreaVsOe7hOmHjOaYr+WQpuacieafkOS4quWAvFxyXG4gICAgSXNJbkFycmF5KGFyciwgdmFsKSB744CA44CAXHJcbiAgICAgIHZhciB0ZXN0U3RyID0gJywnICsgYXJyLmpvaW4oXCIsXCIpICsgXCIsXCI744CA44CAXHJcbiAgICAgIHJldHVybiB0ZXN0U3RyLmluZGV4T2YoXCIsXCIgKyB2YWwgKyBcIixcIikgIT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g5Yid5aeL5YyW5pWw5o2uXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMudGV4dHggPSBbXTtcclxuICAgICAgdGhpcy5vbkxvYWQoKTtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgfVxyXG4gIH1cclxuIl19