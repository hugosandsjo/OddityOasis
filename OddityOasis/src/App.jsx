import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";
import "./App.css";
import BodyWrapper from "./components/BodyWrapper";

function App() {
  const [selectedFact, setSelectedFact] = useState("random");

  const buttons = [
    { text: "Random fact", onClick: () => setSelectedFact("random") },
    { text: "Today's fact", onClick: () => setSelectedFact("daily") },
  ];

  return (
    <>
      <Header />
      <BodyWrapper>
        <ButtonContainer>
          {buttons.map((button, index) => (
            <Button key={index} text={button.text} onClick={button.onClick} />
          ))}
        </ButtonContainer>
        <FactBox selectedFact={selectedFact} />
      </BodyWrapper>
    </>
  );
}

export default App;
