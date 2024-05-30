import React, { useRef, useEffect, useState } from "react";
import p1 from "../../../assets/Images/p1.jpg";
import p2 from "../../../assets/Images/p2.jpg";
import p3 from "../../../assets/Images/p3.jpg";
import styled from "styled-components";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Minimap = () => {
  const mainComponentRef = useRef(null);
  const Minimapref = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollToDiv = (index) => {
    const divId = `#div${index}`;
    gsap.to(window, { duration: 1, scrollTo: { y: divId, offsetY: 50 } });
  };
  useEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mainComponentRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,

          onUpdate: (e) => {
            setScrollPosition(e.progress * 100);
          },
        },
      });

      t1.to(Minimapref.current.children[0], {
        yPercent: 490,
        ease: "none",

        trigger: mainComponentRef.current,
      });
    }, mainComponentRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <Cover>
      <Secondarycontainer>
        <Minimapa ref={Minimapref}>
          <Selectordiv></Selectordiv>
          <Minimapdiv1>
            <img onClick={() => scrollToDiv(1)} src={p1} alt="" />
          </Minimapdiv1>
          <Minimapdiv>
            <img onClick={() => scrollToDiv(2)} src={p2} alt="" />
            <img onClick={() => scrollToDiv(3)} src={p2} alt="" />
          </Minimapdiv>
          <Minimapdiv>
            <img onClick={() => scrollToDiv(4)} src={p3} alt="" />
            <img onClick={() => scrollToDiv(5)} src={p3} alt="" />
            <img onClick={() => scrollToDiv(6)} src={p1} alt="" />
          </Minimapdiv>
        </Minimapa>
        <Maincontainer ref={mainComponentRef}>
          <Firstdiv>
            <img id="div1" src={p1} alt="" />
          </Firstdiv>
          <Restdiv>
            <img id="div2" src={p2} alt="" />
            <img id="div3" src={p2} alt="" />
          </Restdiv>
          <Restdiv>
            <img id="div4" src={p3} alt="" />
            <img id="div5" src={p3} alt="" />
            <img id="div6" src={p1} alt="" />
          </Restdiv>
        </Maincontainer>
      </Secondarycontainer>
    </Cover>
  );
};

export default Minimap;

const Minimapa = styled.div`
  width: 5rem;
  height: 50rem;
  position: sticky;
  top: 1rem;
  left: 108rem;
  margin-right: 2rem;
`;
const Minimapdiv1 = styled.div`
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Minimapdiv = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  gap: 0.3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Selectordiv = styled.div`
  position: absolute;
  width: 100%;
  height: 4rem;
  border: 1px solid white;
  transform: translateY(16px);
`;
const Secondarycontainer = styled.div`
  width: 100%;

  margin-top: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const Cover = styled.div`
  width: 100vw;
  height: auto;
  background: #141414;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Firstdiv = styled.div`
  margin-left: 8rem;
  margin-bottom: 29rem;

  img {
    width: 55rem;
    height: 30rem;
    object-fit: cover;
  }
`;
const Restdiv = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 29rem;
  img {
    width: 55rem;
    height: 30rem;
    object-fit: cover;
  }
`;
const Maincontainer = styled.div`
  width: 60%;
  height: 390vh;
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 49.5rem;
`;
