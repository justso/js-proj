define(['scripts/a.js', 'scripts/b.js', 'scripts/c.js'], function (A, B, C) {

    var shuffleColor = A.first(B.shuffle(['#666', '#333', '#111']));

    C.debug({
        'backgroundColor': shuffleColor,
    });

    // What we return can be used by other modules
    return {
        a: A,
        b: B,
        c: C,
    };
});
