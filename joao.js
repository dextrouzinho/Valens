/*abre e fecha menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/*esconder menu*/

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/*sombra scroll */

function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    /*scroll maior do que o header */
    header.classList.add('scroll')
  } else {
    /*scroll menor q header */
    header.classList.remove('scroll')
  }
}

/* swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewhell: true,
  keyboard: true
})

/* scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1000,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image #about .text,
  #services header, #services .card
  #testimonials header, #testimonias .testimonials
  #contact .text, #contact .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* to top */

function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 350) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*when scroll*/

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
