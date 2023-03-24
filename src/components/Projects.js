import { useRef } from "react";
import styled from "styled-components"

import { ProjectCard } from "./ProjectCard"
import { Title } from "./Title";
import projects from '../assets/project_data.json'
import { motion, useScroll, useMotionValueEvent, useAnimation } from "framer-motion";


export const Projects = () => {
  
  const ref = useRef();
  const control = useAnimation();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "75% start"]
  });
  
  useMotionValueEvent(scrollYProgress, "change", (val) => {
    if(val>0 && val<1){
        document.querySelector('.my-projects').classList.add('is-active');
        control.start('visible');
    } else {
        document.querySelector('.my-projects').classList.remove('is-active');
        control.start('hidden');
    }
  });

  return (
    <Container 
        as={motion.div} 
        variants={{
            visible: {opacity: 1, x: "0",transition: {type: "spring", duration: .25, ease: "easeInOut"}},
            hidden: {opacity: 0, x: "-100%", transition: {duration: .4}}
        }}
        animate={control}
        initial={'hidden'} 
        ref={ref} 
        className='container'
        id='my-projects'
    >
    <Title title={"Projects"}/>
        <div className="projects">
            {projects.map((project, id) => <ProjectCard project={project} key={"project#"+id}/>)}
        </div>    
    </Container>
  )
}

const Container = styled.div`
    
    .projects{
        display: grid;
        justify-content: center;
        margin-top: 3em;
        gap: 2em;
        grid-auto-flow: column;
        @media (max-width: 1660px) {
            grid-auto-flow: row;
            grid-template-columns: repeat(2, 1fr);
        }
        
        @media (max-width: 850px) {
            grid-auto-flow: row;
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
