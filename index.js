var assert = require('nanoassert')

var placeholder = {
  cancel: noop,
  finish: noop,
  pause: noop,
  play: noop,
  reverse: noop,
  finished: {
    then: Promise.resolve  // Animations can be chained with promises or property definitions
  }
}

module.exports = animate

function animate (keyframes, timingProperties) {
  assert.ok(Array.isArray(keyframes), 'nanoanimation: keyframes should be an array')
  assert.equal(typeof timingProperties, 'object', 'nanoanimation: timingProperties should be type object')

  return function (element, _done) {
    var done = _done || noop
    assert.equal(typeof element, 'object', 'nanoanimation: element should be type object')
    assert.equal(typeof done, 'function', 'nanoanimation: done should be type function')

    if (typeof window === 'undefined' || !('AnimationEvent' in window)) {
      done()
      return placeholder
    }

    var animation = element.animate(keyframes, timingProperties)
    animation.onfinish = done
    return animation
  }
}

function noop () {}
