/*
    slickAnimation.js
    by Marvin Hübner
 */

(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
        var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');

        slickItems.each(function () {
            var slickItem = $(this);

            slickItem.find('[data-animation-in]').each(function () {
                var self = $(this);
                self.css('opacity', '0');

                var animationIn = self.attr('data-animation-in');
                var animationOut = self.attr('data-animation-out');

                if(self.attr('data-animation-out')) {

                    function slickAddAnimationIn() {
                        self.addClass(animationIn);
                        self.addClass('animated');
                        self.css('opacity', '1');
                    }

                    function slickRemoveAnimationIn() {
                        self.removeClass(animationIn);
                        self.removeClass('animated');
                    }

                    function slickAddAnimationOut() {
                        self.addClass(animationOut);
                        self.addClass('animated');
                    }

                    function slickRemoveAnimationOut() {
                        self.removeClass(animationOut);
                        self.removeClass('animated');
                        self.css('opacity', '0');
                    }

                    var defaultTimeout = 1000;

                    if (firstSlickItem.length > 0) {
                        slickAddAnimationIn();

                        setTimeout(function(){
                            slickRemoveAnimationIn();
                            slickAddAnimationOut();
                        }, defaultTimeout);
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        slickAddAnimationIn();

                        setTimeout(function(){
                            slickRemoveAnimationIn();
                            slickAddAnimationOut();
                        }, defaultTimeout);
                    });

                    currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                        slickRemoveAnimationOut();
                    });

                }

                else {
                    function slickAddAnimationInDefault() {
                        self.addClass(animationIn);
                        self.addClass('animated');
                        self.css('opacity', '1');
                    }

                    function slickRemoveAnimationInDefault() {
                        self.removeClass(animationIn);
                        self.removeClass('animated');
                        self.css('opacity', '0');
                    }

                    if (firstSlickItem.length > 0) {
                        slickAddAnimationInDefault();
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        slickAddAnimationInDefault();
                    });

                    currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                        slickRemoveAnimationInDefault();
                    });
                }
            });

            slickItem.find('[data-delay-in]').each(function () {
                var self = $(this);

                var delayIn = self.attr('data-delay-in');

                function slickAddDelayIn() {
                    self.css({
                       'animation-delay' : delayIn + 's',
                       '-webkit-animation-delay' : delayIn + 's',
                       '-moz-animation-delay' : delayIn + 's',
                       '-o-animation-delay' : delayIn + 's',
                       '-ms-animation-delay' : delayIn + 's'
                    });
                }

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
               var self = $(this);

                var durationIn = self.attr('data-duration-in');

                function slickAddDurationIn() {
                    self.css({
                        'animation-duration' : durationIn + 's',
                        '-webkit-animation-duration' : durationIn + 's',
                        '-moz-animation-duration' : durationIn + 's',
                        '-o-animation-duration' : durationIn + 's',
                        '-ms-animation-duration' : durationIn + 's'
                    });
                }

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

        });
        return this;
    }
})(jQuery);