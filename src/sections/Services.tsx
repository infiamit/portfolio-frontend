import React from 'react'
import { Card } from '../components'
import styled from 'styled-components'

const StyledCardWrapper = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const data = [{ title: "web development", description: "a aa a a a  aa  a a a . a aakaka aka ak ak ak ak ak aka k" },
{ title: "web development", description: "a aa a a a  aa  a a a . a aakaka aka ak ak ak ak ak aka k" },
{ title: "web development", description: "a aa a a a  aa  a a a . a aakaka aka ak ak ak ak ak aka k" },
{ title: "web development", description: "a aa a a a  aa  a a a . a aakaka aka ak ak ak ak ak aka k" },
{ title: "web development", description: "a aa a a a  aa  a a a . a aakaka aka ak ak ak ak ak aka k" }]
class Services extends React.Component {

    render() {
        return <StyledCardWrapper  >
            {data.map(item => <Card title={item.title} description={item.description} maxCards={data.length} />)}
        </StyledCardWrapper>
    }
}

export { Services }