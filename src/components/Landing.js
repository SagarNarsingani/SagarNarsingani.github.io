import React, { useContext } from 'react'
import styled from 'styled-components'
import {Tooltip} from 'react-tooltip'
import Typewriter from 'typewriter-effect'
import { GiCoffeeMug } from "react-icons/gi";
import 'react-tooltip/dist/react-tooltip.css'

import CoverImage from '../assets/landing-image.jsx'
import { ThemeContext } from './ThemeContext.js';


export const Landing = () => {
  
  const {theme} = useContext(ThemeContext); 
  return (
    <Container className='container'>
        <IntroCard>
            <Hello>
                Hey
                <span id='wave'>👋🏻</span>, 
                <Tooltip 
                    anchorSelect='#wave' 
                    className='tooltip'
                    style={{
                        backgroundColor: theme==='dark' ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 1)",
                        opacity: '0.6',
                        fontWeight: '400',
                        fontSize: '.6em',
                        cursor: "pointer"
                    }}
                >
                    Wave Back?
                </Tooltip>
                My Name is
            </Hello>
            <Name>Sagar Narsingani.</Name>
            <TypingIntro>
                <span>I </span>
                <Typewriter 
                    options={{
                        strings: ["Think!", "Code!", "Develop things for the web🙂"],
                        autoStart: true,
                        loop: true,
                        cursor:'',
                        wrapperClassName: 'typewriter',
                        cursorClassName: 'typewriter_cursor'
                    }}
                />
            </TypingIntro>
            <DetailedIntro>
                    I am an aspiring Software Developer. 
                    I constantly learn and develop new things related to web.
                    You will often find me solving coding problems, with cup of coffee 
                    
                    <GiCoffeeMug id='coffee' style={{cursor: 'pointer'}}/>
                    <Tooltip 
                        anchorSelect='#coffee' 
                        className='tooltip'
                        style={{
                            backgroundColor: theme==='dark' ? "rgba(0, 0, 0, 0.2)" : "rgba(0, 0, 0, 1)",
                            opacity: '0.8',
                            fontSize: '.75em',
                            cursor: "pointer",
                            position:'float',
                            marginTop: '1em'
                        }}
                        place='right'
                    >
                        Wanna grab one?
                    </Tooltip>
            </DetailedIntro>
            <CalltoAction>
                <Button inverted theme={theme}> Hire Me! </Button>
                <Button theme={theme}> Resume </Button>
            </CalltoAction>
        </IntroCard>

        <Cover>
            <CoverImage/>
        </Cover>
        
    </Container>
  )
}


const Container = styled.div`
    display: flex;
    align-items: center;
    // for smaller screens...
    @media (max-width: 960px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;

const IntroCard = styled.div`
    width: 60%;
    padding: 10% 3%;

    @media (max-width: 960px) {
        order: 2;   // will change the order of the element in smaller screens...
        width: 80%;
        margin-inline: auto;
        padding: 0;
        text-align: center;
        min-width: 0px;
    }

   
`;

const Hello = styled.h2`
    animation: slide-up .5s ease forwards .2s;
    opacity: 0;
    transform: translateY(10%);

    @keyframes slide-up {
        0%{}
        100%{
            transform: translateY(-10%);
            opacity: 1;
        }
    }
    // when screens are smaller.
    @media (max-width: 1145px) { font-size: 1.25em; }
    @media (max-width: 568px) { font-size: 1em; }
    span{
        opacity: .7;
        font-size: 1.5em;
        cursor: pointer;
        display: inline-block;
        // waving...👋🏻
        animation: wave 2.5s ease-in-out 1s infinite;
        transform-origin: 70% 70%;
        
        @keyframes wave {
            0% { transform: rotate( 0.0deg) }
            10% { transform: rotate(14.0deg) }  
            20% { transform: rotate(-8.0deg) }
            30% { transform: rotate(14.0deg) }
            40% { transform: rotate(-4.0deg) }
            50% { transform: rotate(10.0deg) }
            60% { transform: rotate( 0.0deg) } 
            100% { transform: rotate( 0.0deg) }
        }
        
    }
`;

const Name = styled.h1`
    font-size: 3em;
    word-spacing: .1em;
    transform: translateY(10%);
    opacity: 0;
    
    animation: slide-up-name 1s ease forwards 1s; 
    
    @keyframes slide-up-name {
        from{}
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

    @media (max-width: 1145px) { 
        font-size: 2em; 
    }  

    @media (max-width: 568px) { 
        font-size: 1.5em; 
    }   
`;

const TypingIntro = styled.div`
    margin-top: .75em;
    opacity: .45;
    white-space: nowrap;    // to bring it on single line...
    font-weight: 500;
    font-size: 1em;

    transform: translateY(10%);
    opacity: 0;
    
    animation: slide-up-typing 1s ease forwards 2s; 
    
    @keyframes slide-up-typing {
        from{}
        to{
            transform: translateY(0);
            opacity: .45;
        }
    }
    
    .Typewriter{
        display: inline-block;
        position: relative;
    }
    
    .typewriter_cursor::after{
        content: '';
        width: 10px;
        position: absolute;
        border-bottom: 5px solid #76b687;
        top: 78%;
        animation: blink .5s step-end infinite;
    }
    
    @keyframes blink {
        from, to{border-color: transparent}
        50%{background-color: #33aa29}
    }

    @media (max-width: 568px) { 
        font-size: .75em; 
    }
    
    @media (max-width: 440px) { 
        font-size: .55em; 
    }
    
    @media (max-width: 530px){
        white-space: normal;
        width: 80%;
        margin-inline: auto;
    }
    `;

const DetailedIntro = styled.div`
    margin-block: 1em;
    opacity: .6;

    transform: translateY(10%);
    opacity: 0;
    
    animation: slide-up-intro 1s ease forwards 2s; 
    
    @keyframes slide-up-intro {
        from{}
        to{
            transform: translateY(0);
            opacity: .45;
        }
    }
    
    @media (max-width: 1145px) { 
        font-size: .9em; 
    }

    @media (max-width: 568px) { 
        font-size: .75em; 
    }
    
    #coffee{
        position: relative;
        top: .15em;
    }
    `;

const Cover = styled.div`
    width: 520px;
    padding-inline-start: 1em;
    @media(max-width: 960px){
        order: 1;
        margin-inline: auto;
        min-width: 360px;
        padding-inline: 1em;
    }

    @media(max-width: 420px) { 
        min-width: 240px; 
    }
    `;

const CalltoAction = styled.div`
    padding: .75rem 0;

    transform: translateX(-30%);
    opacity: 0;
    
    animation: slide-up-action 1s ease forwards 2s; 
    
    @keyframes slide-up-action {
        from{}
        to{
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

const Button = styled.button`
    font-size: 1.15em;
    border-radius: 5px;
    background-color: ${props => props.inverted ? "#76b687": "transparent"};
    border: 2px solid #76b687;
    outline: none;
    color: ${props => 
        props.inverted ? 
        (props.theme==='dark' ? "black" : "white"): 
        (props.theme==='dark' ? "white" : "black")
    };
    cursor: pointer;
    padding: .7rem 2rem;
    font-weight: 500;
    margin-right: 1.75rem;
    letter-spacing: .075em;
    transition: all 1s;
    
    @media (max-width: 960px) {
        margin-inline-start: 1em;
        margin-inline-end: 1em;
    }

    @media (max-width: 509px){
        display: inline-block;
        margin-top: 1em;
        margin-inline: center;
    }
    &:hover{
        background-color: ${props => props.inverted ? "transparent": "#76b687"};
        color: ${ props => 
            props.inverted ? 
            (props.theme==='dark' ? "white" : "black"): 
            (props.theme==='dark' ? "black" : "white")
        };
    }
`;