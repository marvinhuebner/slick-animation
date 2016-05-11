# slick-animation

`slick-animation` let´s you easy animate your elements which are contained in your [Slick](https://github.com/kenwheeler/slick/).

## Documentation

### Dependencies

- [slick](https://github.com/kenwheeler/slick/)
- [animate.css](https://github.com/daneden/animate.css)

### Version

0.3.3 Beta

### Installation

`bower install slick-animation`

### Basic Usage

- HTML

```html
<div data-animation-in=„fadeIn“><div>
```

- CSS

Add the following css to your css files:

```css
#your-slider [data-animation-in] {
    opacity: 0;
}
```

- JavaScript

```js
$(‚#your-slider’).slickAnimation();
``` 

_Replace `#your-slider´ with your own id oder class._

### Advanced Usage

You have several options for the animation.

- animation in: `data-animation-in`
- animation delay in: `data-delay-in`
- animation duration in: `data-duration-in`
- animation out: `data-animation-out`
- animation delay out: `data-delay-out`
- animation duration out: `data-duration-out`

- HTML

```html
<div data-animation-in="fadeIn" data-delay-in="2" data-duration-in="2" data-animation-out="fadeOUt" data-delay-out="2" data-duration-out="2"></div>
```

## Contribute

This library is still in a beta phase, fell free to fork and make a pull request.

## Bug Tracker

If you find a bug, please report it [here on Github!] (https://github.com/marvinhuebner/slick-animation/issues)

## Get in Touch

Developed by Marvin Hübner
- [@Marvin_Huebner](https://twitter.com/Marvin_Huebner)
- [Github Profile](https://github.com/marvinhuebner)