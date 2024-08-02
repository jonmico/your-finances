import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <>
      <DesktopGlobalNav />
      <MobileGlobalNav />
    </>
  );
}

const StyledDesktopGlobalNav = styled(StyledNav)`
  @media (max-width: 600px) {
    display: none;
  }
`;

function DesktopGlobalNav() {
  return (
    <StyledDesktopGlobalNav>
      <h1>YourFinances</h1>
      <LinkContainer>
        <NavLink to={'app'}>App</NavLink>
        <NavLink to={'register'}>Register</NavLink>
        <NavLink to={'login'}>Login</NavLink>
        <NavLink to={'logout'}>Logout</NavLink>
      </LinkContainer>
    </StyledDesktopGlobalNav>
  );
}

const StyledMobileGlobalNav = styled(StyledNav)`
  @media (min-width: 601px) {
    display: none;
  }
`;

// TODO: Make faBars a dropdown menu that has links.

function MobileGlobalNav() {
  return (
    <StyledMobileGlobalNav>
      <h1>YourFinances</h1>
      <div>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </StyledMobileGlobalNav>
  );
}
