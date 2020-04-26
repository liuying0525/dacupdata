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

var cardPerson = function (_wepy$page) {
  _inherits(cardPerson, _wepy$page);

  function cardPerson() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cardPerson);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cardPerson.__proto__ || Object.getPrototypeOf(cardPerson)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      img_url: '',
      parent_data: '',
      newccardurl: '', //新卡图片地址
      newccardurlNum: '',
      cardHead: '', // 身份证正面图片地址
      cardHeadNum: '',
      cardTail: '',
      cardTailNum: '',
      name: '',
      phone: '',
      IdCard: '',
      cardType: '', //1建行 2工行
      typeList: ['建设银行', '工商银行'],
      IdCardR: false,
      phoneR: false, // 手机号格式是否正确
      cardNum: '', // 银行卡号
      cardR: false, // 银行卡卡号格式是否正确
      contractnum: '点击选择合同号', // 合同号
      contracts: [], // 合同列表
      contract_show: false, // 是否显示合同列表
      canSubmit: false // 是否可以提交
    }, _this.methods = {
      // 选择时间
      typeChange: function typeChange(val) {
        this.cardType = this.typeList[val.detail.value];
        console.log(this.cardType);
      },
      // 选择图片
      chooseImg: function chooseImg(imgType) {
        var that = this;
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            that[imgType] = tempFilePaths[0];
            that.$apply();
            wx.uploadFile({
              url: that.parent_data.json_dhLink + '/upload/wx',
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'loginToken': that.parent_data.login_token,
                'userId': that.parent_data.login_userId
              },
              success: function success(res) {
                that[imgType + 'Num'] = JSON.parse(res.data).data;
                that.$apply();
              }
            });
          }
        });
      },
      // 更改input的值
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
        console.log(e.currentTarget.dataset.name, e.detail.value);
      },
      // 选择一个合同
      selectContract: function selectContract(item) {
        // this.contract_show = false
        this.contractnum = this.contracts[item.detail.value].split(':')[0];
        console.log(this.contractnum);
      },
      // 还款卡变更提交
      submit: function submit() {
        var that = this;
        console.log('提交了');
        if (!that.canSubmit) {
          that.$invoke('toastInfo', 'modelFunc', '000', '请把个人信息填写完整');
          return false;
        }
        // if (!that.cardR) {
        //   that.$invoke('toastInfo', 'modelFunc', '000', '请填写正确银行卡号');
        //   return false;
        // }
        var typeName = '';
        if (that.cardType === '建设银行') {
          typeName = 'CCB';
        } else if (that.cardType === '工商银行') {
          typeName = 'ICBC';
        }
        var requestData = {
          bankCardFile: that.newccardurlNum,
          idCardHeadFile: that.cardHeadNum,
          idCardTailFile: that.cardTailNum,
          bankCardNew: that.cardNum,
          name: that.name,
          telephone: that.phone,
          contractNo: that.contractnum,
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token,
          bankName: typeName
        };
        that.$navigate('cardBook', requestData);
      }
    }, _this.computed = {
      // 监控是否填写信息是否完整
      canSubmitFunc: function canSubmitFunc() {
        if (this.newccardurl != '' && this.cardHead != '' && this.cardTail != '' && this.name != '' && this.phone != '' && this.cardNum != '' && this.contractnum != '点击选择合同号' && this.cardType != '') {
          this.canSubmit = true;
        } else {
          this.canSubmit = false;
        }
        // if(this.$invoke('toastInfo', 'bankCardReg', this.cardNum)) {
        //   this.cardR = true;
        // } else {
        //   this.cardR = false;
        // }
      }
      //获取合同信息
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cardPerson, [{
    key: 'getContracts',
    value: function getContracts() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/contract/getlist',
        //url:"http://localhost:8088/cardPerson_getlist.json",
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
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var that = this;
      that.url_link = that.$parent.globalData.url_link;
      that.parent_data = that.$parent.globalData;
      that.name = that.parent_data.login_name;
      that.phone = that.parent_data.login_phone;
      this.getContracts();
    }
  }]);

  return cardPerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cardPerson , 'pages/cardPerson'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRQZXJzb24uanMiXSwibmFtZXMiOlsiY2FyZFBlcnNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwiaW1nX3VybCIsInBhcmVudF9kYXRhIiwibmV3Y2NhcmR1cmwiLCJuZXdjY2FyZHVybE51bSIsImNhcmRIZWFkIiwiY2FyZEhlYWROdW0iLCJjYXJkVGFpbCIsImNhcmRUYWlsTnVtIiwibmFtZSIsInBob25lIiwiSWRDYXJkIiwiY2FyZFR5cGUiLCJ0eXBlTGlzdCIsIklkQ2FyZFIiLCJwaG9uZVIiLCJjYXJkTnVtIiwiY2FyZFIiLCJjb250cmFjdG51bSIsImNvbnRyYWN0cyIsImNvbnRyYWN0X3Nob3ciLCJjYW5TdWJtaXQiLCJtZXRob2RzIiwidHlwZUNoYW5nZSIsInZhbCIsImRldGFpbCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImNob29zZUltZyIsImltZ1R5cGUiLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiJGFwcGx5IiwidXBsb2FkRmlsZSIsInVybCIsImpzb25fZGhMaW5rIiwiZmlsZVBhdGgiLCJmb3JtRGF0YSIsImxvZ2luX3Rva2VuIiwibG9naW5fdXNlcklkIiwiSlNPTiIsInBhcnNlIiwiY2hhbmdlVmFsdWUiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RDb250cmFjdCIsIml0ZW0iLCJzcGxpdCIsInN1Ym1pdCIsIiRpbnZva2UiLCJ0eXBlTmFtZSIsInJlcXVlc3REYXRhIiwiYmFua0NhcmRGaWxlIiwiaWRDYXJkSGVhZEZpbGUiLCJpZENhcmRUYWlsRmlsZSIsImJhbmtDYXJkTmV3IiwidGVsZXBob25lIiwiY29udHJhY3RObyIsInVzZXJJZCIsImxvZ2luVG9rZW4iLCJiYW5rTmFtZSIsIiRuYXZpZ2F0ZSIsImNvbXB1dGVkIiwiY2FuU3VibWl0RnVuYyIsInJlcXVlc3QiLCJjb2RlIiwiZm9yRWFjaCIsInB1c2giLCJleHRlcm5hbENvbnRyYWN0TmJyIiwiY29tbWVudHMiLCJtc2ciLCJmYWlsIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJsb2dpbl9uYW1lIiwibG9naW5fcGhvbmUiLCJnZXRDb250cmFjdHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxlQUFTLEVBRko7QUFHTEMsbUJBQWEsRUFIUjtBQUlMQyxtQkFBYSxFQUpSLEVBSVc7QUFDaEJDLHNCQUFnQixFQUxYO0FBTUxDLGdCQUFVLEVBTkwsRUFNUztBQUNkQyxtQkFBYSxFQVBSO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsbUJBQVksRUFUUDtBQVVMQyxZQUFNLEVBVkQ7QUFXTEMsYUFBTyxFQVhGO0FBWUxDLGNBQU8sRUFaRjtBQWFMQyxnQkFBVSxFQWJMLEVBYVE7QUFDYkMsZ0JBQVUsQ0FBQyxNQUFELEVBQVEsTUFBUixDQWRMO0FBZUxDLGVBQVMsS0FmSjtBQWdCTEMsY0FBUSxLQWhCSCxFQWdCVTtBQUNmQyxlQUFTLEVBakJKLEVBaUJRO0FBQ2JDLGFBQU8sS0FsQkYsRUFrQlE7QUFDYkMsbUJBQWEsU0FuQlIsRUFtQm1CO0FBQ3hCQyxpQkFBVyxFQXBCTixFQW9CVTtBQUNmQyxxQkFBZSxLQXJCVixFQXFCaUI7QUFDdEJDLGlCQUFXLEtBdEJOLENBc0JZO0FBdEJaLEssUUF3QlBDLE8sR0FBVTtBQUNSO0FBQ0FDLGtCQUFZLG9CQUFVQyxHQUFWLEVBQWU7QUFDekIsYUFBS1osUUFBTCxHQUFnQixLQUFLQyxRQUFMLENBQWNXLElBQUlDLE1BQUosQ0FBV0MsS0FBekIsQ0FB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O0FBQ0QsV0FORCxNQU1PO0FBQ0xOLGlCQUFLd0IsT0FBTCxDQUFhLFdBQWIsRUFBeUIsV0FBekIsRUFBcUNwQixJQUFJcEMsSUFBSixDQUFTd0UsSUFBOUMsRUFBbURwQyxJQUFJcEMsSUFBSixDQUFTNkUsR0FBNUQ7QUFDRDtBQUNGLFNBakJRO0FBa0JUQyxjQUFNLGNBQVUxQyxHQUFWLEVBQWU7QUFDbkJSLGtCQUFRQyxHQUFSLENBQVlPLEdBQVo7QUFDRDtBQXBCUSxPQUFYO0FBc0JEOzs7NkJBQ1EsQ0FDUjs7OzZCQUNRO0FBQ1AsVUFBSUosT0FBTyxJQUFYO0FBQ0FBLFdBQUsvQixRQUFMLEdBQWdCK0IsS0FBSytDLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qi9FLFFBQXhDO0FBQ0ErQixXQUFLN0IsV0FBTCxHQUFtQjZCLEtBQUsrQyxPQUFMLENBQWFDLFVBQWhDO0FBQ0FoRCxXQUFLdEIsSUFBTCxHQUFZc0IsS0FBSzdCLFdBQUwsQ0FBaUI4RSxVQUE3QjtBQUNBakQsV0FBS3JCLEtBQUwsR0FBYXFCLEtBQUs3QixXQUFMLENBQWlCK0UsV0FBOUI7QUFDQSxXQUFLQyxZQUFMO0FBQ0Q7Ozs7RUEzSnFDQyxlQUFLQyxJOztrQkFBeEIxRixVIiwiZmlsZSI6ImNhcmRQZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmRQZXJzb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6L+Y5qy+5Y2h5Y+Y5pu0J1xyXG4gICAgfTtcclxuICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgIHRvYXN0SW5mbzogdG9hc3RJbmZvXHJcbiAgICB9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXJsX2xpbms6ICcnLFxyXG4gICAgICBpbWdfdXJsOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgICBuZXdjY2FyZHVybDogJycsLy/mlrDljaHlm77niYflnLDlnYBcclxuICAgICAgbmV3Y2NhcmR1cmxOdW06ICcnLFxyXG4gICAgICBjYXJkSGVhZDogJycsIC8vIOi6q+S7veivgeato+mdouWbvueJh+WcsOWdgFxyXG4gICAgICBjYXJkSGVhZE51bTogJycsXHJcbiAgICAgIGNhcmRUYWlsOiAnJyxcclxuICAgICAgY2FyZFRhaWxOdW06JycsXHJcbiAgICAgIG5hbWU6ICcnLFxyXG4gICAgICBwaG9uZTogJycsXHJcbiAgICAgIElkQ2FyZDonJyxcclxuICAgICAgY2FyZFR5cGU6ICcnLC8vMeW7uuihjCAy5bel6KGMXHJcbiAgICAgIHR5cGVMaXN0OiBbJ+W7uuiuvumTtuihjCcsJ+W3peWVhumTtuihjCddLFxyXG4gICAgICBJZENhcmRSOiBmYWxzZSxcclxuICAgICAgcGhvbmVSOiBmYWxzZSwgLy8g5omL5py65Y+35qC85byP5piv5ZCm5q2j56GuXHJcbiAgICAgIGNhcmROdW06ICcnLCAvLyDpk7booYzljaHlj7dcclxuICAgICAgY2FyZFI6IGZhbHNlLC8vIOmTtuihjOWNoeWNoeWPt+agvOW8j+aYr+WQpuato+ehrlxyXG4gICAgICBjb250cmFjdG51bTogJ+eCueWHu+mAieaLqeWQiOWQjOWPtycsIC8vIOWQiOWQjOWPt1xyXG4gICAgICBjb250cmFjdHM6IFtdLCAvLyDlkIjlkIzliJfooahcclxuICAgICAgY29udHJhY3Rfc2hvdzogZmFsc2UsIC8vIOaYr+WQpuaYvuekuuWQiOWQjOWIl+ihqFxyXG4gICAgICBjYW5TdWJtaXQ6IGZhbHNlIC8vIOaYr+WQpuWPr+S7peaPkOS6pFxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgLy8g6YCJ5oup5pe26Ze0XHJcbiAgICAgIHR5cGVDaGFuZ2U6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICB0aGlzLmNhcmRUeXBlID0gdGhpcy50eXBlTGlzdFt2YWwuZGV0YWlsLnZhbHVlXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNhcmRUeXBlKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YCJ5oup5Zu+54mHXHJcbiAgICAgIGNob29zZUltZzogZnVuY3Rpb24oaW1nVHlwZSkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgICB0aGF0W2ltZ1R5cGVdID0gdGVtcEZpbGVQYXRoc1swXTtcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy91cGxvYWQvd3gnLFxyXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ2xvZ2luVG9rZW4nOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgJ3VzZXJJZCc6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoYXRbaW1nVHlwZSsnTnVtJ10gPUpTT04ucGFyc2UocmVzLmRhdGEpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5pu05pS5aW5wdXTnmoTlgLxcclxuICAgICAgY2hhbmdlVmFsdWU6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdGhpc1tlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5uYW1lXSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lm5hbWUsIGUuZGV0YWlsLnZhbHVlKVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpgInmi6nkuIDkuKrlkIjlkIxcclxuICAgICAgc2VsZWN0Q29udHJhY3Q6IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jb250cmFjdF9zaG93ID0gZmFsc2VcclxuICAgICAgICB0aGlzLmNvbnRyYWN0bnVtID0gdGhpcy5jb250cmFjdHNbaXRlbS5kZXRhaWwudmFsdWVdLnNwbGl0KCc6JylbMF1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRyYWN0bnVtKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6L+Y5qy+5Y2h5Y+Y5pu05o+Q5LqkXHJcbiAgICAgIHN1Ym1pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBjb25zb2xlLmxvZygn5o+Q5Lqk5LqGJylcclxuICAgICAgICBpZiAoIXRoYXQuY2FuU3VibWl0KSB7XHJcbiAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCAnMDAwJywgJ+ivt+aKiuS4quS6uuS/oeaBr+Whq+WGmeWujOaVtCcpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoIXRoYXQuY2FyZFIpIHtcclxuICAgICAgICAvLyAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsICcwMDAnLCAn6K+35aGr5YaZ5q2j56Gu6ZO26KGM5Y2h5Y+3Jyk7XHJcbiAgICAgICAgLy8gICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGxldCB0eXBlTmFtZSA9ICcnO1xyXG4gICAgICAgIGlmKHRoYXQuY2FyZFR5cGUgPT09ICflu7rorr7pk7booYwnKSB7XHJcbiAgICAgICAgICB0eXBlTmFtZSA9ICdDQ0InXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGF0LmNhcmRUeXBlID09PSAn5bel5ZWG6ZO26KGMJykge1xyXG4gICAgICAgICAgdHlwZU5hbWUgPSAnSUNCQydcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgYmFua0NhcmRGaWxlOiB0aGF0Lm5ld2NjYXJkdXJsTnVtLFxyXG4gICAgICAgICAgaWRDYXJkSGVhZEZpbGU6IHRoYXQuY2FyZEhlYWROdW0sXHJcbiAgICAgICAgICBpZENhcmRUYWlsRmlsZTogdGhhdC5jYXJkVGFpbE51bSxcclxuICAgICAgICAgIGJhbmtDYXJkTmV3OiB0aGF0LmNhcmROdW0sXHJcbiAgICAgICAgICBuYW1lOiB0aGF0Lm5hbWUsXHJcbiAgICAgICAgICB0ZWxlcGhvbmU6IHRoYXQucGhvbmUsXHJcbiAgICAgICAgICBjb250cmFjdE5vOiB0aGF0LmNvbnRyYWN0bnVtLFxyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgICBiYW5rTmFtZTogdHlwZU5hbWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC4kbmF2aWdhdGUoJ2NhcmRCb29rJywgcmVxdWVzdERhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIC8vIOebkeaOp+aYr+WQpuWhq+WGmeS/oeaBr+aYr+WQpuWujOaVtFxyXG4gICAgICBjYW5TdWJtaXRGdW5jOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5uZXdjY2FyZHVybCAhPSAnJyAmJiB0aGlzLmNhcmRIZWFkICE9ICcnICYmIHRoaXMuY2FyZFRhaWwgIT0gJycgJiYgdGhpcy5uYW1lICE9ICcnICYmIHRoaXMucGhvbmUgIT0gJycgJiYgdGhpcy5jYXJkTnVtICE9ICcnICYmIHRoaXMuY29udHJhY3RudW0gIT0gJ+eCueWHu+mAieaLqeWQiOWQjOWPtycgJiYgdGhpcy5jYXJkVHlwZSAhPSAnJykge1xyXG4gICAgICAgICAgdGhpcy5jYW5TdWJtaXQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZih0aGlzLiRpbnZva2UoJ3RvYXN0SW5mbycsICdiYW5rQ2FyZFJlZycsIHRoaXMuY2FyZE51bSkpIHtcclxuICAgICAgICAvLyAgIHRoaXMuY2FyZFIgPSB0cnVlO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICB0aGlzLmNhcmRSID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+iOt+WPluWQiOWQjOS/oeaBr1xyXG4gICAgZ2V0Q29udHJhY3RzKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvY29udHJhY3QvZ2V0bGlzdCcsXHJcbiAgICAgICAgLy91cmw6XCJodHRwOi8vbG9jYWxob3N0OjgwODgvY2FyZFBlcnNvbl9nZXRsaXN0Lmpzb25cIixcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICB0aGF0LmNvbnRyYWN0cyA9IFtdO1xyXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICB0aGF0LmNvbnRyYWN0cy5wdXNoKGl0ZW0uZXh0ZXJuYWxDb250cmFjdE5iciArICc6JyArIGl0ZW0uY29tbWVudHMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsJ21vZGVsRnVuYycscmVzLmRhdGEuY29kZSxyZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LnVybF9saW5rID0gdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoYXQucGFyZW50X2RhdGEgPSB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdGhhdC5uYW1lID0gdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl9uYW1lO1xyXG4gICAgICB0aGF0LnBob25lID0gdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl9waG9uZTtcclxuICAgICAgdGhpcy5nZXRDb250cmFjdHMoKVxyXG4gICAgfVxyXG4gIH1cclxuIl19