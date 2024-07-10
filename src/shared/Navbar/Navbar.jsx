import React, { useContext, useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { MyContaxt } from '../../Contax/Contax';

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
     const {user} = useContext(MyContaxt)
     console.log(user)
    return (
        <div className=' '>
            <div className='px-8 flex py-2 mt-2 justify-between items-center'>
                <div>
                   <NavLink to={'/'}> <img src="/logo.svg" className='lg:w-10/12' alt="" /></NavLink>
                </div>
                <div className={`hidden lg:block`}>
                    <ul className='flex relative space-x-4 text-[18px] font-semibold '>
                        {navItems.map((item)=><li
                        className='relative overflow-hidden group '
                        key={item.title}>
                         <NavLink to={item.link}>{item.title}</NavLink>
                         <span className='bg-red-400 absolute w-full group-hover:translate-x-0 -left-20 top-6 h-2 duration-500 group-hover:left-0  inline-block'></span>
                        </li>)}
                    </ul>
                </div>
                <div className='relative'>
                   {user?<div>
                    <button onClick={handleProfile } className='text-4xl'>
                    <FaRegUserCircle />
                    </button>
                    <div className={` ${profile?'block' : 'hidden'} absolute bg-white shadow-lg px-8 right-4 duration-500 translate-x-0 w-[200px]`}>
                        <h1>my orders</h1>
                        <h1>logout</h1>
                    </div>
                   </div>:<button className='bg-primaryColor px-4 py-3 rounded-lg text-white font-semibold'>
                          <NavLink to={'/login'}>Log In</NavLink>
                    </button>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;