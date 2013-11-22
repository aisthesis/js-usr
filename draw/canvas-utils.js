/**
 * Dependencies:
 * extend.js
 * point.js
 */

var _c = _c || {};

(function(_c) {
    "use strict";

    _c.draw = _c.draw || {};
    _c.draw.windowToCanvas = function(canvas, x, y) {
        var bbox = canvas.getBoundingClientRect();

        return new _c.draw.Point(x - bbox.left, y - bbox.top);
    }
})(_c);
