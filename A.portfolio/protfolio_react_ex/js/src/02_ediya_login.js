
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


// --------------------------------
// modal
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");
const openModal = () => {
  modal.classList.remove("on");
}
const colseModal = () => {
  modal.classList.add("on");
}
overlay.addEventListener("click", colseModal);
closeBtn.addEventListener("click", colseModal);
openButton.addEventListener("click", openModal);


// --------------------------
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