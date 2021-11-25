// b_16_js_remind_02.js

// 일반변수, 참조변수

// 일반변수는 값 그 자체를 가르키는 것
/*
var i=0;
console.log(i); // 0
var i=0;
var n=i;
console.log(i); //0
var i=0;
var n=i;
    i=10;
console.log(i,n); // 10,0
*/
// i는 뒤에가서 10으로 바꿔줬기 때문에 마지막에 주어진 값이 적용이 되고 n은 그 위에 i의 값을 줬기 때문에 i=0이었던 0이 적용 되어 10,0 이라고 나온다
// 참조변수는 값이 아닌 주소를 가르키는 것 - [], {} (배열)
var arr=['하나','둘'];
var arr2=arr;
    arr[0]='셋';
    arr[1]='넷';
console.log(arr,arr2);
// 위와 동일한 참조변수 인것 같지만 실제로는 새로운 참조변수를 생성


var arrOrigin=[1,2,3];
var arrClone=arrOrigin;
    arrOrigin=['하나','둘','셋'];
console.log(arrOrigin,arrClone); // 깊은 복사라고 생각해도 됨

// --------------------------------------------------------------------------------
// 호이스팅 현상
// 1. 변수 이름리 상단으로 올라가서 존재하는 것처럼 처리
// 2. 기명 함수(함수선언식)로 된 것은 변수 선언보다 우선순위로 끌어올려지는 처리

function fnTest(data){
  return data.reduce(function(a,b){ // reduce
    return a + b;
  });
}; // 호이스팅 : 제일 위 상단으로 끌려 올려짐(함수 선언식으로 사용했을 때)
console.log(fnTest(arrClone)); // 6

// --------------------------------------------------------------------------------
console.clear();

var arrNumber=[90, 5, 30, 60, 450, 250, 3, 60, 8];
// 문제1. 위 배열에 들어가는 값 중 가장 작은 값을 구하는 방법 2가지 이상을 찾아내시오. - 최소값 3
// 1-1
var minResult=Math.min.apply(null, arrNumber);
// console.log(minResult);
// Array.prototype.call(?,1,2,3,4)
// Array.prototype.apply(?,[1,2,3,4]);
// apply 사용 이유: min이라는 함수를 사용하려면 ()안에 []을 사용하여 숫자를 넣어줘야 하는데 그러면 NaN이라고 나옴 그래서 apply를 써서 숫자가 나올 수 있게 함
// null을 쓰는 이유는 apply 메서드 문법은 null과 ''(빈배열), undefined가 전역객체로 대체되어서 가장 앞자리 인수로 들어감

// 1-2
var arrNumber2=[90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMin=arrNumber2.sort(function(a,b){return a-b;});
console.log(sortMin[0]);

/*
// 배열의 내용을 정렬로 처리(정렬기준을 설정(앞을값, 뒤의값){})
arrNumber2.sort(function(a,b){
  // 앞의값 - 뒤의값을 계산하여 결과가 음수이면 앞, 뒤 그대로 배치
  // 앞의값 - 뒤의값을 계산하여 결과가 양수이면 뒤, 앞 순서로 배치
  var c=a-b;
  // 정렬기준을 처리하여 반환
  return c;
});
*/

// 1-3 for문 이용
var arrNumber4=[90, 5, 30, 60, 450, 250, 3, 60, 8];
var arr4Len=arrNumber4.length;
var minNumber=arrNumber4[0];
for(i=0; i<arr4Len; i+=1){
  if(minNumber>arrNumber4[i]){
  // 만약에 minNumber가 arrNumber4보다 크다면
  // =포함시키면 안됨
    minNumber=arrNumber4[i];
  }
}
console.log('for:', minNumber);
// 위에 쓴적이 있기때문에 var 안만들고 바로 씀



// --------------------------------------------------------------------------------
// 문제2. 위 배열에 들어가는 값중 가장 큰 수를 구하는 방법 2가지 이상을 찾아 내시오. - 최대값 450
// 2-1
var maxResult=Math.max.apply(null, arrNumber);
// console.log(maxResult);

// 2-1
var arrNumber3=[90, 5, 30, 60, 450, 250, 3, 60, 8];
var sortMax=arrNumber3.sort(function(a,b){return b-a;});
console.log(sortMax[0]);
var last=sortMin.length-1;
    console.log(sortMin[last]); // 이해 안됨‼️
// console.log(arrNumber3[9]); // undefind가 나옴 근데 console.log(arrNumber3[arrNumber3.length]);도 undefined가 나옴 why? console.log(arrNumber3[arrNumber3.length]);=console.log(arrNumber3[9]);와 같기때문에 따라서 -1을 해줘야 함

// 문제3. 위 베열에 들어가는 값 대신 정수형의 1~3자리까지의 랜덤 숫자 10개를 담아 문제 1번의 값처럼 도출 - Math.random()을 이용하여 답을 알아내라
var arrRan = [];
var random; //= Math.floor(Math.random() * 1000);
var i=0;
for(; i<10; i++){
  random = Math.floor(Math.random() * 1000);
  arrRan.push( random );
}
// console.log( arrRan );
// ---------------------------------------------------------------

// 2 * 1 = 0
// 2 * 2 = 0
// .
// .
// .
// 9*9 = 81
console.clear();

/*
  i=2;
  for(; i<10; i+=1){
    // console.log('-i:',  i );
    for(n=1; n<10; n+=1){
      // console.log('n:',  n );
      console.log( i + 'x' + n +'=' +(i*n)  )
    }
  }
*/

var loop1 = function(i){
  var n;
  for(n=1; n<10; n+=1){
    console.log( i + 'x' + n +'=' +(i*n)  ) 
    if(i !== n){
      loop1(i);
    }
  }
};

// for(i=2; i<10; i++){
//   console.log( i+'단 ---------');
//   loop1(i);
// }
i=0;
// loop1(i=1);


// ______________________________________

// 500 -> 250  
// 0.1초마다 1씩 빠지는 숫자를 카운팅
// setInterval : 일정시간마다 조건이되면, 끊어주어야한다. : clearInterval
// setTimeout  : 정해진 시간 뒤에 1회성

// 1: 
// 0.1초 : 100
var startNum = 500;
var timed    = 10;
var endNum   = 250;
var intervalFn;
// ---------
var btn = document.querySelector('.btn');
var pSpan = document.querySelector('p>span');
pSpan.innerText = 'text작성';
var goCheck = true;
// ----------
/*
var countFn = function(start){
  var start = start;

  if(goCheck){
    goCheck = false;

    intervalFn = setInterval(function(){
      pSpan.innerText = start;
        start -= 1;
        if(start <= endNum){
          pSpan.innerText = endNum + '처리 완료';
          clearInterval(intervalFn);
          goCheck = true;
        }
    }, timed);
  }
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  countFn(startNum);
});
*/


// ------------------------------------------
var intervalCountFn = function(startNum){
  var countNum = startNum;
    setTimeout(function(){
      pSpan.innerText = countNum;
      countNum -= 1;
      if(countNum > endNum){
        intervalCountFn(countNum);
      }else{
        pSpan.innerText = countNum + ' 숫자 달성!!!';
      }
    }, timed);
};

btn.addEventListener('click', function(e){
  e.preventDefault();
  intervalCountFn(startNum);
});

// 선택자.innerHTML = '<text></text>'  :  선택자 내부에 요소(태그)삽입
// 선택자.innerText = '<text></text>'  :  선택자 내부에 글자를 삽입
