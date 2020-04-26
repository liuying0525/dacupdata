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

var earlyPerson = function (_wepy$page) {
  _inherits(earlyPerson, _wepy$page);

  function earlyPerson() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, earlyPerson);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = earlyPerson.__proto__ || Object.getPrototypeOf(earlyPerson)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提前还款'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      parent_data: '',
      timeList: [],
      currentTime: '点击选择时间',
      name: '',
      phone: '',
      phoneR: false, // 校验手机号格式
      contractnum: '点击选择合同号', // 合同号
      contracts: [], // 合同列表
      contractTime: [], //合同时间列表
      contract_show: false, // 是否显示合同列表
      picCode_show: false, // 是否显示图形验证码
      picCode_url: '', // 图形验证码图片地址
      phoneCode: '', // 手机验证码
      phoneCodeTime: -1, // 手机验证码倒计时
      picCode: '', // 图形验证码
      canTry: false, // 是否可以提交
      canTryTime: -1,
      requestData: '',
      id: '',
      currenttimeValue: '',
      fontColor: false
    }, _this.computed = {
      canTryFunc: function canTryFunc() {
        if (this.phone != '' && this.contractnum != '点击选择合同号' && this.currentTime != '点击选择时间' && this.canTryTime <= 0 && this.name != '' && !this.fontColor) {
          this.canTry = true;
          if (this.$invoke('toastInfo', 'phoneReg', this.phone)) {
            console.log('手机格式' + this.phoneR);
            this.phoneR = true;
          } else {
            this.phoneR = false;
          }
          this.canTry = true;
        } else {
          this.canTry = false;
        }
      }
    }, _this.methods = {
      // 提前还款日详情
      earlyHelpInfo: function earlyHelpInfo() {
        this.$invoke('toastInfo', 'modelFunc', '000', '提前还款时间需为工作日，不做当日提前还款，且需早于下一个还款日');
      },
      // 选择时间
      timeChange: function timeChange(val) {
        // this.currentTime = this.timeList[val.detail.value]
        var checkTime = this.timeList[val.detail.value].split('-')[1] + "-" + this.timeList[val.detail.value].split('-')[2];
        if (checkTime == this.currenttimeValue) {
          this.$invoke('toastInfo', 'modelFunc', '000', '月供日当天不能申请提前结清');
          this.fontColor = true;
          this.currentTime = "月供日当天不能申请提前还款";
          this.$apply();
        } else {
          this.currentTime = this.timeList[val.detail.value];
          this.fontColor = false;
        }
        console.log(this.currentTime);
      },
      // 更改input值
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        console.log(e.currentTarget.dataset.name, e.detail.value);
      },
      // 选择一个合同
      selectContract: function selectContract(item) {
        // this.contract_show = false
        if (this.contracts.length > 0) {
          this.contractnum = this.contracts[item.detail.value].split(':')[0];
          var that = this;
          that.contractTime.forEach(function (aitem) {

            if (aitem.name == that.contracts[item.detail.value].split(':')[0]) {
              that.currenttimeValue = aitem.time;
            }
          });
          console.log(this.contractnum);
          this.getTimeList();
        }
      },
      //获取短信验证码
      getCode: function getCode() {
        var that = this;
        if (that.phoneCodeTime > 0 || that.canTryTime > 0) {
          return false;
        }
        wx.request({
          url: that.parent_data.json_dhLink + '/sms/sendRepayment',
          data: {
            userId: that.parent_data.login_userId,
            loginToken: that.parent_data.login_token,
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
                that.getPicCode();
              }
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
            that.$apply();
          }
        });
      },
      //获取图形验证码
      getPic: _this.getPicCode,
      // 选择日期的条件： 先填写手机号和合同号
      timeSelect: function timeSelect() {
        if (this.phone == '' || this.contractnum == '点击选择合同号') {
          this.$invoke('toastInfo', 'modelFunc', 'A00002', '请先填写手机号和合同号');
        }
      },
      // 试算金额
      tryCount: function tryCount() {
        var that = this;
        if (that.canTryTime > 0) {
          return false;
        }
        if (!that.canTry) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请填写完整的个人信息');
          return false;
        }
        that.canTry = false;
        that.requestData = {
          // authenticationCode: that.phoneCode,
          contractNo: that.contractnum,
          settleDate: new Date(that.currentTime).getTime() / 1000,
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        };
        that.$navigate('earlyContract', that.requestData);
        // wx.request({
        //  url: that.parent_data.json_dhLink + '/repayment/trial',
        //  // url:'http://localhost:8088/earlyContract.json',
        //  data: that.requestData,
        //      header: {
        //     'content-type': 'application/x-www-form-urlencoded;charset=utf-8' // 默认值
        //   },
        //    method: 'POST',
        //   success: function (res) {
        //     if (res.data.code == '10001') {
        //       that.canTry = true;
        //       that.$navigate('earlyContract',that.requestData);
        //     } else {
        //        that.$invoke('toastInfo','modelFunc',res.data.code,res.data.msg);
        //     }
        //   }
        // })
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(earlyPerson, [{
    key: 'getContracts',

    //获取合同信息
    value: function getContracts() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/contract/getlist',
        //url:'http://localhost:8088/earlyPerson_getlist.json',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            // that.contract_show = true;
            that.contracts = [];
            res.data.data.forEach(function (item) {
              var itemTime = item.contractStartDte.split(" ")[0].split("-")[1] + '-' + item.contractStartDte.split(" ")[0].split("-")[2];
              that.contracts.push(item.externalContractNbr + ':' + item.comments);
              that.contractTime.push({ "name": item.externalContractNbr, "time": itemTime });
            });
            that.$apply();
          } else {
            'toastInfo', 'modelFunc', res.data.code, res.data.msg;
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
    // 获取有效时间列表

  }, {
    key: 'getTimeList',
    value: function getTimeList() {
      var that = this;
      if (this.contractnum === '点击选择合同号') {
        this.$invoke('toastInfo', 'modelFunc', 'A00002', '请先选择合同号');
        return false;
      }
      wx.request({
        url: that.parent_data.json_dhLink + '/repayment/getUsablePayDate',
        //url:'http://localhost:8088/getUsablePayDate.json',
        data: {
          contractNo: that.contractnum,
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            that.timeList = res.data.data;
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
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
          if (name == 'canTryTime') {

            that.$navigate('earlyContract', that.requestData);
          }
          clearInterval(timerFunc);
        }
      }, 1000);
    }
  }, {
    key: 'onLoad',
    value: function onLoad(options) {
      if (!options.type) {
        this.contractnum = options.ctnumber;
        this.currentTime = options.currentTime.split(' ')[0];
        this.getTimeList();
      } else {
        this.contractnum = '点击选择合同号';
        this.currentTime = '点击选择时间';
      }
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.url_link = this.$parent.globalData.url_link;
      this.parent_data = this.$parent.globalData;
      console.log("11111" + this.parent_data);
      this.name = this.$parent.globalData.login_name;
      this.phone = this.$parent.globalData.login_phone;
      this.IdCard = this.$parent.globalData.login_idCard;
      this.phoneCodeTime = -1;
      this.canTryTime = -1;
      this.getContracts();
    }
  }]);

  return earlyPerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlyPerson , 'pages/earlyPerson'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5UGVyc29uLmpzIl0sIm5hbWVzIjpbImVhcmx5UGVyc29uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwidXJsX2xpbmsiLCJwYXJlbnRfZGF0YSIsInRpbWVMaXN0IiwiY3VycmVudFRpbWUiLCJuYW1lIiwicGhvbmUiLCJwaG9uZVIiLCJjb250cmFjdG51bSIsImNvbnRyYWN0cyIsImNvbnRyYWN0VGltZSIsImNvbnRyYWN0X3Nob3ciLCJwaWNDb2RlX3Nob3ciLCJwaWNDb2RlX3VybCIsInBob25lQ29kZSIsInBob25lQ29kZVRpbWUiLCJwaWNDb2RlIiwiY2FuVHJ5IiwiY2FuVHJ5VGltZSIsInJlcXVlc3REYXRhIiwiaWQiLCJjdXJyZW50dGltZVZhbHVlIiwiZm9udENvbG9yIiwiY29tcHV0ZWQiLCJjYW5UcnlGdW5jIiwiJGludm9rZSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2RzIiwiZWFybHlIZWxwSW5mbyIsInRpbWVDaGFuZ2UiLCJ2YWwiLCJjaGVja1RpbWUiLCJkZXRhaWwiLCJ2YWx1ZSIsInNwbGl0IiwiJGFwcGx5IiwiY2hhbmdlVmFsdWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RDb250cmFjdCIsIml0ZW0iLCJsZW5ndGgiLCJ0aGF0IiwiZm9yRWFjaCIsImFpdGVtIiwidGltZSIsImdldFRpbWVMaXN0IiwiZ2V0Q29kZSIsInd4IiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwidmVyaWZ5IiwiaGVhZGVyIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJ0aW1lciIsImdldFBpY0NvZGUiLCJtc2ciLCJnZXRQaWMiLCJ0aW1lU2VsZWN0IiwidHJ5Q291bnQiLCJjb250cmFjdE5vIiwic2V0dGxlRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwiJG5hdmlnYXRlIiwiaXRlbVRpbWUiLCJjb250cmFjdFN0YXJ0RHRlIiwicHVzaCIsImV4dGVybmFsQ29udHJhY3ROYnIiLCJjb21tZW50cyIsImZhaWwiLCJ0aW1lSW5mbyIsInRpbWVyRnVuYyIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9wdGlvbnMiLCJ0eXBlIiwiY3RudW1iZXIiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImxvZ2luX25hbWUiLCJsb2dpbl9waG9uZSIsIklkQ2FyZCIsImxvZ2luX2lkQ2FyZCIsImdldENvbnRyYWN0cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFc7Ozs7Ozs7Ozs7Ozs7O2dNQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxnQkFBVSxFQURMO0FBRUxDLG1CQUFhLEVBRlI7QUFHTEMsZ0JBQVMsRUFISjtBQUlMQyxtQkFBYSxRQUpSO0FBS0xDLFlBQU0sRUFMRDtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsY0FBUSxLQVBILEVBT1U7QUFDZkMsbUJBQWEsU0FSUixFQVFtQjtBQUN4QkMsaUJBQVcsRUFUTixFQVNVO0FBQ2ZDLG9CQUFhLEVBVlIsRUFVVztBQUNoQkMscUJBQWUsS0FYVixFQVdpQjtBQUN0QkMsb0JBQWMsS0FaVCxFQVlnQjtBQUNyQkMsbUJBQWEsRUFiUixFQWFZO0FBQ2pCQyxpQkFBVyxFQWROLEVBY1U7QUFDZkMscUJBQWUsQ0FBQyxDQWZYLEVBZWM7QUFDbkJDLGVBQVMsRUFoQkosRUFnQlE7QUFDYkMsY0FBUSxLQWpCSCxFQWlCVTtBQUNmQyxrQkFBWSxDQUFDLENBbEJSO0FBbUJMQyxtQkFBYSxFQW5CUjtBQW9CTEMsVUFBSSxFQXBCQztBQXFCTEMsd0JBQWlCLEVBckJaO0FBc0JMQyxpQkFBVTtBQXRCTCxLLFFBd0JQ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Q0FBd0JFLFdBQXJDO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtKLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkksWUFBdEM7QUFDQSxXQUFLOUUsYUFBTCxHQUFxQixDQUFDLENBQXRCO0FBQ0EsV0FBS0csVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsV0FBSzRFLFlBQUw7QUFDRDs7OztFQTFRc0NDLGVBQUtDLEk7O2tCQUF6QnJHLFciLCJmaWxlIjoiZWFybHlQZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGVhcmx5UGVyc29uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aPkOWJjei/mOasvidcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICAgIHRpbWVMaXN0OltdLFxyXG4gICAgICBjdXJyZW50VGltZTogJ+eCueWHu+mAieaLqeaXtumXtCcsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIHBob25lUjogZmFsc2UsIC8vIOagoemqjOaJi+acuuWPt+agvOW8j1xyXG4gICAgICBjb250cmFjdG51bTogJ+eCueWHu+mAieaLqeWQiOWQjOWPtycsIC8vIOWQiOWQjOWPt1xyXG4gICAgICBjb250cmFjdHM6IFtdLCAvLyDlkIjlkIzliJfooahcclxuICAgICAgY29udHJhY3RUaW1lOltdLC8v5ZCI5ZCM5pe26Ze05YiX6KGoXHJcbiAgICAgIGNvbnRyYWN0X3Nob3c6IGZhbHNlLCAvLyDmmK/lkKbmmL7npLrlkIjlkIzliJfooahcclxuICAgICAgcGljQ29kZV9zaG93OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65Zu+5b2i6aqM6K+B56CBXHJcbiAgICAgIHBpY0NvZGVfdXJsOiAnJywgLy8g5Zu+5b2i6aqM6K+B56CB5Zu+54mH5Zyw5Z2AXHJcbiAgICAgIHBob25lQ29kZTogJycsIC8vIOaJi+acuumqjOivgeeggVxyXG4gICAgICBwaG9uZUNvZGVUaW1lOiAtMSwgLy8g5omL5py66aqM6K+B56CB5YCS6K6h5pe2XHJcbiAgICAgIHBpY0NvZGU6ICcnLCAvLyDlm77lvaLpqozor4HnoIFcclxuICAgICAgY2FuVHJ5OiBmYWxzZSwgLy8g5piv5ZCm5Y+v5Lul5o+Q5LqkXHJcbiAgICAgIGNhblRyeVRpbWU6IC0xLFxyXG4gICAgICByZXF1ZXN0RGF0YTogJycsXHJcbiAgICAgIGlkOiAnJyxcclxuICAgICAgY3VycmVudHRpbWVWYWx1ZTonJyxcclxuICAgICAgZm9udENvbG9yOmZhbHNlXHJcbiAgICB9XHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgY2FuVHJ5RnVuYzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBob25lICE9ICcnICYmIHRoaXMuY29udHJhY3RudW0gIT0gJ+eCueWHu+mAieaLqeWQiOWQjOWPtycgJiYgdGhpcy5jdXJyZW50VGltZSAhPSAn54K55Ye76YCJ5oup5pe26Ze0JyAmJiB0aGlzLmNhblRyeVRpbWUgPD0gMCAmJiB0aGlzLm5hbWUgIT0gJycgJiYgIXRoaXMuZm9udENvbG9yKSB7XHJcbiAgICAgICAgICB0aGlzLmNhblRyeSA9IHRydWU7XHJcbiAgICAgICAgICBpZiAodGhpcy4kaW52b2tlKCd0b2FzdEluZm8nLCAncGhvbmVSZWcnLCB0aGlzLnBob25lKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omL5py65qC85byPJyArIHRoaXMucGhvbmVSKVxyXG4gICAgICAgICAgICB0aGlzLnBob25lUiA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBob25lUiA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5jYW5UcnkgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhblRyeSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOaPkOWJjei/mOasvuaXpeivpuaDhVxyXG4gICAgICBlYXJseUhlbHBJbmZvOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLCcwMDAnLCfmj5DliY3ov5jmrL7ml7bpl7TpnIDkuLrlt6XkvZzml6XvvIzkuI3lgZrlvZPml6Xmj5DliY3ov5jmrL7vvIzkuJTpnIDml6nkuo7kuIvkuIDkuKrov5jmrL7ml6UnKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YCJ5oup5pe26Ze0XHJcbiAgICAgIHRpbWVDaGFuZ2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRUaW1lID0gdGhpcy50aW1lTGlzdFt2YWwuZGV0YWlsLnZhbHVlXVxyXG4gICAgICAgIHZhciBjaGVja1RpbWU9dGhpcy50aW1lTGlzdFt2YWwuZGV0YWlsLnZhbHVlXS5zcGxpdCgnLScpWzFdK1wiLVwiK3RoaXMudGltZUxpc3RbdmFsLmRldGFpbC52YWx1ZV0uc3BsaXQoJy0nKVsyXTtcclxuICAgICAgICBpZihjaGVja1RpbWU9PXRoaXMuY3VycmVudHRpbWVWYWx1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn5pyI5L6b5pel5b2T5aSp5LiN6IO955Sz6K+35o+Q5YmN57uT5riFJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9udENvbG9yPXRydWU7XHJcbiAgICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gXCLmnIjkvpvml6XlvZPlpKnkuI3og73nlLPor7fmj5DliY3ov5jmrL5cIjtcclxuICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHRoaXMudGltZUxpc3RbdmFsLmRldGFpbC52YWx1ZV1cclxuICAgICAgICAgIHRoaXMuZm9udENvbG9yPWZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRUaW1lKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDmm7TmlLlpbnB1dOWAvFxyXG4gICAgICBjaGFuZ2VWYWx1ZTogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB0aGlzW2UuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWVdID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZSwgZS5kZXRhaWwudmFsdWUpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOmAieaLqeS4gOS4quWQiOWQjFxyXG4gICAgICBzZWxlY3RDb250cmFjdDogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAvLyB0aGlzLmNvbnRyYWN0X3Nob3cgPSBmYWxzZVxyXG4gICAgICAgIGlmKHRoaXMuY29udHJhY3RzLmxlbmd0aD4wKXtcclxuIHRoaXMuY29udHJhY3RudW0gPSB0aGlzLmNvbnRyYWN0c1tpdGVtLmRldGFpbC52YWx1ZV0uc3BsaXQoJzonKVswXVxyXG52YXIgdGhhdD10aGlzO1xyXG4gdGhhdC5jb250cmFjdFRpbWUuZm9yRWFjaChmdW5jdGlvbihhaXRlbSl7XHJcbiBcclxuICAgaWYoYWl0ZW0ubmFtZT09dGhhdC5jb250cmFjdHNbaXRlbS5kZXRhaWwudmFsdWVdLnNwbGl0KCc6JylbMF0pe1xyXG4gICAgIHRoYXQuY3VycmVudHRpbWVWYWx1ZT1haXRlbS50aW1lO1xyXG4gICB9XHJcbiB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJhY3RudW0pO1xyXG4gICAgICAgIHRoaXMuZ2V0VGltZUxpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgfSxcclxuICAgICAgLy/ojrflj5bnn63kv6Hpqozor4HnoIFcclxuICAgICAgZ2V0Q29kZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAodGhhdC5waG9uZUNvZGVUaW1lID4gMCB8fCB0aGF0LmNhblRyeVRpbWUgPiAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgICsgJy9zbXMvc2VuZFJlcGF5bWVudCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIHVzZXJJZCA6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICB2ZXJpZnk6IHRoYXQucGljQ29kZVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgICB0aGF0LnBob25lQ29kZVRpbWUgPSA2MDtcclxuICAgICAgICAgICAgICB0aGF0LnRpbWVyKDYwLCAncGhvbmVDb2RlVGltZScpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcyMDAxNycpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuZ2V0UGljQ29kZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6I635Y+W5Zu+5b2i6aqM6K+B56CBXHJcbiAgICAgIGdldFBpYzogdGhpcy5nZXRQaWNDb2RlLFxyXG4gICAgICAvLyDpgInmi6nml6XmnJ/nmoTmnaHku7bvvJog5YWI5aGr5YaZ5omL5py65Y+35ZKM5ZCI5ZCM5Y+3XHJcbiAgICAgIHRpbWVTZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBob25lID09ICcnIHx8IHRoaXMuY29udHJhY3RudW0gPT0gJ+eCueWHu+mAieaLqeWQiOWQjOWPtycpIHtcclxuICAgICAgICAgIHRoaXMuJGludm9rZSgndG9hc3RJbmZvJywnbW9kZWxGdW5jJywnQTAwMDAyJywn6K+35YWI5aGr5YaZ5omL5py65Y+35ZKM5ZCI5ZCM5Y+3JylcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOivleeul+mHkeminVxyXG4gICAgICB0cnlDb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpZiAodGhhdC5jYW5UcnlUaW1lID4gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoYXQuY2FuVHJ5KSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+Whq+WGmeWujOaVtOeahOS4quS6uuS/oeaBrycpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LmNhblRyeSA9IGZhbHNlO1xyXG4gICAgICAgIHRoYXQucmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICAgICAvLyBhdXRoZW50aWNhdGlvbkNvZGU6IHRoYXQucGhvbmVDb2RlLFxyXG4gICAgICAgICAgY29udHJhY3RObzogdGhhdC5jb250cmFjdG51bSxcclxuICAgICAgICAgIHNldHRsZURhdGU6IG5ldyBEYXRlKHRoYXQuY3VycmVudFRpbWUpLmdldFRpbWUoKS8xMDAwLFxyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC4kbmF2aWdhdGUoJ2Vhcmx5Q29udHJhY3QnLHRoYXQucmVxdWVzdERhdGEpO1xyXG4gICAgICAgIC8vIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIC8vICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL3JlcGF5bWVudC90cmlhbCcsXHJcbiAgICAgICAgLy8gIC8vIHVybDonaHR0cDovL2xvY2FsaG9zdDo4MDg4L2Vhcmx5Q29udHJhY3QuanNvbicsXHJcbiAgICAgICAgLy8gIGRhdGE6IHRoYXQucmVxdWVzdERhdGEsXHJcbiAgICAgICAgLy8gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAvLyAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgLy8gICB9LFxyXG4gICAgICAgIC8vICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgIC8vICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgLy8gICAgICAgdGhhdC5jYW5UcnkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgIHRoYXQuJG5hdmlnYXRlKCdlYXJseUNvbnRyYWN0Jyx0aGF0LnJlcXVlc3REYXRhKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvL+iOt+WPluWQiOWQjOS/oeaBr1xyXG4gICAgZ2V0Q29udHJhY3RzKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL2NvbnRyYWN0L2dldGxpc3QnLFxyXG4gICAgICAgIC8vdXJsOidodHRwOi8vbG9jYWxob3N0OjgwODgvZWFybHlQZXJzb25fZ2V0bGlzdC5qc29uJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAvLyB0aGF0LmNvbnRyYWN0X3Nob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGF0LmNvbnRyYWN0cyA9IFtdO1xyXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICB2YXIgaXRlbVRpbWU9aXRlbS5jb250cmFjdFN0YXJ0RHRlLnNwbGl0KFwiIFwiKVswXS5zcGxpdChcIi1cIilbMV0rJy0nK2l0ZW0uY29udHJhY3RTdGFydER0ZS5zcGxpdChcIiBcIilbMF0uc3BsaXQoXCItXCIpWzJdO1xyXG4gICAgICAgICAgICAgIHRoYXQuY29udHJhY3RzLnB1c2goaXRlbS5leHRlcm5hbENvbnRyYWN0TmJyICsgJzonICsgaXRlbS5jb21tZW50cyk7XHJcbiAgICAgICAgICAgICAgdGhhdC5jb250cmFjdFRpbWUucHVzaCh7XCJuYW1lXCI6aXRlbS5leHRlcm5hbENvbnRyYWN0TmJyLFwidGltZVwiOml0ZW1UaW1lfSk7ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLHJlcy5kYXRhLmNvZGUscmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDojrflj5blm77lvaLpqozor4HnoIFcclxuICAgIGdldFBpY0NvZGUgKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgIHRoYXQucGljQ29kZV9zaG93ID0gdHJ1ZTtcclxuICAgICAgdGhhdC5waWNDb2RlX3VybCA9IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgICsgJy9nZXRWZXJpZnknO1xyXG4gICAgfVxyXG4gICAgLy8g6I635Y+W5pyJ5pWI5pe26Ze05YiX6KGoXHJcbiAgICBnZXRUaW1lTGlzdCgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICBpZiAodGhpcy5jb250cmFjdG51bSA9PT0gJ+eCueWHu+mAieaLqeWQiOWQjOWPtycpIHtcclxuICAgICAgICB0aGlzLiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycsJ0EwMDAwMicsJ+ivt+WFiOmAieaLqeWQiOWQjOWPtycpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9yZXBheW1lbnQvZ2V0VXNhYmxlUGF5RGF0ZScsXHJcbiAgICAgICAgLy91cmw6J2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9nZXRVc2FibGVQYXlEYXRlLmpzb24nLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgY29udHJhY3RObzogdGhhdC5jb250cmFjdG51bSxcclxuICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWQsXHJcbiAgICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHRoYXQudGltZUxpc3QgPSByZXMuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycscmVzLmRhdGEuY29kZSxyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIC8vIOWumuaXtuWZqFxyXG4gICAgdGltZXIodGltZSwgbmFtZSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHZhciB0aW1lSW5mbyA9IHRpbWU7XHJcbiAgICAgIHZhciB0aW1lckZ1bmMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGltZUluZm8gPj0gMCkge1xyXG4gICAgICAgICAgdGhhdFtuYW1lXSA9IHRpbWVJbmZvLS07XHJcbiAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobmFtZSA9PSAnY2FuVHJ5VGltZScpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoYXQuJG5hdmlnYXRlKCdlYXJseUNvbnRyYWN0Jyx0aGF0LnJlcXVlc3REYXRhKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckZ1bmMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgMTAwMClcclxuICAgIH1cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgIGlmICghb3B0aW9ucy50eXBlKSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdG51bSA9IG9wdGlvbnMuY3RudW1iZXI7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG9wdGlvbnMuY3VycmVudFRpbWUuc3BsaXQoJyAnKVswXTtcclxuICAgICAgICB0aGlzLmdldFRpbWVMaXN0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250cmFjdG51bSA9ICfngrnlh7vpgInmi6nlkIjlkIzlj7cnO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSAn54K55Ye76YCJ5oup5pe26Ze0JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCIxMTExMVwiK3RoaXMucGFyZW50X2RhdGEpO1xyXG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9uYW1lO1xyXG4gICAgICB0aGlzLnBob25lID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5fcGhvbmU7XHJcbiAgICAgIHRoaXMuSWRDYXJkID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEubG9naW5faWRDYXJkO1xyXG4gICAgICB0aGlzLnBob25lQ29kZVRpbWUgPSAtMTtcclxuICAgICAgdGhpcy5jYW5UcnlUaW1lID0gLTE7XHJcbiAgICAgIHRoaXMuZ2V0Q29udHJhY3RzKClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==