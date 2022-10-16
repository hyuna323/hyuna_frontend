// Header.js

// function Header(){} 써도 되고 안써도 됨
export default function Header(){
  const myName = '이디야';
  const h1Style = { color:'#f50', textTransform:'uppercase' }
  return (
    <header id="headBox">
    <h1 style={h1Style}>{myName}</h1>
  </header>
  )
} // 다이렉트로 바로 쓴 것



// 내보내는 방법
// 첫번째 ----------------
// export default Header;
// 함수 자체를 내보낼 것이기 때문에 default를 사용

// 두번째 ------------------
// export default function Header(){}

// 세번째 ------------------
// const Header = function(){}
// export default Header;

// =====================================================
// 내보내기 위해서는 return을 씀