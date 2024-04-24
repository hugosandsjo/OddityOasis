import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column;
    height: 500px;
  }
`;

function BodyWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

export default BodyWrapper;
