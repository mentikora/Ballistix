$(document).ready(function() {
  // initialize fullpage js
  $('#fullpage').fullpage({
    normalScrollElements: '#menu'
  });

  // show menu
  $('#menu_btn').on('click', function(){
    $('#menu').addClass('fadeInLeft').removeClass('fadeOutLeft').css('display', 'block');
  });

  // close menu
  $('.close_menu').on('click', function(){
    $('#menu').addClass('fadeOutLeft').removeClass('fadeInLeft');
  });
});