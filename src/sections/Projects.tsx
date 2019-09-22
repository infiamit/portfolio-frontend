import React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'


interface StyledProps { backgroundUrl?: string }

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

const ProjectWrapper = styled.div`

    display:flex;
    background:   ${(props: StyledProps) => props.backgroundUrl ? `url(${props.backgroundUrl}) no-repeat` : 'url(https://preview.uideck.com/items/meetme/assets/img/hero-area.jpg) no-repeat'};
    background-size: cover;
    min-width: 300px;
    min-height: 300px;
    margin: 48px 20px 48px 20px; 
    justify-content: center;
    align-items: center;
    cursor:pointer;
    &:hover div{
        opacity: 1
        }
    
`
const OverlayWrappper = styled.div`
    flex-wrap: wrap; 
    align-items: center;
    opacity: 0; 
    transition: all ease .5s; 
    background-color: rgba(24,188,156,.9);
    width: 100%;
    height: 100%
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}


   
`

const StyledH4 = styled.h2`
    border-bottom: 2px solid white;
    padding-bottom: 5px;
    text-transform: capitalize;
    color: white;

`

class Projects extends React.Component {


    render() {
        return (
            <>
                <StyledH3Wrapper>
                    MY Projects
            </StyledH3Wrapper>
                <Container>
                    <p style={{ maxWidth: '80%' }}>  aa ada dadsdsd sd sds ds dsdsdsdsd sd s dsdsd sd s d sds d sd sd sd s dsds d  sdsdsd sds d sds d sdsdsdsd sd sd sds d. sdsdsddsds
                      ds
                      dsdsdsdsdds

                      sds sd
                      sdsdsdsdsd
                      sdsdsdsddsds
                      ds
                    ds</p>
                </Container>

                <Container>

                    <ProjectWrapper onClick={() => console.log('hello')} title={'View Details'}>
                        <OverlayWrappper>
                            <StyledH4>hello project</StyledH4>
                            <Icon icon={'viewMore'} width={56} height={56} />
                        </OverlayWrappper>
                    </ProjectWrapper>
                    <ProjectWrapper>
                        hello
                    </ProjectWrapper>
                    <ProjectWrapper>
                        hello
                    </ProjectWrapper>
                    <ProjectWrapper>
                        hello
                    </ProjectWrapper>
                    <ProjectWrapper>
                        hello
                    </ProjectWrapper>

                </Container>

            </>
        )
    }
}

export { Projects }