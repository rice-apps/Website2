import React, { createContext, useContext, useState, useEffect } from 'react'
import theme from './Theme';

const defaultThemeContext = {
    dark: false,
    toggle: () => {}
};

const ThemeContext = createContext(defaultThemeContext);
const useTheme= () => useContext(ThemeContext)

const useEffectDarkMode = () => {
    const [themeState, setThemeState] = useState({
        dark: false,
        hasThemeLoaded: false
    });
    useEffect(() => {
        const lsDark = localStorage.getItem("dark") === "True"
        setThemeState({
            ...themeState, dark: lsDark, hasThemeLoaded: true
        });
    }, []);

    return [themeState, setThemeState]
}

// provider 
const ThemeProvider = ({children}) => {
    const [themeState, setThemeState] = useEffectDarkMode();

    if (!themeState.hasThemeLoaded) {
        //workaround: want to wait to render until we find out the current theme state
        return <div />
    }

    const toggle = () => {
        // switch and update
        const dark = !themeState.dark;
        localStorage.setItem("dark", JSON.stringify(dark);
        setThemeState({ ...themeState, dark})
    }

    const computedTheme = themeState.dark ? theme("dark") : theme("light")

    return (
        <ThemeProvider theme={computedTheme}>
            <ThemeContext.Provider value={{
                dark: themeState.dark,
                toggle
            }}>
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    )
}

export { ThemeProvider, useTheme };
