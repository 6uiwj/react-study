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

  let [logoTitle, setLogoTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
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
    {/* state 변경하는 법: setState(변경할 데이터) 형태로 사용 */ }
    setRecommend(recommend + 1);
  };

  const handleFirstLogo = () => {
    /**
     *  array, object는 state로 관리할 때, 불변성을 지켜야 함. 
     * 불변성 : 원본 데이터는 건드리지 않고, 새로운 데이터를 만들어서 변경하는 것. 
     * array, object는 참조형 데이터이기 때문에, 원본 데이터를 건드리면, 
     * 리액트가 데이터가 변경된 것을 인식하지 못하기 때문에, 
     * 화면이 변경된 데이터로 리렌더링되지 않음. (logo[0]을 변경해도 logo를 가리키는 주소는 변경되지 않았기 때문에 리액트가 state가 변경된 것을 인식하지 못함)
     * 따라서, array, object를 state로 관리할 때는, 불변성을 지켜야 함. 
     * 예시 : setLogoTitle([...logoTitle], '여자 코트 추천') 
     * -> ...logoTitle : 기존 logoTitle 배열의 모든 요소를 새로운 배열에 복사해서 넣어줌. 
     * '여자 코트 추천' : 새로운 요소를 추가해서 새로운 배열을 만듦. 
     * 이렇게 하면, 기존 logoTitle 배열은 건드리지 않고, 
     * 새로운 배열을 만들어서 변경하는 것임.
        <<즉, array/object는 state를 변경하려면 복사본을 만들어서 변경해야 함.>>
     */
    //setLogoTitle(['여자 코트 추천', logoTitle[1], logoTitle[2]]);
    // ... : 괄호를 벗겨주세요! 그리고 다시 배열로 만들어주세요! 라는 뜻.
    let copy = [...logoTitle]; //배열 복사하기 : ...배열명 형태로 사용. 기존 배열의 모든 요소를 새로운 배열에 복사해서 넣어줌.
    copy[0] = '여자 코트 추천'; //기존 state를 copy해서 주소가 copy된 주소로 변경되었기 때문에 state 변경이 인식됨 
    setLogoTitle(copy); //기존 state와 신규 state를 비교해서 다르다고 인식되면 리렌더링됨.
  }

  const handleSort = () => {
    let copy = [...logoTitle];
    copy.sort();
    setLogoTitle(copy);
  }
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
      <button onClick={handleSort}>가나다순 정렬</button>
      <button onClick={handleFirstLogo}>글수정</button>
      <div className="list">
        {/* onClick = {함수명}* : 클릭 시 해당 함수가 실행 됨 ({함수명}에 함수를 직접 넣어도됨
            <span onClick = {() => console.log(1)}>👍</span> : 클릭 시 1이 콘솔에 출력됨 */}
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
