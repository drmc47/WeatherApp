import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { SEARCH_CITY } from '../actions'
const initialState = {
    cities: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case SEARCH_CITY:
        return { 
            ...state, 
            cities : [...state.cities, payload]
        }

    default:
        return state
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;
