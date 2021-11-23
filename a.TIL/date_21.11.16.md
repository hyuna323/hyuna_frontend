# Date 2021.11.16
## ✏️ TIL
### remind
- for each : 배열의 값들을 순회하는 메서드/기능/함수
- for each 안에는 무조건 function이 무조건 들어감
- [].forEach(function(각요소하나씩,순서){})
- 배열을 까기 위헤 썼음

### JSON
- javascript Object Notation의 약자
- 자바스크립트 객체의 표기하는 방식
- 왜 필요하냐? 로딩이 되는 데이터를 받아오는 형식이 제이슨 경량의 데이터형식이 필요했음 
-> 브라우저를 통해 어떤 사이트를 들어가면 사이트를 랜더링 하기 위해 필요한 관련 데이터들이 있다.
해당 데이터를 받아오기 위해 데이터를 담는 경량의 정보 처이 방식?표기법이 필요했는데 현재 채택하고 있는 방식은 json이다
- 제이슨 메서드 2가지-
  - JSON.stringify() :문자열화하는 기능 srting =문자열 
  - JSON.parse() : 문자열화 된 제이슨을 다시 변환한다는 뜻 뭘로 변환하냐는 제이슨으로 변환!!

### method
- parseInt=는 숫자 메서드
- 다양한데 적용 될 수 있고 다양함
```
var conArray = array.concat(array2); 
console.log( conArray );
3-> .length 뒤에()가 없으니 메서드는 아님
```

객체 길이를 알아내는 방법은
```
var count=0;
for (var key in obj){
  프로포티
  프로포티키 프로포티값
}
객체는 프로포티들의 집합이다
```
- count++은 크으으으으게 한바퀴돌라

- sort(); : 알파벳 순으로 배열 내부 요소를 나열시켜주는 메서드
- reverse(); : 원본 배열의 순서를 뒤집는 메서드

    - 다시 역순으로 하는 방법은 sort().reverse()를 같이 써주면 됨

- splice
  - array2.concat(array);

- map filter reduce
- forEach
  - reduce : 배열을 순환하면서 연산도 같이 진행해줄때
  - filter : 배열.filter(function(){return;});