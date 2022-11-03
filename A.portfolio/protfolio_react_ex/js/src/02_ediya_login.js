
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