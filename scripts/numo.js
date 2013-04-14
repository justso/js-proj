/*global $, console */
/*jslint es5:true, white:false */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
/*
    loop to add
        number primitives and
        number objects
    compare times
*/

var Avg, Sum, X = {
    log: function() {
        console.log.apply(console, arguments);
    },
    loop: function(nom, num, id) {
        num = (num || 0);
        id = 'adding ' + (id || 'zeros ') + ' nums';

        var rep = 1e+6,
            tot = num,
            mss = $.now();

        console.time(id);
        while (--rep > 0) { // 1 million times
            tot += num;
        }
        console.timeEnd(id);
        this.average(nom, $.now() - mss);
    },
    round: function(num) {
        return Math.round(num);
    },
    average: function(nom, num) {
        Sum[nom] = num;
        Avg[nom].add(num);
        X.log(nom, num, +Avg[nom]);
    }
};
Avg = {
    nil: new Average(),
    num: new Average(),
    obj: new Average(),
};
Sum = {
    nil: 0,
    num: 0,
    obj: 0,
};

function init() {
    var num = 9,
        obj = new Number(9);
    X.loop('nil'); //                   prime the pump
    X.loop('num', num, 'nines9'); //    run primitives
    X.loop('nil'); //                   prime the pump
    X.loop('obj', obj, 'object'); //    run objects
    X.loop('nil'); //                   prime the pump
    num = X.round(Sum.obj / Sum.num);
    X.log('Adding objects took ' + num + 'x longer than primitives!');
}

$(init);
$(init);
$(init);
