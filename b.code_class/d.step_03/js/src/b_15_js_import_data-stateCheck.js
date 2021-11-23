// b_15_js_import_data-stateCheck.js

// 외부문서를 불러오기
// 1. 생성자 함수 XMLHttpRequest();
// 2. 불러온 함수를 객체화
// 3. 객체 내부의 메소드
// ---------------------------------------------------------------------------
// 예외처리 : try{} catch(){} finaly{}
// 4. 상태메세지 처리:연결상태가 어떠한 상태인지 체크하는 것 onreadystatechange
// ---------------------------------------------------------------------------
// 5. 문서를 찾아 열어주기:http.open(method(처리방식), url(연동주소), async(비동기처리허용유무(없어도 됨)))
// 6. 문서처리:http.send()
// ---------------------------------------------------------------------------
/*
var linkFn = function(url,method,async){
  var http = new XMLHttpRequest();
  var stateMessage;

  http.onreadystatechange = function(){
    console.log( http.status );
    switch (http.readyState){
      case  XMLHttpRequest.UNSENT:// 0
        stateMessage = '서버와의 데이터 연결 끊어짐'
        break;
      case  XMLHttpRequest.OPENED :// 1
        stateMessage = '서버연결'
        break;
      case  XMLHttpRequest.HEADERS_RECEIVED:// 2
        stateMessage = '서버 접근중, 파일검색중'
        break;
      case  XMLHttpRequest.LOADING:// 3
        stateMessage = '데이터 불러오는 중'
        break;
      case  XMLHttpRequest.DONE:// 4
        stateMessage = '서버와 연결 대기중'
        break;
    }
    if(http.readyState === XMLHttpRequest.DONE){
      console.log( '서버가 이상없이 연결되었음' );
    }
    // console.log( stateMessage);
  }

  var method = method || 'GET'; //앞의 자료가 undefined면 뒤위 값 대체
  // var url = '../data/person_card.json';
  var url = url;
  var async = async || true;

  http.open(method, url, true);
  http.send();
}

// ---------------------------------------------------------------------------
var method='GET';
var url='../data/person_card.json';
var async=true;

linkFn(url);
*/
// setTimeout(function(){
//   console.log(stateMessage);
//   // console.log(http);
//   console.log(http.status);
//   console.log(http.responseText);
// },100);

// ---------------------------------------------------------------------------
// $('button').on('click',function(){});
// var btn=document.querySelector('button');
// btn.addEventListener('click',function(){});
// click은 이벤트 핸들러 (함수명)
// 이벤트는 변화 감지

/*
var xhr = new XMLHttpRequest();
// console.log(xhr.onreadystatechange);// 준비상태의 변화를 감지 - 인식
// console.log(xhr.readyState); // 준비상태 - 신호등

xhr.open('GET', '../data/person_card.json', true) // 자료 찾아서 신청
xhr.send();
*/
// ---------------------------------------------------------------------------
fetch('../data/person_card.json').then(function(response){
  console.log(response.json());
})