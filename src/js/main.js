(function() {
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.mobile-menu-wrapper');



    burgerButton.addEventListener('click', burgerClass);

    function burgerClass() {
        burgerButton.classList.toggle('burger-button-active');
        burgerMenu.classList.toggle('hidden');


    };

    // Табуляція
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Аккордеон
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const isOpen = content.style.display === 'block';
        
        // Закрити всі аккордеони
        document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
        
        // Відкрити/Закрити поточний аккордеон
        content.style.display = isOpen ? 'none' : 'block';
    });
});

})();
// script src = "https://code.jquery.com/jquery-3.5.1.js"
// integrity = "sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
// crossorigin = "anonymous" > < /script>