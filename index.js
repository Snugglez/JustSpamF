module.exports = function justspamf(d) {
  d.hook('S_DIALOG', 2, (e) => {
    for (let i = 0; i < e.options.length; i++) {e.options[i].style = 43}
    e.type = 1
    return true
  })
}
