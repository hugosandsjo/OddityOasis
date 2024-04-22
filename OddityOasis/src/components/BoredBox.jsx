import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function BoredBox() {
  const [activity, setActivity] = useState(null);
  const [selectedType, setSelectedType] = useState("");

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

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <div>
      <h1>Feeling Bored?</h1>
      <p>Pick an activity type:</p>
      <select value={selectedType} onChange={handleTypeChange}>
        <option value="">All</option>
        <option value="education">Education</option>
        <option value="recreational">Recreational</option>
      </select>
      <p>Here's an idea:</p>
      <p>{activity}</p>
    </div>
  );
}

export default BoredBox;
