import { useContext } from "react";
import styled from "styled-components"
import { ThemeContext } from "./ThemeContext";

export const EmailBar = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <Container theme={theme}>
        <ul>
            <li>
                <a href="mailto:narsinganisagarh@gmail.com">
                    narsinganisagarh@gmail.com
                </a>
            </li>
        </ul>
    </Container>
  )
}


const Container = styled.div`
    position: fixed;              // to stick email bar at fixed position
    // positioning...
    top: 0;                      
    right: 1em;               

    transform: rotate(180deg);    // To rotate the line.

    // just handling it for mobile screens
    @media (max-width: 780px) {
      display: none;
    }

    ul{
      list-style-type: none;  // removing dots that come before li elements.
      color: ${props => props.theme==='dark' ? 'white' : 'black'};           
      padding: 1.33em;    // to make it equally far from the boundary as Social Bar.
      padding-bottom: 0;  // don't want it in the bottom.
      position: relative; // for after element.
      width: 0;           // just to handle chaos...😬
    }

    a{  
        // removing default link styling...
        text-decoration: none;
        text-decoration-skip-ink: auto;

        // whatever parent's(li) color is...
        color: inherit;
    }

    // for the line before email id...
    ul::after{
        content: "";
        background-color: ${props => props.theme==='dark' ? 'white' : 'black'};
        display: block;
        width: 1px;
        height: 10em;
        opacity: .7;
        // positioning...
        top: 0;
        right: 10em;
        left: 0;
        // make it centered...
        margin-inline: auto;
    }

    li{
      margin-bottom: 1em; // gap between line and email
      // different font for email...
      font-family: 'Fira Code', monospace;
      opacity: .7;
      transform: rotate(-90deg); // rotate the email...
      cursor: pointer;

      // for hover effect...
      position: relative;
      top: 0;
      transition: top ease 0.5s, color ease 0.5s;

      &:hover{
          color: #76b687;
          opacity: 1;
          top: -10px;
      }
    }
`;
