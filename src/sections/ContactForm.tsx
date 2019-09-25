import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, TextArea } from '../components'
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

interface Props { justifyContent?: string, maxWidth?: number, wrap?: string }
const Container = styled.div`
   
    display: flex;
    flex-wrap: wrap;
    max-width: 80%;
    justify-content:  ${(props: Props) => props.justifyContent || 'center'}; 
    background: #fff;
    box-shadow: 0 0 30px #ededed;
    padding: 20px 0 20px 0;
    @media screen and (max-width: 768px) {
        max-width: 94%;
        }
    
`

const StyledH3Wrapper = styled.h3`
        font-size: 18px;
        text-transform: uppercase;
`

const ChildContainer = styled.div`
   
    display: flex;
    flex-wrap: wrap; 
    justify-content:  ${(props: Props) => props.justifyContent || 'center'}; 
    background: #fff; 
    width: 45%;
    flex-direction: column;
    @media screen and (max-width: 480px) {
         width: 94%;
        }
`
const InputWrapper = styled.div` 
  display:flex;
  flex-wrap: ${(props: Props) => props.wrap || 'wrap'};
  max-width:  ${(props: Props) => props.maxWidth || '100%'}; 
  width: 100%;
`

const CREATE_CONTACT_FORM = gql`
    mutation createContactForm($contactFormInput: ContactFormInput!) {
        createContactForm(contactFormInput: $contactFormInput)  
    }
`

function ContactForm() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [website, setWebsite] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')

    const [createContactForm] = useMutation(CREATE_CONTACT_FORM);

    return (<>
        <Container justifyContent={'space-around'}>
            <ChildContainer justifyContent={'flex-start'}>
                <StyledH3Wrapper>
                    CONTACT FORM
                    </StyledH3Wrapper>
                <form id={'contactForm'} style={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={(event) => {

                    // console.log(this.state)
                    console.log(name,
                        email,
                        website,
                        subject,
                        message,
                        phone)
                    const response = createContactForm({
                        variables: {
                            contactFormInput: {
                                name,
                                email,
                                website,
                                subject,
                                message,
                                phone
                            }
                        }
                    })
                    response.then(() => {
                        setName('')
                        setEmail('')
                        setWebsite('')
                        setSubject('')
                        setMessage('')
                        setPhone('')
                    }).catch(error => console.log(error))

                    event.preventDefault()
                }}>
                    <InputWrapper wrap={'nowrap'}>
                        <Input
                            type={'text'}
                            placeholder={'Name'}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type={'email'}
                            placeholder={'Email'}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </InputWrapper>
                    <InputWrapper wrap={'wrap'}>
                        <Input
                            type={'text'}
                            onChange={(e) => setWebsite(e.target.value)}

                            placeholder={'Website'}
                        />
                        <Input
                            type={'text'}
                            onChange={(e) => setSubject(e.target.value)}

                            placeholder={'Subject'}
                        />
                        <Input
                            type={'text'}
                            onChange={(e) => setPhone(e.target.value)}

                            placeholder={'Phone'}
                        />
                        <TextArea
                            width={'100%'}
                            onChange={(e) => setMessage(e.target.value)}

                            placeholder={'Your Message'}
                        />
                        <Input type={'submit'} />
                    </InputWrapper>
                </form>
            </ChildContainer>
            <ChildContainer justifyContent={'flex-start'}>
                <StyledH3Wrapper>
                    CONTACT ADDRESS
                    </StyledH3Wrapper>
                >>s dsdsds sd sd sdsd sd sd sds ds ds ds

1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
1111s dsdsds sd sd sdsd sd sd sds ds ds ds
                </ChildContainer>
        </Container>
    </>)
}


export { ContactForm }