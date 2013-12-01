var _c = _c || {};

(function(_c) {
    'use strict';
    var itemsArray = [0, 1, 2],
        itemsList;

    _c.utils = _c.utils || {};

    QUnit.testStart(function(details) {
        itemsList = new _c.utils.LinkedList();
    });

    function addItems() {
        itemsArray.forEach(function(val) {
            itemsList.add(val);
        });
    };

    function pushItems() {
        itemsArray.forEach(function(val) {
            itemsList.push(val);
        });
    };

    test('LinkedList#add()', function() {
        addItems();
        strictEqual(itemsList.length, itemsArray.length, 'list has correct length');
        strictEqual(itemsList.head.item, itemsArray[0], 'correct item at head of list');
        strictEqual(itemsList.tail.item, itemsArray[itemsArray.length - 1], 'correct item at end of list');
    });

    test('LinkedList#pop()', function() {
        var expectedLength = itemsArray.length;

        addItems();
        itemsArray.forEach(function(val) {
            strictEqual(itemsList.length, expectedLength--, 'list has correct length');
            strictEqual(itemsList.pop(), val, 'correct value removed from list');
        });
        strictEqual(itemsList.length, 0, 'length 0 after all items removed');
        throws(function() {
                itemsList.pop();
            },
            _c.error.NoSuchElementException,
            'raised error calling pop() on empty list is an instance of NoSuchElementException'
        );
        throws(function() {
                itemsList.pop();
            },
            Error,
            'raised error calling pop() on empty list is an instance of Error'
        );
    });

    test('LinkedList#push()', function() {
        pushItems();
        strictEqual(itemsList.length, itemsArray.length, 'list has correct length');
        strictEqual(itemsList.head.item, itemsArray[itemsArray.length - 1], 'correct item at head of list');
        strictEqual(itemsList.tail.item, itemsArray[0], 'correct item at tail of list');
    });

    test('LinkedList#remove()', function() {
        var expectedLength = itemsArray.length;

        pushItems();
        itemsArray.forEach(function(val) {
            strictEqual(itemsList.length, expectedLength--, 'list has correct length');
            strictEqual(itemsList.remove(), val, 'correct value removed from list');
        });
        strictEqual(itemsList.length, 0, 'length 0 after all items removed');
        throws(function() {
                itemsList.remove();
            },
            _c.error.NoSuchElementException,
            'raised error calling remove() on empty list is an instance of NoSuchElementException'
        );
        throws(function() {
                itemsList.remove();
            },
            Error,
            'raised error calling remove() on empty list is an instance of Error'
        );
    });
})(_c);
