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
