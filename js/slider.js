$(document).ready(function(){
    $(".sliderHeader").slick({
        slidesToShow: 4,    //сколько картинок в одном показе
        slidesToScroll: 1,    //Сколько картинок перелистывается за раз 
        // centerPadding: '60px',   
        responsive: [
            {
            breakpoint: 769,
            settings: {  
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 425,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ],  
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
    $(".sliderAnter").slick({
        slidesToShow: 3,    
        slidesToScroll: 1,    
        // centerPadding: '60px',   
        responsive: [
            {
            breakpoint: 769,
            settings: {  
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
            },
            {
            breakpoint: 426,
            settings: {
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ],  
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: false,
        focusOnSelect: true,
    });
});