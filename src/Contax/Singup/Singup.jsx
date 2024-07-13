import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { MdPassword } from 'react-icons/md';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, Navigate, } from 'react-router-dom';
import SocialAuth from '../SocialAuth';
import { MyContaxt } from '../Contax';
import Swal from 'sweetalert2';

const Singup = () => {
  const {createUser, user} = useContext(MyContaxt);
  
    const [type, setType] = useState(false);
    const handleType = () =>{
        setType(!type)
    }
   
    const handleForm = (event) =>{
      event.preventDefault()
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      createUser(email, password)
      .then(result=>
        
        form.reset(),
        Swal.fire({
          title: "Sing Up Success!",
           icon: "success"
        })
        
      )
      .catch(error=>console.log(error))

    }
    return (
        <div>
            <Helmet>
                <title>Car Servics || Sing Up</title>
            </Helmet>
            <Navbar/>
            <div className='px-8'>
             <div className='mt-4 grid grid-cols-1
             lg:grid-cols-2 gap-6
             rounded-lg'>
               <div>
                <img src="/assets/images/login/login.svg" alt="login" className='w-1/2 lg:w-[65%] mx-auto' />
               </div>
               <div className='flex justify-center '>
                <form onSubmit={handleForm} className='border flex justify-center py-4 px-3 w-[80%]'>
                 <div className='space-y-4 w-full px-8'>
                 <h1 className='text-center text-2xl font-bold'>Sing Up</h1>
                    <p className='font-bold'>Name</p>
                    <input required  type="text" placeholder='Your Name' name='name' className='w-full border outline-none px-3 py-2 rounded' />
                    <p className='font-bold'>Email</p>
                    <input required type="text" placeholder='Your email' name='email' className='w-full border outline-none px-3 py-2 rounded' />
                    <p className='font-bold'> Password</p>
                   <div className='flex items-center relative'>
                   <input required type={`${type?'text':'password'}`}placeholder='Password' name='password' className='w-full border outline-none px-3 py-2 rounded'
                     />
                     <span onClick={handleType} className='inline-bolck absolute -right-0  mr-1'><MdPassword/></span>
                   </div>
                    <button className='w-full rounded font-bold text-white bg-primaryColor py-2'> Sing Up</button>
                    <p className='text-center'>Or Sign Up with</p>

                   <div className='text-center'>
                    <SocialAuth/>
                    <p> Have an account? <Link
                    className='text-primaryColor font-bold'
                    to={'/login'}>Log In</Link></p>
                   </div>
                 </div>
                </form>
               </div>
             </div>
            </div>
        </div>
    );
};

export default Singup;