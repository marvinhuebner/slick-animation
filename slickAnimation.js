/*
    slickAnimation.js

    Version: 1.0.0
    Author: Marvin Hübner
    Docs: Available soon under https://github.com/marvinhuebner/slick-animation
    Repo: https://github.com/marvinhuebner/slick-animation
 */

(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
        var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');
        var animatedClass = 'animated';
        var visible = {opacity : '1'};
        var hidden = {opacity : '0'};

        slickItems.each(function () {
            var slickItem = $(this);

            slickItem.find('[data-animation-in]').each(function () {
                var self = $(this);

                self.css(hidden);

                var animationIn = self.attr('data-animation-in');
                var animationOut = self.attr('data-animation-out');
                var delayIn = self.attr('data-delay-in');
                var durationIn = self.attr('data-duration-in');
                var delayOut = self.attr('data-delay-out');
                var durationOut = self.attr('data-duration-out');

                if (delayIn) {
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

                if (durationIn) {
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

                if (delayOut) {
                    function slickAddDelayOut() {
                        self.css({
                            'animation-delay' : delayOut + 's',
                            '-webkit-animation-delay' : delayOut + 's',
                            '-moz-animation-delay' : delayOut + 's',
                            '-o-animation-delay' : delayOut + 's',
                            '-ms-animation-delay' : delayOut + 's'
                        });
                    }
                }

                if (durationOut) {
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

                if(animationOut) {

                    function slickAddAnimationIn() {
                        self.addClass(animationIn);
                        self.addClass(animatedClass);
                        self.css(visible);
                    }

                    function slickRemoveAnimationIn() {
                        self.removeClass(animationIn);
                        self.removeClass(animatedClass);
                    }

                    function slickAddAnimationOut() {
                        self.addClass(animationOut);
                        self.addClass(animatedClass);
                    }

                    function slickRemoveAnimationOut() {
                        self.removeClass(animationOut);
                        self.removeClass(animatedClass);
                        self.css(hidden);
                    }

                    var defaultTimeout = '';

                    if (delayIn) {
                        var timeoutDelayInOnly = delayIn * 1000 + 1000;

                        defaultTimeout = timeoutDelayInOnly;

                    } else if (durationIn) {
                        var timeoutDurationInOnly = durationIn * 1000;

                        defaultTimeout = timeoutDurationInOnly;

                    } else if ((delayIn) || (durationIn)) {
                        var timeoutDelayIn = delayIn * 1000;
                        var timeoutDurationIn = durationIn * 1000;

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
                        self.addClass(animatedClass);
                        self.css(visible);
                    }

                    function slickRemoveAnimationInDefault() {
                        self.removeClass(animationIn);
                        self.removeClass(animatedClass);
                        self.css(hidden);
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