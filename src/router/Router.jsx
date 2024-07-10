import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../layout/Main";
import Login from "../Contax/Login/Login";
import Banner from "../pages/Banner/Banner";
import ServicesDetails from "../shared/Service/ServicesCard/ServicesDetails";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children :[
      {
        path:"/",
        element:<Banner/>
      },
      {
        path:"/login",
        element : <Login/>
      }
    ]
  },
  {
    path:'/servics/:id',
    element : <ServicesDetails/>,
    loader : ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
  }
]);

export default router;