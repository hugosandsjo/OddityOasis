import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const FactBoxContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0 2rem;

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Heading1 = styled.h1`
  font-size: 78px;
  font-weight: 300;
  line-height: 1.2;
  margin: 0.5rem 0;
  @media screen and (min-width: 768px) {
    margin-left: -2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 32px;
  line-height: 1.4;
  max-width: 520px;
`;

function FactBox({ selectedFact, randomClickCount }) {
  const [randomFact, setRandomFact] = useState(null);
  const [dailyFact, setDailyFact] = useState(null);

  async function fetchRandomFact() {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      console.log(data.text);
      setRandomFact(data.text);
    } catch {
      console.log("error");
    }
  }

  async function fetchDailyFact() {
    try {
      const response = await fetch(
        "https://uselessfacts.jsph.pl/today.json?language=en"
      );
      const data = await response.json();
      console.log(data.text);
      setDailyFact(data.text);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    if (selectedFact === "random") {
      fetchRandomFact();
    } else if (selectedFact === "daily") {
      fetchDailyFact();
    }
  }, [selectedFact, randomClickCount]);

  return (
    <>
      <FactBoxContainer
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Heading1>
          {selectedFact === "random" ? "Random Fact" : "Daily Fact"}{" "}
        </Heading1>
        <Paragraph>
          {selectedFact === "random" ? randomFact : dailyFact}
        </Paragraph>
      </FactBoxContainer>
    </>
  );
}

export default FactBox;
