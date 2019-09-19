import React from 'react'
import { Card } from '../components'
import styled from 'styled-components'

interface Props { justifyContent?: string }
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
`


const data = [{ title: "web development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi." },
{ title: "Backend development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi." },
{ title: "SQL Service", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi." },
{ title: "Code Optimization ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi." },
{ title: "Code Optimization ", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi." },]
class Services extends React.Component {

    render() {
        return (<>
            <StyledCardWrapper>
                <StyledH3Wrapper>
                    What I do
               </StyledH3Wrapper>
            </StyledCardWrapper>
            <StyledCardWrapper justifyContent={'space-between'} >

                {data.map(item => <Card title={item.title} description={item.description} maxCards={data.length} />)}
            </StyledCardWrapper>
        </>)
    }
}

export { Services }