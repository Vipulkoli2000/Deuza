import React,{useEffect} from 'react'
import Shoppage from "./pages/HomePage/Shoppage";
import HomePage from "./pages/HomePage/HomePage";
import ProductDiscription from "./pages/HomePage/Productdescriptionpage";
import { Routes, Route, BrowserRouter,useLocation  } from "react-router-dom";
import Loader from "./components/HomeComponents/Loader/Quality";

const Componentroutes = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);
  return (
    <>
     <Routes>
    <Route exact path="/" element={<Loader />} />
    <Route exact path="/home" element={<HomePage />} />
    <Route exact path="/productde" element={<ProductDiscription />} />
    <Route exact path="/shop" element={<Shoppage />} />
   </Routes>
   </>
  )
}

export default Componentroutes