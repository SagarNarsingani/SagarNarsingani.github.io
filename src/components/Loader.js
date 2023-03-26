import React from 'react'
import styled from 'styled-components'

export const Loader = () => {
  return (
    <Component>
        <div>
            <span className="left-arrow"> &lt;</span> 
                Sagar Narsingani 
            <span className="right-arrow">&gt; </span>
        </div>
    </Component>
  )
}


const Component = styled.div`
    height: 100%;
    width: 100%;
    z-index: 10;
    color: #fff;
    line-height: 100vh;
    position: absolute;
    text-align: center;
    background-color: black;

    font-size: 2em;     
    font-weight: 900;
    font-family: 'Sacramento', cursive;
    animation: slide-up-loader 1s 3.25s ease-in forwards;
    
    .left-arrow {
        color: #76b687;
        margin-right: .5em;
    }
    
    .right-arrow {
        color: #76b687;
        margin-left: .5em;
    }

    @keyframes slide-up-loader {
        0%{top: 0;}
        100%{ top: -100%; display: none;}
    }

    div{
        overflow: hidden;
        white-space: nowrap;         
        position: relative; 
        letter-spacing: 1.5px;
        animation: slideIn 3s steps(40, end) forwards;
        display: block;
        margin-inline: auto;
        
        &::after{
            content: '';
            width: 10px;
            border-bottom: 5px solid #76b687;
            position: absolute;
            top: 51.5%;
            right: 1%;
            animation: blink .5s step-end infinite;
        }

        @keyframes slideIn {
            from{ width: 0%; }
            to{ width: 300px; }
        }

        @keyframes blink {
            from, to{border-color: transparent}
            50%{background-color: #76b687}
        }
    }
`;