import React, { Component } from 'react'
import { Header } from '../components/index'
import styled from 'styled-components'
import { HomeSection, AboutMe } from '../sections/index'

const ContentWrapper = styled.div`
    border: 1px solid black; 
    transition: 0.5s; 
`
const SectionWrapper = styled.section`
    padding-top: 4em; 
    clear: both;
    width: 100%;
    display: block;
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
                    <SectionWrapper id="services">
                        services
                    </SectionWrapper>
                    <SectionWrapper id="skills">
                        skills
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