import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import Left from "../../../assets/Images/leftside.webp";
import right from "../../../assets/Images/rightside.webp";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import Video from "./Coffee.mp4";
import SplitType from "split-type";
import Font from '../../../assets/Fonts/Fontspring-DEMO-hernandezbros-regular.otf'
  
gsap.registerPlugin(CustomEase);
CustomEase.create("Seperator", "M0,0 C0.05,0.19 0.33,0.87 1,1");
CustomEase.create("Bean", "M0,0 C0.36,0.26 0.39,0.97 1,1   ");
CustomEase.create("textanm", "M0,0 C0.33,-0.01 0.38,0.95 1,1    ");
CustomEase.create("vida", "M0,0 C0.43,0 0.4,0.95 1,1     ");
const Home = ({forwardedRef}) => {
  const [screenSize, setScreenSize] = useState('large');
  const [left, Setleft] = useState(350);
  const [lefty, Setlefty] = useState(100);

  const [rightsvg, SetRight] = useState(380);
  const [leafsvg, Setleafsvg] = useState(250);
  const [leafsvgy, Setleafsvgy] = useState(100);

  const Covera = useRef(null);
  const videoRef = useRef(null);
  const textmain = useRef(null);
  const firsta = useRef(null);
  const firsta1 = useRef(null);
  const firsta2 = useRef(null);
  const grad = useRef(null);

  const wrapper = useRef(null);
  const Lefta = useRef(null);
  const Righta = useRef(null);
  const Svg = useRef(null);
  const Overlaya = useRef(null);

  const playa = () => {
    videoRef.current.children[0].play();
  };
 
  useEffect(() => {
    if(videoRef.current){
      videoRef.current.children[0].load()
    }
    gsap.set(forwardedRef.current,{translateY: -500})
    // Define a function to update the state based on screen size
    const updateScreenSize = () => {
      console.log("Window width:", window.innerWidth);  // Log the width

    if (window.innerWidth < 1024) {
        Setleafsvg(141)
        Setleafsvgy(50)

        console.log(screenSize)
    }  
    if (window.innerWidth <  769) {
      Setleft(210);
      SetRight(220)
      Setleafsvg(97)
      Setleafsvgy(50)
      } 
    if(window.innerWidth < 426) {
      Setleft(115);
      SetRight(115)
      Setlefty(50)
      Setleafsvg(54)

     }
    };

    // Call the function initially to set the state
    updateScreenSize();

    // Set up an event listener for window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up the event listener when the component is unmounted
    return () => {
        window.removeEventListener('resize', updateScreenSize);
    };
}, []);
console.log(screenSize)

 
  useEffect(() => {
    
    
    let ctx = gsap.context(() => {
      gsap.set(textmain.current.children[0].children[1], { translateY: 222, display: "none", autoAlpha: 0 });
      gsap.set(textmain.current.children[1].children[1], { translateY: 222, display: "none", autoAlpha: 0 });
      gsap.set(textmain.current.children[2].children[1], { translateY: 222, display: "none", autoAlpha: 0 });
  
      const Text = new SplitType(textmain.current.children[0].children[0], { types: "lines" });
      const Text1 = new SplitType(textmain.current.children[1].children[0], { types: "lines" });
      const Text2 = new SplitType(textmain.current.children[2].children[0], { types: "lines" });
    
     
  
      var tl = gsap.timeline({paused:false });
      tl.set(document.body, {overflow: "hidden"})
  
      // tl.to([Lefta.current], { translateX: -5, rotate: 4, duration: 0.1, ease: "Seperator" }, "+2");
      tl.to([Lefta.current], { translateX: -5, rotate: 4, duration: 0.1, ease: "Seperator" }, "+2");
      tl.to([Righta.current], { translateX: 15, rotate: -4, duration: 0.1, ease: "Seperator" }, "+2");
  
      tl.to([Lefta.current], { translateX: -left, translateY: -lefty, rotate: 20, duration: 1, ease: "Bean" }, "+2.2");
      tl.to([Righta.current], { translateX: rightsvg, translateY: -lefty, rotate: -20, duration: 1, ease: "Bean" }, "+2.2");
      tl.to([Svg.current], { fill: "white", translateX: leafsvg, translateY: -leafsvgy, duration: 1 }, "-=1.1");
      // gsap.to('#Tracé_1224',{translateY:'-=8', repeat:-1,yoyo:true, duration:1 })
      tl.to([Lefta.current], { translateX: -1150, translateY: -300, rotate: 250, duration: 1.5, ease: "Bean" });
      tl.to([Righta.current], { translateX: 1150, translateY: -300, rotate: -250, duration: 1.5, ease: "Bean" }, "-=1.5");
      
      tl.to(
        [Covera.current.children[0]],
        {
          translateY: "-90rem",
          duration: 5,
          ease: "vida",
  
          absolute: true,
          oncomplete: () => {
            const display = () => {
              Covera.current.children[0].style.display = "none";
            };
            setTimeout(display, 1300);
          },
        },
        "-=1.5"
      );
      tl.to(
        [Covera.current.children[3]],
        {
          translateY: "20rem",
          duration: 1,
          absolute: true,
          oncomplete: () => {
            const display = () => {
              Covera.current.children[3].style.display = "none";
            };
            setTimeout(display, 1300);
          },
        },
        "-=5"
      );
  
  
      //1
      tl.to(Text.lines, { ease: "textanm".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");
  
      tl.to(
        textmain.current.children[0].children[1],
        {
          onStart: () => {
            setTimeout(() => {
              firsta.current.style.display = "none";
            }, 500);
          },
          display: "block",
          translateY: 0,
          duration: 2,
          absolute: true,
          autoAlpha: 1,
          ease: "textanm",
        },
        "--=4.8"
      );
  
      //2
      tl.to(Text1.lines, { ease: "textanm".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");
  
      tl.to(
        textmain.current.children[1].children[1],
        {
          onStart: () => {
            setTimeout(() => {
              firsta1.current.style.display = "none";
            }, 500);
          },
          display: "block",
          translateY: 0,
          duration: 2,
          absolute: true,
          autoAlpha: 1,
          ease: "textanm",
        },
        "--=4.8"
      );
  
      //3
      tl.to(Text2.lines, { ease: "textanm".easeout, autoAlpha: 0.1, translateY: -222, duration: 2, absolute: true }, "--=5");
  
      tl.to(
        textmain.current.children[2].children[1],
        {
          onStart: () => {
            setTimeout(() => {
              firsta2.current.style.display = "none";
            }, 500);
          },
          display: "block",
          translateY: 0,
          duration: 2,
          absolute: true,
          autoAlpha: 1,
          ease: "textanm",
        },
        "--=4.8"
      );
  
      tl.fromTo(
        [Overlaya.current],
        { width: "100%", height: "0vh", clipPath: "polygon(0% 54%, 100% 53%, 100% 53%, 0% 54%)" },
        {
          height: "100%",
          width: "100%",
          duration: .9,
          ease: "vida",
          onStart: () => {
            setTimeout(() => {
              playa();
            }, 200);
          },
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        },
        "-=4"
      );
      if(forwardedRef.current){
        tl.to(forwardedRef.current, {translateY: 0,ease: "Bean"}, ">")

      }
      tl.set(document.body, {overflow: "visible"})
      
  
    }, Covera.current);

    return () => ctx.revert();
   }, [left]);

  return (
    <Cover ref={Covera}>
      <Toppart>
        <h5>SAINT JEAN DE LUZ</h5>
      </Toppart>
      <Overlaydiv ref={Overlaya}>
        <Videodiv ref={videoRef}>
          <video src={Video} muted="muted" autoPlay={false}></video>
        </Videodiv>
      </Overlaydiv>
      <Wrappermid ref={wrapper}>
        <Midtext ref={textmain}>
          <Overlay>
            <h1 ref={firsta}>LA</h1> <h1>Shapping The</h1>
          </Overlay>
          <Overlay1>
            <Maison ref={firsta1}>MAISON</Maison> <Maison>Coffee</Maison>{" "}
          </Overlay1>
          <Overlay2>
            <h1 ref={firsta2}>DEUZA</h1>
            <h1>Culture</h1>
          </Overlay2>
        </Midtext>
        <MainSvgdiv>
          <Leftsvg ref={Lefta}>
            <img src={Left} alt="" />
          </Leftsvg>
          <Rightsvg ref={Righta}>
            <img src={right} alt="" />
          </Rightsvg>
        </MainSvgdiv>
        <Paginationdiv ref={Svg}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 92.788 76.161" width="153" height="215">
            <g data-name="Groupe 803" transform="translate(14490.762 5556.163)">
              <path
                id="Tracé_1224"
                data-name="Tracé 1224"
                d="M1430.246,242.019l-.012.043-.013-.012c0,.006-.086.16-.086.16a.676.676,0,0,1-1.108-.751,9.546,9.546,0,0,0,.689-3.689,24.887,24.887,0,0,0-2.728-11.27,15.244,15.244,0,0,1,2.026-16.085l.013-.043.006.012c.006-.006.092-.16.092-.16a.672.672,0,0,1,.462-.228h.068a.7.7,0,0,1,.56.333.671.671,0,0,1,.019.646,9.352,9.352,0,0,0-.69,3.689,24.905,24.905,0,0,0,2.728,11.27,15.244,15.244,0,0,1-2.026,16.085"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1225"
                data-name="Tracé 1225"
                d="M1476.026,247.728v.068a.68.68,0,0,1-.333.56.671.671,0,0,1-.646.019,9.345,9.345,0,0,0-3.689-.69,24.9,24.9,0,0,0-11.269,2.728A15.246,15.246,0,0,1,1444,248.387l-.043-.012.013-.013c-.007,0-.161-.086-.161-.086a.676.676,0,0,1,.752-1.108,9.415,9.415,0,0,0,3.7.689,24.938,24.938,0,0,0,11.263-2.722,15.235,15.235,0,0,1,16.085,2.02l.043.013-.012.012c.006,0,.16.086.16.086a.664.664,0,0,1,.228.462"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1226"
                data-name="Tracé 1226"
                d="M1415.675,247.728v.068a.68.68,0,0,1-.333.56.671.671,0,0,1-.646.019,9.345,9.345,0,0,0-3.689-.69,24.9,24.9,0,0,0-11.269,2.728,15.247,15.247,0,0,1-16.086-2.026l-.043-.012.013-.013c-.007,0-.161-.086-.161-.086a.676.676,0,0,1,.752-1.108,9.414,9.414,0,0,0,3.695.689,24.938,24.938,0,0,0,11.263-2.722,15.234,15.234,0,0,1,16.085,2.02l.043.013-.012.012c.006,0,.16.086.16.086a.665.665,0,0,1,.228.462"
                transform="translate(-15874 -5766.159)"
              ></path>
              <path
                id="Tracé_1227"
                data-name="Tracé 1227"
                d="M1430.246,285.742l-.012.044-.013-.013c0,.006-.086.16-.086.16a.676.676,0,0,1-1.108-.751,9.539,9.539,0,0,0,.689-3.689,24.884,24.884,0,0,0-2.728-11.269,15.246,15.246,0,0,1,2.026-16.086l.013-.042.006.011c.006,0,.092-.159.092-.159a.673.673,0,0,1,.462-.229h.068a.7.7,0,0,1,.56.333.673.673,0,0,1,.019.647,9.345,9.345,0,0,0-.69,3.689,24.9,24.9,0,0,0,2.728,11.269,15.244,15.244,0,0,1-2.026,16.085"
                transform="translate(-15874 -5766.159)"
              ></path>
            </g>
          </svg>
        </Paginationdiv>
      </Wrappermid>
      <Downpart>
        <h4>Depuis 1920 </h4>
      </Downpart>
    </Cover>
  );
};

export default Home;
const Overlaydiv = styled.div`
aspect-ratio: 16/9;
  min-width: 100%;
  min-height: 100vh;
   position: absolute;

  video {
    z-index: 0;
    
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
  }
  @media (max-width: 1508px) {
    video {
    z-index: 0;
    min-width: 100%;
    min-height: 60rem;
    object-fit: contain;
  }  }
`;
const Videodiv = styled.div`
  position: relative;
  width: 100%;
  z-index: 0;
  @media (max-width: 1024px) {
   right:20rem
  }
  @media (max-width: 768px) {
   right:25rem
  }
  @media (max-width: 425px) {
   right: 33.5rem
  }
  @media (max-width: 425px) {
   right: 36.5rem
  }
`;
const Overlay = styled.div`
  height: 20vh;
  position: absolute;
  bottom: 16rem;
  overflow: hidden;
  will-change: transform;
  h1{
    font-display: auto;
    will-change: transform;

  }

  @media (max-width: 1024px) {
    bottom: 12rem;

  }
  @media (max-width: 768px) {
    bottom: 12rem;

  }
  @media (max-width: 520px) {
    bottom: 11rem;

  }
  @media (max-width: 375px) {
    bottom: 9rem;

  }
`;
const Overlay1 = styled.div`
  overflow: hidden;
  height: 32vh;

  position: absolute;
  bottom: -1rem;
  span{
    font-display: auto;

    will-change: transform;

  }
  @media (max-width: 1024px) {
    bottom: -1rem;

  }
  @media (max-width: 768px) {
    bottom: -1rem;

   }
 `;
const Overlay2 = styled.div`
  overflow: hidden;
  height: 31vh;

  position: absolute;
  top: 16rem;
  will-change: transform;
  h1{
    font-display: auto;
     will-change: transform;

  }
  @media (max-width: 1024px) {
    top:12rem
  }
  @media (max-width: 768px) {
    top:12rem
  }
  @media (max-width: 520px) {
    top:11.5rem
  }
  @media (max-width: 375px) {
    top:9rem
  }
`;
const Cover = styled.div`
overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  justify-content: center;
  align-items: center;
   
  width: 100vw;
  min-height: 100vh;
  background-color: #d1cbb8;
  font-weight: 400;
  background-color: #bdb2a7;
  
   
`;
const Midtext = styled.div`
  display: flex;
  flex-direction: column;
  font-size: clamp(2rem, 2.098vw + 1.329rem, 5rem);
  text-align: center;
  align-items: center;
   line-height: 11rem;
  min-height: 40vh;
  font-weight: 400;
  color: white;
  overflow: hidden;
   z-index: 4;
 background-color: aliceblue;

 @media (max-width: 520px) {
  font-size: clamp(1rem, 2.098vw + 1.329rem, 1.5rem);

}
 @media (max-width: 375px) {
  font-size: clamp(1rem, 2.098vw + 1.329rem, 1.2rem);

}
  div {
     display: flex;
    flex-direction: column;
  }
  text-transform: uppercase;
  h1 {
     font-weight: 400;
    overflow: hidden;
    font-family: Myfont;

    span {
      overflow: hidden;
    }
  }
  
`;

const Maison = styled.h1`
  letter-spacing: 0.5rem;
  font-family: "Figtree", sans-serif !important;
  font-size: 10.2rem;
  font-weight: 500;
   @media (max-width: 1750px) {
    font-size: clamp(4rem, 2.238vw + 6.284rem, 10.2rem);

  }
  @media (max-width: 1024px) {
    font-size: clamp(2rem, 2.238vw + 6.284rem, 6.2rem);

  }
   @media (max-width: 768px) {
    font-size: clamp(2rem, 2.238vw + 6.284rem, 6.2rem);

  }
   @media (max-width: 520px) {
    font-size: clamp(1rem, 2.238vw + 6.284rem, 4.2rem);

  }
   @media (max-width: 375px) {
    font-size: clamp(1rem, 2.238vw + 6.284rem, 2.2rem);

  }
   

`;
const Toppart = styled.div`
  margin-bottom: 5rem;
  font-size: 1.5rem;
  text-transform: uppercase;

  letter-spacing: 0.2rem;
`;
const Downpart = styled.div`
  margin-top: 5rem;
  text-transform: uppercase;

  font-size: 1.5rem;
  letter-spacing: 0.2rem;
`;

const Wrappermid = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const MainSvgdiv = styled.div`
  display: flex;
  z-index: -1;
  position: absolute;
  @media (max-width: 375px) {
   top:1rem;

  }
  
`;
const Leftsvg = styled.div`
  position: relative;
  top: 3rem;
  will-change: transform;
    left: 17rem;
  img {
    width: 35rem;
    @media (max-width: 1024px) {
      width: 28rem;
  }
    @media (max-width: 768px) {
      width: 26rem;
  }
   
    @media (max-width: 425px) {
      width: 22rem;
  }
    @media (max-width: 375px) {
      width: 15rem;
  }
   
  }
  @media (max-width: 1024px) {
    left: 13rem;

  }
  @media (max-width: 768px) {
    left: 13rem;

  }
  @media (max-width: 425px) {
    left: 11.2rem;

  }
  @media (max-width: 375px) {
    left: 7.3rem;

  }

`;
const Rightsvg = styled.div`
  position: relative;
  top: 3rem;
  will-change: transform;
  z-index: -2;
  right: 17.5rem;
  img {
    width: 35rem;
    @media (max-width: 1024px) {
      width: 28rem;
  }
    @media (max-width: 768px) {
      width: 26rem;
  }
   
  @media (max-width: 425px) {
      width: 22rem;
  }
    @media (max-width: 375px) {
      width: 15rem;
  }
   
  }
  @media (max-width: 1024px) {
    right: 14.5rem;

  }
  @media (max-width: 768px) {
    right: 12.5rem;

  }
  @media (max-width: 425px) {
    right: 10.5rem;

  }
  @media (max-width: 375px) {
    right: 7.5rem;

  }
`;
const Paginationdiv = styled.div`

  position: absolute;
  will-change: transform;
  top: -6rem;
  right: 25.5rem;
  svg{
    width: 100%;
    object-fit: cover;
  }
 
  @media (max-width: 1024px) {
 
    right: 13.5rem;
    width: 8rem;

  }
  @media (max-width: 768px) {
    right: 7.5rem;
    width: 7rem;

  }
  @media (max-width: 520px) {
    top: -5rem;
    right: 3.5rem;
 
    width:6rem;

  }
  @media (max-width: 375px) {
    top: -2rem;
    right: 3.5rem;
 
    width:5rem;

  }
   
`;
