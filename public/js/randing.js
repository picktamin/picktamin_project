module.exports = function(){

  /* 유효성 체크 */

/*
  $('#inputName').on('blur',function(){
    var nameVal = $('#inputName').val();
    console.log(nameVal);
    if($(this).val()!=''){
      $(this).removeClass('no');
      $(this).addClass('ok');

    }else{
      $(this).removeClass('ok');
      $(this).addClass('no');
    }
  });
  */
  /* 슬라이드 넓이 동기화 */
  var slides = $('.slide_window .slide_contents').length;
  var windowWidth = slides * 1200;
  var rimitWidth = (slides-1) * 1200;

  $('.slide_window').css({'width': windowWidth+'px'});


  /* 슬라이드 이동제어 */

  var currentLeft = 0;

  $('.slide_right_btn').on('click',function(){
    if(currentLeft > -rimitWidth ){


      /* 첫 슬라이드 */

      if(currentLeft == 0 && $('#inputName').val() == ''){
        $('#inputName').removeClass('ok');
        $('#inputName').addClass('no');
        alert('이름을 입력해주세요.');
      }else{
        $('.slide_window').animate({'left': currentLeft-1200+'px'});
        currentLeft -= 1200;
        console.log(currentLeft);
      }



      if(currentLeft == -(rimitWidth-1200)){   // 로딩

        $('.slider_arrow_wrap').css({'display':'none'});

        setTimeout(function(){
          $('.slide_window').animate({'left': currentLeft-1200+'px'});
        },3000);
        console.log('로딩');
      }

    }
  });

  $('.slide_left_btn').on('click',function(){
    if(currentLeft < 0 ){
      $('.slide_window').animate({'left': currentLeft+1200+'px'});
      currentLeft += 1200;
    }
  });


/*탭 */

  $('.result_tab a').on('click',function(){
    var data = $(this).attr('data-tab');

    $('.result_tab li').removeClass('selected');
    $(this).parents('li').addClass('selected');
    console.log(data);
    $('.result_graph').css({'display':'none'});
    $('.'+data).css({'display':'block'});

    return false;

  });

  /* check box */
  var checkbox = $('.custom_check_wrap');

  var addClassCheckbox = function($input) {
    console.log($input);
    if ($input.prop('checked')) {
      $input.parent().addClass('checked');
      $input.siblings('label').addClass('selected');
    } else {
      $input.parent().removeClass('checked');
      $input.siblings('label').removeClass('selected');
    }
  };
  checkbox.on('change', 'input', function() {
    console.log($(this));
   addClassCheckbox($(this));
 });

 $('.all_agree_btn').on('click',function(){

   var input = [$('input#agree1'),$('input#agree2'),$('input#agree3'),$('input#agree4')];

   for(var i = 0; i<4; i++){
      console.log(input[i]);

      if (!input[i].prop('checked')) {
        input[i].prop('checked',true);
        input[i].parent().addClass('checked');
        input[i].siblings('label').addClass('selected');
      }
    }
 });


 /* radio */

 var radioBox = $('.custom_radio_wrap');
 var addClassRadio = function($input) {

   $input.each(function() {
      if ($(this).prop('checked')) {
        if ($(this).parent().hasClass('custom_radio_wrap')) {
          var radioName = $(this).attr('name');
          $('input[name=' + radioName + ']').parent('.custom_radio_wrap').removeClass('checked');
        }
        $(this).parent().addClass('checked').siblings().removeClass('checked');
        $(this).siblings('label').addClass('selected');
        $(this).parent().siblings().find('label').removeClass('selected');
      }
  });

  };

  radioBox.on('change', 'input', function() {
    addClassRadio($(this));
  }).on('mouseenter focusin mouseleave focusout', 'input', function(evt) {

    if (evt.type == 'mouseenter' || evt.type == 'focusin') {
      $(this).parent().addClass('over');
    } else {
      $(this).parent().removeClass('over');
    }

  }).children('input').trigger('change');




};
