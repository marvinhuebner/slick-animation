/*
    slickAnimation.js
    by Marvin Hübner
 */

(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');


        slickItems.each(function () {
            var slickItem = $(this);

            slickItem.find('[data-animation-in]').each(function () {
                var dataAnimationIn = $(this);
                dataAnimationIn.css('opacity', '0');

                animationIn = dataAnimationIn.attr('data-animation-in');

                function slickAddAnimationIn() {
                    dataAnimationIn.addClass(animationIn);
                    dataAnimationIn.addClass('animated');
                    dataAnimationIn.css('opacity', '1');
                }

                function slickRemoveAnimationIn() {
                    dataAnimationIn.removeClass(animationIn);
                    dataAnimationIn.removeClass('animated');
                    dataAnimationIn.css('opacity', '0');
                }

                var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
                if (firstSlickItem.length > 0) {
                    slickAddAnimationIn();
                }

                currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                    slickAddAnimationIn();
                });

                currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                    slickRemoveAnimationIn();
                });
            });

            slickItem.find('[data-animation-out]').each(function () {
                var dataAnimationOut = $(this);

                var animationOut = dataAnimationOut.attr('data-animation-out');

                console.log(animationOut);
            });

            slickItem.find('[data-delay-in]').each(function () {
                var dataDelayIn = $(this);

                var delayIn = dataDelayIn.attr('data-delay-in');

                console.log(delayIn);
            });

            slickItem.find('[data-delay-out]').each(function () {
                var dataDelayOut = $(this);

                var delayOut = dataDelayOut.attr('data-delay-out');

                console.log(delayOut);
            });
        });
        return this;
    }
})(jQuery);