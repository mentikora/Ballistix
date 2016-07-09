$(document).ready(function() {

  // initialize fullpage js
  $('#fullpage').fullpage({
    normalScrollElements: '#menu, #popUp, .nano',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#fullPage_menu',
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      //using index
      if(index == 4){
        $('.arrow_scroll_down').addClass('up');
      }
    },
    onLeave: function(index, nextIndex, direction){
      var leavingSection = $(this);
      if(index == 3 && direction =='down'){
        $('.arrow_scroll_down').fadeOut(200);
      } else {
        $('.arrow_scroll_down').fadeIn(200);
      }
    }
  });

  // initialize nanoScroller
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
  
  // start slide-4 video on fake_play content click
  $('.fake_play').on('click', function(event){
    $(this).fadeOut(150);
    $("#iframe")[0].src += "&autoplay=1";
    event.preventDefault;
  });

});