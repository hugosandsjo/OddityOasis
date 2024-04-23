import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";

const BoredWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Header1 = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function BoredBox() {
  const [activity, setActivity] = useState(null);
  const [selectedType] = useState("");

  async function fetchActivity(type) {
    try {
      let url = "https://www.boredapi.com/api/activity";
      if (type) {
        url += `?type=${type}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setActivity(data.activity);
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    fetchActivity(selectedType);
  }, [selectedType]);

  return (
    <BoredWrapper>
      <div>
        <Header1>Hmm.. You seem bored</Header1>
        <p>Maybe try this activity:</p>
        <p>&#10024; {activity}? &#10024;</p>
        <p>Not feeling it? Generate new activity below</p>
        <ButtonWrapper>
          <Button
            text="Recreational"
            onClick={() => fetchActivity("recreational")}
          />
          <Button text="Education" onClick={() => fetchActivity("education")} />
        </ButtonWrapper>
      </div>
    </BoredWrapper>
  );
}

export default BoredBox;
