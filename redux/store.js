import { applyMiddleware , createStore}  from 'redux'
import menuReducer from './menu/menuReucer'
import thunk from 'redux-thunk'


const store = createStore(menuReducer, applyMiddleware(thunk))


export default store