// import logo from './logo.svg'; //외부에서 불러오는 데이터를 작성
import Header from './component/Header'; // import의 기준은 작성하고 있는 문서의 기준임 .js를 굳이 안써도 문제 되지 않음
import ContentBox from './component/ContentBox';
import Footer from './component/Footer';
import './App.css';


function App() {

  const myName = 'EDIYA'; //javascript처럼 사용
  // const h1Style = { color:'#f50', textTransform:'uppercase' }
  // -------------------------------------------------------------
  return (
    <div className="App">
      <Header site={myName} url="http://naver.com" /> 
      {/* Header라는 이름 그대로 써주겠다는 의미 */}
      <ContentBox name={myName} />
      <Footer name={myName}/>

    </div>
  ); //컴포넌트 // 이 안에 들어가는 것을 js X라고 함
}
// 함수를 내보내기 위해서 작성
// 내보낼 때의 규칙 : html이 들어가 있는 통째의 형식을 컴퍼넌트라고 함
// 외부에서 역할 따라서 이미지를 불러와서 적용을 함
// 중괄호{}를 사용하는 것은 javascript를 사용하겠다는 의미
// 자바스크립트를 사용하기 위해서 중괄호를 쓸 때 여러줄을 작성할 경우에는 잘 안먹는 경우도 있음
// 변수는 function안, 컴포넌트 안에 return이 되기 전에 쓴다
// return보다 아래에 쓸 순 있겠지만 오류가 날 수 있음 => return 처리 후에 함수를 호출하는 경우에만 사용
// react는 오류가 날 시 수정한다고 오류내역이 사라지지 않아 새로고침해야 함
// ---------------------------------------------------------------------------------------------------------
// react는 style 적용을 따로 따로 하는 것을 별로 좋아하지 않음 (아래 예시)
//  ex) <h1 style={ {color:"#f50", textTransform:'uppercase'} }> // 직접적으로 쓰고 싶을 때는 {{}} 중괄호를 이중으로 쓰고 ""/''는 필수로 써주지 않으면 오류남
// 위의 방법보다 더 좋은 방법은 아래의 방법이 가장 좋음
// function App() {
//   const h1Style = { color:'#f50', textTransform:'uppercase' }
//   return (
//     <div className="App">
//       <h1 style={h1Style}>{myName}</h1>
//     </div>
//   );
// }
// html에서 쓰던 코드를 react에서 쓰면 헷갈리기 때문에 header, article 등등 부분을 다 따로 폴더를 만들어야 함


// contentBox.js와 Header.js에 각각 적힌 const myName의 내용을 Header.js에서 'EDIYA'가 아닌 다른 것으로 바꾸고자 할 때 contentBox.js에는 EDIYA로 적혀있어 결과 화면창에선 변화가 일어나지 않음
// <Header site="AA" /> 를 속성이라 함 그 중 site를 프로퍼티(key)라고 함
// site라는 프로퍼티 대신 url을 적어도 됨
// site라는 프로퍼티를 전송하면 Header.js에서 받음
// 여기서 site 내용을 바꾸면 바뀜
// 프로퍼티의 내용을 <Header site="AA" /> 이런식으로 적는게 아닌 위에 const myName = 'EDIYA';라고 적어둔 변수가 있으니 <Header site={myName} /> 라고 쓰는 것이 맞음 "AA" -> {myName}



export default App;


// 하나에 어떤 js파일을 쓰던 컴퍼넌트라는 형식으로 내보낼때 js는 무조건 큰 틀은 하나의 영역으로 감싸줘야 함
// 무조건 하나의 태그 안에 속해있어야 함
// Fragment라는 기법을 권장
// 싱글태그여도 닫아주는 '/' 태그가 꼭 있어야 함