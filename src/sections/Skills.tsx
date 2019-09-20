import React from 'react'
import { Bar } from '../components/index'
import styled from 'styled-components'


const data = [
    { maxFill: 80, color: '#2c98f0', height: '5px', text: 'HTML' },
    { maxFill: 70, color: '#ec5453', height: '5px', text: 'HTML' },
    { maxFill: 90, color: '#f9bf3f', height: '5px', text: 'HTML' },
    { maxFill: 50, color: '#a84cb8', height: '5px', text: 'HTML' },
    { maxFill: 70, color: '#2fa499', height: '5px', text: 'HTML' },
    { maxFill: 60, color: '#2c98f0', height: '5px', text: 'HTML' },
    { maxFill: 70, color: '#ec5453', height: '5px', text: 'HTML' },
    { maxFill: 30, color: '#f9bf3f', height: '5px', text: 'HTML' },
    { maxFill: 40, color: '#a84cb8', height: '5px', text: 'HTML' },
    { maxFill: 70, color: '#2fa499', height: '5px', text: 'HTML' },

]

const BarWrapper = styled.div`
        display: flex ;
        flex-wrap: wrap; 
        justify-content: space-between;
`
class Skills extends React.Component {


    render() {
        return (
            <BarWrapper>

                {data.map((item, idx) => <Bar key={idx} maxFill={item.maxFill} color={item.color} height={item.height} text={item.text} flexPercent={50} />)}
            </BarWrapper>
        )
    }
}

export { Skills }