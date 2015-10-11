'use strict';

function foo() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    console.log(args);
}
foo(1, '2', [3, 4, 5]);
foo();
