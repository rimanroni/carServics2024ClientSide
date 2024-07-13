import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { MyContaxt } from '../../Contax/Contax';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const data = useLoaderData();
    const {user} = useContext(MyContaxt);
    const handleForm  = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const message = form.message.value;
        const order = {name, email, date , phone, message};
        fetch('http://localhost:5000/order',{
            method:"POST",
            headers:{
                'content-type' :"application/json"
            },body : JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                form.reset(),
                Swal.fire({
                  title: "Order Success!",
                   icon: "success"
                })
            };
        
        })
    }
     return (
        <div>
            <Helmet>
                <title>Checkout Confrim</title>
            </Helmet>
            <Navbar/>
            <div className="px-8 ">
            <div id='bannerDetails' className='px-4 relative'>
                <h1 className='text-2xl font-bold lg:text-4xl text-white relative top-[100px]'>Check Out</h1>
                <div className='absolute bottom-0 left-[580px]  '>
                    <button className='bg-primaryColor font-bold py-2 px-4 rounded text-white'><Link to={'/'}>Home</Link> / Checkout</button>
                    </div>
            </div>
            </div>
            <div className='flex mt-10 justify-center px-8'>
                <div className='bg-[#F3F3F3] w-full p-4'>
                  <form onSubmit={handleForm }  className='w-full space-y-3'>
                   <div className='w-full lg:flex  lg:space-y-0  space-y-2  gap-4'>
                    <input type="text" required placeholder='Your Name' name='name' className='w-full px-4 py-2 outline-none rounded'  />
                    <input type="date"  required className='w-full px-4 py-2 outline-none rounded'  name='date'  />
                   </div>
                   <div className='lg:flex   lg:space-y-0  space-y-2 gap-4'>
                    <input required type="text" placeholder='Your Phone' name='phone' className='w-full px-4 py-2 outline-none rounded'/>
                    <input type="text" defaultValue={user?.email} disabled  name='email' className='w-full px-4 py-2 bg-white    outline-none rounded'/>
                   </div>
                   <div>
                    <textarea required placeholder='Your Message' className='w-full px-4 py-2 outline-none rounded resize h-[100px]' name='message' ></textarea><br />
                    <button className='w-full bg-primaryColor py-2 text-white font-bold rounded mt-2'>Order Confirm</button>
                   </div>
                  </form>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;