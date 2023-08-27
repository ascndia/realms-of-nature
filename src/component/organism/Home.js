import React from 'react'
import bg1 from '../../images/background/bg1.jpg'
export default function () {                                                
  return (
    <section id='home' className='relative h-screen bg-cover bg-center' style={{
        backgroundImage: `url(${bg1})`
    }}>
        <div className='container relative top-1/2 -translate-y-1/2' >   
            <div className='flex justify-center items-center'>
                <div className='w-full text-white text-2xl sm:text-4xl md:text-6xl text-center'>
                    <h2>G E T <span className='ml-6 text-green-400'>Y O U R</span></h2>
                    <h3><span className='mr-6 text-green-400'>F R E S H </span>P L A N T</h3>
                </div>
            </div>
        </div>
    </section>                
  )
}
