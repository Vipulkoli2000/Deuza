import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import petals from './images/svgexport-13.svg';
import styled from 'styled-components';
import seneicview from './images/c2eb88af2b9163ff7de99da6632d.png.webp';
import rightarow from './images/icons8-arrow-right-64.png';
import ProductDisplay from '../productDisiplay'
import checkingbagbeans from '../../../assets/Images/checkingbagbeans.jpg'
import beansgrind from '../../../assets/Images/beansgrind.jpg'

const Latestnews = () => {
    const circlehover = useRef();
    const circlehover2 = useRef();
    const circlehover3 = useRef();
    const Containera = useRef();

    const circle1Id = useRef(`circle1-${Math.random().toString(36).substr(2, 9)}`);
    const circle2Id = useRef(`circle2-${Math.random().toString(36).substr(2, 9)}`);
    const circle3Id = useRef(`circle3-${Math.random().toString(36).substr(2, 9)}`);
     
    //   useEffect(() => {
  
    //         const element1 = circlehover.current;
    //         const element2 = circlehover2.current;
    //         const element3 = circlehover3.current;
    //         let animation;

    //         let timeline = gsap.timeline({paused: true});

    //         animation = timeline.to("#circle1", { attr: { r: "50%" }, duration: .5, ease: 'Power1.easeInOut' })
    //         .to("#circle2", { attr: { r: "160%" }, duration: .4, ease: 'Power1.easeInOut' }, "<")
    //         .to("#circle3", { attr: { r: "120%" }, duration: .5, ease: 'Power1.easeInOut' }, "<");
          
            
    //           element1.addEventListener("mouseenter", () => animation.play());
    //           element2.addEventListener("mouseenter", () => animation.play());
    //           element3.addEventListener("mouseenter", () => animation.play());

    //           element1.addEventListener("mouseleave", () => animation.reverse());  
    //           element2.addEventListener("mouseleave", () => animation.reverse());  
    //           element3.addEventListener("mouseleave", () => animation.reverse());  

           
    // }, [])
    

  return (
    <Cover ref={Containera}>
      <Innercover>
        <Textdiv>
          <div>
            <h1>
              The Latest
            </h1>
            <h1>News</h1>
          </div>
          <img src={petals} alt="" />
        </Textdiv>
        <Semimaintripleimg>
          <Imagediv ref={circlehover} >
            <img src={seneicview} alt="" className="revealing-image" />
            <Imagecontent>
              <p>MAISON DEUZA IN THE SPOTLIGHT IN ECHAPPEE BELLE</p>
              <img src={rightarow} alt="" />
            </Imagecontent>
          </Imagediv>
          <Textparaarticle>
            <p>Immerse yourself in the fascinating world of coffee at Maison DEUZA and follow all the latest news from our passionate team and our producers around the world. Discover the new varieties, innovative growing techniques and inspiring stories of the people who make your daily cup of coffee possible. Join us on a sensory journey through the aromas, flavors and colors of the caffeinated universe.</p>
            <button>ALL ARTICLES</button>

          </Textparaarticle>
          <Imagediv  ref={circlehover2} >
            <img src={checkingbagbeans} alt="" className="revealing-image" />
            <Imagecontent>
              <p>MAISON DEUZA IN THE SPOTLIGHT IN ECHAPPEE BELLE</p>
              <img src={rightarow} alt="" />
            </Imagecontent>
          </Imagediv>
        </Semimaintripleimg>
        <Semimaintripleimg>
          <Imagediv  ref={circlehover3}  >
            <img src={beansgrind} alt="" className="revealing-image" />
            <Imagecontent>
              <p>MAISON DEUZA IN THE SPOTLIGHT IN ECHAPPEE BELLE</p>
              <img src={rightarow} alt="" />
            </Imagecontent>
          </Imagediv>
        </Semimaintripleimg>
      </Innercover>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={circle1Id.current}>
            <circle id="circle1" cx="40%" cy="50%" r="0%" data-svg-origin="214.0859375 509.9140625" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle2" cx="70%" cy="100%" r="0%" data-svg-origin="599.4406127929688 713.8796997070312" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle3" cx="25%" cy="135%" r="0%" data-svg-origin="342.5375061035156 203.96563720703125" transform="matrix(1,0,0,1,0,0)" />
          </clipPath>
          <clipPath id={circle2Id.current}>
            <circle id="circle1" cx="40%" cy="50%" r="0%" data-svg-origin="214.0859375 509.9140625" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle2" cx="70%" cy="100%" r="0%" data-svg-origin="599.4406127929688 713.8796997070312" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle3" cx="25%" cy="135%" r="0%" data-svg-origin="342.5375061035156 203.96563720703125" transform="matrix(1,0,0,1,0,0)" />
          </clipPath>
          <clipPath id={circle3Id.current}>
            <circle id="circle1" cx="40%" cy="50%" r="0%" data-svg-origin="214.0859375 509.9140625" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle2" cx="70%" cy="100%" r="0%" data-svg-origin="599.4406127929688 713.8796997070312" transform="matrix(1,0,0,1,0,0)" />
            <circle id="circle3" cx="25%" cy="135%" r="0%" data-svg-origin="342.5375061035156 203.96563720703125" transform="matrix(1,0,0,1,0,0)" />
          </clipPath>
        </defs>
      </svg>
     </Cover>
  )
}

export default Latestnews;

const Cover = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #bdb2a7;
 `
const Innercover = styled.div`
    width: 90%;
`
const Textdiv = styled.div`
    height: 30rem;
    margin-top:5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
     
    div {
      h1 {
        height: 5rem;
        font-family: Bodoni Moda;
        text-transform: uppercase;
        font-size: 4rem;
        text-align: center;
        @media (max-width: 429px) {
          height: 12rem;
   }
      }
    }
`
const Imagediv = styled.div`
    min-width: 9rem;
    max-width: 27.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top:1.5rem;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
     }
`
const Imagecontent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 2rem;
  padding: .8rem;
  border-radius: 1rem;
  background-color: white;
  padding-inline: .3rem;
  opacity: .9;

  p {
    width: 80%;
  }

  img {
    width: 2rem;
  }
`
const Semimaintripleimg = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap:2rem;
  flex-wrap: wrap;
`
const Textparaarticle = styled.div`
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
 @media (max-width: 878px) {
            width: 23.5rem ;
  }
  p {
    line-height: 1.7;
    letter-spacing: 1px;
    font-size: 1.1rem !important;
  }

  button {
    margin-top:1rem;
    width: 8.9rem;
    background-color: transparent;
    border: none;
    padding: .5rem;
    font-size: 1.1rem !important;
    border-bottom: 1px solid black;
  }
`
