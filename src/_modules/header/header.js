'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var menuClose = $('.header__nav__close');

    var buscarButton = $('[href="#buscar"]');
    var buscarInput = $('.header__input');


    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    buscarButton.on('click', function(e) {
        e.preventDefault();

        if (buscarInput.hasClass("-open")) {
            buscarInput.removeClass("-open")
        } else {
            buscarInput.addClass('-open');
            buscarInput.focus();
        };
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){
            $('header').addClass("sticky");
        }
        else{
            $('header').removeClass("sticky");
        }
    });
};

module.exports = Header;
