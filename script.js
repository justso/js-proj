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
}
// a
// b
// undefined
// done ... linger takes a few secondsfinishes before c and d!
// d
// c


var geocode = function (address) {
    var dfd = new $.Deferred();
    GMaps.geocode({
        address: address,
        callback: function (response, status) {
            return dfd.resolve(response);
        }
    });
    return dfd.promise();
};

var getRoute = function (fromLatLng, toLatLng) {
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

var doSomethingCoolWithDirections = function (route) {
    // do something with route
};

$.when(geocode(fromAddress), geocode(toAddress)).
then(function (fromLatLng, toLatLng) {
    getRoute(fromLatLng, toLatLng).then(doSomethingCoolWithDirections);
});



