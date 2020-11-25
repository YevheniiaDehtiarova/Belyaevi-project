// $(function() {
//     $('.coaches__slider').slick({
//         prevArrow: ' <img src="src/assets/img/arrow-left.svg" alt="">',
//         nextArrow: ' <img src="src/assets/img/arrow-right.svg" alt="">',
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         responsive: [{
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 1.5,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 infinite: true,
//                 dots: true,
//             }
//         }]
//     });

// });

// $(function() {
//     $('.coaches__slider').slick({
//         prevArrow: ' <img src="src/assets/img/arrow-left.svg" alt="">',
//         nextArrow: ' <img src="src/assets/img/arrow-right.svg" alt="">',
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         responsive: [{
//             breakpoint: 640,
//             settings: {
//                 slidesToShow: 1.5,
//                 slidesToScroll: 1,
//                 centerMode: true,
//                 infinite: true,
//                 // dots: true,
//             }
//         }]
//     });

// });

$('.coaches__slider').slick({
    prevArrow: ' <img src="src/assets/img/arrow-left.svg" alt="">',
    nextArrow: ' <img src="src/assets/img/arrow-right.svg" alt="">',
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            centerMode: true,
        }
    }]
});