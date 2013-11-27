/**
 * Regular convex polygon defined by
 * radius, center and number of sides.
 *
 * Dependencies:
 * extend.js
 * shape.js
 * point.js
 */

var _c = _c || {};

(function(_c) {
    "use strict";

    _c.draw = _c.draw || {};
    _c.draw.Rectangle = _c.draw.Shape.extend({
        init: function(params) {
            this._super(params);
            // required
            this.corner = params.corner;
            // default to 0
            this.width = params.width || 0;
            this.height = params.height || 0;
        },

        buildPath: function(context) {
            var width = Math.abs(this.width),
                height = Math.abs(this.height),
                x = this.width >= 0 ? this.corner.x : this.corner.x + this.width,
                y = this.height >= 0 ? this.corner.y : this.corner.y + this.height;

            context.beginPath();
            context.rect(x, y, width, height);
            context.closePath();
        },
        
        contains: function(point) {
            var xMin = this.width >= 0 ? this.corner.x : this.corner.x + this.width,
                yMin = this.height >= 0 ? this.corner.y : this.corner.y + this.height;

            if (point.x < xMin || xMin + Math.abs(this.width) < point.x) { return false; }
            if (point.y < yMin || yMin + Math.abs(this.height) < point.y) { return false; }
            return true;
        }
    });
})(_c);
