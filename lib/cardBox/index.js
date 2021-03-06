"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index.less"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CardBox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CardBox, _React$Component);

  function CardBox() {
    _classCallCheck(this, CardBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardBox).apply(this, arguments));
  }

  _createClass(CardBox, [{
    key: "render",
    value: function render() {
      var _ClassNames, _ClassNames2;

      var _this$props = this.props,
          content = _this$props.content,
          cardTitleIcon = _this$props.cardTitleIcon,
          cardTitle = _this$props.cardTitle,
          cardCenterBottom = _this$props.cardCenterBottom,
          disabled = _this$props.disabled,
          CardBoxDefault = _this$props.CardBoxDefault;
      return _react.default.createElement("div", {
        className: _index.default['card']
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(_index.default['card-Title'], (_ClassNames = {}, _defineProperty(_ClassNames, _index.default["borderBottom"], cardCenterBottom), _defineProperty(_ClassNames, _index.default["CardBoxDefault"], CardBoxDefault), _ClassNames))
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(_index.default["name"], (_ClassNames2 = {}, _defineProperty(_ClassNames2, _index.default["border_left"], cardTitleIcon), _defineProperty(_ClassNames2, _index.default['disabled'], disabled), _ClassNames2))
      }, _react.default.createElement("span", null, cardTitle))), _react.default.createElement("div", {
        className: (0, _classnames.default)(_index.default['card-content'], _defineProperty({}, _index.default["noPadding"], this.props.noPadding))
      }, content));
    }
  }]);

  return CardBox;
}(_react.default.Component);

exports.default = CardBox;