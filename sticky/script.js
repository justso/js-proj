/*jslint white:false, browser:true, devel:true */
/*globals $, window */

$(function () {
    var W = $(window)
    ,   nav = $('nav')
    ,   content = $('.content')
    ,   navTop = nav.offset().top
    ,   conOff = content.offset().top - navTop
    ,   stat = 0
    ;
    W.on('scroll', function () {
        if (W.scrollTop() > navTop) {
            if (!stat) {
                stat = 1;
                nav.addClass('sticky');
                content.css('top', conOff);
            }
        } else if (stat) {
            stat = 0;
            nav.removeClass('sticky');
            content.css('top', 0);
        }
    });
});
