// Header.js
import Gnb from "./Gnb";


// function Header(){} 써도 되고 안써도 됨
export default function Header({site, url}){
  // const props = {
  //   site : 'AA',
  //   url : 'http://naver.com'
  // } 어떤식으로 들어와 작동이 되는 것인지 원리를 보여주기 위해 작성
  // const myName = '이디야';
  
  // const site = 'xido';
  // const url = "http://naver.com";
  
  const h1Style = { color:'#f50', textTransform:'uppercase' };

  return (
      <header id="headBox">
        <h1 style={h1Style}>
          <a href={url} target="_blank">{site}</a>
        </h1>
        <Gnb />
      </header>
  )
} // 다이렉트로 바로 쓴 것

Header.defaultProps = { name : 'EDIYA' };
 // App.js에서 Header를 site가 아닌 name으로 통일 시키고 싶은데 Header.js에서는 site를 사용해야하는 경우엔 불러올 내용이 없더라도 default (= 기본적으로) Props를 설정하겠다 라는 의미에서 위처럼 씀
// 단, export default 밖에서 써야 함


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

// contentBox.js와 Header.js에 각각 적힌 const myName의 내용을 Header.js에서 'EDIYA'가 아닌 다른 것으로 바꾸고자 할 때 contentBox.js에는 EDIYA로 적혀있어 결과 화면창에선 변화가 일어나지 않음
// 따라서 일괄사용할 수 있는 방법은 App.js에서 프로퍼티에 이름을 주고 Header.js에 export default function Header()의 ()안에 props를 주어 export default function Header(props)라고 작성하고 {myName}이라고 들어갔던 자리에 {props.프로퍼티의 이름}을 적어주는 것임
// 이때, props가 아닌 다른 것을 작성 해도 됨 ex) attr.site
// const myName = '이디야'; 를 모든 컴포너트에 적을 필요 없이 위와 같은 방법을 사용하면 App.js에서 일괄 수정 할 수 있음

// 변수가 받아주는 내용이 하나 밖에 없을때 props.name 이런식으로 쓰기 보단 name만 쓰길 원하는 경우에
// export default function Header({name}){
//   // const props = {name:'ediya'} // 직접 설정하여 객체가 아닌 값으로 줄 수 있음
//   const h1Style = { color:'#f50', textTransform:'uppercase' }
//   return (
//     <header id="headBox">
//     <h1 style={h1Style}>{name}</h1>
//   </header>
//   )
// }

// for 반복문