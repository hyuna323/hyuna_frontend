// Top 맨위로 ====================================
const ToTop = document.querySelector('.to_top');

window.addEventListener('scroll',function () {
  if(this.scrollY > 50) {
    ToTop.classList.add('on');
  } else {
    ToTop.classList.remove('on');
    
  }
})

ToTop.addEventListener('click',function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
})



// 언어 선택
//footsubmenu 선택, language part 선택, language_btn선택 ul 선택
const elFootSubmenu = document.querySelector('.footsubmenu');
const elLanguagePart = elFootSubmenu.querySelector('.language_part');
const LanguageBtn = elLanguagePart.querySelector('.language_btn');
const LelUl = elLanguagePart.querySelector('ul');

LanguageBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = LelUl.classList.contains('on');
  (check) ? LelUl.classList.remove('on') : LelUl.classList.add('on');
});

elLanguagePart.addEventListener('mouseleave', e => {
  e.preventDefault();
  LelUl.classList.remove('on');
});

// 관계자 선택
//footsubmenu 선택, language part 선택, language_btn선택 ul 선택
const elfootSubmenu = document.querySelector('.footsubmenu');
const elBrandsitePart = elfootSubmenu.querySelector('.brandsite_part');
const BrandsiteBtn = elBrandsitePart.querySelector('.brandsite_btn');
const Belul = elBrandsitePart.querySelector('ul');

BrandsiteBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = Belul.classList.contains('on');
  (check) ? Belul.classList.remove('on') : Belul.classList.add('on');
});

elBrandsitePart.addEventListener('mouseleave', e => {
  e.preventDefault();
  Belul.classList.remove('on');
});
