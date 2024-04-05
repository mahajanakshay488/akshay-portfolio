import React, { useState } from 'react'
import Button from '../../tailwinds/comps/Button';
import photoThumb from '../../utils/works/dream-click/photo_thumb.jpg';
import photoFull from '../../utils/works/dream-click/photo_full.jpg';

export default function Works() {
    const worksData = {
        1: {
            title: 'Photographic Website',
            media: photoFull,
            media_type: 'image',
        }
    }
    const [openWorkModal, setOpenWorkModal] = useState(false);
    const [activeWork, setActiveWork] = useState(0);

    const handleWorkModal = (value, activeWork) => {
            setOpenWorkModal(value);
            setActiveWork(activeWork);
    }
  return (
    <>
    <section 
        id='workshow'
        className="w-full h-auto page-px pt-4 pb-3"
    >
                <h1 className=' text-3xl text-slate-600 font-semibold text-center'>Work</h1>
                <section className="w-full h-auto">
                    <section className=" w-full h-auto flex items-center my-12 
                        max-md:flex-col
                        "
                    >
                        <section
                            className="w-1/2 h-full flex items-center
                                max-md:w-full max-md:h-fit
                            "
                        >
                            <img className='w-full rounded-md'
                                src={photoThumb} alt="" />
                        </section>
                        <section
                            className="w-1/2 h-full pl-10 flex items-center
                                max-md:w-full max-md:pt-10 max-md:pl-0 max-md:text-center max-md:justify-center
                                "
                        >
                            <section className='w-[80%] max-[550px]:w-full'>
                                <h4
                                    className='text-xl font-medium text-gray-500 tracking-wider mb-3
                                        max-lg:text-lg
                                        '
                                >Photographic Website</h4>
                                <p
                                    className='text-gray-500 tracking-wider mb-6 text-justify
                                        max-lg:text-sm max-md:text-center
                                        '
                                >
                                    Minimal simple and clean Photographic Design. That show's there work and passion.
                                </p>
                                
                                {/* <Button
                                    onClick={()=>handleWorkModal(true, 1)}
                                    color='primary'
                                    type='badge'
                                    size='small'
                                    className='text-white bg-secondary'
                                >
                                    Explore Work
                                </Button> */}
                                
                            </section>
                        </section>
                    </section>

                    {/* <section className=" w-full h-auto flex flex-row-reverse items-center my-12
                        max-md:flex-col"
                    >
                        <section className="w-1/2 h-full flex items-center
                                    max-md:w-full max-md:h-fit
                                    "
                        >
                            <img className='w-full rounded-md'
                                src="https://static.vecteezy.com/system/resources/previews/001/857/005/non_2x/404-error-landing-page-template-free-vector.jpg" alt="" />
                        </section>
                        <section className="w-1/2 h-full pr-10 flex justify-end items-center text-right
                            max-md:w-full max-md:pt-10 max-md:pr-0 max-md:text-center max-md:justify-center
                            "
                        >
                            <section className='w-[80%] max-[550px]:w-full'>
                                <h4
                                    className='text-xl font-medium text-gray-500 tracking-wider mb-3
                                    max-lg:text-lg
                                    '
                                >Photographic Website</h4>
                                <p
                                    className='text-gray-500 tracking-wider mb-6 
                                    max-lg:text-sm max-md:text-center
                                    '
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi laborum consequuntur perferendis quam quia quae laudantium quasi praesentium ipsa.
                                </p>
                                <Button
                                    onClick={()=>setOpenWorkModal(true)}
                                    color='primary'
                                    type='badge'
                                    size='small'
                                    className='text-white bg-secondary'
                                >
                                    Explore Work
                                </Button>
                            </section>
                        </section>
                    </section> */}
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
                        <p>{worksData[activeWork]?.title}</p>
                        <button onClick={()=>handleWorkModal(false, 0)}>
                            <i className="ri-close-line font-semibold text-gray-700 text-2xl"></i>
                        </button>
                    </div>
                    <section style={{}} className='w-full max-h-[90%] bg-red-400 overflow-scroll flex justify-center items-start'>
                        {(activeWork)?
                            <img 
                                src={photoFull} 
                                alt="img" 
                                className='max-w-full'
                            />
                            : 'close and open again'

                        }
                    </section>

                </div>
            </section>
            </>
  )
}
