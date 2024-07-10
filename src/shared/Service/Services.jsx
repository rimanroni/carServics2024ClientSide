import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
  console.log(data)
  
    return (
        <div className='my-12'>
            <div className='text-center space-y-3'>
                <h1 className="font-bold text-primaryColor">Service</h1>
                 <h1 className='text-4xl font-bold'>Our Service Area</h1>
                <p className='capitalize text-textColor'>the majority have suffered alteration in some form, by injected humour, or randomised  <br />words which don't look even slightly believable. </p>
            </div>
           <div className='grid px-4 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item)=><ServicesCard item={item} key={item._id}/>)}
           </div>
           <div className='mt-8   w-full text-center '>
                    <button className=' font-bold text-primaryColor border-primaryColor border px-4 py-2 rounded'>More Services</button>
                    </div>
        </div>
     );
};

export default Services;