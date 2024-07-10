import React from 'react';
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Term = () => {
    return (
        <div className='my-12'>
            <div className='text-center space-y-3'>
               <h2 className='font-bold text-primaryColor'>Team</h2>
               <h1 className='text-4xl font-bold'>Meet Our Team</h1>
               <p className='capitalize text-textColor'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="carousel mt-4 w-full">
                <div id="slide1" className="carousel-item relative w-full">
                      <div className='grid px-4 grid-cols-1 gap-x-4 lg:grid-cols-3'>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/1.jpg" alt="" />
                            
                           <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/2.jpg" alt="" />
                            <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                        <img src="/assets/images/team/3.jpg" alt=""  />
                        <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                      </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn hover:bg-primaryColor hover:text-white hover:border-0 btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle hover:bg-primaryColor hover:text-white hover:border-0 ">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className='grid px-4 grid-cols-1 gap-x-4 lg:grid-cols-3'>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/2.jpg" alt="" />
                            
                           <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/1.jpg" alt="" />
                            <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                        <img src="/assets/images/team/3.jpg" alt=""  />
                        <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                      </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className='grid px-4 grid-cols-1 gap-x-4 lg:grid-cols-3'>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/3.jpg" alt="" />
                            
                           <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                            <img src="/assets/images/team/2.jpg" alt="" />
                            <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className='shadow-xl space-y-2 border rounded px-4 py-4'>
                        <img src="/assets/images/team/1.jpg" alt=""  />
                        <h1 className='text-center font-bold text-xl'>Car Engine Plug</h1>
                           <p className='text-center font-bold text-textColor'>Engine Expert</p>
                           
                            <div className='text-center text-white space-x-2'>
                         <button className='bg-[#395185] p-2 rounded-full'><FaFacebookF/></button>
                         <button className='bg-[#55ACEE] p-2 rounded-full'><FaTwitter /></button>
                         <button className='bg-[#0A66C2] p-2 rounded-full'><FaLinkedinIn /></button>
                         <button className='bg-[#ED4366] p-2 rounded-full'><FaInstagram /></button>
                            </div>
                        </div>
                        </div>
                      </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Term;