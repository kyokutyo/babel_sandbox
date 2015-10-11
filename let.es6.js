'use strict';

var x = 1;
if (true) {
    let x = 3;
    if (true) {
        let x = 5;
        if (true) {
            let x = 7;
        }
    }
}
console.log(x); // 1
