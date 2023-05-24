import wallpaper from "./common/img/wall.png";
const { createGlobalStyle } = require("styled-components");

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    background-image: url(${wallpaper});
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
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
      font-size: 0.8em;
    }
  }
`;
