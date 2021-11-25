// b_13_js_constructor_function
'use strict'; //엄격하게 기능을 제한하여 처리하는 모드

// 생성자 함수를 제작하려면 함수의 이름이 PascalCase기법으로 처리

var UserSetting = function(){};

// var user = {};
// user.name='hyuna';
// user.age=23;
// user.email='hyuna@naver.com';
// console.log(user);

// 이렇게 하면 번거로우니

// step - 1: 변수를 선언한다 + 함수를 생성한다.(이때, 생성자 함수를 생성하는 것이므로 PascalCase)
// step - 2:this를 왜 사용할까요?
// 객체를 생성할 생성자 함수로 만들어질 객체가 정해지지 않았음에도 그 객체를 위해 this라는 키워드로 여러가지 설정을 하고싶어서 사용

var person2={}; //1. 객체리터럴
// 생성자 함수를 사용하는 이유 -> 재사용, 불필요한 중복 코드를 없애기 위해 -> 유지보수에 중요!
// + 기타 다른 방식으로도 객체를 생성 할 수 있다.
// 생성자함수에는 this를 써야 함 문법이 그렇게 정해진 것

// 메서드:프로포티 값으로 함수가 있으면 프로포티라고 불르지 않고 메소드라고 부름
// 메서드는 ()와 함께 나옴 
// 일반 프로포티는 Object.create;이런 식으로 나옴
var testObj=Object.create(null)

// 일반함수에서 this는 window를 나타냄

var UserSetting = function(userName, userAge, userEmail){
  // this: 생성자 함수로 만들어질 아직은 안만들어졌지만 미래에 만들어질 모든 객체의 자기 자신을 가리킴
  this.name=userName;
  this.age=userAge;
  this.email=userEmail;
};

// this는 윈도우객체 this.location=window.location 과 같은 결과가 나옴
// console.log(this.location);
// window.console.log('console 결과');
// this.console.log('console 결과');

// 인스턴스처리: 기존에 만든 함수의 기능을 복제를 객체로 변환(new 연산자)
var user1 = new UserSetting('hyuna', 23, 'hyuna@naver.com'); 
user1.name = 'myha';
console.log( user1);

var user2 = new UserSetting('puppy', 10);
console.log( user2.email );
// 이런식으로 작성하면 name에 맞는 결과 즉, hyuna가 나오고 age는 23, email은 hyuna@naver.com 가 나온다.
// 만약 이메일을 쓰지 않았는데 email이라고 쓰면 undefined라고 나온다

UserSetting.prototype.group = '가족 명단 체크';
// 별도에 제목은 완전히 따로 작성해야 함
// prototype: 생성자(꼭 생성자일 필요는 없음)에 담길 내용에 대한 별도의 처리되는 기본 객체
// prototype: 유전자 (상속) 생성자 함수보다 상위의 개념 //21.11.23

console.log( user1 );

UserSetting.prototype.trueCheck=function(){
  return this.age / 2;
};

console.log(user1.trueCheck());
// this와 prototype은 엄밀히 따지고 보면 다른 것

console.clear();
// 이 this: window를 가리킨다
console.log(this);
// 이 this: 객체 이름
var ObjFn=function(a){
  this.alpha=a;
}
var alpha=new ObjFn('abcd');
console.log(alpha.alpha);

// this

console.clear();
// -----------------------------------------------------

var SetMenu=function (brand,type,narr,link) {
  this.brand=brand;
  this.type=type; 
  this.narr=narr;
  this.link=link;
}

// SetMenu에 기본 내장되어야 하는 값
// SetMenu.title='겨울에 어울리는 음료';
// title은 없는 존재이기 때문에 결과에 뜨지 않음
SetMenu.prototype.title='겨울에 어울리는 음료';
// 이처럼 prototype을 써줘야 함
// 카테고리라고 보면 됨

var coffeeList=[];

var drink1=new SetMenu('nesspresso','coffee','겨울에 따뜻하게 마실 수 있는 커피','http://nesspress.com');

coffeeList.push(drink1);
// console.log(drink1.title);
console.log(coffeeList[0].title);

// -----------------------------------------------------
var ul = document.querySelector('ul');
var list = ul.children;
// 모든 li요소를 가져오는 기능
console.log( list );


// // prototype은 재설정, 추가 옵션을 주는 개념
var listArr = Array.prototype.slice.apply(list);
// 배열화 처리 된다
console.log(listArr);

listArr.forEach(function(data, index){
  data.style.border = '1px solid #3df';
});

// 다예언니 ===========
// var ul = document.querySelector('ul');  
// var list = ul.children;
// console.log(list);   
// // HTMLCollection(5) [li, li, li, li, li]

// const arr = Array.prototype.slice.apply(list);
// console.log(arr);   // [li, li, li, li, li]
// console.log(Array.isArray(arr));  // true

// prototype은 하나의 기능을 사용할 수 있는 환경을 구축하는 처리형태
// 사용하는 변수 값 자체에 있는 기능은 아니고 본연의 타입형태에 담겨처리 할 수 있도록 만드는 것

// -----------------------------------------------------
// 배열 형식을 가진 기능이 실제 배열이 아닌 형태는 유사배열로 불리고
// 유사배열 형식은 var arr = [];처럼 배열과 똑같이 써서 유사배열이라고 한다.
// 유사배열 객체는 length를 가진다
// 이는 배열의 고유 가능을 처리하지 못한다.(배열 메소드 기능)
// 그렇기에 강제로 배열로 처리하기 위해서는 배열의 고유기능을 처리해주어야 하는데
// 이때 필요한 형식이 prototype이다.(고유기능을 이용하요 강제 수행)

// 이처럼 본래 가지고 있지 않는 형식을 강제로 수행하기 위해서는 어떠한 설정을 주어야 하는데 
// 이를 prototype에 내장시켜 처리하도록 만든다.

// 생성자 함수
// this
// 배열/유사배열
// prototype

// 배열 메소드
var arr = [];
arr.push(1)
// console.log(  arr  );
// console.log( arr.unshift('data')  );

// arr = Array.prototype.push(1);
// Array.prototype.unshift('data');

var ListFn=function(type, color){
  this.type=type;
  this.color=color;
};
ListFn.prototype.store='anyang';

var coffee=new ListFn('americano','brown');
console.log(coffee.store);

// -----------------------------------------------------
console.clear();



var n=0;
var addFn=function(){
  // 'use stric';모드를 사용하면 일반 함수 냉의 this는 undefined를 가르킨다.
  // this.n=50; 따라서 이 형식은 쓸 수 없다
  n=50;
  n++
};
// 여기서 this는 window.n이자 그냥 n이자 그냥 window를 가리키는 것이다.
addFn();

console.log(n);
console.log(window,n);

// -------------------------
var lastName='kim';
var firstName='hahahahaha';

var useFile={
  firstName:'hyuna',
  lastName:'oh',
  job:'student',
  subjob:'developer',
  fullName:function(){
    return lastName+''+firstName;
  }
};

console.log( useFile.fullName() );
// :는 객체만들때 프로퍼티키: 프로퍼티 값 형식으로 씀

//--------------------------------------------------------
// call, apply, bind

// new Array() === []
var ar1 = [1,2];
ar1.push('바나나', '키위');

// Array, Object, Function
Array.prototype.push.call(ar1, '오렌지','수박');

console.log( ar1 );


var obj = {
  string: 'xido',
  reName : function(){
    console.log( 'name: ', this.string);
  }
};

obj.reName();

var obj2 = {
  string : 'sub name'
};

console.log( obj2.string );
obj.reName.call(obj2);

// -------------------------------------------------------

var listFn = function(){
  // return arguments;
  // return Array.prototype.join.call(arguments).split(',');
  return Array.prototype.slice.call(arguments);
};

var makeList = listFn('test','file',1,2,5,7,10);
console.log( makeList );


// -------------------------------------------------------
// 1. this: window
// 2. this: 생성자 함수로 만들어진 객체
// 3. this: 일반함수 - window이지만 엄격한 모드('use strict')로 전환시 undefined
// 4. this: 메서드 처리시 객체로 처리되어 있는 변수명
// 5. this: 이벤트 핸들러 - 이벤트의 주체가 되는 선택자

// -------------------------------------------------------
// var btn = document.querySelector('#btn');
// btn.addEventListener('click' , function(e){
//   console.log( this );
// });

console.clear();
// -------------------------------------------------------
var Phone = function(brand, product){
  this.brand = brand;
  this.product = product;
};

Phone.prototype.set = function(version, year){
  console.log( this.brand , this.product, version, year);
}

var brand = 'apple';
var product = 'iphone';

var br1 =  new Phone('samsung', 'gallaxy');
// console.log( br1 );
br1.set('s21', 2021);
br1.set.call(this, 's21', 2021); // call은 value담기
br1.set.apply(this, ['s21', 2021]); // apply는 array담기
var reset = br1.set.bind(this, 's21', 2021) // bind
reset();
// slice 사용방법은 복사하고 싶은 배열 이름.slice(시작점인덱스,끝점인덱스+1);
// 복사하고 싶은 배열겡서 원하는 시작점부터 끝점 인덱스+1 바로 직전까지 복사를 한 새로운 배열이 생성됨
var arguments=[1,2,3];
var arr = arguments.slice(0,3);
var arr2=arguments.slice(1,2);

// Array.prototype.slice();에서 메서드 apply/bind/call 이 뒤에 하나씩 더 추가된 문법 형태




// ----------------------------------------------------------

// XMLHttpRequest -> ajax