const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-image: "./common/img/wall.png";
    background-attachment: fixed;
  }

  *, ::before, ::after {
    box-sizing: inherit;
  }

  #root {
    font-family: 'Genos', sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    letter-spacing: 0.08em;
  }
`;
