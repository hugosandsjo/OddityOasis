import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const FactBoxContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem 0;
  @media (min-width: 768px) {
    max-width: 750px;
    padding: 0 2rem;
  }
`;

const Heading1 = styled.h1`
  font-size: 52px;
  font-weight: 300;
  line-height: 1.2;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 78px;
  }
`;

const Paragraph = styled.p`
  font-size: 24px;
  line-height: 1.4;
  max-width: 750px;
  margin-top: 1rem;
  @media (min-width: 768px) {
    font-size: 32px;
  }
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
