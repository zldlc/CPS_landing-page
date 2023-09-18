const aboutUsMoreBtn = document.querySelector('.about-us__more-btn')
const moreBtnArrow = aboutUsMoreBtn.querySelector('svg')
const aboutUsMoreBtnText = aboutUsMoreBtn.querySelector('.more-btn__text')
const aboutUsText = document.querySelector('.about-us__text')
let checkedMoreBtnStatus = false

aboutUsMoreBtn.addEventListener('click', function () {
  if (!checkedMoreBtnStatus) {
    moreBtnArrow.classList.add('more-btn--top')
    checkedMoreBtnStatus = true
    aboutUsMoreBtnText.textContent = 'Скрыть'
    aboutUsText.style.maxHeight = '400px'
  } else {
    moreBtnArrow.classList.remove('more-btn--top')
    checkedMoreBtnStatus = false
    aboutUsMoreBtnText.textContent = 'Читать далее'
    aboutUsText.style.maxHeight = '100px'
  }
})
