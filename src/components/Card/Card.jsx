import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../../actions';

function Card({data}) {
    const dispatch = useDispatch();
    const {name} = data;
    const {temp, feels_like} = data.main;
    const img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    console.log(img)

    let closeCard = (id) => {
        dispatch(deleteCity(id))
    }
    return (
        <Container>
            <Botoncito onClick={()=>closeCard(data.id)}/>
            <Name>{name}</Name>
            <Icon src={img} alt="img not available" />
            <Temp>{temp}°C</Temp>
            <RF>RealFeel: {feels_like}°C</RF>
        </Container>
    )
}

const Container = styled.form`
position: relative;
    margin: 0 auto;
    margin-top: 5%;
    padding: 5px 30px;
    width: 20vw;
    height: 30vh;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 1px 2px 10px rgba(0, 0, 0, .2);
`

const Name = styled.h2`
    padding-top: 10px;
    font-weight: 300;
    font-size: 2.25em;
`
const Temp = styled.h1`
    padding-top: 10px;
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
const Botoncito = styled(CloseIcon)`
    position: absolute;
    right: 0;
`
const Icon = styled.img`
`


export default Card
