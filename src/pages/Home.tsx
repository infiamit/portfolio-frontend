import React, { Component } from 'react'
import { Header } from '../components/index'
import styled from 'styled-components'
import { HomeSection, AboutMe, Services, Skills } from '../sections/index'


const ContentWrapper = styled.div`
    border: 1px solid black; 
    transition: 0.5s; 
`

interface Props { flexDirection?: string }
const SectionWrapper = styled.section`
    padding-top: 4em; 
    clear: both;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction:  ${(props: Props) => props.flexDirection || 'row'};
`;


class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <ContentWrapper >
                    <SectionWrapper id="home">
                        <HomeSection />
                    </SectionWrapper>

                    <SectionWrapper id="about">
                        <AboutMe />
                    </SectionWrapper>
                    <SectionWrapper id="services" flexDirection={'column'}>
                        <Services />
                    </SectionWrapper>
                    <SectionWrapper id="skills">
                        <Skills />
                    </SectionWrapper>
                    <SectionWrapper id="education">
                        education
                    </SectionWrapper>
                    <SectionWrapper id="experience">
                        experience
                    </SectionWrapper>
                    <SectionWrapper id="work">
                        work
                    </SectionWrapper>
                    <SectionWrapper id="blog">
                        blog
                    </SectionWrapper>
                    <SectionWrapper id="contact">
                        contact
                    </SectionWrapper>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

export { Home }