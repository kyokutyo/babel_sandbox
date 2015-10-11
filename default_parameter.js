'use strict';

function foo(name) {
    var version = arguments.length <= 1 || arguments[1] === undefined ? 6 : arguments[1];

    console.log(name + version);
}
foo("ES");
