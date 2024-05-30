import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Topsection = () => {
  const navigate = useNavigate();

  return (
    <Cover>
        <Container onClick={()=>{navigate('/shop')}}>
            <p>Accueil</p>
            <p>/</p>
            <p>Boutique</p>
            <p>/</p>

            <p>Cafe</p>
            <p>/</p>
            <p>Perou palomar</p>
        </Container>
    </Cover>
  )
}

export default Topsection


const Cover  = styled.div`
  min-height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top:5rem;
   background-color: #bdb2a7;
`
const Container  = styled.div`
    display: flex;
    justify-content: center;
    gap:.5rem;
    font-size: .8rem;
    align-items: center;
 `