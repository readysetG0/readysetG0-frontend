"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseMarker = void 0;
var _leaflet = _interopRequireDefault(require("leaflet"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var oldIE = _leaflet["default"].DomUtil.TRANSFORM === 'msTransform';
_leaflet["default"].BaseMarker = _leaflet["default"].Marker.extend({
  options: {
    bearingAngle: 0,
    rotationOrigin: ''
  },
  initialize: function initialize(latlng, options) {
    _leaflet["default"].Marker.prototype.initialize.call(this);
    _leaflet["default"].Util.setOptions(this, options);
    this._latlng = _leaflet["default"].latLng(latlng);
    var iconOptions = this.options.icon && this.options.icon.options;
    var iconAnchor = iconOptions && this.options.icon.options.iconAnchor;
    if (iconAnchor) {
      iconAnchor = iconAnchor[0] + 'px ' + iconAnchor[1] + 'px';
    }
    this.options.rotationOrigin = this.options.rotationOrigin || iconAnchor || 'center';
    this.options.bearingAngle = this.options.bearingAngle || 0;

    // Ensure marker keeps rotated during dragging
    this.on('drag', function (e) {
      e.target._applyRotation();
    });
    this.on('move', this.slideCancel, this);
    this._slideToUntil = 0;
    this._slideToDuration = 1000;
    this._slideToLatLng = [0, 0];
    this._slideFromLatLng = [0, 0];
    this._slideKeepAtCenter = false;
    this._slideDraggingWasAllowed = false;
    this._slideFrame = 0;
  },
  slideTo: function slideTo(latlng, options) {
    if (!this._map) return;
    this._slideToDuration = options.duration;
    this._slideToUntil = performance.now() + options.duration;
    this._slideFromLatLng = this.getLatLng();
    this._slideToLatLng = latlng;
    this._slideKeepAtCenter = !!options.keepAtCenter;
    this._slideDraggingWasAllowed = this._slideDraggingWasAllowed !== undefined ? this._slideDraggingWasAllowed : this._map.dragging.enabled();
    console.log("디스맵드래깅 : ", this._map.dragging._enabled);
    if (this._slideKeepAtCenter) {
      // this._map.dragging.disable()
      // this._map.doubleClickZoom.disable()
      this._map.options.touchZoom = 'center';
      this._map.options.scrollWheelZoom = 'center';
    }
    this.fire('movestart');
    this._slideTo();
    return this;
  },
  _slideTo: function _slideTo() {
    if (!this._map) return;
    var remaining = this._slideToUntil - performance.now();
    if (remaining < 0) {
      this.setLatLng(this._slideToLatLng);
      this.fire('moveend');
      if (this._slideDraggingWasAllowed) {
        this._map.dragging.enable();
        this._map.doubleClickZoom.enable();
        this._map.options.touchZoom = true;
        this._map.options.scrollWheelZoom = true;
      }
      this._slideDraggingWasAllowed = false;
      return this;
    }
    var startPoint = this._map.latLngToContainerPoint(this._slideFromLatLng);
    var endPoint = this._map.latLngToContainerPoint(this._slideToLatLng);
    var percentDone = (this._slideToDuration - remaining) / this._slideToDuration;
    var currPoint = endPoint.multiplyBy(percentDone).add(startPoint.multiplyBy(1 - percentDone));
    var currLatLng = this._map.containerPointToLatLng(currPoint);
    this.setLatLng(currLatLng);
    if (this._slideKeepAtCenter) {
      this._map.panTo(currLatLng, {
        animate: false
      });
    }
    this._slideFrame = _leaflet["default"].Util.requestAnimFrame(this._slideTo, this);
  },
  // 🍂method slideCancel(): this
  // Cancels the sliding animation from `slideTo`, if applicable.
  slideCancel: function slideCancel() {
    _leaflet["default"].Util.cancelAnimFrame(this._slideFrame);
  },
  onRemove: function onRemove(map) {
    _leaflet["default"].Marker.prototype.onRemove.call(this, map);
  },
  _setPos: function _setPos(pos) {
    _leaflet["default"].Marker.prototype._setPos.call(this, pos);
    this._applyRotation();
  },
  _applyRotation: function _applyRotation() {
    if (this.options.bearingAngle) {
      this._icon.style[_leaflet["default"].DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin;
      if (oldIE) {
        // for IE 9, use the 2D rotation
        this._icon.style[_leaflet["default"].DomUtil.TRANSFORM] = 'rotate(' + this.options.bearingAngle + 'deg)';
      } else {
        // for modern browsers, prefer the 3D accelerated version
        this._icon.style[_leaflet["default"].DomUtil.TRANSFORM] += ' rotateZ(' + this.options.bearingAngle + 'deg)';
      }
    }
  },
  setRotationAngle: function setRotationAngle(angle) {
    this.options.bearingAngle = angle;
    this.update();
    return this;
  },
  setRotationOrigin: function setRotationOrigin(origin) {
    this.options.rotationOrigin = origin;
    this.update();
    return this;
  }
});
_leaflet["default"].baseMarker = function (latlng, options) {
  return new _leaflet["default"].BaseMarker(latlng, options);
};
var BaseMarker = exports.BaseMarker = _leaflet["default"].BaseMarker;