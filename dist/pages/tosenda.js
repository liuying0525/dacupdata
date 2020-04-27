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

var tosenda = function (_wepy$page) {
  _inherits(tosenda, _wepy$page);

  function tosenda() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, tosenda);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = tosenda.__proto__ || Object.getPrototypeOf(tosenda)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '结清材料'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      settlementStatus: 0,
      position: '',
      isShow: false,
      item: {},
      postlist: [],
      poststatutsEn: { '80': '已签收', '44': '派送中', '30': '运输中', '50': '已取件' }
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(tosenda, [{
    key: 'infoShow',
    value: function infoShow() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        //url:that.parent_data.json_dhLink + '/delivery/queryContractDetail',
        url: 'http://test-webapi.dongzhengafc.com:9113/delivery/queryContractDetail',
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        method: 'POST',
        data: {
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId,
          contractId: that.item.contractId

        },
        success: function success(res) {

          if (res.data.code == '10001') {
            console.log(res);

            Object.assign(that.item, res.data.data);
            wx.hideLoading();
            if (that.item.status == 3) {
              that.postlist = res.data.data.ecpInfo;
              for (var i in that.postlist) {
                that.postlist[i].postDate = res.data.data.ecpInfo[i].acceptTime.slice(5, 10);
                that.postlist[i].postTime = res.data.data.ecpInfo[i].acceptTime.slice(14, 19);
                for (var key in that.poststatutsEn) {
                  if (res.data.data.ecpInfo[i].opcode == key) {
                    that.postlist[i].postStatut = that.poststatutsEn[key];
                  } else {
                    that.postlist[i].postStatut = "";
                  }
                }
              }
            }
            that.$apply();
          } else {}
        },
        fail: function fail() {
          wx.showToast({
            title: '网络异常',
            icon: 'none'
          });
          setTimeout(function () {
            wx.hideToast();
          }, 2000);
          return;
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(res) {
      console.log(res);
      this.item = {};
      if (res != undefined) {
        this.item = res;
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      var res = wx.getSystemInfoSync();
      if (res.model.search('iPhone X') !== -1) {
        this.iphoneX = true;
      } else {
        this.iphoneX = false;
      }
      if (this.parent_data.login_token !== '') {
        this.infoShow();
      } else {
        this.$redirect('secLogin', { backUrl: 'tosenda' });
      }
    }
  }]);

  return tosenda;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(tosenda , 'pages/tosenda'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvc2VuZGEuanMiXSwibmFtZXMiOlsidG9zZW5kYSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwic2V0dGxlbWVudFN0YXR1cyIsInBvc2l0aW9uIiwiaXNTaG93IiwiaXRlbSIsInBvc3RsaXN0IiwicG9zdHN0YXR1dHNFbiIsIm1ldGhvZHMiLCJ0aGF0Iiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsImhlYWRlciIsIm1ldGhvZCIsImxvZ2luVG9rZW4iLCJwYXJlbnRfZGF0YSIsImxvZ2luX3Rva2VuIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwiY29udHJhY3RJZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsIk9iamVjdCIsImFzc2lnbiIsImhpZGVMb2FkaW5nIiwic3RhdHVzIiwiZWNwSW5mbyIsImkiLCJwb3N0RGF0ZSIsImFjY2VwdFRpbWUiLCJzbGljZSIsInBvc3RUaW1lIiwia2V5Iiwib3Bjb2RlIiwicG9zdFN0YXR1dCIsIiRhcHBseSIsImZhaWwiLCJzaG93VG9hc3QiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsInVuZGVmaW5lZCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtb2RlbCIsInNlYXJjaCIsImlwaG9uZVgiLCJpbmZvU2hvdyIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyx3QkFBa0IsQ0FG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QUFVbUIsR0FBVjtBQUVEO0FBQ0Y7Ozs2QkFDTztBQUNKLFdBQUt2QixRQUFMLEdBQWdCLEtBQUsrQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JoRCxRQUF4QztBQUNBLFdBQUtpQixXQUFMLEdBQW1CLEtBQUs4QixPQUFMLENBQWFDLFVBQWhDO0FBQ0QsVUFBSXpCLE1BQU1kLEdBQUd3QyxpQkFBSCxFQUFWO0FBQ0MsVUFBSTFCLElBQUkyQixLQUFKLENBQVVDLE1BQVYsQ0FBaUIsVUFBakIsTUFBaUMsQ0FBQyxDQUF0QyxFQUF5QztBQUN2QyxhQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFDRCxVQUFJLEtBQUtuQyxXQUFMLENBQWlCQyxXQUFqQixLQUFpQyxFQUFyQyxFQUF5QztBQUN0QyxhQUFLbUMsUUFBTDtBQUNGLE9BRkQsTUFFTztBQUNMLGFBQUtDLFNBQUwsQ0FBZSxVQUFmLEVBQTBCLEVBQUNDLFNBQVMsU0FBVixFQUExQjtBQUNEO0FBQ0o7Ozs7RUFsR2tDQyxlQUFLQyxJOztrQkFBckIvRCxPIiwiZmlsZSI6InRvc2VuZGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0b3NlbmRhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uT5riF5p2Q5paZJ1xyXG4gIH07XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgfTtcclxuICBkYXRhID0ge1xyXG4gICAgdXJsX2xpbms6ICcnLFxyXG4gICAgc2V0dGxlbWVudFN0YXR1czogMCxcclxuICAgIHBvc2l0aW9uOiAnJyxcclxuICAgIGlzU2hvdzogZmFsc2UsXHJcbiAgICBpdGVtOnt9LFxyXG4gICAgcG9zdGxpc3Q6W10sXHJcbiAgICBwb3N0c3RhdHV0c0VuOnsnODAnOiflt7Lnrb7mlLYnLCc0NCc6J+a0vumAgeS4rScsJzMwJzon6L+Q6L6T5LitJywnNTAnOiflt7Llj5bku7YnfVxyXG4gIH07XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgICAgXHJcbiAgfTtcclxuXHJcbmluZm9TaG93KCl7XHJcbiAgdmFyIHRoYXQ9dGhpcztcclxuICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgfSlcclxuICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgLy91cmw6dGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvZGVsaXZlcnkvcXVlcnlDb250cmFjdERldGFpbCcsXHJcbiAgICAgIHVybDonaHR0cDovL3Rlc3Qtd2ViYXBpLmRvbmd6aGVuZ2FmYy5jb206OTExMy9kZWxpdmVyeS9xdWVyeUNvbnRyYWN0RGV0YWlsJyxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCdcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGRhdGE6e1xyXG4gICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICBjb250cmFjdElkOnRoYXQuaXRlbS5jb250cmFjdElkXHJcblxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICBcclxuICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoYXQuaXRlbSxyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgICAgIGlmKHRoYXQuaXRlbS5zdGF0dXM9PTMpe1xyXG4gICAgICAgICAgICAgIHRoYXQucG9zdGxpc3Q9cmVzLmRhdGEuZGF0YS5lY3BJbmZvO1xyXG4gICAgICAgICAgICAgIGZvcih2YXIgaSBpbiB0aGF0LnBvc3RsaXN0KXtcclxuICAgICAgICAgICAgICAgIHRoYXQucG9zdGxpc3RbaV0ucG9zdERhdGU9cmVzLmRhdGEuZGF0YS5lY3BJbmZvW2ldLmFjY2VwdFRpbWUuc2xpY2UoNSwxMCk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnBvc3RsaXN0W2ldLnBvc3RUaW1lPXJlcy5kYXRhLmRhdGEuZWNwSW5mb1tpXS5hY2NlcHRUaW1lLnNsaWNlKDE0LDE5KTtcclxuICAgICAgICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gdGhhdC5wb3N0c3RhdHV0c0VuKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiggcmVzLmRhdGEuZGF0YS5lY3BJbmZvW2ldLm9wY29kZT09a2V5KXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGxpc3RbaV0ucG9zdFN0YXR1dD10aGF0LnBvc3RzdGF0dXRzRW5ba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoYXQucG9zdGxpc3RbaV0ucG9zdFN0YXR1dD1cIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgd3guaGlkZVRvYXN0KCk7XHJcbiAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTsgIFxyXG59XHJcbiAgb25Mb2FkKHJlcyl7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgdGhpcy5pdGVtPXt9O1xyXG4gICAgaWYocmVzIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGlzLml0ZW09cmVzO1xyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KCl7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgIHZhciByZXMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICBpZiAocmVzLm1vZGVsLnNlYXJjaCgnaVBob25lIFgnKSAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmlwaG9uZVggPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXBob25lWCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuICE9PSAnJykge1xyXG4gICAgICAgICB0aGlzLmluZm9TaG93KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kcmVkaXJlY3QoJ3NlY0xvZ2luJyx7YmFja1VybDogJ3Rvc2VuZGEnfSk7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=