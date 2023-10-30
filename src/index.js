import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import CoreLayout from './common/layouts/CoreLayout'
import './styles/_main.scss'

import { Provider } from 'react-redux'
import store from './store'

require('dotenv').config()

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <CoreLayout>
                <Routes />
            </CoreLayout>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
)
