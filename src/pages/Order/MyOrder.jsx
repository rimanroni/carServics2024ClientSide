import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { MyContaxt } from '../../Contax/Contax';
import Footer from '../../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const MyOrder = () => {
    const {user , loading} = useContext(MyContaxt);
    const [data, setData] = useState([])
    useEffect(()=>{
         fetch(`http://localhost:5000/order?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[user]);
    if(loading){
        return <div className='h-[60vh] flex justify-center items-center'><p>Loading Data Please Waiting...</p></div>
    }
    const handleDelet = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "Your Order Delete!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/order/${id}`,{
                    method:"DELETE"
                    
                })
                .then(res=>res.json())
                .then(datas=>{
                      const updateData = data.filter(item=>item._id !==id);
                     setData(updateData)
                });
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });

       
    }
    return (
        <div>
            <Helmet>
                <title>My Orders</title>
            </Helmet>
            <Navbar/>
            {data.length==0? <div className='h-[60vh] flex justify-center items-center'><p>No Order Here...</p></div> : <div className='mt-4 py-5 px-4 space-y-2'>
                {data.map((item)=>(
                    <div key={item._id} className='flex items-center justify-between border  px-4'>
                        <div className='h-[200px]  flex justify-center items-center space-x-4 px-4'>
                        <button onClick={()=>handleDelet(item._id)} className='bg-primaryColor px-2  text-white font-bold rounded-full'>
                            <h1 className=' '>X</h1>
                            </button>
                            <img src={item.img} alt="" className='w-[200px]'/>
                            <div className='space-y-2'>
                                <h1 className='font-bold '>{item.title}</h1>
                                <p> User : {item.name}</p>
                            </div>
                        </div>
                        <div className='space-y-2 px-5'>
                          <h1 className='font-bold '>$ {item.price}</h1>
                          <h1> Servics date {item.date}</h1>
                        </div>
                        <div>
                            <button className='bg-primaryColor px-3 py-1 text-white font-bold'>Pending</button>
                        </div>
                    </div>
                ))}
             </div>}
            
            <Footer/>
        </div>
    );
};

export default MyOrder;