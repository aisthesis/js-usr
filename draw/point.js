var _c = _c || {};

(function(_c) {
    "use strict";

    _c.draw = _c.draw || {};
    _c.draw.Point = _c.Base.extend({
        init: function(x, y) {
            this.x = x;
            this.y = y;
        },

        distanceTo: function(point) {
            var diffX = this.x - point.x,
                diffY = this.y - point.y;

            return Math.sqrt(diffX * diffX + diffY * diffY);
        }
    });
})(_c);
