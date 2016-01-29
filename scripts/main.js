'use strict';
$(function () {
  // set height of bridge menu such that content can scroll within it (prevent height:auto)
  var windowHeight = $(window).height();
  var topAreaHeight = $('.bridge-top-area').height();
  var offSetHeight = windowHeight - topAreaHeight;
  $('.bridge-navigation-area').height(offSetHeight);

  
  // this is all just going to be loose javascript, as it will never be production code
  $('.toggle-bridge').on('click', function(){
    $('.bridge-menu').toggle('slide');
    
    // set height of bridge menu such that content can scroll within it (prevent height:auto)
    var windowHeight = $(window).height();
    var topAreaHeight = $('.bridge-top-area').height();
    var offSetHeight = windowHeight - topAreaHeight;
    $('.bridge-navigation-area').height(offSetHeight);

  });

  $('.content-item-expansion-area').on('click', function (e) {
    $(e.target).closest('.content-item').toggleClass('closed');
  });
});