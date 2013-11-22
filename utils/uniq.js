var _c = _c || {};

(function(_c) {
    "use strict";
    _c.utils = _c.utils || {};

    _c.utils.uniq = function(items) {
        var ret = [],
            i;

        for (i = 0; i < items.length; i++) {
            if (items.indexOf(items[i]) === i) {
                ret.push(items[i]);
            }
        }
        return ret;
    };
})(_c);
