import React from 'react'
import ProductDisiplay from '../productDisiplay'
import styled from 'styled-components'

const Productsection = () => {
  return (
    <Cover>
        <ProductDisiplay/>
        <ProductDisiplay/>
        <ProductDisiplay/>
    </Cover>
  )
}

export default Productsection

const Cover = styled.div`
    width: 80rem;
    margin-left:1rem;
    margin-top: 14rem;
      align-self: center;
    display: flex;
    justify-content:center;
    gap:4rem;
    align-items: center;
    margin-bottom: 13rem;
    flex-wrap: wrap;
    @media (max-width: 1310px) {
         width: 90%;
   }
   background-color: #e6e5e1;
 `