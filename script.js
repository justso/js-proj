// ASYNC DEMOS

function timeout(f, n){ setTimeout(f, n||1) }
function linger(n){
    var soon = $.now() + 3000;
    while($.now() < soon) void(0);
    shout('done');
}
function shout(s){ console.log(s) }

function Demo1 () {
    shout('a');
    timeout(function(){ shout('c') }, 500);
    timeout(function(){ shout('d') }, 499);
    timeout(linger, 0);
    shout('b');
    // a
    // b
    // undefined
    // done ... linger takes a few secondsfinishes before c and d!
    // d
    // c
}

function Demo2 () {
    var fromAddress, toAddress, GMaps = {};

    GMaps.geocode = function () {
        console.log(arguments);
        return arguments;
    }

    function geocode(address) {
        var dfd = new $.Deferred();
        GMaps.geocode({
            address: address,
            callback: function (response, status) {
                return dfd.resolve(response);
            }
        });
        return dfd.promise();
    };

    function getRoute(fromLatLng, toLatLng) {
        var dfd = new $.Deferred();
        map.getRoutes({
            origin: [fromLatLng.lat(), fromLatLng.lng()],
            destination: [toLatLng.lat(), toLatLng.lng()],
            travelMode: "driving",
            unitSystem: "imperial",
            callback: function (e) {
                return dfd.resolve(e);
            }
        });
        return dfd.promise();
    };

    function doSomethingCoolWithDirections(route) {
        // do something with route
        console.log(arguments);
    };

    $.when(geocode(fromAddress), geocode(toAddress)).
    then(function (fromLatLng, toLatLng) {
        getRoute(fromLatLng, toLatLng).then(doSomethingCoolWithDirections);
    });

}

