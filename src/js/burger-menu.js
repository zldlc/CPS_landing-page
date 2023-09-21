const burgerMenuOpenBtn = document.querySelector('.circle-btn--burger-menu')
const burgerMenuCloseBtn = document.querySelector('.circle-btn--close')
const burgerMenu = document.querySelector('.burger-menu')
const whiteBlur = document.querySelector('.blur')
const body = document.querySelector('body')

burgerMenuOpenBtn.addEventListener('click', () => {
  burgerMenu.classList.add('burger-menu--open')
  whiteBlur.classList.add('blur--active')
  body.classList.add('unscroll-laptop')
})

burgerMenuCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu--open')
  whiteBlur.classList.remove('blur--active')
  body.classList.remove('unscroll-laptop')
})

whiteBlur.addEventListener('click', () => {
  burgerMenu.classList.remove('burger-menu--open')
  whiteBlur.classList.remove('blur--active')
  body.classList.remove('unscroll-laptop')
})
