"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _index = _interopRequireDefault(require("epubjs/lib/index"));
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
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
// MTL removed - line does not seem like a requirement any more (and was causing an error)
// global.ePub = Epub; // Fix for v3 branch of epub.js -> needs ePub to by a global var
var EpubView = /*#__PURE__*/function (_Component) {
  _inherits(EpubView, _Component);
  var _super = _createSuper(EpubView);
  function EpubView(props) {
    var _this;
    _classCallCheck(this, EpubView);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "onLocationChange", function (loc) {
      var _this$props = _this.props,
        location = _this$props.location,
        locationChanged = _this$props.locationChanged;
      var newLocation = loc && loc.start;
      if (location !== newLocation) {
        _this.location = newLocation;
        locationChanged && locationChanged(newLocation);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (_ref) {
      var key = _ref.key;
      key && key === 'ArrowRight' && _this.prevPage();
      key && key === 'ArrowLeft' && _this.nextPage();
    });
    _this.state = {
      isLoaded: false,
      toc: []
    };
    _this.viewerRef = /*#__PURE__*/_react.default.createRef();
    _this.location = props.location;
    _this.book = _this.rendition = _this.prevPage = _this.nextPage = null;
    return _this;
  }
  _createClass(EpubView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initBook(true);
      document.addEventListener('keyup', this.handleKeyPress, false);
    }
  }, {
    key: "initBook",
    value: function initBook() {
      var _this2 = this;
      var _this$props2 = this.props,
        url = _this$props2.url,
        tocChanged = _this$props2.tocChanged,
        epubInitOptions = _this$props2.epubInitOptions;
      if (this.book) {
        this.book.destroy();
      }
      this.book = new _index.default(url, epubInitOptions);
      this.book.loaded.navigation.then(function (_ref2) {
        var toc = _ref2.toc;
        _this2.setState({
          isLoaded: true,
          toc: toc
        }, function () {
          tocChanged && tocChanged(toc);
          _this2.initReader();
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.book) {
        this.book.destroy();
      }
      this.book = this.rendition = this.prevPage = this.nextPage = null;
      document.removeEventListener('keyup', this.handleKeyPress, false);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !this.state.isLoaded || nextProps.location !== this.props.location || nextProps.location !== this.props.location;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location && this.location !== this.props.location) {
        this.rendition.display(this.props.location);
      }
      if (prevProps.url !== this.props.url) {
        this.initBook();
      }
    }
  }, {
    key: "initReader",
    value: function initReader() {
      var _this3 = this;
      var toc = this.state.toc;
      var _this$props3 = this.props,
        location = _this$props3.location,
        epubOptions = _this$props3.epubOptions,
        getRendition = _this$props3.getRendition;
      var node = this.viewerRef.current;
      this.rendition = this.book.renderTo(node, _objectSpread({
        contained: true,
        width: '100%',
        height: '100%'
      }, epubOptions));
      this.prevPage = function () {
        _this3.rendition.prev();
      };
      this.nextPage = function () {
        _this3.rendition.next();
      };
      this.registerEvents();
      getRendition && getRendition(this.rendition);
      if (typeof location === 'string' || typeof location === 'number') {
        this.rendition.display(location);
      } else if (toc.length > 0 && toc[0].href) {
        this.rendition.display(toc[0].href);
      } else {
        this.rendition.display();
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this$props4 = this.props,
        handleKeyPress = _this$props4.handleKeyPress,
        handleTextSelected = _this$props4.handleTextSelected;
      this.rendition.on('locationChanged', this.onLocationChange);
      this.rendition.on('keyup', handleKeyPress || this.handleKeyPress);
      if (handleTextSelected) {
        this.rendition.on('selected', handleTextSelected);
      }
    }
  }, {
    key: "renderBook",
    value: function renderBook() {
      var epubViewStyles = this.props.epubViewStyles;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.viewerRef,
        style: epubViewStyles.view
      });
    }
  }, {
    key: "render",
    value: function render() {
      var isLoaded = this.state.isLoaded;
      var _this$props5 = this.props,
        loadingView = _this$props5.loadingView,
        epubViewStyles = _this$props5.epubViewStyles;
      return /*#__PURE__*/_react.default.createElement("div", {
        style: epubViewStyles.viewHolder
      }, isLoaded && this.renderBook() || loadingView);
    }
  }]);
  return EpubView;
}(_react.Component);
EpubView.defaultProps = {
  loadingView: null,
  locationChanged: null,
  tocChanged: null,
  epubViewStyles: _style.default,
  epubOptions: {},
  epubInitOptions: {}
};
EpubView.propTypes = {
  url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(ArrayBuffer)]),
  loadingView: _propTypes.default.element,
  location: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  locationChanged: _propTypes.default.func,
  tocChanged: _propTypes.default.func,
  epubViewStyles: _propTypes.default.object,
  epubInitOptions: _propTypes.default.object,
  epubOptions: _propTypes.default.object,
  getRendition: _propTypes.default.func,
  handleKeyPress: _propTypes.default.func,
  handleTextSelected: _propTypes.default.func
};
var _default = EpubView;
exports.default = _default;