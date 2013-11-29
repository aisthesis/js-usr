/**
 * Dependencies:
 * extend.js
 * point.js
 */

var _c = _c || {};

(function(_c) {
    "use strict";

    _c.draw = _c.draw || {};
    /**
     * Convert window coordinates to canvas coordinates. Providing
     * the optional point parameter improves performance if the
     * desired point already exists.
     * @param {Object} canvas - canvas relative to which coordinates
     * are to be determined
     * @param {Number} x - window x coordinate
     * @param {Number} y - window y coordinate
     * @param {Point} [point] - point in which to store result
     * @returns {Point}
     */
    _c.draw.windowToCanvas = function(canvas, x, y, point) {
        var bbox = canvas.getBoundingClientRect();

        if (point) {
            point.x = x - bbox.left;
            point.y = y - bbox.top;
            return point;
        }
        return new _c.draw.Point(x - bbox.left, y - bbox.top);
    }
})(_c);
