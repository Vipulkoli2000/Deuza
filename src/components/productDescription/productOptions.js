import React,{useState, useEffect,useRef} from 'react'
import coffeebag from '../../assets/Images/bb201a3393c4dd27d8c758e2bf7c.jpg'
import juge from '../../assets/Images/juge.svg'
 import expresso from '../../assets/Images/expresso.svg'
import machine from '../../assets/Images/machine.svg'
import filter from '../../assets/Images/filter.svg'
import jug from '../../assets/Images/jug.svg'
 import Ratingcof from '../../assets/Images/svgexport-9.svg'
import grain from '../../assets/Images/download.svg'
import fiveg from '../../assets/Images/500g.png'
import onekg from '../../assets/Images/1kg.png'
 
import gsap from 'gsap';

import styled,{css} from 'styled-components'


const ProductOptions = () => {
  const firstimg = useRef()
  const secondimg = useRef()
  const thirdimg = useRef()
  const imagda = useRef()
  const [currentclicked , setcurrentclick] = useState('1')
  const [currentclickeda , setcurrentclicka] = useState('1')

  const [Currentg , setCurrentg] = useState('')

  useEffect(() => {
   if(imagda.current){ const timeline = gsap.timeline({ paused: true, defaults:{duration: .8} });

    // Reset clip-path for all images
 
    let targetImage;
    timeline
    .to(imagda.current,{scale:0.5,duration:.8, ease: 'Back.easeOut.config(44)'}) 
    .to(imagda.current,{scale:1,duration:.8, ease: 'Back.easeOut.config(44)'},"")

    .to("#circle1", { attr: { r: "130%" },  ease: 'Power1.easeInOut' }, "<")
    .to("#circle2", { attr: { r: "130%" },  ease: 'Power1.easeInOut' }, "<")
    .to("#circle3", { attr: { r: "150%" }, ease: 'Power1.easeInOut' }, "<")
 
 
    switch (Currentg) {
      
        case '250g':
            targetImage = firstimg.current;
            console.log("useEffect triggered with Currentg:", Currentg);
            gsap.set('.first',{zIndex: 5})

          timeline.play()
            break;
        case '500g':
            targetImage = secondimg.current;
            console.log("useEffect triggered with Currentg:", Currentg);
            gsap.set('.second',{zIndex: 5})
             timeline.play()


            break;
        case '1kg':
          gsap.set('.second', {zIndex: 4});

            targetImage = thirdimg.current;
            console.log("useEffect triggered with Currentg:", Currentg);
            gsap.set('.third',{zIndex: 5})

            timeline.play()
            break;
        default:
            break;
    }
    gsap.set(targetImage, { clipPath: 'url("#svgMask")' });


     return () => {
      if (timeline) {
        timeline.kill();
     }

     if (firstimg.current && secondimg.current && thirdimg.current) {
      gsap.set("#circle1", { attr: { r: "0%" } });
      gsap.set("#circle2", { attr: { r: "0%" } });
      gsap.set("#circle3", { attr: { r: "0%" } });
      gsap.set([firstimg.current, secondimg.current, thirdimg.current], { clipPath: 'none' });
      gsap.set('.second', {zIndex: 2});
      gsap.set('.first', {zIndex: 3});
      gsap.set('.third', {zIndex: 1});
   }

   };
}
}, [Currentg]);

  return (
    <Cover>
 
             <Stopper>
             <Imagediv ref={imagda}>
                <img className='first' ref={firstimg} src={coffeebag} alt="" />
                <img  className='second' ref={secondimg} src={fiveg} alt="" />
                <img  className='third' ref={thirdimg} src={onekg} alt="" />

            </Imagediv>
 
            <Sidebarcafe>
                <Coffeecafesidebarcover>
                         <Cafetopsection>
                          <p>cafe</p>
                          <hr />
                          <h1>PÉROU PALOMAR</h1>
                        </Cafetopsection>
                    <Colordiv>
                    <Contianingdiv>
                        <Pricerange>
                          <h1>6,50€</h1>
                          <h3>26,00$/KG</h3>

                        </Pricerange>
                        <div>
                          <hr />
                          <Intensitydiv>
                              <div>
                              <p>intensite:</p>
                              <SvgDiv>
                                <img src={Ratingcof} alt="" />
                                <img src={Ratingcof} alt="" />
                                <img src={Ratingcof} alt="" />
                                <img src={Ratingcof} alt="" />
                                <img src={Ratingcof} alt="" />

                              </SvgDiv>
                              </div>
                              <div>
                                <p>Notes:</p>
                                <p>Fruite</p>
                              </div>

                              <div>
                                <p>Origine:</p>
                                <p>Perou</p>
                              </div>
                          </Intensitydiv>
                        </div>
                        <Selectordivcover>
                          <p>Mouture</p>
                          <Selectorcontainer>
                            <Selectoritem isActive={currentclicked === '1'} onClick={()=>setcurrentclick('1')} >
                              <img src={grain} alt="" />
                              <p>grains</p>
                            </Selectoritem>
                            <Selectoritem isActive={currentclicked === '2'} onClick={()=>setcurrentclick('2')}>
                              <img src={jug} alt="" />
                              <p>TURC</p>
                            </Selectoritem>
                            <Selectoritem isActive={currentclicked === '3'} onClick={()=>setcurrentclick('3')}>
                              <img src={filter} alt="" />
                              <p>FILTRE</p>
                            </Selectoritem>
                            <Selectoritem isActive={currentclicked === '4'} onClick={()=>setcurrentclick('4')}>
                              <img src={machine} alt="" />
                              <p>PERCOLATEUR</p>
                            </Selectoritem>
                            <Selectoritem isActive={currentclicked === '5'} onClick={()=>setcurrentclick('5')}>
                              <img src={expresso} alt="" />
                              <p>ITALIENNE</p>
                            </Selectoritem>
                            <Selectoritem isActive={currentclicked === '6'} onClick={()=>setcurrentclick('6')}>
                              <img src={juge} alt="" />
                              <p>PISTON</p>
                            </Selectoritem>
                          </Selectorcontainer>
                        </Selectordivcover>
                        <WeightCoverdiv>
                          <p>poids</p>
                          <Buttondiv>
                          <Buttoncssclick isActive={currentclickeda === '1'}  onClick={() => { 
                            
                          setcurrentclicka('1') 
                          setCurrentg('250g')}}>250G</Buttoncssclick>
                          <Buttoncssclick isActive={currentclickeda === '2'}  onClick={() => {setcurrentclicka('2')
                            setCurrentg('500g')}}>500G</Buttoncssclick>
                          <Buttoncssclick isActive={currentclickeda === '3'}  onClick={() => {setcurrentclicka('3')
                            setCurrentg('1kg')}}>1KG</Buttoncssclick>
                          </Buttondiv>
                        </WeightCoverdiv>
                         <Quantitycover>
                             <p>Quantite</p>
                            <Selectordiv>
                               <div className='Minus'>-</div>
                               <input type="number" defaultValue="1" />
                              <div className='Plus'>+</div>
                            </Selectordiv>
                            <button>Acheter</button>
                         </Quantitycover>
                        <LastTextdiv>
                          <p>Acidité modérée, velouteux, avec des saveurs de fruits et de cacao</p>
                        </LastTextdiv>
                     </Contianingdiv>
                    </Colordiv>
                 </Coffeecafesidebarcover>
                 <Svgoffscr>

                <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <clipPath id="svgMask">
                      <circle id="circle1" cx="140%" cy="150%" r="0%" data-svg-origin="214.0859375 509.9140625" transform="matrix(1,0,0,1,0,0)" />
                      <circle id="circle2" cx="171%" cy="220%" r="0%" data-svg-origin="599.4406127929688 713.8796997070312" transform="matrix(1,0,0,1,0,0)" />
                      <circle id="circle3" cx="140%" cy="350%" r="0%" data-svg-origin="342.5375061035156 203.96563720703125" transform="matrix(1,0,0,1,0,0)" />
                    </clipPath>
                  </defs>
                </svg>
                </Svgoffscr>
            </Sidebarcafe>
             </Stopper>
            
     </Cover>
  )
}

export default ProductOptions


const Cover = styled.div`
  width: 100vw;
  min-height: 90vh;
 
  text-transform: uppercase;
  letter-spacing: 1px;
  background-color: #e6e5e1;
  @media (max-width: 814px) {
    height: auto;

    flex-direction: column;
    align-items: center;
   }
`
const Stopper = styled.div`
  max-height: 70%;
  padding-bottom: 10rem;
  display: flex;
  @media (max-width: 814px) {
    height: auto;

    flex-direction: column;
    align-items: center;
   }
`
 
const Imagediv = styled.div`
    width: 50%;
     position: sticky;
     top:1rem;
     height:45rem;
     display:flex;
     align-items: center;
     
     justify-content: center;
      .first{
        /* clip-path: url("#svgMask"); */
        z-index: 1;
       }
      .second{
        /* clip-path: url("#svgMask"); */
         z-index: 2;
        top:10px;
       }
       .third{
        z-index: 3;
       }
  img{
    position: absolute;
    top:0;
    left:0;
    
     width: 100%;
    height: 100%;
    object-fit: contain;
    }
    @media (max-width: 814px) {
      position: relative;
     width: 50rem;

   }
    
`
const Sidebarcafe = styled.div`
  width: 50%;
  padding-bottom:4rem;
  @media (max-width: 814px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
     width: 100%;
   }
 `
const Coffeecafesidebarcover = styled.div`
  width: max(25rem,70%);
  margin-left:1rem;
  
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 814px) {

     width: 100%;
     p{
      font-size: large.8;
     }
   }
   
`
const Cafetopsection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:1rem;
padding-bottom: 1rem;
padding-top: 1rem;
border-top-right-radius: 1.5rem;
border-top-left-radius: 1.5rem;

align-items: center;
 background-color: #bdb2a7;
  position: relative;
 &::before{
  background: #bdb2a7;
    border-radius: 50vw 50vw 0 0;
    bottom: 100%;
    content: "";
    height: 12px;
    left: 50%;
    position: absolute;
    translate: -50% 0;
    width: 24px;
 }
hr{
  border-color: black;
   background-color: black;
  width: 2rem;
  height: .1px
}
`
const Colordiv = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  border-bottom-right-radius:1rem;
  border-bottom-left-radius:1rem;
`
const Contianingdiv = styled.div`
  width: 90%;
   background-color: white;
  display: flex;
  flex-direction: column;
  gap:1rem;
  border-bottom-right-radius:.5rem;
  border-bottom-left-radius:.5rem;
`
const Pricerange = styled.div`
display: flex;
align-items: baseline;
gap:1rem;
padding-top: 1rem;
h1{
  font-size:2.5rem;
  letter-spacing: .2rem;
}
 
`
const Intensitydiv = styled.div`
    width: 100%;
   padding-top:1rem;
   padding-bottom:1rem;
    display: flex;
    flex-direction: column;
    gap:.5rem;
   div{
    display: flex;
    gap:.5rem
   }
`
const SvgDiv =styled.div`
display: flex;
gap:0.5rem;

`
const Selectordivcover = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:1rem;
`
const Selectorcontainer = styled.div`
     display: flex;
    flex-wrap: wrap;
    gap:1rem;
    cursor: pointer;
    ${({ isActive }) =>
    isActive &&
    css`
      /* Styles for the active state */
      background-color: #d0c9c1;
    `}
  
     
`
const Selectoritem = styled.div`
${({ isActive }) =>
    isActive &&
    css`
      /* Styles for the active state */
      background-color: #d0c9c1;
    `}
    
      padding:1.5rem;
      padding-top:1rem;
      padding-bottom:1rem;

       border: 1px solid #e5e5e5;
      display: flex;
      justify-content: center;

      flex-direction: column;
      gap:1rem;
      align-items: center;
      border-radius: .5rem;
      img{
        width: 2.5rem;
      }
    
`
const WeightCoverdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;
  
`
const Buttondiv = styled.div`
  width: 50%;
  display: flex;
  gap:1rem;
  
  @media (max-width: 319px) {
    flex-wrap: wrap;
 
}

`
const Buttoncssclick = styled.div`
  outline: none;
    border: none;
    background-color: #e5e5e5;
    padding:1rem;
    padding-inline:1.5rem;
    border-radius: .5rem;
    cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    css`
      /* Styles for the active state */
      background-color: #d0c9c1;
    `}
`
const Quantitycover = styled.div`
  display: flex;
  gap:1.2rem;
  align-items: center;
  text-transform: uppercase;
  margin-bottom:4rem;
  button{
    padding:1rem;
    padding-inline: 1.5rem;
    background-color: #191512;
    color:white;
    border: none;
    border-radius:.5rem;
    text-transform: uppercase;

  }
  @media (max-width: 391px) {
    flex-wrap: wrap;
 
}
`
const Selectordiv = styled.div`
   height: 3rem;
  display: flex;
   align-items: center;
   border: 1px solid #e5e5e5;
  border-radius: .5rem;
     input{
    max-width: 3rem;
    height: 100%;
    text-align: center;
      outline: none;
      border: none;



      &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  .Minus{
     padding: .5rem;
 
  }
  .Plus{
    padding: .5rem;
 
   }
  
`
const LastTextdiv = styled.div`
  padding-bottom: 4rem;
 
   position: relative;
  &::before{
    background: #fff;
    border-radius: 0 0 50vw 50vw;
    content: "";
    height: 12px;
    left: 50%;
    position: absolute;
    top: 100%;
    translate: -50% 0;
    width: 24px;
  }
  p{
    font-size:.9rem;
    font-weight: 200;
  }
`
const Svgoffscr = styled.div`
position: absolute;
width: 0;
height: 0;
overflow: hidden;
 pointer-events: none;
`;
