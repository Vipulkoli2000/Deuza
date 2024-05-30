import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Home from "../../components/HomeComponents/Home/Home";
import Slider from "../../components/HomeComponents/Slider/Slider";
import Infosection from "../../components/HomeComponents/Infosection/Coffeeinfo";
import Productsection from "../../components/HomeComponents/Infosection/Productsection";
import Trippleimage from '../../components/HomeComponents/Tripleimage/Latestnews'
import Footer from '../../components/HomeComponents/Footer/Svgtop'
import Footer2 from '../../components/HomeComponents/Footer/Footerlink'
import Navbar from '../../components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis'

const HomePage = () => {
  const Nava = useRef();
  useEffect(()=>{
    const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })
  return (
    <Cover className="Homepage">
      <Navbar Nava={Nava} />
      <Home  forwardedRef={Nava} />
      <Slider />
      <Infosection/>
      <Productsection/>
      <Trippleimage/>
      <Footer/>
      <Footer2/>

     </Cover>
  );
};

export default HomePage;

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e6e5e1;
  overflow: hidden;
`;
