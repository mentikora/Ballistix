$(document).ready(function() {
  // initialize fullpage js
  $('#fullpage').fullpage({
    normalScrollElements: '#menu, #popUp, .nano',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#fullPage_menu'
  });

  // nanoScroller
  $(".nano").nanoScroller({
    alwaysVisible: true
  });
  // nano, scroll to el
  $('.question_menu a').on('click', function(){
    $(".nano").nanoScroller({ scrollTo: '#' + $(this).data('answer') });
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