import React from 'react'
import styled from 'styled-components'

interface StyledProps { modalVisible?: boolean }
interface ModalProps { modalVisible?: boolean, closeModal?: any }

const ModalConatiner = styled.div`
    display: ${(props: StyledProps) => props.modalVisible ? 'block' : 'none'}; 
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */ 
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4);
    overflow: auto;
`
const ModalContent = styled.div`
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    @media screen and (max-width: 480px) {
        margin: 30% auto;
        }
`
const StyledSpan = styled.div`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    &:hover, :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}
`
class Modal extends React.Component<ModalProps> {




    render() {

        const { modalVisible, closeModal } = this.props
        console.log({ modalVisible })
        return <ModalConatiner modalVisible={modalVisible}>
            <ModalContent>
                <StyledSpan onClick={() => closeModal()} >&times;</StyledSpan>
                {this.props.children}
            </ModalContent>
        </ModalConatiner>
    }
}

export { Modal }