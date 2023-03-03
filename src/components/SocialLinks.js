import styled from "styled-components"
import { SiLinkedin, SiGithub, SiInstagram, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

export const SocialLinks = () => {
  return (
    <Container>
        <ul>
            <li>
              <a target={"_blank"} href="https://linkedin.com/in/sagarnarsingani"><SiLinkedin/></a>
            </li>
            <li>
              <a target={"_blank"} href="https://github.com/SHNarsingani24"><SiGithub/></a>
            </li>
            <li>
              <a target={"_blank"} href="https://leetcode.com/aquacode_/"><SiLeetcode/></a>
            </li>
            <li>
              <a target={"_blank"} href="https://auth.geeksforgeeks.org/user/narsinganisagarh/"><SiGeeksforgeeks/></a>
            </li>
            <li>
              <a target={"_blank"} href="https://www.instagram.com/sagar24hn/"><SiInstagram/></a>
            </li>
        </ul>
    </Container>
  )
}


const Container = styled.div`
  position: fixed;
  display: inline-block;
  bottom: 0;
  left: 1em;

  @media (max-width: 780px) {
    display: none;
  }
  ul{
    display: inline-block;
    list-style-type: none;
    color: white;
    /* border: 2px solid red; */
    padding: 1em;
    padding-bottom: 0;
    position: relative;
  }

  ul::after{
    content: "";
    background-color: rgba(255, 255, 255, 1);
    opacity: .7;
    display: block;
    width: 1px;
    height: 11em;
    top: 0;
    right: 10em;
    margin-inline: auto;
  }
  
  a{
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
  }

  li{
    opacity: .7;
    padding-bottom: .9em;
    cursor: pointer;
    font-size: 1.25em;
    position: relative;
    top: 0;
    transition: top ease 0.5s, color ease 0.5s;

    &:hover{
      opacity: 1;
      top: -10px;
      color: #76b687;
    }
  }
`;
