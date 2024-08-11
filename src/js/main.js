(function() {
    let burgerButton = document.querySelector('.burger-button');
    let burgerMenu = document.querySelector('.mobile-menu-wrapper');



    burgerButton.addEventListener('click', burgerClass);

    function burgerClass() {
        burgerButton.classList.toggle('burger-button-active');
        burgerMenu.classList.toggle('hidden');


    };

const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
    const title = item.querySelector('.accordion-title');
    title.addEventListener('click', () => {
        const content = item.querySelector('.accordion-content');
        const isOpen = content.style.display === 'block';
        document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
        content.style.display = isOpen ? 'none' : 'block';
    });
});

})();
