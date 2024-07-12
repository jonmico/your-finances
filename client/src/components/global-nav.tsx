import styled from 'styled-components';

const StyledNav = styled.nav`
  grid-column: -1 / 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function GlobalNav() {
  return (
    <StyledNav>
      <h1>YourFinances</h1>
      <LinkContainer>
        <h1>Test</h1>
        <h1>Test</h1>
        <h1>Test</h1>
      </LinkContainer>
    </StyledNav>
  );
}
