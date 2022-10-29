// 01_ediya_main.js

// navi menu
// // menu ----------------------------------------------------
// var menuPartSelector = document.querySelector('.menu_part');
// var menuPart = menuPartSelector.querySelector('button');
// var menuInner = document.querySelector('.menu_inner');

// var menuInnerStyle = getComputedStyle(menuInner);
// // console.log( menuInnerStyle.display );


// var displayStateFn = function(selector){
//   // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
//     return selector.style.display || getComputedStyle(selector).display;
//     /*
//     var displayState;
//       if(!!selector.style.display){
//         displayState = selector.style.display
//       }else {
//         displayState = getComputedStyle(selector).display;
//       }
//     */
// };

// // 이벤트
// menuPart.addEventListener('click', function(event){
//   event.preventDefault();
//   // (menuInnerStyle.display === 'none') ? menuInner.style.display = 'block' :  menuInner.style.display = 'none';
//   var state = displayStateFn(menuInner);
//   console.log( state );
//   (state === 'none') ? menuInner.style.display = 'block' :  menuInner.style.display = 'none';
// });

// console.clear();

// var ck = menuInner.style.display; // 0 , false, null, undefined, ''
// console.log( ck  );
// console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
// console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )



// // members ----------------------------------------------------
// var membersPartSelector = document.querySelector('.members_part');
// var membersPart = membersPartSelector.querySelector('button');
// var membersInner = document.querySelector('.members_inner');

// var membersInnerStyle = getComputedStyle(membersInner);
// // console.log( membersInnerStyle.display );


// var displayStateFn = function(selector){
//   // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
//     return selector.style.display || getComputedStyle(selector).display;
//     /*
//     var displayState;
//       if(!!selector.style.display){
//         displayState = selector.style.display
//       }else {
//         displayState = getComputedStyle(selector).display;
//       }
//     */
// };

// // 이벤트
// membersPart.addEventListener('click', function(event){
//   event.preventDefault();
//   // (membersInnerStyle.display === 'none') ? membersInner.style.display = 'block' :  membersInner.style.display = 'none';
//   var state = displayStateFn(membersInner);
//   console.log( state );
//   (state === 'none') ? membersInner.style.display = 'block' :  membersInner.style.display = 'none';
// });

// console.clear();

// var ck = membersInner.style.display; // 0 , false, null, undefined, ''
// console.log( ck  );
// console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
// console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )


// // gift ----------------------------------------------------
// var giftPartSelector = document.querySelector('.gift_part');
// var giftPart = giftPartSelector.querySelector('button');
// var giftInner = document.querySelector('.gift_inner');

// var giftInnerStyle = getComputedStyle(giftInner);
// // console.log( giftInnerStyle.display );


// var displayStateFn = function(selector){
//   // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
//     return selector.style.display || getComputedStyle(selector).display;
//     /*
//     var displayState;
//       if(!!selector.style.display){
//         displayState = selector.style.display
//       }else {
//         displayState = getComputedStyle(selector).display;
//       }
//     */
// };

// // 이벤트
// giftPart.addEventListener('click', function(event){
//   event.preventDefault();
//   // (giftInnerStyle.display === 'none') ? giftInner.style.display = 'block' :  giftInner.style.display = 'none';
//   var state = displayStateFn(giftInner);
//   console.log( state );
//   (state === 'none') ? giftInner.style.display = 'block' :  giftInner.style.display = 'none';
// });

// console.clear();

// var ck = giftInner.style.display; // 0 , false, null, undefined, ''
// console.log( ck  );
// console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
// console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )


// // announcement -----------------------------------------------
// var announcementPartSelector = document.querySelector('.announcement_part');
// var announcementPart = announcementPartSelector.querySelector('button');
// var announcementInner = document.querySelector('.announcement_inner');

// var announcementInnerStyle = getComputedStyle(announcementInner);
// // console.log( announcementInnerStyle.display );


// var displayStateFn = function(selector){
//   // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
//     return selector.style.display || getComputedStyle(selector).display;
//     /*
//     var displayState;
//       if(!!selector.style.display){
//         displayState = selector.style.display
//       }else {
//         displayState = getComputedStyle(selector).display;
//       }
//     */
// };

// // 이벤트
// announcementPart.addEventListener('click', function(event){
//   event.preventDefault();
//   // (announcementInnerStyle.display === 'none') ? announcementInner.style.display = 'block' :  announcementInner.style.display = 'none';
//   var state = displayStateFn(announcementInner);
//   console.log( state );
//   (state === 'none') ? announcementInner.style.display = 'block' :  announcementInner.style.display = 'none';
// });

// console.clear();

// var ck = announcementInner.style.display; // 0 , false, null, undefined, ''
// console.log( ck  );
// console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
// console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )



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

// ---------------------------------------------

// mainpage
function home(){
  // 베르첼 배포시 url 바꾸기
  let url = "http://127.0.0.1:5500/html/01_ediya_main.html";
  window.location = url;
}

// loginpage
function login(){
  let url = "http://127.0.0.1:5502/html/02_ediya_login.html";
  window.location = url;
  }

// SNS Facebook
function sns_F(){
  let url = "https://www.facebook.com/iEDIYA";
  window.location = url;
}

// SNS Instargram
function sns_I(){
  let url = "https://www.instagram.com/ediya.coffee/";
  window.location = url;
}

// SNS Naver blog
function sns_N(){
  let url = "https://blog.naver.com/ediya-coffee";
  window.location = url;
}

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
