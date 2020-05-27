module.exports = function justspamf(d) {
  d.hook('S_DIALOG', 3, (e) => {
    for (let i = 0; i < e.buttons.length; i++) { if ([1, 2, 4, 5, 51, 53, 54, 55, 56, 63].includes(e.buttons[i].type)) e.buttons[i].type = 43 }
    e.type = 1
    return true
  })
}
