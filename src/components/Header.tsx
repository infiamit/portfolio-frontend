import React, { Component } from 'react'
import styled from 'styled-components';

const HeaderWrapper = styled.div`
   top:0px;
   position: fixed;  
   background: white;  
   flex-direction: row;
   width: 100%;
   box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);
   z-index: 99999999;
`;
const ListWrapper = styled.ul`
    text-align: center;
    float: right;
    list-style: none; 
`

const ListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1px; 
    padding: 10px;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    float: left;
    @media screen and (max-width: 700px) {
    float: left;
    margin-left: 10px;

    }
`


const StyledLink = styled.a`
    text-decoration: none;
    color: black;
    &:hover{
        color:#00A0C6; 
        text-decoration:none; 
        cursor:pointer;
    }
`
class Header extends Component {
    render() {
        return <HeaderWrapper>


            <ListWrapper>
                <ListItem><StyledLink href="#home">HOME</StyledLink></ListItem>
                <ListItem><StyledLink href="#about">ABOUT</StyledLink></ListItem>
                <ListItem><StyledLink href="#services">SERVICES</StyledLink></ListItem>
                <ListItem><StyledLink href="#skills">SKILLS</StyledLink></ListItem>
                <ListItem><StyledLink href="#education">EDUCATION</StyledLink></ListItem>
                <ListItem><StyledLink href="#experience">EXPERIENCE</StyledLink></ListItem>
                <ListItem><StyledLink href="#work">WORK</StyledLink></ListItem>
                <ListItem><StyledLink href="#blog">BLOG</StyledLink></ListItem>
                <ListItem><StyledLink href="#contact">CONTACT</StyledLink></ListItem>

            </ListWrapper>
        </HeaderWrapper>

    }

}

export { Header }