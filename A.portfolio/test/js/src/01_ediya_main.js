// 01_ediya_main.js


// menu ----------------------------------------------------
var menuPartSelector = document.querySelector('.menu_part');
var menuPart = menuPartSelector.querySelector('button');
var menuInner = document.querySelector('.menu_inner');

var menuInnerStyle = getComputedStyle(menuInner);
// console.log( menuInnerStyle.display );


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
menuPart.addEventListener('click', function(event){
  event.preventDefault();
  // (menuInnerStyle.display === 'none') ? menuInner.style.display = 'block' :  menuInner.style.display = 'none';
  var state = displayStateFn(menuInner);
  console.log( state );
  (state === 'none') ? menuInner.style.display = 'block' :  menuInner.style.display = 'none';
});
// ----------------------------------------------------------------
console.clear();

var ck = menuInner.style.display; // 0 , false, null, undefined, ''
console.log( ck  );
console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )



// members ----------------------------------------------------
var membersPartSelector = document.querySelector('.members_part');
var membersPart = membersPartSelector.querySelector('button');
var membersInner = document.querySelector('.members_inner');

var membersInnerStyle = getComputedStyle(membersInner);
// console.log( membersInnerStyle.display );


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
membersPart.addEventListener('click', function(event){
  event.preventDefault();
  // (membersInnerStyle.display === 'none') ? membersInner.style.display = 'block' :  membersInner.style.display = 'none';
  var state = displayStateFn(membersInner);
  console.log( state );
  (state === 'none') ? membersInner.style.display = 'block' :  membersInner.style.display = 'none';
});
// ----------------------------------------------------------------
console.clear();

var ck = membersInner.style.display; // 0 , false, null, undefined, ''
console.log( ck  );
console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )


// gift ----------------------------------------------------
var giftPartSelector = document.querySelector('.gift_part');
var giftPart = giftPartSelector.querySelector('button');
var giftInner = document.querySelector('.gift_inner');

var giftInnerStyle = getComputedStyle(giftInner);
// console.log( giftInnerStyle.display );


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
giftPart.addEventListener('click', function(event){
  event.preventDefault();
  // (giftInnerStyle.display === 'none') ? giftInner.style.display = 'block' :  giftInner.style.display = 'none';
  var state = displayStateFn(giftInner);
  console.log( state );
  (state === 'none') ? giftInner.style.display = 'block' :  giftInner.style.display = 'none';
});
// ----------------------------------------------------------------
console.clear();

var ck = giftInner.style.display; // 0 , false, null, undefined, ''
console.log( ck  );
console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )


// announcement -----------------------------------------------
var announcementPartSelector = document.querySelector('.announcement_part');
var announcementPart = announcementPartSelector.querySelector('button');
var announcementInner = document.querySelector('.announcement_inner');

var announcementInnerStyle = getComputedStyle(announcementInner);
// console.log( announcementInnerStyle.display );


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
announcementPart.addEventListener('click', function(event){
  event.preventDefault();
  // (announcementInnerStyle.display === 'none') ? announcementInner.style.display = 'block' :  announcementInner.style.display = 'none';
  var state = displayStateFn(announcementInner);
  console.log( state );
  (state === 'none') ? announcementInner.style.display = 'block' :  announcementInner.style.display = 'none';
});
// ----------------------------------------------------------------
console.clear();

var ck = announcementInner.style.display; // 0 , false, null, undefined, ''
console.log( ck  );
console.log( !ck  ); // 원값의 결과를 boolean타입의 형태로 강제로 치환하기 위한 부정으로 처리
console.log( !!ck  ); // 원값의 처리가 boolean타입의 형태로 전환해보기 ( !! 두개 )
