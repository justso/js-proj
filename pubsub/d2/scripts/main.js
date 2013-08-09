/*jslint es5:true, white:false  */
/*globals head, $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
head.js('scripts/gen.js', 'scripts/css.js', 'scripts/ext.js', init);

var O = $({});

$.publish = O.trigger.bind(O);
$.subscribe = O.on.bind(O);
$.unsub = O.off.bind(O);

var dA = $('#divA'),
    dB = $('#divB'),
    ds = $().add(dA).add(dB);

$.subscribe('colorize', function (e, str) {
    dA.colorize(str);
    dB.colorize(str);
});

ds.on('mouseover', function () {
    $(this).colorize();
});
ds.on('mousedown', function () {
    clog('$.publish(colorize, ...)', arguments);
    $.publish('colorize', [$(this).css('backgroundColor')]);
});



function init() {
    $.publish('colorize');
    clog(dA, dB, Gen.rgb(), Gen.rgb());
}

// mouse over for random color
// auto sub to new color publishing
// when click publish clicked color

// https://gist.github.com/addyosmani/1321768

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
