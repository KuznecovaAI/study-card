import React from 'react';
import './App.css';
import CardStyled from "./components/Card.styled";
import cardImg from "./Rectangle.png";

function App() {
    return (
        <div className="App">
            <CardStyled
                srcImg={cardImg}
                title="Headline"
                text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."
            />
            <CardStyled
                srcImg={cardImg}
                title={"Headline2"}
                text={"Faucibus.aucibus. Sit sit sapien s Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}
            />
            <CardStyled
                srcImg={cardImg}
                title={"Headline3"}
                text={"are in venen."}
            />
        </div>
    );
}

export default App;

