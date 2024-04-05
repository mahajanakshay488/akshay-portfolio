import React from 'react'
import Main from '../components/main/Main';
import Skills from '../components/skills/Skills';
import Works from '../components/works/Works';
import Services from '../components/services/Services';
import Contacts from '../components/contacts/Contacts';

export default function Home() {
    return (
        <>
            <Main />
            <Skills/>
            <Works/>

            <section className="w-full h-[90vh] flex
                max-md:h-auto max-md:flex-col
            ">
                <Services />
                <Contacts />
            </section>
            
        </>
    )
}
