import React from 'react'
import styled from 'styled-components'


interface Props { color?: string, maxFill: number, text?: string, height: string, flexPercent: number }

const Container = styled.div`
    width: 100%;
    background-color: #ddd; 
    border-radius: 5px;
    margin-top: 35px;
    margin-bottom: 5px;
    flex: ${(props: Props) => `0 0 ${props.flexPercent - 3}%`}
    margin-right: 5px;
    
`
const StyledBar = styled.div`
    background-color: ${(props: Props) => props.color || '#2196F3'};
    width:${(props: Props) => props.maxFill > 100 ? '100%' : `${props.maxFill}%`};
    text-align: end; 
    color: white; 
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    height:${(props: Props) => (props.height || '10px')};
`
const StyledH3 = styled.h3` 
position: relative;
float: left; 
top : -30px;
font-size: 16px;
    font-family: Quicksand, Arial, sans-serif;
    color: #000; 
    font-weight: 400; 
    margin: 0px;
`
const StyledDiv = styled.div`
font-size: 18px;
top: -30px;
position: relative;
color: ${(props: Props) => props.color || '#2196F3'};
`
class Bar extends React.Component<Props> {

    render() {
        return (
            <Container flexPercent={this.props.flexPercent} {...this.props}>
                <StyledBar maxFill={this.props.maxFill} color={this.props.color} height={this.props.height} {...this.props}>
                    <StyledH3>{this.props.text}</StyledH3>

                    <StyledDiv color={this.props.color} {...this.props}>
                        {this.props.maxFill + '%'}
                    </StyledDiv>
                </StyledBar>
            </Container>)

    }
}

export { Bar }