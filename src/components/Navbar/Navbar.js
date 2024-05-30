import React from 'react'
import Mainlog from '../../assets/Images/Mainlog.svg'
import search from '../../assets/Images/search.svg'
import profile from '../../assets/Images/profile.svg'
import cart from '../../assets/Images/cart.svg'
import hamburger from '../../assets/Images/hamburger.svg'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';

const Navbar = ({Nava}) => {
  const navigate = useNavigate();

  return (
    <Cover ref={Nava}>
      <Menudiv>
        <img src={hamburger} alt="" />
        <p>Menu</p>
      </Menudiv>  
      <div onClick={()=>navigate('/')}>
        <img src={Mainlog} alt="" />
      </div>
       <Icondiv>
       <img src={search} alt="" />
       <img src={profile} alt="" />
        <div className='Cart'>

        <img src={cart} alt="" />
        <div>
            <p>0</p>
        </div>
        </div>
       </Icondiv>
    </Cover>
  )
}

export default Navbar

const Cover = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
     position: fixed;
     z-index: 1000000;
    top:0;
     background-color: rgba(255, 255, 255, 0.526);;
     backdrop-filter: blur(10px);
   `
const Menudiv = styled.div`
    height: 100%;
    display: flex;
    margin-left: 1rem;

    align-items: center;
    gap:.5rem;
    position: relative;
    z-index: 1;
    img{
        width: 1.5rem;
    }
    p{
        font-size: 1.3rem;
        font-weight: 300;
        text-transform: uppercase;
    }
`
const Icondiv = styled.div`
    display: flex;
    gap:1.5rem;
    margin-right: 1rem;
    padding: 1rem;

     .Cart{
          background-color: white;
        position: relative;
        border-radius: 1rem;
 
        div{
            width: 1.3rem;
            height: 1.3rem;

            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: -.6rem;
            right: -.7rem;
            background-color: white;
            border-radius: 1rem;
            font-size: .8rem;
        }
    }
`