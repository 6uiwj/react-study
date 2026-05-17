//메인페이지 
import logo from './logo.svg';
import './App.css';

function App() {

  /* 실제 DB에서 가져왔다 가정 */
  let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post; //이렇게 하면 안됨. 리액트는 가상돔을 이용해서 렌더링하기 때문에, 실제 돔에 접근해서 조작하는 것은 권장되지 않음. 대신 state를 이용해서 데이터를 관리해야 함.

  return (
    <div className="App">
      {/* 상단 메뉴 만들기 */}
      <div className="black-nav">
        <h4 /*style="color : red"*/ style={{ color: 'red', fontSize: '16px' }}>블로그임</h4>
      </div>
      <h4> {post} </h4> {/* 중괄호 : 변수에 넣은 데이터를 출력(데이터 바인딩) */}
    </div>
  );
}

export default App;
