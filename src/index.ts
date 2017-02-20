import * as smoothscroll from 'smoothscroll-polyfill'
import * as hljs from 'highlightjs'
import './styles/main.css'

// smoothscroll
smoothscroll.polyfill()

const scrollDownEl = document.getElementById('scroll-down')
if (scrollDownEl) {
  scrollDownEl.onclick = () => {
    const height = document.body.clientHeight - document.body.scrollTop

    window.scrollBy({ top: height, left: 0, behavior: 'smooth' })
  }
}

// highlight
hljs.initHighlightingOnLoad()
