/*jslint es5:true, white:false */
/*globals $, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var B = $.now(),
    W = (W || window),
    C = (W.C || W.console),
    Fn = {},
    RTN = {},
    DFR, OBJ;

Fn.random = function (max, min) {
    min = min || 0;
    return Math.floor(min + Math.random() * (max - min));
};
Fn.chime = function () {
    C.debug('Hey, guys it’s ' + ($.now() - B));
};
Fn.log = function (x) {
    C.debug(x);
};
Fn.hello = function (name) {
    C.debug('Hello ' + name);
};
Fn.request = function (fn) {
    var urgency = Fn.random(100, 1000);
    W.setTimeout((fn || Fn.chime), urgency);
    return urgency;
};
Fn.status = function (dfr, sec) {
    W.setTimeout(function working() {
        if (dfr.state() === 'pending') {
            dfr.notify($.now());
            W.setTimeout(working, sec * 1000);
        }
    }, 0);
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

Fn.queue = function (f, n) {
    W.setTimeout(f, n || 1);
};
Fn.linger = function (n) {
    var soon = $.now() + 3000;
    while ($.now() < soon) {
        $.noop();
    }
    C.debug('done');
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
