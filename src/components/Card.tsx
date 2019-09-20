import React from 'react'
import styled from 'styled-components'
import { Icon } from './Icon'


interface CardProps { maxCards: number, title: string, description: string, iconName?: string }
const StyledCard = styled.div`
    background: #fff;
    border-radius: 4px; 
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding: 48px 20px;
    transition: all 0.3s ease-in-out 0s;
    -moz-transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
    flex:  ${(props: CardProps) => 100 / props.maxCards > 25 ? `0 0 ${(100 / props.maxCards) - 1}%` : '0 0 18%'}; 
    justify-content: center;
     margin: 20px;
`
const StyledLink = styled.a`
font-size: 18px;
    text-transform: uppercase;
    color: #666;
    text-decoration: none;
&:hover {
    color: #00b4d9;
}
`
class Card extends React.Component<CardProps> {
    render() {
        const { iconName, title, description, ...props } = this.props
        return <StyledCard title={title} description={description} {...props} >
            <div style={{ padding: '0px' }}>

                <Icon icon={iconName || "development"} />
            </div>
            <div>
                <h3><StyledLink href={"#"}>{title}</StyledLink></h3>
            </div>
            <p>
                {description}
            </p>
        </StyledCard>
    }
}

export { Card }