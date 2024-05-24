const drobBtn = document.querySelectorAll('.drop-btn');
const openBtn = document.querySelector('.menu-icon');
const closeBtn = document.querySelector('.menu-close-icon');
const topNav = document.querySelector('header nav');

drobBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('show')
  })
})

openBtn.addEventListener('click', () => {
  topNav.classList.add('show')
})
closeBtn.addEventListener('click', () => {
  topNav.classList.remove('show')
})


window.addEventListener('click', (e) => {
  if (!e.target.classList.contains('drop-el')){
    drobBtn.forEach(btn =>btn.classList.remove('show'))
  }
  console.log(e.target);
  if (!e.target.classList.contains('nav-el') && topNav.classList.contains('show')){
    topNav.classList.remove('show')
  }
})