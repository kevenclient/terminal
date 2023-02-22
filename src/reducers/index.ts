import { combineReducers } from 'redux'
import command from './command'
import history from './history'

export default combineReducers({
    command, history,
})