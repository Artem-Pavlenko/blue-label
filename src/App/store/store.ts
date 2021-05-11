import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './reducers/appReducer'
import {authReducer} from "./reducers/authReducer";


const middleWares = [thunkMiddleware]

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer
})


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(...middleWares))
const store = createStore(rootReducer, enhancer)
export type StateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.__store__ = store

export default store
