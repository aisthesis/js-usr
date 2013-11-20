var codeMelon = codeMelon || {};

(function(_c) {
    _c.utils = _c.utils || {};

    test( "dedupe test", function() {
        var arr = ['cat', 'dog', 'man', 'cat', 'mouse', 'dog'],
            result = _c.utils.uniq(arr),
            i;

        strictEqual(result.length, arr.length - 2, "correct number of elements eliminated");
        for (i = 0; i < arr.length; i++) {
            ok(result.indexOf(arr[i]) > -1, "result contains all items in original array");
        }
    });
})(codeMelon);
