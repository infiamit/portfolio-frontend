import React from 'react'
import { Card } from '../components'
import styled from 'styled-components'

interface Props { justifyContent?: string }

interface ServicesProps { data?: any }
const StyledCardWrapper = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content:  ${(props: Props) => props.justifyContent || 'center'}; 
 
`

const StyledH3Wrapper = styled.h3`
   font-size: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #252525;
    margin: 10px 0 10px 0;
`


const backupData = {
    services: [{ "title": "Web Development", "description": "We provide web development as a complete service including backend , frontend and server deployment." },
    { "title": "Backend Development", "description": "We also provide backend api development service. You will get secure and robust apis which can be REST or GraphQL." },
    { "title": "Consultancy", "description": "We provide our customers consultancy when they are going to setup a new project in Node, react and similar stack." },
    { "title": "FreeLance", "description": "We are also available for freelance web development work in react and node.js." },
    { "title": "Code Optimization ", "description": "Want to improve your existing code? we are happy to help you. " }]
}


class Services extends React.Component<ServicesProps> {

    render() {
        const { data } = this.props

        return (<>
            <StyledCardWrapper>
                <StyledH3Wrapper>
                    What I do
               </StyledH3Wrapper>
            </StyledCardWrapper>
            <StyledCardWrapper justifyContent={'center'} >

                {(data || backupData).services.map(item => <Card title={item.title} description={item.description} maxCards={(data || backupData).length} />)}
            </StyledCardWrapper>
        </>)
    }
}

export { Services }