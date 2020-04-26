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
// 期限slider


var qixianSlider = function (_wepy$component) {
  _inherits(qixianSlider, _wepy$component);

  function qixianSlider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, qixianSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = qixianSlider.__proto__ || Object.getPrototypeOf(qixianSlider)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
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
      values: '',
      // 最小值
      min: 0,
      // 最大值
      max: 100,
      // 范围
      list: [],
      value: 0,
      // 步数
      step: 1
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
            var qixianValue = this.list[this.values / step];
            this.$emit('sliderChange', qixianValue);
          }
        } else {
          // 滑动的距离大于上次滑动的距离，表示向右划
          if (values - this.values >= parseInt(step / 2)) {
            // 手指滑动的距离大于step的一半，向又滑一个step，然后更新values
            this.values = parseInt(this.values) + parseInt(step);
            var _qixianValue = this.list[this.values / step];
            this.$emit('sliderChange', _qixianValue);
          }
        }
        this.activeLength = activeLength;

        // 超出边界时
        if (values < 0) {
          values = 0;
          this.values = 0;
          var _qixianValue2 = this.list[this.values / step];
          this.$emit('sliderChange', _qixianValue2);
        }
        if (values > this.step * (this.list.length - 1)) {
          values = this.step * (this.list.length - 1);
          this.values = this.step * (this.list.length - 1);
          var _qixianValue3 = this.list[this.values / step];
          this.$emit('sliderChange', _qixianValue3);
        }
      },
      sliderEnd: function sliderEnd(e) {
        this.isMonitoring = true;
        var that = this;

        // 超出边界时
        if (this.values < 0) {
          this.values = 0;
        }
        if (this.values > this.step * (this.list.length - 1)) {
          this.values = this.step * (this.list.length - 1);
        }

        var detail = e.changedTouches;
        var option = {};
        this.$emit('sliderEnd', detail, option);
      },
      sliderCancel: function sliderCancel(e) {
        var that = this;
        this.isMonitoring = true;
        var detail = e.changedTouches;
        var option = {};
        this.$emit('sliderCancel', detail, option);
      }
    }, _this.events = {
      // 初始化
      attachhed: function attachhed(list, value) {
        var that = this;
        this.screenRatio = this.getSystemScreenRatio();
        this.getWidth();
        this.list = list;
        this.value = value;
        this.step = parseInt(100 / (this.list.length - 1));
        this.values = this.step * this.list.indexOf(parseInt(this.value));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(qixianSlider, [{
    key: 'getWidth',


    // 获取元素的宽度和左边界坐标
    value: function getWidth() {
      var that = this;
      wx.createSelectorQuery().select('#mySliders').boundingClientRect(function (rect) {
        that.width = rect.width * that.screenRatio;
        that.sliderLeftX = rect.left;
        that.$apply();
      }).exec();
      that.$apply();
    }

    // 获取屏幕像素比

  }, {
    key: 'getSystemScreenRatio',
    value: function getSystemScreenRatio() {
      var res = wx.getSystemInfoSync();
      return 750 / res.screenWidth;
    }
  }]);

  return qixianSlider;
}(_wepy2.default.component);

exports.default = qixianSlider;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInFpeGlhblNsaWRlci5qcyJdLCJuYW1lcyI6WyJxaXhpYW5TbGlkZXIiLCJwcm9wcyIsImJsb2NrVXJsIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImlzTW9uaXRvcmluZyIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiZGF0YSIsIndpZHRoIiwic2NyZWVuUmF0aW8iLCJzbGlkZXJTdGFydFgiLCJhY3RpdmVMZW5ndGgiLCJzbGlkZXJMZWZ0WCIsInZhbHVlcyIsIm1pbiIsIm1heCIsImxpc3QiLCJ2YWx1ZSIsInN0ZXAiLCJtZXRob2RzIiwic2xpZGVyU3RhcnQiLCJlIiwidGhhdCIsImNoYW5nZWRUb3VjaGVzIiwicGFnZVgiLCIkZW1pdCIsInNsaWRlckNoYW5nZSIsInBhcnNlSW50IiwiYWN0aXZlTGVuZ3RoUlBYIiwicWl4aWFuVmFsdWUiLCJsZW5ndGgiLCJzbGlkZXJFbmQiLCJkZXRhaWwiLCJvcHRpb24iLCJzbGlkZXJDYW5jZWwiLCJldmVudHMiLCJhdHRhY2hoZWQiLCJnZXRTeXN0ZW1TY3JlZW5SYXRpbyIsImdldFdpZHRoIiwiaW5kZXhPZiIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsInJlY3QiLCJsZWZ0IiwiJGFwcGx5IiwiZXhlYyIsInJlcyIsImdldFN5c3RlbUluZm9TeW5jIiwic2NyZWVuV2lkdGgiLCJ3ZXB5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFRTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLEssR0FBUTtBQUNOQyxnQkFBVTtBQUNSQyxjQUFNLENBQUNDLE1BQUQsRUFBU0MsTUFBVDtBQURFLE9BREo7QUFJTkMsb0JBQWM7QUFDWkgsY0FBTUksT0FETTtBQUVaQyxpQkFBUztBQUZHO0FBSlIsSyxRQVVSQyxJLEdBQU87QUFDTEMsYUFBTyxDQURGO0FBRUxDLG1CQUFhLENBRlI7QUFHTDtBQUNBQyxv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QUFZUyxTQUFTLE9BQU8sS0FBS1gsSUFBTCxDQUFVYyxNQUFWLEdBQW1CLENBQTFCLENBQVQsQ0FBWjtBQUNBLGFBQUtqQixNQUFMLEdBQWMsS0FBS0ssSUFBTCxHQUFZLEtBQUtGLElBQUwsQ0FBVXVCLE9BQVYsQ0FBa0JaLFNBQVMsS0FBS1YsS0FBZCxDQUFsQixDQUExQjtBQUNEO0FBVk0sSzs7Ozs7OztBQWFUOytCQUNXO0FBQ1QsVUFBSUssT0FBTyxJQUFYO0FBQ0FrQixTQUFHQyxtQkFBSCxHQUF5QkMsTUFBekIsQ0FBZ0MsWUFBaEMsRUFBOENDLGtCQUE5QyxDQUFpRSxVQUFVQyxJQUFWLEVBQWdCO0FBQy9FdEIsYUFBS2QsS0FBTCxHQUFhb0MsS0FBS3BDLEtBQUwsR0FBYWMsS0FBS2IsV0FBL0I7QUFDQWEsYUFBS1YsV0FBTCxHQUFtQmdDLEtBQUtDLElBQXhCO0FBQ0F2QixhQUFLd0IsTUFBTDtBQUNELE9BSkQsRUFJR0MsSUFKSDtBQUtBekIsV0FBS3dCLE1BQUw7QUFDRDs7QUFFRDs7OzsyQ0FDdUI7QUFDckIsVUFBSUUsTUFBTVIsR0FBR1MsaUJBQUgsRUFBVjtBQUNBLGFBQU8sTUFBTUQsSUFBSUUsV0FBakI7QUFDRDs7OztFQTFJdUNDLGVBQUtDLFM7O2tCQUExQnRELFkiLCJmaWxlIjoicWl4aWFuU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLy8g5pyf6ZmQc2xpZGVyXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcWl4aWFuU2xpZGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgcHJvcHMgPSB7XHJcbiAgICAgIGJsb2NrVXJsOiB7XHJcbiAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXVxyXG4gICAgICB9LFxyXG4gICAgICBpc01vbml0b3Jpbmc6IHtcclxuICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgIGRlZmF1bHQ6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHdpZHRoOiAwLFxyXG4gICAgICBzY3JlZW5SYXRpbzogMCxcclxuICAgICAgLy8g5ruR5Z2X55qEeOWdkOagh1xyXG4gICAgICBzbGlkZXJTdGFydFg6IDAsXHJcbiAgICAgIC8vIOa7keWdl+a7keWKqOeahOi3neemu1xyXG4gICAgICBhY3RpdmVMZW5ndGg6IDAsXHJcbiAgICAgIC8vIHNsaWRlcuiKgueCueeahOW3pui+ueeVjOWdkOagh1xyXG4gICAgICBzbGlkZXJMZWZ0WDogMCxcclxuICAgICAgdmFsdWVzOiAnJyxcclxuICAgICAgLy8g5pyA5bCP5YC8XHJcbiAgICAgIG1pbjogMCxcclxuICAgICAgLy8g5pyA5aSn5YC8XHJcbiAgICAgIG1heDogMTAwLFxyXG4gICAgICAvLyDojIPlm7RcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAvLyDmraXmlbBcclxuICAgICAgc3RlcDogMVxyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIHNsaWRlclN0YXJ0KGUpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGNoYW5nZWRUb3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcclxuICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIOavj+asoeW8gOWni+a7keWKqOaXtu+8jOabtOaWsOa7keWdl+eahHjlnZDmoIdcclxuICAgICAgICB0aGlzLnNsaWRlclN0YXJ0WCA9IGNoYW5nZWRUb3VjaGVzLnBhZ2VYO1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlclN0YXJ0Jyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaWRlckNoYW5nZShlKSB7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSBwYXJzZUludCh0aGlzLnN0ZXApO1xyXG4gICAgICAgIGxldCBjaGFuZ2VkVG91Y2hlcyA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcbiAgICAgICAgLy8g5ruR5Yqo55qE6Led56a7XHJcbiAgICAgICAgbGV0IGFjdGl2ZUxlbmd0aCA9IGNoYW5nZWRUb3VjaGVzLnBhZ2VYIC0gdGhpcy5zbGlkZXJTdGFydFg7XHJcbiAgICAgICAgLy8g5ruR5Yqo55qE6Led56a76L2s5o2i5oiQcnB4XHJcbiAgICAgICAgbGV0IGFjdGl2ZUxlbmd0aFJQWCA9IGFjdGl2ZUxlbmd0aCAqIHRoaXMuc2NyZWVuUmF0aW87XHJcbiAgICAgICAgLy8gdmFsdWVzIOiuoeeulzogKOaJi+aMh+eahHjlnZDmoIcgLSBzbGlkZXLoioLngrnnmoTlt6bovrnnlYzlnZDmoIcpICog5bGP5bmV55qE5YOP57Sg5q+UIC8gc2xpZGVy5a695bqmICogKHZhbHVlc+iMg+WbtOeahOacgOWkp+WAvCAtIHZhbHVlc+iMg+WbtOeahOacgOWwj+WAvCkgKyB2YWx1ZXPojIPlm7TnmoTmnIDlsI/lgLxcclxuICAgICAgICBsZXQgdmFsdWVzID0gcGFyc2VJbnQoKGNoYW5nZWRUb3VjaGVzLnBhZ2VYIC0gdGhpcy5zbGlkZXJMZWZ0WCkgKiB0aGlzLnNjcmVlblJhdGlvIC8gdGhpcy53aWR0aCAqICh0aGlzLm1heCAtXHJcbiAgICAgICAgICB0aGlzLm1pbikgKyBOdW1iZXIodGhpcy5taW4pKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZUxlbmd0aCA8IHRoaXMuYWN0aXZlTGVuZ3RoKSB7XHJcbiAgICAgICAgICAvLyDmu5HliqjnmoTot53nprvlsI/kuo7kuIrmrKHmu5HliqjnmoTot53nprvvvIzooajnpLrlkJHlt6bliJJcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlcyAtIHZhbHVlcyA+PSBwYXJzZUludChzdGVwIC8gMikpIHtcclxuICAgICAgICAgICAgLy8g5omL5oyH5ruR5Yqo55qE6Led56a75aSn5LqOc3RlcOeahOS4gOWNiu+8jOWQkeW3pua7keS4gOS4qnN0ZXDvvIznhLblkI7mm7TmlrB2YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgLT0gcGFyc2VJbnQoc3RlcCk7XHJcbiAgICAgICAgICAgIGxldCBxaXhpYW5WYWx1ZSA9IHRoaXMubGlzdFt0aGlzLnZhbHVlcyAvIHN0ZXBdO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzbGlkZXJDaGFuZ2UnLCBxaXhpYW5WYWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIOa7keWKqOeahOi3neemu+Wkp+S6juS4iuasoea7keWKqOeahOi3neemu++8jOihqOekuuWQkeWPs+WIklxyXG4gICAgICAgICAgaWYgKHZhbHVlcyAtIHRoaXMudmFsdWVzID49IHBhcnNlSW50KHN0ZXAgLyAyKSkge1xyXG4gICAgICAgICAgICAvLyDmiYvmjIfmu5HliqjnmoTot53nprvlpKfkuo5zdGVw55qE5LiA5Y2K77yM5ZCR5Y+I5ruR5LiA5Liqc3RlcO+8jOeEtuWQjuabtOaWsHZhbHVlc1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlcyA9IHBhcnNlSW50KHRoaXMudmFsdWVzKSArIHBhcnNlSW50KHN0ZXApO1xyXG4gICAgICAgICAgICBsZXQgcWl4aWFuVmFsdWUgPSB0aGlzLmxpc3RbdGhpcy52YWx1ZXMgLyBzdGVwXTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyQ2hhbmdlJywgcWl4aWFuVmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFjdGl2ZUxlbmd0aCA9IGFjdGl2ZUxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8g6LaF5Ye66L6555WM5pe2XHJcbiAgICAgICAgaWYgKHZhbHVlcyA8IDApIHtcclxuICAgICAgICAgIHZhbHVlcyA9IDA7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IDA7XHJcbiAgICAgICAgICBsZXQgcWl4aWFuVmFsdWUgPSB0aGlzLmxpc3RbdGhpcy52YWx1ZXMgLyBzdGVwXTtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlckNoYW5nZScsIHFpeGlhblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbHVlcyA+IHRoaXMuc3RlcCAqICh0aGlzLmxpc3QubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgIHZhbHVlcyA9IHRoaXMuc3RlcCAqICh0aGlzLmxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc3RlcCAqICh0aGlzLmxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICBsZXQgcWl4aWFuVmFsdWUgPSB0aGlzLmxpc3RbdGhpcy52YWx1ZXMgLyBzdGVwXTtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlckNoYW5nZScsIHFpeGlhblZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaWRlckVuZChlKSB7XHJcbiAgICAgICAgdGhpcy5pc01vbml0b3JpbmcgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8g6LaF5Ye66L6555WM5pe2XHJcbiAgICAgICAgaWYgKHRoaXMudmFsdWVzIDwgMCkge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZXMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy52YWx1ZXMgPiB0aGlzLnN0ZXAgKiAodGhpcy5saXN0Lmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc3RlcCAqICh0aGlzLmxpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGV0YWlsID0gZS5jaGFuZ2VkVG91Y2hlcztcclxuICAgICAgICBsZXQgb3B0aW9uID0ge307XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnc2xpZGVyRW5kJywgZGV0YWlsLCBvcHRpb24pO1xyXG4gICAgICB9LFxyXG4gICAgICBzbGlkZXJDYW5jZWwoZSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLmlzTW9uaXRvcmluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRldGFpbCA9IGUuY2hhbmdlZFRvdWNoZXM7XHJcbiAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3NsaWRlckNhbmNlbCcsIGRldGFpbCwgb3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9IHtcclxuICAgICAgLy8g5Yid5aeL5YyWXHJcbiAgICAgIGF0dGFjaGhlZChsaXN0LCB2YWx1ZSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNjcmVlblJhdGlvID0gdGhpcy5nZXRTeXN0ZW1TY3JlZW5SYXRpbygpO1xyXG4gICAgICAgIHRoaXMuZ2V0V2lkdGgoKTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBwYXJzZUludCgxMDAgLyAodGhpcy5saXN0Lmxlbmd0aCAtIDEpKTtcclxuICAgICAgICB0aGlzLnZhbHVlcyA9IHRoaXMuc3RlcCAqIHRoaXMubGlzdC5pbmRleE9mKHBhcnNlSW50KHRoaXMudmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWFg+e0oOeahOWuveW6puWSjOW3pui+ueeVjOWdkOagh1xyXG4gICAgZ2V0V2lkdGgoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgd3guY3JlYXRlU2VsZWN0b3JRdWVyeSgpLnNlbGVjdCgnI215U2xpZGVycycpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIHRoYXQud2lkdGggPSByZWN0LndpZHRoICogdGhhdC5zY3JlZW5SYXRpbztcclxuICAgICAgICB0aGF0LnNsaWRlckxlZnRYID0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgIH0pLmV4ZWMoKVxyXG4gICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPluWxj+W5leWDj+e0oOavlFxyXG4gICAgZ2V0U3lzdGVtU2NyZWVuUmF0aW8oKSB7XHJcbiAgICAgIHZhciByZXMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICByZXR1cm4gNzUwIC8gcmVzLnNjcmVlbldpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxuIl19