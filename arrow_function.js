'use strict';

function cuonter() {
    var _this = this;

    this.count = 0;
    setInterval(function () {
        return _this.count++;
    }, 1000);
}
