import React,{useEffect} from 'react'
import origin1 from '../../assets/Images/1storigin.jpg'
import origin2 from '../../assets/Images/2ndorigin.jpg'
import styled from 'styled-components'
import gsap from 'gsap'

const Productorigin = () => {
    useEffect(() => {
        const boxes = gsap.utils.toArray(".box");
        const loop = horizontalLoop(boxes, {
          paused: false,
          repeat: -1,
          speed: .8,
        });
        return () => {
            loop.kill(); // Cleanup the animation when the component is unmounted or rerendered
          }
      }, []);


    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
          length = items.length,
          startX = items[0].offsetLeft,
          times = [],
          widths = [],
          xPercents = [],
          curIndex = 0,
          pixelsPerSecond = (config.speed || 1) * 100,
          snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
          totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
          xPercent: (i, el) => {
            let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
            xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
            return xPercents[i];
          }
        });
        gsap.set(items, {x: 0});
        totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
          item = items[i];
          curX = xPercents[i] / 100 * widths[i];
          distanceToStart = item.offsetLeft + curX - startX;
          distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
          tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
            .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
            .add("label" + i, distanceToStart / pixelsPerSecond);
          times[i] = distanceToStart / pixelsPerSecond;
        }
        function toIndex(index, vars) {
          vars = vars || {};
          (Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
          let newIndex = gsap.utils.wrap(0, length, index),
            time = times[newIndex];
          if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
            vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
            time += tl.duration() * (index > curIndex ? 1 : -1);
          }
          curIndex = newIndex;
          vars.overwrite = true;
          return tl.tweenTo(time, vars);
        }
        tl.next = vars => toIndex(curIndex+1, vars);
        tl.previous = vars => toIndex(curIndex-1, vars);
        tl.current = () => curIndex;
        tl.toIndex = (index, vars) => toIndex(index, vars);
        tl.times = times;
        tl.progress(1, true).progress(0, true); // pre-render for performance
        if (config.reversed) {
          tl.vars.onReverseComplete();
          tl.reverse();
        }
        return tl;
      }
  return (
    <Origincover >
        <Contianingorigindiv>
            <Originfirst>
                <img src={origin1} alt="" />
                <p>VARIÉTÉ: BOURBON, CATURRA, CATUAI . ALTITUDE: 1300 -1800M LE CAFÉ KITCHÉ PROVIENT D’UNE PETITE COOPÉRATIVE DE PRODUCTEURS À DOMINANTE DE FEMMES. C’EST DANS LA COMMUNAUTÉ D’EMANUEL, DÉPARTEMENT DE SAN MARCOS, (DANS L’OUEST DU GUATEMALA) QUE LE CAFÉ KITCHÉ EST PRODUIT PAR LA PETITE ORGANISATION ACOMNAT À MAJORITÉ FÉMININE.CHAQUE FAMILLE EXPLOITE DES PETITES PARCELLES ENTRE 1 ET 2 HECTARES EN MOYENNE. ELLES ASSURENT AVEC LE PLUS GRAND SOIN LA RÉCOLTE, LE TRAITEMENT ET LE SÉCHAGE AU SOLEIL DE LEUR CAFÉ. CE CAFÉ GRAND CRU DE MONTAGNE DONT LES PLANTATIONS SE SITUENT ENTRE 1 300 ET 1 800 M, BÉNÉFICIE D’UN CLIMAT LÉGÈREMENT HUMIDE COMBINÉ À UNE CULTURE SOUS OMBRAGE, LUI GARANTISSANT DES CONDITIONS EXCEPTIONNELLES.</p>

            </Originfirst>
            <Originsecond>
                <div>
                    <h1>ORIGINE DE</h1>
                    <h1>LA PLANTATION</h1>
                </div>
                 <img src={origin2} alt="" />
                
            </Originsecond>
        </Contianingorigindiv>
        <Loopboxes>
                <div className='box'>GUATEMALA</div>
                <div className='box'>GUATEMALA</div>
                <div className='box'>GUATEMALA</div>
                <div className='box'>GUATEMALA</div>
                <div className='box'>GUATEMALA</div>
                <div className='box'>GUATEMALA</div>
            

        </Loopboxes>
    </Origincover>
  )
}

export default Productorigin

const Origincover = styled.div`
    width: 100vw;
     display: flex;
    justify-content: center;
    background-color: #191512;
    position: relative;
    z-index: -2;
    padding-bottom: 9rem;
    overflow: hidden;

`
const Contianingorigindiv = styled.div`
    margin-top: 14rem;
    width: 80rem;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1023px) {
     flex-direction: column-reverse;
      align-items: center;
      gap:3rem;
 }
 
 `
const Originfirst = styled.div`
    width: 45%;
     display: flex;
    flex-direction: column;
     gap:5rem;
     color:#bdb2a7 ;
    img{
        width: 23rem;
    }
    p{
        letter-spacing: 1px;
        margin-left: .5rem;
        width: max(23rem);
     }
     @media (max-width: 1023px) {
       align-items: center;
       width: 80%;
      
}
     
@media (max-width: 451px) {
       align-items: center;
      img{
        width: max(22rem);
    }
    p{
        letter-spacing: 1px;
        margin-left: .5rem;
        width: max(20rem);
     }
      
}
    @media (max-width: 375px) {
       img{
        width: max(18rem);
    }
    h1{
        text-transform: uppercase;
        font-size: 2.5rem;
    }
      
}

 
`
const Originsecond = styled.div`
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
     gap:13rem;
     color:white;
    img{
        width: max(27rem);
    }
    h1{
        text-transform: uppercase;
        font-size: 3rem;
    }
    @media (max-width: 1023px) {
      margin-right: 0;
      gap:2rem;

      
}
    @media (max-width: 451px) {
       align-items: center;
      img{
        width: max(22rem);
    }
    h1{
        text-transform: uppercase;
        font-size: 3rem;
    }
      
}
    @media (max-width: 375px) {
       img{
        width: max(18rem);
    }
    h1{
        text-transform: uppercase;
        font-size: 2.5rem;
    }
      
}
`
const Loopboxes = styled.div`
display: flex;
gap:1rem;
    position: absolute;
    top:45%;
    z-index: 0;
    color:white;
    font-size: 5rem;
    opacity: .1;
    z-index: -1;

`