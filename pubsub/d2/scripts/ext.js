/*jslint es5:true, white:false */
/*globals Css, $ */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

$.fn.colorize = function (str) {
    this.css(Css.bkgr(str));
    return this;
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
