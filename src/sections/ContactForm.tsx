import React from 'react'
import styled from 'styled-components'
import { Input, TextArea } from '../components'

interface Props { justifyContent?: string, maxWidth?: number, wrap?:string }
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

class ContactForm extends React.Component {

    render() {
        return (<>
            <Container justifyContent={'space-around'}>
                <ChildContainer justifyContent={'flex-start'}>
                    <StyledH3Wrapper>
                        CONTACT FORM
                    </StyledH3Wrapper>
                        <form style={{display: 'flex', flexWrap: 'wrap'}}>
                           <InputWrapper wrap={'nowrap'}>
                            <Input 
                            type={'text'}  
                            placeholder={'Name'}
                            /> 
                               <Input 
                            type={'text'}  
                            placeholder={'Email'}
                            /> 
                            </InputWrapper>
                            <InputWrapper wrap={'wrap'}>
                            <Input 
                            type={'text'}  
                            
                            placeholder={'Website'}
                            />
                             <Input 
                            type={'text'}  
                            
                            placeholder={'Subject'}
                            />
                            <TextArea
                            width={'100%'} 
                            placeholder={'Your Message'}
                            /> 
                              
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
}

export { ContactForm }