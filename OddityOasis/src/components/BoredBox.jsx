import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Button from "./Button";

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
    <div>
      <h1>Hmm.. You seem bored</h1>
      <p>Maybe try this activity:</p>
      <p>&#10024; {activity}? &#10024;</p>
      <p>Not feeling it? Generate new activity below</p>
      <Button
        text="Recreational"
        onClick={() => fetchActivity("recreational")}
      />
      <Button text="Education" onClick={() => fetchActivity("education")} />
    </div>
  );
}

export default BoredBox;
