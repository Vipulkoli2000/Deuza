import React from 'react'
import Svg1 from '../../../assets/Images/svgexport-15.svg'
import Svg2 from '../../../assets/Images/svgexport-16.svg'
import Svg3 from '../../../assets/Images/svgexport-17.svg'
import Svg4 from '../../../assets/Images/svgexport-18.svg'
import styled from 'styled-components'

const Svgcol = () => {
  return (
    <Cover>
         <Container>
            <div>
              <img src={Svg1} alt="" />
              <h4>MAISON</h4>
              <h4>CENTENAIRE</h4>

            </div>
            <div>
              <img src={Svg2} alt="" />
              <h4>TORRÉFACTION</h4>
              <h4>ARTISANALE</h4>

            </div>
            <div>
              <img src={Svg3} alt="" />
              <h4>SAVOIR FAIRE</h4>
              <h4>« ANCESTRAL »</h4>
            </div>
            <div>
              <img src={Svg4} alt="" />
              <h4>ÉTABLISSEMENT</h4>
              <h4>CERTIFIÉ BIO</h4>        
              </div>
         </Container>
    </Cover>
  )
}

export default Svgcol


const Cover = styled.div`
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
min-height: 60vh;
background-color: #bdb2a7;
@media (max-width: 768px) {
  padding-top: 4rem;
  padding-bottom: 4rem;

}
`
const Container = styled.div`
  width: 100%;
   display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap:2rem;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
      margin-bottom: 2rem;
    }
     h4{
      font-weight: 300;
      font-size: 1.5rem;
    }
  }
`