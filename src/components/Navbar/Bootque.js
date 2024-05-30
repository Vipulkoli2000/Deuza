import React from 'react'
import Svgbutton from '../../assets/Images/button.svg'
import styled from 'styled-components'

const Bootque = () => {
  return (
    <Cover>
        <Container>
            <h1>Boutique</h1>
            <img src={Svgbutton} alt="" />
        </Container>
    </Cover>
  )
}

export default Bootque
const Cover = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bdb2a7;
    padding-bottom: 2rem;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    gap:2rem;
    justify-content: center;
    h1{
        margin-left:1rem;
        font-size: clamp(1rem, 0.8462rem + 10.7692vw, 10rem);
     text-transform: uppercase;
        font-family: Myfont;
        @media (max-width: 375px){
            font-size: 2.5rem;

        }
    }
    img{
        width: 6rem;
        @media (max-width: 375px){
            width: 4rem;

        }
    }
    @media (max-width: 425px){
        gap:1rem;

        }
    @media (max-width: 375px){
        gap:.5rem;

        }
`