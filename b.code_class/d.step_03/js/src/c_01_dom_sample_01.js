// c_01_dom_sample_01.js

// 1. 버튼을 클릭한다. -> 메뉴 나타나라!
// 2. 버튼을 클릭한다. -> 메뉴 사라지게!

// -------------------------------------------------
// 1. 버튼을 클릭한다. -> 메뉴 나타나라!             // document.getElementsByClassName('navbarSupportedContent');
// 1-1. 버튼 : .navbar-toggler  -> var navToggleBtn = document.querySelector('.navbar-toggler');
// 1-2. 클릭 : 선택자 클릭( add Event Listener ) ->navToggleBtn.addEventListener('click', function(event){});
// 1-3. 메뉴 : id="navbarSupportedContent" -> document.querySelector('#navbarSupportedContent');
// 1-4. 나타나기(어떻게?) - html.classname="action" :   class이름 추가(?) + (none-> block)
// 1-5. 기능을 수행하기 전 체크 
//      해당버튼의 기존 고유기능 해제 (event.preventDefault();)
//      action 유무 판단 classList.contanins("action")

var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  var checkClassName = 'on';
  // 1-5 사전기능 처리 : 
  var isAction = navbarSupportedContent.classList.contains(checkClassName);
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.classList.add(checkClassName);
  }else{
    navbarSupportedContent.classList.remove(checkClassName);
  }
});

var box = document.querySelector('.box');
var boxBtn = box.querySelector('a');
boxBtn.addEventListener('click',function(event){
  event.preventDefault(); // 고유기능을 사전에 예방하여 default처리해버리는 것
  console.log( event );
});

// ---------------------------------------------------------
// jQuery 코드로작성시
/*
var navToggleBtn = document.querySelector('.navbar-toggler');
var navbarSupportedContent = document.querySelector('#navbarSupportedContent');

navToggleBtn.addEventListener('click', function(event){
  event.preventDefault();
  // pre vent 기존에 가지고 있던 이벤트를 Default 예방하겠다라는 의미
  var checkClassName='on';
  // 1-5 사전 기능 처리:
  var isAction = navbarSupportedContent.classList('action');
  // console.log(isAction);
  // 1-4 수행
  if(!isAction){
    navbarSupportedContent.classList.add('action');
  }else{
    navbarSupportedContent.classList.remove('action');
  }
});
*/