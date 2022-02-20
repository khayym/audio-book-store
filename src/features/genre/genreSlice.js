import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    loading: false,
    genreName: '',
    error: ""
}

export const fetchBooksByGenre = createAsyncThunk('fetchBooksByGenre', async ({ limit, id }) => {
    const response = await axios.get(`https://abuk.com.ua/api/web/books?order=created_at%20desc&genre_${id}&limit=${limit}`);
    return response.data;
})

const genreSlice = createSlice({
    name: "getBookByGenre",
    initialState,
    reducer: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchBooksByGenre.pending, (state, action) => {
            state.loading = true;
            state.error = "";
            state.genreName = "";

        });

        bulider.addCase(fetchBooksByGenre.fulfilled, (state, action) => {
            state.data = action.payload.books;
            state.loading = false;
            state.genreName = action.payload.genre.name;

        })

        bulider.addCase(fetchBooksByGenre.rejected, (state, action) => {
            state.error = 'Error fetchin allbooks';
            state.loading = false;
            state.genreName = "";
        })
    }
});

export default genreSlice.reducer