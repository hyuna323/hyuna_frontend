// b_10_js_remind_01-01.js

var i=0;

// 작업중간, 연산 과정상 필요한 결과물을 확인
console.log('결과물은 개발자모드에서만 확인가능');

// 내용을 작업하고 나서 끝에는 ;을 붙여라
// ;을 붙이는 정확한 위치
// 1. 변수 선언/수정 끝
// 2. 함수를 호출시 끝에
// 3. 함수를 호출시 끝에
var a = function(){}; //에서 ;은 변수 var에게 붙는 것으로 function(함수)만 쓸땐 붙지 않는다

// while(){}
// if(){}else{}
// [].forEach();

// {}뒤에 ;을 붙이는 경우는 var 변수명={}; 이런 경우밖에 없음

// ----------------------------------------------------------
// 형타입
// 1. 숫자
// 숫자인지 아닌지 구분하는 방법은 1. ''(이 경우는 무조건 문자) 2. + (덧셈) - 결과가 그 값이 나오면 숫자 각각 나오면 문자 3.typeof - number라고 나오면 숫자
// 2. 문자
// 3. boolean : true/false
// if(ture){}else{} 참일경우 true 바로 뒤에 있는 {}에 들어있는 것을 나타내고 거짓일 경우 else 뒤에 {}안에 들어있는 것을 나타낼 것임
// 4. undefined/null
var a;
console.log(a);
// -> 값을 안적어줬기때문에
// 5. 객체([],{})
var a=[];
var b={};
console.log(a.constructor===Arraß);
// 건설사가 누구인지만 보면 쉬움
// 6. 함수
var funFn=function(){
  return 1;
} //<- 함수 표현식
function funFn2(){
  return 1;
} //<- 함수 선언식

funFn1();
funFn2();
// 연산
var a=10;
console.log(a+5); //15
console.log(a+'5'); //105
console.log(a+'a'); //10a
console.log(parseInt(a+'a'));

var b = a+'';
var b =a.toString();

// console.log(b+1, c+1);
// console.log(ar);
document.write(ar);

// 자기 자신에게 추가연산
// +=, -=, /=, *=, %=

// 아래 두개는 같은 것
//a+=5; // a라는 변수에 5를 더해라 이 방법을 더 선호
//a=a+5; // a에 5를 더한 것을 다시 a에 대입하여라

a=parseInt(a%=3); //10/3일 경우 몫은 3 나머지는 1
console.log(a);

(a>2)?(a=10):(a=20);
console.log(a);

console.log(a!==20)

// ---------------------------------------------------------
var arr=[]; //배열
// 배열의 쓰임은 []안에 나열되어 있는 값들은 순서가 있는 값들
var obj={}; //객체
// 순서가 없음
// (속성값) 정의

console.log(arr[4], obj.b, obj['b'])
// 이중배열, 이중객체라는 것들도 있느나 배열과 객체를 완전히 배우고 쓸 줄 알았을때 배우는게 좋음

// -----------------------------------------------------------
var fn=function(){
  return a+b;
}

var fnCon=fn(arr[3]); //fn(arr[3])는 변수에 담아 수행을 함 즉, 변수라고 하는 선언(변수)는 수행의 여부와는 관계가 없음 최종적으로 어떠한 값만 담을 수 있는 것
console.log(fnCon);

// 숫자나 문자는 어딘가의 변수에 담을 때 변수명은 값 자체를 갖는것 -> 일반변수라고 함
// var an=['4']은 주소를 갖는 것으로 이것을 참조변수라고 한다.
// 둘의 차이는 값을 갖느냐 주소를 갖느냐
// 함수는 독단적으로 사용하는 것이 아니라 호출한다는 개념으로 사용한다


// 일반변수인지 참조변수인지 어떻게 구분하는가?

// ------------------------------------------------------------

// if(){}else{}
// switch(){}
// for(){}
var launch='돈까스';
if(launch==='짜장면'){

} else if(launch==='볶음밥'){

}
// 참이어야만 수행 거짓이면 그 밑에 것

var arr2=[1,2,3,4,5,6,8,3,5,9,10,20,50,26];
// for(최초;비교;증감;){}
for(var j=0; j<10; j++){ //10번 반복 수행
  console.log('j:', j, '-',arr2[j]);
}

// [].forEach(function(각요소하나씩,순서){})
arr2.forEach(function(arg,idx){
  console.log(arg, att2[idx]);
})



// for (임의변수 in 객체){}
console.log(obj);
for (var k in obj){
  console.log(obj.c,obj['c']);
}

var an=[1,3,4];
var na=[1,3,4];
console.log(an===na);
// 둘은 값만 같고 이름이 다르기 때문에 false가 나옴

var n=5;
var u=5;
console.log(n===u);
// 값만 보기때문에 true

// 주소를 참조하면 얕은 복사
// 값자체를 복사하면 깊은 복사