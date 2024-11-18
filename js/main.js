$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items:1,
        loop:true,
        nav:true,
        dots:false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'],
        autoplay:true,
        animateIn:true,
        animateOut:true,
    });

    $(".best-tour-slider").owlCarousel({
        items:3,
        loop:true,
        nav:true,
        dots:false,
        navText: ['<i class="fa-solid fa-arrow-up"></i>', '<i class="fa-solid fa-arrow-down"></i>'],
        margin: 20
    });
  });