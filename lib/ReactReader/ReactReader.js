"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactSwipeable = require("react-swipeable");
var _ = require("..");
var _style = _interopRequireDefault(require("./style"));
var _excluded = ["children"],
  _excluded2 = ["title", "showToc", "loadingView", "readerStyles", "locationChanged", "swipeable", "epubViewStyles"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Swipeable = function Swipeable(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var handlers = (0, _reactSwipeable.useSwipeable)(props);
  return /*#__PURE__*/_react.default.createElement("div", handlers, children);
};
var TocItem = /*#__PURE__*/function (_PureComponent) {
  _inherits(TocItem, _PureComponent);
  var _super = _createSuper(TocItem);
  function TocItem() {
    var _this;
    _classCallCheck(this, TocItem);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "setLocation", function () {
      _this.props.setLocation(_this.props.href);
    });
    return _this;
  }
  _createClass(TocItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        label = _this$props.label,
        styles = _this$props.styles,
        subitems = _this$props.subitems;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
        onClick: this.setLocation,
        style: styles
      }, label), subitems && subitems.length > 0 && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          paddingLeft: 10
        }
      }, subitems.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement(TocItem, _extends({
          key: i
        }, _this2.props, item));
      })));
    }
  }]);
  return TocItem;
}(_react.PureComponent);
TocItem.propTypes = {
  label: _propTypes.default.string,
  href: _propTypes.default.string,
  setLocation: _propTypes.default.func,
  styles: _propTypes.default.object
};
var ReactReader = /*#__PURE__*/function (_PureComponent2) {
  _inherits(ReactReader, _PureComponent2);
  var _super2 = _createSuper(ReactReader);
  function ReactReader(props) {
    var _this3;
    _classCallCheck(this, ReactReader);
    _this3 = _super2.call(this, props);
    _defineProperty(_assertThisInitialized(_this3), "toggleToc", function () {
      _this3.setState({
        expandedToc: !_this3.state.expandedToc
      });
    });
    _defineProperty(_assertThisInitialized(_this3), "next", function () {
      var node = _this3.readerRef.current;
      node.prevPage();
    });
    _defineProperty(_assertThisInitialized(_this3), "prev", function () {
      var node = _this3.readerRef.current;
      node.nextPage();
    });
    _defineProperty(_assertThisInitialized(_this3), "onTocChange", function (toc) {
      var tocChanged = _this3.props.tocChanged;
      _this3.setState({
        toc: toc
      }, function () {
        return tocChanged && tocChanged(toc);
      });
    });
    _defineProperty(_assertThisInitialized(_this3), "setLocation", function (loc) {
      var locationChanged = _this3.props.locationChanged;
      _this3.setState({
        expandedToc: false
      }, function () {
        return locationChanged && locationChanged(loc);
      });
    });
    _this3.readerRef = /*#__PURE__*/_react.default.createRef();
    _this3.state = {
      expandedToc: false,
      toc: false
    };
    return _this3;
  }
  _createClass(ReactReader, [{
    key: "renderToc",
    value: function renderToc() {
      var _this4 = this;
      var _this$state = this.state,
        toc = _this$state.toc,
        expandedToc = _this$state.expandedToc;
      var readerStyles = this.props.readerStyles;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.tocArea
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.toc
      }, toc.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement(TocItem, _extends({}, item, {
          key: i,
          setLocation: _this4.setLocation,
          styles: readerStyles.tocAreaButton
        }));
      }))), expandedToc && /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.tocBackground,
        onClick: this.toggleToc
      }));
    }
  }, {
    key: "renderTocToggle",
    value: function renderTocToggle() {
      var expandedToc = this.state.expandedToc;
      var readerStyles = this.props.readerStyles;
      return /*#__PURE__*/_react.default.createElement("button", {
        style: Object.assign({}, readerStyles.tocButton, expandedToc ? readerStyles.tocButtonExpanded : {}),
        onClick: this.toggleToc
      }, /*#__PURE__*/_react.default.createElement("span", {
        style: Object.assign({}, readerStyles.tocButtonBar, readerStyles.tocButtonBarTop)
      }), /*#__PURE__*/_react.default.createElement("span", {
        style: Object.assign({}, readerStyles.tocButtonBar, readerStyles.tocButtonBottom)
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        title = _this$props2.title,
        showToc = _this$props2.showToc,
        loadingView = _this$props2.loadingView,
        readerStyles = _this$props2.readerStyles,
        locationChanged = _this$props2.locationChanged,
        swipeable = _this$props2.swipeable,
        epubViewStyles = _this$props2.epubViewStyles,
        props = _objectWithoutProperties(_this$props2, _excluded2);
      var _this$state2 = this.state,
        toc = _this$state2.toc,
        expandedToc = _this$state2.expandedToc;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.container
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: Object.assign({}, readerStyles.readerArea, expandedToc ? readerStyles.containerExpanded : {})
      }, showToc && this.renderTocToggle(), /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.titleArea
      }, title), /*#__PURE__*/_react.default.createElement(Swipeable, {
        onSwipedRight: this.prev,
        onSwipedLeft: this.next,
        trackMouse: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.reader
      }, /*#__PURE__*/_react.default.createElement(_.EpubView, _extends({
        ref: this.readerRef,
        loadingView: loadingView,
        epubViewStyles: epubViewStyles
      }, props, {
        tocChanged: this.onTocChange,
        locationChanged: locationChanged
      })), swipeable && /*#__PURE__*/_react.default.createElement("div", {
        style: readerStyles.swipeWrapper
      }))), /*#__PURE__*/_react.default.createElement("button", {
        style: Object.assign({}, readerStyles.arrow, readerStyles.prev),
        onClick: this.prev
      }, "\u2039"), /*#__PURE__*/_react.default.createElement("button", {
        style: Object.assign({}, readerStyles.arrow, readerStyles.next),
        onClick: this.next
      }, "\u203A")), showToc && toc && this.renderToc());
    }
  }]);
  return ReactReader;
}(_react.PureComponent);
ReactReader.defaultProps = {
  loadingView: /*#__PURE__*/_react.default.createElement("div", {
    style: _style.default.loadingView
  }, "Loading\u2026"),
  locationChanged: null,
  tocChanged: null,
  showToc: true,
  readerStyles: _style.default
};
ReactReader.propTypes = {
  title: _propTypes.default.string,
  loadingView: _propTypes.default.element,
  showToc: _propTypes.default.bool,
  locationChanged: _propTypes.default.func,
  tocChanged: _propTypes.default.func,
  readerStyles: _propTypes.default.object,
  epubViewStyles: _propTypes.default.object,
  swipeable: _propTypes.default.bool
};
var _default = ReactReader;
exports.default = _default;