import portfolioReducer from './myReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
})

export default rootReducer
