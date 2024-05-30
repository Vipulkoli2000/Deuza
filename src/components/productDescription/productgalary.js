import React from 'react'
import ProductDisiplay from '../HomeComponents/productDisiplay'
import styled from 'styled-components'

const Productgalary = () => {
  return (
    <Galarycover>
                <Containgingdiv>
                     <Headingdiv>
                        <h1>VOUS AIMEREZ AUSSI</h1>
                    </Headingdiv>
                    <Galary>
                        <ProductDisiplay/>
                        <ProductDisiplay/>
                        <ProductDisiplay/>
                    </Galary>
                </Containgingdiv>
    </Galarycover>
  )
}

export default Productgalary

const Galarycover = styled.div`
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-color: #e6e5e1;
    width: 100%;
    min-height: 100vh;
     display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Ourfont';
`
const Containgingdiv =styled.div`
     width: 70%;
    display: flex;
    flex-direction: column;
    margin-right:1rem;
    gap:9rem;
    
`
const Headingdiv = styled.div`
display: flex;
    justify-content: center;
    h1{
        font-size: 3rem;
    }
`
const Galary = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap:2rem;
    
`