// App 컴포넌트
function App() {
    return (
        <div className="container">
            {cards.map((item, idx) => {
                <Card
                    key={idx}
                    mimg={item.cimg}
                    mtit={item.ctit}
                    mage={item.cage}
                    mrate={item.crate}
                    mdata={item.cdata}
                    mheart={item.cheart}
                />
            })}
        </div>
    );
}