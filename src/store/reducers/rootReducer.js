import portfolioReducer from './portfolioReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
})

export default rootReducer
