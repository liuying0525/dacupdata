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

var Canvas = function (_wepy$component) {
  _inherits(Canvas, _wepy$component);

  function Canvas() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      context: '',
      parent_data: ''
    }, _this.props = {}, _this.methods = {
      start: function start(e) {
        // this.context.save();
        this.context.setStrokeStyle('#000');
        this.context.setLineWidth(1);
        this.context.setFontSize(22);
        this.context.fillText('Hello', 20, 20);
        this.context.fillText('MINA', 100, 100);
        // this.context.beginPath();
        this.context.moveTo(e.changedTouches[0]['x'], e.changedTouches[0]['y']);
        console.log(e.changedTouches[0]['x'], e.changedTouches[0]['y']);
      },
      move: function move(e) {
        this.context.lineTo(e.changedTouches[0]['x'], e.changedTouches[0]['y']);
        this.context.stroke();
        console.log(e.changedTouches[0]['x'], e.changedTouches[0]['y']);
      },
      end: function end() {
        this.context.stroke();
        this.context.draw();
      },
      draw: function draw() {
        var that = this;
        that.context.draw(true, function () {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 200,
            height: 200,
            destWidth: 100,
            destHeight: 100,
            canvasId: 'firstCanvas',
            success: function success(res) {
              console.log(res.tempFilePath);
              // that.context.draw(false)
              that.context.draw(true);
            }
          });
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Canvas, [{
    key: 'onLoad',
    value: function onLoad() {
      var that = this;
      that.context = wx.createCanvasContext('firstCanvas');
      this.context.setFontSize(12);
      that.parent_data = that.$parent.globalData;
      wx.getImageInfo({
        //src: 'image/bg.jpg',
        src: that.parent_data.url_link + 'bg.jpg',
        success: function success(res) {
          console.log(res);
        }
      });
      wx.downloadFile({
        // url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1561699335592&di=bcaea1c4de279aecc3f670d7e29ceb44&imgtype=0&src=http%3A%2F%2Fpic38.nipic.com%2F20140225%2F2531170_213938070000_2.jpg',
        //url: '../image/bg.jpg',
        url: that.parent_data.url_link + 'bg.jpg',
        success: function success(res) {
          if (res.statusCode === 200) {
            console.log(res);
            that.context.drawImage(res.tempFilePath, 0, 0, 500, 707);
            that.context.fillText('客户授权及承诺申请书', 20, 20);
            that.context.fillText('上海东正汽车金融有限责任公司：', 100, 100);
            that.context.stroke();
            that.context.draw();
            that.$apply();
          }
        }
      });
    }
  }]);

  return Canvas;
}(_wepy2.default.component);

exports.default = Canvas;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJDYW52YXMiLCJkYXRhIiwiY29udGV4dCIsInBhcmVudF9kYXRhIiwicHJvcHMiLCJtZXRob2RzIiwic3RhcnQiLCJlIiwic2V0U3Ryb2tlU3R5bGUiLCJzZXRMaW5lV2lkdGgiLCJzZXRGb250U2l6ZSIsImZpbGxUZXh0IiwibW92ZVRvIiwiY2hhbmdlZFRvdWNoZXMiLCJjb25zb2xlIiwibG9nIiwibW92ZSIsImxpbmVUbyIsInN0cm9rZSIsImVuZCIsImRyYXciLCJ0aGF0Iiwid3giLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJkZXN0V2lkdGgiLCJkZXN0SGVpZ2h0IiwiY2FudmFzSWQiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRoIiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZ2V0SW1hZ2VJbmZvIiwic3JjIiwidXJsX2xpbmsiLCJkb3dubG9hZEZpbGUiLCJ1cmwiLCJzdGF0dXNDb2RlIiwiZHJhd0ltYWdlIiwiJGFwcGx5Iiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxJLEdBQU87QUFDTEMsZUFBUyxFQURKO0FBRUxDLG1CQUFZO0FBRlAsSyxRQUlQQyxLLEdBQVEsRSxRQUNSQyxPLEdBQVU7QUFDUkMsYUFBTyxlQUFVQyxDQUFWLEVBQWE7QUFDbEI7QUFDQSxhQUFLTCxPQUFMLENBQWFNLGNBQWIsQ0FBNEIsTUFBNUI7QUFDQSxhQUFLTixPQUFMLENBQWFPLFlBQWIsQ0FBMEIsQ0FBMUI7QUFDQSxhQUFLUCxPQUFMLENBQWFRLFdBQWIsQ0FBeUIsRUFBekI7QUFDQSxhQUFLUixPQUFMLENBQWFTLFFBQWIsQ0FBc0IsT0FBdEIsRUFBK0IsRUFBL0IsRUFBbUMsRUFBbkM7QUFDQSxhQUFLVCxPQUFMLENB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LGlCQUF0QixFQUF5QyxHQUF6QyxFQUE4QyxHQUE5QztBQUNBVSxpQkFBS25CLE9BQUwsQ0FBYWdCLE1BQWI7QUFDQUcsaUJBQUtuQixPQUFMLENBQWFrQixJQUFiO0FBQ0FDLGlCQUFLdUIsTUFBTDtBQUNEO0FBQ0Y7QUFkYSxPQUFoQjtBQWlCRDs7OztFQTVFaUNDLGVBQUtDLFM7O2tCQUFwQjlDLE0iLCJmaWxlIjoiY2FudmFzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgd2VweS5jb21wb25lbnR7XHJcbiAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgY29udGV4dDogJycsXHJcbiAgICAgICAgcGFyZW50X2RhdGE6JydcclxuICAgICAgfTtcclxuICAgICAgcHJvcHMgPSB7fTtcclxuICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBzdGFydDogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIC8vIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0U3Ryb2tlU3R5bGUoJyMwMDAnKTtcclxuICAgICAgICAgIHRoaXMuY29udGV4dC5zZXRMaW5lV2lkdGgoMSk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuc2V0Rm9udFNpemUoMjIpXHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFRleHQoJ0hlbGxvJywgMjAsIDIwKVxyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KCdNSU5BJywgMTAwLCAxMDApXHJcbiAgICAgICAgICAvLyB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKGUuY2hhbmdlZFRvdWNoZXNbMF1bJ3gnXSxlLmNoYW5nZWRUb3VjaGVzWzBdWyd5J10pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5jaGFuZ2VkVG91Y2hlc1swXVsneCddLGUuY2hhbmdlZFRvdWNoZXNbMF1bJ3knXSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdmU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKGUuY2hhbmdlZFRvdWNoZXNbMF1bJ3gnXSxlLmNoYW5nZWRUb3VjaGVzWzBdWyd5J10pO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS5jaGFuZ2VkVG91Y2hlc1swXVsneCddLGUuY2hhbmdlZFRvdWNoZXNbMF1bJ3knXSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgICAgdGhpcy5jb250ZXh0LmRyYXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYXc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgIHRoYXQuY29udGV4dC5kcmF3KHRydWUsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXHJcbiAgICAgICAgICAgICAgZGVzdFdpZHRoOiAxMDAsXHJcbiAgICAgICAgICAgICAgZGVzdEhlaWdodDogMTAwLFxyXG4gICAgICAgICAgICAgIGNhbnZhc0lkOiAnZmlyc3RDYW52YXMnLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGVtcEZpbGVQYXRoKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoYXQuY29udGV4dC5kcmF3KGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXcodHJ1ZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgICB0aGF0LmNvbnRleHQgPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCdmaXJzdENhbnZhcycpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zZXRGb250U2l6ZSgxMik7XHJcbiAgICAgICAgdGhhdC5wYXJlbnRfZGF0YSA9IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICAgIHd4LmdldEltYWdlSW5mbyh7XHJcbiAgICAgICAgICAvL3NyYzogJ2ltYWdlL2JnLmpwZycsXHJcbiAgICAgICAgIHNyYyA6dGhhdC5wYXJlbnRfZGF0YS51cmxfbGluaysnYmcuanBnJyxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHd4LmRvd25sb2FkRmlsZSh7XHJcbiAgICAgICAgICAvLyB1cmw6ICdodHRwczovL3RpbWdzYS5iYWlkdS5jb20vdGltZz9pbWFnZSZxdWFsaXR5PTgwJnNpemU9Yjk5OTlfMTAwMDAmc2VjPTE1NjE2OTkzMzU1OTImZGk9YmNhZWExYzRkZTI3OWFlY2MzZjY3MGQ3ZTI5Y2ViNDQmaW1ndHlwZT0wJnNyYz1odHRwJTNBJTJGJTJGcGljMzgubmlwaWMuY29tJTJGMjAxNDAyMjUlMkYyNTMxMTcwXzIxMzkzODA3MDAwMF8yLmpwZycsXHJcbiAgICAgICAgICAvL3VybDogJy4uL2ltYWdlL2JnLmpwZycsXHJcbiAgICAgICAgICB1cmw6dGhhdC5wYXJlbnRfZGF0YS51cmxfbGluaysnYmcuanBnJyxcclxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgdGhhdC5jb250ZXh0LmRyYXdJbWFnZShyZXMudGVtcEZpbGVQYXRoLCAwLCAwLCA1MDAsIDcwNylcclxuICAgICAgICAgICAgICB0aGF0LmNvbnRleHQuZmlsbFRleHQoJ+WuouaIt+aOiOadg+WPiuaJv+ivuueUs+ivt+S5picsIDIwLCAyMClcclxuICAgICAgICAgICAgICB0aGF0LmNvbnRleHQuZmlsbFRleHQoJ+S4iua1t+S4nOato+axvei9pumHkeiejeaciemZkOi0o+S7u+WFrOWPuO+8micsIDEwMCwgMTAwKVxyXG4gICAgICAgICAgICAgIHRoYXQuY29udGV4dC5zdHJva2UoKVxyXG4gICAgICAgICAgICAgIHRoYXQuY29udGV4dC5kcmF3KClcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiJdfQ==