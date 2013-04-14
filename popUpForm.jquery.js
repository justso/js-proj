/*jslint es5:true, forin:true, white:false */
/*globals $, jQuery, console */

(function ($) {
    var W = window,
        e = W.console ? console.log : W.alert;

    $.fn.popUpForm = function (options) {
        var defaults, opts, ajaxSubmit;

        if (!$("#popUpHide").length) {
            $('<div id="popUpHide" />').appendTo('body').css('display', 'none'); // Give us someplace to attach forms
        }

        // REQUIRE a container
        if (!options.container) {
            W.alert('Container Option Required');
            return;
        }

        defaults = {
            container: '',
            modal: true,
            resizeable: false,
            width: 440,
            title: 'Website Form',
            beforeOpen: function (container) {},
            onSuccess: function (container) {},
            onError: function (container) {},
        };
        opts = $.extend({}, defaults, options);

        // The "this" within the each loop refers to the single DOM item of the jQuery collection we are currently operating on
        this.each(function () {
            var me = $(this),
                SRC, formDOM;

            // we only want to process an item if its a link and has an href value
            if (!me.is('a') || !me.attr('href')) {
                return;
            }
            // For a $.load() function, the param is the url followed by the ID selector for the section of the page to grab
            SRC = me.attr('href') + ' ' + opts.container;


            // the event binding is done in the call back in case the form fails to load,
            // or the user clicks the link before the modal is ready
            formDOM = $("<div />").load(SRC, function () {

                $('#popUpHide').append(formDOM);

                // Create and store the dialog
                $(opts.container).dialog({
                    autoOpen: false,
                    width: opts.width,
                    modal: opts.modal,
                    resizable: opts.resizeable,
                    title: opts.title
                });

                // stops the normal form submission;
                // had to come after creating the dialog otherwise the form doesn't exist yet to put an event handler to
                $(opts.container).bind('submit', function (e) {
                    e.preventDefault();
                    ajaxSubmit(me[0]);
                });

                // create a binding for the link passed to the plug-in
                me.bind('click', function (e) {
                    e.preventDefault();
                    opts.beforeOpen.call(me[0], opts.container);
                    $(opts.container).dialog('open');
                });
            });
        });

        ajaxSubmit = function ajaxSubmit(anchorObj) {
            console.log('ajaxSubmit', anchorObj);

            var form = $(opts.container),
                method = form.attr('method') || 'GET';

            $.ajax({
                type: method,
                url: form.attr('action'),
                data: form.serialize(),
                success: function () {
                    $(opts.container).dialog('close');
                    opts.onSuccess.call(anchorObj, opts.container);
                },
                error: function () {
                    opts.onError.call(anchorObj, opts.container);
                },
            });
        };
    };
})(jQuery);
