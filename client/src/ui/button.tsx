import styled from 'styled-components';

export const Button = styled.button`
  background-color: var(--accent-600);
  color: var(--text);
  padding: 0.7rem;
  font-weight: 600;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: var(--accent-500);
  }
`;

export const ButtonWithSpacing = styled(Button)`
  letter-spacing: 1px;
`;
