// // header 고정
// const elHeadBox = document.querySelector('.head_inner');

// const OPTION_FIX = 'fix';
// const offsetCheck = elHeadBox.offsetTop;
// // console.log(offsetCheck);

// window.addEventListener('scroll', e => {
//   const target = parseInt(e.currentTarget.scrollY);
//   const elHeadBoxClass = elHeadBox.classList;
//   (target >= offsetCheck) ? elHeadBoxClass.add(OPTION_FIX) : elHeadBoxClass.remove(OPTION_FIX);
// });

$('.sidemenu_btn').click(function(){
  $('.side_submenu').slideUp();
  if ($(this).children('.side_submenu').is(':hidden')){
    $(this).children('.side_submenu').slideDown();
  } else{
    $(this).children('.side_submenu').slideUp();
  }
});

// viewBox ==============================
var slideIndex = 0;

// html 끝난 후 동작
window.onload=function(){
  showSlides(slideIndex);

  const sec = 3000;
  setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);

  }, sec);
}
function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {

  const slides = document.getElementsByClassName("viewport");
  const dots = document.getElementsByClassName("dot");
  const size = slides.length;

  if ((n+1) > size) {
    slideIndex = 0; n = 0;
  }else if (n < 0) {
    slideIndex = (size-1);
    n = (size-1);
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += " active";
}

// header fixed
// let header = document.querySelector(".header");
// let headerHeight = header.offsetHeight;

// window.onscroll = function () {
//   let windowTop = window.scrollY;
//   if (windowTop >= headerHeight) {
//     header.classList.add("drop");
//   } else {
//     header.classList.remove("drop");
//   }
// };

// page 이동 ---------------------------------------------
// mainpage
// 베르첼 배포시 url 바꾸기
function home(){
  let url = "http://127.0.0.1:5500/html/01_ediya_main.html";
  window.location = url;
}

// loginpage
function login(){
  let url = "http://127.0.0.1:5502/html/02_ediya_login.html";
  window.location = url;
  }

// aboutpage
function about(){
  let url = "http://127.0.0.1:5502/html/03_ediya_about.html";
  window.location = url;
  }

// SNS Facebook
function sns_F(){
  window.open("https://www.facebook.com/iEDIYA","_blank");
}

// SNS Instargram
function sns_I(){
  window.open("https://www.instagram.com/ediya.coffee/","_blank");
}

// SNS Naver blog
function sns_N(){
  window.open("https://blog.naver.com/ediya-coffee","_blank");
}

// SNS Youtube
function sns_Y(){
  window.open("https://youtube.com/c/%EC%9D%B4%EB%94%94%EC%95%BC%EC%BB%A4%ED%94%BCediyacoffee","_blank");
}

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

// --------------------------
// 이디야 소식 버튼

// //공지사항 버튼 클릭
// $('.notice_on').click(function(){
//   $('.notice_letter').show(); //공지사항 내용 나타내기
//   $('.gallery_img').hide(); //갤러리 내용 숨기기
//   $(this).attr('class','notice_on'); //공지사항 버튼 CSS변경
//   $('.gallery_on').attr('class','gallery_off'); //갤러리 버튼 CSS 변경
// });

// // 메뉴네비
// // 변수영역 ----------------------------------
// var navArea = document.querySelector('.nav_area');
// var naviBtnSelector = document.querySelector('.navi_btn');
// var naviBtn = naviBtnSelector.querySelector('button');
// var navOn = 'on';

// // 이벤트영역 ----------------------------------
// naviBtn.addEventListener('click', function(event){
//   event.preventDefault();
//   // navArea.classList.toggle('on');  
//   var checkClassName = navArea.classList.contains(navOn);
//   (checkClassName) ? navArea.classList.remove(navOn) : navArea.classList.add(navOn);
// });
