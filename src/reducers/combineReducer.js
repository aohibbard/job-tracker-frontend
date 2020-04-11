import { combineReducers } from 'redux';
import jobReducer from './jobReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
    jobReducer,
    contactReducer
})

export default rootReducer