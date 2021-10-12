# DATE 2021.10.12
## ✏️TIL
  > ## <b>position</b>

  - ### <b>fixed</b> 
    - position에 fixed를 주면 기준이 부모가 아닌 브라우징 크기 기준이 됨
    - 아무것도 언급하지 않았을 땐 어디로 갈 지 모르기 때문에 top/bottom(상단/하단에 생성):0;와 left:0;를 설정해줘야 함
      - top으로 설정해주면 아래의 박스를 가려버림 따라서 높이값과 padding을 여유있게 공간을 주면 됨
    - 스크롤 시 상단에 fixed를 준 상자는 고정이 되어 있음
    
    <br />
  - ### <b>sticky</b>
    - 가장 기본적인 기능 default값
    - top:0;를 주면 top:0;의 위치에 가면 고정이 됨 (다시 되돌아가면 고정이 풀림)
    
    <br />
  - ### <b>relative</b>
    - 아무것도 쓰지 않은 값과 똑같음
    - absolute의 기준치 위치를 잡아주는 역할을 함
    - 앞으로 오게 해주는 z-index에 처리를 해주는 기능
      - z-index를 다시 앞으로 놓고 싶을 땐 위의 z-index보다 숫자를 더 크게 적으면 됨
    - top, left, z-index 등 위치, 배치와 관련된 태그들을 쓸 일이 많지 않음
    - position을 쓸때 따라오는 속성들 사용 시 자기 자신이 있는 현재 위치를 기준으로 기능이 먹힘

  - ### <b>absolute</b>
    - 자신의 상위에 position이 있으면 그 태그가 기준으로 바뀜
      - 평균적으로 relative를 기준으로 띄어줌
    - padding에 대한 영향을 받지 않음 (BUT, border에 대한 영향은 받음)

<br />

  >그 외
  - background-clip: content-box 는 padding을 제외한 content-box에만 색을 입힘
  - 마우스를 올렸을때 변화를 주고 싶을 때는 상위에 display:none;을 주고
  a:hover / a:focus {display:block;}

<br />

---
## 다음시간 Q&A❓
- [ ] z-index
- [ ] 기능사 A-01번에 .modal.action {dispaly:block;} 주셨는데 여기서 action이 뭔지?

<br />

----
## 더 공부해야 할 사항
- [ ] nav 구분자
- [ ] prototype 피드백 바탕으로 수정


