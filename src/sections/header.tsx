import React, { useEffect, useState } from 'react';
import { navbar } from '@/constants';
import { phoneSvg, togglerSvg } from '@/components/svg';
import Image from 'next/image'

export default function Header() {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0 || navbarVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarVisible]);

    const toggleNavbar = () => {
        setNavbarVisible(prevNavbarVisible => !prevNavbarVisible);
    };

    useEffect(() => {
        setScrolling(window.scrollY > 0 || navbarVisible);
    }, [navbarVisible]);

    const scrollTo = (target: any) => {
        const targetElement = document.getElementById(target);
        const navbarNav = document.getElementById('navbarNav');
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            navbarNav?.classList.add('hidden');
        }
    };

    return (
        <div className="relative w-full h-[600px] xl:h-screen overflow-hidden">
            <Image
                src="/images/intro.jpg"
                alt="Intro Image"
                layout="fill"
                objectFit="cover"
                className="brightness-[35%]"
                loading="eager"
            />
            <div className='intro bottom-[35%] xl:bottom-[0] absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className="font-gruppo text-[32px] lg:text-[55px] font-extrabold text-white tracking-wider mb-0">Aesthetic Detail Studio</h1>
                <h2 className="lg:mt-[-15px] font-light text-[22px] lg:text-[28px] text-white/70 flex-wrap font-gruppo text-center mb-[20px]">We have everything for your car&apos;s beauty.</h2>
                <a onClick={() => scrollTo('scrollToFooter')} className="font-ubuntuL cursor-pointer font-thin rounded-[5px] mt-3 lg:mt-5 text-[18px] xl:text-[22px] border border-[#c1d8f080] bg-transparent text-white py-[2.5px] px-[10px] lg:py-[5px] lg:px-[20px] transition-colors duration-500 hover:bg-[#c1d8f01a]">
                    Book an appointment
                </a>
            </div>
            <nav className={`fixed left-0 w-full top-0 h-[60px] z-50 ${scrolling ? 'backdrop-blur-md bg-black/20' : ''}`} id="nav-blur">
                <div className="w-[90%] lg:max-w-[80%] grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_2fr_1fr] m-auto">
                    <a className='flex p-0 items-center font-bold text-[40px] text-white/80 select-none font-ubuntu drop-shadow-md' href="/">CARCARELT</a>
                    <div className="hidden lg:flex flex-row justify-center items-center gap-5">
                        {navbar.map((nav, i) => (
                            <a key={i} onClick={() => scrollTo(nav.scrollT)} className="text-white font-gruppo font-medium text-[20px] tracking-wide cursor-pointer transition-colors ease-in duration-500 hover:text-[#c1d8f0]">{nav.name}</a>
                        ))}
                    </div>
                    <div onClick={() => scrollTo('scrollToFooter')} className='hidden lg:flex justify-end items-center'>{phoneSvg}</div>
                    <div className="flex lg:hidden justify-end items-center">
                        <button onClick={toggleNavbar} id='toggler' className="bg-[#ffffff14] py-1 px-3 rounded-[15px] flex border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            {togglerSvg}
                        </button>
                    </div>
                </div>
            </nav>
            {navbarVisible && (
                <div className='fixed lg:hidden w-full top-[60px] bg-black/20 z-50 backdrop-blur-md' id="navbarNav">
                    <ul className='text-center items-center'>
                        {navbar.map((nav, index) => (
                            <li key={index} className="pt-3">
                                <a onClick={() => scrollTo(nav.scrollT)} className='text-white font-gruppo font-medium text-[20px] tracking-wide cursor-pointer transition-colors ease-in duration-500 hover:text-[#c1d8f0]'>{nav.name}</a>
                            </li>
                        ))}
                        <li className="pt-3 justify-center flex pb-3">
                            <a onClick={() => scrollTo('scrollToFooter')} className='text-white font-gruppo font-medium text-[20px] tracking-wide cursor-pointer transition-colors ease-in duration-500 hover:text-[#c1d8f0]'>
                                {phoneSvg}
                            </a>
                        </li>
                    </ul>
                </div>
            )}

        </div>
    );
}
