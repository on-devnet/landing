$(document).ready(function(){
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });
      
$(function() {

    $('.elem0').removeClass('elem0');

    $('.nav-btn').click(function() {
        $('.links').toggleClass('links_show_links');
        $('.nav-btn').toggleClass('nav-btn_clicked');
        if ($('.nav-btn').hasClass('nav-btn_clicked')) {
            $(window).disablescroll()
        } else $(window).disablescroll('undo')
    });


    $('.links__item').click(function() {
        $('.links').toggleClass('links_show_links');
        $('.nav-btn').toggleClass('nav-btn_clicked');
        if ($('.nav-btn').hasClass('nav-btn_clicked')) {
            $(window).disablescroll()
        } else $(window).disablescroll('undo')
    });

});

$('#submit__phone').click(function() {
    $('.popup__container-none').toggleClass('popup__container');
    $('.phone').toggleClass('popup-height');
});

$('#btn_prices').click(function() {
    $('.popup__container-none').toggleClass('popup__container');
    $('.prices').toggleClass('popup-prices-height');
});

$('#btn_jobs').click(function() {
    $('.popup__container-none').toggleClass('popup__container');
    $('.jobs').toggleClass('popup-jobs-height');
});


$('.submit__phone-down').click(function() {
    $('.popup__container-none').toggleClass('popup__container');
    $('.phone-down').toggleClass('popup-height-down');
});
