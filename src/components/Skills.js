import { useRef } from 'react';

import styled from 'styled-components';
import { SkillBar } from './SkillBar';
import { BiRightArrow } from "react-icons/bi";
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";

import { Title } from './Title';

export function Skills() {

  const ref = useRef();
  const control = useAnimation();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "75% start"]
  });
  
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if(val>0 && val<1){
        document.querySelector('.my-skills').classList.add('is-active');
        control.start('visible');
    } else {
        document.querySelector('.my-skills').classList.remove('is-active');
        control.start('hidden');
    }
  });

  return (
    <Container 
        as={motion.div} 
        variants={{
            visible: {opacity: 1, x:0, transition: {duration: .25, type: "spring",  ease: "easeOut"}},
            hidden: {opacity: 0, x:"100%",transition: {duration: .25, ease: "easeIn"}}
        }}
        animate={control}
        initial={{opacity: 0}}  
        ref={ref} 
        className='container'
        id='my-skills'
    >
      <Title title='Skills'/>
      <div className='skills'>
        <SkillBar/>
        <div className='description'>
          <p>
            I am committed to continual growth and strive to expand my knowledge and skills in the field of technology. 
            Whether through learning about new technologies or building upon my existing knowledge, 
            I am dedicated to the pursuit of professional development.
          </p>
          <p> Some of the key skills that I have acquired to date and on which I am currently working include, </p>
          <div className='skill-lists'>
            <ul>
                <li><BiRightArrow className="bullet"/> JavaScript </li>
                <li><BiRightArrow className="bullet"/> ReactJs </li>
                <li><BiRightArrow className="bullet"/> NodeJs / ExpressJs </li>
                <li><BiRightArrow className="bullet"/> MongoDB </li>
            </ul>

            <ul>
                <li><BiRightArrow className="bullet"/> C++ </li>
                <li><BiRightArrow className="bullet"/> Problem Solving </li>
                <li><BiRightArrow className="bullet"/> Computer Fundamentals </li>
                <li><BiRightArrow className="bullet"/> Machine Learning </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .skills{
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 1349px) { flex-wrap: wrap; }
  }
  
  .description{
    padding: 1em;
    align-self: center;
    width: 50%;
    margin-left: 1.5em;
    font-size: 1.175em;
    letter-spacing: normal;
    color: rgba(255, 255, 255, 0.7);
    opacity: .7;
    p{margin-bottom: .75em;}
    display: inline-block;
    
    @media (max-width: 1349px){
      display: block;
      margin-top: .5em;
      text-align: center;
      margin-inline: auto;
      width: 100%;
      padding-inline: 2em;
    }

    @media (max-width: 629px){ 
      text-align: justify;
      padding: .25em;
      width: 100%;
      font-size: .9em;
      margin-top: .25em;
    }

    @media (max-width: 350px){ 
      text-align: justify;
      padding: 0.25em;
      margin-top: .25em;
    }
  }

  .skill-lists{
    display: flex;
    justify-content: space-evenly;
    font-size: .9em;
    text-align: left;
    
    @media (max-width: 350px){ 
      font-size: .75em;
      justify-content: space-between;
      gap: 1em;
      white-space: nowrap;
    }
  }
`
