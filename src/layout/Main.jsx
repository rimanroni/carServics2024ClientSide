
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import About from '../shared/about/About';
import ShortDetails from '../pages/shortDetils/ShortDetails';
import Services from '../shared/Service/Services';
import Products from '../pages/products/Products';
import Term from '../pages/term/Term';
import ChooseUs from '../pages/choose us/ChooseUs';
import Testimonial from '../pages/testimonial/Testimonial';
import { Helmet } from 'react-helmet';

const Main = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Car Servics</title>
             </Helmet>
            <div className=''>
                <Navbar/>
               <div className='px-8'>
               <Outlet/>
               <About/>
               <Services/>
               <ShortDetails/>
               <Products/>
               <Term/>
               <ChooseUs/>
               <Testimonial/>
               </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;