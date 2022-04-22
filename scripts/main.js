$(document).ready(function () {

    const blockbar = document.querySelector('.block-bar');
    const BoxMenu = document.querySelector('.box-menu');
    const backgroundMenu = document.querySelector('.background-menu');

    blockbar.onclick = function () {
        backgroundMenu.classList.add('ativo');
        BoxMenu.classList.add('ativo');
    };

    backgroundMenu.onclick = function () {
        backgroundMenu.classList.remove('ativo');
        BoxMenu.classList.remove('ativo');
    };



});

$('.owl-espaco').owlCarousel({
    loop: true,
    stagePadding: 50,
    margin: 20,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ['<img src="./images/nav-left.png"/>', '<img src="./images/nav-right.png"/>'],
    items: 2,

})

$('.owl-depoimentos').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ['<img src="./images/nav-left.png"/>', '<img src="./images/nav-right.png"/>'],
    items: 2,
    responsive: {
        0: {
            margin: 20,
            items: 1,
        },
        1200: {
            margin: 20,
            items: 2,
        },
        1600: {
            margin: 40,
        }
    }
})