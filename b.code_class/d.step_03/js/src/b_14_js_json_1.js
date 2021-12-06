// b_14_js_json_1.js

var originData = [
  {  "id": 1,  "title": "Research Associate",  "link": "http://time.com" }, 
  {  "id": 2,  "title": "Senior Developer",  "link": "https://blogs.com"}, 
  {  "id": 3,  "title": "VP Quality Control",  "link": "https://xinhuanet.com"}, 
  {  "id": 4,  "title": "Automation Specialist II",  "link": "https://businesswire.com"}, 
  {  "id": 5,  "title": "Geological Engineer",  "link": "https://marriott.com"}, 
  {  "id": 6,  "title": "Account Representative III",  "link": "https://patch.com"}, 
  {  "id": 7,  "title": "Speech Pathologist",  "link": "https://who.int"}, 
  {  "id": 8,  "title": "Automation Specialist IV",  "link": "https://psu.edu"}, 
  {  "id": 9,  "title": "Health Coach I",  "link": "https://cnbc.com"}, 
  {  "id": 10,  "title": "Developer I",  "link": "http://miibeian.gov.cn"}
];

// originData copy
// 원본 데이터의 값을 카피하여 써라
var textData = JSON.stringify( originData );
// json에 있는 형식을 문자화 하여라
var dataList = JSON.parse( textData );
// 이미 완성이 되어 있는 데이터를 카피해야 한다면 문자로 바꾼뒤 객체로 바꿔주기

// ul을 생성하여 담기

// .navigation을 선택
// document.getElementsByClassName('navigation')[0];
// getElementsByClassName()는 ()안에 .없이 navigation만 남아주는 것
// getElementsByClassName에서 Elements 's'가 붙어주기 때문에 배열을 나타내는 말이 됨으로 0을 꼭 붙여주기
// 과거에 써줬던 방법
var navi = document.querySelector('.navigation');
// querySelector()는 ()안에 .navigation이라는 class까지 같이 담아주는 것
// 현재 많이 사용

// navi.style.width = '100%';
// navi.style.height = '50px';
// navi.style.backgroundColor = '#dcd';
navi.style = "width:100%; height:50px; background-color:#dcd";
// 줄여쓰는 방법
// 내가 원하는 값을 만들고 싶을 땐 style을 작성하면 됨

//생성 -> document.createElement('ul');
// 생성한다는 것은 creat하겠다는 의미를 가진 것 Elemen:요소

// var makeUl2 = '<ul class="list"></ul>'; // innerHTML을 사용시 직접 내용을 작성하는 기법
// navi.innerHTML = makeUl2;
// -> 글자처림 있는 아이들을 태그에 담겠다
var makeUl = document.createElement('ul'); // innHTML방식이아니라 내부에 추가로 삽입할때 요소로 삽입처리
makeUl.classList.add('list');
// class이름을 강제로 할당하는 것
navi.append(makeUl);

// ---------------------------------------------------------------------
//ul.list선택                : querySelector('.list')
//내부에담을 li 생성         : createElement('li')
//li내부에 유일요소인 a생성  : createElement('a') -> '<a></a>'(더 생성할 것이 없다는 의미)
//li를 .list에 담기          : (.list).append(li)
// a에 href=속성처리, text글자 삽입
// console.log( dataList[0].title, dataList[0].link );

var UlList = document.querySelector('.list');

// step 1 : li요소 하나만 생성하여 삽입하기!
/*
  var makeLi = document.createElement('li');
  // creat를 썼기때문에 생성은 됐으나 삽입이 된건 아님
  // 자바스크립트는 한번 만들고 처리했으면 다시 만들어야 함 수동적으로 가공해줘야 함
  var title = dataList[0].title;
  var link =  dataList[0].link;
  var makeA = '<a class="link"></a>';
  // <a>태그 안에 추가적인 여러 속성들을 만들 수 있음(장점)
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi);
  // append는 요소로 만들어진 createElement만 들어갈 수 있음
*/

// step2 - for문 : li 요소를 ul에 각각 여러개 삽입 // for(){}, forEach
// for문과 forEach의 근거는 var originData의 배열을 반복
// for문과 forEach문을 사용해도 관계는 없다
// for문은 문법적인 표현 forEach는 메서드
// 
/*
var i=0; 
var len = dataList.length; // 10
length는 갯수만큼 (n번째부터 n번째까지)
var makeLi, makeA, findA, title, link;

for(; i<len; i+=1){
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');

  title = dataList[i].title;
  link =  dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  // 여기서 title과 link는 ar originData에서의 배열안에 프로퍼티에서 가져온 것 거기에 써 있는 대로 쓰면 됨
  UlList.append(makeLi); // append=UlList.내부의뒤에삽입(생성된li)
  // makeLi = document.createElement('li');
  // lList.append(makeLi); // 위에 것과 같이 있으면 생성한 것을 집어넣겠다는 의미
  // for문 안에 makeLi를 넣으면 안된다 why? 이미 존재하기 때문에 var는 for문 밖에 따로 선언해주고 for문 안엔 var를 지워야 함
}
*/

// for문은 함수가 아니기 때문에 for문이 끝나더라도 외부에서 변수값을 체크할 수 있다


// step3 : forEach()
/*
dataList.forEach(function(content){ 
  // console.log( data.title, data.link, index );
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.link;
  findA.innerText = content.title;
  UlList.append(makeLi);
});
*/
// for문과 forEach의 차이는 전체를 순환한다는 의미(0~9)/각각 처리(값자체)
// forEach는 내부에 함수가 들어있기 때문에 var로 선언을 하면 forEach가 끝났을때 var의 값은 모르는 아이임


// --------------------------------------------
// 함수화처리
// forEach로 
/*
var loopFn1 = function(content){
  var makeLi = document.createElement('li');
  var makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  var findA = makeLi.querySelector('a');
  findA.href = content.link;
  findA.innerText = content.title;
  UlList.append(makeLi);
};

dataList.forEach( loopFn1 );
// 에초에 함수를 바로 수행한다는 뜻을 지니고 있기때문에 ( loopFn1() )처럼 ()를 쓰지 않는다
*/
// ---------------------------------------------
// for문을 함수화 처리
/*
var loopFn2 = function(i){
  var makeLi, makeA, findA, title, link;
  makeLi = document.createElement('li');
  makeA = '<a class="link">sample text</a>';
  makeLi.innerHTML = makeA;
  findA = makeLi.querySelector('a');
  title = dataList[i].title;
  link =  dataList[i].link;
  findA.href = link;
  findA.innerText = title;
  UlList.append(makeLi); // UlList.내부의뒤에삽입(생성된li)
};


var i=0; 
var len = dataList.length; // 10
for(; i<len; i+=1){
  loopFn2(i);
}
*/
// javascript로 순수하게 처리하는 것 : 모든 것을 수동으로 처리
// jQuery로 처리하는 것 : 반자동처리


(function($){
  // console.log( $.fn );
  // 여기서 $는 제이쿼리 그 자체를 말함
  // $=jQuery
  // unction($) 이렇게 쓰는 경우가 더 많음
  var ul = $('.list');
  // jQuery에서는 document.querySelector를 다 생략하고 $로 씀
  // .list에서 .은 class라는 뜻
  // li생성/삽입 
  
  // jQuery에서는 if, for, forEach 등등 문법 그대로 활용이 가능
  // forEach대신 수행가능한 메소드는jQuery에 별도로 첨부되어 있다.
  dataList.forEach(function(content, index){
    // ul.append('<li><a class="link" href="'+ content.link +'">' + content.title + '</a></li>');
    ul.append('<li><a class="link" href=""></a></li>');
    // append는 내부에 추가하는 기능
    var list = ul.children('li').eq(index).children('a');
    // 자식일경우 children을 씀 
    // eq는 순서 값을 할당 하는 것(순서를 가르키는 것) 제이쿼리에서 쓰는 것
    list.text(content.title);         // 선택자.innerText = '값';
    list.attr('href', content.link);  // 선택자.setAttribute('속성명', '값');
  });
})(jQuery); // 위에 $에서 jQuery를 읽어줌


// var box = document.querySelector('#box');
// var box2 = $('#box');
// var li1 = document.querySelectorAll('li');
// var li2 = $('li');
