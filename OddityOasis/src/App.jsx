import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import BoredBox from "./components/BoredBox";
import BodyWrapper from "./components/BodyWrapper";

import "./App.css";

function App() {
  const [selectedFact, setSelectedFact] = useState("daily");
  const [randomClickCount, setRandomClickCount] = useState(0);

  const handleRandomButtonClick = () => {
    setSelectedFact("random");
    setRandomClickCount((prevCount) => prevCount + 1);
    console.log(randomClickCount);
  };

  const buttons = [
    { text: "Random fact", onClick: handleRandomButtonClick },
    { text: "Today's fact", onClick: () => setSelectedFact("daily") },
  ];

  const renderButtons = () => {
    return buttons.map((button, index) => (
      <Button key={index} text={button.text} onClick={button.onClick} />
    ));
  };

  const mainContent = () => {
    return (
      <BodyWrapper>
        <FactBox
          selectedFact={selectedFact}
          randomClickCount={randomClickCount}
        />
        {randomClickCount >= 3 && <BoredBox />}
      </BodyWrapper>
    );
  };

  return (
    <>
      <Header />
      <ButtonContainer>{renderButtons()}</ButtonContainer>
      {mainContent()}
    </>
  );
}

export default App;
