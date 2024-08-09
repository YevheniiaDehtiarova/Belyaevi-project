$('.coaches__slider').slick({
    prevArrow: ' <img src="src/assets/img/arrow-left.svg" alt="">',
    nextArrow: ' <img src="src/assets/img/arrow-right.svg" alt="">',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            centerMode: true,
            variableWidth: true,
        }
    }]
});

$('.news__slider').slick({
    prevArrow: '<img src="src/assets/img/arrow-left.svg"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/arrow-right.svg" class="next" alt="Right Arrow">', 
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            centerMode: true,
            variableWidth: true,
        }
    }]
});