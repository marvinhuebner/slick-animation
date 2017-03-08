/*
 slick-animation.js

 Version: 0.3.3 Beta
 Author: Marvin Hübner
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */

(function ($) {
    $.fn.slickAnimation = function () {
        var currentSlickSlider = $(this);

        var slickItems = currentSlickSlider.find('.slick-list .slick-track > div');
        var firstSlickItem = currentSlickSlider.find('[data-slick-index="0"]');

        var animatedClass = 'animated';
        var visible = {opacity: '1'};
        var hidden = {opacity: '0'};

        /**
         * function for setting animationIn and animationOut class
         * @param obj
         * @param type
         * @param animationIn
         * @param animatedClass
         * @param visibility
         */

        function slickSetAnimationDefault(obj, type, animationIn, animatedClass, visibility) {
            visibility = typeof visibility !== 'undefined' ? visibility : false;

            slickRemoveAnimation(obj, 'delay');
            slickRemoveAnimation(obj, 'duration');

            if (type['opacity'] == 1) {
                obj.addClass(animationIn);
                obj.addClass(animatedClass);
            } else {
                obj.removeClass(animationIn);
                obj.removeClass(animatedClass);
            }

            if (visibility) obj.css(type);
        }

        /**
         * get timeout when delay, duration, delay and duration is set
         * @param delayIn
         * @param durationIn
         * @returns {number}
         */

        function getTimeout(delayIn, durationIn) {
            if (delayIn) {
                return delayIn * 1000 + 1000;

            } else if (durationIn) {
                return durationIn * 1000;

            } else if ((delayIn) || (durationIn)) {
                return (delayIn * 1000) + (durationIn * 1000);
            }
            return 1000;
        }

        /**
         * add css animations for delay and duration
         * @param obj
         * @param animation
         * @param value
         */
        function slickAddAnimation(obj, animation, value) {
            var delayInAttr = [
                'animation-' + animation,
                '-webkit-animation-' + animation,
                '-moz-animation-' + animation,
                '-o-animation-' + animation,
                '-ms-animation-' + animation
            ];
            var delayInAttributes = {};
            delayInAttr.forEach(function (entry) {

                delayInAttributes[entry] = value + 's';
            });
            obj.css(delayInAttributes);
        }

        /**
         * remove css animations for delay and duration
         * @param obj
         * @param animation
         */
        function slickRemoveAnimation(obj, animation) {
            var delayInAttr = [
                'animation-' + animation,
                '-webkit-animation-' + animation,
                '-moz-animation-' + animation,
                '-o-animation-' + animation,
                '-ms-animation-' + animation
            ];
            var delayInAttributes = {};
            delayInAttr.forEach(function (entry) {

                delayInAttributes[entry] = '';
            });
            obj.css(delayInAttributes);
        }

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

                if (animationOut) {
                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {

                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn);
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn);
                            }

                            setTimeout(function () {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);
                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut);
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut);
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration');
                                }, getTimeout(delayOut, durationOut));

                            }, getTimeout(delayIn, durationIn));
                        }
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {

                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn);
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn);
                            }

                            setTimeout(function () {
                                slickSetAnimationDefault(self, hidden, animationIn, animatedClass);
                                slickSetAnimationDefault(self, visible, animationOut, animatedClass);

                                if (delayOut) {
                                    slickAddAnimation(self, 'delay', delayOut);
                                }
                                if (durationOut) {
                                    slickAddAnimation(self, 'duration', durationOut);
                                }
                                setTimeout(function() {
                                    slickRemoveAnimation(self, 'delay');
                                    slickRemoveAnimation(self, 'duration');
                                }, getTimeout(delayOut, durationOut));

                            }, getTimeout(delayIn, durationIn));
                        }
                    });

                    currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationOut, animatedClass, true);

                    });
                } else {

                    if (firstSlickItem.length > 0) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn);
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn);

                            }
                        }
                    }

                    currentSlickSlider.on('afterChange', function (event, slick, currentSlider) {
                        if (slickItem.hasClass('slick-current')) {
                            slickSetAnimationDefault(self, visible, animationIn, animatedClass, true);

                            if (delayIn) {
                                slickAddAnimation(self, 'delay', delayIn);
                            }
                            if (durationIn) {
                                slickAddAnimation(self, 'duration', durationIn);
                            }
                        }
                    });


                    currentSlickSlider.on('beforeChange', function (event, slick, currentSlider) {
                        slickSetAnimationDefault(self, hidden, animationIn, animatedClass, true);
                    });
                }

            });
        });
        return this;
    }
})(jQuery);
