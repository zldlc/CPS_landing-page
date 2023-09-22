const feedbackOpenBtn = document.querySelectorAll('.circle-btn--feedback')
const feedbackModalPage = document.querySelector('.modal-page--feedback')
const feedbackCloseBtn = feedbackModalPage.querySelector('.circle-btn--close')
const callOpenBtn = document.querySelectorAll('.circle-btn--call')
const callModalPage = document.querySelector('.modal-page--call')
const callCloseBtn = callModalPage.querySelector('.circle-btn--close')
const whiteBlur = document.querySelector('.blur')
const closeOutsideBtn = document.querySelectorAll('.circle-btn--close-outside')
const body = document.querySelector('body')
const burgerMenu = document.querySelector('.burger-menu')
const modalWrapper = document.querySelectorAll('.modal-wrapper')

feedbackOpenBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalWrapper.forEach((wrapper) => {
      wrapper.classList.add('modal-wrapper--visible')
    })

    callModalPage.classList.remove('modal-page--open')
    burgerMenu.classList.remove('burger-menu--open')
    feedbackModalPage.classList.add('modal-page--open')
    whiteBlur.classList.add('blur--active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    body.classList.add('unscroll-laptop')

    closeOutsideBtn.forEach((btn) => {
      btn.style.opacity = '1'
      btn.style.transitionDelay = '0.2s'
    })
  })
})

feedbackCloseBtn.addEventListener('click', () => {
  modalWrapper.forEach((wrapper) => {
    wrapper.classList.remove('modal-wrapper--visible')
  })

  feedbackModalPage.classList.remove('modal-page--open')
  whiteBlur.classList.remove('blur--active')
  body.classList.remove('unscroll-laptop')

  closeOutsideBtn.forEach((btn) => {
    btn.style.opacity = '1'
    btn.style.transitionDelay = '0.2s'
  })
})

callOpenBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalWrapper.forEach((wrapper) => {
      wrapper.classList.add('modal-wrapper--visible')
    })

    feedbackModalPage.classList.remove('modal-page--open')
    burgerMenu.classList.remove('burger-menu--open')
    callModalPage.classList.add('modal-page--open')
    whiteBlur.classList.add('blur--active')
    window.scrollTo({ top: 0, behavior: 'smooth' })
    body.classList.add('unscroll-laptop')

    closeOutsideBtn.forEach((btn) => {
      btn.style.opacity = '1'
      btn.style.transitionDelay = '0.2s'
    })
  })
})

callCloseBtn.addEventListener('click', () => {
  modalWrapper.forEach((wrapper) => {
    wrapper.classList.remove('modal-wrapper--visible')
  })

  callModalPage.classList.remove('modal-page--open')
  whiteBlur.classList.remove('blur--active')
  body.classList.remove('unscroll-laptop')
})

whiteBlur.addEventListener('click', () => {
  modalWrapper.forEach((wrapper) => {
    wrapper.classList.remove('modal-wrapper--visible')
  })

  feedbackModalPage.classList.remove('modal-page--open')
  callModalPage.classList.remove('modal-page--open')
  whiteBlur.classList.remove('blur--active')
  body.classList.remove('unscroll-laptop')

  closeOutsideBtn.forEach((btn) => {
    btn.style.opacity = '0'
    btn.style.transitionDelay = '0s'
  })
})

closeOutsideBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    modalWrapper.forEach((wrapper) => {
      wrapper.classList.remove('modal-wrapper--visible')
    })

    feedbackModalPage.classList.remove('modal-page--open')
    callModalPage.classList.remove('modal-page--open')
    whiteBlur.classList.remove('blur--active')
    body.classList.remove('unscroll-laptop')

    closeOutsideBtn.forEach((btn) => {
      btn.style.opacity = '0'
      btn.style.transitionDelay = '0s'
    })
  })
})
