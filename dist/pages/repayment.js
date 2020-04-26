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

var repayment = function (_wepy$page) {
  _inherits(repayment, _wepy$page);

  function repayment() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, repayment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = repayment.__proto__ || Object.getPrototypeOf(repayment)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '我的贷款'
    }, _this.components = {
      toastInfo: _toastInfo2.default
    }, _this.data = {
      winHeight: 0,
      url_link: '',
      parent_data: '',
      // 列表
      listData: [{ purpleshade: false }],
      swiperList: [],
      // 还款日
      hk_time: '',
      carWidth: 'opacity:1;width:0',
      showModel: {},
      pageModel: {},
      currentTab: 0, //预设当前项的值
      scrollLeft: 0, //tab标题的滚动条位置
      //searchLoading:false,//上拉加载
      searchLoadingComplete: false //"没有数据"的变量，

    }, _this.computed = {
      // 缺省压面是否显示
      noData_show: function noData_show() {
        if (this.listData.length == 0) {
          return true;
        } else {
          return false;
        }
      }
    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage() {
        return {
          path: '/pages/index'
        };
      },
      // 滚动切换标签样式
      switchTab: function switchTab(e) {
        this.currentTab = e.detail.current;
        this.checkCor();
        this.showModel = this.listData[this.currentTab];

        for (var i = 0; i < this.listData.length; i++) {
          if (i == this.currentTab) {
            this.listData[i].purpleshade = true;
          } else {
            this.listData[i].purpleshade = false;
          }
        }
        this.$apply();
      },
      // 点击标题切换当前页时改变样式
      swichNav: function swichNav(e) {
        var that = this;
        var cur = e.target.dataset.current;
        var d = new Date(parseInt(that.listData[cur].plandate));
        var sd = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        that.hk_time = sd;

        that.winHeight = that.listData[cur]['plans'].length * 100 + 800;
        if (this.data.currentTab == cur) {
          return false;
        } else {
          this.currentTab = cur;
        }
      },

      searchScrollLower: function searchScrollLower() {
        var that = this;
        //that.getDetail();
        // if(that.data.searchLoading && !that.data.searchLoadingComplete){
        //   that.getDetail();

        // }
      },
      notice: function notice(item) {
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
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(repayment, [{
    key: 'checkCor',

    //判断当前滚动超过一屏时，设置tab标题滚动条。
    value: function checkCor() {
      if (this.data.currentTab > 4) {
        this.scrollLeft = 500;
      } else {
        this.scrollLeft = 0;
      }
    }
    // 我的还款

  }, {
    key: 'getList',
    value: function getList() {
      var that = this;

      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        //url: that.parent_data.json_dhLink + '/api/repaymentplan',
        //url:"http://localhost:8088/indemnityList_list.json",
        url: that.parent_data.json_dhLink + '/contract/getLoanList',
        data: {
          userId: that.parent_data.login_userId,
          loginToken: that.parent_data.login_token
          // phone: that.parent_data.login_phone // phone: 'shhllfmsksl'
        },
        success: function success(data) {
          console.log(data);
          wx.hideLoading();
          if (data.data.code == 10001) {
            that.listData = data.data.data;

            for (var i = 0; i < that.listData.length; i++) {
              that.pageModel["pg" + i] = 1;
              that.listData[i].purpleshade = false;

              var carwidth = ((that.listData[i].productpara - that.listData[i].total) / that.listData[i].productpara * 370.44).toFixed(2);
              console.log(carwidth);
              that.listData[i].carWidth = "opacity:1;width:" + parseInt(carwidth) + "rpx";
              that.listData[i].productpara = Number(that.listData[i].productpara).toLocaleString();
              that.listData[i].plans.forEach(function (item, index, arr) {
                item['customerRentalDate'] = item['customerRentalDate'].split(" ")[0];
              });
            }
            setTimeout(function () {
              that.listData[0].purpleshade = true;
              that.$apply();
            }, 500);

            if (that.listData.length > 0) {
              var d = new Date(parseInt(data.data.data[0].plandate));
              var sd = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
              that.hk_time = sd;
              that.winHeight = data.data.data[0]['plans'].length * 100 + 800;
              that.showModel = that.listData[that.currentTab];
            }
            that.$apply();
          } else {
            that.$invoke('toastInfo', 'modelFunc', data.data.code, data.data.msg);
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
    }
  }, {
    key: 'getDetail',
    value: function getDetail(e) {
      var that = this;
      var currentIndex = that.currentTab;
      var currentPageIndex = parseInt(that.pageModel["pg" + currentIndex]) + 1;
      console.log("currentIndex=" + currentPageIndex);
      wx.showLoading({
        title: '加载中'
      });
      wx.request({
        url: that.parent_data.json_dhLink + '/api/repaymentplan',
        //url:"http://localhost:8088/indemnityList_listDetail.json",
        data: {
          userId: currentPageIndex,
          loginToken: that.listData[currentIndex].CONTRACT_NBR
        },
        success: function success(data) {
          wx.hideLoading();
          if (data.data.code == 10001) {
            //that.listData = data.data.data;
            // 加载更多
            var newPlan = data.data.data.plans;
            if (newPlan.length > 0) {
              that.showModel.plans = that.showModel.plans.concat(newPlan);
              that.pageModel["pg" + currentIndex] = currentPageIndex;
              //that.searchLoading=true;
              that.$apply();
            }
          } else {

            that.$invoke('toastInfo', 'modelFunc', data.data.code, data.data.msg);
            that.searchLoadingComplete = true;
            that.$apply();
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
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.parent_data = this.$parent.globalData;
      this.url_link = this.$parent.globalData.url_link;
      if (this.parent_data.login_token !== '') {
        this.listData = [];
        this.getList();
      } else {
        this.$redirect('secLogin', { backUrl: 'repayment' });
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return repayment;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(repayment , 'pages/repayment'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGF5bWVudC5qcyJdLCJuYW1lcyI6WyJyZXBheW1lbnQiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsInRvYXN0SW5mbyIsImRhdGEiLCJ3aW5IZWlnaHQiLCJ1cmxfbGluayIsInBhcmVudF9kYXRhIiwibGlzdERhdGEiLCJwdXJwbGVzaGFkZSIsInN3aXBlckxpc3QiLCJoa190aW1lIiwiY2FyV2lkdGgiLCJzaG93TW9kZWwiLCJwYWdlTW9kZWwiLCJjdXJyZW50VGFiIiwic2Nyb2xsTGVmdCIsInNlYXJjaExvYWRpbmdDb21wbGV0ZSIsImNvbXB1dGVkIiwibm9EYXRhX3Nob3ciLCJsZW5ndGgiLCJtZXRob2RzIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYXRoIiwic3dpdGNoVGFiIiwiZSIsImRldGFpbCIsImN1cnJlbnQiLCJjaGVja0NvciIsImkiLCIkYXBwbHkiLCJzd2ljaE5hdiIsInRoYXQiLCJjdXIiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiZCIsIkRhdGUiLCJwYXJzZUludCIsInBsYW5kYXRlIiwic2QiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInNlYXJjaFNjcm9sbExvd2VyIiwibm90aWNlIiwiaXRlbSIsImtleU1hcCIsIm9ianMiLCJPYmplY3QiLCJrZXlzIiwicmVkdWNlIiwibmV3RGF0YSIsImtleSIsIm5ld0tleSIsImRlbGl2ZXJ5U3RhdHVzIiwiJG5hdmlnYXRlIiwid3giLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsImpzb25fZGhMaW5rIiwidXNlcklkIiwibG9naW5fdXNlcklkIiwibG9naW5Ub2tlbiIsImxvZ2luX3Rva2VuIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsImNvZGUiLCJjYXJ3aWR0aCIsInByb2R1Y3RwYXJhIiwidG90YWwiLCJ0b0ZpeGVkIiwiTnVtYmVyIiwidG9Mb2NhbGVTdHJpbmciLCJwbGFucyIsImZvckVhY2giLCJpbmRleCIsImFyciIsInNwbGl0Iiwic2V0VGltZW91dCIsIiRpbnZva2UiLCJtc2ciLCJmYWlsIiwic2hvd1RvYXN0IiwiaWNvbiIsImhpZGVUb2FzdCIsImN1cnJlbnRJbmRleCIsImN1cnJlbnRQYWdlSW5kZXgiLCJDT05UUkFDVF9OQlIiLCJuZXdQbGFuIiwiY29uY2F0IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJnZXRMaXN0IiwiJHJlZGlyZWN0IiwiYmFja1VybCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQyxpQkFBV0E7QUFEQSxLLFFBR2JDLEksR0FBTztBQUNMQyxpQkFBVyxDQUROO0FBRUxDLGdCQUFVLEVBRkw7QUFHTEMsbUJBQVksRUFIUDtBQUlMO0FBQ0FDLGdCQUFVLENBQUMsRUFBQ0MsYUFBWSxLQUFiLEVBQUQsQ0FMTDtBQU1MQyxrQkFBVyxFQU5OO0FBT0w7QUFDQUMsZUFBUyxFQVJKO0FBU0xDLGdCQUFTLG1CQVRKO0FBVUxDLGlCQUFVLEVBVkw7QUFXTEMsaUJBQVUsRUFYTDtBQVlMQyxrQkFBWSxDQVpQLEVBWVU7QUFDZkMsa0JBQVksQ0FiUCxFQWFVO0FBQ2Y7QUFDQUMsNkJBQXNCLEtBZmpCLENBZXNCOztBQWZ0QixLLFFBa0JQQyxRLEdBQVc7QUFDVDtBQUNBQyxtQkFBYSx1QkFBWTtBQUN2QixZQUFJLEtBQUtYLFFBQUwsQ0FBY1ksTUFBZCxJQUF3QixDQUE1QixFQUErQjtBQUM3QixpQkFBTyxJQUFQO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sS0FBUDtBQUNEO0FBQ0Y7QUFSUSxLLFFBVVhDLE8sR0FBVTtBQUNSQyx5QkFBbUIsNkJBQVc7QUFDNUIsZUFBTztBQUNMQyxnQkFBTTtBQURELFNBQVA7QUFHRCxPQUxPO0FBTVY7QUFD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XG5pbXBvcnQgdG9hc3RJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvdG9hc3RJbmZvJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXBheW1lbnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTotLfmrL4nXHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgdG9hc3RJbmZvOiB0b2FzdEluZm9cclxuICB9O1xyXG4gIGRhdGEgPSB7XHJcbiAgICB3aW5IZWlnaHQ6IDAsXHJcbiAgICB1cmxfbGluazogJycsXHJcbiAgICBwYXJlbnRfZGF0YTonJyxcclxuICAgIC8vIOWIl+ihqFxyXG4gICAgbGlzdERhdGE6IFt7cHVycGxlc2hhZGU6ZmFsc2V9XSxcclxuICAgIHN3aXBlckxpc3Q6W10sXHJcbiAgICAvLyDov5jmrL7ml6VcclxuICAgIGhrX3RpbWU6ICcnLFxyXG4gICAgY2FyV2lkdGg6J29wYWNpdHk6MTt3aWR0aDowJyxcclxuICAgIHNob3dNb2RlbDp7fSxcclxuICAgIHBhZ2VNb2RlbDp7fSxcclxuICAgIGN1cnJlbnRUYWI6IDAsIC8v6aKE6K6+5b2T5YmN6aG555qE5YC8XHJcbiAgICBzY3JvbGxMZWZ0OiAwLCAvL3RhYuagh+mimOeahOa7muWKqOadoeS9jee9rlxyXG4gICAgLy9zZWFyY2hMb2FkaW5nOmZhbHNlLC8v5LiK5ouJ5Yqg6L29XHJcbiAgICBzZWFyY2hMb2FkaW5nQ29tcGxldGU6ZmFsc2UvL1wi5rKh5pyJ5pWw5o2uXCLnmoTlj5jph4/vvIxcclxuXHJcbiAgfTtcclxuICBjb21wdXRlZCA9IHtcclxuICAgIC8vIOe8uuecgeWOi+mdouaYr+WQpuaYvuekulxyXG4gICAgbm9EYXRhX3Nob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKHRoaXMubGlzdERhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgLy8g5rua5Yqo5YiH5o2i5qCH562+5qC35byPXHJcbiAgc3dpdGNoVGFiOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgdGhpcy5jdXJyZW50VGFiID0gZS5kZXRhaWwuY3VycmVudDtcclxuICAgIHRoaXMuY2hlY2tDb3IoKTtcclxuICAgIHRoaXMuc2hvd01vZGVsPXRoaXMubGlzdERhdGFbdGhpcy5jdXJyZW50VGFiXTtcclxuICAgIFxyXG4gICBmb3IodmFyIGk9MDtpPHRoaXMubGlzdERhdGEubGVuZ3RoO2krKyl7ICAgICAgICAgICBcclxuICAgICAgICAgICAgIGlmKGk9PXRoaXMuY3VycmVudFRhYil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhW2ldLnB1cnBsZXNoYWRlPXRydWU7XHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFbaV0ucHVycGxlc2hhZGU9ZmFsc2U7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICB9XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH0sXHJcbiAgLy8g54K55Ye75qCH6aKY5YiH5o2i5b2T5YmN6aG15pe25pS55Y+Y5qC35byPXHJcbiAgc3dpY2hOYXYgKGUpIHtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBjdXIgPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQ7XHJcbiAgICBsZXQgZCA9IG5ldyBEYXRlKHBhcnNlSW50KHRoYXQubGlzdERhdGFbY3VyXS5wbGFuZGF0ZSkpO1xyXG4gICAgbGV0IHNkID0gZC5nZXRGdWxsWWVhcigpICsgJy0nICsgKGQuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgZC5nZXREYXRlKCk7XHJcbiAgICB0aGF0LmhrX3RpbWUgPSBzZDtcclxuICAgIFxyXG4gICAgdGhhdC53aW5IZWlnaHQgPSB0aGF0Lmxpc3REYXRhW2N1cl1bJ3BsYW5zJ10ubGVuZ3RoICogMTAwICsgODAwO1xyXG4gICAgaWYgKHRoaXMuZGF0YS5jdXJyZW50VGFiID09IGN1cikge1xyXG4gICAgICAgcmV0dXJuIGZhbHNlOyBcclxuICAgICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRUYWIgPSBjdXJcclxuICAgIH1cclxuICB9LFxyXG5zZWFyY2hTY3JvbGxMb3dlcjpmdW5jdGlvbigpe1xyXG4gIGxldCB0aGF0PXRoaXM7XHJcbiAgLy90aGF0LmdldERldGFpbCgpO1xyXG4gIC8vIGlmKHRoYXQuZGF0YS5zZWFyY2hMb2FkaW5nICYmICF0aGF0LmRhdGEuc2VhcmNoTG9hZGluZ0NvbXBsZXRlKXtcclxuICAvLyAgIHRoYXQuZ2V0RGV0YWlsKCk7XHJcblxyXG4gIC8vIH1cclxufSxcclxubm90aWNlKGl0ZW0pe1xyXG4gdmFyIGtleU1hcD17XCJkZWxpdmVyeVN0YXR1c1wiOlwic3RhdHVzXCIsXCJjb250cmFjdE5vXCI6XCJleHRlcm5hbENvbnRyYWN0TmJyXCJ9XHJcbiAgdmFyIG9ianM9T2JqZWN0LmtleXMoaXRlbSkucmVkdWNlKChuZXdEYXRhLGtleSk9PntcclxuICAgIGxldCBuZXdLZXk9a2V5TWFwW2tleV18fGtleVxyXG4gICAgbmV3RGF0YVtuZXdLZXldPWl0ZW1ba2V5XVxyXG4gICAgcmV0dXJuIG5ld0RhdGFcclxuICB9LHt9KVxyXG5cclxuICBcclxuICBpZihpdGVtLmRlbGl2ZXJ5U3RhdHVzPT0wKXtcclxudGhpcy4kbmF2aWdhdGUoJ3NlbmRJbmZvcm1hdGlvbicsb2Jqcyk7XHJcbiAgfWVsc2V7XHJcbnRoaXMuJG5hdmlnYXRlKCd0b3NlbmRhJyxvYmpzKTtcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbiAgXHJcbiAgfTtcclxuICAvL+WIpOaWreW9k+WJjea7muWKqOi2hei/h+S4gOWxj+aXtu+8jOiuvue9rnRhYuagh+mimOa7muWKqOadoeOAglxyXG4gICAgY2hlY2tDb3IgKCkge1xyXG4gICAgaWYgKHRoaXMuZGF0YS5jdXJyZW50VGFiID4gNCkge1xyXG4gICAgICB0aGlzLnNjcm9sbExlZnQgPSA1MDBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICB0aGlzLnNjcm9sbExlZnQgPSAwXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOaIkeeahOi/mOasvlxyXG4gIGdldExpc3QgKCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIFxyXG5cclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgfSlcclxuICAgICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIC8vdXJsOiB0aGF0LnBhcmVudF9kYXRhLmpzb25fZGhMaW5rICsgJy9hcGkvcmVwYXltZW50cGxhbicsXHJcbiAgICAgIC8vdXJsOlwiaHR0cDovL2xvY2FsaG9zdDo4MDg4L2luZGVtbml0eUxpc3RfbGlzdC5qc29uXCIsXHJcbiAgICAgIHVybDogdGhhdC5wYXJlbnRfZGF0YS5qc29uX2RoTGluayArICcvY29udHJhY3QvZ2V0TG9hbkxpc3QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdXNlcklkOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3VzZXJJZCxcclxuICAgICAgICBsb2dpblRva2VuOiB0aGF0LnBhcmVudF9kYXRhLmxvZ2luX3Rva2VuXHJcbiAgICAgICAgLy8gcGhvbmU6IHRoYXQucGFyZW50X2RhdGEubG9naW5fcGhvbmUgLy8gcGhvbmU6ICdzaGhsbGZtc2tzbCdcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHd4LmhpZGVMb2FkaW5nKCk7XHJcbiAgICAgICAgaWYgKGRhdGEuZGF0YS5jb2RlID09IDEwMDAxKSB7XHJcbiAgICAgICAgICB0aGF0Lmxpc3REYXRhID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIGZvcih2YXIgaT0wO2k8dGhhdC5saXN0RGF0YS5sZW5ndGg7aSsrKVxyXG4gICAgICAgICAgeyBcclxuICAgICAgICAgICAgIHRoYXQucGFnZU1vZGVsW1wicGdcIitpXT0xOyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgdGhhdC5saXN0RGF0YVtpXS5wdXJwbGVzaGFkZT1mYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgdmFyIGNhcndpZHRoPSgoKHRoYXQubGlzdERhdGFbaV0ucHJvZHVjdHBhcmEtdGhhdC5saXN0RGF0YVtpXS50b3RhbCkvdGhhdC5saXN0RGF0YVtpXS5wcm9kdWN0cGFyYSkqMzcwLjQ0KS50b0ZpeGVkKDIpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcndpZHRoKVxyXG4gICAgICAgICAgICB0aGF0Lmxpc3REYXRhW2ldLmNhcldpZHRoPVwib3BhY2l0eToxO3dpZHRoOlwiK3BhcnNlSW50KGNhcndpZHRoKStcInJweFwiIFxyXG4gICAgICAgICAgICB0aGF0Lmxpc3REYXRhW2ldLnByb2R1Y3RwYXJhPU51bWJlcih0aGF0Lmxpc3REYXRhW2ldLnByb2R1Y3RwYXJhKS50b0xvY2FsZVN0cmluZygpO1xyXG50aGF0Lmxpc3REYXRhW2ldLnBsYW5zLmZvckVhY2goKGl0ZW0saW5kZXgsYXJyKT0+e1xyXG4gIGl0ZW1bJ2N1c3RvbWVyUmVudGFsRGF0ZSddPWl0ZW1bJ2N1c3RvbWVyUmVudGFsRGF0ZSddLnNwbGl0KFwiIFwiKVswXTtcclxufSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICB0aGF0Lmxpc3REYXRhWzBdLnB1cnBsZXNoYWRlPXRydWU7XHJcbiAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgaWYgKHRoYXQubGlzdERhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHBhcnNlSW50KGRhdGEuZGF0YS5kYXRhWzBdLnBsYW5kYXRlKSk7XHJcbiAgICAgICAgICAgIGxldCBzZCA9IGQuZ2V0RnVsbFllYXIoKSArICctJyArIChkLmdldE1vbnRoKCkgKyAxKSArICctJyArIGQuZ2V0RGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGF0LmhrX3RpbWUgPSBzZDtcclxuICAgICAgICAgICAgdGhhdC53aW5IZWlnaHQgPSBkYXRhLmRhdGEuZGF0YVswXVsncGxhbnMnXS5sZW5ndGggKiAxMDAgKyA4MDA7XHJcbiAgICAgICAgICAgIHRoYXQuc2hvd01vZGVsPXRoYXQubGlzdERhdGFbdGhhdC5jdXJyZW50VGFiXTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIH0gICAgICBcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJGludm9rZSgndG9hc3RJbmZvJywgJ21vZGVsRnVuYycsIGRhdGEuZGF0YS5jb2RlLCBkYXRhLmRhdGEubXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+e9kee7nOW8guW4uCcsXHJcbiAgICAgICAgICBpY29uOiAnbm9uZSdcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHd4LmhpZGVUb2FzdCgpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXREZXRhaWwoZSl7XHJcbiAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgIGxldCBjdXJyZW50SW5kZXg9dGhhdC5jdXJyZW50VGFiO1xyXG4gICAgIGxldCBjdXJyZW50UGFnZUluZGV4PSBwYXJzZUludCh0aGF0LnBhZ2VNb2RlbFtcInBnXCIrY3VycmVudEluZGV4XSkrMTtcclxuICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnRJbmRleD1cIitjdXJyZW50UGFnZUluZGV4KTtcclxuICAgICAgd3guc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgfSk7XHJcbiAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHRoYXQucGFyZW50X2RhdGEuanNvbl9kaExpbmsgKyAnL2FwaS9yZXBheW1lbnRwbGFuJyxcclxuICAgICAgLy91cmw6XCJodHRwOi8vbG9jYWxob3N0OjgwODgvaW5kZW1uaXR5TGlzdF9saXN0RGV0YWlsLmpzb25cIixcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHVzZXJJZDogY3VycmVudFBhZ2VJbmRleCxcclxuICAgICAgICBsb2dpblRva2VuOiB0aGF0Lmxpc3REYXRhW2N1cnJlbnRJbmRleF0uQ09OVFJBQ1RfTkJSXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpO1xyXG4gICAgICAgIGlmIChkYXRhLmRhdGEuY29kZSA9PSAxMDAwMSkge1xyXG4gICAgICAgICAgLy90aGF0Lmxpc3REYXRhID0gZGF0YS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAvLyDliqDovb3mm7TlpJpcclxuICAgICAgICAgIHZhciBuZXdQbGFuPWRhdGEuZGF0YS5kYXRhLnBsYW5zO1xyXG4gICAgICAgICAgaWYgKG5ld1BsYW4ubGVuZ3RoID4gMCkgXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgICB0aGF0LnNob3dNb2RlbC5wbGFucz10aGF0LnNob3dNb2RlbC5wbGFucy5jb25jYXQobmV3UGxhbik7XHJcbiAgICAgICAgICAgICB0aGF0LnBhZ2VNb2RlbFtcInBnXCIrY3VycmVudEluZGV4XT1jdXJyZW50UGFnZUluZGV4O1xyXG4gICAgICAgICAgICAgLy90aGF0LnNlYXJjaExvYWRpbmc9dHJ1ZTtcclxuICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhhdC4kaW52b2tlKCd0b2FzdEluZm8nLCAnbW9kZWxGdW5jJywgZGF0YS5kYXRhLmNvZGUsIGRhdGEuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgdGhhdC5zZWFyY2hMb2FkaW5nQ29tcGxldGU9dHJ1ZTtcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgdGl0bGU6ICfnvZHnu5zlvILluLgnLFxyXG4gICAgICAgICAgaWNvbjogJ25vbmUnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB3eC5oaWRlVG9hc3QoKTtcclxuICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIG9uU2hvdyAoKSB7XHJcbiAgICB0aGlzLnBhcmVudF9kYXRhID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGE7XHJcbiAgICB0aGlzLnVybF9saW5rID0gdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXJsX2xpbms7XHJcbiAgICBpZiAodGhpcy5wYXJlbnRfZGF0YS5sb2dpbl90b2tlbiAhPT0gJycpIHtcclxuICAgICAgdGhpcy5saXN0RGF0YSA9IFtdXHJcbiAgICAgIHRoaXMuZ2V0TGlzdCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy4kcmVkaXJlY3QoJ3NlY0xvZ2luJyx7YmFja1VybDogJ3JlcGF5bWVudCd9KTtcclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gIH1cclxufVxyXG4iXX0=