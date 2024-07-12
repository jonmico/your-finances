import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  :root {
    --text: #e9ebf2;
    --background: #090d17;
    --primary: #8ba0e3;
    --secondary: #13349d;
    --accent: #0640fb;

    --text-50: #eff0f6;
    --text-100: #dfe2ec;
    --text-200: #bfc4d9;
    --text-300: #9fa7c6;
    --text-400: #7e8ab4;
    --text-500: #5e6da1;
    --text-600: #4b5781;
    --text-700: #394160;
    --text-800: #262b40;
    --text-900: #131620;
    --text-950: #090b10;

    --background-50: #edf0f8;
    --background-100: #dae1f1;
    --background-200: #b6c2e2;
    --background-300: #91a4d4;
    --background-400: #6c86c6;
    --background-500: #4767b8;
    --background-600: #395393;
    --background-700: #2b3e6e;
    --background-800: #1d2949;
    --background-900: #0e1525;
    --background-950: #070a12;

    --primary-50: #eaeefa;
    --primary-100: #d6ddf5;
    --primary-200: #adbbeb;
    --primary-300: #849ae1;
    --primary-400: #5b78d7;
    --primary-500: #3256cd;
    --primary-600: #2845a4;
    --primary-700: #1e347b;
    --primary-800: #142252;
    --primary-900: #0a1129;
    --primary-950: #050915;

    --secondary-50: #e8edfc;
    --secondary-100: #d2dbf9;
    --secondary-200: #a4b7f4;
    --secondary-300: #7793ee;
    --secondary-400: #496fe9;
    --secondary-500: #1c4ae3;
    --secondary-600: #163cb6;
    --secondary-700: #112d88;
    --secondary-800: #0b1e5b;
    --secondary-900: #060f2d;
    --secondary-950: #030717;

    --accent-50: #e6ecff;
    --accent-100: #cdd8fe;
    --accent-200: #9bb2fd;
    --accent-300: #688bfd;
    --accent-400: #3664fc;
    --accent-500: #043efb;
    --accent-600: #0331c9;
    --accent-700: #022597;
    --accent-800: #021964;
    --accent-900: #010c32;
    --accent-950: #000619;

    font-family: 'Poppins', 'sans-serif'
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }
 
  input,
  button,
  textarea,
  select {
    font-family: inherit;
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
