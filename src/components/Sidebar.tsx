import React, { Component } from 'react'
import styled from 'styled-components';

const SidebarWrapper = styled.div`
   width: 300px;
   left: 50px;
   float: left;
   position: fixed;
   height: 100%; 
   padding-bottom: 20px;
   overflow:scroll;
   background: #f2f3f7;
   transition: 0.5s;
   font-family: "Quicksand", Arial, sans-serif;
    font-weight: 400;
    font-size: 15px;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        position: relative;
        left: 0px;
        width: 100%;
    }
`;
const ListWrapper = styled.ul`
    text-align: center;
    float: none;
    list-style: none;
`
const ProfileWrapper = styled.div`
    height: 40%; 
    min-height: 250px;
    margin-bottom: 1.5em;
    @media screen and (max-width: 768px) {
    display: none;
    }
`
const ListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 0 0 15px 0;
    padding: 0;
    list-style: none;
    font-size: 12px;
    font-weight: 500;
    @media screen and (max-width: 768px) {
    float: left;
    margin-left: 10px;
    }
`

const StyledHeading = styled.text`
    color: #000;
    font-family: "Playfair Display",Georgia,serif;
    font-weight: 700;
    display: block;
    font-size: 22px;
    margin-bottom: .5em;
    margin-top: 0.7em;
    `
const StyledImage = styled.img`
    border-radius: 50%;
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
class Sidebar extends Component {
    render() {
        return <SidebarWrapper>


            <ListWrapper>
                <ProfileWrapper >
                    <StyledImage src="https://qphs.fs.quoracdn.net/main-thumb-120376262-200-ulpxeisgsnphirquzwtnroydmdxolbba.jpeg" />
                    <StyledHeading>Amit Singh Bhandari</StyledHeading>
                    <text>Web Developer : INDIA</text>
                </ProfileWrapper>
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
        </SidebarWrapper>

    }

}

export { Sidebar }