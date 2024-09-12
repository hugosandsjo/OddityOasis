import styled from "@emotion/styled";

const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
`;

const Header1 = styled.h1`
  font-size: 32px;
  font-weight: 400;
  cursor: pointer; // Add this to indicate it's clickable
`;

function Header() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <HeaderComponent>
      <Header1 onClick={refreshPage}>Oddity Oasis</Header1>
    </HeaderComponent>
  );
}

export default Header;
