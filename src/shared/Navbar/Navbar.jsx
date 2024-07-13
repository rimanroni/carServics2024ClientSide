import React, { useContext, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { MyContaxt } from '../../Contax/Contax';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';
const Navbar = () => {
    const navItems = [
        {title:'Home',link:"/"},
        {title:'About',link:"/about"},
        {title:'Services',link:"/services"},
        {title:'Blog ',link:"/blog "},
        {title:'Contact',link:"/contact"}
     ];
     const [profile , setProfile] = useState(false);
     const handleProfile = () =>{
        setProfile(!profile)
     }
     const {user ,logOut} = useContext(MyContaxt)
     const handelLogOut = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
             showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
          }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(result=>{
                     
                })
                .catch(error=>{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                       });
                })
              Swal.fire({
                title: "Log Out Success!",
                 icon: "success"
              });
            }
          });
      

     }
     const handeleX = () =>{
        setProfile(false)
     }
    return (
        <div className=' '>
             <div className='lg:px-8 px-4 flex py-2 mt-2 justify-between items-center'>
                <div>
                   <NavLink to={'/'}> <img src="/logo.svg" className='lg:w-10/12 w-1/2' alt="" /></NavLink>
                </div>
                <div className={`  lg:block`}>
                    <ul className='flex relative text-[13px] lg:space-x-4 space-x-5 px-4  lg:text-[18px] lg:mr-0 mr-4 font-semibold '>
                        {navItems.map((item)=><li
                        className='relative overflow-hidden group '
                        key={item.title}>
                         <NavLink to={item.link}>{item.title}</NavLink>
                         <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-20 top-6 h-2 duration-500 group-hover:left-0  inline-block'></span>
                        </li>)}
                    </ul>
                </div>
                <div className='relative'>
                   {user?<div className='z-50 relative'>
                    <button onClick={handleProfile } className='text-4xl'>
                    <FaRegUserCircle />
                    </button>
                    <div className={` ${profile?'block' : 'hidden'} absolute    bg-white shadow-lg px-8 right-12  duration-500 translate-x-0 py-2 w-[200px]`}>
                        <p onClick={handeleX } className='absolute -right-2 -top-1 cursor-pointer rounded-full font-bold text-white  w-[20px] h-[20px] flex justify-center items-center bg-primaryColor'><span>x</span></p>
                       <div className='space-y-3 w-full '>
                      <Link to={'/orders'}> <h1 className='hover:bg-primaryColor  hover:text-white px-4'>My Orders</h1></Link>
                       <button className='hover:bg-primaryColor  hover:text-white px-4 w-full text-left' onClick={handelLogOut}>Log Out</button>
                       </div>
                    </div>
                   </div>:<button className='bg-primaryColor lg:px-4 mr-4 py-1 lg:mr-0  w-[120px] lg:py-3 rounded-lg text-white  text-[12px]lg:font-semibold'>
                          <NavLink to={'/login'}>Log In</NavLink>
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;