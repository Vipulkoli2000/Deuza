import React from 'react'
import img1 from '../../assets/Images/Coffeecup.jpg'
import styled from 'styled-components'

const test = () => {
  return (
    <>
        <Cover className='Container'>
            <div className='imgdiv'>
               <img className='img1' src={img1} alt="" /> 
               <img  className='img2' src={img1} alt="" /> 
            </div>Cover
            <div>
                 <h1>Your Destination awaits</h1>
                 <p>Wherever you want to be wahtever your schedule let our flexibleWherever you want to be wahtever your schedule let our flexible</p>
                <div>
                    <div>
                        <p>Our fleet</p>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <p>Our fleet</p>
                        <img src={img1} alt="" />
                    </div>
                </div>
             </div>
        </Cover>
    </>
  )
}

export default test

const Cover = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 10rem;
    }

 `