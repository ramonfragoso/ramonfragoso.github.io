import React from 'react';
import { Container, StyledProject, ImageContainer, Image, Item, Github, Url, Year } from './styles';
import styled from 'styled-components';
import zanky from '../../../images/zanky.png';
import pre from '../../../images/pre.png';
import pg from '../../../images/pg.png';

const projects = [
    {
        src: pre,
        description: "This was my first React project, made for a college class. The objective was to the college director to manage the number of openings for classes before the period starts.",
        github: "https://github.com/ramonfragoso/sistema-de-pre-matricula",
        url: "http://prematricula-ufcg.surge.sh/",
        year: 2018,
    },
    {
        src: pg,
        description: "This website was made in an anti-corruption themed Hackathon, and it has the objective to show the data acquired for the app built during the hackathon.",
        github: "https://github.com/ramonfragoso/politicosGoSite",
        url: "https://politicosgo.surge.sh/",
        year: 2018,
    },    
    {
        src: zanky,
        description: "This project was a 'youtube like' website, but for anime. It was made in React, for the Software Engineer class in college. The website backend is currently deactivated, that is why there is no content.",
        github: "https://github.com/viniciuslacerda0/Frontend-Es",
        url: "http://zanky.surge.sh/",
        year: 2018,
    },
]
const Personal = () => {

    return (
        <Container>
            {projects.map(project => 
                <Project 
                key={project.github}
                src={project.src}
                description={project.description}
                github={project.github}
                url={project.url}
                year={project.year}
                />
            )}
        </Container>
    )
}

const Project = ({src, description, github, url, year}) => {
    return (
        <StyledProject>
            <ImageContainer>
                <Image src={src} onClick={() => window.open(github, '_blank')}/>
            </ImageContainer>
            <Item>
                {description}
            </Item>
            <Item>
                Github: <a target="_blank" href={github}>{github}</a>
            </Item>
            {url ? 
            <Item>
                Link: <a target="_blank" href={url}>{url}</a>
            </Item> 
            : null}
            <Item>
                Year: {year}
            </Item>
        </StyledProject>
    )
}

export default Personal;