import React from 'react'

export default function About() {
  return (
    <section className='h-screen dark:bg-zinc-900 md:pt-56 pt-24'>
        <div className='container'> 
            <div className='flex flex-col md:flex-row'>
                <div className='text-dark dark:text-white w-full md:w-1/2 px-4'>
                    <h2 className='tracking-wide text-3xl font-bold '>About us</h2>
                    <h3 className='text-green-800 dark:text-slate-200 text-lg font-bold'>We Want To Share Nature For Everyone</h3>
                    <p className='text-sm dark:text-slate-400 font-light text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='w-full md:w-1/2 px-4 mt-16 md:mt-0'>
                <iframe className=' h-64 w-full md:h-48' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32588.74134716666!2d112.77712477823131!3d-7.283390158922127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fba7c21aba85%3A0xe63dd66f7ec7d384!2sGalaxy%20Mall%203!5e0!3m2!1sen!2sid!4v1693126249041!5m2!1sen!2sid" ></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
