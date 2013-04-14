/*global $, console */
/*jslint es5:true, white:false */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

function Average() {
    var tools = {
        arrazor: function(args) {
            return Array.prototype.slice.apply(args);
        },
        recurzor: function(meth, args) {
            var i, arr = tools.arrazor(args);
            for (i in arr) this[meth](arr[i]);
        },
    };
    tools.recurzor.call(this, 'add', arguments);
    this.export = function() {
        return tools.arrazor(this);
    };
}

Average.prototype = [];

Average.prototype.add = function(n) {
    if (typeof n !== 'number') {
        throw new Error('not a number');
    }
    this.push(n);
    return this.valueOf();
};
Average.prototype.sum = function() {
    this._sum = 0;
    for (var i = 0; i < this.length; i++) {
        this._sum += this[i];
    }
    return this._sum;
};
Average.prototype.toString = function() {
    return JSON.stringify(this);
};
Average.prototype.undo = function(n) {
    this.pop();
    return this.valueOf();
};
Average.prototype.valueOf = function() {
    return this.sum() / this.length;
};

Average.prototype.mean = this.valueOf;
Average.prototype.toString = this.mean;
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
