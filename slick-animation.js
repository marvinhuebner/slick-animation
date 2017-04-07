/*
 slick-animation.js

 Version: 1.0.0 Beta
 Author: Marvin Hübner, Georg Dümmler
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);


        function animateSlide(slide) {
            slide.find('[data-animation-in]').each(function (i) {
                var element = $(this);

                var animationIn = element.attr('data-animation-in');
                var animationOut = element.attr('data-animation-out');

                var delaySecondsIn = parseInt(element.attr('data-delay-in'));
                var delaySecondsOut = parseInt(element.attr('data-delay-out'));

                var durationSecondsIn = parseInt(element.attr('data-duration-in'));
                var durationSecondsOut = parseInt(element.attr('data-duration-out'));

                if (isNaN(delaySecondsIn)) delaySecondsIn = 0;
                if (isNaN(delaySecondsOut)) delaySecondsOut = 0;
                if (isNaN(durationSecondsIn)) durationSecondsIn = 0;
                if (isNaN(durationSecondsOut)) durationSecondsOut = 0;

                element.css('animation', animationIn + ' ' + durationSecondsIn + 's ' + delaySecondsIn + 's');
                element.css('animation-fill-mode', 'both');

                element.finish();
                element.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                    function (e) {
                        e.preventDefault();
                        $(this).css({'opacity': 1});

                        element.finish();
                        element.css('animation', animationOut + ' ' + durationSecondsOut + 's ' + delaySecondsOut + 's');
                        $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                            function (ev) {
                                ev.preventDefault();
                                $(this).css({'opacity': 0});
                                element.finish();

                                if (i == 0) currentSlickSlider.slick('slickNext');
                            });
                    });
            });
        }

        function removeAnimation(slide) {
            slide.find('[data-animation-in]').each(function () {
                var element = $(this);

                element.css({'opacity': 0});
                element.off();
                element.finish();
                element.css('animation', '');
            });
        }

        var firstSlide = currentSlickSlider.find('.slick-current');
        animateSlide(firstSlide, currentSlickSlider);

        currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
            removeAnimation(currentSlickSlider);
            var slide = currentSlickSlider.find('[data-slick-index="' + currentSlider + '"]');
            animateSlide(slide, currentSlickSlider);
        });
        currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
            removeAnimation(currentSlickSlider);
        });

        return this;
    }
})(jQuery);