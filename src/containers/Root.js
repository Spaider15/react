/**
 * Created by Spaider on 27.11.2016.
 */
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import App from './App'

const store = configureStore();

export default () => {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
}