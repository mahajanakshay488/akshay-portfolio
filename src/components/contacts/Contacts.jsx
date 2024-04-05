import React, { useEffect, useRef, useState } from 'react';
import Button from '../../tailwinds/comps/Button';
import emailjs from '@emailjs/browser';

export default function Contacts() {

    const formRef = useRef();
    const [connected, setConnected] = useState(true);
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setConnected(false);
        emailjs
      .sendForm('service_d3u6mkc', 'template_gqq8pze', formRef.current, {
        publicKey: 'Xohh_A2_MsLdhifpn',
      })
      .then(
        (res) => {
          console.log('SUCCESS!', res);
          setConnected(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    }

  return (
    <section 
      id='contact'
      className="w-1/2 h-full bg-primary-dark flex flex-col items-center p-8 rounded-tl-md
                max-md:w-full max-md:h-fit max-md:rounded-none
                ">
                    <h1 className=' text-3xl text-white tracking-wide text-center'>Contact</h1>
                    <section className="w-2/3 mt-10 h-full flex justify-center items-center
                    max-lg:w-full
                    ">
                        <form ref={formRef} onSubmit={handleSubmit} className='w-full '>
                            <label className="block my-6">
                                <span className="block tracking-widest text-white text-center">Your Name</span>
                                <input
                                    type="text"
                                    name='user_name'
                                    required
                                    placeholder='here..'
                                    className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-white rounded-md shadow-sm
                                        text-center text-white tracking-wide placeholder-slate-50
                                        focus:outline-white focus:border-2 focus:white focus:ring-1
                                        "
                                />
                            </label>
                            <label className="block my-6">
                                <span className="block tracking-widest text-white text-center">Contact Number</span>
                                <input
                                    type="text"
                                    name='user_contact'
                                    required
                                    placeholder='here..'
                                    className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-white rounded-md shadow-sm
                                    text-center text-white tracking-wide placeholder-slate-50
                                        focus:outline-white focus:border-2 focus:white focus:ring-1
                                        "
                                />
                            </label>
                            <label className="block my-6">
                                <span className="block tracking-widest text-white text-center">Message</span>
                                <textarea
                                    type="text"
                                    name='message'
                                    rows={4}
                                    required
                                    placeholder='here..'
                                    className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-white rounded-md shadow-sm
                                        text-center text-white tracking-wide placeholder-slate-50
                                        focus:outline-white focus:border-2 focus:white focus:ring-1
                                        "
                                />
                            </label>
                            <label className="block my-6 text-center">
                                {
                                    connected ?
                                        <Button type='button' color='white' size="small">Connect</Button>
                                    :
                                        <p>Connecting...</p>

                                }
                            </label>
                        </form>
                    </section>
                </section>
  )
}
