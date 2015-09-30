var sliderInit = $('.slick-slider-init');

$(document).ready(function () {

    sliderInit.slick({
        autoplay: true,
        autoplaySpeed: 9000
    });
    sliderInit.slickAnimation();
});


//function slickAddDelayIn(object) {
//    var delayInAttr = [
//        'animation-delay',
//        '-webkit-animation-delay',
//        '-moz-animation-delay',
//        '-o-animation-delay',
//        '-ms-animation-delay'
//    ];
//
//    $.each(delayInAttr, function(){
//        var attr = $(this);
//        object.css({attr : delayIn + 's'});
//    });
//
//    delayInAttr.forEach(function(delayTime){
//        object.css({delayTime: delayIn + 's'});
//    });
//}

