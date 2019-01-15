'use strict';

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderAlt = $('._slider-alt');
    var sliderAll = $('._slider-all');
    var sliderMulti = $('._slidermulti');

    if (slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: true,
                arrows: true,
                infinite: false,
                autoplay: false
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
                autoplay: false
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
                autoplay: false
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
                slidesToScroll: 3,
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
};

module.exports = Slider;
