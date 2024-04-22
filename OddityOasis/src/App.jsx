import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import Bored from "./components/Bored";

import "./App.css";

function App() {
  const [selectedFact, setSelectedFact] = useState("daily");
  const [randomClickCount, setRandomClickCount] = useState(0);

  const handleRandomButtonClick = () => {
    setSelectedFact("random");
    setRandomClickCount((prevCount) => prevCount + 1);
  };

  const buttons = [
    { text: "Random fact", onClick: handleRandomButtonClick },
    { text: "Today's fact", onClick: () => setSelectedFact("daily") },
    { text: "All facts", onClick: () => {} },
  ];

  return (
    <>
      <Header />
      <ButtonContainer>
        {buttons.map((button, index) => (
          <Button key={index} text={button.text} onClick={button.onClick} />
        ))}
      </ButtonContainer>
      <FactBox selectedFact={selectedFact} />
      {randomClickCount >= 3 && <Bored />}
    </>
  );
}

export default App;
