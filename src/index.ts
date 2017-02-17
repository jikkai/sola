import './styles/main.css'

const scrollDownEl = document.getElementById('scroll-down')
if (scrollDownEl) {
  scrollDownEl.onclick = () => {
    const height = document.body.clientHeight
    document.body.scrollTop = height
  }
}
