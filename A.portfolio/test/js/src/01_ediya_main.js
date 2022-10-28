// 변수영역 ----------------------------------
var gnb = document.querySelector('.gnb');
var naviInnerSelector = document.querySelector('.navi_inner');
var naviInner = naviInnerSelector.querySelector('button');
var navOn = 'on';

// 이벤트영역 ----------------------------------
naviInner.addEventListener('click', function(event){
  event.preventDefault();
  // gnb.classList.toggle('on');  
  var checkClassName = gnb.classList.contains(navOn);
  // (checkClassName) ? gnb.classList.remove(navOn) : gnb.classList.add(navOn);
  if(checkClassName){
    gnb.classList.remove(navOn);
  }else{
    gnb.classList.add(navOn);
  }
});

// 변수 ----------------------------------------------------
var dropBtnSelector = document.querySelector('.drop_btn');
var dropBtn = dropBtnSelector.querySelector('button');
var subMenu = document.querySelector('.sub_menu');

var subMenuStyle = getComputedStyle(subMenu);
// console.log( subMenuStyle.display );


var displayStateFn = function(selector){
  // 선택자의 display 상태값을 가져오는데 기본 html문서에서 값을 가져오되 없다면, css기본값에서 가져오게
    return selector.style.display || getComputedStyle(selector).display;
    /*
    var displayState;
      if(!!selector.style.display){
        displayState = selector.style.display
      }else {
        displayState = getComputedStyle(selector).display;
      }
    */
};

// 이벤트 ----------------------------------------------------
dropBtn.addEventListener('click', function(event){
  event.preventDefault();
  // (subMenuStyle.display === 'none') ? subMenu.style.display = 'block' :  subMenu.style.display = 'none';
  var state = displayStateFn(subMenu);
  console.log( state );
  (state === 'none') ? subMenu.style.display = 'block' :  subMenu.style.display = 'none';
});
// ----------------------------------------------------------------
console.clear();

var ck = subMenu.style.display; // 0 , false, null, undefined, ''
console.log( ck  );
console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )