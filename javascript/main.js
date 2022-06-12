function onScroll() {
  showBackToTopButtonOnScroll()
}

// open menu mobile
function openMenu() {
  document.body.classList.add('active')
  document.body.classList.add('active')
}

// close menu mobile
function closeMenu() {
  document.body.classList.remove('active')
  document.body.classList.remove('active')
}

// Botao me leve para cima
function showBackToTopButtonOnScroll() {
  if (scrollY > 250) {
    backToTopButton.classList.add('show') // classList add adiciona a classe show
  } else {
    backToTopButton.classList.remove('show') // classList remove removo a classe show
  }
}
// Efeito ScrollReveal
ScrollReveal({
  origin: 'left',
  duration: 2000,
  reset: true
}).reveal(
  `#home h1, #home p, #home img, #home a, 
   #about h1, #about p,
   #skills h1, #skills .container-skills,
   #project h1, #project p, #project h5, #project img, #project a,
   #service h1, #service p, #service .card,
   #contact h1, #contact p, #contact h3, #contact a, 
   #contact form, #contact button`,
  {
    Interval: 400
  }
)
