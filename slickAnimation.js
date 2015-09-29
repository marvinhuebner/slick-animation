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
                var delayIn = self.attr('data-delay-in');
                var durationIn = self.attr('data-duration-in');
                var dalayOut = self.attr('data-delay-out');
                var durationOut = self.attr('data-duration-out');

                if (self.attr('data-delay-in')) {
                    function slickAddDelayIn() {
                        self.css({
                            'animation-delay' : delayIn + 's',
                            '-webkit-animation-delay' : delayIn + 's',
                            '-moz-animation-delay' : delayIn + 's',
                            '-o-animation-delay' : delayIn + 's',
                            '-ms-animation-delay' : delayIn + 's'
                        });
                    }
                }

                if (self.attr('data-duration-in')) {
                    function slickAddDurationIn() {
                        self.css({
                            'animation-duration' : durationIn + 's',
                            '-webkit-animation-duration' : durationIn + 's',
                            '-moz-animation-duration' : durationIn + 's',
                            '-o-animation-duration' : durationIn + 's',
                            '-ms-animation-duration' : durationIn + 's'
                        });
                    }
                }

                if (self.attr('data-delay-out')) {
                    function slickAddDelayOut() {
                        self.css({
                            'animation-delay' : dalayOut + 's',
                            '-webkit-animation-delay' : dalayOut + 's',
                            '-moz-animation-delay' : dalayOut + 's',
                            '-o-animation-delay' : dalayOut + 's',
                            '-ms-animation-delay' : dalayOut + 's'
                        });
                    }
                }

                if (self.attr('data-duration-out')) {
                    function slickAddDurationOut() {
                        self.css({
                            'animation-duration' : durationOut + 's',
                            '-webkit-animation-duration' : durationOut + 's',
                            '-moz-animation-duration' : durationOut + 's',
                            '-o-animation-duration' : durationOut + 's',
                            '-ms-animation-duration' : durationOut + 's'
                        });
                    }
                }

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

                    var defaultTimeout = '';

                    if (self.attr('data-delay-in')) {
                        var timeoutDelayInOnly = self.attr('data-delay-in') * 1000 + 1000;

                        defaultTimeout = timeoutDelayInOnly;

                    } else if (self.attr('data-duration-in')) {
                        var timeoutDurationInOnly = self.attr('data-duration-in') * 1000;

                        defaultTimeout = timeoutDurationInOnly;

                    } else if ((self.attr('data-delay-in')) || (self.attr('data-duration-in'))) {
                        var timeoutDelayIn = self.attr('data-delay-in') * 1000;
                        var timeoutDurationIn = self.attr('data-duration-in') * 1000;

                        defaultTimeout = timeoutDelayIn + timeoutDurationIn;
                    }
                    else {
                        defaultTimeout = 1000;
                    }

                    if (firstSlickItem.length > 0) {
                        slickAddAnimationIn();
                        slickAddDelayIn();
                        slickAddDurationIn();

                        setTimeout(function(){
                            slickRemoveAnimationIn();
                            slickAddAnimationOut();
                            slickAddDelayOut();
                            slickAddDurationOut();
                        }, defaultTimeout);
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        slickAddAnimationIn();
                        slickAddDelayIn();
                        slickAddDurationIn();

                        setTimeout(function(){
                            slickRemoveAnimationIn();
                            slickAddAnimationOut();
                            slickAddDelayOut();
                            slickAddDurationOut();
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
                        slickAddDelayIn();
                        slickAddDurationIn();
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        slickAddAnimationInDefault();
                        slickAddDelayIn();
                        slickAddDurationIn();
                    });

                    currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                        slickRemoveAnimationInDefault();
                    });
                }
            });
        });
        return this;
    }
})(jQuery);