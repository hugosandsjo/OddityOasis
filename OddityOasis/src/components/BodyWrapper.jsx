import react from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 768px) {
    align-items: center;
    margin-top: 4rem;
  }
`;

function BodyWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BodyWrapper;
