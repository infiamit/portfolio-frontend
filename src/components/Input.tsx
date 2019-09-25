import React, { Component } from 'react'
import styled from 'styled-components'



interface InputProps { id?: string, inputColor?: string, label?: string, disabled?: string, type?: string, width?: string, placeholder?: string, onChange?: any }



const InputWrapper = styled.input` 
margin: 0.5em;
width: ${(props: InputProps) => props.width || "100%"};
color: ${(props: InputProps) => props.inputColor || "#495057"};
border-radius: 3px;
border: 1px solid #e1e1e1;
padding: 8px 10px;
line-height: 1.5;
font-size: 14px;
&:hover{ 
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);  
   
}
`

class Input extends Component<InputProps> {
    public static defaultProps = {
        label: 'Submit',
        margin: '0px',
    }
    render() {
        const { label, disabled, type, ...props } = this.props
        return <InputWrapper type={type} {...props} />
    }
}

export { Input }
