/*jslint es5:true, forin:true, white:false */
/*globals $, C, DFR:true, Fn, RTN, OBJ, jQuery, window */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
var T = {};

T[1] = function () {
    C.group('T.1');

    function asyncEvent() {
        DFR = new $.Deferred();

        // Resolve after a random interval
        RTN.t1 = Fn.request(function () {
            DFR.resolve('Timer 1 won');
            C.groupEnd();
            T[2]();
        });
        // Reject after a random interval
        RTN.t2 = Fn.request(function () {
            DFR.reject('Timer 1 lost');
            C.groupEnd();
            T[2]();
        });

        // Show a 'working...' message regularly
        Fn.status(DFR, 0.1);
        // Return the Promise so caller can't change the Deferred
        return DFR.promise();
    }
    // Attach [done, fail, progress] handlers for the asyncEvent
    $.when(asyncEvent()).then(Fn.log, Fn.log, Fn.log);
    return [DFR, RTN];
};

T[2] = function () {
    C.group('T.2');
    DFR = $.Deferred();
    OBJ = { // becomes a promise piggybacked upon an async scenerio
        hello: Fn.hello,
    };

    DFR.promise(OBJ); //    extend OBJ  promise api
    DFR.resolve('Jon'); //  mutate DFR  locked data
    OBJ.done(function (x) {
        OBJ.hello(x); //    Hello Jon
    }).hello('Karl'); //   invoke promise
    C.groupEnd();
    T[3]();
    return [DFR, OBJ, RTN];
};

T[3] = function () {
    C.group('T.3');
    C.debug('a');

    Fn.queue(function () {
        C.debug('c');
        C.groupEnd();
        T[4]();
    }, 500);

    Fn.queue(function () {
        C.debug('d');
    }, 499);

    Fn.queue(Fn.linger, 0);
    C.debug('b');
    // a
    // b
    // undefined
    // done ... linger takes a few seconds / finishes before c and d!
    // d
    // c
};

T[4] = function () {
    C.group('T.4');
    var fromAddress = 'A',
        toAddress = 'B',
        GMaps = {
        geocode: function (obj) {
            Fn.queue(function () {
                C.debug('GMaps.geocode', obj);
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
            Fn.queue(function () {
                C.debug('GMaps.getRoutes', obj);
                obj.callback(arguments);
            }, 999);
        },
        drawDirections: function (route) {
            // do something with route
            Fn.queue(function () {
                C.debug('GMaps.drawDirections', arguments);
                C.groupEnd();
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
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
T[1]();
