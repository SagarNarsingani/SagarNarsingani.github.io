import React from 'react'
import styled from 'styled-components'
import {Tooltip} from 'react-tooltip'
import Typewriter from 'typewriter-effect'
import { GiCoffeeMug } from "react-icons/gi";
import 'react-tooltip/dist/react-tooltip.css'

import CoverImage from '../assets/landing-image.jsx'

export const Landing = () => {
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
        </IntroCard>

        <Cover>
            <CoverImage/>
        </Cover>
        
    </Container>
  )
}


const Container = styled.div`
    padding: 4em 1em 0;
    font-family: 'Jost', sans-serif;
    color: white;
    width: 90%;
    margin-inline: auto;
    letter-spacing: .25em;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    /* border: 2px solid red;     */
`;

const IntroCard = styled.div`
    width: 60%;
    /* border: 2px solid red; */
    padding: 7.5em 2em;
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
            10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
            20% { transform: rotate(-8.0deg) }
            30% { transform: rotate(14.0deg) }
            40% { transform: rotate(-4.0deg) }
            50% { transform: rotate(10.0deg) }
            60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
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
`;

const DetailedIntro = styled.p`
    margin-top: 1em;
    opacity: .6;
    font-size: 1.10em;

    #coffee{
        position: relative;
        top: .15em;
        /* left: 5em; */
    }
`;

const Cover = styled.div`
    width: 45%;
    align-self: center;
    /* border: 2px solid red; */
    margin-top: 2em;
`;