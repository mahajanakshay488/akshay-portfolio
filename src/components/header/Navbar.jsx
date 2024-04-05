import { useEffect, useState } from "react";
import Button from "../../tailwinds/comps/Button";

const Navbar = () =>{
    const [menuOpen, setMenuOpen] = useState(false);
    const [navTextColor, setNavTextColor] = useState('white');
    const [scrolled, setScrolled] = useState(false);
    const [dispalayNav, setDisplayNav] = useState(true);

    useEffect(()=>{ 
        if(window.scrollY < 200){
            if(menuOpen){
                setNavTextColor('slate-600');
            }else{
                setNavTextColor('white');
            }
        }
    },[menuOpen]);

    const handleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 200){
                setScrolled(true);
                setNavTextColor('slate-600');
            }else{
                setScrolled(false);
                setNavTextColor('white');
            }
        }, { passive: true });
    }, []);

    const handleLink = () =>{
        setDisplayNav(false);
        setTimeout(() => {
            setDisplayNav(true);
        }, 2000);
    }

    return (
        <>
        {/* <header> */}
            <nav className={`font-normal ${dispalayNav ? '' : 'hidden'} ease-in duration-700  max-md:hidden bg-${scrolled? 'white':'transparent'} ${scrolled? 'shadow-md shadow-black-50':''} ${scrolled? 'h-[60px]' : 'h-[100px]'}`}>
            <h2 className={`font-normal text-${navTextColor} font-semibold`}>Akshay Mahajan</h2>
                <a 
                    // onClick={()=>handleLink()}
                    href="#home" className="link">
                    Home
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>
                <a  
                    onClick={()=>handleLink()}
                    href="#skills" className="link">
                    Skills
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>
    
                <a 
                    onClick={()=>handleLink()}
                    href="#workshow" className="link"
                >
                    Work
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>

                <a 
                    onClick={()=>handleLink()}
                    href="#services" className="link"
                >
                    Services
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>
    
                <a 
                    onClick={()=>handleLink()}
                    href="#contact" className="link"
                >
                    Contact
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>
        </nav>
        <nav className={`font-normal hidden max-md:flex max-md:${dispalayNav ? 'flex' : 'hidden'} ease-in duration-700 bg-${scrolled? 'white':'transparent'} ${scrolled? 'shadow-md shadow-black-50':''} ${scrolled? 'h-[60px]' : 'h-[80px]'}`}>
        <h2 className={`font-normal text-${navTextColor} font-semibold`}>Akshay Mahajan</h2>
            {/* <button onClick={handleMenu}> */}
            <Button 
                onClick={handleMenu}
                type="badge" 
                size="sm" 
                color="white"
            >
                {
                !menuOpen 
                ?
                    <i className="ri-menu-line"></i>
                    :
                    <i className="ri-close-line text-lg"></i>
                }
            </Button>
            {/* </button> */}
            
        </nav>
        {/* </header> */}
        
        <div className={` bg-gray-50 w-full ${menuOpen?'h-full':'h-0'}  overflow-hidden fixed top-0 left-0 z-[99] 
        flex flex-col font-medium px-5 ease-in-out duration-500
    `} >
        <a 
            onClick={handleMenu}
            href="#home" className="link mt-24"
        >
                Home
                <span className="line line1"></span>
                <span className="line line2"></span>
            </a>
            <a 
                onClick={()=>{handleMenu(); handleLink()}}
                href="#skills" className="link mt-4"
            >
                Skills
                <span className="line line1"></span>
                <span className="line line2"></span>
            </a>

            <a 
                onClick={()=>{handleMenu(); handleLink()}}
                href="#workshow" className="link mt-4"
            >
                Work
                <span className="line line1"></span>
                <span className="line line2"></span>
            </a>

            <a 
                onClick={()=>{handleMenu(); handleLink()}}
                href="#services" className="link mt-4"
            >
                    Services
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </a>

            <a 
                onClick={()=>{handleMenu(); handleLink()}}
                href="#contact" className="link mt-4"
            >
                Contact
                <span className="line line1"></span>
                <span className="line line2"></span>
            </a>
        </div>
        </>
    )
};
export default Navbar;