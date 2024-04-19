import styled from "@emotion/styled";

const HeaderComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightgray;
  margin: 0;
`;

function Header() {
  return (
    <HeaderComponent>
      <h1>Oddity Oasis</h1>
      <div>Menu</div>
    </HeaderComponent>
  );
}

export default Header;
