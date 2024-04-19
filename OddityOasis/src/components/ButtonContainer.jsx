import styled from "@emotion/styled";

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 1rem;
`;

function ButtonContainer({ children }) {
  return <Buttons>{children}</Buttons>;
}

export default ButtonContainer;
