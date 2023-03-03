import styled from "styled-components"

export const EmailBar = () => {
  return (
    <Container>
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
    position: fixed;
    display: inline-block;
    top: 0;
    right: 1em;
    transform: rotate(180deg);

    @media (max-width: 780px) {
      display: none;
    }

    ul{
      display: inline-block;
      list-style-type: none;
      color: white;
      padding: 1.33em;
      padding-bottom: 0;
      position: relative;
      /* border: 2px solid red; */
      width: 0;
    }

    a{
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
    }
    ul::after{
        content: "";
        background-color: rgba(255, 255, 255, 1);
        display: block;
        width: 1px;
        height: 10em;
        opacity: .7;
        top: 0;
        right: 10em;
        left: 0;
        margin-inline: auto;
    }

    li{
      margin-bottom: 1em;
      opacity: .7;
      transform: rotate(-90deg);
      cursor: pointer;
      position: relative;
      top: 0;
      /* width: 0; */
      transition: top ease 0.5s, color ease 0.5s;

      &:hover{
          color: #76b687;
          opacity: 1;
          top: -10px;
      }
    }
`;
