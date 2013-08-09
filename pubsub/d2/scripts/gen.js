/*global Math */
/*jslint es5:true, white:false  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

var Gen = {
    int: function (num) {
        return Math.floor(Math.random() * 256);
    },
    sqlch: function (base, num) {
        num = num || 0;
        if (num > base / 2) {
            throw new Error('over squelch');
        }
        return (base * this.sqlfac(base, num));
    },
    sqlfac: function (base, num) {
        num = num || 0;
        return (base - num * 2) / base;
        /// transform into percent if > 1
    },
    dec: function (num) {
        var base = Math.pow(10, num || 1);
        return Math.round(Math.random() * base) / base;
    },
    byte: function (sqlch) {
        var base = 256;
        sqlch = sqlch || 0;
        return this.int(this.sqlch(base, sqlch)) + sqlch;
    },
    trip: function (sqlch) {
        return [this.byte(sqlch), this.byte(sqlch), this.byte(sqlch)];
    },
    rgb: function (sqlch) {
        var v = this.trip(sqlch);
        return 'rgb(' + v.join(', ') + ')';
    },
    rgba: function (sqlch) {
        var v = this.trip(sqlch);
        v.push(this.dec());
        return 'rgba(' + v.join(', ') + ')';
    },
};
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
