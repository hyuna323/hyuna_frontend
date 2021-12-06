// c_03_dom_check_restore_01.js

// window, document, element
// alert, console.log도 window 따라서 window는 브라우저 그 자체를 의미 js에 들어가는 모든 언어는 window임 ex)window=사람
// document란? 우리가 실제로 사용하는 웹 사이트 화면이 나오는 페이지 그 안의 내용만 말함 html/css를 사용하는 아이들만 사용범위(약 90%는)
// document는 object
// toggle
// querySelectorAll(): 내가 필요한 것을 선택하여 찾아 확인하는 기능
// 비슷한 개념으로 getElementsByTagName(): 해당하는 요소를 찾아서 가져오는 기능
// getComputedStyle(): style 안에 있는 것을 찾아서 계산하는 기능
// console.log(conBox.style.width);은 null, undefined는 아닌 빈 값
// toggle: 스위치(on/off)를 말함 if문 같은 것이 toggle을 잘 쓸 수 있음
// window는 브라우저 자체로 window객체명은 생략이 가능하다.
console.log( window.document );
window.console.log('!!');
window.document.querySelector('h1');

// nodejs  -> window 개념대신 global

// document란? 
// 우리가 실제로 사용하는 웹 사이트 화면이 나오는 페이지
// document는 object
// -----------------------------------------------------
// document.querySelectorAll('li') // 찾아서 확인
// document.getElementsByTagName('li'); // 찾아서 가져오겠다.

var conBox = document.querySelector('#contentBox');
var btn = conBox.querySelector('button');
var conArea = conBox.querySelector('.content_area');

// conBox.style.width = '500px';
var conStyle = getComputedStyle(conBox).borderWidth;
console.log( conStyle ); // 1. 기존값
console.log( !!conBox.style.width ); // 2. X

// toggle
// console.log( btn );
btn.addEventListener('click', function(e){
  e.preventDefault();
  this.classList.toggle('on');
  // 에서 btn대신 this를 써줘도 됨 this의 의미는 이벤트 주체, property, window
  // this의 의미 : 이벤트 주체, property, window
  conArea.classList.toggle('on');
});

// -------------------------------------------------
console.clear();

