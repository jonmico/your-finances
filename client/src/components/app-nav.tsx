import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  padding: 1rem;
  grid-column: 1 / 3;
  justify-content: space-between;
`;

const NavLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export default function AppNav() {
  return (
    <StyledNav>
      <NavLinkContainer>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </NavLinkContainer>
      <NavLinkContainer>
        <div>Test</div>
      </NavLinkContainer>
    </StyledNav>
  );
}
