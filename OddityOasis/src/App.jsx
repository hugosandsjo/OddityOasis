import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import BoredBox from "./components/BoredBox";
import BodyWrapper from "./components/BodyWrapper";
import GenerateIcon from "./assets/generate.svg";

import "./App.css";

function App() {
  const [selectedFact, setSelectedFact] = useState("daily");
  const [randomClickCount, setRandomClickCount] = useState(0);
  const [selectedButton, setSelectedButton] = useState(1);

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
      className: selectedButton === 1 ? "selectedButton" : "",
    },
    {
      text: "Random fact",
      onClick: handleRandomButtonClick,
      className: selectedButton === 0 ? "selectedButton" : "",
    },
  ];

  const renderGenerateIcon = () => {
    if (selectedFact === "random") {
      return (
        <img
          src={GenerateIcon}
          onClick={handleRandomButtonClick}
          alt="Generate Icon"
        />
      );
    }
    return null;
  };

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button
        key={index}
        text={button.text}
        onClick={button.onClick}
        className={button.className}
      />
    ));
  };

  const renderMainContent = () => {
    return (
      <BodyWrapper>
        <FactBox
          selectedFact={selectedFact}
          randomClickCount={randomClickCount}
        />
        {renderGenerateIcon()}
        {randomClickCount >= 3 && <BoredBox />}
      </BodyWrapper>
    );
  };

  return (
    <>
      <Header />
      <ButtonContainer>{renderButtons()}</ButtonContainer>
      {renderMainContent()}
    </>
  );
}

export default App;
