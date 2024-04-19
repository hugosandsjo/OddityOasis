import styled from "@emotion/styled";

const ButtonComponent = styled.button`
  background-color: grey;
  padding: 12px 24px;
  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;

function Button({ text }) {
  return <ButtonComponent>{text}</ButtonComponent>;
}

export default Button;
