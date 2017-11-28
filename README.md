# nanoanimation
[![npm version][2]][3] [![build status][4]][5]
[![downloads][8]][9] [![js-standard-style][10]][11]

Safety wrapper around the Web Animations API. Allows animations to safely be
defined in Node, and browsers that don't support the Web Animation API. Default
behavior is to do nothing.

## Usage
```js
var animation = require('nanoanimation')
var css = require('sheetify')
var html = require('bel')

css('tachyons')

var el = html`
  <div class="bg-red h5 w5" onclick=${() => animation.play()}>
    Hello planet
  </div>
`

var keyFrames = [
  { transform: 'translateY(0%)' },
  { transform: 'translateY(100%)' }
]

var timingProperties = {
  duration: 1000,
  fill: 'forwards'
}

var animate = animation(keyFrames, timingProperties)
animate(el, function () {
  console.log('event ended')
})
document.body.appendChild(el)
```

## API
### `animate = animation(keyFrames, timingProperties)`
Create a new animation.

### `WebAnimation = animate(el, [done])`
Apply an animation to an element, calls `done` when finished. Returns the
nativate Web Animation object.

## See Also
- [Using the Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/nanoanimation.svg?style=flat-square
[3]: https://npmjs.org/package/nanoanimation
[4]: https://img.shields.io/travis/choojs/nanoanimation/master.svg?style=flat-square
[5]: https://travis-ci.org/choojs/nanoanimation
[6]: https://img.shields.io/codecov/c/github/choojs/nanoanimation/master.svg?style=flat-square
[7]: https://codecov.io/github/choojs/nanoanimation
[8]: http://img.shields.io/npm/dm/nanoanimation.svg?style=flat-square
[9]: https://npmjs.org/package/nanoanimation
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
