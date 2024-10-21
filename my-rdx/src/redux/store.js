import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
//below it is shown how Store is created in redux toolkit
export const store = configureStore({
    reducer: {
        counter : counterReducer,
    }
})