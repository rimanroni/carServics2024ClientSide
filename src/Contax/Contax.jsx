import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfing';
import { onAuthStateChanged } from 'firebase/auth';
export const MyContaxt = createContext(null)
const Contax = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
     const unscrib =    onAuthStateChanged(auth, users=>{
            setUser(users)
            setLoading(false)
        });
        return(
            unscrib()
        )
    },[])

    const info = {user, loading}
    return (
        <MyContaxt.Provider value={info}>
            {children}
        </MyContaxt.Provider>
    );
};

export default Contax;