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
