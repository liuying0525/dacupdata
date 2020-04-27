'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 详情页 车型切换滑块


var Sidebar_ck = function (_wepy$component) {
  _inherits(Sidebar_ck, _wepy$component);

  function Sidebar_ck() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Sidebar_ck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Sidebar_ck.__proto__ || Object.getPrototypeOf(Sidebar_ck)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      json_zhi: [],
      // 车型数据
      json_val: [],
      sidebar_: false
    }, _this.props = {}, _this.methods = {
      // 确认后隐藏当前 把值传给之前的页面
      click_btn: function click_btn(e) {
        console.log(e);
        this.sidebar_ = false;
        this.$emit('childFn', e);
      },

      //      关闭
      clear_yy: function clear_yy() {
        this.sidebar_ = false;
      },
      // 详情页调用的数据
      someMethod: function someMethod(e) {
        this.sidebar_ = true;
        console.log(1111111);
        console.log(e);
        this.json_val = e.data;
        console.log(this.json_val);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Sidebar_ck, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Sidebar_ck;
}(_wepy2.default.component);

exports.default = Sidebar_ck;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXJfY2suanMiXSwibmFtZXMiOlsiU2lkZWJhcl9jayIsImRhdGEiLCJqc29uX3poaSIsImpzb25fdmFsIiwic2lkZWJhcl8iLCJwcm9wcyIsIm1ldGhvZHMiLCJjbGlja19idG4iLCJlIiwiY29uc29sZSIsImxvZyIsIiRlbWl0IiwiY2xlYXJfeXkiLCJzb21lTWV0aG9kIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUU7Ozs7Ozs7Ozs7O0FBREY7OztJQUV1QkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxJLEdBQU87QUFDTEMsZ0JBQVMsRUFESjtBQUVMO0FBQ0FDLGdCQUFTLEVBSEo7QUFJTEMsZ0JBQVM7QUFKSixLLFFBTVBDLEssR0FBTyxFLFFBR1BDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEscUJBRUVDLENBRkYsRUFFSTtBQUNWQyxnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsYUFBS0osUUFBTCxHQUFnQixLQUFoQjtBQUNBLGFBQUtPLEtBQUwsQ0FBVyxTQUFYLEVBQXFCSCxDQUFyQjtBQUNELE9BTk87O0FBT2Q7QUFDTUksZ0JBQVMsb0JBQVU7QUFDakIsYUFBS1IsUUFBTCxHQUFnQixLQUFoQjtBQUNELE9BVk87QUFXUjtBQUNBUyxrQkFBVyxvQkFBU0wsQ0FBVCxFQUFXO0FBQ3BCLGFBQUtKLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQUssZ0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FELGdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSxhQUFLTCxRQUFMLEdBQWdCSyxFQUFFUCxJQUFsQjtBQUNBUSxnQkFBUUMsR0FBUixDQUFZLEtBQUtQLFFBQWpCO0FBQ0Q7QUFsQk8sSzs7Ozs7NkJBb0JGLENBRVA7Ozs7RUFoQ3FDVyxlQUFLQyxTOztrQkFBeEJmLFUiLCJmaWxlIjoic2lkZWJhcl9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vLyDor6bmg4XpobUg6L2m5Z6L5YiH5o2i5ruR5Z2XXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlYmFyX2NrIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAganNvbl96aGk6W10sXHJcbiAgICAgIC8vIOi9puWei+aVsOaNrlxyXG4gICAgICBqc29uX3ZhbDpbXSxcclxuICAgICAgc2lkZWJhcl86ZmFsc2VcclxuICAgIH07XHJcbiAgICBwcm9wcyA9e1xyXG5cclxuICAgIH07XHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAvLyDnoa7orqTlkI7pmpDol4/lvZPliY0g5oqK5YC85Lyg57uZ5LmL5YmN55qE6aG16Z2iXHJcbiAgICAgIGNsaWNrX2J0bihlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB0aGlzLnNpZGViYXJfID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hpbGRGbicsZSk7XHJcbiAgICAgIH0sXHJcbi8vICAgICAg5YWz6ZetXHJcbiAgICAgIGNsZWFyX3l5OmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5zaWRlYmFyXyA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDor6bmg4XpobXosIPnlKjnmoTmlbDmja5cclxuICAgICAgc29tZU1ldGhvZDpmdW5jdGlvbihlKXtcclxuICAgICAgICB0aGlzLnNpZGViYXJfID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygxMTExMTExKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICB0aGlzLmpzb25fdmFsID0gZS5kYXRhO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuanNvbl92YWwpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgb25Mb2FkKCl7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuIl19