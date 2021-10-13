# DATE 2021.10.13
## ✏️TIL
  - 기능사 시험 a_01에서 메뉴바 만들기 연습
  - nav 선택자 영상 보기

---
### a_01 메뉴바 만들기🧾
  - <b>HTML</b>
    - 메뉴 상단바 내용 안에 `<ul cladss>` 태그로 세부메뉴를 묶어주기
  - <b>css</b>
    - 세부메뉴는 `display:none;` 으로 숨겨주기
    - 부모를 :hover 적용하기 
    - :hover = hover 앞에 마우스를 얹을 큰 틀의 부모태그를 적고 뒤에는 마우스를 갖다대면 나타날 요소들을 적음 <br />
    - display:block을 안쓰면 hover 적용이 안됨
    ex) .navigation > li:hover .nav_list {dispaly:block} <br />
    ㄴ navigation 자식인 li에 hover를 적용하였을 때 nav_list를 보여주겠다

---
### nav 선택자
  - nav 만들시 글자수가 다 다르기 때문에 width 값은 주면 안됨 (width:auto;)
    - margin-right/left 등은 사용 가능
  - <b>css에 span이 있는 경우</b><br />
    - 글자 사이 간격을 주고 만들어주는게 좋음 
```
    ex) .bar {
      float:left; width: 1px; height:10px;
      background-color:#777;
      margin-left:-5px;
      }
```
  - <b>:before/after를 사용하는 경우</b>
    
```
      ex) .nav_list li:before,
          .nav_list li::before {
            content:""; float:left; width:1px; height: 10px;
            margin-left:-5px; margin-top:5px;
            background-color:#777;
            }
```
  - <b>li에 border를 활용하는 경우</b>
 ```
    ex) nav_list li {
          padding-right:10px; margin-right:10px;
          border-right:1px solid #f06
        }
      .nav_list li:last-child {border:0; padding-right:0;}
 ```


<br />

----
## 더 공부해야 할 사항📝
  - [ ] 포토샵 web design 레이어 수정 영상