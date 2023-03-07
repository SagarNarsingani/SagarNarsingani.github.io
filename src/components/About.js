import styled from "styled-components"
import { RoughNotation } from "react-rough-notation";
import { BiRightArrow } from "react-icons/bi";

export const About = () => {
  return (
    <Container>
        <div className="title">
            <RoughNotation 
                type="underline" 
                show={true} 
                iterations={2}
                strokeWidth={2}
                color={"#76b687"}
            >
                <h1>About Me</h1>
            </RoughNotation>
        </div>

        <div className="about">
            <p>
                My name is Sagar Narsingani. I am Computer Science graduate (2023). 
                I have interest in Problem Solving, Web Development & Software Development. 
                I compiled my first programm back in 2019 (the first year of my graduation).
                In next four years, I have learnt many things related to Computer Science. 
                From complete beginner to the pro level, From HTML level to Machine Learning, 
                the journey so far has been full with lot of learnings.
            </p>
            <br/>
            <p>
                Currently, I am working on Human Identification using Gait Recognition as my final year project.
                I am also working on some personal side projects, to help myself grow more. I am working on making myself
                better every single day.
            </p>
            <br/>
            <p> Here is my educational background: </p>
            <br/>
            <ul className="education">
                <li>
                    <h4>Computer Science & Engineering</h4>
                    <span>Pandit Deendayal Energy University | (2019 - 2023)</span>
                    <ul>
                        <li><BiRightArrow className="bullet"/> Studied Computer fundamentals like programming, DBMS, OS, etc.</li>
                        <li><BiRightArrow className="bullet"/> Got 9.79 CGPA out of 10.</li>
                        <li><BiRightArrow className="bullet"/> Got Merit Cum Means(MCM) Scholarship.</li>
                    </ul>
                </li>
            </ul>
        </div>

    </Container>
  )
}


const Container = styled.div`
    /* border: 2px solid red; */
    width: 85%;
    letter-spacing: .25em;
    margin-inline: auto;
    padding-block: 3em;
    color: white;

    .title{
        width: fit-content;
        padding: 1em;
    
        h1{
            font-size: 1.6em;
            font-weight: 500;
        }
    }

    .about{
        padding: 1em;
        font-size: 1.175em;
        /* border: 2px solid red; */
        letter-spacing: normal;
        width: 50%;
        color: rgba(255, 255, 255, 0.7);
        opacity: .7;
    }

    .education{
        list-style: none;

        h4{
            font-weight: 500;
            color: #76b687;
        }

        span{
            font-size: 0.85em;
        }

        ul {
            list-style: none;
        }

        .bullet{
            color: #76b687;
            font-size: .6em;
            margin-bottom: .15em;
        }
    }
`;