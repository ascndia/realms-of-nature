import React, { useContext } from 'react'
import { NavContext } from '../../provider/AppProvider'


export default function Hamburger() {

    const { navActive, toggleNav } = useContext(NavContext)
    const initialClasses = 'block'

    return (
            <div className='flex items-center px-4'>
                <button onClick={toggleNav} id='hamburger' name='hamburger' className={navActive ? 'hamburger-active ' + initialClasses : initialClasses}>
                    <span className='hamburger-line transition duration-300 ease-in-out origin-top-left'></span>
                    <span className='hamburger-line transition duration-300 ease-in-out'></span>
                    <span className='hamburger-line transition duration-300 ease-in-out origin-bottom-left'></span>
                </button>
            </div>
    )
}