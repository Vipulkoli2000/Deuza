import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Topsection = () => {
  const navigate = useNavigate();

  const navigateWithDelay = (routeName) => {
    setTimeout(() => {
        navigate(routeName);
    }, 50);  // 500ms delay
}
  return (
    <Cover Cover>
        <Container onClick={()=>{navigateWithDelay('/shop')}}>
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
background-color: #e6e5e1;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Container  = styled.div`
    display: flex;
    justify-content: center;
    gap:.5rem;
    font-size: .8rem;
    cursor: pointer;
 `