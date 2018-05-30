var bgHeight = 6864; // pixel height of background image

$(document).ready(function() {
    $('body').height( bgHeight + $(window).height() );
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= ($('body').height() - $(window).height()) - 200 ) {
            $(window).scrollTop(1);
        }
        else if ( $(window).scrollTop() == 0 ) {
            $(window).scrollTop($('body').height() - $(window).height() - 200);
        }
    });
});
$(window).resize(function() {
    $('body').height( bgHeight + $(window).height() );
});
