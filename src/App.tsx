import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*
    작성자 : Kim
    작성일 : 2023.3.30
    내용 : 기능에 대한 내용 
*/}


function App() {
  // 변수 
  let name = "리액트";

  // 인라인 
  const style = {
    backgroundColor : 'black',
    color : 'white',
    fontSize : '48px',
    fontWeight : 'bold',
    padding : '20px'
  }

  return (
    <div style={
      {
        backgroundColor : 'black',
        color : 'blue',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : '20px'
      }
    }>
      <h1 style = {style}>Hello,
          {
          name === '리액트' ? (<h1>YES</h1>) : null
          }!!</h1>
      <p>반갑습니다.</p>
      {/* jsx 주석문 작성하는 법 */}
      <br/>
      <input/>
    </div>
  );
}

//   const port = undefined;

//   return (
//     <div>
//     {
//       port || '포트를 설정하지 않았습니다.'
//     }
//     </div>
//   )
// }

// function App() {
//   return React.createElement("div", null, "Hello, 리액트!!",
//   React.createElement("p", null, "반갑습니다.") );
// }

export default App;
