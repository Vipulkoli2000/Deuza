import React, { useEffect, useRef,useCallback } from 'react';
    import Dummy from '../../assets/Images/bb201a3393c4dd27d8c758e2bf7c.jpg'
    import Dummyer from '../../assets/Images/map.png'
     import Dummya from '../../assets/Images/icons8-arrow-right-50.png'
    import svg1 from '../../assets/Images/svgexport-9.svg'
    import styled from 'styled-components'
    import gsap from 'gsap'
    import { useNavigate } from 'react-router-dom';


    const ProductDisiplay = ({data}) => {
        const uniqueIdRef = useRef(`svgMask-${Math.random().toString(36).substr(2, 9)}`);
        const circle1Id = useRef(`circle1-${Math.random().toString(36).substr(2, 9)}`);
        const circle2Id = useRef(`circle2-${Math.random().toString(36).substr(2, 9)}`);
        const circle3Id = useRef(`circle3-${Math.random().toString(36).substr(2, 9)}`);
        const Image1 = useRef(`first-${Math.random().toString(36).substr(2, 9)}`);

        const circlehover = useRef();
        const navigate = useNavigate();
        const increment = useCallback(() => {
            console.log(data)
            const element1 = circlehover.current;
            let animationa;
        
            let timeline = gsap.timeline({paused: true});
        
            animationa = timeline
                .to(`#${Image1.current}`, {opacity: 0, duration: .2, ease: 'Power1.easeInOut' })
                .to(`#${circle1Id.current}`, { attr: { r: "60%" }, duration: .4, ease: 'Power1.easeInOut' }, "<")
                .to(`#${circle2Id.current}`, { attr: { r: "60%" }, duration: .3, ease: 'Power1.easeInOut' }, "<")
                .to(`#${circle3Id.current}`, { attr: { r: "160%" }, duration: .4, ease: 'Power1.easeInOut' }, "<");
        
            element1.addEventListener("mouseenter", () => animationa.play());
            element1.addEventListener("mouseleave", () => animationa.reverse());          }, []);


        useEffect(() => {
            setTimeout(() => {

            increment()
            },500)
        }, []);
        
        return (
        <>
            <Cover>
                <Imagediv onClick={()=>navigate('/productde')} ref={circlehover} clipPathId={uniqueIdRef.current}>
                     <img  id={Image1.current} src={Dummy} alt="imgae" />
                    <img className='secondimg' src={Dummyer} alt="" />

                </Imagediv>
                <Perodiv>
                    <p>PEROU PALOMAR</p>
                    <div>
                        <img src={Dummya} alt="" />
                        
                    </div>
                </Perodiv>
                <Intensity>
                    <Intensitydivsvg>
                        <p>Intensite:</p>
                        <div>
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />
                            <img src={svg1} alt="" />

                            <img src={svg1} alt="" />

                        </div>
                     </Intensitydivsvg>
                    <Notesfru>
                        <p>NOTES:</p>
                        <p className='Sec'>FRUITE</p>
                    </Notesfru>
                </Intensity>
                <Fromprice>
                    <hr />
                    <div>
                        <p>A PARTIR DE 6.50$</p>
                    </div>
                </Fromprice>
      <Svgoffscr>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id={uniqueIdRef.current}>
            <circle id={circle1Id.current} cx="40%" cy="50%" r="0%" />
            <circle id={circle2Id.current} cx="70%" cy="100%" r="0%" />
            <circle id={circle3Id.current} cx="25%" cy="135%" r="0%" />
        </clipPath>
    </defs>
</svg>

      </Svgoffscr>
            </Cover>
        </>
      )
    }
    
    export default ProductDisiplay
  

    const Cover = styled.div`
        max-width: 18.5rem ;
        border: 1px solid white;
         display: flex;
        flex-direction: column;
        align-items: center;
        color:#5c5955;
        border-radius: 1rem;
        
        &::before{
            background: #fff;
    content: "";
    height: 10px;
    left: 50%;
    position: absolute;
    width: 22px;
    border-radius: 50vw 50vw 0 0;
    bottom: 100%;
    translate: -50% 0;
 }
        @media (max-width: 2560px) {
            max-width: 18.5rem ;
  }
  @media (max-width: 788px) {
            max-width: 18.5rem ;
  }
 
         
    `
    const Imagediv = styled.div`
    width: 100%;
    padding:1rem;
    position: relative;
        img{
             width:100%;
            height:100%;
 
        }
        .secondimg{
            width: 100%;
            height:100%;
            z-index: 1;
            position: absolute;
            top: 0;
            left: 0;
            clip-path: url(${props => `#${props.clipPathId}`});
        }
    `
    const Perodiv = styled.div`
    width: 90%;
    padding: .5rem;
        display: flex;
        align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius:.5rem;
    p{
        margin-left:.8rem;
    }
    div{

        width: 2rem;
        padding: .5rem;
        border-radius: 1rem;
        background-color: #d9d8d6;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 100%;
            height: 100%;
        }
    }
    `
    const Intensity = styled.div`
     width: 75%;
    margin: .5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-top: 1rem;

    `
    const Intensitydivsvg = styled.div`
        display: flex;
 
          div{
        width: 100%;
        display: flex;
        margin-left: .5rem;
        @media (max-width: 600px) {
             margin-left: 0rem;

     }
        img{
            margin-left:.5rem;
            @media (max-width: 600px) {
             margin-left: .5rem;

     }
            @media (max-width: 375px) {
             margin-left: .4rem;

     }
        }
    }
         @media (max-width: 600px) {
            flex-direction: column;
            margin-left: 0rem;

     }

    `

    const Notesfru = styled.div`
        display: flex;
        margin-top:.5rem;
        .Sec{
            margin-left:.5rem;
        }
    `
    const Fromprice = styled.div`
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

        hr{
            width: 90%;
        border: none; /* Remove default border */
        background-color: white; /* Set the background color (which will be the line color) */
        height: 1.5px; /* Set the height (thickness) of the line */
        }
        div{
            display: flex;
            align-items: center;
            justify-content: center;
             width: 80%;
             padding: 1.5rem;
        }
    `
const Svgoffscr = styled.div`
position: absolute;
width: 0;
height: 0;
overflow: hidden;
 pointer-events: none;
`;
