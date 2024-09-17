import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
    user: [],
};

// Create the cart slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            // state.user = action.payload;
            state.user.push(action.payload);
        },
    },
});


export const { setUser } = userSlice.actions;
export default userSlice.reducer;