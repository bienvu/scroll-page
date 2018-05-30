var bgHeight = 6000; // pixel height of background image
console.log($(window).height());
console.log("ok");
$(document).ready(function() {
    $('body').height( bgHeight + $(window).height() );
    $(window).scroll(function() {
        if ( $(window).scrollTop() >= ($('body').height() - $(window).height())) {
            $(window).scrollTop(1);
        }
        else if ( $(window).scrollTop() <= 10 ) {
            $(window).scrollTop($('body').height() - $(window).height() - 1);
        }
    });
});
$(window).resize(function() {
    $('body').height( bgHeight + $(window).height() );
});
