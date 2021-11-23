# Date 2021.11.18
## ✏️ TIL
### scss
>node js 명령어
- npm init -y
- npm install -D sass
- npm install -D babel babel-cli
- npm install -D react react-cli react-dev
- npm i jquery
- npm i jqueryui
- npm i browser-sync
- browser-sync start --server --files --watch "*.*"
- npm run dev

>웹페이지 구성시 준비 사항
<details>
<summary>click</summary>
1. 기본자료

  - 변수 선언 : 색상/front
  - @mixin 세팅 : font 작업 세팅, size, 이미지 설정...
  - reset, common : 회사의 기본 가이드 작업을 위한 기반
2. 작성 : 코드를 의미있게 작성하는 습관
3. html에서 ID속성은 기본의미가 유일 label에서 input과 연동, anker에서 연동이므로 그 의미에 맞는 사용
4. css에서 선택자 사용시 3단계까지만 유효(nesting기법에서도 3단계까지만 작서으 @at-root)

```
#wrap {
  margin:auto;
  >div {width:100%}
  @at-root.box{height:300px;}
}
```
5. 이름 부여서
6. html 사용설정
  
  - 1. body내부 첫 영역을 잡는 요소에 `#wrap`
  - 2. `id`설정 : camelCase `#wrapBox`
  - 3. `cladss` 설정 : snake_case(under_score) `.box_area`
  - 4. `name` 설정 : id이름과 동일하지만 구분형식(double__under__score)으로 `_`를 두개 연속 삽입
  - 5. naming 방식 : BEM(block_element_modifier) - 형태 - 의미 - 수식어
    - element level 구성 : js에서 DOM 선택자 사용시 상태메세지
      - 마우스 올린 상탱 : `over`
      - 선택(체크)된 상태 : `sselect`
      - focus 처리 상태 : `focus`
      - 자료가 나타나있는 상태 : `on` 
      - Error 표시 : `err`
      - Success 표시 : `suc`
      - Warning 표시 : `warn`
      - 기타 상태 체크(대표예시) : `act`, `run`, `pause`

> Directory 구성(개발용) 
- 📁 아이콘이 첨부된 형태는 폴더명이며 고정이름
- 🗂 아이콘이 첨부된 형태 또는 한글이름의 폴더는 임의로 변경 가능
- 한글 이름의 폴더는 임의로 변경 가능
```
public
|
|- (📁 scss) - (📁common)    -   _mixin.scss , _variable.scss , reset.scss , common.scss
            - (📁src)       -   main.scss
            - (📁page)      -   (📁base)  - _headBox.scss, _footBox.scss
                            -   (📁main)  - _view.scss, _view_smart.scss, _view_tablet.scss
                            -   (📁about)
                            -   (📁product)
|- (📁 font) - 사용자폰트, fontawesome사용
|- (📁 html)
|- (multi)  - (📁img)
            - (📁vedieo)
            - (📁audio)
|- (📁 js)   - (📁common)    -   normalize
            - (📁src)
|- (📁 data) - (📁csv)       -   페이지
```
</details>

>list 사용하는 방법
*방법1*
1. 아래와 같이 list를 만들어 준다
```
$blue: (#00f, #0af, #0df, #7af, #adf); //list
```
2. 식별자{속성명: nth(리스트명, 순서(1부터 ~번째 사이));}
```
#wrap{
  width:100%; height:auto;
  background-color: nth($blue,5);
}
```
*방법2*
- @for $변수 from 시작 through 종료 {종료 만큼 반복 반복 내용} <br />
  -> @for $i from 시작숫자 through 마지막숫자 {}

✋🏻 보관문: 변수값이 들어올 수 있게 해주는 아이

```
@for $key from 1 through 5{
  .area_#{ nth($coffee, $key) } {
    width:$key * 10%; height:100%;
    background-color: nth($blue, $key);
    margin:auto; padding:0; box-sizing:border-box;
  }
}
👉🏻 1에서 5까지($의 리스트가 몇개냐에 따라 n번째까지로 바뀜)의 값을 @key에 넣어줘서 밑에 nth($blue, $key)에 $key를 넣어준 것
👉🏻 length(리스트명) : 리스트의 길이를 반환하는 함수
👉🏻 숫자 1부터 5까지 5번 반복수행하면서 해당 숫자는 매개변수 $key에 임의 할당
👉🏻 .area_esspress{}  .area_latte{}  .area_choco{} ...의 형태로 .area_ 의 글자에 $coffee변수 내부에있는 이름을 각각 할당하기위해 보간법인 #{} 를 사용.
```

>dictionary를 사용하는 방법
- map-get($map: , $key: );
```
$psuedoCode: (
  "hover": #87f,
  "focus": #af3,
  "active": #fda,
  "selected": #dfd
); //dic(map)
```

>Mixin 사용방법
- @include 믹스인이름(매개변수);
  - @include blind();
  - @include clearfix();
  - @include full();