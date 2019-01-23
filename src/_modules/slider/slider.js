'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderAlt = $('._slider-alt');
    var sliderAll = $('._slider-all');
    var sliderMulti = $('._slidermulti');
    var sliderFourSlides = $('._slider-fourslides');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: true,
                arrows: true,
                infinite: false,
                autoplay: true
            });
        });
    }

    if (sliderAlt) {
        sliderAlt.each(function(){
            $(this).slick({
                dots: true,
                fade: true,
                arrows: false,
                infinite: true,
                autoplay: true
            });
        });
    }
    if (sliderAll) {
        sliderAll.each(function(){
            $(this).slick({
                dots: true,
                fade: true,
                arrows: true,
                infinite: true,
                autoplay: true
            });
        });
    }

    if (sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: true,
                infinite: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }

    if (sliderFourSlides) {
        sliderFourSlides.each(function(){
            $(this).slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
