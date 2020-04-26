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

var footprint = function (_wepy$page) {
  _inherits(footprint, _wepy$page);

  function footprint() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, footprint);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = footprint.__proto__ || Object.getPrototypeOf(footprint)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的足迹'
    }, _this.data = {
      // 我的足迹数据
      MyFootData: [],
      items: [],
      startX: 0, //开始坐标
      startY: 0,
      // 当前左滑的item索引
      footIndex: -1,
      url_link: ""
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/footprint'
        };
      },
      // 去首页
      gg: function gg(e) {
        wx.reLaunch({
          url: 'index'
        });
      },

      // 去产品详情页
      toDetails: function toDetails(e) {
        this.$parent.globalData.UVselectType = -1;
        this.footIndex = -1;
        var good = e.currentTarget.dataset.good;
        if (good.type == 0) {
          // 直租
          wx.navigateTo({
            url: 'straight_detail?carmodelid=' + good.carmodelid + '&financialid=' + good.financialproductid + '&downpaymentpercent=' + good.downpaymentpercent + '&loanterm=' + good.loanterm
          });
        } else {
          wx.navigateTo({
            url: 'commodity_details?carmodelid=' + good.carmodelid + '&downpaymentpercent=' + good.downpaymentpercent + '&loanterm=' + good.loanterm
          });
        }

        this.$parent.globalData.pageid = [good.carmodelid];
        this.$parent.globalData.pagename = [3];
        this.$parent.clicknumordernumstat(1);
      },

      // 开始滑动
      touchstart: function touchstart(e) {
        this.startX = e.changedTouches[0].clientX;
        this.startY = e.changedTouches[0].clientY;
      },

      //滑动事件处理
      touchmove: function touchmove(e) {
        var that = this,
            index = e.currentTarget.dataset.index,
            //当前索引
        startX = that.data.startX,
            //开始X坐标
        startY = that.data.startY,
            //开始Y坐标
        touchMoveX = e.changedTouches[0].clientX,
            //滑动变化坐标
        touchMoveY = e.changedTouches[0].clientY,
            //滑动变化坐标
        //获取滑动角度
        angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });

        that.MyFootData.forEach(function (v, i) {
          //滑动超过30度角 return
          if (Math.abs(angle) > 30) return;
          if (i == index) {
            if (touchMoveX > startX) {
              //右滑
              if (that.footIndex == index) {
                that.footIndex = -1;
              }
            } else {
              //左滑
              that.footIndex = index;
            }
          }
        });
        //更新数据

        that.items = that.data.items;
      },

      // 删除足迹
      del: function del(id) {
        var that = this;

        wx.showModal({
          title: '删除订单',
          content: '是否删除该足迹',
          success: function success(res) {
            if (res.confirm) {
              that.footIndex = -1;
              that.$parent.myFootData('del', id);
              that.MyFootData = that.$parent.myFootData('get');
              that.$apply();
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(footprint, [{
    key: 'angle',


    // 活动角度
    value: function angle(start, end) {
      var _X = end.X - start.X,
          _Y = end.Y - start.Y;
      //返回角度 /Math.atan()返回数字的反正切值
      return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
    }

    // 获取我的足迹列表

  }, {
    key: 'onShow',
    value: function onShow() {
      this.MyFootData = this.$parent.myFootData('get');
      this.url_link = this.$parent.globalData.url_link;
    }

    // 初始化

  }, {
    key: 'onUnload',
    value: function onUnload() {
      this.footIndex = -1;
    }
  }]);

  return footprint;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(footprint , 'pages/footprint'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3RwcmludC5qcyJdLCJuYW1lcyI6WyJmb290cHJpbnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIk15Rm9vdERhdGEiLCJpdGVtcyIsInN0YXJ0WCIsInN0YXJ0WSIsImZvb3RJbmRleCIsInVybF9saW5rIiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGF0aCIsImdnIiwiZSIsInd4IiwicmVMYXVuY2giLCJ1cmwiLCJ0b0RldGFpbHMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIlVWc2VsZWN0VHlwZSIsImdvb2QiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInR5cGUiLCJuYXZpZ2F0ZVRvIiwiY2FybW9kZWxpZCIsImZpbmFuY2lhbHByb2R1Y3RpZCIsImRvd25wYXltZW50cGVyY2VudCIsImxvYW50ZXJtIiwicGFnZWlkIiwicGFnZW5hbWUiLCJjbGlja251bW9yZGVybnVtc3RhdCIsInRvdWNoc3RhcnQiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJjbGllbnRZIiwidG91Y2htb3ZlIiwidGhhdCIsImluZGV4IiwidG91Y2hNb3ZlWCIsInRvdWNoTW92ZVkiLCJhbmdsZSIsIlgiLCJZIiwiZm9yRWFjaCIsInYiLCJpIiwiTWF0aCIsImFicyIsImRlbCIsImlkIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJteUZvb3REYXRhIiwiJGFwcGx5Iiwic3RhcnQiLCJlbmQiLCJfWCIsIl9ZIiwiYXRhbiIsIlBJIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNMO0FBQ0FDLGtCQUFZLEVBRlA7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLGNBQVEsQ0FKSCxFQUlN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VSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JYLFFBQXhDO0FBQ0Q7O0FBRUQ7Ozs7K0JBQ1c7QUFDVCxXQUFLRCxTQUFMLEdBQWlCLENBQUMsQ0FBbEI7QUFDRDs7OztFQXhJb0MyRCxlQUFLQyxJOztrQkFBdkJwRSxTIiwiZmlsZSI6ImZvb3RwcmludC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGZvb3RwcmludCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOi2s+i/uSdcclxuICB9O1xyXG5cclxuICBkYXRhID0ge1xyXG4gICAgLy8g5oiR55qE6Laz6L+55pWw5o2uXHJcbiAgICBNeUZvb3REYXRhOiBbXSxcclxuICAgIGl0ZW1zOiBbXSxcclxuICAgIHN0YXJ0WDogMCwgLy/lvIDlp4vlnZDmoIdcclxuICAgIHN0YXJ0WTogMCxcclxuICAgIC8vIOW9k+WJjeW3pua7keeahGl0ZW3ntKLlvJVcclxuICAgIGZvb3RJbmRleDogLTEsXHJcbiAgICB1cmxfbGluazpcIlwiXHJcbiAgfTtcclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uU2hhcmVBcHBNZXNzYWdlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoOiAnL3BhZ2VzL2Zvb3RwcmludCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICAvLyDljrvpppbpobVcclxuICAgIGdnKGUpIHtcclxuICAgICAgd3gucmVMYXVuY2goe1xyXG4gICAgICAgIHVybDogJ2luZGV4J1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDljrvkuqflk4Hor6bmg4XpobVcclxuICAgIHRvRGV0YWlscyhlKSB7XHJcbiAgICAgIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLlVWc2VsZWN0VHlwZSA9IC0xO1xyXG4gICAgICB0aGlzLmZvb3RJbmRleCA9IC0xO1xyXG4gICAgICBsZXQgZ29vZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmdvb2Q7XHJcbiAgICAgIGlmIChnb29kLnR5cGUgPT0gMCkge1xyXG4gICAgICAgIC8vIOebtOenn1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAnc3RyYWlnaHRfZGV0YWlsP2Nhcm1vZGVsaWQ9JyArXHJcbiAgICAgICAgICAgIGdvb2QuY2FybW9kZWxpZCArXHJcbiAgICAgICAgICAgICcmZmluYW5jaWFsaWQ9JyArXHJcbiAgICAgICAgICAgIGdvb2QuZmluYW5jaWFscHJvZHVjdGlkICtcclxuICAgICAgICAgICAgJyZkb3ducGF5bWVudHBlcmNlbnQ9JyArXHJcbiAgICAgICAgICAgIGdvb2QuZG93bnBheW1lbnRwZXJjZW50ICtcclxuICAgICAgICAgICAgJyZsb2FudGVybT0nICtcclxuICAgICAgICAgICAgZ29vZC5sb2FudGVybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOlxyXG4gICAgICAgICAgICAnY29tbW9kaXR5X2RldGFpbHM/Y2FybW9kZWxpZD0nICtcclxuICAgICAgICAgICAgZ29vZC5jYXJtb2RlbGlkICtcclxuICAgICAgICAgICAgJyZkb3ducGF5bWVudHBlcmNlbnQ9JyArXHJcbiAgICAgICAgICAgIGdvb2QuZG93bnBheW1lbnRwZXJjZW50ICtcclxuICAgICAgICAgICAgJyZsb2FudGVybT0nICtcclxuICAgICAgICAgICAgZ29vZC5sb2FudGVybVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5wYWdlaWQgPSBbZ29vZC5jYXJtb2RlbGlkXTtcclxuICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEucGFnZW5hbWUgPSBbM107XHJcbiAgICAgIHRoaXMuJHBhcmVudC5jbGlja251bW9yZGVybnVtc3RhdCgxKTtcclxuICAgIH0sXHJcbiAgICAvLyDlvIDlp4vmu5HliqhcclxuICAgIHRvdWNoc3RhcnQoZSkge1xyXG4gICAgICB0aGlzLnN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgdGhpcy5zdGFydFkgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XHJcbiAgICB9LFxyXG4gICAgLy/mu5Hliqjkuovku7blpITnkIZcclxuICAgIHRvdWNobW92ZShlKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcclxuICAgICAgICBpbmRleCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4LCAvL+W9k+WJjee0ouW8lVxyXG4gICAgICAgIHN0YXJ0WCA9IHRoYXQuZGF0YS5zdGFydFgsIC8v5byA5aeLWOWdkOagh1xyXG4gICAgICAgIHN0YXJ0WSA9IHRoYXQuZGF0YS5zdGFydFksIC8v5byA5aeLWeWdkOagh1xyXG4gICAgICAgIHRvdWNoTW92ZVggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsIC8v5ruR5Yqo5Y+Y5YyW5Z2Q5qCHXHJcbiAgICAgICAgdG91Y2hNb3ZlWSA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WSwgLy/mu5Hliqjlj5jljJblnZDmoIdcclxuICAgICAgICAvL+iOt+WPlua7keWKqOinkuW6plxyXG4gICAgICAgIGFuZ2xlID0gdGhhdC5hbmdsZShcclxuICAgICAgICAgIHsgWDogc3RhcnRYLCBZOiBzdGFydFkgfSxcclxuICAgICAgICAgIHsgWDogdG91Y2hNb3ZlWCwgWTogdG91Y2hNb3ZlWSB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgIHRoYXQuTXlGb290RGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHYsIGkpIHtcclxuICAgICAgICAvL+a7keWKqOi2hei/hzMw5bqm6KeSIHJldHVyblxyXG4gICAgICAgIGlmIChNYXRoLmFicyhhbmdsZSkgPiAzMCkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChpID09IGluZGV4KSB7XHJcbiAgICAgICAgICBpZiAodG91Y2hNb3ZlWCA+IHN0YXJ0WCkge1xyXG4gICAgICAgICAgICAvL+WPs+a7kVxyXG4gICAgICAgICAgICBpZiAodGhhdC5mb290SW5kZXggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICB0aGF0LmZvb3RJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+W3pua7kVxyXG4gICAgICAgICAgICB0aGF0LmZvb3RJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIC8v5pu05paw5pWw5o2uXHJcblxyXG4gICAgICB0aGF0Lml0ZW1zID0gdGhhdC5kYXRhLml0ZW1zO1xyXG4gICAgfSxcclxuICAgIC8vIOWIoOmZpOi2s+i/uVxyXG4gICAgZGVsKGlkKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfliKDpmaTorqLljZUnLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfmmK/lkKbliKDpmaTor6XotrPov7knLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgdGhhdC5mb290SW5kZXggPSAtMTtcclxuICAgICAgICAgICAgdGhhdC4kcGFyZW50Lm15Rm9vdERhdGEoJ2RlbCcsIGlkKTtcclxuICAgICAgICAgICAgdGhhdC5NeUZvb3REYXRhID0gdGhhdC4kcGFyZW50Lm15Rm9vdERhdGEoJ2dldCcpO1xyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8g5rS75Yqo6KeS5bqmXHJcbiAgYW5nbGUoc3RhcnQsIGVuZCkge1xyXG4gICAgdmFyIF9YID0gZW5kLlggLSBzdGFydC5YLFxyXG4gICAgICBfWSA9IGVuZC5ZIC0gc3RhcnQuWTtcclxuICAgIC8v6L+U5Zue6KeS5bqmIC9NYXRoLmF0YW4oKei/lOWbnuaVsOWtl+eahOWPjeato+WIh+WAvFxyXG4gICAgcmV0dXJuIDM2MCAqIE1hdGguYXRhbihfWSAvIF9YKSAvICgyICogTWF0aC5QSSk7XHJcbiAgfVxyXG5cclxuICAvLyDojrflj5bmiJHnmoTotrPov7nliJfooahcclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLk15Rm9vdERhdGEgPSB0aGlzLiRwYXJlbnQubXlGb290RGF0YSgnZ2V0Jyk7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgfVxyXG5cclxuICAvLyDliJ3lp4vljJZcclxuICBvblVubG9hZCgpIHtcclxuICAgIHRoaXMuZm9vdEluZGV4ID0gLTE7XHJcbiAgfVxyXG59XHJcbiJdfQ==