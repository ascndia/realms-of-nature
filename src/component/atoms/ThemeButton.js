import React, { useContext } from 'react'
import { DarkModeContext } from '../../provider/AppProvider'

export default function ThemeButton() {

    const { theme, toggleTheme } = useContext(DarkModeContext)

    return (
        <button onClick={toggleTheme} className='flex items-center'>
            {
            theme === 'light' ? 
            <span class="text-white material-symbols-outlined">dark_mode</span>
            : 
            <span class="text-white material-symbols-outlined">light_mode</span>
            }
        </button>
    )
}
