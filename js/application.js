$(document).ready(function() {
  // initialize fullpage js
  $('#fullpage').fullpage({
    normalScrollElements: '#menu, #popUp'
  });

  // show menu
  $('#menu_btn').on('click', function(){
    $('#menu').addClass('slideInLeft').removeClass('slideOutLeft').css('display', 'block');
  });

  // close menu
  $('#menu .close_menu').on('click', function(){
    $('#menu').addClass('slideOutLeft').removeClass('slideInLeft');
  });

  // show popup
  $('#popup_btn').on('click', function(){
    $('#popUp').addClass('slideInLeft').removeClass('slideOutLeft').css('display', 'block');
  });

  // closepopup
  $('#popUp .close_menu').on('click', function(){
    $('#popUp').addClass('slideOutLeft').removeClass('slideInLeft');
  });
});