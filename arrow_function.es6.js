'use strict';

function cuonter() {
    this.count = 0;
    setInterval(() => this.count++, 1000);
}
