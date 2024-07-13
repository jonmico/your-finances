import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledAppNavLink = styled(NavLink)`
  display: flex;
  gap: 1rem;
  align-items: center;
  transition: color 250ms ease-in-out, border-bottom 350ms ease-in-out;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid transparent;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  &:hover {
    color: var(--accent-200);
    border-bottom: 1px solid var(--accent-200);
  }
  &.active {
    color: var(--accent-400);
    border-bottom: 1px solid var(--accent-400);
  }
`;

const LinkText = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: contents;
  }
`;

interface AppNavLinkProps {
  icon: IconDefinition;
  href: string;
  children: React.ReactNode;
}

export default function AppNavLink({ children, icon, href }: AppNavLinkProps) {
  return (
    <StyledAppNavLink to={href}>
      <FontAwesomeIcon icon={icon} />
      <LinkText>{children}</LinkText>
    </StyledAppNavLink>
  );
}
