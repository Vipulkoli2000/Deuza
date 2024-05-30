import React,{useState, useEffect} from 'react'
import styled,{css} from 'styled-components'
import Rightarrow from '../../assets/Images/icons8-arrow-right-50.png'
import bagongrain from '../../assets/Images/widerbagongrain.jpg'
import ProductDisiplay from '../HomeComponents/productDisiplay'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import axios from 'axios'

const ProductShop = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [currentclicked , setcurrentclick] = useState('1')
    const [Productdata , setproductdata] = useState([])
    const [loading, setLoading] = useState(true);

     const toggleDrawer = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        axios('http://localhost:4000/api/products/getproducts')
        .then((resp) => {
            console.log(resp.data);
            setproductdata(resp.data);
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            setLoading(false); // Set loading to false even if there's an error
        });
        console.log(Productdata)
        const handleResize = () => {

            if (window.innerWidth <= 1186) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <Cover>
        <Containgingdiv>
          { isMobile && <Fixedbutton onClick={toggleDrawer}>
                <button >Filter</button>
            </Fixedbutton>}
            {isMobile ? <Drawera>
             <Drawer
                open={isOpen}
                onClose={()=>{setIsOpen(false)}}
                direction='bottom'
                className='bla'
                style={{height: '32rem' , backgroundColor:"#e6e5e1"}}
            >

             <Maindrawerdiv>
                <h5>categories</h5>
                <Drawerbuttonmain  >
                    <Drawerbuttondiv isActive={currentclicked === '1'} onClick={()=>setcurrentclick('1')}>
                            <p>BOUTIQUE</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                    <Drawerbuttondiv isActive={currentclicked === '2'} onClick={()=>setcurrentclick('2')}>
                            <p>CAFÉ</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                    <Drawerbuttondiv isActive={currentclicked === '3'} onClick={()=>setcurrentclick('3')}>
                            <p>CAFÉ  CAPSULE</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                    <Drawerbuttondiv isActive={currentclicked === '4'} onClick={()=>setcurrentclick('4')}>
                            <p>Thés & Infusions</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                    <Drawerbuttondiv isActive={currentclicked === '5'} onClick={()=>setcurrentclick('5')} >
                            <p>GOURMANDISES</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                    <Drawerbuttondiv isActive={currentclicked === '5'} onClick={()=>setcurrentclick('5')} style={{borderBottom: 'none'}}>
                            <p>ACCESSOIRES</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                    </Drawerbuttondiv>
                </Drawerbuttonmain>
             </Maindrawerdiv>
          </Drawer>
             </Drawera>
             :<Sidebar>
                <h1>Categories</h1>
                 <Buttscovermain>
                    <Buttoncoverdiv isActive={currentclicked === '1'} onClick={()=>setcurrentclick('1')}>
                        <p>BOUTIQUE</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
                    <Buttoncoverdiv isActive={currentclicked === '2'} onClick={()=>setcurrentclick('2')} className='middle'>
                        <p>CAFÉ</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
                    <Buttoncoverdiv isActive={currentclicked === '3'} onClick={()=>setcurrentclick('3')} className='middle'>
                        <p>CAFÉ  CAPSULE</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
                    <Buttoncoverdiv isActive={currentclicked === '4'} onClick={()=>setcurrentclick('4')} className='middle'>
                        <p>Thés & Infusions</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
                    <Buttoncoverdiv isActive={currentclicked === '5'} onClick={()=>setcurrentclick('5')} className='middle'>
                        <p>GOURMANDISES</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
                    <Buttoncoverdiv isActive={currentclicked === '6'} onClick={()=>setcurrentclick('6')}>
                        <p>ACCESSOIRES</p>
                        <div>
                            <img src={Rightarrow} alt="" />
                        </div>
                    </Buttoncoverdiv>
            </Buttscovermain>
            
             </Sidebar> }
              
            <Gridshowcover>
                    <Sortdiv>
                        <h5>Sort</h5>
                        <Buttoncoverdiv className='asa'>
                            <p>Description</p>
                            <div>
                                <img src={Rightarrow} alt="" />
                            </div>
                        </Buttoncoverdiv>
                    </Sortdiv>
                    <Griddiv>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                        
                    </Griddiv>
                    <Wideimage>
                        <img src={bagongrain} alt="" />
                    </Wideimage>
                    <Flexlastitem>
                    <ProductDisiplay/>
                    <ProductDisiplay/>
                    <ProductDisiplay/>


                    </Flexlastitem>
                   
            </Gridshowcover>
        </Containgingdiv>
    </Cover>
  )
}

export default ProductShop
const Cover = styled.div`
    width: 100vw;
     display: flex;
    justify-content: center;
    padding-bottom: 7rem;
    background-color: #e6e5e1;
 `
 
 
const Containgingdiv = styled.div`
    margin-top: 5rem;
   width: 95rem;
   gap:.5rem;
    display: flex;
    @media (max-width: 1535px) {
        width: 99%;
  }
  @media (max-width: 1186px) {
    width: 99%;
  }
    
`
const Sidebar = styled.div`
   width: 40%;
    display: flex;
   flex-direction: column;
   align-items: center;
   margin-left:1rem;
   gap:1rem;
   h1{
    font-size: clamp(1rem, -0.0769rem + 5.3846vw, 3.5rem);
        letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    font-family: Myfont;

    @media (max-width: 1144px) {
        font-size: clamp(2rem, 1.6923rem + 1.5385vw, 3rem);
       }
}
   @media (max-width: 1535px) {
    max-width: 30%;
  }
  @media (max-width: 1166px) {
    max-width: 90%;
  }
   
`
const Maindrawerdiv = styled.div`
    padding:1.5rem;
    h5{
        margin-left: 1rem;
        font-size:2.5rem;
        font-family: 'Ourfontblack';
        text-transform: uppercase;
        font-weight: 300;
        letter-spacing: 1.5px;
    }
`

const Buttscovermain = styled.div`
width: 70%;
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    .middle{
        border-top: 1px solid rgba(216, 216, 216, 0.5);
        border-bottom: 1px solid rgba(216, 216, 216, 0.5);
        
    }
    text-transform: uppercase;
    @media (max-width: 1490px) {
    width: 80%;
  }
`

const Drawerbuttonmain = styled.div`
width: 100%;
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e6e5e1;
    padding: 1rem;
    .middle{
        border-top: 1px solid rgba(216, 216, 216, 0.5);
        border-bottom: 1px solid rgba(216, 216, 216, 0.5);
        
    }
    
    text-transform: uppercase;
`
const Buttoncoverdiv = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
     justify-content:space-between ;
    align-items: center;
    cursor: pointer;
    ${({ isActive }) =>
    isActive &&
    css`
      /* Styles for the active state */
      background-color: white;
    `}
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
    
`
const Drawerbuttondiv = styled.div`
    width: 100%;
    display: flex;
    padding: 1rem;
     justify-content:space-between ;
    align-items: center;
    border-bottom: 1px solid #8a8a8a;
    cursor: pointer;

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
`
const Gridshowcover = styled.div`
width: 80%;
      display: flex;
     flex-direction: column;
     gap:2rem;
     @media (max-width: 1754px) {
        width: 80%;
  }
  @media (max-width: 1186px) {
    width: 100%;
  }
  @media (max-width: 864px) {
     justify-content: center;
  }
`
const Griddiv = styled.div`
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-template-rows: repeat(2, 1fr);
     gap: 3rem  5.5rem;
     grid-auto-flow: column;
      @media (max-width: 1754px) {
        gap: 3rem  3.5rem;
  }
  @media (max-width: 1166px) {
    gap: 3rem  1rem;

  }
  @media (max-width: 864px) {
    gap: 3rem  .5rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);

    justify-items: center;
    align-items: center;

  }
  @media (max-width: 576px) {
    gap: 3rem  .5rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(6, 1fr);

    justify-items: center;
    align-items: center;

  }
`
const Wideimage = styled.div`
margin-top: 4rem;

    max-width: 67rem;
    border-radius: 1rem;
    img{
        width: 100%;
        border-radius: .5rem;

    }
`

const Flexlastitem = styled.div`
margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  gap:5rem;
  @media (max-width: 1754px) {
        gap: 3rem  3.5rem;
  }
  @media (max-width: 1166px) {
    gap: 3rem  1rem;

  }
  @media (max-width: 840px) {
     flex-wrap: wrap;

  }
   
`
const Drawera = styled.div`
height: 12rem;

   .bla{
    height: 12rem;
 
    border-radius: 1rem;

 }
`
const Sortdiv =styled.div`
display: flex;
align-items: center;
justify-content: center;
gap:1rem;
    width: 18rem;
    padding: 1rem;
    .asa{
        height: 3rem;
        border-radius: 0.5rem;

        background-color: white;
    }
`
const Fixedbutton = styled.div`
    position: fixed;
    top: 90%;
    left:45%;
    z-index: 99;
    button{
        color:white;
        text-transform: uppercase;
        font-weight: 500;
        padding: .7rem;
        padding-inline: 1.7rem;
        border-radius: .5rem;
        background-color: #191512;
        border: none;
}
`