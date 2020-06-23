// import React, { createContext, useContext, useState, useEffect } from 'react'
// import theme from './Theme';
// import { ThemeProvider as StyleThemeProvider } from 'styled-components';

// const defaultThemeContext = {
//     dark: false,
//     toggle: () => {}
// };

// const ThemeContext = createContext(defaultThemeContext);
// const useTheme = () => useContext(ThemeContext)

// const useEffectDarkMode = () => {
//     const [themeState, setThemeState] = useState({
//         dark: false,
//         hasThemeLoaded: false
//     });
//     useEffect(() => {
//         const lsDark = localStorage.getItem("dark") === "True"
//         setThemeState({
//             ...themeState, dark: lsDark, hasThemeLoaded: true
//         });
//     }, []);

//     return [themeState, setThemeState]
// }

// // provider 
// const MyThemeProvider = ({children}) => {
//     const [themeState, setThemeState] = useEffectDarkMode();

//     if (!themeState.hasThemeLoaded) {
//         //workaround: want to wait to render until we find out the current theme state
//         return <div />
//     }

//     const toggle = () => {
//         // switch and update
//         const dark = !themeState.dark;
//         localStorage.setItem("dark", JSON.stringify(dark));
//         setThemeState({ ...themeState, dark})
//     }

//     const computedTheme = themeState.dark ? theme("dark") : theme("light")

//     return (
//         <StyleThemeProvider theme={computedTheme}>
//             <ThemeContext.Provider value={{
//                 dark: themeState.dark,
//                 toggle
//             }}>
//                 {children}
//             </ThemeContext.Provider>
//         </StyleThemeProvider>
//     )
// }

// export { MyThemeProvider, useTheme };

//FIRST TRY, EMOTION BASED ONE











import React, { createContext, useReducer } from 'react'
import reducer from "./ThemeReducer";

export default createContext(null);

