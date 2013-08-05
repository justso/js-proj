/*jslint es5:true, white:false */
/*globals $, Global, _, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var Rehash;

(function (W) { // IIFE
    var name = 'Rehash',
        self = new Global(name, '(reinvent loc.hash)'),
        C = W.console,
        Df, Stat = {
            root: W.location.href,//.replace(/[^\/]*$/, ''),
            link: 0,
            node: 0,
        };

    Df = { // DEFAULTS
        go: function (n) {
            Stat.link = n;
            Stat.node = window.history.length;
            return Stat;
        },
        valueOf: function () {
            return Stat.root;
        },
    };
    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function _load() {
        C.debug(name, '_load');
        $("a").click(function(event){
            event.preventDefault();
            self.test( parseInt($(this).attr("href").match(/\d+/)) );
        });
    }

    function _dump() {
        C.debug(' Stat: ', Stat, '\n State: ', window.history.state);
    }

    function _test(n) {
        return [
            function () {
                _dump(arguments);
            },
            function () {
                window.history.pushState(Df.go(1), "111", "#/1");
                _dump(arguments);
            },
            function () {
                window.history.pushState(Df.go(2), "222", "#/2");
                _dump(arguments);
            },
            function () {
                window.history.pushState(Df.go(3), "333", "#/3");
                _dump(arguments);
            },
            function () {
                window.history.replaceState();
                _dump(arguments);
            },
        ][n];
    }

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    function _init(cb) {
        if (self.inited(true)) {
            return null;
        }
        _load();
        window.onpopstate = _test(0);
    }

    W[name] = $.extend(true, self, {
        _: function () {
            return Df;
        },
        init: _init,
        test: function (n) {
            return _test(n||0)();
        },
    });
    $(_init);
}(window));

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

/*



 */
