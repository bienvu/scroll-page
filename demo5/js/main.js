// var bgHeight = $('.js-scroll-image').height(); // pixel height of background image
// var jsScroll = $('js-scroll');
// // console.log(bgHeight);
// // console.log($(window).height());
// // console.log("ok");
// $(document).ready(function() {
//     $('.js-scroll').height(bgHeight*400);
//     jsScroll.scrollTop(bgHeight*200);
//     // console.log(bodyHeight);
//     jsScroll.scroll(function() {
//       // console.log($(window).scrollTop());
//       // console.log($('.js-scroll').height() );
//       // console.log($(window).height());
//         if ( jsScroll.scrollTop() >= (jsScroll.height() - $(window).height()) - 150) {
//             jsScroll.scrollTop(bgHeight*200 - 690);
//             // $(window).scrollTop(bgHeight);
//             // $('body').animate({scrollTop:0});
//         }
//         else if ( jsScroll.scrollTop() <= 100 ) {
//             jsScroll.scrollTop(bgHeight*200 - 100);
//             // $('body').animate({scrollTop:bgHeight});
//         }
//     });
// });


var $bgHeight = $('.js-scroll-image').height();
var $jsScroll = $('.js-scroll');
$(document).ready(function() {
  $jsScroll.height($bgHeight*400);
  $(window).scrollTop($bgHeight*200 + 500);
  $(window).scroll(function() {
    if ( $(window).scrollTop() >= ($jsScroll.height() - $(window).height()) - 150) {
      $(window).scrollTop($bgHeight*200 - 690);
    }
    else if ( $(window).scrollTop() <= 100 ) {
      $(window).scrollTop($bgHeight*200 - 100);
    }
  });
});
