import React, { Component } from 'react'
import { Header } from '../components/index'
import styled from 'styled-components'
import { HomeSection, AboutMe, Services, Skills, ContactForm, Projects } from '../sections/index'


const ContentWrapper = styled.div`
    border: 1px solid black; 
    transition: 0.5s; 
    width: fit-content;
`

interface Props { flexDirection?: string, background?: string, minWidth700?: { flexDirection: string } }
const SectionWrapper = styled.section`
    padding: 60px 0;             
    clear: both;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction:  ${(props: Props) => props.flexDirection || 'row'};
    background: ${(props: Props) => props.background || 'white'} ;
    @media screen and (max-width: 768px) {
        flex-direction: ${(props: Props) => props.minWidth700 && props.minWidth700.flexDirection};
        justify-content: center;
        align-items: center;
        }
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

                    <SectionWrapper id="about" minWidth700={{ flexDirection: 'column' }}>
                        <AboutMe />
                    </SectionWrapper>
                    <SectionWrapper id="services" flexDirection={'column'} background={'#f0f0f0'}>
                        <Services />
                    </SectionWrapper>
                    <SectionWrapper id="skills" flexDirection={'column'}>
                        <Skills />
                    </SectionWrapper>
                    <SectionWrapper id="projects" flexDirection={'column'}>
                        <Projects />
                    </SectionWrapper>
                    <SectionWrapper id="contact">
                        <ContactForm />
                    </SectionWrapper>
                </ContentWrapper>
            </React.Fragment>
        )
    }
}

export { Home }