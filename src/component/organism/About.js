import React from 'react'

export default function About() {
  return (
    <section className='h-screen pt-56'>
        <div className='container'> 
            <div className='flex flex-col md:flex-row'>
                <div className='text-dark dark:text-white w-full md:w-1/2 px-4'>
                    <h2 className='tracking-wide text-3xl font-bold '>About us</h2>
                    <h3 className='text-green-800 dark:text-white text-lg font-bold'>We Want To Share Nature For Everyone</h3>
                    <p className=' text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </section>
  )
}
