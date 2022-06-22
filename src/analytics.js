import * as JQuery from 'jquery'
function createAnalytics() {
  let counter = 0
  let isDestroyed = false

  const listener = () => counter++

  JQuery(document).on('click', listener)

  return {
    destroy() {
      JQuery(document).off('click', listener)
      isDestroyed = true
    },

    getClick() {
      if (isDestroyed) {
        return `Analytics is destroyed. Total clicks = ${counter}`
      }
      return counter
    }
  }
}

window.analytics = createAnalytics()