import React from 'react'
import styled from 'styled-components'


interface CardProps { maxCards: number, title: string, description: string }
const StyledCard = styled.div`
    background: #fff;
    border-radius: 4px;
    padding: 48px 0px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    flex:  ${(props: CardProps) => 100 / props.maxCards > 25 ? `0 0 ${(100 / props.maxCards) - 1}%` : '0 0 24%'}; 
`

class Card extends React.Component<CardProps> {
    render() {
        const { ...props } = this.props
        return <StyledCard  {...props} >

            hola
            </StyledCard>
    }
}

export { Card }