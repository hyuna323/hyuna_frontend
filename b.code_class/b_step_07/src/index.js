import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //./App아라는 아이를 App이라고 부르겠다는 소리
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);
// render라는 함수는 React.StrictMode라는 영역 안에서 App이라는 기능을 수행하겠다는 의미
// ReactDOM라는 기능을 통해서 render라는 함수를 수행하겠다는 의미


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
