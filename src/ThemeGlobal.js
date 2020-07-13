import { createGlobalStyle } from "styled-components"

// contains mostly color css (for dark theme switch)

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primaryText};
    /* font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif; */
    /* transition: all 0.50s linear; */
  }

  /* APP CSS */

  #menu {
    background: ${({ theme }) => theme.background};
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

  /* HAMBURGERS CSS */

  .hamburger.is-active .hamburger-inner,
    .hamburger.is-active .hamburger-inner::before,
    .hamburger.is-active .hamburger-inner::after,
    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
      background-color: ${({ theme }) => theme.hamburger};
  }

  /* ABOUT US CSS */

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

  /* JOIN US CSS */

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

  /* LANDING PAGE CSS */

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
    /* this is the arrow */
    border: solid ${({ theme }) => !theme.background};
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
  }

  /* PARTNERS CSS */

  #text {
    color: ${({ theme }) => theme.primaryText};
  }

  /* PROJECTS CSS */

  .projectsPageWrapper {
    background: radial-gradient(circle at 5vw 0, ${({ theme }) => theme.backgroundCircle}, 
    ${({ theme }) => theme.backgroundCircle} 35vw, transparent 35vw);
  }

  .projectsPageWrapper h1 {
    color: ${({ theme }) => theme.project1}
  }

  .circle {
    background: ${({ theme }) => theme.smallProjectCircle};
  }

  .circle:hover {
    background: ${({ theme }) => theme.smallProjectCircleHover};
  }

  .link:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.project1};
  }

  /* TESTIMONIALS CSS */

  .TestimonialParagraph {
    color: ${({ theme }) => theme.primaryText};
  }

  .TestimonialParagraph em {
    color: ${({ theme }) => theme.primaryTextEm};
  }

  .nameWrapper {
    color: ${({ theme }) => theme.projectHeading};
  }
  /* carousel dot is styled in testimonials.js */


  /* WORK FOR US CSS */
  
  #content-WorkForUs {
    background:
      radial-gradient(circle at 20vw 90vh, ${({ theme }) => theme.primaryTextEm}, 
        ${({ theme }) => theme.primaryTextEm} 35vw, transparent 35vw),
      radial-gradient(circle at 77vw -10vw, ${({ theme }) => theme.backgroundCircle}, 
        ${({ theme }) => theme.backgroundCircle} 30vw, transparent 30vw);
  }

  #JoinUsTitle {
    color: ${({ theme }) => theme.backgroundCircle};
  }

  #JoinUsText {
    color: ${({ theme }) => theme.background};
  }

  /* PROJECT TEMPLATE CSS */

  .pageWrapper {
    background: ${({ theme }) => theme.background};
    background: radial-gradient(circle at 85vw 60vh, ${({ theme }) => theme.backgroundCircle},
    ${({ theme }) => theme.backgroundCircle} 25vw, transparent 25vw);
  }

  #projectName {
    color: ${({ theme }) => theme.primaryTextEm}
  }

  .paragraphs, .captionDescription {
    color: ${({ theme }) => theme.projectText}
  }

  .teamAndProjectScopeLabel, .caption {
    color: ${({ theme }) => theme.projectHeading};
  } 




  `
