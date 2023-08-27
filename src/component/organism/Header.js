import React, { useContext } from 'react'
import ThemeButton from '../atoms/ThemeButton'
import Hamburger from '../atoms/Hamburger'
import DropDown from '../molecules/DropDown'


export default function Header() {

  return (
    <header className='z-[9999] absolute w-screen bg-transparent opacity-90 backdrop-blur-sm shadow-md header'>
          <div className='transition duration-300 relative px-8 py-3 flex items-center justify-between dark:bg-dark'>
              <ThemeButton />
              <h2 className='absolute left-1/2 -translate-x-1/2 text-white uppercase tracking-widest font-thin text-lg md:text-xl'>
                  Realms of Nature
              </h2>
              <Hamburger/>
              <DropDown/>
        </div>
    </header>

  )
}
