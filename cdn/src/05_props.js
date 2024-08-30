/* 
    props(프로프스)?
        React 컴포넌트에 전달되는 인수

        function 컴포넌트(prpos) {
            ...
        }

        function 컴포넌트({인수, ...}) {
            ...
        }
        
        <컴포넌트 인수="값" />
        함수(인수, ...);
*/



function Hello() {
    return (
        <div className="card_list">
            <div className="card_img">
                <img
                    src="https://img.megabox.co.kr/SharedImg/2024/07/03/QaslTt607PkNH8mPWm6ZUH3UwDx2bHoH_420.jpg"
                    alt="사랑의 하츄핑"
                />
            </div>
            <div>
                <span className="card_age">All</span>
                <h3 className="card_tit">사랑의 하츄핑</h3>
            </div>
            <div>
                <span className="card_rate">예매율 1%</span>
                <span className="card_date">개봉일 2024.08.07</span>
            </div>
            <div className="card_btn">
                <button>487</button>
                <a href="#">예매</a>
            </div>
        </div>
    );
}

function Car1(props) {
    return <h2>나는 {props.color} {props.brand}!</h2>;
}

function Car2({ brand, color }) {
    return <h2>나는 {color} {brand}!</h2>;
}

function Car3() {
    const carInfo = {brand: "페라리", color: "파란" }
    return(
        <div>
            <h2>나는 {carInfo.color} {carInfo.brand}!</h2>
            <Car4 brand={carInfo}/>
        </div>
    );
}

function Car4(props) {
    return <h2>나는 {props.brand}!</h2>;
}


const container0 = document.querySelectorAll(".item").item(0);
const root0 = ReactDOM.createRoot(container0);

// 컴포넌트 호출 시 props로 전달할 값은 태그의 속성이 전달된다.
root0.render(
    <div>
        <Car1 brand="k7" color="흰색"/>
        <Car2 brand="싼타페" color="검정"/>
        <Car3 />
        <Car4 />
    </div>
);

