import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    bookData: {},
}

export const bookDataFecthing = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getFetchingBooks: (state, action) => {
            state.bookData = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { getFetchingBooks } = bookDataFecthing.actions

export default bookDataFecthing.reducer