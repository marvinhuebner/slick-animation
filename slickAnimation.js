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

            slickItem.find('[data-delay-in]').each(function () {
                var dataDelayIn = $(this);

                var delayIn = dataDelayIn.attr('data-delay-in');

                console.log(delayIn);

                function slickAddDelayIn() {
                    dataDelayIn.css({
                       'animation-delay' : delayIn + 's',
                       '-webkit-animation-delay' : delayIn + 's',
                       '-moz-animation-delay' : delayIn + 's',
                       '-o-animation-delay' : delayIn + 's',
                       '-ms-animation-delay' : delayIn + 's'
                    });
                }

                var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
                if (firstSlickItem.length > 0) {
                    slickAddDelayIn();
                }

                currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                    slickAddDelayIn();
                });

                currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                    slickAddDelayIn();
                });
            });

            slickItem.find('[data-duration-in]').each(function(){
               var dataDurationIn = $(this);

                var durationIn = dataDurationIn.attr('data-duration-in');

                console.log(durationIn)

                function slickAddDurationIn() {
                    dataDurationIn.css({
                        'animation-duration' : durationIn + 's',
                        '-webkit-animation-duration' : durationIn + 's',
                        '-moz-animation-duration' : durationIn + 's',
                        '-o-animation-duration' : durationIn + 's',
                        '-ms-animation-duration' : durationIn + 's'
                    });
                }

                var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
                if (firstSlickItem.length > 0) {
                    slickAddDurationIn();
                }

                currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                    slickAddDurationIn();
                });

                currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                    slickAddDurationIn();
                });

            });

            /*
            // Animation out is coming soon

             slickItem.find('[data-animation-out]').each(function () {
             var dataAnimationOut = $(this);

             var animationOut = dataAnimationOut.attr('data-animation-out');
             });

             slickItem.find('[data-delay-out]').each(function () {
             var dataDelayOut = $(this);

             var delayOut = dataDelayOut.attr('data-delay-out');
             });
             */

        });
        return this;
    }
})(jQuery);