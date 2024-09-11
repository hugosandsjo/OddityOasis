import { useState } from "react";
import styled from "@emotion/styled";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import BoredBox from "./components/BoredBox";
import BodyWrapper from "./components/BodyWrapper";
import GenerateIcon from "/assets/generate.svg";

import "./App.css";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: block;
    border-radius: 90px 90px 5px 5px;
    width: 250px;
    height: 350px;
  }
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

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button
        key={index}
        text={button.text}
        onClick={button.onClick}
        className={button.className}
        icon={
          button.text === "Random fact" && selectedButton === 0
            ? GenerateIcon
            : null
        }
      />
    ));
  };

  const renderMainContent = () => {
    return (
      <BodyWrapper>
        <ButtonContainer>{renderButtons()}</ButtonContainer>{" "}
        <FactBox
          selectedFact={selectedFact}
          randomClickCount={randomClickCount}
        />
      </BodyWrapper>
    );
  };

  return (
    <>
      <Header />
      <Section>
        <Image src="/assets/images/desert.jpg" alt="desert" />
        {renderMainContent()}
      </Section>
      {randomClickCount >= 5 && <BoredBox />}
    </>
  );
}

export default App;
