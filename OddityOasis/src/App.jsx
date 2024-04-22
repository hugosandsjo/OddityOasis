import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import BoredBox from "./components/BoredBox";

import "./App.css";
import BodyWrapper from "./components/BodyWrapper";

function App() {
  const [selectedFact, setSelectedFact] = useState("daily");
  const [randomClickCount, setRandomClickCount] = useState(0);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleRandomButtonClick = () => {
    setSelectedFact("random");
    setRandomClickCount((prevCount) => prevCount + 1);
    setSelectedButton(0);
    console.log(randomClickCount);
  };

  const buttons = [
    {
      text: "Today's fact",
      onClick: () => {
        setSelectedFact("daily");
        setSelectedButton(1);
      },
      className: selectedButton === 0 ? "selectedButton" : "",
    },
    {
      text: "Random fact",
      onClick: handleRandomButtonClick,
      className: selectedButton === 1 ? "selectedButton" : "",
    },
  ];

  return (
    <>
      <Header />
      <ButtonContainer>
        {buttons.map((button, index) => (
          <Button
            key={index}
            text={button.text}
            onClick={button.onClick}
            className={button.className}
          />
        ))}
      </ButtonContainer>
      <BodyWrapper>
        <FactBox
          selectedFact={selectedFact}
          randomClickCount={randomClickCount}
        />
        {randomClickCount >= 3 && <BoredBox />}
      </BodyWrapper>
    </>
  );
}

export default App;
