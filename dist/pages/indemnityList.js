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

var indemnityList = function (_wepy$page) {
  _inherits(indemnityList, _wepy$page);

  function indemnityList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, indemnityList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = indemnityList.__proto__ || Object.getPrototypeOf(indemnityList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '理赔证明',
      onReachBottomDistance: 50
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      iphoneX: false,
      url_link: '',
      parent_data: '',
      states: ['earlySLZ.png', 'earlyYSL.png', 'earlyYQX.png'],
      state: 0,
      list: [],
      currentNum: 1,
      existProcessing: false
    }, _this.computed = {
      // 缺省压面是否显示
      noData_show: function noData_show() {
        if (this.list.length == 0) {
          return true;
        } else {
          return false;
        }
      }
    }, _this.methods = {
      changeState: function changeState(state) {
        this.state = state;
        this.list = [];
        this.currentNum = 1;
        this.getList();
      },
      // 取消申请
      cancelSubmit: function cancelSubmit(id) {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该保险赔付申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/insuranceClaim/cancel',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'POST',
                data: { insuranceClaimId: id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
                success: function success(res) {
                  if (res.data.code == '10001') {
                    that.list = [];
                    that.currentNum = 1;
                    that.getList();
                  } else {
                    that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
                  }
                },
                fail: function fail() {
                  console.log('取消申请失败了');
                }
              });
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      //新建申请
      addNewPost: function addNewPost() {
        this.$navigate('indemnityPerson');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(indemnityList, [{
    key: 'getList',
    value: function getList() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/insuranceClaim/list',
        //url:'http://localhost:8088/indemnityList_list0.json',
        data: {
          pageNum: that.currentNum,
          pageSize: 10,
          status: that.state,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            wx.hideLoading();
            that.existProcessing = res.data.data.existProcessing;
            for (var i in res.data.data.list) {
              res.data.data.list[i].createTime = that.timeReg(res.data.data.list[i].createTime);
            }
            if (res.data.data.list.length > 0) {
              that.list = that.list.concat(res.data.data.list);
              that.$apply();
            } else {
              if (that.currentNum == 1) {
                that.list = res.data.data.list;
                that.$apply();
              } else {
                that.currentNum = that.currentNum <= 1 ? 1 : that.currentNum - 1;
                wx.showToast({
                  title: '加载全部',
                  icon: 'success',
                  duration: 2000
                });
              }
            }
          } else {
            wx.hideLoading();
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        },
        fail: function fail() {
          console.log('获取保险理赔列表失败了');
        }
      });
    }
  }, {
    key: 'timeReg',
    value: function timeReg(num) {
      var date = new Date(num * 1000);
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var D = date.getDate() < 10 ? '0' + date.getDate() + ' ' : date.getDate() + ' ';
      var h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':';
      var m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':';
      var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
      return Y + M + D + h + m + s;
    }
  }, {
    key: 'onPullDownRefresh',
    value: function onPullDownRefresh() {
      this.list = [];
      this.currentNum = 1;
      this.getList();
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      this.currentNum = this.currentNum + 1;
      this.getList();
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
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
        this.currentNum = 1;
        this.list = [];
        this.getList();
      } else {
        this.$redirect('secLogin', { backUrl: 'indemnityList' });
      }
    }
  }]);

  return indemnityList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(indemnityList , 'pages/indemnityList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGVtbml0eUxpc3QuanMiXSwibmFtZXMiOlsiaW5kZW1uaXR5TGlzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJjb21wb25lbnRzIiwidG9hc3RJbmZvIiwiZGF0YSIsImlwaG9uZVgiLCJ1cmxfbGluayIsInBhcmVudF9kYXRhIiwic3RhdGVzIiwic3RhdGUiLCJsaXN0IiwiY3VycmVudE51bSIsImV4aXN0UHJvY2Vzc2luZyIsImNvbXB1dGVkIiwibm9EYXRhX3Nob3ciLCJsZW5ndGgiLCJtZXRob2RzIiwiY2hhbmdlU3RhdGUiLCJnZXRMaXN0IiwiY2FuY2VsU3VibWl0IiwiaWQiLCJ0aGF0Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsImhlYWRlciIsIm1ldGhvZCIsImluc3VyYW5jZUNsYWltSWQiLCJsb2dpblRva2VuIiwibG9naW5fdG9rZW4iLCJ1c2VySWQiLCJsb2dpbl91c2VySWQiLCJjb2RlIiwiJGludm9rZSIsIm1zZyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwiYWRkTmV3UG9zdCIsIiRuYXZpZ2F0ZSIsInNob3dMb2FkaW5nIiwicGFnZU51bSIsInBhZ2VTaXplIiwic3RhdHVzIiwiaGlkZUxvYWRpbmciLCJpIiwiY3JlYXRlVGltZSIsInRpbWVSZWciLCJjb25jYXQiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJudW0iLCJkYXRlIiwiRGF0ZSIsIlkiLCJnZXRGdWxsWWVhciIsIk0iLCJnZXRNb250aCIsIkQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwibSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtb2RlbCIsInNlYXJjaCIsIiRyZWRpcmVjdCIsImJhY2tVcmwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsTUFEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsVSxHQUFhO0FBQ1hDLGlCQUFXQTtBQURBLEssUUFHYkMsSSxHQUFPO0FBQ0xDLGVBQVEsS0FESDtBQUVMQyxnQkFBVSxFQUZMO0FBR0xDLG1CQUFZLEVBSFA7QUFJTEMsY0FBUSxDQUFDLGNBQUQsRUFBZ0IsY0FBaEIsRUFBK0IsY0FBL0IsQ0FKSDtBQUtMQyxhQUFPLENBTEY7QUFNTEMsWUFBTSxFQU5EO0FBT0xDLGtCQUFZLENBUFA7QUFRTEMsdUJBQWlCO0FBUlosSyxRQVVQQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFBYSx1QkFBWTtBQUN2QixZQUFJLEtBQUtKLElBQUwsQ0FBVUssTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFSUSxLLFFBVVhDLE8sR0FBVTtBQUNSQyxtQkFBYSxxQkFBU1IsS0FBVCxFQUFnQjtBQUMzQixhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLTyxPQUFMO0FBQ0QsT0FOTztBQU9SO0FBQ0FDLG9CQUFjLHNCQUFVQyxFQUFWLEVBQWM7QUFDMUIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFdBQUdDLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxNQURJO0FBRVhDLG1CQUFTLGtCQUZFO0FBR1hDLHNCQUFXLEtBSEE7QUFJWEMsdUJBQVksSUFKRDtBQUtYQyxpQkFMVyxtQkFLRkMsR0FMRSxFQUtHO0FBQ1osZ0JB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QVksRUFBWjtBQUNBLGFBQUtRLE9BQUw7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLaUUsU0FBTCxDQUFlLFVBQWYsRUFBMEIsRUFBQ0MsU0FBUyxlQUFWLEVBQTFCO0FBQ0Q7QUFDRjs7OztFQWxLd0NDLGVBQUtDLEk7O2tCQUEzQnhGLGEiLCJmaWxlIjoiaW5kZW1uaXR5TGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gIGltcG9ydCB0b2FzdEluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90b2FzdEluZm8nXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZW1uaXR5TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnkIbotZTor4HmmI4nLFxyXG4gICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpcGhvbmVYOmZhbHNlLFxyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIHBhcmVudF9kYXRhOicnLFxyXG4gICAgICBzdGF0ZXM6IFsnZWFybHlTTFoucG5nJywnZWFybHlZU0wucG5nJywnZWFybHlZUVgucG5nJ10sXHJcbiAgICAgIHN0YXRlOiAwLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgY3VycmVudE51bTogMSxcclxuICAgICAgZXhpc3RQcm9jZXNzaW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIC8vIOe8uuecgeWOi+mdouaYr+WQpuaYvuekulxyXG4gICAgICBub0RhdGFfc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWPlua2iOeUs+ivt1xyXG4gICAgICBjYW5jZWxTdWJtaXQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+Wwj+S4u++8jOehruWumuWPlua2iOivpeS/nemZqei1lOS7mOeUs+ivt+WQl++8nycsXHJcbiAgICAgICAgICBjYW5jZWxUZXh0Oiflho3mg7Pmg7MnLFxyXG4gICAgICAgICAgY29uZmlybVRleHQ6J+ehruWumicsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL2luc3VyYW5jZUNsYWltL2NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge2luc3VyYW5jZUNsYWltSWQ6IGlkLCBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLCB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOeUs+ivt+Wksei0peS6hicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/mlrDlu7rnlLPor7dcclxuICAgICAgYWRkTmV3UG9zdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJG5hdmlnYXRlKCdpbmRlbW5pdHlQZXJzb24nKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldExpc3QoKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgfSlcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9pbnN1cmFuY2VDbGFpbS9saXN0JyxcclxuICAgICAgICAvL3VybDonaHR0cDovL2xvY2FsaG9zdDo4MDg4L2luZGVtbml0eUxpc3RfbGlzdDAuanNvbicsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZU51bTogdGhhdC5jdXJyZW50TnVtLFxyXG4gICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgc3RhdHVzOiB0aGF0LnN0YXRlLFxyXG4gICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhhdC5leGlzdFByb2Nlc3NpbmcgPSByZXMuZGF0YS5kYXRhLmV4aXN0UHJvY2Vzc2luZztcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcy5kYXRhLmRhdGEubGlzdCkge1xyXG4gICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lID0gdGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmRhdGEubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5saXN0ID0gdGhhdC5saXN0LmNvbmNhdChyZXMuZGF0YS5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoYXQuY3VycmVudE51bSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSByZXMuZGF0YS5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnROdW0gPSB0aGF0LmN1cnJlbnROdW0gPD0gMSA/IDEgOiB0aGF0LmN1cnJlbnROdW0gLSAxO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5L+d6Zmp55CG6LWU5YiX6KGo5aSx6LSl5LqGJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGltZVJlZyAobnVtKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUobnVtICogMTAwMCk7XHJcbiAgICAgIGxldCBZID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nO1xyXG4gICAgICBsZXQgTSA9IChkYXRlLmdldE1vbnRoKCkrMSA8IDEwID8gJzAnKyhkYXRlLmdldE1vbnRoKCkrMSkgOiBkYXRlLmdldE1vbnRoKCkrMSkgKyAnLSc7XHJcbiAgICAgIGxldCBEID0gZGF0ZS5nZXREYXRlKCkgPCAxMD8gKCcwJysgKGRhdGUuZ2V0RGF0ZSgpKSArICcgJykgOiAoZGF0ZS5nZXREYXRlKCkgKyAnICcpO1xyXG4gICAgICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldEhvdXJzKCkpICsgJzonKSA6IChkYXRlLmdldEhvdXJzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgbSA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAoKCcwJyArIGRhdGUuZ2V0TWludXRlcygpKSArICc6JykgOiAoZGF0ZS5nZXRNaW51dGVzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgcyA9IGRhdGUuZ2V0U2Vjb25kcygpPCAxMCA/ICgnMCcgKyBkYXRlLmdldFNlY29uZHMoKSkgOiBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgcmV0dXJuIFkrTStEK2grbStzO1xyXG4gICAgfVxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnROdW0gPSAxO1xyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IHRoaXMuY3VycmVudE51bSArIDE7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIGlmIChyZXMubW9kZWwuc2VhcmNoKCdpUGhvbmUgWCcpICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaXBob25lWCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pcGhvbmVYID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyZW50X2RhdGEubG9naW5fdG9rZW4gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtID0gMTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjTG9naW4nLHtiYWNrVXJsOiAnaW5kZW1uaXR5TGlzdCd9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19