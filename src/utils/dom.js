/* istanbul ignore next */

import Vue from 'vue'

const isServer = Vue.prototype.$isServer
// const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
// const MOZ_HACK_REGEXP = /^moz([A-Z])/
// const ieVersion = isServer ? 0 : Number(document.documentMode)

export let addClass = (el, cls) => {
  if (el) {
    let className = el.className
    if (className.indexOf(cls) === -1) {
      el.className = `${el.className} ${cls}`
    }
  }
}

export let removeClass = (el, cls) => {
  if (el) {
    let className = el.className
    if (className.indexOf(cls) !== -1) {
      el.className = className.replace(cls, '')
    }
  }
}

/* istanbul ignore next */
export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/* istanbul ignore next */
export const once = function (el, event, fn) {
  var listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}
