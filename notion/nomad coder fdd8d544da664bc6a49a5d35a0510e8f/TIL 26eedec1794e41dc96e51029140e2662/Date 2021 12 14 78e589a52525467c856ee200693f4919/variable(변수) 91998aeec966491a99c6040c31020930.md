# variable(변수)

📚 const, let, var

📎 const : constant(상수) - 값이 바뀔 수 없음

📎 let : 변수 값을 업데이트(변경)하고 싶을 때 사용

ex) 상단에 이미 let myName을 작성 시 하단에는 let myName을 사용 할 수 없음 myName만 사용 가능

```jsx
let myName = "hyuna";
console.log("hello "+myName);
//-------------------------
//hello hyuna
myName = "oh hyuna";
console.log('hi '+myName);
//-------------------------
// hi oh hyuna
```

📎 var=let

원하면 어디서든 업데이크가 가능

예전부터 있던 것으로 어떤 규칙도 가지고 있지 않음

📌 const와 let의 차이점

let은 값을 어디서든 업데이트할 수 있으며 업데이트 전에 쓴 변수는 지워짐

const는 값을 변경할 수 없음

const를 가장 기본적으로 사용하며 변수를 업데이트 해야 하는 경우는 별로 없음