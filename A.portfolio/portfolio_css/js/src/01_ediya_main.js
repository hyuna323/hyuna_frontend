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

// ---------------------------------------------

// mainpage
function home(){
  let url = "http://127.0.0.1:5500/html/01_ediya_main.html";
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
function sns_I(){
  let url = "https://blog.naver.com/ediya-coffee";
  window.location = url;
}

// --------------------------
// 이디야 소식 버튼

//공지사항 버튼 클릭
$('.notice_on').click(function(){
  $('.notice_letter').show(); //공지사항 내용 나타내기
  $('.gallery_img').hide(); //갤러리 내용 숨기기
  $(this).attr('class','notice_on'); //공지사항 버튼 CSS변경
  $('.gallery_on').attr('class','gallery_off'); //갤러리 버튼 CSS 변경
});