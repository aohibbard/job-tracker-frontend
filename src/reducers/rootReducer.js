import { combineReducers } from 'redux';
import jobReducer from './jobReducer'
import contactReducer from './contactReducer'
import gitReducer from './gitReducer'

const rootReducer = combineReducers({
    jobs: jobReducer,
    contacts: contactReducer,
    githubData: gitReducer
})

export default rootReducer