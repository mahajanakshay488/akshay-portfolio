import React, { useEffect, useRef, useState } from 'react';
import Button from '../../tailwinds/comps/Button';
import htmlLogo from '../../utils/logos/htmll.png';
import cssLogo from '../../utils/logos/cssl.png';
import jsLogo from '../../utils/logos/jslogo.png';
import reactLogo from '../../utils/logos/reactL.svg';
import angularLogo from '../../utils/logos/angularl.webp';
import nodejsLogo from '../../utils/logos/nodejsl.webp';
import mongodbl from '../../utils/logos/mongodbl.webp';
import firebase from '../../utils/logos/firebasel.webp';
import gitLogo from '../../utils/logos/github.webp';
import mernLogo from '../../utils/logos/mernLogo.png';

export default function Skills() {

    const divRef = useRef(null);
    const skillCotainerRef = useRef(null);
    const [skillContHeight, setSkillContHeight] = useState(1000);

    useEffect(()=>{
        if(divRef && skillCotainerRef){
            console.log('divRef ', divRef.current.offsetHeight);
            console.log('skillContReff', skillCotainerRef.current.offsetHeight);
            setSkillContHeight((divRef.current.offsetHeight) + 'px');
        }
    },[divRef.current, skillCotainerRef]);

    useEffect(()=>{
        console.log('skill state cont height', skillContHeight)
    },[skillContHeight])

  return (
    // <section ref={skillCotainerRef} className='w-full h-[95vh] relative
    //             max-xl:h-[107vh]
    //             max-md:h-[112vh]
    //                 max-sm:h-[194vh]
    //             '>
    <section ref={skillCotainerRef} style={{height: skillContHeight}} className={`w-full relative
                `}>

                <section 
                    ref={divRef}
                    id='skills'
                    className=' bg-[#fad77f] w-10/12 h-auto absolute -top-16 left-1/2 -translate-x-1/2 rounded-md shadow-lg shadow-#f0cf7b p-2 py-8 flex flex-col justify-between items-center
        max-md:-top-5 max-sm:w-[90%]
        '>

                    <h1 className=' text-3xl text-white font-semibold text-center mb-4'>Skills</h1>

                    <section className=' h-fit w-full 
                max-sm:grid-rows-4
            '>
                        <div className=' h-fit w-full flex justify-evenly
                    max-sm:flex-col max-sm:items-center' >
                            <section 
                            data-aos="fade-up"
                            data-aos-delay='100'
                            className='flex flex-col items-center justify-start bg-[#fefefe] rounded-md h-[270px] w-60 p-4 m-2 my-4 shadow-md shadow-black-50
                     max-sm:h-fit'>
                                <h3 className='text-lg font-semibold text-slate-600 mb-4'>Frontend</h3>
                                <Button type='badge' className='border-2 border-slate-600 my-2 flex items-center'>
                                    <img className='h-8 mr-2' src={htmlLogo} />
                                    UI/UX | HTML
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 my-2 flex items-center'>
                                    <img className='h-8 mr-2' src={cssLogo} />
                                    CSS
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 mr-2 rounded-sm' src={jsLogo} />
                                    JavaScript
                                </Button>
                            </section>

                            <section 
                            data-aos="fade-up"
                            data-aos-delay='300'
                            className='flex flex-col items-center justify-start bg-[#fefefe] rounded-md h-[270px] w-60 p-4 m-2 my-4 shadow-md shadow-black-50
                     max-sm:h-fit'>
                                <h3 className='text-lg font-semibold text-slate-600 mb-4'>Frameworks</h3>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm' src={reactLogo} />
                                    React.js
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm mr-2' src={angularLogo} />
                                    Angular 7
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 mr-2 rounded-sm' src={jsLogo} />
                                    Express.js
                                </Button>
                            </section>
                        </div>

                        <div className=' h-fit w-full flex justify-evenly
                    max-sm:flex-col max-sm:items-center'>
                            <section 
                            data-aos="fade-up"
                            data-aos-delay='200'
                            className='flex flex-col items-center justify-start bg-[#fefefe] rounded-md h-[270px] w-60 p-4 m-2 my-4 shadow-md shadow-black-50
                 max-sm:h-fit'>
                                <h3 className='text-lg font-semibold text-slate-600 mb-4'>Backend/Database</h3>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm mr-2' src={nodejsLogo} />
                                   Node.js
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm mr-2' src={mongodbl} />
                                   MongoDB
                                </Button>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm mr-2' src={firebase} />
                                   FireBase
                                </Button>
                            </section>

                            <section
                            data-aos="fade-up"
                            data-aos-delay='400'
                             className='flex flex-col items-center justify-start bg-[#fefefe] rounded-md h-[270px] w-60 p-4 m-2 my-4 shadow-md shadow-black-50
                 max-sm:h-fit'>
                                <h3 className='text-lg font-semibold text-slate-600 mb-4'>Others</h3>
                                <Button type='badge' className='border-2 border-slate-600 capitalize my-2 flex items-center'>
                                <img className='h-8 rounded-sm mr-2' src={gitLogo} />
                                   Git/GitHub
                                </Button>
                                <h3 className='text-lg font-semibold text-slate-600 mb-4 mt-4'>Primary Skills</h3>
                                <img className='h-10 rounded-sm inline-block' src={mernLogo} />
                            </section>
                        </div>

                    </section>
                </section>

            </section>
  )
}
