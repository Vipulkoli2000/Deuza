import React, {useEffect, useRef} from "react";
import Productdetails from '../../components/productDescription/productdetails'
import ProductOptions from '../../components/productDescription/productOptions'
import Productorigin from '../../components/productDescription/Productorigin'
import Productgalary from '../../components/productDescription/productgalary'
import Svgc from '../../components/HomeComponents/Footer/svgcol'
import Footerlink from '../../components/HomeComponents/Footer/Footerlink'
import Topsection from '../../components/Navbar/Topsection'
import Navbar from '../../components/Navbar/Navbar'
import Lenis from '@studio-freight/lenis'

const Productdescriptionpage = () => {
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
    <>
<Navbar/>
<Topsection/>
<ProductOptions/>
<Productdetails/>
<Productorigin/>
<Productgalary/>
<Svgc/>
<Footerlink/>
     </>
  )
}

export default Productdescriptionpage