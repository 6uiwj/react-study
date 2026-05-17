/* eslint-disable */ //터미널 warning mesage 없애기 
//메인페이지 
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  /* 실제 DB에서 가져왔다 가정 */
  //let post = '강남 우동 맛집';
  //let [logo, setLogo] = useState('여자 코트 추천');
  //let [logo2, setLogo2] = useState('강남 우동 맛집');
  //let [logo3, setLogo3] = useState('파이썬 독학');

  let [logoTitle, setLogoTitle] = useState(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  // document.querySelector('h4').innerHTML = post; //이렇게 하면 안됨. 리액트는 가상돔을 이용해서 렌더링하기 때문에, 실제 돔에 접근해서 조작하는 것은 권장되지 않음. 대신 state를 이용해서 데이터를 관리해야 함.

  //state : 변수 대신 쓰는 데이터 저장공간. useState() : state를 만드는 함수. state는 변경되면 자동으로 리렌더링됨. state는 배열 형태로 반환됨. [state값, state값을 변경하는 함수] 형태로 반환됨. state값을 변경하는 함수는 setState() 형태로 사용됨. 예시 : const [post, setPost] = useState('남자 코트 추천') -> post : state값, setPost : state값을 변경하는 함수. post 값을 변경하려면 setPost('새로운 값') 형태로 사용하면 됨.
  //변수도 있는데 왜 state 사용? 
  /**
   * [강남 우동 맛집 -> 역삼 우동 맛집] 데이터 변경시 
   * 직접 변수에 접근해서 변경하면, 리액트는 데이터가 변경된 것을 인식하지 못하기 때문에, 
   * 화면이 변경된 데이터로 리렌더링되지 않음. 
   * 하지만 state를 이용해서 데이터를 관리하면, 
   * state값이 변경될 때마다 리액트가 자동으로 리렌더링을 해주기 때문에, 화면이 업데이트됨. 
   * 따라서, 데이터가 변경될 때마다 화면이 업데이트되어야 하는 경우에는 state를 사용하는 것이 좋음. 
   *  */
  let [a, b] = useState('남자 코트 추천');
  // a : state에 보관했던 자료가 나옴
  // b : state에 보관했던 자료를 변경할 수 있는 함수
  let [recommend, setRecommend] = useState(0);

  const handleLike = () => {
    setRecommend(recommend + 1);
  };
  /**
   * Destructuring 
   * let num = [1, 2]; //이걸 자주사용해서 변수로 빼고싶다
   * let a = num[0]; 
   * let c = num[1];
   * let[a,c] = [1,2]; //Destructuring문법 : 배열이나 객체의 값을 분해해서 변수에 담는 문법. 배열의 경우, let [a, c] = [1, 2]; 형태로 사용. 객체의 경우, let {a, c} = {a: 1, c: 2}; 형태로 사용. Destructuring문법을 사용하면, 배열이나 객체의 값을 쉽게 변수에 담을 수 있음.  
   */

  return (
    <div className="App">
      {/* 상단 메뉴 만들기 */}
      <div className="black-nav">
        <h4 /*style="color : red"*/
          style={{ color: 'red', fontSize: '16px' }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{logoTitle[0]} <span onClick={handleLike} className="like-button">👍</span> {recommend} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{logoTitle[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{logoTitle[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {/*<h4> {post} </h4> {/* 중괄호 : 변수에 넣은 데이터를 출력(데이터 바인딩) */}
    </div>
  );
}

export default App;
