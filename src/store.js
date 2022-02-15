import { configureStore } from '@reduxjs/toolkit'
import allBooksSlice from './features/allBooks/allbooksSlice'
import bookSlice from './features/book/bookSlice'
import genresFetchingReduser from './features/dropDown/genresSlice'
import bookDataFecthing from './features/home/homeSlice'
import modalReducer from './features/modal/modalSlice'


export const store = configureStore({
    reducer: {
        opener: modalReducer,
        allbooks: allBooksSlice,
        book: bookSlice,
        genres: genresFetchingReduser,
        home: bookDataFecthing,
    },
})