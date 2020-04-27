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

var phonePerson = function (_wepy$page) {
  _inherits(phonePerson, _wepy$page);

  function phonePerson() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, phonePerson);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = phonePerson.__proto__ || Object.getPrototypeOf(phonePerson)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改手机号'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      name: '',
      parent_data: '',
      phone: '', // 原手机号
      phoneR: false, // 验证手机号格式
      IdCard: '', // 身份证号
      IdCardR: false, //校验身份证号
      newPhone: '', // 新手机号
      newPhoneR: false, // 验证手机号格式
      contractnum: '点击选择合同号', // 合同号
      contracts: [], // 合同列表
      contract_show: false, // 是否显示合同列表
      picCode_show: false, // 是否显示图形验证码
      picCode_url: '', // 图形验证码图片地址
      phoneCode: '', // 手机验证码
      phoneCodeTime: -1, // 手机验证码倒计时
      picCode: '', // 图形验证码
      canSubmit: false,
      requestData: '' // 请求参数
    }, _this.computed = {
      canSubmitFunc: function canSubmitFunc() {
        if (this.phoneCode != '' && this.phone != '' && this.contractnum != '点击选择合同号' && this.newPhone != '' && this.name != '' && this.IdCard != '') {
          if (this.picCode_show) {
            if (this.picCode != '') {
              this.canSubmit = true;
            } else {
              this.canSubmit = false;
            }
          }

          if (this.$invoke('toastInfo', 'phoneReg', this.phone)) {
            this.phoneR = true;
          } else {
            this.phoneR = false;
          }
          if (this.$invoke('toastInfo', 'idCardReg', this.IdCard)) {
            this.IdCardR = true;
          } else {
            this.IdCardR = false;
          }
          if (this.$invoke('toastInfo', 'phoneReg', this.newPhone)) {
            this.newPhoneR = true;
          } else {
            this.newPhoneR = false;
          }
          this.canSubmit = true;
        } else {
          this.canSubmit = false;
        }
      }
    }, _this.methods = {
      // 更改input值
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        console.log(e.currentTarget.dataset.name, e.detail.value);
      },
      // 选择一个合同
      selectContract: function selectContract(item) {
        this.contractnum = this.contracts[item.detail.value].split(':')[0];
        console.log(this.contractnum);
      },
      //获取短信验证码
      getCode: function getCode() {
        var that = this;
        if (that.phoneCodeTime > 0) {
          return false;
        }
        if (!that.$invoke('toastInfo', 'phoneReg', that.newPhone)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的新手机号');
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/sms/sendModifyTelephone',
          data: {
            telephone: that.newPhone,
            verify: that.picCode
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          method: 'POST',
          success: function success(res) {
            if (res.data.code == '10001') {
              that.phoneCodeTime = 60;
              that.timer(60, 'phoneCodeTime');
            } else {
              if (res.data.code == '20017') {
                that.phoneCodeTime = 60;
                that.timer(60, 'phoneCodeTime');
                that.getPicCode();
              } else {
                that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
              }
            }
            that.$apply();
          }
        });
      },
      // 获取图形验证码
      getPic: _this.getPicCode,
      // 提交修改
      submit: function submit() {
        var that = this;
        if (!that.canSubmit) {
          return false;
        }
        if (!that.$invoke('toastInfo', 'phoneReg', that.newPhone)) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请输入正确的新手机号');
          return false;
        }
        that.canSubmit = false;
        that.requestData = {
          authenticationCode: that.phoneCode,
          telephoneNew: that.newPhone,
          contractNo: that.contractnum,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId
        };
        if (that.picCode_show) {
          // that.requestData.divnceId = that.picCode;
        }
        if (wx.getStorageSync('phoneChange_id')) {
          that.requestData.recordId = wx.getStorageSync('phoneChange_id');
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/mobileModifyRecord/apply',
          data: that.requestData,
          method: 'POST',
          header: {
            'content-type': 'application/x-www-form-urlencoded' // 默认值
          },
          success: function success(res) {
            if (res.data.code == '10001') {
              that.canSubmit = true;
              that.$redirect('phoneSubmit', { id: res.data.data.recordId });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail() {
            console.log('修改合同手机号失败');
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(phonePerson, [{
    key: 'getContracts',

    //获取合同信息
    value: function getContracts() {
      var that = this;
      console.log(that.phone);
      wx.request({
        url: that.parent_data.json_dhLink + '/contract/getlist',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            that.contracts = [];
            res.data.data.forEach(function (item) {
              that.contracts.push(item.externalContractNbr + ':' + item.comments);
            });
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    }
    // 获取图形验证码

  }, {
    key: 'getPicCode',
    value: function getPicCode() {
      var that = this;
      var time = new Date().getTime();
      that.picCode_show = true;
      that.picCode_url = that.parent_data.json_dhLink + '/getVerify';
    }
    // 定时器

  }, {
    key: 'timer',
    value: function timer(time, name) {
      var that = this;
      var timeInfo = time;
      var timerFunc = setInterval(function () {
        if (timeInfo >= 0) {
          that[name] = timeInfo--;
          that.$apply();
        } else {
          clearInterval(timerFunc);
        }
      }, 1000);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (!options.type) {
        this.contractnum = options.ctnumber;
        this.newPhone = options.newPhone;
      } else {
        this.contractnum = '点击选择合同号';
        this.newPhone = '';
      }
      this.phoneCode = '';
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.name = this.$parent.globalData.login_name;
      this.phone = this.$parent.globalData.login_phone;
      this.IdCard = this.$parent.globalData.login_idCard;
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      this.phoneCodeTime = -1;
      this.getContracts();
    }
  }]);

  return phonePerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(phonePerson , 'pages/phonePerson'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lUGVyc29uLmpzIl0sIm5hbWVzIjpbInBob25lUGVyc29uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwidXJsX2xpbmsiLCJuYW1lIiwicGFyZW50X2RhdGEiLCJwaG9uZSIsInBob25lUiIsIklkQ2FyZCIsIklkQ2FyZFIiLCJuZXdQaG9uZSIsIm5ld1Bob25lUiIsImNvbnRyYWN0bnVtIiwiY29udHJhY3RzIiwiY29udHJhY3Rfc2hvdyIsInBpY0NvZGVfc2hvdyIsInBpY0NvZGVfdXJsIiwicGhvbmVDb2RlIiwicGhvbmVDb2RlVGltZSIsInBpY0NvZGUiLCJjYW5TdWJtaXQiLCJyZXF1ZXN0RGF0YSIsImNvbXB1dGVkIiwiY2FuU3VibWl0RnVuYyIsIiRpbnZva2UiLCJtZXRob2RzIiwiY2hhbmdlVmFsdWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkZXRhaWwiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RDb250cmFjdCIsIml0ZW0iLCJzcGxpdCIsImdldENvZGUiLCJ0aGF0Iiwid3giLCJyZXF1ZXN0IiwidXJsIiwianNvbl9kaExpbmsiLCJ0ZWxlcGhvbmUiLCJ2ZXJpZnkiLCJoZWFkZXIiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzIiwiY29kZSIsInRpbWVyIiwiZ2V0UGljQ29kZSIsIm1zZyIsIiRhcHBseSIsImdldFBpYyIsInN1Ym1pdCIsImF1dGhlbnRpY2F0aW9uQ29kZSIsInRlbGVwaG9uZU5ldyIsImNvbnRyYWN0Tm8iLCJsb2dpblRva2VuIiwibG9naW5fdG9rZW4iLCJ1c2VySWQiLCJsb2dpbl91c2VySWQiLCJnZXRTdG9yYWdlU3luYyIsInJlY29yZElkIiwiJHJlZGlyZWN0IiwiaWQiLCJmYWlsIiwiZm9yRWFjaCIsInB1c2giLCJleHRlcm5hbENvbnRyYWN0TmJyIiwiY29tbWVudHMiLCJ0aW1lIiwiRGF0ZSIsImdldFRpbWUiLCJ0aW1lSW5mbyIsInRpbWVyRnVuYyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9wdGlvbnMiLCJ0eXBlIiwiY3RudW1iZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImxvZ2luX25hbWUiLCJsb2dpbl9waG9uZSIsImxvZ2luX2lkQ2FyZCIsImdldENvbnRyYWN0cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxtQkFBYSxFQUhSO0FBSUxDLGFBQU8sRUFKRixFQUlNO0FBQ1hDLGNBQU8sS0FMRixFQUtTO0FBQ2RDLGNBQVEsRUFOSCxFQU1PO0FBQ1pDLGVBQVEsS0FQSCxFQU9VO0FBQ2ZDLGdCQUFVLEVBUkwsRUFRUztBQUNkQyxpQkFBVyxLQVROLEVBU2E7QUFDbEJDLG1CQUFhLFNBVlIsRUFVbUI7QUFDeEJDLGlCQUFXLEVBWE4sRUFXVTtBQUNmQyxxQkFBZSxLQVpWLEVBWWlCO0FBQ3RCQyxvQkFBYyxLQWJULEVBYWdCO0FBQ3JCQyxtQkFBYSxFQWRSLEVBY1k7QUFDakJDLGlCQUFXLEVBZk4sRUFlVTtBQUNmQyxxQkFBZSxDQUFDLENBaEJYLEVBZ0JjO0FBQ25CQyxlQUFTLEVBakJKLEVBaUJRO0FBQ2JDLGlCQUFXLEtBbEJOO0FBbUJMQyxtQkFBYSxFQW5CUixDQW1CWTtBQW5CWixLLFFBcUJQQyxRLEdBQVc7QUFDVEMscUJBQWUseUJBQVk7QUFDekIsWUFBSSxLQUFLTixTQUFMLElBQWlCLEVBQWpCLElBQXVCLEtBQUtYLEtBQUwsSUFBYyxFQUFyQyxJQUEyQyxLQUFLTSxXQUFMLElBQW9CLFNBQS9ELElBQTRFLEtBQUtGLFFBQUwsSUFBaUIs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aEIsRUFBbUI7QUFDakJyQyxlQUFLbEMsSUFBTCxJQUFhdUUsVUFBYjtBQUNBckMsZUFBS2UsTUFBTDtBQUNELFNBSEQsTUFHTztBQUNMeUIsd0JBQWNGLFNBQWQ7QUFDRDtBQUNGLE9BUGUsRUFPYixJQVBhLENBQWhCO0FBUUQ7OzsyQkFDTUcsTyxFQUFTO0FBQ2QsVUFBSSxDQUFDQSxRQUFRQyxJQUFiLEVBQW1CO0FBQ2pCLGFBQUtwRSxXQUFMLEdBQW1CbUUsUUFBUUUsUUFBM0I7QUFDQSxhQUFLdkUsUUFBTCxHQUFnQnFFLFFBQVFyRSxRQUF4QjtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtFLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxhQUFLRixRQUFMLEdBQWdCLEVBQWhCO0FBQ0Q7QUFDRCxXQUFLTyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtiLElBQUwsR0FBYSxLQUFLOEUsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUFyQztBQUNDLFdBQUs5RSxLQUFMLEdBQWMsS0FBSzRFLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkUsV0FBdEM7QUFDQSxXQUFLN0UsTUFBTCxHQUFjLEtBQUswRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JHLFlBQXRDO0FBQ0QsV0FBS25GLFFBQUwsR0FBZ0IsS0FBSytFLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmhGLFFBQXhDO0FBQ0EsV0FBS0UsV0FBTCxHQUFtQixLQUFLNkUsT0FBTCxDQUFhQyxVQUFoQztBQUNBLFdBQUtqRSxhQUFMLEdBQXFCLENBQUMsQ0FBdEI7QUFDQSxXQUFLcUUsWUFBTDtBQUNEOzs7O0VBNU5zQ0MsZUFBS0MsSTs7a0JBQXpCNUYsVyIsImZpbGUiOiJwaG9uZVBlcnNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcGhvbmVQZXJzb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5L+u5pS55omL5py65Y+3J1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBuYW1lOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgICBwaG9uZTogJycsIC8vIOWOn+aJi+acuuWPt1xyXG4gICAgICBwaG9uZVI6ZmFsc2UsIC8vIOmqjOivgeaJi+acuuWPt+agvOW8j1xyXG4gICAgICBJZENhcmQ6ICcnLCAvLyDouqvku73or4Hlj7dcclxuICAgICAgSWRDYXJkUjpmYWxzZSwgLy/moKHpqozouqvku73or4Hlj7dcclxuICAgICAgbmV3UGhvbmU6ICcnLCAvLyDmlrDmiYvmnLrlj7dcclxuICAgICAgbmV3UGhvbmVSOiBmYWxzZSwgLy8g6aqM6K+B5omL5py65Y+35qC85byPXHJcbiAgICAgIGNvbnRyYWN0bnVtOiAn54K55Ye76YCJ5oup5ZCI5ZCM5Y+3JywgLy8g5ZCI5ZCM5Y+3XHJcbiAgICAgIGNvbnRyYWN0czogW10sIC8vIOWQiOWQjOWIl+ihqFxyXG4gICAgICBjb250cmFjdF9zaG93OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65ZCI5ZCM5YiX6KGoXHJcbiAgICAgIHBpY0NvZGVfc2hvdzogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuWbvuW9oumqjOivgeeggVxyXG4gICAgICBwaWNDb2RlX3VybDogJycsIC8vIOWbvuW9oumqjOivgeeggeWbvueJh+WcsOWdgFxyXG4gICAgICBwaG9uZUNvZGU6ICcnLCAvLyDmiYvmnLrpqozor4HnoIFcclxuICAgICAgcGhvbmVDb2RlVGltZTogLTEsIC8vIOaJi+acuumqjOivgeeggeWAkuiuoeaXtlxyXG4gICAgICBwaWNDb2RlOiAnJywgLy8g5Zu+5b2i6aqM6K+B56CBXHJcbiAgICAgIGNhblN1Ym1pdDogZmFsc2UsXHJcbiAgICAgIHJlcXVlc3REYXRhOiAnJyAsLy8g6K+35rGC5Y+C5pWwXHJcbiAgICB9O1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIGNhblN1Ym1pdEZ1bmM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5waG9uZUNvZGUgIT0nJyAmJiB0aGlzLnBob25lICE9ICcnICYmIHRoaXMuY29udHJhY3RudW0gIT0gJ+eCueWHu+mAieaLqeWQiOWQjOWPtycgJiYgdGhpcy5uZXdQaG9uZSAhPSAnJyAmJiB0aGlzLm5hbWUgIT0gJycgJiYgdGhpcy5JZENhcmQgIT0gJycpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnBpY0NvZGVfc2hvdyApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGljQ29kZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBpZiAodGhpcy4kaW52b2tlKCd0b2FzdEluZm8nLCAncGhvbmVSZWcnLCB0aGlzLnBob25lKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBob25lUiA9IHRydWVcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGhvbmVSID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy4kaW52b2tlKCd0b2FzdEluZm8nLCAnaWRDYXJkUmVnJywgdGhpcy5JZENhcmQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuSWRDYXJkUiA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLklkQ2FyZFIgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICh0aGlzLiRpbnZva2UoJ3RvYXN0SW5mbycsICdwaG9uZVJlZycsIHRoaXMubmV3UGhvbmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3UGhvbmVSID0gdHJ1ZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3UGhvbmVSID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuY2FuU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g5pu05pS5aW5wdXTlgLxcclxuICAgICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWUsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpgInmi6nkuIDkuKrlkIjlkIxcclxuICAgICAgc2VsZWN0Q29udHJhY3Q6IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdG51bSA9IHRoaXMuY29udHJhY3RzW2l0ZW0uZGV0YWlsLnZhbHVlXS5zcGxpdCgnOicpWzBdXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jb250cmFjdG51bSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6I635Y+W55+t5L+h6aqM6K+B56CBXHJcbiAgICAgIGdldENvZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHRoYXQucGhvbmVDb2RlVGltZSA+IDApIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ3Bob25lUmVnJywgdGhhdC5uZXdQaG9uZSkpIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+36L6T5YWl5q2j56Gu55qE5paw5omL5py65Y+3Jyk7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICArICcvc21zL3NlbmRNb2RpZnlUZWxlcGhvbmUnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICB0ZWxlcGhvbmUgOiB0aGF0Lm5ld1Bob25lLFxyXG4gICAgICAgICAgICB2ZXJpZnk6IHRoYXQucGljQ29kZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LnBob25lQ29kZVRpbWUgPSA2MDtcclxuICAgICAgICAgICAgICB0aGF0LnRpbWVyKDYwLCAncGhvbmVDb2RlVGltZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcyMDAxNycpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQucGhvbmVDb2RlVGltZSA9IDYwO1xyXG4gICAgICAgICAgICAgICAgdGhhdC50aW1lcig2MCwgJ3Bob25lQ29kZVRpbWUnKTtcclxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0UGljQ29kZSgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g6I635Y+W5Zu+5b2i6aqM6K+B56CBXHJcbiAgICAgIGdldFBpYzogdGhpcy5nZXRQaWNDb2RlLFxyXG4gICAgICAvLyDmj5DkuqTkv67mlLlcclxuICAgICAgc3VibWl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGlmICghdGhhdC5jYW5TdWJtaXQpIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdwaG9uZVJlZycsIHRoYXQubmV3UGhvbmUpKSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+i+k+WFpeato+ehrueahOaWsOaJi+acuuWPtycpXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQuY2FuU3VibWl0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoYXQucmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgYXV0aGVudGljYXRpb25Db2RlOiB0aGF0LnBob25lQ29kZSxcclxuICAgICAgICAgICAgICB0ZWxlcGhvbmVOZXc6IHRoYXQubmV3UGhvbmUsXHJcbiAgICAgICAgICAgICAgY29udHJhY3RObzogdGhhdC5jb250cmFjdG51bSxcclxuICAgICAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGF0LnBpY0NvZGVfc2hvdykge1xyXG4gICAgICAgICAgLy8gdGhhdC5yZXF1ZXN0RGF0YS5kaXZuY2VJZCA9IHRoYXQucGljQ29kZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdwaG9uZUNoYW5nZV9pZCcpKSB7XHJcbiAgICAgICAgICB0aGF0LnJlcXVlc3REYXRhLnJlY29yZElkID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Bob25lQ2hhbmdlX2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9tb2JpbGVNb2RpZnlSZWNvcmQvYXBwbHknLFxyXG4gICAgICAgICAgZGF0YTogdGhhdC5yZXF1ZXN0RGF0YSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LmNhblN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgdGhhdC4kcmVkaXJlY3QoJ3Bob25lU3VibWl0Jywge2lkOiByZXMuZGF0YS5kYXRhLnJlY29yZElkfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfkv67mlLnlkIjlkIzmiYvmnLrlj7flpLHotKUnKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvL+iOt+WPluWQiOWQjOS/oeaBr1xyXG4gICAgZ2V0Q29udHJhY3RzKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoYXQucGhvbmUpXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvY29udHJhY3QvZ2V0bGlzdCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgdGhhdC5jb250cmFjdHMgPSBbXTtcclxuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5jb250cmFjdHMucHVzaChpdGVtLmV4dGVybmFsQ29udHJhY3ROYnIgKyAnOicgKyBpdGVtLmNvbW1lbnRzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blm77lvaLpqozor4HnoIFcclxuICAgIGdldFBpY0NvZGUgKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIHRoYXQucGljQ29kZV9zaG93ID0gdHJ1ZTtcclxuICAgICAgdGhhdC5waWNDb2RlX3VybCA9IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgICsgJy9nZXRWZXJpZnknO1xyXG4gICAgfVxyXG4gICAgLy8g5a6a5pe25ZmoXHJcbiAgICB0aW1lcih0aW1lLCBuYW1lKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgdmFyIHRpbWVJbmZvID0gdGltZTtcclxuICAgICAgdmFyIHRpbWVyRnVuYyA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aW1lSW5mbyA+PSAwKSB7XHJcbiAgICAgICAgICB0aGF0W25hbWVdID0gdGltZUluZm8tLTtcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXJGdW5jKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICBpZiAoIW9wdGlvbnMudHlwZSkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RudW0gPSBvcHRpb25zLmN0bnVtYmVyO1xyXG4gICAgICAgIHRoaXMubmV3UGhvbmUgPSBvcHRpb25zLm5ld1Bob25lO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RudW0gPSAn54K55Ye76YCJ5oup5ZCI5ZCM5Y+3JztcclxuICAgICAgICB0aGlzLm5ld1Bob25lID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5waG9uZUNvZGUgPSAnJztcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy5uYW1lID0gIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX25hbWU7XHJcbiAgICAgICB0aGlzLnBob25lID0gIHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX3Bob25lO1xyXG4gICAgICAgdGhpcy5JZENhcmQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9pZENhcmQ7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB0aGlzLnBob25lQ29kZVRpbWUgPSAtMTtcclxuICAgICAgdGhpcy5nZXRDb250cmFjdHMoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19