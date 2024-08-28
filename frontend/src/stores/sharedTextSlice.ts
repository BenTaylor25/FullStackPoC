import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const sharedTextSlice = createSlice({
    name: 'sharedText',
    initialState: { value: 'shared' },
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export default sharedTextSlice.reducer;

export const { setText } = sharedTextSlice.actions;
