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
      navigationBarTitleText: '理赔证明'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      url_link: '',
      parent_data: '',
      fileType: '1', // 1 ： 邮箱 2： 地址
      name: '',
      phone: '',
      IdCard: '', // 身份证号
      IdCardR: false, //校验身份证号
      phoneR: false, // 验证手机格式
      email: '',
      address: '',
      policyurls: [], //保单图片地址
      policyurlsNums: [], // 保单图片地址代码
      cardnumurl: '', // 身份证图片地址
      contractnum: '点击选择合同号', // 合同号
      moneyNum: '', // 定损金额
      contracts: [], //合同列表
      contract_show: false, // 是否显示合同列表
      canSubmit: false, // 信息填写的是否完整
      canClickAgin: true
    }, _this.computed = {
      canSubmitFunc: function canSubmitFunc() {
        if (!this.canClickAgin) {
          this.canSubmit = false;
        } else {
          this.canSubmit = true;
        }
        if (this.fileType == '1') {
          if (this.name != '' && this.IdCard != '' && this.contractnum != '点击选择合同号' && this.phone != '' && this.email != '' && this.policyurlsNums.length > 0 && this.moneyNum != '') {
            this.canSubmit = true;
          } else {
            this.canSubmit = false;
          }
        } else {
          if (this.name != '' && this.IdCard != '' && this.contractnum != '点击选择合同号' && this.phone != '' && this.address != '' && this.policyurlsNums.length > 0 && this.moneyNum != '') {
            this.canSubmit = true;
          } else {
            this.canSubmit = false;
          }
        }
      }
    }, _this.methods = {
      //切换文件类型
      radioChange: function radioChange(e) {
        this.fileType = e.detail.value;
        console.log(this.fileType);
      },
      deleteImg: function deleteImg(index) {
        this.policyurls.splice(index, 1);
        this.policyurlsNums.splice(index, 1);
      },
      //选择图片
      chooseImg: function chooseImg() {
        var that = this;
        wx.chooseImage({
          success: function success(res) {
            var tempFilePaths = res.tempFilePaths;
            wx.showLoading({
              mask: true,
              title: '上传中...'
            });
            wx.uploadFile({
              url: that.parent_data.json_dhLink + '/upload/wx',
              filePath: tempFilePaths[0],
              name: 'file',
              formData: {
                'loginToken': that.parent_data.login_token,
                'userId': that.parent_data.login_userId
              },
              success: function success(res) {
                wx.hideLoading();
                if (JSON.parse(res.data).code == '10001') {
                  that.policyurls.push(tempFilePaths[0]);
                  that.policyurlsNums.push(JSON.parse(res.data).data);
                  console.log(that.policyurlsNums);
                  that.$apply();
                } else {
                  that.$invoke('toastInfo', 'modelFunc', JSON.parse(res.data).code, JSON.parse(res.data).msg);
                }
              }
            });
          }
        });
      },
      // 预览图片
      previewImg: function previewImg() {
        var that = this;
        wx.previewImage({
          current: that.policyurls[0], // 当前显示图片的http链接
          urls: that.policyurls // 需要预览的图片http链接列表
        });
      },
      // 更改input值
      changeValue: function changeValue(e) {
        this[e.currentTarget.dataset.name] = e.detail.value;
      },
      // 选择一个合同
      selectContract: function selectContract(item) {
        this.contractnum = this.contracts[item.detail.value].split(':')[0];
        console.log(this.contractnum);
      },
      //提交表单
      submit: function submit() {
        var that = this;
        var requestData = {};
        if (!that.canClickAgin) {
          return false;
        }
        requestData = {
          fileList: that.policyurlsNums,
          contractNo: that.contractnum,
          fileType: that.fileType,
          address: that.fileType == '1' ? that.email : that.address,
          lossAmount: that.moneyNum,
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
        };
        if (!that.canSubmit) {
          that.$invoke('toastInfo', 'modelFunc', 'A00004', '个人信息填写不完整');
          return false;
        }
        that.canClickAgin = false;
        wx.request({
          url: that.parent_data.json_dhLink + '/insuranceClaim/apply',
          data: requestData,
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'POST',
          success: function success(res) {
            that.canClickAgin = true;
            if (res.data.code == '10001') {
              that.$redirect('indemnitySubmit', { id: res.data.data.recordId });
            } else {
              that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
            }
          },
          fail: function fail(res) {
            console.log(res);
          }
        });
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
        fail: function fail() {
          console.log('获取合同列表失败了');
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
      this.name = this.$parent.globalData.login_name;
      this.phone = this.$parent.globalData.login_phone;
      this.IdCard = this.$parent.globalData.login_idCard;
      this.getContracts();
    }
  }]);

  return earlyPerson;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlyPerson , 'pages/indemnityPerson'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVtbml0eVBlcnNvbi5qcyJdLCJuYW1lcyI6WyJlYXJseVBlcnNvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJmaWxlVHlwZSIsIm5hbWUiLCJwaG9uZSIsIklkQ2FyZCIsIklkQ2FyZFIiLCJwaG9uZVIiLCJlbWFpbCIsImFkZHJlc3MiLCJwb2xpY3l1cmxzIiwicG9saWN5dXJsc051bXMiLCJjYXJkbnVtdXJsIiwiY29udHJhY3RudW0iLCJtb25leU51bSIsImNvbnRyYWN0cyIsImNvbnRyYWN0X3Nob3ciLCJjYW5TdWJtaXQiLCJjYW5DbGlja0FnaW4iLCJjb21wdXRlZCIsImNhblN1Ym1pdEZ1bmMiLCJsZW5ndGgiLCJtZXRob2RzIiwicmFkaW9DaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlSW1nIiwiaW5kZXgiLCJzcGxpY2UiLCJjaG9vc2VJbWciLCJ0aGF0Iiwid3giLCJjaG9vc2VJbWFnZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwic2hvd0xvYWRpbmciLCJtYXNrIiwidGl0bGUiLCJ1cGxvYWRGaWxlIiwidXJsIiwianNvbl9kaExpbmsiLCJmaWxlUGF0aCIsImZvcm1EYXRhIiwibG9naW5fdG9rZW4iLCJsb2dpbl91c2VySWQiLCJoaWRlTG9hZGluZyIsIkpTT04iLCJwYXJzZSIsImNvZGUiLCJwdXNoIiwiJGFwcGx5IiwiJGludm9rZSIsIm1zZyIsInByZXZpZXdJbWciLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwidXJscyIsImNoYW5nZVZhbHVlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RDb250cmFjdCIsIml0ZW0iLCJzcGxpdCIsInN1Ym1pdCIsInJlcXVlc3REYXRhIiwiZmlsZUxpc3QiLCJjb250cmFjdE5vIiwibG9zc0Ftb3VudCIsInVzZXJJZCIsImxvZ2luVG9rZW4iLCJyZXF1ZXN0IiwiaGVhZGVyIiwibWV0aG9kIiwiJHJlZGlyZWN0IiwiaWQiLCJyZWNvcmRJZCIsImZhaWwiLCJmb3JFYWNoIiwiZXh0ZXJuYWxDb250cmFjdE5iciIsImNvbW1lbnRzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJsb2dpbl9uYW1lIiwibG9naW5fcGhvbmUiLCJsb2dpbl9pZENhcmQiLCJnZXRDb250cmFjdHMiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZ0JBQVUsRUFETDtBQUVMQyxtQkFBYSxFQUZSO0FBR0xDLGdCQUFVLEdBSEwsRUFHUztBQUNkQyxZQUFNLEVBSkQ7QUFLTEMsYUFBTSxFQUxEO0FBTUxDLGNBQVEsRUFOSCxFQU1PO0FBQ1pDLGVBQVEsS0FQSCxFQU9VO0FBQ2ZDLGNBQVEsS0FSSCxFQVFVO0FBQ2ZDLGFBQU8sRUFURjtBQVVMQyxlQUFRLEVBVkg7QUFXTEMsa0JBQVksRUFYUCxFQVdVO0FBQ2ZDLHNCQUFnQixFQVpYLEVBWWU7QUFDcEJDLGtCQUFZLEVBYlAsRUFhVztBQUNoQkMsbUJBQWEsU0FkUixFQWNtQjtBQUN4QkMsZ0JBQVUsRUFmTCxFQWVTO0FBQ2RDLGlCQUFXLEVBaEJOLEVBZ0JVO0FBQ2ZDLHFCQUFlLEtBakJWLEVBaUJpQjtBQUN0QkMsaUJBQVcsS0FsQk4sRUFrQmE7QUFDbEJDLG9CQUFhO0FBbkJSLEssUUFxQlBDLFEsR0FBVztBQUNUQyxxQkFBZSx5QkFBVztBQUN4QixZQUFHLENBQUMsS0FBS0YsWUFBVCxFQUFzQjtBQUNwQixlQUFLRCxTQUFMLEdBQWlCLEtBQWpCO0FBQ0QsU0FGRCxNQUVLO0FBQ0gsZUFBS0EsU0FBTCxH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QUtsRixLQUFMLEdBQWEsS0FBS2dGLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkUsV0FBckM7QUFDQSxXQUFLbEYsTUFBTCxHQUFjLEtBQUsrRSxPQUFMLENBQWFDLFVBQWIsQ0FBd0JHLFlBQXRDO0FBQ0EsV0FBS0MsWUFBTDtBQUNEOzs7O0VBM0xzQ0MsZUFBS0MsSTs7a0JBQXpCakcsVyIsImZpbGUiOiJpbmRlbW5pdHlQZXJzb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJztcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBlYXJseVBlcnNvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnkIbotZTor4HmmI4nXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJyxcclxuICAgICAgZmlsZVR5cGU6ICcxJywvLyAxIO+8miDpgq7nrrEgMu+8miDlnLDlnYBcclxuICAgICAgbmFtZTogJycsXHJcbiAgICAgIHBob25lOicnLFxyXG4gICAgICBJZENhcmQ6ICcnLCAvLyDouqvku73or4Hlj7dcclxuICAgICAgSWRDYXJkUjpmYWxzZSwgLy/moKHpqozouqvku73or4Hlj7dcclxuICAgICAgcGhvbmVSOiBmYWxzZSwgLy8g6aqM6K+B5omL5py65qC85byPXHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgYWRkcmVzczonJyxcclxuICAgICAgcG9saWN5dXJsczogW10sLy/kv53ljZXlm77niYflnLDlnYBcclxuICAgICAgcG9saWN5dXJsc051bXM6IFtdLCAvLyDkv53ljZXlm77niYflnLDlnYDku6PnoIFcclxuICAgICAgY2FyZG51bXVybDogJycsIC8vIOi6q+S7veivgeWbvueJh+WcsOWdgFxyXG4gICAgICBjb250cmFjdG51bTogJ+eCueWHu+mAieaLqeWQiOWQjOWPtycsIC8vIOWQiOWQjOWPt1xyXG4gICAgICBtb25leU51bTogJycsIC8vIOWumuaNn+mHkeminVxyXG4gICAgICBjb250cmFjdHM6IFtdLCAvL+WQiOWQjOWIl+ihqFxyXG4gICAgICBjb250cmFjdF9zaG93OiBmYWxzZSwgLy8g5piv5ZCm5pi+56S65ZCI5ZCM5YiX6KGoXHJcbiAgICAgIGNhblN1Ym1pdDogZmFsc2UsIC8vIOS/oeaBr+Whq+WGmeeahOaYr+WQpuWujOaVtFxyXG4gICAgICBjYW5DbGlja0FnaW46dHJ1ZVxyXG4gICAgfTtcclxuICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICBjYW5TdWJtaXRGdW5jOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZighdGhpcy5jYW5DbGlja0FnaW4pe1xyXG4gICAgICAgICAgdGhpcy5jYW5TdWJtaXQgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMuY2FuU3VibWl0PXRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGVUeXBlID09ICcxJykge1xyXG4gICAgICAgICAgaWYgKHRoaXMubmFtZSAhPSAnJyAmJiB0aGlzLklkQ2FyZCE9JycgJiYgdGhpcy5jb250cmFjdG51bSAhPSfngrnlh7vpgInmi6nlkIjlkIzlj7cnICYmIHRoaXMucGhvbmUgIT0gJycgJiYgdGhpcy5lbWFpbCAhPSAnJyAmJiB0aGlzLnBvbGljeXVybHNOdW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5tb25leU51bSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5uYW1lICE9ICcnJiYgdGhpcy5JZENhcmQhPScnICYmIHRoaXMuY29udHJhY3RudW0gIT0n54K55Ye76YCJ5oup5ZCI5ZCM5Y+3JyAmJiB0aGlzLnBob25lICE9ICcnICYmIHRoaXMuYWRkcmVzcyAhPSAnJyAmJiB0aGlzLnBvbGljeXVybHNOdW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5tb25leU51bSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhblN1Ym1pdCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8v5YiH5o2i5paH5Lu257G75Z6LXHJcbiAgICAgIHJhZGlvQ2hhbmdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXMuZmlsZVR5cGUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVUeXBlKTtcclxuICAgICAgfSxcclxuICAgICAgZGVsZXRlSW1nOiBmdW5jdGlvbiAoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnBvbGljeXVybHMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICAgIHRoaXMucG9saWN5dXJsc051bXMuc3BsaWNlKGluZGV4LDEpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+mAieaLqeWbvueJh1xyXG4gICAgICBjaG9vc2VJbWc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB2YXIgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgICAgbWFzazp0cnVlLFxyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5LiK5Lyg5LitLi4uJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy91cGxvYWQvd3gnLFxyXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgIG5hbWU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgICAgJ2xvZ2luVG9rZW4nOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLFxyXG4gICAgICAgICAgICAgICAgJ3VzZXJJZCc6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoSlNPTi5wYXJzZShyZXMuZGF0YSkuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQucG9saWN5dXJscy5wdXNoKHRlbXBGaWxlUGF0aHNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LnBvbGljeXVybHNOdW1zLnB1c2goSlNPTi5wYXJzZShyZXMuZGF0YSkuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoYXQucG9saWN5dXJsc051bXMpO1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLEpTT04ucGFyc2UocmVzLmRhdGEpLmNvZGUsIEpTT04ucGFyc2UocmVzLmRhdGEpLm1zZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDpooTop4jlm77niYdcclxuICAgICAgcHJldmlld0ltZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgICAgY3VycmVudDogdGhhdC5wb2xpY3l1cmxzWzBdLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXHJcbiAgICAgICAgICB1cmxzOiB0aGF0LnBvbGljeXVybHMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOabtOaUuWlucHV05YC8XHJcbiAgICAgIGNoYW5nZVZhbHVlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHRoaXNbZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubmFtZV0gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YCJ5oup5LiA5Liq5ZCI5ZCMXHJcbiAgICAgIHNlbGVjdENvbnRyYWN0OiBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuY29udHJhY3RudW0gPSB0aGlzLmNvbnRyYWN0c1tpdGVtLmRldGFpbC52YWx1ZV0uc3BsaXQoJzonKVswXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJhY3RudW0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+aPkOS6pOihqOWNlVxyXG4gICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBsZXQgcmVxdWVzdERhdGEgPSB7fTtcclxuICAgICAgICBpZighdGhhdC5jYW5DbGlja0FnaW4pe1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3REYXRhID0ge1xyXG4gICAgICAgICAgZmlsZUxpc3Q6IHRoYXQucG9saWN5dXJsc051bXMsXHJcbiAgICAgICAgICBjb250cmFjdE5vOiB0aGF0LmNvbnRyYWN0bnVtLFxyXG4gICAgICAgICAgZmlsZVR5cGU6IHRoYXQuZmlsZVR5cGUsXHJcbiAgICAgICAgICBhZGRyZXNzOiB0aGF0LmZpbGVUeXBlID09ICcxJyA/IHRoYXQuZW1haWwgOiB0aGF0LmFkZHJlc3MsXHJcbiAgICAgICAgICBsb3NzQW1vdW50OiB0aGF0Lm1vbmV5TnVtLFxyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGF0LmNhblN1Ym1pdCkge1xyXG4gICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLCAnQTAwMDA0JywgJ+S4quS6uuS/oeaBr+Whq+WGmeS4jeWujOaVtCcpO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGF0LmNhbkNsaWNrQWdpbj1mYWxzZTtcclxuICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluaysgJy9pbnN1cmFuY2VDbGFpbS9hcHBseScsXHJcbiAgICAgICAgICBkYXRhOiByZXF1ZXN0RGF0YSxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3M6ZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICB0aGF0LmNhbkNsaWNrQWdpbj10cnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kcmVkaXJlY3QoJ2luZGVtbml0eVN1Ym1pdCcse2lkOiByZXMuZGF0YS5kYXRhLnJlY29yZElkfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDpmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICAvL+iOt+WPluWQiOWQjOS/oeaBr1xyXG4gICAgZ2V0Q29udHJhY3RzKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvY29udHJhY3QvZ2V0bGlzdCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgdGhhdC5jb250cmFjdHMgPSBbXTtcclxuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5jb250cmFjdHMucHVzaChpdGVtLmV4dGVybmFsQ29udHJhY3ROYnIgKyAnOicgKyBpdGVtLmNvbW1lbnRzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5blkIjlkIzliJfooajlpLHotKXkuoYnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB0aGF0LnVybF9saW5rID0gdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoYXQucGFyZW50X2RhdGEgPSB0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgIHRoaXMubmFtZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmxvZ2luX25hbWU7XHJcbiAgICAgIHRoaXMucGhvbmUgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9waG9uZTtcclxuICAgICAgdGhpcy5JZENhcmQgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5sb2dpbl9pZENhcmQ7XHJcbiAgICAgIHRoaXMuZ2V0Q29udHJhY3RzKClcclxuICAgIH1cclxuICB9XHJcbiJdfQ==