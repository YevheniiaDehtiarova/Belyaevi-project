(function() {
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.burger-menu-inner');

    let specialHeader = document.querySelector('.special');


    burgerButton.addEventListener('click', burgerClass);

    function burgerClass() {
        burgerButton.classList.toggle('burger-button-active');
        burgerMenu.classList.toggle('burger-menu-hidden');
        specialHeader.classList.toggle('special-active');

    };
})();

// slider вернутся позже 

// <!--script src="https://code.jquery.com/jquery-3.5.1.js " integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin=" anonymous "></!--script>
// script src = "src/js/slick.min.js " > < /script--->
//$(function() {
//     $('.services__slider').slick({
//         nextArrow: '<img class="slider-arrows" id="slider-arrows__right" src="src/assets/img/arrow_right.png" alt=" "></img>',
//         prevArrow: '<img class="slider-arrows" id="slider-arrows__left" src="src/assets/img/arrow_left.png" alt=" "></img>',
//         infinite: false,
//         dots: false, //отключаем зацикливание слайдера
//         slidesToShow: 3,
//         responsive: [{
//             breakpoint: 800,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 infinite: false,
//                 dots: true,
//                 nextArrow: '<img class="slider-arrows" id="slider-arrows__right" src="src/assets/img/arrow_right.png" alt=" "></img>',
//                 prevArrow: '<img class="slider-arrows" id="slider-arrows__left" src="src/assets/img/arrow_left.png" alt=" "></img>',
//             }
//         }]
//     });
// });