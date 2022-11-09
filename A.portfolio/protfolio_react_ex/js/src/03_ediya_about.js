// page 이동
function home(){
  // 베르첼 배포시 url 바꾸기
  let url = "http://127.0.0.1:5502/html/01_ediya_main.html";
  window.location = url;
}

// loginpage
function login(){
  let url = "http://127.0.0.1:5502/html/02_ediya_login.html";
  window.location = url;
  }


// --------------------------
// 언어 선택
//footsubmenu 선택, language part 선택, language_btn선택 ul 선택
const elFootSubmenu = document.querySelector('.footsubmenu');
const elLanguagePart = elFootSubmenu.querySelector('.language_part');
const LanguageBtn = elLanguagePart.querySelector('.language_btn');
const elUl = elLanguagePart.querySelector('ul');

LanguageBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = elUl.classList.contains('on');
  (check) ? elUl.classList.remove('on') : elUl.classList.add('on');
});

// 관계자 선택
//footsubmenu 선택, language part 선택, language_btn선택 ul 선택
const elfootSubmenu = document.querySelector('.footsubmenu');
const elBrandsitePart = elfootSubmenu.querySelector('.brandsite_part');
const BrandsiteBtn = elBrandsitePart.querySelector('.brandsite_btn');
const elul = elBrandsitePart.querySelector('ul');

BrandsiteBtn.addEventListener('click', e => {
  e.preventDefault();
  let check = elul.classList.contains('on');
  (check) ? elul.classList.remove('on') : elul.classList.add('on');
});

// Top 맨위로
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