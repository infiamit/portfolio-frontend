import React from 'react'
import styled from 'styled-components'
import { Icon } from '../components/Icon'
import { Modal, Button } from '../components'


interface StyledProps { backgroundUrl?: string }
interface ProjectProps { data?: any }

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

const ModalWrapper = styled.div`
display: flex;
    margin: 20px 10px 20px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    `

const ImageWrapper = styled.img`
    max-width: 800px;
    width: 100%; 
    border: 8px solid #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2); 
`
const ModalDescriptionWrapper = styled.div`
display: flex;
    margin: 20px 10px 20px 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    `
const backupData = {

    "description": "Here are some of the project i've worked on. Please do check them. ",
    "projectList": [{
        "projectTitle": "Portfolio",
        "projectImage": "",
        "projectDescription": "this is this ",
        "liveUrl": "#"

    },
    {
        "projectTitle": "Chat App",
        "projectImage": "",
        "projectDescription": "this is Chat app this ",
        "liveUrl": "#"

    }
    ]
}

class Projects extends React.Component<ProjectProps> {

    state = {
        showModal: false,
        activeIndex: 0
    }



    render() {
        const { data } = this.props

        return (
            <>
                <StyledH3Wrapper>
                    MY Projects
            </StyledH3Wrapper>
                <Container>
                    <p style={{ maxWidth: '80%' }}>  {(data || backupData).description}</p>
                </Container>

                <Container>
                    {
                        (data || backupData).projectList.map((item, idx) =>
                            <ProjectWrapper onClick={() => this.setState({ showModal: true, activeIndex: idx })} title={'View Details'}
                                backgroundUrl={item.projectImage}
                            >
                                <OverlayWrappper>
                                    <StyledH4>{item.projectTitle}</StyledH4>
                                    <Icon icon={'viewMore'} width={56} height={56} />
                                </OverlayWrappper>
                            </ProjectWrapper>

                        )
                    }

                    <Modal modalVisible={this.state.showModal}
                        closeModal={() => this.setState({ showModal: false })}
                    >
                        <ModalWrapper>

                            <StyledH3Wrapper>
                                {(data || backupData).projectList[this.state.activeIndex].projectTitle}
                            </StyledH3Wrapper >

                            <ImageWrapper src={(data || backupData).projectList[this.state.activeIndex].projectImage || "https://preview.uideck.com/items/meetme/assets/img/hero-area.jpg"} />
                            <ModalDescriptionWrapper>
                                {(data || backupData).projectList[this.state.activeIndex].projectDescription}
                            </ModalDescriptionWrapper>
                            {(data || backupData).projectList[this.state.activeIndex].liveUrl && <Button label={'View Demo'} onClick={() => window.open((data || backupData).projectList[this.state.activeIndex].liveUrl, '_blank')} />}
                            <Button label={'Close'} onClick={() => this.setState({ showModal: false })} />
                        </ModalWrapper>
                    </Modal>

                </Container>

            </>
        )
    }
}

export { Projects }