# Date 2021.11.09
## ✏️TIL
### 형타입(데이터타입)
>7가지 타입 (기본형 5개 + 특수형 2개)

🧷 <기본형>
- 숫자: js는 실수, 정수 구분 없음
- 문자: '' 내부에 글자 작성
- 논리형: 참(true)/거짓(false)을 의미하는 결과물을 도출 - true,false는 문자가 아니기 때문에 ''를 붙일 수 없음
- undefined: 값이 미정인 상태의 결과값이 존재
- null: 값이 없다./ 값 전달 시 없는 값

🧷 <특수형>
- 객체(배열/객체)
  - 배열<br />
    ▶️ html문서에서 ol처럼 여러개의 목록으로 []에 내용을 나열하는 것
  - 객체<br />
    ▶️ 배열처럼 나열하지만 순서 X <br />
    ▶️ 해당하는 목록에 대한 정의를 하는 것 html문서에서 dl/css의 속성 형태의 개념과 같음 <br />
    ▶️ {} 내부에 여러개의 내용을 담아서 그룹화 시킴
- 함수<br />
  ▶️ 어떤 행동을 처리하기 위해 만들어 놓은 묶음<br />
  ▶️ 선언식, 표현식, 즉시 실행 함수

📍 다른 프로그래밍 언어와의 차이점<br />
    객체 내부에 배열을 담거나 함수를 담을 수 O

---
- typeof(변수명): 데이터 타입(형타입)을 파악하는 기능
- parse...(변수명): 숫자로 보이는 문자 ('1')를 강제로 숫자형 타입으로 변환하는 함수 ('1' -> 1 로 바꿔줌)
  - parseInt(변수명): 정수를 변환 <br />
  ex) '1.3' ➡️ 1
  - parseFloat(변수명): 소수점을 변환 <br />
  ex) '1.3' ➡️ 1.3
  - Number(변수): 강제로 숫자로 만들었으니 숫자로 만들어는 주나 무슨 뜻인지는 모름
  ex) NaN(Not a Number)

>숫자(number)

숫자의 형타입은 숫자와 함께있기 때문에 'number' 즉, ''가 붙음
`var num=7;`<br />
`console.log(num, typeof(num));`<br />
⬇️<br />
`7 'number'`

---
🧷 Math 함수<br />
`console.log(Math.ceil(변수명));` - 올림처리 <br />
`console.log(Math.floor(변수명));` - 내림처리 <br />
`console.log(Math.round(변수명));` - 반올림처리
`console.log(Math.random(변수명));` - 0~1까지의 난수<br />
✳️ 1~10까지의 난수를 원할땐 `console.log(Math.random(변수명)*10);`

>문자(string)

var 변수명='';에서 ''안에 내용이 비어 있어도 값은 나옴

`var str='안녕';`<br />
`console.log(str, typeof(text));`<br />
⬇️<br />
`안녕 string`

예를 들어, 아래와 같은 상황일땐

`var str = '123';`<br />
`var str2 = str;`<br />
    `str = '문자';`<br />

`console.log( str, typeof(str) );`<br />
`console.log( str2, typeof(str2) );`<br />

`var str3 = str2 + 567;`<br />
`console.log( str3 );`<br />
⬇️<br />
`123567`<br />


str2=str='123'
따라서, 결과는 123567이라고 써 있지만 사실은 '123'567 <br />
즉, 문자 + 숫자 이다.
>논리(boolean)

```

```