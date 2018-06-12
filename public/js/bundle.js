/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = function(){

  /* 비교하기 */

  var compareClose = function(){
    $('body').css({'overflow':'initial','padding-right':'0'});
    $('.compare_wrap,.shadow').css({'display':'none'});
    $('.compare').removeClass('active');
    $('.inventory_category').removeClass('disable');
  };

  $('.compare').on('click',function(){
    $('body').css({'overflow':'hidden','padding-right':'17px'});
    $('.compare_wrap,.shadow').css({'display':'block'});
    $(this).addClass('active');
    $(this).siblings('.inventory_category').addClass('disable');
  });

  $('.shadow').on('click',function(){
    compareClose();
  });

  $(window).on("load",function(){
      $(".compare_wrap,.slot_wrap").mCustomScrollbar();
   });

  $('.compare_category_zone button').on('click',function(){  //비교하기 창 끄기
    compareClose();
  });

  /* inventory */


  var inventoryData = {
    'slot1' : {
      'category' : '종합비타민',
      'items' : [{
        'productName':'박카스',
        'Company':'동아제약',
        'userRate':4,
        'url':'../public/img/1.jpg'
      },{
        'productName':'비타500',
        'Company':'동아제약',
        'userRate':0,
        'url':'../public/img/1.jpg'
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot2' : {
      'category' : '칼슘/마그네슘',
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot3' : {
      'category' : '오메가',
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot4' : {
      'category' : '프로바이오틱스',
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot5' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot6' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot7' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot8' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot9' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot10' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot11' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    },
    'slot12' : {
      'category' : null,
      'items' : [{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      },{
        'productName':null,
        'Company':null,
        'userRate':null,
        'url':null
      }]
    }
  };

  /*인벤토리 초기화*/



  var resetInventory = function(){

    for(var count=1; count<Object.keys(inventoryData).length + 1; count++){

      for(var j=0; j<3; j++){
        if(inventoryData['slot'+count].items[j].productName != null){
          $('.inventory_slot:nth-child('+ count +') .inventory_category').text(inventoryData['slot'+count].category); //카테고리 설정
          $('.inventory_slot:nth-child('+ count +') .inventory_item_wrap>div:nth-child('+(j+1)+')').addClass('exist').find('img').attr('src',inventoryData['slot'+count].items[j].url); //이미지 url 설정
          $('.inventory_slot:nth-child('+ count +') .inventory_item_wrap>div:nth-child('+(j+1)+') .item_name').text(inventoryData['slot'+count].items[j].productName);
        }else{
          $('.inventory_slot:nth-child('+ count +') .inventory_item_wrap>div:nth-child('+(j+1)+')').addClass('empty'); // 비어있는 항목에 empty 부여
        };
      }

    }
  }

  /*인벤토리 버튼*/

  /* 삭제 */
  $('.item_btn_wrap>div:nth-child(2)').on('click',function(){
    alert('ajax : 아이템 삭제');
    $(this).parents('.exist').addClass('empty').removeClass('exist').find('img').attr('src','').parent().siblings('.item_name').text('');

    console.log($(this).parents('.inventory_slot').index());
  });
  resetInventory();
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

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
  var windowWidth = slides * 1260;
  var rimitWidth = (slides-1) * 1260;

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
        $('.slide_window').animate({'left': currentLeft-1260+'px'});
        currentLeft -= 1260;
        console.log(currentLeft);
      }



      if(currentLeft == -(rimitWidth-1260)){   // 로딩

        $('.slider_arrow_wrap').css({'display':'none'});

        setTimeout(function(){
          $('.slide_window').animate({'left': currentLeft-1260+'px'});
        },3000);
        console.log('로딩');
      }

    }
  });

  $('.slide_left_btn').on('click',function(){
    if(currentLeft < 0 ){
      $('.slide_window').animate({'left': currentLeft+1260+'px'});
      currentLeft += 1260;
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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

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

    console.log('왜어째서');
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var header = __webpack_require__(2);
var randing = __webpack_require__(1);
var inventory = __webpack_require__(0);

header();
randing();
inventory();


/***/ })
/******/ ]);
