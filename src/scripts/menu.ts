import { addClass, removeClass } from './utils/dom'

export default () => {
  const openbtnEl = document.getElementById('v-openmenu')
  const closebtnEl = document.getElementById('v-closemenu')
  const menuEl = document.getElementById('v-menu')
  if (openbtnEl && menuEl) {
    openbtnEl.onclick = () => {
      addClass(menuEl, 'active')
      addClass(openbtnEl, 'hide')
      addClass(document.body, 'fixed')
    }
  }
  if (closebtnEl && menuEl) {
    closebtnEl.onclick = () => {
      removeClass(menuEl, 'active')
      removeClass(openbtnEl, 'hide')
      removeClass(document.body, 'fixed')
    }
  }
}
