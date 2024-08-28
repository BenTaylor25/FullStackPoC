import { configureStore } from "@reduxjs/toolkit";

import sharedTextReducer from "./sharedTextSlice.ts";

const store = configureStore({
    reducer: {
        sharedText: sharedTextReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
