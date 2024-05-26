import React from 'react';
import Button from '../../tailwinds/comps/Button';
import avatar from '../../avatar.avif';

export default function Main() {
  return (
            // <main
            //     id='home'
            //     className='h-screen w-full flex items-center 
            //         max-md:flex-col
            //         max-[400px]:h-[90vh]
            //     '
            // >
            <main
                id='home'
                className='h-screen w-full flex items-center 
                    max-md:flex-col
                    max-[400px]:h-[90vh]
                '
            >
                <section className=' h-full w-[30%]
                               max-md:h-[50%] max-md:w-full
                            '
                >

                    <div 
                        className='bg-red-400 w-full h-full flex justify-center items-center
                                max-md:items-end max-md:pb-6
                            '
                    >
                        <div
                            data-aos="fade-in"
                            data-aos-delay='1400' 
                            data-aos-duration='1600'
                            className='w-[70%] bg-red-50 overflow-hidden rounded-md shadow-md shadow-[#665e4bbe]
                                    max-md:h-[60%] max-md:w-auto
                                ' 
                        >
                            <img className='h-full' src={avatar} alt="" />
                        </div>
                    </div>
                </section>
                <section className='container w-[70%] h-full font-semibold text-slate-600 tracking-wide flex items-center
                         max-md:pt-6 max-md:justify-center
                        max-md:w-full max-md:h-1/2
                    ' 
                >

                    <div className=' h-fit w-[60%] text-justify ms-8 relative
                                max-lg:w-[80%]
                                max-md:h-fit max-md:mx-[2vw] max-md:w-4/5 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center
                                max-sm:w-full
                            '
                    >
                         <h1 
                            data-aos="fade-up"
                            data-aos-delay='200'
                            className='text-7xl uppercase font-semibold font-sans uppercas
                                max-lg:text-6xl
                                max-md:text-[13vw]
                                
                                '
                        >Pranaam</h1>
                        <h2 
                        data-aos="fade-up"
                        data-aos-delay='400'
                        className='text-xl uppercase my-6
                                max-lg:text-xl
                            '
                        >
                            My name is AKSHAY MAHAJAN, I am a 
                            <span className='font-bold text-red-400' > fullstack web developer. </span>
                            I help people to present digitaly.
                        </h2>
                        <div
                        data-aos="fade-up"
                        data-aos-delay='600'
                        >
                            <a href='#contact' className='font-semibold rounded-full py-2 px-3 bg-red-400 hover:bg-red-400 hover:shadow-md hover:shadow-[#de757562] text-white'>lets talk</a>
                        </div>
                        
                    </div>

                </section>
            </main>
  )
}
