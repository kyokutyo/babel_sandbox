var x = [1, 2, 3];
var y = ['a', 'b'];
var z = [7, 8, ...x, 9];

function foo(...args) {
    console.log(args);
}

foo(z, y);
foo(...z, ...y);
