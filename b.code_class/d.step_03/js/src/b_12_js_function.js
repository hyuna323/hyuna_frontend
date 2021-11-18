// b_12_js_function.js

// js에서 미리 만들어진 함수를 내장함수

function alert(){
  
}

var message="별도의 메세지창을 띄워 확인";
// alert(message);
// 확인버튼만 존재
// 에러 메세지

var userOld='나이를 입력하세요';
// var propResult = prompt(userOld);
// if (propResult < 20)?location="http://naver.com": document.write('어서오세요');
// 삼항 연산자
// (조건) ? __조건이 참일때 실행되는 코드__ : __조건이 거짓일때 실행되는 코드__;
// 참 하나 거짓 하나가 있어야만 가능
// location: 현재 위치를 어디로 이동하세요
// 변수를 적어야 함
// 어떤 값을 사용자에게로부터 입력받을 수 있고 그 값을 담은 변수를 통해 조건문 등과 같은 제어문으로 후처리를 할 수 있게 한다.


// function prompt(userOld, message){
//   return message; //어딘가에서 이 기능을 쓴다
// }
// 매개 변수가 두개

var adultcheck='당신은 성인이신가요?'
// var confirmCheck=confirm(adultcheck);
// confirm : 확인과 취소버튼이 존재
// (confirmCheck) ? document.write('성인이시군요'):document.write('미성년자임을 확인했습니다');
// 변수 작성 필요
// true/false를 반환한다.

// ------------------------------------------------------------------
// 내장 함수
// var console={
//   log:function(){return arguments},
//   warn: function(){return arguments},
//   error:function(){return arguments},
//   info:function(){return arguments},
//   dir:function(){return arguments},
//   table: function(){return arguments},
//   *time: function(){return arguments},
//   *timeEnd: function(){return arguments},
//   group: function(){return arguments},
//   groupEnd: function(){return arguments},
// clear:function(){}
// }

// js에 이미 내장 되어있는 함수

var arr=['one','two','three','four','five'];
var obj={'a':'one','b':'two','c':'three'};
console.log(arr);//요약하여 띄워줌
console.table(arr);// 표로 띄워줌
console.table(obj);// 표로 띄워줌

console.time();
console.log(arr);
console.timeEnd();
// 시작과 끝이 얼마나 걸렸는가를 알려줌
// 언제 시작하고 언제 끝나는지 알고 싶을 때 time과 timeEnd을 같이 작성해줘야 함

console.clear();

// ------------------------------------------------------------------
// Math round, ceil, floor .....

var random=Math.ceil(Math.random()*10); // 0~1 사이의 난수
console.log(random);

// parseInt()-정수로, parseFloat()-실수로:변환이 가능한 부분까지만(순서대로) 숫자로 처리하는 기능
// 우리가 알고 있는 메서드 함수는 내장함수

// parseInt 설명
var num=20.4567889; // 강제로 정수로 바꿔줘야하는데 반올림/내림 올림/내림 할것인지 정할때 필요
var unit='30px';
console.log(parseFloat(num));
// 20.4567889를 30px px화시키는 것
// 강제로 정수화

// parseFloat 설명
var num='20.4567889vw012'; // 강제로 정수로 바꿔줘야하는데 반올림/내림 올림/내림 할것인지 정할때 필요
var unit='30px';
// 500px -> 600px 브라우저 -> vw
// 소수점이 들어있는 형태로 계산

// ------------------------------------------------------------------
// 정의: 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 형태
// 유의: 하지만 typescript가 나온 현시점에서는 타입의 체크에 대해 중요성이 있기에 다소 쓰기에 조금 문제가 있음
// 다시, eval()은 문자열을 코드로 인식하게 하는 함수
// 특징1: eval()은 문자열을 코드로 인식하게 하는 함수
var sum = eval('5' + '5'); //55 -> 숫자타입 -> 즉, 문자열로 인자를 받았어도 '문자열+문자열'로 처리한 뒤 숫자형으로 강제(암묵적)타입 변환
var sum = eval('5 + 5');    //10 -> 숫자타입 -> 즉, 문자열로 인자를 받았어도 '문자열'들을 강제로 숫자형으로 타입변환 후 계산      
var sum = eval('문자열' + '5');  //에러발생 -> 특징2: eval()함수는 인자로 숫자만 올 수 있음

console.log(sum);

// js에서 문자형태의 숫자는 기본 연산이 된다.(단, +형태는 연결로 처리)
// 문자형식의 숫자는 연산시 암묵적 변환을 거쳐서 숫자로 변환이 가능하면 처리
// 변환이 가능하지 않으면 NAN을 도출
var n1="7";
var n2='a';
var n=n2-n1;//NaN
// var nRel=isNAN(n);//js에서 is...
// console.log(n,nRel);

// ------------------------------------------------------------------
// URI: uniform Resource Identifier - 인터넷 식별자(UTF-8형식)
// 특수문자 몇개를 변환해주는 기능
// encodeURI() -> 인터넷에서 식별가능한 형태로 변환하는 함수
// 변환 불가능한 텍스트(인코드가 안된다): A-z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
// 인터넷에서 문자가 가끔 %4%50/이런식으로 바뀌는 경우는 식별이 되기 때문
var space='';
var encodes=encodeURI(space); // vencodeURI space %20
console.log(space);

// encodeURIComponent() -> 문자 형식을 모두 변환해주는 기능(요소)
// 변환 불가능한 텍스트: A-z a-z 0-9 - _ . ! ~ * ' ()
var url='http://naver.com';
// console.log(encode);
// encode를 url로 볂한하면 변환이 안됨 but encodeComponent로 변환하면 변환 됨

// decodeURI(): encodeURI()의 복원기능
// decodeURIComponent(): encodeURIComponent()의 복원기능

var Korea='https://대한민국.kr';
// var enKorea=encodeURI(korea);
// 한글로 바꿔서 다시 보여주고 싶을 땐
// var deKorea=decodeURO(enKorea);
// console.log(deKorea);

// ------------------------------------------------------------------
// 배너 만들때 사용
// setInterval() -> 일정시간마다 수행
// clearInterval() -> setInterval을 강제 삭제
// setTimeout() -> 일정 시간 뒤에

console.clear();

console.log('글자 등장');
setTimeout(function(){
  console.log('3초 뒤에 등장~!');
}, 3000);//3초 뒤에 처리하여라

// ------------------------------------------------------------------

// var i=0;
// var setI=setInterval(function(){ //setInterval에 이름을 부여해주어서 clearInterval을 해줌
//           console.log('i:',i);
//           // i>=5)?i=0:i++; // 해당 숫자까지 가면 멈추게 함
//           i++; //무엇을
//             if(i>20){
//               clearInterval(setI);
//             } // setInterval을 했을때 clearInterval을 안하면 계속 돌고 있음 따라서, 같이 사용해줘야 함
//         },500); //0.5초마다 계속 수행

//       var set0= setInterval(function(){},1000);

// ------------------------------------------------------------------

// 생성자 함수 - 객체의 생성 시에만 호출되어 메모리 생성과 동시에 객체의 데이터를 초기화하는 역할
//             - 유사한 객체를 만들어낼때 효율적으로 중복되는 코드 없이, 여러개의 객체들을  만들어 내기 위해 필요한 함수 ex)붕어빵 틀
// 대문자로 시작
// instane - 추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플렛이 실제 구현된 것
//         - 인스턴스 - 생성자 함수로 생성된 객체들 - ex) 슈크림이 들어간, 팥이 들어간 … 붕어빵들
// new Date(); : 함수중에 대문자가 나타나는 아이는 앞에 new라고 하는 추가 연산자를 적어준다 이를 생성자 함수, instance라고 한다.
// new가 붙으면 함수형태를 객체로 변환하여 사용할 수 있게 함 - 생성자함수로 객체를 만들때는 즉, 인스턴스를 생성할 떄는new 연산자를 사용해야한다
// new를 붙이면 instance화(객체화) 시키는 것

var date = new Date(); 
// Date 함수는 날짜와 관련있는 기능
date.setFullYear(2019);
var year=date.getFullYear();
var month=date.getMonth()+1;
var day=date.getDate();

console.log(year,month,day); // 실제로 이렇게만 하고 끝나는 아이가 아님

// ------------------------------------------------------------------

console.log( Array );
console.log( Object );
console.log( Function );
console.log( Number );
console.log( String );
// new Array
// new Object
// new Function
// new Number
// new String
// => new가 붙으면 원시 객체 안붙으면 원시함수

// 원시함수 - 생성자함수, js를 기본구성하는 함수 - 형타입을 구성하게 하는 최소한의 세팅:직접사용 불가
// Number(), String(), Boolean(), Date(), Function(), Object(), Array() .....
// 정의된 원시함수는 직접사용이 불가능한 함수 - new를 붙이기
// Date 는 단독으로 쓸 수 없음

// 직접사용이 불가능한 함수를 객체로 변환하여 객체로 변환하여 사용할 수 있도록하는 근본이 되는 함수
// 생성자 함수 - 첫글자가 대문자로 시작하는 함수

// 내장함수 - js에 있는 함수
// instrance - 생성자 함수에 의해 생성된 객체

// 재정리
// 원시함수 :애초에 만들어진 기본개념을 담은 함수 첫글자가 대문자인 생성자함수
// 내장함수 : 기본형태로 사용할 수 있도록 만들어진 함수
// 생성자함수 : 원함수를 그대로 사용하는게 아닌 이를 객체로 변환하려 사용하는 함수(첫글자 대문자)
// instance : 함수를 객체로 변환 처리 된 것(함수에 new를 붙여 처리하게 하는 방법)

// 변경/생성할 수 있는 함수 : 생성자 함수
// 처음부터 생성된 함수는 변경이 불가 : 원시함수/내장함수

// 유사배열이 존재하는 이유: li들의 요소를 단순 나열하여 배열로 처리 객체로 모은 형식

// ❓this가 뭔지 찾아보기
// 


// 메서드가 뭔진 알겠지만 내장함수 정의도 안다 내장함수는 메서드는 내장함수인지 Array.isArray가 함수인지 isArray만 내장함수인지?