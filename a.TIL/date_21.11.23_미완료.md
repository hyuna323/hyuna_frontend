# Date 2021.11.23
## ✏️ TIL
### this와 prototype
### this
>this
- 생성자함수로 만들어질, 아직은 안만들어 졌지만, 미래에 만들어질 모든 객체의 자기 자신을 가리킨다
- 일반함수에서의 this는 window를 가리킴
- this는 윈도우객체 this.location=window.location 과 같은 결과가 나옴
```
console.log(this.location);
window.console.log('console 결과');
this.console.log('console 결과');
```

🧷 this의 종류
1. this: window
2. this: 생성자 함수로 만들어진 객체 (생성자 함수를 제작하려면 함수의 이름이 PascalCase기법으로 처리)
3. this: 일반함수 - window이지만 엄격한 모드('use strict')로 전환시 undefined
4. this: 메서드 처리시 객체로 처리되어 있는 변수명
5. this: 이벤트 핸들러 - 이벤트의 주체가 되는 선택자

*방법*
1. 변수를 선언한다 + 함수를 생성한다.(이때 생성자 함수를 생성하는 것이므로 PascalCase)
```
var ConstructorFn = function(){};
```
2. this 사용하는 이유
  - 객체를 생성할 생성자 함수로 만들어질 객체가 정해지지 않았음에도 그 객체를 위해 this라는 키워드로 여러가지 설정을 하고싶어서 사용

> 객체를 생성하는 방법
- 생성자
  - var 변수명 = new 함수();
  - 생성자 함수를 쓰는 이유
    - 재사용, 불필요한 중복 코드를 없애기 위해 -> 유지보수에 중요
  - 생성자함수에는 this를 써야 함 문법이 그렇게 정해진 것 -> 따라서 this를 배울 것이기 때문에 생성자 함수를 사용한다.
- 객체리터럴
  - var person2(변수명)={};에서 {}부분이 객체리터럴
  - 각각의 프로퍼티는 ,로 구분이 가능
  - 생성자를 이용하여 객체를 생성하는 것보다 간단함

✋🏻 method란?
- 프로포티 값으로 함수가 있으면 프로포티라고 불르지 않고 메소드라고 부름
- 메서드는 ()와 함께 나옴 
- 일반 프로포티는 Object.create;이런 식으로 나옴


#### prototype
> prototype
- 상속, 유전
- 생성자(꼭 생성자일 필요는 없음)에 담길 내용에 대한 별도의 처리되는 기본 객체
- 유전자 (상속) 생성자 함수보다 상위의 개념
- 📍 자식이 갖고 있지 않아도 부모/조부모/조상이 갖고 있으면 속성을 적용시키지 않아도 자동으로 적용되어 값을 처리함

> 유사배열객체를 배열로 강제 변환



> 인스턴스처리
- 기존에 만든 함수의 기능을 복제를 객체로 변환(new 연산자)
```
var user1 = new UserSetting('hyuna', 23, 'hyuna@naver.com'); 
user1.name = 'myha';
console.log( user1);

var user2 = new UserSetting('puppy', 10);
console.log( user2.email );

👉🏻 이런식으로 작성하면 name에 맞는 결과 즉, hyuna가 나오고 age는 23, email은 hyuna@naver.com 가 나옴
👉🏻 만약 이메일을 쓰지 않았는데 email이라고 쓰면 undefined라고 나옴
```