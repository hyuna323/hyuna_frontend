// Footer.js

// import 'footer.css'; //css를 적용할 일이 있다면 import 사용하면 됨

export default function Footer (){

  const stFoot = {
    width:100+'%', height:'auto', borderTop:'1px solid #333'
  }
  // js처럼 문자에는 ''를 써주고 숫자와 문자를 같이 써야 할 땐 +를 해줌
  // react에서는 ;가 아닌 ,를 사용
  // js가 아니기 때문에 Camelcase를 사용함
  // 직접 css를 해주는 것보단 따로 파일을 만들어서 import 해주는 방법을 더 선호

  // -------------------------------
  return (
    <footer id="footBox" style={stFoot}>
      <h2>company information</h2>
      <address>
        회사주소
      </address>
      <dl>
        <dt>family site</dt>
        <dd>
          <ul>
            <li>site_01</li>
            <li>site_02</li>
            <li>site_03</li>
          </ul>
        </dd>
      </dl>
    </footer>
  )
}