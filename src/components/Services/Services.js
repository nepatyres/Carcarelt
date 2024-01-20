import React, { useEffect, useState } from 'react';
import './Services.css';

function Services() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 370) {
                setIsScrolled(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="services-main" id="scrollToHomeServices">
            <span className="services-span">Our services</span>
            <div className="services-container">
                <div className={`services-first-row col-6 ${isScrolled ? 'services-first-row-scroll' : ''}`}>
                    <div className="flip-box first-flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front flip-box-front-first">
                                <div className="flip-box-content">
                                    Interior Detailing
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <div className="flip-box-content">

                                    A meticulous cleaning and restoration process for a vehicle's inside surfaces, enhancing cleanliness and appearance.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box second-flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front flip-box-front-second">
                                <div className="flip-box-content">
                                    Car Polishing
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <div className="flip-box-content">
                                    A process of smoothing and restoring a vehicle's paint surface, removing imperfections like swirl marks and scratches.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`services-second-row col-6 ${isScrolled ? 'services-second-row-scroll' : ''}`}>
                    <div className="flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front flip-box-front-third">
                                <div className="flip-box-content">
                                    Paint Protection Film (PPF)
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <div className="flip-box-content">
                                    It is a clear, durable, self-healing film that is applied to the surface of a vehicle to protect the paint from rock chips, bug splatter, and other environmental contaminants.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flip-box fourth-flip-box">
                        <div className="flip-box-inner">
                            <div className="flip-box-front flip-box-front-fourth">
                                <div className="flip-box-content">
                                    Wheel Repair
                                </div>
                            </div>
                            <div className="flip-box-back">
                                <div className="flip-box-content">
                                    Car wheel repair involves fixing damages to a vehicle's wheels, such as scratches, dents, or curb rash.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;