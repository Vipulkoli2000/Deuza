import React, { useRef, useEffect, useState } from "react";
import Forest from "../../../assets/Images/Forest.jpg";
import styled from "styled-components";
import gsap from "gsap";

const Hero = () => {
  const Covera = useRef();
  const Incadtion = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(Covera.current.children[0].children[0], { yPercent: 0 });
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: Covera.current,
          start: "top top",
          end: "bottom top",

          scrub: 1,
        },
      });
      t1.to(Covera.current.children[0].children[2], {
        yPercent: -20,
        ease: "expo".Out,
        duration: 10,
        scrollTrigger: {
          duration: 10,
          trigger: Covera.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
      t1.to(Covera.current.children[0].children[0], {
        yPercent: -30,
        ease: "none",
        duration: 10,
        scrollTrigger: {
          duration: 10,

          trigger: Covera.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, Covera.current);

    return () => ctx.revert();
  }, []);

  return (
    <Cover ref={Covera}>
      <Container>
        <img className="Background2" src={Forest} alt="" />
        <Backbutton>
          <a href="">Back</a>
        </Backbutton>
        <Textcontdiv>
          <Textdiv>
            <h2>A Restorative & Immersive Experience</h2>
            <div>
              <h1>Lead Designer</h1>
              <p>To celebrate 100 years of Gucci We partnered with the savy tho create the immersive experience that honors regenration</p>
            </div>
            <div>
              <p>Done with </p>
              <p>AKQA Amsterdam</p>
            </div>
            <p className="Button">Scrolldown</p>
          </Textdiv>
          <Pagination>
            <div ref={Incadtion}>
              <p>1</p>
              <p>-</p>
              <p>8</p>
            </div>
          </Pagination>
        </Textcontdiv>
      </Container>
    </Cover>
  );
};

export default Hero;

const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  color: white;
  .Background2 {
    width: 100%;
    height: 139vh;
    z-index: -1;
    object-fit: cover;
    position: absolute;
    background-position: 250% 250%;
  }
`;
const Backbutton = styled.div`
  width: 10%;
  height: 100%;
  position: relative;
  a {
    position: fixed;
    top: 3rem;
    left: 3rem;
    color: white;
    text-decoration: none;
  }
`;
const Textcontdiv = styled.div`
  display: flex;
`;
const Textdiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 7rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 400;
  }
  h2 {
    margin-top: 2rem;
    font-size: 3rem;
    font-weight: 500;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
  }
  .Button {
    margin-top: 12rem;
    width: 10rem;
    height: 3rem;
    background-color: transparent;
    color: white;
    font-size: 1rem;
    outline: none;
    font-weight: 400;
    cursor: pointer;
  }
`;
const Pagination = styled.div`
  width: 100%;
  height: 100%;
  font-weight: 200;
  display: flex;
  justify-content: flex-end;
  div {
    position: fixed;
    top: 2.5rem;
    right: 3rem;
    display: flex;
    p {
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
`;
