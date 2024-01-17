import React from 'react';

import '../styles/Home.css'
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Price from '../components/Price/Price';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <div className='home-main'>
            <Header />
            <Services />
            <Price />
            <AboutUs />
            <Footer />
        </div>
    );
}

export default Home;