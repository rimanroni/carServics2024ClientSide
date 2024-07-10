import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import ServicsDetailsCard from './ServicsDetailsCard';

const ServicesDetails = () => {
    const loadedData = useLoaderData();
   
    return (
        <div className='pb-12'>
             <Helmet>
                 <title>Servics Details</title>
             </Helmet>
            <div className='px-8'>
                <Navbar/>
               <div className='px-8 space-y-8 pt-12 text-white' id='bannerDetails'>
                  <h1 className='text-4xl'>Service Details</h1> <br />
                  <br />
                  <br />
                  <br />
                  <br />
                   <div className='flex justify-center    font-bold '>
                  <button className='bg-primaryColor px-4 py-2 rounded mb-2'><Link to={'/'}>Home</Link> / Service Details</button>
                  </div>
               </div>
             
 
             </div>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8  px-8 lg:grid-cols-3'>
             <div className='col-span-2 border'>
                <ServicsDetailsCard loadedData={loadedData}/>
             </div>
             <div className='border'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, pariatur.
             </div>
             </div>

        </div>
    );
};

export default ServicesDetails;