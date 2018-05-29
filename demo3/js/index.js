
$(document).ready(function() {
  loadMore();
});

var listElm = $('#infinite-list');

// Add 20 items.
var nextItem = 1;
var loadMore = function() {
  // listElm.find('.item').clone().appendTo(listElm);
  for (var i = 0; i < 1; i++) {
    // var item = document.createElement('li');
    var html='<div> <a href="#"> <img class="pic" src="https://bienvu.github.io/scroll-page/demo4/tipico.jpg" style="width: 100%; height: auto;" ></img></a><div>';
    // item.append(html);
    // // item.innerText = 'Item ' + nextItem++;
    // // listElm.appendChild(item);
    listElm.append(html);
  }
}

// var lastScrollTop = 0;
//     $(window).on('scroll', function() {
//         st = $(this).scrollTop();
//         if(st < lastScrollTop) {
//             console.log('up 1');
//         }
//         else {
//             console.log('down 1');
//         }
//         lastScrollTop = st;
//     });

// Detect when scrolled to bottom.
listElm.on('scroll touch', function() {
  var heightScroll = document.getElementById("infinite-list").scrollHeight,
      heightScreen = listElm.height(),
      topSpace = listElm.scrollTop();

  // console.log(listElm.scrollTop());
  // console.log(listElm.height());
  // console.log(test);
  // console.log(listElm.scrollHeight());
  if (topSpace + heightScreen >= heightScroll - 200) {
    loadMore();
  }
});

// Initially load some items.
