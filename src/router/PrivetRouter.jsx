import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { MyContaxt } from '../Contax/Contax';

const PrivetRouter = ({children}) => {
    const {user, loading } = useContext(MyContaxt);
    if(user){
      return   children
    }
    if(loading){
        return <div className='flex justify-center items-center h-[80vh]'><p>Loading Please Waiting..</p></div>
    }
    return(
        <Navigate to={'/login'}></Navigate>
    )
};
 
export default PrivetRouter ;