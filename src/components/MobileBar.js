import React, { useContext } from 'react'
import styled from 'styled-components';
import { RxPerson, RxCode, RxPaperPlane, RxMixerHorizontal } from "react-icons/rx";
import { BsMoonStars, BsSun } from "react-icons/bs";

import {ThemeContext} from './ThemeContext';

export const MobileBar = () => {
  
  const { theme, changeTheme } = useContext(ThemeContext)
  
  const scrollTo = (section) => {
      const component = document.getElementById(section);
    component.scrollIntoView({behavior: "smooth", block: "start"});
  }

  return (
    <Container theme={theme}>

        <MobileOptions theme={theme}>
            <MobileOption onClick={_ => scrollTo('about-me')}>
                <RxPerson/>
                <p>About</p>
            </MobileOption>

            <MobileOption onClick={_ => scrollTo('my-skills')}>
                <RxMixerHorizontal/>
                <p>Skills</p>
            </MobileOption>

            <MobileOption onClick={_ => scrollTo('my-projects')}>
                <RxCode/>
                <p>Projects</p>
            </MobileOption>

            <MobileOption onClick={_ => scrollTo('contact-me')}>
                <RxPaperPlane/>
                <p>Contact</p>
            </MobileOption>

            <MobileOption onClick={changeTheme}>
                { theme==='light' ? <BsMoonStars/> : <BsSun className='light-mode-opt'/> }
                <p>{theme==='dark' ? 'Light' : 'Dark'}</p>
            </MobileOption>
        </MobileOptions>

    </Container>
  )
}

const Container = styled.div`
    position: fixed;    // to make it floating in the middle of screen...
    width: 100%;
    bottom: 10%;        // positioning...
    display: none;      // for bigger screens...
    text-align: center;     // making the main bar centered...
    color: ${props => props.theme==='dark' ? 'white' : 'black'};
    z-index: 1;         // to bring the container little bit down on z index...

    // show it for mobile screens...
    @media (max-width: 830px) {
        display: block;
    }

    .light-mode-opt{
        font-size: 1.1em;
    }
`;

const MobileOptions = styled.div`
    // mainly to make things vertically centered...
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    background-color: ${props => props.theme==='dark' ? 'rgba(0, 0, 0, 0.6)' : 'rgba(255, 255, 255, 0.6)'};
    padding: .75rem 0em;
    box-shadow: 23px 23px 90px 1px rgba(0,0,0,.55);
    // making bg blur...
    backdrop-filter: blur(5px);
    margin: auto;

    @media screen {
        max-width: 80%;
    }

    @media (max-width: 360px) {
     max-width: 100%;
    }
`;

const MobileOption = styled.div`
    font-size: 1.45rem;
    cursor: pointer;
    
    p {
        font-size: .7em;
        margin: 0;
    }

    @media (max-width: 550px){
        font-size: 1em;
        padding-inline: 1em;
    }
`;