import { useState } from "react";
import FactBox from "./components/FactBox";
import Header from "./components/Header";
import Button from "./components/Button";
import ButtonContainer from "./components/ButtonContainer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ButtonContainer>
        <Button text="Random fact" />
        <Button text="Today's fact" />
        <Button text="All facts" />
      </ButtonContainer>
      <FactBox />
    </>
  );
}

export default App;
