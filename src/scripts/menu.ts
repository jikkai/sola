import { hasClass, addClass, removeClass } from './utils/dom'

export default () => {
  const openbtnEl = document.getElementById('v-openmenu')
  const menuEl = document.getElementById('v-menu')
  if (openbtnEl && menuEl) {
    openbtnEl.onclick = () => {
      if (hasClass(menuEl, 'active')) {
        removeClass(menuEl, 'active')
        removeClass(document.body, 'active')
      } else {
        addClass(menuEl, 'active')
        addClass(document.body, 'active')
      }
    }
  }
}
