import React, { useEffect, useState } from 'react';
import './AboutUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function AboutUs() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 2100) {
                setIsScrolled(true);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="aboutus-main-container" id="scrollToHomeAboutUs">
            <div className="aboutus-main-subcontainer">
                <div className="aboutus-main col-12 col-xl-7">
                    <span className="aboutus-span">About us</span>
                    <p className={`aboutus-p ${isScrolled ? 'aboutus-p-scrolled' : ''}`}>At Carcarelt, we believe in the transformative power of precision detailing. Established with a passion for enhancing the beauty and longevity of vehicles, we have become a trusted name in the world of car care. Our commitment goes beyond the surface – it's about delivering an unparalleled experience to every vehicle that graces our studio.</p>
                </div>
                <div className="aboutus-ourvalues col-10 col-xl-5">
                    <span className="aboutus-ourvalues-span">Our Values</span>
                    <div className={`aboutus-innovation-main ${isScrolled ? 'aboutus-innovation-main-scrolled' : ''}`}>
                        <div id="aboutus-innovation-svg-main">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="aboutus-innovation-svg">
                                <path d="M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z" />
                                <path d="M24 12a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5zm12.5 9.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM14 22a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5zm13.827-9.239a.497.497 0 0 0 .653-.271l.766-1.848a.5.5 0 1 0-.924-.382l-.766 1.848a.5.5 0 0 0 .271.653zm7.913 13.561-1.848-.766a.5.5 0 0 0-.382.924l1.848.766a.497.497 0 0 0 .653-.271.5.5 0 0 0-.271-.653zm-23.48-8.644 1.848.766a.497.497 0 0 0 .653-.271.5.5 0 0 0-.271-.653l-1.848-.766a.5.5 0 0 0-.382.924zm19.165-2.603a.502.502 0 0 0 .354-.146l1.414-1.414a.5.5 0 0 0-.707-.707l-1.414 1.414a.5.5 0 0 0 .353.853zM16.222 29.071l-1.414 1.414a.5.5 0 0 0 .708.707l1.414-1.414a.5.5 0 0 0-.708-.707zm15.556 0a.5.5 0 0 0-.707.707l1.414 1.414a.498.498 0 0 0 .708 0 .5.5 0 0 0 0-.707l-1.415-1.414zM16.222 14.929a.498.498 0 0 0 .708 0 .5.5 0 0 0 0-.707l-1.414-1.414a.5.5 0 0 0-.707.707l1.413 1.414zm17.017 3.244a.501.501 0 0 0 .653.271l1.848-.766a.5.5 0 0 0-.382-.924l-1.848.766a.499.499 0 0 0-.271.653zm-18.478 7.654a.502.502 0 0 0-.653-.271l-1.848.766a.5.5 0 0 0 .382.924l1.848-.766a.499.499 0 0 0 .271-.653zm4.759-13.336a.501.501 0 0 0 .653.271.5.5 0 0 0 .271-.653l-.766-1.848a.5.5 0 0 0-.924.382l.766 1.848zM24 13c-4.962 0-9 4.038-9 9a9.02 9.02 0 0 0 5 8.056V34.5a.5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 .5.5h.5v1.5a.5.5 0 0 0 1 0V37h2v1.5a.5.5 0 0 0 1 0V37h.5a.5.5 0 0 0 .5-.5V35h.5a.5.5 0 0 0 .5-.5v-4.444A9.02 9.02 0 0 0 33 22c0-4.962-4.038-9-9-9zm2 23h-4v-1h4v1zm-2.532-6.176-1.489-3.971c.008-.034.021-.066.021-.103a.75.75 0 0 1 1.5 0 .5.5 0 0 0 1 0 .75.75 0 0 1 1.5 0c0 .037.013.069.021.103l-1.489 3.971A.503.503 0 0 0 24.5 30v4h-1v-4c0-.06-.011-.12-.032-.176zm3.825-.54a.5.5 0 0 0-.293.456V34h-1.5v-3.909l1.468-3.915a.485.485 0 0 0 .006-.301c.012-.041.026-.081.026-.125 0-.965-.785-1.75-1.75-1.75-.49 0-.932.204-1.25.529A1.745 1.745 0 0 0 22.75 24c-.965 0-1.75.785-1.75 1.75 0 .044.014.084.025.125a.492.492 0 0 0 .006.301l1.468 3.915V34H21v-4.26a.502.502 0 0 0-.293-.456A8.015 8.015 0 0 1 16 22c0-4.411 3.589-8 8-8s8 3.589 8 8a8.015 8.015 0 0 1-4.707 7.284z" />
                            </svg>
                        </div>
                        <div className="aboutus-innovation-text">
                            <span className="aboutus-innovation-span">Innovation and Passion</span>
                            <p className="aboutus-innovation-p">Innovative techniques and a love for automotive excellence drive us to elevate your vehicle care.</p>
                        </div>
                    </div>
                    <div className={`aboutus-customer-main ${isScrolled ? 'aboutus-customer-main-scrolled' : ''}`}>
                        <div id="aboutus-innovation-svg-main">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="aboutus-customer-svg">
                                <path d="M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z" /><circle cx="15.691" cy="23.5" r=".5" transform="rotate(-45.001 15.691 23.5)" />
                                <path d="m39.026 18.55-3.889 3.89-5.656-5.657 2.828-2.828 1.06-1.06a.5.5 0 0 0-.707-.707l-4.243 4.242-.001.001-2.828 2.828a.5.5 0 0 0 0 .708l.707.707-.529.529-1.603-.234a.52.52 0 0 0-.426.142l-.624.624-1.061-1.06.354-.354a.5.5 0 0 0 0-.708l-2.828-2.828-.001-.001-4.243-4.242a.5.5 0 0 0-.707.707l1.06 1.06 2.828 2.828-5.656 5.657-3.889-3.889a.5.5 0 0 0-.707.707l1.06 1.06 6.01 6.01a.498.498 0 0 0 .708 0l.354-.354.768.768a1.503 1.503 0 0 0 .293 1.708l-.354.354a1.501 1.501 0 0 0 0 2.121c.266.266.617.415.991.433.019.357.151.709.423.981.274.274.63.407.989.425.017.359.151.715.425.989.267.267.617.416.991.433.019.357.151.709.423.981.292.293.677.438 1.061.438.384 0 .768-.146 1.061-.438l.354-.354c.283.283.66.439 1.061.439a1.49 1.49 0 0 0 1.061-.439c.274-.274.408-.63.425-.989.36-.017.716-.151.99-.425.271-.272.403-.625.422-.981.374-.017.725-.166.991-.433.274-.274.408-.63.425-.989a1.48 1.48 0 0 0 .989-.425 1.501 1.501 0 0 0 0-2.121l.354-.354c.461-.461.559-1.15.293-1.708l.768-.768.354.354a.498.498 0 0 0 .708 0l6.01-6.01.002-.003 1.059-1.059a.5.5 0 1 0-.708-.706zM13.57 23.501l5.657-5.657 2.122 2.122-.353.353-.001.001-4.95 4.949-.353.353-2.122-2.121zm4.097 6.717a.5.5 0 0 1 .146-.354l.354-.354.707.707-.354.354a.51.51 0 0 1-.707 0 .495.495 0 0 1-.146-.353zm1.414 1.414a.5.5 0 0 1 .146-.354l.354-.354.707.707-.354.354a.512.512 0 0 1-.707 0 .495.495 0 0 1-.146-.353zm1.56 1.061.354-.354.707.707-.354.354a.512.512 0 0 1-.707 0 .5.5 0 0 1 0-.707zm2.122 2.121a.5.5 0 0 1-.707-.707l.354-.354.707.707-.354.354zm6.717-4.596a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1 0 .707.51.51 0 0 1-.707 0l-1.415-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1-.708.707l-1.414-1.414a.5.5 0 0 0-.707.707l1.414 1.414a.5.5 0 0 1 0 .707.512.512 0 0 1-.707 0l-.353-.353-1.414-1.414-4.596-4.595a.502.502 0 0 1 0-.708.5.5 0 0 0 0-.708l-1.061-1.06 4.243-4.242 1.061 1.06-2.475 2.475a.5.5 0 0 0 0 .708l.19.19c.421.421.981.653 1.577.653a2.22 2.22 0 0 0 1.578-.653l1.251-1.251 4.596 4.597.353.353a.498.498 0 0 1 .001.706zm.353-3.889a.5.5 0 0 0 0 .708.502.502 0 0 1 0 .708l-.353.353-4.248-4.249a.495.495 0 0 0-.729-.674l-1.931 1.931a1.259 1.259 0 0 1-1.563.147l3.26-3.259 1.602.234a.502.502 0 0 0 .426-.142l.707-.707 3.889 3.889-1.06 1.061zm2.476-1.061-.353-.353-4.95-4.949-.001-.001-.353-.353 2.122-2.122 5.657 5.657-2.122 2.121z" /><circle cx="32.32" cy="23.136" r=".5" transform="rotate(-45.001 32.32 23.136)" />
                            </svg>
                        </div>
                        <div className="aboutus-customer-text">
                            <span className="aboutus-customer-span">Customer-Centric Care</span>
                            <p className="aboutus-customer-p">Personalized solutions, transparent service, and exceeding expectations are our commitment to you.</p>
                        </div>
                    </div>
                    <div className={`aboutus-precision-main ${isScrolled ? 'aboutus-precision-main-scrolled' : ''}`}>
                        <div id="aboutus-innovation-svg-main">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="aboutus-precision-svg">
                                <path d="M24 0C10.767 0 0 10.767 0 24s10.767 24 24 24 24-10.767 24-24S37.233 0 24 0zm0 47C11.318 47 1 36.682 1 24S11.318 1 24 1s23 10.318 23 23-10.318 23-23 23z" />
                                <path d="M39.5 12h-31a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5h31a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5zM39 35H9V13h30v22z" />
                                <path d="M10.5 32c.827 0 1.5.673 1.5 1.5a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5c0-.827.673-1.5 1.5-1.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5c-.827 0-1.5-.673-1.5-1.5a.5.5 0 0 0-.5-.5h-23a.5.5 0 0 0-.5.5c0 .827-.673 1.5-1.5 1.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5zm.5-15.05A2.508 2.508 0 0 0 12.95 15h22.1c.2.978.972 1.75 1.95 1.95v14.1c-.979.2-1.75.972-1.95 1.95h-22.1A2.509 2.509 0 0 0 11 31.05v-14.1z" />
                                <path d="M19 21h10a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H19a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5zm.5-3h9v2h-9v-2zM17 24h14a.5.5 0 0 0 0-1H17a.5.5 0 0 0 0 1zm-3.5 2h21a.5.5 0 0 0 0-1h-21a.5.5 0 0 0 0 1zm0 2h21a.5.5 0 0 0 0-1h-21a.5.5 0 0 0 0 1zm0 4h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0 0 1zm20-2c-.386 0-.734.15-1 .39a1.487 1.487 0 0 0-1-.39c-.34 0-.651.118-.902.31A1.992 1.992 0 0 0 29 29.5c-1.103 0-2 .897-2 2a.5.5 0 0 0 1 0 1 1 0 0 1 2 0 .5.5 0 0 0 1 0c0-.275.225-.5.5-.5s.5.225.5.5a.5.5 0 0 0 1 0c0-.275.225-.5.5-.5s.5.225.5.5a.5.5 0 0 0 1 0c0-.827-.673-1.5-1.5-1.5z" />
                            </svg>
                        </div>
                        <div className="aboutus-precision-text">
                            <span className="aboutus-precision-span">Precision Driven</span>
                            <p className="aboutus-precision-p">Meticulous craftsmanship for automotive excellence. Your satisfaction is our success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;