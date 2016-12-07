/**
 * Created by Spaider on 27.11.2016.
 */
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        rootReducer,
        {},
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}