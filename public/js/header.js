module.exports = function(){

  $(window).on('resize',function(){
    $('.downmenu_contents').css({'left':'0'});
    $('.recent_contents').css({'left':'0'});
  });

  $('.header_nav li:nth-child(1) .arrow_next').on('click',function(){
    $('.downmenu_contents').stop().animate({'left':'-800px'},500);
  });

  $('.header_nav li:nth-child(1) .arrow_prev').on('click',function(){
    $('.downmenu_contents').stop().animate({'left':'0'},500);
  });


    $('.header_nav li:nth-child(2) .arrow_next').on('click',function(){
      $('.recent_contents').stop().animate({'left':'-800px'},500);
    });

    $('.header_nav li:nth-child(2) .arrow_prev').on('click',function(){
      $('.recent_contents').stop().animate({'left':'0'},500);
    });

  
};
