'use strict';
$(function () {
  // this is all just going to be loose javascript, as it will never be production code
  $('.toggle-bridge').on('click', function(){
    $('.bridge-menu').toggle('slide');
    
    // set height of bridge menu such that content can scroll within it (prevent height:auto)
    var windowHeight = $(window).height();
    var topAreaHeight = $('.bridge-top-area').height();
    var offSetHeight = windowHeight - topAreaHeight;
    $('.bridge-navigation-area').height(offSetHeight);

  });

  $(document).on('click', '.content-item-expansion-area', function (e) {
    $(e.target).closest('.content-item').toggleClass('closed');
  });

  // i dont' want to write duplicate markup, so i'm just going to clone elements here

  for(var i = 0; i < 8; i += 1) {
    var $lesson = $('.top-level-item').first().clone();
    $('.bridge-lessons').append($lesson);
  }
});