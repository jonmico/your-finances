import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StyledAppNavLink = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
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
    <StyledAppNavLink href={href}>
      <FontAwesomeIcon icon={icon} />
      <LinkText>{children}</LinkText>
    </StyledAppNavLink>
  );
}
