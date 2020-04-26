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
      userName: ''
    }, _this.props = {
      title: String
    }, _this.methods = {
      // // 搜索
      // userNameInput(e) {
      //   this.userName = e.detail.value;
      //   // this.$emit('childFn', this.userName);
      //   this.userName = '';

      // },
      // 搜索确认
      moisy: function moisy(e) {
        this.$emit('childFn', e.detail.value);
        var value = e.detail.value.trim();
        if (value) {
          var searchData = wx.getStorageSync('searchData') || [];
          if (this.IsInArray(searchData, e.detail.value) == false) {
            searchData.unshift(e.detail.value);
            wx.setStorageSync('searchData', searchData);
          }
        }
        // ;
      },

      clearTap: function clearTap(a) {
        console.log(a);
        this.userName = a;
        this.$apply();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(input, [{
    key: 'onLoad',
    value: function onLoad() {

      var value = this.$parent.$parent.globalData.value;
      this.userName = value;
      console.log(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YnN0aXR1dGlvbi5qcyJdLCJuYW1lcyI6WyJpbnB1dCIsImRhdGEiLCJ1c2VyTmFtZSIsInByb3BzIiwidGl0bGUiLCJTdHJpbmciLCJtZXRob2RzIiwibW9pc3kiLCJlIiwiJGVtaXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInRyaW0iLCJzZWFyY2hEYXRhIiwid3giLCJnZXRTdG9yYWdlU3luYyIsIklzSW5BcnJheSIsInVuc2hpZnQiLCJzZXRTdG9yYWdlU3luYyIsImNsZWFyVGFwIiwiYSIsImNvbnNvbGUiLCJsb2ciLCIkYXBwbHkiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImFyciIsInZhbCIsInRlc3RTdHIiLCJqb2luIiwiaW5kZXhPZiIsIndlcHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVFOzs7Ozs7Ozs7OztBQURBOzs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0w7QUFDQUMsZ0JBQVU7QUFGTCxLLFFBSVBDLEssR0FBUTtBQUNOQyxhQUFPQztBQURELEssUUFHUkMsTyxHQUFVO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0FDLFdBVFEsaUJBU0ZDLENBVEUsRUFTQztBQUNQLGFBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCRCxFQUFFRSxNQUFGLENBQVNDLEtBQS9CO0FBQ0EsWUFBSUEsUUFBUUgsRUFBRUUsTUFBRixDQUFTQyxLQUFULENBQWVDLElBQWYsRUFBWjtBQUNBLFlBQUlELEtBQUosRUFBVztBQUNULGNBQUlFLGFBQWFDLEdBQUdDLGNBQUgsQ0FBa0IsWUFBbEIsS0FBbUMsRUFBcEQ7QUFDQSxjQUFJLEtBQUtDLFNBQUwsQ0FBZUgsVUFBZixFQUEyQkwsRUFBRUUsTUFBRixDQUFTQyxLQUFwQyxLQUE4QyxLQUFsRCxFQUF5RDtBQUN2REUsdUJBQVdJLE9BQVgsQ0FBbUJULEVBQUVFLE1BQUYsQ0FBU0MsS0FBNUI7QUFDQUcsZUFBR0ksY0FBSCxDQUFrQixZQUFsQixFQUFnQ0wsVUFBaEM7QUFDRDtBQUNGO0FBQ0Q7QUFDRCxPQXBCTzs7QUFxQlJNLGdCQUFVLGtCQUFVQyxDQUFWLEVBQWE7QUFDckJDLGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQyxhQUFLbEIsUUFBTCxHQUFnQmtCLENBQWhCO0FBQ0MsYUFBS0csTUFBTDtBQUNDO0FBekJHLEs7Ozs7OzZCQTJCRDs7QUFFTixVQUFJWixRQUFRLEtBQUthLE9BQUwsQ0FBYUEsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NkLEtBQTVDO0FBQ0MsV0FBS1QsUUFBTCxHQUFnQlMsS0FBaEI7QUFDQVUsY0FBUUMsR0FBUixDQUFZWCxLQUFaO0FBQ0g7QUFDRDs7Ozs4QkFDVWUsRyxFQUFLQyxHLEVBQUs7QUFDbEIsVUFBSUMsVUFBVSxNQUFNRixJQUFJRyxJQUFKLENBQVMsR0FBVCxDQUFOLEdBQXNCLEdBQXBDO0FBQ0EsYUFBT0QsUUFBUUUsT0FBUixDQUFnQixNQUFNSCxHQUFOLEdBQVksR0FBNUIsS0FBb0MsQ0FBQyxDQUE1QztBQUNEOzs7O0VBN0NnQ0ksZUFBS0MsUzs7a0JBQW5CaEMsSyIsImZpbGUiOiJzdWJzdGl0dXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyDmkJzntKLnu4Tku7ZcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBpbnB1dCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIC8vIOaQnOe0ouivjVxyXG4gICAgICB1c2VyTmFtZTogJydcclxuICAgIH07XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgdGl0bGU6IFN0cmluZ1xyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIC8vIOaQnOe0olxyXG4gICAgICAvLyB1c2VyTmFtZUlucHV0KGUpIHtcclxuICAgICAgLy8gICB0aGlzLnVzZXJOYW1lID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgIC8vICAgLy8gdGhpcy4kZW1pdCgnY2hpbGRGbicsIHRoaXMudXNlck5hbWUpO1xyXG4gICAgICAvLyAgIHRoaXMudXNlck5hbWUgPSAnJztcclxuXHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIC8vIOaQnOe0ouehruiupFxyXG4gICAgICBtb2lzeShlKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsIGUuZGV0YWlsLnZhbHVlKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBlLmRldGFpbC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICB2YXIgc2VhcmNoRGF0YSA9IHd4LmdldFN0b3JhZ2VTeW5jKCdzZWFyY2hEYXRhJykgfHwgW107XHJcbiAgICAgICAgICBpZiAodGhpcy5Jc0luQXJyYXkoc2VhcmNoRGF0YSwgZS5kZXRhaWwudmFsdWUpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHNlYXJjaERhdGEudW5zaGlmdChlLmRldGFpbC52YWx1ZSlcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3NlYXJjaERhdGEnLCBzZWFyY2hEYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyA7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNsZWFyVGFwOiBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGEpXHJcbiAgICAgICAgIHRoaXMudXNlck5hbWUgPSBhO1xyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgIH1cclxuICAgIH07XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgXHJcbiAgICAgICBsZXQgdmFsdWUgPSB0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnZhbHVlO1xyXG4gICAgICAgIHRoaXMudXNlck5hbWUgPSB2YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSlcclxuICAgIH1cclxuICAgIC8vIOWIpOaWreaVsOe7hOS4reaYr+WQpuacieafkOS4quWAvFxyXG4gICAgSXNJbkFycmF5KGFyciwgdmFsKSB744CA44CAXHJcbiAgICAgIHZhciB0ZXN0U3RyID0gJywnICsgYXJyLmpvaW4oXCIsXCIpICsgXCIsXCI744CA44CAXHJcbiAgICAgIHJldHVybiB0ZXN0U3RyLmluZGV4T2YoXCIsXCIgKyB2YWwgKyBcIixcIikgIT0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=