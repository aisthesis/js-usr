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
        },

        /**
         * Doesn't modify the caller but returns the new point
         * determined by the given offset vector
         */
        offset: function(vector) {
            return new _c.draw.Point(this.x + vector.x, this.y + vector.y);
        },

        /**
         * Modifies the caller by the given offset vector
         */
        move: function(vector) {
            this.x += vector.x;
            this.y += vector.y;
        }
    });

    _c.draw.Vector = _c.Base.extend({
        init: function(x, y) {
            this.x = x;
            this.y = y;
        },

        plus: function(vector) {
            return new _c.draw.Vector(this.x + vector.x, this.y + vector.y);
        },

        minus: function(vector) {
            return new _c.draw.Vector(this.x - vector.x, this.y - vector.y);
        }
    });
})(_c);
