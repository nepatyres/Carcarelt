import React, { useState, useEffect } from 'react';
import './Cookies.css';

const Cookies = () => {
    const [cookieConsent, setCookieConsent] = useState(() => {
        const storedConsent = localStorage.getItem('cookieConsent');
        return storedConsent === 'true';
    });

    const handleAccept = () => {
        setCookieConsent(true);
    };

    const handleDecline = () => {
        setCookieConsent(true);
    };

    useEffect(() => {
        localStorage.setItem('cookieConsent', cookieConsent);
    }, [cookieConsent]);

    if (cookieConsent) {
        return null;
    }

    return (
        <div className='cookies-con'>
            <div className='cookies-subcon'>
                <p className='cookies-p'>This website uses cookies to ensure you get the best experience on our website.</p>
                <div className='cookies-btn-main'>
                    <button className='cookies-btn' onClick={handleAccept}>
                        Accept
                    </button>
                    <button className='cookies-btn cookies-btn-second' onClick={handleDecline}>
                        Decline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
