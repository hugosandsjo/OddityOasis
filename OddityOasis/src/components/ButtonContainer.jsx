import styled from "@emotion/styled";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
  }
`;

function ButtonContainer({ children }) {
  return <Buttons>{children}</Buttons>;
}

export default ButtonContainer;
