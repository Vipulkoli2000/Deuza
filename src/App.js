import { Routes, Route, BrowserRouter } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { getSession } from "./slices/sessionSlice";
import GlobalStyle from "./Globalstyles";
import Loader from "./components/HomeComponents/Loader/Quality";
 import HomePage from "./pages/HomePage/HomePage";
  import Container from './components/HomeComponents/Description/Container';
 import Coffeeinfo from './components/HomeComponents/Infosection/Coffeeinfo';
 import Pagetra from './components/HomeComponents/Loader/Pagetra';

 import Tst from './components/HomeComponents/test';
import News from './components/HomeComponents/Tripleimage/Latestnews'
 import gsap from "gsap";
 import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from './components/HomeComponents/Footer/svgcol'
import Shoppage from "./pages/HomePage/Shoppage";
import ProductDiscription from "./pages/HomePage/Productdescriptionpage";
import Navbar from './components/Navbar/Navbar'
import Routa from './Componentroutes'
function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
 
    dispatch(getSession());

  }, []);

   
  return (
    <BrowserRouter>
        <Routa/>
 
    </BrowserRouter>
  );
}

export default App;
