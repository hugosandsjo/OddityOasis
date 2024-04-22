import styled from "@emotion/styled";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
`;

const Header1 = styled.h1`
  font-size: 32px;
  font-weight: 400;
`;

function Header() {
  return (
    <HeaderComponent>
      <Header1>Oddity Oasis</Header1>
    </HeaderComponent>
  );
}

export default Header;
