'use strict';

var x = 1;
if (true) {
    var _x = 3;
    if (true) {
        var _x2 = 5;
        if (true) {
            var _x3 = 7;
        }
    }
}
console.log(x); // 1
