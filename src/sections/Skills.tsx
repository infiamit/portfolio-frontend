import React from 'react'
import { Bar } from '../components/index'
import styled from 'styled-components'


interface SkillsProps { data?: any }

const backupData = {
    description: "Below are my skills that I am currently familiar with and also improving them every day with my day to day experience. I am always open to learn new technologies are will be happy to learn and add them below.",
    skills: [
        { "maxFill": 80, "color": "#2c98f0", "height": "10px", "text": "HTML" },
        { "maxFill": 70, "color": "#ec5453", "height": "10px", "text": "CSS" },
        { "maxFill": 90, "color": "#f9bf3f", "height": "10px", "text": "JAVASCRIPT" },
        { "maxFill": 90, "color": "#a84cb8", "height": "10px", "text": "NODE.JS" },
        { "maxFill": 80, "color": "#2fa499", "height": "10px", "text": "REACT.JS" },
        { "maxFill": 90, "color": "#2c98f0", "height": "10px", "text": "TYPESCRIPT" },
        { "maxFill": 90, "color": "#ec5453", "height": "10px", "text": "EXPRESS.JS" },
        { "maxFill": 75, "color": "#f9bf3f", "height": "10px", "text": "LOOPBACK.JS" },
        { "maxFill": 75, "color": "#a84cb8", "height": "10px", "text": "KOTLIN" },
        { "maxFill": 90, "color": "#2fa499", "height": "10px", "text": "GRAPHQL" },
        { "maxFill": 90, "color": "#a84cb8", "height": "10px", "text": "POSTGRES" },
        { "maxFill": 90, "color": "#2fa499", "height": "10px", "text": "MYSQL" },
        { "maxFill": 85, "color": "#ec5453", "height": "10px", "text": "MONGODB" },
    ]
}

const BarWrapper = styled.div`
        display: flex ;
        flex-wrap: wrap; 
        justify-content:space-around;
`
const StyledH3Wrapper = styled.h3`
   font-size: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #252525;
    margin: 10px 0 10px 0;
`
const Container = styled.div`
        display: flex ;
        flex-wrap: wrap; 
        justify-content: center;
`

class Skills extends React.Component<SkillsProps> {


    render() {
        const { data } = this.props
        return (
            <>
                <StyledH3Wrapper>
                    MY SKILLS
            </StyledH3Wrapper>
                <Container>
                    <p style={{ maxWidth: '80%' }}>  {(data || backupData).description}</p>
                </Container>
                <Container>
                    <BarWrapper>
                        {(data || backupData).skills.map((item, idx) => <Bar key={idx} maxFill={item.maxFill} color={item.color} height={item.height} text={item.text} flexPercent={50} />)}
                    </BarWrapper>

                </Container>
            </>
        )
    }
}

export { Skills }