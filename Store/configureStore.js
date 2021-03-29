import { createStore, combineReducers } from 'redux'
import  monyReducer from './Reducers/monyReducer'
import paramsReducer from './Reducers/paramsReducer'
import historiqueReducer from './Reducers/historiqueReducer'


let store = createStore(combineReducers({
    monyReducer: monyReducer,
    param: paramsReducer,
    historique: historiqueReducer,
}))



export default store