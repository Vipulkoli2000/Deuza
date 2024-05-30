import React,{useState} from 'react'
import Rightarrow from '../../assets/Images/icons8-arrow-right-50.png'
import compnaylgo from '../../assets/Images/compnaytradelogo.svg'
import wave from '../../assets/Images/wave.svg'
import button from '../../assets/Images/button.svg'

import styled,{css} from 'styled-components'

const Productdetails = () => {
    const [currentclicked , setcurrentclick] = useState('1')
  return (
    <Cover>
        <Svgdiv>
            <img src={wave} alt="" />
        </Svgdiv>
        <Containingdiv>
            <Buttscovermain>
                <Buttoncoverdiv isActive={currentclicked === '1'} onClick={()=>setcurrentclick('1')}>
                    <p>Description</p>
                    <div>
                        <img src={Rightarrow} alt="" />
                    </div>
                </Buttoncoverdiv>
                <Buttoncoverdiv  isActive={currentclicked === '2'} className='middle' onClick={()=>setcurrentclick('2')}>
                    <p>Dégustation</p>
                    <div>
                        <img src={Rightarrow} alt="" />
                    </div>
                </Buttoncoverdiv>
                <Buttoncoverdiv isActive={currentclicked === '3'} onClick={()=>setcurrentclick('3')}>
                    <p>Origine et fabrication</p>
                    <div>
                        <img src={Rightarrow} alt="" />
                    </div>
                </Buttoncoverdiv>
            </Buttscovermain>
            <Sidebarcontent>

                {currentclicked === '1' && <p>
                Café Kitché comes from a smalv l cooperative of producers dominated by women. It is in the community of Emanuel, San Marcos department, (in western Guatemala) that Kitché coffee is produced by the small organization ACOMNAT with a majority of women. Each family farms small plots between 1 and 2 hectares on average. They ensure with the utmost care the harvesting, processing and drying in the sun of their coffee. This mountain grand cru coffee, whose plantations are between 1,300 and 1,800 m, benefits from a slightly humid climate combined with a shaded crop, guaranteeing exceptional conditions.
                </p> }
                {currentclicked === '2' && <Intensitydivcover>
                    <div>
                        <p>Intensite :</p>
                        <p>4</p>
                    </div>
                    <div>
                        <p>ARÔMES :</p>
                        <p>FRUITÉ</p>
                    </div>
                </Intensitydivcover> }
                {currentclicked === '3' && <Companylogocover>
                    <img src={compnaylgo} alt="" />
                    <Intensitydivcover>
                    <div>
                        <p>PROVENANCE  :</p>
                        <p>COMMERCE ÉQUITABLE, PRODUCTEUR PAYSAN</p>
                    </div>
                    <div>
                        <p>DLUO  :</p>
                        <p>2 ANS</p>
                    </div>
                    <div>
                        <p>DLUO  :</p>
                        <p>2 ANS</p>
                    </div>
                    <div>
                        <p>CONSERVATION   :</p>
                        <p> A CONSERVER AU SEC ET À L'ABRI DE LA CHALEUR.</p>
                    </div>
                    <div>
                        <p>CONDITIONNEMENT    :</p>
                        <p>SACHET DE CAFÉ EN GRAINS</p>
                    </div>
                </Intensitydivcover>
                </Companylogocover> }
            </Sidebarcontent>
        </Containingdiv>
        <Bottombutton>
            <img src={button} alt="" />
        </Bottombutton>
    </Cover>
  )
}

export default Productdetails

const Cover = styled.div`

    width: 100vw;
    min-height: 85vh;
    padding-top:2rem;
     display:flex;
    justify-content: center;
    align-items: center;
    background-color: #bdb2a7;
    position: relative;
`
const Containingdiv = styled.div`
    width: 80%;
    display: flex;
    gap:2rem;
    @media (max-width: 1078px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
@media (max-width: 1026px) {
    width: 90%;

      
}
 
`
const Bottombutton  =styled.div`
    position: absolute;
    bottom: -5rem;
`
const Buttscovermain = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .middle{
        border-top: 1px solid black;
        border-bottom: 1px solid black;

    }
    text-transform: uppercase;
     
`
const Buttoncoverdiv = styled.div`
    width: 25rem;
    display: flex;
    padding: 1rem;
     justify-content:space-between ;
    align-items: center;
    div{
        width: 2rem;
        height: 2rem;
        background-color: #d9d8d6;
        border-radius: 1rem;
         
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            width: 1rem;
             object-fit: cover;
        }
    }
    ${({ isActive }) =>
    isActive &&
    css`
      /* Styles for the active state */
      background-color: white;
    `}
    @media (max-width: 425px) {
    width: max(20rem);

      
}
@media (max-width: 320px) {
    width: max(15rem);

      
}
`
const Sidebarcontent = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    @media (max-width: 714px) {
    width: max(25em);

      
}
@media (max-width: 425px) {
    width: max(20rem);

      
}
@media (max-width: 320px) {
    width: max(15rem);

      
}
 `
const Intensitydivcover = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    div{

        display: flex;
        gap: .5rem
    }
`
const Companylogocover = styled.div`
    p{
        min-width: 10rem;
    }
    img{
        width: 4rem;
    }
`
const Svgdiv = styled.div`
width: 1rem;
    position: absolute;
    left: 22%;
    top:-4.5rem;
`