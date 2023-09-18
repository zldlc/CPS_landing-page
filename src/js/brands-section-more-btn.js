const brandSectionMoreBtn = document.querySelector('.brands-section__more-btn')
const moreBtnArrow = brandSectionMoreBtn.querySelector('svg')
const brandSectionMoreBtnText =
  brandSectionMoreBtn.querySelector('.more-btn__text')
const brandSectionSwiper = document.querySelector('.brands-section__swiper')
let checkedMoreBtnStatus = false

brandSectionMoreBtnText.addEventListener('click', function () {
  if (!checkedMoreBtnStatus) {
    moreBtnArrow.classList.add('more-btn--top')
    checkedMoreBtnStatus = true
    brandSectionMoreBtnText.textContent = 'Скрыть'
    brandSectionSwiper.style.maxHeight = '350px'
  } else {
    moreBtnArrow.classList.remove('more-btn--top')
    checkedMoreBtnStatus = false
    brandSectionMoreBtnText.textContent = 'Показать все'
    brandSectionSwiper.style.maxHeight = '160px'
  }
})
