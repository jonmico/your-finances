import {
  faHouse,
  faScaleUnbalanced,
  faLandmark,
  faUser,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import AppNavLink from './app-nav-link';

const NavLinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 600px) {
    flex-direction: row;
    width: 100%;
    gap: 5rem;
    justify-content: center;
  }

  @media (max-width: 450px) {
    gap: 1rem;
    justify-content: space-between;
  }
`;

export default function AppNav() {
  return (
    <>
      <DesktopAppNav />
      <MobileAppNav />
    </>
  );
}

const StyledDesktopAppNav = styled.nav`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid var(--text-800);
  padding: 0.5rem 1rem;
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

function DesktopAppNav() {
  return (
    <StyledDesktopAppNav>
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
    </StyledDesktopAppNav>
  );
}

const StyledMobileAppNav = styled.nav`
  grid-row: -1;
  display: flex;
  border-right: none;
  border-top: 1px solid var(--text-800);
  justify-content: center;
  padding: 0.5rem 1rem;
  width: 100%;

  @media (min-width: 601px) {
    display: none;
  }

  @media (max-width: 450px) {
    padding: 0.5rem 3rem;
  }
`;

function MobileAppNav() {
  return (
    <StyledMobileAppNav>
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
    </StyledMobileAppNav>
  );
}
