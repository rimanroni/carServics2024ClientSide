import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Helmet } from 'react-helmet';
import About from '../../shared/about/About';
import Footer from '../../shared/Footer/Footer';

const Abouts = () => {
    return (
        <div>
            <Helmet>
                <title>About Us</title>
            </Helmet>
            <Navbar/>
            <div className='px-8'>
            <About/>
            </div>
            <Footer/>
        </div>
    );
};

export default Abouts;