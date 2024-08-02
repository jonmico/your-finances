import { NavLink } from 'react-router-dom';
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

// TODO: Snap this into a little drawer at smaller viewports.

export default function GlobalNav() {
  return (
    <StyledNav>
      <h1>YourFinances</h1>
      <LinkContainer>
        <NavLink to={'app'}>App</NavLink>
        <NavLink to={'register'}>Register</NavLink>
        <NavLink to={'login'}>Login</NavLink>
        <NavLink to={'logout'}>Logout</NavLink>
      </LinkContainer>
    </StyledNav>
  );
}
