import { combineReducers } from 'redux';
import jobReducer from './jobReducer'
import contactReducer from './contactReducer'

const rootReducer = combineReducers({
    jobs: jobReducer,
    contacts: contactReducer
})

export default rootReducer