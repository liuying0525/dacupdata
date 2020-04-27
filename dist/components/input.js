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
// 搜索组件


var input = function (_wepy$component) {
  _inherits(input, _wepy$component);

  function input() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, input);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = input.__proto__ || Object.getPrototypeOf(input)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 搜索词
      userName: '',
      isClearShow: false
    }, _this.props = {
      title: String
    }, _this.methods = {
      // 搜索
      userNameInput: function userNameInput(e) {
        this.userName = e.detail.value;
        this.$parent.$parent.globalData.value = e.detail.value;
        this.$emit('childFn', this.userName);
        var value = e.detail.value.trim();
        if (value) {
          var searchData = wx.getStorageSync('searchData') || [];
          if (this.IsInArray(searchData, e.detail.value) == false) {
            searchData.unshift(e.detail.value);
            wx.setStorageSync('searchData', searchData);
          }
        }
      },


      // 搜索确认
      my: function my(e) {
        this.$emit('enter', e.detail.value);
        this.$parent.$parent.globalData.value = e.detail.value;
        var value = e.detail.value.trim();
        if (value) {
          var searchData = wx.getStorageSync('searchData') || [];
          if (this.IsInArray(searchData, e.detail.value) == false) {
            searchData.unshift(e.detail.value);
            wx.setStorageSync('searchData', searchData);
          }
        }
      },

      initInput: function initInput(a) {
        this.userName = a;
      }

    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(input, [{
    key: 'onLoad',
    value: function onLoad() {
      this.userName = '';
    }
    // 判断数组中是否有某个值

  }, {
    key: 'IsInArray',
    value: function IsInArray(arr, val) {
      var testStr = ',' + arr.join(",") + ",";
      return testStr.indexOf("," + val + ",") != -1;
    }
  }]);

  return input;
}(_wepy2.default.component);

exports.default = input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmpzIl0sIm5hbWVzIjpbImlucHV0IiwiZGF0YSIsInVzZXJOYW1lIiwiaXNDbGVhclNob3ciLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibWV0aG9kcyIsInVzZXJOYW1lSW5wdXQiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIiRlbWl0IiwidHJpbSIsInNlYXJjaERhdGEiLCJ3eCIsImdldFN0b3JhZ2VTeW5jIiwiSXNJbkFycmF5IiwidW5zaGlmdCIsInNldFN0b3JhZ2VTeW5jIiwibXkiLCJpbml0SW5wdXQiLCJhIiwiZXZlbnRzIiwiYXJyIiwidmFsIiwidGVzdFN0ciIsImpvaW4iLCJpbmRleE9mIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7O0FBREE7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxJLEdBQU87QUFDTDtBQUNBQyxnQkFBVSxFQUZMO0FBR0hDLG1CQUFhO0FBSFYsSyxRQUtQQyxLLEdBQVE7QUFDTkMsYUFBT0M7QUFERCxLLFFBR1JDLE8sR0FBVTtBQUNSO0FBQ0FDLG1CQUZRLHlCQUVNQyxDQUZOLEVBRVM7QUFDZixhQUFLUCxRQUFMLEdBQWdCTyxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0MsYUFBS0MsT0FBTCxDQUFhQSxPQUFiLENBQXFCQyxVQUFyQixDQUFnQ0YsS0FBaEMsR0FBc0NGLEVBQUVDLE1BQUYsQ0FBU0MsS0FBL0M7QUFDRCxhQUFLRyxLQUFMLENBQVcsU0FBWCxFQUFzQixLQUFLWixRQUEzQjtBQUNOLFlBQUlTLFFBQVFGLEVBQUVDLE1BQUYsQ0FBU0MsS0FBVCxDQUFlSSxJQUFmLEVBQVo7QUFDTSxZQUFJSixLQUFKLEVBQVc7QUFDVCxjQUFJSyxhQUFhQyxHQUFHQyxjQUFILENBQWtCLFlBQWxCLEtBQW1DLEVBQXBEO0FBQ0EsY0FBSSxLQUFLQyxTQUFMLENBQWVILFVBQWYsRUFBMkJQLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEMsS0FBOEMsS0FBbEQsRUFBeUQ7QUFDdkRLLHVCQUFXSSxPQUFYLENBQW1CWCxFQUFFQyxNQUFGLENBQVNDLEtBQTVCO0FBQ0FNLGVBQUdJLGNBQUgsQ0FBa0IsWUFBbEIsRUFBZ0NMLFVBQWhDO0FBQ0Q7QUFDRjtBQUNGLE9BZE87OztBQWdCUjtBQUNBTSxRQWpCUSxjQWlCTGIsQ0FqQkssRUFpQkY7QUFDSixhQUFLSyxLQUFMLENBQVcsT0FBWCxFQUFvQkwsRUFBRUMsTUFBRixDQUFTQyxLQUE3QjtBQUNDLGFBQUtDLE9BQUwsQ0FBYUEsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NGLEtBQWhDLEdBQXNDRixFQUFFQyxNQUFGLENBQVNDLEtBQS9DO0FBQ0QsWUFBSUEsUUFBUUYsRUFBRUMsTUFBRixDQUFTQyxLQUFULENBQWVJLElBQWYsRUFBWjtBQUNBLFlBQUlKLEtBQUosRUFBVztBQUNULGNBQUlLLGFBQWFDLEdBQUdDLGNBQUgsQ0FBa0IsWUFBbEIsS0FBbUMsRUFBcEQ7QUFDQSxjQUFJLEtBQUtDLFNBQUwsQ0FBZUgsVUFBZixFQUEyQlAsRUFBRUMsTUFBRixDQUFTQyxLQUFwQyxLQUE4QyxLQUFsRCxFQUF5RDtBQUN2REssdUJBQVdJLE9BQVgsQ0FBbUJYLEVBQUVDLE1BQUYsQ0FBU0MsS0FBNUI7QUFDQU0sZUFBR0ksY0FBSCxDQUFrQixZQUFsQixFQUFnQ0wsVUFBaEM7QUFDRDtBQUNGO0FBRUYsT0E3Qk87O0FBOEJSTyxpQkFBVyxtQkFBVUMsQ0FBVixFQUFhO0FBQ3RCLGFBQUt0QixRQUFMLEdBQWdCc0IsQ0FBaEI7QUFDRDs7QUFoQ08sSyxRQXFDVkMsTSxHQUFPLEU7Ozs7OzZCQUdFO0FBQ1AsV0FBS3ZCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDtBQUNEOzs7OzhCQUNVd0IsRyxFQUFLQyxHLEVBQUs7QUFDbEIsVUFBSUMsVUFBVSxNQUFNRixJQUFJRyxJQUFKLENBQVMsR0FBVCxDQUFOLEdBQXNCLEdBQXBDO0FBQ0EsYUFBT0QsUUFBUUUsT0FBUixDQUFnQixNQUFNSCxHQUFOLEdBQVksR0FBNUIsS0FBb0MsQ0FBQyxDQUE1QztBQUNEOzs7O0VBeERnQ0ksZUFBS0MsUzs7a0JBQW5CaEMsSyIsImZpbGUiOiJpbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIC8vIOaQnOe0oue7hOS7tlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGlucHV0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgLy8g5pCc57Si6K+NXHJcbiAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgICBpc0NsZWFyU2hvdzogZmFsc2UsXHJcbiAgICB9O1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDmkJzntKJcclxuICAgICAgdXNlck5hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnZhbHVlPWUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoaWxkRm4nLCB0aGlzLnVzZXJOYW1lKTtcclxuICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB2YXIgc2VhcmNoRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJykgfHwgW107XHJcbiAgICAgICAgICBpZiAodGhpcy5Jc0luQXJyYXkoc2VhcmNoRGF0YSwgZS5kZXRhaWwudmFsdWUpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaERhdGEudW5zaGlmdChlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnLCBzZWFyY2hEYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgLy8g5pCc57Si56Gu6K6kXHJcbiAgICAgIG15KGUpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdlbnRlcicsIGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICAgdGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS52YWx1ZT1lLmRldGFpbC52YWx1ZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB2YXIgc2VhcmNoRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJykgfHwgW107XHJcbiAgICAgICAgICBpZiAodGhpcy5Jc0luQXJyYXkoc2VhcmNoRGF0YSwgZS5kZXRhaWwudmFsdWUpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaERhdGEudW5zaGlmdChlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnLCBzZWFyY2hEYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0sXHJcbiAgICAgIGluaXRJbnB1dDogZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gYTtcclxuICAgICAgfSxcclxuICAgIFxyXG4gICAgICAgXHJcbiAgICB9OyBcclxuICAgXHJcbiAgICBldmVudHM9e1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICB0aGlzLnVzZXJOYW1lID0gJyc7XHJcbiAgICB9XHJcbiAgICAvLyDliKTmlq3mlbDnu4TkuK3mmK/lkKbmnInmn5DkuKrlgLxcclxuICAgIElzSW5BcnJheShhcnIsIHZhbCkge+OAgOOAgFxyXG4gICAgICB2YXIgdGVzdFN0ciA9ICcsJyArIGFyci5qb2luKFwiLFwiKSArIFwiLFwiO+OAgOOAgFxyXG4gICAgICByZXR1cm4gdGVzdFN0ci5pbmRleE9mKFwiLFwiICsgdmFsICsgXCIsXCIpICE9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuIl19