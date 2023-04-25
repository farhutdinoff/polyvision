
$('.open-sort').click( function(){
  $('.sorter').slideToggle();
});

$('.open-filter').click( function(){
  filterOpen();
  overflowHidden()
});

$('.close-filter').click( function(){
  filterClose();
  overflowAuto();
});


function filterOpen(){
  $('.filters').addClass("open");
}

function filterClose(){
  $('.filters').removeClass("open");
}
function overflowHidden(){
  $('body').addClass("open-filter");
}
function overflowAuto(){
  $('body').removeClass("open-filter");
}

$('.product-images__mini').owlCarousel({
    margin:10,
    dots:false,
    nav:false,
    margin:25,
    responsive:{
        0:{
            items:3
        },
        1200:{
            items:4
        }
    }
})
$('.owl-4').owlCarousel({
    margin:10,
    dots:false,
    nav:true,
    loop:true,
    navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    margin:25,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:4
        }
    }
})
$('.owl-post').owlCarousel({
    items:1,
    margin:10,
    dots:true,
    nav:false,
    margin:40
})



$('.product-images__mini--outer .pick').click(function(e){
      e.preventDefault();

      var photo_fullsize =  $(this).find('img').attr('src');

      $('.product-popup-link img').attr('src', photo_fullsize);
      $('.product-popup-link').attr('href', photo_fullsize);

  });

$('#zoom').zoom({
  touch:false
});





$('.quantity .minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
  });
  $('.quantity .plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
  });
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('#scroll-top').fadeIn();
      } else {
      $('#scroll-top').fadeOut();
    }
  }); 
  
  $('#scroll-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
 
  $('.btn-return').click(function(){
    $('.btn-return2').trigger('click');
  });

$('.btn-recovery').click(function(){
  $('.btn-recovery2').trigger('click');
});