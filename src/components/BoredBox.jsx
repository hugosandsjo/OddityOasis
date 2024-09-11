import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Button from "./Button";

const BoredWrapper = styled(motion.div)`
  position: absolute;
  width: 100vw;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border-radius: 25px 25px 0 0;
  padding: 2rem;
  background-color: #b2d2cd;
  transition: all 0.6s ease;
`;

const BoredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Header1 = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  margin: 0;
`;

const ParagraphMedium = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
`;

const ParagraphSmall = styled.p`
  font-size: 12px;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 30px;
  cursor: pointer;
  transform: ${(props) =>
    props.isRotated ? "rotate(180deg)" : "rotate(0deg)"};
  transition: transform 0.6s ease;
`;

function BoredBox() {
  const [activity, setActivity] = useState(null);
  const [selectedType] = useState("");
  const [isClosed, setIsClosed] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

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

  const handleCloseClick = () => {
    setIsClosed((prevIsClosed) => !prevIsClosed);
    setIsRotated((prevIsRotated) => !prevIsRotated);

    const contentElements = document.querySelectorAll(".content-element");
    contentElements.forEach((element) => {
      if (element !== closeButtonRef.current) {
        element.style.display = isClosed ? "flex" : "none";
        closeButtonRef.current.style.transform = isRotated;
      }
    });
  };

  const closeButtonRef = React.useRef();

  return (
    <BoredWrapper
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0, height: isClosed ? "auto" : "auto" }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <BoredContent>
        <CloseButton
          ref={closeButtonRef}
          onClick={handleCloseClick}
          src="/assets/close.svg"
          alt="close"
          isRotated={isRotated}
        />
        <Header1 className="content-element">Hmm.. You seem bored</Header1>
        <p className="content-element">How about..</p>
        <ParagraphMedium className="content-element">
          &#x2728; {activity} &#x2728;
        </ParagraphMedium>
        <ParagraphSmall className="content-element">
          Generate new activity
        </ParagraphSmall>
        <ButtonWrapper className="content-element">
          <Button
            text="Recreational"
            onClick={() => fetchActivity("recreational")}
          />
          <Button text="Education" onClick={() => fetchActivity("education")} />
        </ButtonWrapper>
      </BoredContent>
    </BoredWrapper>
  );
}

export default BoredBox;
