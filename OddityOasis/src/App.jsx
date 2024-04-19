import { useState } from "react";
import RandomFact from "./components/RandomFact";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <RandomFact />
    </>
  );
}

export default App;
