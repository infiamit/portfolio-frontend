import React from 'react'
import { Header } from '../components/index'
import styled from 'styled-components'
import { HomeSection, AboutMe, Services, Skills, ContactForm, Projects } from '../sections/index'

import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";

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

const PORTFOLIO_META = gql`
    query portfolioMeta{
      portfolioMeta{
        metaKey
        metaValue
        metaType
      }
    }
`


function Home() {



    const { loading, data } = useQuery(PORTFOLIO_META);

    if (loading) {
        return <h3>Loading . . . .</h3>
    }

    return (
        <React.Fragment>
            <Header />
            <ContentWrapper >
                <SectionWrapper id="home">
                    <HomeSection data={data.portfolioMeta.filter(item => item.metaKey === 'HomeSection')[0].metaValue} />
                </SectionWrapper>

                <SectionWrapper id="about" minWidth700={{ flexDirection: 'column' }}>
                    <AboutMe data={data.portfolioMeta.filter(item => item.metaKey === 'AboutMe')[0].metaValue} />
                </SectionWrapper>
                <SectionWrapper id="services" flexDirection={'column'} background={'#f0f0f0'}>
                    <Services data={data.portfolioMeta.filter(item => item.metaKey === 'Services')[0].metaValue} />
                </SectionWrapper>
                <SectionWrapper id="skills" flexDirection={'column'} >
                    <Skills data={data.portfolioMeta.filter(item => item.metaKey === 'Skills')[0].metaValue} />
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

export { Home }