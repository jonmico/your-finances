import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogoutButton } from '../ui/button';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

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

function MobileGlobalNav() {
  return (
    <StyledMobileGlobalNav>
      <h1>YourFinances</h1>
      <MobileDropdown />
    </StyledMobileGlobalNav>
  );
}

const StyledMobileDropdown = styled.div`
  position: relative;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  transition: color 200ms ease-in-out;

  &:hover {
    color: var(--accent-200);
  }
`;

function MobileDropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleClick() {
    setIsDropdownOpen((prevState) => !prevState);
  }

  return (
    <StyledMobileDropdown>
      <StyledFontAwesomeIcon icon={faBars} onClick={handleClick} />
      {isDropdownOpen && <MobileDropdownLinks />}
    </StyledMobileDropdown>
  );
}

const StyledMobileDropDownLinks = styled.ul`
  position: absolute;
  border: 1px solid var(--text-800);
  border-radius: 0.25rem;
  background-color: var(--background-900);
  padding: 0.5rem;
  top: 10;
  right: 0;
  width: 15rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const StyledListItem = styled.li`
  padding: 0.1rem 0.6rem;
  border-radius: 0.25rem;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: var(--text-800);
    cursor: pointer;
  }
`;

const LinkList = styled.ul`
  border-bottom: 1px solid var(--text-800);
  padding-bottom: 0.5rem;
`;

const ButtonListItem = styled.li`
  padding: 0.25rem 0;
`;

function MobileDropdownLinks() {
  function handleLogoutClick() {
    console.log('NYI: Logout');
  }

  return (
    <StyledMobileDropDownLinks>
      <LinkList>
        <StyledListItem>
          <Link to={'login'}>Login</Link>
        </StyledListItem>
        <StyledListItem>App</StyledListItem>
        <StyledListItem>Register</StyledListItem>
        <StyledListItem>User</StyledListItem>
      </LinkList>
      <ButtonListItem>
        <LogoutButton onClick={handleLogoutClick}>
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <div>Logout</div>
        </LogoutButton>
      </ButtonListItem>
    </StyledMobileDropDownLinks>
  );
}
