import { applyMiddleware, compose, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { initialState, IState, reducer } from '../reducers'

const windowIfDefined = typeof window === 'undefined' ? null : window as any;
const composeEnhancers = windowIfDefined.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<IState, any, any, any>(reducer, initialState, composeEnhancers(applyMiddleware(thunk, logger)))

export default store