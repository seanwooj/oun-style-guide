'use strict';
$(function () {
  // this is all just going to be loose javascript, as it will never be production code
  $('.close-bridge').on('click', function(){
    $('.bridge-menu').toggle('slide');
  });
});