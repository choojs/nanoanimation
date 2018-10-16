import assert from 'www.unpkg.com/nanoassert?module'

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

export default function animate (keyframes, timingProperties) {
  assert.equal(typeof keyframes, 'object', 'nanoanimation: keyframes should be an array or an object')
  assert.ok(typeof timingProperties === 'object' || typeof timingProperties === 'number', 'nanoanimation: timingProperties should be type object or number')

  return function (element, _done) {
    var done = _done || noop
    assert.equal(typeof element, 'object', 'nanoanimation: element should be type object')
    assert.equal(typeof done, 'function', 'nanoanimation: done should be type function')

    if (typeof window === 'undefined' || !('AnimationEvent' in window)) {
      done()
      return placeholder
    }

    var animation = element.animate(keyframes, timingProperties)
    animation.pause()
    animation.onfinish = done
    return animation
  }
}

function noop () {}
