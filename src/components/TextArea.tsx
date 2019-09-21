import React from 'react'
import styled from 'styled-components'
interface StyledProps { width?: string, height?: string ,   inputColor?: string}
interface TextAreaProps { placeholder?: string, name?: string, isRequired?: boolean, info?: string,
     value?: string, label?: string, width?: string, height?: string, tabIndex?: number,
     autoComplete?: string, disabled?: boolean, error?: string, onChange?: (e: any) => void, onBlur?: (e: any) => void }


// Create an style for the component 
const Wrapper = styled.div`
  position:relative;
  width: 100%;
  display: flex;
`
const Label = styled.p`
  margin:0px;
  position: relative;
  padding: 10px 0px 0px 0px;
  font-size: 11px;
  font-weight: 500;
  line-height: 1.29;
  letter-spacing: 0.8px;
  color: #323c47;
  display: inline-block;
  & > span{
    color:red;
  }
  &:hover + div{
    display: block !important
  }
`
const StyledTextArea = styled.textarea`
    margin: 0.5em;
  max-width: ${(props: StyledProps) => props.width ? props.width : '405px'};
  width:100%;
    padding: 8px 10px;  
  line-height: 1.5;
  color: ${(props: StyledProps) => props.inputColor || "#495057"};
  background-color: #ffffff;
  border: solid 1px #e9eff4;
  outline:none;
  transition: 0.4s;
  height: ${(props: StyledProps) => props.height ? props.height : '88px'};
  resize: none;
  &:disabled{
    & + p{
      background-color:#ededed;
    }
  }
  &:valid{
    & + p{
      color:  rgba(50, 60, 71, 0.5);
    }
  }
  &:hover{
    box-shadow: 0 6px 22px rgba(0, 0, 0, 0.1);  
   
  }
  &:focus{
    outline: -webkit-focus-ring-color auto 1px;

  }
  /* Placeholder color */
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color:#9b9b9b;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color:#9b9b9b;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color:#9b9b9b;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color:#9b9b9b;
  }
`
/*  const Icons = styled.div`
  position: absolute;
  right: 10px;
  height: 28px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  cursor:pointer;
  z-index: 99;
  transition:0.4s;
  
  & + p{
    display:block;
    border-radius: 2px;
    background-color: #f72d26;
    padding: 3px 10px;
    margin: 0px;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 12px;
    transition:0.4s;
    &:before{
      content: '';
      width: 4px;
      height: 4px;
      background-color: #f72d26;
      position: absolute;
      bottom: -2px;
      right: 7px;
      transform: rotate(46deg);   
    }
  }
`
*/

const Tooltip = styled.div`
  min-width: 100px;
  max-width: 150px;
  background: #00b3c0;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  border: 1px solid #00b3c0;
  padding: 4px 3px 2px 3px;
  color: #fff;
  line-height: 14px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 10px !important;
  white-space: initial;
  overflow: visible;
  text-overflow: unset;
  &:after{
      content:'';
      position: absolute;
      width: 5px;
      height: 5px;
      top: -4px;
      left: 15px;
      background: #00b3c0;
      border-right: 1px solid #00b3c0;
      border-top: 1px solid #00b3c0 ;
      transform: rotate(-45deg);
    }
`

class TextArea extends React.Component<TextAreaProps>{
    public static defaultProps = {
        label: '',
        error: '',
        autoComplete: 'off'
    }
    public handleKeyPress(event) {
        if (!event.shiftKey && event.which === 9 && !event.target.value) {
            event.preventDefault()
        }
    }
    public render() {
        const { autoComplete, info } = this.props
        return (
            <Wrapper>
                {this.props.label && <Label>{this.props.label} {this.props.isRequired && <span>*</span>}</Label>}
                {info && <Tooltip>{info}</Tooltip>}
                <StyledTextArea autoComplete={autoComplete} {...this.props}
                    onKeyDown={(event) => this.props.error ? this.handleKeyPress(event) : null} onFocus={(e) => { e.target.select() }} />

            </Wrapper >
        )
    }
}

export { TextArea }