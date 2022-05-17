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

    
    // filtro responsivo

    if ($('.filtro-responsive').lenght > 0) {
        setMaxHeight($('.filtro-responsive'));
    }

    $('.filtro-mobile').click(function () {
        if ($(this).hasClass('change')) {
            $(this).removeClass('change');
            $('.filtro-mobile').fadeOut();
        } else {
            $(this).addClass('change');
            $('.filtro-mobile').fadeIn();
        }

        $('.filtro-responsive').addClass('active');
        $('.filtro-container .full-page').addClass('active');
    });


    $('.fechar').click(function () {
        $('.filtro-responsive').removeClass('active');
        $('.filtro-container .full-page').removeClass('active');
    });

    $('.fechar').click(function () {
        $('.filtro-responsive').removeClass('active');
        $('.filtro-container .full-page').removeClass('active');
    });

    $('.filtro-container .full-page').click(function () {
        $('.filtro-responsive').removeClass('active');
        $('.filtro-container .full-page').removeClass('active');
    });



    //Este é o código da tela de "Loading" ela aparece assim que você abre o site, ali temos #status e #placeholder que são ID nas nossas páginas HTML, básicamente faz um efeito de "FADE" e quando acaba o tempo mostra o nosso site

    window.setTimeout(function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({ 'overflow': 'visible' });
    }, 4000);


    //o codigo abaixo faz o toggle entre os elementos details, ou seja, permanece apenas um aberto
    $("details").on("click", function () {
        $("details[open]").not(this).removeAttr("open");
    });

});

$('.owl-espaco').owlCarousel({
    loop: true,
    stagePadding: 50,
    margin: 20,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17"><defs><clipPath id="g1bla"><path d="M.838 16.23v-16h22.859v16z"/></clipPath></defs><g><g><g><g><path fill="transparent" d="M.838 16.23v-16h22.859v16z"/></g><g clip-path="url(#g1bla)"><path d="M11.843 10.72c3.46-.134 8.493-.853 10.378-1.184.813-.143 1.746-.614 1.402-1.615-.163-.477-1.062-.895-1.677-.98-.98-.135-2 .031-3.003.07-5.365.206-5.038.413-10.402.62l-.195-.482c1.01-.61 2.079-1.145 3.02-1.85 1.304-.979 2.577-2.023 3.719-3.18.293-.299.194-1.195-.022-1.685-.093-.21-1.056-.29-1.434-.084C9.869 2.404 6.091 4.435 2.44 6.67.223 8.028.301 9.936 2.702 10.998c4.165 1.842 8.47 3.371 12.731 4.99.765.29 1.725.496 2.169-.465.434-.943-.26-1.52-1.031-1.94-.88-.478-1.758-.962-2.653-1.413-.71-.358-1.445-.67-2.17-1.002l.095-.448"/></g></g></g></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17"><g><g clip-path="url(#clip-8151ceee-16e9-4891-b3ad-73039a9392a0)"><path d="M12.55 10.72c-3.459-.134-8.492-.853-10.377-1.184C1.36 9.393.426 8.922.77 7.92c.164-.477 1.063-.895 1.678-.98.98-.135 2 .031 3.003.07 5.364.206 5.038.413 10.402.62l.195-.482c-1.011-.61-2.08-1.145-3.02-1.85-1.305-.979-2.577-2.023-3.72-3.18C9.016 1.82 9.116.923 9.33.433c.093-.21 1.056-.29 1.435-.084 3.759 2.054 7.537 4.085 11.188 6.32 2.218 1.358 2.14 3.266-.261 4.328-4.166 1.842-8.47 3.371-12.731 4.99-.765.29-1.726.496-2.17-.465-.433-.943.26-1.52 1.032-1.94.88-.478 1.758-.962 2.652-1.413.711-.358 1.446-.67 2.17-1.002l-.095-.448"/></g></g></svg>'],
    items: 2,
    startPosition: 0,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
            margi: 10,
        },
        768: {
            items: 2,
            stagePadding: 0,
            margin: 10,
            startPosition: 0,
            center: true,
        },
        1025: {
            items: 1,
            stagePadding: 50,
        },
        1401: {
            margin: 20,
            items: 2,
        },
        1600: {
            margin: 40,
        }
    }
})

$('.owl-espaco-home').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    mouseDrag: false,
    navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17"><defs><clipPath id="g1bla"><path d="M.838 16.23v-16h22.859v16z"/></clipPath></defs><g><g><g><g><path fill="transparent" d="M.838 16.23v-16h22.859v16z"/></g><g clip-path="url(#g1bla)"><path d="M11.843 10.72c3.46-.134 8.493-.853 10.378-1.184.813-.143 1.746-.614 1.402-1.615-.163-.477-1.062-.895-1.677-.98-.98-.135-2 .031-3.003.07-5.365.206-5.038.413-10.402.62l-.195-.482c1.01-.61 2.079-1.145 3.02-1.85 1.304-.979 2.577-2.023 3.719-3.18.293-.299.194-1.195-.022-1.685-.093-.21-1.056-.29-1.434-.084C9.869 2.404 6.091 4.435 2.44 6.67.223 8.028.301 9.936 2.702 10.998c4.165 1.842 8.47 3.371 12.731 4.99.765.29 1.725.496 2.169-.465.434-.943-.26-1.52-1.031-1.94-.88-.478-1.758-.962-2.653-1.413-.71-.358-1.445-.67-2.17-1.002l.095-.448"/></g></g></g></g></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="17" viewBox="0 0 24 17"><g><g clip-path="url(#clip-8151ceee-16e9-4891-b3ad-73039a9392a0)"><path d="M12.55 10.72c-3.459-.134-8.492-.853-10.377-1.184C1.36 9.393.426 8.922.77 7.92c.164-.477 1.063-.895 1.678-.98.98-.135 2 .031 3.003.07 5.364.206 5.038.413 10.402.62l.195-.482c-1.011-.61-2.08-1.145-3.02-1.85-1.305-.979-2.577-2.023-3.72-3.18C9.016 1.82 9.116.923 9.33.433c.093-.21 1.056-.29 1.435-.084 3.759 2.054 7.537 4.085 11.188 6.32 2.218 1.358 2.14 3.266-.261 4.328-4.166 1.842-8.47 3.371-12.731 4.99-.765.29-1.726.496-2.17-.465-.433-.943.26-1.52 1.032-1.94.88-.478 1.758-.962 2.652-1.413.711-.358 1.446-.67 2.17-1.002l-.095-.448"/></g></g></svg>'],
    items: 2,
    center: true,
    // URLhashListener: true,
    // startPosition: 2,
    responsive: {
        0: {
            items: 1,
            stagePadding: 0,
            margin: 10,
            center: false,
            loop: false,
        },
        769: {
            items: 1,
            stagePadding: 0,
            margin: 10,
            startPosition: 0,
        },
        1025: {
            items: 1,
        },
        1401: {
            margin: 20,
            items: 2,
        },
        1600: {
            margin: 40,
        }
    }
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
            margin: 0,
            items: 1,
        },
        1025: {
            margin: 20,
        },
        1400: {
            margin: 30,
        },
        1600: {
            margin: 40,
        }
    }
})

$('.owl-cursos').owlCarousel({
    loop: true,
    margin: 50,
    stagePadding: 100,
    navText: ['<img src="./images/nav-left.png"/>', '<img src="./images/nav-right.png"/>'],
    nav: true,
    dots: false,
    center: true,
    mouseDrag: false,
    startPosition: 1,
    items: 2,
    responsive: {
        0: {
            margin: 10,
            items: 1,
            center: false,
            startPosition: 0,
            stagePadding:0,
        },
        769: {
            stagePadding: 100,
            margin: 10,
            items: 2,
            center: true,
        },
    }

})

