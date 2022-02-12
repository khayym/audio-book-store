import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    allBooks: []
}

export const allBooksSlice = createSlice({
    name: 'allBooks',
    initialState,
    redusers: {
        setAllBooks: (state) => {
            return { ...state }
        }
    }
})

export const { setAllBooks } = allBooksSlice.actions

export default allBooksSlice.reducer