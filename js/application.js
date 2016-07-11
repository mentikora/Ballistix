$(document).ready(function() {

  // initialize fullpage js
  $('#fullpage').fullpage({
    normalScrollElements: '#menu, .popUp, .nano',
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#fullPage_menu',
    afterLoad: function(anchorLink, index){
      var loadedSection = $(this);
      if(index == 4){
        $('.arrow_scroll_down').fadeOut(200);
      } else{
        $('.arrow_scroll_down').fadeIn(200);
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
  /* custom start */
  $(".nano").bind("update", function(e){
    var scrollPercentage = e.target.nanoscroller.contentScrollTop / e.target.nanoscroller.contentHeight * 100;
    var scrollPercentageFixed = scrollPercentage.toFixed(2);
    var questions = $('.question_menu.pull-left ol');

    if (scrollPercentageFixed >= 0.00 && scrollPercentageFixed < 9.00) {
      questions.children().removeClass('active');
      questions.children().eq(0).addClass('active');
    } else if (scrollPercentageFixed >= 9.00 && scrollPercentageFixed < 18.00) {
      questions.children().removeClass('active');
      questions.children().eq(1).addClass('active');
    } else if (scrollPercentageFixed >= 18.00 && scrollPercentageFixed < 30.00) {
      questions.children().removeClass('active');
      questions.children().eq(2).addClass('active');
    } else if (scrollPercentageFixed >= 30.00 && scrollPercentageFixed < 44.00) {
      questions.children().removeClass('active');
      questions.children().eq(3).addClass('active');
    } else if (scrollPercentageFixed >= 44.00 && scrollPercentageFixed < 58.50) {
      questions.children().removeClass('active');
      questions.children().eq(4).addClass('active');
    } else if (scrollPercentageFixed >= 58.50 && scrollPercentageFixed < 67.00) {
      questions.children().removeClass('active');
      questions.children().eq(5).addClass('active');
    } else if (scrollPercentageFixed >= 67.00 && scrollPercentageFixed < 76.00) {
      questions.children().removeClass('active');
      questions.children().eq(6).addClass('active');
    } else if (scrollPercentageFixed >= 76.00 && scrollPercentageFixed < 85.00) {
      questions.children().removeClass('active');
      questions.children().eq(7).addClass('active');
    } else if (scrollPercentageFixed >= 85.00 && scrollPercentageFixed < 91.00) {
      questions.children().removeClass('active');
      questions.children().eq(8).addClass('active');
    } else if (scrollPercentageFixed >= 91.00 && scrollPercentageFixed < 100.00) {
      questions.children().removeClass('active');
      questions.children().eq(9).addClass('active');
    }
  });

  $(".nano").bind("scrollend", function(e){
    $('.question_menu.pull-left ol').children().removeClass('active');
    $('.question_menu.pull-left ol').children().eq(9).addClass('active');
  });

  $(".nano").bind("scrolltop", function(e){
    $('.question_menu.pull-left ol').children().removeClass('active');
    $('.question_menu.pull-left ol').children().eq(0).addClass('active');
  });
  /* custom end */

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
  $('.show_popup_btn').on('click', function(){
    // get data-popup on btn click
    var popup_data = $(this).data('popup');
    $('.popUp').addClass('slideInLeft').removeClass('slideOutLeft').css('display', 'block');
    $('.popUp .popup_content').css('display', 'none');
    // show content with data-popup
    $('.popUp').find('#'+popup_data).css('display', 'flex');
  });

  // closepopup
  $('.popUp .close_menu').on('click', function(){
    //$('.popUp').addClass('slideOutLeft').removeClass('slideInLeft');
    $(this).closest('.popUp').addClass('slideOutLeft').removeClass('slideInLeft');
  });
  
  // start slide-4 video on fake_play content click
  $('.fake_play').on('click', function(event){
    $(this).fadeOut(150);
    $("#iframe")[0].src += "&autoplay=1";
    event.preventDefault;
  });
  
});