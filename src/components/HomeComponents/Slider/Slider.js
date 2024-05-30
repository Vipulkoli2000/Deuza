import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import cafe from "../../../assets/Images/bb201a3393c4dd27d8c758e2bf7c.jpg.webp";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import _debounce from "lodash/debounce";
import Imagecomps from './slidercomp'
import cafeca from '../../../assets/Images/cafeca.jpg'
import Thes from '../../../assets/Images/Thes.jpg'
import Gourma from '../../../assets/Images/Gourma.jpg'
import Accessori from '../../../assets/Images/Accessori.jpg'
import Cafeaw from '../../../assets/Images/bb201a3393c4dd27d8c758e2bf7c.jpg.webp'
import { useNavigate } from 'react-router-dom';

import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

 const Slider = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const arr = [cafeca,Thes,Gourma,Accessori ]
  const Imagediv = useRef();
  const Covera = useRef();
  const Container = useRef();
  CustomEase.create("Seperator", "M0,0 C0.05,0.19 0.33,0.87 1,1");
  //scroll trigger values
  const navigate = useNavigate();

  function getScrollAmount(){
 
    let imageoffwidth = Imagediv.current.scrollWidth;
 
    return -(imageoffwidth - window.innerWidth) * 0.5;
  }
 
  const Handleanimation = (event) => {
    if (!isAnimating) {
      setIsAnimating(true);
      const target = event.currentTarget;

      gsap.to(target, {
        scale: 0.95,
        duration: 0.1,
        ease: "Seperator",
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          setIsAnimating(false);
        },
      });
    }
  };

  // const animation = useCallback(() => {

  //   const Section = gsap.utils.toArray(Imagediv.current.children);
  //   const t1 = gsap.timeline({});
     
  //   t1.fromTo(
  //     [Imagediv.current, Imagediv.current.children],
  //     {
  //       x: 950,
  //        stagger: 0.1,
  //       duration: 2.5,
  //     },
  //     { x: 650, stagger: 0.1, duration: 2 }
  //   );
     
  //   gsap.to(Section, {
  //     xPercent: -150 * (Section.length - 1),
  //     ease: "none",
  //     duration: 6,
  //     scrollTrigger: {
  //       trigger: Imagediv.current,
  //       start: "top top",
  //       pin: Covera.current,
 
  //       scrub: 1.5,
  //       markers: true,
  //       end: `+=3000`,
  //      },
       
  //   });
  // }, []);

  useEffect(() => {
    console.log(getScrollAmount())

    let ctx = gsap.context(() => {
 
    const Section = gsap.utils.toArray(Imagediv.current.children);
    const t1 = gsap.timeline({});
     
    t1.fromTo(
      [Imagediv.current, Imagediv.current.children],
      {
        x: 950,
         stagger: 0.1,
        duration: 2.5,
      },
      { x: 650, stagger: 0.1, duration: 2 }
    );
     
    gsap.to(Section, {
      xPercent: getScrollAmount,
      ease: "none",
      duration: 6,
      scrollTrigger: {
        trigger: Imagediv.current,
        start: "top top",
        pin: Covera.current,
        pinSpacing: "auto", 
        scrub: 2,
         end: ()=> `+=${getScrollAmount()*-1}`,
        invalidateOnRefresh: true
       },
       
    });
    }, Covera.current);

    return () => ctx.revert();
  }, []);

  return (
    <Cover ref={Covera}>
      <div className="fif" ref={Container}>
        <Imagecontainer ref={Imagediv}>
         {arr.map(prod => (
                  <Imagecomps key={prod} prod={prod}/>

         ))}
        

        </Imagecontainer>
      </div>
    </Cover>
  );
};

export default Slider;

const Textabsolute = styled.div`
  position: absolute;
  top: 50%;
   transform: translate(-50%, -50%);
  color: white;
  font-size: 5rem;

`;
const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
    `;
const Imagecontainer = styled.div`
  height: 100vh;
  display: flex;
  gap: 7rem;
  
`;
const Imageelement = styled.div`
  margin-top: 5rem;
  width: 30rem;
  will-change: transform;
  img {
    width: 100%;
    object-fit: cover;
  }
 
`;
