import styled from 'styled-components';

const StyledNav = styled.nav`
  grid-column: -1 / 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--text-800);
  padding: 0.5rem 1rem;
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
        <a href={'#'}>Register</a>
        <a href={'#'}>Login</a>
        <a href={'#'}>Logout</a>
      </LinkContainer>
    </StyledNav>
  );
}
