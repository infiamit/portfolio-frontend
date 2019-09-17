import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../components/index'

const Container = styled.div`
    width: 100%;
    padding: 170px 0px 120px;
    background:  linear-gradient(
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)
      ), url(https://preview.uideck.com/items/meetme/assets/img/hero-area.jpg) no-repeat;
    background-size: cover;
    position: relative;
`

const StyledText = styled.div`
    text-align: center!important; 
    font-size: 50px;   
    font-family: 'Shadows Into Light', cursive;
    color: #fff;           
`
const StyledH5 = styled.h5`
    margin: 0px;         
`
const StyledH2 = styled.h2`
    margin: 5px; 
    font-family: "Source Sans Pro", sans-serif;  
    font-size: 80px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 700;      
`



class HomeSection extends Component {

    render() {
        return <Container>

            <StyledText>
                <StyledH5>Hi This is</StyledH5>
                <StyledH2>
                    Amit Singh Bhandari
                </StyledH2>
                <StyledH5>Full Stack Web Developer</StyledH5>


                <Button label={'DOWNLOAD RESUME'} reverseTheme={true} width={'170px'} onClick={() => console.log('hello')} />
            </StyledText>

        </Container>
    }
}

export { HomeSection }