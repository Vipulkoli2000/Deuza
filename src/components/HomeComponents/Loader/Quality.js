import React,{useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import { useNavigate } from 'react-router-dom';



const Quality = () => {
    const Firsta = useRef()
    const Second = useRef()
    const Third = useRef()
    const Fourth = useRef()
    const Journey = useRef()
    const Containera = useRef()
    const Containera1 = useRef()
    const Containera2 = useRef()
    const Containera3 = useRef()
    const cover = useRef()

    const navigate = useNavigate();

    useEffect(()=>{
    CustomEase.create("Hop", "M0,0 C0.39,0.08 0,0.92 1,1 ");
    const Text = new SplitType(Journey.current.children[0],{types: "words"})

    var t1 = gsap.timeline({
      duration:3,
      
    });
    var firsta = Firsta.current.children[0]

    t1.to(Fourth.current.children[0] , {translateY: "-163rem",duration:3,ease: 'Hop'})
    t1.to(Third.current.children[0] , {translateY: "-47rem",duration:3,ease: 'Hop'},'-=2.8')
    t1.to(Second.current.children[0] , {translateY: -195,duration:2.5,ease: "Hop"},'-=3')
    t1.to(firsta , {translateY: -195,duration:2.6,ease: 'Hop'},'-=2.5')
    
        
    var t2 = gsap.timeline({
        duration:3,
        
      });
      t2.to(cover.current, {backgroundColor: '#bdb2a7', duration:3})

      t2.to(Journey.current.children[1],{duration: 2,ease: "Hop",clipPath:" polygon(0% 84%, 100% 83%, 100% 100%, 0% 100%)"}, '-=1')
      
      t2.to(Text.words , {translateY: -50, stagger: {
        amount:.1,
       },duration: 1,ease: "Hop"} ,'+=2')
       t2.to([Containera.current,Containera1.current,Containera2.current,Containera3.current], {duration: 1,ease: "Hop",translateY: -20,autoAlpha: .2},'-=2')
       t2.to([Containera.current,Containera1.current,Containera2.current,Containera3.current], {autoAlpha: 0},'>')


       t2.to(Journey.current.children[1],{duration: 1,autoAlpha: 0, translateX:1000,
        onComplete: ()=>{
            navigate('/home')
         }
 
    },'>')
 
       


    },[])

  return (
    <Cover ref={cover}>
        <Container ref={Containera}>
            <Firstdiv ref={Firsta}>
                <div className='Firs'>
                    <div><h1>1</h1></div>
                    <div><h1>2</h1></div>
                </div>

            </Firstdiv>
        </Container>
        <Container ref={Containera1}>
            <Seconddiv ref={Second}>
               <div className='Scroller'>
               <div><h1>9</h1></div>
                <div><h1>0</h1></div>

               </div>
            </Seconddiv>
        </Container>
        <Container ref={Containera2}>
            <Thirddiv ref={Third}>
               <div className='Scroller1'>
                    <div><h1>8</h1></div>
                    <div><h1>9</h1></div>
                    <div><h1>0</h1></div>
                    <div><h1>1</h1></div>                    
                    <div><h1>2</h1></div>
               </div>
            </Thirddiv>
        </Container >
        <Container ref={Containera3}>
            <Fourthdiv ref={Fourth} >
               <div className='Scroller2'>
                    <div><h1>8</h1></div>
                    <div><h1>9</h1></div>
                    <div><h1>0</h1></div>
                    <div><h1>1</h1></div>                     
                    <div><h1>2</h1></div>
                    <div><h1>3</h1></div>
                    <div><h1>4</h1></div>                     
                    <div><h1>5</h1></div>
                    <div><h1>6</h1></div>
                    <div><h1>8</h1></div>
                    <div><h1>9</h1></div>
                    <div><h1>0</h1></div>
                    <div><h1>1</h1></div>                     
                    <div><h1>2</h1></div>
                    <div><h1>3</h1></div>
               </div>
            </Fourthdiv>
        </Container>
        <Loadingdiv ref={Journey}>
            <h1>Our Journey Begins Here</h1>
            <div className='Progress'></div>
        </Loadingdiv>
    </Cover>
  )
}

export default Quality

const Cover = styled.div`
width:100vw;
height:100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    font-size:2rem;
    margin-bottom: 5rem;
    font-weight: 400;
    h1{
        font-weight: 400;
    }
`
const Loadingdiv = styled.div`
height:5rem;
 position: absolute;
 bottom: 0rem;
 text-align: center;
 font-size:0.7rem;
 display: flex;
 flex-direction: column;
 overflow:hidden;
  h1{
    margin-bottom: 2rem;
 }
 
 .Progress{
     width:100vw;
    height:1rem;
    background-color: brown;
    clip-path: polygon(0% 84%, 0% 84%, 0% 100%, 0% 100%);

 }
 
`

const Firstdiv = styled.div`
    width: 6rem;
    height: 10rem;
    font-size: 5rem;
    overflow: hidden;
    h1{
        font-weight: 400;
    }
 
`
const Seconddiv = styled.div`
    width: 6rem;
    height: 10rem;
    font-size: 5rem;
    h1{
        font-weight: 400;
    }
    overflow: hidden;
    .Scroller{
     }
`
const Thirddiv = styled.div`
    width: 6rem;
    height: 10rem;
    font-size: 5rem;
    h1{
        font-weight: 400;
    }
    overflow: hidden;
    .Scroller{
     }
`
const Fourthdiv = styled.div`
    width: 6rem;
    height: 10rem;
    font-size: 5rem;

    overflow: hidden;
    .Scroller{
     }
`