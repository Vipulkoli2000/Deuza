import React, {useEffect, useRef} from "react";
import Shop from '../../components/Productshowcase/ProductShop'
import Topsection from '../../components/Navbar/Topsectionshop'
import Bootque from '../../components/Navbar/Bootque'
import Footerlink from '../../components/HomeComponents/Footer/Footerlink'
import Footer from '../../components/HomeComponents/Footer/svgcol'
import Navbar from '../../components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis'

const Shoppage = () => {
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
    < >
    <Navbar/>
    <Topsection/>
    <Bootque/>
    <Shop/>
    <Footer/>
    <Footerlink/>
    </>
  )
}

export default Shoppage