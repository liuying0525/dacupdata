"use strict";

// component/wx-index-list/wx-index-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    leotiancai: {
      type: Object,
      value: {},
      observer: function observer(newVal, oldVal) {
        this.resetRight(newVal);
      }
    },
    myCity: {
      type: String,
      value: ""
    },
    // 用于外部组件搜索使用
    search: {
      type: String,
      value: "",
      observer: function observer(newVal, oldVal) {
        console.log(newVal);
        this.value = newVal;
        this.searchMt();
      }
    }
  },

  data: {
    list: [],
    rightArr: [], // 右侧字母展示
    jumpNum: '', //跳转到那个字母
    myCityName: '请选择' // 默认我的城市

  },
  ready: function ready() {
    console.log(this.data.leotiancai);
    var data = this.data.leotiancai;
    this.resetRight(data);
    if (this.data.myCity) {
      this.getCity();
    }
  },

  methods: {
    // 数据重新渲染
    resetRight: function resetRight(data) {
      var rightArr = [];
      for (var i in data) {
        rightArr.push(data[i].title.substr(0, 1));
      }
      this.setData({
        list: data,
        rightArr: rightArr
      });
    },
    getCity: function getCity() {
      wx.getLocation({
        type: 'wgs84',
        success: function success(res) {
          this.latitude = res.latitude;
          this.longitude = res.longitude;
          // console.log(res)
        }
      });
    },

    // 右侧字母点击事件
    jumpMt: function jumpMt(e) {
      var jumpNum = e.currentTarget.dataset.id;
      this.setData({ jumpNum: jumpNum });
    },

    // 列表点击事件
    detailMt: function detailMt(e) {
      var detail = e.currentTarget.dataset.detail;

      var myEventOption = {
        bubbles: false, //事件是否冒泡
        composed: false, //事件是否可以穿越组件边界
        capturePhase: false //事件是否拥有捕获阶段
        // 触发事件的选项
      };this.triggerEvent('detail', detail, myEventOption);
    },

    // 获取搜索输入内容
    input: function input(e) {
      this.value = e.detail.value;
    },

    // 基础搜索功能
    searchMt: function searchMt() {
      this._search();
    },
    _search: function _search() {
      console.log("搜索");
      var data = this.data.data;
      var newData = [];
      for (var i = 0; i < data.length; i++) {
        var itemArr = [];
        for (var j = 0; j < data[i].item.length; j++) {
          if (data[i].item[j].name.indexOf(this.value) > -1) {
            var itemJson = {};
            for (var k in data[i].item[j]) {
              itemJson[k] = data[i].item[j][k];
            }
            itemArr.push(itemJson);
          }
        }
        if (itemArr.length === 0) {
          continue;
        }
        newData.push({
          title: data[i].title,
          type: data[i].type ? data[i].type : "",
          item: itemArr
        });
      }
      this.resetRight(newData);
    },

    // 城市定位
    locationMt: function locationMt() {
      // TODO 暂时没有实现 定位自己的城市，需要引入第三方api
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInd4LWluZGV4LWxpc3QuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxlb3RpYW5jYWkiLCJ0eXBlIiwiT2JqZWN0IiwidmFsdWUiLCJvYnNlcnZlciIsIm5ld1ZhbCIsIm9sZFZhbCIsInJlc2V0UmlnaHQiLCJteUNpdHkiLCJTdHJpbmciLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwic2VhcmNoTXQiLCJkYXRhIiwibGlzdCIsInJpZ2h0QXJyIiwianVtcE51bSIsIm15Q2l0eU5hbWUiLCJyZWFkeSIsImdldENpdHkiLCJtZXRob2RzIiwiaSIsInB1c2giLCJ0aXRsZSIsInN1YnN0ciIsInNldERhdGEiLCJ3eCIsImdldExvY2F0aW9uIiwic3VjY2VzcyIsInJlcyIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwianVtcE10IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJkZXRhaWxNdCIsImRldGFpbCIsIm15RXZlbnRPcHRpb24iLCJidWJibGVzIiwiY29tcG9zZWQiLCJjYXB0dXJlUGhhc2UiLCJ0cmlnZ2VyRXZlbnQiLCJpbnB1dCIsIl9zZWFyY2giLCJuZXdEYXRhIiwibGVuZ3RoIiwiaXRlbUFyciIsImoiLCJpdGVtIiwibmFtZSIsImluZGV4T2YiLCJpdGVtSnNvbiIsImsiLCJsb2NhdGlvbk10Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0FBLFVBQVU7QUFDUjs7O0FBR0FDLGNBQVk7QUFDVkMsZ0JBQVk7QUFDVkMsWUFBTUMsTUFESTtBQUVWQyxhQUFPLEVBRkc7QUFHVkMsZ0JBQVUsa0JBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ2xDLGFBQUtDLFVBQUwsQ0FBZ0JGLE1BQWhCO0FBQ0Q7QUFMUyxLQURGO0FBUVZHLFlBQVE7QUFDTlAsWUFBTVEsTUFEQTtBQUVOTixhQUFPO0FBRkQsS0FSRTtBQVlWO0FBQ0FPLFlBQU87QUFDTFQsWUFBS1EsTUFEQTtBQUVMTixhQUFNLEVBRkQ7QUFHTEMsZ0JBQVUsa0JBQVVDLE1BQVYsRUFBa0JDLE1BQWxCLEVBQTBCO0FBQ2xDSyxnQkFBUUMsR0FBUixDQUFZUCxNQUFaO0FBQ0EsYUFBS0YsS0FBTCxHQUFhRSxNQUFiO0FBQ0EsYUFBS1EsUUFBTDtBQUNEO0FBUEk7QUFiRyxHQUpKOztBQTRCUkMsUUFBTTtBQUNKQyxVQUFNLEVBREY7QUFFSkMsY0FBVSxFQUZOLEVBRVM7QUFDYkMsYUFBUyxFQUhMLEVBR1E7QUFDWkMsZ0JBQVksS0FKUixDQUljOztBQUpkLEdBNUJFO0FBbUNSQyxPQW5DUSxtQkFtQ0E7QUFDTlIsWUFBUUMsR0FBUixDQUFZLEtBQUtFLElBQUwsQ0FBVWQsVUFBdEI7QUFDQSxRQUFJYyxPQUFPLEtBQUtBLElBQUwsQ0FBVWQsVUFBckI7QUFDQSxTQUFLTyxVQUFMLENBQWdCTyxJQUFoQjtBQUNBLFFBQUksS0FBS0EsSUFBTCxDQUFVTixNQUFkLEVBQXNCO0FBQ3BCLFdBQUtZLE9BQUw7QUFDRDtBQUNGLEdBMUNPOztBQTJDUkMsV0FBUztBQUNQO0FBQ0FkLGNBRk8sc0JBRUlPLElBRkosRUFFVTtBQUNmLFVBQUlFLFdBQVcsRUFBZjtBQUNBLFdBQUssSUFBSU0sQ0FBVCxJQUFjUixJQUFkLEVBQW9CO0FBQ2xCRSxpQkFBU08sSUFBVCxDQUFjVCxLQUFLUSxDQUFMLEVBQVFFLEtBQVIsQ0FBY0MsTUFBZCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixDQUFkO0FBQ0Q7QUFDRCxXQUFLQyxPQUFMLENBQWE7QUFDWFgsY0FBTUQsSUFESztBQUVYRTtBQUZXLE9BQWI7QUFJRCxLQVhNO0FBWVBJLFdBWk8scUJBWUc7QUFDUk8sU0FBR0MsV0FBSCxDQUFlO0FBQ2IzQixjQUFNLE9BRE87QUFFYjRCLGlCQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEIsZUFBS0MsUUFBTCxHQUFnQkQsSUFBSUMsUUFBcEI7QUFDQSxlQUFLQyxTQUFMLEdBQWlCRixJQUFJRSxTQUFyQjtBQUNBO0FBQ0Q7QUFOWSxPQUFmO0FBUUQsS0FyQk07O0FBc0JQO0FBQ0FDLFVBdkJPLGtCQXVCQUMsQ0F2QkEsRUF1Qkc7QUFDUixVQUFJakIsVUFBVWlCLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxFQUF0QztBQUNBLFdBQUtYLE9BQUwsQ0FBYSxFQUFFVCxnQkFBRixFQUFiO0FBQ0QsS0ExQk07O0FBMkJQO0FBQ0FxQixZQTVCTyxvQkE0QkVKLENBNUJGLEVBNEJLO0FBQ1YsVUFBSUssU0FBU0wsRUFBRUMsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JHLE1BQXJDOztBQUVBLFVBQUlDLGdCQUFnQjtBQUNsQkMsaUJBQVMsS0FEUyxFQUNIO0FBQ2ZDLGtCQUFVLEtBRlEsRUFFRjtBQUNoQkMsc0JBQWMsS0FISSxDQUdFO0FBQ3BCO0FBSmtCLE9BQXBCLENBS0EsS0FBS0MsWUFBTCxDQUFrQixRQUFsQixFQUE0QkwsTUFBNUIsRUFBb0NDLGFBQXBDO0FBRUQsS0F0Q007O0FBdUNQO0FBQ0FLLFNBeENPLGlCQXdDRFgsQ0F4Q0MsRUF3Q0U7QUFDUCxXQUFLL0IsS0FBTCxHQUFhK0IsRUFBRUssTUFBRixDQUFTcEMsS0FBdEI7QUFDRCxLQTFDTTs7QUEyQ1A7QUFDQVUsWUE1Q08sc0JBNENJO0FBQ1QsV0FBS2lDLE9BQUw7QUFDRCxLQTlDTTtBQStDUEEsV0EvQ08scUJBK0NFO0FBQ1BuQyxjQUFRQyxHQUFSLENBQVksSUFBWjtBQUNBLFVBQUlFLE9BQU8sS0FBS0EsSUFBTCxDQUFVQSxJQUFyQjtBQUNBLFVBQUlpQyxVQUFVLEVBQWQ7QUFDQSxXQUFLLElBQUl6QixJQUFJLENBQWIsRUFBZ0JBLElBQUlSLEtBQUtrQyxNQUF6QixFQUFpQzFCLEdBQWpDLEVBQXNDO0FBQ3BDLFlBQUkyQixVQUFVLEVBQWQ7QUFDQSxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSXBDLEtBQUtRLENBQUwsRUFBUTZCLElBQVIsQ0FBYUgsTUFBakMsRUFBeUNFLEdBQXpDLEVBQThDO0FBQzVDLGNBQUlwQyxLQUFLUSxDQUFMLEVBQVE2QixJQUFSLENBQWFELENBQWIsRUFBZ0JFLElBQWhCLENBQXFCQyxPQUFyQixDQUE2QixLQUFLbEQsS0FBbEMsSUFBMkMsQ0FBQyxDQUFoRCxFQUFtRDtBQUNqRCxnQkFBSW1ELFdBQVcsRUFBZjtBQUNBLGlCQUFLLElBQUlDLENBQVQsSUFBY3pDLEtBQUtRLENBQUwsRUFBUTZCLElBQVIsQ0FBYUQsQ0FBYixDQUFkLEVBQStCO0FBQzdCSSx1QkFBU0MsQ0FBVCxJQUFjekMsS0FBS1EsQ0FBTCxFQUFRNkIsSUFBUixDQUFhRCxDQUFiLEVBQWdCSyxDQUFoQixDQUFkO0FBQ0Q7QUFDRE4sb0JBQVExQixJQUFSLENBQWErQixRQUFiO0FBQ0Q7QUFDRjtBQUNELFlBQUlMLFFBQVFELE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEI7QUFDRDtBQUNERCxnQkFBUXhCLElBQVIsQ0FBYTtBQUNYQyxpQkFBT1YsS0FBS1EsQ0FBTCxFQUFRRSxLQURKO0FBRVh2QixnQkFBTWEsS0FBS1EsQ0FBTCxFQUFRckIsSUFBUixHQUFlYSxLQUFLUSxDQUFMLEVBQVFyQixJQUF2QixHQUE4QixFQUZ6QjtBQUdYa0QsZ0JBQU1GO0FBSEssU0FBYjtBQUtEO0FBQ0QsV0FBSzFDLFVBQUwsQ0FBZ0J3QyxPQUFoQjtBQUNELEtBeEVNOztBQXlFUDtBQUNBUyxjQTFFTyx3QkEwRU07QUFDWDtBQUNEO0FBNUVNO0FBM0NELENBQVYiLCJmaWxlIjoid3gtaW5kZXgtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC93eC1pbmRleC1saXN0L3d4LWluZGV4LWxpc3QuanNcclxuQ29tcG9uZW50KHtcclxuICAvKipcclxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcclxuICAgKi9cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBsZW90aWFuY2FpOiB7XHJcbiAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgdmFsdWU6IHt9LFxyXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgdGhpcy5yZXNldFJpZ2h0KG5ld1ZhbCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBteUNpdHk6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogXCJcIixcclxuICAgIH0sXHJcbiAgICAvLyDnlKjkuo7lpJbpg6jnu4Tku7bmkJzntKLkvb/nlKhcclxuICAgIHNlYXJjaDp7XHJcbiAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICB2YWx1ZTpcIlwiLFxyXG4gICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1ZhbCwgb2xkVmFsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VmFsKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRhdGE6IHtcclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgcmlnaHRBcnI6IFtdLC8vIOWPs+S+p+Wtl+avjeWxleekulxyXG4gICAganVtcE51bTogJycsLy/ot7PovazliLDpgqPkuKrlrZfmr41cclxuICAgIG15Q2l0eU5hbWU6ICfor7fpgInmi6knIC8vIOm7mOiupOaIkeeahOWfjuW4glxyXG5cclxuICB9LFxyXG4gIHJlYWR5KCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcy5kYXRhLmxlb3RpYW5jYWkpO1xyXG4gICAgbGV0IGRhdGEgPSB0aGlzLmRhdGEubGVvdGlhbmNhaTtcclxuICAgIHRoaXMucmVzZXRSaWdodChkYXRhKTtcclxuICAgIGlmICh0aGlzLmRhdGEubXlDaXR5KSB7XHJcbiAgICAgIHRoaXMuZ2V0Q2l0eSgpXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyDmlbDmja7ph43mlrDmuLLmn5NcclxuICAgIHJlc2V0UmlnaHQoZGF0YSkge1xyXG4gICAgICBsZXQgcmlnaHRBcnIgPSBbXVxyXG4gICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcclxuICAgICAgICByaWdodEFyci5wdXNoKGRhdGFbaV0udGl0bGUuc3Vic3RyKDAsIDEpKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGxpc3Q6IGRhdGEsXHJcbiAgICAgICAgcmlnaHRBcnJcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnZXRDaXR5KCkge1xyXG4gICAgICB3eC5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICB0aGlzLmxhdGl0dWRlID0gcmVzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5sb25naXR1ZGUgPSByZXMubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvLyDlj7PkvqflrZfmr43ngrnlh7vkuovku7ZcclxuICAgIGp1bXBNdChlKSB7XHJcbiAgICAgIGxldCBqdW1wTnVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7IGp1bXBOdW0gfSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5YiX6KGo54K55Ye75LqL5Lu2XHJcbiAgICBkZXRhaWxNdChlKSB7XHJcbiAgICAgIGxldCBkZXRhaWwgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5kZXRhaWw7XHJcblxyXG4gICAgICBsZXQgbXlFdmVudE9wdGlvbiA9IHtcclxuICAgICAgICBidWJibGVzOiBmYWxzZSwvL+S6i+S7tuaYr+WQpuWGkuazoVxyXG4gICAgICAgIGNvbXBvc2VkOiBmYWxzZSwvL+S6i+S7tuaYr+WQpuWPr+S7peepv+i2iue7hOS7tui+ueeVjFxyXG4gICAgICAgIGNhcHR1cmVQaGFzZTogZmFsc2UgLy/kuovku7bmmK/lkKbmi6XmnInmjZXojrfpmLbmrrVcclxuICAgICAgfSAvLyDop6blj5Hkuovku7bnmoTpgInpoblcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2RldGFpbCcsIGRldGFpbCwgbXlFdmVudE9wdGlvbilcclxuXHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W5pCc57Si6L6T5YWl5YaF5a65XHJcbiAgICBpbnB1dChlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgIH0sXHJcbiAgICAvLyDln7rnoYDmkJzntKLlip/og71cclxuICAgIHNlYXJjaE10KCkge1xyXG4gICAgICB0aGlzLl9zZWFyY2goKTtcclxuICAgIH0sXHJcbiAgICBfc2VhcmNoKCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi5pCc57SiXCIpXHJcbiAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhLmRhdGE7XHJcbiAgICAgIGxldCBuZXdEYXRhID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpdGVtQXJyID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhW2ldLml0ZW0ubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgIGlmIChkYXRhW2ldLml0ZW1bal0ubmFtZS5pbmRleE9mKHRoaXMudmFsdWUpID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW1Kc29uID0ge307XHJcbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gZGF0YVtpXS5pdGVtW2pdKSB7XHJcbiAgICAgICAgICAgICAgaXRlbUpzb25ba10gPSBkYXRhW2ldLml0ZW1bal1ba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXRlbUFyci5wdXNoKGl0ZW1Kc29uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGl0ZW1BcnIubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3RGF0YS5wdXNoKHtcclxuICAgICAgICAgIHRpdGxlOiBkYXRhW2ldLnRpdGxlLFxyXG4gICAgICAgICAgdHlwZTogZGF0YVtpXS50eXBlID8gZGF0YVtpXS50eXBlIDogXCJcIixcclxuICAgICAgICAgIGl0ZW06IGl0ZW1BcnJcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVzZXRSaWdodChuZXdEYXRhKTtcclxuICAgIH0sXHJcbiAgICAvLyDln47luILlrprkvY1cclxuICAgIGxvY2F0aW9uTXQoKSB7XHJcbiAgICAgIC8vIFRPRE8g5pqC5pe25rKh5pyJ5a6e546wIOWumuS9jeiHquW3seeahOWfjuW4gu+8jOmcgOimgeW8leWFpeesrOS4ieaWuWFwaVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0pXHJcbiJdfQ==