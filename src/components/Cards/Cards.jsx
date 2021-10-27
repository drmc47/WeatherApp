import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../Card/Card'
function Cards() {    
    const cities = useSelector(state => state.cities)
    return (
        <>
        {cities.length ? 
            <Container>
                {console.log('MAP', cities)}
            {cities.map((city, index) => 
                 <Card data={city} key={index}/>
            )}

            </Container>
            : 
            null}
        </>
         
    )
}

const Container = styled.div`
    height: 92vh;
    display: flex;
    /* flex-wrap: wrap; */
`

export default Cards
