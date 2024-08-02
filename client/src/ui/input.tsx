import styled from 'styled-components';

export const Input = styled.input`
  background-color: var(--background-900);
  border-radius: 0.25rem;
  height: 1.85rem;
  border: 1px solid var(--text-700);
  color: var(--text);
  padding: 0 0.5rem;

  &:focus-visible {
    outline: 4px solid var(--primary-400);
  }
`;
