import { useState } from "react";
import styled from "@emotion/styled";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import BoredBox from "./components/BoredBox";
import BodyWrapper from "./components/BodyWrapper";
import GenerateIcon from "./assets/generate.svg";

import "./App.css";

const Section = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  /* background-color: #6e6e8a; */
  padding: 2rem 0 0 0;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

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
        <ImgWrapper>
          <img
            src={GenerateIcon}
            onClick={handleRandomButtonClick}
            alt="Generate Icon"
            style={{ cursor: "pointer", width: "100px" }}
          />
        </ImgWrapper>
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
      <Section>
        <ButtonContainer>{renderButtons()}</ButtonContainer>
        {renderMainContent()}
      </Section>
    </>
  );
}

export default App;
