import React from 'react'
import cafe from "../../../assets/Images/bb201a3393c4dd27d8c758e2bf7c.jpg.webp";
import styled from 'styled-components'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';

const Slidercomp = ({prod}) => {
 
  const navigate = useNavigate();

      
  return (
    <Imageelement onClick={()=>navigate('/shop')} >
            <img src={prod} alt="" />
    </Imageelement>
  )
}

export default Slidercomp


const Imageelement = styled.div`
  margin-top: 5rem;
  width: 30rem;
  will-change: transform;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    width: 28rem;


}
@media (max-width: 768px) {
    width: 24rem;


}
@media (max-width: 425px) {
    width: 20rem;


}
`;