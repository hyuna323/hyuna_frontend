import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); //컴포넌트
}
// 함수를 내보내기 위해서 작성
// 내보낼 때의 규칙 : html이 들어가 있는 통째의 형식을 컴퍼넌트라고 함

export default App;


// 하나에 어떤 js파일을 쓰던 컴퍼넌트라는 형식으로 내보낼때 js는 무조건 큰 틀은 하나의 영역으로 감싸줘야 함
// Fragment라는 기법을 권장