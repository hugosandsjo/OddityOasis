import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";

import "./App.css";

function App() {
  const [selectedFact, setSelectedFact] = useState("random");

  const buttons = [
    { text: "Random fact", onClick: () => setSelectedFact("random") },
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
    </>
  );
}

export default App;
