import styled from "styled-components"
import { BiRightArrow } from "react-icons/bi";
import { Title } from "./Title";

export const About = () => {
  return (
    <Container className='container' id="about-me">
        <Title title='About Me'/>
        <div className="details">
            <div className="image">
                <img
                    src={'/profile.jpg'}
                    alt={'profile'}
                />
            </div>
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
        </div>
    </Container>
  )
}


const Container = styled.div`

    .about{
        font-size: 1.175em;
        letter-spacing: normal;
        width: 55%;
        color: rgba(255, 255, 255, 0.7);
        opacity: .7;
        p{margin-bottom: .75em;}
        display: inline-block;

        @media (max-width: 960px) {
            width: 100%;
        }

        @media (max-width: 500px) {
           text-align: justify;
           font-size: .9em;
        }
    }

    .education{
        h4{
            font-weight: 500;
            color: #76b687;
        }

        @media (max-width: 960px) {
            margin-left: 1.75em;
        }

        @media (max-width: 600px) {
            margin-left: 0;
        }

        @media (max-width: 500px) {
            text-align: left;
            font-size: .8em;
        }

        span{ 
            font-size: 0.85em; 
            @media screen {
                font-size: .75em;
            }

        }
        .education-li{ 
            margin-bottom: 1em; 
            ul{ margin-top: .5em; }
        }
    }

    .details{
        padding: 1em;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .image{
        border-radius: 10px;
        margin-top: 2.5em;
        margin-left: 2em;
        contain: content;
        height: 225px;

        @media (max-width: 960px) {
            display: block;
            margin-bottom: 2em;
            margin-inline: auto;
            margin-top: 1em;
        }
    }
`;