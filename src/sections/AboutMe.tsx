import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from '../components'

const ProfilePictureWrapper = styled.div`
    max-width: 35%;  
    padding-right: 15px;
    padding-left: 15px;
    justify-content: center;
    
`
const ImageWrapper = styled.img`
    max-width: 100%; 
    border: 8px solid #fff;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2); 
`

const AboutMeWrapper = styled.div`
    max-width: 45%; 
    padding-right: 14px;
    padding-left: 25px;
    padding-top: 20px;

`
const TitleWrapper = styled.div` 
    font-weight: 700;
    color: #040404;
    position: relative;
    width: 120px;
    display: inline-block;
    margin-bottom: 5px;
    &:after{
        content: " : ";
    }
`
const ListWrapper = styled.ul`
    text-align: center;
    float: left;
    list-style: none;
`
const ListItem = styled.li`
    text-transform: uppercase;
    letter-spacing: 1px; 
    padding: 0;
    list-style: none;
    float: left;
    clear: left;
`
const DownloadWrapper = styled.div`
    display: flex;
    clear: both;
    flex-wrap: wrap;
    justify-content: center;
`
const data = [{ "key": 'Name', value: "Tom Saulnier" },
{ key: "Age", value: "25 Years" },
{ key: "Experience", value: " 4 Years" },
{ key: "Country", value: "USA" },
{ key: "Location", value: "San Francisco, CA" },
{ key: 'e-mail', value: "email@example.com" },
{ key: "Phone", value: "+ (00) 123 456 789" },
{ key: "Freelance", value: "Available" }]



class AboutMe extends Component {

    render() {
        return <React.Fragment>
            <ProfilePictureWrapper>
                <ImageWrapper src={"https://scontent.fdel12-1.fna.fbcdn.net/v/t1.0-9/62045442_2834554486765441_2779690704983556096_n.jpg?_nc_cat=111&_nc_oc=AQlwQQoUBzMvIKvom44_xD906Z0vyMJgJEqDnumKzQoeht5kdQAjM5-Mk0ykbv2fcKg&_nc_ht=scontent.fdel12-1.fna&oh=a7179f82af98e5412336a75e7c0bb2c8&oe=5E00F472"} />
            </ProfilePictureWrapper>

            <AboutMeWrapper>
                <h1 style={{ "fontSize": "36px" }}> Hi Guys! </h1>
                Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum eleifend sollicitudin lacinia justo id turpis. Nec convallis integer. Odio eget duis. Nulla aenean et. Blandit varius sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut sollicitudin. Et est a nam dolores eget itaque sagittis et parturient duis est eleifend sociis rutrum odio viverra integer.

<br />


                <ListWrapper>
                    {data.map(item => <ListItem>
                        <TitleWrapper>
                            {item.key}
                        </TitleWrapper>
                        {item.value}
                    </ListItem>
                    )
                    }

                </ListWrapper>


                <DownloadWrapper>

                    <Button label={'DOWNLOAD RESUME'} reverseTheme={true} width={'170px'} onClick={() => console.log('hello')} />

                    <Button label={'CONTACT ME'} reverseTheme={true} themeColor={'red'} width={'170px'} onClick={() => console.log('hello')} />
                </DownloadWrapper>

            </AboutMeWrapper>

        </React.Fragment>
    }
}

export { AboutMe }