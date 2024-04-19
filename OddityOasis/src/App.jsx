import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";

import "./App.css";

function App() {
  const [selectedFact, setSelectedFact] = useState("random");

  return (
    <>
      <Header />
      <ButtonContainer>
        <Button text="Random fact" onClick={() => setSelectedFact("random")} />
        <Button text="Today's fact" onClick={() => setSelectedFact("daily")} />
        <Button text="All facts" />
      </ButtonContainer>
      <FactBox selectedFact={selectedFact} />
    </>
  );
}

export default App;
