import * as React from "react";
import {
  createBrowserRouter
} from "react-router-dom";

import Main from "../layout/Main";
import Login from "../Contax/Login/Login";
import Banner from "../pages/Banner/Banner";
import ServicesDetails from "../shared/Service/ServicesCard/ServicesDetails";
import Singup from "../Contax/Singup/Singup";
import Abouts from "../pages/About/Abouts";
import ServicsRouter from "../pages/Servics/ServicsRouter";
import Error from "../pages/Error/Error";
import CheckOut from "../shared/CheckOut/CheckOut";
import PrivetRouter from "./PrivetRouter";
import MyOrder from "../pages/Order/MyOrder";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children :[
      {
        path:"/",
        element:<Banner/>
      },
     ],
     errorElement: <Error/>
  },
  {
    path:'/servics/:id',
    element : <ServicesDetails/>,
    loader : ({params}) => fetch(`https://car-servics2024-server-side.vercel.app/services/${params.id}`)
  },
  {
    path:"/login",
    element : <Login/>
  },
  {
    path:"/singup",
    element:<Singup/>
  },
  {
    path:"/about",
    element:<Abouts/>
  },
  {
    path:'/services',
    element:<ServicsRouter/>
  },
  {
    path:'/checkout/:id',
    element: <PrivetRouter>
        <CheckOut/>
    </PrivetRouter>,
    loader : ({params}) => fetch(`https://car-servics2024-server-side.vercel.app/services/${params.id}`)
   },
   {
    path:'/orders',
    element:<MyOrder/>
   },
   {
    path:'/blog',
    element:<Blog/>
   },
   {
    path:"/contact",
    element:<Contact/>
   }
]);

export default router;