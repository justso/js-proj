/*jslint es5:true, forin:true, white:false */
/*globals $, jQuery, console */

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
// ASYNC DEMOS

function clog() {
    console.log.apply(console, arguments);
}

function queue(f, n) {
    setTimeout(f, n || 1);
}

function linger(n) {
    var soon = $.now() + 3000;
    while ($.now() < soon) {
        $.noop();
    }
    clog('done');
}


function Demo1() {
    clog('a');

    queue(function () {
        clog('c');
    }, 500);

    queue(function () {
        clog('d');
    }, 499);

    queue(linger, 0);
    clog('b');
    // a
    // b
    // undefined
    // done ... linger takes a few seconds / finishes before c and d!
    // d
    // c
}

function Demo2() {
    var fromAddress = 'A',
        toAddress = 'B',
        GMaps = {
        geocode: function (obj) {
            queue(function () {
                clog('GMaps.geocode', obj);
                obj.callback({
                    lat: function () {
                        return obj.address + 'x';
                    },
                    lng: function () {
                        return obj.address + 'y';
                    },
                });
            }, 999);
        },

        getRoutes: function (obj) {
            queue(function () {
                clog('GMaps.getRoutes', obj);
                obj.callback(arguments);
            }, 999);
        },
        drawDirections: function (route) {
            // do something with route
            queue(function () {
                clog('GMaps.drawDirections', arguments);
            }, 999);
        },
    };

    function geocode(address) {
        var dfd = new $.Deferred();
        GMaps.geocode({
            address: address,
            callback: function (response, status) {
                return dfd.resolve(response);
            },
        });
        return dfd.promise();
    }

    function getRoute(fromLatLng, toLatLng) {
        var dfd = new $.Deferred();
        GMaps.getRoutes({
            origin: fromLatLng.lat() + '+' + fromLatLng.lng(),
            destination: toLatLng.lat() + '+' + toLatLng.lng(),
            travelMode: "driving",
            unitSystem: "imperial",
            callback: function (e) {
                return dfd.resolve(e);
            },
        });
        return dfd.promise();
    }

    $.when(geocode(fromAddress), geocode(toAddress)).
    then(function (fromLatLng, toLatLng) {
        getRoute(fromLatLng, toLatLng).then(GMaps.drawDirections);
    });

}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
