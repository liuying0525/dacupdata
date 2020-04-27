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

var phoneList = function (_wepy$page) {
  _inherits(phoneList, _wepy$page);

  function phoneList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, phoneList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = phoneList.__proto__ || Object.getPrototypeOf(phoneList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '修改手机号',
      onReachBottomDistance: 50
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      iphoneX: false,
      url_link: '',
      states: ['earlySLZ.png', 'earlyYSL.png', 'earlyYQX.png'],
      state: 0,
      parent_data: '',
      list: [],
      totalNum: 1,
      currentNum: 1,
      existProcessing: false
    }, _this.computed = {
      // 新建按钮是否显示
      addBtnCanShow: function addBtnCanShow() {
        if (this.list.length > 0) {
          var flag = false;
          this.list.forEach(function (val) {
            if (val.status == 0 || val.status == 1) {
              val.status = 1;
              flag = true;
            }
          });
          if (flag) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      },
      // 缺省压面是否显示
      noData_show: function noData_show() {
        if (this.list.length == 0) {
          return true;
        } else {
          return false;
        }
      }
    }, _this.methods = {
      // 更改状态值
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
          content: '小主，确定取消该手机号修改申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/mobileModifyRecord/cancel',
                data: { recordId: id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
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
                  console.log('取消申请失败了');
                }
              });
            } else if (res.cancel) {
              console.log('用户点击取消');
            }
          }
        });
      },
      // 修改申请
      edit: function edit(item) {
        wx.setStorage({
          key: 'phoneChange_id',
          data: item.id
        });
        this.$navigate('phonePerson', { newPhone: item.telephoneNew, ctnumber: item.contractNo });
      },
      //新建申请
      addNewPost: function addNewPost() {
        wx.removeStorage({
          key: 'phoneChange_id',
          success: function success(res) {
            console.log(res.data);
          }
        });
        this.$navigate('phonePerson', { type: 'new' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(phoneList, [{
    key: 'getList',
    value: function getList() {
      var that = this;
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/mobileModifyRecord/list',
        //url: "http://localhost:8088/phoneList_list0.json",
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
        this.$redirect('secLogin', { backUrl: 'phoneList' });
      }
    }
  }]);

  return phoneList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(phoneList , 'pages/phoneList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob25lTGlzdC5qcyJdLCJuYW1lcyI6WyJwaG9uZUxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwib25SZWFjaEJvdHRvbURpc3RhbmNlIiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJpcGhvbmVYIiwidXJsX2xpbmsiLCJzdGF0ZXMiLCJzdGF0ZSIsInBhcmVudF9kYXRhIiwibGlzdCIsInRvdGFsTnVtIiwiY3VycmVudE51bSIsImV4aXN0UHJvY2Vzc2luZyIsImNvbXB1dGVkIiwiYWRkQnRuQ2FuU2hvdyIsImxlbmd0aCIsImZsYWciLCJmb3JFYWNoIiwidmFsIiwic3RhdHVzIiwibm9EYXRhX3Nob3ciLCJtZXRob2RzIiwiY2hhbmdlU3RhdGUiLCJnZXRMaXN0IiwiY2FuY2VsU3VibWl0IiwiaWQiLCJ0aGF0Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsInJlY29yZElkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibWV0aG9kIiwiaGVhZGVyIiwiY29kZSIsIiRpbnZva2UiLCJtc2ciLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImVkaXQiLCJpdGVtIiwic2V0U3RvcmFnZSIsImtleSIsIiRuYXZpZ2F0ZSIsIm5ld1Bob25lIiwidGVsZXBob25lTmV3IiwiY3RudW1iZXIiLCJjb250cmFjdE5vIiwiYWRkTmV3UG9zdCIsInJlbW92ZVN0b3JhZ2UiLCJ0eXBlIiwic2hvd0xvYWRpbmciLCJwYWdlTnVtIiwicGFnZVNpemUiLCJoaWRlTG9hZGluZyIsImkiLCJjcmVhdGVUaW1lIiwidGltZVJlZyIsImNvbmNhdCIsIiRhcHBseSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsIm51bSIsImRhdGUiLCJEYXRlIiwiWSIsImdldEZ1bGxZZWFyIiwiTSIsImdldE1vbnRoIiwiRCIsImdldERhdGUiLCJoIiwiZ2V0SG91cnMiLCJtIiwiZ2V0TWludXRlcyIsInMiLCJnZXRTZWNvbmRzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1vZGVsIiwic2VhcmNoIiwiJHJlZGlyZWN0IiwiYmFja1VybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw2QkFBdUI7QUFGaEIsSyxRQUlUQyxVLEdBQWE7QUFDWEMsaUJBQVdBO0FBREEsSyxRQUdiQyxJLEdBQU87QUFDTEMsZUFBUSxLQURIO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsY0FBUSxDQUFDLGNBQUQsRUFBZ0IsY0FBaEIsRUFBK0IsY0FBL0IsQ0FISDtBQUlMQyxhQUFPLENBSkY7QUFLTEMsbUJBQWEsRUFMUjtBQU1MQyxZQUFNLEVBTkQ7QUFPTEMsZ0JBQVUsQ0FQTDtBQVFMQyxrQkFBWSxDQVJQO0FBU0xDLHVCQUFpQjtBQVRaLEssUUFXUEMsUSxHQUFXO0FBQ1Q7QUFDQUMscUJBQWUseUJBQVk7QUFDekIsWUFBSSxLQUFLTCxJQUFMLENBQVVNLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsY0FBSUMsT0FBTyxLQUFYO0FBQ0EsZUFBS1AsSUFBTCxDQUFVUSxPQUFWLENBQWtCLFVBQVNDLEdBQVQsRUFBYztBQUM5QixnQkFBSUEsSUFBSUMsTUFBSixJQUFjLENBQWQsSUFBbUJELElBQUlDLE1BQUosSUFBYyxDQUFyQyxFQUF3QztBQUN0Q0Qsa0JBQUlDLE1BQUosR0FBYSxDQUFiO0FBQ0FILHFCQUFPLElBQVA7QUFDRDtBQUNGLFdBTEQ7QUFNQSxjQUFJQSxJQUFKLEVBQVU7QUFDUixtQkFBTyxLQUFQO0FBQ0Qs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Q0EsYUFBS2MsT0FBTDtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUswRSxTQUFMLENBQWUsVUFBZixFQUEwQixFQUFDQyxTQUFTLFdBQVYsRUFBMUI7QUFDRDtBQUNGOzs7O0VBbE1vQ0MsZUFBS0MsSTs7a0JBQXZCdkcsUyIsImZpbGUiOiJwaG9uZUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHBob25lTGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkv67mlLnmiYvmnLrlj7cnLFxyXG4gICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBpcGhvbmVYOmZhbHNlLFxyXG4gICAgICB1cmxfbGluazogJycsXHJcbiAgICAgIHN0YXRlczogWydlYXJseVNMWi5wbmcnLCdlYXJseVlTTC5wbmcnLCdlYXJseVlRWC5wbmcnXSxcclxuICAgICAgc3RhdGU6IDAsXHJcbiAgICAgIHBhcmVudF9kYXRhOiAnJyxcclxuICAgICAgbGlzdDogW10sXHJcbiAgICAgIHRvdGFsTnVtOiAxLFxyXG4gICAgICBjdXJyZW50TnVtOiAxLFxyXG4gICAgICBleGlzdFByb2Nlc3Npbmc6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgY29tcHV0ZWQgPSB7XHJcbiAgICAgIC8vIOaWsOW7uuaMiemSruaYr+WQpuaYvuekulxyXG4gICAgICBhZGRCdG5DYW5TaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5saXN0LmZvckVhY2goZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWwuc3RhdHVzID09IDAgfHwgdmFsLnN0YXR1cyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgdmFsLnN0YXR1cyA9IDE7XHJcbiAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKGZsYWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g57y655yB5Y6L6Z2i5piv5ZCm5pi+56S6XHJcbiAgICAgIG5vRGF0YV9zaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdC5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDmm7TmlLnnirbmgIHlgLxcclxuICAgICAgY2hhbmdlU3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWPlua2iOeUs+ivt1xyXG4gICAgICBjYW5jZWxTdWJtaXQ6IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmuKnppqjmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+Wwj+S4u++8jOehruWumuWPlua2iOivpeaJi+acuuWPt+S/ruaUueeUs+ivt+WQl++8nycsXHJcbiAgICAgICAgICBjYW5jZWxUZXh0Oiflho3mg7Pmg7MnLFxyXG4gICAgICAgICAgY29uZmlybVRleHQ6J+ehruWumicsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL21vYmlsZU1vZGlmeVJlY29yZC9jYW5jZWwnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3JlY29yZElkOiBpZCxsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWR9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIC8vIOm7mOiupOWAvFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmNvZGUgPT0gJzEwMDAxJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iOeUs+ivt+Wksei0peS6hicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vlj5bmtognKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5L+u5pS555Sz6K+3XHJcbiAgICAgIGVkaXQ6IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgd3guc2V0U3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6ICdwaG9uZUNoYW5nZV9pZCcsXHJcbiAgICAgICAgICBkYXRhOiBpdGVtLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3Bob25lUGVyc29uJywge25ld1Bob25lOiBpdGVtLnRlbGVwaG9uZU5ldywgY3RudW1iZXI6IGl0ZW0uY29udHJhY3ROb30pO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+aWsOW7uueUs+ivt1xyXG4gICAgICBhZGROZXdQb3N0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6ICdwaG9uZUNoYW5nZV9pZCcsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgncGhvbmVQZXJzb24nLCB7dHlwZTogJ25ldyd9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGdldExpc3QgKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9tb2JpbGVNb2RpZnlSZWNvcmQvbGlzdCcsXHJcbiAgICAgICAgLy91cmw6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L3Bob25lTGlzdF9saXN0MC5qc29uXCIsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcGFnZU51bTogdGhhdC5jdXJyZW50TnVtLFxyXG4gICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgbG9naW5Ub2tlbjogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbixcclxuICAgICAgICAgIHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWQsXHJcbiAgICAgICAgICBzdGF0dXM6IHRoYXQuc3RhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhhdC5leGlzdFByb2Nlc3NpbmcgPSByZXMuZGF0YS5kYXRhLmV4aXN0UHJvY2Vzc2luZztcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcy5kYXRhLmRhdGEubGlzdCkge1xyXG4gICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lID0gdGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoYXQubGlzdCA9IHRoYXQubGlzdCAuY29uY2F0KHJlcy5kYXRhLmRhdGEubGlzdCk7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAodGhhdC5jdXJyZW50TnVtID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQubGlzdCA9IHJlcy5kYXRhLmRhdGEubGlzdDtcclxuICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudE51bSA9IHRoYXQuY3VycmVudE51bSA8PSAxID8gMTogdGhhdC5jdXJyZW50TnVtLSAxO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliqDovb3lhajpg6gnLFxyXG4gICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIHRpbWVSZWcgKG51bSkge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG51bSAqIDEwMDApO1xyXG4gICAgICBsZXQgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgICAgbGV0IE0gPSAoZGF0ZS5nZXRNb250aCgpKzEgPCAxMCA/ICcwJysoZGF0ZS5nZXRNb250aCgpKzEpIDogZGF0ZS5nZXRNb250aCgpKzEpICsgJy0nO1xyXG4gICAgICBsZXQgRCA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTA/ICgnMCcrIChkYXRlLmdldERhdGUoKSkgKyAnICcpIDogKGRhdGUuZ2V0RGF0ZSgpICsgJyAnKTtcclxuICAgICAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICgoJzAnICsgZGF0ZS5nZXRIb3VycygpKSArICc6JykgOiAoZGF0ZS5nZXRIb3VycygpICsgJzonKTtcclxuICAgICAgbGV0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkgKyAnOicpIDogKGRhdGUuZ2V0TWludXRlcygpICsgJzonKTtcclxuICAgICAgbGV0IHMgPSBkYXRlLmdldFNlY29uZHMoKTwgMTAgPyAoJzAnICsgZGF0ZS5nZXRTZWNvbmRzKCkpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIHJldHVybiBZK00rRCtoK20rcztcclxuICAgIH1cclxuICAgIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgdGhpcy5jdXJyZW50TnVtID0gMTtcclxuICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9O1xyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TnVtID0gdGhpcy5jdXJyZW50TnVtICsgMTtcclxuICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfTtcclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgdGhpcy51cmxfbGluayA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVybF9saW5rO1xyXG4gICAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICAgIHZhciByZXMgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICBpZiAocmVzLm1vZGVsLnNlYXJjaCgnaVBob25lIFgnKSAhPT0gLTEpIHtcclxuICAgICAgICB0aGlzLmlwaG9uZVggPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaXBob25lWCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuICE9PSAnJykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudE51bSA9IDE7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kcmVkaXJlY3QoJ3NlY0xvZ2luJyx7YmFja1VybDogJ3Bob25lTGlzdCd9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19