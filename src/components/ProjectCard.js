import React from 'react'
import styled from 'styled-components';
import { MdOutlineOpenInNew } from "react-icons/md";
import {SiGithub} from 'react-icons/si'

export const ProjectCard = ({project}) => {
  
  const openProject = (link) => {
    window.open(link, '_blank', 'noopener noreferrer');
  }
  return (
    <Container>
        <span className='links'>
            {project.github ? <SiGithub className='icon'/>: null}
            {project.link ? <MdOutlineOpenInNew className='icon'/>: null}
        </span>
        <div className='image' onClick={(_) => openProject(project.link)}>
            <img
                height={125}
                width={125}
                src={project.image}
                alt={project.title}
            />
        </div>
        <div className='desc'>
            <h4 className='header'>{project.title}</h4>
            <p>{project.description}</p>
        </div>
        <div className='skills'>
            <ul className='skill-list'>
                {project.skills.map((skill, id) => <li key={"skill#"+id}>{skill}</li>)}
            </ul>
        </div>
    </Container>
  )
};

const Container = styled.div`
    letter-spacing: 1px;
    border: 1px solid #76b687;
    display: inline-block;
    height: 100%;
    margin-inline: 1em;
    border-radius: 10px;
    position: relative;
    opacity: .7;
    /* color: rgba(255, 255, 255, .7); */

    &:hover{
        .image{
            opacity: .3;
            .icon{opacity: 1}
        }

        /* .git-icon{color: #76b687} */
    }

    .links{
        position: absolute;
        top: .5em;
        right: .1em;
        font-size: 1.1em;
        
        .icon{
            margin-inline: 0.5em;
            cursor: pointer;
            transition: color .5s;
            &:hover{ color: #76b687; }
        }
    } 
    
    .image{
        position: absolute;
        opacity: 0;
        width: 128px;
        height: 128px;
        border-radius: 10px;
        text-align: center;
        top: -15%;
        left: -5%;
        cursor: pointer;
        transition: transform 1s,  box-shadow 2s, opacity 1s;
    
        &:hover{
            transform: scale(1.1);
            box-shadow: 6px 6px 20px rgba(0, 0, 0, .5);
            .icon{
                color: #76b687;
            }
        }
    }

    .desc{
        width: 90%;
        margin-inline: auto;
        margin-block: 1.5em;
        font-size: .9rem;
        text-align: center;

        @media (max-width: 500px) {
            font-size: .75rem;
        }
        
        .header{
            font-size: 1.4em;
            font-weight: 500;
            margin-bottom: .5em;

            @media (max-width: 500px) {
                font-size: 1.25em;
            }
        }
    }
    
    .skill-list{
        margin-block: 1em;
        width: 100%;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-evenly;

        @media (min-width: 1661px) and (max-width: 1800px) {
            grid-auto-flow: row;
            border: 2px solid red;
            gap: 1em;
            align-items: center;
        }

        li{
            white-space: nowrap;
            width: fit-content;
            font-size: .9em;
            border: .5px solid #76b687;
            border-radius: 4px;
            padding: .3em .75em;

            @media (max-width: 500px) {
                font-size: .75rem;
            }

            @media (max-width: 400px) {
                border: none;
                font-weight: bold;
            }

        }
    }

`;