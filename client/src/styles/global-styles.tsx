import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
