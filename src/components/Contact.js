import { useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";

import { Title } from './Title';

export const Contact = () => {

  const ref = useRef();
  const control = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "75% start"]
  });
  
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if(val>0 && val<1){
        document.querySelector('.contact-me').classList.add('is-active');
        control.start('visible');
    } else {
        document.querySelector('.contact-me').classList.remove('is-active');
        control.start('hidden');
    }
  });

  return (
    <Container 
        as={motion.div} 
        variants={{
            visible: {opacity: 1, y: 0, transition: { duration: .25, ease: "easeOut"}},
            hidden: {opacity: 0, y: "10%", transition: {duration: .1}}
        }}
        animate={control}
        initial={{opacity: 0}} 
        ref={ref} 
        className='container'
        id='contact-me'
    >
        <Title title="Contact"/>
        <div className='invite'>
            <p>
                I am about to graduate and am currently seeking opportunities as a software developer.
                If you have any opportunities available, 
                I would love to discuss them with you. 
                I am also available for any collaboration or freelancing work at this time, 
                so please don’t hesitate to contact me.
            </p>
            <Button><a href='mailto:narsinganisagarh@gmail.com'>Contact</a></Button>
        </div>
    </Container>
  )
}


const Container = styled.div`
    .invite{
        margin-top: 1em;
        letter-spacing: normal;
        width: 75%;
        margin-inline: auto;
        font-size: 1.175em;
        opacity: .7;
        text-align: center;
    }

    @media (max-width: 960px){width: 100%}
    @media (max-width: 500px){font-size: .75em;}
`;

const Button = styled.button`
    font-size: 1rem;
    border-radius: 5px;
    background-color: #76b687;
    border: 2px solid #76b687;
    outline: none;
    color: black;
    cursor: pointer;
    margin-top: 1rem;
    padding: .5rem 1.5rem;
    font-weight: 500;
    letter-spacing: .075em;
    transition: all 1s;

    a{
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
    }

    &:hover{
        background-color: transparent;
        color: white;
    }
`;