'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var x = [1, 2, 3];
var y = ['a', 'b'];
var z = [7, 8].concat(x, [9]);

function foo() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log(args);
}

foo(z, y);
foo.apply(undefined, _toConsumableArray(z).concat(y));
