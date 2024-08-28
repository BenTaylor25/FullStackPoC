import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SharedTextState {
    text: string;
}

const initialState: SharedTextState = {
    text: 'shared'
}

const sharedTextSlice = createSlice({
    name: 'sharedText',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        }
    }
});

export default sharedTextSlice.reducer;

export const { setText } = sharedTextSlice.actions;
