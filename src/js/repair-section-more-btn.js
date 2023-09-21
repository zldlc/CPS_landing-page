const repairSectionMoreBtn = document.querySelector('.repair-section__more-btn')
const moreBtnArrow = repairSectionMoreBtn.querySelector('svg')
const repairSectionMoreBtnText =
  repairSectionMoreBtn.querySelector('.more-btn__text')
const repairSectionSwiper = document.querySelector('.repair-section__swiper')
let checkedMoreBtnStatus = false

repairSectionMoreBtn.addEventListener('click', function () {
  if (!checkedMoreBtnStatus) {
    moreBtnArrow.classList.add('more-btn--top')
    checkedMoreBtnStatus = true
    repairSectionMoreBtnText.textContent = 'Скрыть'
    repairSectionSwiper.style.maxHeight = '550px'
  } else {
    moreBtnArrow.classList.remove('more-btn--top')
    checkedMoreBtnStatus = false
    repairSectionMoreBtnText.textContent = 'Показать все'
    repairSectionSwiper.style.maxHeight = '160px'
  }
})
