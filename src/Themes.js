

// LIGHTS ---------
const white = '#ffffff' // bg
const gray1 = '#f1f1f1' // projects
const gray3 = '#d2d2d2' // navbar text non hover, bottom border of menu, and SWITCH
const gray4 = '#6E6E6E' // navbar text hover
const darkturq = '#40BFB4' //hamburger menu, about us em, join us

const gray5 = '#787878' //about us text
const pink = '#FFB9CD' //bg circle, projects

// const gray6 = '#808080' //join us contactus landing page
const darkgreen = '#008F82' //projects
const darkergreen = '#01796F' //testimonals, proj template

const gray7 = '#969696' //proj templates


// DARKS ----------
const bggray = '#2D313A' //main bg
const dgray1 = '#AFB6C0' //menu text and border

// white (text)

const darkpink = '#DE7785' //about us em, project circles hover
const darkerpink = '#D84A6F' //project text
const lightpink = '#EECACB' //project circle non hover opacity 60

const lightturq = '#86DBD2' //giant bg circle
const logoturq = '#41BFB4' //logo + SLIDER + HAMBURGER MENU


// make sure both themes have same fields
export const lightTheme = {
    background: white,
    menuText: gray3,
    menuTextHover: gray4,
    hamburger: darkturq,
    backgroundCircle: pink,
    smallProjectCircle: gray1,
    smallProjectCircleHover: 'rgba(64, 191, 180, 0.8)', // darkturq with diff opacity
    project1: darkgreen,
    projectHeading: darkergreen,
    projectText: gray7,
    primaryText: gray5, //about us, partners, testimonials, contact us
    primaryTextEm: darkturq
};

export const darkTheme = {
    background: bggray,
    menuText: dgray1,
    menuTextHover: '#f1f1f1', //not given
    hamburger: darkpink,
    backgroundCircle: lightturq,
    smallProjectCircle: 'rgba(238, 202, 203, 0.7)', //lightpink with opacity from design
    smallProjectCircleHover: 'rgba(222, 119, 133, 0.6)', //darkpink with opacity from design
    project1: darkerpink,
    projectHeading: darkerpink, //page not designed
    projectText: '#f1f1f1', //page not designed
    primaryText: white, //about us, partners, testimonials, contact us
    primaryTextEm: darkpink
};

// const theme = mode => (mode === "dark" ? themeDark : themeLight);

// export default theme;