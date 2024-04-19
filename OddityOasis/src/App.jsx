import { useState } from "react";
import RandomFact from "./components/RandomFact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RandomFact />
    </>
  );
}

export default App;
