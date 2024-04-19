import React, { useEffect, useState } from "react";

function RandomFact() {
  const [fact, setFact] = useState(null);

  async function fetchRandomFact() {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      console.log(data.text);
      setFact(data.text);
    } catch {
      console.log("error");
    }
  }
  useEffect(() => {
    fetchRandomFact();
  }, []);

  return (
    <div>
      <h2>Random Fact</h2>
      <p>{fact}</p>
    </div>
  );
}

export default RandomFact;
