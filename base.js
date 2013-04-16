/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var clog = function() {
    var args = Array.prototype.slice.call(arguments);
    console.log.apply(console, args);
    document.write(args.join('<br>'));
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
(function (x) {
    clog('Abc',x);
})([123]);