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

var CardBook = function (_wepy$page) {
  _inherits(CardBook, _wepy$page);

  function CardBook() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CardBook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CardBook.__proto__ || Object.getPrototypeOf(CardBook)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.data = {
      parent_data: '',
      requestData: '',
      email: '',
      canClickAgin: true

    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.methods = {
      submit: function submit() {
        var that = this;
        if (!that.canClickAgin) {
          return false;
        }
        wx.showLoading({
          title: '提交中'
        });
        that.canClickAgin = false;
        that.requestData.email = that.email;
        if (!that.$invoke('toastInfo', 'emailReg', that.email)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '邮箱格式错误');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/paycardModifyRecord/apply',
          data: that.requestData,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            wx.hideLoading();
            that.canClickAgin = true;
            if (res.data.code == '10001') {
              that.$redirect('cardSubmit', { recordId: res.data.data.recordId, email: that.email });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail() {
            console.log('还款卡变更申请失败');
          }
        });
      },

      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CardBook, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.requestData = options;
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.parent_data = this.$parent.globalData;
    }
  }]);

  return CardBook;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(CardBook , 'pages/cardBook'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRCb29rLmpzIl0sIm5hbWVzIjpbIkNhcmRCb29rIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJwYXJlbnRfZGF0YSIsInJlcXVlc3REYXRhIiwiZW1haWwiLCJjYW5DbGlja0FnaW4iLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwibWV0aG9kcyIsInN1Ym1pdCIsInRoYXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCIkaW52b2tlIiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwibWV0aG9kIiwiaGVhZGVyIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwiY29kZSIsIiRyZWRpcmVjdCIsInJlY29yZElkIiwibXNnIiwiZmFpbCIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VWYWx1ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsIm9wdGlvbnMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxtQkFBYSxFQURSO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsYUFBTyxFQUhGO0FBSUxDLG9CQUFhOztBQUpSLEssUUFPUEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsTyxHQUFVO0FBQ1JDLFlBRFEsb0JBQ0M7QUFDUCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFHLENBQUNBLEtBQUtMLFlBQVQsRUFBc0I7QUFDcEIsaUJBQU8sS0FBUDtBQUNEO0FBQ0RNLFdBQUdDLFdBQUgsQ0FBZTtBQUNiQyxpQkFBTztBQURNLFNBQWY7QUFHQUgsYUFBS0wsWUFBTCxHQUFrQixLQUFsQjtBQUNBSyxhQUFLUCxXQUFMLENBQWlCQyxLQUFqQixHQUF5Qk0sS0FBS04sS0FBOUI7QUFDQSxZQUFHLENBQUNNLEtBQUtJLE9BQUwsQ0FBYSxXQUFiLEVBQTBCLFVBQTFCLEVBQXNDSixLQUFLTixLQUEzQyxDQUFKLEVBQXNEO0FBQ3BETSxlQUFLSSxPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1QyxLQUF2QyxFQUE4QyxRQUE5QztBQUNBLGlCQUFPLEtBQVA7QUFDRDtBQUNESCxXQUFHSSxPQUFILENBQVc7QUFDVEMsZUFBS04sS0FBS1IsV0FBTCxDQUFpQmUsV0FBakIsR0FBK0IsNEJBRDNCO0FBRVRoQixnQkFBTVMsS0FBS1AsV0FGRjtBQUdUZSxrQkFBUSxNQUhDO0FBSVRDLGtCQUFRO0FBQ04sNEJBQWdCLG1DQURWLENBQzhDO0FBRDlDLFdBSkM7QUFPVEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlYsZUFBR1csV0FBSDtBQUNBWixpQkFBS0wsWUFBTCxHQUFrQixJQUFsQjtBQUNBLGdCQUFJZ0IsSUFBSXBCLElBQUosQ0FBU3NCLElBQVQsSUFBaUIsT0FBckIsRUFBOEI7QUFDNUJiLG1CQUFLYyxTQUFMLENBQWUsWUFBZixFQUE2QixFQUFDQyxVQUFVSixJQUFJcEIsSUFBSixDQUFTQSxJQUFULENBQWN3QixRQUF6QixFQUFrQ3JCLE9BQU9NLEtBQUtOLEtBQTlDLEVBQTdCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xNLG1CQUFLSSxPQUFMLENBQWEsV0FBYixFQUEwQixXQUExQixFQUF1Q08sSUFBSXBCLElBQUosQ0FBU3NCLElBQWhELEVBQXNERixJQUFJcEIsSUFBSixDQUFTeUIsR0FBL0Q7QUFDRDtBQUNGLFdBZlE7QUFnQlRDLGdCQUFNLGdCQUFXO0FBQ2ZDLG9CQUFRQyxHQUFSLENBQVksV0FBWjtBQUNEO0FBbEJRLFNBQVg7QUFvQkQsT0FuQ087O0FBb0NSQyxtQkFBYSxxQkFBVUMsQ0FBVixFQUFhO0FBQ3hCLGFBQUtBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUE3QixJQUFxQ0gsRUFBRUksTUFBRixDQUFTQyxLQUE5QztBQUNEO0FBdENPLEs7Ozs7OzJCQXdDSEMsTyxFQUFTO0FBQ2QsV0FBS2xDLFdBQUwsR0FBbUJrQyxPQUFuQjtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLbkMsV0FBTCxHQUFtQixLQUFLb0MsT0FBTCxDQUFhQyxVQUFoQztBQUNEOzs7O0VBM0RtQ0MsZUFBS0MsSTs7a0JBQXRCM0MsUSIsImZpbGUiOiJjYXJkQm9vay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkQm9vayBleHRlbmRzIHdlcHkucGFnZXtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6L+Y5qy+5Y2h5Y+Y5pu0J1xyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgcmVxdWVzdERhdGE6ICcnLFxyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgY2FuQ2xpY2tBZ2luOnRydWUsXHJcblxyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYoIXRoYXQuY2FuQ2xpY2tBZ2luKXtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5o+Q5Lqk5LitJyxcclxuICAgICAgfSlcclxuICAgICAgdGhhdC5jYW5DbGlja0FnaW49ZmFsc2U7XHJcbiAgICAgIHRoYXQucmVxdWVzdERhdGEuZW1haWwgPSB0aGF0LmVtYWlsO1xyXG4gICAgICBpZighdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnZW1haWxSZWcnLCB0aGF0LmVtYWlsKSl7XHJcbiAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgJzAwMCcsICfpgq7nrrHmoLzlvI/plJnor68nKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9wYXljYXJkTW9kaWZ5UmVjb3JkL2FwcGx5JyxcclxuICAgICAgICBkYXRhOiB0aGF0LnJlcXVlc3REYXRhLFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7ICAgICAgICAgIFxyXG4gICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgIHRoYXQuY2FuQ2xpY2tBZ2luPXRydWU7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJHJlZGlyZWN0KCdjYXJkU3VibWl0Jywge3JlY29yZElkOiByZXMuZGF0YS5kYXRhLnJlY29yZElkLGVtYWlsOiB0aGF0LmVtYWlsfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6L+Y5qy+5Y2h5Y+Y5pu055Sz6K+35aSx6LSlJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHRoaXNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHRoaXMucmVxdWVzdERhdGEgPSBvcHRpb25zXHJcbiAgfVxyXG4gIG9uU2hvdygpIHtcclxuICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==