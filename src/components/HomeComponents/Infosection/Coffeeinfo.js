import React from 'react'
import styled from 'styled-components'
import Deuzacof from '../../../assets/Images/Coffeecup.jpg'
import Cofeeimg from '../../../assets/Images/deuzacupweb.jpg'


const Coffeeinfo = () => {
  return (
    <Cover>
           
            <Firstdiv>
                <div  className='First1'>
                     <h1> Coffee Premium</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className='First1-s'>
                        <h2>Discover the house</h2>
                     </div>
                </div>
                <div className='First2'>
                    <h1>Our specials</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </Firstdiv>
            <Seconddiv>
                <img src={Cofeeimg} alt="" />
            </Seconddiv>
           
    </Cover>
  )
}

export default Coffeeinfo

const Cover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
  
  @media (max-width: 768px) {
   flex-direction: column;
   height: auto;

    }
     
 `
const Firstdiv = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-content: center;
align-items:flex-end;
background: url(${Deuzacof});
background-size: cover;
@media (max-width: 768px) {
    width: 100%;

        flex-direction: column;
        align-items: center;
  }
      .First1{
        position: relative;
        z-index: 1;
        color:white;
         display: flex;
        margin-bottom: 2rem;

        flex-direction: column;
        width: 50%;
          height: 50%;
          @media (max-width: 888px) {
            margin-bottom: 9rem;

  }
  @media (max-width: 767px) {
    width: 20rem;

    margin-bottom: 4rem;
    margin-top: 7rem;
    }
  @media (max-width: 425px) {
     width: 20rem;
    }
           h1{
            margin-left:3rem;
            font-size: 2.5rem;
            font-size: clamp(2rem, 1.8462rem + 0.7692vw, 2.5rem);            
         }
         p{
            margin-left:3rem;
            margin-top: 1rem;
            width: 80%;
            font-size: clamp(1rem, 0.9692rem + 0.1538vw, 1.1rem);
                 }
          
         .First1-s{
            margin-left:3rem;

            width: 80%;
            margin-top: 8rem;
            h2 {  cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    
    background-image: linear-gradient(to bottom, black 0%, black 100%);
    background-position: 0% 100%;  /* starts from the left */
    background-repeat: no-repeat;
    background-size: 0% 3px;  /* underline is initially not visible */
    transition: background-size 0.3s;  /* this ensures the smooth animation */
    padding-bottom: 3px;
    padding-inline :1px ;
            };
            
             h2:hover {
              background-size: 100% 3px;  /* underline becomes fully visible on hover */
}
            @media (max-width: 888px) {
                width: 100%;

  }
            @media (max-width: 767px) {
                margin-top: 2rem;

  }
          

            
         }
     }
     .First2{
        color:white;

        display: flex;
        flex-direction: column;
        width: 50%;
         height: 50%;
         margin-bottom: 2rem;
         @media (max-width: 888px) {
            margin-bottom: 9rem;

  }
         @media (max-width: 767px) {
            width: 20rem;

            justify-content: center;
            margin-left: 4rem;
   }
         h1{
            margin-left:1rem;
            font-size: clamp(2rem, 1.8462rem + 0.7692vw, 2.5rem);
                           @media (max-width: 768px) {
                width: 20rem;
  }
         }
         p{
            margin-left:1.1rem;

            margin-top: 1rem;
            width: 80%;
            font-size: clamp(1rem, 0.9692rem + 0.1538vw, 1.1rem);
                 }
     }
`

const Seconddiv = styled.div`
width: 60%;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
@media (max-width: 768px) {
    width: 100%;
     }
`