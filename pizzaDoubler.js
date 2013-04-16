/*jslint es5:true, white:false */
/*global $, console, window, $$ */
(function pizzaDoubler() {
    var _d, _a, _t, Glob = window;

    function calculateArea(d) {
        return Math.PI * Math.pow(d / 2, 2);
    }

    function stop() {
        Glob.clearInterval(_t);
        _a = 0;
    }

    function trim(val, dec) {
        var lift = Math.pow(10, dec || 0);
        return Math.round(val * lift, dec || 0) / lift;
    }

    function display() {
        _a = calculateArea(_d);
        if (_a > 1000) {
            return stop();
        }
        console.log(trim(_d), trim(_a));
    }

    function start(n) {
        _d = n;
        display(_d);
    }

    function ask() {
        var val = Glob.prompt("Starting with what number?", 12);
        if (val) {
            start(+val);
        }
        return val;
    }

    function grow() {
        _d = _d ? _d * 1.01 : 1;
        return _d;
    }

    function check() {
        if (!_a && !ask()) {
            return stop();
        }
        var a = calculateArea(grow());
        if (a > (2 * (_a || 0))) {
            display();
        }
    }
    _t = Glob.setInterval(check, 3);
}());
