import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function CustomNavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const getPath = () => {
        if(location.pathname === '/') return 1;
        if(location.pathname === '/about') return 2;
        if(location.pathname === '/support') return 3;
        if(location.pathname === '/login') return 4;
        if(location.pathname === '/signup') return 5;
    }

    const [pressed, setPressed] = useState(getPath);
    const togglePressed = (index, path) => {
        setPressed(index);
        navigate(path);
        if (isMenuOpen) {
            setIsMenuOpen(false); // Close the menu if a link is clicked
        }
    }

    return (
        <header className='bg-primary h-[15%] flex items-center fixed top-0 left-0 w-full z-50'>
            <div className='max-w-[1100px] w-full mx-auto flex justify-between px-8 relative'>
                <div onClick={() => navigate('/')} className='cursor-pointer h-full flex items-center'>
                    <img src={require('../assets/images/logo.png')} alt={'aora-logo'} className='h-6 w-auto'></img>
                </div>
                <div className='flex gap-2 items-center'>
                    <div className='flex sm:hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            <Icon icon={isMenuOpen ? 'iconamoon:close-fill' : 'dashicons:menu-alt'} className='h-6 w-6 text-white hover:text-secondary'></Icon>
                        </button>
                    </div>
                    <div           
                    className={`bg-black-first rounded-2xl w-[92%] py-4 gap-4 flex flex-col absolute top-[80px] left-4 right-0 items-center ${isMenuOpen ? 'flex' : 'hidden'} 
                                sm:flex sm:flex-row sm:bg-transparent sm:relative sm:top-auto sm:left-auto sm:right-auto sm:py-0`}
                    
                    
                    >
                        <button className={`h-6 px-8 hover:opacity-65`} onClick={() => togglePressed(1, '/')}>
                            <span className={`font-poppins-semibold text-sm ${pressed === 1 ? 'text-secondary' : 'text-white'}`}>Home</span>
                        </button>

                        <button className={`h-6 px-8 hover:opacity-65`} onClick={() => togglePressed(2, '/about')}>
                            <span className={`font-poppins-semibold text-sm  ${pressed === 2 ? 'text-secondary' : 'text-white'}`}>About</span>
                        </button>

                        <button className={`h-6 px-8 hover:opacity-65`} onClick={() => togglePressed(3, '/support')}>
                            <span className={`font-poppins-semibold text-sm  ${pressed === 3 ? 'text-secondary' : 'text-white'}`}>Support</span>
                        </button>

                        <button className={`h-8 px-8 bg-secondary rounded-2xl hover:opacity-65`} onClick={() => togglePressed(5, '/signup')} style={{ boxShadow: "0px 12px 6px rgba(0, 0, 0, 0.25)" }}>
                            <span className={`font-poppins-semibold text-sm  ${pressed === 5 ? 'text-black-90' : 'text-black-90'}`}>Get Started</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default CustomNavBar
