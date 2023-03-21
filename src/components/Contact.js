import { Title } from './Title';
import React from 'react'
import styled from 'styled-components'

export const Contact = () => {
  return (
    <Container className="container">
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
        color: rgba(255, 255, 255, 0.7);
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