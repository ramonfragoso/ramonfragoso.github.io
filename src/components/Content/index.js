import React from 'react';
import { StyledContent, Title, CheckTitle, WorkTitle, WorkTitleContainer, Line, Emoji } from './styles';
import Personal from './Personal';
import styled from 'styled-components';

const Container = styled.div`
    padding-left: 10%;
    @media (max-width: 800px) {
        padding: 5%;
    }
`;

const Content = () => {

    const onClick = () => {
        window.document.getElementById('personal').scrollIntoView({behavior: "smooth"});
    }

    return (
        <Container>
            <StyledContent>
                <CheckTitle >
                    Check my 
                    <WorkTitleContainer onClick={onClick}>
                        <WorkTitle>work</WorkTitle>
                    </WorkTitleContainer>
                </CheckTitle>
                <Emoji onClick={onClick}>&#128071;</Emoji>
            </StyledContent>
            <Title id='personal'>
                Personal Projects
                <Line/>
            </Title>
            <Personal/>
        </Container>
    )
}

export default Content;