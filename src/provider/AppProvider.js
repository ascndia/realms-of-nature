import React, { createContext, useEffect, useState } from 'react'
export const DarkModeContext = createContext(undefined)
export const NavContext = createContext(undefined)

export default function AppProvider({children}) {
    
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? storedTheme : 'light'
    // Toggle themes
    const [theme,setTheme] = useState(initialTheme)
    const toggleTheme = () => { theme === 'dark' ? setTheme('light') : setTheme('dark') }
    
    //Toggle Nav Active
    const [navActive,setNavActive] = useState(false)
    const toggleNav = () => setNavActive(!navActive)

    useEffect(() => {
        const html = document.querySelector('html');
        theme === 'light' ? html.classList.remove('dark') : html.classList.add('dark')
        localStorage.setItem('theme',theme)
    },[theme])

    const ThemeContextValue = {theme,toggleTheme}
    const NavContextValue = {navActive,toggleNav}

    return (
        <DarkModeContext.Provider value={ThemeContextValue}>
            <NavContext.Provider value={NavContextValue}>
                {children}
            </NavContext.Provider>
        </DarkModeContext.Provider>
    )
}

