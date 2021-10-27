import axios from "axios"
export const SEARCH_CITY = 'SEARCH_CITY'

export const searchCity = (payload) => {
    return(dispatch) => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(payload)}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
        .then(response => {
            dispatch({type: SEARCH_CITY, payload : response.data})
        })
        .catch(e=> {
            alert('City not found')
        })
    }
}
