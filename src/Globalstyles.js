import { createGlobalStyle } from "styled-components";
import font from "./assets/Fonts/Fontspring-DEMO-hernandezbros-regular.otf";
import fonta from "./assets/Fonts/Fontspring-DEMO-hernandezbros-black.otf";
import fontaa from "./assets/Fonts/Fontspring-DEMO-hernandezbros-semibold.otf";
import fontaaa from "./assets/Fonts/Fontspring-medium.otf";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ['Bodoni Moda:500', 'Lato:400,700', 'Figtree:500&display=swap']
  },
  custom: {
    families: ["Hernandez Bros", 'Ourfontblack','Ourfontsemi','Ourfontmedium'],
    urls: [font,fonta,fontaa,fontaaa]
  }
});

const GlobalStyle = createGlobalStyle`
  
  *{
   margin-block-start: 0em;
  margin-block-end: 0em;
  font-weight:400;
  box-sizing: border-box;
  @font-face {
    font-family: Myfont;
    src: url(${font});
  }
  @font-face {
    font-family: Myfontsemi;
    src: url(${font});
  }
 }

 body::-webkit-scrollbar{
  width: .6rem;
 }
 body::-webkit-scrollbar-track{
   background: hsla(0, 0%, 0%, 0.42) ;
    border-radius: 100vw;
 }
 body::-webkit-scrollbar-thumb{
  
   background: hsla(0, 0%, 0%, 0.60) ;
   border: .1rem solid hsla(0, 0%, 0%, 0.42);
   border-radius: 100vw;

 }
 @supports (scrollbar-color: red blue){
  *{
    scrollbar-color: hsla(0, 0%, 0%, 0.42) hsla(0, 0%, 0%, 0.60);
    scrollbar-width: thin;

  }
 }
  body {
   
    margin: 0;
    padding: 0;
    background-color:#bdb2a7;
    overflow-x: hidden;
    font-family: 'Figtree', sans-serif;
    h1{
      font-family: 'FSP DEMO - Hrnndz Brs Mdm';
    }
   }

   .gLIJZe{
    overflow-y: hidden;
   }
   
`;

export default GlobalStyle;
