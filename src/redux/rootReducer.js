import { combineReducers } from 'redux'
import { reducer } from './reducer'
import { todoReducer } from './todoReducer'

export default combineReducers({
    reducer: reducer,
    tasks: todoReducer
})