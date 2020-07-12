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

  .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after,
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      background-color: ${({ theme }) => theme.hamburger};
  }

  .AboutUsWrapper {
    background: radial-gradient(circle at 5vw 100vh, ${({ theme }) => theme.backgroundCircle},
      ${({ theme }) => theme.backgroundCircle} 35vw, transparent 35vw);
  }

  #AboutUsParagraph {
    color: ${({ theme }) => theme.primaryText};
  }

  #AboutUsParagraph em {
    color: ${({ theme }) => theme.primaryTextEm};
  }

  #content-JoinUs {
    background: radial-gradient(circle at 77vw calc(100vh - 10vw), ${({ theme }) => theme.backgroundCircle},
    ${({ theme }) => theme.backgroundCircle} 30vw, transparent 30vw);
  }

  #ContactUsTitle {
    color: ${({ theme }) => theme.primaryTextEm}
  }

  #ContactUsText {
    color: ${({ theme }) => theme.primaryText}
  }

  #riceapps {
    color: ${({ theme }) => theme.primaryText}
  }

  #ds, #sg {
    color: ${({ theme }) => theme.primaryTextEm}
  }

  #gray {
    color: ${({ theme }) => theme.primaryText} !important
  }

  i {
    border: solid ${({ theme }) => !theme.background};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  `
