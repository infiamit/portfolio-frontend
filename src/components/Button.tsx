import React, { Component } from 'react'
import styled from 'styled-components'



interface ButtonProps { reverseTheme?: boolean, margin?: string, onKeyDown?: any, preventFocus?: boolean, disabled?: boolean, id?: string, style?: any, themeColor?: string, tabIndex?: number, width?: string, isLoading?: boolean | undefined, label?: string, onClick?: (event: any) => void }



const ButtonWrapper = styled.button`
border: none;
display: inline-block;
font-weight: 400;
text-align: center;
white-space: nowrap;
vertical-align: middle;
user-select: none;
line-height: 1.29;
position: relative; 
border-radius: 4px;
background-color: ${(props: ButtonProps) => props.reverseTheme ? '#00b4d9' : '#fafafa'};
border: solid 1px ${(props: ButtonProps) => props.reverseTheme ? 'transparent' : '#00b4d9'};
outline: none;
cursor: pointer;
height: 40px;
color: ${(props: ButtonProps) => props.reverseTheme ? '#fff' : '#00b4d9'};
width: 100%;
max-width:${(props: ButtonProps) => props.width && props.width};
min-width:${(props: ButtonProps) => props.width && props.width};
font-size:14px;
transition:0.4s;
box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);
margin: ${(props: ButtonProps) => props.margin ? props.margin : `0px`};
${(props) => props.themeColor && `
    background-color:${props.themeColor} ;
    border: solid 1px ${props.themeColor} ;
    color: #fff;
`}

&:hover{
    color: #fff;
    background-color: #21cff3;
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);  
    cursor:pointer;
}
`

class Button extends Component<ButtonProps> {
    public static defaultProps = {
        isLoading: false,
        label: 'Submit',
        margin: '0px',
        width: '340px',
        reverseTheme: false,
        preventFocus: false
    }
    render() {
        const { margin, isLoading, width, label, themeColor, disabled, ...props } = this.props
        return <ButtonWrapper isLoading={isLoading} themeColor={themeColor} reverseTheme={this.props.reverseTheme} width={width} margin={margin} disabled={isLoading || disabled}  {...props}>
            {label}
        </ButtonWrapper>
    }
}

export { Button }
