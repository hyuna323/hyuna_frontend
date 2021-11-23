// b_15_js_import_data-for-jQuery.js

$(document).ready(function(){})
$.ready(function(){});

// FIE즉시실행함수
// var fn = function(){};
// fn(jQuery);

(function($){

  // jQuery특징
  // 1. $(): 선택자 - 선택자 이후에 들어가는 요소들 대부분 메소드
  //    해석하면 용어 그대로 읽으면 됨
  // 2. $.메소드(): 유틸리티메소드 - 어떠한 기능처리 - 이후도 메소드
  //    해석하면 메소드 기준으로 읽으면 됨

  // $.ajax().done(function(){});
  // 기본형식
  // Asynchronous JavaScript and XML (JSON)
  // 실시간(=비동기)으로 자료 체크기술
  // 동기: 싱크 - 한번하고 끝나는 것
  //       새로고침/아예 다른 페이지로 전환
  // 비동기: 여러번 변환할 수 있는 것
  //         새로고침X, 같은 페이지에서 내용만 바뀌는 것
  
  // js는 기본 경로가 html을 기준
  var path='../data/sample.txt';
  var dataFile;
  $.ajax({
    url:path
    // ajax를 통해 불러오고
  }).done(function(data){
    // console.log(data);
    var importData=data;
    var arr=importData.splte(',');
    // console.log(arr);
    dataFile=arr;
  });
  // done을 통해 처리한다

  setTimeout(function(){
  console.log(dataFile);
  },10);
  // setTimeout:일정시간 뒤에 안에 있는 함수를 수행하는 내장함수(순수 자바스크립트 함수)
  // 모든 비동기는 일정시간 뒤에 값을 확인할 수 있기때문에(딜레이 시간이 있음)

})(jQuery);