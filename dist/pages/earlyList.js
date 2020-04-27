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

var earlyList = function (_wepy$page) {
  _inherits(earlyList, _wepy$page);

  function earlyList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, earlyList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = earlyList.__proto__ || Object.getPrototypeOf(earlyList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '提前还款',
      onReachBottomDistance: 50
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      name: "上海东正汽车金融股份有限公司",
      idCard: "31001520368050005668",
      bankinfo: "中国建设银行股份有限公司上海金茂支行",
      iphoneX: false,
      url_link: '',
      states: ['earlySLZ.png', 'earlyYSL.png', 'earlyYQX.png'],
      parent_data: '',
      state: 0,
      list: [],
      totalNum: 1,
      currentNum: 1,
      repaymentIds: [], //列表中ids
      existProcessing: false
    }, _this.computed = {
      //缺省压面是否显示
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
        this.getList('deleteList');
      },
      // 取消申请
      cancelSubmit: function cancelSubmit(id) {
        var that = this;
        wx.showModal({
          title: '温馨提示',
          content: '小主，确定取消该前提还款申请吗？',
          cancelText: '再想想',
          confirmText: '确定',
          success: function success(res) {
            if (res.confirm) {
              wx.request({
                url: that.parent_data.json_dhLink + '/repayment/cancel',
                //url:'http://localhost:8088/list.json',
                header: {
                  'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                method: 'POST',
                data: { repaymentId: id, loginToken: that.parent_data.login_token, userId: that.parent_data.login_userId },
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
        //将要修改的item的key存在本地
        wx.setStorage({
          key: 'contract_id',
          data: item.id
        });
        this.$navigate('earlyPerson', { ctnumber: item.contractNo, currentTime: item.payDate });
      },
      paymentSubmit: function paymentSubmit(item) {
        var keyMap = { "deliveryStatus": "status", "contractNo": "externalContractNbr" };
        var objs = Object.keys(item).reduce(function (newData, key) {
          var newKey = keyMap[key] || key;
          newData[newKey] = item[key];
          return newData;
        }, {});
        if (item.deliveryStatus == 0) {
          this.$navigate('sendInformation', objs);
        } else {
          this.$navigate('tosenda', objs);
        }
      },
      //新建申请
      addNewPost: function addNewPost() {
        wx.removeStorage({
          key: 'contract_id',
          success: function success(res) {
            console.log(res.data);
          }
        });
        this.$navigate('earlyPerson', { type: 'new' });
      },
      //复制按钮
      copyBtn: function copyBtn(e) {
        var that = this;
        var code = e.currentTarget.dataset.copy;
        wx.setClipboardData({
          data: code,
          success: function success(res) {
            wx.showToast({
              title: '复制成功'
            });
          },
          fail: function fail(res) {
            wx.showToast({
              title: '复制失败'
            });
          }
        });
      }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(earlyList, [{
    key: 'warnFunction',
    value: function warnFunction() {
      var that = this;
      wx.request({
        url: that.parent_data.json_dhLink + '/repayment/getTip',
        data: {
          repaymentIds: that.repaymentIds
        },
        method: 'POST',
        success: function success(res) {
          var warnDate = '';
          if (res.data.code == '10001') {
            res.data.data.forEach(function (val) {
              if (val.hidden == false) {
                warnDate = val.payDate;
                wx.showModal({
                  title: '温馨提示',
                  showCancel: false,
                  confirmText: '我知道了',
                  content: '提前还款申请成功，请于还款日（' + warnDate + '）之前将足够金额存入你在我司的代扣还款卡中，以便我们进行扣款。如非我方原因导致扣款失败，则视作放弃本次提前还款，如需重新提交提前还款请于还款日（' + warnDate + '）之后申请办理。',
                  success: function success(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                });
              }
            });
          } else {
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        },
        fail: function fail() {
          console.log('失败了');
        }
      });
    }
  }, {
    key: 'getList',
    value: function getList(type) {
      var that = this;
      if (type) {
        that.list = [];
      }
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/repayment/list',
        //url:'http://localhost:8088/list.json',
        data: {
          pageNum: that.currentNum,
          pageSize: 10,
          loginToken: that.parent_data.login_token,
          userId: that.parent_data.login_userId,
          status: that.state
        },
        success: function success(res) {
          if (res.data.code == '10001') {
            console.log('新获取列表长度为：' + that.list.length + '当前页为' + that.currentNum);
            wx.hideLoading();
            that.existProcessing = res.data.data.existProcessing;
            that.repaymentIds = [];
            for (var i in res.data.data.list) {
              res.data.data.list[i].payDate = that.timeReg(res.data.data.list[i].payDate).split(' ')[0];
              res.data.data.list[i].createTime = that.timeReg(res.data.data.list[i].createTime);
              that.repaymentIds.push(res.data.data.list[i].id);
            }
            // if (that.state == 1) {
            // that.warnFunction();
            // }
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
              // return false;
            }
          } else {
            wx.hideLoading();
            that.$invoke('toastInfo', 'modelFunc', res.data.code, res.data.msg);
          }
        }
      });
    }
    // 提前还款申请成功

  }, {
    key: 'getSucces',
    value: function getSucces() {
      wx.showModal({
        content: '提前还款申请成功，请于还款日(2019-06-01）之前将足够金额存入你在我司的代扣还款卡中，以便我们进行扣款。如非我方原因导致扣款失败，则视作放弃本次提前还款，如需重新提交提前还款请于还款日(2019-06-01）之后申请办理。',
        showCancel: false,
        confirmText: '我知道了',
        success: function success(res) {
          if (res.confirm) {
            console.log('用户点击确定');
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
      console.log('加载下一页，加载页为：' + this.currentNum);
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
        this.list = [];
        this.currentNum = 1;
        this.getList();
      } else {
        this.$redirect('secLogin', { backUrl: 'earlyList' });
      }
    }
  }]);

  return earlyList;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(earlyList , 'pages/earlyList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVhcmx5TGlzdC5qcyJdLCJuYW1lcyI6WyJlYXJseUxpc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwib25SZWFjaEJvdHRvbURpc3RhbmNlIiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJuYW1lIiwiaWRDYXJkIiwiYmFua2luZm8iLCJpcGhvbmVYIiwidXJsX2xpbmsiLCJzdGF0ZXMiLCJwYXJlbnRfZGF0YSIsInN0YXRlIiwibGlzdCIsInRvdGFsTnVtIiwiY3VycmVudE51bSIsInJlcGF5bWVudElkcyIsImV4aXN0UHJvY2Vzc2luZyIsImNvbXB1dGVkIiwibm9EYXRhX3Nob3ciLCJsZW5ndGgiLCJtZXRob2RzIiwiY2hhbmdlU3RhdGUiLCJnZXRMaXN0IiwiY2FuY2VsU3VibWl0IiwiaWQiLCJ0aGF0Iiwid3giLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjYW5jZWxUZXh0IiwiY29uZmlybVRleHQiLCJzdWNjZXNzIiwicmVzIiwiY29uZmlybSIsInJlcXVlc3QiLCJ1cmwiLCJqc29uX2RoTGluayIsImhlYWRlciIsIm1ldGhvZCIsInJlcGF5bWVudElkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwiY29kZSIsIiRpbnZva2UiLCJtc2ciLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImNhbmNlbCIsImVkaXQiLCJpdGVtIiwic2V0U3RvcmFnZSIsImtleSIsIiRuYXZpZ2F0ZSIsImN0bnVtYmVyIiwiY29udHJhY3RObyIsImN1cnJlbnRUaW1lIiwicGF5RGF0ZSIsInBheW1lbnRTdWJtaXQiLCJrZXlNYXAiLCJvYmpzIiwiT2JqZWN0Iiwia2V5cyIsInJlZHVjZSIsIm5ld0RhdGEiLCJuZXdLZXkiLCJkZWxpdmVyeVN0YXR1cyIsImFkZE5ld1Bvc3QiLCJyZW1vdmVTdG9yYWdlIiwidHlwZSIsImNvcHlCdG4iLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb3B5Iiwic2V0Q2xpcGJvYXJkRGF0YSIsInNob3dUb2FzdCIsIndhcm5EYXRlIiwiZm9yRWFjaCIsInZhbCIsImhpZGRlbiIsInNob3dDYW5jZWwiLCJzaG93TG9hZGluZyIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInN0YXR1cyIsImhpZGVMb2FkaW5nIiwiaSIsInRpbWVSZWciLCJzcGxpdCIsImNyZWF0ZVRpbWUiLCJwdXNoIiwiY29uY2F0IiwiJGFwcGx5IiwiaWNvbiIsImR1cmF0aW9uIiwibnVtIiwiZGF0ZSIsIkRhdGUiLCJZIiwiZ2V0RnVsbFllYXIiLCJNIiwiZ2V0TW9udGgiLCJEIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIm0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsImdldFN5c3RlbUluZm9TeW5jIiwibW9kZWwiLCJzZWFyY2giLCIkcmVkaXJlY3QiLCJiYWNrVXJsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLE1BRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxZQUFLLGdCQURBO0FBRUxDLGNBQU8sc0JBRkY7QUFHTEMsZ0JBQVMsb0JBSEo7QUFJTEMsZUFBUSxLQUpIO0FBS0xDLGdCQUFVLEVBTEw7QUFNTEMsY0FBUSxDQUFDLGNBQUQsRUFBZ0IsY0FBaEIsRUFBK0IsY0FBL0IsQ0FOSDtBQU9MQyxtQkFBYSxFQVBSO0FBUUxDLGFBQU8sQ0FSRjtBQVNMQyxZQUFNLEVBVEQ7QUFVTEMsZ0JBQVUsQ0FWTDtBQVdMQyxrQkFBWSxDQVhQO0FBWUxDLG9CQUFjLEVBWlQsRUFZYTtBQUNsQkMsdUJBQWlCO0FBYlosSyxRQWVQQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFB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QUFLUixVQUFMLEdBQWtCLEtBQUtBLFVBQUwsR0FBa0IsQ0FBcEM7QUFDQW1DLGNBQVFDLEdBQVIsQ0FBWSxnQkFBZSxLQUFLcEMsVUFBaEM7QUFDQSxXQUFLUSxPQUFMO0FBQ0Q7Ozs2QkFDUSxDQUNSOzs7NkJBQ1E7QUFDUCxXQUFLZCxRQUFMLEdBQWdCLEtBQUswRyxPQUFMLENBQWFDLFVBQWIsQ0FBd0IzRyxRQUF4QztBQUNBLFdBQUtFLFdBQUwsR0FBbUIsS0FBS3dHLE9BQUwsQ0FBYUMsVUFBaEM7QUFDQSxVQUFJbEYsTUFBTVAsR0FBRzBGLGlCQUFILEVBQVY7QUFDQSxVQUFJbkYsSUFBSW9GLEtBQUosQ0FBVUMsTUFBVixDQUFpQixVQUFqQixNQUFpQyxDQUFDLENBQXRDLEVBQXlDO0FBQ3ZDLGFBQUsvRyxPQUFMLEdBQWUsSUFBZjtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUtBLE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUFDRCxVQUFJLEtBQUtHLFdBQUwsQ0FBaUJnQyxXQUFqQixLQUFpQyxFQUFyQyxFQUF5QztBQUN2QyxhQUFLOUIsSUFBTCxHQUFZLEVBQVo7QUFDQSxhQUFLRSxVQUFMLEdBQWtCLENBQWxCO0FBQ0EsYUFBS1EsT0FBTDtBQUNELE9BSkQsTUFJTztBQUNMLGFBQUtpRyxTQUFMLENBQWUsVUFBZixFQUEwQixFQUFDQyxTQUFTLFdBQVYsRUFBMUI7QUFDRDtBQUNGOzs7O0VBblJvQ0MsZUFBS0MsSTs7a0JBQXZCN0gsUyIsImZpbGUiOiJlYXJseUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuICBpbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGVhcmx5TGlzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmj5DliY3ov5jmrL4nLFxyXG4gICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICAgIH07XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBuYW1lOlwi5LiK5rW35Lic5q2j5rG96L2m6YeR6J6N6IKh5Lu95pyJ6ZmQ5YWs5Y+4XCIsXHJcbiAgICAgIGlkQ2FyZDpcIjMxMDAxNTIwMzY4MDUwMDA1NjY4XCIsXHJcbiAgICAgIGJhbmtpbmZvOlwi5Lit5Zu95bu66K6+6ZO26KGM6IKh5Lu95pyJ6ZmQ5YWs5Y+45LiK5rW36YeR6IyC5pSv6KGMXCIsXHJcbiAgICAgIGlwaG9uZVg6ZmFsc2UsXHJcbiAgICAgIHVybF9saW5rOiAnJyxcclxuICAgICAgc3RhdGVzOiBbJ2Vhcmx5U0xaLnBuZycsJ2Vhcmx5WVNMLnBuZycsJ2Vhcmx5WVFYLnBuZyddLFxyXG4gICAgICBwYXJlbnRfZGF0YTogJycsXHJcbiAgICAgIHN0YXRlOiAwLFxyXG4gICAgICBsaXN0OiBbXSxcclxuICAgICAgdG90YWxOdW06IDEsXHJcbiAgICAgIGN1cnJlbnROdW06IDEsXHJcbiAgICAgIHJlcGF5bWVudElkczogW10sIC8v5YiX6KGo5LitaWRzXHJcbiAgICAgIGV4aXN0UHJvY2Vzc2luZzogZmFsc2VcclxuICAgIH07XHJcbiAgICBjb21wdXRlZCA9IHtcclxuICAgICAgLy/nvLrnnIHljovpnaLmmK/lkKbmmL7npLpcclxuICAgICAgbm9EYXRhX3Nob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIC8vIOabtOaUueeKtuaAgeWAvFxyXG4gICAgICBjaGFuZ2VTdGF0ZTogZnVuY3Rpb24oc3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJyZW50TnVtID0gMTtcclxuICAgICAgICB0aGlzLmdldExpc3QoJ2RlbGV0ZUxpc3QnKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5Y+W5raI55Sz6K+3XHJcbiAgICAgIGNhbmNlbFN1Ym1pdDogZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn5bCP5Li777yM56Gu5a6a5Y+W5raI6K+l5YmN5o+Q6L+Y5qy+55Sz6K+35ZCX77yfJyxcclxuICAgICAgICAgIGNhbmNlbFRleHQ6J+WGjeaDs+aDsycsXHJcbiAgICAgICAgICBjb25maXJtVGV4dDon56Gu5a6aJyxcclxuICAgICAgICAgIHN1Y2Nlc3MgKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9yZXBheW1lbnQvY2FuY2VsJyxcclxuICAgICAgICAgICAgICAgIC8vdXJsOidodHRwOi8vbG9jYWxob3N0OjgwODgvbGlzdC5qc29uJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgLy8g6buY6K6k5YC8XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7cmVwYXltZW50SWQ6IGlkLCBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuLHVzZXJJZDogdGhhdC5wYXJlbnRfZGF0YS5sb2dpbl91c2VySWR9LFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5saXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TnVtID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LmdldExpc3QoKTtcclxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRpbnZva2UoJ3RvYXN0SW5mbycsICdtb2RlbEZ1bmMnLCByZXMuZGF0YS5jb2RlLCByZXMuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5Y+W5raI55Sz6K+35aSx6LSl5LqGJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+WPlua2iCcpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDkv67mlLnnlLPor7dcclxuICAgICAgZWRpdDogZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAvL+WwhuimgeS/ruaUueeahGl0ZW3nmoRrZXnlrZjlnKjmnKzlnLBcclxuICAgICAgICB3eC5zZXRTdG9yYWdlKHtcclxuICAgICAgICAgIGtleTogJ2NvbnRyYWN0X2lkJyxcclxuICAgICAgICAgIGRhdGE6IGl0ZW0uaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnZWFybHlQZXJzb24nLCB7Y3RudW1iZXI6IGl0ZW0uY29udHJhY3RObywgY3VycmVudFRpbWU6IGl0ZW0ucGF5RGF0ZX0pO1xyXG4gICAgICB9LFxyXG4gICAgICBwYXltZW50U3VibWl0IDogZnVuY3Rpb24oaXRlbSl7XHJcbiAgICAgICAgIHZhciBrZXlNYXA9e1wiZGVsaXZlcnlTdGF0dXNcIjpcInN0YXR1c1wiLFwiY29udHJhY3ROb1wiOlwiZXh0ZXJuYWxDb250cmFjdE5iclwifVxyXG4gICAgICAgICAgdmFyIG9ianM9T2JqZWN0LmtleXMoaXRlbSkucmVkdWNlKChuZXdEYXRhLGtleSk9PntcclxuICAgICAgICAgICAgbGV0IG5ld0tleT1rZXlNYXBba2V5XXx8a2V5XHJcbiAgICAgICAgICAgIG5ld0RhdGFbbmV3S2V5XT1pdGVtW2tleV1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld0RhdGFcclxuICAgICAgICAgIH0se30pIFxyXG4gICAgICAgICAgaWYoaXRlbS5kZWxpdmVyeVN0YXR1cz09MCl7XHJcbiAgICAgICAgdGhpcy4kbmF2aWdhdGUoJ3NlbmRJbmZvcm1hdGlvbicsb2Jqcyk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgndG9zZW5kYScsb2Jqcyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICB9LFxyXG4gICAgICAvL+aWsOW7uueUs+ivt1xyXG4gICAgICBhZGROZXdQb3N0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSh7XHJcbiAgICAgICAgICBrZXk6ICdjb250cmFjdF9pZCcsXHJcbiAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnZWFybHlQZXJzb24nLCB7dHlwZTogJ25ldyd9KTtcclxuICAgICAgfSxcclxuICAgICAgICAgIC8v5aSN5Yi25oyJ6ZKuXHJcbiAgICAgIGNvcHlCdG46ZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIHRoYXQ9dGhpcztcclxuICAgICAgICB2YXIgY29kZT1lLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5jb3B5O1xyXG4gICAgICAgIHd4LnNldENsaXBib2FyZERhdGEoe1xyXG4gICAgICAgICAgZGF0YTpjb2RlLFxyXG4gICAgICAgICAgc3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiflpI3liLbmiJDlip8nLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOmZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6J+WkjeWItuWksei0pScsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG5cclxuICAgXHJcbiAgICB9O1xyXG4gICAgd2FybkZ1bmN0aW9uKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvcmVwYXltZW50L2dldFRpcCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcmVwYXltZW50SWRzOiB0aGF0LnJlcGF5bWVudElkc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgbGV0IHdhcm5EYXRlID0gJyc7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEuY29kZSA9PSAnMTAwMDEnKSB7XHJcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHZhbC5oaWRkZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHdhcm5EYXRlID0gdmFsLnBheURhdGU7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+a4qemmqOaPkOekuicsXHJcbiAgICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UZXh0OiAn5oiR55+l6YGT5LqGJyxcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogJ+aPkOWJjei/mOasvueUs+ivt+aIkOWKn++8jOivt+S6jui/mOasvuaXpe+8iCcrIHdhcm5EYXRlICsn77yJ5LmL5YmN5bCG6Laz5aSf6YeR6aKd5a2Y5YWl5L2g5Zyo5oiR5Y+455qE5Luj5omj6L+Y5qy+5Y2h5Lit77yM5Lul5L6/5oiR5Lus6L+b6KGM5omj5qy+44CC5aaC6Z2e5oiR5pa55Y6f5Zug5a+86Ie05omj5qy+5aSx6LSl77yM5YiZ6KeG5L2c5pS+5byD5pys5qyh5o+Q5YmN6L+Y5qy+77yM5aaC6ZyA6YeN5paw5o+Q5Lqk5o+Q5YmN6L+Y5qy+6K+35LqO6L+Y5qy+5pel77yIJysgd2FybkRhdGUgKyfvvInkuYvlkI7nlLPor7flip7nkIbjgIInLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIHJlcy5kYXRhLmNvZGUsIHJlcy5kYXRhLm1zZyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5aSx6LSl5LqGJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRMaXN0ICh0eXBlKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgaWYgKHR5cGUpIHtcclxuICAgICAgICB0aGF0Lmxpc3QgPSBbXVxyXG4gICAgICB9XHJcbiAgICAgIHd4LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgIH0pXHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9yZXBheW1lbnQvbGlzdCcsXHJcbiAgICAgICAgLy91cmw6J2h0dHA6Ly9sb2NhbGhvc3Q6ODA4OC9saXN0Lmpzb24nLFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBhZ2VOdW06IHRoYXQuY3VycmVudE51bSxcclxuICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgIGxvZ2luVG9rZW46IHRoYXQucGFyZW50X2RhdGEubG9naW5fdG9rZW4sXHJcbiAgICAgICAgICB1c2VySWQ6IHRoYXQucGFyZW50X2RhdGEubG9naW5fdXNlcklkLFxyXG4gICAgICAgICAgc3RhdHVzOnRoYXQuc3RhdGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09ICcxMDAwMScpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aWsOiOt+WPluWIl+ihqOmVv+W6puS4uu+8micrIHRoYXQubGlzdC5sZW5ndGggKyAn5b2T5YmN6aG15Li6JysgdGhhdC5jdXJyZW50TnVtKTtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhhdC5leGlzdFByb2Nlc3NpbmcgPSByZXMuZGF0YS5kYXRhLmV4aXN0UHJvY2Vzc2luZztcclxuICAgICAgICAgICAgdGhhdC5yZXBheW1lbnRJZHMgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGxldCBpIGluIHJlcy5kYXRhLmRhdGEubGlzdCkge1xyXG4gICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEubGlzdFtpXS5wYXlEYXRlID0gdGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGEubGlzdFtpXS5wYXlEYXRlKS5zcGxpdCgnICcpWzBdO1xyXG4gICAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lID0gdGhhdC50aW1lUmVnKHJlcy5kYXRhLmRhdGEubGlzdFtpXS5jcmVhdGVUaW1lKTtcclxuICAgICAgICAgICAgICB0aGF0LnJlcGF5bWVudElkcy5wdXNoKHJlcy5kYXRhLmRhdGEubGlzdFtpXS5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoYXQuc3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICAgIC8vIHRoYXQud2FybkZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEubGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhhdC5saXN0ID0gdGhhdC5saXN0IC5jb25jYXQocmVzLmRhdGEuZGF0YS5saXN0KTtcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGlmICh0aGF0LmN1cnJlbnROdW0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5saXN0ID0gcmVzLmRhdGEuZGF0YS5saXN0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5jdXJyZW50TnVtID0gdGhhdC5jdXJyZW50TnVtIDw9IDEgPyAxOiB0aGF0LmN1cnJlbnROdW0tIDE7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WKoOi9veWFqOmDqCcsXHJcbiAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3guaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgcmVzLmRhdGEuY29kZSwgcmVzLmRhdGEubXNnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvLyDmj5DliY3ov5jmrL7nlLPor7fmiJDlip9cclxuICAgIGdldFN1Y2NlcyAoKSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgY29udGVudDogJ+aPkOWJjei/mOasvueUs+ivt+aIkOWKn++8jOivt+S6jui/mOasvuaXpSgyMDE5LTA2LTAx77yJ5LmL5YmN5bCG6Laz5aSf6YeR6aKd5a2Y5YWl5L2g5Zyo5oiR5Y+455qE5Luj5omj6L+Y5qy+5Y2h5Lit77yM5Lul5L6/5oiR5Lus6L+b6KGM5omj5qy+44CC5aaC6Z2e5oiR5pa55Y6f5Zug5a+86Ie05omj5qy+5aSx6LSl77yM5YiZ6KeG5L2c5pS+5byD5pys5qyh5o+Q5YmN6L+Y5qy+77yM5aaC6ZyA6YeN5paw5o+Q5Lqk5o+Q5YmN6L+Y5qy+6K+35LqO6L+Y5qy+5pelKDIwMTktMDYtMDHvvInkuYvlkI7nlLPor7flip7nkIbjgIInLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn5oiR55+l6YGT5LqGJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHRpbWVSZWcgKG51bSkge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKG51bSAqIDEwMDApO1xyXG4gICAgICBsZXQgWSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArICctJztcclxuICAgICAgbGV0IE0gPSAoZGF0ZS5nZXRNb250aCgpKzEgPCAxMCA/ICcwJysoZGF0ZS5nZXRNb250aCgpKzEpIDogZGF0ZS5nZXRNb250aCgpKzEpICsgJy0nO1xyXG4gICAgICBsZXQgRCA9IGRhdGUuZ2V0RGF0ZSgpIDwgMTA/ICgnMCcrIChkYXRlLmdldERhdGUoKSkgKyAnICcpIDogKGRhdGUuZ2V0RGF0ZSgpICsgJyAnKTtcclxuICAgICAgbGV0IGggPSBkYXRlLmdldEhvdXJzKCkgPCAxMCA/ICgoJzAnICsgZGF0ZS5nZXRIb3VycygpKSArICc6JykgOiAoZGF0ZS5nZXRIb3VycygpICsgJzonKTtcclxuICAgICAgbGV0IG0gPSBkYXRlLmdldE1pbnV0ZXMoKSA8IDEwID8gKCgnMCcgKyBkYXRlLmdldE1pbnV0ZXMoKSkgKyAnOicpIDogKGRhdGUuZ2V0TWludXRlcygpICsgJzonKTtcclxuICAgICAgbGV0IHMgPSBkYXRlLmdldFNlY29uZHMoKSA8IDEwID8gKCcwJyArIGRhdGUuZ2V0U2Vjb25kcygpKSA6IGRhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICByZXR1cm4gWStNK0QraCttK3M7XHJcbiAgICB9XHJcbiAgICBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgIHRoaXMuY3VycmVudE51bSA9IDE7XHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfVxyXG4gICAgb25SZWFjaEJvdHRvbSgpIHtcclxuICAgICAgdGhpcy5jdXJyZW50TnVtID0gdGhpcy5jdXJyZW50TnVtICsgMTtcclxuICAgICAgY29uc29sZS5sb2coJ+WKoOi9veS4i+S4gOmhte+8jOWKoOi9vemhteS4uu+8micrIHRoaXMuY3VycmVudE51bSlcclxuICAgICAgdGhpcy5nZXRMaXN0KCk7XHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMudXJsX2xpbmsgPSB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51cmxfbGluaztcclxuICAgICAgdGhpcy5wYXJlbnRfZGF0YSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhO1xyXG4gICAgICB2YXIgcmVzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgaWYgKHJlcy5tb2RlbC5zZWFyY2goJ2lQaG9uZSBYJykgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy5pcGhvbmVYID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlwaG9uZVggPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbiAhPT0gJycpIHtcclxuICAgICAgICB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnROdW0gPSAxO1xyXG4gICAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJHJlZGlyZWN0KCdzZWNMb2dpbicse2JhY2tVcmw6ICdlYXJseUxpc3QnfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiJdfQ==