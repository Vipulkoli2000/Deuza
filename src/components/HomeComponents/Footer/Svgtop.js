import React from 'react'
import length from '../../../assets/Images/length.svg'
import Svgcol from './svgcol'
import styled from 'styled-components'
const Svgtop = () => {
  return (
 <Cover>
   <Svgcol/>
    <Container>
        <Imagediv>
          <img src={length} alt="" />

         </Imagediv>
       
    </Container>
 </Cover>
  )
}

export default Svgtop

const Cover = styled.div`
padding-top:4rem;
display: flex;
flex-direction: column-reverse;
gap:1rem;
background-color: #bdb2a7;
`
const Container = styled.div`
     width: 80%;
     margin-bottom: 3rem;
 `
const Imagediv= styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
      img{
        align-self: center;
        width: 80%;
        height: 2rem;
     }
`