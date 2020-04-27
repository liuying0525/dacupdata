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

var cardList = function (_wepy$page) {
  _inherits(cardList, _wepy$page);

  function cardList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, cardList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = cardList.__proto__ || Object.getPrototypeOf(cardList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '还款卡变更',
      onReachBottomDistance: 50
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      iphoneX: false,
      url_link: '',
      parent_data: '',
      states: ['earlySLZ.png', 'earlyYSL.png', 'earlyYQX.png'],
      state: 0,
      list: [], // 列表
      currentNum: 1, // 当前页
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
      // 新建申请
      add: function add() {
        this.$navigate('cardPerson');
      },
      //上传授权书
      uploadBook: function uploadBook(id) {
        this.$navigate('cardUpBook', { id: id });
      },
      // 重新获取
      getAgain: function getAgain(id) {
        this.$navigate('cardGetAgain', { id: id });
      },
      cancelSubmit: function cancelSubmit(id) {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该手机号修改申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/paycardModifyRecord/cancel',
                data: {
                  userId: that.parent_data.login_userId,
                  loginToken: that.parent_data.login_token,
                  recordId: id
                },
                method: 'POST',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
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
                  console.log('还款卡变更申请失败');
                }
              });
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(cardList, [{
    key: 'getList',
    value: function getList() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/paycardModifyRecord/list',
        //url: 'http://localhost:8088/paycardModifyRecord_list0.json',
        data: {
          pageNum: that.currentNum,
          pageSize: 10,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId,
          status: that.state
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
              return false;
            }
          } else {
            wx.hideLoading();
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
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
        this.$redirect('secLogin', { backUrl: 'cardList' });
      }
    }
  }]);

  return cardList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(cardList , 'pages/cardList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRMaXN0LmpzIl0sIm5hbWVzIjpbImNhcmRMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm9uUmVhY2hCb3R0b21EaXN0YW5jZSIsImNvbXBvbmVudHMiLCJ0b2FzdEluZm8iLCJkYXRhIiwiaXBob25lWCIsInVybF9saW5rIiwicGFyZW50X2RhdGEiLCJzdGF0ZXMiLCJzdGF0ZSIsImxpc3QiLCJjdXJyZW50TnVtIiwiZXhpc3RQcm9jZXNzaW5nIiwiY29tcHV0ZWQiLCJub0RhdGFfc2hvdyIsImxlbmd0aCIsIm1ldGhvZHMiLCJjaGFuZ2VTdGF0ZSIsImdldExpc3QiLCJhZGQiLCIkbmF2aWdhdGUiLCJ1cGxvYWRCb29rIiwiaWQiLCJnZXRBZ2FpbiIsImNhbmNlbFN1Ym1pdCIsInRoYXQiLCJ3eCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJjb25maXJtVGV4dCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25maXJtIiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwicmVjb3JkSWQiLCJtZXRob2QiLCJoZWFkZXIiLCJjb2RlIiwiJGludm9rZSIsIm1zZyIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiY2FuY2VsIiwic2hvd0xvYWRpbmciLCJwYWdlTnVtIiwicGFnZVNpemUiLCJzdGF0dXMiLCJoaWRlTG9hZGluZyIsImkiLCJjcmVhdGVUaW1lIiwidGltZVJlZyIsImNvbmNhdCIsIiRhcHBseSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm51bSIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1vZGVsIiwic2VhcmNoIiwiJHJlZGlyZWN0IiwiYmFja1VybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZUFBUSxLQURIO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsbUJBQWEsRUFIUjtBQUlMQyxjQUFRLENBQUMsY0FBRCxFQUFnQixjQUFoQixFQUErQixjQUEvQixDQUpIO0FBS0xDLGFBQU8sQ0FMRjtBQU1MQyxZQUFNLEVBTkQsRUFNSztBQUNWQyxrQkFBWSxDQVBQLEVBT1U7QUFDZkMsdUJBQWlCO0FBUlosSyxRQVVQQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFBYSx1QkFBWTtBQUN2QixZQUFJLEtBQUtKLElBQUwsQ0FBVUssTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUN6QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFSUSxLLFFBVVhDLE8sR0FBVTtBQUNSQyxtQkFBYSxxQkFBU1IsS0FBVCxFQUFnQjtBQUMzQixhQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtDLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLTyxPQUFMO0FBQ0QsT0FOTztBQU9SO0FBQ0FDLFdBQUssZUFBWTtBQUNmLGFBQUtDLFNBQUwsQ0FBZSxZQUFmO0FBQ0QsT0FWTztBQVdSO0FBQ0FDLGtCQUFZLG9CQUFVQyxFQUFWLEVBQWM7QUFDeEIsYUFBS0YsU0FBTCxDQUFlLFlBQWYsRUFBNkIsRUFBQ0UsSUFBSUEsRUFBTCxFQUE3QjtBQUNELE9BZE87QUFlUjtBQUNBQyxnQkFBVSxr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T0FBTCxHQUFlLElBQWY7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLQSxPQUFMLEdBQWUsS0FBZjtBQUNEO0FBQ0QsVUFBSSxLQUFLRSxXQUFMLENBQWlCa0MsV0FBakIsS0FBaUMsRUFBckMsRUFBeUM7QUFDdkMsYUFBSzlCLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxhQUFLRCxJQUFMLEdBQVksRUFBWjtBQUNBLGFBQUtRLE9BQUw7QUFDRCxPQUpELE1BSU87QUFDTCxhQUFLbUUsU0FBTCxDQUFlLFVBQWYsRUFBMEIsRUFBQ0MsU0FBUyxVQUFWLEVBQTFCO0FBQ0Q7QUFDRjs7OztFQTFLbUNDLGVBQUtDLEk7O2tCQUF0QjFGLFEiLCJmaWxlIjoiY2FyZExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmRMaXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i/mOasvuWNoeWPmOabtCcsXHJcbiAgICAgIG9uUmVhY2hCb3R0b21EaXN0YW5jZTogNTBcclxuICAgIH07XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICB0b2FzdEluZm86IHRvYXN0SW5mb1xyXG4gICAgfTtcclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGlwaG9uZVg6ZmFsc2UsXHJcbiAgICAgIHVybF9saW5rOiAnJyxcclxuICAgICAgcGFyZW50X2RhdGE6ICcnLFxyXG4gICAgICBzdGF0ZXM6IFsnZWFybHlTTFoucG5nJywnZWFybHlZU0wucG5nJywnZWFybHlZUVgucG5nJ10sXHJcbiAgICAgIHN0YXRlOiAwLFxyXG4gICAgICBsaXN0OiBbXSwgLy8g5YiX6KGoXHJcbiAgICAgIGN1cnJlbnROdW06IDEsIC8vIOW9k+WJjemhtVxyXG4gICAgICBleGlzdFByb2Nlc3Npbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIC8vIOe8uuecgeWOi+mdouaYr+WQpuaYvuekulxyXG4gICAgICBub0RhdGFfc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOaWsOW7uueUs+ivt1xyXG4gICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnY2FyZFBlcnNvbicpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+S4iuS8oOaOiOadg+S5plxyXG4gICAgICB1cGxvYWRCb29rOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnY2FyZFVwQm9vaycsIHtpZDogaWR9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6YeN5paw6I635Y+WXHJcbiAgICAgIGdldEFnYWluOiBmdW5jdGlvbiAoaWQpIHtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnY2FyZEdldEFnYWluJywge2lkOiBpZH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBjYW5jZWxTdWJtaXQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+Wwj+S4u++8jOehruWumuWPlua2iOivpeaJi+acuuWPt+S/ruaUueeUs+ivt+WQl++8nycsXHJcbiAgICAgICAgICBjYW5jZWxUZXh0OiAn5YaN5oOz5oOzJyxcclxuICAgICAgICAgIGNvbmZpcm1UZXh0OiAn56Gu5a6aJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9wYXljYXJkTW9kaWZ5UmVjb3JkL2NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgICAgICAgICAgIHJlY29yZElkOiBpZFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyAvLyDpu5jorqTlgLxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKCApIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/mOasvuWNoeWPmOabtOeUs+ivt+Wksei0pScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgZ2V0TGlzdCgpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICB9KTtcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvcGF5Y2FyZE1vZGlmeVJlY29yZC9saXN0JyxcclxuICAgICAgICAvL3VybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9wYXljYXJkTW9kaWZ5UmVjb3JkX2xpc3QwLmpzb24nLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2VOdW06IHRoYXQuY3VycmVudE51bSxcclxuICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgc3RhdHVzOiB0aGF0LnN0YXRlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHRoYXQuZXhpc3RQcm9jZXNzaW5nID0gcmVzLmRhdGEuZGF0YS5leGlzdFByb2Nlc3Npbmc7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSBpbiByZXMuZGF0YS5kYXRhLmxpc3QpIHtcclxuICAgICAgICAgICAgICByZXMuZGF0YS5kYXRhLmxpc3RbaV0uY3JlYXRlVGltZSA9IHRoYXQudGltZVJlZyhyZXMuZGF0YS5kYXRhLmxpc3RbaV0uY3JlYXRlVGltZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSB0aGF0Lmxpc3QgLmNvbmNhdChyZXMuZGF0YS5kYXRhLmxpc3QpO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoYXQuY3VycmVudE51bSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lmxpc3QgPSByZXMuZGF0YS5kYXRhLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmN1cnJlbnROdW0gPSB0aGF0LmN1cnJlbnROdW0gPD0gMSA/IDE6IHRoYXQuY3VycmVudE51bS0gMTtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yqg6L295YWo6YOoJyxcclxuICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgdGltZVJlZyAobnVtKSB7XHJcbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUobnVtICogMTAwMCk7XHJcbiAgICAgIGxldCBZID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nO1xyXG4gICAgICBsZXQgTSA9IChkYXRlLmdldE1vbnRoKCkrMSA8IDEwID8gJzAnKyhkYXRlLmdldE1vbnRoKCkrMSkgOiBkYXRlLmdldE1vbnRoKCkrMSkgKyAnLSc7XHJcbiAgICAgIGxldCBEID0gZGF0ZS5nZXREYXRlKCkgPCAxMD8gKCcwJysgKGRhdGUuZ2V0RGF0ZSgpKSArICcgJykgOiAoZGF0ZS5nZXREYXRlKCkgKyAnICcpO1xyXG4gICAgICBsZXQgaCA9IGRhdGUuZ2V0SG91cnMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldEhvdXJzKCkpICsgJzonKSA6IChkYXRlLmdldEhvdXJzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgbSA9IGRhdGUuZ2V0TWludXRlcygpIDwgMTAgPyAoKCcwJyArIGRhdGUuZ2V0TWludXRlcygpKSArICc6JykgOiAoZGF0ZS5nZXRNaW51dGVzKCkgKyAnOicpO1xyXG4gICAgICBsZXQgcyA9IGRhdGUuZ2V0U2Vjb25kcygpPCAxMCA/ICgnMCcgKyBkYXRlLmdldFNlY29uZHMoKSkgOiBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgcmV0dXJuIFkrTStEK2grbStzO1xyXG4gICAgfVxyXG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICB0aGlzLmN1cnJlbnROdW0gPSAxO1xyXG4gICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgIH1cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IHRoaXMuY3VycmVudE51bSArIDE7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICAgIHRoaXMucGFyZW50X2RhdGEgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YTtcclxuICAgICAgdmFyIHJlcyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgIGlmIChyZXMubW9kZWwuc2VhcmNoKCdpUGhvbmUgWCcpICE9PSAtMSkge1xyXG4gICAgICAgIHRoaXMuaXBob25lWCA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5pcGhvbmVYID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMucGFyZW50X2RhdGEubG9naW5fdG9rZW4gIT09ICcnKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtID0gMTtcclxuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRyZWRpcmVjdCgnc2VjTG9naW4nLHtiYWNrVXJsOiAnY2FyZExpc3QnfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==