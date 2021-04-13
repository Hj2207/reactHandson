import { applyMiddleware, createStore } from 'redux';
import userReducer from './reducer';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const middlewares =[thunk,logger]
const store = createStore(userReducer, applyMiddleware(...middlewares) );

export default store;

