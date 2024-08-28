import { configureStore } from "@reduxjs/toolkit";

import sharedTextReducer from "./sharedTextSlice";

const store = configureStore({
    reducer: {
        sharedText: sharedTextReducer
    }
});

export default store;
