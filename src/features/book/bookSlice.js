import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookData: [],
}

export const bookSlice = createSlice({
    name: 'bookData',
    initialState,
    reducers: {
        setData: (state, action) => state.bookData = action.payload
    },
})

// Action creators are generated for each case reducer function
export const { setData } = bookSlice.actions

export default bookSlice.reducer