import React, { lazy, Suspense } from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Find from './Find';
import Email from './Email';
import Call from './Call';
import Cookies from './Cookies';
const Map = lazy(() => import('./Map'));

function Footer() {
    return (
        <div className="footer-container" id="scrollToHomeContact">
            <div className="footer-main">
                <div className="footer-adress col-10 col-xl-6">
                    <Find />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Map />
                    </Suspense>
                </div>
                <div className="footer-email col-10 col-xl-5">
                    <Call />
                    <Email />
                </div>
            </div>
            <div className='footer-tag'>
                <span className='footer-tag-first'>Designed and developed by <a className='footer-tag-a' target='_blank' rel="noreferrer" href='https://julijus.com'>Julijus</a></span>
                <br />
                <span className='footer-tag-second'>© 2024 All rights reserved</span>
            </div>
            <Cookies />
        </div>
    )
}

export default Footer;