import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../shared/Navbar/Navbar';
import Services from '../../shared/Service/Services';
import Footer from '../../shared/Footer/Footer';

const ServicsRouter = () => {
    return (
        <div>
            <Helmet>
                <title>Servics</title>
            </Helmet>
            <Navbar/>
            <div className='px-8'>
                <Services/>
            </div>
            <Footer/>
        </div>
    );
};

export default ServicsRouter;