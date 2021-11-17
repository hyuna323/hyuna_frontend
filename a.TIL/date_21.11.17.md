# date 2021.11.17
## ✏️ TIL
- 📝 오늘 배운 내용
  - [x] `내장함수`의 정의와 생성자함수와 원시함수와의 관계

  ```js
  // 내장함수/메서드/빌트인 전역 함수 (cf. vs빌트인 전역 프로퍼티)
  /* 내장함수는 이미 만들어진 함수들을 의미한다.
    이는 프로그램 전역에서 직접적으로 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드다.
    e.g. console.log(), alert(), parseInt(), decodeURI(),...
  */

  // 원시함수
  /* -> JS를 구성하는 함수, js의 형타입을 (근본적으로) 구성하게 하는 최소한의/ 이미 되어있는 세팅이라고 볼 수 있다.
     -> 생성자 함수이자 내장함수이다.
        단! 내장함수라고 하기에는 있는 그대로 사용할 수 없다.
          e.g. Number(), String(), Boolean(), Date(), Function(), Object(), Array() .....
  */

  // 생성자 함수
  /* -> 유사한 객체를 만들어낼때 효율적으로 중복되는 코드 없이 여러개의 객체들을 만들어 내기 위해 필요한 함수 ex)붕어빵 틀
    특징1 : 첫글자가 대문자로 시작하는 함수
    특징2 : new가 붙으면 함수형태를 객체로 변환하여 사용할 수 있게 함
    특징3 : 생성자 함수 내에 this를 사용
      e.g.
        function Person(name,age) {   생성자 함수 (cf.객체의 추상화 - 붕어빵들과 붕어빵들)
        this.name=name;
        this.age=age;
      }
  */

  // 인스턴스
  /* -> 생성자 함수로 생성된 객체들
        ex) 슈크림, 팥이 들어간 - 붕어빵들
        e.g.
          var dr = new Person('daram',26); //{name:'daram',age:26} -> 인스턴스
          var ys = new Person('young',28);
  */
  ```
  - [x] `this`의 정의~~와 this 바인딩 case by case~~ 
    - `this`의 정의: **this는 자신이 속한 객체 또는 자신이 생성할 인스턴스를 가리키는** <u>자기 참조 변수 (self-referencing variable)</u>
    **다.      
    this를 통해 자신이 속한 객체 또는 자신이 생성할 인스턴스의 프로퍼티나 메서드를 참조할 수 있다.** 
    - 📍 _this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 의해 동적으로 결정된다._      
    - this가 가리키는 값     

      |**함수 호출 방식**|**this가 가리키는 값**(cf. this 바인딩)|
      |:--:|:--:|
      |일반 함수로서 호출|전역 객체 (cf. 브라우저/window)|
      |메서드로서 호출|메서드를 호출한 객체 (tip! 마침표 앞의 객체)|
      |생성자 함수로서 호출|생성자 함수가 (미래에) 생성할 인스턴스|

  - [x] `scss` 문법  
    - `@if`
    - `list`와 `map`으로 변수 생성 및 할당 👉 코드에 `map-get()`와 `nth()` 함수를 사용하여 적용

> alert
- 확인버튼만 존재 ex) '에러 메세지'
> prompt
- 입력창
- 매개변수가 두개

✋🏻 location: 현재 위치를 어디로 이동하세요
> comfirm
- 확인과 취소버튼이 존재
> math.random
- 0~1 사이의 난수
  - parseInt():정수
    - 강제로 정수로 바꿔줘야하는데 반올림/내림 올림/내림 할것인지 정할때 필요
    ```
    var num=20.4567889;
    var unit='30px';
    console.log(parseFloat(num));
    
    -> 20.4567889를 30px px화시키는 것
    -> 강제로 정수화
    ```
  - parseFloat():실수 <br />
  ➡️ 변환이 가능한 부분까지만(순서대로) 숫자로 처리하는 기능
    - 강제로 정수로 바꿔줘야하는데 반올림/내림 올림/내림 할것인지 정할때 필요
    ```
    500px -> 600px 브라우저 -> vw
    소수점이 들어있는 형태로 계산
    ```

>eval
- 정의: 강제로 문자형식을 숫자로 치환하여 임의 계산까지 완수하는 형태
- 유의: 하지만 typescript가 나온 현시점에서는 타입의 체크에 대해 중요성이 있기에 다소 쓰기에 조금 문제가 있음
- 다시, eval()은 문자열을 코드로 인식하게 하는 함수
- 특징1: eval()은 문자열을 코드로 인식하게 하는 함수
- 특징2: eval()함수는 인자로 숫자만 올 수 있음
```
var sum = eval('5' + '5'); => 55
👉🏻 숫자타입 : 즉, 문자열로 인자를 받았어도 '문자열+문자열'로 처리한 뒤 숫자형으로 강제(암묵적)타입 변환
var sum = eval('5 + 5'); => 10 
👉🏻 숫자타입 : 즉, 문자열로 인자를 받았어도 '문자열'들을 강제로 숫자형으로 타입변환 후 계산      
var sum = eval('문자열' + '5'); error
👉🏻 에러발생 : 특징2: eval()함수는 인자로 숫자만 올 수 있음
```
> NaN
- 숫자인데 숫자로 처리가 안되서 표시 되는 것
- 강제로 숫자처리 하는 것
- js에서 문자형태의 숫자는 기본 연산이 된다.(단, +형태는 연결로 처리)
- 문자형식의 숫자는 연산시 암묵적 변환을 거쳐서 숫자로 변환이 가능하면 처리
- 변환이 가능하지 않으면 NAN을 도출
```
var n1="7";
var n2='a';
var n=n2-n1;//NaN
```

> console 

🧷 log와 table
 
- console.log(arr); : 요약하여 띄워줌 <br />
- console.table(arr); : 표로 띄워줌

🧷 time과 timeEnd
- console.time(); : 언제 시작 <br />
- console.timeEnd(); : 언제 끝 <br />
➡️ 언제 시작하고 언제 끝나는지 알고 싶을 때 time과 timeEnd을 같이 작성해줘야 함

>encode/encodeURI
- URI: uniform Resource Identifier - 인터넷 식별자(UTF-8형식)
- 특수문자 몇개를 변환해주는 기능
- encodeURI() : 인터넷에서 식별가능한 형태로 변환하는 함수
- 변환 불가능한 텍스트(인코드가 안된다): A-z a-z 0-9 ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #
- 인터넷에서 문자가 가끔 %4%50/이런식으로 바뀌는 경우는 식별이 되기 때문
```
var space='';
var encodes=encodeURI(space); // vencodeURI space %20
console.log(space);
```
>encodeURIComponent()
- 문자 형식을 모두 변환해주는 기능(요소)
- 변환 불가능한 텍스트: A-z a-z 0-9 - _ . ! ~ * ' ()
- encode를 url로 볂한하면 변환이 안됨 but encodeComponent로 변환하면 변환 됨

📍 decodeURI / decodeURIComponent
- decodeURI(): encodeURI()의 복원기능
- decodeURIComponent(): encodeURIComponent()의 복원기능

> 시간 관련 함수
- setInterval() : 일정시간마다 수행
- clearInterval() : setInterval을 강제 삭제
- setTimeout() : 일정 시간 뒤에

👉🏻 배너 만들때 많이 사용

> 삼항연산자
- (조건) ? 조건이 참일때 실행되는 코드 : 조건이 거짓일때 실행되는 코드;



