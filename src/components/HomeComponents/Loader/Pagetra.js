import React,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'


const Pagetra = () => {
    const Containera = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {
             const t1 = gsap.timeline({
            })
            
            
        },Containera.current)
        return () => ctx.revert();
    }, [])

  return (
    <Cover>
        <Container ref={Containera}>

        </Container>
    </Cover>
  )
}

export default Pagetra

const Cover = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;
`
const Container = styled.div`
width: 100vw;
height: 100vh;
  background-color: brown;
  `
