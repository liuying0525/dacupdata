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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sendInformation = function (_wepy$page) {
  _inherits(sendInformation, _wepy$page);

  function sendInformation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, sendInformation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = sendInformation.__proto__ || Object.getPrototypeOf(sendInformation)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '结清材料'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      settlementStatus: 0,
      position: '',
      region: ['广东省', '广州市', '海珠区'],
      customItem: '全部',
      default: '请选择地区',
      isShow: false,
      recipients: "",
      readdress: '',
      rePhone: "",
      reginInfo: "",
      contractNo: "",
      carPlate: "",
      contractId: "",
      status: ""

    }, _this.methods = {
      //选择地址
      typeChange: function typeChange(val) {
        this.position = val.detail.value;
        console.log(this.position);
      },
      //更改input的值
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      },
      bindRegionChange: function bindRegionChange(e) {
        // console.log('picker发生选择改变，携带值为', e.detail.value);
        this.region = e.detail.value;
        this.default = this.region;
        this.$apply();
      },
      showDialogBtn: function showDialogBtn() {
        var that = this;
        if (that.recipients != '' && that.rePhone != '' && that.region != '' && that.reginInfo != '') {
          if (!that.$invoke('toastInfo', 'phoneReg', that.rePhone)) {
            that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的手机号');
            return false;
          }
          that.isShow = true;
          that.readdress = that.region.join("") + that.reginInfo;
        } else {
          that.$invoke('toastInfo', 'modelFunc', '000', '请填写完整的寄件信息');
          return false;
        }
      },
      _cancelEvent: function _cancelEvent() {
        this.isShow = false;
      },
      _confirmEvent: function _confirmEvent() {
        var that = this;
        that.isShow = false;
        //  wx.navigateTo({
        //     url: 'settlement'
        //   });

        var templateId = "U0QKYMFtu6wXdpYtHQKl55hu9kOWq0DNncb4D2cKSiM";
        wx.requestSubscribeMessage({
          tmplIds: [templateId],
          success: function success(res) {
            var _item;

            var item = (_item = {
              "address": that.readdress,
              "name": that.recipients,
              "phone": that.rePhone,
              "contractId": that.contractId,
              "carPlate": that.carPlate,
              "externalContractNbrL": that.contractNo
            }, _defineProperty(_item, 'contractId', that.contractId), _defineProperty(_item, "status", that.status), _item);
            if (res[templateId] == 'accept') {
              //用户同意了订阅，允许订阅消息
              console.log(1111);
              wx.showToast({
                title: '订阅成功'
              });

              wx.request({
                //url:that.parent_data.json_dhLink + '/delivery/add',
                //url:'http://localhost:8088/settlement.json',
                url: 'http://test-webapi.dongzhengafc.com:9113/delivery/add',
                header: {
                  'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
                method: 'POST',
                data: {
                  loginToken: that.parent_data.login_token,
                  userId: that.parent_data.login_userId,
                  address: that.readdress,
                  name: that.recipients,
                  phone: that.rePhone,
                  contractId: that.contractId,
                  carPlate: that.carPlate
                  // status:that.state
                  // phone: that.parent_data.login_phone // phone: 'shhllfmsksl'
                },
                success: function success(res) {
                  if (res.data.code == '10001') {
                    console.log(res);
                    debugger;

                    that.$navigate('tosenda', item);
                  } else {
                    that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
                  }
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
            } else {
              console.log(2222);
              //用户拒绝了订阅，禁用订阅消息
              wx.showToast({
                title: '订阅失败'
              });
              that.$navigate('tosenda', item);
            }
          },
          fail: function fail(err) {
            console.error(err);
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(sendInformation, [{
    key: 'onLoad',
    value: function onLoad(res) {
      var that = this;
      console.log(res);
      if (res.externalContractNbr != undefined) {
        that.contractNo = res.externalContractNbr;
        that.contractId = res.contractId;
        that.status = res.status;
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      that.url_link = that.$parent.globalData.url_link;
      that.parent_data = that.$parent.globalData;
    }
  }]);

  return sendInformation;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(sendInformation , 'pages/sendInformation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRJbmZvcm1hdGlvbi5qcyJdLCJuYW1lcyI6WyJzZW5kSW5mb3JtYXRpb24iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJ1cmxfbGluayIsInNldHRsZW1lbnRTdGF0dXMiLCJwb3NpdGlvbiIsInJlZ2lvbiIsImN1c3RvbUl0ZW0iLCJkZWZhdWx0IiwiaXNTaG93IiwicmVjaXBpZW50cyIsInJlYWRkcmVzcyIsInJlUGhvbmUiLCJyZWdpbkluZm8iLCJjb250cmFjdE5vIiwiY2FyUGxhdGUiLCJjb250cmFjdElkIiwic3RhdHVzIiwibWV0aG9kcyIsInR5cGVDaGFuZ2UiLCJ2YWwiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VWYWx1ZSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hbWUiLCJiaW5kUmVnaW9uQ2hhbmdlIiwiJGFwcGx5Iiwic2hvd0RpYWxvZ0J0biIsInRoYXQiLCIkaW52b2tlIiwiam9pbiIsIl9jYW5jZWxFdmVudCIsIl9jb25maXJtRXZlbnQiLCJ0ZW1wbGF0ZUlkIiwid3giLCJyZXF1ZXN0U3Vic2NyaWJlTWVzc2FnZSIsInRtcGxJZHMiLCJzdWNjZXNzIiwicmVzIiwiaXRlbSIsInNob3dUb2FzdCIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsImhlYWRlciIsIm1ldGhvZCIsImxvZ2luVG9rZW4iLCJwYXJlbnRfZGF0YSIsImxvZ2luX3Rva2VuIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwiYWRkcmVzcyIsInBob25lIiwiY29kZSIsIiRuYXZpZ2F0ZSIsIm1zZyIsImZhaWwiLCJpY29uIiwic2V0VGltZW91dCIsImhpZGVUb2FzdCIsImVyciIsImVycm9yIiwiZXh0ZXJuYWxDb250cmFjdE5iciIsInVuZGVmaW5lZCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3Mi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QU8sTUFESTtBQUVYZ0IsMEJBQU07QUFGSyxtQkFBYjtBQUlBQyw2QkFBVyxZQUFXO0FBQ3BCeEIsdUJBQUd5QixTQUFIO0FBQ0QsbUJBRkQsRUFFRyxJQUZIO0FBR0E7QUFDRDtBQXZDUSxlQUFYO0FBMENDLGFBakRELE1BaURLO0FBQ0h6QyxzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQTtBQUNBZSxpQkFBR00sU0FBSCxDQUFhO0FBQ1hDLHVCQUFNO0FBREssZUFBYjtBQUdDYixtQkFBSzBCLFNBQUwsQ0FBZSxTQUFmLEVBQXlCZixJQUF6QjtBQUNGO0FBQ0YsV0F0RXdCO0FBdUV6QmlCLGNBdkV5QixnQkF1RXBCSSxHQXZFb0IsRUF1RWhCO0FBQ1AxQyxvQkFBUTJDLEtBQVIsQ0FBY0QsR0FBZDtBQUNEO0FBekV3QixTQUEzQjtBQTJFSztBQXJITyxLOzs7OzsyQkF3SEh0QixHLEVBQUk7QUFDVCxVQUFJVixPQUFLLElBQVQ7QUFDQVYsY0FBUUMsR0FBUixDQUFZbUIsR0FBWjtBQUNBLFVBQUdBLElBQUl3QixtQkFBSixJQUF5QkMsU0FBNUIsRUFBc0M7QUFDcENuQyxhQUFLbkIsVUFBTCxHQUFnQjZCLElBQUl3QixtQkFBcEI7QUFDQWxDLGFBQUtqQixVQUFMLEdBQWdCMkIsSUFBSTNCLFVBQXBCO0FBQ0FpQixhQUFLaEIsTUFBTCxHQUFZMEIsSUFBSTFCLE1BQWhCO0FBQ0Q7QUFDRjs7OzZCQUNPO0FBQ0wsVUFBSWdCLE9BQU8sSUFBWDtBQUNDQSxXQUFLOUIsUUFBTCxHQUFnQjhCLEtBQUtvQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JuRSxRQUF4QztBQUNBOEIsV0FBS21CLFdBQUwsR0FBbUJuQixLQUFLb0MsT0FBTCxDQUFhQyxVQUFoQztBQUNIOzs7O0VBOUowQ0MsZUFBS0MsSTs7a0JBQTdCM0UsZSIsImZpbGUiOiJzZW5kSW5mb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzZW5kSW5mb3JtYXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnu5PmuIXmnZDmlpknXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICBzZXR0bGVtZW50U3RhdHVzOiAwLFxyXG4gICAgcG9zaXRpb246ICcnLFxyXG4gICAgcmVnaW9uOiBbJ+W5v+S4nOecgScsICflub/lt57luIInLCAn5rW354+g5Yy6J10sXHJcbiAgICBjdXN0b21JdGVtOiAn5YWo6YOoJyxcclxuICAgIGRlZmF1bHQ6ICfor7fpgInmi6nlnLDljLonLFxyXG4gICAgaXNTaG93OiBmYWxzZSxcclxuICAgIHJlY2lwaWVudHM6XCJcIixcclxuICAgIHJlYWRkcmVzczogJycsXHJcbiAgICByZVBob25lOlwiXCIsXHJcbiAgICByZWdpbkluZm86XCJcIixcclxuICAgIGNvbnRyYWN0Tm86XCJcIixcclxuICAgIGNhclBsYXRlOlwiXCIsXHJcbiAgICBjb250cmFjdElkOlwiXCIsXHJcbiAgICBzdGF0dXM6XCJcIlxyXG4gICAgXHJcbiAgfTtcclxuICBtZXRob2RzID0ge1xyXG4gICAgLy/pgInmi6nlnLDlnYBcclxuICAgIHR5cGVDaGFuZ2U6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICB0aGlzLnBvc2l0aW9uID0gdmFsLmRldGFpbC52YWx1ZTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5wb3NpdGlvbik7XHJcbiAgICB9LFxyXG4gICAgLy/mm7TmlLlpbnB1dOeahOWAvFxyXG4gICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgfSxcclxuICAgIGJpbmRSZWdpb25DaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAvLyBjb25zb2xlLmxvZygncGlja2Vy5Y+R55Sf6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpO1xyXG4gICAgICB0aGlzLnJlZ2lvbiA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICB0aGlzLmRlZmF1bHQgPSB0aGlzLnJlZ2lvbjtcclxuICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH0sXHJcbiAgICBzaG93RGlhbG9nQnRuOiBmdW5jdGlvbigpIHtcclxuICAgICAgdmFyIHRoYXQ9dGhpcztcclxuICAgICAgaWYodGhhdC5yZWNpcGllbnRzICE9JycgJiYgdGhhdC5yZVBob25lICE9JycgJiYgdGhhdC5yZWdpb24gIT0nJyAmJiB0aGF0LnJlZ2luSW5mbyAhPScnKXtcclxuICAgICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywncGhvbmVSZWcnLHRoYXQucmVQaG9uZSkpIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpeato+ehrueahOaJi+acuuWPtycpO1xyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGF0LnJlYWRkcmVzcz10aGF0LnJlZ2lvbi5qb2luKFwiXCIpK3RoYXQucmVnaW5JbmZvO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgJzAwMCcsICfor7floavlhpnlrozmlbTnmoTlr4Tku7bkv6Hmga8nKVxyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgfSxcclxuICAgIF9jYW5jZWxFdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgX2NvbmZpcm1FdmVudDpmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgICAgdGhhdC5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAvLyAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgLy8gICAgIHVybDogJ3NldHRsZW1lbnQnXHJcbiAgICAgICAgLy8gICB9KTtcclxuXHJcbmNvbnN0IHRlbXBsYXRlSWQ9XCJVMFFLWU1GdHU2d1hkcFl0SFFLbDU1aHU5a09XcTBETm5jYjREMmNLU2lNXCI7XHJcbnd4LnJlcXVlc3RTdWJzY3JpYmVNZXNzYWdlKHtcclxuICB0bXBsSWRzOlt0ZW1wbGF0ZUlkXSxcclxuICBzdWNjZXNzKHJlcyl7XHJcbiAgICAgdmFyIGl0ZW09e1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOnRoYXQucmVhZGRyZXNzLFxyXG4gICAgICAgICBcIm5hbWVcIjp0aGF0LnJlY2lwaWVudHMsXHJcbiAgICAgICAgIFwicGhvbmVcIjp0aGF0LnJlUGhvbmUsXHJcbiAgICAgICAgIFwiY29udHJhY3RJZFwiOnRoYXQuY29udHJhY3RJZCxcclxuICAgICAgICAgXCJjYXJQbGF0ZVwiOnRoYXQuY2FyUGxhdGUsXHJcbiAgICAgICAgIFwiZXh0ZXJuYWxDb250cmFjdE5ickxcIjp0aGF0LmNvbnRyYWN0Tm8sXHJcbiAgICAgICAgIFwiY29udHJhY3RJZFwiOnRoYXQuY29udHJhY3RJZCxcclxuICAgICAgICAgXCJzdGF0dXNcIjp0aGF0LnN0YXR1c1xyXG4gICAgICAgfVxyXG4gICAgaWYocmVzW3RlbXBsYXRlSWRdPT0nYWNjZXB0Jyl7XHJcbiAgICAgIC8v55So5oi35ZCM5oSP5LqG6K6i6ZiF77yM5YWB6K646K6i6ZiF5raI5oGvXHJcbiAgICAgIGNvbnNvbGUubG9nKDExMTEpO1xyXG4gICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgIHRpdGxlOiforqLpmIXmiJDlip8nXHJcbiAgICAgIH0pXHJcblxyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vdXJsOnRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL2RlbGl2ZXJ5L2FkZCcsXHJcbiAgICAgIC8vdXJsOidodHRwOi8vbG9jYWxob3N0OjgwODgvc2V0dGxlbWVudC5qc29uJyxcclxuICAgICAgdXJsOidodHRwOi8vdGVzdC13ZWJhcGkuZG9uZ3poZW5nYWZjLmNvbTo5MTEzL2RlbGl2ZXJ5L2FkZCcsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGFkZHJlc3M6dGhhdC5yZWFkZHJlc3MsXHJcbiAgICAgICAgICBuYW1lOnRoYXQucmVjaXBpZW50cyxcclxuICAgICAgICAgIHBob25lOnRoYXQucmVQaG9uZSxcclxuICAgICAgICAgIGNvbnRyYWN0SWQ6dGhhdC5jb250cmFjdElkLFxyXG4gICAgICAgICAgY2FyUGxhdGU6dGhhdC5jYXJQbGF0ZVxyXG4gICAgICAgICAvLyBzdGF0dXM6dGhhdC5zdGF0ZVxyXG4gICAgICAgIC8vIHBob25lOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Bob25lIC8vIHBob25lOiAnc2hobGxmbXNrc2wnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgIGRlYnVnZ2VyXHJcbiAgIFxyXG4gICAgICAgICAgIHRoYXQuJG5hdmlnYXRlKCd0b3NlbmRhJyxpdGVtKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7ICBcclxuXHJcbiAgICB9ZWxzZXtcclxuICAgICAgY29uc29sZS5sb2coMjIyMik7XHJcbiAgICAgIC8v55So5oi35ouS57ud5LqG6K6i6ZiF77yM56aB55So6K6i6ZiF5raI5oGvXHJcbiAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgdGl0bGU6J+iuoumYheWksei0pSdcclxuICAgICAgfSlcclxuICAgICAgIHRoYXQuJG5hdmlnYXRlKCd0b3NlbmRhJyxpdGVtKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGZhaWwoZXJyKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICB9XHJcbn0pXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgb25Mb2FkKHJlcyl7XHJcbiAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGlmKHJlcy5leHRlcm5hbENvbnRyYWN0TmJyIT11bmRlZmluZWQpe1xyXG4gICAgICB0aGF0LmNvbnRyYWN0Tm89cmVzLmV4dGVybmFsQ29udHJhY3ROYnI7XHJcbiAgICAgIHRoYXQuY29udHJhY3RJZD1yZXMuY29udHJhY3RJZDtcclxuICAgICAgdGhhdC5zdGF0dXM9cmVzLnN0YXR1c1xyXG4gICAgfVxyXG4gIH1cclxuICBvblNob3coKXtcclxuICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoYXQudXJsX2xpbmsgPSB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhhdC5wYXJlbnRfZGF0YSA9IHRoYXQuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG4iXX0=