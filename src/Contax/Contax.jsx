import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebaseConfing';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

export const MyContaxt = createContext(null)
const Contax = ({children}) => {
    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
//    create user 
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
// log in user
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user logout
    const logOut = () =>{
      return  signOut(auth)
    }
    const info = {user, loading , handleGoogle ,logOut , createUser , logInUser }
// user State Change
   useEffect(()=>{
    const myAuth = onAuthStateChanged(auth, currentUser=>{
         setUser(currentUser)
         setLoading(false)
   })

     return ()=>(
        myAuth()
     )
   },[])


    return (
        <MyContaxt.Provider value={info}>
            {children}
        </MyContaxt.Provider>
    );
};

export default Contax;