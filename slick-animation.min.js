/*
 slick-animation.js

 Version: 1.0.0 Beta
 Author: Marvin Hübner, Georg Dümmler
 Docs: https://github.com/marvinhuebner/slick-animation
 Repo: https://github.com/marvinhuebner/slick-animation
 */
!function(a){a.fn.slickAnimation=function(){function c(c){c.find("[data-animation-in]").each(function(c){var d=a(this),e=d.attr("data-animation-in"),f=d.attr("data-animation-out"),g=parseInt(d.attr("data-delay-in")),h=parseInt(d.attr("data-delay-out")),i=parseInt(d.attr("data-duration-in")),j=parseInt(d.attr("data-duration-out"));isNaN(g)&&(g=0),isNaN(h)&&(h=0),isNaN(i)&&(i=0),isNaN(j)&&(j=0),d.css("animation",e+" "+i+"s "+g+"s"),d.css("animation-fill-mode","both"),d.finish(),d.one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(e){e.preventDefault(),a(this).css({opacity:1}),d.finish(),d.css("animation",f+" "+j+"s "+h+"s"),a(this).one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(e){e.preventDefault(),a(this).css({opacity:0}),d.finish(),0==c&&b.slick("slickNext")})})})}function d(b){b.find("[data-animation-in]").each(function(){var b=a(this);b.css({opacity:0}),b.off(),b.finish(),b.css("animation","")})}var b=a(this);return c(b.find(".slick-current"),b),b.on("afterChange",function(a,e,f){d(b),c(b.find('[data-slick-index="'+f+'"]'),b)}),b.on("beforeChange",function(a,c,e){d(b)}),this}}(jQuery);