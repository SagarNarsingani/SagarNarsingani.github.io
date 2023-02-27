import React from 'react'
import styled from 'styled-components'

export const Navbar = () => {
  return (
    <Conrainer>
        <Title>
            <Heading>
                <span className="left-arrow"> &lt;</span> 
                    Sagar Narsingani 
                <span className="right-arrow">&gt; </span>
            </Heading>
        </Title>
        <Options>
            <Option>About</Option>
            <Option>Projects</Option>
            <Option>Skills</Option>
            <Option>Contact</Option>
        </Options>
    </Conrainer>
  );
}

const Conrainer = styled.div`
    background-color: #363746;             // for background color
    position: fixed;                      // for keeping it on top of other elements
    display: flex;                       // for aligning the title and options.
    align-items: center;                // for aligning the title and options vertically
    width: 100%;                       // making it full width
    padding: 1.25rem;                 // for padding
    color: #fff;                     // for color of options
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
    transition: color .8s ease-in-out;
    
    .left-arrow {
        color: #33aa29;
        margin-right: .5em;
        transition: color .8s ease-in-out;
    }
    
    .right-arrow {
        color: #33aa29;
        margin-left: .5em;
        transition: color .8s ease-in-out;
    }
    
    &:hover {
        color: #33aa29;
        .left-arrow, .right-arrow { color: #fff; }
    }
    
    @media(max-width: 830px) {
        margin-inline: auto;
    }
`;

const Heading = styled.div`
    overflow: hidden;
    white-space: nowrap;           // for the text to be in one line
    position: relative;         // for the after element to be positioned relative to the parent
    letter-spacing: 1.5px;
    justify-items: center;
    animation: slideIn 3.5s steps(40, end);
    
    // for the blinking cursor
    &::after{
        content: '';
        width: 10px;
        position: absolute;
        border-bottom: 5px solid #33aa29;
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
        50%{background-color: #33aa29}
    }
`

const Options = styled.ul`
    font-weight: 500;
    font-size: 1.1em;
    position: absolute;     // needed to shift the options to the right.
    right: 5rem;

    @media(max-width: 830px) {
        display: none;
    }
`;

const Option = styled.li`
    display: inline;
    margin-inline: 1em;
    cursor: pointer;
    position: relative;
    transition: color 1s;

    &::after{
        content: '';
        width: 0px;
        height: 2px;
        background-color: #33aa29;
        position: absolute;
        top: 0;
        left: -10%;
        transition: width 300ms, height 100ms 300ms;
    }
    
    &:hover::after {
        width: 120%;
        height: 100%;
        z-index: -1;
    }

    &:hover { color: #000; }
`;