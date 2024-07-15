import {
  faHouse,
  faScaleUnbalanced,
  faLandmark,
  faUser,
  faHandHoldingDollar,
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
        <AppNavLink icon={faHouse} href={'home'}>
          Home
        </AppNavLink>
        <AppNavLink icon={faLandmark} href={'accounts'}>
          Accounts
        </AppNavLink>
        <AppNavLink icon={faScaleUnbalanced} href={'budgets'}>
          Budgets
        </AppNavLink>
        <AppNavLink icon={faHandHoldingDollar} href={'transactions'}>
          Transactions
        </AppNavLink>
      </NavLinkContainer>
      <NavLinkContainer>
        <AppNavLink icon={faUser} href={'user'}>
          User
        </AppNavLink>
      </NavLinkContainer>
    </StyledNav>
  );
}
