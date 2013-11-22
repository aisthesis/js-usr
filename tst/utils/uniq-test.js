var _c = _c || {};

(function(_c) {
    _c.utils = _c.utils || {};

    test( "dedupe test on array", function() {
        var arr = ['cat', 'dog', 'man', 'cat', 'mouse', 'dog'],
            result = _c.utils.uniq(arr),
            i;

        strictEqual(result.length, arr.length - 2, "correct number of elements eliminated");
        for (i = 0; i < arr.length; i++) {
            ok(result.indexOf(arr[i]) > -1, "result contains all items in original array");
        }
    });
    test( "dedupe test on string", function() {
        var testcase = 'abcabcdef',
            result = _c.utils.uniq(testcase),
            i;

        strictEqual(result.length, testcase.length - 3, "correct number of characters eliminated");
        for (i = 0; i < testcase.length; i++) {
            ok(result.indexOf(testcase[i]) > -1, "result contains all items in original string");
        }
    });
})(_c);
