import * as smoothscroll from 'smoothscroll-polyfill'

export default () => {

smoothscroll.polyfill()
  const scrollDownEl = document.getElementById('v-scrolldown')
  if (scrollDownEl) {
    scrollDownEl.onclick = () => {
      const height = document.body.clientHeight - document.body.scrollTop

      window.scrollBy({ top: height, left: 0, behavior: 'smooth' })
    }
  }
}
