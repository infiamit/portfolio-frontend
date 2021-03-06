import React, { Component } from 'react'
import styled from 'styled-components'

interface CarouselProps { data: any }
interface StyledProps { visible?: boolean, fontSize?: string }
const Wrapper = styled.div`
    display: ${(props: StyledProps) => props.visible ? 'block' : 'none'};
 
    
`
const StyledImage = styled.img`
    float: right;
    height: 550px;
`

const StyledText = styled.text`
    float: left;
    font-size:  ${(props: StyledProps) => props.fontSize ? props.fontSize : '20px'};
`


class Carousel extends Component<CarouselProps> {

    static getDerivedStateFromProps = (props, state) => {
        const step = props.data.length - 1
        const step1 = step < 0 ? 0 : step
        // console.log({ props }, { state }, step1)
        if (state.activeIdx === step1) {
            return { activeIdx: 0 }
        } else {
            return { activeIdx: 1 }
        }
        // this.setState({ activeIdx: this.props && this.props.data && this.props.data.length === this.state.activeIdx + 1 ? 0 : this.state.activeIdx + 1 })
    }
    state = {
        activeIdx: 0,
        runPage: false
    }

    public componentDidMount() {
        setInterval(() => {
            this.setState({ runPage: !this.state.runPage })
        }, 3000)
    }

    render() {
        const { data } = this.props

        return (
            <React.Fragment>
                {
                    data.map((item, idx) => {

                        return (
                            <>
                                <Wrapper visible={this.state.activeIdx === idx}>
                                    <StyledImage src={item.imageUrl} />
                                    <StyledText fontSize={'20px'}>
                                        {item.title}
                                    </StyledText>
                                    <br />
                                    <StyledText fontSize={'12px'}>
                                        {item.description}
                                    </StyledText>



                                </Wrapper>
                                <input type={'checkbox'} checked={this.state.activeIdx === idx} onChange={(e) => e.target.checked && this.setState({ activeIdx: idx })} />
                            </>
                        )
                    })
                }

            </React.Fragment>

        )
    }
}

export { Carousel }
