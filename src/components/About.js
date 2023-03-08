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
        <div className="details">
            <div className="about">
                <p>
                    My name is Sagar Narsingani, and I am currently pursuing a degree in Computer Science (almost complete 🙂). 
                    I have a keen interest in Problem Solving, Web Development, and Software Development, and have been learning about these topics for the past four years.
                    Although I am not yet an expert, I have gained a solid foundation in various areas of computer science, 
                    starting from my first program in 2019 to more advanced topics like Machine Learning.
                </p>
                
                <p>
                    As part of my final year project, I am currently exploring Human Identification using Gait Recognition, 
                    and I am also working on personal projects to further enhance my skills. 
                    I am committed to continuous learning and improvement, 
                    and am excited to see where my journey in the field of computer science will take me.
                </p>
                
                <p> Here is my educational background: </p>
                
                <ul className="education">
                    <li className="education-li">
                        <h4>Computer Science & Engineering</h4>
                        <span>Pandit Deendayal Energy University | (2019 - 2023)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Computer fundamentals like programming, DBMS, OS, etc.</li>
                            <li><BiRightArrow className="bullet"/> Got 9.79 CGPA out of 10.</li>
                            <li><BiRightArrow className="bullet"/> Got Merit Cum Means(MCM) Scholarship.</li>
                        </ul>
                    </li>
                    <li className="education-li">
                        <h4>Higher Secondary Eduction</h4>
                        <span>Gujarat Secondary and Higher Secondary Education Board | (2017 - 2019)</span>
                        <ul>
                            <li><BiRightArrow className="bullet"/> Studied Physics, Maths and Chemistry.</li>
                            <li><BiRightArrow className="bullet"/> Scored 89% in the board examination.</li>
                            <li><BiRightArrow className="bullet"/> Got the 1st Rank in Aravalli District.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="image">
                Image
            </div>
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
        p{margin-bottom: .75em;}
        display: inline-block;
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

        .education-li{
            margin-bottom: 1em;
        }

        .bullet{
            color: #76b687;
            font-size: .6em;
            margin-bottom: .15em;
        }
    }

    .details{
        display: flex;
        justify-content: space-around;
    }
    .image{
        border-radius: 5px;
        align-self: center;
        background-color: rgba(0, 0, 0, .5);
        line-height: 320px;
        text-align: center;
        color: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
        height: 320px;
        width: 300px;
    }
`;