import React, { useRef, useLayoutEffect } from 'react';
import { aboutUs } from '@/constants';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function AboutUs() {

    const refs = useRef<(HTMLDivElement | null)[]>([]);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        refs.current.forEach((about, i) => {
            if (about) {
                const aboutTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: about,
                        start: 'top bottom',
                        end: '+=300px',
                        scrub: true,
                        // markers: true
                    }
                });

                aboutTimeline.fromTo(about,
                    { x: '25vw', opacity: 0 },
                    { x: '0vw', opacity: 1, duration: 2, ease: 'power2.out' }
                );
            }
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id='scrollToAboutUs' className="h-auto bg-[#02161d] pb-20 overflow-hidden">
            <div className="flex-row lg:flex-row w-[90%] mx-auto grid grid-cols-12">
                <div className="aboutus-main xl:col-span-7 col-span-12">
                    <span className="flex justify-center text-[40px] font-semibold font-gruppo uppercase text-white/80 pt-20">About us</span>
                    <p className='items-center justify-center font-ubuntuL w-full mx-auto text-white/70 mt-[40px] xl:pr-[30px] text-[20px] xl:text-[30px] pl-[30px] xl:pl-[0] xl:border-r xl:border-white/70'>At Carcarelt, we believe in the transformative power of precision detailing. Established with a passion for enhancing the beauty and longevity of vehicles, we have become a trusted name in the world of car care. Our commitment goes beyond the surface – it's about delivering an unparalleled experience to every vehicle that graces our studio.</p>
                </div>
                <div className="aboutus-ourvalues xl:pl-[30px] xl:col-span-5 col-span-12 xl:pb-[50px]">
                    <span className="flex justify-center text-[40px] font-semibold font-gruppo uppercase text-white/80 pt-20 xl:pb-[30px]">Our Values</span>
                    {aboutUs.map((about, i) => (
                        <div key={i} ref={el => { refs.current[i] = el }} className='flex flex-row mt-3 items-center'>
                            <div>
                                {about.svg}
                            </div>
                            <div className="flex flex-col ml-[30px]">
                                <span className="text-white/70 text-[25px] font-ubuntuL">{about.span}</span>
                                <p className="text-white/40">{about.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default AboutUs;