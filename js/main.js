/* window.onload = init; //cargar la funcion init en la ventana


//selectores
var elemento1 = document.getElementById("id")
var elemento2 = document.querySelector('#id');
var arreglo_elementos = document.querySelectorAll('.class');


//eventos
elemento1.addEventListener("click", nombre_funcion o funcion_implementada);
elemento2.addEventListener("mouseover", nombre_funcion o funcion_implementada);


//show y hide
elemento1.style.display = ''; //show
e.style.display = 'none'; //hide


//fadeIn y fadeOut  --> toca crear 2 clases en css, una llamada show y otra llamada hide
function fadeIn(){
    elemento1.classList.remove('hide');
    elemento1.classList.add('show');
}
function fadeOut(){
    elemento1.classList.remove('show');
    elemento1.classList.add('hide');
}

//clases css para la funcion fadeIn y fadeOut
.show{
    opacity: 1 !important;
    transition: opacity 3000ms;
}
.hide{
    opacity: 0 !important;
    transition: opacity 3000ms;
}


//slideUp y slideDown
function slideUp{
  elemento1.style.transition = "all 2s ease-in-out";
  elemento1.style.height = "0px";
}
function slideDown{
  elemento1.style.transition = "all 2s ease-in-out";
  elemento1.style.height = "150px";
}


//remplazar contenido de un elemento html
elemento1.innerHTML = "txt";


//get y set
var mitxt = elemento1.textContent; //get
elemento1.textContent = "Nuevo Contenido"; //set


//addClass y removeClass
elemento1.classList.remove('clase'); //remove
elemento1.classList.add('clase'); //add


//animate con setInterval() y setTimeout()
let position = 0;
function animate() {
  position += 10;
  elemento1.style.margin = position + 'px';
}
setInterval(animate,1000);  //ejecuta la función animate() de manera repetitiva en intervalos de tiempo determinados(en este caso: 1000milisegundos)
setTimeout(animate,1000);   //ejecuta la función animate() después de un tiempo determinado(en este caso: 1000milisegundos)


*/

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    
})(jQuery);

