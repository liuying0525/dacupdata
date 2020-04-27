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
// 首付slider


var Slider = function (_wepy$component) {
  _inherits(Slider, _wepy$component);

  function Slider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Slider.__proto__ || Object.getPrototypeOf(Slider)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      // 滑动值
      value: {
        type: [Number, String],
        default: 20
      },
      // 最大值
      max: {
        type: [Number, String],
        default: 100
      },
      // 最小值
      min: {
        type: [Number, String],
        default: 0
      },
      // 步长
      step: {
        type: [Number, String],
        default: 1
      },
      // 滑块图片
      blockUrl: {
        type: [Number, String]
      },
      isMonitoring: {
        type: Boolean,
        default: true
      }
    }, _this.data = {
      width: 0,
      screenRatio: 0,
      // 滑块的x坐标
      sliderStartX: 0,
      // 滑块滑动的距离
      activeLength: 0,
      // slider节点的左边界坐标
      sliderLeftX: 0,
      values: ''
    }, _this.methods = {
      sliderStart: function sliderStart(e) {
        var that = this;
        var changedTouches = e.changedTouches[0];
        this.isMonitoring = false;
        // 每次开始滑动时，更新滑块的x坐标
        this.sliderStartX = changedTouches.pageX;
        this.$emit('sliderStart');
      },
      sliderChange: function sliderChange(e) {
        var step = parseInt(this.step);
        var changedTouches = e.changedTouches[0];
        // 滑动的距离
        var activeLength = changedTouches.pageX - this.sliderStartX;
        // 滑动的距离转换成rpx
        var activeLengthRPX = activeLength * this.screenRatio;
        // values 计算: (手指的x坐标 - slider节点的左边界坐标) * 屏幕的像素比 / slider宽度 * (values范围的最大值 - values范围的最小值) + values范围的最小值
        var values = parseInt((changedTouches.pageX - this.sliderLeftX) * this.screenRatio / this.width * (this.max - this.min) + Number(this.min));
        if (activeLength < this.activeLength) {
          // 滑动的距离小于上次滑动的距离，表示向左划
          if (this.values - values >= parseInt(step / 2)) {
            // 手指滑动的距离大于step的一半，向左滑一个step，然后更新values
            this.values -= parseInt(step);
            this.$emit('sliderChange', this.values);
          }
        } else {
          // 滑动的距离大于上次滑动的距离，表示向右划
          if (values - this.values >= parseInt(step / 2)) {
            // 手指滑动的距离大于step的一半，向又滑一个step，然后更新values
            this.values = parseInt(this.values) + parseInt(step);
            this.$emit('sliderChange', this.values);
          }
        }
        this.activeLength = activeLength;

        // 超出边界时
        if (values < this.min) {
          values = this.min;
          this.values = this.min;
          this.$emit('sliderChange', this.values);
        }
        if (values > this.max) {
          values = this.max;
          this.values = this.max;
          this.$emit('sliderChange', this.values);
        }
      },

      // 滑动结束
      sliderEnd: function sliderEnd(e) {
        this.isMonitoring = true;
        var that = this;

        // 超出边界时
        if (this.values < this.min) {
          this.values = this.min;
        }
        if (this.values > this.max) {
          this.values = this.max;
        }

        var detail = e.changedTouches;
        var option = {};
        this.$emit('sliderEnd', detail, option);
      },

      // 滑动取消
      sliderCancel: function sliderCancel(e) {
        var that = this;
        this.isMonitoring = true;
        var detail = e.changedTouches;
        var option = {};
        this.$emit('sliderCancel', detail, option);
      }
    }, _this.events = {
      // 初始化
      attachhed: function attachhed() {
        console.log(this.value);
        var that = this;
        this.screenRatio = this.getSystemScreenRatio();
        this.getWidth();
        var values = this.value;
        that.values = values;
      },
      setValues: function setValues(value) {
        // console.log('setValues', value);
        this.values = value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Slider, [{
    key: 'getWidth',


    // 获取元素的宽度和左边界坐标
    value: function getWidth() {
      var that = this;
      wx.createSelectorQuery().select('#mySlider').boundingClientRect(function (rect) {
        that.width = rect.width * that.screenRatio;
        that.sliderLeftX = rect.left;
        that.$apply();
      }).exec();
      that.$apply();
    }

    // 获取到屏幕像素比

  }, {
    key: 'getSystemScreenRatio',
    value: function getSystemScreenRatio() {
      var res = wx.getSystemInfoSync();
      return 750 / res.screenWidth;
    }
  }]);

  return Slider;
}(_wepy2.default.component);

exports.default = Slider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNsaWRlci5qcyJdLCJuYW1lcyI6WyJTbGlkZXIiLCJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImRlZmF1bHQiLCJtYXgiLCJtaW4iLCJzdGVwIiwiYmxvY2tVcmwiLCJpc01vbml0b3JpbmciLCJCb29sZWFuIiwiZGF0YSIsIndpZHRoIiwic2NyZWVuUmF0aW8iLCJzbGlkZXJTdGFydFgiLCJhY3RpdmVMZW5ndGgiLCJzbGlkZXJMZWZ0WCIsInZhbHVlcyIsIm1ldGhvZHMiLCJzbGlkZXJTdGFydCIsImUiLCJ0aGF0IiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsIiRlbWl0Iiwic2xpZGVyQ2hhbmdlIiwicGFyc2VJbnQiLCJhY3RpdmVMZW5ndGhSUFgiLCJzbGlkZXJFbmQiLCJkZXRhaWwiLCJvcHRpb24iLCJzbGlkZXJDYW5jZWwiLCJldmVudHMiLCJhdHRhY2hoZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtU2NyZWVuUmF0aW8iLCJnZXRXaWR0aCIsInNldFZhbHVlcyIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJsZWZ0IiwiJGFwcGx5IiwiZXhlYyIsInJlcyIsImdldFN5c3RlbUluZm9TeW5jIiwic2NyZWVuV2lkdGgiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLEssR0FBUTtBQUNOO0FBQ0FDLGFBQU87QUFDTEMsY0FBTSxDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FERDtBQUVMQyxpQkFBUztBQUZKLE9BRkQ7QUFNTjtBQUNBQyxXQUFLO0FBQ0hKLGNBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREg7QUFFSEMsaUJBQVM7QUFGTixPQVBDO0FBV047QUFDQUUsV0FBSztBQUNITCxjQUFNLENBQUNDLE1BQUQs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QUFLVCxLQUFMLEdBQWErQixLQUFLL0IsS0FBTCxHQUFhUyxLQUFLUixXQUEvQjtBQUNBUSxhQUFLTCxXQUFMLEdBQW1CMkIsS0FBS0MsSUFBeEI7QUFDQXZCLGFBQUt3QixNQUFMO0FBQ0QsT0FKRCxFQUlHQyxJQUpIO0FBS0F6QixXQUFLd0IsTUFBTDtBQUNEOztBQUVEOzs7OzJDQUN1QjtBQUNyQixVQUFJRSxNQUFNUixHQUFHUyxpQkFBSCxFQUFWO0FBQ0EsYUFBTyxNQUFNRCxJQUFJRSxXQUFqQjtBQUNEOzs7O0VBdEppQ0MsZUFBS0MsUzs7a0JBQXBCckQsTSIsImZpbGUiOiJTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAvLyDpppbku5hzbGlkZXJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICBwcm9wcyA9IHtcclxuICAgICAgLy8g5ruR5Yqo5YC8XHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICBkZWZhdWx0OiAyMCxcclxuICAgICAgfSxcclxuICAgICAgLy8g5pyA5aSn5YC8XHJcbiAgICAgIG1heDoge1xyXG4gICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgZGVmYXVsdDogMTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOacgOWwj+WAvFxyXG4gICAgICBtaW46IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIGRlZmF1bHQ6IDBcclxuICAgICAgfSxcclxuICAgICAgLy8g5q2l6ZW/XHJcbiAgICAgIHN0ZXA6IHtcclxuICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG4gICAgICAgIGRlZmF1bHQ6IDFcclxuICAgICAgfSxcclxuICAgICAgLy8g5ruR5Z2X5Zu+54mHXHJcbiAgICAgIGJsb2NrVXJsOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXVxyXG4gICAgICB9LFxyXG4gICAgICBpc01vbml0b3Jpbmc6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBzY3JlZW5SYXRpbzogMCxcclxuICAgICAgLy8g5ruR5Z2X55qEeOWdkOagh1xyXG4gICAgICBzbGlkZXJTdGFydFg6IDAsXHJcbiAgICAgIC8vIOa7keWdl+a7keWKqOeahOi3neemu1xyXG4gICAgICBhY3RpdmVMZW5ndGg6IDAsXHJcbiAgICAgIC8vIHNsaWRlcuiKgueCueeahOW3pui+ueeVjOWdkOagh1xyXG4gICAgICBzbGlkZXJMZWZ0WDogMCxcclxuICAgICAgdmFsdWVzOiAnJ1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHNsaWRlclN0YXJ0KGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRUb3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOavj+asoeW8gOWni+a7keWKqOaXtu+8jOabtOaWsOa7keWdl+eahHjlnZDmoIdcclxuICAgICAgICB0aGlzLnNsaWRlclN0YXJ0WCA9IGNoYW5nZWRUb3VjaGVzLnBhZ2VYO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlclN0YXJ0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaWRlckNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSBwYXJzZUludCh0aGlzLnN0ZXApO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkVG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgLy8g5ruR5Yqo55qE6Led56a7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUxlbmd0aCA9IGNoYW5nZWRUb3VjaGVzLnBhZ2VYIC0gdGhpcy5zbGlkZXJTdGFydFg7XHJcbiAgICAgICAgLy8g5ruR5Yqo55qE6Led56a76L2s5o2i5oiQcnB4XHJcbiAgICAgICAgbGV0IGFjdGl2ZUxlbmd0aFJQWCA9IGFjdGl2ZUxlbmd0aCAqIHRoaXMuc2NyZWVuUmF0aW87XHJcbiAgICAgICAgLy8gdmFsdWVzIOiuoeeulzogKOaJi+aMh+eahHjlnZDmoIcgLSBzbGlkZXLoioLngrnnmoTlt6bovrnnlYzlnZDmoIcpICog5bGP5bmV55qE5YOP57Sg5q+UIC8gc2xpZGVy5a695bqmICogKHZhbHVlc+iMg+WbtOeahOacgOWkp+WAvCAtIHZhbHVlc+iMg+WbtOeahOacgOWwj+WAvCkgKyB2YWx1ZXPojIPlm7TnmoTmnIDlsI/lgLxcclxuICAgICAgICBsZXQgdmFsdWVzID0gcGFyc2VJbnQoKGNoYW5nZWRUb3VjaGVzLnBhZ2VYIC0gdGhpcy5zbGlkZXJMZWZ0WCkgKiB0aGlzLnNjcmVlblJhdGlvIC8gdGhpcy53aWR0aCAqICh0aGlzLm1heCAtXHJcbiAgICAgICAgICB0aGlzLm1pbikgKyBOdW1iZXIodGhpcy5taW4pKTtcclxuICAgICAgICBpZiAoYWN0aXZlTGVuZ3RoIDwgdGhpcy5hY3RpdmVMZW5ndGgpIHtcclxuICAgICAgICAgIC8vIOa7keWKqOeahOi3neemu+Wwj+S6juS4iuasoea7keWKqOeahOi3neemu++8jOihqOekuuWQkeW3puWIklxyXG4gICAgICAgICAgaWYgKHRoaXMudmFsdWVzIC0gdmFsdWVzID49IHBhcnNlSW50KHN0ZXAgLyAyKSkge1xyXG4gICAgICAgICAgICAvLyDmiYvmjIfmu5HliqjnmoTot53nprvlpKfkuo5zdGVw55qE5LiA5Y2K77yM5ZCR5bem5ruR5LiA5Liqc3RlcO+8jOeEtuWQjuabtOaWsHZhbHVlc1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyAtPSBwYXJzZUludChzdGVwKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyQ2hhbmdlJywgdGhpcy52YWx1ZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyDmu5HliqjnmoTot53nprvlpKfkuo7kuIrmrKHmu5HliqjnmoTot53nprvvvIzooajnpLrlkJHlj7PliJJcclxuICAgICAgICAgIGlmICh2YWx1ZXMgLSB0aGlzLnZhbHVlcyA+PSBwYXJzZUludChzdGVwIC8gMikpIHtcclxuICAgICAgICAgICAgLy8g5omL5oyH5ruR5Yqo55qE6Led56a75aSn5LqOc3RlcOeahOS4gOWNiu+8jOWQkeWPiOa7keS4gOS4qnN0ZXDvvIznhLblkI7mm7TmlrB2YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBwYXJzZUludCh0aGlzLnZhbHVlcykgKyBwYXJzZUludChzdGVwKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyQ2hhbmdlJywgdGhpcy52YWx1ZXMpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGl2ZUxlbmd0aCA9IGFjdGl2ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8g6LaF5Ye66L6555WM5pe2XHJcbiAgICAgICAgaWYgKHZhbHVlcyA8IHRoaXMubWluKSB7XHJcbiAgICAgICAgICB2YWx1ZXMgPSB0aGlzLm1pbjtcclxuICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy5taW47XHJcbiAgICAgICAgICB0aGlzLiRlbWl0KCdzbGlkZXJDaGFuZ2UnLCB0aGlzLnZhbHVlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZXMgPiB0aGlzLm1heCkge1xyXG4gICAgICAgICAgdmFsdWVzID0gdGhpcy5tYXg7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMubWF4O1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyQ2hhbmdlJywgdGhpcy52YWx1ZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g5ruR5Yqo57uT5p2fXHJcbiAgICAgIHNsaWRlckVuZChlKSB7XHJcbiAgICAgICAgdGhpcy5pc01vbml0b3JpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g6LaF5Ye66L6555WM5pe2XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzIDwgdGhpcy5taW4pIHtcclxuICAgICAgICAgIHRoaXMudmFsdWVzID0gdGhpcy5taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnZhbHVlcyA+IHRoaXMubWF4KSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMubWF4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGRldGFpbCA9IGUuY2hhbmdlZFRvdWNoZXM7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlckVuZCcsIGRldGFpbCwgb3B0aW9uKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5ruR5Yqo5Y+W5raIXHJcbiAgICAgIHNsaWRlckNhbmNlbChlKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuaXNNb25pdG9yaW5nID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGV0YWlsID0gZS5jaGFuZ2VkVG91Y2hlcztcclxuICAgICAgICBsZXQgb3B0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyQ2FuY2VsJywgZGV0YWlsLCBvcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnRzID0ge1xyXG4gICAgICAvLyDliJ3lp4vljJZcclxuICAgICAgYXR0YWNoaGVkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWUpXHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuUmF0aW8gPSB0aGlzLmdldFN5c3RlbVNjcmVlblJhdGlvKCk7XHJcbiAgICAgICAgdGhpcy5nZXRXaWR0aCgpO1xyXG4gICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIHRoYXQudmFsdWVzID0gdmFsdWVzO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXRWYWx1ZXModmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0VmFsdWVzJywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDojrflj5blhYPntKDnmoTlrr3luqblkozlt6bovrnnlYzlnZDmoIdcclxuICAgIGdldFdpZHRoKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJyNteVNsaWRlcicpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIHRoYXQud2lkdGggPSByZWN0LndpZHRoICogdGhhdC5zY3JlZW5SYXRpbztcclxuICAgICAgICB0aGF0LnNsaWRlckxlZnRYID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIH0pLmV4ZWMoKVxyXG4gICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWIsOWxj+W5leWDj+e0oOavlFxyXG4gICAgZ2V0U3lzdGVtU2NyZWVuUmF0aW8oKSB7XHJcbiAgICAgIHZhciByZXMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICByZXR1cm4gNzUwIC8gcmVzLnNjcmVlbldpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuIl19