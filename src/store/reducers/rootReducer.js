import portfolioReducer from './sampleReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
})

export default rootReducer
