import styled from "@emotion/styled";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0; /* Light background on hover */
  }
`;

const Header1 = styled.h1`
  font-size: 32px;
  font-weight: 400;

  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff6347; /* Change the text color on hover */
    transform: scale(1.05); /* Slightly increase the size */
  }
`;

function Header() {
  return (
    <HeaderComponent>
      <Header1>Oddity Oasis</Header1>
    </HeaderComponent>
  );
}

export default Header;
