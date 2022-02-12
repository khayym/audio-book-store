import { configureStore } from '@reduxjs/toolkit'
import allBooksSlice from './features/allBooks/allbooksSlice'
import modalReducer from './features/modal/modalSlice'


export const store = configureStore({
    reducer: {
        opener: modalReducer,
        setAllBooks: allBooksSlice,
    },
})