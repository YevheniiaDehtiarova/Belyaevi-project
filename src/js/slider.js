

$('.news__slider').slick({
    prevArrow: '<img src="src/assets/img/arrow-left.svg"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/arrow-right.svg" class="next" alt="Right Arrow">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '10px',
    responsive: [{
        breakpoint: 821,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 576,
        settings: {
            slidesToShow: 1,
        }
    }]
});


$('.volunteering__slider').slick({
    prevArrow: '<img src="src/assets/img/arrow-left.svg"  class="prev" alt="Left Arrow">',
    nextArrow: '<img src="src/assets/img/arrow-right.svg" class="next" alt="Right Arrow">',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 640,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: true,
            variableWidth: true,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            centerMode: true,
            variableWidth: true,
        }
    }]
});


$(window).on('resize', function() {
    $('.news__slider').slick('setPosition');
});