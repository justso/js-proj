(function(window,undefined){

    // Prepare our Variables
    var
    document = window.document,
    $ = window.jQuery;

    // Wait for Document
    $(window).bind(function(){
        // Prepare Variables
        var
        $content = $('#content'),
        $body = $(document.body),
        rootUrl = document.location.protocol+'//'+(document.location.hostname||document.location.host);

        // Ajaxify our Internal Links
        $.fn.ajaxify = function(){

            // Ajaxify internal links
            $(this).find('a[href^="/"],a[href^="'+rootUrl+'"]').unbind('click').bind('click',function(event){
                var $this = $(this), url = $this.attr('href'), title = $this.attr('title')||null, relativeUrl = $(this).attr('href').replace(rootUrl,'');
                document.location.hash = relativeUrl;
                event.preventDefault();
                return false;
            });

            // Chain
            return this;
        };

        // Ajaxify Page
        $body.ajaxify();

        // Hook into State Changes
        $(window).bind('hashchange',function(){
            // Prepare
            var
            relativeUrl = '/'+document.location.hash.replace(/^\//,''),
            fullUrl = rootUrl+relativeUrl;

            // Set Loading
            $body.addClass('loading');

            // Start Fade Out
            $content.fadeOut(800);

            // Ajax Request the Traditional Page
            $.get(url,function(data){
                // Find the content in the page's html, and apply it to our current page's content
                $content.stop(true,true).show();
                $content.html($(data).find('#content')).ajaxify();
                if ( $content.ScrollTo||false ) $content.ScrollTo(); // http://balupton.com/projects/jquery-scrollto
                $body.removeClass('loading');

                // Inform Google Analytics of the change
                if ( typeof pageTracker !== 'undefined' ) {
                    pageTracker._trackPageview(relativeUrl);
                }
            }); // end get

        }); // end onStateChange

    }); // end onDomLoad

})(window); // end closure