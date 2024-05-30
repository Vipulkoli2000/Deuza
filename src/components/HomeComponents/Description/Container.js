import React, { useEffect, useRef, useState } from "react";
import Image from "../../../assets/Images/Forest.jpg";
import styled from "styled-components";
import Minimap from "./Minimap";
import Hero from "./Hero";

const Container = () => {
  return (
    <>
      <Hero />
      <Minimap />
 
    </>
    
  );
};

export default Container;
