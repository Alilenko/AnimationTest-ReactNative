import {configureStore} from '@reduxjs/toolkit'
import ReduxThunk from 'redux-thunk'
import tab from './TabSlice'

export const store = configureStore({
    reducer: {tab},
    middleware: [ReduxThunk],
    devTools: process.env.NODE_ENV !== 'production'
})

