import { useState } from "react";
import RandomFact from "./components/RandomFact";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <ButtonContainer>
        <Button text="Random fact" />
        <Button text="Today's fact" />
        <Button text="All facts" />
      </ButtonContainer>
      <RandomFact />
    </>
  );
}

export default App;
