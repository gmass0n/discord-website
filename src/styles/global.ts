import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Whitney';
    font-weight: 300;
    src: url('/fonts/Whitney-Light.woff') format("woff");
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 400;
    src: url('/fonts/Whitney-Regular.woff') format("woff");
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 700;
    src: url('/fonts/Whitney-Bold.woff') format("woff");
  }

  @font-face {
    font-family: 'Whitney';
    font-style: italic;
    font-weight: 400;
    src: url('/fonts/Whitney-Regular.woff') format("woff");
  }

  @font-face {
    font-family: 'ArchivoBlack';
    src: url('/fonts/Archivo-Black.woff') format("woff");
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, #__next, body {
    width: 100%;
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility;
    font-family: 'Whitney', 'Helvetica Neue', Helvetica, Arial ,sans-serif;
    line-height: 1.15;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;
