$(document).ready(function(){
    $('.imgpage').slick({
        infinite: true,
        speed: 600,
        fade: true,
        cssEase: 'linear',      
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });

  $(document).ready(function(){
    $('.cmt1').slick({
        slidesToScroll:1,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });

  $(document).ready(function(){
    $(".textfea").slick({
        infinite: true,
        speed: 600,        
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });

  $(document).ready(function(){
    $(".sp").slick({
        infinite: true,
        speed: 600,        
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
  });
