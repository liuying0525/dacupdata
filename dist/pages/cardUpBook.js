'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _toastInfo = require('./../components/toastInfo.js');

var _toastInfo2 = _interopRequireDefault(_toastInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardUpBook = function (_wepy$page) {
  _inherits(CardUpBook, _wepy$page);

  function CardUpBook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardUpBook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardUpBook.__proto__ || Object.getPrototypeOf(CardUpBook)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      parent_data: '',
      imgType: 'authorizationFile',
      authorizationFile: '',
      stopAuthorizationFile: '',
      authorizationFileNum: '',
      stopAuthorizationFileNum: '',
      changeId: '',
      imgSrc: ''
    }, _this.methods = {
      changeState: function changeState(imgType) {
        this.imgType = imgType;
        this.imgSrc = this[this.imgType];
      },
      upBook: function upBook() {
        var that = this;
        wx.request({
          url: that.parent_data.json_dhLink + '/paycardModifyRecord/upload/authorization',
          data: {
            authorizationFile: that.authorizationFileNum,
            stopAuthorizationFile: that.stopAuthorizationFileNum,
            userId: that.parent_data.login_userId,
            loginToken: that.parent_data.login_token,
            modifyId: that.changeId
          },
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              wx.navigateBack({
                delta: 1
              });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail() {
            console.log('还款卡变更申请失败');
          }
        });
      },
      getBook: function getBook() {
        var that = this;
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            that[that.imgType] = tempFilePaths[0];
            that.imgSrc = that[that.imgType];
            that.$apply();
            wx.uploadFile({
              url: that.parent_data.json_dhLink + '/upload/wx',
              filePath: tempFilePaths[0],
              name: 'file',
              success: function success(res) {
                that[that.imgType + 'Num'] = JSON.parse(res.data).data;
                that.$apply();
              }
            });
          }
        });
      },
      deleteImg: function deleteImg() {
        this[this.imgType] = '';
        this[this.imgType + 'Num'] = '';
        this.imgSrc = '';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardUpBook, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.parent_data = this.$parent.globalData;
      this.url_link = this.$parent.globalData.url_link;
      this.changeId = options.id;
    }
  }]);

  return CardUpBook;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(CardUpBook , 'pages/cardUpBook'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRVcEJvb2suanMiXSwibmFtZXMiOlsiQ2FyZFVwQm9vayIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJpbWdUeXBlIiwiYXV0aG9yaXphdGlvbkZpbGUiLCJzdG9wQXV0aG9yaXphdGlvbkZpbGUiLCJhdXRob3JpemF0aW9uRmlsZU51bSIsInN0b3BBdXRob3JpemF0aW9uRmlsZU51bSIsImNoYW5nZUlkIiwiaW1nU3JjIiwibWV0aG9kcyIsImNoYW5nZVN0YXRlIiwidXBCb29rIiwidGhhdCIsInd4IiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwibW9kaWZ5SWQiLCJtZXRob2QiLCJoZWFkZXIiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiJGludm9rZSIsIm1zZyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZ2V0Qm9vayIsImNob29zZUltYWdlIiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJKU09OIiwicGFyc2UiLCJkZWxldGVJbWciLCJvcHRpb25zIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJpZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBUyxFQURKO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsZUFBUyxtQkFISjtBQUlMQyx5QkFBbUIsRUFKZDtBQUtM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LCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZFVwQm9vayBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i/mOasvuWNoeWPmOabtCdcclxuICAgIH1cclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6JycsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJyxcclxuICAgICAgaW1nVHlwZTogJ2F1dGhvcml6YXRpb25GaWxlJyxcclxuICAgICAgYXV0aG9yaXphdGlvbkZpbGU6ICcnLFxyXG4gICAgICBzdG9wQXV0aG9yaXphdGlvbkZpbGU6ICcnLFxyXG4gICAgICBhdXRob3JpemF0aW9uRmlsZU51bTogJycsXHJcbiAgICAgIHN0b3BBdXRob3JpemF0aW9uRmlsZU51bTogJycsXHJcbiAgICAgIGNoYW5nZUlkOiAnJyxcclxuICAgICAgaW1nU3JjOiAnJ1xyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uKGltZ1R5cGUpIHtcclxuICAgICAgICB0aGlzLmltZ1R5cGUgPSBpbWdUeXBlO1xyXG4gICAgICAgIHRoaXMuaW1nU3JjID0gdGhpc1t0aGlzLmltZ1R5cGVdXHJcbiAgICAgIH0sXHJcbiAgICAgIHVwQm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvcGF5Y2FyZE1vZGlmeVJlY29yZC91cGxvYWQvYXV0aG9yaXphdGlvbicsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb25GaWxlOiB0aGF0LmF1dGhvcml6YXRpb25GaWxlTnVtLFxyXG4gICAgICAgICAgICBzdG9wQXV0aG9yaXphdGlvbkZpbGU6IHRoYXQuc3RvcEF1dGhvcml6YXRpb25GaWxlTnVtLFxyXG4gICAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICBtb2RpZnlJZDogdGhhdC5jaGFuZ2VJZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/mOasvuWNoeWPmOabtOeUs+ivt+Wksei0pScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0Qm9vazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgdmFyIHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRocztcclxuICAgICAgICAgICAgdGhhdFt0aGF0LmltZ1R5cGVdID0gdGVtcEZpbGVQYXRoc1swXTtcclxuICAgICAgICAgICAgdGhhdC5pbWdTcmMgPSB0aGF0W3RoYXQuaW1nVHlwZV1cclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy91cGxvYWQvd3gnLFxyXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoYXRbdGhhdC5pbWdUeXBlKydOdW0nXSA9IEpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlSW1nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpc1t0aGlzLmltZ1R5cGVdID0gJyc7XHJcbiAgICAgICAgdGhpc1t0aGlzLmltZ1R5cGUgKyAnTnVtJ10gPSAnJztcclxuICAgICAgICB0aGlzLmltZ1NyYyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5jaGFuZ2VJZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0=