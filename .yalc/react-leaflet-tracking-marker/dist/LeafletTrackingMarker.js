"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LeafletTrackingMarker = void 0;
var _core = require("@react-leaflet/core");
var _BaseMarker = require("./BaseMarker");
var _excluded = ["position", "previousPosition", "rotationAngle"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var defaultPosition = [0, 0];
var computeBearing = function computeBearing() {
  var previousPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPosition;
  var nexPosition = arguments.length > 1 ? arguments[1] : undefined;
  var bearing = Math.atan2(nexPosition[0] - previousPosition[0], nexPosition[1] - previousPosition[1]);
  bearing = bearing * (180 / Math.PI);
  bearing = (bearing + 360) % 360;
  bearing = 360 - bearing;
  return bearing;
};
var createMarker = function createMarker(_ref, ctx) {
  var position = _ref.position,
    previousPosition = _ref.previousPosition,
    rotationAngle = _ref.rotationAngle,
    options = _objectWithoutProperties(_ref, _excluded);
  var bearingAngle = rotationAngle !== null && rotationAngle !== void 0 ? rotationAngle : computeBearing(previousPosition, position);
  var instance = new _BaseMarker.BaseMarker(position, _objectSpread(_objectSpread({}, options), {}, {
    bearingAngle: bearingAngle
  }));
  return {
    instance: instance,
    context: _objectSpread(_objectSpread({}, ctx), {}, {
      overlayContainer: instance
    })
  };
};
var updateMarker = function updateMarker(marker, props, prevProps) {
  var position = props.position,
    previousPosition = props.previousPosition,
    duration = props.duration,
    keepAtCenter = props.keepAtCenter,
    icon = props.icon,
    zIndexOffset = props.zIndexOffset,
    opacity = props.opacity,
    draggable = props.draggable,
    rotationOrigin = props.rotationOrigin,
    rotationAngle = props.rotationAngle;

  // console.log("마커: ",marker.dragging)
  // console.log("draggable: ",draggable)
  // console.log("prevProps: ",prevProps.draggable)

  if (prevProps.position !== position && typeof duration == 'number') {
    marker.slideTo(position, {
      duration: duration,
      keepAtCenter: keepAtCenter
    });
  }
  if (icon && icon !== prevProps.icon) {
    marker.setIcon(icon);
  }
  if (zIndexOffset && zIndexOffset !== prevProps.zIndexOffset) {
    marker.setZIndexOffset(zIndexOffset);
  }
  if (opacity && opacity !== prevProps.opacity) {
    marker.setOpacity(opacity);
  }
  if (marker.dragging && draggable !== prevProps.draggable) {
    if (draggable === true) {
      marker.dragging.enable();
    } else {
      marker.dragging.disable();
    }
  }
  if (rotationAngle !== null && rotationAngle !== void 0) {
    marker.setRotationAngle(rotationAngle);
  } else if ((previousPosition === null || previousPosition === void 0 ? void 0 : previousPosition[0]) !== position[0] && (previousPosition === null || previousPosition === void 0 ? void 0 : previousPosition[1]) !== position[1]) {
    var bearingAngle = computeBearing(previousPosition, position);
    marker.setRotationAngle(bearingAngle);
  }
  if (rotationOrigin !== prevProps.rotationOrigin) {
    marker.setRotationOrigin(rotationOrigin);
  }
};
var LeafletTrackingMarker = exports.LeafletTrackingMarker = (0, _core.createLayerComponent)(createMarker, updateMarker);