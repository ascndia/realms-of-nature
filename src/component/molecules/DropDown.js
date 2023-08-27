import React, { useContext } from 'react'
import { NavContext } from '../../provider/AppProvider';

export default function DropDown() {

    const { navActive, toggleNav } = useContext(NavContext)
    const initialClasses = `opacity-100 absolute mt-3 py-5 bg-white shadow-xl
    rounded-lg max-w-[270px] w-full right-4 top-full z-index[9999]`;

    return (
        <div id='nav-menu' className={!navActive ? 'hidden ' + initialClasses : initialClasses}>
            <ul className='block'>
                <li className='group cursor-pointer mb-5'>
                    <a href='#home' className='text-base text-dark mx-8 py-2 
                    group-hover:text-primary'>Beranda</a>
                </li>
                <li className='group cursor-pointer mb-5'>
                    <a href='#about' className='text-base text-dark mx-8 py-2 
                    group-hover:text-primary'>Tentang Toko</a>
                </li>
                <li className='group cursor-pointer mb-5'>
                    <a href='#plant' className='text-base text-dark mx-8 py-2 
                    group-hover:text-primary'>Tanaman</a>
                </li>
                <li className='group cursor-pointer mb-5'>
                    <a href='#service' className='text-base text-dark mx-8 py-2 
                    group-hover:text-primary'>Layanan</a>
                </li>
                <li className='group cursor-pointer mb-4'>
                    <a href='#contact' className='text-base text-dark mx-8 py-2 
                    group-hover:text-primary'>Hubungi kami</a>
                </li>
            </ul>
        </div>
    )
}
