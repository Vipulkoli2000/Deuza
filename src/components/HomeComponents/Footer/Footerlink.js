import React from 'react'
import Deuzalogo from '../../../assets/Images/svgexport-19.svg'
import rightarrow from '../../../assets/Images/icons8-arrow-right-50.png'
import styled from 'styled-components'

const Footerlink = () => {
  return (
    <Cover>
        <Svgdiv>
            <img src={Deuzalogo} alt="" />
            <hr />
        </Svgdiv>
        <Seconcoverdiv>
            <Linkdivcover>
                <Botoque>
                    <h4>BOUTIQUE</h4>
                    <div>
                        <p>Cafe Capsule</p>
                        <p>Cafe </p>
                        <p>THÉS & INFUSIONS</p>
                        <p>GOURMANDISES</p>
                        <p>ACCESSOIRES</p>

                    </div>
                </Botoque>
            </Linkdivcover>
            <Linkdivcover>
                <Botoque>
                    <h4>Maison deuza</h4>
                    <div>
                        <p>MAISON DEUZA</p>
                        <p>pro </p>
                        <p>Blog</p>
                        <p>Faq</p>
 
                    </div>
                </Botoque>
            </Linkdivcover>
            <Linkdivcover>
                <Botoque>
                    <h4>Contact</h4>
                    <div className='addy'>
                        <p>18 RUE JOSEPH GARAT,
64500 SAINT-JEAN-DE-LUZ
TÉLÉPHONE : 05 59 26 04 36</p>
                    <div className="facebook">
                        <h4>Facebook</h4>
                        <h4>Facebook</h4>

                    </div>
                         
 
                    </div>
                </Botoque>
            </Linkdivcover>
            <Linkdivcover>
                <Botoque>
                    <h4>INSCRIVEZ-VOUS POUR RECEVOIR NOTRE NEWSLETTER</h4>
                    <div className='Newsletter'>
                      
                          <div className='Email'>
                            <input placeholder='Email' type="email" name="" id="" />
                            <div className='circlediv'>
                                <img src={rightarrow} alt="" />
                            </div>
                         </div>
                     <p>En soumettant ce formulaire, j’accepte que les informations saisies dans ce formulaire soient utilisées pour permettre de me recontacter OU pour m’envoyer la newsletter. Pour en savoir plus, vous pouvez vous reporter à notre politique de confidentialité.</p> 
 
                    </div>
                </Botoque>
            </Linkdivcover>
        </Seconcoverdiv>
        <hr />
        <Thirddiv>
            <Firstdiv>
                <p>Contact</p>
                <p>Contact</p>
                <p>Contact</p>
                <p>Contact</p>
                <p>Contact</p>

            </Firstdiv>
            <p>STUDIOWAAZ-EN ESKUTIK</p>
        </Thirddiv>
    </Cover>
  )
}

export default Footerlink

const Cover = styled.div`
width: 100vw;
padding:2rem;
background-color: white;
color: RGB(25, 21, 18);
`
const Seconcoverdiv = styled.div`
display: flex;
 gap:2rem;
padding:1rem;
margin-top:2rem;
margin-bottom: 4rem;
@media (max-width: 1244px) {
    flex-direction: column;
}
`
const Svgdiv  = styled.div`
    width: 100%;
    margin-top: 3.5rem;
    img{
        width: 100%;
        margin-bottom: 1.5rem;

    }
`
const Linkdivcover = styled.div`
    width: 100%;
`

const Botoque = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-transform: uppercase;
    gap:1.5rem;
    h1{
        font-weight: bold;
    }
   div{
    display: flex;
    flex-direction: column;
    gap:.5rem;
   }
     .facebook{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
     }
     .addy{
        width: 50%;
     }
     .Email{

        display: flex;
        flex-direction: row;
        background-color: white;
        justify-content: space-between;
        border: 2px solid #e5e5e5 ;

        input{
            border: none;
            outline: none;
            margin-left: 1rem;
            padding-inline:1rem;
            @media (max-width: 336px) {
                padding-inline:.5rem;

}
        }
     }
     .circlediv{
        width: 2rem;
         height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
        background-color: #d9d8d6;
        border-radius: 1rem;
        margin: .5rem;
        margin-right: 1rem;

         img{
            width: 1rem;

         }
     }
     .Newsletter{
        max-width: 35rem;
         
        p{
            font-size: .7rem;
            letter-spacing: 1px;
        }
        gap: 0.1;
     }
`
const Thirddiv =styled.div`
display: flex;
justify-content: space-between;
align-items: center;
 gap:2rem;
`
const Firstdiv =styled.div`
  display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
margin-left: 1rem;
margin-top: 1.5rem ;
padding-bottom:2rem;
gap:2rem;
@media (max-width: 776px) {
    max-width: 30rem;

  flex-direction: column;
  gap:1rem;

}
@media (max-width: 446px) {
 
}
`