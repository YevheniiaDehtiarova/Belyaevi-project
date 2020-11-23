(function() {
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.mobile-menu-wrapper');



    burgerButton.addEventListener('click', burgerClass);

    function burgerClass() {
        burgerButton.classList.toggle('burger-button-active');
        burgerMenu.classList.toggle('hidden');


    };
})();
// script src = "https://code.jquery.com/jquery-3.5.1.js"
// integrity = "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
// crossorigin = "anonymous" > < /script>