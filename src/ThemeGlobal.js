import { createGlobalStyle } from "styled-components"

// backticks allow regular css to be written
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
    /* transition: all 0.50s linear; */
  }

  #menu {
    border-bottom: 1px solid ${({ theme }) => theme.menuText};
  }

  .sidebarText:hover, .sidebarTextHome:hover, .sidebarTextContact:hover {
    color: ${({ theme }) => theme.menuTextHover};
  }

  .sidebarText, .sidebarTextHome, .sidebarTextContact{
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.menuText};
    font-family: 'HKGrotesk-Bold';
    cursor: pointer;
  }


  `
