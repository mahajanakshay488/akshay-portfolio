import React, { useState } from 'react'
import Button from '../../tailwinds/comps/Button'

export default function Services() {
    const [openWorkModal, setOpenWorkModal] = useState(false);
  return (
    <>
    <section
        id='services'
        className="w-1/2 h-full flex flex-col items-center p-8
                max-md:w-full max-md:h-fit
                ">

                    <h1 className=' text-3xl text-slate-600 tracking-wide text-center'>Services</h1>

                    <section className="w-2/3 h-full mt-10
                     max-lg:w-full
                    ">
                        <section className="w-full h-full flex flex-col justify-between items-center">
                            <h6 className='text-md tracking-wide'>
                                ✅ Web Design/Development
                            </h6>
                            <p className='text-sm font-light tracking-wide text-gray-500 text-center mt-2'>
                                Minimalist Responsive Web Design & Development.
                            </p>
                            {/* <Button 
                                onClick={()=>setOpenWorkModal(true)}
                                color='secondary' type='badge' size='small' className='mt-3 capitalize'>
                                know More
                            </Button> */}
                            <hr className='w-full h-[1px] bg-gray-100 my-5' />

                            <h6 className='text-md tracking-wide'>
                                ✅ RestFull Services
                            </h6>
                            <p className='text-sm font-light tracking-wide text-gray-500 text-center mt-2'>
                                RestFull API for front-end.
                            </p>
                            {/* <Button
                                onClick={()=>setOpenWorkModal(true)}
                             color='secondary' type='badge' size='small' className='mt-3 capitalize'>
                                know More
                            </Button> */}
                            <hr className='w-full h-[1px] bg-gray-100 my-5' />
                            <h6 className='text-md tracking-wide'>
                                ✅ Business Degitization
                            </h6>
                            <p className='text-sm font-light tracking-wide text-gray-500 text-center mt-2'>
                                Scale your business online and reachout more customers with Ecomerce websites like Amazon, Flipkart etc.
                            </p>
                            {/* <Button 
                                onClick={()=>setOpenWorkModal(true)}
                                color='secondary' type='badge' size='small' className='mt-3 capitalize'>
                                know More
                            </Button> */}
                        </section>
                    </section>
                </section>

                {/* Modal */}
            <section className={`
            w-screen h-screen bg-[#00000084] fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[9999]
            flex justify-center items-center
            ${openWorkModal?'':'hidden'}
        `}>
            <div className='w-[98%] h-[98%] bg-white rounded-lg overflow-hidden' >
                <div 
                    className="w-full bg-gray-100 px-2 py-1
                            flex justify-between items-center
                        "
                >
                    <p>Web</p>
                    <button onClick={()=>setOpenWorkModal(false)}>
                        <i className="ri-close-line font-semibold text-gray-700 text-2xl"></i>
                    </button>
                </div>
            

            </div>
        </section>
        </>
  )
}
