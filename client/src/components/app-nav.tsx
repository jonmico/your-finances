import {
  faHouse,
  faChartLine,
  faLandmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import AppNavLink from './app-nav-link';

const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--text-800);
  padding: 0.5rem 1rem;
  width: 100%;
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
        <AppNavLink icon={faHouse} href={'#'}>
          Home
        </AppNavLink>
        <AppNavLink icon={faLandmark} href={'#'}>
          Accounts
        </AppNavLink>
        <AppNavLink icon={faChartLine} href={'#'}>
          Stocks
        </AppNavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <AppNavLink icon={faUser} href={'#'}>
          User
        </AppNavLink>
      </NavLinkContainer>
    </StyledNav>
  );
}
