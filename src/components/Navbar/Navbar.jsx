import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchCity } from '../../actions';
import {Nav, NavLink, SearchBarContainer, NavBtn, NavBtnContent, NavBarInput, LogoContainer} from './NavBarElements';

function Navbar() {
    const dispatch = useDispatch();
    const [city, setcity] = useState('')

    let handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchCity(city))
        setcity('')
    }
    const enabled = city.length;
    return (
        <>
        <Nav>
            <LogoContainer>
            <NavLink to='/'>
                <h1>WeatherApp</h1>
            </NavLink>
            </LogoContainer>
            <SearchBarContainer onSubmit={e=> handleSubmit(e)}>
            <NavBarInput placeholder='city...' onChange={(e)=>setcity(e.target.value)} value={city}/>
            <NavBtn type='submit' disabled={!enabled}>
                <NavBtnContent >Search</NavBtnContent>
            </NavBtn>
            </SearchBarContainer>
        </Nav>
        </>
    )
}


export default Navbar
