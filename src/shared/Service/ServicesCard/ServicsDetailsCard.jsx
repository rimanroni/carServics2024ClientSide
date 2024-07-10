import React from 'react';

const ServicsDetailsCard = ({loadedData}) => {
    const {img , title ,description ,facility} = loadedData;
    console.log(facility)
    return (
        <div className='px-4 py-2' >
            <div>
            <img src={img} className='w-full h-[400px]' alt="" />
            <h1>{title}</h1>
            <p>{description}</p>
            </div>
            
            <div className='grid py-8 grid-cols-1 lg:grid-cols-2 gap-4 mt-4 '>
                {facility.map((item)=><div 
                 className='border-t bg-[#F3F3F3] border-0.5 px-4 py-3 space-y-2 rounded-lg border-primaryColor'
                key={item.name}>
                    <h1>{item.name}</h1>
                    <p>{item.details}</p>
                </div>)}
            </div>
        </div>
    );
};

export default ServicsDetailsCard;