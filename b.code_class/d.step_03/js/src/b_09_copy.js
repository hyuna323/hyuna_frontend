// b_09_js_copy.js

var favoritColor = ['emerald green', 'coral','hot pink','city blue', 'brown gray'];
var copyColor = favoritColor; // 같은 주소지를 공유
favoritColor.push('yellow');
// console.log(favoritColor, copyColor);

var cloneColor = [];
// coloneColor와 favoritColor의 값이 동일하게 만들고, 
// 이후에 favoritColor.push('sky'), cloneColor.push('deep orange');

// ['emerald green', 'coral','hot pink','city blue', 'brown gray','yellow','sky']; -> favoritColor
// ['emerald green', 'coral','hot pink','city blue', 'brown gray','yellow','deep orange']; -> cloneColor


// 방법 1-----------------------------------
/*
  cloneColor.push(favoritColor[0]);
  cloneColor.push(favoritColor[1]);
  cloneColor.push(favoritColor[2]);
  cloneColor.push(favoritColor[3]);
  cloneColor.push(favoritColor[4]);
  cloneColor.push(favoritColor[5]);

  favoritColor.push('sky');
  cloneColor.push('deep orange');

  console.log(favoritColor, cloneColor);
*/

var copyColor=[];
// for 반복문=깊은 복사
for(var i=0; i<5;i++){
  copyColor[i]=favoritColor[i];
}

var i = 0;
var len = favoritColor.length;
// 방법2 -------------------------
/*
for(; i <= len; i+=1){
  cloneColor.push(favoritColor[i]);
}
favoritColor.push('sky');
cloneColor.push('deep orange');
*/

// 방법3 -----------------------
/* 
for(; i <= len; i+=1){
  if(i !== len){
    cloneColor.push(favoritColor[i]);
  }else{
    favoritColor.push('sky');
    cloneColor.push('deep orange');
  }
}
*/
// 방법 4 ----------------------------------

favoritColor.forEach(function(data, index){
  // cloneColor[index] = favoritColor[index];
  // cloneColor.push(data);
  cloneColor[index] = data;
});
favoritColor.push('sky');
cloneColor.push('deep orange');

// console.log(favoritColor, cloneColor);


// ==============================================================
var pc = {
  'dell'    : '프리시전',
  'hp'      : 'z시리즈',
  'apple'   : 'mac book',
  'samsung' : 'galaxy book'//,
  // 'lg' : 'gear'
}; 
var copyPc = pc;
// pc.lg = 'gear';
pc['lg'] = 'gear';
// console.log( copyPc );

var clonePc = {};
// 결과
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear',asus:'gen book' } -> pc
// { 'dell' : '프리시전', 'hp' : 'z시리즈', 'apple' : 'mac book', 'samsung' : 'galaxy book', 'lg':'gear',lenovo: 'think pad' } -> clonePc

// 객체 방법1 --------------------
/*
clonePc['dell'] = '프리시전';
clonePc['hp'] = 'z시리즈';
clonePc['apple'] = 'mac book';
clonePc['samsung'] = 'galaxy book';
*/

for(var data in pc){
  // console.log( data );
  clonePc[data] = pc[data];
}
// for(in){} -> for in문
/* 값 자체에 접근하기
for(var key in pc(원본)){
  clonePc[key]=pc[key];->clonePc의 key(변수명)와 pc의 key는 같다 // 깊은 복사
}

*/

pc['asus'] = 'gen book';
clonePc['lenovo'] = 'think pad';

console.log(pc);
console.log(clonePc);

// 참조 주소를 복사하는 것 - 얕은 복사(shallow copy)
// 참조 주소에 있는 값 자체를 복사 - 깊은 복사(deep copy)

// --------------------------------------------------------
// 깊은 복사를 한 뒤 원하는 제품 하나를 추가하세요
var cookie = ['초코칩','칙촉','빼빼로','호빵','촉촉한초코칩','칸쵸','홈런볼','엄마손'];
var cloneCookie=[];

// 깊은복사
for (var i = 0; i<cookie.length;){
cloneCookie.push(cookie[i]);
}
console.log(cookie === cloneCookie);
cloneCookie.push('고래밥');
console.log(cookie, cloneCookie);
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손' ]
// [ '초코칩', '칙촉', '빼빼로', '호빵', '촉촉한초코칩', '칸초', '홈런볼', '엄마손', '고래밥' ]

// =======================================================================================

var snack = { '농심':'새우깡', '해태':'맛동산', '오리온':'고래밥', '크라운':'산도' };
var cloneSnack={};

// 깊은 복사
for (var key in snack) {
  cloneSnack[key]=snack[key];
  // 들어갈 아이=들어올 곳
}

// 제품 추가
snack.롯데 = '빈츠';
// snack.롯데(식별자);
cloneSnack['삼우식품']='찰떡파이';

// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도' } 
// { '농심': '새우깡', '해태': '맛동산', '오리온': '고래밥', '크라운': '산도', '롯데': '마가렛트' }

// var ice = [ {'롯데':['폴라포','수박바']},{'해태':'브라보'},{'허쉬':'민트초코'},{'빙그레':'투게더'} ];

// 객체도 참조변수