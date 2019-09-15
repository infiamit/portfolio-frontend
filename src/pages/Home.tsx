import React, { Component } from 'react'
import { Sidebar, Carousel } from '../components/index'
import styled from 'styled-components'

const ContentWrapper = styled.div`
    border: 1px solid black;
    float: right;
    width: calc(100% - 360px);
    transition: 0.5s;
    @media screen and (max-width: 700px) {
    width: 100%;
    }
`
const SectionWrapper = styled.section`
    padding-top: 4em;
    padding-bottom: 9em;
    clear: both;
    width: 100%;
    display: block;
`;

const data = [{ imageUrl: 'https://qphs.fs.quoracdn.net/main-thumb-120376262-200-ulpxeisgsnphirquzwtnroydmdxolbba.jpeg', description: "i am a web developer", title: 'web developer' },
{ imageUrl: "https://pbs.twimg.com/profile_images/1024950012164243462/G2BfNQNB_400x400.jpg", description: "i am a web developer", title: 'web developer' }
]
class Home extends Component {

    render() {
        return (
            <React.Fragment>
                <Sidebar />
                <ContentWrapper >
                    <SectionWrapper id="home">
                        <Carousel data={data} />
                    </SectionWrapper>
                    <SectionWrapper id="about">
                        about
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