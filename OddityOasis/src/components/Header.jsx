import styled from "@emotion/styled";

const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ededed;
  margin: 0;
  padding: 1rem;
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
