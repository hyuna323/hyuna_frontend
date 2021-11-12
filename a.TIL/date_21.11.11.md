# Date 2021.11.11
## ✏️ TIL
### scss
scss에서 작성 후 하단에 'Watch Sass'누르면 css에 변환됨 (연동)

> 주석
- /* */ : 여러줄 주석으로 css주석과 동일하여 주석도 변환되어 넘어감
- // : 한줄 주석으로 css에 없는 주석이라 변환 안됨

> 기초개념
- scss와 css는 같이 있으면 안됨<br />
❓ scss는 브라우저에서 먹을 수 없는 전처링 scss는 관리용일뿐 그 안에 여러가지 파일을 만들어서 내보내는 용도 등의 관리를 함

> scss와 sass의 차이
- scss: {}, ;, 띄어쓰기, 들여쓰기, space, tab 사용 O
  - 중첩({})의 기능은 3단까지만 선호
- sass
  - {}, ; 사용시 오류, 띄어쓰기와 들여쓰기 철저히해야 함
  - space, tab 사용/쓰임이 다름 tab과 띄어쓰기를 같이 사용 X
  - 한 라인당 하나의 기능만 작성 가능
---
>변수

🧷 css변수

- 지정 범위 내에서 선언
  - root 같은 범위 지정 해줘야 함
  - css의 변수는 '--이름'으로 설정
  - var 이용하여 작성


🧷 scss변수

- 범위(글로벌 변수, 지역변수)가 존재하지만 최초설정 시 범위 X
  - scss의 변수는 '$이름'으로 설정
  - 원하는 대로 background-color 이용하여 작성

✋🏻 darken: 어둡기 scss에서 일정 수치 이상 어둡게 하면 css에서는 더 어두워지지 못함으로 black으로 바뀐다

✋🏻 lighren: 밝게

- & >와 관계없이 부모를 기준으로 작업을 할때 사용
- &와 >를 같이 쓰면 부모태그의 자식에다 처리하겠다는 의미로 가독성에 유리
---
>list (변수)

background-color: nth($blue,2);<br />
➡️ $blue에서 두번째 색상을 사용하겠다는 뜻

>map (중첩)

background-color: map-get($psuedoCode,hover); <br />
➡️ map에서 $psuedoCode라는 변수를 꺼내라(get) 그 중에서 hover의 기능을 가져오라는 뜻

📌 list와 map의 차이점 <br />
list: ()사용
map: propros에 ""를 사용
  - #{변수명/숫자}: 인터폴레이션기법으로 내용을 담을 수 있게 처리하는 형태
  ```
  .coffee_nth($coffee,1) { width:100%; } (X)
  ➡️ .coffee_#{nth($coffee,1)} { width:100%; } (O)
  ```
- scss 반복문
    - for(변수명 in 배열){} <- js
    - @for $i from 시작숫자 through 마지막숫자 {} <- sass 
    ```
      @for $key from 1 through 5 {
      📝 숫자 1부터 5까지 5번 반복수행하면서 해당 숫자는 매개변수 $key에 임의 할당
        .area_#{ nth($coffee, $key) } {
        📝 .area_esspress{}  .area_latte{}  .area_choco{} ...의 형태로 .area_ 의 글자에 $coffee변수 내부에있는 이름을 각각 할당하기위해 보간법인 #{} 를 사용
        width:$key * 10%; height:100%;
        background-color: nth($blue, $key);
        📝 list형식을 사용하기 위해서는 nth(변수명, 순번)
      }
    }
    ```
    length($coffee) : 커피가 들어있는 이름의 갯수만큼 처리
>@mixin

- @include: @mixin을 만든 후 불러오는 기능<br />
➡️ {@include mixin명();}
- @content: mixin 속성에 추가할 내용이 있을 시 @mixin에 @contnet를 작성 후 @include에 추가 내용을 {}에 넣어주면 됨 
  - 넣어줄 요소에 작성하여주면 됨 예를 들면, 부모에는 건너뛰고 자식요소에 추가하고 싶을 때 사용

📌 <b>요약</b><br />
📎 list
- $var: (v1,v2,v3);
- nth($var, 숫자- scss는 1부터 js는 0부터)

📎 map
- $map: (a:v1, b:v2, c:v3); 
- map-get($map,key);

📎 @for(반복문)
- @for $i<!--임의의 변수--> from n<!--시작숫자-->through n<!--끝나는 숫자-->{}

📎 #{}
- 숫자/이름 있는 그대로 사용할때 (주로 선택자) 사용기법

📎 @mixin
- 기능을 만들때 @inculde는 기능을 사용할때 사용기법

📎 @content
- @mixin 내부에서 기능을 추가할때 사용기법