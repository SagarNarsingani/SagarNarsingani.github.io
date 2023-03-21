import styled from "styled-components"
import { ProjectCard } from "./ProjectCard"
import { Title } from "./Title";
import projects from '../assets/project_data.json'

export const Projects = () => {
  return (
    <Container className="container">
    <Title title={"Projects"}/>
        <div className="projects">
            {projects.map(project => <ProjectCard project={project}/>)}
        </div>    
    </Container>
  )
}

const Container = styled.div`
    
    .projects{
        display: grid;
        justify-content: center;
        margin-top: 3em;
        gap: 2em;
        grid-auto-flow: column;
        @media (max-width: 1660px) {
            grid-auto-flow: row;
            grid-template-columns: repeat(2, 1fr);
        }
        
        @media (max-width: 850px) {
            grid-auto-flow: row;
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;
