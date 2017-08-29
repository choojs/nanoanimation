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

function animate (element, keyframes, timingProperties) {
  assert.equal(typeof element, 'object', 'nanoanimation: element should be type object')
  assert.ok(Array.isArray(keyframes), 'nanoanimation: keyframes should be an array')
  assert.equal(typeof timingProperties, 'object', 'nanoanimation: timingProperties should be type object')

  if (typeof window === 'undefined' || !('AnimationEvent' in window)) {
    return placeholder
  }

  // Element.animate plays by default. The new Animation constructor doesn't,
  // but is much less widely supported. By pausing the animation, we can
  // pretend we're using the newer API, and leave more control up to authors.
  var animation = element.animate(keyframes, timingProperties)
  animation.pause()
  return animation
}

function noop () {}
