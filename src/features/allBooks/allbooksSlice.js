import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    data: [],
    loading: false,
    error: ""
}

export const fetchBooks = createAsyncThunk('fetchBooks', async (limit) => {
    const response = await axios.get(`https://abuk.com.ua/api/web/books?order=uploads_count%20desc&limit=${limit}`);
    return response.data.books;
})

const allBooksSlice = createSlice({

    name: "allBooks",
    initialState,
    reducer: {},
    extraReducers: (bulider) => {
        bulider.addCase(fetchBooks.pending, (state, action) => {
            state.loading = true;
            state.error = "";
        });

        bulider.addCase(fetchBooks.fulfilled, (state, action) => {
            state.data = action.payload;
            // state.data = action.payload;
            state.loading = false;
        })

        bulider.addCase(fetchBooks.rejected, (state, action) => {
            state.error = 'Error fetchin allbooks';
            state.loading = false;
        })
    }
});

export default allBooksSlice.reducer