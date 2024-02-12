import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';

import rootSaga from "./saga";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();



const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;