import React from 'react'
import styled from 'styled-components'
import {Tooltip} from 'react-tooltip'
import Typewriter from 'typewriter-effect'
import { GiCoffeeMug } from "react-icons/gi";
import 'react-tooltip/dist/react-tooltip.css'

import CoverImage from '../assets/landing-image.jsx'

export const Landing = () => {
  console.log(window.innerWidth);  
  return (
    <Container>
        <IntroCard>
            <Hello>
                Hey
                <span id='wave'>👋🏻</span>, 
                <Tooltip 
                    anchorSelect='#wave' 
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        opacity: '0.6',
                        fontWeight: '400',
                        fontSize: '.9rem',
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
                        style={{
                            backgroundColor: "rgba(0, 0, 0, 0.2)",
                            opacity: '0.8',
                            fontSize: '.9rem',
                            cursor: "pointer",
                            marginTop: '1em'
                        }}
                        place='right'
                    >
                        Wanna grab one?
                    </Tooltip>
            </DetailedIntro>
            <CalltoAction>
                <Button inverted> Hire Me! </Button>
                <Button> Resume </Button>
            </CalltoAction>
        </IntroCard>

        <Cover>
            <CoverImage/>
        </Cover>
        
    </Container>
  )
}


const Container = styled.div`
    padding-block: 4em 10em;
    font-family: 'Jost', sans-serif;
    /* border: 2px solid blue; */
    color: white;
    width: 85%;
    margin-inline: auto;
    letter-spacing: .25em;
    display: flex;

    @media (max-width: 960px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;

const IntroCard = styled.div`
    /* border: 2px solid red; */
    width: 60%;
    padding: 10% 3%;
    min-width: 520px;

    @media (max-width: 960px) {
        order: 2;
        width: 80%;
        margin-inline: auto;
        padding: 0;
        text-align: center;
        min-width: 0px;
    }
`;

const Hello = styled.h2`
    span{
        opacity: .7;
        font-size: 1.5em;
        cursor: pointer;
        display: inline-block;
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
`;

const TypingIntro = styled.div`
    margin-top: .75em;
    opacity: .45;
    display: inline-block;
    white-space: nowrap;
    font-weight: 500;
    font-size: 1.2em;

    @media (max-width: 530px){
        white-space: normal;
        width: 80%;
        margin-inline: auto;
    }
`;

const DetailedIntro = styled.p`
    margin-top: 1em;
    opacity: .6;
    font-size: 1.10em;

    #coffee{
        position: relative;
        top: .15em;
    }
`;

const Cover = styled.div`
    width: 45%;
    min-width: 520px;
    padding: 2em 0 0 1em;
    /* border: 2px solid red; */
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
    padding: 2rem 0;
    /* border: 2px solid red; */
    @media (max-width: 960px) {
        /* display: flex;
        justify-content: space-around;
        flex-wrap: wrap; */
    }
`;

const Button = styled.button`
    font-size: 1.15em;
    border-radius: 5px;
    background-color: ${props => props.inverted ? "#76b687": "transparent"};
    border: 2px solid #76b687;
    outline: none;
    color: ${props => props.inverted ? "black": "white"};
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
        color: ${props => props.inverted ? "white": "black"};
    }

`;