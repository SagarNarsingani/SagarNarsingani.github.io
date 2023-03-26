import React, { useContext } from 'react'
import styled from 'styled-components'
import {ThemeContext} from './ThemeContext'
import { BsMoonStars, BsSun } from "react-icons/bs";

export const Navbar = () => {
  const {theme, changeTheme} = useContext(ThemeContext);
  const scrollTo = (section) => {
      const component = document.getElementById(section);
    component.scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
    <Container theme={theme}>
        <Title theme={theme}>
            <Heading>
                <span className="left-arrow"> &lt;</span> 
                    Sagar Narsingani 
                <span className="right-arrow">&gt; </span>
            </Heading>
        </Title>
        <Options>
            <Option className='opt about-me' onClick={(_) => scrollTo('about-me')}>About</Option>
            <Option className='opt my-skills' onClick={(_) => scrollTo('my-skills')}>Skills</Option> 
            <Option className='opt my-projects' onClick={(_) => scrollTo('my-projects')}>Projects</Option>
            <Option className='opt contact-me' onClick={(_) => scrollTo('contact-me')}>Contact</Option>
            <span className={`theme-btn ${theme}`} onClick={changeTheme}> { theme==='light' ? <BsMoonStars/> : <BsSun/> } </span>
        </Options>
    </Container>
  );
}

const Container = styled.div`
    background-color: ${props => props.theme ==='dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.5)'};
    position: fixed;                      // for keeping it on top of other elements
    right: 0; left: 0;                   // positioning...
    display: flex;                       // for aligning the title and options.
    align-items: center;                // for aligning the title and options vertically
    width: 100%;                       // making it full width
    padding: 1.25rem;                 // for padding
    color: ${props => props.theme==='dark' ? '#fff' : '#000'};                     // for color of options
    opacity: .9;                    // for making the background a little transparent
    backdrop-filter: blur(10px);   // for blurring the background
    z-index: 1;                   // to keep it on top of other elements
`;


const Title = styled.span`
    display: inline-block;          // to bring the title and options in one line
    cursor: pointer;
    font-size: 1.5em;               
    font-weight: 900;
    font-family: 'Sacramento', cursive;
    // hover effect...
    transition: color .8s ease-in-out;
    
    .left-arrow {
        color: #76b687;
        margin-right: .5em;
        // hover effect...
        transition: color .8s ease-in-out;
    }
    
    .right-arrow {
        color: #76b687;
        margin-left: .5em;
        // hover effect...
        transition: color .8s ease-in-out;
    }
    
    &:hover {
        color: #76b687;
        .left-arrow, .right-arrow { color: ${props => props.theme==='dark' ? '#fff' : '#000'}; }
    }
    
    @media(max-width: 830px) {
        margin-inline: auto;
    }
`;

const Heading = styled.div`
    overflow: hidden;
    white-space: nowrap;       
    position: relative;       
    letter-spacing: 1.5px;
    
    &::after{
        content: '';
        width: 10px;
        border-bottom: 5px solid #76b687;
        position: absolute;
        top: 78%;
        right: .5%;
        animation: blink .5s step-end infinite;
    }
    
    @keyframes slideIn {
        from{ width: 0%; }
        to{ width: 100%; }
    }

    @keyframes blink {
        from, to{border-color: transparent}
        50%{background-color: #76b687}
    }

    // handling it for smaller screens...
    @media(max-width: 830px) {
        display: block;
        margin-inline: auto;
    }
    `

const Options = styled.ul`
    font-weight: 500;
    font-size: 1.1em;
    position: absolute;
    right: 1.5rem;
    
    @media(max-width: 830px) {
        display: none;
        right: 0;
    }

    .is-active::after {
        width: 120%;   
        height: 100%;
        z-index: -1;
    }
    .is-active { 
        color: #000;
        opacity: 1;
    }
    
    .theme-btn{
        position: relative;
        top: 2.5px;
        cursor: pointer;
        font-size: 1em;
        &:hover{color: #76b687}
    }

    .dark{
        font-size: 1.25em;
        top: 5px;
    }
    .my-skills{ animation-delay: .5s; }
    .my-projects{ animation-delay: 1s; }
    .contact-me{ animation-delay: 1.5s; }    
`;

const Option = styled.li`
    display: inline;
    opacity: .45;
    margin-inline: 1em;
    cursor: pointer;
    // different font for options...
    font-family: 'Fira Code', monospace;
    // for after elements...
    position: relative;
    top: -100px;
    opacity: 0;
    transition: color 1s;
    &::after{
        content: '';
        width: 0px;
        height: 2px;
        background-color: #76b687;
        position: absolute;
        top: 0;
        left: -10%;
        transition: width 300ms, height 100ms 300ms;
    }
    
    &:hover::after {
        width: 120%;    // padding...
        height: 100%;
        z-index: -1;
    }
    
    &:hover { 
        color: #000;
        opacity: 1;
    }
    
    animation: bounce-in .5s ease forwards;
    @keyframes bounce-in {
        97% { top: 0; opacity: 0.7;}
        99% { top: 10px; opacity: 0.7;}
        100% { top: 0; opacity: 0.7;}
    }
    
`;