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

  return (
    <>
      <Header />
      <ButtonContainer>
        <Button text="Random fact" onClick={handleRandomButtonClick} />
        <Button text="Today's fact" onClick={() => setSelectedFact("daily")} />
        <Button text="All facts" />
      </ButtonContainer>
      <FactBox selectedFact={selectedFact} />
      {randomClickCount >= 3 && <Bored />}
    </>
  );
}

export default App;
