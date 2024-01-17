import React, { useEffect } from 'react';
import axios from 'axios';

import '../styles/Home.css'
import Header from '../components/Header/Header';
import Services from '../components/Services/Services';
import Price from '../components/Price/Price';
import AboutUs from '../components/AboutUs/AboutUs';
import Footer from '../components/Footer/Footer';

function Home() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://github.io/Carcarelt/manifest.json', {
                    headers: {
                        'Access-Control-Allow-Origin': 'https://nepatyres.github.io',
                    },
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
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