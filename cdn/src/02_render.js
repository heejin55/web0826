
/*  
  1. 컴포넌트 형식
  function 컴포넌트(){
    return (
    JSX 문장;
    );
  }

  가. 컴포넌트 이름의 첫 글자는 대문자로 쓴다.
  나. JSX의 태그 끝에는 ; 을 쓰지 않는다.
  다. jsx 문장이 한 문장일 경우 (); 생략 가능

*/


// 변수 생성
// 여기서 값은 JSX
const hello = <h1>Hello World!</h1>;

const hi =
  <div>
    <h1>Hi World!</h1>
    <h2>나는 두 문장이다!</h2>
  </div>


/* 
    // 라이브러리 이름: React, ReactDOM(가상돔), Babel(JSX번역) -> CDN 방식
    
    // 리액트의 출력
    // 객체.메서드
    ReactDOM.render(요소, 컨테이너); 
      1. ReactDOM은 가상 DOM을 생성하는 객체
      2. render()은 요소를 컨테이너에 넣는 메서드
      3. element는 컴포넌트명 또는 변수명을 빈 요소로 쓴다.
        예) <Hello />, <br />>, <hr />, <img />, <input />
      4. 컨테이너는 HTML 페이지의 div#root를 말한다.
*/

// 출력 -> 렌더링
ReactDOM.render(<hello />, document.getElementById("#root"));

