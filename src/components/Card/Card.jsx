import React from 'react';
import styled from 'styled-components';

function Card({data}) {
    const {name} = data;
    const {temp, feels_like} = data.main;
    
    return (
        <Container>
            <Name>{name}</Name>
            <Temp>{temp}°C</Temp>
            <RF>RealFeel: {feels_like}°C</RF>
        </Container>
    )
}

const Container = styled.div`
    margin: 0 auto;
    margin-top: 5%;
    padding: 5px 30px;
    width: 290px;
    height: 470px;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
`

const Name = styled.h2`
    font-weight: 300;
    font-size: 2.25em;
`
const Temp = styled.h1`
    padding-top: 25px;
    float: right;
    color: #666;
    font-weight: 300;
    font-size: 2.5em;
    line-height: .2em;
`
const RF = styled.p`
    margin-left: 24px;
    color: #999;
    font-weight: 300;
    padding-top: 45px;
    margin-top: 20px;
`


export default Card
