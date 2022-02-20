import { configureStore } from '@reduxjs/toolkit'
import allBooksSlice from './features/allBooks/allbooksSlice'
import audioSlice from './features/audio/audioSlice'
import bookSlice from './features/book/bookSlice'
import genresFetchingReduser from './features/dropDown/genresSlice'
import genreSlice from './features/genre/genreSlice'
import bookDataFecthing from './features/home/homeSlice'
import modalReducer from './features/modal/modalSlice'


export const store = configureStore({
    reducer: {
        opener: modalReducer,
        allbooks: allBooksSlice,
        book: bookSlice,
        genres: genresFetchingReduser,
        home: bookDataFecthing,
        audio: audioSlice,
        getBookByGenre: genreSlice,
    },
})