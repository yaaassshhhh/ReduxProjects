import {configureStore} from '@reduxjs/toolkit';

import {productsApi} from './service/apiData';
//setupListeners is used for caching
import { setupListeners } from '@reduxjs/toolkit/query';

//the syntax inside will be different a little since we are not just working with the "Redux Toolkit" here but also "RTK QUERY"
export const store = configureStore({
    reducer : {
        [productsApi.reducerPath] : productsApi.reducer,
    },
    //the following middleware is used for caching
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch);

//now we will use this endpoint in our react components to fetch data from the api
